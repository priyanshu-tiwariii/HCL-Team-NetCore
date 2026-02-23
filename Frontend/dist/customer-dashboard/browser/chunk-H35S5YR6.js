import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  Router
} from "./chunk-T6KHSKL3.js";
import {
  ToastService
} from "./chunk-7Y3XCAAA.js";
import {
  Injectable,
  __async,
  __spreadProps,
  __spreadValues,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-O557UGG4.js";

// src/environments/environment.ts
var environment = {
  production: true,
  apiUrl: "https://weariest-unremissive-fidela.ngrok-free.dev"
};

// src/app/shared/entities/HttpResponseType.ts
var HttpResponseType;
(function(HttpResponseType2) {
  HttpResponseType2["JSON"] = "json";
  HttpResponseType2["BLOB"] = "blob";
  HttpResponseType2["TEXT"] = "text";
  HttpResponseType2["ARRAY_BUFFER"] = "arraybuffer";
})(HttpResponseType || (HttpResponseType = {}));

// src/app/core/service/api.service.ts
var ApiService = class _ApiService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  resolvePathParams(endpoint, pathParams = {}) {
    return Object.keys(pathParams).reduce((acc, key) => acc.replace(`:${key}`, pathParams[key]), endpoint);
  }
  buildHttpParams(queryParams = {}) {
    let params = new HttpParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== void 0 && value !== null) {
        params = params.append(key, String(value));
      }
    });
    return params;
  }
  // GET
  get(_0) {
    return __async(this, arguments, function* (endpoint, options = {}) {
      const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
      const request$ = this.http.get(url, {
        headers: new HttpHeaders(options.headers || {}),
        params: this.buildHttpParams(options.queryParams),
        // We cast as 'json' to satisfy Angular's strict method overloads, but we use your Enum for the logic
        responseType: options.responseType || HttpResponseType.JSON
      });
      return firstValueFrom(request$);
    });
  }
  // POST
  post(_0, _1) {
    return __async(this, arguments, function* (endpoint, body, options = {}) {
      const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
      const request$ = this.http.post(url, body, {
        headers: new HttpHeaders(options.headers || {}),
        params: this.buildHttpParams(options.queryParams),
        responseType: options.responseType || HttpResponseType.JSON
      });
      return firstValueFrom(request$);
    });
  }
  // POST multipart/form-data
  postForm(_0, _1) {
    return __async(this, arguments, function* (endpoint, formData, options = {}) {
      const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
      const request$ = this.http.post(url, formData, {
        headers: new HttpHeaders(options.headers || {}),
        params: this.buildHttpParams(options.queryParams),
        responseType: options.responseType || HttpResponseType.JSON
      });
      return firstValueFrom(request$);
    });
  }
  // PATCH
  patch(_0, _1) {
    return __async(this, arguments, function* (endpoint, body, options = {}) {
      const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
      const request$ = this.http.patch(url, body, {
        headers: new HttpHeaders(options.headers || {}),
        params: this.buildHttpParams(options.queryParams),
        responseType: options.responseType || HttpResponseType.JSON
      });
      return firstValueFrom(request$);
    });
  }
  // PUT
  put(_0, _1) {
    return __async(this, arguments, function* (endpoint, body, options = {}) {
      const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
      const request$ = this.http.put(url, body, {
        headers: new HttpHeaders(options.headers || {}),
        params: this.buildHttpParams(options.queryParams),
        responseType: options.responseType || HttpResponseType.JSON
      });
      return firstValueFrom(request$);
    });
  }
  // DELETE
  delete(_0) {
    return __async(this, arguments, function* (endpoint, options = {}) {
      const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
      const request$ = this.http.delete(url, {
        headers: new HttpHeaders(options.headers || {}),
        params: this.buildHttpParams(options.queryParams),
        responseType: options.responseType || HttpResponseType.JSON
      });
      return firstValueFrom(request$);
    });
  }
  // DOWNLOAD FILE
  downloadFile(_0, _1) {
    return __async(this, arguments, function* (endpoint, fileName, options = {}) {
      const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
      const request$ = this.http.get(url, {
        headers: new HttpHeaders(options.headers || {}),
        params: this.buildHttpParams(options.queryParams),
        responseType: HttpResponseType.BLOB
        // <-- Uses Enum strictly
      });
      const blob = yield firstValueFrom(request$);
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    });
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/auth/data/repositories/auth-repository.service.ts
var AuthRepository = class _AuthRepository {
  api = inject(ApiService);
  login(credentials) {
    return __async(this, null, function* () {
      return this.api.post("/api/User/login", credentials);
    });
  }
  // 1. API to register the user
  register(data) {
    return __async(this, null, function* () {
      return this.api.post("/api/Auth/register", data);
    });
  }
  // 2. API to save the user's address
  saveAddress(data) {
    return __async(this, null, function* () {
      return this.api.post("/api/User/address", data);
    });
  }
  static \u0275fac = function AuthRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRepository)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthRepository, factory: _AuthRepository.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRepository, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/entities/StorageKey.ts
var StorageKey;
(function(StorageKey2) {
  StorageKey2["TOKEN"] = "crm_access_token";
  StorageKey2["USER"] = "crm_user_profile";
})(StorageKey || (StorageKey = {}));

// src/app/core/storage/local-storage.service.ts
var LocalStorageService = class _LocalStorageService {
  setToken(token) {
    localStorage.setItem(StorageKey.TOKEN, token);
  }
  getToken() {
    return localStorage.getItem(StorageKey.TOKEN);
  }
  removeToken() {
    this.removeItem(StorageKey.TOKEN);
  }
  setUser(user) {
    this.setItem(StorageKey.USER, user);
  }
  getUser() {
    return this.getItem(StorageKey.USER);
  }
  clearAuth() {
    this.removeToken();
    this.removeItem(StorageKey.USER);
  }
  // ==========================================
  // GENERIC CORE METHODS
  // ==========================================
  setItem(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error saving key "${key}" to localStorage`, error);
    }
  }
  getItem(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading key "${key}" from localStorage`, error);
      return null;
    }
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  static \u0275fac = function LocalStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocalStorageService, factory: _LocalStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/auth/domain/services/auth-logic.service.ts
var AuthLogic = class _AuthLogic {
  network = inject(AuthRepository);
  local = inject(LocalStorageService);
  login(credentials) {
    return __async(this, null, function* () {
      const response = yield this.network.login(credentials);
      this.local.setToken(response.token);
      this.local.setUser(response.data);
      return response.data;
    });
  }
  /**
   * Step 1: Register the user and return the new userId.
   */
  register(data) {
    return __async(this, null, function* () {
      const response = yield this.network.register(data);
      return response.data.userId;
    });
  }
  /**
   * Step 2: Save the user's delivery address.
   */
  saveAddress(data) {
    return __async(this, null, function* () {
      yield this.network.saveAddress(data);
    });
  }
  registerAndSaveAddress(registerData, addressData) {
    return __async(this, null, function* () {
      const newUserId = yield this.register(registerData);
      const fullAddressPayload = __spreadProps(__spreadValues({}, addressData), {
        userId: newUserId
      });
      yield this.saveAddress(fullAddressPayload);
    });
  }
  logout() {
    this.local.clearAuth();
  }
  static \u0275fac = function AuthLogic_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthLogic)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthLogic, factory: _AuthLogic.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthLogic, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/exceptions/exception-adapter.ts
var ExceptionAdapter = class {
  static parse(error) {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 0)
        return "Network error. Please check your internet connection.";
      if (error.status >= 500)
        return "Something went wrong on the server. Please try again later.";
      const responseData = error.error;
      if (responseData) {
        if (typeof responseData === "string")
          return responseData;
        if (responseData.message)
          return responseData.message;
        if (responseData.detail)
          return responseData.detail;
        if (Array.isArray(responseData.errors) && responseData.errors.length > 0) {
          return responseData.errors[0];
        }
      }
      return error.message || "An unexpected HTTP error occurred.";
    }
    if (error instanceof Error)
      return error.message;
    if (typeof error === "string")
      return error;
    return "An unexpected error occurred!";
  }
  static guard(_0, _1) {
    return __async(this, arguments, function* (state, fn, options = {}) {
      const { errorFn, skipLoading = false, skipError = false, rethrow = false } = options;
      if (!skipLoading && state.loading)
        state.loading.set(true);
      if (!skipError && state.error)
        state.error.set(null);
      try {
        const result = yield fn();
        if (!skipLoading && state.loading)
          state.loading.set(false);
        return result;
      } catch (error) {
        console.error("[ExceptionAdapter Guard Caught]:", error);
        const errorMsg = errorFn ? errorFn(error) : this.parse(error);
        if (!skipLoading && state.loading)
          state.loading.set(false);
        if (!skipError && state.error)
          state.error.set(errorMsg);
        if (rethrow) {
          throw error;
        }
        return void 0;
      }
    });
  }
};

