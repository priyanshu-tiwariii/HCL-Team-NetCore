import {
  Divider,
  DividerModule
} from "./chunk-MYYUVNXX.js";
import {
  Router
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
  Tag,
  TagModule
} from "./chunk-QIHNIG7W.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  ButtonModule,
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgTemplateOutlet,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  Y,
  h2 as h,
  s2 as s,
  transformToBoolean
} from "./chunk-FV6RVCBT.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  __async,
  animate,
  computed,
  contentChild,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  state,
  style,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-O557UGG4.js";

// node_modules/@primeuix/styles/dist/stepper/index.mjs
var style2 = "\n    .p-steplist {\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        overflow-x: auto;\n    }\n\n    .p-step {\n        position: relative;\n        display: flex;\n        flex: 1 1 auto;\n        align-items: center;\n        gap: dt('stepper.step.gap');\n        padding: dt('stepper.step.padding');\n    }\n\n    .p-step:last-of-type {\n        flex: initial;\n    }\n\n    .p-step-header {\n        border: 0 none;\n        display: inline-flex;\n        align-items: center;\n        text-decoration: none;\n        cursor: pointer;\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration');\n        border-radius: dt('stepper.step.header.border.radius');\n        outline-color: transparent;\n        background: transparent;\n        padding: dt('stepper.step.header.padding');\n        gap: dt('stepper.step.header.gap');\n    }\n\n    .p-step-header:focus-visible {\n        box-shadow: dt('stepper.step.header.focus.ring.shadow');\n        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');\n        outline-offset: dt('stepper.step.header.focus.ring.offset');\n    }\n\n    .p-stepper.p-stepper-readonly .p-step {\n        cursor: auto;\n    }\n\n    .p-step-title {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        color: dt('stepper.step.title.color');\n        font-weight: dt('stepper.step.title.font.weight');\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration');\n    }\n\n    .p-step-number {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: dt('stepper.step.number.color');\n        border: 2px solid dt('stepper.step.number.border.color');\n        background: dt('stepper.step.number.background');\n        min-width: dt('stepper.step.number.size');\n        height: dt('stepper.step.number.size');\n        line-height: dt('stepper.step.number.size');\n        font-size: dt('stepper.step.number.font.size');\n        z-index: 1;\n        border-radius: dt('stepper.step.number.border.radius');\n        position: relative;\n        font-weight: dt('stepper.step.number.font.weight');\n    }\n\n    .p-step-number::after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: dt('stepper.step.number.border.radius');\n        box-shadow: dt('stepper.step.number.shadow');\n    }\n\n    .p-step-active .p-step-header {\n        cursor: default;\n    }\n\n    .p-step-active .p-step-number {\n        background: dt('stepper.step.number.active.background');\n        border-color: dt('stepper.step.number.active.border.color');\n        color: dt('stepper.step.number.active.color');\n    }\n\n    .p-step-active .p-step-title {\n        color: dt('stepper.step.title.active.color');\n    }\n\n    .p-step:not(.p-disabled):focus-visible {\n        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-step:has(~ .p-step-active) .p-stepper-separator {\n        background: dt('stepper.separator.active.background');\n    }\n\n    .p-stepper-separator {\n        flex: 1 1 0;\n        background: dt('stepper.separator.background');\n        width: 100%;\n        height: dt('stepper.separator.size');\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration');\n    }\n\n    .p-steppanels {\n        padding: dt('stepper.steppanels.padding');\n    }\n\n    .p-steppanel {\n        background: dt('stepper.steppanel.background');\n        color: dt('stepper.steppanel.color');\n    }\n\n    .p-stepper:has(.p-stepitem) {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-stepitem {\n        display: flex;\n        flex-direction: column;\n        flex: initial;\n    }\n\n    .p-stepitem.p-stepitem-active {\n        flex: 1 1 auto;\n    }\n\n    .p-stepitem .p-step {\n        flex: initial;\n    }\n\n    .p-stepitem .p-steppanel-content {\n        width: 100%;\n        padding: dt('stepper.steppanel.padding');\n        margin-inline-start: 1rem;\n    }\n\n    .p-stepitem .p-steppanel {\n        display: flex;\n        flex: 1 1 auto;\n    }\n\n    .p-stepitem .p-stepper-separator {\n        flex: 0 0 auto;\n        width: dt('stepper.separator.size');\n        height: auto;\n        margin: dt('stepper.separator.margin');\n        position: relative;\n        left: calc(-1 * dt('stepper.separator.size'));\n    }\n\n    .p-stepitem .p-stepper-separator:dir(rtl) {\n        left: calc(-9 * dt('stepper.separator.size'));\n    }\n\n    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {\n        background: dt('stepper.separator.active.background');\n    }\n\n    .p-stepitem:last-of-type .p-steppanel {\n        padding-inline-start: dt('stepper.step.number.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-stepper.mjs
var _c0 = ["*"];
var _c1 = ["content"];
var _c2 = (a0, a1, a2) => ({
  activateCallback: a0,
  value: a1,
  active: a2
});
function Step_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function Step_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function Step_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepClick());
    });
    \u0275\u0275elementStart(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 1);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, Step_Conditional_0_Conditional_5_Template, 1, 0, "p-stepper-separator");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275property("pBind", ctx_r1.ptm("header"))("tabindex", ctx_r1.isStepDisabled() ? -1 : void 0)("disabled", ctx_r1.isStepDisabled());
    \u0275\u0275attribute("id", ctx_r1.id())("role", "tab")("aria-controls", ctx_r1.ariaControls());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("number"));
    \u0275\u0275property("pBind", ctx_r1.ptm("number"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.value());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("title"));
    \u0275\u0275property("pBind", ctx_r1.ptm("title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isSeparatorVisible() ? 5 : -1);
  }
}
function Step_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Step_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function Step_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Step_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 2);
    \u0275\u0275conditionalCreate(1, Step_Conditional_1_Conditional_1_Template, 1, 0, "p-stepper-separator");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.content || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c2, ctx_r1.onStepClick.bind(ctx_r1), ctx_r1.value(), ctx_r1.active()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSeparatorVisible() ? 1 : -1);
  }
}
var _c3 = (a0) => ({
  transitionParams: a0
});
var _c4 = (a0) => ({
  value: "visible",
  params: a0
});
var _c5 = (a0) => ({
  value: "hidden",
  params: a0
});
function StepPanel_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function StepPanel_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepPanel_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepPanel_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate || ctx_r0._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c2, ctx_r0.updateValue.bind(ctx_r0), ctx_r0.value(), ctx_r0.active()));
  }
}
var classes$5 = {
  root: ({
    instance
  }) => ["p-stepitem", {
    "p-stepitem-active": instance.isActive()
  }]
};
var StepItemStyle = class _StepItemStyle extends BaseStyle {
  name = "stepitem";
  classes = classes$5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepItemStyle_BaseFactory;
    return function StepItemStyle_Factory(__ngFactoryType__) {
      return (\u0275StepItemStyle_BaseFactory || (\u0275StepItemStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepItemStyle)))(__ngFactoryType__ || _StepItemStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepItemStyle,
    factory: _StepItemStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepItemStyle, [{
    type: Injectable
  }], null, null);
})();
var StepItemClasses;
(function(StepItemClasses2) {
  StepItemClasses2["root"] = "p-stepitem";
})(StepItemClasses || (StepItemClasses = {}));
var classes$4 = {
  root: "p-steplist"
};
var StepListStyle = class _StepListStyle extends BaseStyle {
  name = "steplist";
  classes = classes$4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepListStyle_BaseFactory;
    return function StepListStyle_Factory(__ngFactoryType__) {
      return (\u0275StepListStyle_BaseFactory || (\u0275StepListStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepListStyle)))(__ngFactoryType__ || _StepListStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepListStyle,
    factory: _StepListStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepListStyle, [{
    type: Injectable
  }], null, null);
})();
var StepListClasses;
(function(StepListClasses2) {
  StepListClasses2["root"] = "p-stepitem";
})(StepListClasses || (StepListClasses = {}));
var classes$3 = {
  root: "p-steppanels"
};
var StepPanelsStyle = class _StepPanelsStyle extends BaseStyle {
  name = "steppanel";
  classes = classes$3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanelsStyle_BaseFactory;
    return function StepPanelsStyle_Factory(__ngFactoryType__) {
      return (\u0275StepPanelsStyle_BaseFactory || (\u0275StepPanelsStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanelsStyle)))(__ngFactoryType__ || _StepPanelsStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepPanelsStyle,
    factory: _StepPanelsStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanelsStyle, [{
    type: Injectable
  }], null, null);
})();
var StepPanelsClasses;
(function(StepPanelsClasses2) {
  StepPanelsClasses2["root"] = "p-steppanels";
})(StepPanelsClasses || (StepPanelsClasses = {}));
var classes$2 = {
  root: ({
    instance
  }) => ["p-steppanel", {
    "p-steppanel-active": instance.isVertical() && instance.active()
  }],
  content: "p-steppanel-content"
};
var StepPanelStyle = class _StepPanelStyle extends BaseStyle {
  name = "steppanel";
  classes = classes$2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanelStyle_BaseFactory;
    return function StepPanelStyle_Factory(__ngFactoryType__) {
      return (\u0275StepPanelStyle_BaseFactory || (\u0275StepPanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanelStyle)))(__ngFactoryType__ || _StepPanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepPanelStyle,
    factory: _StepPanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanelStyle, [{
    type: Injectable
  }], null, null);
})();
var StepPanelClasses;
(function(StepPanelClasses2) {
  StepPanelClasses2["root"] = "p-steppanel";
})(StepPanelClasses || (StepPanelClasses = {}));
var style3 = (
  /*css*/
  `
    ${style2}

    /* For PrimeNG */
    .p-steppanel:not(.p-steppanel-active) > .p-steppanel-content,
    .p-steppanel-content.ng-animating {
        overflow: hidden;
    }
`
);
var classes$1 = {
  root: ({
    instance
  }) => ["p-stepper p-component", {
    "p-readonly": instance.linear()
  }],
  separator: "p-stepper-separator"
};
var StepperStyle = class _StepperStyle extends BaseStyle {
  name = "stepper";
  style = style3;
  classes = classes$1;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepperStyle_BaseFactory;
    return function StepperStyle_Factory(__ngFactoryType__) {
      return (\u0275StepperStyle_BaseFactory || (\u0275StepperStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepperStyle)))(__ngFactoryType__ || _StepperStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepperStyle,
    factory: _StepperStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperStyle, [{
    type: Injectable
  }], null, null);
})();
var StepperClasses;
(function(StepperClasses2) {
  StepperClasses2["root"] = "p-stepper";
  StepperClasses2["separator"] = "p-stepper-separator";
})(StepperClasses || (StepperClasses = {}));
var classes = {
  root: ({
    instance
  }) => ["p-step", {
    "p-step-active": instance.active(),
    "p-disabled": instance.isStepDisabled()
  }],
  header: "p-step-header",
  number: "p-step-number",
  title: "p-step-title"
};
var StepStyle = class _StepStyle extends BaseStyle {
  name = "step";
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepStyle_BaseFactory;
    return function StepStyle_Factory(__ngFactoryType__) {
      return (\u0275StepStyle_BaseFactory || (\u0275StepStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepStyle)))(__ngFactoryType__ || _StepStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepStyle,
    factory: _StepStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepStyle, [{
    type: Injectable
  }], null, null);
})();
var StepClasses;
(function(StepClasses2) {
  StepClasses2["root"] = "p-step";
  StepClasses2["header"] = "p-step-header";
  StepClasses2["number"] = "p-step-number";
  StepClasses2["title"] = "p-step-title";
})(StepClasses || (StepClasses = {}));
var STEPPER_INSTANCE = new InjectionToken("STEPPER_INSTANCE");
var STEPLIST_INSTANCE = new InjectionToken("STEPLIST_INSTANCE");
var STEPITEM_INSTANCE = new InjectionToken("STEPITEM_INSTANCE");
var STEP_INSTANCE = new InjectionToken("STEP_INSTANCE");
var STEPPANEL_INSTANCE = new InjectionToken("STEPPANEL_INSTANCE");
var STEPPANELS_INSTANCE = new InjectionToken("STEPPANELS_INSTANCE");
var STEPPERSEPARATOR_INSTANCE = new InjectionToken("STEPPERSEPARATOR_INSTANCE");
var StepList = class _StepList extends BaseComponent {
  $pcStepList = inject(STEPLIST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  steps = contentChildren(forwardRef(() => Step), ...ngDevMode ? [{
    debugName: "steps"
  }] : []);
  _componentStyle = inject(StepListStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepList_BaseFactory;
    return function StepList_Factory(__ngFactoryType__) {
      return (\u0275StepList_BaseFactory || (\u0275StepList_BaseFactory = \u0275\u0275getInheritedFactory(_StepList)))(__ngFactoryType__ || _StepList);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepList,
    selectors: [["p-step-list"]],
    contentQueries: function StepList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.steps, Step, 4);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 2,
    hostBindings: function StepList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepListStyle, {
      provide: STEPLIST_INSTANCE,
      useExisting: _StepList
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepList
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepList, [{
    type: Component,
    args: [{
      selector: "p-step-list",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")'
      },
      providers: [StepListStyle, {
        provide: STEPLIST_INSTANCE,
        useExisting: StepList
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepList
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    steps: [{
      type: ContentChildren,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }]
  });
})();
var StepperSeparator = class _StepperSeparator extends BaseComponent {
  $pcStepperSeparator = inject(STEPPERSEPARATOR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(StepperStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepperSeparator_BaseFactory;
    return function StepperSeparator_Factory(__ngFactoryType__) {
      return (\u0275StepperSeparator_BaseFactory || (\u0275StepperSeparator_BaseFactory = \u0275\u0275getInheritedFactory(_StepperSeparator)))(__ngFactoryType__ || _StepperSeparator);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepperSeparator,
    selectors: [["p-stepper-separator"]],
    hostVars: 2,
    hostBindings: function StepperSeparator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("separator"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepperStyle, {
      provide: STEPPERSEPARATOR_INSTANCE,
      useExisting: _StepperSeparator
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepperSeparator
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepperSeparator_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperSeparator, [{
    type: Component,
    args: [{
      selector: "p-stepper-separator",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("separator")'
      },
      providers: [StepperStyle, {
        provide: STEPPERSEPARATOR_INSTANCE,
        useExisting: StepperSeparator
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepperSeparator
      }],
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var StepItem = class _StepItem extends BaseComponent {
  $pcStepItem = inject(STEPITEM_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(StepItemStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  pcStepper = inject(forwardRef(() => Stepper));
  /**
   * Value of step.
   * @type {<number | undefined>}
   * @defaultValue undefined
   * @group Props
   */
  value = model(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : []);
  isActive = computed(() => this.pcStepper.value() === this.value(), ...ngDevMode ? [{
    debugName: "isActive"
  }] : []);
  step = contentChild(forwardRef(() => Step), ...ngDevMode ? [{
    debugName: "step"
  }] : []);
  stepPanel = contentChild(forwardRef(() => StepPanel), ...ngDevMode ? [{
    debugName: "stepPanel"
  }] : []);
  constructor() {
    super();
    effect(() => {
      this.step().value.set(this.value());
    });
    effect(() => {
      this.stepPanel().value.set(this.value());
    });
  }
  static \u0275fac = function StepItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepItem,
    selectors: [["p-step-item"]],
    contentQueries: function StepItem_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.step, Step, 5);
        \u0275\u0275contentQuerySignal(dirIndex, ctx.stepPanel, StepPanel, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostVars: 3,
    hostBindings: function StepItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-active", ctx.isActive());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepItemStyle, {
      provide: STEPITEM_INSTANCE,
      useExisting: _StepItem
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepItem
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepItem, [{
    type: Component,
    args: [{
      selector: "p-step-item",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.data-p-active]": "isActive()"
      },
      providers: [StepItemStyle, {
        provide: STEPITEM_INSTANCE,
        useExisting: StepItem
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepItem
      }],
      hostDirectives: [Bind]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    step: [{
      type: ContentChild,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }],
    stepPanel: [{
      type: ContentChild,
      args: [forwardRef(() => StepPanel), {
        isSignal: true
      }]
    }]
  });
})();
var Step = class _Step extends BaseComponent {
  $pcStep = inject(STEP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  pcStepper = inject(forwardRef(() => Stepper));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Active value of stepper.
   * @type {number}
   * @defaultValue undefined
   * @group Props
   */
  value = model(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : []);
  /**
   * Whether the step is disabled.
   * @type {boolean}
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, ...ngDevMode ? [{
    debugName: "disabled",
    transform: (v) => transformToBoolean(v)
  }] : [{
    transform: (v) => transformToBoolean(v)
  }]);
  active = computed(() => this.pcStepper.isStepActive(this.value()), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  isStepDisabled = computed(() => !this.active() && (this.pcStepper.linear() || this.disabled()), ...ngDevMode ? [{
    debugName: "isStepDisabled"
  }] : []);
  id = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  ariaControls = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : []);
  isSeparatorVisible = computed(() => {
    if (this.pcStepper.stepList()) {
      const steps = this.pcStepper.stepList().steps();
      const index = steps.indexOf(this);
      const stepLen = steps.length;
      return index !== stepLen - 1;
    } else {
      return false;
    }
  }, ...ngDevMode ? [{
    debugName: "isSeparatorVisible"
  }] : []);
  /**
   * Content template.
   * @type {TemplateRef<StepContentTemplateContext>}
   * @group Templates
   */
  content;
  templates;
  _contentTemplate;
  _componentStyle = inject(StepStyle);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onStepClick() {
    this.pcStepper.updateValue(this.value());
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Step_BaseFactory;
    return function Step_Factory(__ngFactoryType__) {
      return (\u0275Step_BaseFactory || (\u0275Step_BaseFactory = \u0275\u0275getInheritedFactory(_Step)))(__ngFactoryType__ || _Step);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Step,
    selectors: [["p-step"]],
    contentQueries: function Step_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 6,
    hostBindings: function Step_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-current", ctx.active() ? "step" : void 0)("role", "presentation")("data-p-active", ctx.active())("data-p-disabled", ctx.isStepDisabled());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      disabled: [1, "disabled"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepStyle, {
      provide: STEP_INSTANCE,
      useExisting: _Step
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Step
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [["type", "button", 3, "click", "pBind", "tabindex", "disabled"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Step_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, Step_Conditional_0_Template, 6, 16)(1, Step_Conditional_1_Template, 2, 7);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.content && !ctx._contentTemplate ? 0 : 1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, StepperSeparator, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Step, [{
    type: Component,
    args: [{
      selector: "p-step",
      standalone: true,
      imports: [CommonModule, StepperSeparator, SharedModule, BindModule],
      template: `
        @if (!content && !_contentTemplate) {
            <button
                [attr.id]="id()"
                [class]="cx('header')"
                [pBind]="ptm('header')"
                [attr.role]="'tab'"
                [tabindex]="isStepDisabled() ? -1 : undefined"
                [attr.aria-controls]="ariaControls()"
                [disabled]="isStepDisabled()"
                (click)="onStepClick()"
                type="button"
            >
                <span [class]="cx('number')" [pBind]="ptm('number')">{{ value() }}</span>
                <span [class]="cx('title')" [pBind]="ptm('title')">
                    <ng-content></ng-content>
                </span>
            </button>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        } @else {
            <ng-container *ngTemplateOutlet="content || _contentTemplate; context: { activateCallback: onStepClick.bind(this), value: value(), active: active() }"></ng-container>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.aria-current]": 'active() ? "step" : undefined',
        "[attr.role]": '"presentation"',
        "[attr.data-p-active]": "active()",
        "[attr.data-p-disabled]": "isStepDisabled()"
      },
      providers: [StepStyle, {
        provide: STEP_INSTANCE,
        useExisting: Step
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Step
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    content: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var StepPanel = class _StepPanel extends BaseComponent {
  $pcStepPanel = inject(STEPPANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  pcStepper = inject(forwardRef(() => Stepper));
  transitionOptions = computed(() => this.pcStepper.transitionOptions(), ...ngDevMode ? [{
    debugName: "transitionOptions"
  }] : []);
  /**
   * Active value of stepper.
   * @type {number}
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  active = computed(() => this.pcStepper.value() === this.value(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  visible = signal(this.active(), ...ngDevMode ? [{
    debugName: "visible"
  }] : []);
  isVisible = computed(() => this.active() || this.isVertical() && this.visible(), ...ngDevMode ? [{
    debugName: "isVisible"
  }] : []);
  ariaControls = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : []);
  id = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  isVertical = computed(() => this.pcStepper.stepItems().length > 0, ...ngDevMode ? [{
    debugName: "isVertical"
  }] : []);
  isSeparatorVisible = computed(() => {
    if (this.pcStepper.stepItems()) {
      const stepLen = this.pcStepper.stepItems().length;
      const stepPanelElements = Y(this.pcStepper.el.nativeElement, '[data-pc-name="steppanel"]');
      const index = h(this.el.nativeElement, stepPanelElements);
      return index !== stepLen - 1;
    }
  }, ...ngDevMode ? [{
    debugName: "isSeparatorVisible"
  }] : []);
  /**
   * Content template.
   * @param {StepPanelContentTemplateContext} context - Context of the template
   * @see {@link StepPanelContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  _componentStyle = inject(StepPanelStyle);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onAnimationStart(event) {
    if (event.toState === "visible") {
      this.visible.set(true);
    }
  }
  onAnimationEnd(event) {
    if (event.toState === "hidden") {
      this.visible.set(false);
    }
  }
  updateValue(value) {
    this.pcStepper.updateValue(value);
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanel_BaseFactory;
    return function StepPanel_Factory(__ngFactoryType__) {
      return (\u0275StepPanel_BaseFactory || (\u0275StepPanel_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanel)))(__ngFactoryType__ || _StepPanel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepPanel,
    selectors: [["p-step-panel"]],
    contentQueries: function StepPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 7,
    hostBindings: function StepPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "tabpanel")("aria-controls", ctx.ariaControls())("id", ctx.id())("data-p-active", ctx.active())("data-pc-name", "steppanel");
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepPanelStyle, {
      provide: STEPPANEL_INSTANCE,
      useExisting: _StepPanel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepPanel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 14,
    consts: [[3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function StepPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, StepPanel_Conditional_0_Template, 1, 0, "p-stepper-separator");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275listener("@content.start", function StepPanel_Template_div_animation_content_start_1_listener($event) {
          return ctx.onAnimationStart($event);
        })("@content.done", function StepPanel_Template_div_animation_content_done_1_listener($event) {
          return ctx.onAnimationEnd($event);
        });
        \u0275\u0275conditionalCreate(2, StepPanel_Conditional_2_Template, 1, 6, "ng-container");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.isSeparatorVisible() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"))("@content", ctx.isVertical() ? ctx.active() ? \u0275\u0275pureFunction1(8, _c4, \u0275\u0275pureFunction1(6, _c3, ctx.transitionOptions())) : \u0275\u0275pureFunction1(12, _c5, \u0275\u0275pureFunction1(10, _c3, ctx.transitionOptions())) : void 0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isVisible() ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, StepperSeparator, SharedModule, BindModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("content", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanel, [{
    type: Component,
    args: [{
      selector: "p-step-panel",
      standalone: true,
      imports: [CommonModule, StepperSeparator, SharedModule, BindModule],
      template: `
        @if (isSeparatorVisible()) {
            <p-stepper-separator />
        }
        <div
            [pBind]="ptm('content')"
            [class]="cx('content')"
            [@content]="isVertical() ? (active() ? { value: 'visible', params: { transitionParams: transitionOptions() } } : { value: 'hidden', params: { transitionParams: transitionOptions() } }) : undefined"
            (@content.start)="onAnimationStart($event)"
            (@content.done)="onAnimationEnd($event)"
        >
            @if (isVisible()) {
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { activateCallback: updateValue.bind(this), value: value(), active: active() }"></ng-container>
            }
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.role]": '"tabpanel"',
        "[attr.aria-controls]": "ariaControls()",
        "[attr.id]": "id()",
        "[attr.data-p-active]": "active()",
        "[attr.data-pc-name]": '"steppanel"'
      },
      animations: [trigger("content", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")]), transition("void => *", animate(0))])],
      providers: [StepPanelStyle, {
        provide: STEPPANEL_INSTANCE,
        useExisting: StepPanel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepPanel
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var StepPanels = class _StepPanels extends BaseComponent {
  $pcStepPanels = inject(STEPPANELS_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(StepPanelsStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanels_BaseFactory;
    return function StepPanels_Factory(__ngFactoryType__) {
      return (\u0275StepPanels_BaseFactory || (\u0275StepPanels_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanels)))(__ngFactoryType__ || _StepPanels);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepPanels,
    selectors: [["p-step-panels"]],
    hostVars: 2,
    hostBindings: function StepPanels_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepPanelsStyle, {
      provide: STEPPANELS_INSTANCE,
      useExisting: _StepPanels
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepPanels
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepPanels_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanels, [{
    type: Component,
    args: [{
      selector: "p-step-panels",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")'
      },
      providers: [StepPanelsStyle, {
        provide: STEPPANELS_INSTANCE,
        useExisting: StepPanels
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepPanels
      }],
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var Stepper = class _Stepper extends BaseComponent {
  $pcStepper = inject(STEPPER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(StepperStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * A model that can hold a numeric value or be undefined.
   * @defaultValue undefined
   * @type {ModelSignal<number | undefined>}
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * A boolean variable that captures user input.
   * @defaultValue false
   * @type {InputSignalWithTransform<any, boolean >}
   * @group Props
   */
  linear = input(false, ...ngDevMode ? [{
    debugName: "linear",
    transform: (v) => transformToBoolean(v)
  }] : [{
    transform: (v) => transformToBoolean(v)
  }]);
  /**
   * Transition options of the animation.
   * @defaultValue 400ms cubic-bezier(0.86, 0, 0.07, 1)
   * @type {InputSignal<string >}
   * @group Props
   */
  transitionOptions = input("400ms cubic-bezier(0.86, 0, 0.07, 1)", ...ngDevMode ? [{
    debugName: "transitionOptions"
  }] : []);
  id = signal(s("pn_id_"), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  stepItems = contentChildren(StepItem, ...ngDevMode ? [{
    debugName: "stepItems"
  }] : []);
  steps = contentChildren(Step, ...ngDevMode ? [{
    debugName: "steps"
  }] : []);
  stepList = contentChild(StepList, ...ngDevMode ? [{
    debugName: "stepList"
  }] : []);
  updateValue(value) {
    this.value.set(value);
  }
  isStepActive(value) {
    return this.value() === value;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Stepper_BaseFactory;
    return function Stepper_Factory(__ngFactoryType__) {
      return (\u0275Stepper_BaseFactory || (\u0275Stepper_BaseFactory = \u0275\u0275getInheritedFactory(_Stepper)))(__ngFactoryType__ || _Stepper);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Stepper,
    selectors: [["p-stepper"]],
    contentQueries: function Stepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.stepItems, StepItem, 4);
        \u0275\u0275contentQuerySignal(dirIndex, ctx.steps, Step, 4);
        \u0275\u0275contentQuerySignal(dirIndex, ctx.stepList, StepList, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(3);
      }
    },
    hostVars: 4,
    hostBindings: function Stepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "tablist")("id", ctx.id());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      linear: [1, "linear"],
      transitionOptions: [1, "transitionOptions"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepperStyle, {
      provide: STEPPER_INSTANCE,
      useExisting: _Stepper
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Stepper
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Stepper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Stepper, [{
    type: Component,
    args: [{
      selector: "p-stepper",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [StepperStyle, {
        provide: STEPPER_INSTANCE,
        useExisting: Stepper
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Stepper
      }],
      host: {
        "[class]": 'cx("root")',
        "[attr.role]": '"tablist"',
        "[attr.id]": "id()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    linear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "linear",
        required: false
      }]
    }],
    transitionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "transitionOptions",
        required: false
      }]
    }],
    stepItems: [{
      type: ContentChildren,
      args: [forwardRef(() => StepItem), {
        isSignal: true
      }]
    }],
    steps: [{
      type: ContentChildren,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }],
    stepList: [{
      type: ContentChild,
      args: [forwardRef(() => StepList), {
        isSignal: true
      }]
    }]
  });
})();
var StepperModule = class _StepperModule {
  static \u0275fac = function StepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StepperModule,
    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule],
    exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperModule, [{
    type: NgModule,
    args: [{
      imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule],
      exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule]
    }]
  }], null, null);
})();

// src/app/features/my-orders/domain/services/my-orders-logic.service.ts
var MyOrdersLogicService = class _MyOrdersLogicService {
  orders = [
    {
      id: "ORD-5001",
      orderDate: new Date(Date.now() - 25 * 6e4),
      items: [
        { name: "Margherita Pizza", quantity: 1, price: 249 },
        { name: "Cold Coffee", quantity: 2, price: 129 }
      ],
      totalAmount: 507,
      status: "Preparing",
      deliveryAddress: "42, Jayanagar 4th Block, Bengaluru",
      estimatedDeliveryTime: "35\u201345 min"
    },
    {
      id: "ORD-5002",
      orderDate: new Date(Date.now() - 10 * 6e4),
      items: [
        { name: "Chicken Burger", quantity: 2, price: 199 },
        { name: "Mango Lassi", quantity: 1, price: 99 }
      ],
      totalAmount: 497,
      status: "Placed",
      deliveryAddress: "18, Koramangala 5th Block, Bengaluru",
      estimatedDeliveryTime: "40\u201350 min"
    },
    {
      id: "ORD-4890",
      orderDate: /* @__PURE__ */ new Date("2026-02-21T19:30:00"),
      items: [
        { name: "Paneer Tikka Pizza", quantity: 1, price: 349 },
        { name: "Garlic Breadsticks", quantity: 1, price: 119 },
        { name: "Mango Lassi", quantity: 2, price: 99 }
      ],
      totalAmount: 666,
      status: "Delivered",
      deliveryAddress: "42, Jayanagar 4th Block, Bengaluru"
    },
    {
      id: "ORD-4872",
      orderDate: /* @__PURE__ */ new Date("2026-02-20T13:15:00"),
      items: [
        { name: "Classic Veg Burger", quantity: 3, price: 149 }
      ],
      totalAmount: 447,
      status: "Delivered",
      deliveryAddress: "18, Koramangala 5th Block, Bengaluru"
    },
    {
      id: "ORD-4801",
      orderDate: /* @__PURE__ */ new Date("2026-02-18T20:00:00"),
      items: [
        { name: "Pepperoni Pizza", quantity: 1, price: 329 },
        { name: "BBQ Chicken Wings", quantity: 1, price: 229 },
        { name: "Cold Coffee", quantity: 1, price: 129 }
      ],
      totalAmount: 687,
      status: "Cancelled",
      deliveryAddress: "42, Jayanagar 4th Block, Bengaluru"
    },
    {
      id: "ORD-4755",
      orderDate: /* @__PURE__ */ new Date("2026-02-15T12:45:00"),
      items: [
        { name: "Chocolate Lava Cake", quantity: 2, price: 179 },
        { name: "Mango Lassi", quantity: 2, price: 99 }
      ],
      totalAmount: 556,
      status: "Delivered",
      deliveryAddress: "7, HSR Layout Sector 2, Bengaluru"
    }
  ];
  terminalStatuses = ["Delivered", "Cancelled"];
  /** Returns in-progress orders (not delivered/cancelled). */
  getActiveOrders() {
    return new Promise((resolve) => setTimeout(() => resolve(this.orders.filter((o) => !this.terminalStatuses.includes(o.status))), 500));
  }
  /** Returns completed or cancelled orders. */
  getPastOrders() {
    return new Promise((resolve) => setTimeout(() => resolve(this.orders.filter((o) => this.terminalStatuses.includes(o.status))), 500));
  }
  static \u0275fac = function MyOrdersLogicService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyOrdersLogicService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MyOrdersLogicService, factory: _MyOrdersLogicService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyOrdersLogicService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/my-orders/presentation/pages/my-orders-page/my-orders-page.component.ts
var _c02 = () => ({ width: "480px" });
var _c12 = () => ({ padding: "0" });
var _c22 = () => [1];
var _c32 = () => [1, 2, 3];
var _c42 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
function MyOrdersPageComponent_Conditional_6_For_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 16);
  }
}
function MyOrdersPageComponent_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 12);
    \u0275\u0275element(2, "p-skeleton", 13)(3, "p-skeleton", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275repeaterCreate(5, MyOrdersPageComponent_Conditional_6_For_4_For_6_Template, 1, 0, "p-skeleton", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17);
    \u0275\u0275element(8, "p-skeleton", 18)(9, "p-skeleton", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c42));
  }
}
function MyOrdersPageComponent_Conditional_6_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 20)(2, "div", 21);
    \u0275\u0275element(3, "p-skeleton", 13)(4, "p-skeleton", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "p-skeleton", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "p-skeleton", 24);
    \u0275\u0275elementStart(7, "div", 17);
    \u0275\u0275element(8, "p-skeleton", 25);
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275element(10, "p-skeleton", 27)(11, "p-skeleton", 27);
    \u0275\u0275elementEnd()()();
  }
}
function MyOrdersPageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "p-skeleton", 7);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275repeaterCreate(3, MyOrdersPageComponent_Conditional_6_For_4_Template, 10, 1, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "p-skeleton", 10);
    \u0275\u0275repeaterCreate(6, MyOrdersPageComponent_Conditional_6_For_7_Template, 12, 0, "div", 11, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c22));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c32));
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 31);
    \u0275\u0275text(4, "You haven't placed any orders yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6, "Browse our menu and discover something delicious to order.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 33);
    \u0275\u0275listener("click", function MyOrdersPageComponent_Conditional_7_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startExploring());
    });
    \u0275\u0275element(8, "i", 34);
    \u0275\u0275text(9, "Start Exploring ");
    \u0275\u0275elementEnd()();
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 53);
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_121_r4 = \u0275\u0275nextContext().$index;
    \u0275\u0275textInterpolate1(" ", \u0275$index_121_r4 + 1, " ");
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 56);
  }
  if (rf & 2) {
    const \u0275$index_121_r4 = \u0275\u0275nextContext().$index;
    const order_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(\u0275$index_121_r4 < ctx_r1.getActiveStep(order_r5.status) ? "bg-zinc-900" : "bg-zinc-200");
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275conditionalCreate(2, MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_For_12_Conditional_2_Template, 1, 0, "i", 53)(3, MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_For_12_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_For_12_Conditional_6_Template, 1, 2, "div", 55);
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const \u0275$index_121_r4 = ctx.$index;
    const \u0275$count_121_r7 = ctx.$count;
    const order_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275$index_121_r4 <= ctx_r1.getActiveStep(order_r5.status) ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-400");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_121_r4 < ctx_r1.getActiveStep(order_r5.status) ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275$index_121_r4 <= ctx_r1.getActiveStep(order_r5.status) ? "text-zinc-900" : "text-zinc-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r6, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_121_r4 === \u0275$count_121_r7 - 1) ? 6 : -1);
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 57);
    \u0275\u0275elementStart(1, "span", 58);
    \u0275\u0275text(2, " ETA: ");
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(order_r5.estimatedDeliveryTime);
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div")(3, "p", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 44);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "p-tag", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 46)(10, "div", 47);
    \u0275\u0275repeaterCreate(11, MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_For_12_Template, 7, 7, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 17)(14, "div", 48);
    \u0275\u0275conditionalCreate(15, MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_Conditional_15_Template, 5, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 48)(17, "span", 49);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 50);
    \u0275\u0275listener("click", function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_Template_button_click_20_listener() {
      const order_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openReceipt(order_r5));
    });
    \u0275\u0275text(21, " View Receipt ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(order_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, order_r5.orderDate, "MMM d, y \xB7 h:mm a"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", order_r5.status)("severity", ctx_r1.getStatusSeverity(order_r5.status))("rounded", true);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.trackingSteps);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(order_r5.estimatedDeliveryTime ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(19, 10, order_r5.totalAmount));
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 35)(2, "span", 36);
    \u0275\u0275element(3, "span", 37)(4, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40);
    \u0275\u0275repeaterCreate(8, MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_For_9_Template, 22, 12, "div", 41, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Tracking your order", ctx_r1.activeOrders().length > 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.activeOrders());
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_1_For_6_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_1_For_6_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const order_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.reorder(order_r9));
    });
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2, "Reorder ");
    \u0275\u0275elementEnd();
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "div", 21)(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 63);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "p-tag", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 64);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "span", 65);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 48)(16, "button", 50);
    \u0275\u0275listener("click", function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_1_For_6_Template_button_click_16_listener() {
      const order_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openReceipt(order_r9));
    });
    \u0275\u0275text(17, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_1_For_6_Conditional_18_Template, 3, 0, "button", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(order_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, order_r9.orderDate, "MMM d, y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", order_r9.status)("severity", ctx_r1.getStatusSeverity(order_r9.status))("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getItemsSummary(order_r9));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(14, 11, order_r9.totalAmount));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(order_r9.status === "Delivered" ? 18 : -1);
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "h2", 39);
    \u0275\u0275text(2, "Past Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_1_For_6_Template, 19, 13, "div", 61, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.pastOrders().length, " order", ctx_r1.pastOrders().length !== 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pastOrders());
  }
}
function MyOrdersPageComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_0_Template, 10, 1, "div", 6);
    \u0275\u0275conditionalCreate(1, MyOrdersPageComponent_Conditional_7_Conditional_1_Conditional_1_Template, 7, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.activeOrders().length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pastOrders().length > 0 ? 1 : -1);
  }
}
function MyOrdersPageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MyOrdersPageComponent_Conditional_7_Conditional_0_Template, 10, 0, "div", 28)(1, MyOrdersPageComponent_Conditional_7_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.activeOrders().length === 0 && ctx_r1.pastOrders().length === 0 ? 0 : 1);
  }
}
function MyOrdersPageComponent_Conditional_9_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 21)(2, "div", 81);
    \u0275\u0275element(3, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 83);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 44);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 21);
    \u0275\u0275element(11, "p-tag", 45);
    \u0275\u0275elementStart(12, "button", 84);
    \u0275\u0275listener("click", function MyOrdersPageComponent_Conditional_9_ng_template_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(13, "i", 85);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r12 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(o_r12.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 5, o_r12.orderDate, "MMM d, y \xB7 h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", o_r12.status)("severity", ctx_r1.getStatusSeverity(o_r12.status))("rounded", true);
  }
}
function MyOrdersPageComponent_Conditional_9_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 86)(2, "span", 87);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 88);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 89);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r13.quantity, "x");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(8, 3, item_r13.quantity * item_r13.price));
  }
}
function MyOrdersPageComponent_Conditional_9_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function MyOrdersPageComponent_Conditional_9_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const o_r12 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.reorder(o_r12);
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275text(2, "Reorder This ");
    \u0275\u0275elementEnd();
  }
}
function MyOrdersPageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MyOrdersPageComponent_Conditional_9_ng_template_0_Template, 14, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(2, "div", 69)(3, "div", 70)(4, "p", 71);
    \u0275\u0275text(5, "Delivery Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 72);
    \u0275\u0275element(7, "i", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 74)(10, "p", 75);
    \u0275\u0275text(11, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, MyOrdersPageComponent_Conditional_9_For_13_Template, 9, 5, "div", 76, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-divider");
    \u0275\u0275elementStart(15, "div", 17)(16, "span", 77);
    \u0275\u0275text(17, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 78);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, MyOrdersPageComponent_Conditional_9_Conditional_21_Template, 3, 0, "button", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r12 = ctx;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", o_r12.deliveryAddress, " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(o_r12.items);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(20, 3, o_r12.totalAmount));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(o_r12.status === "Delivered" ? 21 : -1);
  }
}
var MyOrdersPageComponent = class _MyOrdersPageComponent {
  logic = inject(MyOrdersLogicService);
  toast = inject(ToastService);
  router = inject(Router);
  /* ── State ── */
  activeOrders = signal([], ...ngDevMode ? [{ debugName: "activeOrders" }] : []);
  pastOrders = signal([], ...ngDevMode ? [{ debugName: "pastOrders" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  selectedOrder = signal(null, ...ngDevMode ? [{ debugName: "selectedOrder" }] : []);
  isModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isModalOpen" }] : []);
  /** Steps for the order-tracking stepper */
  trackingSteps = ["Placed", "Preparing", "Out for Delivery", "Delivered"];
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    return __async(this, null, function* () {
      this.loading.set(true);
      const [active, past] = yield Promise.all([
        this.logic.getActiveOrders(),
        this.logic.getPastOrders()
      ]);
      this.activeOrders.set(active);
      this.pastOrders.set(past);
      this.loading.set(false);
    });
  }
  /* ── Helpers ── */
  /** Map order status to the 0-based stepper activeStep index */
  getActiveStep(status) {
    const idx = this.trackingSteps.indexOf(status);
    return idx >= 0 ? idx : 0;
  }
  /** Summarise items as "2x Burger, 1x Fries…" */
  getItemsSummary(order) {
    return order.items.map((i) => `${i.quantity}x ${i.name}`).join(", ");
  }
  getStatusSeverity(status) {
    switch (status) {
      case "Delivered":
        return "success";
      case "Cancelled":
        return "danger";
      case "Placed":
        return "warn";
      case "Preparing":
        return "info";
      case "Out for Delivery":
        return "secondary";
    }
  }
  getStatusIcon(status) {
    switch (status) {
      case "Delivered":
        return "pi pi-check-circle";
      case "Cancelled":
        return "pi pi-times-circle";
      case "Placed":
        return "pi pi-clock";
      case "Preparing":
        return "pi pi-spin pi-cog";
      case "Out for Delivery":
        return "pi pi-truck";
    }
  }
  /* ── Modal ── */
  openReceipt(order) {
    this.selectedOrder.set(order);
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.selectedOrder.set(null);
  }
  /* ── Actions ── */
  reorder(order) {
    this.toast.success(`Reorder for ${order.id} placed! Items added to your cart.`);
  }
  startExploring() {
    this.router.navigate(["/home"]);
  }
  static \u0275fac = function MyOrdersPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyOrdersPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyOrdersPageComponent, selectors: [["app-my-orders-page"]], decls: 10, vars: 12, consts: [["header", ""], [1, "min-h-full", "bg-zinc-50", "p-6", "md:p-8"], [1, "mb-8"], [1, "text-2xl", "font-bold", "text-zinc-900", "tracking-tight"], [1, "text-sm", "text-zinc-500", "mt-1"], ["styleClass", "receipt-dialog", 3, "visibleChange", "visible", "modal", "draggable", "resizable", "closable", "contentStyle"], [1, "bg-white", "border", "border-zinc-200", "rounded-2xl", "shadow-md", "p-6", "mb-8"], ["width", "12rem", "height", "1.125rem", "styleClass", "mb-5"], [1, "flex", "flex-col", "gap-6"], [1, "border", "border-zinc-100", "rounded-xl", "p-5"], ["width", "8rem", "height", "1.125rem", "styleClass", "mb-4"], [1, "bg-white", "border", "border-zinc-200", "rounded-xl", "shadow-sm", "p-5", "mb-4"], [1, "flex", "items-center", "justify-between", "mb-4"], ["width", "6rem", "height", "0.875rem"], ["width", "8rem", "height", "1.5rem", "borderRadius", "2rem"], [1, "flex", "items-center", "gap-3", "mb-5"], ["width", "25%", "height", "0.5rem", "borderRadius", "1rem"], [1, "flex", "items-center", "justify-between"], ["width", "10rem", "height", "0.75rem"], ["width", "6rem", "height", "2rem", "borderRadius", "0.5rem"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "flex", "items-center", "gap-3"], ["width", "8rem", "height", "0.75rem"], ["width", "5rem", "height", "1.5rem", "borderRadius", "2rem"], ["width", "70%", "height", "0.75rem", "styleClass", "mb-3"], ["width", "4rem", "height", "1rem"], [1, "flex", "gap-2"], ["width", "5rem", "height", "2rem", "borderRadius", "0.5rem"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24", "text-center"], [1, "w-20", "h-20", "rounded-full", "bg-zinc-100", "flex", "items-center", "justify-center", "mb-5"], [1, "pi", "pi-shopping-bag", "text-3xl", "text-zinc-400"], [1, "text-lg", "font-semibold", "text-zinc-900", "mb-1"], [1, "text-sm", "text-zinc-500", "mb-6", "max-w-xs"], [1, "px-6", "py-2.5", "rounded-xl", "bg-zinc-900", "text-white", "text-sm", "font-semibold", "hover:bg-zinc-800", "transition-colors", "cursor-pointer", 3, "click"], [1, "pi", "pi-compass", "mr-2"], [1, "flex", "items-center", "gap-2", "mb-5"], [1, "relative", "flex", "h-2.5", "w-2.5"], [1, "animate-ping", "absolute", "inline-flex", "h-full", "w-full", "rounded-full", "bg-green-400", "opacity-75"], [1, "relative", "inline-flex", "rounded-full", "h-2.5", "w-2.5", "bg-green-500"], [1, "text-base", "font-semibold", "text-zinc-900"], [1, "flex", "flex-col", "gap-5"], [1, "border", "border-zinc-100", "rounded-xl", "p-5", "hover:border-zinc-200", "transition-colors"], [1, "flex", "items-start", "justify-between", "mb-5"], [1, "text-sm", "font-semibold", "text-zinc-900"], [1, "text-xs", "text-zinc-400", "mt-0.5"], [3, "value", "severity", "rounded"], [1, "mb-5"], [1, "flex", "items-center", "gap-1"], [1, "flex", "items-center", "gap-2"], [1, "text-sm", "font-bold", "text-zinc-900"], [1, "px-3", "py-1.5", "rounded-lg", "text-xs", "font-semibold", "bg-zinc-100", "text-zinc-700", "hover:bg-zinc-200", "transition-colors", "cursor-pointer", 3, "click"], [1, "flex", "flex-col", "items-center"], [1, "w-7", "h-7", "rounded-full", "flex", "items-center", "justify-center", "text-xs", "font-bold", "transition-colors"], [1, "pi", "pi-check", "text-[10px]"], [1, "text-[10px]", "mt-1.5", "font-medium", "whitespace-nowrap"], [1, "flex-1", "h-0.5", "rounded-full", "mx-1", "mt-[-1rem]", 3, "class"], [1, "flex-1", "h-0.5", "rounded-full", "mx-1", "mt-[-1rem]"], [1, "pi", "pi-clock", "text-xs", "text-zinc-400"], [1, "text-xs", "text-zinc-500"], [1, "font-medium", "text-zinc-700"], [1, "mb-4"], [1, "bg-white", "border", "border-zinc-200", "rounded-xl", "shadow-sm", "p-5", "mb-4", "hover:shadow-md", "transition-shadow"], [1, "flex", "items-center", "justify-between", "mb-2.5"], [1, "text-xs", "text-zinc-400"], [1, "text-sm", "text-zinc-500", "line-clamp-1", "mb-3"], [1, "text-base", "font-bold", "text-zinc-900"], [1, "px-3", "py-1.5", "rounded-lg", "text-xs", "font-semibold", "bg-zinc-900", "text-white", "hover:bg-zinc-800", "transition-colors", "cursor-pointer"], [1, "px-3", "py-1.5", "rounded-lg", "text-xs", "font-semibold", "bg-zinc-900", "text-white", "hover:bg-zinc-800", "transition-colors", "cursor-pointer", 3, "click"], [1, "pi", "pi-refresh", "text-[10px]", "mr-1"], [1, "p-6"], [1, "bg-zinc-50", "rounded-lg", "p-4", "mb-5"], [1, "text-xs", "font-medium", "text-zinc-400", "uppercase", "tracking-wide", "mb-1.5"], [1, "text-sm", "text-zinc-800", "leading-relaxed"], [1, "pi", "pi-map-marker", "text-xs", "text-zinc-400", "mr-1.5"], [1, "mb-1"], [1, "text-xs", "font-semibold", "text-zinc-500", "uppercase", "tracking-wide", "mb-3"], [1, "flex", "items-center", "justify-between", "py-2.5", "border-b", "border-zinc-100", "last:border-b-0"], [1, "text-sm", "font-semibold", "text-zinc-600", "uppercase", "tracking-wide"], [1, "text-xl", "font-bold", "text-zinc-900"], [1, "w-full", "mt-5", "py-2.5", "rounded-xl", "bg-zinc-900", "text-white", "text-sm", "font-semibold", "hover:bg-zinc-800", "transition-colors", "flex", "items-center", "justify-center", "gap-2", "cursor-pointer"], [1, "flex", "items-start", "justify-between", "w-full", "px-6", "py-5", "border-b", "border-zinc-100"], [1, "w-9", "h-9", "rounded-lg", "bg-zinc-100", "flex", "items-center", "justify-center", "shrink-0"], [1, "pi", "pi-receipt", "text-sm", "text-zinc-600"], [1, "text-base", "font-bold", "text-zinc-900", "leading-tight"], [1, "w-7", "h-7", "rounded-lg", "flex", "items-center", "justify-center", "text-zinc-400", "hover:bg-zinc-100", "hover:text-zinc-700", "transition-colors", "cursor-pointer", 3, "click"], [1, "pi", "pi-times", "text-xs"], [1, "flex", "items-baseline", "gap-2"], [1, "text-xs", "font-semibold", "text-zinc-400", "min-w-[2rem]"], [1, "text-sm", "text-zinc-800"], [1, "text-sm", "font-medium", "text-zinc-700"], [1, "w-full", "mt-5", "py-2.5", "rounded-xl", "bg-zinc-900", "text-white", "text-sm", "font-semibold", "hover:bg-zinc-800", "transition-colors", "flex", "items-center", "justify-center", "gap-2", "cursor-pointer", 3, "click"], [1, "pi", "pi-refresh", "text-xs"]], template: function MyOrdersPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
      \u0275\u0275text(3, "My Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4);
      \u0275\u0275text(5, "Track active deliveries and browse your order history");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, MyOrdersPageComponent_Conditional_6_Template, 8, 2)(7, MyOrdersPageComponent_Conditional_7_Template, 2, 1);
      \u0275\u0275elementStart(8, "p-dialog", 5);
      \u0275\u0275listener("visibleChange", function MyOrdersPageComponent_Template_p_dialog_visibleChange_8_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275conditionalCreate(9, MyOrdersPageComponent_Conditional_9_Template, 22, 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : 7);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(10, _c02));
      \u0275\u0275property("visible", ctx.isModalOpen())("modal", true)("draggable", false)("resizable", false)("closable", false)("contentStyle", \u0275\u0275pureFunction0(11, _c12));
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_8_0 = ctx.selectedOrder()) ? 9 : -1, tmp_8_0);
    }
  }, dependencies: [
    CommonModule,
    ButtonModule,
    DialogModule,
    Dialog,
    TagModule,
    Tag,
    StepperModule,
    DividerModule,
    Divider,
    SkeletonModule,
    Skeleton,
    DecimalPipe,
    DatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyOrdersPageComponent, [{
    type: Component,
    args: [{ selector: "app-my-orders-page", standalone: true, imports: [
      CommonModule,
      DatePipe,
      ButtonModule,
      DialogModule,
      TagModule,
      StepperModule,
      DividerModule,
      SkeletonModule
    ], template: `<div class="min-h-full bg-zinc-50 p-6 md:p-8">

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PAGE HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="mb-8">
    <h1 class="text-2xl font-bold text-zinc-900 tracking-tight">My Orders</h1>
    <p class="text-sm text-zinc-500 mt-1">Track active deliveries and browse your order history</p>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SKELETON LOADING \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (loading()) {
    <!-- Active order skeleton -->
    <div class="bg-white border border-zinc-200 rounded-2xl shadow-md p-6 mb-8">
      <p-skeleton width="12rem" height="1.125rem" styleClass="mb-5"></p-skeleton>
      <div class="flex flex-col gap-6">
        @for (i of [1]; track i) {
          <div class="border border-zinc-100 rounded-xl p-5">
            <div class="flex items-center justify-between mb-4">
              <p-skeleton width="6rem" height="0.875rem"></p-skeleton>
              <p-skeleton width="8rem" height="1.5rem" borderRadius="2rem"></p-skeleton>
            </div>
            <!-- Fake stepper -->
            <div class="flex items-center gap-3 mb-5">
              @for (s of [1,2,3,4]; track s) {
                <p-skeleton width="25%" height="0.5rem" borderRadius="1rem"></p-skeleton>
              }
            </div>
            <div class="flex items-center justify-between">
              <p-skeleton width="10rem" height="0.75rem"></p-skeleton>
              <p-skeleton width="6rem" height="2rem" borderRadius="0.5rem"></p-skeleton>
            </div>
          </div>
        }
      </div>
    </div>

    <!-- Past orders skeletons -->
    <p-skeleton width="8rem" height="1.125rem" styleClass="mb-4"></p-skeleton>
    @for (i of [1,2,3]; track i) {
      <div class="bg-white border border-zinc-200 rounded-xl shadow-sm p-5 mb-4">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <p-skeleton width="6rem" height="0.875rem"></p-skeleton>
            <p-skeleton width="8rem" height="0.75rem"></p-skeleton>
          </div>
          <p-skeleton width="5rem" height="1.5rem" borderRadius="2rem"></p-skeleton>
        </div>
        <p-skeleton width="70%" height="0.75rem" styleClass="mb-3"></p-skeleton>
        <div class="flex items-center justify-between">
          <p-skeleton width="4rem" height="1rem"></p-skeleton>
          <div class="flex gap-2">
            <p-skeleton width="5rem" height="2rem" borderRadius="0.5rem"></p-skeleton>
            <p-skeleton width="5rem" height="2rem" borderRadius="0.5rem"></p-skeleton>
          </div>
        </div>
      </div>
    }

  } @else {

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 EMPTY STATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (activeOrders().length === 0 && pastOrders().length === 0) {
      <div class="flex flex-col items-center justify-center py-24 text-center">
        <div class="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center mb-5">
          <i class="pi pi-shopping-bag text-3xl text-zinc-400"></i>
        </div>
        <h2 class="text-lg font-semibold text-zinc-900 mb-1">You haven't placed any orders yet</h2>
        <p class="text-sm text-zinc-500 mb-6 max-w-xs">Browse our menu and discover something delicious to order.</p>
        <button
          class="px-6 py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
          (click)="startExploring()"
        >
          <i class="pi pi-compass mr-2"></i>Start Exploring
        </button>
      </div>

    } @else {

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ACTIVE ORDERS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      @if (activeOrders().length > 0) {
        <div class="bg-white border border-zinc-200 rounded-2xl shadow-md p-6 mb-8">
          <div class="flex items-center gap-2 mb-5">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <h2 class="text-base font-semibold text-zinc-900">Tracking your order{{ activeOrders().length > 1 ? 's' : '' }}</h2>
          </div>

          <div class="flex flex-col gap-5">
            @for (order of activeOrders(); track order.id) {
              <div class="border border-zinc-100 rounded-xl p-5 hover:border-zinc-200 transition-colors">

                <!-- Top row: order info + status tag -->
                <div class="flex items-start justify-between mb-5">
                  <div>
                    <p class="text-sm font-semibold text-zinc-900">{{ order.id }}</p>
                    <p class="text-xs text-zinc-400 mt-0.5">{{ order.orderDate | date:'MMM d, y \xB7 h:mm a' }}</p>
                  </div>
                  <p-tag
                    [value]="order.status"
                    [severity]="getStatusSeverity(order.status)"
                    [rounded]="true"
                  ></p-tag>
                </div>

                <!-- Tracking progress bar -->
                <div class="mb-5">
                  <div class="flex items-center gap-1">
                    @for (step of trackingSteps; track step; let i = $index; let last = $last) {
                      <!-- Step dot -->
                      <div class="flex flex-col items-center">
                        <div
                          class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors"
                          [class]="i <= getActiveStep(order.status)
                            ? 'bg-zinc-900 text-white'
                            : 'bg-zinc-100 text-zinc-400'"
                        >
                          @if (i < getActiveStep(order.status)) {
                            <i class="pi pi-check text-[10px]"></i>
                          } @else {
                            {{ i + 1 }}
                          }
                        </div>
                        <span
                          class="text-[10px] mt-1.5 font-medium whitespace-nowrap"
                          [class]="i <= getActiveStep(order.status) ? 'text-zinc-900' : 'text-zinc-400'"
                        >
                          {{ step }}
                        </span>
                      </div>
                      <!-- Connector line -->
                      @if (!last) {
                        <div
                          class="flex-1 h-0.5 rounded-full mx-1 mt-[-1rem]"
                          [class]="i < getActiveStep(order.status) ? 'bg-zinc-900' : 'bg-zinc-200'"
                        ></div>
                      }
                    }
                  </div>
                </div>

                <!-- Bottom row: ETA + actions -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    @if (order.estimatedDeliveryTime) {
                      <i class="pi pi-clock text-xs text-zinc-400"></i>
                      <span class="text-xs text-zinc-500">
                        ETA: <span class="font-medium text-zinc-700">{{ order.estimatedDeliveryTime }}</span>
                      </span>
                    }
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-bold text-zinc-900">\u20B9{{ order.totalAmount | number }}</span>
                    <button
                      class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors cursor-pointer"
                      (click)="openReceipt(order)"
                    >
                      View Receipt
                    </button>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      }

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PAST ORDERS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      @if (pastOrders().length > 0) {
        <div class="mb-4">
          <h2 class="text-base font-semibold text-zinc-900">Past Orders</h2>
          <p class="text-xs text-zinc-400 mt-0.5">{{ pastOrders().length }} order{{ pastOrders().length !== 1 ? 's' : '' }}</p>
        </div>

        @for (order of pastOrders(); track order.id) {
          <div class="bg-white border border-zinc-200 rounded-xl shadow-sm p-5 mb-4 hover:shadow-md transition-shadow">

            <!-- Top row: ID, date, status -->
            <div class="flex items-center justify-between mb-2.5">
              <div class="flex items-center gap-3">
                <span class="text-sm font-semibold text-zinc-900">{{ order.id }}</span>
                <span class="text-xs text-zinc-400">{{ order.orderDate | date:'MMM d, y' }}</span>
              </div>
              <p-tag
                [value]="order.status"
                [severity]="getStatusSeverity(order.status)"
                [rounded]="true"
              ></p-tag>
            </div>

            <!-- Items summary -->
            <p class="text-sm text-zinc-500 line-clamp-1 mb-3">{{ getItemsSummary(order) }}</p>

            <!-- Bottom row: total + actions -->
            <div class="flex items-center justify-between">
              <span class="text-base font-bold text-zinc-900">\u20B9{{ order.totalAmount | number }}</span>
              <div class="flex items-center gap-2">
                <button
                  class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors cursor-pointer"
                  (click)="openReceipt(order)"
                >
                  View Details
                </button>
                @if (order.status === 'Delivered') {
                  <button
                    class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                    (click)="reorder(order)"
                  >
                    <i class="pi pi-refresh text-[10px] mr-1"></i>Reorder
                  </button>
                }
              </div>
            </div>
          </div>
        }
      }
    }
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 RECEIPT MODAL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <p-dialog
    [visible]="isModalOpen()"
    (visibleChange)="closeModal()"
    [modal]="true"
    [draggable]="false"
    [resizable]="false"
    [closable]="false"
    [style]="{ width: '480px' }"
    [contentStyle]="{ padding: '0' }"
    styleClass="receipt-dialog"
  >
    @if (selectedOrder(); as o) {

      <!-- \u2500\u2500 Custom header: order ID + status + close \u2500\u2500 -->
      <ng-template #header>
        <div class="flex items-start justify-between w-full px-6 py-5 border-b border-zinc-100">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
              <i class="pi pi-receipt text-sm text-zinc-600"></i>
            </div>
            <div>
              <h2 class="text-base font-bold text-zinc-900 leading-tight">{{ o.id }}</h2>
              <p class="text-xs text-zinc-400 mt-0.5">{{ o.orderDate | date:'MMM d, y \xB7 h:mm a' }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <p-tag
              [value]="o.status"
              [severity]="getStatusSeverity(o.status)"
              [rounded]="true"
            ></p-tag>
            <button
              class="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition-colors cursor-pointer"
              (click)="closeModal()"
            >
              <i class="pi pi-times text-xs"></i>
            </button>
          </div>
        </div>
      </ng-template>

      <!-- \u2500\u2500 Body \u2500\u2500 -->
      <div class="p-6">

        <!-- Delivery Address -->
        <div class="bg-zinc-50 rounded-lg p-4 mb-5">
          <p class="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1.5">Delivery Address</p>
          <p class="text-sm text-zinc-800 leading-relaxed">
            <i class="pi pi-map-marker text-xs text-zinc-400 mr-1.5"></i>{{ o.deliveryAddress }}
          </p>
        </div>

        <!-- Order Items List -->
        <div class="mb-1">
          <p class="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Items</p>
          @for (item of o.items; track item.name) {
            <div class="flex items-center justify-between py-2.5 border-b border-zinc-100 last:border-b-0">
              <div class="flex items-baseline gap-2">
                <span class="text-xs font-semibold text-zinc-400 min-w-[2rem]">{{ item.quantity }}x</span>
                <span class="text-sm text-zinc-800">{{ item.name }}</span>
              </div>
              <span class="text-sm font-medium text-zinc-700">\u20B9{{ item.quantity * item.price | number }}</span>
            </div>
          }
        </div>

        <p-divider></p-divider>

        <!-- Total -->
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-zinc-600 uppercase tracking-wide">Total</span>
          <span class="text-xl font-bold text-zinc-900">\u20B9{{ o.totalAmount | number }}</span>
        </div>

        <!-- Reorder button for delivered orders -->
        @if (o.status === 'Delivered') {
          <button
            class="w-full mt-5 py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            (click)="reorder(o); closeModal()"
          >
            <i class="pi pi-refresh text-xs"></i>Reorder This
          </button>
        }
      </div>
    }
  </p-dialog>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyOrdersPageComponent, { className: "MyOrdersPageComponent", filePath: "src/app/features/my-orders/presentation/pages/my-orders-page/my-orders-page.component.ts", lineNumber: 31 });
})();

// src/app/features/my-orders/my-orders.routes.ts
var MY_ORDERS_ROUTES = [
  {
    path: "",
    component: MyOrdersPageComponent
  }
];
export {
  MY_ORDERS_ROUTES
};
//# sourceMappingURL=chunk-S26P7N6H.js.map
