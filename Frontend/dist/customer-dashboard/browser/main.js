import {
  AuthState,
  LocalStorageService
} from "./chunk-H35S5YR6.js";
import {
  CheckIcon,
  ChevronRightIcon,
  Tooltip,
  TooltipModule
} from "./chunk-W7X3ZES4.js";
import {
  DomRendererFactory2,
  DomSanitizer,
  HttpErrorResponse,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withInterceptors
} from "./chunk-T6KHSKL3.js";
import {
  ToastService
} from "./chunk-7Y3XCAAA.js";
import {
  Badge,
  BadgeModule,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Bind,
  BindModule,
  Button,
  ButtonModule,
  CommonModule,
  ConnectedOverlayScrollHandler,
  D,
  DomHandler,
  I,
  MessageService,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  OverlayService,
  PARENT_INSTANCE,
  PrimeTemplate,
  Ripple,
  RippleModule,
  SharedModule,
  TimesIcon,
  Y,
  Yt,
  _t,
  bt,
  isPlatformBrowser,
  ke,
  l,
  providePrimeNG,
  s2 as s,
  z,
  zindexutils
} from "./chunk-FV6RVCBT.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  ErrorHandler,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Pipe,
  RendererFactory2,
  RuntimeError,
  ViewChild,
  ViewEncapsulation,
  animate,
  animateChild,
  booleanAttribute,
  catchError,
  computed,
  effect,
  filter,
  forwardRef,
  inject,
  input,
  makeEnvironmentProviders,
  numberAttribute,
  performanceMarkFeature,
  provideZoneChangeDetection,
  query,
  setClassMetadata,
  signal,
  state,
  style,
  throwError,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-O557UGG4.js";

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-ZT33MIHC.js").then((m5) => m5);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e59) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e59) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style6, value, flags) {
    this.delegate.setStyle(el, style6, value, flags);
  }
  removeStyle(el, style6, flags) {
    this.delegate.removeStyle(el, style6, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/primeng/fesm2022/primeng-icons-exclamationtriangle.mjs
var _c0 = ["data-p-icon", "exclamation-triangle"];
var ExclamationTriangleIcon = class _ExclamationTriangleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExclamationTriangleIcon_BaseFactory;
    return function ExclamationTriangleIcon_Factory(__ngFactoryType__) {
      return (\u0275ExclamationTriangleIcon_BaseFactory || (\u0275ExclamationTriangleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ExclamationTriangleIcon)))(__ngFactoryType__ || _ExclamationTriangleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ExclamationTriangleIcon,
    selectors: [["", "data-p-icon", "exclamation-triangle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 7,
    vars: 2,
    consts: [["d", "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z", "fill", "currentColor"], ["d", "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z", "fill", "currentColor"], ["d", "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ExclamationTriangleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0)(2, "path", 1)(3, "path", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "defs")(5, "clipPath", 3);
        \u0275\u0275domElement(6, "rect", 4);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(5);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExclamationTriangleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="exclamation-triangle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-home.mjs
var _c02 = ["data-p-icon", "home"];
var HomeIcon = class _HomeIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275HomeIcon_BaseFactory;
    return function HomeIcon_Factory(__ngFactoryType__) {
      return (\u0275HomeIcon_BaseFactory || (\u0275HomeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_HomeIcon)))(__ngFactoryType__ || _HomeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _HomeIcon,
    selectors: [["", "data-p-icon", "home"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.4175 6.79971C13.2874 6.80029 13.1608 6.75807 13.057 6.67955L12.4162 6.19913V12.6073C12.4141 12.7659 12.3502 12.9176 12.2379 13.0298C12.1257 13.142 11.9741 13.206 11.8154 13.208H8.61206C8.61179 13.208 8.61151 13.208 8.61123 13.2081C8.61095 13.208 8.61068 13.208 8.6104 13.208H5.41076C5.40952 13.208 5.40829 13.2081 5.40705 13.2081C5.40581 13.2081 5.40458 13.208 5.40334 13.208H2.20287C2.04418 13.206 1.89257 13.142 1.78035 13.0298C1.66813 12.9176 1.60416 12.7659 1.60209 12.6073V6.19914L0.961256 6.67955C0.833786 6.77515 0.673559 6.8162 0.515823 6.79367C0.358086 6.77114 0.215762 6.68686 0.120159 6.55939C0.0245566 6.43192 -0.0164931 6.2717 0.00604063 6.11396C0.0285744 5.95622 0.112846 5.8139 0.240316 5.7183L1.83796 4.52007L1.84689 4.51337L6.64868 0.912027C6.75267 0.834032 6.87915 0.79187 7.00915 0.79187C7.13914 0.79187 7.26562 0.834032 7.36962 0.912027L12.1719 4.51372L12.1799 4.51971L13.778 5.7183C13.8943 5.81278 13.9711 5.94732 13.9934 6.09553C14.0156 6.24373 13.9816 6.39489 13.8981 6.51934C13.8471 6.60184 13.7766 6.67054 13.6928 6.71942C13.609 6.76831 13.5144 6.79587 13.4175 6.79971ZM6.00783 12.0065H8.01045V7.60074H6.00783V12.0065ZM9.21201 12.0065V6.99995C9.20994 6.84126 9.14598 6.68965 9.03375 6.57743C8.92153 6.46521 8.76992 6.40124 8.61123 6.39917H5.40705C5.24836 6.40124 5.09675 6.46521 4.98453 6.57743C4.8723 6.68965 4.80834 6.84126 4.80627 6.99995V12.0065H2.80366V5.29836L7.00915 2.14564L11.2146 5.29836V12.0065H9.21201Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function HomeIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="home"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4175 6.79971C13.2874 6.80029 13.1608 6.75807 13.057 6.67955L12.4162 6.19913V12.6073C12.4141 12.7659 12.3502 12.9176 12.2379 13.0298C12.1257 13.142 11.9741 13.206 11.8154 13.208H8.61206C8.61179 13.208 8.61151 13.208 8.61123 13.2081C8.61095 13.208 8.61068 13.208 8.6104 13.208H5.41076C5.40952 13.208 5.40829 13.2081 5.40705 13.2081C5.40581 13.2081 5.40458 13.208 5.40334 13.208H2.20287C2.04418 13.206 1.89257 13.142 1.78035 13.0298C1.66813 12.9176 1.60416 12.7659 1.60209 12.6073V6.19914L0.961256 6.67955C0.833786 6.77515 0.673559 6.8162 0.515823 6.79367C0.358086 6.77114 0.215762 6.68686 0.120159 6.55939C0.0245566 6.43192 -0.0164931 6.2717 0.00604063 6.11396C0.0285744 5.95622 0.112846 5.8139 0.240316 5.7183L1.83796 4.52007L1.84689 4.51337L6.64868 0.912027C6.75267 0.834032 6.87915 0.79187 7.00915 0.79187C7.13914 0.79187 7.26562 0.834032 7.36962 0.912027L12.1719 4.51372L12.1799 4.51971L13.778 5.7183C13.8943 5.81278 13.9711 5.94732 13.9934 6.09553C14.0156 6.24373 13.9816 6.39489 13.8981 6.51934C13.8471 6.60184 13.7766 6.67054 13.6928 6.71942C13.609 6.76831 13.5144 6.79587 13.4175 6.79971ZM6.00783 12.0065H8.01045V7.60074H6.00783V12.0065ZM9.21201 12.0065V6.99995C9.20994 6.84126 9.14598 6.68965 9.03375 6.57743C8.92153 6.46521 8.76992 6.40124 8.61123 6.39917H5.40705C5.24836 6.40124 5.09675 6.46521 4.98453 6.57743C4.8723 6.68965 4.80834 6.84126 4.80627 6.99995V12.0065H2.80366V5.29836L7.00915 2.14564L11.2146 5.29836V12.0065H9.21201Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-infocircle.mjs
var _c03 = ["data-p-icon", "info-circle"];
var InfoCircleIcon = class _InfoCircleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InfoCircleIcon_BaseFactory;
    return function InfoCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275InfoCircleIcon_BaseFactory || (\u0275InfoCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_InfoCircleIcon)))(__ngFactoryType__ || _InfoCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InfoCircleIcon,
    selectors: [["", "data-p-icon", "info-circle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function InfoCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCircleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="info-circle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs
var _c04 = ["data-p-icon", "times-circle"];
var TimesCircleIcon = class _TimesCircleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesCircleIcon_BaseFactory;
    return function TimesCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesCircleIcon_BaseFactory || (\u0275TimesCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesCircleIcon)))(__ngFactoryType__ || _TimesCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesCircleIcon,
    selectors: [["", "data-p-icon", "times-circle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function TimesCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesCircleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="times-circle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// src/app/core/pages/acess-denied/acess-denied.component.ts
var AccessDeniedComponent = class _AccessDeniedComponent {
  router = inject(Router);
  goBack() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function AccessDeniedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccessDeniedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessDeniedComponent, selectors: [["app-access-denied"]], decls: 9, vars: 0, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-surface-0", "px-6"], [1, "w-full", "max-w-md", "flex", "flex-col", "items-center", "text-center"], [1, "h-24", "w-24", "rounded-full", "bg-zinc-900", "shadow-lg", "flex", "items-center", "justify-center", "mb-7"], [1, "pi", "pi-lock", "text-primary-300", 2, "font-size", "2.1rem", "transform", "scale(1.25)"], [1, "text-3xl", "font-semibold", "text-zinc-900", "mb-2"], [1, "text-sm", "text-zinc-500", "mb-8", "leading-relaxed"], ["label", "Return to Login ", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "onClick"]], template: function AccessDeniedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1", 4);
      \u0275\u0275text(5, "Access Denied");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " You do not have permission to view this page. Please contact your administrator if you believe this is an error. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p-button", 6);
      \u0275\u0275listener("onClick", function AccessDeniedComponent_Template_p_button_onClick_8_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [ButtonModule, Button], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessDeniedComponent, [{
    type: Component,
    args: [{
      selector: "app-access-denied",
      standalone: true,
      imports: [ButtonModule],
      template: `
    <section class="min-h-screen flex items-center justify-center bg-surface-0 px-6">
      <div class="w-full max-w-md flex flex-col items-center text-center">
        <!-- ICON CONTAINER -->
        <div
          class="h-24 w-24 rounded-full
         bg-zinc-900
         shadow-lg
         flex items-center justify-center
         mb-7"
        >
          <i class="pi pi-lock text-primary-300" style="font-size: 2.1rem; transform: scale(1.25);">
          </i>
        </div>

        <!-- TITLE -->

        <h1 class="text-3xl font-semibold text-zinc-900 mb-2">Access Denied</h1>

        <!-- DESCRIPTION -->

        <p class="text-sm text-zinc-500 mb-8 leading-relaxed">
          You do not have permission to view this page. Please contact your administrator if you
          believe this is an error.
        </p>

        <!-- BUTTON -->

        <p-button
          label="Return to Login "
          icon="pi pi-arrow-left"
          severity="secondary"
          (onClick)="goBack()"
        >
        </p-button>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessDeniedComponent, { className: "AccessDeniedComponent", filePath: "src/app/core/pages/acess-denied/acess-denied.component.ts", lineNumber: 48 });
})();

// src/app/core/pages/error/error.component.ts
var ErrorComponent = class _ErrorComponent {
  router = inject(Router);
  errorMessage = "An unexpected system error occurred. Please try again.";
  ngOnInit() {
    const stateMessage = history.state?.message;
    if (stateMessage) {
      this.errorMessage = stateMessage;
    }
  }
  reloadPage() {
    window.location.reload();
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  static \u0275fac = function ErrorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErrorComponent, selectors: [["app-error"]], decls: 11, vars: 2, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-surface-0", "px-6"], [1, "max-w-md", "w-full", "flex", "flex-col", "items-center", "text-center"], [1, "h-24", "w-24", "rounded-full", "bg-zinc-900", "shadow-lg", "flex", "items-center", "justify-center", "mb-7"], [1, "pi", "pi-exclamation-triangle", "text-primary-400", 2, "font-size", "2.2rem", "transform", "scale(1.2)"], [1, "text-3xl", "font-semibold", "text-zinc-900", "mb-2"], [1, "text-sm", "text-zinc-500", "mb-8", "leading-relaxed"], [1, "flex", "gap-3"], ["label", "Try Again", "icon", "pi pi-refresh", "severity", "secondary", 3, "onClick"], ["label", "Dashboard", "icon", "pi pi-home", "severity", "secondary", 3, "onClick", "outlined"]], template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1", 4);
      \u0275\u0275text(5, "Something went wrong");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "p-button", 7);
      \u0275\u0275listener("onClick", function ErrorComponent_Template_p_button_onClick_9_listener() {
        return ctx.reloadPage();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p-button", 8);
      \u0275\u0275listener("onClick", function ErrorComponent_Template_p_button_onClick_10_listener() {
        return ctx.goHome();
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.errorMessage, " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("outlined", true);
    }
  }, dependencies: [ButtonModule, Button, CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorComponent, [{
    type: Component,
    args: [{
      selector: "app-error",
      standalone: true,
      imports: [ButtonModule, CommonModule],
      template: `
    <section class="min-h-screen flex items-center justify-center bg-surface-0 px-6">
      <div class="max-w-md w-full flex flex-col items-center text-center">
        <!-- ICON -->

        <div
          class="h-24 w-24 rounded-full
               bg-zinc-900
               shadow-lg
               flex items-center justify-center
               mb-7"
        >
          <i
            class="pi pi-exclamation-triangle text-primary-400"
            style="font-size: 2.2rem; transform: scale(1.2)"
          >
          </i>
        </div>

        <!-- TITLE -->

        <h1 class="text-3xl font-semibold text-zinc-900 mb-2">Something went wrong</h1>

        <!-- MESSAGE -->

        <p class="text-sm text-zinc-500 mb-8 leading-relaxed">
          {{ errorMessage }}
        </p>

        <!-- ACTIONS -->

        <div class="flex gap-3">
          <p-button
            label="Try Again"
            icon="pi pi-refresh"
            severity="secondary"
            (onClick)="reloadPage()"
          >
          </p-button>

          <p-button
            label="Dashboard"
            icon="pi pi-home"
            severity="secondary"
            [outlined]="true"
            (onClick)="goHome()"
          >
          </p-button>
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErrorComponent, { className: "ErrorComponent", filePath: "src/app/core/pages/error/error.component.ts", lineNumber: 63 });
})();

// src/app/core/pages/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  router = inject(Router);
  goHome() {
    this.router.navigate(["/"]);
  }
  static \u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], decls: 9, vars: 0, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-surface-0", "px-6"], [1, "max-w-md", "w-full", "flex", "flex-col", "items-center", "text-center"], [1, "text-4xl", "font-bold", "text-zinc-900", "mb-2"], [1, "text-lg", "font-medium", "text-zinc-700", "mb-3"], [1, "text-sm", "text-zinc-500", "mb-8", "leading-relaxed"], ["label", "Return to Dashboard", "icon", "pi pi-home", "severity", "secondary", 3, "onClick"]], template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5, "Page Not Found");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " The page you are looking for doesn\u2019t exist or may have been moved. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p-button", 5);
      \u0275\u0275listener("onClick", function NotFoundComponent_Template_p_button_onClick_8_listener() {
        return ctx.goHome();
      });
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [ButtonModule, Button, CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{
      selector: "app-not-found",
      standalone: true,
      imports: [ButtonModule, CommonModule],
      template: `
    <section class="min-h-screen flex items-center justify-center bg-surface-0 px-6">
      <div class="max-w-md w-full flex flex-col items-center text-center">
        <!-- 404 TEXT -->

        <h1 class="text-4xl font-bold text-zinc-900 mb-2">404</h1>

        <h2 class="text-lg font-medium text-zinc-700 mb-3">Page Not Found</h2>

        <!-- MESSAGE -->

        <p class="text-sm text-zinc-500 mb-8 leading-relaxed">
          The page you are looking for doesn\u2019t exist or may have been moved.
        </p>

        <!-- ACTION -->

        <p-button
          label="Return to Dashboard"
          icon="pi pi-home"
          severity="secondary"
          (onClick)="goHome()"
        >
        </p-button>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/core/pages/not-found/not-found.component.ts", lineNumber: 38 });
})();

// node_modules/@primeuix/styles/dist/breadcrumb/index.mjs
var style2 = "\n    .p-breadcrumb {\n        background: dt('breadcrumb.background');\n        padding: dt('breadcrumb.padding');\n        overflow-x: auto;\n    }\n\n    .p-breadcrumb-list {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        display: flex;\n        align-items: center;\n        flex-wrap: nowrap;\n        gap: dt('breadcrumb.gap');\n    }\n\n    .p-breadcrumb-separator {\n        display: flex;\n        align-items: center;\n        color: dt('breadcrumb.separator.color');\n    }\n\n    .p-breadcrumb-separator-icon:dir(rtl) {\n        transform: rotate(180deg);\n    }\n\n    .p-breadcrumb::-webkit-scrollbar {\n        display: none;\n    }\n\n    .p-breadcrumb-item-link {\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n        gap: dt('breadcrumb.item.gap');\n        transition:\n            background dt('breadcrumb.transition.duration'),\n            color dt('breadcrumb.transition.duration'),\n            outline-color dt('breadcrumb.transition.duration'),\n            box-shadow dt('breadcrumb.transition.duration');\n        border-radius: dt('breadcrumb.item.border.radius');\n        outline-color: transparent;\n        color: dt('breadcrumb.item.color');\n    }\n\n    .p-breadcrumb-item-link:focus-visible {\n        box-shadow: dt('breadcrumb.item.focus.ring.shadow');\n        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');\n        outline-offset: dt('breadcrumb.item.focus.ring.offset');\n    }\n\n    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {\n        color: dt('breadcrumb.item.hover.color');\n    }\n\n    .p-breadcrumb-item-label {\n        transition: inherit;\n    }\n\n    .p-breadcrumb-item-icon {\n        color: dt('breadcrumb.item.icon.color');\n        transition: inherit;\n    }\n\n    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {\n        color: dt('breadcrumb.item.icon.hover.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-breadcrumb.mjs
var _c05 = ["item"];
var _c1 = ["separator"];
var _c2 = (a0) => ({
  $implicit: a0
});
var _c3 = () => ({
  exact: false
});
var _c4 = (a0) => ({
  menuitem: a0
});
function Breadcrumb_li_2_Conditional_1_0_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_li_2_Conditional_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_li_2_Conditional_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_li_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_li_2_Conditional_1_0_Template, 1, 0, null, 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r0.home));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), ctx_r0.home.icon, ctx_r0.home.iconClass));
    \u0275\u0275property("ngStyle", ctx_r0.home.iconStyle)("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("itemIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r0.cx("itemLabel"));
    \u0275\u0275property("pBind", ctx_r0.ptm("itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.home.label);
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r0.cx("itemLabel"));
    \u0275\u0275property("innerHTML", ctx_r0.home.label, \u0275\u0275sanitizeHtml)("pBind", ctx_r0.ptm("itemLabel"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_span_1_Template, 2, 4, "span", 19)(2, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_ng_template_2_Template, 1, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlHomeLabel_r3 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.escape !== false)("ngIfElse", htmlHomeLabel_r3);
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_p_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 21);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", ctx_r0.home.badge)("styleClass", ctx_r0.home.badgeStyleClass)("pBind", ctx_r0.ptm("badge"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function Breadcrumb_li_2_Conditional_2_a_0_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onClick($event, ctx_r0.home));
    });
    \u0275\u0275template(1, Breadcrumb_li_2_Conditional_2_a_0_span_1_Template, 1, 4, "span", 13)(2, Breadcrumb_li_2_Conditional_2_a_0__svg_svg_2_Template, 1, 3, "svg", 14)(3, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_Template, 4, 2, "ng-container", 15)(4, Breadcrumb_li_2_Conditional_2_a_0_p_badge_4_Template, 1, 3, "p-badge", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("itemLink"));
    \u0275\u0275property("href", ctx_r0.home.url ? ctx_r0.home.url : null, \u0275\u0275sanitizeUrl)("target", ctx_r0.home.target)("pBind", ctx_r0.ptm("itemLink"));
    \u0275\u0275attribute("aria-label", ctx_r0.homeAriaLabel)("title", ctx_r0.home.title)("tabindex", ctx_r0.home.disabled ? null : ctx_r0.home.tabindex || "0")("data-p-id", ctx_r0.home.automationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.home.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.badge);
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275styleMap(ctx_r0.home.iconStyle);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), ctx_r0.home.icon, ctx_r0.home.iconClass));
    \u0275\u0275property("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("itemIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r0.cx("itemLabel"));
    \u0275\u0275property("pBind", ctx_r0.ptm("itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.home.label);
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r0.cx("itemLabel"));
    \u0275\u0275property("innerHTML", ctx_r0.home.label, \u0275\u0275sanitizeHtml)("pBind", ctx_r0.ptm("itemLabel"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_span_1_Template, 2, 4, "span", 19)(2, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_ng_template_2_Template, 1, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlHomeRouteLabel_r5 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.escape !== false)("ngIfElse", htmlHomeRouteLabel_r5);
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_p_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 21);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", ctx_r0.home.badge)("styleClass", ctx_r0.home.badgeStyleClass)("pBind", ctx_r0.ptm("badge"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275listener("click", function Breadcrumb_li_2_Conditional_2_a_1_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onClick($event, ctx_r0.home));
    });
    \u0275\u0275template(1, Breadcrumb_li_2_Conditional_2_a_1_span_1_Template, 1, 5, "span", 23)(2, Breadcrumb_li_2_Conditional_2_a_1__svg_svg_2_Template, 1, 3, "svg", 14)(3, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_Template, 4, 2, "ng-container", 15)(4, Breadcrumb_li_2_Conditional_2_a_1_p_badge_4_Template, 1, 3, "p-badge", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("itemLink"));
    \u0275\u0275property("routerLink", ctx_r0.home.routerLink)("queryParams", ctx_r0.home.queryParams)("routerLinkActiveOptions", ctx_r0.home.routerLinkActiveOptions || \u0275\u0275pureFunction0(21, _c3))("target", ctx_r0.home.target)("fragment", ctx_r0.home.fragment)("queryParamsHandling", ctx_r0.home.queryParamsHandling)("preserveFragment", ctx_r0.home.preserveFragment)("skipLocationChange", ctx_r0.home.skipLocationChange)("replaceUrl", ctx_r0.home.replaceUrl)("state", ctx_r0.home.state)("pBind", ctx_r0.ptm("itemLink"));
    \u0275\u0275attribute("aria-label", ctx_r0.homeAriaLabel)("title", ctx_r0.home.title)("tabindex", ctx_r0.home.disabled ? null : ctx_r0.home.tabindex || "0")("data-p-id", ctx_r0.home.automationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.home.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.badge);
  }
}
function Breadcrumb_li_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_li_2_Conditional_2_a_0_Template, 5, 13, "a", 10)(1, Breadcrumb_li_2_Conditional_2_a_1_Template, 5, 22, "a", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.home.routerLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.routerLink);
  }
}
function Breadcrumb_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 8);
    \u0275\u0275conditionalCreate(1, Breadcrumb_li_2_Conditional_1_Template, 1, 4)(2, Breadcrumb_li_2_Conditional_2_Template, 2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("homeItem"), ctx_r0.home.styleClass));
    \u0275\u0275property("ngStyle", ctx_r0.home.style)("tooltipOptions", ctx_r0.home.tooltipOptions)("pBind", ctx_r0.ptm("homeItem"));
    \u0275\u0275attribute("id", ctx_r0.home.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.itemTemplate || ctx_r0._itemTemplate ? 1 : 2);
  }
}
function Breadcrumb_li_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 26);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("separatorIcon"));
  }
}
function Breadcrumb_li_3_2_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_li_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_li_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275template(1, Breadcrumb_li_3__svg_svg_1_Template, 1, 1, "svg", 24)(2, Breadcrumb_li_3_2_Template, 1, 0, null, 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("separator"));
    \u0275\u0275property("pBind", ctx_r0.ptm("separator"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.separatorTemplate && !ctx_r0._separatorTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.separatorTemplate || ctx_r0._separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_1_0_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_li_0_Conditional_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_ng_template_4_li_0_Conditional_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_ng_template_4_li_0_Conditional_1_0_Template, 1, 0, null, 9);
  }
  if (rf & 2) {
    const menuitem_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, menuitem_r6));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(5);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(menuitem_r6 == null ? null : menuitem_r6.iconStyle);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), menuitem_r6 == null ? null : menuitem_r6.icon, menuitem_r6 == null ? null : menuitem_r6.iconClass));
    \u0275\u0275property("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemIcon"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(6);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("itemLabel"));
    \u0275\u0275property("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuitem_r6 == null ? null : menuitem_r6.label);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(6);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("itemLabel"));
    \u0275\u0275property("innerHTML", menuitem_r6 == null ? null : menuitem_r6.label, \u0275\u0275sanitizeHtml)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_span_1_Template, 2, 4, "span", 19)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_ng_template_2_Template, 1, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlLabel_r10 = \u0275\u0275reference(3);
    const menuitem_r6 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (menuitem_r6 == null ? null : menuitem_r6.escape) !== false)("ngIfElse", htmlLabel_r10);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_p_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 21);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(5);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", menuitem_r6.badge)("styleClass", menuitem_r6 == null ? null : menuitem_r6.badgeStyleClass)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "badge"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_span_1_Template, 1, 5, "span", 23)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 15)(3, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_p_badge_3_Template, 1, 3, "p-badge", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const menuitem_r6 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.badge);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275listener("click", function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const menuitem_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClick($event, menuitem_r6));
    });
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_Template, 4, 3, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(3);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("itemLink"));
    \u0275\u0275property("target", menuitem_r6 == null ? null : menuitem_r6.target)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLink"));
    \u0275\u0275attribute("href", (menuitem_r6 == null ? null : menuitem_r6.url) ? menuitem_r6 == null ? null : menuitem_r6.url : null, \u0275\u0275sanitizeUrl)("title", menuitem_r6 == null ? null : menuitem_r6.title)("tabindex", (menuitem_r6 == null ? null : menuitem_r6.disabled) ? null : (menuitem_r6 == null ? null : menuitem_r6.tabindex) || "0")("data-p-id", menuitem_r6 == null ? null : menuitem_r6.automationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.itemTemplate && !ctx_r0._itemTemplate);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(4);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(menuitem_r6 == null ? null : menuitem_r6.iconStyle);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), menuitem_r6 == null ? null : menuitem_r6.icon, menuitem_r6 == null ? null : menuitem_r6.iconClass));
    \u0275\u0275property("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemIcon"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(5);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("itemLabel"));
    \u0275\u0275property("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuitem_r6 == null ? null : menuitem_r6.label);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(5);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("itemLabel"));
    \u0275\u0275property("innerHTML", menuitem_r6 == null ? null : menuitem_r6.label, \u0275\u0275sanitizeHtml)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_span_1_Template, 2, 4, "span", 19)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_ng_template_2_Template, 1, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r12 = \u0275\u0275reference(3);
    const menuitem_r6 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (menuitem_r6 == null ? null : menuitem_r6.escape) !== false)("ngIfElse", htmlRouteLabel_r12);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_p_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 21);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(4);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", menuitem_r6.badge)("styleClass", menuitem_r6 == null ? null : menuitem_r6.badgeStyleClass)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "badge"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275listener("click", function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const menuitem_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClick($event, menuitem_r6));
    });
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_span_1_Template, 1, 5, "span", 23)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_Template, 4, 2, "ng-container", 15)(3, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_p_badge_3_Template, 1, 3, "p-badge", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(3);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("itemLink"));
    \u0275\u0275property("routerLink", menuitem_r6 == null ? null : menuitem_r6.routerLink)("queryParams", menuitem_r6 == null ? null : menuitem_r6.queryParams)("routerLinkActiveOptions", (menuitem_r6 == null ? null : menuitem_r6.routerLinkActiveOptions) || \u0275\u0275pureFunction0(19, _c3))("target", menuitem_r6 == null ? null : menuitem_r6.target)("fragment", menuitem_r6 == null ? null : menuitem_r6.fragment)("queryParamsHandling", menuitem_r6 == null ? null : menuitem_r6.queryParamsHandling)("preserveFragment", menuitem_r6 == null ? null : menuitem_r6.preserveFragment)("skipLocationChange", menuitem_r6 == null ? null : menuitem_r6.skipLocationChange)("replaceUrl", menuitem_r6 == null ? null : menuitem_r6.replaceUrl)("state", menuitem_r6 == null ? null : menuitem_r6.state)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLink"));
    \u0275\u0275attribute("title", menuitem_r6 == null ? null : menuitem_r6.title)("tabindex", (menuitem_r6 == null ? null : menuitem_r6.disabled) ? null : (menuitem_r6 == null ? null : menuitem_r6.tabindex) || "0")("data-p-id", menuitem_r6 == null ? null : menuitem_r6.automationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.badge);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_Template, 2, 9, "a", 29)(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template, 4, 20, "a", 11);
  }
  if (rf & 2) {
    const menuitem_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngIf", !(menuitem_r6 == null ? null : menuitem_r6.routerLink));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.routerLink);
  }
}
function Breadcrumb_ng_template_4_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 28);
    \u0275\u0275conditionalCreate(1, Breadcrumb_ng_template_4_li_0_Conditional_1_Template, 1, 4)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_Template, 2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(menuitem_r6.style);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("item", \u0275\u0275pureFunction1(8, _c4, menuitem_r6)), menuitem_r6.styleClass));
    \u0275\u0275property("tooltipOptions", menuitem_r6.tooltipOptions)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "item"));
    \u0275\u0275attribute("id", menuitem_r6.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.itemTemplate || ctx_r0._itemTemplate ? 1 : 2);
  }
}
function Breadcrumb_ng_template_4_li_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 26);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r0.ptm("separatorIcon"));
  }
}
function Breadcrumb_ng_template_4_li_1_2_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_li_1_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_ng_template_4_li_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_1__svg_svg_1_Template, 1, 1, "svg", 24)(2, Breadcrumb_ng_template_4_li_1_2_Template, 1, 0, null, 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("separator"));
    \u0275\u0275property("pBind", ctx_r0.ptm("separator"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.separatorTemplate && !ctx_r0._separatorTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.separatorTemplate || ctx_r0._separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_ng_template_4_li_0_Template, 3, 10, "li", 27)(1, Breadcrumb_ng_template_4_li_1_Template, 3, 5, "li", 6);
  }
  if (rf & 2) {
    const menuitem_r6 = ctx.$implicit;
    const end_r13 = ctx.last;
    \u0275\u0275property("ngIf", menuitem_r6.visible !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !end_r13 && menuitem_r6.visible !== false);
  }
}
var classes = {
  root: () => ["p-breadcrumb p-component"],
  list: "p-breadcrumb-list",
  homeItem: "p-breadcrumb-home-item",
  separator: "p-breadcrumb-separator",
  item: ({
    menuitem
  }) => ["p-breadcrumb-item", {
    "p-disabled": menuitem.disabled
  }],
  itemLink: "p-breadcrumb-item-link",
  itemIcon: "p-breadcrumb-item-icon",
  itemLabel: "p-breadcrumb-item-label"
};
var BreadCrumbStyle = class _BreadCrumbStyle extends BaseStyle {
  name = "breadcrumb";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BreadCrumbStyle_BaseFactory;
    return function BreadCrumbStyle_Factory(__ngFactoryType__) {
      return (\u0275BreadCrumbStyle_BaseFactory || (\u0275BreadCrumbStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BreadCrumbStyle)))(__ngFactoryType__ || _BreadCrumbStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BreadCrumbStyle,
    factory: _BreadCrumbStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbStyle, [{
    type: Injectable
  }], null, null);
})();
var BreadcrumbClasses;
(function(BreadcrumbClasses2) {
  BreadcrumbClasses2["root"] = "p-breadcrumb";
  BreadcrumbClasses2["list"] = "p-breadcrumb-list";
  BreadcrumbClasses2["homeItem"] = "p-breadcrumb-home-item";
  BreadcrumbClasses2["separator"] = "p-breadcrumb-separator";
  BreadcrumbClasses2["item"] = "p-breadcrumb-item";
  BreadcrumbClasses2["itemLink"] = "p-breadcrumb-item-link";
  BreadcrumbClasses2["itemIcon"] = "p-breadcrumb-item-icon";
  BreadcrumbClasses2["itemLabel"] = "p-breadcrumb-item-label";
})(BreadcrumbClasses || (BreadcrumbClasses = {}));
var BREADCRUMB_INSTANCE = new InjectionToken("BREADCRUMB_INSTANCE");
var Breadcrumb = class _Breadcrumb extends BaseComponent {
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * MenuItem configuration for the home icon.
   * @group Props
   */
  home;
  /**
   * Defines a string that labels the home icon for accessibility.
   * @group Props
   */
  homeAriaLabel;
  /**
   * Fired when an item is selected.
   * @param {BreadcrumbItemClickEvent} event - custom click event.
   * @group Emits
   */
  onItemClick = new EventEmitter();
  _componentStyle = inject(BreadCrumbStyle);
  router = inject(Router);
  onClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    this.onItemClick.emit({
      originalEvent: event,
      item
    });
  }
  /**
   * Defines template option for item.
   * @group Templates
   */
  itemTemplate;
  /**
   * Defines template option for separator.
   * @group Templates
   */
  separatorTemplate;
  templates;
  _separatorTemplate;
  _itemTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "separator":
          this._separatorTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  getPTOptions(item, index, key) {
    return this.ptm(key, {
      context: {
        item,
        index
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Breadcrumb_BaseFactory;
    return function Breadcrumb_Factory(__ngFactoryType__) {
      return (\u0275Breadcrumb_BaseFactory || (\u0275Breadcrumb_BaseFactory = \u0275\u0275getInheritedFactory(_Breadcrumb)))(__ngFactoryType__ || _Breadcrumb);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Breadcrumb,
    selectors: [["p-breadcrumb"]],
    contentQueries: function Breadcrumb_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c05, 5);
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.separatorTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    inputs: {
      model: "model",
      style: "style",
      styleClass: "styleClass",
      home: "home",
      homeAriaLabel: "homeAriaLabel"
    },
    outputs: {
      onItemClick: "onItemClick"
    },
    features: [\u0275\u0275ProvidersFeature([BreadCrumbStyle, {
      provide: BREADCRUMB_INSTANCE,
      useExisting: _Breadcrumb
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Breadcrumb
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 11,
    consts: [["htmlHomeLabel", ""], ["htmlHomeRouteLabel", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "pBind"], ["pTooltip", "", 3, "class", "ngStyle", "tooltipOptions", "pBind", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["pTooltip", "", 3, "ngStyle", "tooltipOptions", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "href", "class", "target", "pBind", "click", 4, "ngIf"], ["routerLinkActive", "p-menuitem-link-active", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "class", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind", "click", 4, "ngIf"], [3, "click", "href", "target", "pBind"], [3, "class", "ngStyle", "pBind", 4, "ngIf"], ["data-p-icon", "home", 3, "class", "pBind", 4, "ngIf"], [4, "ngIf"], [3, "value", "styleClass", "pBind", 4, "ngIf"], [3, "ngStyle", "pBind"], ["data-p-icon", "home", 3, "pBind"], [3, "class", "pBind", 4, "ngIf", "ngIfElse"], [3, "innerHTML", "pBind"], [3, "value", "styleClass", "pBind"], ["routerLinkActive", "p-menuitem-link-active", 3, "click", "routerLink", "queryParams", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind"], [3, "class", "style", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-right", 3, "pBind", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-right", 3, "pBind"], ["pTooltip", "", 3, "class", "style", "tooltipOptions", "pBind", 4, "ngIf"], ["pTooltip", "", 3, "tooltipOptions", "pBind"], [3, "class", "target", "pBind", "click", 4, "ngIf"], [3, "click", "target", "pBind"]],
    template: function Breadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 4)(1, "ol", 4);
        \u0275\u0275template(2, Breadcrumb_li_2_Template, 3, 7, "li", 5)(3, Breadcrumb_li_3_Template, 3, 5, "li", 6)(4, Breadcrumb_ng_template_4_Template, 2, 2, "ng-template", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        \u0275\u0275property("pBind", ctx.ptm("root"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("list"));
        \u0275\u0275property("pBind", ctx.ptm("list"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.home && ctx.home.visible !== false);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.model && ctx.home);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.model);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, TooltipModule, Tooltip, Bind, ChevronRightIcon, HomeIcon, SharedModule, BadgeModule, Badge],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Breadcrumb, [{
    type: Component,
    args: [{
      selector: "p-breadcrumb",
      standalone: true,
      imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, TooltipModule, ChevronRightIcon, HomeIcon, SharedModule, Bind, BadgeModule],
      template: `
        <nav [pBind]="ptm('root')" [class]="cn(cx('root'), styleClass)" [style]="style">
            <ol [class]="cx('list')" [pBind]="ptm('list')">
                <li [attr.id]="home.id" [class]="cn(cx('homeItem'), home.styleClass)" [ngStyle]="home.style" *ngIf="home && home.visible !== false" pTooltip [tooltipOptions]="home.tooltipOptions" [pBind]="ptm('homeItem')">
                    @if (itemTemplate || _itemTemplate) {
                        <ng-template *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: home }"></ng-template>
                    } @else {
                        <a
                            [href]="home.url ? home.url : null"
                            *ngIf="!home.routerLink"
                            [attr.aria-label]="homeAriaLabel"
                            [class]="cx('itemLink')"
                            (click)="onClick($event, home)"
                            [target]="home.target"
                            [attr.title]="home.title"
                            [attr.tabindex]="home.disabled ? null : home.tabindex || '0'"
                            [attr.data-p-id]="home.automationId"
                            [pBind]="ptm('itemLink')"
                        >
                            <span *ngIf="home.icon" [class]="cn(cx('itemIcon'), home.icon, home.iconClass)" [ngStyle]="home.iconStyle" [pBind]="ptm('itemIcon')"></span>
                            <svg data-p-icon="home" *ngIf="!home.icon" [class]="cx('itemIcon')" [pBind]="ptm('itemIcon')" />
                            <ng-container *ngIf="home.label">
                                <span *ngIf="home.escape !== false; else htmlHomeLabel" [class]="cx('itemLabel')" [pBind]="ptm('itemLabel')">{{ home.label }}</span>
                                <ng-template #htmlHomeLabel><span [class]="cx('itemLabel')" [innerHTML]="home.label" [pBind]="ptm('itemLabel')"></span></ng-template>
                            </ng-container>
                            <p-badge *ngIf="home.badge" [value]="home.badge" [styleClass]="home.badgeStyleClass" [pBind]="ptm('badge')" />
                        </a>
                        <a
                            *ngIf="home.routerLink"
                            [routerLink]="home.routerLink"
                            routerLinkActive="p-menuitem-link-active"
                            [attr.aria-label]="homeAriaLabel"
                            [queryParams]="home.queryParams"
                            [routerLinkActiveOptions]="home.routerLinkActiveOptions || { exact: false }"
                            [class]="cx('itemLink')"
                            (click)="onClick($event, home)"
                            [target]="home.target"
                            [attr.title]="home.title"
                            [attr.tabindex]="home.disabled ? null : home.tabindex || '0'"
                            [attr.data-p-id]="home.automationId"
                            [fragment]="home.fragment"
                            [queryParamsHandling]="home.queryParamsHandling"
                            [preserveFragment]="home.preserveFragment"
                            [skipLocationChange]="home.skipLocationChange"
                            [replaceUrl]="home.replaceUrl"
                            [state]="home.state"
                            [pBind]="ptm('itemLink')"
                        >
                            <span *ngIf="home.icon" [class]="cn(cx('itemIcon'), home.icon, home.iconClass)" [style]="home.iconStyle" [pBind]="ptm('itemIcon')"></span>
                            <svg data-p-icon="home" *ngIf="!home.icon" [class]="cx('itemIcon')" [pBind]="ptm('itemIcon')" />
                            <ng-container *ngIf="home.label">
                                <span *ngIf="home.escape !== false; else htmlHomeRouteLabel" [class]="cx('itemLabel')" [pBind]="ptm('itemLabel')">{{ home.label }}</span>
                                <ng-template #htmlHomeRouteLabel><span [class]="cx('itemLabel')" [innerHTML]="home.label" [pBind]="ptm('itemLabel')"></span></ng-template>
                            </ng-container>
                            <p-badge *ngIf="home.badge" [value]="home.badge" [styleClass]="home.badgeStyleClass" [pBind]="ptm('badge')" />
                        </a>
                    }
                </li>
                <li *ngIf="model && home" [class]="cx('separator')" [pBind]="ptm('separator')">
                    <svg data-p-icon="chevron-right" *ngIf="!separatorTemplate && !_separatorTemplate" [pBind]="ptm('separatorIcon')" />
                    <ng-template *ngTemplateOutlet="separatorTemplate || _separatorTemplate"></ng-template>
                </li>
                <ng-template ngFor let-menuitem let-end="last" let-i="index" [ngForOf]="model">
                    <li
                        *ngIf="menuitem.visible !== false"
                        [class]="cn(cx('item', { menuitem }), menuitem.styleClass)"
                        [attr.id]="menuitem.id"
                        [style]="menuitem.style"
                        pTooltip
                        [tooltipOptions]="menuitem.tooltipOptions"
                        [pBind]="getPTOptions(menuitem, i, 'item')"
                    >
                        @if (itemTemplate || _itemTemplate) {
                            <ng-template *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: menuitem }"></ng-template>
                        } @else {
                            <a
                                *ngIf="!menuitem?.routerLink"
                                [attr.href]="menuitem?.url ? menuitem?.url : null"
                                [class]="cx('itemLink')"
                                (click)="onClick($event, menuitem)"
                                [target]="menuitem?.target"
                                [attr.title]="menuitem?.title"
                                [attr.tabindex]="menuitem?.disabled ? null : menuitem?.tabindex || '0'"
                                [attr.data-p-id]="menuitem?.automationId"
                                [pBind]="getPTOptions(menuitem, i, 'itemLink')"
                            >
                                <ng-container *ngIf="!itemTemplate && !_itemTemplate">
                                    <span *ngIf="menuitem?.icon" [class]="cn(cx('itemIcon'), menuitem?.icon, menuitem?.iconClass)" [style]="menuitem?.iconStyle" [pBind]="getPTOptions(menuitem, i, 'itemIcon')"></span>
                                    <ng-container *ngIf="menuitem?.label">
                                        <span *ngIf="menuitem?.escape !== false; else htmlLabel" [class]="cx('itemLabel')" [pBind]="getPTOptions(menuitem, i, 'itemLabel')">{{ menuitem?.label }}</span>
                                        <ng-template #htmlLabel><span [class]="cx('itemLabel')" [innerHTML]="menuitem?.label" [pBind]="getPTOptions(menuitem, i, 'itemLabel')"></span></ng-template>
                                    </ng-container>
                                    <p-badge *ngIf="menuitem?.badge" [value]="menuitem.badge" [styleClass]="menuitem?.badgeStyleClass" [pBind]="getPTOptions(menuitem, i, 'badge')" />
                                </ng-container>
                            </a>
                            <a
                                *ngIf="menuitem?.routerLink"
                                [routerLink]="menuitem?.routerLink"
                                routerLinkActive="p-menuitem-link-active"
                                [queryParams]="menuitem?.queryParams"
                                [routerLinkActiveOptions]="menuitem?.routerLinkActiveOptions || { exact: false }"
                                [class]="cx('itemLink')"
                                (click)="onClick($event, menuitem)"
                                [target]="menuitem?.target"
                                [attr.title]="menuitem?.title"
                                [attr.tabindex]="menuitem?.disabled ? null : menuitem?.tabindex || '0'"
                                [attr.data-p-id]="menuitem?.automationId"
                                [fragment]="menuitem?.fragment"
                                [queryParamsHandling]="menuitem?.queryParamsHandling"
                                [preserveFragment]="menuitem?.preserveFragment"
                                [skipLocationChange]="menuitem?.skipLocationChange"
                                [replaceUrl]="menuitem?.replaceUrl"
                                [state]="menuitem?.state"
                                [pBind]="getPTOptions(menuitem, i, 'itemLink')"
                            >
                                <span *ngIf="menuitem?.icon" [class]="cn(cx('itemIcon'), menuitem?.icon, menuitem?.iconClass)" [style]="menuitem?.iconStyle" [pBind]="getPTOptions(menuitem, i, 'itemIcon')"></span>
                                <ng-container *ngIf="menuitem?.label">
                                    <span *ngIf="menuitem?.escape !== false; else htmlRouteLabel" [class]="cx('itemLabel')" [pBind]="getPTOptions(menuitem, i, 'itemLabel')">{{ menuitem?.label }}</span>
                                    <ng-template #htmlRouteLabel><span [class]="cx('itemLabel')" [innerHTML]="menuitem?.label" [pBind]="getPTOptions(menuitem, i, 'itemLabel')"></span></ng-template>
                                </ng-container>
                                <p-badge *ngIf="menuitem?.badge" [value]="menuitem.badge" [styleClass]="menuitem?.badgeStyleClass" [pBind]="getPTOptions(menuitem, i, 'badge')" />
                            </a>
                        }
                    </li>
                    <li *ngIf="!end && menuitem.visible !== false" [class]="cx('separator')" [pBind]="ptm('separator')">
                        <svg data-p-icon="chevron-right" *ngIf="!separatorTemplate && !_separatorTemplate" [pBind]="ptm('separatorIcon')" />
                        <ng-template *ngTemplateOutlet="separatorTemplate || _separatorTemplate"></ng-template>
                    </li>
                </ng-template>
            </ol>
        </nav>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BreadCrumbStyle, {
        provide: BREADCRUMB_INSTANCE,
        useExisting: Breadcrumb
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Breadcrumb
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    home: [{
      type: Input
    }],
    homeAriaLabel: [{
      type: Input
    }],
    onItemClick: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item"]
    }],
    separatorTemplate: [{
      type: ContentChild,
      args: ["separator"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var BreadcrumbModule = class _BreadcrumbModule {
  static \u0275fac = function BreadcrumbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BreadcrumbModule,
    imports: [Breadcrumb, SharedModule],
    exports: [Breadcrumb, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Breadcrumb, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbModule, [{
    type: NgModule,
    args: [{
      imports: [Breadcrumb, SharedModule],
      exports: [Breadcrumb, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/avatar/index.mjs
var style3 = "\n    .p-avatar {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: dt('avatar.width');\n        height: dt('avatar.height');\n        font-size: dt('avatar.font.size');\n        background: dt('avatar.background');\n        color: dt('avatar.color');\n        border-radius: dt('avatar.border.radius');\n    }\n\n    .p-avatar-image {\n        background: transparent;\n    }\n\n    .p-avatar-circle {\n        border-radius: 50%;\n    }\n\n    .p-avatar-circle img {\n        border-radius: 50%;\n    }\n\n    .p-avatar-icon {\n        font-size: dt('avatar.icon.size');\n        width: dt('avatar.icon.size');\n        height: dt('avatar.icon.size');\n    }\n\n    .p-avatar img {\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-avatar-lg {\n        width: dt('avatar.lg.width');\n        height: dt('avatar.lg.width');\n        font-size: dt('avatar.lg.font.size');\n    }\n\n    .p-avatar-lg .p-avatar-icon {\n        font-size: dt('avatar.lg.icon.size');\n        width: dt('avatar.lg.icon.size');\n        height: dt('avatar.lg.icon.size');\n    }\n\n    .p-avatar-xl {\n        width: dt('avatar.xl.width');\n        height: dt('avatar.xl.width');\n        font-size: dt('avatar.xl.font.size');\n    }\n\n    .p-avatar-xl .p-avatar-icon {\n        font-size: dt('avatar.xl.icon.size');\n        width: dt('avatar.xl.icon.size');\n        height: dt('avatar.xl.icon.size');\n    }\n\n    .p-avatar-group {\n        display: flex;\n        align-items: center;\n    }\n\n    .p-avatar-group .p-avatar + .p-avatar {\n        margin-inline-start: dt('avatar.group.offset');\n    }\n\n    .p-avatar-group .p-avatar {\n        border: 2px solid dt('avatar.group.border.color');\n    }\n\n    .p-avatar-group .p-avatar-lg + .p-avatar-lg {\n        margin-inline-start: dt('avatar.lg.group.offset');\n    }\n\n    .p-avatar-group .p-avatar-xl + .p-avatar-xl {\n        margin-inline-start: dt('avatar.xl.group.offset');\n    }\n";

// node_modules/primeng/fesm2022/primeng-avatar.mjs
var _c06 = ["*"];
function Avatar_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275property("pBind", ctx_r0.ptm("label"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function Avatar_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.icon);
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"))("ngClass", ctx_r0.cx("icon"));
  }
}
function Avatar_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Avatar_ng_template_2_span_0_Template, 1, 4, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const imageTemplate_r2 = \u0275\u0275reference(5);
    \u0275\u0275property("ngIf", ctx_r0.icon)("ngIfElse", imageTemplate_r2);
  }
}
function Avatar_ng_template_4_img_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 7);
    \u0275\u0275listener("error", function Avatar_ng_template_4_img_0_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.imageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("image"))("src", ctx_r0.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", ctx_r0.ariaLabel);
  }
}
function Avatar_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Avatar_ng_template_4_img_0_Template, 1, 3, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.image);
  }
}
var classes2 = {
  root: ({
    instance
  }) => ["p-avatar p-component", {
    "p-avatar-image": instance.image != null,
    "p-avatar-circle": instance.shape === "circle",
    "p-avatar-lg": instance.size === "large",
    "p-avatar-xl": instance.size === "xlarge"
  }],
  label: "p-avatar-label",
  icon: "p-avatar-icon"
};
var AvatarStyle = class _AvatarStyle extends BaseStyle {
  name = "avatar";
  style = style3;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AvatarStyle_BaseFactory;
    return function AvatarStyle_Factory(__ngFactoryType__) {
      return (\u0275AvatarStyle_BaseFactory || (\u0275AvatarStyle_BaseFactory = \u0275\u0275getInheritedFactory(_AvatarStyle)))(__ngFactoryType__ || _AvatarStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AvatarStyle,
    factory: _AvatarStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarStyle, [{
    type: Injectable
  }], null, null);
})();
var AvatarClasses;
(function(AvatarClasses2) {
  AvatarClasses2["root"] = "p-avatar";
  AvatarClasses2["label"] = "p-avatar-label";
  AvatarClasses2["icon"] = "p-avatar-icon";
})(AvatarClasses || (AvatarClasses = {}));
var AVATAR_INSTANCE = new InjectionToken("AVATAR_INSTANCE");
var Avatar = class _Avatar extends BaseComponent {
  $pcAvatar = inject(AVATAR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Size of the element.
   * @group Props
   */
  size = "normal";
  /**
   * Shape of the element.
   * @group Props
   */
  shape = "square";
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Establishes a string value that labels the component.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  _componentStyle = inject(AvatarStyle);
  imageError(event) {
    this.onImageError.emit(event);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Avatar_BaseFactory;
    return function Avatar_Factory(__ngFactoryType__) {
      return (\u0275Avatar_BaseFactory || (\u0275Avatar_BaseFactory = \u0275\u0275getInheritedFactory(_Avatar)))(__ngFactoryType__ || _Avatar);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Avatar,
    selectors: [["p-avatar"]],
    hostVars: 4,
    hostBindings: function Avatar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      size: "size",
      shape: "shape",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onImageError: "onImageError"
    },
    features: [\u0275\u0275ProvidersFeature([AvatarStyle, {
      provide: AVATAR_INSTANCE,
      useExisting: _Avatar
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Avatar
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c06,
    decls: 6,
    vars: 2,
    consts: [["iconTemplate", ""], ["imageTemplate", ""], [3, "pBind", "class", 4, "ngIf", "ngIfElse"], [3, "pBind"], [3, "pBind", "class", "ngClass", 4, "ngIf", "ngIfElse"], [3, "pBind", "ngClass"], [3, "pBind", "src", "error", 4, "ngIf"], [3, "error", "pBind", "src"]],
    template: function Avatar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Avatar_span_1_Template, 2, 4, "span", 2)(2, Avatar_ng_template_2_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, Avatar_ng_template_4_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const iconTemplate_r4 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.label)("ngIfElse", iconTemplate_r4);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Avatar, [{
    type: Component,
    args: [{
      selector: "p-avatar",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <ng-content></ng-content>
        <span [pBind]="ptm('label')" [class]="cx('label')" *ngIf="label; else iconTemplate">{{ label }}</span>
        <ng-template #iconTemplate><span [pBind]="ptm('icon')" [class]="icon" [ngClass]="cx('icon')" *ngIf="icon; else imageTemplate"></span></ng-template>
        <ng-template #imageTemplate><img [pBind]="ptm('image')" [src]="image" *ngIf="image" (error)="imageError($event)" [attr.aria-label]="ariaLabel" /></ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-labelledby]": "ariaLabelledBy"
      },
      providers: [AvatarStyle, {
        provide: AVATAR_INSTANCE,
        useExisting: Avatar
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Avatar
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onImageError: [{
      type: Output
    }]
  });
})();
var AvatarModule = class _AvatarModule {
  static \u0275fac = function AvatarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AvatarModule,
    imports: [Avatar, SharedModule],
    exports: [Avatar, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Avatar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarModule, [{
    type: NgModule,
    args: [{
      imports: [Avatar, SharedModule],
      exports: [Avatar, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/menu/index.mjs
var style4 = "\n    .p-menu {\n        background: dt('menu.background');\n        color: dt('menu.color');\n        border: 1px solid dt('menu.border.color');\n        border-radius: dt('menu.border.radius');\n        min-width: 12.5rem;\n    }\n\n    .p-menu-list {\n        margin: 0;\n        padding: dt('menu.list.padding');\n        outline: 0 none;\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        gap: dt('menu.list.gap');\n    }\n\n    .p-menu-item-content {\n        transition:\n            background dt('menu.transition.duration'),\n            color dt('menu.transition.duration');\n        border-radius: dt('menu.item.border.radius');\n        color: dt('menu.item.color');\n        overflow: hidden;\n    }\n\n    .p-menu-item-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n        color: inherit;\n        padding: dt('menu.item.padding');\n        gap: dt('menu.item.gap');\n        user-select: none;\n        outline: 0 none;\n    }\n\n    .p-menu-item-label {\n        line-height: 1;\n    }\n\n    .p-menu-item-icon {\n        color: dt('menu.item.icon.color');\n    }\n\n    .p-menu-item.p-focus .p-menu-item-content {\n        color: dt('menu.item.focus.color');\n        background: dt('menu.item.focus.background');\n    }\n\n    .p-menu-item.p-focus .p-menu-item-icon {\n        color: dt('menu.item.icon.focus.color');\n    }\n\n    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {\n        color: dt('menu.item.focus.color');\n        background: dt('menu.item.focus.background');\n    }\n\n    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {\n        color: dt('menu.item.icon.focus.color');\n    }\n\n    .p-menu-overlay {\n        box-shadow: dt('menu.shadow');\n    }\n\n    .p-menu-submenu-label {\n        background: dt('menu.submenu.label.background');\n        padding: dt('menu.submenu.label.padding');\n        color: dt('menu.submenu.label.color');\n        font-weight: dt('menu.submenu.label.font.weight');\n    }\n\n    .p-menu-separator {\n        border-block-start: 1px solid dt('menu.separator.border.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-menu.mjs
var _c07 = ["pMenuItemContent", ""];
var _c12 = (a0) => ({
  $implicit: a0
});
var _c22 = () => ({
  exact: false
});
var _c32 = (a0) => ({
  item: a0
});
function MenuItemContent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const itemContent_r3 = \u0275\u0275reference(4);
    \u0275\u0275classMap(ctx_r1.cx("itemLink"));
    \u0275\u0275property("target", ctx_r1.item.target)("pBind", ctx_r1.getPTOptions("itemLink"));
    \u0275\u0275attribute("title", ctx_r1.item.title)("href", ctx_r1.item.url || null, \u0275\u0275sanitizeUrl)("data-automationid", ctx_r1.item.automationId)("tabindex", -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c12, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const itemContent_r3 = \u0275\u0275reference(4);
    \u0275\u0275classMap(ctx_r1.cx("itemLink"));
    \u0275\u0275property("routerLink", ctx_r1.item.routerLink)("queryParams", ctx_r1.item.queryParams)("routerLinkActiveOptions", ctx_r1.item.routerLinkActiveOptions || \u0275\u0275pureFunction0(18, _c22))("target", ctx_r1.item.target)("fragment", ctx_r1.item.fragment)("queryParamsHandling", ctx_r1.item.queryParamsHandling)("preserveFragment", ctx_r1.item.preserveFragment)("skipLocationChange", ctx_r1.item.skipLocationChange)("replaceUrl", ctx_r1.item.replaceUrl)("state", ctx_r1.item.state)("pBind", ctx_r1.getPTOptions("itemLink"));
    \u0275\u0275attribute("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("title", ctx_r1.item.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(19, _c12, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_1_Template, 2, 12, "a", 4)(2, MenuItemContent_ng_container_1_a_2_Template, 2, 21, "a", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.item == null ? null : ctx_r1.item.routerLink));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.item == null ? null : ctx_r1.item.routerLink);
  }
}
function MenuItemContent_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function MenuItemContent_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MenuItemContent_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenuItemContent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MenuItemContent_ng_container_2_1_Template, 1, 0, null, 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c12, ctx_r1.item));
  }
}
function MenuItemContent_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.item.iconStyle);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemIcon", \u0275\u0275pureFunction1(6, _c32, ctx_r1.item)), ctx_r1.item.iconClass));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("itemIcon"));
    \u0275\u0275attribute("data-pc-section", "itemicon");
  }
}
function MenuItemContent_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("itemLabel"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("itemLabel"));
    \u0275\u0275attribute("data-pc-section", "itemlabel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.item.label);
  }
}
function MenuItemContent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 3, ctx_r1.item.label), \u0275\u0275sanitizeHtml)("pBind", ctx_r1.getPTOptions("itemLabel"));
    \u0275\u0275attribute("data-pc-section", "itemlabel");
  }
}
function MenuItemContent_ng_template_3_p_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styleClass", ctx_r1.item.badgeStyleClass)("value", ctx_r1.item.badge)("pt", ctx_r1.getPTOptions("pcBadge"));
  }
}
function MenuItemContent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MenuItemContent_ng_template_3_span_0_Template, 1, 8, "span", 9)(1, MenuItemContent_ng_template_3_span_1_Template, 2, 5, "span", 10)(2, MenuItemContent_ng_template_3_ng_template_2_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, MenuItemContent_ng_template_3_p_badge_4_Template, 1, 3, "p-badge", 11);
  }
  if (rf & 2) {
    const htmlLabel_r4 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.item.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.item.escape !== false)("ngIfElse", htmlLabel_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.item.badge);
  }
}
var _c42 = ["start"];
var _c5 = ["end"];
var _c6 = ["header"];
var _c7 = ["item"];
var _c8 = ["submenuheader"];
var _c9 = ["list"];
var _c10 = ["container"];
var _c11 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c122 = (a0) => ({
  value: "visible",
  params: a0
});
var _c13 = (a0, a1) => ({
  item: a0,
  id: a1
});
function Menu_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, Menu_div_0_div_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("start"));
    \u0275\u0275property("pBind", ctx_r1.ptm("start"));
    \u0275\u0275attribute("data-pc-section", "start");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.startTemplate ?? ctx_r1._startTemplate);
  }
}
function Menu_div_0_5_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
    \u0275\u0275property("pBind", ctx_r1.ptm("separator"));
    \u0275\u0275attribute("data-pc-section", "separator");
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const submenu_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(submenu_r3.label);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const submenu_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, submenu_r3.label), \u0275\u0275sanitizeHtml);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template, 2, 1, "span", 16)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlSubmenuLabel_r4 = \u0275\u0275reference(3);
    const submenu_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submenu_r3.escape !== false)("ngIfElse", htmlSubmenuLabel_r4);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_div_0_5_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 14);
    \u0275\u0275template(1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template, 4, 2, "ng-container", 7)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const submenu_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("submenuLabel"));
    \u0275\u0275property("pBind", ctx_r1.ptm("submenuLabel"))("tooltipOptions", submenu_r3.tooltipOptions);
    \u0275\u0275attribute("data-automationid", submenu_r3.automationId)("id", ctx_r1.menuitemId(submenu_r3, ctx_r1.id, i_r6))("data-pc-section", "submenulabel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submenuHeaderTemplate && !ctx_r1._submenuHeaderTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.submenuHeaderTemplate ?? ctx_r1._submenuHeaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c12, submenu_r3));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
    \u0275\u0275property("pBind", ctx_r1.ptm("separator"));
    \u0275\u0275attribute("data-pc-section", "separator");
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275listener("onMenuItemClick", function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template_li_onMenuItemClick_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r7 = \u0275\u0275nextContext();
      const item_r9 = ctx_r7.$implicit;
      const j_r10 = ctx_r7.index;
      const i_r6 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const item_r9 = ctx_r7.$implicit;
    const j_r10 = ctx_r7.index;
    const i_r6 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(item_r9.style);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("item", \u0275\u0275pureFunction2(15, _c13, item_r9, ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10))), item_r9 == null ? null : item_r9.styleClass));
    \u0275\u0275property("pMenuItemContent", item_r9)("itemTemplate", ctx_r1.itemTemplate ?? ctx_r1._itemTemplate)("idx", j_r10)("menuitemId", ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10))("tooltipOptions", item_r9.tooltipOptions);
    \u0275\u0275attribute("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r9.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10)))("data-p-disabled", ctx_r1.disabled(item_r9.disabled))("aria-disabled", ctx_r1.disabled(item_r9.disabled))("id", ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template, 1, 4, "li", 11)(1, Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template, 1, 18, "li", 18);
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const submenu_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", item_r9.separator && (item_r9.visible !== false || submenu_r3.visible !== false));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r9.separator && item_r9.visible !== false && (item_r9.visible !== void 0 || submenu_r3.visible !== false));
  }
}
function Menu_div_0_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_5_ng_template_0_li_0_Template, 1, 4, "li", 11)(1, Menu_div_0_5_ng_template_0_li_1_Template, 3, 12, "li", 12)(2, Menu_div_0_5_ng_template_0_ng_template_2_Template, 2, 2, "ng-template", 10);
  }
  if (rf & 2) {
    const submenu_r3 = ctx.$implicit;
    \u0275\u0275property("ngIf", submenu_r3.separator && submenu_r3.visible !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !submenu_r3.separator);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", submenu_r3.items);
  }
}
function Menu_div_0_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_5_ng_template_0_Template, 3, 3, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_6_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
    \u0275\u0275property("pBind", ctx_r1.ptm("separator"));
    \u0275\u0275attribute("data-pc-section", "separator");
  }
}
function Menu_div_0_6_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 21);
    \u0275\u0275listener("onMenuItemClick", function Menu_div_0_6_ng_template_0_li_1_Template_li_onMenuItemClick_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r11 = \u0275\u0275nextContext();
      const item_r13 = ctx_r11.$implicit;
      const i_r14 = ctx_r11.index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext();
    const item_r13 = ctx_r11.$implicit;
    const i_r14 = ctx_r11.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("item", \u0275\u0275pureFunction2(14, _c13, item_r13, ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14))), item_r13 == null ? null : item_r13.styleClass));
    \u0275\u0275property("pMenuItemContent", item_r13)("itemTemplate", ctx_r1.itemTemplate ?? ctx_r1._itemTemplate)("idx", i_r14)("menuitemId", ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14))("ngStyle", item_r13.style)("tooltipOptions", item_r13.tooltipOptions);
    \u0275\u0275attribute("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r13.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14)))("data-p-disabled", ctx_r1.disabled(item_r13.disabled))("aria-disabled", ctx_r1.disabled(item_r13.disabled))("id", ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14));
  }
}
function Menu_div_0_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_6_ng_template_0_li_0_Template, 1, 4, "li", 11)(1, Menu_div_0_6_ng_template_0_li_1_Template, 1, 17, "li", 20);
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275property("ngIf", item_r13.separator && item_r13.visible !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r13.separator && item_r13.visible !== false);
  }
}
function Menu_div_0_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_6_ng_template_0_Template, 2, 2, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, Menu_div_0_div_7_ng_container_1_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("end"));
    \u0275\u0275property("pBind", ctx_r1.ptm("end"));
    \u0275\u0275attribute("data-pc-section", "end");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.endTemplate ?? ctx_r1._endTemplate);
  }
}
function Menu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4, 0);
    \u0275\u0275listener("click", function Menu_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function Menu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Menu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    \u0275\u0275template(2, Menu_div_0_div_2_Template, 2, 5, "div", 5);
    \u0275\u0275elementStart(3, "ul", 6, 1);
    \u0275\u0275listener("focus", function Menu_div_0_Template_ul_focus_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListFocus($event));
    })("blur", function Menu_div_0_Template_ul_blur_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListBlur($event));
    })("keydown", function Menu_div_0_Template_ul_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListKeyDown($event));
    });
    \u0275\u0275template(5, Menu_div_0_5_Template, 1, 1, null, 7)(6, Menu_div_0_6_Template, 1, 1, null, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Menu_div_0_div_7_Template, 2, 5, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.sx("root"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("ngStyle", ctx_r1.style)("@overlayAnimation", \u0275\u0275pureFunction1(26, _c122, \u0275\u0275pureFunction2(23, _c11, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.popup !== true)("pBind", ctx_r1.ptm("root"));
    \u0275\u0275attribute("data-pc-name", "menu")("id", ctx_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.startTemplate ?? ctx_r1._startTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("list"));
    \u0275\u0275property("pBind", ctx_r1.ptm("list"));
    \u0275\u0275attribute("id", ctx_r1.id + "_list")("tabindex", ctx_r1.getTabIndexValue())("data-pc-section", "menu")("aria-activedescendant", ctx_r1.activedescendant())("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasSubMenu());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasSubMenu());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.endTemplate ?? ctx_r1._endTemplate);
  }
}
var inlineStyles = {
  root: ({
    instance
  }) => ({
    position: instance.popup ? "absolute" : "relative"
  })
};
var classes3 = {
  root: ({
    instance
  }) => ["p-menu p-component", {
    "p-menu-overlay": instance.popup
  }],
  start: "p-menu-start",
  list: "p-menu-list",
  submenuLabel: "p-menu-submenu-label",
  separator: "p-menu-separator",
  end: "p-menu-end",
  item: ({
    instance,
    item,
    id
  }) => ["p-menu-item", {
    "p-focus": instance.focusedOptionId() && id === instance.focusedOptionId(),
    "p-disabled": instance.disabled(item.disabled)
  }, item.styleClass],
  itemContent: "p-menu-item-content",
  itemLink: "p-menu-item-link",
  itemIcon: ({
    item
  }) => ["p-menu-item-icon", item.icon, item.iconClass],
  itemLabel: "p-menu-item-label"
};
var MenuStyle = class _MenuStyle extends BaseStyle {
  name = "menu";
  style = style4;
  classes = classes3;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MenuStyle_BaseFactory;
    return function MenuStyle_Factory(__ngFactoryType__) {
      return (\u0275MenuStyle_BaseFactory || (\u0275MenuStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MenuStyle)))(__ngFactoryType__ || _MenuStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MenuStyle,
    factory: _MenuStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuStyle, [{
    type: Injectable
  }], null, null);
})();
var MenuClasses;
(function(MenuClasses2) {
  MenuClasses2["root"] = "p-menu";
  MenuClasses2["start"] = "p-menu-start";
  MenuClasses2["list"] = "p-menu-list";
  MenuClasses2["submenuItem"] = "p-menu-submenu-item";
  MenuClasses2["separator"] = "p-menu-separator";
  MenuClasses2["end"] = "p-menu-end";
  MenuClasses2["item"] = "p-menu-item";
  MenuClasses2["itemContent"] = "p-menu-item-content";
  MenuClasses2["itemLink"] = "p-menu-item-link";
  MenuClasses2["itemIcon"] = "p-menu-item-icon";
  MenuClasses2["itemLabel"] = "p-menu-item-label";
})(MenuClasses || (MenuClasses = {}));
var MENU_INSTANCE = new InjectionToken("MENU_INSTANCE");
var SafeHtmlPipe = class _SafeHtmlPipe {
  platformId;
  sanitizer;
  constructor(platformId, sanitizer) {
    this.platformId = platformId;
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (!value || !isPlatformBrowser(this.platformId)) {
      return value;
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static \u0275fac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafeHtmlPipe)(\u0275\u0275directiveInject(PLATFORM_ID, 16), \u0275\u0275directiveInject(DomSanitizer, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "safeHtml",
    type: _SafeHtmlPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml",
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: DomSanitizer
  }], null);
})();
var MenuItemContent = class _MenuItemContent extends BaseComponent {
  item;
  itemTemplate;
  menuitemId = input("", ...ngDevMode ? [{
    debugName: "menuitemId"
  }] : []);
  idx = input(0, ...ngDevMode ? [{
    debugName: "idx"
  }] : []);
  onMenuItemClick = new EventEmitter();
  menu;
  _componentStyle = inject(MenuStyle);
  hostName = "Menu";
  constructor(menu) {
    super();
    this.menu = menu;
  }
  onItemClick(event, item) {
    this.onMenuItemClick.emit({
      originalEvent: event,
      item
    });
  }
  getPTOptions(key) {
    return this.menu.getPTOptions(key, this.item, this.idx(), this.menuitemId());
  }
  static \u0275fac = function MenuItemContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuItemContent)(\u0275\u0275directiveInject(forwardRef(() => Menu)));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MenuItemContent,
    selectors: [["", "pMenuItemContent", ""]],
    inputs: {
      item: [0, "pMenuItemContent", "item"],
      itemTemplate: "itemTemplate",
      menuitemId: [1, "menuitemId"],
      idx: [1, "idx"]
    },
    outputs: {
      onMenuItemClick: "onMenuItemClick"
    },
    features: [\u0275\u0275ProvidersFeature([MenuStyle]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c07,
    decls: 5,
    vars: 6,
    consts: [["itemContent", ""], ["htmlLabel", ""], [3, "click", "pBind"], [4, "ngIf"], ["pRipple", "", 3, "class", "target", "pBind", 4, "ngIf"], ["routerLinkActive", "p-menu-item-link-active", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "class", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind", 4, "ngIf"], ["pRipple", "", 3, "target", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["routerLinkActive", "p-menu-item-link-active", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind"], [3, "class", "pBind", "style", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf", "ngIfElse"], [3, "styleClass", "value", "pt", 4, "ngIf"], [3, "pBind"], [1, "p-menu-item-label", 3, "innerHTML", "pBind"], [3, "styleClass", "value", "pt"]],
    template: function MenuItemContent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275listener("click", function MenuItemContent_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onItemClick($event, ctx.item));
        });
        \u0275\u0275template(1, MenuItemContent_ng_container_1_Template, 3, 2, "ng-container", 3)(2, MenuItemContent_ng_container_2_Template, 2, 4, "ng-container", 3)(3, MenuItemContent_ng_template_3_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("itemContent"));
        \u0275\u0275property("pBind", ctx.getPTOptions("itemContent"));
        \u0275\u0275attribute("data-pc-section", "content");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.itemTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.itemTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, RouterModule, RouterLink, RouterLinkActive, Ripple, TooltipModule, Bind, BadgeModule, Badge, SharedModule, BindModule, SafeHtmlPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemContent, [{
    type: Component,
    args: [{
      selector: "[pMenuItemContent]",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, BadgeModule, SharedModule, SafeHtmlPipe, BindModule],
      template: ` <div [class]="cx('itemContent')" (click)="onItemClick($event, item)" [attr.data-pc-section]="'content'" [pBind]="getPTOptions('itemContent')">
        <ng-container *ngIf="!itemTemplate">
            <a
                *ngIf="!item?.routerLink"
                [attr.title]="item.title"
                [attr.href]="item.url || null"
                [attr.data-automationid]="item.automationId"
                [attr.tabindex]="-1"
                [class]="cx('itemLink')"
                [target]="item.target"
                [pBind]="getPTOptions('itemLink')"
                pRipple
            >
                <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
            </a>
            <a
                *ngIf="item?.routerLink"
                [routerLink]="item.routerLink"
                [attr.data-automationid]="item.automationId"
                [attr.tabindex]="-1"
                [attr.title]="item.title"
                [queryParams]="item.queryParams"
                routerLinkActive="p-menu-item-link-active"
                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                [class]="cx('itemLink')"
                [target]="item.target"
                [fragment]="item.fragment"
                [queryParamsHandling]="item.queryParamsHandling"
                [preserveFragment]="item.preserveFragment"
                [skipLocationChange]="item.skipLocationChange"
                [replaceUrl]="item.replaceUrl"
                [state]="item.state"
                [pBind]="getPTOptions('itemLink')"
                pRipple
            >
                <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
            </a>
        </ng-container>

        <ng-container *ngIf="itemTemplate">
            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-template>
        </ng-container>

        <ng-template #itemContent>
            <span [class]="cn(cx('itemIcon', { item }), item.iconClass)" [pBind]="getPTOptions('itemIcon')" *ngIf="item.icon" [style]="item.iconStyle" [attr.data-pc-section]="'itemicon'"></span>
            <span [class]="cx('itemLabel')" [pBind]="getPTOptions('itemLabel')" [attr.data-pc-section]="'itemlabel'" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
            <ng-template #htmlLabel><span class="p-menu-item-label" [attr.data-pc-section]="'itemlabel'" [innerHTML]="item.label | safeHtml" [pBind]="getPTOptions('itemLabel')"></span></ng-template>
            <p-badge *ngIf="item.badge" [styleClass]="item.badgeStyleClass" [value]="item.badge" [pt]="getPTOptions('pcBadge')" />
        </ng-template>
    </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [MenuStyle]
    }]
  }], () => [{
    type: Menu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => Menu)]
    }]
  }], {
    item: [{
      type: Input,
      args: ["pMenuItemContent"]
    }],
    itemTemplate: [{
      type: Input
    }],
    menuitemId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "menuitemId",
        required: false
      }]
    }],
    idx: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "idx",
        required: false
      }]
    }],
    onMenuItemClick: [{
      type: Output
    }]
  });
})();
var Menu = class _Menu extends BaseComponent {
  overlayService;
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Defines if menu would displayed as a popup.
   * @group Props
   */
  popup;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the list loses focus.
   * @param {Event} event - blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when the list receives focus.
   * @param {Event} event - focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  listViewChild;
  containerViewChild;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  container;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  preventDocumentDefault;
  target;
  visible;
  focusedOptionId = computed(() => {
    return this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : null;
  }, ...ngDevMode ? [{
    debugName: "focusedOptionId"
  }] : []);
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : []);
  selectedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "selectedOptionIndex"
  }] : []);
  focused = false;
  overlayVisible = false;
  relativeAlign;
  $pcMenu = inject(MENU_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  _componentStyle = inject(MenuStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
    this.id = this.id || s("pn_id_");
  }
  getPTOptions(key, item, index, id) {
    return this.ptm(key, {
      context: {
        item,
        index,
        focused: this.isItemFocused(id),
        disabled: this.disabled(item.disabled)
      }
    });
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    if (this.visible) this.hide();
    else this.show(event);
    this.preventDocumentDefault = true;
  }
  /**
   * Displays the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  show(event) {
    this.target = event.currentTarget;
    this.relativeAlign = event.relativeAlign;
    this.visible = true;
    this.preventDocumentDefault = true;
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  onInit() {
    if (!this.popup) {
      this.bindDocumentClickListener();
    }
  }
  /**
   * Defines template option for start.
   * @group Templates
   */
  startTemplate;
  _startTemplate;
  /**
   * Defines template option for end.
   * @group Templates
   */
  endTemplate;
  _endTemplate;
  /**
   * Defines template option for header.
   * @group Templates
   */
  headerTemplate;
  _headerTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  submenuHeaderTemplate;
  _submenuHeaderTemplate;
  templates;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this._startTemplate = item.template;
          break;
        case "end":
          this._endTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        case "submenuheader":
          this._submenuHeaderTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  getTabIndexValue() {
    return this.tabindex !== void 0 ? this.tabindex.toString() : null;
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (this.popup) {
          this.container = event.element;
          this.moveOnTop();
          this.onShow.emit({});
          this.$attrSelector && this.container?.setAttribute(this.$attrSelector, "");
          this.appendOverlay();
          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          bt(this.listViewChild?.nativeElement);
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onHide.emit({});
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event.element);
        }
        break;
    }
  }
  alignOverlay() {
    if (this.relativeAlign) I(this.container, this.target);
    else D(this.container, this.target);
  }
  appendOverlay() {
    DomHandler.appendOverlay(this.container, this.$appendTo() === "body" ? this.document.body : this.$appendTo(), this.$appendTo());
  }
  restoreOverlayAppend() {
    if (this.container && this.$appendTo() !== "self") {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide() {
    this.visible = false;
    this.relativeAlign = false;
    this.cd.markForCheck();
  }
  onWindowResize() {
    if (this.visible && !Yt()) {
      this.hide();
    }
  }
  menuitemId(item, id, index, childIndex) {
    return item?.id ?? `${id}_${index}${childIndex !== void 0 ? "_" + childIndex : ""}`;
  }
  isItemFocused(id) {
    return this.focusedOptionId() === id;
  }
  label(label) {
    return typeof label === "function" ? label() : label;
  }
  disabled(disabled) {
    return typeof disabled === "function" ? disabled() : typeof disabled === "undefined" ? false : disabled;
  }
  activedescendant() {
    return this.focused ? this.focusedOptionId() : void 0;
  }
  onListFocus(event) {
    if (!this.focused) {
      this.focused = true;
      !this.popup && this.changeFocusedOptionIndex(0);
      this.onFocus.emit(event);
    }
  }
  onListBlur(event) {
    if (this.focused) {
      this.focused = false;
      this.changeFocusedOptionIndex(-1);
      this.selectedOptionIndex.set(-1);
      this.focusedOptionIndex.set(-1);
      this.onBlur.emit(event);
    }
  }
  onListKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Escape":
      case "Tab":
        if (this.popup) {
          bt(this.target);
          this.hide();
        }
        this.overlayVisible && this.hide();
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex());
    this.changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey && this.popup) {
      bt(this.target);
      this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex());
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedOptionIndex(0);
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedOptionIndex(Y(this.containerViewChild?.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
    event.preventDefault();
  }
  onEnterKey(event) {
    const element = z(this.containerViewChild?.nativeElement, `li[id="${`${this.focusedOptionIndex()}`}"]`);
    const anchorElement = element && (z(element, '[data-pc-section="itemlink"]') || z(element, "a,button"));
    this.popup && bt(this.target);
    anchorElement ? anchorElement.click() : element && element.click();
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  findNextOptionIndex(index) {
    const links = Y(this.containerViewChild?.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  findPrevOptionIndex(index) {
    const links = Y(this.containerViewChild?.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  changeFocusedOptionIndex(index) {
    const links = Y(this.containerViewChild?.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    if (links.length > 0) {
      let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
      order > -1 && this.focusedOptionIndex.set(links[order].getAttribute("id"));
    }
  }
  itemClick(event, id) {
    const {
      originalEvent,
      item
    } = event;
    if (!this.focused) {
      this.focused = true;
      this.onFocus.emit();
    }
    if (item.disabled) {
      originalEvent.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      originalEvent.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent,
        item
      });
    }
    if (this.popup) {
      this.hide();
    }
    if (!this.popup && this.focusedOptionIndex() !== id) {
      this.focusedOptionIndex.set(id);
    }
  }
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
    this.preventDocumentDefault = true;
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener && isPlatformBrowser(this.platformId)) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", (event) => {
        const isOutsideContainer = this.containerViewChild?.nativeElement && !this.containerViewChild?.nativeElement.contains(event.target);
        const isOutsideTarget = !(this.target && (this.target === event.target || this.target.contains(event.target)));
        if (!this.popup && isOutsideContainer && isOutsideTarget) {
          this.onListBlur(event);
        }
        if (this.preventDocumentDefault && this.overlayVisible && isOutsideContainer && isOutsideTarget) {
          this.hide();
          this.preventDocumentDefault = false;
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener && isPlatformBrowser(this.platformId)) {
      const window2 = this.document.defaultView;
      this.documentResizeListener = this.renderer.listen(window2, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler && isPlatformBrowser(this.platformId)) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler?.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
      this.scrollHandler = null;
    }
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.preventDocumentDefault = false;
    if (!this.cd.destroyed) {
      this.target = null;
    }
  }
  onDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.container && this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    if (!this.popup) {
      this.unbindDocumentClickListener();
    }
  }
  hasSubMenu() {
    return this.model?.some((item) => item.items) ?? false;
  }
  isItemHidden(item) {
    if (item.separator) {
      return item.visible === false || item.items && item.items.some((subitem) => subitem.visible !== false);
    }
    return item.visible === false;
  }
  static \u0275fac = function Menu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Menu)(\u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Menu,
    selectors: [["p-menu"]],
    contentQueries: function Menu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c42, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, _c7, 4);
        \u0275\u0275contentQuery(dirIndex, _c8, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.startTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.endTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.submenuHeaderTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function Menu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c9, 5);
        \u0275\u0275viewQuery(_c10, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.listViewChild = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t2.first);
      }
    },
    inputs: {
      model: "model",
      popup: [2, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      id: "id",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      onBlur: "onBlur",
      onFocus: "onFocus"
    },
    features: [\u0275\u0275ProvidersFeature([MenuStyle, {
      provide: MENU_INSTANCE,
      useExisting: _Menu
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Menu
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["list", ""], ["htmlSubmenuLabel", ""], [3, "class", "style", "ngStyle", "pBind", "click", 4, "ngIf"], [3, "click", "ngStyle", "pBind"], [3, "class", "pBind", 4, "ngIf"], ["role", "menu", 3, "focus", "blur", "keydown", "pBind"], [4, "ngIf"], [3, "pBind"], [4, "ngTemplateOutlet"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "class", "pBind", 4, "ngIf"], ["pTooltip", "", "role", "none", 3, "class", "pBind", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "pBind"], ["pTooltip", "", "role", "none", 3, "pBind", "tooltipOptions"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "innerHTML"], ["pTooltip", "", "role", "menuitem", 3, "class", "pMenuItemContent", "itemTemplate", "idx", "menuitemId", "style", "tooltipOptions", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 3, "onMenuItemClick", "pMenuItemContent", "itemTemplate", "idx", "menuitemId", "tooltipOptions"], ["pTooltip", "", "role", "menuitem", 3, "class", "pMenuItemContent", "itemTemplate", "idx", "menuitemId", "ngStyle", "tooltipOptions", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 3, "onMenuItemClick", "pMenuItemContent", "itemTemplate", "idx", "menuitemId", "ngStyle", "tooltipOptions"]],
    template: function Menu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Menu_div_0_Template, 8, 28, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.popup || ctx.visible);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, MenuItemContent, TooltipModule, Tooltip, Bind, BadgeModule, SharedModule, BindModule, SafeHtmlPipe],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Menu, [{
    type: Component,
    args: [{
      selector: "p-menu",
      standalone: true,
      imports: [CommonModule, RouterModule, MenuItemContent, TooltipModule, BadgeModule, SharedModule, SafeHtmlPipe, BindModule],
      template: `
        <div
            #container
            [class]="cn(cx('root'), styleClass)"
            [style]="sx('root')"
            [ngStyle]="style"
            *ngIf="!popup || visible"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [@.disabled]="popup !== true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            [attr.data-pc-name]="'menu'"
            [attr.id]="id"
            [pBind]="ptm('root')"
        >
            <div *ngIf="startTemplate ?? _startTemplate" [class]="cx('start')" [pBind]="ptm('start')" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="startTemplate ?? _startTemplate"></ng-container>
            </div>
            <ul
                #list
                [class]="cx('list')"
                [pBind]="ptm('list')"
                role="menu"
                [attr.id]="id + '_list'"
                [attr.tabindex]="getTabIndexValue()"
                [attr.data-pc-section]="'menu'"
                [attr.aria-activedescendant]="activedescendant()"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                (focus)="onListFocus($event)"
                (blur)="onListBlur($event)"
                (keydown)="onListKeyDown($event)"
            >
                <ng-template ngFor let-submenu let-i="index" [ngForOf]="model" *ngIf="hasSubMenu()">
                    <li [class]="cx('separator')" [pBind]="ptm('separator')" *ngIf="submenu.separator && submenu.visible !== false" role="separator" [attr.data-pc-section]="'separator'"></li>
                    <li
                        [class]="cx('submenuLabel')"
                        [pBind]="ptm('submenuLabel')"
                        [attr.data-automationid]="submenu.automationId"
                        *ngIf="!submenu.separator"
                        pTooltip
                        [tooltipOptions]="submenu.tooltipOptions"
                        role="none"
                        [attr.id]="menuitemId(submenu, id, i)"
                        [attr.data-pc-section]="'submenulabel'"
                    >
                        <ng-container *ngIf="!submenuHeaderTemplate && !_submenuHeaderTemplate">
                            <span *ngIf="submenu.escape !== false; else htmlSubmenuLabel">{{ submenu.label }}</span>
                            <ng-template #htmlSubmenuLabel><span [innerHTML]="submenu.label | safeHtml"></span></ng-template>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="submenuHeaderTemplate ?? _submenuHeaderTemplate; context: { $implicit: submenu }"></ng-container>
                    </li>
                    <ng-template ngFor let-item let-j="index" [ngForOf]="submenu.items">
                        <li [class]="cx('separator')" [pBind]="ptm('separator')" *ngIf="item.separator && (item.visible !== false || submenu.visible !== false)" role="separator" [attr.data-pc-section]="'separator'"></li>
                        <li
                            [class]="cn(cx('item', { item, id: menuitemId(item, id, i, j) }), item?.styleClass)"
                            *ngIf="!item.separator && item.visible !== false && (item.visible !== undefined || submenu.visible !== false)"
                            [pMenuItemContent]="item"
                            [itemTemplate]="itemTemplate ?? _itemTemplate"
                            [idx]="j"
                            [menuitemId]="menuitemId(item, id, i, j)"
                            [style]="item.style"
                            (onMenuItemClick)="itemClick($event, menuitemId(item, id, i, j))"
                            pTooltip
                            [tooltipOptions]="item.tooltipOptions"
                            role="menuitem"
                            [attr.data-pc-section]="'menuitem'"
                            [attr.aria-label]="label(item.label)"
                            [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i, j))"
                            [attr.data-p-disabled]="disabled(item.disabled)"
                            [attr.aria-disabled]="disabled(item.disabled)"
                            [attr.id]="menuitemId(item, id, i, j)"
                        ></li>
                    </ng-template>
                </ng-template>
                <ng-template ngFor let-item let-i="index" [ngForOf]="model" *ngIf="!hasSubMenu()">
                    <li [class]="cx('separator')" [pBind]="ptm('separator')" *ngIf="item.separator && item.visible !== false" role="separator" [attr.data-pc-section]="'separator'"></li>
                    <li
                        [class]="cn(cx('item', { item, id: menuitemId(item, id, i) }), item?.styleClass)"
                        *ngIf="!item.separator && item.visible !== false"
                        [pMenuItemContent]="item"
                        [itemTemplate]="itemTemplate ?? _itemTemplate"
                        [idx]="i"
                        [menuitemId]="menuitemId(item, id, i)"
                        [ngStyle]="item.style"
                        (onMenuItemClick)="itemClick($event, menuitemId(item, id, i))"
                        pTooltip
                        [tooltipOptions]="item.tooltipOptions"
                        role="menuitem"
                        [attr.data-pc-section]="'menuitem'"
                        [attr.aria-label]="label(item.label)"
                        [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i))"
                        [attr.data-p-disabled]="disabled(item.disabled)"
                        [attr.aria-disabled]="disabled(item.disabled)"
                        [attr.id]="menuitemId(item, id, i)"
                    ></li>
                </ng-template>
            </ul>
            <div *ngIf="endTemplate ?? _endTemplate" [class]="cx('end')" [pBind]="ptm('end')" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="endTemplate ?? _endTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MenuStyle, {
        provide: MENU_INSTANCE,
        useExisting: Menu
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Menu
      }],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", {
        descendants: false
      }]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    submenuHeaderTemplate: [{
      type: ContentChild,
      args: ["submenuheader", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MenuModule = class _MenuModule {
  static \u0275fac = function MenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MenuModule,
    imports: [Menu, SharedModule, SafeHtmlPipe],
    exports: [Menu, SharedModule, SafeHtmlPipe]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Menu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuModule, [{
    type: NgModule,
    args: [{
      imports: [Menu, SharedModule, SafeHtmlPipe],
      exports: [Menu, SharedModule, SafeHtmlPipe]
    }]
  }], null, null);
})();

// src/app/core/layout/config/nav.config.ts
var NAV_CONFIG = [
  {
    label: "Storefront",
    icon: "pi pi-home",
    routerLink: "/home",
    module: "HOME"
  },
  {
    label: "Dashboard",
    icon: "pi pi-th-large",
    routerLink: "/dashboard",
    module: "DASHBOARD"
  },
  {
    label: "Orders",
    icon: "pi pi-shopping-cart",
    routerLink: "/orders",
    module: "ORDERS"
  },
  {
    label: "Menu",
    icon: "pi pi-book",
    routerLink: "/products",
    module: "PRODUCTS"
  },
  {
    label: "My Orders",
    icon: "pi pi-history",
    routerLink: "/my-orders",
    module: "MY_ORDERS"
  },
  {
    label: "Cart",
    icon: "pi pi-shopping-bag",
    routerLink: "/cart",
    module: "CART"
  },
  {
    separator: true
  },
  {
    label: "Settings",
    icon: "pi pi-cog",
    routerLink: "/settings",
    module: "SETTINGS"
  }
];

// src/app/core/layout/services/layout.service.ts
var LayoutService = class _LayoutService {
  router = inject(Router);
  // Global state for the sidebar
  isSidebarCollapsed = signal(false, ...ngDevMode ? [{ debugName: "isSidebarCollapsed" }] : []);
  // Global state for the PrimeNG Breadcrumb component
  breadcrumbs = signal([], ...ngDevMode ? [{ debugName: "breadcrumbs" }] : []);
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.generateBreadcrumbs(event.urlAfterRedirects);
    });
  }
  toggleSidebar() {
    this.isSidebarCollapsed.update((val) => !val);
  }
  generateBreadcrumbs(currentUrl) {
    const crumbs = [];
    const findPath = (items, url, currentPath) => {
      for (const item of items) {
        if (item.separator)
          continue;
        const newPath = [...currentPath, { label: item.label, routerLink: item.routerLink }];
        if (item.routerLink && url.includes(item.routerLink)) {
          crumbs.push(...newPath);
          return true;
        }
        if (item.items && findPath(item.items, url, newPath)) {
          return true;
        }
      }
      return false;
    };
    const cleanUrl = currentUrl.split("?")[0];
    findPath(NAV_CONFIG, cleanUrl, []);
    if (crumbs.length === 0) {
      const segments = cleanUrl.split("/").filter(Boolean);
      segments.forEach((seg) => {
        crumbs.push({ label: seg.charAt(0).toUpperCase() + seg.slice(1) });
      });
    }
    this.breadcrumbs.set(crumbs);
  }
  static \u0275fac = function LayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/core/layout/app-layout/app-layout.component.ts
