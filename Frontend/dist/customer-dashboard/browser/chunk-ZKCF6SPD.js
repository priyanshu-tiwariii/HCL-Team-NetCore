import {
  Select,
  SelectModule,
  Table,
  TableModule
} from "./chunk-2ZKDK4LG.js";
import "./chunk-4E32XZTA.js";
import "./chunk-W7X3ZES4.js";
import "./chunk-SOS4MOQT.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QDIVF7GO.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-T6KHSKL3.js";
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
  Button,
  ButtonModule,
  CommonModule,
  DatePipe,
  DecimalPipe,
  PARENT_INSTANCE,
  SharedModule
} from "./chunk-FV6RVCBT.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  ViewEncapsulation,
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-O557UGG4.js";

// src/app/features/orders/domain/services/orders-logic.service.ts
var OrdersLogicService = class _OrdersLogicService {
  orders = [
    {
      id: "ORD-2001",
      customerName: "Aarav Sharma",
      customerPhone: "9876543210",
      deliveryAddress: "12, Bandra West, Mumbai 400050",
      items: [
        { name: "Margherita Pizza", quantity: 2, price: 249 },
        { name: "Garlic Bread", quantity: 1, price: 129 },
        { name: "Coca-Cola 500ml", quantity: 2, price: 60 }
      ],
      totalAmount: 747,
      orderDate: "2026-02-23T10:15:00Z",
      status: "Pending"
    },
    {
      id: "ORD-2002",
      customerName: "Priya Patel",
      customerPhone: "9123456780",
      deliveryAddress: "45, Koramangala, Bengaluru 560034",
      items: [
        { name: "Chicken Burger", quantity: 1, price: 199 },
        { name: "French Fries", quantity: 1, price: 99 },
        { name: "Mango Lassi", quantity: 1, price: 89 }
      ],
      totalAmount: 387,
      orderDate: "2026-02-23T11:30:00Z",
      status: "Preparing"
    },
    {
      id: "ORD-2003",
      customerName: "Rohan Gupta",
      customerPhone: "9988776655",
      deliveryAddress: "78, Sector 18, Noida 201301",
      items: [
        { name: "Paneer Tikka Pizza (Large)", quantity: 1, price: 399 },
        { name: "Cheesy Dip", quantity: 2, price: 49 },
        { name: "Brownie Sundae", quantity: 1, price: 149 }
      ],
      totalAmount: 646,
      orderDate: "2026-02-23T09:45:00Z",
      status: "Out for Delivery"
    },
    {
      id: "ORD-2004",
      customerName: "Sneha Iyer",
      customerPhone: "9012345678",
      deliveryAddress: "23, Anna Nagar, Chennai 600040",
      items: [
        { name: "Veg Combo Meal", quantity: 2, price: 279 },
        { name: "Sweet Lassi", quantity: 2, price: 69 }
      ],
      totalAmount: 696,
      orderDate: "2026-02-22T18:00:00Z",
      status: "Delivered"
    },
    {
      id: "ORD-2005",
      customerName: "Karan Mehta",
      customerPhone: "9876012345",
      deliveryAddress: "56, MG Road, Pune 411001",
      items: [
        { name: "Classic Chicken Burger", quantity: 2, price: 219 },
        { name: "Onion Rings", quantity: 1, price: 119 },
        { name: "Chocolate Shake", quantity: 1, price: 139 }
      ],
      totalAmount: 696,
      orderDate: "2026-02-22T20:10:00Z",
      status: "Cancelled"
    },
    {
      id: "ORD-2006",
      customerName: "Ananya Reddy",
      customerPhone: "9345678901",
      deliveryAddress: "89, Jubilee Hills, Hyderabad 500033",
      items: [
        { name: "Farm Fresh Pizza", quantity: 1, price: 349 },
        { name: "Brownie", quantity: 2, price: 99 },
        { name: "Cold Coffee", quantity: 1, price: 119 }
      ],
      totalAmount: 666,
      orderDate: "2026-02-23T12:00:00Z",
      status: "Pending"
    },
    {
      id: "ORD-2007",
      customerName: "Vikram Singh",
      customerPhone: "9567890123",
      deliveryAddress: "34, Civil Lines, Jaipur 302006",
      items: [
        { name: "Tandoori Paneer Wrap", quantity: 3, price: 179 },
        { name: "Masala Fries", quantity: 1, price: 89 }
      ],
      totalAmount: 626,
      orderDate: "2026-02-23T08:30:00Z",
      status: "Preparing"
    }
  ];
  getOrders() {
    return __async(this, null, function* () {
      return this.delay([...this.orders]);
    });
  }
  getOrderById(id) {
    return __async(this, null, function* () {
      const order = this.orders.find((o) => o.id === id);
      return this.delay(order ? __spreadProps(__spreadValues({}, order), { items: [...order.items] }) : void 0);
    });
  }
  updateOrderStatus(id, newStatus) {
    return __async(this, null, function* () {
      const idx = this.orders.findIndex((o) => o.id === id);
      if (idx === -1)
        return this.delay(void 0);
      this.orders[idx] = __spreadProps(__spreadValues({}, this.orders[idx]), { status: newStatus });
      return this.delay(__spreadValues({}, this.orders[idx]));
    });
  }
  delay(data, ms = 500) {
    return new Promise((resolve) => setTimeout(() => resolve(data), ms));
  }
  static \u0275fac = function OrdersLogicService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdersLogicService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrdersLogicService, factory: _OrdersLogicService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersLogicService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/orders/presentation/pages/orders-page/orders-page.component.ts
var _c0 = () => ["5rem", "8rem", "11rem", "5rem", "6rem", "4rem"];
var _c1 = () => [1, 2, 3, 4, 5, 6, 7];
var _c2 = () => [1, 2, 3, 4, 5];
var _c3 = () => [5, 10, 20];
var _c4 = () => ({ "min-width": "50rem" });
function OrdersPageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 11)(1, "p-skeleton", 12);
  }
}
function OrdersPageComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 13);
    \u0275\u0275text(1, "All Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.filteredOrders().length, " orders found");
  }
}
function OrdersPageComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 16);
  }
  if (rf & 2) {
    const w_r2 = ctx.$implicit;
    \u0275\u0275property("width", w_r2);
  }
}
function OrdersPageComponent_Conditional_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "p-skeleton", 12)(2, "p-skeleton", 21)(3, "p-skeleton", 22)(4, "p-skeleton", 23)(5, "p-skeleton", 24)(6, "p-skeleton", 19);
    \u0275\u0275elementEnd();
  }
}
function OrdersPageComponent_Conditional_12_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 19);
  }
}
function OrdersPageComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, OrdersPageComponent_Conditional_12_For_2_Template, 1, 1, "p-skeleton", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, OrdersPageComponent_Conditional_12_For_4_Template, 7, 0, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275repeaterCreate(6, OrdersPageComponent_Conditional_12_For_7_Template, 1, 0, "p-skeleton", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275element(8, "p-skeleton", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c2));
  }
}
function OrdersPageComponent_Conditional_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 26);
    \u0275\u0275text(2, "Order ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 26);
    \u0275\u0275text(4, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 26);
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 26);
    \u0275\u0275text(8, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 26);
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 26);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function OrdersPageComponent_Conditional_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 27)(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "p-tag", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "p-button", 33);
    \u0275\u0275listener("onClick", function OrdersPageComponent_Conditional_13_ng_template_3_Template_p_button_onClick_14_listener() {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewOrder(order_r5));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 9, order_r5.orderDate, "MMM d, y \xB7 h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(10, 12, order_r5.totalAmount));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", order_r5.status)("severity", ctx_r0.getStatusSeverity(order_r5.status))("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function OrdersPageComponent_Conditional_13_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275text(3, " No orders match the selected filter. ");
    \u0275\u0275elementEnd()();
  }
}
function OrdersPageComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-table", 25);
    \u0275\u0275listener("onRowSelect", function OrdersPageComponent_Conditional_13_Template_p_table_onRowSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewOrder($event.data));
    });
    \u0275\u0275template(1, OrdersPageComponent_Conditional_13_ng_template_1_Template, 13, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, OrdersPageComponent_Conditional_13_ng_template_3_Template, 15, 14, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, OrdersPageComponent_Conditional_13_ng_template_5_Template, 4, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.filteredOrders())("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(5, _c3))("tableStyle", \u0275\u0275pureFunction0(6, _c4));
  }
}
var OrdersPageComponent = class _OrdersPageComponent {
  logic = inject(OrdersLogicService);
  router = inject(Router);
  orders = signal([], ...ngDevMode ? [{ debugName: "orders" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  selectedStatus = signal("All", ...ngDevMode ? [{ debugName: "selectedStatus" }] : []);
  statusOptions = [
    { label: "All Statuses", value: "All" },
    { label: "Pending", value: "Pending" },
    { label: "Preparing", value: "Preparing" },
    { label: "Out for Delivery", value: "Out for Delivery" },
    { label: "Delivered", value: "Delivered" },
    { label: "Cancelled", value: "Cancelled" }
  ];
  filteredOrders = computed(() => {
    const status = this.selectedStatus();
    const all = this.orders();
    return status === "All" ? all : all.filter((o) => o.status === status);
  }, ...ngDevMode ? [{ debugName: "filteredOrders" }] : []);
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    return __async(this, null, function* () {
      this.loading.set(true);
      const data = yield this.logic.getOrders();
      this.orders.set(data);
      this.loading.set(false);
    });
  }
  onStatusFilterChange(value) {
    this.selectedStatus.set(value);
  }
  viewOrder(order) {
    this.router.navigate(["/orders", order.id]);
  }
  getStatusSeverity(status) {
    switch (status) {
      case "Pending":
        return "warn";
      case "Preparing":
        return "info";
      case "Out for Delivery":
        return "contrast";
      case "Delivered":
        return "success";
      case "Cancelled":
        return "danger";
    }
  }
  static \u0275fac = function OrdersPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdersPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersPageComponent, selectors: [["app-orders-page"]], decls: 14, vars: 5, consts: [["header", ""], ["body", ""], ["emptymessage", ""], [1, "p-6", "bg-zinc-50", "min-h-full"], [1, "mb-6"], [1, "text-2xl", "font-semibold", "text-zinc-900", "tracking-tight"], [1, "text-sm", "text-zinc-500", "mt-1"], [1, "bg-white", "border", "border-zinc-200", "rounded-xl", "shadow-sm", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "p-5", "border-b", "border-zinc-200", "bg-white"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Filter by Status", "styleClass", "w-48", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled"], ["styleClass", "p-datatable-sm", "selectionMode", "single", 3, "value", "rows", "paginator", "rowsPerPageOptions", "tableStyle"], ["width", "7rem", "height", "1.125rem", "styleClass", "mb-1.5"], ["width", "5rem", "height", "0.875rem"], [1, "text-base", "font-semibold", "text-zinc-900"], [1, "text-xs", "text-zinc-500", "mt-0.5"], [1, "grid", "grid-cols-6", "gap-4", "px-5", "py-3", "bg-zinc-50", "border-b", "border-zinc-200"], ["height", "0.75rem", 3, "width"], [1, "grid", "grid-cols-6", "gap-4", "px-5", "py-4", "border-b", "border-zinc-100", "items-center", "last:border-b-0"], [1, "flex", "items-center", "justify-end", "gap-3", "px-5", "py-3", "border-t", "border-zinc-200", "bg-zinc-50"], ["shape", "circle", "size", "2rem"], ["width", "5rem", "height", "2rem", "borderRadius", "0.375rem"], ["width", "7rem", "height", "0.875rem"], ["width", "10rem", "height", "0.875rem"], ["width", "4rem", "height", "0.875rem"], ["width", "5.5rem", "height", "1.5rem", "borderRadius", "2rem"], ["styleClass", "p-datatable-sm", "selectionMode", "single", 3, "onRowSelect", "value", "rows", "paginator", "rowsPerPageOptions", "tableStyle"], ["scope", "col"], [1, "cursor-pointer", "hover:bg-zinc-50!"], [1, "font-medium", "text-zinc-800"], [1, "text-zinc-600"], [1, "text-zinc-500", "text-sm"], [1, "font-semibold", "text-zinc-800"], [3, "value", "severity", "rounded"], ["icon", "pi pi-eye", "severity", "secondary", "pTooltip", "View Details", 3, "onClick", "text", "rounded"], ["colspan", "6", 1, "text-center", "text-sm", "text-zinc-400", "py-10"], [1, "pi", "pi-inbox", "text-3xl", "text-zinc-300", "mb-2", "block"]], template: function OrdersPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h1", 5);
      \u0275\u0275text(3, "Order Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 6);
      \u0275\u0275text(5, "View, filter, and manage all customer orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "div");
      \u0275\u0275conditionalCreate(9, OrdersPageComponent_Conditional_9_Template, 2, 0)(10, OrdersPageComponent_Conditional_10_Template, 4, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function OrdersPageComponent_Template_p_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function OrdersPageComponent_Template_p_select_onChange_11_listener($event) {
        return ctx.onStatusFilterChange($event.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, OrdersPageComponent_Conditional_12_Template, 9, 3)(13, OrdersPageComponent_Conditional_13_Template, 7, 7, "p-table", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.loading() ? 9 : 10);
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.statusOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 12 : 13);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, TableModule, Table, TagModule, Tag, ButtonModule, Button, SelectModule, Select, SkeletonModule, Skeleton, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersPageComponent, [{
    type: Component,
    args: [{ selector: "app-orders-page", standalone: true, imports: [CommonModule, DatePipe, FormsModule, TableModule, TagModule, ButtonModule, SelectModule, SkeletonModule], template: `<div class="p-6 bg-zinc-50 min-h-full">

  <!-- Page Header -->
  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-zinc-900 tracking-tight">Order Management</h1>
    <p class="text-sm text-zinc-500 mt-1">View, filter, and manage all customer orders</p>
  </div>

  <!-- Table Card -->
  <div class="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">

    <!-- Card Header with Filter -->
    <div class="flex items-center justify-between p-5 border-b border-zinc-200 bg-white">
      <div>
        @if (loading()) {
          <p-skeleton width="7rem" height="1.125rem" styleClass="mb-1.5"></p-skeleton>
          <p-skeleton width="5rem" height="0.875rem"></p-skeleton>
        } @else {
          <h2 class="text-base font-semibold text-zinc-900">All Orders</h2>
          <p class="text-xs text-zinc-500 mt-0.5">{{ filteredOrders().length }} orders found</p>
        }
      </div>
      <p-select
        [options]="statusOptions"
        [(ngModel)]="selectedStatus"
        optionLabel="label"
        optionValue="value"
        placeholder="Filter by Status"
        [disabled]="loading()"
        (onChange)="onStatusFilterChange($event.value)"
        styleClass="w-48"
      ></p-select>
    </div>

    <!-- \u2500\u2500 SKELETON (loading) \u2500\u2500 -->
    @if (loading()) {
      <!-- Fake header row -->
      <div class="grid grid-cols-6 gap-4 px-5 py-3 bg-zinc-50 border-b border-zinc-200">
        @for (w of ['5rem','8rem','11rem','5rem','6rem','4rem']; track w) {
          <p-skeleton [width]="w" height="0.75rem"></p-skeleton>
        }
      </div>
      <!-- Fake body rows -->
      @for (row of [1,2,3,4,5,6,7]; track row) {
        <div class="grid grid-cols-6 gap-4 px-5 py-4 border-b border-zinc-100 items-center last:border-b-0">
          <p-skeleton width="5rem" height="0.875rem"></p-skeleton>
          <p-skeleton width="7rem" height="0.875rem"></p-skeleton>
          <p-skeleton width="10rem" height="0.875rem"></p-skeleton>
          <p-skeleton width="4rem" height="0.875rem"></p-skeleton>
          <p-skeleton width="5.5rem" height="1.5rem" borderRadius="2rem"></p-skeleton>
          <p-skeleton shape="circle" size="2rem"></p-skeleton>
        </div>
      }
      <!-- Fake paginator -->
      <div class="flex items-center justify-end gap-3 px-5 py-3 border-t border-zinc-200 bg-zinc-50">
        @for (i of [1,2,3,4,5]; track i) {
          <p-skeleton shape="circle" size="2rem"></p-skeleton>
        }
        <p-skeleton width="5rem" height="2rem" borderRadius="0.375rem"></p-skeleton>
      </div>

    } @else {
      <!-- \u2500\u2500 REAL TABLE \u2500\u2500 -->
      <p-table
        [value]="filteredOrders()"
        [rows]="10"
        [paginator]="true"
        [rowsPerPageOptions]="[5, 10, 20]"
        [tableStyle]="{ 'min-width': '50rem' }"
        styleClass="p-datatable-sm"
        selectionMode="single"
        (onRowSelect)="viewOrder($any($event.data))"
      >
        <ng-template #header>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Customer</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </ng-template>
        <ng-template #body let-order>
          <tr class="cursor-pointer hover:bg-zinc-50!">
            <td class="font-medium text-zinc-800">{{ order.id }}</td>
            <td class="text-zinc-600">{{ order.customerName }}</td>
            <td class="text-zinc-500 text-sm">{{ order.orderDate | date:'MMM d, y \xB7 h:mm a' }}</td>
            <td class="font-semibold text-zinc-800">\u20B9{{ order.totalAmount | number }}</td>
            <td>
              <p-tag
                [value]="order.status"
                [severity]="getStatusSeverity(order.status)"
                [rounded]="true"
              ></p-tag>
            </td>
            <td>
              <p-button
                icon="pi pi-eye"
                [text]="true"
                [rounded]="true"
                severity="secondary"
                pTooltip="View Details"
                (onClick)="viewOrder(order)"
              ></p-button>
            </td>
          </tr>
        </ng-template>
        <ng-template #emptymessage>
          <tr>
            <td colspan="6" class="text-center text-sm text-zinc-400 py-10">
              <i class="pi pi-inbox text-3xl text-zinc-300 mb-2 block"></i>
              No orders match the selected filter.
            </td>
          </tr>
        </ng-template>
      </p-table>
    }

  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersPageComponent, { className: "OrdersPageComponent", filePath: "src/app/features/orders/presentation/pages/orders-page/orders-page.component.ts", lineNumber: 24 });
})();

// node_modules/@primeuix/styles/dist/progressspinner/index.mjs
var style = "\n    .p-progressspinner {\n        position: relative;\n        margin: 0 auto;\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n    }\n\n    .p-progressspinner::before {\n        content: '';\n        display: block;\n        padding-top: 100%;\n    }\n\n    .p-progressspinner-spin {\n        height: 100%;\n        transform-origin: center center;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n        animation: p-progressspinner-rotate 2s linear infinite;\n    }\n\n    .p-progressspinner-circle {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: 0;\n        stroke: dt('progressspinner.colorOne');\n        animation:\n            p-progressspinner-dash 1.5s ease-in-out infinite,\n            p-progressspinner-color 6s ease-in-out infinite;\n        stroke-linecap: round;\n    }\n\n    @keyframes p-progressspinner-rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes p-progressspinner-dash {\n        0% {\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n        }\n        50% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -35px;\n        }\n        100% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -124px;\n        }\n    }\n    @keyframes p-progressspinner-color {\n        100%,\n        0% {\n            stroke: dt('progressspinner.color.one');\n        }\n        40% {\n            stroke: dt('progressspinner.color.two');\n        }\n        66% {\n            stroke: dt('progressspinner.color.three');\n        }\n        80%,\n        90% {\n            stroke: dt('progressspinner.color.four');\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-progressspinner.mjs
var classes = {
  root: () => ["p-progressspinner"],
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
};
var ProgressSpinnerStyle = class _ProgressSpinnerStyle extends BaseStyle {
  name = "progressspinner";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinnerStyle_BaseFactory;
    return function ProgressSpinnerStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinnerStyle_BaseFactory || (\u0275ProgressSpinnerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinnerStyle)))(__ngFactoryType__ || _ProgressSpinnerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressSpinnerStyle,
    factory: _ProgressSpinnerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressSpinnerClasses;
(function(ProgressSpinnerClasses2) {
  ProgressSpinnerClasses2["root"] = "p-progressspinner";
  ProgressSpinnerClasses2["spin"] = "p-progressspinner-spin";
  ProgressSpinnerClasses2["circle"] = "p-progressspinner-circle";
})(ProgressSpinnerClasses || (ProgressSpinnerClasses = {}));
var PROGRESSSPINNER_INSTANCE = new InjectionToken("PROGRESSSPINNER_INSTANCE");
var ProgressSpinner = class _ProgressSpinner extends BaseComponent {
  $pcProgressSpinner = inject(PROGRESSSPINNER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Width of the circle stroke.
   * @group Props
   */
  strokeWidth = "2";
  /**
   * Color for the background of the circle.
   * @group Props
   */
  fill = "none";
  /**
   * Duration of the rotate animation.
   * @group Props
   */
  animationDuration = "2s";
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(ProgressSpinnerStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinner_BaseFactory;
    return function ProgressSpinner_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinner_BaseFactory || (\u0275ProgressSpinner_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinner)))(__ngFactoryType__ || _ProgressSpinner);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressSpinner,
    selectors: [["p-progressSpinner"], ["p-progress-spinner"], ["p-progressspinner"]],
    hostVars: 5,
    hostBindings: function ProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("role", "progressbar")("aria-busy", true);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      strokeWidth: "strokeWidth",
      fill: "fill",
      animationDuration: "animationDuration",
      ariaLabel: "ariaLabel"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressSpinnerStyle, {
      provide: PROGRESSSPINNER_INSTANCE,
      useExisting: _ProgressSpinner
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ProgressSpinner
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 10,
    consts: [["viewBox", "25 25 50 50", 3, "pBind"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 3, "pBind"]],
    template: function ProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "circle", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("spin"));
        \u0275\u0275styleProp("animation-duration", ctx.animationDuration);
        \u0275\u0275property("pBind", ctx.ptm("spin"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("circle"));
        \u0275\u0275property("pBind", ctx.ptm("circle"));
        \u0275\u0275attribute("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
      }
    },
    dependencies: [CommonModule, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinner, [{
    type: Component,
    args: [{
      selector: "p-progressSpinner, p-progress-spinner, p-progressspinner",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <svg [class]="cx('spin')" [pBind]="ptm('spin')" viewBox="25 25 50 50" [style.animation-duration]="animationDuration">
            <circle [class]="cx('circle')" [pBind]="ptm('circle')" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
        </svg>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressSpinnerStyle, {
        provide: PROGRESSSPINNER_INSTANCE,
        useExisting: ProgressSpinner
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ProgressSpinner
      }],
      host: {
        "[attr.aria-label]": "ariaLabel",
        "[attr.role]": "'progressbar'",
        "[attr.aria-busy]": "true",
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var ProgressSpinnerModule = class _ProgressSpinnerModule {
  static \u0275fac = function ProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressSpinnerModule,
    imports: [ProgressSpinner, SharedModule],
    exports: [ProgressSpinner, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressSpinner, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressSpinner, SharedModule],
      exports: [ProgressSpinner, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/orders/presentation/pages/order-detail-page/order-detail-page.component.ts
var _c02 = () => [1, 2, 3, 4];
var _c12 = () => [1, 2, 3];
var _c22 = () => ({ "min-width": "30rem" });
function OrderDetailPageComponent_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "p-skeleton", 29)(2, "p-skeleton", 30);
    \u0275\u0275elementEnd();
  }
}
function OrderDetailPageComponent_Conditional_0_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "p-skeleton", 29)(2, "p-skeleton", 31);
    \u0275\u0275elementEnd();
  }
}
function OrderDetailPageComponent_Conditional_0_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 17);
  }
}
function OrderDetailPageComponent_Conditional_0_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "p-skeleton", 32)(2, "p-skeleton", 33)(3, "p-skeleton", 34)(4, "p-skeleton", 34);
    \u0275\u0275elementEnd();
  }
}
function OrderDetailPageComponent_Conditional_0_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "p-skeleton", 35)(2, "p-skeleton", 33);
    \u0275\u0275elementEnd();
  }
}
function OrderDetailPageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "p-skeleton", 4);
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275element(4, "p-skeleton", 6)(5, "p-skeleton", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9);
    \u0275\u0275repeaterCreate(8, OrderDetailPageComponent_Conditional_0_For_9_Template, 3, 0, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "div", 12);
    \u0275\u0275element(13, "p-skeleton", 13);
    \u0275\u0275elementStart(14, "div", 14);
    \u0275\u0275repeaterCreate(15, OrderDetailPageComponent_Conditional_0_For_16_Template, 3, 0, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275element(18, "p-skeleton", 15);
    \u0275\u0275elementStart(19, "div", 16);
    \u0275\u0275repeaterCreate(20, OrderDetailPageComponent_Conditional_0_For_21_Template, 1, 0, "p-skeleton", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(22, OrderDetailPageComponent_Conditional_0_For_23_Template, 5, 0, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(24, "div", 19);
    \u0275\u0275element(25, "p-skeleton", 20)(26, "p-skeleton", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 22)(28, "div", 12);
    \u0275\u0275element(29, "p-skeleton", 23)(30, "p-skeleton", 24)(31, "p-skeleton", 25)(32, "p-skeleton", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 12);
    \u0275\u0275element(34, "p-skeleton", 27);
    \u0275\u0275repeaterCreate(35, OrderDetailPageComponent_Conditional_0_For_36_Template, 3, 0, "div", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c02));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c12));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c02));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(3, _c12));
    \u0275\u0275advance(13);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(4, _c02));
  }
}
function OrderDetailPageComponent_Conditional_1_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 71);
    \u0275\u0275text(2, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 72);
    \u0275\u0275text(4, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 73);
    \u0275\u0275text(6, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 73);
    \u0275\u0275text(8, "Subtotal");
    \u0275\u0275elementEnd()();
  }
}
function OrderDetailPageComponent_Conditional_1_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 76);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 77);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(7, 4, item_r1.price));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(10, 6, item_r1.quantity * item_r1.price));
  }
}
function OrderDetailPageComponent_Conditional_1_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275elementStart(2, "p", 79);
    \u0275\u0275text(3, " This order has reached a terminal state and cannot be modified. ");
    \u0275\u0275elementEnd()();
  }
}
function OrderDetailPageComponent_Conditional_1_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 80);
    \u0275\u0275listener("onClick", function OrderDetailPageComponent_Conditional_1_Conditional_79_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.advanceStatus());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r2.nextStatusLabel())("loading", ctx_r2.updatingStatus())("disabled", ctx_r2.isTerminal());
  }
}
function OrderDetailPageComponent_Conditional_1_Conditional_80_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 82);
    \u0275\u0275text(1, " Cancellation is not available for orders that are out for delivery. ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailPageComponent_Conditional_1_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 81);
    \u0275\u0275listener("onClick", function OrderDetailPageComponent_Conditional_1_Conditional_80_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelOrder());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, OrderDetailPageComponent_Conditional_1_Conditional_80_Conditional_1_Template, 2, 0, "p", 82);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("outlined", true)("loading", ctx_r2.updatingStatus())("disabled", !ctx_r2.canCancel());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.canCancel() ? 1 : -1);
  }
}
function OrderDetailPageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 36);
    \u0275\u0275element(2, "p-button", 37);
    \u0275\u0275elementStart(3, "div")(4, "h1", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 39);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 40)(11, "div", 41)(12, "p", 42);
    \u0275\u0275text(13, "Order ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 43);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 44)(17, "p", 42);
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "p-tag", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 44)(21, "p", 42);
    \u0275\u0275text(22, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 43);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 44)(27, "p", 42);
    \u0275\u0275text(28, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 43);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 10)(32, "div", 11)(33, "div", 46)(34, "div", 47);
    \u0275\u0275element(35, "i", 48);
    \u0275\u0275elementStart(36, "h2", 49);
    \u0275\u0275text(37, "Customer Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 50)(39, "div", 51)(40, "p", 52);
    \u0275\u0275text(41, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 53);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 51)(45, "p", 52);
    \u0275\u0275text(46, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 53);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 51)(50, "p", 52);
    \u0275\u0275text(51, "Delivery Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 54);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 55)(55, "div", 47);
    \u0275\u0275element(56, "i", 56);
    \u0275\u0275elementStart(57, "h2", 49);
    \u0275\u0275text(58, "Order Items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "p-table", 57);
    \u0275\u0275template(60, OrderDetailPageComponent_Conditional_1_ng_template_60_Template, 9, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(62, OrderDetailPageComponent_Conditional_1_ng_template_62_Template, 11, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 58)(65, "span", 59);
    \u0275\u0275text(66, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 60);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 22)(71, "div", 55)(72, "div", 47);
    \u0275\u0275element(73, "i", 61);
    \u0275\u0275elementStart(74, "h2", 49);
    \u0275\u0275text(75, "Order Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 62);
    \u0275\u0275conditionalCreate(77, OrderDetailPageComponent_Conditional_1_Conditional_77_Template, 4, 0, "div", 63);
    \u0275\u0275elementStart(78, "div", 64);
    \u0275\u0275conditionalCreate(79, OrderDetailPageComponent_Conditional_1_Conditional_79_Template, 1, 3, "p-button", 65);
    \u0275\u0275conditionalCreate(80, OrderDetailPageComponent_Conditional_1_Conditional_80_Template, 2, 4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 55)(82, "div", 47);
    \u0275\u0275element(83, "i", 66);
    \u0275\u0275elementStart(84, "h2", 49);
    \u0275\u0275text(85, "Quick Info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 67)(87, "div", 68)(88, "span", 69);
    \u0275\u0275text(89, "Order ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 53);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 68)(93, "span", 69);
    \u0275\u0275text(94, "Items Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 53);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 68)(98, "span", 69);
    \u0275\u0275text(99, "Placed On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "span", 53);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 68)(104, "span", 69);
    \u0275\u0275text(105, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 70);
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "number");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const o_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Placed on ", \u0275\u0275pipeBind2(8, 24, o_r5.orderDate, "MMMM d, y \xB7 h:mm a"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(o_r5.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", o_r5.status)("severity", ctx_r2.getStatusSeverity(o_r5.status))("rounded", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(25, 27, o_r5.totalAmount));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", o_r5.items.length, " item", o_r5.items.length !== 1 ? "s" : "");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(o_r5.customerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r5.customerPhone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r5.deliveryAddress);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", o_r5.items)("tableStyle", \u0275\u0275pureFunction0(36, _c22));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(69, 29, o_r5.totalAmount));
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r2.isTerminal() ? 77 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.nextStatus() ? 79 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isTerminal() ? 80 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(o_r5.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r5.items.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 31, o_r5.orderDate, "MMM d, h:mm a"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(108, 34, o_r5.totalAmount));
  }
}
var OrderDetailPageComponent = class _OrderDetailPageComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  logic = inject(OrdersLogicService);
  toast = inject(ToastService);
  order = signal(null, ...ngDevMode ? [{ debugName: "order" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  updatingStatus = signal(false, ...ngDevMode ? [{ debugName: "updatingStatus" }] : []);
  /** True when the order is in a terminal state. */
  isTerminal = computed(() => {
    const status = this.order()?.status;
    return status === "Delivered" || status === "Cancelled";
  }, ...ngDevMode ? [{ debugName: "isTerminal" }] : []);
  /** True when cancellation is allowed (only Pending or Preparing). */
  canCancel = computed(() => {
    const status = this.order()?.status;
    return status === "Pending" || status === "Preparing";
  }, ...ngDevMode ? [{ debugName: "canCancel" }] : []);
  /** The next forward status in the flow, or null if terminal. */
  nextStatus = computed(() => {
    const map = {
      Pending: "Preparing",
      Preparing: "Out for Delivery",
      "Out for Delivery": "Delivered",
      Delivered: null,
      Cancelled: null
    };
    return map[this.order()?.status ?? ""] ?? null;
  }, ...ngDevMode ? [{ debugName: "nextStatus" }] : []);
  /** Human-readable label for the next-status button. */
  nextStatusLabel = computed(() => {
    const map = {
      Preparing: "Start Preparing",
      "Out for Delivery": "Mark Out for Delivery",
      Delivered: "Mark as Delivered"
    };
    const next = this.nextStatus();
    return next ? map[next] ?? next : "";
  }, ...ngDevMode ? [{ debugName: "nextStatusLabel" }] : []);
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id) {
      this.router.navigate(["/orders"]);
      return;
    }
    this.loadOrder(id);
  }
  loadOrder(id) {
    return __async(this, null, function* () {
      this.loading.set(true);
      const data = yield this.logic.getOrderById(id);
      if (!data) {
        this.toast.error("Order not found.");
        this.router.navigate(["/orders"]);
        return;
      }
      this.order.set(data);
      this.loading.set(false);
    });
  }
  advanceStatus() {
    return __async(this, null, function* () {
      const next = this.nextStatus();
      const current = this.order();
      if (!next || !current)
        return;
      yield this.applyStatus(current.id, next);
    });
  }
  cancelOrder() {
    return __async(this, null, function* () {
      const current = this.order();
      if (!current || !this.canCancel())
        return;
      yield this.applyStatus(current.id, "Cancelled");
    });
  }
  applyStatus(id, status) {
    return __async(this, null, function* () {
      this.updatingStatus.set(true);
      const updated = yield this.logic.updateOrderStatus(id, status);
      if (updated) {
        this.order.set(updated);
        this.toast.success(`Order status updated to "${status}".`);
      } else {
        this.toast.error("Failed to update order status.");
      }
      this.updatingStatus.set(false);
    });
  }
  getStatusSeverity(status) {
    switch (status) {
      case "Pending":
        return "warn";
      case "Preparing":
        return "info";
      case "Out for Delivery":
        return "contrast";
      case "Delivered":
        return "success";
      case "Cancelled":
        return "danger";
    }
  }
  static \u0275fac = function OrderDetailPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderDetailPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailPageComponent, selectors: [["app-order-detail-page"]], decls: 2, vars: 1, consts: [["header", ""], ["body", ""], [1, "p-6", "bg-zinc-50", "min-h-full"], [1, "flex", "items-center", "gap-4", "mb-6"], ["shape", "circle", "size", "2.5rem"], [1, "flex", "flex-col", "gap-2"], ["width", "10rem", "height", "1.5rem"], ["width", "8rem", "height", "0.875rem"], [1, "bg-white", "border", "border-zinc-200", "rounded-xl", "shadow-sm", "p-5", "mb-6"], [1, "grid", "grid-cols-2", "sm:grid-cols-4", "gap-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "flex", "flex-col", "gap-6"], [1, "bg-white", "border", "border-zinc-200", "rounded-xl", "shadow-sm", "p-6"], ["width", "9rem", "height", "0.875rem", "styleClass", "mb-4"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-5"], ["width", "7rem", "height", "0.875rem", "styleClass", "mb-5"], [1, "grid", "grid-cols-4", "gap-4", "pb-3", "mb-2", "border-b", "border-zinc-200"], ["width", "60%", "height", "0.75rem"], [1, "grid", "grid-cols-4", "gap-4", "py-3", "border-b", "border-zinc-100"], [1, "flex", "justify-between", "pt-4"], ["width", "6rem", "height", "0.875rem"], ["width", "4rem", "height", "1.25rem"], [1, "flex", "flex-col", "gap-6"], ["width", "7rem", "height", "0.875rem", "styleClass", "mb-4"], ["width", "6rem", "height", "2rem", "borderRadius", "2rem", "styleClass", "mb-5"], ["height", "2.5rem", "borderRadius", "0.5rem", "styleClass", "mb-3"], ["height", "2.5rem", "borderRadius", "0.5rem"], ["width", "5rem", "height", "0.875rem", "styleClass", "mb-4"], [1, "flex", "justify-between", "py-3", "border-b", "border-zinc-100", "last:border-b-0"], ["width", "55%", "height", "0.75rem"], ["width", "70%", "height", "1rem"], ["width", "75%", "height", "0.875rem"], ["width", "80%", "height", "0.875rem"], ["width", "30%", "height", "0.875rem"], ["width", "50%", "height", "0.875rem"], ["width", "40%", "height", "0.875rem"], [1, "flex", "items-center", "gap-3", "mb-6"], ["icon", "pi pi-arrow-left", "severity", "secondary", "routerLink", "/orders", 3, "text", "rounded"], [1, "text-2xl", "font-semibold", "text-zinc-900", "tracking-tight"], [1, "text-sm", "text-zinc-500", "mt-0.5"], [1, "grid", "grid-cols-2", "sm:grid-cols-4", "gap-6", "divide-x", "divide-zinc-100"], [1, "px-4", "first:pl-0"], [1, "text-xs", "font-medium", "text-zinc-400", "uppercase", "tracking-wide", "mb-1"], [1, "text-sm", "font-semibold", "text-zinc-900"], [1, "px-4"], [3, "value", "severity", "rounded"], [1, "bg-white", "border", "border-zinc-200", "rounded-xl", "shadow-sm"], [1, "flex", "items-center", "gap-2.5", "px-6", "py-4", "border-b", "border-zinc-100"], [1, "pi", "pi-user", "text-zinc-400", "text-sm"], [1, "text-sm", "font-semibold", "text-zinc-800"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-0", "divide-x", "divide-zinc-100"], [1, "px-6", "py-5"], [1, "text-xs", "font-medium", "text-zinc-400", "uppercase", "tracking-wide", "mb-1.5"], [1, "text-sm", "font-medium", "text-zinc-900"], [1, "text-sm", "font-medium", "text-zinc-900", "leading-relaxed"], [1, "bg-white", "border", "border-zinc-200", "rounded-xl", "shadow-sm", "overflow-hidden"], [1, "pi", "pi-shopping-bag", "text-zinc-400", "text-sm"], ["styleClass", "p-datatable-sm", 3, "value", "tableStyle"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-t", "border-zinc-200", "bg-zinc-50"], [1, "text-sm", "font-semibold", "text-zinc-600", "uppercase", "tracking-wide"], [1, "text-xl", "font-bold", "text-zinc-900"], [1, "pi", "pi-flag", "text-zinc-400", "text-sm"], [1, "p-6"], [1, "flex", "items-start", "gap-2.5", "p-3.5", "rounded-lg", "bg-zinc-100", "border", "border-zinc-200", "mb-5"], [1, "flex", "flex-col", "gap-3"], ["icon", "pi pi-arrow-right", "styleClass", "w-full py-2.5! bg-zinc-900! border-none! text-white! font-medium! text-sm! rounded-lg! shadow-sm", 3, "label", "loading", "disabled"], [1, "pi", "pi-info-circle", "text-zinc-400", "text-sm"], [1, "divide-y", "divide-zinc-100"], [1, "flex", "items-center", "justify-between", "px-6", "py-3.5"], [1, "text-xs", "text-zinc-500"], [1, "text-sm", "font-bold", "text-zinc-900"], ["scope", "col"], ["scope", "col", 1, "text-center"], ["scope", "col", 1, "text-right"], [1, "font-medium", "text-zinc-900"], [1, "text-center", "text-zinc-700"], [1, "text-right", "text-zinc-500"], [1, "text-right", "font-medium", "text-zinc-900"], [1, "pi", "pi-lock", "text-zinc-500", "mt-0.5", "text-sm"], [1, "text-xs", "text-zinc-600", "leading-relaxed"], ["icon", "pi pi-arrow-right", "styleClass", "w-full py-2.5! bg-zinc-900! border-none! text-white! font-medium! text-sm! rounded-lg! shadow-sm", 3, "onClick", "label", "loading", "disabled"], ["label", "Cancel Order", "icon", "pi pi-times", "severity", "danger", "styleClass", "w-full py-2.5! text-sm! font-medium! rounded-lg!", 3, "onClick", "outlined", "loading", "disabled"], [1, "text-xs", "text-zinc-400", "text-center"]], template: function OrderDetailPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, OrderDetailPageComponent_Conditional_0_Template, 37, 5, "div", 2)(1, OrderDetailPageComponent_Conditional_1_Template, 109, 37, "div", 2);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional(ctx.loading() ? 0 : (tmp_0_0 = ctx.order()) ? 1 : -1, tmp_0_0);
    }
  }, dependencies: [
    CommonModule,
    RouterLink,
    TableModule,
    Table,
    TagModule,
    Tag,
    ButtonModule,
    Button,
    ProgressSpinnerModule,
    SkeletonModule,
    Skeleton,
    DecimalPipe,
    DatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailPageComponent, [{
    type: Component,
    args: [{ selector: "app-order-detail-page", standalone: true, imports: [
      CommonModule,
      DatePipe,
      RouterLink,
      TableModule,
      TagModule,
      ButtonModule,
      ProgressSpinnerModule,
      SkeletonModule
    ], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     SKELETON (loading)\r
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
@if (loading()) {\r
  <div class="p-6 bg-zinc-50 min-h-full">\r
\r
    <!-- Header skeleton -->\r
    <div class="flex items-center gap-4 mb-6">\r
      <p-skeleton shape="circle" size="2.5rem"></p-skeleton>\r
      <div class="flex flex-col gap-2">\r
        <p-skeleton width="10rem" height="1.5rem"></p-skeleton>\r
        <p-skeleton width="8rem" height="0.875rem"></p-skeleton>\r
      </div>\r
    </div>\r
\r
    <!-- Summary bar skeleton -->\r
    <div class="bg-white border border-zinc-200 rounded-xl shadow-sm p-5 mb-6">\r
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">\r
        @for (i of [1,2,3,4]; track i) {\r
          <div class="flex flex-col gap-2">\r
            <p-skeleton width="55%" height="0.75rem"></p-skeleton>\r
            <p-skeleton width="70%" height="1rem"></p-skeleton>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- Main grid skeleton -->\r
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">\r
\r
      <!-- Left skeleton -->\r
      <div class="lg:col-span-2 flex flex-col gap-6">\r
\r
        <!-- Customer card skeleton -->\r
        <div class="bg-white border border-zinc-200 rounded-xl shadow-sm p-6">\r
          <p-skeleton width="9rem" height="0.875rem" styleClass="mb-4"></p-skeleton>\r
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">\r
            @for (i of [1,2,3]; track i) {\r
              <div class="flex flex-col gap-2">\r
                <p-skeleton width="55%" height="0.75rem"></p-skeleton>\r
                <p-skeleton width="75%" height="0.875rem"></p-skeleton>\r
              </div>\r
            }\r
          </div>\r
        </div>\r
\r
        <!-- Items table skeleton -->\r
        <div class="bg-white border border-zinc-200 rounded-xl shadow-sm p-6">\r
          <p-skeleton width="7rem" height="0.875rem" styleClass="mb-5"></p-skeleton>\r
          <!-- Fake header -->\r
          <div class="grid grid-cols-4 gap-4 pb-3 mb-2 border-b border-zinc-200">\r
            @for (i of [1,2,3,4]; track i) {\r
              <p-skeleton width="60%" height="0.75rem"></p-skeleton>\r
            }\r
          </div>\r
          <!-- Fake rows -->\r
          @for (i of [1,2,3]; track i) {\r
            <div class="grid grid-cols-4 gap-4 py-3 border-b border-zinc-100">\r
              <p-skeleton width="80%" height="0.875rem"></p-skeleton>\r
              <p-skeleton width="30%" height="0.875rem"></p-skeleton>\r
              <p-skeleton width="50%" height="0.875rem"></p-skeleton>\r
              <p-skeleton width="50%" height="0.875rem"></p-skeleton>\r
            </div>\r
          }\r
          <!-- Fake total row -->\r
          <div class="flex justify-between pt-4">\r
            <p-skeleton width="6rem" height="0.875rem"></p-skeleton>\r
            <p-skeleton width="4rem" height="1.25rem"></p-skeleton>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Right skeleton -->\r
      <div class="flex flex-col gap-6">\r
        <!-- Status card skeleton -->\r
        <div class="bg-white border border-zinc-200 rounded-xl shadow-sm p-6">\r
          <p-skeleton width="7rem" height="0.875rem" styleClass="mb-4"></p-skeleton>\r
          <p-skeleton width="6rem" height="2rem" borderRadius="2rem" styleClass="mb-5"></p-skeleton>\r
          <p-skeleton height="2.5rem" borderRadius="0.5rem" styleClass="mb-3"></p-skeleton>\r
          <p-skeleton height="2.5rem" borderRadius="0.5rem"></p-skeleton>\r
        </div>\r
        <!-- Quick info card skeleton -->\r
        <div class="bg-white border border-zinc-200 rounded-xl shadow-sm p-6">\r
          <p-skeleton width="5rem" height="0.875rem" styleClass="mb-4"></p-skeleton>\r
          @for (i of [1,2,3,4]; track i) {\r
            <div class="flex justify-between py-3 border-b border-zinc-100 last:border-b-0">\r
              <p-skeleton width="40%" height="0.875rem"></p-skeleton>\r
              <p-skeleton width="30%" height="0.875rem"></p-skeleton>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
} @else if (order(); as o) {\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     CONTENT\r
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="p-6 bg-zinc-50 min-h-full">\r
\r
    <!-- Back + Page Header -->\r
    <div class="flex items-center gap-3 mb-6">\r
      <p-button\r
        icon="pi pi-arrow-left"\r
        [text]="true"\r
        [rounded]="true"\r
        severity="secondary"\r
        routerLink="/orders"\r
      ></p-button>\r
      <div>\r
        <h1 class="text-2xl font-semibold text-zinc-900 tracking-tight">{{ o.id }}</h1>\r
        <p class="text-sm text-zinc-500 mt-0.5">Placed on {{ o.orderDate | date:'MMMM d, y \xB7 h:mm a' }}</p>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 Top Summary Card \u2500\u2500 -->\r
    <div class="bg-white border border-zinc-200 rounded-xl shadow-sm p-5 mb-6">\r
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 divide-x divide-zinc-100">\r
        <div class="px-4 first:pl-0">\r
          <p class="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">Order ID</p>\r
          <p class="text-sm font-semibold text-zinc-900">{{ o.id }}</p>\r
        </div>\r
        <div class="px-4">\r
          <p class="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">Status</p>\r
          <p-tag\r
            [value]="o.status"\r
            [severity]="getStatusSeverity(o.status)"\r
            [rounded]="true"\r
          ></p-tag>\r
        </div>\r
        <div class="px-4">\r
          <p class="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">Total Amount</p>\r
          <p class="text-sm font-semibold text-zinc-900">\u20B9{{ o.totalAmount | number }}</p>\r
        </div>\r
        <div class="px-4">\r
          <p class="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">Items</p>\r
          <p class="text-sm font-semibold text-zinc-900">{{ o.items.length }} item{{ o.items.length !== 1 ? 's' : '' }}</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 Main Grid \u2500\u2500 -->\r
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">\r
\r
      <!-- LEFT: Customer Info + Items (span 2) -->\r
      <div class="lg:col-span-2 flex flex-col gap-6">\r
\r
        <!-- Customer Info Card -->\r
        <div class="bg-white border border-zinc-200 rounded-xl shadow-sm">\r
          <div class="flex items-center gap-2.5 px-6 py-4 border-b border-zinc-100">\r
            <i class="pi pi-user text-zinc-400 text-sm"></i>\r
            <h2 class="text-sm font-semibold text-zinc-800">Customer Information</h2>\r
          </div>\r
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-x divide-zinc-100">\r
            <div class="px-6 py-5">\r
              <p class="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1.5">Name</p>\r
              <p class="text-sm font-medium text-zinc-900">{{ o.customerName }}</p>\r
            </div>\r
            <div class="px-6 py-5">\r
              <p class="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1.5">Phone</p>\r
              <p class="text-sm font-medium text-zinc-900">{{ o.customerPhone }}</p>\r
            </div>\r
            <div class="px-6 py-5">\r
              <p class="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1.5">Delivery Address</p>\r
              <p class="text-sm font-medium text-zinc-900 leading-relaxed">{{ o.deliveryAddress }}</p>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Order Items Card -->\r
        <div class="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">\r
          <div class="flex items-center gap-2.5 px-6 py-4 border-b border-zinc-100">\r
            <i class="pi pi-shopping-bag text-zinc-400 text-sm"></i>\r
            <h2 class="text-sm font-semibold text-zinc-800">Order Items</h2>\r
          </div>\r
          <p-table\r
            [value]="o.items"\r
            [tableStyle]="{ 'min-width': '30rem' }"\r
            styleClass="p-datatable-sm"\r
          >\r
            <ng-template #header>\r
              <tr>\r
                <th scope="col">Item</th>\r
                <th scope="col" class="text-center">Qty</th>\r
                <th scope="col" class="text-right">Price</th>\r
                <th scope="col" class="text-right">Subtotal</th>\r
              </tr>\r
            </ng-template>\r
            <ng-template #body let-item>\r
              <tr>\r
                <td class="font-medium text-zinc-900">{{ item.name }}</td>\r
                <td class="text-center text-zinc-700">{{ item.quantity }}</td>\r
                <td class="text-right text-zinc-500">\u20B9{{ item.price | number }}</td>\r
                <td class="text-right font-medium text-zinc-900">\u20B9{{ item.quantity * item.price | number }}</td>\r
              </tr>\r
            </ng-template>\r
          </p-table>\r
          <!-- Total footer -->\r
          <div class="flex items-center justify-between px-6 py-4 border-t border-zinc-200 bg-zinc-50">\r
            <span class="text-sm font-semibold text-zinc-600 uppercase tracking-wide">Total Amount</span>\r
            <span class="text-xl font-bold text-zinc-900">\u20B9{{ o.totalAmount | number }}</span>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- RIGHT: Status & Quick Info -->\r
      <div class="flex flex-col gap-6">\r
\r
        <!-- Status Management Card -->\r
        <div class="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">\r
          <div class="flex items-center gap-2.5 px-6 py-4 border-b border-zinc-100">\r
            <i class="pi pi-flag text-zinc-400 text-sm"></i>\r
            <h2 class="text-sm font-semibold text-zinc-800">Order Status</h2>\r
          </div>\r
          <div class="p-6">\r
\r
            <!-- Terminal State Banner -->\r
            @if (isTerminal()) {\r
              <div class="flex items-start gap-2.5 p-3.5 rounded-lg bg-zinc-100 border border-zinc-200 mb-5">\r
                <i class="pi pi-lock text-zinc-500 mt-0.5 text-sm"></i>\r
                <p class="text-xs text-zinc-600 leading-relaxed">\r
                  This order has reached a terminal state and cannot be modified.\r
                </p>\r
              </div>\r
            }\r
\r
            <!-- Action Buttons -->\r
            <div class="flex flex-col gap-3">\r
              @if (nextStatus()) {\r
                <p-button\r
                  [label]="nextStatusLabel()"\r
                  icon="pi pi-arrow-right"\r
                  [loading]="updatingStatus()"\r
                  [disabled]="isTerminal()"\r
                  (onClick)="advanceStatus()"\r
                  styleClass="w-full py-2.5! bg-zinc-900! border-none! text-white! font-medium! text-sm! rounded-lg! shadow-sm"\r
                ></p-button>\r
              }\r
              @if (!isTerminal()) {\r
                <p-button\r
                  label="Cancel Order"\r
                  icon="pi pi-times"\r
                  severity="danger"\r
                  [outlined]="true"\r
                  [loading]="updatingStatus()"\r
                  [disabled]="!canCancel()"\r
                  (onClick)="cancelOrder()"\r
                  styleClass="w-full py-2.5! text-sm! font-medium! rounded-lg!"\r
                ></p-button>\r
                @if (!canCancel()) {\r
                  <p class="text-xs text-zinc-400 text-center">\r
                    Cancellation is not available for orders that are out for delivery.\r
                  </p>\r
                }\r
              }\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Quick Info Card -->\r
        <div class="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">\r
          <div class="flex items-center gap-2.5 px-6 py-4 border-b border-zinc-100">\r
            <i class="pi pi-info-circle text-zinc-400 text-sm"></i>\r
            <h2 class="text-sm font-semibold text-zinc-800">Quick Info</h2>\r
          </div>\r
          <div class="divide-y divide-zinc-100">\r
            <div class="flex items-center justify-between px-6 py-3.5">\r
              <span class="text-xs text-zinc-500">Order ID</span>\r
              <span class="text-sm font-medium text-zinc-900">{{ o.id }}</span>\r
            </div>\r
            <div class="flex items-center justify-between px-6 py-3.5">\r
              <span class="text-xs text-zinc-500">Items Count</span>\r
              <span class="text-sm font-medium text-zinc-900">{{ o.items.length }}</span>\r
            </div>\r
            <div class="flex items-center justify-between px-6 py-3.5">\r
              <span class="text-xs text-zinc-500">Placed On</span>\r
              <span class="text-sm font-medium text-zinc-900">{{ o.orderDate | date:'MMM d, h:mm a' }}</span>\r
            </div>\r
            <div class="flex items-center justify-between px-6 py-3.5">\r
              <span class="text-xs text-zinc-500">Total</span>\r
              <span class="text-sm font-bold text-zinc-900">\u20B9{{ o.totalAmount | number }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailPageComponent, { className: "OrderDetailPageComponent", filePath: "src/app/features/orders/presentation/pages/order-detail-page/order-detail-page.component.ts", lineNumber: 28 });
})();

// src/app/features/orders/orders.routes.ts
var ORDERS_ROUTES = [
  {
    path: "",
    component: OrdersPageComponent
  },
  {
    path: ":id",
    component: OrderDetailPageComponent
  }
];
export {
  ORDERS_ROUTES
};
//# sourceMappingURL=chunk-ZKCF6SPD.js.map
