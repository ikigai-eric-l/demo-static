;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function () {
        function _mergeNamespaces(n, m) {
          for (var i = 0; i < m.length; i++) {
            const e = m[i];
            if (typeof e !== 'string' && !Array.isArray(e)) {
              for (const k in e) {
                if (k !== 'default' && !(k in n)) {
                  const d = Object.getOwnPropertyDescriptor(e, k);
                  if (d) {
                    Object.defineProperty(n, k, d.get ? d : {
                      enumerable: true,
                      get: () => e[k]
                    });
                  }
                }
              }
            }
          }
          return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
            value: 'Module'
          }));
        }
        exports({
          a: requireReact,
          g: getDefaultExportFromCjs,
          s: startSpan
        });
        var commonjsGlobal = exports("c", typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
        function getDefaultExportFromCjs(x) {
          return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
        }
        var react = {
          exports: {}
        };
        var react_production = {};

        /**
         * @license React
         * react.production.js
         *
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var hasRequiredReact_production;
        function requireReact_production() {
          if (hasRequiredReact_production) return react_production;
          hasRequiredReact_production = 1;
          var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
            REACT_PORTAL_TYPE = Symbol.for("react.portal"),
            REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
            REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
            REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
            REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
            REACT_CONTEXT_TYPE = Symbol.for("react.context"),
            REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
            REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
            REACT_MEMO_TYPE = Symbol.for("react.memo"),
            REACT_LAZY_TYPE = Symbol.for("react.lazy"),
            MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          function getIteratorFn(maybeIterable) {
            if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
            maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
            return "function" === typeof maybeIterable ? maybeIterable : null;
          }
          var ReactNoopUpdateQueue = {
              isMounted: function () {
                return false;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {}
            },
            assign = Object.assign,
            emptyObject = {};
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function (partialState, callback) {
            if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function (callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          function ComponentDummy() {}
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          var isArrayImpl = Array.isArray,
            ReactSharedInternals = {
              H: null,
              A: null,
              T: null,
              S: null,
              V: null
            },
            hasOwnProperty = Object.prototype.hasOwnProperty;
          function ReactElement(type, key, self, source, owner, props) {
            self = props.ref;
            return {
              $$typeof: REACT_ELEMENT_TYPE,
              type: type,
              key: key,
              ref: void 0 !== self ? self : null,
              props: props
            };
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            return ReactElement(oldElement.type, newKey, void 0, void 0, void 0, oldElement.props);
          }
          function isValidElement(object) {
            return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function escape(key) {
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            return "$" + key.replace(/[=:]/g, function (match) {
              return escaperLookup[match];
            });
          }
          var userProvidedKeyEscapeRegex = /\/+/g;
          function getElementKey(element, index) {
            return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
          }
          function noop$1() {}
          function resolveThenable(thenable) {
            switch (thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
              default:
                switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function (fulfilledValue) {
                  "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function (error) {
                  "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status) {
                  case "fulfilled":
                    return thenable.value;
                  case "rejected":
                    throw thenable.reason;
                }
            }
            throw thenable;
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if ("undefined" === type || "boolean" === type) children = null;
            var invokeCallback = false;
            if (null === children) invokeCallback = true;else switch (type) {
              case "bigint":
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                    break;
                  case REACT_LAZY_TYPE:
                    return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
            }
            if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function (c) {
              return c;
            })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
            invokeCallback = 0;
            var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
            if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);else if ("object" === type) {
              if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
              array = String(children);
              throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
            }
            return invokeCallback;
          }
          function mapChildren(children, func, context) {
            if (null == children) return children;
            var result = [],
              count = 0;
            mapIntoArray(children, result, "", "", function (child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function lazyInitializer(payload) {
            if (-1 === payload._status) {
              var ctor = payload._result;
              ctor = ctor();
              ctor.then(function (moduleObject) {
                if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
              }, function (error) {
                if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
              });
              -1 === payload._status && (payload._status = 0, payload._result = ctor);
            }
            if (1 === payload._status) return payload._result.default;
            throw payload._result;
          }
          var reportGlobalError = "function" === typeof reportError ? reportError : function (error) {
            if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
              var event = new window.ErrorEvent("error", {
                bubbles: true,
                cancelable: true,
                message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
                error: error
              });
              if (!window.dispatchEvent(event)) return;
            } else if ("object" === typeof process && "function" === typeof process.emit) {
              process.emit("uncaughtException", error);
              return;
            }
            console.error(error);
          };
          function noop() {}
          react_production.Children = {
            map: mapChildren,
            forEach: function (children, forEachFunc, forEachContext) {
              mapChildren(children, function () {
                forEachFunc.apply(this, arguments);
              }, forEachContext);
            },
            count: function (children) {
              var n = 0;
              mapChildren(children, function () {
                n++;
              });
              return n;
            },
            toArray: function (children) {
              return mapChildren(children, function (child) {
                return child;
              }) || [];
            },
            only: function (children) {
              if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
              return children;
            }
          };
          react_production.Component = Component;
          react_production.Fragment = REACT_FRAGMENT_TYPE;
          react_production.Profiler = REACT_PROFILER_TYPE;
          react_production.PureComponent = PureComponent;
          react_production.StrictMode = REACT_STRICT_MODE_TYPE;
          react_production.Suspense = REACT_SUSPENSE_TYPE;
          react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
          react_production.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (size) {
              return ReactSharedInternals.H.useMemoCache(size);
            }
          };
          react_production.cache = function (fn) {
            return function () {
              return fn.apply(null, arguments);
            };
          };
          react_production.cloneElement = function (element, config, children) {
            if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
            var props = assign({}, element.props),
              key = element.key,
              owner = void 0;
            if (null != config) for (propName in void 0 !== config.ref && (owner = void 0), void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
            var propName = arguments.length - 2;
            if (1 === propName) props.children = children;else if (1 < propName) {
              for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
              props.children = childArray;
            }
            return ReactElement(element.type, key, void 0, void 0, owner, props);
          };
          react_production.createContext = function (defaultValue) {
            defaultValue = {
              $$typeof: REACT_CONTEXT_TYPE,
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            };
            defaultValue.Provider = defaultValue;
            defaultValue.Consumer = {
              $$typeof: REACT_CONSUMER_TYPE,
              _context: defaultValue
            };
            return defaultValue;
          };
          react_production.createElement = function (type, config, children) {
            var propName,
              props = {},
              key = null;
            if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
            var childrenLength = arguments.length - 2;
            if (1 === childrenLength) props.children = children;else if (1 < childrenLength) {
              for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
              props.children = childArray;
            }
            if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
            return ReactElement(type, key, void 0, void 0, null, props);
          };
          react_production.createRef = function () {
            return {
              current: null
            };
          };
          react_production.forwardRef = function (render) {
            return {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render: render
            };
          };
          react_production.isValidElement = isValidElement;
          react_production.lazy = function (ctor) {
            return {
              $$typeof: REACT_LAZY_TYPE,
              _payload: {
                _status: -1,
                _result: ctor
              },
              _init: lazyInitializer
            };
          };
          react_production.memo = function (type, compare) {
            return {
              $$typeof: REACT_MEMO_TYPE,
              type: type,
              compare: void 0 === compare ? null : compare
            };
          };
          react_production.startTransition = function (scope) {
            var prevTransition = ReactSharedInternals.T,
              currentTransition = {};
            ReactSharedInternals.T = currentTransition;
            try {
              var returnValue = scope(),
                onStartTransitionFinish = ReactSharedInternals.S;
              null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
              "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
            } catch (error) {
              reportGlobalError(error);
            } finally {
              ReactSharedInternals.T = prevTransition;
            }
          };
          react_production.unstable_useCacheRefresh = function () {
            return ReactSharedInternals.H.useCacheRefresh();
          };
          react_production.use = function (usable) {
            return ReactSharedInternals.H.use(usable);
          };
          react_production.useActionState = function (action, initialState, permalink) {
            return ReactSharedInternals.H.useActionState(action, initialState, permalink);
          };
          react_production.useCallback = function (callback, deps) {
            return ReactSharedInternals.H.useCallback(callback, deps);
          };
          react_production.useContext = function (Context) {
            return ReactSharedInternals.H.useContext(Context);
          };
          react_production.useDebugValue = function () {};
          react_production.useDeferredValue = function (value, initialValue) {
            return ReactSharedInternals.H.useDeferredValue(value, initialValue);
          };
          react_production.useEffect = function (create, createDeps, update) {
            var dispatcher = ReactSharedInternals.H;
            if ("function" === typeof update) throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return dispatcher.useEffect(create, createDeps);
          };
          react_production.useId = function () {
            return ReactSharedInternals.H.useId();
          };
          react_production.useImperativeHandle = function (ref, create, deps) {
            return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
          };
          react_production.useInsertionEffect = function (create, deps) {
            return ReactSharedInternals.H.useInsertionEffect(create, deps);
          };
          react_production.useLayoutEffect = function (create, deps) {
            return ReactSharedInternals.H.useLayoutEffect(create, deps);
          };
          react_production.useMemo = function (create, deps) {
            return ReactSharedInternals.H.useMemo(create, deps);
          };
          react_production.useOptimistic = function (passthrough, reducer) {
            return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
          };
          react_production.useReducer = function (reducer, initialArg, init) {
            return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
          };
          react_production.useRef = function (initialValue) {
            return ReactSharedInternals.H.useRef(initialValue);
          };
          react_production.useState = function (initialState) {
            return ReactSharedInternals.H.useState(initialState);
          };
          react_production.useSyncExternalStore = function (subscribe, getSnapshot, getServerSnapshot) {
            return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          };
          react_production.useTransition = function () {
            return ReactSharedInternals.H.useTransition();
          };
          react_production.version = "19.1.1";
          return react_production;
        }
        var hasRequiredReact;
        function requireReact() {
          if (hasRequiredReact) return react.exports;
          hasRequiredReact = 1;
          {
            react.exports = requireReact_production();
          }
          return react.exports;
        }
        var reactExports = exports("r", requireReact());
        const React = exports("R", /*@__PURE__*/getDefaultExportFromCjs(reactExports));
        const React$1 = /*#__PURE__*/_mergeNamespaces({
          __proto__: null,
          default: React
        }, [reactExports]);
        exports("b", React$1);

        /**
         * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
         *
         * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
         */
        const DEBUG_BUILD$3 = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;

        // This is a magic string replaced by rollup

        const SDK_VERSION = "8.55.0";

        /** Get's the global object for the current JavaScript runtime */
        const GLOBAL_OBJ = globalThis;

        /**
         * Returns a global singleton contained in the global `__SENTRY__[]` object.
         *
         * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
         * function and added to the `__SENTRY__` object.
         *
         * @param name name of the global singleton on __SENTRY__
         * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
         * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
         * @returns the singleton
         */
        function getGlobalSingleton(name, creator, obj) {
          const gbl = obj || GLOBAL_OBJ;
          const __SENTRY__ = gbl.__SENTRY__ = gbl.__SENTRY__ || {};
          const versionedCarrier = __SENTRY__[SDK_VERSION] = __SENTRY__[SDK_VERSION] || {};
          return versionedCarrier[name] || (versionedCarrier[name] = creator());
        }

        /**
         * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
         *
         * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
         */
        const DEBUG_BUILD$2 = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;

        /** Prefix for logging strings */
        const PREFIX = 'Sentry Logger ';
        const CONSOLE_LEVELS = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'];

        /** This may be mutated by the console instrumentation. */
        const originalConsoleMethods = {};

        /** JSDoc */

        /**
         * Temporarily disable sentry console instrumentations.
         *
         * @param callback The function to run against the original `console` messages
         * @returns The results of the callback
         */
        function consoleSandbox(callback) {
          if (!('console' in GLOBAL_OBJ)) {
            return callback();
          }
          const console = GLOBAL_OBJ.console;
          const wrappedFuncs = {};
          const wrappedLevels = Object.keys(originalConsoleMethods);

          // Restore all wrapped console methods
          wrappedLevels.forEach(level => {
            const originalConsoleMethod = originalConsoleMethods[level];
            wrappedFuncs[level] = console[level];
            console[level] = originalConsoleMethod;
          });
          try {
            return callback();
          } finally {
            // Revert restoration to wrapped state
            wrappedLevels.forEach(level => {
              console[level] = wrappedFuncs[level];
            });
          }
        }
        function makeLogger() {
          let enabled = false;
          const logger = {
            enable: () => {
              enabled = true;
            },
            disable: () => {
              enabled = false;
            },
            isEnabled: () => enabled
          };
          if (DEBUG_BUILD$2) {
            CONSOLE_LEVELS.forEach(name => {
              logger[name] = (...args) => {
                if (enabled) {
                  consoleSandbox(() => {
                    GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
                  });
                }
              };
            });
          } else {
            CONSOLE_LEVELS.forEach(name => {
              logger[name] = () => undefined;
            });
          }
          return logger;
        }

        /**
         * This is a logger singleton which either logs things or no-ops if logging is not enabled.
         * The logger is a singleton on the carrier, to ensure that a consistent logger is used throughout the SDK.
         */
        const logger = getGlobalSingleton('logger', makeLogger);

        /**
         * An object that contains globally accessible properties and maintains a scope stack.
         * @hidden
         */

        /**
         * Returns the global shim registry.
         *
         * FIXME: This function is problematic, because despite always returning a valid Carrier,
         * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
         * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
         **/
        function getMainCarrier() {
          // This ensures a Sentry carrier exists
          getSentryCarrier(GLOBAL_OBJ);
          return GLOBAL_OBJ;
        }

        /** Will either get the existing sentry carrier, or create a new one. */
        function getSentryCarrier(carrier) {
          const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};

          // For now: First SDK that sets the .version property wins
          __SENTRY__.version = __SENTRY__.version || SDK_VERSION;

          // Intentionally populating and returning the version of "this" SDK instance
          // rather than what's set in .version so that "this" SDK always gets its carrier
          return __SENTRY__[SDK_VERSION] = __SENTRY__[SDK_VERSION] || {};
        }

        // eslint-disable-next-line @typescript-eslint/unbound-method
        const objectToString = Object.prototype.toString;

        /**
         * Checks whether given value's type is one of a few Error or Error-like
         * {@link isError}.
         *
         * @param wat A value to be checked.
         * @returns A boolean representing the result.
         */
        function isError(wat) {
          switch (objectToString.call(wat)) {
            case '[object Error]':
            case '[object Exception]':
            case '[object DOMException]':
            case '[object WebAssembly.Exception]':
              return true;
            default:
              return isInstanceOf(wat, Error);
          }
        }
        /**
         * Checks whether given value is an instance of the given built-in class.
         *
         * @param wat The value to be checked
         * @param className
         * @returns A boolean representing the result.
         */
        function isBuiltin(wat, className) {
          return objectToString.call(wat) === `[object ${className}]`;
        }

        /**
         * Checks whether given value's type is a string
         * {@link isString}.
         *
         * @param wat A value to be checked.
         * @returns A boolean representing the result.
         */
        function isString(wat) {
          return isBuiltin(wat, 'String');
        }

        /**
         * Checks whether given value's type is an object literal, or a class instance.
         * {@link isPlainObject}.
         *
         * @param wat A value to be checked.
         * @returns A boolean representing the result.
         */
        function isPlainObject(wat) {
          return isBuiltin(wat, 'Object');
        }

        /**
         * Checks whether given value has a then function.
         * @param wat A value to be checked.
         */
        function isThenable(wat) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          return Boolean(wat && wat.then && typeof wat.then === 'function');
        }

        /**
         * Checks whether given value's type is an instance of provided constructor.
         * {@link isInstanceOf}.
         *
         * @param wat A value to be checked.
         * @param base A constructor to be used in a check.
         * @returns A boolean representing the result.
         */
        function isInstanceOf(wat, base) {
          try {
            return wat instanceof base;
          } catch (_e) {
            return false;
          }
        }

        /**
         * Defines a non-enumerable property on the given object.
         *
         * @param obj The object on which to set the property
         * @param name The name of the property to be set
         * @param value The value to which to set the property
         */
        function addNonEnumerableProperty(obj, name, value) {
          try {
            Object.defineProperty(obj, name, {
              // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
              value: value,
              writable: true,
              configurable: true
            });
          } catch (o_O) {
            DEBUG_BUILD$2 && logger.log(`Failed to add non-enumerable property "${name}" to object`, obj);
          }
        }

        /**
         * Given any object, return a new object having removed all fields whose value was `undefined`.
         * Works recursively on objects and arrays.
         *
         * Attention: This function keeps circular references in the returned object.
         */
        function dropUndefinedKeys(inputValue) {
          // This map keeps track of what already visited nodes map to.
          // Our Set - based memoBuilder doesn't work here because we want to the output object to have the same circular
          // references as the input object.
          const memoizationMap = new Map();

          // This function just proxies `_dropUndefinedKeys` to keep the `memoBuilder` out of this function's API
          return _dropUndefinedKeys(inputValue, memoizationMap);
        }
        function _dropUndefinedKeys(inputValue, memoizationMap) {
          if (isPojo(inputValue)) {
            // If this node has already been visited due to a circular reference, return the object it was mapped to in the new object
            const memoVal = memoizationMap.get(inputValue);
            if (memoVal !== undefined) {
              return memoVal;
            }
            const returnValue = {};
            // Store the mapping of this value in case we visit it again, in case of circular data
            memoizationMap.set(inputValue, returnValue);
            for (const key of Object.getOwnPropertyNames(inputValue)) {
              if (typeof inputValue[key] !== 'undefined') {
                returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
              }
            }
            return returnValue;
          }
          if (Array.isArray(inputValue)) {
            // If this node has already been visited due to a circular reference, return the array it was mapped to in the new object
            const memoVal = memoizationMap.get(inputValue);
            if (memoVal !== undefined) {
              return memoVal;
            }
            const returnValue = [];
            // Store the mapping of this value in case we visit it again, in case of circular data
            memoizationMap.set(inputValue, returnValue);
            inputValue.forEach(item => {
              returnValue.push(_dropUndefinedKeys(item, memoizationMap));
            });
            return returnValue;
          }
          return inputValue;
        }
        function isPojo(input) {
          if (!isPlainObject(input)) {
            return false;
          }
          try {
            const name = Object.getPrototypeOf(input).constructor.name;
            return !name || name === 'Object';
          } catch (e2) {
            return true;
          }
        }
        const ONE_SECOND_IN_MS = 1000;

        /**
         * A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
         * for accessing a high-resolution monotonic clock.
         */

        /**
         * Returns a timestamp in seconds since the UNIX epoch using the Date API.
         *
         * TODO(v8): Return type should be rounded.
         */
        function dateTimestampInSeconds() {
          return Date.now() / ONE_SECOND_IN_MS;
        }

        /**
         * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
         * support the API.
         *
         * Wrapping the native API works around differences in behavior from different browsers.
         */
        function createUnixTimestampInSecondsFunc() {
          const {
            performance
          } = GLOBAL_OBJ;
          if (!performance || !performance.now) {
            return dateTimestampInSeconds;
          }

          // Some browser and environments don't have a timeOrigin, so we fallback to
          // using Date.now() to compute the starting time.
          const approxStartingTimeOrigin = Date.now() - performance.now();
          const timeOrigin = performance.timeOrigin == undefined ? approxStartingTimeOrigin : performance.timeOrigin;

          // performance.now() is a monotonic clock, which means it starts at 0 when the process begins. To get the current
          // wall clock time (actual UNIX timestamp), we need to add the starting time origin and the current time elapsed.
          //
          // TODO: This does not account for the case where the monotonic clock that powers performance.now() drifts from the
          // wall clock time, which causes the returned timestamp to be inaccurate. We should investigate how to detect and
          // correct for this.
          // See: https://github.com/getsentry/sentry-javascript/issues/2590
          // See: https://github.com/mdn/content/issues/4713
          // See: https://dev.to/noamr/when-a-millisecond-is-not-a-millisecond-3h6
          return () => {
            return (timeOrigin + performance.now()) / ONE_SECOND_IN_MS;
          };
        }

        /**
         * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
         * availability of the Performance API.
         *
         * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
         * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
         * skew can grow to arbitrary amounts like days, weeks or months.
         * See https://github.com/getsentry/sentry-javascript/issues/2590.
         */
        const timestampInSeconds = createUnixTimestampInSecondsFunc();

        /**
         * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
         * performance API is available.
         */
        (() => {
          // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
          // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
          // data as reliable if they are within a reasonable threshold of the current time.

          const {
            performance
          } = GLOBAL_OBJ;
          if (!performance || !performance.now) {
            return undefined;
          }
          const threshold = 3600 * 1000;
          const performanceNow = performance.now();
          const dateNow = Date.now();

          // if timeOrigin isn't available set delta to threshold so it isn't used
          const timeOriginDelta = performance.timeOrigin ? Math.abs(performance.timeOrigin + performanceNow - dateNow) : threshold;
          const timeOriginIsReliable = timeOriginDelta < threshold;

          // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
          // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
          // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
          // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
          // Date API.
          // eslint-disable-next-line deprecation/deprecation
          const navigationStart = performance.timing && performance.timing.navigationStart;
          const hasNavigationStart = typeof navigationStart === 'number';
          // if navigationStart isn't available set delta to threshold so it isn't used
          const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
          const navigationStartIsReliable = navigationStartDelta < threshold;
          if (timeOriginIsReliable || navigationStartIsReliable) {
            // Use the more reliable time origin
            if (timeOriginDelta <= navigationStartDelta) {
              return performance.timeOrigin;
            } else {
              return navigationStart;
            }
          }
          return dateNow;
        })();

        /**
         * UUID4 generator
         *
         * @returns string Generated UUID4.
         */
        function uuid4() {
          const gbl = GLOBAL_OBJ;
          const crypto = gbl.crypto || gbl.msCrypto;
          let getRandomByte = () => Math.random() * 16;
          try {
            if (crypto && crypto.randomUUID) {
              return crypto.randomUUID().replace(/-/g, '');
            }
            if (crypto && crypto.getRandomValues) {
              getRandomByte = () => {
                // crypto.getRandomValues might return undefined instead of the typed array
                // in old Chromium versions (e.g. 23.0.1235.0 (151422))
                // However, `typedArray` is still filled in-place.
                // @see https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues#typedarray
                const typedArray = new Uint8Array(1);
                crypto.getRandomValues(typedArray);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                return typedArray[0];
              };
            }
          } catch (_) {
            // some runtimes can crash invoking crypto
            // https://github.com/getsentry/sentry-javascript/issues/8935
          }

          // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
          // Concatenating the following numbers as strings results in '10000000100040008000100000000000'
          return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c =>
          // eslint-disable-next-line no-bitwise
          (c ^ (getRandomByte() & 15) >> c / 4).toString(16));
        }

        /**
         * Updates a session object with the properties passed in the context.
         *
         * Note that this function mutates the passed object and returns void.
         * (Had to do this instead of returning a new and updated session because closing and sending a session
         * makes an update to the session after it was passed to the sending logic.
         * @see BaseClient.captureSession )
         *
         * @param session the `Session` to update
         * @param context the `SessionContext` holding the properties that should be updated in @param session
         */
        // eslint-disable-next-line complexity
        function updateSession(session, context = {}) {
          if (context.user) {
            if (!session.ipAddress && context.user.ip_address) {
              session.ipAddress = context.user.ip_address;
            }
            if (!session.did && !context.did) {
              session.did = context.user.id || context.user.email || context.user.username;
            }
          }
          session.timestamp = context.timestamp || timestampInSeconds();
          if (context.abnormal_mechanism) {
            session.abnormal_mechanism = context.abnormal_mechanism;
          }
          if (context.ignoreDuration) {
            session.ignoreDuration = context.ignoreDuration;
          }
          if (context.sid) {
            // Good enough uuid validation. — Kamil
            session.sid = context.sid.length === 32 ? context.sid : uuid4();
          }
          if (context.init !== undefined) {
            session.init = context.init;
          }
          if (!session.did && context.did) {
            session.did = `${context.did}`;
          }
          if (typeof context.started === 'number') {
            session.started = context.started;
          }
          if (session.ignoreDuration) {
            session.duration = undefined;
          } else if (typeof context.duration === 'number') {
            session.duration = context.duration;
          } else {
            const duration = session.timestamp - session.started;
            session.duration = duration >= 0 ? duration : 0;
          }
          if (context.release) {
            session.release = context.release;
          }
          if (context.environment) {
            session.environment = context.environment;
          }
          if (!session.ipAddress && context.ipAddress) {
            session.ipAddress = context.ipAddress;
          }
          if (!session.userAgent && context.userAgent) {
            session.userAgent = context.userAgent;
          }
          if (typeof context.errors === 'number') {
            session.errors = context.errors;
          }
          if (context.status) {
            session.status = context.status;
          }
        }

        /**
         * Generate a random, valid trace ID.
         */
        function generateTraceId() {
          return uuid4();
        }

        /**
         * Generate a random, valid span ID.
         */
        function generateSpanId() {
          return uuid4().substring(16);
        }

        /**
         * Shallow merge two objects.
         * Does not mutate the passed in objects.
         * Undefined/empty values in the merge object will overwrite existing values.
         *
         * By default, this merges 2 levels deep.
         */
        function merge(initialObj, mergeObj, levels = 2) {
          // If the merge value is not an object, or we have no merge levels left,
          // we just set the value to the merge value
          if (!mergeObj || typeof mergeObj !== 'object' || levels <= 0) {
            return mergeObj;
          }

          // If the merge object is an empty object, and the initial object is not undefined, we return the initial object
          if (initialObj && mergeObj && Object.keys(mergeObj).length === 0) {
            return initialObj;
          }

          // Clone object
          const output = _objectSpread({}, initialObj);

          // Merge values into output, resursively
          for (const key in mergeObj) {
            if (Object.prototype.hasOwnProperty.call(mergeObj, key)) {
              output[key] = merge(output[key], mergeObj[key], levels - 1);
            }
          }
          return output;
        }
        const SCOPE_SPAN_FIELD = '_sentrySpan';

        /**
         * Set the active span for a given scope.
         * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
         */
        function _setSpanForScope(scope, span) {
          if (span) {
            addNonEnumerableProperty(scope, SCOPE_SPAN_FIELD, span);
          } else {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete scope[SCOPE_SPAN_FIELD];
          }
        }

        /**
         * Get the active span for a given scope.
         * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
         */
        function _getSpanForScope(scope) {
          return scope[SCOPE_SPAN_FIELD];
        }

        /**
         * Default value for maximum number of breadcrumbs added to an event.
         */
        const DEFAULT_MAX_BREADCRUMBS = 100;

        /**
         * Holds additional event information.
         */
        class ScopeClass {
          /** Flag if notifying is happening. */

          /** Callback for client to receive scope changes. */

          /** Callback list that will be called during event processing. */

          /** Array of breadcrumbs. */

          /** User */

          /** Tags */

          /** Extra */

          /** Contexts */

          /** Attachments */

          /** Propagation Context for distributed tracing */

          /**
           * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
           * sent to Sentry
           */

          /** Fingerprint */

          /** Severity */

          /**
           * Transaction Name
           *
           * IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
           * It's purpose is to assign a transaction to the scope that's added to non-transaction events.
           */

          /** Session */

          /** Request Mode Session Status */
          // eslint-disable-next-line deprecation/deprecation

          /** The client on this scope */

          /** Contains the last event id of a captured event.  */

          // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.

          constructor() {
            this._notifyingListeners = false;
            this._scopeListeners = [];
            this._eventProcessors = [];
            this._breadcrumbs = [];
            this._attachments = [];
            this._user = {};
            this._tags = {};
            this._extra = {};
            this._contexts = {};
            this._sdkProcessingMetadata = {};
            this._propagationContext = {
              traceId: generateTraceId(),
              spanId: generateSpanId()
            };
          }

          /**
           * @inheritDoc
           */
          clone() {
            const newScope = new ScopeClass();
            newScope._breadcrumbs = [...this._breadcrumbs];
            newScope._tags = _objectSpread({}, this._tags);
            newScope._extra = _objectSpread({}, this._extra);
            newScope._contexts = _objectSpread({}, this._contexts);
            if (this._contexts.flags) {
              // We need to copy the `values` array so insertions on a cloned scope
              // won't affect the original array.
              newScope._contexts.flags = {
                values: [...this._contexts.flags.values]
              };
            }
            newScope._user = this._user;
            newScope._level = this._level;
            newScope._session = this._session;
            newScope._transactionName = this._transactionName;
            newScope._fingerprint = this._fingerprint;
            newScope._eventProcessors = [...this._eventProcessors];
            newScope._requestSession = this._requestSession;
            newScope._attachments = [...this._attachments];
            newScope._sdkProcessingMetadata = _objectSpread({}, this._sdkProcessingMetadata);
            newScope._propagationContext = _objectSpread({}, this._propagationContext);
            newScope._client = this._client;
            newScope._lastEventId = this._lastEventId;
            _setSpanForScope(newScope, _getSpanForScope(this));
            return newScope;
          }

          /**
           * @inheritDoc
           */
          setClient(client) {
            this._client = client;
          }

          /**
           * @inheritDoc
           */
          setLastEventId(lastEventId) {
            this._lastEventId = lastEventId;
          }

          /**
           * @inheritDoc
           */
          getClient() {
            return this._client;
          }

          /**
           * @inheritDoc
           */
          lastEventId() {
            return this._lastEventId;
          }

          /**
           * @inheritDoc
           */
          addScopeListener(callback) {
            this._scopeListeners.push(callback);
          }

          /**
           * @inheritDoc
           */
          addEventProcessor(callback) {
            this._eventProcessors.push(callback);
            return this;
          }

          /**
           * @inheritDoc
           */
          setUser(user) {
            // If null is passed we want to unset everything, but still define keys,
            // so that later down in the pipeline any existing values are cleared.
            this._user = user || {
              email: undefined,
              id: undefined,
              ip_address: undefined,
              username: undefined
            };
            if (this._session) {
              updateSession(this._session, {
                user
              });
            }
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          getUser() {
            return this._user;
          }

          /**
           * @inheritDoc
           */
          // eslint-disable-next-line deprecation/deprecation
          getRequestSession() {
            return this._requestSession;
          }

          /**
           * @inheritDoc
           */
          // eslint-disable-next-line deprecation/deprecation
          setRequestSession(requestSession) {
            this._requestSession = requestSession;
            return this;
          }

          /**
           * @inheritDoc
           */
          setTags(tags) {
            this._tags = _objectSpread(_objectSpread({}, this._tags), tags);
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          setTag(key, value) {
            this._tags = _objectSpread(_objectSpread({}, this._tags), {}, {
              [key]: value
            });
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          setExtras(extras) {
            this._extra = _objectSpread(_objectSpread({}, this._extra), extras);
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          setExtra(key, extra) {
            this._extra = _objectSpread(_objectSpread({}, this._extra), {}, {
              [key]: extra
            });
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          setFingerprint(fingerprint) {
            this._fingerprint = fingerprint;
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          setLevel(level) {
            this._level = level;
            this._notifyScopeListeners();
            return this;
          }

          /**
           * Sets the transaction name on the scope so that the name of e.g. taken server route or
           * the page location is attached to future events.
           *
           * IMPORTANT: Calling this function does NOT change the name of the currently active
           * root span. If you want to change the name of the active root span, use
           * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
           *
           * By default, the SDK updates the scope's transaction name automatically on sensible
           * occasions, such as a page navigation or when handling a new request on the server.
           */
          setTransactionName(name) {
            this._transactionName = name;
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          setContext(key, context) {
            if (context === null) {
              // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
              delete this._contexts[key];
            } else {
              this._contexts[key] = context;
            }
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          setSession(session) {
            if (!session) {
              delete this._session;
            } else {
              this._session = session;
            }
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          getSession() {
            return this._session;
          }

          /**
           * @inheritDoc
           */
          update(captureContext) {
            if (!captureContext) {
              return this;
            }
            const scopeToMerge = typeof captureContext === 'function' ? captureContext(this) : captureContext;
            const [scopeInstance, requestSession] = scopeToMerge instanceof Scope ?
            // eslint-disable-next-line deprecation/deprecation
            [scopeToMerge.getScopeData(), scopeToMerge.getRequestSession()] : isPlainObject(scopeToMerge) ? [captureContext, captureContext.requestSession] : [];
            const {
              tags,
              extra,
              user,
              contexts,
              level,
              fingerprint = [],
              propagationContext
            } = scopeInstance || {};
            this._tags = _objectSpread(_objectSpread({}, this._tags), tags);
            this._extra = _objectSpread(_objectSpread({}, this._extra), extra);
            this._contexts = _objectSpread(_objectSpread({}, this._contexts), contexts);
            if (user && Object.keys(user).length) {
              this._user = user;
            }
            if (level) {
              this._level = level;
            }
            if (fingerprint.length) {
              this._fingerprint = fingerprint;
            }
            if (propagationContext) {
              this._propagationContext = propagationContext;
            }
            if (requestSession) {
              this._requestSession = requestSession;
            }
            return this;
          }

          /**
           * @inheritDoc
           */
          clear() {
            // client is not cleared here on purpose!
            this._breadcrumbs = [];
            this._tags = {};
            this._extra = {};
            this._user = {};
            this._contexts = {};
            this._level = undefined;
            this._transactionName = undefined;
            this._fingerprint = undefined;
            this._requestSession = undefined;
            this._session = undefined;
            _setSpanForScope(this, undefined);
            this._attachments = [];
            this.setPropagationContext({
              traceId: generateTraceId()
            });
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          addBreadcrumb(breadcrumb, maxBreadcrumbs) {
            const maxCrumbs = typeof maxBreadcrumbs === 'number' ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;

            // No data has been changed, so don't notify scope listeners
            if (maxCrumbs <= 0) {
              return this;
            }
            const mergedBreadcrumb = _objectSpread({
              timestamp: dateTimestampInSeconds()
            }, breadcrumb);
            this._breadcrumbs.push(mergedBreadcrumb);
            if (this._breadcrumbs.length > maxCrumbs) {
              this._breadcrumbs = this._breadcrumbs.slice(-maxCrumbs);
              if (this._client) {
                this._client.recordDroppedEvent('buffer_overflow', 'log_item');
              }
            }
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1];
          }

          /**
           * @inheritDoc
           */
          clearBreadcrumbs() {
            this._breadcrumbs = [];
            this._notifyScopeListeners();
            return this;
          }

          /**
           * @inheritDoc
           */
          addAttachment(attachment) {
            this._attachments.push(attachment);
            return this;
          }

          /**
           * @inheritDoc
           */
          clearAttachments() {
            this._attachments = [];
            return this;
          }

          /** @inheritDoc */
          getScopeData() {
            return {
              breadcrumbs: this._breadcrumbs,
              attachments: this._attachments,
              contexts: this._contexts,
              tags: this._tags,
              extra: this._extra,
              user: this._user,
              level: this._level,
              fingerprint: this._fingerprint || [],
              eventProcessors: this._eventProcessors,
              propagationContext: this._propagationContext,
              sdkProcessingMetadata: this._sdkProcessingMetadata,
              transactionName: this._transactionName,
              span: _getSpanForScope(this)
            };
          }

          /**
           * @inheritDoc
           */
          setSDKProcessingMetadata(newData) {
            this._sdkProcessingMetadata = merge(this._sdkProcessingMetadata, newData, 2);
            return this;
          }

          /**
           * @inheritDoc
           */
          setPropagationContext(context) {
            this._propagationContext = _objectSpread({
              // eslint-disable-next-line deprecation/deprecation
              spanId: generateSpanId()
            }, context);
            return this;
          }

          /**
           * @inheritDoc
           */
          getPropagationContext() {
            return this._propagationContext;
          }

          /**
           * @inheritDoc
           */
          captureException(exception, hint) {
            const eventId = hint && hint.event_id ? hint.event_id : uuid4();
            if (!this._client) {
              logger.warn('No client configured on scope - will not capture exception!');
              return eventId;
            }
            const syntheticException = new Error('Sentry syntheticException');
            this._client.captureException(exception, _objectSpread(_objectSpread({
              originalException: exception,
              syntheticException
            }, hint), {}, {
              event_id: eventId
            }), this);
            return eventId;
          }

          /**
           * @inheritDoc
           */
          captureMessage(message, level, hint) {
            const eventId = hint && hint.event_id ? hint.event_id : uuid4();
            if (!this._client) {
              logger.warn('No client configured on scope - will not capture message!');
              return eventId;
            }
            const syntheticException = new Error(message);
            this._client.captureMessage(message, level, _objectSpread(_objectSpread({
              originalException: message,
              syntheticException
            }, hint), {}, {
              event_id: eventId
            }), this);
            return eventId;
          }

          /**
           * @inheritDoc
           */
          captureEvent(event, hint) {
            const eventId = hint && hint.event_id ? hint.event_id : uuid4();
            if (!this._client) {
              logger.warn('No client configured on scope - will not capture event!');
              return eventId;
            }
            this._client.captureEvent(event, _objectSpread(_objectSpread({}, hint), {}, {
              event_id: eventId
            }), this);
            return eventId;
          }

          /**
           * This will be called on every set call.
           */
          _notifyScopeListeners() {
            // We need this check for this._notifyingListeners to be able to work on scope during updates
            // If this check is not here we'll produce endless recursion when something is done with the scope
            // during the callback.
            if (!this._notifyingListeners) {
              this._notifyingListeners = true;
              this._scopeListeners.forEach(callback => {
                callback(this);
              });
              this._notifyingListeners = false;
            }
          }
        }

        /**
         * Holds additional event information.
         */
        const Scope = ScopeClass;

        /** Get the default current scope. */
        function getDefaultCurrentScope() {
          return getGlobalSingleton('defaultCurrentScope', () => new Scope());
        }

        /** Get the default isolation scope. */
        function getDefaultIsolationScope() {
          return getGlobalSingleton('defaultIsolationScope', () => new Scope());
        }

        /**
         * This is an object that holds a stack of scopes.
         */
        class AsyncContextStack {
          constructor(scope, isolationScope) {
            let assignedScope;
            if (!scope) {
              assignedScope = new Scope();
            } else {
              assignedScope = scope;
            }
            let assignedIsolationScope;
            if (!isolationScope) {
              assignedIsolationScope = new Scope();
            } else {
              assignedIsolationScope = isolationScope;
            }

            // scope stack for domains or the process
            this._stack = [{
              scope: assignedScope
            }];
            this._isolationScope = assignedIsolationScope;
          }

          /**
           * Fork a scope for the stack.
           */
          withScope(callback) {
            const scope = this._pushScope();
            let maybePromiseResult;
            try {
              maybePromiseResult = callback(scope);
            } catch (e) {
              this._popScope();
              throw e;
            }
            if (isThenable(maybePromiseResult)) {
              // @ts-expect-error - isThenable returns the wrong type
              return maybePromiseResult.then(res => {
                this._popScope();
                return res;
              }, e => {
                this._popScope();
                throw e;
              });
            }
            this._popScope();
            return maybePromiseResult;
          }

          /**
           * Get the client of the stack.
           */
          getClient() {
            return this.getStackTop().client;
          }

          /**
           * Returns the scope of the top stack.
           */
          getScope() {
            return this.getStackTop().scope;
          }

          /**
           * Get the isolation scope for the stack.
           */
          getIsolationScope() {
            return this._isolationScope;
          }

          /**
           * Returns the topmost scope layer in the order domain > local > process.
           */
          getStackTop() {
            return this._stack[this._stack.length - 1];
          }

          /**
           * Push a scope to the stack.
           */
          _pushScope() {
            // We want to clone the content of prev scope
            const scope = this.getScope().clone();
            this._stack.push({
              client: this.getClient(),
              scope
            });
            return scope;
          }

          /**
           * Pop a scope from the stack.
           */
          _popScope() {
            if (this._stack.length <= 1) return false;
            return !!this._stack.pop();
          }
        }

        /**
         * Get the global async context stack.
         * This will be removed during the v8 cycle and is only here to make migration easier.
         */
        function getAsyncContextStack() {
          const registry = getMainCarrier();
          const sentry = getSentryCarrier(registry);
          return sentry.stack = sentry.stack || new AsyncContextStack(getDefaultCurrentScope(), getDefaultIsolationScope());
        }
        function withScope$1(callback) {
          return getAsyncContextStack().withScope(callback);
        }
        function withSetScope(scope, callback) {
          const stack = getAsyncContextStack();
          return stack.withScope(() => {
            stack.getStackTop().scope = scope;
            return callback(scope);
          });
        }
        function withIsolationScope(callback) {
          return getAsyncContextStack().withScope(() => {
            return callback(getAsyncContextStack().getIsolationScope());
          });
        }

        /**
         * Get the stack-based async context strategy.
         */
        function getStackAsyncContextStrategy() {
          return {
            withIsolationScope,
            withScope: withScope$1,
            withSetScope,
            withSetIsolationScope: (_isolationScope, callback) => {
              return withIsolationScope(callback);
            },
            getCurrentScope: () => getAsyncContextStack().getScope(),
            getIsolationScope: () => getAsyncContextStack().getIsolationScope()
          };
        }

        /**
         * Get the current async context strategy.
         * If none has been setup, the default will be used.
         */
        function getAsyncContextStrategy(carrier) {
          const sentry = getSentryCarrier(carrier);
          if (sentry.acs) {
            return sentry.acs;
          }

          // Otherwise, use the default one (stack)
          return getStackAsyncContextStrategy();
        }

        /**
         * Get the currently active scope.
         */
        function getCurrentScope() {
          const carrier = getMainCarrier();
          const acs = getAsyncContextStrategy(carrier);
          return acs.getCurrentScope();
        }

        /**
         * Get the currently active isolation scope.
         * The isolation scope is active for the current execution context.
         */
        function getIsolationScope() {
          const carrier = getMainCarrier();
          const acs = getAsyncContextStrategy(carrier);
          return acs.getIsolationScope();
        }

        /**
         * Creates a new scope with and executes the given operation within.
         * The scope is automatically removed once the operation
         * finishes or throws.
         */

        /**
         * Either creates a new active scope, or sets the given scope as active scope in the given callback.
         */
        function withScope(...rest) {
          const carrier = getMainCarrier();
          const acs = getAsyncContextStrategy(carrier);

          // If a scope is defined, we want to make this the active scope instead of the default one
          if (rest.length === 2) {
            const [scope, callback] = rest;
            if (!scope) {
              return acs.withScope(callback);
            }
            return acs.withSetScope(scope, callback);
          }
          return acs.withScope(rest[0]);
        }

        /**
         * Get the currently active client.
         */
        function getClient() {
          return getCurrentScope().getClient();
        }

        /**
         * key: bucketKey
         * value: [exportKey, MetricSummary]
         */

        const METRICS_SPAN_FIELD = '_sentryMetrics';

        /**
         * Fetches the metric summary if it exists for the passed span
         */
        function getMetricSummaryJsonForSpan(span) {
          const storage = span[METRICS_SPAN_FIELD];
          if (!storage) {
            return undefined;
          }
          const output = {};
          for (const [, [exportKey, summary]] of storage) {
            const arr = output[exportKey] || (output[exportKey] = []);
            arr.push(dropUndefinedKeys(summary));
          }
          return output;
        }

        /**
         * Use this attribute to represent the source of a span.
         * Should be one of: custom, url, route, view, component, task, unknown
         *
         */
        const SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = 'sentry.source';

        /**
         * Use this attribute to represent the sample rate used for a span.
         */
        const SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = 'sentry.sample_rate';

        /**
         * Use this attribute to represent the operation of a span.
         */
        const SEMANTIC_ATTRIBUTE_SENTRY_OP = 'sentry.op';

        /**
         * Use this attribute to represent the origin of a span.
         */
        const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = 'sentry.origin';

        /** The unit of a measurement, which may be stored as a TimedEvent. */
        const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = 'sentry.measurement_unit';

        /** The value of a measurement, which may be stored as a TimedEvent. */
        const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = 'sentry.measurement_value';

        /**
         * A custom span name set by users guaranteed to be taken over any automatically
         * inferred name. This attribute is removed before the span is sent.
         *
         * @internal only meant for internal SDK usage
         * @hidden
         */
        const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = 'sentry.custom_span_name';

        /**
         * The id of the profile that this span occurred in.
         */
        const SEMANTIC_ATTRIBUTE_PROFILE_ID = 'sentry.profile_id';
        const SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = 'sentry.exclusive_time';
        const SPAN_STATUS_UNSET = 0;
        const SPAN_STATUS_OK = 1;
        const SPAN_STATUS_ERROR = 2;
        const SENTRY_BAGGAGE_KEY_PREFIX = 'sentry-';
        const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;

        /**
         * Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
         * from it.
         *
         * @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
         * @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
         */
        function baggageHeaderToDynamicSamplingContext(
        // Very liberal definition of what any incoming header might look like
        baggageHeader) {
          const baggageObject = parseBaggageHeader(baggageHeader);
          if (!baggageObject) {
            return undefined;
          }

          // Read all "sentry-" prefixed values out of the baggage object and put it onto a dynamic sampling context object.
          const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
            if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
              const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
              acc[nonPrefixedKey] = value;
            }
            return acc;
          }, {});

          // Only return a dynamic sampling context object if there are keys in it.
          // A keyless object means there were no sentry values on the header, which means that there is no DSC.
          if (Object.keys(dynamicSamplingContext).length > 0) {
            return dynamicSamplingContext;
          } else {
            return undefined;
          }
        }

        /**
         * Take a baggage header and parse it into an object.
         */
        function parseBaggageHeader(baggageHeader) {
          if (!baggageHeader || !isString(baggageHeader) && !Array.isArray(baggageHeader)) {
            return undefined;
          }
          if (Array.isArray(baggageHeader)) {
            // Combine all baggage headers into one object containing the baggage values so we can later read the Sentry-DSC-values from it
            return baggageHeader.reduce((acc, curr) => {
              const currBaggageObject = baggageHeaderToObject(curr);
              Object.entries(currBaggageObject).forEach(([key, value]) => {
                acc[key] = value;
              });
              return acc;
            }, {});
          }
          return baggageHeaderToObject(baggageHeader);
        }

        /**
         * Will parse a baggage header, which is a simple key-value map, into a flat object.
         *
         * @param baggageHeader The baggage header to parse.
         * @returns a flat object containing all the key-value pairs from `baggageHeader`.
         */
        function baggageHeaderToObject(baggageHeader) {
          return baggageHeader.split(',').map(baggageEntry => baggageEntry.split('=').map(keyOrValue => decodeURIComponent(keyOrValue.trim()))).reduce((acc, [key, value]) => {
            if (key && value) {
              acc[key] = value;
            }
            return acc;
          }, {});
        }

        // These are aligned with OpenTelemetry trace flags
        const TRACE_FLAG_NONE = 0x0;
        const TRACE_FLAG_SAMPLED = 0x1;

        // todo(v9): Remove this once we've stopped dropping spans via `beforeSendSpan`
        let hasShownSpanDropWarning = false;

        /**
         * Convert a span to a trace context, which can be sent as the `trace` context in an event.
         * By default, this will only include trace_id, span_id & parent_span_id.
         * If `includeAllData` is true, it will also include data, op, status & origin.
         */
        function spanToTransactionTraceContext(span) {
          const {
            spanId: span_id,
            traceId: trace_id
          } = span.spanContext();
          const {
            data,
            op,
            parent_span_id,
            status,
            origin
          } = spanToJSON(span);
          return dropUndefinedKeys({
            parent_span_id,
            span_id,
            trace_id,
            data,
            op,
            status,
            origin
          });
        }

        /**
         * Convert a span time input into a timestamp in seconds.
         */
        function spanTimeInputToSeconds(input) {
          if (typeof input === 'number') {
            return ensureTimestampInSeconds(input);
          }
          if (Array.isArray(input)) {
            // See {@link HrTime} for the array-based time format
            return input[0] + input[1] / 1e9;
          }
          if (input instanceof Date) {
            return ensureTimestampInSeconds(input.getTime());
          }
          return timestampInSeconds();
        }

        /**
         * Converts a timestamp to second, if it was in milliseconds, or keeps it as second.
         */
        function ensureTimestampInSeconds(timestamp) {
          const isMs = timestamp > 9999999999;
          return isMs ? timestamp / 1000 : timestamp;
        }

        /**
         * Convert a span to a JSON representation.
         */
        // Note: Because of this, we currently have a circular type dependency (which we opted out of in package.json).
        // This is not avoidable as we need `spanToJSON` in `spanUtils.ts`, which in turn is needed by `span.ts` for backwards compatibility.
        // And `spanToJSON` needs the Span class from `span.ts` to check here.
        function spanToJSON(span) {
          if (spanIsSentrySpan(span)) {
            return span.getSpanJSON();
          }
          try {
            const {
              spanId: span_id,
              traceId: trace_id
            } = span.spanContext();

            // Handle a span from @opentelemetry/sdk-base-trace's `Span` class
            if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
              const {
                attributes,
                startTime,
                name,
                endTime,
                parentSpanId,
                status
              } = span;
              return dropUndefinedKeys({
                span_id,
                trace_id,
                data: attributes,
                description: name,
                parent_span_id: parentSpanId,
                start_timestamp: spanTimeInputToSeconds(startTime),
                // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
                timestamp: spanTimeInputToSeconds(endTime) || undefined,
                status: getStatusMessage(status),
                op: attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
                origin: attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
                _metrics_summary: getMetricSummaryJsonForSpan(span)
              });
            }

            // Finally, at least we have `spanContext()`....
            return {
              span_id,
              trace_id
            };
          } catch (e) {
            return {};
          }
        }
        function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
          const castSpan = span;
          return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
        }

        /** Exported only for tests. */

        /**
         * Sadly, due to circular dependency checks we cannot actually import the Span class here and check for instanceof.
         * :( So instead we approximate this by checking if it has the `getSpanJSON` method.
         */
        function spanIsSentrySpan(span) {
          return typeof span.getSpanJSON === 'function';
        }

        /**
         * Returns true if a span is sampled.
         * In most cases, you should just use `span.isRecording()` instead.
         * However, this has a slightly different semantic, as it also returns false if the span is finished.
         * So in the case where this distinction is important, use this method.
         */
        function spanIsSampled(span) {
          // We align our trace flags with the ones OpenTelemetry use
          // So we also check for sampled the same way they do.
          const {
            traceFlags
          } = span.spanContext();
          return traceFlags === TRACE_FLAG_SAMPLED;
        }

        /** Get the status message to use for a JSON representation of a span. */
        function getStatusMessage(status) {
          if (!status || status.code === SPAN_STATUS_UNSET) {
            return undefined;
          }
          if (status.code === SPAN_STATUS_OK) {
            return 'ok';
          }
          return status.message || 'unknown_error';
        }
        const CHILD_SPANS_FIELD = '_sentryChildSpans';
        const ROOT_SPAN_FIELD = '_sentryRootSpan';

        /**
         * Adds an opaque child span reference to a span.
         */
        function addChildSpanToSpan(span, childSpan) {
          // We store the root span reference on the child span
          // We need this for `getRootSpan()` to work
          const rootSpan = span[ROOT_SPAN_FIELD] || span;
          addNonEnumerableProperty(childSpan, ROOT_SPAN_FIELD, rootSpan);

          // We store a list of child spans on the parent span
          // We need this for `getSpanDescendants()` to work
          if (span[CHILD_SPANS_FIELD]) {
            span[CHILD_SPANS_FIELD].add(childSpan);
          } else {
            addNonEnumerableProperty(span, CHILD_SPANS_FIELD, new Set([childSpan]));
          }
        }

        /**
         * Returns an array of the given span and all of its descendants.
         */
        function getSpanDescendants(span) {
          const resultSet = new Set();
          function addSpanChildren(span) {
            // This exit condition is required to not infinitely loop in case of a circular dependency.
            if (resultSet.has(span)) {
              return;
              // We want to ignore unsampled spans (e.g. non recording spans)
            } else if (spanIsSampled(span)) {
              resultSet.add(span);
              const childSpans = span[CHILD_SPANS_FIELD] ? Array.from(span[CHILD_SPANS_FIELD]) : [];
              for (const childSpan of childSpans) {
                addSpanChildren(childSpan);
              }
            }
          }
          addSpanChildren(span);
          return Array.from(resultSet);
        }

        /**
         * Returns the root span of a given span.
         */
        function getRootSpan(span) {
          return span[ROOT_SPAN_FIELD] || span;
        }

        /**
         * Logs a warning once if `beforeSendSpan` is used to drop spans.
         *
         * todo(v9): Remove this once we've stopped dropping spans via `beforeSendSpan`.
         */
        function showSpanDropWarning() {
          if (!hasShownSpanDropWarning) {
            consoleSandbox(() => {
              // eslint-disable-next-line no-console
              console.warn('[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.');
            });
            hasShownSpanDropWarning = true;
          }
        }
        const SCOPE_ON_START_SPAN_FIELD = '_sentryScope';
        const ISOLATION_SCOPE_ON_START_SPAN_FIELD = '_sentryIsolationScope';

        /** Store the scope & isolation scope for a span, which can the be used when it is finished. */
        function setCapturedScopesOnSpan(span, scope, isolationScope) {
          if (span) {
            addNonEnumerableProperty(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, isolationScope);
            addNonEnumerableProperty(span, SCOPE_ON_START_SPAN_FIELD, scope);
          }
        }

        /**
         * Grabs the scope and isolation scope off a span that were active when the span was started.
         */
        function getCapturedScopesOnSpan(span) {
          return {
            scope: span[SCOPE_ON_START_SPAN_FIELD],
            isolationScope: span[ISOLATION_SCOPE_ON_START_SPAN_FIELD]
          };
        }

        // Treeshakable guard to remove all code related to tracing

        /**
         * Determines if tracing is currently enabled.
         *
         * Tracing is enabled when at least one of `tracesSampleRate` and `tracesSampler` is defined in the SDK config.
         */
        function hasTracingEnabled(maybeOptions) {
          if (typeof __SENTRY_TRACING__ === 'boolean' && !__SENTRY_TRACING__) {
            return false;
          }
          const client = getClient();
          const options = maybeOptions || client && client.getOptions();
          // eslint-disable-next-line deprecation/deprecation
          return !!options && (options.enableTracing || 'tracesSampleRate' in options || 'tracesSampler' in options);
        }

        /**
         * A Sentry Span that is non-recording, meaning it will not be sent to Sentry.
         */
        class SentryNonRecordingSpan {
          constructor(spanContext = {}) {
            this._traceId = spanContext.traceId || generateTraceId();
            this._spanId = spanContext.spanId || generateSpanId();
          }

          /** @inheritdoc */
          spanContext() {
            return {
              spanId: this._spanId,
              traceId: this._traceId,
              traceFlags: TRACE_FLAG_NONE
            };
          }

          /** @inheritdoc */
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          end(_timestamp) {}

          /** @inheritdoc */
          setAttribute(_key, _value) {
            return this;
          }

          /** @inheritdoc */
          setAttributes(_values) {
            return this;
          }

          /** @inheritdoc */
          setStatus(_status) {
            return this;
          }

          /** @inheritdoc */
          updateName(_name) {
            return this;
          }

          /** @inheritdoc */
          isRecording() {
            return false;
          }

          /** @inheritdoc */
          addEvent(_name, _attributesOrStartTime, _startTime) {
            return this;
          }

          /**
           * This should generally not be used,
           * but we need it for being compliant with the OTEL Span interface.
           *
           * @hidden
           * @internal
           */
          addLink(_link) {
            return this;
          }

          /**
           * This should generally not be used,
           * but we need it for being compliant with the OTEL Span interface.
           *
           * @hidden
           * @internal
           */
          addLinks(_links) {
            return this;
          }

          /**
           * This should generally not be used,
           * but we need it for being compliant with the OTEL Span interface.
           *
           * @hidden
           * @internal
           */
          recordException(_exception, _time) {
            // noop
          }
        }

        /**
         * Wrap a callback function with error handling.
         * If an error is thrown, it will be passed to the `onError` callback and re-thrown.
         *
         * If the return value of the function is a promise, it will be handled with `maybeHandlePromiseRejection`.
         *
         * If an `onFinally` callback is provided, this will be called when the callback has finished
         * - so if it returns a promise, once the promise resolved/rejected,
         * else once the callback has finished executing.
         * The `onFinally` callback will _always_ be called, no matter if an error was thrown or not.
         */
        function handleCallbackErrors(fn, onError,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onFinally = () => {}) {
          let maybePromiseResult;
          try {
            maybePromiseResult = fn();
          } catch (e) {
            onError(e);
            onFinally();
            throw e;
          }
          return maybeHandlePromiseRejection(maybePromiseResult, onError, onFinally);
        }

        /**
         * Maybe handle a promise rejection.
         * This expects to be given a value that _may_ be a promise, or any other value.
         * If it is a promise, and it rejects, it will call the `onError` callback.
         * Other than this, it will generally return the given value as-is.
         */
        function maybeHandlePromiseRejection(value, onError, onFinally) {
          if (isThenable(value)) {
            // @ts-expect-error - the isThenable check returns the "wrong" type here
            return value.then(res => {
              onFinally();
              return res;
            }, e => {
              onError(e);
              onFinally();
              throw e;
            });
          }
          onFinally();
          return value;
        }
        const DEFAULT_ENVIRONMENT = 'production';

        /**
         * If you change this value, also update the terser plugin config to
         * avoid minification of the object property!
         */
        const FROZEN_DSC_FIELD = '_frozenDsc';

        /**
         * Freeze the given DSC on the given span.
         */
        function freezeDscOnSpan(span, dsc) {
          const spanWithMaybeDsc = span;
          addNonEnumerableProperty(spanWithMaybeDsc, FROZEN_DSC_FIELD, dsc);
        }

        /**
         * Creates a dynamic sampling context from a client.
         *
         * Dispatches the `createDsc` lifecycle hook as a side effect.
         */
        function getDynamicSamplingContextFromClient(trace_id, client) {
          const options = client.getOptions();
          const {
            publicKey: public_key
          } = client.getDsn() || {};
          const dsc = dropUndefinedKeys({
            environment: options.environment || DEFAULT_ENVIRONMENT,
            release: options.release,
            public_key,
            trace_id
          });
          client.emit('createDsc', dsc);
          return dsc;
        }

        /**
         * Creates a dynamic sampling context from a span (and client and scope)
         *
         * @param span the span from which a few values like the root span name and sample rate are extracted.
         *
         * @returns a dynamic sampling context
         */
        function getDynamicSamplingContextFromSpan(span) {
          const client = getClient();
          if (!client) {
            return {};
          }
          const rootSpan = getRootSpan(span);

          // For core implementation, we freeze the DSC onto the span as a non-enumerable property
          const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
          if (frozenDsc) {
            return frozenDsc;
          }

          // For OpenTelemetry, we freeze the DSC on the trace state
          const traceState = rootSpan.spanContext().traceState;
          const traceStateDsc = traceState && traceState.get('sentry.dsc');

          // If the span has a DSC, we want it to take precedence
          const dscOnTraceState = traceStateDsc && baggageHeaderToDynamicSamplingContext(traceStateDsc);
          if (dscOnTraceState) {
            return dscOnTraceState;
          }

          // Else, we generate it from the span
          const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
          const jsonSpan = spanToJSON(rootSpan);
          const attributes = jsonSpan.data || {};
          const maybeSampleRate = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
          if (maybeSampleRate != null) {
            dsc.sample_rate = `${maybeSampleRate}`;
          }

          // We don't want to have a transaction name in the DSC if the source is "url" because URLs might contain PII
          const source = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];

          // after JSON conversion, txn.name becomes jsonSpan.description
          const name = jsonSpan.description;
          if (source !== 'url' && name) {
            dsc.transaction = name;
          }

          // How can we even land here with hasTracingEnabled() returning false?
          // Otel creates a Non-recording span in Tracing Without Performance mode when handling incoming requests
          // So we end up with an active span that is not sampled (neither positively nor negatively)
          if (hasTracingEnabled()) {
            dsc.sampled = String(spanIsSampled(rootSpan));
          }
          client.emit('createDsc', dsc, rootSpan);
          return dsc;
        }

        /**
         * Print a log message for a started span.
         */
        function logSpanStart(span) {
          if (!DEBUG_BUILD$3) return;
          const {
            description = '< unknown name >',
            op = '< unknown op >',
            parent_span_id: parentSpanId
          } = spanToJSON(span);
          const {
            spanId
          } = span.spanContext();
          const sampled = spanIsSampled(span);
          const rootSpan = getRootSpan(span);
          const isRootSpan = rootSpan === span;
          const header = `[Tracing] Starting ${sampled ? 'sampled' : 'unsampled'} ${isRootSpan ? 'root ' : ''}span`;
          const infoParts = [`op: ${op}`, `name: ${description}`, `ID: ${spanId}`];
          if (parentSpanId) {
            infoParts.push(`parent ID: ${parentSpanId}`);
          }
          if (!isRootSpan) {
            const {
              op,
              description
            } = spanToJSON(rootSpan);
            infoParts.push(`root ID: ${rootSpan.spanContext().spanId}`);
            if (op) {
              infoParts.push(`root op: ${op}`);
            }
            if (description) {
              infoParts.push(`root description: ${description}`);
            }
          }
          logger.log(`${header}
  ${infoParts.join('\n  ')}`);
        }

        /**
         * Print a log message for an ended span.
         */
        function logSpanEnd(span) {
          if (!DEBUG_BUILD$3) return;
          const {
            description = '< unknown name >',
            op = '< unknown op >'
          } = spanToJSON(span);
          const {
            spanId
          } = span.spanContext();
          const rootSpan = getRootSpan(span);
          const isRootSpan = rootSpan === span;
          const msg = `[Tracing] Finishing "${op}" ${isRootSpan ? 'root ' : ''}span "${description}" with ID ${spanId}`;
          logger.log(msg);
        }

        /**
         * Parse a sample rate from a given value.
         * This will either return a boolean or number sample rate, if the sample rate is valid (between 0 and 1).
         * If a string is passed, we try to convert it to a number.
         *
         * Any invalid sample rate will return `undefined`.
         */
        function parseSampleRate(sampleRate) {
          if (typeof sampleRate === 'boolean') {
            return Number(sampleRate);
          }
          const rate = typeof sampleRate === 'string' ? parseFloat(sampleRate) : sampleRate;
          if (typeof rate !== 'number' || isNaN(rate) || rate < 0 || rate > 1) {
            DEBUG_BUILD$3 && logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(sampleRate)} of type ${JSON.stringify(typeof sampleRate)}.`);
            return undefined;
          }
          return rate;
        }

        /**
         * Makes a sampling decision for the given options.
         *
         * Called every time a root span is created. Only root spans which emerge with a `sampled` value of `true` will be
         * sent to Sentry.
         */
        function sampleSpan(options, samplingContext) {
          // nothing to do if tracing is not enabled
          if (!hasTracingEnabled(options)) {
            return [false];
          }

          // Casting this from unknown, as the type of `sdkProcessingMetadata` is only changed in v9 and `normalizedRequest` is set in SentryHttpInstrumentation
          const normalizedRequest = getIsolationScope().getScopeData().sdkProcessingMetadata.normalizedRequest;
          const enhancedSamplingContext = _objectSpread(_objectSpread({}, samplingContext), {}, {
            normalizedRequest: samplingContext.normalizedRequest || normalizedRequest
          });

          // we would have bailed already if neither `tracesSampler` nor `tracesSampleRate` nor `enableTracing` were defined, so one of these should
          // work; prefer the hook if so
          let sampleRate;
          if (typeof options.tracesSampler === 'function') {
            sampleRate = options.tracesSampler(enhancedSamplingContext);
          } else if (enhancedSamplingContext.parentSampled !== undefined) {
            sampleRate = enhancedSamplingContext.parentSampled;
          } else if (typeof options.tracesSampleRate !== 'undefined') {
            sampleRate = options.tracesSampleRate;
          } else {
            // When `enableTracing === true`, we use a sample rate of 100%
            sampleRate = 1;
          }

          // Since this is coming from the user (or from a function provided by the user), who knows what we might get.
          // (The only valid values are booleans or numbers between 0 and 1.)
          const parsedSampleRate = parseSampleRate(sampleRate);
          if (parsedSampleRate === undefined) {
            DEBUG_BUILD$3 && logger.warn('[Tracing] Discarding transaction because of invalid sample rate.');
            return [false];
          }

          // if the function returned 0 (or false), or if `tracesSampleRate` is 0, it's a sign the transaction should be dropped
          if (!parsedSampleRate) {
            DEBUG_BUILD$3 && logger.log(`[Tracing] Discarding transaction because ${typeof options.tracesSampler === 'function' ? 'tracesSampler returned 0 or false' : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'}`);
            return [false, parsedSampleRate];
          }

          // Now we roll the dice. Math.random is inclusive of 0, but not of 1, so strict < is safe here. In case sampleRate is
          // a boolean, the < comparison will cause it to be automatically cast to 1 if it's true and 0 if it's false.
          const shouldSample = Math.random() < parsedSampleRate;

          // if we're not going to keep it, we're done
          if (!shouldSample) {
            DEBUG_BUILD$3 && logger.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(sampleRate)})`);
            return [false, parsedSampleRate];
          }
          return [true, parsedSampleRate];
        }

        /** Regular expression used to parse a Dsn. */
        const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function isValidProtocol(protocol) {
          return protocol === 'http' || protocol === 'https';
        }

        /**
         * Renders the string representation of this Dsn.
         *
         * By default, this will render the public representation without the password
         * component. To get the deprecated private representation, set `withPassword`
         * to true.
         *
         * @param withPassword When set to true, the password will be included.
         */
        function dsnToString(dsn, withPassword = false) {
          const {
            host,
            path,
            pass,
            port,
            projectId,
            protocol,
            publicKey
          } = dsn;
          return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ''}` + `@${host}${port ? `:${port}` : ''}/${path ? `${path}/` : path}${projectId}`;
        }

        /**
         * Parses a Dsn from a given string.
         *
         * @param str A Dsn as string
         * @returns Dsn as DsnComponents or undefined if @param str is not a valid DSN string
         */
        function dsnFromString(str) {
          const match = DSN_REGEX.exec(str);
          if (!match) {
            // This should be logged to the console
            consoleSandbox(() => {
              // eslint-disable-next-line no-console
              console.error(`Invalid Sentry Dsn: ${str}`);
            });
            return undefined;
          }
          const [protocol, publicKey, pass = '', host = '', port = '', lastPath = ''] = match.slice(1);
          let path = '';
          let projectId = lastPath;
          const split = projectId.split('/');
          if (split.length > 1) {
            path = split.slice(0, -1).join('/');
            projectId = split.pop();
          }
          if (projectId) {
            const projectMatch = projectId.match(/^\d+/);
            if (projectMatch) {
              projectId = projectMatch[0];
            }
          }
          return dsnFromComponents({
            host,
            pass,
            path,
            projectId,
            port,
            protocol: protocol,
            publicKey
          });
        }
        function dsnFromComponents(components) {
          return {
            protocol: components.protocol,
            publicKey: components.publicKey || '',
            pass: components.pass || '',
            host: components.host,
            port: components.port || '',
            path: components.path || '',
            projectId: components.projectId
          };
        }
        function validateDsn(dsn) {
          if (!DEBUG_BUILD$2) {
            return true;
          }
          const {
            port,
            projectId,
            protocol
          } = dsn;
          const requiredComponents = ['protocol', 'publicKey', 'host', 'projectId'];
          const hasMissingRequiredComponent = requiredComponents.find(component => {
            if (!dsn[component]) {
              logger.error(`Invalid Sentry Dsn: ${component} missing`);
              return true;
            }
            return false;
          });
          if (hasMissingRequiredComponent) {
            return false;
          }
          if (!projectId.match(/^\d+$/)) {
            logger.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
            return false;
          }
          if (!isValidProtocol(protocol)) {
            logger.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
            return false;
          }
          if (port && isNaN(parseInt(port, 10))) {
            logger.error(`Invalid Sentry Dsn: Invalid port ${port}`);
            return false;
          }
          return true;
        }

        /**
         * Creates a valid Sentry Dsn object, identifying a Sentry instance and project.
         * @returns a valid DsnComponents object or `undefined` if @param from is an invalid DSN source
         */
        function makeDsn(from) {
          const components = typeof from === 'string' ? dsnFromString(from) : dsnFromComponents(from);
          if (!components || !validateDsn(components)) {
            return undefined;
          }
          return components;
        }

        /**
         * Creates an envelope.
         * Make sure to always explicitly provide the generic to this function
         * so that the envelope types resolve correctly.
         */
        function createEnvelope(headers, items = []) {
          return [headers, items];
        }

        /**
         * Creates envelope item for a single span
         */
        function createSpanEnvelopeItem(spanJson) {
          const spanHeaders = {
            type: 'span'
          };
          return [spanHeaders, spanJson];
        }

        /**
         * Create envelope from Span item.
         *
         * Takes an optional client and runs spans through `beforeSendSpan` if available.
         */
        function createSpanEnvelope(spans, client) {
          function dscHasRequiredProps(dsc) {
            return !!dsc.trace_id && !!dsc.public_key;
          }

          // For the moment we'll obtain the DSC from the first span in the array
          // This might need to be changed if we permit sending multiple spans from
          // different segments in one envelope
          const dsc = getDynamicSamplingContextFromSpan(spans[0]);
          const dsn = client && client.getDsn();
          const tunnel = client && client.getOptions().tunnel;
          const headers = _objectSpread(_objectSpread({
            sent_at: new Date().toISOString()
          }, dscHasRequiredProps(dsc) && {
            trace: dsc
          }), !!tunnel && dsn && {
            dsn: dsnToString(dsn)
          });
          const beforeSendSpan = client && client.getOptions().beforeSendSpan;
          const convertToSpanJSON = beforeSendSpan ? span => {
            const spanJson = beforeSendSpan(spanToJSON(span));
            if (!spanJson) {
              showSpanDropWarning();
            }
            return spanJson;
          } : span => spanToJSON(span);
          const items = [];
          for (const span of spans) {
            const spanJson = convertToSpanJSON(span);
            if (spanJson) {
              items.push(createSpanEnvelopeItem(spanJson));
            }
          }
          return createEnvelope(headers, items);
        }

        /**
         * Convert timed events to measurements.
         */
        function timedEventsToMeasurements(events) {
          if (!events || events.length === 0) {
            return undefined;
          }
          const measurements = {};
          events.forEach(event => {
            const attributes = event.attributes || {};
            const unit = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
            const value = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
            if (typeof unit === 'string' && typeof value === 'number') {
              measurements[event.name] = {
                value,
                unit
              };
            }
          });
          return measurements;
        }
        const MAX_SPAN_COUNT = 1000;

        /**
         * Span contains all data about a span
         */
        class SentrySpan {
          /** Epoch timestamp in seconds when the span started. */

          /** Epoch timestamp in seconds when the span ended. */

          /** Internal keeper of the status */

          /** The timed events added to this span. */

          /** if true, treat span as a standalone span (not part of a transaction) */

          /**
           * You should never call the constructor manually, always use `Sentry.startSpan()`
           * or other span methods.
           * @internal
           * @hideconstructor
           * @hidden
           */
          constructor(spanContext = {}) {
            this._traceId = spanContext.traceId || generateTraceId();
            this._spanId = spanContext.spanId || generateSpanId();
            this._startTime = spanContext.startTimestamp || timestampInSeconds();
            this._attributes = {};
            this.setAttributes(_objectSpread({
              [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: 'manual',
              [SEMANTIC_ATTRIBUTE_SENTRY_OP]: spanContext.op
            }, spanContext.attributes));
            this._name = spanContext.name;
            if (spanContext.parentSpanId) {
              this._parentSpanId = spanContext.parentSpanId;
            }
            // We want to include booleans as well here
            if ('sampled' in spanContext) {
              this._sampled = spanContext.sampled;
            }
            if (spanContext.endTimestamp) {
              this._endTime = spanContext.endTimestamp;
            }
            this._events = [];
            this._isStandaloneSpan = spanContext.isStandalone;

            // If the span is already ended, ensure we finalize the span immediately
            if (this._endTime) {
              this._onSpanEnded();
            }
          }

          /**
           * This should generally not be used,
           * but it is needed for being compliant with the OTEL Span interface.
           *
           * @hidden
           * @internal
           */
          addLink(_link) {
            return this;
          }

          /**
           * This should generally not be used,
           * but it is needed for being compliant with the OTEL Span interface.
           *
           * @hidden
           * @internal
           */
          addLinks(_links) {
            return this;
          }

          /**
           * This should generally not be used,
           * but it is needed for being compliant with the OTEL Span interface.
           *
           * @hidden
           * @internal
           */
          recordException(_exception, _time) {
            // noop
          }

          /** @inheritdoc */
          spanContext() {
            const {
              _spanId: spanId,
              _traceId: traceId,
              _sampled: sampled
            } = this;
            return {
              spanId,
              traceId,
              traceFlags: sampled ? TRACE_FLAG_SAMPLED : TRACE_FLAG_NONE
            };
          }

          /** @inheritdoc */
          setAttribute(key, value) {
            if (value === undefined) {
              // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
              delete this._attributes[key];
            } else {
              this._attributes[key] = value;
            }
            return this;
          }

          /** @inheritdoc */
          setAttributes(attributes) {
            Object.keys(attributes).forEach(key => this.setAttribute(key, attributes[key]));
            return this;
          }

          /**
           * This should generally not be used,
           * but we need it for browser tracing where we want to adjust the start time afterwards.
           * USE THIS WITH CAUTION!
           *
           * @hidden
           * @internal
           */
          updateStartTime(timeInput) {
            this._startTime = spanTimeInputToSeconds(timeInput);
          }

          /**
           * @inheritDoc
           */
          setStatus(value) {
            this._status = value;
            return this;
          }

          /**
           * @inheritDoc
           */
          updateName(name) {
            this._name = name;
            this.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, 'custom');
            return this;
          }

          /** @inheritdoc */
          end(endTimestamp) {
            // If already ended, skip
            if (this._endTime) {
              return;
            }
            this._endTime = spanTimeInputToSeconds(endTimestamp);
            logSpanEnd(this);
            this._onSpanEnded();
          }

          /**
           * Get JSON representation of this span.
           *
           * @hidden
           * @internal This method is purely for internal purposes and should not be used outside
           * of SDK code. If you need to get a JSON representation of a span,
           * use `spanToJSON(span)` instead.
           */
          getSpanJSON() {
            return dropUndefinedKeys({
              data: this._attributes,
              description: this._name,
              op: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
              parent_span_id: this._parentSpanId,
              span_id: this._spanId,
              start_timestamp: this._startTime,
              status: getStatusMessage(this._status),
              timestamp: this._endTime,
              trace_id: this._traceId,
              origin: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
              _metrics_summary: getMetricSummaryJsonForSpan(this),
              profile_id: this._attributes[SEMANTIC_ATTRIBUTE_PROFILE_ID],
              exclusive_time: this._attributes[SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
              measurements: timedEventsToMeasurements(this._events),
              is_segment: this._isStandaloneSpan && getRootSpan(this) === this || undefined,
              segment_id: this._isStandaloneSpan ? getRootSpan(this).spanContext().spanId : undefined
            });
          }

          /** @inheritdoc */
          isRecording() {
            return !this._endTime && !!this._sampled;
          }

          /**
           * @inheritdoc
           */
          addEvent(name, attributesOrStartTime, startTime) {
            DEBUG_BUILD$3 && logger.log('[Tracing] Adding an event to span:', name);
            const time = isSpanTimeInput(attributesOrStartTime) ? attributesOrStartTime : startTime || timestampInSeconds();
            const attributes = isSpanTimeInput(attributesOrStartTime) ? {} : attributesOrStartTime || {};
            const event = {
              name,
              time: spanTimeInputToSeconds(time),
              attributes
            };
            this._events.push(event);
            return this;
          }

          /**
           * This method should generally not be used,
           * but for now we need a way to publicly check if the `_isStandaloneSpan` flag is set.
           * USE THIS WITH CAUTION!
           * @internal
           * @hidden
           * @experimental
           */
          isStandaloneSpan() {
            return !!this._isStandaloneSpan;
          }

          /** Emit `spanEnd` when the span is ended. */
          _onSpanEnded() {
            const client = getClient();
            if (client) {
              client.emit('spanEnd', this);
            }

            // A segment span is basically the root span of a local span tree.
            // So for now, this is either what we previously refer to as the root span,
            // or a standalone span.
            const isSegmentSpan = this._isStandaloneSpan || this === getRootSpan(this);
            if (!isSegmentSpan) {
              return;
            }

            // if this is a standalone span, we send it immediately
            if (this._isStandaloneSpan) {
              if (this._sampled) {
                sendSpanEnvelope(createSpanEnvelope([this], client));
              } else {
                DEBUG_BUILD$3 && logger.log('[Tracing] Discarding standalone span because its trace was not chosen to be sampled.');
                if (client) {
                  client.recordDroppedEvent('sample_rate', 'span');
                }
              }
              return;
            }
            const transactionEvent = this._convertSpanToTransaction();
            if (transactionEvent) {
              const scope = getCapturedScopesOnSpan(this).scope || getCurrentScope();
              scope.captureEvent(transactionEvent);
            }
          }

          /**
           * Finish the transaction & prepare the event to send to Sentry.
           */
          _convertSpanToTransaction() {
            // We can only convert finished spans
            if (!isFullFinishedSpan(spanToJSON(this))) {
              return undefined;
            }
            if (!this._name) {
              DEBUG_BUILD$3 && logger.warn('Transaction has no name, falling back to `<unlabeled transaction>`.');
              this._name = '<unlabeled transaction>';
            }
            const {
              scope: capturedSpanScope,
              isolationScope: capturedSpanIsolationScope
            } = getCapturedScopesOnSpan(this);
            const scope = capturedSpanScope || getCurrentScope();
            const client = scope.getClient() || getClient();
            if (this._sampled !== true) {
              // At this point if `sampled !== true` we want to discard the transaction.
              DEBUG_BUILD$3 && logger.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.');
              if (client) {
                client.recordDroppedEvent('sample_rate', 'transaction');
              }
              return undefined;
            }

            // The transaction span itself as well as any potential standalone spans should be filtered out
            const finishedSpans = getSpanDescendants(this).filter(span => span !== this && !isStandaloneSpan(span));
            const spans = finishedSpans.map(span => spanToJSON(span)).filter(isFullFinishedSpan);
            const source = this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];

            // remove internal root span attributes we don't need to send.
            /* eslint-disable @typescript-eslint/no-dynamic-delete */
            delete this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
            spans.forEach(span => {
              span.data && delete span.data[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
            });
            // eslint-enabled-next-line @typescript-eslint/no-dynamic-delete

            const transaction = _objectSpread({
              contexts: {
                trace: spanToTransactionTraceContext(this)
              },
              spans:
              // spans.sort() mutates the array, but `spans` is already a copy so we can safely do this here
              // we do not use spans anymore after this point
              spans.length > MAX_SPAN_COUNT ? spans.sort((a, b) => a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans,
              start_timestamp: this._startTime,
              timestamp: this._endTime,
              transaction: this._name,
              type: 'transaction',
              sdkProcessingMetadata: _objectSpread({
                capturedSpanScope,
                capturedSpanIsolationScope
              }, dropUndefinedKeys({
                dynamicSamplingContext: getDynamicSamplingContextFromSpan(this)
              })),
              _metrics_summary: getMetricSummaryJsonForSpan(this)
            }, source && {
              transaction_info: {
                source
              }
            });
            const measurements = timedEventsToMeasurements(this._events);
            const hasMeasurements = measurements && Object.keys(measurements).length;
            if (hasMeasurements) {
              DEBUG_BUILD$3 && logger.log('[Measurements] Adding measurements to transaction event', JSON.stringify(measurements, undefined, 2));
              transaction.measurements = measurements;
            }
            return transaction;
          }
        }
        function isSpanTimeInput(value) {
          return value && typeof value === 'number' || value instanceof Date || Array.isArray(value);
        }

        // We want to filter out any incomplete SpanJSON objects
        function isFullFinishedSpan(input) {
          return !!input.start_timestamp && !!input.timestamp && !!input.span_id && !!input.trace_id;
        }

        /** `SentrySpan`s can be sent as a standalone span rather than belonging to a transaction */
        function isStandaloneSpan(span) {
          return span instanceof SentrySpan && span.isStandaloneSpan();
        }

        /**
         * Sends a `SpanEnvelope`.
         *
         * Note: If the envelope's spans are dropped, e.g. via `beforeSendSpan`,
         * the envelope will not be sent either.
         */
        function sendSpanEnvelope(envelope) {
          const client = getClient();
          if (!client) {
            return;
          }
          const spanItems = envelope[1];
          if (!spanItems || spanItems.length === 0) {
            client.recordDroppedEvent('before_send', 'span');
            return;
          }

          // sendEnvelope should not throw
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          client.sendEnvelope(envelope);
        }
        const SUPPRESS_TRACING_KEY = '__SENTRY_SUPPRESS_TRACING__';

        /**
         * Wraps a function with a transaction/span and finishes the span after the function is done.
         * The created span is the active span and will be used as parent by other spans created inside the function
         * and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.
         *
         * If you want to create a span that is not set as active, use {@link startInactiveSpan}.
         *
         * You'll always get a span passed to the callback,
         * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
         */
        function startSpan(options, callback) {
          const acs = getAcs();
          if (acs.startSpan) {
            return acs.startSpan(options, callback);
          }
          const spanArguments = parseSentrySpanArguments(options);
          const {
            forceTransaction,
            parentSpan: customParentSpan
          } = options;
          return withScope(options.scope, () => {
            // If `options.parentSpan` is defined, we want to wrap the callback in `withActiveSpan`
            const wrapper = getActiveSpanWrapper(customParentSpan);
            return wrapper(() => {
              const scope = getCurrentScope();
              const parentSpan = getParentSpan(scope);
              const shouldSkipSpan = options.onlyIfParent && !parentSpan;
              const activeSpan = shouldSkipSpan ? new SentryNonRecordingSpan() : createChildOrRootSpan({
                parentSpan,
                spanArguments,
                forceTransaction,
                scope
              });
              _setSpanForScope(scope, activeSpan);
              return handleCallbackErrors(() => callback(activeSpan), () => {
                // Only update the span status if it hasn't been changed yet, and the span is not yet finished
                const {
                  status
                } = spanToJSON(activeSpan);
                if (activeSpan.isRecording() && (!status || status === 'ok')) {
                  activeSpan.setStatus({
                    code: SPAN_STATUS_ERROR,
                    message: 'internal_error'
                  });
                }
              }, () => activeSpan.end());
            });
          });
        }

        /**
         * Forks the current scope and sets the provided span as active span in the context of the provided callback. Can be
         * passed `null` to start an entirely new span tree.
         *
         * @param span Spans started in the context of the provided callback will be children of this span. If `null` is passed,
         * spans started within the callback will not be attached to a parent span.
         * @param callback Execution context in which the provided span will be active. Is passed the newly forked scope.
         * @returns the value returned from the provided callback function.
         */
        function withActiveSpan(span, callback) {
          const acs = getAcs();
          if (acs.withActiveSpan) {
            return acs.withActiveSpan(span, callback);
          }
          return withScope(scope => {
            _setSpanForScope(scope, span || undefined);
            return callback(scope);
          });
        }
        function createChildOrRootSpan({
          parentSpan,
          spanArguments,
          forceTransaction,
          scope
        }) {
          if (!hasTracingEnabled()) {
            return new SentryNonRecordingSpan();
          }
          const isolationScope = getIsolationScope();
          let span;
          if (parentSpan && !forceTransaction) {
            span = _startChildSpan(parentSpan, scope, spanArguments);
            addChildSpanToSpan(parentSpan, span);
          } else if (parentSpan) {
            // If we forced a transaction but have a parent span, make sure to continue from the parent span, not the scope
            const dsc = getDynamicSamplingContextFromSpan(parentSpan);
            const {
              traceId,
              spanId: parentSpanId
            } = parentSpan.spanContext();
            const parentSampled = spanIsSampled(parentSpan);
            span = _startRootSpan(_objectSpread({
              traceId,
              parentSpanId
            }, spanArguments), scope, parentSampled);
            freezeDscOnSpan(span, dsc);
          } else {
            const {
              traceId,
              dsc,
              parentSpanId,
              sampled: parentSampled
            } = _objectSpread(_objectSpread({}, isolationScope.getPropagationContext()), scope.getPropagationContext());
            span = _startRootSpan(_objectSpread({
              traceId,
              parentSpanId
            }, spanArguments), scope, parentSampled);
            if (dsc) {
              freezeDscOnSpan(span, dsc);
            }
          }
          logSpanStart(span);
          setCapturedScopesOnSpan(span, scope, isolationScope);
          return span;
        }

        /**
         * This converts StartSpanOptions to SentrySpanArguments.
         * For the most part (for now) we accept the same options,
         * but some of them need to be transformed.
         */
        function parseSentrySpanArguments(options) {
          const exp = options.experimental || {};
          const initialCtx = _objectSpread({
            isStandalone: exp.standalone
          }, options);
          if (options.startTime) {
            const ctx = _objectSpread({}, initialCtx);
            ctx.startTimestamp = spanTimeInputToSeconds(options.startTime);
            delete ctx.startTime;
            return ctx;
          }
          return initialCtx;
        }
        function getAcs() {
          const carrier = getMainCarrier();
          return getAsyncContextStrategy(carrier);
        }
        function _startRootSpan(spanArguments, scope, parentSampled) {
          const client = getClient();
          const options = client && client.getOptions() || {};
          const {
            name = '',
            attributes
          } = spanArguments;
          const [sampled, sampleRate] = scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] ? [false] : sampleSpan(options, {
            name,
            parentSampled,
            attributes,
            transactionContext: {
              name,
              parentSampled
            }
          });
          const rootSpan = new SentrySpan(_objectSpread(_objectSpread({}, spanArguments), {}, {
            attributes: _objectSpread({
              [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: 'custom'
            }, spanArguments.attributes),
            sampled
          }));
          if (sampleRate !== undefined) {
            rootSpan.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, sampleRate);
          }
          if (client) {
            client.emit('spanStart', rootSpan);
          }
          return rootSpan;
        }

        /**
         * Creates a new `Span` while setting the current `Span.id` as `parentSpanId`.
         * This inherits the sampling decision from the parent span.
         */
        function _startChildSpan(parentSpan, scope, spanArguments) {
          const {
            spanId,
            traceId
          } = parentSpan.spanContext();
          const sampled = scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] ? false : spanIsSampled(parentSpan);
          const childSpan = sampled ? new SentrySpan(_objectSpread(_objectSpread({}, spanArguments), {}, {
            parentSpanId: spanId,
            traceId,
            sampled
          })) : new SentryNonRecordingSpan({
            traceId
          });
          addChildSpanToSpan(parentSpan, childSpan);
          const client = getClient();
          if (client) {
            client.emit('spanStart', childSpan);
            // If it has an endTimestamp, it's already ended
            if (spanArguments.endTimestamp) {
              client.emit('spanEnd', childSpan);
            }
          }
          return childSpan;
        }
        function getParentSpan(scope) {
          const span = _getSpanForScope(scope);
          if (!span) {
            return undefined;
          }
          const client = getClient();
          const options = client ? client.getOptions() : {};
          if (options.parentSpanIsAlwaysRootSpan) {
            return getRootSpan(span);
          }
          return span;
        }
        function getActiveSpanWrapper(parentSpan) {
          return parentSpan !== undefined ? callback => {
            return withActiveSpan(parentSpan, callback);
          } : callback => callback();
        }

        /**
         * Parse either an `EventHint` directly, or convert a `CaptureContext` to an `EventHint`.
         * This is used to allow to update method signatures that used to accept a `CaptureContext` but should now accept an `EventHint`.
         */
        function parseEventHintOrCaptureContext(hint) {
          if (!hint) {
            return undefined;
          }

          // If you pass a Scope or `() => Scope` as CaptureContext, we just return this as captureContext
          if (hintIsScopeOrFunction(hint)) {
            return {
              captureContext: hint
            };
          }
          if (hintIsScopeContext(hint)) {
            return {
              captureContext: hint
            };
          }
          return hint;
        }
        function hintIsScopeOrFunction(hint) {
          return hint instanceof Scope || typeof hint === 'function';
        }
        const captureContextKeys = ['user', 'level', 'extra', 'contexts', 'tags', 'fingerprint', 'requestSession', 'propagationContext'];
        function hintIsScopeContext(hint) {
          return Object.keys(hint).some(key => captureContextKeys.includes(key));
        }

        /**
         * Captures an exception event and sends it to Sentry.
         *
         * @param exception The exception to capture.
         * @param hint Optional additional data to attach to the Sentry event.
         * @returns the id of the captured Sentry event.
         */
        function captureException(exception, hint) {
          return getCurrentScope().captureException(exception, parseEventHintOrCaptureContext(hint));
        }

        /**
         * The last error event id of the isolation scope.
         *
         * Warning: This function really returns the last recorded error event id on the current
         * isolation scope. If you call this function after handling a certain error and another error
         * is captured in between, the last one is returned instead of the one you might expect.
         * Also, ids of events that were never sent to Sentry (for example because
         * they were dropped in `beforeSend`) could be returned.
         *
         * @returns The last event id of the isolation scope.
         */
        function lastEventId() {
          return getIsolationScope().lastEventId();
        }

        /** Returns the prefix to construct Sentry ingestion API endpoints. */
        function getBaseApiEndpoint(dsn) {
          const protocol = dsn.protocol ? `${dsn.protocol}:` : '';
          const port = dsn.port ? `:${dsn.port}` : '';
          return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ''}/api/`;
        }

        /** Returns the url to the report dialog endpoint. */
        function getReportDialogEndpoint(dsnLike, dialogOptions) {
          const dsn = makeDsn(dsnLike);
          if (!dsn) {
            return '';
          }
          const endpoint = `${getBaseApiEndpoint(dsn)}embed/error-page/`;
          let encodedOptions = `dsn=${dsnToString(dsn)}`;
          for (const key in dialogOptions) {
            if (key === 'dsn') {
              continue;
            }
            if (key === 'onClose') {
              continue;
            }
            if (key === 'user') {
              const user = dialogOptions.user;
              if (!user) {
                continue;
              }
              if (user.name) {
                encodedOptions += `&name=${encodeURIComponent(user.name)}`;
              }
              if (user.email) {
                encodedOptions += `&email=${encodeURIComponent(user.email)}`;
              }
            } else {
              encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key])}`;
            }
          }
          return `${endpoint}?${encodedOptions}`;
        }
        const WINDOW = GLOBAL_OBJ;

        /**
         * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
         *
         * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
         */
        const DEBUG_BUILD$1 = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;

        /**
         * All properties the report dialog supports
         */

        /**
         * Present the user with a report dialog.
         *
         * @param options Everything is optional, we try to fetch all info need from the global scope.
         */
        function showReportDialog(options = {}) {
          // doesn't work without a document (React Native)
          if (!WINDOW.document) {
            DEBUG_BUILD$1 && logger.error('Global document not defined in showReportDialog call');
            return;
          }
          const scope = getCurrentScope();
          const client = scope.getClient();
          const dsn = client && client.getDsn();
          if (!dsn) {
            DEBUG_BUILD$1 && logger.error('DSN not configured for showReportDialog call');
            return;
          }
          if (scope) {
            options.user = _objectSpread(_objectSpread({}, scope.getUser()), options.user);
          }
          if (!options.eventId) {
            const eventId = lastEventId();
            if (eventId) {
              options.eventId = eventId;
            }
          }
          const script = WINDOW.document.createElement('script');
          script.async = true;
          script.crossOrigin = 'anonymous';
          script.src = getReportDialogEndpoint(dsn, options);
          if (options.onLoad) {
            script.onload = options.onLoad;
          }
          const {
            onClose
          } = options;
          if (onClose) {
            const reportDialogClosedMessageHandler = event => {
              if (event.data === '__sentry_reportdialog_closed__') {
                try {
                  onClose();
                } finally {
                  WINDOW.removeEventListener('message', reportDialogClosedMessageHandler);
                }
              }
            };
            WINDOW.addEventListener('message', reportDialogClosedMessageHandler);
          }
          const injectionPoint = WINDOW.document.head || WINDOW.document.body;
          if (injectionPoint) {
            injectionPoint.appendChild(script);
          } else {
            DEBUG_BUILD$1 && logger.error('Not injecting report dialog. No injection point found in HTML');
          }
        }

        /**
         * See if React major version is 17+ by parsing version string.
         */
        function isAtLeastReact17(reactVersion) {
          const reactMajor = reactVersion.match(/^([^.]+)/);
          return reactMajor !== null && parseInt(reactMajor[0]) >= 17;
        }

        /**
         * Recurse through `error.cause` chain to set cause on an error.
         */
        function setCause(error, cause) {
          const seenErrors = new WeakSet();
          function recurse(error, cause) {
            // If we've already seen the error, there is a recursive loop somewhere in the error's
            // cause chain. Let's just bail out then to prevent a stack overflow.
            if (seenErrors.has(error)) {
              return;
            }
            if (error.cause) {
              seenErrors.add(error);
              return recurse(error.cause, cause);
            }
            error.cause = cause;
          }
          recurse(error, cause);
        }

        /**
         * Captures an error that was thrown by a React ErrorBoundary or React root.
         *
         * @param error The error to capture.
         * @param errorInfo The errorInfo provided by React.
         * @param hint Optional additional data to attach to the Sentry event.
         * @returns the id of the captured Sentry event.
         */
        function captureReactException(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        error, {
          componentStack
        }, hint) {
          // If on React version >= 17, create stack trace from componentStack param and links
          // to to the original error using `error.cause` otherwise relies on error param for stacktrace.
          // Linking errors requires the `LinkedErrors` integration be enabled.
          // See: https://reactjs.org/blog/2020/08/10/react-v17-rc.html#native-component-stacks
          //
          // Although `componentDidCatch` is typed to accept an `Error` object, it can also be invoked
          // with non-error objects. This is why we need to check if the error is an error-like object.
          // See: https://github.com/getsentry/sentry-javascript/issues/6167
          if (isAtLeastReact17(reactExports.version) && isError(error) && componentStack) {
            const errorBoundaryError = new Error(error.message);
            errorBoundaryError.name = `React ErrorBoundary ${error.name}`;
            errorBoundaryError.stack = componentStack;

            // Using the `LinkedErrors` integration to link the errors together.
            setCause(error, errorBoundaryError);
          }
          return captureException(error, _objectSpread(_objectSpread({}, hint), {}, {
            captureContext: {
              contexts: {
                react: {
                  componentStack
                }
              }
            }
          }));
        }
        var reactIs = {
          exports: {}
        };
        var reactIs_production_min = {};

        /** @license React v16.13.1
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var hasRequiredReactIs_production_min;
        function requireReactIs_production_min() {
          if (hasRequiredReactIs_production_min) return reactIs_production_min;
          hasRequiredReactIs_production_min = 1;
          var b = "function" === typeof Symbol && Symbol.for,
            c = b ? Symbol.for("react.element") : 60103,
            d = b ? Symbol.for("react.portal") : 60106,
            e = b ? Symbol.for("react.fragment") : 60107,
            f = b ? Symbol.for("react.strict_mode") : 60108,
            g = b ? Symbol.for("react.profiler") : 60114,
            h = b ? Symbol.for("react.provider") : 60109,
            k = b ? Symbol.for("react.context") : 60110,
            l = b ? Symbol.for("react.async_mode") : 60111,
            m = b ? Symbol.for("react.concurrent_mode") : 60111,
            n = b ? Symbol.for("react.forward_ref") : 60112,
            p = b ? Symbol.for("react.suspense") : 60113,
            q = b ? Symbol.for("react.suspense_list") : 60120,
            r = b ? Symbol.for("react.memo") : 60115,
            t = b ? Symbol.for("react.lazy") : 60116,
            v = b ? Symbol.for("react.block") : 60121,
            w = b ? Symbol.for("react.fundamental") : 60117,
            x = b ? Symbol.for("react.responder") : 60118,
            y = b ? Symbol.for("react.scope") : 60119;
          function z(a) {
            if ("object" === typeof a && null !== a) {
              var u = a.$$typeof;
              switch (u) {
                case c:
                  switch (a = a.type, a) {
                    case l:
                    case m:
                    case e:
                    case g:
                    case f:
                    case p:
                      return a;
                    default:
                      switch (a = a && a.$$typeof, a) {
                        case k:
                        case n:
                        case t:
                        case r:
                        case h:
                          return a;
                        default:
                          return u;
                      }
                  }
                case d:
                  return u;
              }
            }
          }
          function A(a) {
            return z(a) === m;
          }
          reactIs_production_min.AsyncMode = l;
          reactIs_production_min.ConcurrentMode = m;
          reactIs_production_min.ContextConsumer = k;
          reactIs_production_min.ContextProvider = h;
          reactIs_production_min.Element = c;
          reactIs_production_min.ForwardRef = n;
          reactIs_production_min.Fragment = e;
          reactIs_production_min.Lazy = t;
          reactIs_production_min.Memo = r;
          reactIs_production_min.Portal = d;
          reactIs_production_min.Profiler = g;
          reactIs_production_min.StrictMode = f;
          reactIs_production_min.Suspense = p;
          reactIs_production_min.isAsyncMode = function (a) {
            return A(a) || z(a) === l;
          };
          reactIs_production_min.isConcurrentMode = A;
          reactIs_production_min.isContextConsumer = function (a) {
            return z(a) === k;
          };
          reactIs_production_min.isContextProvider = function (a) {
            return z(a) === h;
          };
          reactIs_production_min.isElement = function (a) {
            return "object" === typeof a && null !== a && a.$$typeof === c;
          };
          reactIs_production_min.isForwardRef = function (a) {
            return z(a) === n;
          };
          reactIs_production_min.isFragment = function (a) {
            return z(a) === e;
          };
          reactIs_production_min.isLazy = function (a) {
            return z(a) === t;
          };
          reactIs_production_min.isMemo = function (a) {
            return z(a) === r;
          };
          reactIs_production_min.isPortal = function (a) {
            return z(a) === d;
          };
          reactIs_production_min.isProfiler = function (a) {
            return z(a) === g;
          };
          reactIs_production_min.isStrictMode = function (a) {
            return z(a) === f;
          };
          reactIs_production_min.isSuspense = function (a) {
            return z(a) === p;
          };
          reactIs_production_min.isValidElementType = function (a) {
            return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
          };
          reactIs_production_min.typeOf = z;
          return reactIs_production_min;
        }
        var hasRequiredReactIs;
        function requireReactIs() {
          if (hasRequiredReactIs) return reactIs.exports;
          hasRequiredReactIs = 1;
          {
            reactIs.exports = requireReactIs_production_min();
          }
          return reactIs.exports;
        }
        var hoistNonReactStatics_cjs;
        var hasRequiredHoistNonReactStatics_cjs;
        function requireHoistNonReactStatics_cjs() {
          if (hasRequiredHoistNonReactStatics_cjs) return hoistNonReactStatics_cjs;
          hasRequiredHoistNonReactStatics_cjs = 1;
          var reactIs = requireReactIs();

          /**
           * Copyright 2015, Yahoo! Inc.
           * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
           */
          var REACT_STATICS = {
            childContextTypes: true,
            contextType: true,
            contextTypes: true,
            defaultProps: true,
            displayName: true,
            getDefaultProps: true,
            getDerivedStateFromError: true,
            getDerivedStateFromProps: true,
            mixins: true,
            propTypes: true,
            type: true
          };
          var KNOWN_STATICS = {
            name: true,
            length: true,
            prototype: true,
            caller: true,
            callee: true,
            arguments: true,
            arity: true
          };
          var FORWARD_REF_STATICS = {
            '$$typeof': true,
            render: true,
            defaultProps: true,
            displayName: true,
            propTypes: true
          };
          var MEMO_STATICS = {
            '$$typeof': true,
            compare: true,
            defaultProps: true,
            displayName: true,
            propTypes: true,
            type: true
          };
          var TYPE_STATICS = {};
          TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
          TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
          function getStatics(component) {
            // React v16.11 and below
            if (reactIs.isMemo(component)) {
              return MEMO_STATICS;
            } // React v16.12 and above

            return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
          }
          var defineProperty = Object.defineProperty;
          var getOwnPropertyNames = Object.getOwnPropertyNames;
          var getOwnPropertySymbols = Object.getOwnPropertySymbols;
          var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
          var getPrototypeOf = Object.getPrototypeOf;
          var objectPrototype = Object.prototype;
          function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
            if (typeof sourceComponent !== 'string') {
              // don't hoist over string (html) components
              if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                  hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
              }
              var keys = getOwnPropertyNames(sourceComponent);
              if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
              }
              var targetStatics = getStatics(targetComponent);
              var sourceStatics = getStatics(sourceComponent);
              for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                  var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                  try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                  } catch (e) {}
                }
              }
            }
            return targetComponent;
          }
          hoistNonReactStatics_cjs = hoistNonReactStatics;
          return hoistNonReactStatics_cjs;
        }
        requireHoistNonReactStatics_cjs();

        /**
         * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
         *
         * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
         */
        const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;
        const INITIAL_STATE = {
          componentStack: null,
          error: null,
          eventId: null
        };

        /**
         * A ErrorBoundary component that logs errors to Sentry.
         * NOTE: If you are a Sentry user, and you are seeing this stack frame, it means the
         * Sentry React SDK ErrorBoundary caught an error invoking your application code. This
         * is expected behavior and NOT indicative of a bug with the Sentry React SDK.
         */
        class ErrorBoundary extends reactExports.Component {
          constructor(props) {
            super(props);
            ErrorBoundary.prototype.__init.call(this);
            this.state = INITIAL_STATE;
            this._openFallbackReportDialog = true;
            const client = getClient();
            if (client && props.showDialog) {
              this._openFallbackReportDialog = false;
              this._cleanupHook = client.on('afterSendEvent', event => {
                if (!event.type && this._lastEventId && event.event_id === this._lastEventId) {
                  showReportDialog(_objectSpread(_objectSpread({}, props.dialogOptions), {}, {
                    eventId: this._lastEventId
                  }));
                }
              });
            }
          }
          componentDidCatch(error, errorInfo) {
            const {
              componentStack
            } = errorInfo;
            // TODO(v9): Remove this check and type `componentStack` to be React.ErrorInfo['componentStack'].
            const passedInComponentStack = componentStack == null ? undefined : componentStack;
            const {
              beforeCapture,
              onError,
              showDialog,
              dialogOptions
            } = this.props;
            withScope(scope => {
              if (beforeCapture) {
                beforeCapture(scope, error, passedInComponentStack);
              }
              const handled = this.props.handled != null ? this.props.handled : !!this.props.fallback;
              const eventId = captureReactException(error, errorInfo, {
                mechanism: {
                  handled
                }
              });
              if (onError) {
                onError(error, passedInComponentStack, eventId);
              }
              if (showDialog) {
                this._lastEventId = eventId;
                if (this._openFallbackReportDialog) {
                  showReportDialog(_objectSpread(_objectSpread({}, dialogOptions), {}, {
                    eventId
                  }));
                }
              }

              // componentDidCatch is used over getDerivedStateFromError
              // so that componentStack is accessible through state.
              this.setState({
                error,
                componentStack,
                eventId
              });
            });
          }
          componentDidMount() {
            const {
              onMount
            } = this.props;
            if (onMount) {
              onMount();
            }
          }
          componentWillUnmount() {
            const {
              error,
              componentStack,
              eventId
            } = this.state;
            const {
              onUnmount
            } = this.props;
            if (onUnmount) {
              onUnmount(error, componentStack, eventId);
            }
            if (this._cleanupHook) {
              this._cleanupHook();
              this._cleanupHook = undefined;
            }
          }
          __init() {
            this.resetErrorBoundary = () => {
              const {
                onReset
              } = this.props;
              const {
                error,
                componentStack,
                eventId
              } = this.state;
              if (onReset) {
                onReset(error, componentStack, eventId);
              }
              this.setState(INITIAL_STATE);
            };
          }
          render() {
            const {
              fallback,
              children
            } = this.props;
            const state = this.state;
            if (state.error) {
              let element = undefined;
              if (typeof fallback === 'function') {
                element = reactExports.createElement(fallback, {
                  error: state.error,
                  componentStack: state.componentStack,
                  resetError: this.resetErrorBoundary,
                  eventId: state.eventId
                });
              } else {
                element = fallback;
              }
              if (reactExports.isValidElement(element)) {
                return element;
              }
              if (fallback) {
                DEBUG_BUILD && logger.warn('fallback did not produce a valid ReactElement');
              }

              // Fail gracefully if no fallback provided or is not valid
              return null;
            }
            if (typeof children === 'function') {
              return children();
            }
            return children;
          }
        }
        exports("E", ErrorBoundary);
      }
    };
  });
})();
//# sourceMappingURL=@sentry-vendor-legacy-Ca039euQ.js.map