var _c08 = () => ({ icon: "pi pi-home", routerLink: "/" });
function AppLayoutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 17);
    \u0275\u0275text(2, " F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4, " Food Retail ");
    \u0275\u0275elementEnd()();
  }
}
function AppLayoutComponent_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
}
function AppLayoutComponent_For_8_Conditional_1_Conditional_0_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function AppLayoutComponent_For_8_Conditional_1_Conditional_0_Conditional_6_For_2_Template_button_click_0_listener() {
      const child_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.navigate(child_r6));
    });
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", ctx_r3.isItemActive(child_r6) ? "bg-zinc-200 text-zinc-900 font-medium hover:bg-zinc-200" : "text-zinc-500 bg-transparent hover:bg-zinc-100 hover:text-zinc-900");
    \u0275\u0275advance();
    \u0275\u0275classMap(child_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.label);
  }
}
function AppLayoutComponent_For_8_Conditional_1_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, AppLayoutComponent_For_8_Conditional_1_Conditional_0_Conditional_6_For_2_Template, 4, 4, "button", 27, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r3.items);
  }
}
function AppLayoutComponent_For_8_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 22);
    \u0275\u0275listener("click", function AppLayoutComponent_For_8_Conditional_1_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const item_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup(item_r3.label));
    });
    \u0275\u0275element(2, "i", 23);
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AppLayoutComponent_For_8_Conditional_1_Conditional_0_Conditional_6_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.isGroupActive(item_r3) ? "text-zinc-900 font-semibold bg-transparent hover:bg-zinc-100" : "text-zinc-600 bg-transparent hover:bg-zinc-100 hover:text-zinc-900");
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-chevron-down", !ctx_r3.isGroupOpen(item_r3.label))("pi-chevron-up", ctx_r3.isGroupOpen(item_r3.label));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isGroupOpen(item_r3.label) ? 6 : -1);
  }
}
function AppLayoutComponent_For_8_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 30);
    \u0275\u0275listener("click", function AppLayoutComponent_For_8_Conditional_1_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup(item_r3.label));
    });
    \u0275\u0275element(2, "i", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("pTooltip", item_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.isGroupActive(item_r3) ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200" : "bg-transparent text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900");
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r3.icon);
  }
}
function AppLayoutComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppLayoutComponent_For_8_Conditional_1_Conditional_0_Template, 7, 9, "div", 20)(1, AppLayoutComponent_For_8_Conditional_1_Conditional_1_Template, 3, 4, "div", 21);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r3.layout.isSidebarCollapsed() ? 0 : 1);
  }
}
function AppLayoutComponent_For_8_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function AppLayoutComponent_For_8_Conditional_2_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.navigate(item_r3));
    });
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r3.isItemActive(item_r3) ? "bg-zinc-200 text-zinc-900 font-medium hover:bg-zinc-200" : "text-zinc-600 bg-transparent hover:bg-zinc-100 hover:text-zinc-900");
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function AppLayoutComponent_For_8_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 30);
    \u0275\u0275listener("click", function AppLayoutComponent_For_8_Conditional_2_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.navigate(item_r3));
    });
    \u0275\u0275element(2, "i", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("pTooltip", item_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.isItemActive(item_r3) ? "bg-zinc-200 text-zinc-900 hover:bg-zinc-200" : "bg-transparent text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900");
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r3.icon);
  }
}
function AppLayoutComponent_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppLayoutComponent_For_8_Conditional_2_Conditional_0_Template, 4, 4, "button", 32)(1, AppLayoutComponent_For_8_Conditional_2_Conditional_1_Template, 3, 4, "div", 21);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r3.layout.isSidebarCollapsed() ? 0 : 1);
  }
}
function AppLayoutComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppLayoutComponent_For_8_Conditional_0_Template, 1, 0, "div", 19)(1, AppLayoutComponent_For_8_Conditional_1_Template, 2, 1)(2, AppLayoutComponent_For_8_Conditional_2_Template, 2, 1);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275conditional(item_r3.separator ? 0 : item_r3.items ? 1 : 2);
  }
}
function AppLayoutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "i", 37);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r3.authState.userProfile()) == null ? null : tmp_2_0.userName) || "User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r3.authState.userProfile()) == null ? null : tmp_3_0.email) || "user@example.com");
  }
}
var AppLayoutComponent = class _AppLayoutComponent {
  layout = inject(LayoutService);
  router = inject(Router);
  authState = inject(AuthState);
  navItems = NAV_CONFIG;
  expandedGroups = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedGroups" }] : []);
  activeUrl = signal("", ...ngDevMode ? [{ debugName: "activeUrl" }] : []);
  profileMenuItems = [];
  constructor() {
    this.activeUrl.set(this.router.url);
    this.autoOpenActiveGroup(this.router.url);
    this.router.events.pipe(filter((e59) => e59 instanceof NavigationEnd)).subscribe((e59) => {
      this.activeUrl.set(e59.urlAfterRedirects);
    });
    effect(() => {
      const user = this.authState.userProfile();
      this.profileMenuItems = [
        {
          label: `<div class="flex flex-col gap-0.5"><span class="text-zinc-900 font-semibold text-[13.5px] tracking-tight leading-tight">${user?.userName || "User Account"}</span><span class="text-zinc-500 text-[12px] leading-tight">${user?.email || "user@example.com"}</span></div>`,
          escape: false,
          styleClass: "pointer-events-none pb-1"
        },
        { separator: true },
        { label: "Account Settings", icon: "pi pi-cog" },
        { separator: true },
        {
          label: "Log out",
          icon: "pi pi-sign-out",
          styleClass: "logout-item",
          command: () => this.authState.logout()
        }
      ];
    });
  }
  isItemActive(item) {
    if (!item.routerLink)
      return false;
    return this.activeUrl().startsWith(item.routerLink);
  }
  isGroupActive(group) {
    return !!group.items?.some((child) => this.isItemActive(child));
  }
  isGroupOpen(label) {
    return this.expandedGroups().has(label);
  }
  toggleGroup(label) {
    this.expandedGroups.update((set) => {
      const next = new Set(set);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  }
  navigate(item) {
    if (item.routerLink) {
      this.router.navigate([item.routerLink]);
    }
  }
  autoOpenActiveGroup(url) {
    for (const item of this.navItems) {
      if (item.items?.some((child) => child.routerLink && url.startsWith(child.routerLink))) {
        this.expandedGroups.update((set) => /* @__PURE__ */ new Set([...set, item.label]));
      }
    }
  }
  static \u0275fac = function AppLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayoutComponent, selectors: [["app-layout"]], decls: 21, vars: 43, consts: [["profileMenu", ""], [1, "flex", "h-screen", "w-full", "overflow-hidden", "bg-zinc-50"], [1, "flex", "flex-col", "shrink-0", "bg-zinc-50", "border-r", "px-2", "border-zinc-200", "overflow-hidden", "transition-[width,min-width]", "duration-220", "ease-in-out", "z-20"], [1, "h-16", "flex", "items-center", "shrink-0", "border-b", "border-zinc-200", "gap-2"], [1, "flex", "items-center", "gap-2.5", "flex-1", "min-w-0", "overflow-hidden"], ["aria-label", "Toggle sidebar", 1, "flex", "items-center", "justify-center", "size-8", "rounded-md", "border", "border-zinc-200", "text-zinc-600", "hover:text-zinc-900", "hover:bg-zinc-100", "transition-colors", "duration-150", "shrink-0", 3, "click"], [1, "text-[16px]"], ["aria-label", "Main navigation", 1, "flex-1", "overflow-y-auto", "overflow-x-hidden", "py-3", "flex", "flex-col", "gap-0.5", "sidebar-nav"], [1, "relative", "w-full", "shrink-0", "border-t", "border-zinc-200"], ["type", "button", 1, "w-full", "flex", "items-center", "bg-transparent", "border-none", "cursor-pointer", "transition-colors", "duration-150", "hover:bg-zinc-100", 3, "click"], ["shape", "circle", "styleClass", "shrink-0 !bg-zinc-200 !text-zinc-900 font-semibold", "tooltipPosition", "right", 3, "label", "pTooltip"], ["appendTo", "body", "styleClass", "profile-menu-popup", 1, "px-10", 3, "model", "popup"], [1, "flex-1", "flex", "flex-col", "min-w-0"], [1, "h-16", "flex", "items-center", "px-7", "border-b", "border-zinc-200", "bg-zinc-50", "shrink-0"], [1, "flex-1", 3, "model", "home"], [1, "flex-1", "overflow-y-auto", "bg-zinc-50", "page-content"], [1, "p-8", "max-w-7xl", "mx-auto", "w-full"], [1, "flex", "items-center", "justify-center", "size-8", "min-w-8", "rounded-lg", "bg-zinc-900", "text-white", "font-bold", "text-sm", "select-none", "shrink-0"], [1, "text-sm", "font-semibold", "text-zinc-900", "tracking-tight", "whitespace-nowrap", "overflow-hidden", "text-ellipsis"], [1, "h-px", "bg-zinc-100", "my-1.5", "mx-0.5"], [1, "flex", "flex-col", "gap-0.5", "mt-2"], ["tooltipPosition", "right", 1, "flex", "justify-center", "w-full", 3, "pTooltip"], ["pRipple", "", 1, "w-full", "flex", "items-center", "gap-2.5", "px-2.5", "py-1.5", "rounded-md", "text-[13.5px]", "font-medium", "border-none", "cursor-pointer", "text-left", "transition-colors", "duration-150", "relative", "overflow-hidden", 3, "click", "ngClass"], [1, "text-[15px]", "w-4.5", "text-center", "shrink-0"], [1, "flex-1", "overflow-hidden", "text-ellipsis"], [1, "pi", "text-[10px]", "shrink-0", "text-zinc-400"], [1, "flex", "flex-col", "gap-0.5", "mt-0.5", "pl-3.5", "border-l", "border-zinc-200", "ml-4.5"], ["pRipple", "", 1, "w-full", "flex", "items-center", "gap-2.5", "px-2.5", "py-1.5", "rounded-md", "text-[13px]", "font-normal", "border-none", "cursor-pointer", "text-left", "transition-colors", "duration-150", "relative", "overflow-hidden", 3, "ngClass"], ["pRipple", "", 1, "w-full", "flex", "items-center", "gap-2.5", "px-2.5", "py-1.5", "rounded-md", "text-[13px]", "font-normal", "border-none", "cursor-pointer", "text-left", "transition-colors", "duration-150", "relative", "overflow-hidden", 3, "click", "ngClass"], [1, "text-[13px]", "w-4", "text-center", "shrink-0"], ["pRipple", "", 1, "flex", "items-center", "justify-center", "size-10", "rounded-md", "border-none", "cursor-pointer", "transition-colors", "duration-150", "relative", "overflow-hidden", 3, "click", "ngClass"], [1, "text-[15px]"], ["pRipple", "", 1, "w-full", "flex", "items-center", "gap-2.5", "px-2.5", "py-1.75", "rounded-md", "text-[13.5px]", "font-medium", "border-none", "cursor-pointer", "text-left", "transition-colors", "duration-150", "relative", "overflow-hidden", 3, "ngClass"], ["pRipple", "", 1, "w-full", "flex", "items-center", "gap-2.5", "px-2.5", "py-1.75", "rounded-md", "text-[13.5px]", "font-medium", "border-none", "cursor-pointer", "text-left", "transition-colors", "duration-150", "relative", "overflow-hidden", 3, "click", "ngClass"], [1, "flex", "flex-col", "gap-0", "min-w-0", "overflow-hidden", "text-left", "flex-1"], [1, "text-[13px]", "font-medium", "text-zinc-900", "whitespace-nowrap", "overflow-hidden", "text-ellipsis"], [1, "text-[11.5px]", "text-zinc-500", "whitespace-nowrap", "overflow-hidden", "text-ellipsis"], [1, "pi", "pi-chevron-up", "text-[10px]", "text-zinc-400", "shrink-0", "ml-1"]], template: function AppLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "aside", 2)(2, "div", 3);
      \u0275\u0275conditionalCreate(3, AppLayoutComponent_Conditional_3_Template, 5, 0, "div", 4);
      \u0275\u0275elementStart(4, "button", 5);
      \u0275\u0275listener("click", function AppLayoutComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.layout.toggleSidebar());
      });
      \u0275\u0275element(5, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "nav", 7);
      \u0275\u0275repeaterCreate(7, AppLayoutComponent_For_8_Template, 3, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 8)(10, "button", 9);
      \u0275\u0275listener("click", function AppLayoutComponent_Template_button_click_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        const profileMenu_r10 = \u0275\u0275reference(14);
        return \u0275\u0275resetView(profileMenu_r10.toggle($event));
      });
      \u0275\u0275element(11, "p-avatar", 10);
      \u0275\u0275conditionalCreate(12, AppLayoutComponent_Conditional_12_Template, 6, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "p-menu", 11, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "main", 12)(16, "header", 13);
      \u0275\u0275element(17, "p-breadcrumb", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15)(19, "div", 16);
      \u0275\u0275element(20, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_20_0;
      let tmp_21_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("w-64", !ctx.layout.isSidebarCollapsed())("min-w-64", !ctx.layout.isSidebarCollapsed())("w-16", ctx.layout.isSidebarCollapsed())("min-w-16", ctx.layout.isSidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275classProp("justify-between", !ctx.layout.isSidebarCollapsed())("px-4", !ctx.layout.isSidebarCollapsed())("justify-center", ctx.layout.isSidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.layout.isSidebarCollapsed() ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("pi-angle-left", !ctx.layout.isSidebarCollapsed())("pi-angle-right", ctx.layout.isSidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275classProp("px-2", !ctx.layout.isSidebarCollapsed())("px-2", ctx.layout.isSidebarCollapsed())("items-center", ctx.layout.isSidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.navItems);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("gap-2", !ctx.layout.isSidebarCollapsed())("px-3", !ctx.layout.isSidebarCollapsed())("py-3", !ctx.layout.isSidebarCollapsed())("justify-center", ctx.layout.isSidebarCollapsed())("py-3", ctx.layout.isSidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275property("label", ((tmp_20_0 = ctx.authState.userProfile()) == null ? null : tmp_20_0.userName == null ? null : tmp_20_0.userName[0]) || "U")("pTooltip", ctx.layout.isSidebarCollapsed() ? ((tmp_21_0 = ctx.authState.userProfile()) == null ? null : tmp_21_0.userName) || "User" : "");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.layout.isSidebarCollapsed() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("model", ctx.profileMenuItems)("popup", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("model", ctx.layout.breadcrumbs())("home", \u0275\u0275pureFunction0(42, _c08));
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    RouterModule,
    RouterOutlet,
    BreadcrumbModule,
    Breadcrumb,
    ButtonModule,
    AvatarModule,
    Avatar,
    TooltipModule,
    Tooltip,
    RippleModule,
    Ripple,
    MenuModule,
    Menu
  ], styles: ["\n\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e4e4e7;\n  border-radius: 2px;\n}\n.page-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.page-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.page-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #d4d4d8;\n  border-radius: 3px;\n}\n.page-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a1a1aa;\n}\n  p-breadcrumb .p-breadcrumb {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n}\n  p-breadcrumb .p-breadcrumb-item-link {\n  font-size: 13.5px;\n  color: #71717a;\n  font-weight: 400;\n  padding: 2px 4px;\n  border-radius: 4px;\n  transition: color 150ms ease;\n}\n  p-breadcrumb .p-breadcrumb-item-link:hover {\n  color: #18181b;\n  background: transparent;\n}\n  p-breadcrumb .p-breadcrumb-item:last-child .p-breadcrumb-item-link {\n  color: #18181b;\n  font-weight: 500;\n}\n  p-breadcrumb .p-breadcrumb-separator {\n  color: #d4d4d8;\n  font-size: 11px;\n}\n  p-avatar .p-avatar {\n  font-weight: 600;\n  font-size: 12px;\n}\n  .p-ink {\n  background: rgba(24, 24, 27, 0.08) !important;\n}\n  .p-tooltip .p-tooltip-text {\n  font-size: 12.5px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  background: #18181b;\n  color: #ffffff;\n}\n  .profile-menu-popup.p-menu {\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.08);\n  padding: 4px;\n  min-width: 220px;\n  margin-top: -12px;\n  margin-left: -15px;\n  transform-origin: bottom left;\n}\n  .profile-menu-popup.p-menu ul {\n  outline: none;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n  .profile-menu-popup.p-menu .p-menuitem, \n  .profile-menu-popup.p-menu .p-menu-item {\n  margin: 2px 0;\n}\n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content {\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menuitem-link, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menu-item-link, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menuitem-link, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menu-item-link, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menuitem-link, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menu-item-link, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menuitem-link, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menu-item-link {\n  padding: 8px 12px !important;\n  display: flex !important;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menuitem-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menuitem-link .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menu-item-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menu-item-link .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menuitem-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menuitem-link .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menu-item-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menu-item-link .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menuitem-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menuitem-link .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menu-item-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menu-item-link .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menuitem-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menuitem-link .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menu-item-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menu-item-link .p-menu-item-icon {\n  margin-right: 10px !important;\n  color: #71717a !important;\n  font-size: 1rem !important;\n}\n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menuitem-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menuitem-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menu-item-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menu-item-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menuitem-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menuitem-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menu-item-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menu-item-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menuitem-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menuitem-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menu-item-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menu-item-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menuitem-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menuitem-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menu-item-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menu-item-link .p-menu-item-label {\n  font-size: 13px !important;\n  font-weight: 500;\n  color: #27272a !important;\n  display: block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:hover, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:focus-within, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:hover, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:focus-within, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:hover, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:focus-within, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:hover, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:focus-within {\n  background-color: #f4f4f5 !important;\n}\n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:hover .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:hover .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:hover .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:hover .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:focus-within .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:focus-within .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:focus-within .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:focus-within .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:hover .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:hover .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:hover .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:hover .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:focus-within .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:focus-within .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:focus-within .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:focus-within .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:hover .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:hover .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:hover .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:hover .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:focus-within .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:focus-within .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:focus-within .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:focus-within .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:hover .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:hover .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:hover .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:hover .p-menu-item-label, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:focus-within .p-menuitem-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:focus-within .p-menu-item-icon, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:focus-within .p-menuitem-text, \n  .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:focus-within .p-menu-item-label {\n  color: #18181b !important;\n}\n  .profile-menu-popup.p-menu .p-menuitem-separator, \n  .profile-menu-popup.p-menu .p-menu-separator {\n  border-top: 1px solid #e4e4e7;\n  margin: 4px 0 !important;\n}\n  .profile-menu-popup.p-menu .pointer-events-none {\n  margin: 0;\n}\n  .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content {\n  background: transparent !important;\n}\n  .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menuitem-link, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menu-item-link, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menuitem-link, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menu-item-link {\n  padding: 10px 12px 8px 12px !important;\n  cursor: default;\n}\n  .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menuitem-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menuitem-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menu-item-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menu-item-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menuitem-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menuitem-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menu-item-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menu-item-link .p-menuitem-text {\n  width: 100%;\n}\n  .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content:hover, \n  .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content:hover {\n  background: transparent !important;\n}\n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menuitem-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menuitem-link .p-menu-item-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menuitem-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menuitem-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menu-item-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menu-item-link .p-menu-item-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menu-item-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menu-item-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menuitem-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menuitem-link .p-menu-item-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menuitem-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menuitem-link .p-menu-item-label, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menu-item-link .p-menuitem-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menu-item-link .p-menu-item-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menu-item-link .p-menuitem-text, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menu-item-link .p-menu-item-label {\n  color: #ef4444 !important;\n}\n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content:hover, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content:focus-within, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content:hover, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content:focus-within {\n  background-color: #fef2f2 !important;\n}\n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content:hover .p-menuitem-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content:hover .p-menu-item-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content:hover .p-menuitem-text, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content:hover .p-menu-item-label, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content:focus-within .p-menuitem-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content:focus-within .p-menu-item-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content:focus-within .p-menuitem-text, \n  .profile-menu-popup.p-menu .logout-item .p-menuitem-content:focus-within .p-menu-item-label, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content:hover .p-menuitem-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content:hover .p-menu-item-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content:hover .p-menuitem-text, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content:hover .p-menu-item-label, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content:focus-within .p-menuitem-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content:focus-within .p-menu-item-icon, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content:focus-within .p-menuitem-text, \n  .profile-menu-popup.p-menu .logout-item .p-menu-item-content:focus-within .p-menu-item-label {\n  color: #dc2626 !important;\n}\n/*# sourceMappingURL=app-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", standalone: true, imports: [
      CommonModule,
      RouterModule,
      BreadcrumbModule,
      ButtonModule,
      AvatarModule,
      TooltipModule,
      RippleModule,
      MenuModule
    ], template: `<div class="flex h-screen w-full overflow-hidden bg-zinc-50">
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SIDEBAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <aside
    class="flex flex-col shrink-0 bg-zinc-50 border-r px-2 border-zinc-200 overflow-hidden transition-[width,min-width] duration-220 ease-in-out z-20"
    [class.w-64]="!layout.isSidebarCollapsed()"
    [class.min-w-64]="!layout.isSidebarCollapsed()"
    [class.w-16]="layout.isSidebarCollapsed()"
    [class.min-w-16]="layout.isSidebarCollapsed()"
  >
    <!-- \u2500\u2500 Sidebar Header \u2500\u2500 -->
    <div
      class="h-16 flex items-center shrink-0 border-b border-zinc-200 gap-2"
      [class.justify-between]="!layout.isSidebarCollapsed()"
      [class.px-4]="!layout.isSidebarCollapsed()"
      [class.justify-center]="layout.isSidebarCollapsed()"
    >
      @if (!layout.isSidebarCollapsed()) {
        <div class="flex items-center gap-2.5 flex-1 min-w-0 overflow-hidden">
          <div
            class="flex items-center justify-center size-8 min-w-8 rounded-lg bg-zinc-900 text-white font-bold text-sm select-none shrink-0"
          >
            F
          </div>
          <span
            class="text-sm font-semibold text-zinc-900 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis"
          >
            Food Retail
          </span>
        </div>
      }

      <!-- Toggle \u2014 no tooltip, distinct icon -->
      <button
        class="flex items-center justify-center size-8 rounded-md border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors duration-150 shrink-0"
        (click)="layout.toggleSidebar()"
        aria-label="Toggle sidebar"
      >
        <i
          class="pi"
          [class.pi-angle-left]="!layout.isSidebarCollapsed()"
          [class.pi-angle-right]="layout.isSidebarCollapsed()"
          class="text-[16px]"
        ></i>
      </button>
    </div>

    <!-- \u2500\u2500 Navigation \u2500\u2500 -->
    <nav
      aria-label="Main navigation"
      class="flex-1 overflow-y-auto overflow-x-hidden py-3 flex flex-col gap-0.5 sidebar-nav"
      [class.px-2.5]="!layout.isSidebarCollapsed()"
      [class.px-2]="layout.isSidebarCollapsed()"
      [class.items-center]="layout.isSidebarCollapsed()"
    >
      @for (item of navItems; track $index) {
        @if (item.separator) {
          <div class="h-px bg-zinc-100 my-1.5 mx-0.5"></div>
        } @else if (item.items) {
          @if (!layout.isSidebarCollapsed()) {
            <!-- Expanded group -->
            <div class="flex flex-col gap-0.5 mt-2">
              <button
                class="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[13.5px] font-medium border-none cursor-pointer text-left transition-colors duration-150 relative overflow-hidden"
                [ngClass]="
                  isGroupActive(item)
                    ? 'text-zinc-900 font-semibold bg-transparent hover:bg-zinc-100'
                    : 'text-zinc-600 bg-transparent hover:bg-zinc-100 hover:text-zinc-900'
                "
                (click)="toggleGroup(item.label!)"
                pRipple
              >
                <i [class]="item.icon" class="text-[15px] w-4.5 text-center shrink-0"></i>
                <span class="flex-1 overflow-hidden text-ellipsis">{{ item.label }}</span>
                <i
                  class="pi text-[10px] shrink-0 text-zinc-400"
                  [class.pi-chevron-down]="!isGroupOpen(item.label!)"
                  [class.pi-chevron-up]="isGroupOpen(item.label!)"
                ></i>
              </button>

              @if (isGroupOpen(item.label!)) {
                <div class="flex flex-col gap-0.5 mt-0.5 pl-3.5 border-l border-zinc-200 ml-4.5">
                  @for (child of item.items; track $index) {
                    <button
                      class="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[13px] font-normal border-none cursor-pointer text-left transition-colors duration-150 relative overflow-hidden"
                      [ngClass]="
                        isItemActive(child)
                          ? 'bg-zinc-200 text-zinc-900 font-medium hover:bg-zinc-200'
                          : 'text-zinc-500 bg-transparent hover:bg-zinc-100 hover:text-zinc-900'
                      "
                      (click)="navigate(child)"
                      pRipple
                    >
                      <i [class]="child.icon" class="text-[13px] w-4 text-center shrink-0"></i>
                      <span class="flex-1 overflow-hidden text-ellipsis">{{ child.label }}</span>
                    </button>
                  }
                </div>
              }
            </div>
          } @else {
            <!-- Collapsed group \u2014 icon + tooltip -->
            <div class="flex justify-center w-full" [pTooltip]="item.label" tooltipPosition="right">
              <button
                class="flex items-center justify-center size-10 rounded-md border-none cursor-pointer transition-colors duration-150 relative overflow-hidden"
                [ngClass]="
                  isGroupActive(item)
                    ? 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                    : 'bg-transparent text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
                "
                (click)="toggleGroup(item.label!)"
                pRipple
              >
                <i [class]="item.icon" class="text-[15px]"></i>
              </button>
            </div>
          }
        } @else {
          @if (!layout.isSidebarCollapsed()) {
            <!-- Expanded leaf -->
            <button
              class="w-full flex items-center gap-2.5 px-2.5 py-1.75 rounded-md text-[13.5px] font-medium border-none cursor-pointer text-left transition-colors duration-150 relative overflow-hidden"
              [ngClass]="
                isItemActive(item)
                  ? 'bg-zinc-200 text-zinc-900 font-medium hover:bg-zinc-200'
                  : 'text-zinc-600 bg-transparent hover:bg-zinc-100 hover:text-zinc-900'
              "
              (click)="navigate(item)"
              pRipple
            >
              <i [class]="item.icon" class="text-[15px] w-4.5 text-center shrink-0"></i>
              <span class="flex-1 overflow-hidden text-ellipsis">{{ item.label }}</span>
            </button>
          } @else {
            <!-- Collapsed leaf \u2014 icon + tooltip -->
            <div class="flex justify-center w-full" [pTooltip]="item.label" tooltipPosition="right">
              <button
                class="flex items-center justify-center size-10 rounded-md border-none cursor-pointer transition-colors duration-150 relative overflow-hidden"
                [ngClass]="
                  isItemActive(item)
                    ? 'bg-zinc-200 text-zinc-900 hover:bg-zinc-200'
                    : 'bg-transparent text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
                "
                (click)="navigate(item)"
                pRipple
              >
                <i [class]="item.icon" class="text-[15px]"></i>
              </button>
            </div>
          }
        }
      }
    </nav>

    <!-- \u2500\u2500 User Profile \u2500\u2500 -->
    <div class="relative w-full shrink-0 border-t border-zinc-200">
      <button
        type="button"
        class="w-full flex items-center bg-transparent border-none cursor-pointer transition-colors duration-150 hover:bg-zinc-100"
        [class.gap-2.5]="!layout.isSidebarCollapsed()"
        [class.px-3.5]="!layout.isSidebarCollapsed()"
        [class.py-3.5]="!layout.isSidebarCollapsed()"
        [class.justify-center]="layout.isSidebarCollapsed()"
        [class.py-3]="layout.isSidebarCollapsed()"
        (click)="profileMenu.toggle($event)"
      >
        <p-avatar
          [label]="authState.userProfile()?.userName?.[0] || 'U'"
          shape="circle"
          styleClass="shrink-0 !bg-zinc-200 !text-zinc-900 font-semibold"
          [pTooltip]="
            layout.isSidebarCollapsed() ? authState.userProfile()?.userName || 'User' : ''
          "
          tooltipPosition="right"
        >
        </p-avatar>

        @if (!layout.isSidebarCollapsed()) {
          <div class="flex flex-col gap-0 min-w-0 overflow-hidden text-left flex-1">
            <span
              class="text-[13px] font-medium text-zinc-900 whitespace-nowrap overflow-hidden text-ellipsis"
              >{{ authState.userProfile()?.userName || 'User' }}</span
            >
            <span
              class="text-[11.5px] text-zinc-500 whitespace-nowrap overflow-hidden text-ellipsis"
              >{{ authState.userProfile()?.email || 'user@example.com' }}</span
            >
          </div>
          <i class="pi pi-chevron-up text-[10px] text-zinc-400 shrink-0 ml-1"></i>
        }
      </button>

      <p-menu
        class="px-10"
        #profileMenu
        [model]="profileMenuItems"
        [popup]="true"
        appendTo="body"
        styleClass="profile-menu-popup"
      ></p-menu>
    </div>
  </aside>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MAIN CONTENT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <main class="flex-1 flex flex-col min-w-0">
    <!-- Top Header \u2014 breadcrumb only -->
    <header class="h-16 flex items-center px-7 border-b border-zinc-200 bg-zinc-50 shrink-0">
      <p-breadcrumb
        class="flex-1"
        [model]="layout.breadcrumbs()"
        [home]="{ icon: 'pi pi-home', routerLink: '/' }"
      >
      </p-breadcrumb>
    </header>

    <!-- Page Content -->
    <div class="flex-1 overflow-y-auto bg-zinc-50 page-content">
      <div class="p-8 max-w-7xl mx-auto w-full">
        <router-outlet></router-outlet>
      </div>
    </div>
  </main>
</div>
`, styles: ["/* src/app/core/layout/app-layout/app-layout.component.scss */\n.sidebar-nav::-webkit-scrollbar {\n  width: 3px;\n}\n.sidebar-nav::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar-nav::-webkit-scrollbar-thumb {\n  background: #e4e4e7;\n  border-radius: 2px;\n}\n.page-content::-webkit-scrollbar {\n  width: 5px;\n}\n.page-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n.page-content::-webkit-scrollbar-thumb {\n  background: #d4d4d8;\n  border-radius: 3px;\n}\n.page-content::-webkit-scrollbar-thumb:hover {\n  background: #a1a1aa;\n}\n::ng-deep p-breadcrumb .p-breadcrumb {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n}\n::ng-deep p-breadcrumb .p-breadcrumb-item-link {\n  font-size: 13.5px;\n  color: #71717a;\n  font-weight: 400;\n  padding: 2px 4px;\n  border-radius: 4px;\n  transition: color 150ms ease;\n}\n::ng-deep p-breadcrumb .p-breadcrumb-item-link:hover {\n  color: #18181b;\n  background: transparent;\n}\n::ng-deep p-breadcrumb .p-breadcrumb-item:last-child .p-breadcrumb-item-link {\n  color: #18181b;\n  font-weight: 500;\n}\n::ng-deep p-breadcrumb .p-breadcrumb-separator {\n  color: #d4d4d8;\n  font-size: 11px;\n}\n::ng-deep p-avatar .p-avatar {\n  font-weight: 600;\n  font-size: 12px;\n}\n::ng-deep .p-ink {\n  background: rgba(24, 24, 27, 0.08) !important;\n}\n::ng-deep .p-tooltip .p-tooltip-text {\n  font-size: 12.5px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  background: #18181b;\n  color: #ffffff;\n}\n::ng-deep .profile-menu-popup.p-menu {\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.08);\n  padding: 4px;\n  min-width: 220px;\n  margin-top: -12px;\n  margin-left: -15px;\n  transform-origin: bottom left;\n}\n::ng-deep .profile-menu-popup.p-menu ul {\n  outline: none;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n::ng-deep .profile-menu-popup.p-menu .p-menuitem,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item {\n  margin: 2px 0;\n}\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content {\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menuitem-link,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menu-item-link,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menuitem-link,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menu-item-link,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menuitem-link,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menu-item-link,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menuitem-link,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menu-item-link {\n  padding: 8px 12px !important;\n  display: flex !important;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menuitem-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menuitem-link .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menu-item-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menu-item-link .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menuitem-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menuitem-link .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menu-item-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menu-item-link .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menuitem-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menuitem-link .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menu-item-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menu-item-link .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menuitem-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menuitem-link .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menu-item-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menu-item-link .p-menu-item-icon {\n  margin-right: 10px !important;\n  color: #71717a !important;\n  font-size: 1rem !important;\n}\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menuitem-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menuitem-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menu-item-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content .p-menu-item-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menuitem-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menuitem-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menu-item-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content .p-menu-item-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menuitem-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menuitem-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menu-item-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content .p-menu-item-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menuitem-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menuitem-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menu-item-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content .p-menu-item-link .p-menu-item-label {\n  font-size: 13px !important;\n  font-weight: 500;\n  color: #27272a !important;\n  display: block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:hover,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:focus-within,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:hover,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:focus-within,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:hover,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:focus-within,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:hover,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:focus-within {\n  background-color: #f4f4f5 !important;\n}\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:hover .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:hover .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:hover .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:hover .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:focus-within .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:focus-within .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:focus-within .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menuitem-content:focus-within .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:hover .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:hover .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:hover .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:hover .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:focus-within .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:focus-within .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:focus-within .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menuitem .p-menu-item-content:focus-within .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:hover .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:hover .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:hover .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:hover .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:focus-within .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:focus-within .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:focus-within .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menuitem-content:focus-within .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:hover .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:hover .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:hover .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:hover .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:focus-within .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:focus-within .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:focus-within .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .p-menu-item .p-menu-item-content:focus-within .p-menu-item-label {\n  color: #18181b !important;\n}\n::ng-deep .profile-menu-popup.p-menu .p-menuitem-separator,\n::ng-deep .profile-menu-popup.p-menu .p-menu-separator {\n  border-top: 1px solid #e4e4e7;\n  margin: 4px 0 !important;\n}\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none {\n  margin: 0;\n}\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content {\n  background: transparent !important;\n}\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menuitem-link,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menu-item-link,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menuitem-link,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menu-item-link {\n  padding: 10px 12px 8px 12px !important;\n  cursor: default;\n}\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menuitem-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menuitem-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menu-item-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content .p-menu-item-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menuitem-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menuitem-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menu-item-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content .p-menu-item-link .p-menuitem-text {\n  width: 100%;\n}\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menuitem-content:hover,\n::ng-deep .profile-menu-popup.p-menu .pointer-events-none .p-menu-item-content:hover {\n  background: transparent !important;\n}\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menuitem-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menuitem-link .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menuitem-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menuitem-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menu-item-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menu-item-link .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menu-item-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content .p-menu-item-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menuitem-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menuitem-link .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menuitem-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menuitem-link .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menu-item-link .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menu-item-link .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menu-item-link .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content .p-menu-item-link .p-menu-item-label {\n  color: #ef4444 !important;\n}\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content:hover,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content:focus-within,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content:hover,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content:focus-within {\n  background-color: #fef2f2 !important;\n}\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content:hover .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content:hover .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content:hover .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content:hover .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content:focus-within .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content:focus-within .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content:focus-within .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menuitem-content:focus-within .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content:hover .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content:hover .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content:hover .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content:hover .p-menu-item-label,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content:focus-within .p-menuitem-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content:focus-within .p-menu-item-icon,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content:focus-within .p-menuitem-text,\n::ng-deep .profile-menu-popup.p-menu .logout-item .p-menu-item-content:focus-within .p-menu-item-label {\n  color: #dc2626 !important;\n}\n/*# sourceMappingURL=app-layout.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayoutComponent, { className: "AppLayoutComponent", filePath: "src/app/core/layout/app-layout/app-layout.component.ts", lineNumber: 35 });
})();

// src/app/core/guards/guest.guard.ts
var guestGuard = () => {
  const storage = inject(LocalStorageService);
  const router = inject(Router);
  if (storage.getToken()) {
    router.navigate(["/dashboard"]);
    return false;
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadChildren: () => import("./chunk-LBB3FXKW.js").then((m5) => m5.AUTH_ROUTES),
    canActivate: [guestGuard]
  },
  {
    path: "signup",
    loadChildren: () => import("./chunk-LBB3FXKW.js").then((m5) => m5.SIGNUP_ROUTES),
    canActivate: [guestGuard]
  },
  // 1. The App Shell (Layout Wrapper)
  {
    path: "",
    component: AppLayoutComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: "home",
        loadChildren: () => import("./chunk-ZC5SJCHQ.js").then((m5) => m5.HOME_ROUTES)
      },
      {
        path: "dashboard",
        loadChildren: () => import("./chunk-RCJB6RRG.js").then((m5) => m5.DASHBOARD_ROUTES)
      },
      {
        path: "orders",
        loadChildren: () => import("./chunk-ZKCF6SPD.js").then((m5) => m5.ORDERS_ROUTES)
      },
      {
        path: "products",
        loadChildren: () => import("./chunk-HDNLOSUA.js").then((m5) => m5.PRODUCT_ROUTES)
      },
      {
        path: "my-orders",
        loadChildren: () => import("./chunk-S26P7N6H.js").then((m5) => m5.MY_ORDERS_ROUTES)
      },
      {
        path: "cart",
        loadChildren: () => import("./chunk-5BKUJJIE.js").then((m5) => m5.CART_ROUTES)
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  // 2. The Global Pages
  { path: "access-denied", component: AccessDeniedComponent },
  { path: "error", component: ErrorComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" }
];

// src/app/core/utils/error.util.ts
var ErrorUtil = class {
  static extractErrorMessages(errorData) {
    if (!errorData)
      return ["An unknown error occurred"];
    if (Array.isArray(errorData.errors)) {
      return errorData.errors.map((err) => err.message || "Error");
    }
    if (typeof errorData.message === "string") {
      return [errorData.message];
    }
    return ["An unexpected error occurred"];
  }
};

// src/app/core/exceptions/global-error-handler.ts
var GlobalErrorHandler = class _GlobalErrorHandler {
  injector;
  zone;
  constructor(injector, zone) {
    this.injector = injector;
    this.zone = zone;
  }
  handleError(error) {
    const toastService = this.injector.get(ToastService);
    const router = this.injector.get(Router);
    this.zone.run(() => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 400) {
          const messages = ErrorUtil.extractErrorMessages(error.error);
          messages.forEach((msg) => toastService.warning(msg, "Validation Error"));
        } else if (error.status === 401) {
          toastService.error("Your session has expired. Please log in again.", "Unauthorized");
        } else if (error.status === 403) {
          router.navigate(["/access-denied"]);
        } else if (error.status === 404) {
          toastService.error("The requested API endpoint or resource was not found.", "Not Found");
          console.error("API 404 Error:", error.url);
        } else if (error.status >= 500) {
          console.error("Fatal Server Error:", error);
          router.navigate(["/error"], {
            state: {
              message: "The server is currently unreachable or encountered a critical failure. Please try again later."
            }
          });
        }
      } else {
        console.error("Fatal Client Error:", error);
        router.navigate(["/error"], {
          state: {
            message: "The application crashed due to an unexpected UI error. Please refresh the page to restore functionality."
          }
        });
      }
    });
  }
  static \u0275fac = function GlobalErrorHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalErrorHandler)(\u0275\u0275inject(Injector), \u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GlobalErrorHandler, factory: _GlobalErrorHandler.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalErrorHandler, [{
    type: Injectable
  }], () => [{ type: Injector }, { type: NgZone }], null);
})();

// node_modules/@primeuix/themes/dist/index.mjs
var t = (...t44) => ke(...t44);

// node_modules/@primeuix/themes/dist/aura/accordion/index.mjs
var o = { transitionDuration: "{transition.duration}" };
var r = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" };
var t2 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var e = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" };
var c = { root: o, panel: r, header: t2, content: e };

// node_modules/@primeuix/themes/dist/aura/autocomplete/index.mjs
var o2 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r2 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d = { padding: "{list.padding}", gap: "{list.gap}" };
var e2 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l2 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var i = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c2 = { borderRadius: "{border.radius.sm}" };
var f = { padding: "{list.option.padding}" };
var s2 = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var a = { root: o2, overlay: r2, list: d, option: e2, optionGroup: l2, dropdown: i, chip: c2, emptyMessage: f, colorScheme: s2 };

// node_modules/@primeuix/themes/dist/aura/avatar/index.mjs
var e3 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r3 = { size: "1rem" };
var o3 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t3 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i2 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n = { root: e3, icon: r3, group: o3, lg: t3, xl: i2 };

// node_modules/@primeuix/themes/dist/aura/badge/index.mjs
var r4 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o4 = { size: "0.5rem" };
var e4 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c3 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a2 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n2 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d2 = { root: r4, dot: o4, sm: e4, lg: c3, xl: a2, colorScheme: n2 };

// node_modules/@primeuix/themes/dist/aura/base/index.mjs
var r5 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var o5 = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } };
var e5 = { primitive: r5, semantic: o5 };

