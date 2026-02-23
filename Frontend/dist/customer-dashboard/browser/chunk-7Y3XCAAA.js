import {
  MessageService
} from "./chunk-FV6RVCBT.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-O557UGG4.js";

// src/app/core/service/toast.service.ts
var ToastService = class _ToastService {
  messageService = inject(MessageService);
  success(message, title = "Success") {
    this.messageService.add({
      key: "crm",
      severity: "success",
      summary: title,
      detail: message,
      life: 2500
    });
  }
  error(message, title = "Error") {
    this.messageService.add({
      key: "crm",
      severity: "error",
      summary: title,
      detail: message,
      life: 2e3
    });
  }
  warning(message, title = "Warning") {
    this.messageService.add({
      key: "crm",
      severity: "warn",
      summary: title,
      detail: message,
      life: 2e3
    });
  }
  info(message, title = "Information") {
    this.messageService.add({
      key: "crm",
      severity: "info",
      summary: title,
      detail: message,
      life: 2e3
    });
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-7Y3XCAAA.js.map
