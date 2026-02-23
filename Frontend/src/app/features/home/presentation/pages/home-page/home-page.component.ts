import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BadgeModule } from 'primeng/badge';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SkeletonModule } from 'primeng/skeleton';

import { Product, ProductCategory } from '../../../../product/data/models/product-response.model';
import { HomeLogicService } from '../../../domain/services/home-logic.service';
import { HomeStateService } from '../../state/home-state.service';
import { ToastService } from '../../../../../core/service/toast.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    BadgeModule,
    ToggleSwitchModule,
    SkeletonModule,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  private readonly logic = inject(HomeLogicService);
  readonly cartState = inject(HomeStateService);
  private readonly toast = inject(ToastService);

  /* ── State ── */
  allProducts = signal<Product[]>([]);
  loading = signal(true);
  searchQuery = signal('');
  selectedCategory = signal<ProductCategory | 'All'>('All');
  isVegOnly = signal(false);
  selectedProduct = signal<Product | null>(null);
  isModalOpen = signal(false);
  modalQuantity = signal(1);

  categories: (ProductCategory | 'All')[] = ['All', 'Pizza', 'Burger', 'Beverages', 'Desserts', 'Sides'];

  /* ── Computed ── */
  filteredProducts = computed(() => {
    let items = this.allProducts();
    const query = this.searchQuery().toLowerCase().trim();
    const category = this.selectedCategory();
    const vegOnly = this.isVegOnly();

    if (category !== 'All') {
      items = items.filter((p) => p.category === category);
    }
    if (vegOnly) {
      items = items.filter((p) => p.isVeg);
    }
    if (query) {
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }
    return items;
  });

  /** Max qty the user can select in the modal (stock minus already in cart) */
  maxQuantity = computed(() => {
    const p = this.selectedProduct();
    if (!p) return 0;
    return p.stockQuantity - this.cartState.getQuantityInCart(p.id);
  });

  /** Computed total for the modal "Add to Cart — ₹X" button */
  modalTotal = computed(() => {
    const p = this.selectedProduct();
    return p ? this.modalQuantity() * p.price : 0;
  });

  /* ── Lifecycle ── */
  ngOnInit(): void {
    this.loadProducts();
  }

  private async loadProducts(): Promise<void> {
    this.loading.set(true);
    const data = await this.logic.getAvailableProducts();
    this.allProducts.set(data);
    this.loading.set(false);
  }

  /* ── Filter helpers ── */
  setCategory(cat: ProductCategory | 'All'): void {
    this.selectedCategory.set(cat);
  }

  onSearchInput(value: string): void {
    this.searchQuery.set(value);
  }

  onVegToggle(value: boolean): void {
    this.isVegOnly.set(value);
  }

  /* ── Modal ── */
  openProductModal(product: Product): void {
    if (product.stockQuantity === 0) return;
    this.selectedProduct.set(product);
    this.modalQuantity.set(1);
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.selectedProduct.set(null);
    this.modalQuantity.set(1);
  }

  incrementQty(): void {
    if (this.modalQuantity() < this.maxQuantity()) {
      this.modalQuantity.update((q) => q + 1);
    }
  }

  decrementQty(): void {
    if (this.modalQuantity() > 1) {
      this.modalQuantity.update((q) => q - 1);
    }
  }

  addToCart(): void {
    const product = this.selectedProduct();
    if (!product) return;
    try {
      this.cartState.addToCart(product, this.modalQuantity());
      this.toast.success(`${product.name} added to cart!`);
      this.closeModal();
    } catch (e: unknown) {
      this.toast.error(e instanceof Error ? e.message : 'Could not add to cart.');
    }
  }
}