// node_modules/@primeuix/themes/dist/aura/blockui/index.mjs
var r6 = { borderRadius: "{content.border.radius}" };
var o6 = { root: r6 };

// node_modules/@primeuix/themes/dist/aura/breadcrumb/index.mjs
var o7 = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r7 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i3 = { color: "{navigation.item.icon.color}" };
var t4 = { root: o7, item: r7, separator: i3 };

// node_modules/@primeuix/themes/dist/aura/button/index.mjs
var r8 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o8 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var e6 = { root: r8, colorScheme: o8 };

// node_modules/@primeuix/themes/dist/aura/card/index.mjs
var o9 = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" };
var r9 = { padding: "1.25rem", gap: "0.5rem" };
var t5 = { gap: "0.5rem" };
var e7 = { fontSize: "1.25rem", fontWeight: "500" };
var a3 = { color: "{text.muted.color}" };
var d3 = { root: o9, body: r9, caption: t5, title: e7, subtitle: a3 };

// node_modules/@primeuix/themes/dist/aura/carousel/index.mjs
var r10 = { transitionDuration: "{transition.duration}" };
var o10 = { gap: "0.25rem" };
var a4 = { padding: "1rem", gap: "0.5rem" };
var i4 = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c4 = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } };
var t6 = { root: r10, content: o10, indicatorList: a4, indicator: i4, colorScheme: c4 };

