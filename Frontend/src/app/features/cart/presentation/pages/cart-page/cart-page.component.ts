import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { SkeletonModule } from 'primeng/skeleton';
import { InputNumberModule } from 'primeng/inputnumber';

import { HomeStateService } from '../../../../home/presentation/state/home-state.service';
import { CartLogicService } from '../../../domain/services/cart-logic.service';
import { ToastService } from '../../../../../core/service/toast.service';
import { BillSummary, DeliveryAddress } from '../../../data/models/cart-response.model';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DividerModule,
    SkeletonModule,
    InputNumberModule,
  ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  private readonly cartState = inject(HomeStateService);
  private readonly checkoutService = inject(CartLogicService);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  /** Cart items (delegated) */
  readonly cartItems = this.cartState.cartItems;
  readonly cartCount = this.cartState.cartCount;
  readonly cartTotal = this.cartState.cartTotal;

  /** Address state */
  readonly currentAddress = signal<DeliveryAddress | null>(null);
  readonly isLoadingAddress = signal(true);
  readonly isAddressModalOpen = signal(false);

  /** Checkout state */
  readonly isPlacingOrder = signal(false);

  /** Bill summary — computed from cart total */
  readonly bill = computed<BillSummary>(() => {
    const itemTotal = this.cartTotal();
    const deliveryFee = itemTotal > 0 ? 40 : 0;
    const taxRate = 0.05;
    const taxAmount = Math.round(itemTotal * taxRate * 100) / 100;
    const discount = 0;
    const grandTotal = itemTotal + deliveryFee + taxAmount - discount;
    return { itemTotal, deliveryFee, taxRate, taxAmount, discount, grandTotal };
  });

  /** Address form */
  addressForm!: FormGroup;

  ngOnInit(): void {
    this.initAddressForm();
    this.loadAddress();
  }

  // ─── Address ──────────────────────────────────────────────

  private initAddressForm(): void {
    this.addressForm = this.fb.group({
      id: [''],
      label: ['Home', Validators.required],
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    });
  }

  private async loadAddress(): Promise<void> {
    try {
      const address = await this.checkoutService.getDefaultAddress();
      this.currentAddress.set(address);
    } catch {
      this.toast.error('Could not load your address.');
    } finally {
      this.isLoadingAddress.set(false);
    }
  }

  openAddressModal(): void {
    const addr = this.currentAddress();
    if (addr) {
      this.addressForm.patchValue(addr);
    }
    this.isAddressModalOpen.set(true);
  }

  async saveAddress(): Promise<void> {
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched();
      return;
    }
    try {
      const updated = await this.checkoutService.updateAddress(this.addressForm.value);
      this.currentAddress.set(updated);
      this.isAddressModalOpen.set(false);
      this.toast.success('Address updated successfully.');
    } catch {
      this.toast.error('Failed to save address.');
    }
  }

  // ─── Cart Actions ─────────────────────────────────────────

  updateQuantity(productId: string, newQty: number): void {
    try {
      this.cartState.updateQuantity(productId, newQty);
    } catch (e: any) {
      this.toast.warning(e.message);
    }
  }

  removeItem(productId: string): void {
    this.cartState.removeFromCart(productId);
  }

  // ─── Checkout ─────────────────────────────────────────────

  async placeOrder(): Promise<void> {
    if (!this.currentAddress()) {
      this.toast.warning('Please add a delivery address first.');
      return;
    }
    this.isPlacingOrder.set(true);
    try {
      const result = await this.checkoutService.placeOrder();
      this.cartState.clearCart();
      this.toast.success(`Order ${result.orderId} placed! Estimated delivery: ${result.estimatedDelivery}`);
      this.router.navigate(['/my-orders']);
    } catch {
      this.toast.error('Failed to place order. Please try again.');
    } finally {
      this.isPlacingOrder.set(false);
    }
  }
}