// src/app/features/auth/presentation/state/auth-state.ts
var AuthState = class _AuthState {
  logic = inject(AuthLogic);
  router = inject(Router);
  toast = inject(ToastService);
  storage = inject(LocalStorageService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(void 0, ...ngDevMode ? [{ debugName: "error" }] : []);
  isAuthenticated = signal(false, ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
  userProfile = signal(null, ...ngDevMode ? [{ debugName: "userProfile" }] : []);
  login(credentials) {
    return __async(this, null, function* () {
      yield ExceptionAdapter.guard({ loading: this.loading, error: this.error }, () => __async(this, null, function* () {
        yield this.logic.login(credentials);
        this.isAuthenticated.set(true);
        this.userProfile.set(this.storage.getUser());
        this.toast.success("Welcome back!");
        this.router.navigate(["/dashboard"]);
      }));
    });
  }
  /**
   * Step 1: Register user and return the new userId.
   */
  registerUser(data) {
    return __async(this, null, function* () {
      return yield ExceptionAdapter.guard({ loading: this.loading, error: this.error }, () => __async(this, null, function* () {
        return yield this.logic.register(data);
      }));
    });
  }
  /**
   * Step 2: Save address for the registered user.
   */
  saveAddress(data) {
    return __async(this, null, function* () {
      const result = yield ExceptionAdapter.guard({ loading: this.loading, error: this.error }, () => __async(this, null, function* () {
        yield this.logic.saveAddress(data);
        this.toast.success("Account created successfully! Please log in.", "Welcome");
        return true;
      }));
      return result === true;
    });
  }
  /** @deprecated Use registerUser() + saveAddress() for the 2-page flow. */
  register(registerData, addressData, onSuccess) {
    return __async(this, null, function* () {
      yield ExceptionAdapter.guard({ loading: this.loading, error: this.error }, () => __async(this, null, function* () {
        yield this.logic.registerAndSaveAddress(registerData, addressData);
        this.toast.success("Account created successfully! Please log in.", "Welcome");
        onSuccess();
      }));
    });
  }
  logout() {
    return __async(this, null, function* () {
      yield ExceptionAdapter.guard({ loading: this.loading, error: this.error }, () => __async(this, null, function* () {
        this.logic.logout();
        this.isAuthenticated.set(false);
        this.userProfile.set(null);
        this.router.navigate(["/login"]);
      }));
    });
  }
  initSession() {
    const user = this.storage.getUser();
    if (user) {
      this.isAuthenticated.set(true);
      this.userProfile.set(user);
    }
  }
  static \u0275fac = function AuthState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthState)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthState, factory: _AuthState.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  LocalStorageService,
  AuthState
};
//# sourceMappingURL=chunk-H35S5YR6.js.map