// node_modules/@primeuix/themes/dist/aura/cascadeselect/index.mjs
var o11 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r11 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d4 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l3 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" };
var e8 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var i5 = { color: "{form.field.icon.color}" };
var f2 = { root: o11, dropdown: r11, overlay: d4, list: l3, option: e8, clearIcon: i5 };

// node_modules/@primeuix/themes/dist/aura/checkbox/index.mjs
var r12 = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var o12 = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var e9 = { root: r12, icon: o12 };

// node_modules/@primeuix/themes/dist/aura/chip/index.mjs
var o13 = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r13 = { width: "2rem", height: "2rem" };
var e10 = { size: "1rem" };
var c5 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var i6 = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } };
var s3 = { root: o13, image: r13, icon: e10, removeIcon: c5, colorScheme: i6 };

// node_modules/@primeuix/themes/dist/aura/colorpicker/index.mjs
var r14 = { transitionDuration: "{transition.duration}" };
var o14 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e11 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a5 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var s4 = { root: r14, preview: o14, panel: e11, colorScheme: a5 };

// node_modules/@primeuix/themes/dist/aura/confirmdialog/index.mjs
var o15 = { size: "2rem", color: "{overlay.modal.color}" };
var e12 = { gap: "1rem" };
var r15 = { icon: o15, content: e12 };

