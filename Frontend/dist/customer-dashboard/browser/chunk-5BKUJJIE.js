import {
  HomeStateService
} from "./chunk-3KBMGJUG.js";
import {
  InputNumberModule
} from "./chunk-4E32XZTA.js";
import "./chunk-SOS4MOQT.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-QDIVF7GO.js";
import {
  Divider,
  DividerModule
} from "./chunk-MYYUVNXX.js";
import {
  Router,
  RouterLink
} from "./chunk-T6KHSKL3.js";
import {
  Dialog,
  DialogModule
} from "./chunk-APV37HDA.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-CYFNVYRF.js";
import {
  ToastService
} from "./chunk-7Y3XCAAA.js";
import {
  ButtonDirective,
  ButtonModule,
  CommonModule,
  DecimalPipe,
  NgClass
} from "./chunk-FV6RVCBT.js";
import {
  Component,
  Injectable,
  __async,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-O557UGG4.js";

// src/app/features/cart/domain/services/cart-logic.service.ts
var CartLogicService = class _CartLogicService {
  /** Simulated saved addresses */
  mockAddresses = [
    {
      id: "addr-1",
      label: "Home",
      fullName: "Rahul Sharma",
      phone: "9876543210",
      addressLine1: "42, Green Valley Apartments",
      addressLine2: "Near City Mall",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500081"
    }
  ];
  /** Get the user's default delivery address */
  getDefaultAddress() {
    return __async(this, null, function* () {
      yield this.delay(400);
      return __spreadValues({}, this.mockAddresses[0]);
    });
  }
  /** Save / update a delivery address */
  updateAddress(address) {
    return __async(this, null, function* () {
      yield this.delay(500);
      const idx = this.mockAddresses.findIndex((a) => a.id === address.id);
      if (idx >= 0) {
        this.mockAddresses[idx] = __spreadValues({}, address);
      } else {
        this.mockAddresses.push(__spreadValues({}, address));
      }
      return __spreadValues({}, address);
    });
  }
  /** Place an order (mock) */
  placeOrder() {
    return __async(this, null, function* () {
      yield this.delay(1200);
      const orderId = `ORD-${Date.now().toString(36).toUpperCase()}`;
      return { orderId, estimatedDelivery: "30\u201340 min" };
    });
  }
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static \u0275fac = function CartLogicService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartLogicService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartLogicService, factory: _CartLogicService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartLogicService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/cart/presentation/pages/cart-page/cart-page.component.ts
var _c0 = () => ({ width: "480px" });
var _c1 = () => ({ "576px": "95vw" });
var _forTrack0 = ($index, $item) => $item.product.id;
function CartPageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "h2", 19);
    \u0275\u0275text(3, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 20);
    \u0275\u0275text(5, " Looks like you haven't added anything yet. Head to the menu and start adding delicious items! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 21);
    \u0275\u0275element(7, "i", 22);
    \u0275\u0275text(8, " Browse Menu ");
    \u0275\u0275elementEnd()();
  }
}
function CartPageComponent_Conditional_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "img", 52);
    \u0275\u0275elementStart(2, "div", 53)(3, "div", 54)(4, "div")(5, "div", 55);
    \u0275\u0275element(6, "span", 56);
    \u0275\u0275elementStart(7, "h3", 57);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 58);
    \u0275\u0275listener("click", function CartPageComponent_Conditional_1_For_12_Template_button_click_11_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.removeItem(item_r4.product.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 59)(13, "div", 60)(14, "button", 61);
    \u0275\u0275listener("click", function CartPageComponent_Conditional_1_For_12_Template_button_click_14_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.updateQuantity(item_r4.product.id, item_r4.quantity - 1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 62);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 63);
    \u0275\u0275listener("click", function CartPageComponent_Conditional_1_For_12_Template_button_click_17_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.updateQuantity(item_r4.product.id, item_r4.quantity + 1));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span", 64);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r4.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r4.product.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", item_r4.product.isVeg ? "border-green-600 bg-green-500" : "border-red-600 bg-red-500");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", item_r4.product.price, " each");
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true)("disabled", item_r4.quantity >= item_r4.product.stockQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", item_r4.totalPrice);
  }
}
function CartPageComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "p-skeleton", 65)(2, "p-skeleton", 66)(3, "p-skeleton", 67);
    \u0275\u0275elementEnd();
  }
}
function CartPageComponent_Conditional_1_Conditional_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.currentAddress().addressLine2);
  }
}
function CartPageComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "p", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, CartPageComponent_Conditional_1_Conditional_26_Conditional_5_Template, 2, 1, "p");
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 69);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.currentAddress().fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.currentAddress().addressLine1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.currentAddress().addressLine2 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r4.currentAddress().city, ", ", ctx_r4.currentAddress().state, " \u2014 ", ctx_r4.currentAddress().pincode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4DE} ", ctx_r4.currentAddress().phone);
  }
}
function CartPageComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function CartPageComponent_Conditional_1_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.openAddressModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true);
  }
}
function CartPageComponent_Conditional_1_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-\u20B9", \u0275\u0275pipeBind2(5, 1, ctx_r4.bill().discount, "1.2-2"));
  }
}
function CartPageComponent_Conditional_1_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1, "Please add a delivery address to continue.");
    \u0275\u0275elementEnd();
  }
}
function CartPageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 23)(2, "div", 24);
    \u0275\u0275element(3, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h1", 26);
    \u0275\u0275text(6, "Your Cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 28)(10, "div", 29);
    \u0275\u0275repeaterCreate(11, CartPageComponent_Conditional_1_For_12_Template, 20, 14, "div", 30, _forTrack0);
    \u0275\u0275elementStart(13, "div", 31)(14, "a", 32);
    \u0275\u0275element(15, "i", 33);
    \u0275\u0275text(16, " Continue Shopping ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 34)(18, "div", 35)(19, "div", 36)(20, "div", 37);
    \u0275\u0275element(21, "i", 38);
    \u0275\u0275elementStart(22, "h3", 39);
    \u0275\u0275text(23, "Delivery Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 40);
    \u0275\u0275listener("click", function CartPageComponent_Conditional_1_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openAddressModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, CartPageComponent_Conditional_1_Conditional_25_Template, 4, 0, "div", 41)(26, CartPageComponent_Conditional_1_Conditional_26_Template, 10, 7, "div", 42)(27, CartPageComponent_Conditional_1_Conditional_27_Template, 1, 1, "button", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 35)(29, "div", 44);
    \u0275\u0275element(30, "i", 45);
    \u0275\u0275elementStart(31, "h3", 39);
    \u0275\u0275text(32, "Bill Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 46)(34, "div", 47)(35, "span");
    \u0275\u0275text(36, "Item Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 47)(41, "span");
    \u0275\u0275text(42, "Delivery Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 47)(47, "span");
    \u0275\u0275text(48, "Tax (5%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(52, CartPageComponent_Conditional_1_Conditional_52_Template, 6, 4, "div", 48);
    \u0275\u0275element(53, "p-divider");
    \u0275\u0275elementStart(54, "div", 49)(55, "span");
    \u0275\u0275text(56, "Grand Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "button", 50);
    \u0275\u0275listener("click", function CartPageComponent_Conditional_1_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.placeOrder());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(61, CartPageComponent_Conditional_1_Conditional_61_Template, 2, 0, "p", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", ctx_r4.cartCount(), " item", ctx_r4.cartCount() > 1 ? "s" : "", " in your cart");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r4.cartItems());
    \u0275\u0275advance(13);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.isLoadingAddress() ? 25 : ctx_r4.currentAddress() ? 26 : 27);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(39, 13, ctx_r4.bill().itemTotal, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(45, 16, ctx_r4.bill().deliveryFee, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(51, 19, ctx_r4.bill().taxAmount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.bill().discount > 0 ? 52 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(59, 22, ctx_r4.bill().grandTotal, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r4.isPlacingOrder())("disabled", ctx_r4.isPlacingOrder() || !ctx_r4.currentAddress());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r4.currentAddress() && !ctx_r4.isLoadingAddress() ? 61 : -1);
  }
}
function CartPageComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "div", 73);
    \u0275\u0275element(3, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 75);
    \u0275\u0275text(5, "Edit Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 76);
    \u0275\u0275listener("click", function CartPageComponent_ng_template_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.isAddressModalOpen.set(false));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("text", true)("rounded", true);
  }
}
var CartPageComponent = class _CartPageComponent {
  cartState = inject(HomeStateService);
  checkoutService = inject(CartLogicService);
  toast = inject(ToastService);
  router = inject(Router);
  fb = inject(FormBuilder);
  /** Cart items (delegated) */
  cartItems = this.cartState.cartItems;
  cartCount = this.cartState.cartCount;
  cartTotal = this.cartState.cartTotal;
  /** Address state */
  currentAddress = signal(null, ...ngDevMode ? [{ debugName: "currentAddress" }] : []);
  isLoadingAddress = signal(true, ...ngDevMode ? [{ debugName: "isLoadingAddress" }] : []);
  isAddressModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isAddressModalOpen" }] : []);
  /** Checkout state */
  isPlacingOrder = signal(false, ...ngDevMode ? [{ debugName: "isPlacingOrder" }] : []);
  /** Bill summary — computed from cart total */
  bill = computed(() => {
    const itemTotal = this.cartTotal();
    const deliveryFee = itemTotal > 0 ? 40 : 0;
    const taxRate = 0.05;
    const taxAmount = Math.round(itemTotal * taxRate * 100) / 100;
    const discount = 0;
    const grandTotal = itemTotal + deliveryFee + taxAmount - discount;
    return { itemTotal, deliveryFee, taxRate, taxAmount, discount, grandTotal };
  }, ...ngDevMode ? [{ debugName: "bill" }] : []);
  /** Address form */
  addressForm;
  ngOnInit() {
    this.initAddressForm();
    this.loadAddress();
  }
  // ─── Address ──────────────────────────────────────────────
  initAddressForm() {
    this.addressForm = this.fb.group({
      id: [""],
      label: ["Home", Validators.required],
      fullName: ["", Validators.required],
      phone: ["", [Validators.required, Validators.pattern(/^\d{10}$/)]],
      addressLine1: ["", Validators.required],
      addressLine2: [""],
      city: ["", Validators.required],
      state: ["", Validators.required],
      pincode: ["", [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }
  loadAddress() {
    return __async(this, null, function* () {
      try {
        const address = yield this.checkoutService.getDefaultAddress();
        this.currentAddress.set(address);
      } catch {
        this.toast.error("Could not load your address.");
      } finally {
        this.isLoadingAddress.set(false);
      }
    });
  }
  openAddressModal() {
    const addr = this.currentAddress();
    if (addr) {
      this.addressForm.patchValue(addr);
    }
    this.isAddressModalOpen.set(true);
  }
  saveAddress() {
    return __async(this, null, function* () {
      if (this.addressForm.invalid) {
        this.addressForm.markAllAsTouched();
        return;
      }
      try {
        const updated = yield this.checkoutService.updateAddress(this.addressForm.value);
        this.currentAddress.set(updated);
        this.isAddressModalOpen.set(false);
        this.toast.success("Address updated successfully.");
      } catch {
        this.toast.error("Failed to save address.");
      }
    });
  }
  // ─── Cart Actions ─────────────────────────────────────────
  updateQuantity(productId, newQty) {
    try {
      this.cartState.updateQuantity(productId, newQty);
    } catch (e) {
      this.toast.warning(e.message);
    }
  }
  removeItem(productId) {
    this.cartState.removeFromCart(productId);
  }
  // ─── Checkout ─────────────────────────────────────────────
  placeOrder() {
    return __async(this, null, function* () {
      if (!this.currentAddress()) {
        this.toast.warning("Please add a delivery address first.");
        return;
      }
      this.isPlacingOrder.set(true);
      try {
        const result = yield this.checkoutService.placeOrder();
        this.cartState.clearCart();
        this.toast.success(`Order ${result.orderId} placed! Estimated delivery: ${result.estimatedDelivery}`);
        this.router.navigate(["/my-orders"]);
      } catch {
        this.toast.error("Failed to place order. Please try again.");
      } finally {
        this.isPlacingOrder.set(false);
      }
    });
  }
  static \u0275fac = function CartPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartPageComponent, selectors: [["app-cart-page"]], decls: 42, vars: 12, consts: [["header", ""], [1, "flex", "flex-col", "items-center", "justify-center", "py-32", "px-4", "text-center"], [1, "p-6"], [3, "visibleChange", "visible", "modal", "closable", "draggable", "breakpoints"], [1, "space-y-4", "pt-2", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1"], ["pInputText", "", "formControlName", "label", "placeholder", "e.g. Home, Office", 1, "w-full"], [1, "grid", "grid-cols-2", "gap-4"], ["pInputText", "", "formControlName", "fullName", "placeholder", "Full name", 1, "w-full"], ["pInputText", "", "formControlName", "phone", "placeholder", "10-digit number", 1, "w-full"], ["pInputText", "", "formControlName", "addressLine1", "placeholder", "House / Flat / Floor", 1, "w-full"], ["pInputText", "", "formControlName", "addressLine2", "placeholder", "Landmark, Area", 1, "w-full"], [1, "grid", "grid-cols-3", "gap-4"], ["pInputText", "", "formControlName", "city", "placeholder", "City", 1, "w-full"], ["pInputText", "", "formControlName", "state", "placeholder", "State", 1, "w-full"], ["pInputText", "", "formControlName", "pincode", "placeholder", "6 digits", 1, "w-full"], [1, "flex", "justify-end", "pt-2"], ["pButton", "", "type", "submit", "label", "Save Address", "icon", "pi pi-check", 1, "!rounded-xl"], [1, "pi", "pi-shopping-cart", "text-6xl", "text-zinc-300", "mb-6"], [1, "text-2xl", "font-bold", "text-zinc-800", "mb-2"], [1, "text-zinc-500", "mb-8", "max-w-md"], ["routerLink", "/home", 1, "inline-flex", "items-center", "gap-2", "bg-zinc-900", "text-white", "px-6", "py-3", "rounded-xl", "font-semibold", "hover:bg-zinc-800", "transition"], [1, "pi", "pi-arrow-left", "text-sm"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-xl", "bg-zinc-100"], [1, "pi", "pi-shopping-cart", "text-zinc-700", "text-lg"], [1, "text-2xl", "font-bold", "text-zinc-900"], [1, "text-sm", "text-zinc-500"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-4"], [1, "flex", "gap-4", "bg-white!", "rounded-2xl", "border", "border-zinc-200", "p-4", "shadow-sm", "hover:shadow-md", "transition"], [1, "pt-2"], ["routerLink", "/home", 1, "inline-flex", "items-center", "gap-2", "text-sm", "font-medium", "text-zinc-600", "hover:text-zinc-900", "transition"], [1, "pi", "pi-arrow-left", "text-xs"], [1, "space-y-4"], [1, "bg-white!", "rounded-2xl", "border", "border-zinc-200", "p-5", "shadow-sm"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "flex", "items-center", "gap-2"], [1, "pi", "pi-map-marker", "text-zinc-600"], [1, "font-semibold", "text-zinc-900"], ["pButton", "", "icon", "pi pi-pencil", 1, "!w-8", "!h-8", 3, "click", "text", "rounded"], [1, "space-y-2"], [1, "text-sm", "text-zinc-700", "space-y-1"], ["pButton", "", "label", "Add Address", "icon", "pi pi-plus", "severity", "secondary", 1, "w-full", 3, "outlined"], [1, "flex", "items-center", "gap-2", "mb-4"], [1, "pi", "pi-receipt", "text-zinc-600"], [1, "space-y-3", "text-sm"], [1, "flex", "justify-between", "text-zinc-700"], [1, "flex", "justify-between", "text-green-600"], [1, "flex", "justify-between", "font-bold", "text-zinc-900", "text-base"], ["pButton", "", "label", "Place Order", "icon", "pi pi-check", 1, "w-full", "!py-3", "!rounded-xl", "!font-semibold", "!text-base", 3, "click", "loading", "disabled"], [1, "text-xs", "text-red-500", "text-center", "-mt-2"], [1, "w-24", "h-24", "rounded-xl", "object-cover", "flex-shrink-0", 3, "src", "alt"], [1, "flex-1", "min-w-0"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "inline-block", "w-4", "h-4", "rounded-sm", "border", 3, "ngClass"], [1, "font-semibold", "text-zinc-900", "truncate"], ["pButton", "", "severity", "danger", "icon", "pi pi-trash", 1, "flex-shrink-0", 3, "click", "text", "rounded"], [1, "flex", "items-center", "justify-between", "mt-3"], [1, "flex", "items-center", "gap-1"], ["pButton", "", "icon", "pi pi-minus", 1, "!w-8", "!h-8", 3, "click", "text", "rounded"], [1, "w-8", "text-center", "font-semibold", "text-zinc-900"], ["pButton", "", "icon", "pi pi-plus", 1, "!w-8", "!h-8", 3, "click", "text", "rounded", "disabled"], [1, "font-bold", "text-zinc-900", "text-lg"], ["width", "60%", "height", "1rem"], ["width", "100%", "height", "1rem"], ["width", "40%", "height", "1rem"], [1, "font-medium", "text-zinc-900"], [1, "text-zinc-500"], ["pButton", "", "label", "Add Address", "icon", "pi pi-plus", "severity", "secondary", 1, "w-full", 3, "click", "outlined"], [1, "flex", "items-center", "justify-between", "w-full"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "justify-center", "w-9", "h-9", "rounded-lg", "bg-zinc-100"], [1, "pi", "pi-map-marker", "text-zinc-700"], [1, "text-lg", "font-bold", "text-zinc-900"], ["pButton", "", "icon", "pi pi-times", 3, "click", "text", "rounded"]], template: function CartPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275conditionalCreate(0, CartPageComponent_Conditional_0_Template, 9, 0, "div", 1);
      \u0275\u0275conditionalCreate(1, CartPageComponent_Conditional_1_Template, 62, 25, "div", 2);
      \u0275\u0275elementStart(2, "p-dialog", 3);
      \u0275\u0275listener("visibleChange", function CartPageComponent_Template_p_dialog_visibleChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.isAddressModalOpen.set($event));
      });
      \u0275\u0275template(3, CartPageComponent_ng_template_3_Template, 7, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(5, "form", 4);
      \u0275\u0275listener("ngSubmit", function CartPageComponent_Template_form_ngSubmit_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveAddress());
      });
      \u0275\u0275elementStart(6, "div")(7, "label", 5);
      \u0275\u0275text(8, "Address Label");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "div")(12, "label", 5);
      \u0275\u0275text(13, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div")(16, "label", 5);
      \u0275\u0275text(17, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div")(20, "label", 5);
      \u0275\u0275text(21, "Address Line 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "label", 5);
      \u0275\u0275text(25, "Address Line 2 (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 12)(28, "div")(29, "label", 5);
      \u0275\u0275text(30, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div")(33, "label", 5);
      \u0275\u0275text(34, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div")(37, "label", 5);
      \u0275\u0275text(38, "Pincode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 16);
      \u0275\u0275element(41, "button", 17);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.cartCount() === 0 ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cartCount() > 0 ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275property("visible", ctx.isAddressModalOpen())("modal", true)("closable", false)("draggable", false)("breakpoints", \u0275\u0275pureFunction0(11, _c1));
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.addressForm);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    RouterLink,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    ButtonModule,
    ButtonDirective,
    DialogModule,
    Dialog,
    InputTextModule,
    InputText,
    DividerModule,
    Divider,
    SkeletonModule,
    Skeleton,
    InputNumberModule,
    DecimalPipe
  ], styles: ["\n\n/*# sourceMappingURL=cart-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartPageComponent, [{
    type: Component,
    args: [{ selector: "app-cart-page", standalone: true, imports: [
      CommonModule,
      RouterLink,
      ReactiveFormsModule,
      ButtonModule,
      DialogModule,
      InputTextModule,
      DividerModule,
      SkeletonModule,
      InputNumberModule
    ], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     EMPTY CART
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (cartCount() === 0) {
  <div class="flex flex-col items-center justify-center py-32 px-4 text-center">
    <i class="pi pi-shopping-cart text-6xl text-zinc-300 mb-6"></i>
    <h2 class="text-2xl font-bold text-zinc-800 mb-2">Your cart is empty</h2>
    <p class="text-zinc-500 mb-8 max-w-md">
      Looks like you haven't added anything yet. Head to the menu and start adding delicious items!
    </p>
    <a routerLink="/home"
       class="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-zinc-800 transition">
      <i class="pi pi-arrow-left text-sm"></i>
      Browse Menu
    </a>
  </div>
}

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     CART WITH ITEMS \u2014 SPLIT LAYOUT
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (cartCount() > 0) {
  <div class="p-6">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-6">
      <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-100">
        <i class="pi pi-shopping-cart text-zinc-700 text-lg"></i>
      </div>
      <div>
        <h1 class="text-2xl font-bold text-zinc-900">Your Cart</h1>
        <p class="text-sm text-zinc-500">{{ cartCount() }} item{{ cartCount() > 1 ? 's' : '' }} in your cart</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <!-- \u2500\u2500 LEFT: Cart Items \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="lg:col-span-2 space-y-4">
        @for (item of cartItems(); track item.product.id) {
          <div class="flex gap-4 bg-white! rounded-2xl border border-zinc-200 p-4 shadow-sm hover:shadow-md transition">
            <!-- Product Image -->
            <img [src]="item.product.imageUrl"
                 [alt]="item.product.name"
                 class="w-24 h-24 rounded-xl object-cover flex-shrink-0" />

            <!-- Info -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="inline-block w-4 h-4 rounded-sm border"
                          [ngClass]="item.product.isVeg ? 'border-green-600 bg-green-500' : 'border-red-600 bg-red-500'">
                    </span>
                    <h3 class="font-semibold text-zinc-900 truncate">{{ item.product.name }}</h3>
                  </div>
                  <p class="text-sm text-zinc-500">\u20B9{{ item.product.price }} each</p>
                </div>
                <!-- Remove btn -->
                <button pButton
                        [text]="true"
                        [rounded]="true"
                        severity="danger"
                        icon="pi pi-trash"
                        class="flex-shrink-0"
                        (click)="removeItem(item.product.id)">
                </button>
              </div>

              <!-- Quantity & line total -->
              <div class="flex items-center justify-between mt-3">
                <div class="flex items-center gap-1">
                  <button pButton
                          [text]="true"
                          [rounded]="true"
                          icon="pi pi-minus"
                          class="!w-8 !h-8"
                          (click)="updateQuantity(item.product.id, item.quantity - 1)">
                  </button>
                  <span class="w-8 text-center font-semibold text-zinc-900">{{ item.quantity }}</span>
                  <button pButton
                          [text]="true"
                          [rounded]="true"
                          icon="pi pi-plus"
                          class="!w-8 !h-8"
                          [disabled]="item.quantity >= item.product.stockQuantity"
                          (click)="updateQuantity(item.product.id, item.quantity + 1)">
                  </button>
                </div>
                <span class="font-bold text-zinc-900 text-lg">\u20B9{{ item.totalPrice }}</span>
              </div>
            </div>
          </div>
        }

        <!-- Continue shopping link -->
        <div class="pt-2">
          <a routerLink="/home"
             class="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition">
            <i class="pi pi-arrow-left text-xs"></i>
            Continue Shopping
          </a>
        </div>
      </div>

      <!-- \u2500\u2500 RIGHT: Checkout Summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="space-y-4">

        <!-- Delivery Address Card -->
        <div class="bg-white! rounded-2xl border border-zinc-200 p-5 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <i class="pi pi-map-marker text-zinc-600"></i>
              <h3 class="font-semibold text-zinc-900">Delivery Address</h3>
            </div>
            <button pButton
                    [text]="true"
                    [rounded]="true"
                    icon="pi pi-pencil"
                    class="!w-8 !h-8"
                    (click)="openAddressModal()">
            </button>
          </div>

          @if (isLoadingAddress()) {
            <div class="space-y-2">
              <p-skeleton width="60%" height="1rem" />
              <p-skeleton width="100%" height="1rem" />
              <p-skeleton width="40%" height="1rem" />
            </div>
          } @else if (currentAddress()) {
            <div class="text-sm text-zinc-700 space-y-1">
              <p class="font-medium text-zinc-900">{{ currentAddress()!.fullName }}</p>
              <p>{{ currentAddress()!.addressLine1 }}</p>
              @if (currentAddress()!.addressLine2) {
                <p>{{ currentAddress()!.addressLine2 }}</p>
              }
              <p>{{ currentAddress()!.city }}, {{ currentAddress()!.state }} \u2014 {{ currentAddress()!.pincode }}</p>
              <p class="text-zinc-500">\u{1F4DE} {{ currentAddress()!.phone }}</p>
            </div>
          } @else {
            <button pButton
                    label="Add Address"
                    icon="pi pi-plus"
                    severity="secondary"
                    [outlined]="true"
                    class="w-full"
                    (click)="openAddressModal()">
            </button>
          }
        </div>

        <!-- Bill Summary Card -->
        <div class="bg-white! rounded-2xl border border-zinc-200 p-5 shadow-sm">
          <div class="flex items-center gap-2 mb-4">
            <i class="pi pi-receipt text-zinc-600"></i>
            <h3 class="font-semibold text-zinc-900">Bill Summary</h3>
          </div>

          <div class="space-y-3 text-sm">
            <div class="flex justify-between text-zinc-700">
              <span>Item Total</span>
              <span>\u20B9{{ bill().itemTotal | number:'1.2-2' }}</span>
            </div>
            <div class="flex justify-between text-zinc-700">
              <span>Delivery Fee</span>
              <span>\u20B9{{ bill().deliveryFee | number:'1.2-2' }}</span>
            </div>
            <div class="flex justify-between text-zinc-700">
              <span>Tax (5%)</span>
              <span>\u20B9{{ bill().taxAmount | number:'1.2-2' }}</span>
            </div>
            @if (bill().discount > 0) {
              <div class="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-\u20B9{{ bill().discount | number:'1.2-2' }}</span>
              </div>
            }

            <p-divider />

            <div class="flex justify-between font-bold text-zinc-900 text-base">
              <span>Grand Total</span>
              <span>\u20B9{{ bill().grandTotal | number:'1.2-2' }}</span>
            </div>
          </div>
        </div>

        <!-- Place Order Button -->
        <button pButton
                label="Place Order"
                icon="pi pi-check"
                class="w-full !py-3 !rounded-xl !font-semibold !text-base"
                [loading]="isPlacingOrder()"
                [disabled]="isPlacingOrder() || !currentAddress()"
                (click)="placeOrder()">
        </button>

        @if (!currentAddress() && !isLoadingAddress()) {
          <p class="text-xs text-red-500 text-center -mt-2">Please add a delivery address to continue.</p>
        }
      </div>
    </div>
  </div>
}

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     EDIT ADDRESS MODAL
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<p-dialog [visible]="isAddressModalOpen()"
          (visibleChange)="isAddressModalOpen.set($event)"
          [modal]="true"
          [closable]="false"
          [draggable]="false"
          [style]="{ width: '480px' }"
          [breakpoints]="{ '576px': '95vw' }">

  <!-- Custom header -->
  <ng-template #header>
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center gap-3">
        <div class="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-100">
          <i class="pi pi-map-marker text-zinc-700"></i>
        </div>
        <h3 class="text-lg font-bold text-zinc-900">Edit Address</h3>
      </div>
      <button pButton
              [text]="true"
              [rounded]="true"
              icon="pi pi-times"
              (click)="isAddressModalOpen.set(false)">
      </button>
    </div>
  </ng-template>

  <form [formGroup]="addressForm" (ngSubmit)="saveAddress()" class="space-y-4 pt-2">
    <!-- Label -->
    <div>
      <label class="block text-sm font-medium text-zinc-700 mb-1">Address Label</label>
      <input pInputText formControlName="label" placeholder="e.g. Home, Office" class="w-full" />
    </div>

    <!-- Full Name & Phone -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-zinc-700 mb-1">Full Name</label>
        <input pInputText formControlName="fullName" placeholder="Full name" class="w-full" />
      </div>
      <div>
        <label class="block text-sm font-medium text-zinc-700 mb-1">Phone</label>
        <input pInputText formControlName="phone" placeholder="10-digit number" class="w-full" />
      </div>
    </div>

    <!-- Address Line 1 -->
    <div>
      <label class="block text-sm font-medium text-zinc-700 mb-1">Address Line 1</label>
      <input pInputText formControlName="addressLine1" placeholder="House / Flat / Floor" class="w-full" />
    </div>

    <!-- Address Line 2 -->
    <div>
      <label class="block text-sm font-medium text-zinc-700 mb-1">Address Line 2 (Optional)</label>
      <input pInputText formControlName="addressLine2" placeholder="Landmark, Area" class="w-full" />
    </div>

    <!-- City, State, Pincode -->
    <div class="grid grid-cols-3 gap-4">
      <div>
        <label class="block text-sm font-medium text-zinc-700 mb-1">City</label>
        <input pInputText formControlName="city" placeholder="City" class="w-full" />
      </div>
      <div>
        <label class="block text-sm font-medium text-zinc-700 mb-1">State</label>
        <input pInputText formControlName="state" placeholder="State" class="w-full" />
      </div>
      <div>
        <label class="block text-sm font-medium text-zinc-700 mb-1">Pincode</label>
        <input pInputText formControlName="pincode" placeholder="6 digits" class="w-full" />
      </div>
    </div>

    <!-- Save button -->
    <div class="flex justify-end pt-2">
      <button pButton
              type="submit"
              label="Save Address"
              icon="pi pi-check"
              class="!rounded-xl">
      </button>
    </div>
  </form>
</p-dialog>
`, styles: ["/* src/app/features/cart/presentation/pages/cart-page/cart-page.component.css */\n/*# sourceMappingURL=cart-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartPageComponent, { className: "CartPageComponent", filePath: "src/app/features/cart/presentation/pages/cart-page/cart-page.component.ts", lineNumber: 35 });
})();

// src/app/features/cart/cart.routes.ts
var CART_ROUTES = [
  {
    path: "",
    component: CartPageComponent
  }
];
export {
  CART_ROUTES
};
//# sourceMappingURL=chunk-5BKUJJIE.js.map
