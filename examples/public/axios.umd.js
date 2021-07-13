(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.axios = factory());
}(this, (function () { 'use strict';

  var InterceptorManager = /** @class */ (function () {
      function InterceptorManager() {
          this.interceptors = [];
      }
      InterceptorManager.prototype.use = function (resolved, rejected) {
          this.interceptors.push({
              resolved: resolved,
              rejected: rejected
          });
          return this.interceptors.length - 1;
      };
      InterceptorManager.prototype.forEach = function (fn) {
          this.interceptors.forEach(function (interceptor) {
              if (interceptor !== null) {
                  fn(interceptor);
              }
          });
      };
      InterceptorManager.prototype.eject = function (id) {
          if (this.interceptors[id]) {
              this.interceptors[id] = null;
          }
      };
      return InterceptorManager;
  }());

  function xhr(config) {
      return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          var _a = config.method, method = _a === void 0 ? 'get' : _a, url = config.url, _b = config.data, data = _b === void 0 ? null : _b;
          xhr.open(method.toUpperCase(), url);
          xhr.send(data);
          xhr.onreadystatechange = function handleLoad() {
              if (xhr.readyState === 4 && xhr.status === 200) {
                  var headers = xhr.getAllResponseHeaders();
                  var responseData = xhr.response;
                  var status_1 = xhr.status, statusText = xhr.statusText;
                  var response = {
                      data: responseData,
                      headers: headers,
                      status: status_1,
                      statusText: statusText,
                      config: config,
                      request: xhr
                  };
                  resolve(response);
              }
          };
          xhr.onerror = function () {
              reject();
          };
      });
  }

  function dispatchRequest(config) {
      // 前置处理，生命周期？？终止请求
      return xhr(config);
  }

  var Axios = /** @class */ (function () {
      function Axios(initConfig) {
          this.defaults = initConfig;
          this.interceptors = {
              request: new InterceptorManager(),
              response: new InterceptorManager()
          };
      }
      Axios.prototype.request = function (config) {
          return dispatchRequest(config);
      };
      Axios.prototype.get = function () { };
      return Axios;
  }());

  var defaults = {
      method: "get",
  };

  function mergeConfig(defaults, config) {
      return Object.assign({}, defaults, config);
  }

  // Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  function createInstance(defaultConfig) {
      // any == AxiosStatic
      var instance = new Axios(defaultConfig);
      return instance;
  }
  var axios = createInstance(defaults);
  axios.create = function create(config) {
      return createInstance(mergeConfig(defaults, config));
  };
  axios.Axios = Axios;

  return axios;

})));
//# sourceMappingURL=axios.umd.js.map