// node_modules/@primeuix/themes/dist/aura/confirmpopup/index.mjs
var o16 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r16 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e13 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a6 = { root: o16, content: r16, icon: e13, footer: p };

// node_modules/@primeuix/themes/dist/aura/contextmenu/index.mjs
var o17 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i7 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n3 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a7 = { mobileIndent: "1rem" };
var t7 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r17 = { borderColor: "{content.border.color}" };
var c6 = { root: o17, list: i7, item: n3, submenu: a7, submenuIcon: t7, separator: r17 };

// node_modules/@primeuix/themes/dist/aura/css/index.mjs
var t8 = "\n    li.p-autocomplete-option,\n    div.p-cascadeselect-option-content,\n    li.p-listbox-option,\n    li.p-multiselect-option,\n    li.p-select-option,\n    li.p-listbox-option,\n    div.p-tree-node-content,\n    li.p-datatable-filter-constraint,\n    .p-datatable .p-datatable-tbody > tr,\n    .p-treetable .p-treetable-tbody > tr,\n    div.p-menu-item-content,\n    div.p-tieredmenu-item-content,\n    div.p-contextmenu-item-content,\n    div.p-menubar-item-content,\n    div.p-megamenu-item-content,\n    div.p-panelmenu-header-content,\n    div.p-panelmenu-item-content,\n    th.p-datatable-header-cell,\n    th.p-treetable-header-cell,\n    thead.p-datatable-thead > tr > th,\n    .p-treetable thead.p-treetable-thead>tr>th {\n        transition: none;\n    }\n";

