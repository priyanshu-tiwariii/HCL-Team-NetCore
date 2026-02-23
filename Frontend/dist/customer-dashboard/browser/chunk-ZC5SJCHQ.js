import {
  HomeStateService
} from "./chunk-3KBMGJUG.js";
import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-6PJGY6UI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel
} from "./chunk-QDIVF7GO.js";
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
  BadgeModule,
  ButtonModule,
  CommonModule,
  DecimalPipe
} from "./chunk-FV6RVCBT.js";
import {
  Component,
  Injectable,
  __async,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O557UGG4.js";

// src/app/features/home/domain/services/home-logic.service.ts
var HomeLogicService = class _HomeLogicService {
  products = [
    {
      id: "PRD-1001",
      name: "Margherita Pizza",
      description: "Classic tomato base with mozzarella, fresh basil, and a drizzle of olive oil.",
      category: "Pizza",
      price: 249,
      stockQuantity: 25,
      isVeg: true,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=480&h=320&fit=crop"
    },
    {
      id: "PRD-1002",
      name: "Chicken Burger",
      description: "Crispy fried chicken patty with lettuce, pickles, and signature sauce.",
      category: "Burger",
      price: 199,
      stockQuantity: 18,
      isVeg: false,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=480&h=320&fit=crop"
    },
    {
      id: "PRD-1003",
      name: "Paneer Tikka Pizza",
      description: "Tandoori paneer cubes with bell peppers, onion, and mint mayo.",
      category: "Pizza",
      price: 349,
      stockQuantity: 12,
      isVeg: true,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=480&h=320&fit=crop"
    },
    {
      id: "PRD-1004",
      name: "Mango Lassi",
      description: "Chilled creamy mango yogurt smoothie, sweetened to perfection.",
      category: "Beverages",
      price: 99,
      stockQuantity: 40,
      isVeg: true,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=480&h=320&fit=crop"
    },
    {
      id: "PRD-1005",
      name: "Chocolate Lava Cake",
      description: "Warm, gooey chocolate cake with a molten center, served with ice cream.",
      category: "Desserts",
      price: 179,
      stockQuantity: 0,
      isVeg: true,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=480&h=320&fit=crop"
    },
    {
      id: "PRD-1006",
      name: "BBQ Chicken Wings",
      description: "Smoky barbecue glazed chicken wings with ranch dip.",
      category: "Sides",
      price: 229,
      stockQuantity: 8,
      isVeg: false,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1608039829572-97814e65fd42?w=480&h=320&fit=crop"
    },
    {
      id: "PRD-1007",
      name: "Cold Coffee",
      description: "Iced coffee blended with milk, cream, and a hint of vanilla.",
      category: "Beverages",
      price: 129,
      stockQuantity: 3,
      isVeg: true,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=480&h=320&fit=crop"
    },
    {
      id: "PRD-1008",
      name: "Classic Veg Burger",
      description: "Crispy aloo-tikki patty with fresh veggies and tangy mayo.",
      category: "Burger",
      price: 149,
      stockQuantity: 20,
      isVeg: true,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=480&h=320&fit=crop"
    },
    {
      id: "PRD-1009",
      name: "Garlic Breadsticks",
      description: "Warm, buttery garlic breadsticks with marinara dipping sauce.",
      category: "Sides",
      price: 119,
      stockQuantity: 0,
      isVeg: true,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=480&h=320&fit=crop"
    },
    {
      id: "PRD-1010",
      name: "Pepperoni Pizza",
      description: "Loaded with spicy pepperoni slices, mozzarella, and oregano.",
      category: "Pizza",
      price: 329,
      stockQuantity: 15,
      isVeg: false,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=480&h=320&fit=crop"
    }
  ];
  /** Returns all active storefront products after a simulated delay. */
  getAvailableProducts() {
    return new Promise((resolve) => setTimeout(() => resolve(this.products.filter((p) => p.isActive)), 500));
  }
  static \u0275fac = function HomeLogicService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeLogicService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeLogicService, factory: _HomeLogicService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeLogicService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/home/presentation/pages/home-page/home-page.component.ts
var _c0 = () => ({ width: "480px" });
var _c1 = () => ({ padding: "0" });
var _c2 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _forTrack0 = ($index, $item) => $item.id;
function HomePageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 19);
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(5, 2, ctx_r0.cartState.cartTotal()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.cartState.cartCount(), " ");
  }
}
function HomePageComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function HomePageComponent_For_15_Template_button_click_0_listener() {
      const cat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setCategory(cat_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.selectedCategory() === cat_r3 ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r3, " ");
  }
}
function HomePageComponent_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "p-skeleton", 25);
    \u0275\u0275elementStart(2, "div", 26)(3, "div", 27);
    \u0275\u0275element(4, "p-skeleton", 28)(5, "p-skeleton", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "p-skeleton", 30)(7, "p-skeleton", 31);
    \u0275\u0275elementStart(8, "div", 32);
    \u0275\u0275element(9, "p-skeleton", 33)(10, "p-skeleton", 34);
    \u0275\u0275elementEnd()()();
  }
}
function HomePageComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, HomePageComponent_Conditional_21_For_2_Template, 11, 0, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c2));
  }
}
function HomePageComponent_Conditional_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementStart(2, "p", 37);
    \u0275\u0275text(3, "No items match your filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 38);
    \u0275\u0275text(5, "Try a different search or category");
    \u0275\u0275elementEnd()();
  }
}
function HomePageComponent_Conditional_22_Conditional_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 54);
    \u0275\u0275text(2, " Sold Out ");
    \u0275\u0275elementEnd()();
  }
}
function HomePageComponent_Conditional_22_Conditional_1_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275text(1, " Sold Out ");
    \u0275\u0275elementEnd();
  }
}
function HomePageComponent_Conditional_22_Conditional_1_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function HomePageComponent_Conditional_22_Conditional_1_For_2_Conditional_19_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const product_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.openProductModal(product_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275text(2, "Add ");
    \u0275\u0275elementEnd();
  }
}
function HomePageComponent_Conditional_22_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function HomePageComponent_Conditional_22_Conditional_1_For_2_Template_div_click_0_listener() {
      const product_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openProductModal(product_r5));
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275element(2, "img", 42);
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275element(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, HomePageComponent_Conditional_22_Conditional_1_For_2_Conditional_6_Template, 3, 0, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 46)(8, "div", 47)(9, "h3", 48);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 49);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 50);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 27)(16, "span", 51);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, HomePageComponent_Conditional_22_Conditional_1_For_2_Conditional_18_Template, 2, 0, "button", 52)(19, HomePageComponent_Conditional_22_Conditional_1_For_2_Conditional_19_Template, 3, 0, "button", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    \u0275\u0275classProp("cursor-pointer", product_r5.stockQuantity > 0)("cursor-default", product_r5.stockQuantity === 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-50", product_r5.stockQuantity === 0)("grayscale", product_r5.stockQuantity === 0);
    \u0275\u0275property("src", product_r5.imageUrl, \u0275\u0275sanitizeUrl)("alt", product_r5.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(product_r5.isVeg ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700");
    \u0275\u0275advance();
    \u0275\u0275classMap(product_r5.isVeg ? "bg-green-500" : "bg-red-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r5.isVeg ? "Veg" : "Non-Veg", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(product_r5.stockQuantity === 0 ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", product_r5.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", product_r5.price);
    \u0275\u0275advance();
    \u0275\u0275conditional(product_r5.stockQuantity === 0 ? 18 : 19);
  }
}
function HomePageComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, HomePageComponent_Conditional_22_Conditional_1_For_2_Template, 20, 21, "div", 39, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredProducts());
  }
}
function HomePageComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HomePageComponent_Conditional_22_Conditional_0_Template, 6, 0, "div", 35)(1, HomePageComponent_Conditional_22_Conditional_1_Template, 3, 0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.filteredProducts().length === 0 ? 0 : 1);
  }
}
function HomePageComponent_Conditional_24_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Only ", ctx_r0.maxQuantity(), " left \u2014 hurry! ");
  }
}
function HomePageComponent_Conditional_24_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Already at max stock ");
  }
}
function HomePageComponent_Conditional_24_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Add to Cart \u2014 \u20B9", \u0275\u0275pipeBind1(1, 1, ctx_r0.modalTotal()), " ");
  }
}
function HomePageComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "img", 58);
    \u0275\u0275elementStart(2, "span", 59);
    \u0275\u0275element(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 60);
    \u0275\u0275listener("click", function HomePageComponent_Conditional_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275element(6, "i", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 62)(8, "div", 63)(9, "h2", 64);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 65);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 66);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 67)(16, "span", 68);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 69);
    \u0275\u0275element(19, "i", 70);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 71)(22, "button", 72);
    \u0275\u0275listener("click", function HomePageComponent_Conditional_24_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.decrementQty());
    });
    \u0275\u0275element(23, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 74);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 72);
    \u0275\u0275listener("click", function HomePageComponent_Conditional_24_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.incrementQty());
    });
    \u0275\u0275element(27, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, HomePageComponent_Conditional_24_Conditional_28_Template, 3, 1, "p", 76);
    \u0275\u0275elementStart(29, "button", 77);
    \u0275\u0275listener("click", function HomePageComponent_Conditional_24_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addToCart());
    });
    \u0275\u0275element(30, "i", 78);
    \u0275\u0275conditionalCreate(31, HomePageComponent_Conditional_24_Conditional_31_Template, 1, 0)(32, HomePageComponent_Conditional_24_Conditional_32_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r8 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", p_r8.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r8.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(p_r8.isVeg ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700");
    \u0275\u0275advance();
    \u0275\u0275classMap(p_r8.isVeg ? "bg-green-500" : "bg-red-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r8.isVeg ? "Veg" : "Non-Veg", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r8.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r8.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", p_r8.price);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r8.stockQuantity, " in stock ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.modalQuantity() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.modalQuantity());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.modalQuantity() >= ctx_r0.maxQuantity());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.maxQuantity() <= 3 && ctx_r0.maxQuantity() > 0 ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.maxQuantity() === 0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.maxQuantity() === 0 ? 31 : 32);
  }
}
var HomePageComponent = class _HomePageComponent {
  logic = inject(HomeLogicService);
  cartState = inject(HomeStateService);
  toast = inject(ToastService);
  /* ── State ── */
  allProducts = signal([], ...ngDevMode ? [{ debugName: "allProducts" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  selectedCategory = signal("All", ...ngDevMode ? [{ debugName: "selectedCategory" }] : []);
  isVegOnly = signal(false, ...ngDevMode ? [{ debugName: "isVegOnly" }] : []);
  selectedProduct = signal(null, ...ngDevMode ? [{ debugName: "selectedProduct" }] : []);
  isModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isModalOpen" }] : []);
  modalQuantity = signal(1, ...ngDevMode ? [{ debugName: "modalQuantity" }] : []);
  categories = ["All", "Pizza", "Burger", "Beverages", "Desserts", "Sides"];
  /* ── Computed ── */
  filteredProducts = computed(() => {
    let items = this.allProducts();
    const query = this.searchQuery().toLowerCase().trim();
    const category = this.selectedCategory();
    const vegOnly = this.isVegOnly();
    if (category !== "All") {
      items = items.filter((p) => p.category === category);
    }
    if (vegOnly) {
      items = items.filter((p) => p.isVeg);
    }
    if (query) {
      items = items.filter((p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
    }
    return items;
  }, ...ngDevMode ? [{ debugName: "filteredProducts" }] : []);
  /** Max qty the user can select in the modal (stock minus already in cart) */
  maxQuantity = computed(() => {
    const p = this.selectedProduct();
    if (!p)
      return 0;
    return p.stockQuantity - this.cartState.getQuantityInCart(p.id);
  }, ...ngDevMode ? [{ debugName: "maxQuantity" }] : []);
  /** Computed total for the modal "Add to Cart — ₹X" button */
  modalTotal = computed(() => {
    const p = this.selectedProduct();
    return p ? this.modalQuantity() * p.price : 0;
  }, ...ngDevMode ? [{ debugName: "modalTotal" }] : []);
  /* ── Lifecycle ── */
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    return __async(this, null, function* () {
      this.loading.set(true);
      const data = yield this.logic.getAvailableProducts();
      this.allProducts.set(data);
      this.loading.set(false);
    });
  }
  /* ── Filter helpers ── */
  setCategory(cat) {
    this.selectedCategory.set(cat);
  }
  onSearchInput(value) {
    this.searchQuery.set(value);
  }
  onVegToggle(value) {
    this.isVegOnly.set(value);
  }
  /* ── Modal ── */
  openProductModal(product) {
    if (product.stockQuantity === 0)
      return;
    this.selectedProduct.set(product);
    this.modalQuantity.set(1);
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.selectedProduct.set(null);
    this.modalQuantity.set(1);
  }
  incrementQty() {
    if (this.modalQuantity() < this.maxQuantity()) {
      this.modalQuantity.update((q) => q + 1);
    }
  }
  decrementQty() {
    if (this.modalQuantity() > 1) {
      this.modalQuantity.update((q) => q - 1);
    }
  }
  addToCart() {
    const product = this.selectedProduct();
    if (!product)
      return;
    try {
      this.cartState.addToCart(product, this.modalQuantity());
      this.toast.success(`${product.name} added to cart!`);
      this.closeModal();
    } catch (e) {
      this.toast.error(e instanceof Error ? e.message : "Could not add to cart.");
    }
  }
  static \u0275fac = function HomePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePageComponent, selectors: [["app-home-page"]], decls: 25, vars: 16, consts: [[1, "min-h-full", "bg-zinc-50"], [1, "fixed", "bottom-6", "right-6", "z-50"], [1, "px-6", "pt-8", "pb-4"], [1, "text-3xl", "font-bold", "text-zinc-900", "tracking-tight"], [1, "text-sm", "text-zinc-500", "mt-1.5"], [1, "sticky", "top-0", "z-40", "bg-zinc-50/95", "backdrop-blur-sm", "border-b", "border-zinc-200", "px-6", "py-4"], [1, "flex", "flex-col", "gap-4"], [1, "relative", "w-full", "max-w-xl"], [1, "pi", "pi-search", "absolute", "left-3.5", "top-1/2", "-translate-y-1/2", "text-zinc-400", "text-sm"], ["pInputText", "", "type", "text", "placeholder", "Search pizza, burgers, drinks...", 1, "w-full", "pl-10", "pr-4", "py-2.5", "bg-white", "border", "border-zinc-200", "rounded-lg", "text-sm", "text-zinc-900", "placeholder:text-zinc-400", "focus:outline-none", "focus:ring-2", "focus:ring-zinc-300", "transition", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-2", "overflow-x-auto", "pb-0.5", "scrollbar-hide"], [1, "px-4", "py-1.5", "rounded-full", "text-sm", "font-medium", "whitespace-nowrap", "border", "transition-colors", "cursor-pointer", 3, "class"], [1, "flex", "items-center", "gap-2.5", "shrink-0"], [1, "text-xs", "font-medium", "text-zinc-500", "uppercase", "tracking-wide"], [3, "ngModelChange", "ngModel"], [1, "px-6", "py-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], ["styleClass", "product-detail-dialog", 3, "visibleChange", "visible", "modal", "draggable", "resizable", "closable", "showHeader", "contentStyle"], [1, "relative", "flex", "items-center", "gap-2.5", "bg-zinc-900", "text-white", "pl-4", "pr-5", "py-3", "rounded-full", "shadow-lg", "hover:bg-zinc-800", "transition-colors", "cursor-pointer"], [1, "pi", "pi-shopping-cart", "text-base"], [1, "text-sm", "font-semibold"], [1, "absolute", "-top-1.5", "-right-1.5", "flex", "items-center", "justify-center", "w-5", "h-5", "rounded-full", "bg-red-500", "text-[10px]", "font-bold", "text-white"], [1, "px-4", "py-1.5", "rounded-full", "text-sm", "font-medium", "whitespace-nowrap", "border", "transition-colors", "cursor-pointer", 3, "click"], [1, "bg-white", "rounded-2xl", "border", "border-zinc-200", "shadow-sm", "overflow-hidden"], ["height", "12rem", "width", "100%", "borderRadius", "0"], [1, "p-4", "flex", "flex-col", "gap-2.5"], [1, "flex", "items-center", "justify-between"], ["width", "60%", "height", "1rem"], ["width", "3rem", "height", "1.25rem", "borderRadius", "2rem"], ["width", "85%", "height", "0.75rem"], ["width", "55%", "height", "0.75rem"], [1, "flex", "items-center", "justify-between", "mt-2"], ["width", "4rem", "height", "1.25rem"], ["width", "5rem", "height", "2rem", "borderRadius", "0.5rem"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], [1, "pi", "pi-search", "text-4xl", "text-zinc-300", "mb-3"], [1, "text-sm", "font-medium", "text-zinc-500"], [1, "text-xs", "text-zinc-400", "mt-1"], [1, "group", "bg-white", "rounded-2xl", "border", "border-zinc-200", "shadow-sm", "overflow-hidden", "transition-shadow", "hover:shadow-md", 3, "cursor-pointer", "cursor-default"], [1, "group", "bg-white", "rounded-2xl", "border", "border-zinc-200", "shadow-sm", "overflow-hidden", "transition-shadow", "hover:shadow-md", 3, "click"], [1, "relative", "h-48", "overflow-hidden", "bg-zinc-100"], [1, "w-full", "h-full", "object-cover", "transition-transform", "duration-300", "group-hover:scale-105", 3, "src", "alt"], [1, "absolute", "top-3", "left-3", "flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded", "text-[10px]", "font-bold", "uppercase", "tracking-wider"], [1, "w-2", "h-2", "rounded-full"], [1, "absolute", "inset-0", "bg-zinc-900/40", "flex", "items-center", "justify-center"], [1, "p-4"], [1, "flex", "items-start", "justify-between", "gap-2", "mb-1.5"], [1, "text-sm", "font-semibold", "text-zinc-900", "leading-tight", "line-clamp-1"], [1, "shrink-0", "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-semibold", "bg-zinc-100", "text-zinc-500"], [1, "text-xs", "text-zinc-400", "line-clamp-2", "leading-relaxed", "mb-3"], [1, "text-base", "font-bold", "text-zinc-900"], ["disabled", "", 1, "px-3", "py-1.5", "rounded-lg", "text-xs", "font-semibold", "bg-zinc-100", "text-zinc-400", "cursor-not-allowed"], [1, "px-3", "py-1.5", "rounded-lg", "text-xs", "font-semibold", "bg-zinc-900", "text-white", "hover:bg-zinc-800", "transition-colors", "cursor-pointer"], [1, "bg-white", "text-zinc-900", "text-xs", "font-bold", "uppercase", "px-3", "py-1", "rounded-full", "tracking-wide"], [1, "px-3", "py-1.5", "rounded-lg", "text-xs", "font-semibold", "bg-zinc-900", "text-white", "hover:bg-zinc-800", "transition-colors", "cursor-pointer", 3, "click"], [1, "pi", "pi-plus", "text-[10px]", "mr-1"], [1, "relative", "h-56", "bg-zinc-100"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "absolute", "top-3", "left-3", "flex", "items-center", "gap-1", "px-2.5", "py-1", "rounded", "text-[11px]", "font-bold", "uppercase", "tracking-wider"], [1, "absolute", "top-3", "right-3", "w-8", "h-8", "rounded-full", "bg-white/90", "backdrop-blur-sm", "flex", "items-center", "justify-center", "text-zinc-700", "hover:bg-white", "shadow-sm", "transition-colors", "cursor-pointer", 3, "click"], [1, "pi", "pi-times", "text-xs"], [1, "p-6"], [1, "flex", "items-start", "justify-between", "gap-3", "mb-2"], [1, "text-lg", "font-bold", "text-zinc-900"], [1, "shrink-0", "px-2.5", "py-0.5", "rounded-full", "text-[10px]", "font-semibold", "bg-zinc-100", "text-zinc-500"], [1, "text-sm", "text-zinc-500", "leading-relaxed", "mb-4"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-2xl", "font-bold", "text-zinc-900"], [1, "text-xs", "text-zinc-400"], [1, "pi", "pi-box", "mr-1"], [1, "flex", "items-center", "justify-center", "gap-4", "mb-6"], [1, "w-10", "h-10", "rounded-full", "flex", "items-center", "justify-center", "border", "border-zinc-300", "text-zinc-700", "hover:bg-zinc-100", "transition", "disabled:opacity-40", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], [1, "pi", "pi-minus", "text-xs"], [1, "text-xl", "font-bold", "text-zinc-900", "min-w-[2.5rem]", "text-center"], [1, "pi", "pi-plus", "text-xs"], [1, "text-center", "text-xs", "text-amber-600", "mb-4"], [1, "w-full", "py-3", "rounded-xl", "bg-zinc-900", "text-white", "font-semibold", "text-sm", "hover:bg-zinc-800", "transition-colors", "flex", "items-center", "justify-center", "gap-2", "cursor-pointer", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "pi", "pi-shopping-cart", "text-sm"], [1, "pi", "pi-exclamation-triangle", "mr-1"]], template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, HomePageComponent_Conditional_1_Template, 8, 4, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "What are you craving today?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Fresh, delicious food delivered to your doorstep");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275elementStart(11, "input", 9);
      \u0275\u0275listener("ngModelChange", function HomePageComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.onSearchInput($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
      \u0275\u0275repeaterCreate(14, HomePageComponent_For_15_Template, 2, 3, "button", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 13)(17, "span", 14);
      \u0275\u0275text(18, "Veg Only");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p-toggleSwitch", 15);
      \u0275\u0275listener("ngModelChange", function HomePageComponent_Template_p_toggleSwitch_ngModelChange_19_listener($event) {
        return ctx.onVegToggle($event);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(20, "div", 16);
      \u0275\u0275conditionalCreate(21, HomePageComponent_Conditional_21_Template, 3, 1, "div", 17)(22, HomePageComponent_Conditional_22_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p-dialog", 18);
      \u0275\u0275listener("visibleChange", function HomePageComponent_Template_p_dialog_visibleChange_23_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275conditionalCreate(24, HomePageComponent_Conditional_24_Template, 33, 18);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_13_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cartState.cartCount() > 0 ? 1 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.isVegOnly());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 21 : 22);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275property("visible", ctx.isModalOpen())("modal", true)("draggable", false)("resizable", false)("closable", false)("showHeader", false)("contentStyle", \u0275\u0275pureFunction0(15, _c1));
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_13_0 = ctx.selectedProduct()) ? 24 : -1, tmp_13_0);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    InputTextModule,
    InputText,
    ButtonModule,
    DialogModule,
    Dialog,
    BadgeModule,
    ToggleSwitchModule,
    ToggleSwitch,
    SkeletonModule,
    Skeleton,
    DecimalPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePageComponent, [{
    type: Component,
    args: [{ selector: "app-home-page", standalone: true, imports: [
      CommonModule,
      FormsModule,
      InputTextModule,
      ButtonModule,
      DialogModule,
      BadgeModule,
      ToggleSwitchModule,
      SkeletonModule
    ], template: `<div class="min-h-full bg-zinc-50">

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 FLOATING CART INDICATOR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (cartState.cartCount() > 0) {
    <div class="fixed bottom-6 right-6 z-50">
      <button
        class="relative flex items-center gap-2.5 bg-zinc-900 text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-zinc-800 transition-colors cursor-pointer"
      >
        <i class="pi pi-shopping-cart text-base"></i>
        <span class="text-sm font-semibold">\u20B9{{ cartState.cartTotal() | number }}</span>
        <span
          class="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-[10px] font-bold text-white"
        >
          {{ cartState.cartCount() }}
        </span>
      </button>
    </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 HERO SECTION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="px-6 pt-8 pb-4">
    <h1 class="text-3xl font-bold text-zinc-900 tracking-tight">What are you craving today?</h1>
    <p class="text-sm text-zinc-500 mt-1.5">Fresh, delicious food delivered to your doorstep</p>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 STICKY FILTER BAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="sticky top-0 z-40 bg-zinc-50/95 backdrop-blur-sm border-b border-zinc-200 px-6 py-4">
    <div class="flex flex-col gap-4">

      <!-- Search -->
      <div class="relative w-full max-w-xl">
        <i class="pi pi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm"></i>
        <input
          pInputText
          type="text"
          placeholder="Search pizza, burgers, drinks..."
          class="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300 transition"
          [ngModel]="searchQuery()"
          (ngModelChange)="onSearchInput($event)"
        />
      </div>

      <!-- Category Pills + Veg Toggle -->
      <div class="flex items-center justify-between gap-4">
        <!-- Category pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
          @for (cat of categories; track cat) {
            <button
              (click)="setCategory(cat)"
              class="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap border transition-colors cursor-pointer"
              [class]="selectedCategory() === cat
                ? 'bg-zinc-900 text-white border-zinc-900'
                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400'"
            >
              {{ cat }}
            </button>
          }
        </div>

        <!-- Veg Only toggle -->
        <div class="flex items-center gap-2.5 shrink-0">
          <span class="text-xs font-medium text-zinc-500 uppercase tracking-wide">Veg Only</span>
          <p-toggleSwitch
            [ngModel]="isVegOnly()"
            (ngModelChange)="onVegToggle($event)"
          ></p-toggleSwitch>
        </div>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 CONTENT AREA \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="px-6 py-6">

    <!-- \u2500\u2500 SKELETON LOADING \u2500\u2500 -->
    @if (loading()) {
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        @for (i of [1,2,3,4,5,6,7,8]; track i) {
          <div class="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
            <p-skeleton height="12rem" width="100%" borderRadius="0"></p-skeleton>
            <div class="p-4 flex flex-col gap-2.5">
              <div class="flex items-center justify-between">
                <p-skeleton width="60%" height="1rem"></p-skeleton>
                <p-skeleton width="3rem" height="1.25rem" borderRadius="2rem"></p-skeleton>
              </div>
              <p-skeleton width="85%" height="0.75rem"></p-skeleton>
              <p-skeleton width="55%" height="0.75rem"></p-skeleton>
              <div class="flex items-center justify-between mt-2">
                <p-skeleton width="4rem" height="1.25rem"></p-skeleton>
                <p-skeleton width="5rem" height="2rem" borderRadius="0.5rem"></p-skeleton>
              </div>
            </div>
          </div>
        }
      </div>

    } @else {

      <!-- \u2500\u2500 EMPTY STATE \u2500\u2500 -->
      @if (filteredProducts().length === 0) {
        <div class="flex flex-col items-center justify-center py-20 text-center">
          <i class="pi pi-search text-4xl text-zinc-300 mb-3"></i>
          <p class="text-sm font-medium text-zinc-500">No items match your filters</p>
          <p class="text-xs text-zinc-400 mt-1">Try a different search or category</p>
        </div>

      } @else {

        <!-- \u2500\u2500 PRODUCT GRID \u2500\u2500 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          @for (product of filteredProducts(); track product.id) {
            <div
              class="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden transition-shadow hover:shadow-md"
              [class.cursor-pointer]="product.stockQuantity > 0"
              [class.cursor-default]="product.stockQuantity === 0"
              (click)="openProductModal(product)"
            >

              <!-- Image -->
              <div class="relative h-48 overflow-hidden bg-zinc-100">
                <img
                  [src]="product.imageUrl"
                  [alt]="product.name"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  [class.opacity-50]="product.stockQuantity === 0"
                  [class.grayscale]="product.stockQuantity === 0"
                />
                <!-- Veg / Non-veg badge -->
                <span
                  class="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                  [class]="product.isVeg
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'"
                >
                  <span
                    class="w-2 h-2 rounded-full"
                    [class]="product.isVeg ? 'bg-green-500' : 'bg-red-500'"
                  ></span>
                  {{ product.isVeg ? 'Veg' : 'Non-Veg' }}
                </span>
                <!-- Sold-out overlay -->
                @if (product.stockQuantity === 0) {
                  <div class="absolute inset-0 bg-zinc-900/40 flex items-center justify-center">
                    <span class="bg-white text-zinc-900 text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wide">
                      Sold Out
                    </span>
                  </div>
                }
              </div>

              <!-- Details -->
              <div class="p-4">
                <div class="flex items-start justify-between gap-2 mb-1.5">
                  <h3 class="text-sm font-semibold text-zinc-900 leading-tight line-clamp-1">{{ product.name }}</h3>
                  <span class="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-100 text-zinc-500">
                    {{ product.category }}
                  </span>
                </div>
                <p class="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-3">{{ product.description }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-base font-bold text-zinc-900">\u20B9{{ product.price }}</span>
                  @if (product.stockQuantity === 0) {
                    <button
                      disabled
                      class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 text-zinc-400 cursor-not-allowed"
                    >
                      Sold Out
                    </button>
                  } @else {
                    <button
                      class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                      (click)="openProductModal(product); $event.stopPropagation()"
                    >
                      <i class="pi pi-plus text-[10px] mr-1"></i>Add
                    </button>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      }
    }
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PRODUCT DETAIL MODAL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <p-dialog
    [visible]="isModalOpen()"
    (visibleChange)="closeModal()"
    [modal]="true"
    [draggable]="false"
    [resizable]="false"
    [closable]="false"
    [showHeader]="false"
    [style]="{ width: '480px' }"
    [contentStyle]="{ padding: '0' }"
    styleClass="product-detail-dialog"
  >
    @if (selectedProduct(); as p) {
      <!-- Image with overlaid close button -->
      <div class="relative h-56 bg-zinc-100">
        <img
          [src]="p.imageUrl"
          [alt]="p.name"
          class="w-full h-full object-cover"
        />
        <!-- Veg badge -->
        <span
          class="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider"
          [class]="p.isVeg ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
        >
          <span class="w-2 h-2 rounded-full" [class]="p.isVeg ? 'bg-green-500' : 'bg-red-500'"></span>
          {{ p.isVeg ? 'Veg' : 'Non-Veg' }}
        </span>
        <!-- Close button overlaid on image -->
        <button
          class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-zinc-700 hover:bg-white shadow-sm transition-colors cursor-pointer"
          (click)="closeModal()"
        >
          <i class="pi pi-times text-xs"></i>
        </button>
      </div>

      <!-- Body -->
      <div class="p-6">
        <div class="flex items-start justify-between gap-3 mb-2">
          <h2 class="text-lg font-bold text-zinc-900">{{ p.name }}</h2>
          <span class="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-100 text-zinc-500">
            {{ p.category }}
          </span>
        </div>
        <p class="text-sm text-zinc-500 leading-relaxed mb-4">{{ p.description }}</p>

        <!-- Price + Stock info -->
        <div class="flex items-center justify-between mb-6">
          <span class="text-2xl font-bold text-zinc-900">\u20B9{{ p.price }}</span>
          <span class="text-xs text-zinc-400">
            <i class="pi pi-box mr-1"></i>{{ p.stockQuantity }} in stock
          </span>
        </div>

        <!-- Quantity Selector -->
        <div class="flex items-center justify-center gap-4 mb-6">
          <button
            class="w-10 h-10 rounded-full flex items-center justify-center border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            [disabled]="modalQuantity() <= 1"
            (click)="decrementQty()"
          >
            <i class="pi pi-minus text-xs"></i>
          </button>
          <span class="text-xl font-bold text-zinc-900 min-w-[2.5rem] text-center">{{ modalQuantity() }}</span>
          <button
            class="w-10 h-10 rounded-full flex items-center justify-center border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            [disabled]="modalQuantity() >= maxQuantity()"
            (click)="incrementQty()"
          >
            <i class="pi pi-plus text-xs"></i>
          </button>
        </div>

        <!-- Max qty warning -->
        @if (maxQuantity() <= 3 && maxQuantity() > 0) {
          <p class="text-center text-xs text-amber-600 mb-4">
            <i class="pi pi-exclamation-triangle mr-1"></i>Only {{ maxQuantity() }} left \u2014 hurry!
          </p>
        }

        <!-- Add to Cart button -->
        <button
          class="w-full py-3 rounded-xl bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="maxQuantity() === 0"
          (click)="addToCart()"
        >
          <i class="pi pi-shopping-cart text-sm"></i>
          @if (maxQuantity() === 0) {
            Already at max stock
          } @else {
            Add to Cart \u2014 \u20B9{{ modalTotal() | number }}
          }
        </button>
      </div>
    }
  </p-dialog>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePageComponent, { className: "HomePageComponent", filePath: "src/app/features/home/presentation/pages/home-page/home-page.component.ts", lineNumber: 32 });
})();

// src/app/features/home/home.routes.ts
var HOME_ROUTES = [
  {
    path: "",
    component: HomePageComponent
  }
];
export {
  HOME_ROUTES
};
//# sourceMappingURL=chunk-ZC5SJCHQ.js.map
