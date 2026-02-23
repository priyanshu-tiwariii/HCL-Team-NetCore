import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-6PJGY6UI.js";
import {
  Select,
  SelectModule,
  Table,
  TableModule
} from "./chunk-2ZKDK4LG.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-4E32XZTA.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-W7X3ZES4.js";
import "./chunk-SOS4MOQT.js";
import {
  BaseModelHolder,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  InputText,
  InputTextModule,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  Tag,
  TagModule
} from "./chunk-QIHNIG7W.js";
import {
  BaseStyle,
  Bind,
  Button,
  ButtonModule,
  CommonModule,
  DecimalPipe,
  Fluid,
  NgClass,
  PARENT_INSTANCE
} from "./chunk-FV6RVCBT.js";
import {
  Component,
  Directive,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  __async,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O557UGG4.js";

// node_modules/@primeuix/styles/dist/textarea/index.mjs
var style = "\n    .p-textarea {\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: dt('textarea.color');\n        background: dt('textarea.background');\n        padding-block: dt('textarea.padding.y');\n        padding-inline: dt('textarea.padding.x');\n        border: 1px solid dt('textarea.border.color');\n        transition:\n            background dt('textarea.transition.duration'),\n            color dt('textarea.transition.duration'),\n            border-color dt('textarea.transition.duration'),\n            outline-color dt('textarea.transition.duration'),\n            box-shadow dt('textarea.transition.duration');\n        appearance: none;\n        border-radius: dt('textarea.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('textarea.shadow');\n    }\n\n    .p-textarea:enabled:hover {\n        border-color: dt('textarea.hover.border.color');\n    }\n\n    .p-textarea:enabled:focus {\n        border-color: dt('textarea.focus.border.color');\n        box-shadow: dt('textarea.focus.ring.shadow');\n        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');\n        outline-offset: dt('textarea.focus.ring.offset');\n    }\n\n    .p-textarea.p-invalid {\n        border-color: dt('textarea.invalid.border.color');\n    }\n\n    .p-textarea.p-variant-filled {\n        background: dt('textarea.filled.background');\n    }\n\n    .p-textarea.p-variant-filled:enabled:hover {\n        background: dt('textarea.filled.hover.background');\n    }\n\n    .p-textarea.p-variant-filled:enabled:focus {\n        background: dt('textarea.filled.focus.background');\n    }\n\n    .p-textarea:disabled {\n        opacity: 1;\n        background: dt('textarea.disabled.background');\n        color: dt('textarea.disabled.color');\n    }\n\n    .p-textarea::placeholder {\n        color: dt('textarea.placeholder.color');\n    }\n\n    .p-textarea.p-invalid::placeholder {\n        color: dt('textarea.invalid.placeholder.color');\n    }\n\n    .p-textarea-fluid {\n        width: 100%;\n    }\n\n    .p-textarea-resizable {\n        overflow: hidden;\n        resize: none;\n    }\n\n    .p-textarea-sm {\n        font-size: dt('textarea.sm.font.size');\n        padding-block: dt('textarea.sm.padding.y');\n        padding-inline: dt('textarea.sm.padding.x');\n    }\n\n    .p-textarea-lg {\n        font-size: dt('textarea.lg.font.size');\n        padding-block: dt('textarea.lg.padding.y');\n        padding-inline: dt('textarea.lg.padding.x');\n    }\n";

// node_modules/primeng/fesm2022/primeng-textarea.mjs
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-textarea p-component", {
    "p-filled": instance.$filled(),
    "p-textarea-resizable ": instance.autoResize,
    "p-variant-filled": instance.$variant() === "filled",
    "p-textarea-fluid": instance.hasFluid,
    "p-inputfield-sm p-textarea-sm": instance.pSize === "small",
    "p-textarea-lg p-inputfield-lg": instance.pSize === "large",
    "p-invalid": instance.invalid()
  }]
};
var TextareaStyle = class _TextareaStyle extends BaseStyle {
  name = "textarea";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TextareaStyle_BaseFactory;
    return function TextareaStyle_Factory(__ngFactoryType__) {
      return (\u0275TextareaStyle_BaseFactory || (\u0275TextareaStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TextareaStyle)))(__ngFactoryType__ || _TextareaStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TextareaStyle,
    factory: _TextareaStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaStyle, [{
    type: Injectable
  }], null, null);
})();
var TextareaClasses;
(function(TextareaClasses2) {
  TextareaClasses2["root"] = "p-textarea";
})(TextareaClasses || (TextareaClasses = {}));
var TEXTAREA_INSTANCE = new InjectionToken("TEXTAREA_INSTANCE");
var Textarea = class _Textarea extends BaseModelHolder {
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcTextarea = inject(TEXTAREA_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  /**
   * When present, textarea size changes as being typed.
   * @group Props
   */
  autoResize;
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, ...ngDevMode ? [{
    debugName: "invalid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  /**
   * Callback to invoke on textarea resize.
   * @param {(Event | {})} event - Custom resize event.
   * @group Emits
   */
  onResize = new EventEmitter();
  ngControlSubscription;
  _componentStyle = inject(TextareaStyle);
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  onInit() {
    if (this.ngControl) {
      this.ngControlSubscription = this.ngControl.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  onAfterViewInit() {
    if (this.autoResize) this.resize();
    this.cd.detectChanges();
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
    if (this.autoResize) {
      this.resize();
    }
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  onInput(e) {
    this.writeModelValue(e.target?.value);
    this.updateState();
  }
  resize(event) {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = "scroll";
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = "hidden";
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    if (this.autoResize) {
      this.resize();
    }
  }
  onDestroy() {
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Textarea_BaseFactory;
    return function Textarea_Factory(__ngFactoryType__) {
      return (\u0275Textarea_BaseFactory || (\u0275Textarea_BaseFactory = \u0275\u0275getInheritedFactory(_Textarea)))(__ngFactoryType__ || _Textarea);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Textarea,
    selectors: [["", "pTextarea", ""], ["", "pInputTextarea", ""]],
    hostVars: 2,
    hostBindings: function Textarea_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function Textarea_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      autoResize: [2, "autoResize", "autoResize", booleanAttribute],
      pSize: "pSize",
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      invalid: [1, "invalid"]
    },
    outputs: {
      onResize: "onResize"
    },
    features: [\u0275\u0275ProvidersFeature([TextareaStyle, {
      provide: TEXTAREA_INSTANCE,
      useExisting: _Textarea
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Textarea
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Textarea, [{
    type: Directive,
    args: [{
      selector: "[pTextarea], [pInputTextarea]",
      standalone: true,
      host: {
        "[class]": "cx('root')"
      },
      providers: [TextareaStyle, {
        provide: TEXTAREA_INSTANCE,
        useExisting: Textarea
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Textarea
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    autoResize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pSize: [{
      type: Input
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    invalid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "invalid",
        required: false
      }]
    }],
    onResize: [{
      type: Output
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var TextareaModule = class _TextareaModule {
  static \u0275fac = function TextareaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextareaModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TextareaModule,
    imports: [Textarea],
    exports: [Textarea]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaModule, [{
    type: NgModule,
    args: [{
      imports: [Textarea],
      exports: [Textarea]
    }]
  }], null, null);
})();

// src/app/features/product/domain/services/product-logic.service.ts
var ProductLogicService = class _ProductLogicService {
  products = [
    {
      id: "PRD-001",
      name: "Margherita Pizza",
      description: "Classic tomato base with mozzarella and fresh basil",
      category: "Pizza",
      price: 349,
      stockQuantity: 25,
      isVeg: true,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200"
    },
    {
      id: "PRD-002",
      name: "Chicken Burger",
      description: "Crispy fried chicken with lettuce, tomato and mayo",
      category: "Burger",
      price: 199,
      stockQuantity: 8,
      isVeg: false,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200"
    },
    {
      id: "PRD-003",
      name: "Mango Lassi",
      description: "Chilled mango yoghurt drink with a hint of cardamom",
      category: "Beverages",
      price: 89,
      stockQuantity: 0,
      isVeg: true,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1553530666-0d66f3bed780?w=200"
    },
    {
      id: "PRD-004",
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a gooey molten centre",
      category: "Desserts",
      price: 149,
      stockQuantity: 15,
      isVeg: true,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200"
    },
    {
      id: "PRD-005",
      name: "Loaded Fries",
      description: "Crispy fries with cheese sauce, jalape\xF1os and sour cream",
      category: "Sides",
      price: 129,
      stockQuantity: 5,
      isVeg: true,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200"
    },
    {
      id: "PRD-006",
      name: "BBQ Pulled Pork Burger",
      description: "Slow-cooked pulled pork with BBQ sauce and coleslaw",
      category: "Burger",
      price: 249,
      stockQuantity: 20,
      isVeg: false,
      isActive: false,
      imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200"
    },
    {
      id: "PRD-007",
      name: "Pepperoni Pan Pizza",
      description: "Thick-crust pan pizza loaded with spicy pepperoni",
      category: "Pizza",
      price: 429,
      stockQuantity: 3,
      isVeg: false,
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200"
    }
  ];
  delay(ms = 500) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  getProducts() {
    return __async(this, null, function* () {
      yield this.delay();
      return [...this.products];
    });
  }
  addProduct(product) {
    return __async(this, null, function* () {
      yield this.delay();
      const newProduct = __spreadProps(__spreadValues({}, product), {
        id: `PRD-${String(Date.now()).slice(-4)}`,
        isActive: true
      });
      this.products = [...this.products, newProduct];
      return [...this.products];
    });
  }
  updateStock(id, additionalQuantity) {
    return __async(this, null, function* () {
      yield this.delay();
      this.products = this.products.map((p) => p.id === id ? __spreadProps(__spreadValues({}, p), { stockQuantity: p.stockQuantity + additionalQuantity }) : p);
      return [...this.products];
    });
  }
  toggleProductStatus(id, isActive) {
    return __async(this, null, function* () {
      yield this.delay();
      this.products = this.products.map((p) => p.id === id ? __spreadProps(__spreadValues({}, p), { isActive }) : p);
      return [...this.products];
    });
  }
  static \u0275fac = function ProductLogicService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductLogicService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductLogicService, factory: _ProductLogicService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductLogicService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/product/presentation/pages/product-page/product-page.component.ts
var _c0 = () => [1, 2, 3];
var _c1 = () => ["8rem", "6rem", "5rem", "5rem", "6rem", "5rem"];
var _c2 = () => [1, 2, 3, 4, 5, 6, 7];
var _c3 = () => [10, 20, 50];
var _c4 = () => ({ "min-width": "60rem" });
var _c5 = (a0, a1, a2) => ({ "bg-green-500": a0, "bg-yellow-500": a1, "bg-red-500": a2 });
var _forTrack0 = ($index, $item) => $item.value;
function ProductPageComponent_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "p-skeleton", 35)(2, "p-skeleton", 36);
    \u0275\u0275elementEnd();
  }
}
function ProductPageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductPageComponent_Conditional_9_For_1_Template, 3, 0, "div", 34, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ProductPageComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 40);
    \u0275\u0275text(5, "Total Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 37)(9, "div", 42);
    \u0275\u0275element(10, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "p", 40);
    \u0275\u0275text(13, "Active Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 41);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 37)(17, "div", 44);
    \u0275\u0275element(18, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "p", 40);
    \u0275\u0275text(21, "Out of Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 41);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalProducts());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.activeProducts());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.outOfStockProducts());
  }
}
function ProductPageComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 12);
  }
}
function ProductPageComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275elementStart(2, "h2", 47);
    \u0275\u0275text(3, "All Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("(", ctx_r1.totalProducts(), ")");
  }
}
function ProductPageComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 50);
  }
  if (rf & 2) {
    const w_r3 = ctx.$implicit;
    \u0275\u0275property("width", w_r3);
  }
}
function ProductPageComponent_Conditional_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275element(2, "p-skeleton", 53)(3, "p-skeleton", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-skeleton", 55)(5, "p-skeleton", 56)(6, "p-skeleton", 57)(7, "p-skeleton", 58);
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275element(9, "p-skeleton", 59)(10, "p-skeleton", 60);
    \u0275\u0275elementEnd()();
  }
}
function ProductPageComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275repeaterCreate(1, ProductPageComponent_Conditional_15_For_2_Template, 1, 1, "p-skeleton", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ProductPageComponent_Conditional_15_For_4_Template, 11, 0, "div", 51, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c2));
  }
}
function ProductPageComponent_Conditional_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 61);
    \u0275\u0275text(2, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 62);
    \u0275\u0275text(4, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 63);
    \u0275\u0275text(6, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 63);
    \u0275\u0275text(8, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 64);
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 65);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ProductPageComponent_Conditional_16_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 67);
  }
  if (rf & 2) {
    const product_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r5.imageUrl, \u0275\u0275sanitizeUrl)("alt", product_r5.name);
  }
}
function ProductPageComponent_Conditional_16_ng_template_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 68);
  }
}
function ProductPageComponent_Conditional_16_ng_template_3_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 78);
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true);
  }
}
function ProductPageComponent_Conditional_16_ng_template_3_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 79);
  }
  if (rf & 2) {
    const product_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.getStockStatus(product_r5))("severity", ctx_r1.getStockSeverity(product_r5))("rounded", true);
  }
}
function ProductPageComponent_Conditional_16_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 52)(3, "div", 66);
    \u0275\u0275conditionalCreate(4, ProductPageComponent_Conditional_16_ng_template_3_Conditional_4_Template, 1, 2, "img", 67)(5, ProductPageComponent_Conditional_16_ng_template_3_Conditional_5_Template, 1, 0, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 69)(8, "span", 70);
    \u0275\u0275element(9, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 72);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 73);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "td")(15, "span", 74);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 75);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div", 69);
    \u0275\u0275element(22, "span", 76);
    \u0275\u0275elementStart(23, "span", 77);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275conditionalCreate(26, ProductPageComponent_Conditional_16_ng_template_3_Conditional_26_Template, 1, 1, "p-tag", 78)(27, ProductPageComponent_Conditional_16_ng_template_3_Conditional_27_Template, 1, 3, "p-tag", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td")(29, "div", 80)(30, "p-button", 81);
    \u0275\u0275listener("onClick", function ProductPageComponent_Conditional_16_ng_template_3_Template_p_button_onClick_30_listener() {
      const product_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRestockModal(product_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 82)(32, "p-toggleswitch", 83);
    \u0275\u0275listener("onChange", function ProductPageComponent_Conditional_16_ng_template_3_Template_p_toggleswitch_onChange_32_listener($event) {
      const product_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onToggleStatus(product_r5, $event.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 48);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-50", !product_r5.isActive);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(product_r5.imageUrl ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(product_r5.isVeg ? "border-green-600" : "border-red-600");
    \u0275\u0275advance();
    \u0275\u0275classMap(product_r5.isVeg ? "bg-green-600" : "bg-red-600");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getCategoryColor(product_r5.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r5.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(19, 20, product_r5.price));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(22, _c5, product_r5.isActive && product_r5.stockQuantity > 10, product_r5.isActive && product_r5.stockQuantity > 0 && product_r5.stockQuantity <= 10, !product_r5.isActive || product_r5.stockQuantity === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.stockQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!product_r5.isActive ? 26 : 27);
    \u0275\u0275advance(4);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", product_r5.isActive)("disabled", ctx_r1.togglingId() === product_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", product_r5.isActive ? "Active" : "Archived", " ");
  }
}
function ProductPageComponent_Conditional_16_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 84);
    \u0275\u0275element(2, "i", 85);
    \u0275\u0275elementStart(3, "p", 86);
    \u0275\u0275text(4, "No products found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 87);
    \u0275\u0275listener("onClick", function ProductPageComponent_Conditional_16_ng_template_5_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("text", true);
  }
}
function ProductPageComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 14);
    \u0275\u0275template(1, ProductPageComponent_Conditional_16_ng_template_1_Template, 13, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(3, ProductPageComponent_Conditional_16_ng_template_3_Template, 35, 26, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, ProductPageComponent_Conditional_16_ng_template_5_Template, 6, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.products())("rows", 10)("paginator", ctx_r1.products().length > 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(5, _c3))("tableStyle", \u0275\u0275pureFunction0(6, _c4));
  }
}
function ProductPageComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "Name is required (min 2 characters).");
    \u0275\u0275elementEnd();
  }
}
function ProductPageComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "Category is required.");
    \u0275\u0275elementEnd();
  }
}
function ProductPageComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "Price must be at least \u20B91.");
    \u0275\u0275elementEnd();
  }
}
function ProductPageComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "p-button", 89);
    \u0275\u0275listener("onClick", function ProductPageComponent_ng_template_59_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 90);
    \u0275\u0275listener("onClick", function ProductPageComponent_ng_template_59_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitAddProduct());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("disabled", ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.isSubmitting());
  }
}
function ProductPageComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275elementStart(2, "span", 92);
    \u0275\u0275text(3, "Quick Restock");
    \u0275\u0275elementEnd()();
  }
}
function ProductPageComponent_Conditional_64_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function ProductPageComponent_Conditional_64_For_11_Template_button_click_0_listener() {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmRestock(opt_r9.value));
    });
    \u0275\u0275elementStart(1, "span", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 101);
    \u0275\u0275text(4, "units");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", opt_r9.value);
  }
}
function ProductPageComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "p", 93);
    \u0275\u0275text(2, " Restocking: ");
    \u0275\u0275elementStart(3, "span", 94);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 95);
    \u0275\u0275text(6, " Current stock: ");
    \u0275\u0275elementStart(7, "span", 96);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 97);
    \u0275\u0275repeaterCreate(10, ProductPageComponent_Conditional_64_For_11_Template, 5, 1, "button", 98, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const target_r10 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(target_r10.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", target_r10.stockQuantity, " units");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.restockOptions);
  }
}
function ProductPageComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 102);
    \u0275\u0275listener("onClick", function ProductPageComponent_ng_template_65_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRestockModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true);
  }
}
var ProductPageComponent = class _ProductPageComponent {
  logic = inject(ProductLogicService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  // ── State ────────────────────────────────────────────────────────────────
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  isAddModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isAddModalOpen" }] : []);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  isRestockModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isRestockModalOpen" }] : []);
  restockTarget = signal(null, ...ngDevMode ? [{ debugName: "restockTarget" }] : []);
  togglingId = signal(null, ...ngDevMode ? [{ debugName: "togglingId" }] : []);
  // ── Computed ─────────────────────────────────────────────────────────────
  totalProducts = computed(() => this.products().length, ...ngDevMode ? [{ debugName: "totalProducts" }] : []);
  activeProducts = computed(() => this.products().filter((p) => p.isActive).length, ...ngDevMode ? [{ debugName: "activeProducts" }] : []);
  outOfStockProducts = computed(() => this.products().filter((p) => p.isActive && p.stockQuantity === 0).length, ...ngDevMode ? [{ debugName: "outOfStockProducts" }] : []);
  // ── Options ──────────────────────────────────────────────────────────────
  categories = [
    { label: "Pizza", value: "Pizza" },
    { label: "Burger", value: "Burger" },
    { label: "Beverages", value: "Beverages" },
    { label: "Desserts", value: "Desserts" },
    { label: "Sides", value: "Sides" }
  ];
  restockOptions = [
    { label: "+10 units", value: 10 },
    { label: "+20 units", value: 20 },
    { label: "+50 units", value: 50 }
  ];
  // ── Reactive Form ─────────────────────────────────────────────────────────
  productForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    description: [""],
    category: [null, [Validators.required]],
    price: [null, [Validators.required, Validators.min(1)]],
    stockQuantity: [0, [Validators.required, Validators.min(0)]],
    isVeg: [false]
  });
  // ── Lifecycle ─────────────────────────────────────────────────────────────
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    return __async(this, null, function* () {
      this.loading.set(true);
      const data = yield this.logic.getProducts();
      this.products.set(data);
      this.loading.set(false);
    });
  }
  // ── Add Product Modal ──────────────────────────────────────────────────────
  openAddModal() {
    this.productForm.reset({ isVeg: false, stockQuantity: 0 });
    this.isAddModalOpen.set(true);
  }
  closeAddModal() {
    this.productForm.reset({ isVeg: false, stockQuantity: 0 });
    this.isAddModalOpen.set(false);
  }
  submitAddProduct() {
    return __async(this, null, function* () {
      if (this.productForm.invalid) {
        this.productForm.markAllAsTouched();
        return;
      }
      this.isSubmitting.set(true);
      const val = this.productForm.getRawValue();
      const updated = yield this.logic.addProduct({
        name: val.name,
        description: val.description ?? "",
        category: val.category,
        price: val.price,
        stockQuantity: val.stockQuantity ?? 0,
        isVeg: val.isVeg ?? false,
        isActive: true,
        imageUrl: ""
      });
      this.products.set(updated);
      this.isSubmitting.set(false);
      this.closeAddModal();
      this.toast.success("Product added to menu successfully.");
    });
  }
  // ── Restock Modal ─────────────────────────────────────────────────────────
  openRestockModal(product) {
    this.restockTarget.set(product);
    this.isRestockModalOpen.set(true);
  }
  closeRestockModal() {
    this.restockTarget.set(null);
    this.isRestockModalOpen.set(false);
  }
  confirmRestock(qty) {
    return __async(this, null, function* () {
      const target = this.restockTarget();
      if (!target)
        return;
      this.closeRestockModal();
      const updated = yield this.logic.updateStock(target.id, qty);
      this.products.set(updated);
      this.toast.success(`Restocked "${target.name}" by +${qty} units.`);
    });
  }
  // ── Toggle Active ─────────────────────────────────────────────────────────
  onToggleStatus(product, isActive) {
    return __async(this, null, function* () {
      this.togglingId.set(product.id);
      const updated = yield this.logic.toggleProductStatus(product.id, isActive);
      this.products.set(updated);
      this.togglingId.set(null);
      const msg = isActive ? `"${product.name}" is now active.` : `"${product.name}" has been archived.`;
      this.toast.success(msg);
    });
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  getStockStatus(product) {
    if (!product.isActive)
      return "Out of Stock";
    if (product.stockQuantity === 0)
      return "Out of Stock";
    if (product.stockQuantity <= 10)
      return "Low Stock";
    return "In Stock";
  }
  getStockSeverity(product) {
    if (!product.isActive)
      return "secondary";
    if (product.stockQuantity === 0)
      return "danger";
    if (product.stockQuantity <= 10)
      return "warn";
    return "success";
  }
  getCategoryColor(category) {
    const map = {
      Pizza: "bg-orange-50 text-orange-700 border border-orange-200",
      Burger: "bg-amber-50 text-amber-700 border border-amber-200",
      Beverages: "bg-blue-50 text-blue-700 border border-blue-200",
      Desserts: "bg-pink-50 text-pink-700 border border-pink-200",
      Sides: "bg-green-50 text-green-700 border border-green-200"
    };
    return map[category];
  }
  isFieldInvalid(field) {
    const ctrl = this.productForm.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
  static \u0275fac = function ProductPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductPageComponent, selectors: [["app-product-page"]], decls: 67, vars: 35, consts: [["footer", ""], ["header", ""], ["body", ""], ["emptymessage", ""], [1, "p-6", "bg-zinc-50", "min-h-full"], [1, "flex", "items-start", "justify-between", "mb-6"], [1, "text-2xl", "font-semibold", "text-zinc-900", "tracking-tight"], [1, "text-sm", "text-zinc-500", "mt-1"], ["label", "Add New Product", "icon", "pi pi-plus", "styleClass", "bg-zinc-900! border-zinc-900! text-white! text-sm! font-medium! rounded-lg! px-4!", 3, "onClick", "disabled"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4", "mb-6"], [1, "bg-white", "border", "border-zinc-200", "rounded-xl", "shadow-sm", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-zinc-100"], ["width", "8rem", "height", "1rem"], [1, "flex", "items-center", "gap-2"], ["styleClass", "p-datatable-sm", 3, "value", "rows", "paginator", "rowsPerPageOptions", "tableStyle"], ["header", "Add New Product", "styleClass", "w-full max-w-lg!", 3, "visibleChange", "visible", "modal", "closable", "draggable", "resizable"], [1, "flex", "flex-col", "gap-5", "py-1", 3, "ngSubmit", "formGroup"], [1, "flex", "flex-col", "gap-1.5"], [1, "text-xs", "font-semibold", "text-zinc-600", "uppercase", "tracking-wide"], [1, "text-red-500"], ["pInputText", "", "formControlName", "name", "placeholder", "e.g. Paneer Tikka Pizza", 1, "w-full", "text-sm"], [1, "text-xs", "text-red-500"], ["pTextarea", "", "formControlName", "description", "placeholder", "Short description of the product...", "rows", "2", 1, "w-full", "text-sm", "resize-none"], [1, "grid", "grid-cols-2", "gap-4"], ["formControlName", "category", "optionLabel", "label", "optionValue", "value", "placeholder", "Select category", "styleClass", "w-full", 3, "options"], ["formControlName", "price", "placeholder", "e.g. 249", "styleClass", "w-full", "inputStyleClass", "w-full text-sm", 3, "min"], [1, "grid", "grid-cols-2", "gap-4", "items-end"], ["formControlName", "stockQuantity", "styleClass", "w-full", "inputStyleClass", "w-full text-sm", 3, "min"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "items-center", "gap-3", "h-10"], ["formControlName", "isVeg"], [1, "text-sm", "text-zinc-700"], ["styleClass", "w-full max-w-sm!", 3, "visibleChange", "visible", "modal", "closable", "draggable", "resizable"], [1, "py-2"], [1, "bg-white", "border", "border-zinc-200", "rounded-xl", "p-5", "shadow-sm"], ["width", "60%", "height", "0.75rem", "styleClass", "mb-3"], ["width", "40%", "height", "1.75rem"], [1, "bg-white", "border", "border-zinc-200", "rounded-xl", "p-5", "shadow-sm", "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "rounded-lg", "bg-zinc-100", "flex", "items-center", "justify-center", "shrink-0"], [1, "pi", "pi-box", "text-zinc-600"], [1, "text-xs", "font-medium", "text-zinc-400", "uppercase", "tracking-wide"], [1, "text-2xl", "font-bold", "text-zinc-900", "mt-0.5"], [1, "w-10", "h-10", "rounded-lg", "bg-green-50", "flex", "items-center", "justify-center", "shrink-0"], [1, "pi", "pi-check-circle", "text-green-600"], [1, "w-10", "h-10", "rounded-lg", "bg-red-50", "flex", "items-center", "justify-center", "shrink-0"], [1, "pi", "pi-exclamation-triangle", "text-red-500"], [1, "pi", "pi-list", "text-zinc-400", "text-sm"], [1, "text-sm", "font-semibold", "text-zinc-800"], [1, "text-xs", "text-zinc-400"], [1, "grid", "grid-cols-6", "gap-4", "px-5", "py-3", "bg-zinc-50", "border-b", "border-zinc-200"], ["height", "0.75rem", 3, "width"], [1, "grid", "grid-cols-6", "gap-4", "px-5", "py-4", "border-b", "border-zinc-100", "items-center", "last:border-b-0"], [1, "flex", "items-center", "gap-3"], ["shape", "circle", "size", "2.25rem"], ["width", "6rem", "height", "0.875rem"], ["width", "5rem", "height", "1.5rem", "borderRadius", "1rem"], ["width", "4rem", "height", "0.875rem"], ["width", "3rem", "height", "0.875rem"], ["width", "5.5rem", "height", "1.5rem", "borderRadius", "2rem"], ["width", "2.25rem", "height", "2.25rem", "borderRadius", "0.5rem"], ["width", "2.75rem", "height", "1.25rem", "borderRadius", "2rem"], ["scope", "col", 2, "width", "28%"], ["scope", "col", 2, "width", "13%"], ["scope", "col", 2, "width", "10%"], ["scope", "col", 2, "width", "14%"], ["scope", "col", 2, "width", "25%"], [1, "w-9", "h-9", "rounded-lg", "bg-zinc-100", "overflow-hidden", "shrink-0", "flex", "items-center", "justify-center"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "pi", "pi-image", "text-zinc-400", "text-xs"], [1, "flex", "items-center", "gap-1.5"], [1, "inline-flex", "items-center", "justify-center", "w-3.5", "h-3.5", "rounded-sm", "border-2", "shrink-0"], [1, "w-1.5", "h-1.5", "rounded-full"], [1, "text-sm", "font-medium", "text-zinc-900"], [1, "text-xs", "text-zinc-400", "mt-0.5", "truncate", "max-w-[180px]"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "font-semibold", "text-zinc-800"], [1, "w-1.5", "h-1.5", "rounded-full", "shrink-0", 3, "ngClass"], [1, "text-sm", "text-zinc-700", "font-medium"], ["value", "Archived", "severity", "secondary", 3, "rounded"], [3, "value", "severity", "rounded"], [1, "flex", "items-center", "gap-1"], ["icon", "pi pi-arrow-circle-up", "severity", "secondary", "pTooltip", "Quick Restock", "tooltipPosition", "top", 3, "onClick", "text", "rounded"], [1, "flex", "items-center", "gap-2", "ml-1"], [3, "onChange", "ngModel", "disabled"], ["colspan", "6", 1, "text-center", "py-14"], [1, "pi", "pi-box", "text-4xl", "text-zinc-300", "mb-3", "block"], [1, "text-sm", "text-zinc-400"], ["label", "Add your first product", "severity", "secondary", "styleClass", "text-sm! mt-2!", 3, "onClick", "text"], [1, "flex", "justify-end", "gap-3", "pt-1"], ["label", "Cancel", "severity", "secondary", "styleClass", "text-sm! rounded-lg!", 3, "onClick", "outlined", "disabled"], ["label", "Add Product", "icon", "pi pi-plus", "styleClass", "bg-zinc-900! border-zinc-900! text-white! text-sm! rounded-lg!", 3, "onClick", "loading"], [1, "pi", "pi-arrow-circle-up", "text-zinc-600"], [1, "text-base", "font-semibold", "text-zinc-900"], [1, "text-sm", "text-zinc-600", "mb-1"], [1, "font-semibold", "text-zinc-900"], [1, "text-xs", "text-zinc-400", "mb-5"], [1, "font-medium", "text-zinc-700"], [1, "grid", "grid-cols-3", "gap-3"], ["type", "button", 1, "flex", "flex-col", "items-center", "justify-center", "p-4", "rounded-xl", "border-2", "border-zinc-200", "hover:border-zinc-900", "hover:bg-zinc-50", "transition-all", "cursor-pointer", "group"], ["type", "button", 1, "flex", "flex-col", "items-center", "justify-center", "p-4", "rounded-xl", "border-2", "border-zinc-200", "hover:border-zinc-900", "hover:bg-zinc-50", "transition-all", "cursor-pointer", "group", 3, "click"], [1, "text-lg", "font-bold", "text-zinc-900"], [1, "text-xs", "text-zinc-400", "mt-0.5"], ["label", "Cancel", "severity", "secondary", "styleClass", "w-full! text-sm! rounded-lg!", 3, "onClick", "outlined"]], template: function ProductPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div")(3, "h1", 6);
      \u0275\u0275text(4, "Menu Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 7);
      \u0275\u0275text(6, "Add, edit, and manage your food menu items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p-button", 8);
      \u0275\u0275listener("onClick", function ProductPageComponent_Template_p_button_onClick_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddModal());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 9);
      \u0275\u0275conditionalCreate(9, ProductPageComponent_Conditional_9_Template, 2, 1)(10, ProductPageComponent_Conditional_10_Template, 24, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 11);
      \u0275\u0275conditionalCreate(13, ProductPageComponent_Conditional_13_Template, 1, 0, "p-skeleton", 12)(14, ProductPageComponent_Conditional_14_Template, 6, 1, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, ProductPageComponent_Conditional_15_Template, 5, 2)(16, ProductPageComponent_Conditional_16_Template, 7, 7, "p-table", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p-dialog", 15);
      \u0275\u0275listener("visibleChange", function ProductPageComponent_Template_p_dialog_visibleChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event ? null : ctx.closeAddModal());
      });
      \u0275\u0275elementStart(18, "form", 16);
      \u0275\u0275listener("ngSubmit", function ProductPageComponent_Template_form_ngSubmit_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.submitAddProduct());
      });
      \u0275\u0275elementStart(19, "div", 17)(20, "label", 18);
      \u0275\u0275text(21, " Product Name ");
      \u0275\u0275elementStart(22, "span", 19);
      \u0275\u0275text(23, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "input", 20);
      \u0275\u0275conditionalCreate(25, ProductPageComponent_Conditional_25_Template, 2, 0, "p", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 17)(27, "label", 18);
      \u0275\u0275text(28, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "textarea", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 23)(31, "div", 17)(32, "label", 18);
      \u0275\u0275text(33, " Category ");
      \u0275\u0275elementStart(34, "span", 19);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "p-select", 24);
      \u0275\u0275conditionalCreate(37, ProductPageComponent_Conditional_37_Template, 2, 0, "p", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 17)(39, "label", 18);
      \u0275\u0275text(40, " Price (\u20B9) ");
      \u0275\u0275elementStart(41, "span", 19);
      \u0275\u0275text(42, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(43, "p-inputnumber", 25);
      \u0275\u0275conditionalCreate(44, ProductPageComponent_Conditional_44_Template, 2, 0, "p", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 26)(46, "div", 17)(47, "label", 18);
      \u0275\u0275text(48, " Initial Stock ");
      \u0275\u0275elementStart(49, "span", 19);
      \u0275\u0275text(50, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(51, "p-inputnumber", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 28)(53, "label", 18);
      \u0275\u0275text(54, "Veg / Non-Veg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 29);
      \u0275\u0275element(56, "p-toggleswitch", 30);
      \u0275\u0275elementStart(57, "span", 31);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(59, ProductPageComponent_ng_template_59_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p-dialog", 32);
      \u0275\u0275listener("visibleChange", function ProductPageComponent_Template_p_dialog_visibleChange_61_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event ? null : ctx.closeRestockModal());
      });
      \u0275\u0275template(62, ProductPageComponent_ng_template_62_Template, 4, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(64, ProductPageComponent_Conditional_64_Template, 12, 2, "div", 33);
      \u0275\u0275template(65, ProductPageComponent_ng_template_65_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_25_0;
      let tmp_31_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 9 : 10);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 13 : 14);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 15 : 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("visible", ctx.isAddModalOpen())("modal", true)("closable", true)("draggable", false)("resizable", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.productForm);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isFieldInvalid("name"))("ng-dirty", ctx.isFieldInvalid("name"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("name") ? 25 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275classProp("ng-invalid", ctx.isFieldInvalid("category"))("ng-dirty", ctx.isFieldInvalid("category"));
      \u0275\u0275property("options", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("category") ? 37 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isFieldInvalid("price"))("ng-dirty", ctx.isFieldInvalid("price"));
      \u0275\u0275property("min", 1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("price") ? 44 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("min", 0);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ((tmp_25_0 = ctx.productForm.get("isVeg")) == null ? null : tmp_25_0.value) ? "\u{1F7E2} Vegetarian" : "\u{1F534} Non-Veg", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("visible", ctx.isRestockModalOpen())("modal", true)("closable", true)("draggable", false)("resizable", false);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_31_0 = ctx.restockTarget()) ? 64 : -1, tmp_31_0);
    }
  }, dependencies: [CommonModule, NgClass, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, TableModule, Table, TagModule, Tag, ButtonModule, Button, DialogModule, Dialog, InputTextModule, InputText, InputNumberModule, InputNumber, SelectModule, Select, ToggleSwitchModule, ToggleSwitch, SkeletonModule, Skeleton, TooltipModule, Tooltip, TextareaModule, Textarea, DecimalPipe], styles: ["\n\n/*# sourceMappingURL=product-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductPageComponent, [{
    type: Component,
    args: [{ selector: "app-product-page", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      TableModule,
      TagModule,
      ButtonModule,
      DialogModule,
      InputTextModule,
      InputNumberModule,
      SelectModule,
      ToggleSwitchModule,
      SkeletonModule,
      TooltipModule,
      TextareaModule
    ], template: `<div class="p-6 bg-zinc-50 min-h-full">

  <!-- \u2500\u2500 Page Header \u2500\u2500 -->
  <div class="flex items-start justify-between mb-6">
    <div>
      <h1 class="text-2xl font-semibold text-zinc-900 tracking-tight">Menu Management</h1>
      <p class="text-sm text-zinc-500 mt-1">Add, edit, and manage your food menu items</p>
    </div>
    <p-button
      label="Add New Product"
      icon="pi pi-plus"
      [disabled]="loading()"
      (onClick)="openAddModal()"
      styleClass="bg-zinc-900! border-zinc-900! text-white! text-sm! font-medium! rounded-lg! px-4!"
    ></p-button>
  </div>

  <!-- \u2500\u2500 Summary Cards \u2500\u2500 -->
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
    @if (loading()) {
      @for (i of [1,2,3]; track i) {
        <div class="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
          <p-skeleton width="60%" height="0.75rem" styleClass="mb-3"></p-skeleton>
          <p-skeleton width="40%" height="1.75rem"></p-skeleton>
        </div>
      }
    } @else {
      <div class="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm flex items-center gap-4">
        <div class="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
          <i class="pi pi-box text-zinc-600"></i>
        </div>
        <div>
          <p class="text-xs font-medium text-zinc-400 uppercase tracking-wide">Total Products</p>
          <p class="text-2xl font-bold text-zinc-900 mt-0.5">{{ totalProducts() }}</p>
        </div>
      </div>
      <div class="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm flex items-center gap-4">
        <div class="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
          <i class="pi pi-check-circle text-green-600"></i>
        </div>
        <div>
          <p class="text-xs font-medium text-zinc-400 uppercase tracking-wide">Active Items</p>
          <p class="text-2xl font-bold text-zinc-900 mt-0.5">{{ activeProducts() }}</p>
        </div>
      </div>
      <div class="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm flex items-center gap-4">
        <div class="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
          <i class="pi pi-exclamation-triangle text-red-500"></i>
        </div>
        <div>
          <p class="text-xs font-medium text-zinc-400 uppercase tracking-wide">Out of Stock</p>
          <p class="text-2xl font-bold text-zinc-900 mt-0.5">{{ outOfStockProducts() }}</p>
        </div>
      </div>
    }
  </div>

  <!-- \u2500\u2500 Table Card \u2500\u2500 -->
  <div class="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">

    <!-- Card Header -->
    <div class="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
      @if (loading()) {
        <p-skeleton width="8rem" height="1rem"></p-skeleton>
      } @else {
        <div class="flex items-center gap-2">
          <i class="pi pi-list text-zinc-400 text-sm"></i>
          <h2 class="text-sm font-semibold text-zinc-800">All Products</h2>
          <span class="text-xs text-zinc-400">({{ totalProducts() }})</span>
        </div>
      }
    </div>

    <!-- \u2500\u2500 Skeleton \u2500\u2500 -->
    @if (loading()) {
      <div class="grid grid-cols-6 gap-4 px-5 py-3 bg-zinc-50 border-b border-zinc-200">
        @for (w of ['8rem','6rem','5rem','5rem','6rem','5rem']; track w) {
          <p-skeleton [width]="w" height="0.75rem"></p-skeleton>
        }
      </div>
      @for (row of [1,2,3,4,5,6,7]; track row) {
        <div class="grid grid-cols-6 gap-4 px-5 py-4 border-b border-zinc-100 items-center last:border-b-0">
          <div class="flex items-center gap-3">
            <p-skeleton shape="circle" size="2.25rem"></p-skeleton>
            <p-skeleton width="6rem" height="0.875rem"></p-skeleton>
          </div>
          <p-skeleton width="5rem" height="1.5rem" borderRadius="1rem"></p-skeleton>
          <p-skeleton width="4rem" height="0.875rem"></p-skeleton>
          <p-skeleton width="3rem" height="0.875rem"></p-skeleton>
          <p-skeleton width="5.5rem" height="1.5rem" borderRadius="2rem"></p-skeleton>
          <div class="flex items-center gap-2">
            <p-skeleton width="2.25rem" height="2.25rem" borderRadius="0.5rem"></p-skeleton>
            <p-skeleton width="2.75rem" height="1.25rem" borderRadius="2rem"></p-skeleton>
          </div>
        </div>
      }

    } @else {
      <!-- \u2500\u2500 Real Table \u2500\u2500 -->
      <p-table
        [value]="products()"
        [rows]="10"
        [paginator]="products().length > 10"
        [rowsPerPageOptions]="[10, 20, 50]"
        [tableStyle]="{ 'min-width': '60rem' }"
        styleClass="p-datatable-sm"
      >
        <ng-template #header>
          <tr>
            <th scope="col" style="width:28%">Product</th>
            <th scope="col" style="width:13%">Category</th>
            <th scope="col" style="width:10%">Price</th>
            <th scope="col" style="width:10%">Stock</th>
            <th scope="col" style="width:14%">Status</th>
            <th scope="col" style="width:25%">Actions</th>
          </tr>
        </ng-template>

        <ng-template #body let-product>
          <tr [class.opacity-50]="!product.isActive">

            <!-- Product Name + Veg Indicator -->
            <td>
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-zinc-100 overflow-hidden shrink-0 flex items-center justify-center">
                  @if (product.imageUrl) {
                    <img [src]="product.imageUrl" [alt]="product.name" class="w-full h-full object-cover" />
                  } @else {
                    <i class="pi pi-image text-zinc-400 text-xs"></i>
                  }
                </div>
                <div>
                  <div class="flex items-center gap-1.5">
                    <span
                      class="inline-flex items-center justify-center w-3.5 h-3.5 rounded-sm border-2 shrink-0"
                      [class]="product.isVeg ? 'border-green-600' : 'border-red-600'"
                    >
                      <span
                        class="w-1.5 h-1.5 rounded-full"
                        [class]="product.isVeg ? 'bg-green-600' : 'bg-red-600'"
                      ></span>
                    </span>
                    <span class="text-sm font-medium text-zinc-900">{{ product.name }}</span>
                  </div>
                  <p class="text-xs text-zinc-400 mt-0.5 truncate max-w-[180px]">{{ product.description }}</p>
                </div>
              </div>
            </td>

            <!-- Category Badge -->
            <td>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                [ngClass]="getCategoryColor(product.category)"
              >
                {{ product.category }}
              </span>
            </td>

            <!-- Price -->
            <td class="font-semibold text-zinc-800">\u20B9{{ product.price | number }}</td>

            <!-- Stock Qty -->
            <td>
              <div class="flex items-center gap-1.5">
                <span
                  class="w-1.5 h-1.5 rounded-full shrink-0"
                  [ngClass]="{
                    'bg-green-500': product.isActive && product.stockQuantity > 10,
                    'bg-yellow-500': product.isActive && product.stockQuantity > 0 && product.stockQuantity <= 10,
                    'bg-red-500': !product.isActive || product.stockQuantity === 0
                  }"
                ></span>
                <span class="text-sm text-zinc-700 font-medium">{{ product.stockQuantity }}</span>
              </div>
            </td>

            <!-- Status Tag -->
            <td>
              @if (!product.isActive) {
                <p-tag value="Archived" severity="secondary" [rounded]="true"></p-tag>
              } @else {
                <p-tag
                  [value]="getStockStatus(product)"
                  [severity]="getStockSeverity(product)"
                  [rounded]="true"
                ></p-tag>
              }
            </td>

            <!-- Actions -->
            <td>
              <div class="flex items-center gap-1">
                <p-button
                  icon="pi pi-arrow-circle-up"
                  [text]="true"
                  [rounded]="true"
                  severity="secondary"
                  pTooltip="Quick Restock"
                  tooltipPosition="top"
                  (onClick)="openRestockModal(product)"
                ></p-button>

                <div class="flex items-center gap-2 ml-1">
                  <p-toggleswitch
                    [ngModel]="product.isActive"
                    [disabled]="togglingId() === product.id"
                    (onChange)="onToggleStatus(product, $event.checked)"
                  ></p-toggleswitch>
                  <span class="text-xs text-zinc-400">
                    {{ product.isActive ? 'Active' : 'Archived' }}
                  </span>
                </div>
              </div>
            </td>

          </tr>
        </ng-template>

        <ng-template #emptymessage>
          <tr>
            <td colspan="6" class="text-center py-14">
              <i class="pi pi-box text-4xl text-zinc-300 mb-3 block"></i>
              <p class="text-sm text-zinc-400">No products found.</p>
              <p-button
                label="Add your first product"
                [text]="true"
                severity="secondary"
                (onClick)="openAddModal()"
                styleClass="text-sm! mt-2!"
              ></p-button>
            </td>
          </tr>
        </ng-template>
      </p-table>
    }
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     ADD PRODUCT DIALOG
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<p-dialog
  header="Add New Product"
  [visible]="isAddModalOpen()"
  (visibleChange)="$event ? null : closeAddModal()"
  [modal]="true"
  [closable]="true"
  [draggable]="false"
  [resizable]="false"
  styleClass="w-full max-w-lg!"
>
  <form [formGroup]="productForm" (ngSubmit)="submitAddProduct()" class="flex flex-col gap-5 py-1">

    <div class="flex flex-col gap-1.5">
      <label class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">
        Product Name <span class="text-red-500">*</span>
      </label>
      <input
        pInputText
        formControlName="name"
        placeholder="e.g. Paneer Tikka Pizza"
        class="w-full text-sm"
        [class.ng-invalid]="isFieldInvalid('name')"
        [class.ng-dirty]="isFieldInvalid('name')"
      />
      @if (isFieldInvalid('name')) {
        <p class="text-xs text-red-500">Name is required (min 2 characters).</p>
      }
    </div>

    <div class="flex flex-col gap-1.5">
      <label class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Description</label>
      <textarea
        pTextarea
        formControlName="description"
        placeholder="Short description of the product..."
        rows="2"
        class="w-full text-sm resize-none"
      ></textarea>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">
          Category <span class="text-red-500">*</span>
        </label>
        <p-select
          formControlName="category"
          [options]="categories"
          optionLabel="label"
          optionValue="value"
          placeholder="Select category"
          styleClass="w-full"
          [class.ng-invalid]="isFieldInvalid('category')"
          [class.ng-dirty]="isFieldInvalid('category')"
        ></p-select>
        @if (isFieldInvalid('category')) {
          <p class="text-xs text-red-500">Category is required.</p>
        }
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">
          Price (\u20B9) <span class="text-red-500">*</span>
        </label>
        <p-inputnumber
          formControlName="price"
          placeholder="e.g. 249"
          [min]="1"
          styleClass="w-full"
          inputStyleClass="w-full text-sm"
          [class.ng-invalid]="isFieldInvalid('price')"
          [class.ng-dirty]="isFieldInvalid('price')"
        ></p-inputnumber>
        @if (isFieldInvalid('price')) {
          <p class="text-xs text-red-500">Price must be at least \u20B91.</p>
        }
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 items-end">
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">
          Initial Stock <span class="text-red-500">*</span>
        </label>
        <p-inputnumber
          formControlName="stockQuantity"
          [min]="0"
          styleClass="w-full"
          inputStyleClass="w-full text-sm"
        ></p-inputnumber>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Veg / Non-Veg</label>
        <div class="flex items-center gap-3 h-10">
          <p-toggleswitch formControlName="isVeg"></p-toggleswitch>
          <span class="text-sm text-zinc-700">
            {{ productForm.get('isVeg')?.value ? '\u{1F7E2} Vegetarian' : '\u{1F534} Non-Veg' }}
          </span>
        </div>
      </div>
    </div>

  </form>

  <ng-template #footer>
    <div class="flex justify-end gap-3 pt-1">
      <p-button
        label="Cancel"
        severity="secondary"
        [outlined]="true"
        [disabled]="isSubmitting()"
        (onClick)="closeAddModal()"
        styleClass="text-sm! rounded-lg!"
      ></p-button>
      <p-button
        label="Add Product"
        icon="pi pi-plus"
        [loading]="isSubmitting()"
        (onClick)="submitAddProduct()"
        styleClass="bg-zinc-900! border-zinc-900! text-white! text-sm! rounded-lg!"
      ></p-button>
    </div>
  </ng-template>
</p-dialog>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     QUICK RESTOCK DIALOG
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<p-dialog
  [visible]="isRestockModalOpen()"
  (visibleChange)="$event ? null : closeRestockModal()"
  [modal]="true"
  [closable]="true"
  [draggable]="false"
  [resizable]="false"
  styleClass="w-full max-w-sm!"
>
  <ng-template #header>
    <div class="flex items-center gap-2">
      <i class="pi pi-arrow-circle-up text-zinc-600"></i>
      <span class="text-base font-semibold text-zinc-900">Quick Restock</span>
    </div>
  </ng-template>

  @if (restockTarget(); as target) {
    <div class="py-2">
      <p class="text-sm text-zinc-600 mb-1">
        Restocking: <span class="font-semibold text-zinc-900">{{ target.name }}</span>
      </p>
      <p class="text-xs text-zinc-400 mb-5">
        Current stock: <span class="font-medium text-zinc-700">{{ target.stockQuantity }} units</span>
      </p>
      <div class="grid grid-cols-3 gap-3">
        @for (opt of restockOptions; track opt.value) {
          <button
            type="button"
            (click)="confirmRestock(opt.value)"
            class="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-zinc-200 hover:border-zinc-900 hover:bg-zinc-50 transition-all cursor-pointer group"
          >
            <span class="text-lg font-bold text-zinc-900">+{{ opt.value }}</span>
            <span class="text-xs text-zinc-400 mt-0.5">units</span>
          </button>
        }
      </div>
    </div>
  }

  <ng-template #footer>
    <p-button
      label="Cancel"
      severity="secondary"
      [outlined]="true"
      (onClick)="closeRestockModal()"
      styleClass="w-full! text-sm! rounded-lg!"
    ></p-button>
  </ng-template>
</p-dialog>
`, styles: ["/* src/app/features/product/presentation/pages/product-page/product-page.component.css */\n/*# sourceMappingURL=product-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductPageComponent, { className: "ProductPageComponent", filePath: "src/app/features/product/presentation/pages/product-page/product-page.component.ts", lineNumber: 52 });
})();

// src/app/features/product/product.routes.ts
var PRODUCT_ROUTES = [
  {
    path: "",
    component: ProductPageComponent
  }
];
export {
  PRODUCT_ROUTES
};
//# sourceMappingURL=chunk-HDNLOSUA.js.map