// node_modules/@primeuix/themes/dist/aura/datatable/index.mjs
var o18 = { transitionDuration: "{transition.duration}" };
var r18 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e14 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d5 = { fontWeight: "600" };
var t9 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var l4 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var c7 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var a8 = { fontWeight: "600" };
var n4 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var i8 = { color: "{primary.color}" };
var s5 = { width: "0.5rem" };
var g = { width: "1px", color: "{primary.color}" };
var u = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var b = { size: "2rem" };
var p2 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var k = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f3 = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css = "\n    .p-datatable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var v = { root: o18, header: r18, headerCell: e14, columnTitle: d5, row: t9, bodyCell: l4, footerCell: c7, columnFooter: a8, footer: n4, dropPoint: i8, columnResizer: s5, resizeIndicator: g, sortIcon: u, loadingIcon: b, rowToggleButton: p2, filter: m, paginatorTop: h, paginatorBottom: k, colorScheme: f3, css };

// node_modules/@primeuix/themes/dist/aura/dataview/index.mjs
var o19 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r19 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" };
var d6 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e15 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" };
var t10 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n5 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c8 = { root: o19, header: r19, content: d6, footer: e15, paginatorTop: t10, paginatorBottom: n5 };

// node_modules/@primeuix/themes/dist/aura/datepicker/index.mjs
var o20 = { transitionDuration: "{transition.duration}" };
var r20 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e16 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var c9 = { gap: "0.5rem", fontWeight: "500" };
var d7 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n6 = { color: "{form.field.icon.color}" };
var t11 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var a9 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var i9 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l5 = { margin: "0.5rem 0 0 0" };
var u2 = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" };
var s6 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g2 = { margin: "0.5rem 0 0 0" };
var f4 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var h2 = { margin: "0.5rem 0 0 0" };
var b2 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var m2 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var p3 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v2 = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k2 = { root: o20, panel: r20, header: e16, title: c9, dropdown: d7, inputIcon: n6, selectMonth: t11, selectYear: a9, group: i9, dayView: l5, weekDay: u2, date: s6, monthView: g2, month: f4, yearView: h2, year: b2, buttonbar: m2, timePicker: p3, colorScheme: v2 };

// node_modules/@primeuix/themes/dist/aura/dialog/index.mjs
var o21 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a10 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d8 = { fontSize: "1.25rem", fontWeight: "600" };
var r21 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l6 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e17 = { root: o21, header: a10, title: d8, content: r21, footer: l6 };

