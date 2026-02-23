import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../../product/data/models/product-response.model';
import { CartItem } from '../../data/models/home-response.model';

/**
 * Cart State Service — manages the shopping cart using Angular Signals.
 * Provided at root so cart persists across navigation.
 */
@Injectable({ providedIn: 'root' })
export class HomeStateService {
  /** Internal cart items list */
  readonly cartItems = signal<CartItem[]>([]);

  /** Total quantity of items in the cart */
  readonly cartCount = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );

  /** Total price of all items in the cart */
  readonly cartTotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.totalPrice, 0)
  );

  /**
   * Add a product to the cart (or increase qty if already present).
   * Throws if requested qty exceeds available stock.
   */
  addToCart(product: Product, quantity: number): void {
    const existing = this.cartItems().find((i) => i.product.id === product.id);
    const currentQty = existing ? existing.quantity : 0;
    const newQty = currentQty + quantity;

    if (newQty > product.stockQuantity) {
      throw new Error(
        `Cannot add ${quantity} — only ${product.stockQuantity - currentQty} left in stock.`
      );
    }

    if (existing) {
      this.cartItems.update((items) =>
        items.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: newQty, totalPrice: newQty * i.product.price }
            : i
        )
      );
    } else {
      this.cartItems.update((items) => [
        ...items,
        { product, quantity, totalPrice: quantity * product.price },
      ]);
    }
  }

  /**
   * Set the quantity for an item already in the cart.
   * If newQuantity is 0, the item is removed.
   */
  updateQuantity(productId: string, newQuantity: number): void {
    if (newQuantity <= 0) {
      this.cartItems.update((items) => items.filter((i) => i.product.id !== productId));
      return;
    }

    const item = this.cartItems().find((i) => i.product.id === productId);
    if (!item) return;

    if (newQuantity > item.product.stockQuantity) {
      throw new Error(`Cannot exceed stock limit (${item.product.stockQuantity}).`);
    }

    this.cartItems.update((items) =>
      items.map((i) =>
        i.product.id === productId
          ? { ...i, quantity: newQuantity, totalPrice: newQuantity * i.product.price }
          : i
      )
    );
  }

  /** Returns the current quantity of a specific product in the cart. */
  getQuantityInCart(productId: string): number {
    return this.cartItems().find((i) => i.product.id === productId)?.quantity ?? 0;
  }
}
