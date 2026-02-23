import {
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-O557UGG4.js";

// src/app/features/home/presentation/state/home-state.service.ts
var HomeStateService = class _HomeStateService {
  /** Internal cart items list */
  cartItems = signal([], ...ngDevMode ? [{ debugName: "cartItems" }] : []);
  /** Total quantity of items in the cart */
  cartCount = computed(() => this.cartItems().reduce((sum, item) => sum + item.quantity, 0), ...ngDevMode ? [{ debugName: "cartCount" }] : []);
  /** Total price of all items in the cart */
  cartTotal = computed(() => this.cartItems().reduce((sum, item) => sum + item.totalPrice, 0), ...ngDevMode ? [{ debugName: "cartTotal" }] : []);
  /**
   * Add a product to the cart (or increase qty if already present).
   * Throws if requested qty exceeds available stock.
   */
  addToCart(product, quantity) {
    const existing = this.cartItems().find((i) => i.product.id === product.id);
    const currentQty = existing ? existing.quantity : 0;
    const newQty = currentQty + quantity;
    if (newQty > product.stockQuantity) {
      throw new Error(`Cannot add ${quantity} \u2014 only ${product.stockQuantity - currentQty} left in stock.`);
    }
    if (existing) {
      this.cartItems.update((items) => items.map((i) => i.product.id === product.id ? __spreadProps(__spreadValues({}, i), { quantity: newQty, totalPrice: newQty * i.product.price }) : i));
    } else {
      this.cartItems.update((items) => [
        ...items,
        { product, quantity, totalPrice: quantity * product.price }
      ]);
    }
  }
  /**
   * Set the quantity for an item already in the cart.
   * If newQuantity is 0, the item is removed.
   */
  updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
      this.cartItems.update((items) => items.filter((i) => i.product.id !== productId));
      return;
    }
    const item = this.cartItems().find((i) => i.product.id === productId);
    if (!item)
      return;
    if (newQuantity > item.product.stockQuantity) {
      throw new Error(`Cannot exceed stock limit (${item.product.stockQuantity}).`);
    }
    this.cartItems.update((items) => items.map((i) => i.product.id === productId ? __spreadProps(__spreadValues({}, i), { quantity: newQuantity, totalPrice: newQuantity * i.product.price }) : i));
  }
  /** Returns the current quantity of a specific product in the cart. */
  getQuantityInCart(productId) {
    return this.cartItems().find((i) => i.product.id === productId)?.quantity ?? 0;
  }
  /** Remove a specific item from the cart by product ID. */
  removeFromCart(productId) {
    this.cartItems.update((items) => items.filter((i) => i.product.id !== productId));
  }
  /** Clear all items from the cart. */
  clearCart() {
    this.cartItems.set([]);
  }
  static \u0275fac = function HomeStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeStateService, factory: _HomeStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeStateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  HomeStateService
};
//# sourceMappingURL=chunk-3KBMGJUG.js.map