// node_modules/@primeuix/themes/dist/aura/divider/index.mjs
var r22 = { borderColor: "{content.border.color}" };
var o22 = { background: "{content.background}", color: "{text.color}" };
var n7 = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } };
var e18 = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } };
var t12 = { root: r22, content: o22, horizontal: n7, vertical: e18 };

// node_modules/@primeuix/themes/dist/aura/dock/index.mjs
var r23 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o23 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d9 = { root: r23, item: o23 };

// node_modules/@primeuix/themes/dist/aura/drawer/index.mjs
var o24 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a11 = { padding: "{overlay.modal.padding}" };
var d10 = { fontSize: "1.5rem", fontWeight: "600" };
var r24 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l7 = { padding: "{overlay.modal.padding}" };
var e19 = { root: o24, header: a11, title: d10, content: r24, footer: l7 };

// node_modules/@primeuix/themes/dist/aura/editor/index.mjs
var o25 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r25 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e20 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t13 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d11 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var l8 = { toolbar: o25, toolbarItem: r25, overlay: e20, overlayOption: t13, content: d11 };

// node_modules/@primeuix/themes/dist/aura/fieldset/index.mjs
var o26 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t14 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var n8 = { padding: "0" };
var e21 = { root: o26, legend: r26, toggleIcon: t14, content: n8 };

// node_modules/@primeuix/themes/dist/aura/fileupload/index.mjs
var r27 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o27 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e22 = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" };
var t15 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var a12 = { gap: "0.5rem" };
var n9 = { height: "0.25rem" };
var d12 = { gap: "0.5rem" };
var i10 = { root: r27, header: o27, content: e22, file: t15, fileList: a12, progressbar: n9, basic: d12 };

// node_modules/@primeuix/themes/dist/aura/floatlabel/index.mjs
var o28 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i11 = { active: { top: "-1.25rem" } };
var r28 = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var a13 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var d13 = { root: o28, over: i11, in: r28, on: a13 };

// node_modules/@primeuix/themes/dist/aura/galleria/index.mjs
var o29 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r29 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e23 = { size: "1.5rem" };
var t16 = { background: "{content.background}", padding: "1rem 0.25rem" };
var c10 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n10 = { size: "1rem" };
var a14 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s7 = { gap: "0.5rem", padding: "1rem" };
var u3 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i12 = { background: "rgba(0, 0, 0, 0.5)" };
var d14 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g3 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f5 = { size: "1.5rem" };
var h3 = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } };
var l9 = { root: o29, navButton: r29, navIcon: e23, thumbnailsContent: t16, thumbnailNavButton: c10, thumbnailNavButtonIcon: n10, caption: a14, indicatorList: s7, indicatorButton: u3, insetIndicatorList: i12, insetIndicatorButton: d14, closeButton: g3, closeButtonIcon: f5, colorScheme: h3 };

// node_modules/@primeuix/themes/dist/aura/iconfield/index.mjs
var o30 = { color: "{form.field.icon.color}" };
var r30 = { icon: o30 };

// node_modules/@primeuix/themes/dist/aura/iftalabel/index.mjs
var o31 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" };
var l10 = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" };
var i13 = { root: o31, input: l10 };

// node_modules/@primeuix/themes/dist/aura/image/index.mjs
var o32 = { transitionDuration: "{transition.duration}" };
var r31 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a15 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" };
var i14 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e24 = { root: o32, preview: r31, toolbar: a15, action: i14 };

// node_modules/@primeuix/themes/dist/aura/imagecompare/index.mjs
var o33 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r32 = { handle: o33 };

// node_modules/@primeuix/themes/dist/aura/inlinemessage/index.mjs
var r33 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var o34 = { fontWeight: "500" };
var e25 = { size: "1rem" };
var n11 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } };
var a16 = { root: r33, text: o34, icon: e25, colorScheme: n11 };

// node_modules/@primeuix/themes/dist/aura/inplace/index.mjs
var o35 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r34 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n12 = { root: o35, display: r34 };

// node_modules/@primeuix/themes/dist/aura/inputchips/index.mjs
var o36 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r35 = { borderRadius: "{border.radius.sm}" };
var d15 = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } };
var f6 = { root: o36, chip: r35, colorScheme: d15 };

// node_modules/@primeuix/themes/dist/aura/inputgroup/index.mjs
var r36 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" };
var o37 = { addon: r36 };

// node_modules/@primeuix/themes/dist/aura/inputnumber/index.mjs
var r37 = { transitionDuration: "{transition.duration}" };
var o38 = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e26 = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } };
var a17 = { root: r37, button: o38, colorScheme: e26 };

// node_modules/@primeuix/themes/dist/aura/inputotp/index.mjs
var r38 = { gap: "0.5rem" };
var t17 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } };
var e27 = { root: r38, input: t17 };

// node_modules/@primeuix/themes/dist/aura/inputtext/index.mjs
var o39 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d16 = { root: o39 };

// node_modules/@primeuix/themes/dist/aura/knob/index.mjs
var o40 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r39 = { background: "{primary.color}" };
var t18 = { background: "{content.border.color}" };
var n13 = { color: "{text.muted.color}" };
var c11 = { root: o40, value: r39, range: t18, text: n13 };

// node_modules/@primeuix/themes/dist/aura/listbox/index.mjs
var o41 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r40 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var d17 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i15 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t19 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var e28 = { padding: "{list.option.padding}" };
var l11 = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } };
var n14 = { root: o41, list: r40, option: d17, optionGroup: i15, checkmark: t19, emptyMessage: e28, colorScheme: l11 };

// node_modules/@primeuix/themes/dist/aura/megamenu/index.mjs
var o42 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n15 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i16 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a18 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var r41 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var t20 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e29 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c12 = { borderColor: "{content.border.color}" };
var d18 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g4 = { root: o42, baseItem: n15, item: i16, overlay: a18, submenu: r41, submenuLabel: t20, submenuIcon: e29, separator: c12, mobileButton: d18 };

// node_modules/@primeuix/themes/dist/aura/menu/index.mjs
var o43 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n16 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a19 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i17 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t21 = { borderColor: "{content.border.color}" };
var r42 = { root: o43, list: n16, item: a19, submenuLabel: i17, separator: t21 };

// node_modules/@primeuix/themes/dist/aura/menubar/index.mjs
var o44 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" };
var i18 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var n17 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var r43 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var a20 = { borderColor: "{content.border.color}" };
var t22 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e30 = { root: o44, baseItem: i18, item: n17, submenu: r43, separator: a20, mobileButton: t22 };

// node_modules/@primeuix/themes/dist/aura/message/index.mjs
var o45 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r44 = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } };
var e31 = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var n18 = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } };
var l12 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var s8 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var c13 = { root: { borderWidth: "1px" } };
var a21 = { content: { padding: "0" } };
var d19 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var u4 = { root: o45, content: r44, text: e31, icon: n18, closeButton: l12, closeIcon: s8, outlined: c13, simple: a21, colorScheme: d19 };

// node_modules/@primeuix/themes/dist/aura/metergroup/index.mjs
var e32 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r45 = { background: "{content.border.color}", size: "0.5rem" };
var a22 = { gap: "0.5rem" };
var o46 = { size: "0.5rem" };
var l13 = { size: "1rem" };
var t23 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var b3 = { root: e32, meters: r45, label: a22, labelMarker: o46, labelIcon: l13, labelList: t23 };

// node_modules/@primeuix/themes/dist/aura/multiselect/index.mjs
var o47 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d20 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r46 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l14 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i19 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var e33 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f7 = { color: "{form.field.icon.color}" };
var a23 = { borderRadius: "{border.radius.sm}" };
var c14 = { padding: "{list.option.padding}" };
var n19 = { root: o47, dropdown: d20, overlay: r46, list: l14, option: i19, optionGroup: e33, chip: a23, clearIcon: f7, emptyMessage: c14 };

// node_modules/@primeuix/themes/dist/aura/orderlist/index.mjs
var r47 = { gap: "1.125rem" };
var a24 = { gap: "0.5rem" };
var o48 = { root: r47, controls: a24 };

// node_modules/@primeuix/themes/dist/aura/organizationchart/index.mjs
var o49 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r48 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" };
var e34 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t24 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n20 = { root: o49, node: r48, nodeToggleButton: e34, connector: t24 };

// node_modules/@primeuix/themes/dist/aura/overlaybadge/index.mjs
var o50 = { outline: { width: "2px", color: "{content.background}" } };
var t25 = { root: o50 };

// node_modules/@primeuix/themes/dist/aura/paginator/index.mjs
var o51 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r49 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t26 = { color: "{text.muted.color}" };
var e35 = { maxWidth: "2.5rem" };
var n21 = { root: o51, navButton: r49, currentPageReport: t26, jumpToPageInput: e35 };

// node_modules/@primeuix/themes/dist/aura/panel/index.mjs
var r50 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o52 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" };
var e36 = { padding: "0.375rem 1.125rem" };
var d21 = { fontWeight: "600" };
var t27 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var n22 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var a25 = { root: r50, header: o52, toggleableHeader: e36, title: d21, content: t27, footer: n22 };

// node_modules/@primeuix/themes/dist/aura/panelmenu/index.mjs
var o53 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r51 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } };
var n23 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i20 = { indent: "1rem" };
var t28 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a26 = { root: o53, panel: r51, item: n23, submenu: i20, submenuIcon: t28 };

// node_modules/@primeuix/themes/dist/aura/password/index.mjs
var r52 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" };
var o54 = { color: "{form.field.icon.color}" };
var e37 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a27 = { gap: "0.5rem" };
var d22 = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } };
var n24 = { meter: r52, icon: o54, overlay: e37, content: a27, colorScheme: d22 };

// node_modules/@primeuix/themes/dist/aura/picklist/index.mjs
var r53 = { gap: "1.125rem" };
var a28 = { gap: "0.5rem" };
var o55 = { root: r53, controls: a28 };

// node_modules/@primeuix/themes/dist/aura/popover/index.mjs
var o56 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r54 = { padding: "{overlay.popover.padding}" };
var e38 = { root: o56, content: r54 };

// node_modules/@primeuix/themes/dist/aura/progressbar/index.mjs
var r55 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" };
var o57 = { background: "{primary.color}" };
var e39 = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" };
var t29 = { root: r55, value: o57, label: e39 };

// node_modules/@primeuix/themes/dist/aura/progressspinner/index.mjs
var o58 = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } };
var r56 = { colorScheme: o58 };

// node_modules/@primeuix/themes/dist/aura/radiobutton/index.mjs
var o59 = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var r57 = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } };
var e40 = { root: o59, icon: r57 };

// node_modules/@primeuix/themes/dist/aura/rating/index.mjs
var o60 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r58 = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i21 = { root: o60, icon: r58 };

// node_modules/@primeuix/themes/dist/aura/ripple/index.mjs
var r59 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } };
var o61 = { colorScheme: r59 };

// node_modules/@primeuix/themes/dist/aura/scrollpanel/index.mjs
var r60 = { transitionDuration: "{transition.duration}" };
var o62 = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s9 = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } };
var a29 = { root: r60, bar: o62, colorScheme: s9 };

// node_modules/@primeuix/themes/dist/aura/select/index.mjs
var o63 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r61 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d23 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l15 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i22 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var e41 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f8 = { color: "{form.field.icon.color}" };
var c15 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var a30 = { padding: "{list.option.padding}" };
var n25 = { root: o63, dropdown: r61, overlay: d23, list: l15, option: i22, optionGroup: e41, clearIcon: f8, checkmark: c15, emptyMessage: a30 };

// node_modules/@primeuix/themes/dist/aura/selectbutton/index.mjs
var r62 = { borderRadius: "{form.field.border.radius}" };
var o64 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d24 = { root: r62, colorScheme: o64 };

// node_modules/@primeuix/themes/dist/aura/skeleton/index.mjs
var r63 = { borderRadius: "{content.border.radius}" };
var a31 = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o65 = { root: r63, colorScheme: a31 };

// node_modules/@primeuix/themes/dist/aura/slider/index.mjs
var o66 = { transitionDuration: "{transition.duration}" };
var r64 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" };
var n26 = { background: "{primary.color}" };
var t30 = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e42 = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } };
var a32 = { root: o66, track: r64, range: n26, handle: t30, colorScheme: e42 };

// node_modules/@primeuix/themes/dist/aura/speeddial/index.mjs
var t31 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a33 = { root: t31 };

// node_modules/@primeuix/themes/dist/aura/splitbutton/index.mjs
var r65 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d25 = { root: r65 };

// node_modules/@primeuix/themes/dist/aura/splitter/index.mjs
var o67 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r66 = { background: "{content.border.color}" };
var n27 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t32 = { root: o67, gutter: r66, handle: n27 };

// node_modules/@primeuix/themes/dist/aura/stepper/index.mjs
var o68 = { transitionDuration: "{transition.duration}" };
var r67 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e43 = { padding: "0.5rem", gap: "1rem" };
var t33 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n28 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var a34 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c16 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var d26 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var i23 = { root: o68, separator: r67, step: e43, stepHeader: t33, stepTitle: n28, stepNumber: a34, steppanels: c16, steppanel: d26 };

// node_modules/@primeuix/themes/dist/aura/steps/index.mjs
var o69 = { transitionDuration: "{transition.duration}" };
var r68 = { background: "{content.border.color}" };
var t34 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e44 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var n29 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c17 = { root: o69, separator: r68, itemLink: t34, itemLabel: e44, itemNumber: n29 };

// node_modules/@primeuix/themes/dist/aura/tabmenu/index.mjs
var o70 = { transitionDuration: "{transition.duration}" };
var r69 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t35 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e45 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var c18 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var n30 = { root: o70, tablist: r69, item: t35, itemIcon: e45, activeBar: c18 };

// node_modules/@primeuix/themes/dist/aura/tabs/index.mjs
var o71 = { transitionDuration: "{transition.duration}" };
var r70 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t36 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n31 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c19 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var e46 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var a35 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var i24 = { root: o71, tablist: r70, tab: t36, tabpanel: n31, navButton: c19, activeBar: e46, colorScheme: a35 };

// node_modules/@primeuix/themes/dist/aura/tabview/index.mjs
var o72 = { transitionDuration: "{transition.duration}" };
var r71 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t37 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n32 = { background: "{content.background}", color: "{content.color}" };
var a36 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var c20 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e47 = { root: o72, tabList: r71, tab: t37, tabPanel: n32, navButton: a36, colorScheme: c20 };

// node_modules/@primeuix/themes/dist/aura/tag/index.mjs
var r72 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o73 = { size: "0.75rem" };
var a37 = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var n33 = { root: r72, icon: o73, colorScheme: a37 };

// node_modules/@primeuix/themes/dist/aura/terminal/index.mjs
var r73 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o74 = { gap: "0.25rem" };
var d27 = { margin: "2px 0" };
var e48 = { root: r73, prompt: o74, commandResponse: d27 };

// node_modules/@primeuix/themes/dist/aura/textarea/index.mjs
var o75 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d28 = { root: o75 };

// node_modules/@primeuix/themes/dist/aura/tieredmenu/index.mjs
var o76 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i25 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n34 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a38 = { mobileIndent: "1rem" };
var t38 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r74 = { borderColor: "{content.border.color}" };
var c21 = { root: o76, list: i25, item: n34, submenu: a38, submenuIcon: t38, separator: r74 };

// node_modules/@primeuix/themes/dist/aura/timeline/index.mjs
var e49 = { minHeight: "5rem" };
var r75 = { eventContent: { padding: "1rem 0" } };
var o77 = { eventContent: { padding: "0 1rem" } };
var n35 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } };
var t39 = { color: "{content.border.color}", size: "2px" };
var d29 = { event: e49, horizontal: r75, vertical: o77, eventMarker: n35, eventConnector: t39 };

// node_modules/@primeuix/themes/dist/aura/toast/index.mjs
var o78 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r76 = { size: "1.125rem" };
var e50 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var n36 = { gap: "0.5rem" };
var a39 = { fontWeight: "500", fontSize: "1rem" };
var s10 = { fontWeight: "500", fontSize: "0.875rem" };
var c22 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var l16 = { size: "1rem" };
var t40 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } };
var u5 = { root: o78, icon: r76, content: e50, text: n36, summary: a39, detail: s10, closeButton: c22, closeIcon: l16, colorScheme: t40 };

// node_modules/@primeuix/themes/dist/aura/togglebutton/index.mjs
var r77 = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } };
var o79 = { disabledColor: "{form.field.disabled.color}" };
var e51 = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } };
var d30 = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } };
var c23 = { root: r77, icon: o79, content: e51, colorScheme: d30 };

// node_modules/@primeuix/themes/dist/aura/toggleswitch/index.mjs
var r78 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" };
var o80 = { borderRadius: "50%", size: "1rem" };
var e52 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } };
var c24 = { root: r78, handle: o80, colorScheme: e52 };

// node_modules/@primeuix/themes/dist/aura/toolbar/index.mjs
var o81 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" };
var r79 = { root: o81 };

// node_modules/@primeuix/themes/dist/aura/tooltip/index.mjs
var r80 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o82 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } };
var e53 = { root: r80, colorScheme: o82 };

// node_modules/@primeuix/themes/dist/aura/tree/index.mjs
var o83 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" };
var r81 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" };
var e54 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t41 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n37 = { size: "2rem" };
var c25 = { margin: "0 0 0.5rem 0" };
var css2 = "\n    .p-tree-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var d31 = { root: o83, node: r81, nodeIcon: e54, nodeToggleButton: t41, loadingIcon: n37, filter: c25, css: css2 };

// node_modules/@primeuix/themes/dist/aura/treeselect/index.mjs
var o84 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r82 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d32 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l17 = { padding: "{list.padding}" };
var e55 = { padding: "{list.option.padding}" };
var i26 = { borderRadius: "{border.radius.sm}" };
var f9 = { color: "{form.field.icon.color}" };
var a40 = { root: o84, dropdown: r82, overlay: d32, tree: l17, emptyMessage: e55, chip: i26, clearIcon: f9 };

// node_modules/@primeuix/themes/dist/aura/treetable/index.mjs
var o85 = { transitionDuration: "{transition.duration}" };
var r83 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var e56 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t42 = { fontWeight: "600" };
var c26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n38 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var l18 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" };
var d33 = { fontWeight: "600" };
var a41 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var i27 = { width: "0.5rem" };
var g5 = { width: "1px", color: "{primary.color}" };
var s11 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u6 = { size: "2rem" };
var b4 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var h4 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m3 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f10 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css3 = "\n    .p-treetable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var k3 = { root: o85, header: r83, headerCell: e56, columnTitle: t42, row: c26, bodyCell: n38, footerCell: l18, columnFooter: d33, footer: a41, columnResizer: i27, resizeIndicator: g5, sortIcon: s11, loadingIcon: u6, nodeToggleButton: b4, paginatorTop: h4, paginatorBottom: m3, colorScheme: f10, css: css3 };

// node_modules/@primeuix/themes/dist/aura/virtualscroller/index.mjs
var o86 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e57 = { loader: o86 };

// node_modules/@primeuix/themes/dist/aura/index.mjs
var r84 = Object.defineProperty;
var e58 = Object.defineProperties;
var m4 = Object.getOwnPropertyDescriptors;
var i28 = Object.getOwnPropertySymbols;
var t43 = Object.prototype.hasOwnProperty;
var a42 = Object.prototype.propertyIsEnumerable;
var o87 = (e59, m5, i29) => m5 in e59 ? r84(e59, m5, { enumerable: true, configurable: true, writable: true, value: i29 }) : e59[m5] = i29;
var Nr;
var Qr = (Nr = ((r85, e59) => {
  for (var m5 in e59 || (e59 = {})) t43.call(e59, m5) && o87(r85, m5, e59[m5]);
  if (i28) for (var m5 of i28(e59)) a42.call(e59, m5) && o87(r85, m5, e59[m5]);
  return r85;
})({}, e5), e58(Nr, m4({ components: { accordion: c, autocomplete: a, avatar: n, badge: d2, blockui: o6, breadcrumb: t4, button: e6, card: d3, carousel: t6, cascadeselect: f2, checkbox: e9, chip: s3, colorpicker: s4, confirmdialog: r15, confirmpopup: a6, contextmenu: c6, datatable: v, dataview: c8, datepicker: k2, dialog: e17, divider: t12, dock: d9, drawer: e19, editor: l8, fieldset: e21, fileupload: i10, floatlabel: d13, galleria: l9, iconfield: r30, iftalabel: i13, image: e24, imagecompare: r32, inlinemessage: a16, inplace: n12, inputchips: f6, inputgroup: o37, inputnumber: a17, inputotp: e27, inputtext: d16, knob: c11, listbox: n14, megamenu: g4, menu: r42, menubar: e30, message: u4, metergroup: b3, multiselect: n19, orderlist: o48, organizationchart: n20, overlaybadge: t25, paginator: n21, panel: a25, panelmenu: a26, password: n24, picklist: o55, popover: e38, progressbar: t29, progressspinner: r56, radiobutton: e40, rating: i21, ripple: o61, scrollpanel: a29, select: n25, selectbutton: d24, skeleton: o65, slider: a32, speeddial: a33, splitbutton: d25, splitter: t32, stepper: i23, steps: c17, tabmenu: n30, tabs: i24, tabview: e47, tag: n33, terminal: e48, textarea: d28, tieredmenu: c21, timeline: d29, toast: u5, togglebutton: c23, toggleswitch: c24, toolbar: r79, tooltip: e53, tree: d31, treeselect: a40, treetable: k3, virtualscroller: e57 }, css: t8 })));

// src/app/theme/noir-zinc-theme.ts
var NoirZincTheme = t(Qr, {
  semantic: {
    // PRIMARY = NOIR (Zinc-900 based)
    primary: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      // MAIN NOIR COLOR
      950: "#09090b"
    },
    // SECONDARY = Zinc mid tones
    secondary: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      // MAIN SECONDARY
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    colorScheme: {
      light: {
        primary: {
          color: "#18181b",
          contrastColor: "#ffffff"
        },
        highlight: {
          background: "#18181b",
          color: "#ffffff"
        }
      }
    }
  }
});

// src/app/core/network/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const storage = inject(LocalStorageService);
  const router = inject(Router);
  const toast = inject(ToastService);
  const token = storage.getToken();
  let headers = req.headers.set("ngrok-skip-browser-warning", "true").set("Accept", "application/json");
  if (token) {
    headers = headers.set("Authorization", `Bearer ${token}`);
  }
  const authReq = req.clone({ headers });
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401) {
      if (!req.url.includes("/login")) {
        storage.clearAuth();
        toast.error("Your session has expired. Please log in again.", "Unauthorized");
        router.navigate(["/login"]);
      }
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    // 1. Core Performance & Routing
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // 2. Network & Middleware (MERGED INTO ONE CALL!)
    provideHttpClient(withInterceptors([authInterceptor])),
    // 3. Animations & UI
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: NoirZincTheme
      }
    }),
    MessageService,
    // 4. Global Error Handling
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
};

// node_modules/@primeuix/styles/dist/toast/index.mjs
var style5 = "\n    .p-toast {\n        width: dt('toast.width');\n        white-space: pre-line;\n        word-break: break-word;\n    }\n\n    .p-toast-message {\n        margin: 0 0 1rem 0;\n    }\n\n    .p-toast-message-icon {\n        flex-shrink: 0;\n        font-size: dt('toast.icon.size');\n        width: dt('toast.icon.size');\n        height: dt('toast.icon.size');\n    }\n\n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n        padding: dt('toast.content.padding');\n        gap: dt('toast.content.gap');\n    }\n\n    .p-toast-message-text {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        gap: dt('toast.text.gap');\n    }\n\n    .p-toast-summary {\n        font-weight: dt('toast.summary.font.weight');\n        font-size: dt('toast.summary.font.size');\n    }\n\n    .p-toast-detail {\n        font-weight: dt('toast.detail.font.weight');\n        font-size: dt('toast.detail.font.size');\n    }\n\n    .p-toast-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n        background: transparent;\n        transition:\n            background dt('toast.transition.duration'),\n            color dt('toast.transition.duration'),\n            outline-color dt('toast.transition.duration'),\n            box-shadow dt('toast.transition.duration');\n        outline-color: transparent;\n        color: inherit;\n        width: dt('toast.close.button.width');\n        height: dt('toast.close.button.height');\n        border-radius: dt('toast.close.button.border.radius');\n        margin: -25% 0 0 0;\n        right: -25%;\n        padding: 0;\n        border: none;\n        user-select: none;\n    }\n\n    .p-toast-close-button:dir(rtl) {\n        margin: -25% 0 0 auto;\n        left: -25%;\n        right: auto;\n    }\n\n    .p-toast-message-info,\n    .p-toast-message-success,\n    .p-toast-message-warn,\n    .p-toast-message-error,\n    .p-toast-message-secondary,\n    .p-toast-message-contrast {\n        border-width: dt('toast.border.width');\n        border-style: solid;\n        backdrop-filter: blur(dt('toast.blur'));\n        border-radius: dt('toast.border.radius');\n    }\n\n    .p-toast-close-icon {\n        font-size: dt('toast.close.icon.size');\n        width: dt('toast.close.icon.size');\n        height: dt('toast.close.icon.size');\n    }\n\n    .p-toast-close-button:focus-visible {\n        outline-width: dt('focus.ring.width');\n        outline-style: dt('focus.ring.style');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-toast-message-info {\n        background: dt('toast.info.background');\n        border-color: dt('toast.info.border.color');\n        color: dt('toast.info.color');\n        box-shadow: dt('toast.info.shadow');\n    }\n\n    .p-toast-message-info .p-toast-detail {\n        color: dt('toast.info.detail.color');\n    }\n\n    .p-toast-message-info .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.info.close.button.focus.ring.color');\n        box-shadow: dt('toast.info.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-info .p-toast-close-button:hover {\n        background: dt('toast.info.close.button.hover.background');\n    }\n\n    .p-toast-message-success {\n        background: dt('toast.success.background');\n        border-color: dt('toast.success.border.color');\n        color: dt('toast.success.color');\n        box-shadow: dt('toast.success.shadow');\n    }\n\n    .p-toast-message-success .p-toast-detail {\n        color: dt('toast.success.detail.color');\n    }\n\n    .p-toast-message-success .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.success.close.button.focus.ring.color');\n        box-shadow: dt('toast.success.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-success .p-toast-close-button:hover {\n        background: dt('toast.success.close.button.hover.background');\n    }\n\n    .p-toast-message-warn {\n        background: dt('toast.warn.background');\n        border-color: dt('toast.warn.border.color');\n        color: dt('toast.warn.color');\n        box-shadow: dt('toast.warn.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-detail {\n        color: dt('toast.warn.detail.color');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.warn.close.button.focus.ring.color');\n        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:hover {\n        background: dt('toast.warn.close.button.hover.background');\n    }\n\n    .p-toast-message-error {\n        background: dt('toast.error.background');\n        border-color: dt('toast.error.border.color');\n        color: dt('toast.error.color');\n        box-shadow: dt('toast.error.shadow');\n    }\n\n    .p-toast-message-error .p-toast-detail {\n        color: dt('toast.error.detail.color');\n    }\n\n    .p-toast-message-error .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.error.close.button.focus.ring.color');\n        box-shadow: dt('toast.error.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-error .p-toast-close-button:hover {\n        background: dt('toast.error.close.button.hover.background');\n    }\n\n    .p-toast-message-secondary {\n        background: dt('toast.secondary.background');\n        border-color: dt('toast.secondary.border.color');\n        color: dt('toast.secondary.color');\n        box-shadow: dt('toast.secondary.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-detail {\n        color: dt('toast.secondary.detail.color');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.secondary.close.button.focus.ring.color');\n        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:hover {\n        background: dt('toast.secondary.close.button.hover.background');\n    }\n\n    .p-toast-message-contrast {\n        background: dt('toast.contrast.background');\n        border-color: dt('toast.contrast.border.color');\n        color: dt('toast.contrast.color');\n        box-shadow: dt('toast.contrast.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-detail {\n        color: dt('toast.contrast.detail.color');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.contrast.close.button.focus.ring.color');\n        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:hover {\n        background: dt('toast.contrast.close.button.hover.background');\n    }\n\n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n\n    .p-toast-message-enter-from {\n        opacity: 0;\n        transform: translateY(50%);\n    }\n\n    .p-toast-message-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-toast .p-toast-message.p-toast-message-leave-to {\n        max-height: 0;\n        opacity: 0;\n        margin-bottom: 0;\n        overflow: hidden;\n    }\n\n    .p-toast-message-enter-active {\n        transition:\n            transform 0.3s,\n            opacity 0.3s;\n    }\n\n    .p-toast-message-leave-active {\n        transition:\n            max-height 0.45s cubic-bezier(0, 1, 0, 1),\n            opacity 0.3s,\n            margin-bottom 0.3s;\n    }\n";

// node_modules/primeng/fesm2022/primeng-toast.mjs
var _c09 = (a0, a1, a210, a310) => ({
  showTransformParams: a0,
  hideTransformParams: a1,
  showTransitionParams: a210,
  hideTransitionParams: a310
});
var _c14 = (a0) => ({
  value: "visible",
  params: a0
});
var _c23 = (a0, a1) => ({
  $implicit: a0,
  closeFn: a1
});
var _c33 = (a0) => ({
  $implicit: a0
});
function ToastItem_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c23, ctx_r1.message, ctx_r1.onCloseIconClick));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("messageIcon"), ctx_r1.message == null ? null : ctx_r1.message.icon));
    \u0275\u0275property("pBind", ctx_r1.ptm("messageIcon"));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template, 1, 4, ":svg:svg", 7)(1, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template, 1, 4, ":svg:svg", 8)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template, 1, 4, ":svg:svg", 9)(3, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template, 1, 4, ":svg:svg", 10)(4, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template, 1, 4, ":svg:svg", 8);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.message.severity) === "success" ? 0 : tmp_4_0 === "info" ? 1 : tmp_4_0 === "error" ? 2 : tmp_4_0 === "warn" ? 3 : 4);
  }
}
function ToastItem_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, ToastItem_Conditional_3_ng_container_1_Conditional_1_Template, 1, 3, "span", 2)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Template, 5, 1);
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.message.icon ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r1.ptm("messageText"))("ngClass", ctx_r1.cx("messageText"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("summary"))("ngClass", ctx_r1.cx("summary"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message.summary, " ");
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("detail"))("ngClass", ctx_r1.cx("detail"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.message.detail);
  }
}
function ToastItem_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("closeIcon"), ctx_r1.message == null ? null : ctx_r1.message.closeIcon));
    \u0275\u0275property("pBind", ctx_r1.ptm("closeIcon"));
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template, 1, 3, "span", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.message.closeIcon);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("closeIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("closeIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 15);
    \u0275\u0275listener("click", function ToastItem_Conditional_3_Conditional_3_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCloseIconClick($event));
    })("keydown.enter", function ToastItem_Conditional_3_Conditional_3_Template_button_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCloseIconClick($event));
    });
    \u0275\u0275conditionalCreate(2, ToastItem_Conditional_3_Conditional_3_Conditional_2_Template, 1, 1, "span", 2)(3, ToastItem_Conditional_3_Conditional_3_Conditional_3_Template, 1, 4, ":svg:svg", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("closeButton"));
    \u0275\u0275attribute("class", ctx_r1.cx("closeButton"))("aria-label", ctx_r1.closeAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.message.closeIcon ? 2 : 3);
  }
}
function ToastItem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_Template, 8, 9, "ng-container", 5)(2, ToastItem_Conditional_3_ng_container_2_Template, 1, 0, "ng-container", 3);
    \u0275\u0275conditionalCreate(3, ToastItem_Conditional_3_Conditional_3_Template, 4, 4, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("messageContent"), ctx_r1.message == null ? null : ctx_r1.message.contentStyleClass));
    \u0275\u0275property("pBind", ctx_r1.ptm("messageContent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c33, ctx_r1.message));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.message == null ? null : ctx_r1.message.closable) !== false ? 3 : -1);
  }
}
var _c43 = ["message"];
var _c52 = ["headless"];
function Toast_p_toastItem_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-toastItem", 1);
    \u0275\u0275listener("onClose", function Toast_p_toastItem_0_Template_p_toastItem_onClose_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMessageClose($event));
    })("@toastAnimation.start", function Toast_p_toastItem_0_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@toastAnimation.done", function Toast_p_toastItem_0_Template_p_toastItem_animation_toastAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("message", msg_r3)("index", i_r4)("life", ctx_r1.life)("template", ctx_r1.template || ctx_r1._template)("headlessTemplate", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("@toastAnimation", void 0)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions)("pt", ctx_r1.pt);
  }
}
var inlineStyles2 = {
  root: ({
    instance
  }) => {
    const {
      _position
    } = instance;
    return {
      position: "fixed",
      top: _position === "top-right" || _position === "top-left" || _position === "top-center" ? "20px" : _position === "center" ? "50%" : null,
      right: (_position === "top-right" || _position === "bottom-right") && "20px",
      bottom: (_position === "bottom-left" || _position === "bottom-right" || _position === "bottom-center") && "20px",
      left: _position === "top-left" || _position === "bottom-left" ? "20px" : _position === "center" || _position === "top-center" || _position === "bottom-center" ? "50%" : null
    };
  }
};
var classes4 = {
  root: ({
    instance
  }) => ["p-toast p-component", `p-toast-${instance._position}`],
  message: ({
    instance
  }) => ({
    "p-toast-message": true,
    "p-toast-message-info": instance.message.severity === "info" || instance.message.severity === void 0,
    "p-toast-message-warn": instance.message.severity === "warn",
    "p-toast-message-error": instance.message.severity === "error",
    "p-toast-message-success": instance.message.severity === "success",
    "p-toast-message-secondary": instance.message.severity === "secondary",
    "p-toast-message-contrast": instance.message.severity === "contrast"
  }),
  messageContent: "p-toast-message-content",
  messageIcon: ({
    instance
  }) => ({
    "p-toast-message-icon": true,
    [`pi ${instance.message.icon}`]: !!instance.message.icon
  }),
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: ({
    instance
  }) => ({
    "p-toast-close-icon": true,
    [`pi ${instance.message.closeIcon}`]: !!instance.message.closeIcon
  })
};
var ToastStyle = class _ToastStyle extends BaseStyle {
  name = "toast";
  style = style5;
  classes = classes4;
  inlineStyles = inlineStyles2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToastStyle_BaseFactory;
    return function ToastStyle_Factory(__ngFactoryType__) {
      return (\u0275ToastStyle_BaseFactory || (\u0275ToastStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToastStyle)))(__ngFactoryType__ || _ToastStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastStyle,
    factory: _ToastStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastStyle, [{
    type: Injectable
  }], null, null);
})();
var ToastClasses;
(function(ToastClasses2) {
  ToastClasses2["root"] = "p-toast";
  ToastClasses2["message"] = "p-toast-message";
  ToastClasses2["messageContent"] = "p-toast-message-content";
  ToastClasses2["messageIcon"] = "p-toast-message-icon";
  ToastClasses2["messageText"] = "p-toast-message-text";
  ToastClasses2["summary"] = "p-toast-summary";
  ToastClasses2["detail"] = "p-toast-detail";
  ToastClasses2["closeButton"] = "p-toast-close-button";
  ToastClasses2["closeIcon"] = "p-toast-close-icon";
})(ToastClasses || (ToastClasses = {}));
var TOAST_INSTANCE = new InjectionToken("TOAST_INSTANCE");
var ToastItem = class _ToastItem extends BaseComponent {
  zone;
  message;
  index;
  life;
  template;
  headlessTemplate;
  showTransformOptions;
  hideTransformOptions;
  showTransitionOptions;
  hideTransitionOptions;
  onClose = new EventEmitter();
  _componentStyle = inject(ToastStyle);
  timeout;
  constructor(zone) {
    super();
    this.zone = zone;
  }
  onAfterViewInit() {
    this.initTimeout();
  }
  initTimeout() {
    if (!this.message?.sticky) {
      this.clearTimeout();
      this.zone.runOutsideAngular(() => {
        this.timeout = setTimeout(() => {
          this.onClose.emit({
            index: this.index,
            message: this.message
          });
        }, this.message?.life || this.life || 3e3);
      });
    }
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onMouseEnter() {
    this.clearTimeout();
  }
  onMouseLeave() {
    this.initTimeout();
  }
  onCloseIconClick = (event) => {
    this.clearTimeout();
    this.onClose.emit({
      index: this.index,
      message: this.message
    });
    event.preventDefault();
  };
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  onDestroy() {
    this.clearTimeout();
  }
  static \u0275fac = function ToastItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastItem)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastItem,
    selectors: [["p-toastItem"]],
    inputs: {
      message: "message",
      index: [2, "index", "index", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      template: "template",
      headlessTemplate: "headlessTemplate",
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 13,
    consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "mouseenter", "mouseleave", "pBind"], [3, "pBind", "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], [4, "ngIf"], [3, "pBind", "ngClass"], ["data-p-icon", "check", 3, "pBind", "class"], ["data-p-icon", "info-circle", 3, "pBind", "class"], ["data-p-icon", "times-circle", 3, "pBind", "class"], ["data-p-icon", "exclamation-triangle", 3, "pBind", "class"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "info-circle", 3, "pBind"], ["data-p-icon", "times-circle", 3, "pBind"], ["data-p-icon", "exclamation-triangle", 3, "pBind"], ["type", "button", "autofocus", "", 3, "click", "keydown.enter", "pBind"], ["data-p-icon", "times", 3, "pBind", "class"], [3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "times", 3, "pBind"]],
    template: function ToastItem_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onMouseEnter());
        })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onMouseLeave());
        });
        \u0275\u0275conditionalCreate(2, ToastItem_Conditional_2_Template, 1, 5, "ng-container")(3, ToastItem_Conditional_3_Template, 4, 9, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("message"), ctx.message == null ? null : ctx.message.styleClass));
        \u0275\u0275property("pBind", ctx.ptm("message"))("@messageState", \u0275\u0275pureFunction1(11, _c14, \u0275\u0275pureFunction4(6, _c09, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)));
        \u0275\u0275attribute("id", ctx.message == null ? null : ctx.message.id);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toastItem",
      standalone: true,
      imports: [CommonModule, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule, Bind],
      template: `
        <div
            #container
            [attr.id]="message?.id"
            [pBind]="ptm('message')"
            [class]="cn(cx('message'), message?.styleClass)"
            [@messageState]="{
                value: 'visible',
                params: {
                    showTransformParams: showTransformOptions,
                    hideTransformParams: hideTransformOptions,
                    showTransitionParams: showTransitionOptions,
                    hideTransitionParams: hideTransitionOptions
                }
            }"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [pBind]="ptm('messageContent')" [class]="cn(cx('messageContent'), message?.contentStyleClass)">
                    <ng-container *ngIf="!template">
                        @if (message.icon) {
                            <span [pBind]="ptm('messageIcon')" [class]="cn(cx('messageIcon'), message?.icon)"></span>
                        } @else {
                            @switch (message.severity) {
                                @case ('success') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="check" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('info') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('error') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="times-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('warn') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="exclamation-triangle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @default {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                            }
                        }
                        <div [pBind]="ptm('messageText')" [ngClass]="cx('messageText')">
                            <div [pBind]="ptm('summary')" [ngClass]="cx('summary')">
                                {{ message.summary }}
                            </div>
                            <div [pBind]="ptm('detail')" [ngClass]="cx('detail')">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button [pBind]="ptm('closeButton')" type="button" [attr.class]="cx('closeButton')" (click)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" [attr.aria-label]="closeAriaLabel" autofocus>
                                @if (message.closeIcon) {
                                    <span [pBind]="ptm('closeIcon')" *ngIf="message.closeIcon" [class]="cn(cx('closeIcon'), message?.closeIcon)"></span>
                                } @else {
                                    <svg [pBind]="ptm('closeIcon')" data-p-icon="times" [class]="cx('closeIcon')" [attr.aria-hidden]="true" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `,
      animations: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ToastStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    message: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    template: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }]
  });
})();
var Toast = class _Toast extends BaseComponent {
  $pcToast = inject(TOAST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Key of the message in case message is targeted to a specific toast component.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * The default time to display messages for in milliseconds.
   * @group Props
   */
  life = 3e3;
  /**
   * Inline class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Position of the toast in viewport.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    this.cd.markForCheck();
  }
  /**
   * It does not add the new message if there is already a toast displayed with the same content
   * @group Props
   */
  preventOpenDuplicates = false;
  /**
   * Displays only once a message with the same content.
   * @group Props
   */
  preventDuplicates = false;
  /**
   * Transform options of the show animation.
   * @group Props
   */
  showTransformOptions = "translateY(100%)";
  /**
   * Transform options of the hide animation.
   * @group Props
   */
  hideTransformOptions = "translateY(-100%)";
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = "250ms ease-in";
  /**
   * Object literal to define styles per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Callback to invoke when a message is closed.
   * @param {ToastCloseEvent} event - custom close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Custom template of message.
   * @group Templates
   */
  template;
  /**
   * Custom headless template.
   * @group Templates
   */
  headlessTemplate;
  messageSubscription;
  clearSubscription;
  messages;
  messagesArchieve;
  _position = "top-right";
  messageService = inject(MessageService);
  _componentStyle = inject(ToastStyle);
  styleElement;
  id = s("pn_id_");
  templates;
  constructor() {
    super();
  }
  onInit() {
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m5) => this.canAdd(m5));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key === key) {
          this.messages = null;
        }
      } else {
        this.messages = null;
      }
      this.cd.markForCheck();
    });
  }
  _template;
  _headlessTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "message":
          this._template = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
        default:
          this._template = item.template;
          break;
      }
    });
  }
  onAfterViewInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
    }
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key === message.key;
    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }
    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) {
      return false;
    }
    return collection.find((m5) => {
      return m5.summary === message.summary && m5.detail == message.detail && m5.severity === message.severity;
    }) != null;
  }
  onMessageClose(event) {
    this.messages?.splice(event.index, 1);
    this.onClose.emit({
      message: event.message
    });
    this.cd.detectChanges();
  }
  onAnimationStart(event) {
    if (event.fromState === "void") {
      this.renderer.setAttribute(this.el?.nativeElement, this.id, "");
      if (this.autoZIndex && this.el?.nativeElement.style.zIndex === "") {
        zindexutils.set("modal", this.el?.nativeElement, this.baseZIndex || this.config.zIndex.modal);
      }
    }
  }
  onAnimationEnd(event) {
    if (event.toState === "void") {
      if (this.autoZIndex && l(this.messages)) {
        zindexutils.clear(this.el?.nativeElement);
      }
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = "";
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
        }
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.el && this.autoZIndex) {
      zindexutils.clear(this.el.nativeElement);
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.destroyStyle();
  }
  static \u0275fac = function Toast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Toast)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toast,
    selectors: [["p-toast"]],
    contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c43, 5);
        \u0275\u0275contentQuery(dirIndex, _c52, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.template = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 4,
    hostBindings: function Toast_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      styleClass: "styleClass",
      position: "position",
      preventOpenDuplicates: [2, "preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute],
      preventDuplicates: [2, "preventDuplicates", "preventDuplicates", booleanAttribute],
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      breakpoints: "breakpoints"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle, {
      provide: TOAST_INSTANCE,
      useExisting: _Toast
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Toast
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "pt", "onClose", 4, "ngFor", "ngForOf"], [3, "onClose", "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "pt"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Toast_p_toastItem_0_Template, 1, 11, "p-toastItem", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.messages);
      }
    },
    dependencies: [CommonModule, NgForOf, ToastItem, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      standalone: true,
      imports: [CommonModule, ToastItem, SharedModule],
      template: `
        <p-toastItem
            *ngFor="let msg of messages; let i = index"
            [message]="msg"
            [index]="i"
            [life]="life"
            (onClose)="onMessageClose($event)"
            [template]="template || _template"
            [headlessTemplate]="headlessTemplate || _headlessTemplate"
            @toastAnimation
            (@toastAnimation.start)="onAnimationStart($event)"
            (@toastAnimation.done)="onAnimationEnd($event)"
            [showTransformOptions]="showTransformOptions"
            [hideTransformOptions]="hideTransformOptions"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
            [pt]="pt"
        ></p-toastItem>
    `,
      animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToastStyle, {
        provide: TOAST_INSTANCE,
        useExisting: Toast
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Toast
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    preventOpenDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: ["message"]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToastModule = class _ToastModule {
  static \u0275fac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastModule,
    imports: [Toast, SharedModule],
    exports: [Toast, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Toast, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [Toast, SharedModule],
      exports: [Toast, SharedModule]
    }]
  }], null, null);
})();

// src/app/app.ts
var _c010 = (a0, a1, a210, a310) => ({ "pi-check-circle": a0, "pi-times-circle": a1, "pi-exclamation-triangle": a210, "pi-info-circle": a310 });
function App_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(3, _c010, message_r1.severity === "success", message_r1.severity === "error", message_r1.severity === "warn", message_r1.severity === "info"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", message_r1.summary, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", message_r1.detail, " ");
  }
}
var App = class _App {
  title = signal("customer-dashboard", ...ngDevMode ? [{ debugName: "title" }] : []);
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["position", "top-right", "key", "crm"], ["pTemplate", "message"], [1, "crm-toast"], [1, "pi", "crm-toast-icon", 3, "ngClass"], [1, "crm-toast-text"], [1, "crm-toast-title"], [1, "crm-toast-desc"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-toast", 0);
      \u0275\u0275template(1, App_ng_template_1_Template, 7, 8, "ng-template", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "router-outlet");
    }
  }, dependencies: [RouterOutlet, ToastModule, Toast, PrimeTemplate, CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, ToastModule, CommonModule], template: `<p-toast position="top-right" key="crm">
  <ng-template let-message pTemplate="message">
    <div class="crm-toast">
      <i
        class="pi crm-toast-icon"
        [ngClass]="{
          'pi-check-circle': message.severity === 'success',
          'pi-times-circle': message.severity === 'error',
          'pi-exclamation-triangle': message.severity === 'warn',
          'pi-info-circle': message.severity === 'info',
        }"
      >
      </i>

      <div class="crm-toast-text">
        <div class="crm-toast-title">
          {{ message.summary }}
        </div>

        <div class="crm-toast-desc">
          {{ message.detail }}
        </div>
      </div>
    </div>
  </ng-template>
</p-toast>

<router-outlet></router-outlet>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
