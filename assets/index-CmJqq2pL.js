const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browser-ponyfill-CT8vT0g7.js","./@sentry-vendor-DIzI_R8p.js","./App-DX8Hmlgm.js","./pixi.js-vendor-By4Tt1Nl.js","./framer-motion-vendor-M-CJJoj5.js","./ikigaians-house-core-CYkxu2p9.js","./react-dom-vendor-DIvBW9ov.js","./ui-icons-internal-Cv1pemof.js","./App-BlU_6t-D.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c;
function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import { G as GameType, R as RouletteCallBet, a as RouletteBetNo, S as SicBoBetNo, B as BaccaratBetNo, b as BaccaratBetLimitProfile, c as SicBoBetLimitProfile, d as RouletteBetLimitProfile, g as getGameRuleByType, e as getPayout, J as JurisdictionPayloadHelper, T as TableRoundStatus, D as Decimal, C as CardRank, f as CardSuit, h as Card, i as BaccaratCards } from "./ikigaians-house-core-CYkxu2p9.js";
import { a as requireReact, g as getDefaultExportFromCjs, R as React, c as commonjsGlobal, s as startSpan, r as reactExports, E as ErrorBoundary } from "./@sentry-vendor-DIzI_R8p.js";
import { G as GameEvent, a as GameAction, W as WsEvent, C as Connect } from "./ikigaians-connect-core-CK9eHaV7.js";
import { j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./framer-motion-vendor-M-CJJoj5.js";
import { c as clientExports } from "./react-dom-vendor-DIvBW9ov.js";
import { I as Icon } from "./ui-icons-internal-Cv1pemof.js";
import { _ as __vitePreload, b as Graphics, P as Point, c as Container, e as Texture, S as Sprite, F as Filter, a as GlProgram, A as Assets, f as Application, g as TextStyle, h as FillGradient, i as Text, j as AnimatedSprite } from "./pixi.js-vendor-By4Tt1Nl.js";
import { G as GlowFilter, K as KawaseBlurFilter } from "./pixi-filters-vendor-urfE99zo.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const __vite_import_meta_env__$3 = { "LEGACY": false };
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((__vite_import_meta_env__$3 ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, getInitialState, subscribe, destroy };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var withSelector = { exports: {} };
var withSelector_production = {};
var shim = { exports: {} };
var useSyncExternalStoreShim_production = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreShim_production;
function requireUseSyncExternalStoreShim_production() {
  if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
  hasRequiredUseSyncExternalStoreShim_production = 1;
  var React2 = requireReact();
  function is2(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is2, useState = React2.useState, useEffect = React2.useEffect, useLayoutEffect = React2.useLayoutEffect, useDebugValue2 = React2.useDebugValue;
  function useSyncExternalStore$2(subscribe, getSnapshot) {
    var value = getSnapshot(), _useState = useState({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
    useLayoutEffect(
      function() {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      },
      [subscribe, value, getSnapshot]
    );
    useEffect(
      function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        return subscribe(function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        });
      },
      [subscribe]
    );
    useDebugValue2(value);
    return value;
  }
  function checkIfSnapshotChanged(inst) {
    var latestGetSnapshot = inst.getSnapshot;
    inst = inst.value;
    try {
      var nextValue = latestGetSnapshot();
      return !objectIs(inst, nextValue);
    } catch (error) {
      return true;
    }
  }
  function useSyncExternalStore$1(subscribe, getSnapshot) {
    return getSnapshot();
  }
  var shim2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
  useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React2.useSyncExternalStore ? React2.useSyncExternalStore : shim2;
  return useSyncExternalStoreShim_production;
}
var hasRequiredShim;
function requireShim() {
  if (hasRequiredShim) return shim.exports;
  hasRequiredShim = 1;
  {
    shim.exports = requireUseSyncExternalStoreShim_production();
  }
  return shim.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredWithSelector_production;
function requireWithSelector_production() {
  if (hasRequiredWithSelector_production) return withSelector_production;
  hasRequiredWithSelector_production = 1;
  var React2 = requireReact(), shim2 = requireShim();
  function is2(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is2, useSyncExternalStore = shim2.useSyncExternalStore, useRef = React2.useRef, useEffect = React2.useEffect, useMemo = React2.useMemo, useDebugValue2 = React2.useDebugValue;
  withSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
    var instRef = useRef(null);
    if (null === instRef.current) {
      var inst = { hasValue: false, value: null };
      instRef.current = inst;
    } else inst = instRef.current;
    instRef = useMemo(
      function() {
        function memoizedSelector(nextSnapshot) {
          if (!hasMemo) {
            hasMemo = true;
            memoizedSnapshot = nextSnapshot;
            nextSnapshot = selector(nextSnapshot);
            if (void 0 !== isEqual && inst.hasValue) {
              var currentSelection = inst.value;
              if (isEqual(currentSelection, nextSnapshot))
                return memoizedSelection = currentSelection;
            }
            return memoizedSelection = nextSnapshot;
          }
          currentSelection = memoizedSelection;
          if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
          var nextSelection = selector(nextSnapshot);
          if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
            return memoizedSnapshot = nextSnapshot, currentSelection;
          memoizedSnapshot = nextSnapshot;
          return memoizedSelection = nextSelection;
        }
        var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
        return [
          function() {
            return memoizedSelector(getSnapshot());
          },
          null === maybeGetServerSnapshot ? void 0 : function() {
            return memoizedSelector(maybeGetServerSnapshot());
          }
        ];
      },
      [getSnapshot, getServerSnapshot, selector, isEqual]
    );
    var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
    useEffect(
      function() {
        inst.hasValue = true;
        inst.value = value;
      },
      [value]
    );
    useDebugValue2(value);
    return value;
  };
  return withSelector_production;
}
var hasRequiredWithSelector;
function requireWithSelector() {
  if (hasRequiredWithSelector) return withSelector.exports;
  hasRequiredWithSelector = 1;
  {
    withSelector.exports = requireWithSelector_production();
  }
  return withSelector.exports;
}
var withSelectorExports = requireWithSelector();
const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
const __vite_import_meta_env__$2 = { "LEGACY": false };
const { useDebugValue } = React;
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
let didWarnAboutEqualityFn = false;
const identity = (arg) => arg;
function useStore(api, selector = identity, equalityFn) {
  if ((__vite_import_meta_env__$2 ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice2 = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getInitialState,
    selector,
    equalityFn
  );
  useDebugValue(slice2);
  return slice2;
}
const createImpl = (createState) => {
  if ((__vite_import_meta_env__$2 ? "production" : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
const __vite_import_meta_env__$1 = { "BASE_URL": "./", "DEV": false, "LEGACY": false, "MODE": "production", "PROD": true, "SSR": false, "VITE_API_URL": "", "VITE_APP_GIT_SHA": "<sha>", "VITE_APP_TOLGEE_API_KEY": "tgpak_gi2demjsl4yxgnzxmvxgg5tpmvstqnlkmzyhantggrzxmz3ennsa", "VITE_APP_TOLGEE_API_URL": "https://app.tolgee.io", "VITE_DEPLOY_AAA": "dev", "VITE_DEPLOY_ENV": "dev", "VITE_GAME_TABLE": "RAOHE-YESU", "VITE_SESSION_ID": "494b474c-4956-4544-4556-000000000113", "VITE_WS_SERVER": "wss://crystal-rgs-gs1.iki-cit.cc/ws" };
const trackedConnections = /* @__PURE__ */ new Map();
const getTrackedConnectionState = (name) => {
  const api = trackedConnections.get(name);
  if (!api) return {};
  return Object.fromEntries(
    Object.entries(api.stores).map(([key, api2]) => [key, api2.getState()])
  );
};
const extractConnectionInformation = (store, extensionConnector, options) => {
  if (store === void 0) {
    return {
      type: "untracked",
      connection: extensionConnector.connect(options)
    };
  }
  const existingConnection = trackedConnections.get(options.name);
  if (existingConnection) {
    return { type: "tracked", store, ...existingConnection };
  }
  const newConnection = {
    connection: extensionConnector.connect(options),
    stores: {}
  };
  trackedConnections.set(options.name, newConnection);
  return { type: "tracked", store, ...newConnection };
};
const devtoolsImpl = (fn, devtoolsOptions = {}) => (set2, get2, api) => {
  const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
  let extensionConnector;
  try {
    extensionConnector = (enabled != null ? enabled : (__vite_import_meta_env__$1 ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch (_e) {
  }
  if (!extensionConnector) {
    if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && enabled) {
      console.warn(
        "[zustand devtools middleware] Please install/enable Redux devtools extension"
      );
    }
    return fn(set2, get2, api);
  }
  const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
  let isRecording = true;
  api.setState = (state, replace, nameOrAction) => {
    const r2 = set2(state, replace);
    if (!isRecording) return r2;
    const action = nameOrAction === void 0 ? { type: anonymousActionType || "anonymous" } : typeof nameOrAction === "string" ? { type: nameOrAction } : nameOrAction;
    if (store === void 0) {
      connection == null ? void 0 : connection.send(action, get2());
      return r2;
    }
    connection == null ? void 0 : connection.send(
      {
        ...action,
        type: "".concat(store, "/").concat(action.type)
      },
      {
        ...getTrackedConnectionState(options.name),
        [store]: api.getState()
      }
    );
    return r2;
  };
  const setStateFromDevtools = (...a) => {
    const originalIsRecording = isRecording;
    isRecording = false;
    set2(...a);
    isRecording = originalIsRecording;
  };
  const initialState = fn(api.setState, get2, api);
  if (connectionInformation.type === "untracked") {
    connection == null ? void 0 : connection.init(initialState);
  } else {
    connectionInformation.stores[connectionInformation.store] = api;
    connection == null ? void 0 : connection.init(
      Object.fromEntries(
        Object.entries(connectionInformation.stores).map(([key, store2]) => [
          key,
          key === connectionInformation.store ? initialState : store2.getState()
        ])
      )
    );
  }
  if (api.dispatchFromDevtools && typeof api.dispatch === "function") {
    let didWarnAboutReservedActionType = false;
    const originalDispatch = api.dispatch;
    api.dispatch = (...a) => {
      if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && a[0].type === "__setState" && !didWarnAboutReservedActionType) {
        console.warn(
          '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
        );
        didWarnAboutReservedActionType = true;
      }
      originalDispatch(...a);
    };
  }
  connection.subscribe((message) => {
    var _a2;
    switch (message.type) {
      case "ACTION":
        if (typeof message.payload !== "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return parseJsonThen(
          message.payload,
          (action) => {
            if (action.type === "__setState") {
              if (store === void 0) {
                setStateFromDevtools(action.state);
                return;
              }
              if (Object.keys(action.state).length !== 1) {
                console.error(
                  '\n                    [zustand devtools middleware] Unsupported __setState action format. \n                    When using \'store\' option in devtools(), the \'state\' should have only one key, which is a value of \'store\' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }\n                    '
                );
              }
              const stateFromDevtools = action.state[store];
              if (stateFromDevtools === void 0 || stateFromDevtools === null) {
                return;
              }
              if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) {
                setStateFromDevtools(stateFromDevtools);
              }
              return;
            }
            if (!api.dispatchFromDevtools) return;
            if (typeof api.dispatch !== "function") return;
            api.dispatch(action);
          }
        );
      case "DISPATCH":
        switch (message.payload.type) {
          case "RESET":
            setStateFromDevtools(initialState);
            if (store === void 0) {
              return connection == null ? void 0 : connection.init(api.getState());
            }
            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
          case "COMMIT":
            if (store === void 0) {
              connection == null ? void 0 : connection.init(api.getState());
              return;
            }
            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
          case "ROLLBACK":
            return parseJsonThen(message.state, (state) => {
              if (store === void 0) {
                setStateFromDevtools(state);
                connection == null ? void 0 : connection.init(api.getState());
                return;
              }
              setStateFromDevtools(state[store]);
              connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return parseJsonThen(message.state, (state) => {
              if (store === void 0) {
                setStateFromDevtools(state);
                return;
              }
              if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) {
                setStateFromDevtools(state[store]);
              }
            });
          case "IMPORT_STATE": {
            const { nextLiftedState } = message.payload;
            const lastComputedState = (_a2 = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a2.state;
            if (!lastComputedState) return;
            if (store === void 0) {
              setStateFromDevtools(lastComputedState);
            } else {
              setStateFromDevtools(lastComputedState[store]);
            }
            connection == null ? void 0 : connection.send(
              null,
              // FIXME no-any
              nextLiftedState
            );
            return;
          }
          case "PAUSE_RECORDING":
            return isRecording = !isRecording;
        }
        return;
    }
  });
  return initialState;
};
const devtools = devtoolsImpl;
const parseJsonThen = (stringified, f) => {
  let parsed;
  try {
    parsed = JSON.parse(stringified);
  } catch (e) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      e
    );
  }
  if (parsed !== void 0) f(parsed);
};
const subscribeWithSelectorImpl = (fn) => (set2, get2, api) => {
  const origSubscribe = api.subscribe;
  api.subscribe = (selector, optListener, options) => {
    let listener = selector;
    if (optListener) {
      const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
      let currentSlice = selector(api.getState());
      listener = (state) => {
        const nextSlice = selector(state);
        if (!equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          optListener(currentSlice = nextSlice, previousSlice);
        }
      };
      if (options == null ? void 0 : options.fireImmediately) {
        optListener(currentSlice, currentSlice);
      }
    }
    return origSubscribe(listener);
  };
  const initialState = fn(set2, get2, api);
  return initialState;
};
const subscribeWithSelector = subscribeWithSelectorImpl;
function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (_e) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a2;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, void 0);
      };
      const str = (_a2 = storage.getItem(name)) != null ? _a2 : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(
      name,
      JSON.stringify(newValue, void 0)
    ),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
const oldImpl = (config, baseOptions) => (set2, get2, api) => {
  let options = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage;
  try {
    storage = options.getStorage();
  } catch (_e) {
  }
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          "[zustand persist middleware] Unable to update item '".concat(options.name, "', the given storage is currently unavailable.")
        );
        set2(...args);
      },
      get2,
      api
    );
  }
  const thenableSerialize = toThenable(options.serialize);
  const setItem = () => {
    const state = options.partialize({ ...get2() });
    let errorInSync;
    const thenable = thenableSerialize({ state, version: options.version }).then(
      (serializedValue) => storage.setItem(options.name, serializedValue)
    ).catch((e) => {
      errorInSync = e;
    });
    if (errorInSync) {
      throw errorInSync;
    }
    return thenable;
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set2(...args);
      void setItem();
    },
    get2,
    api
  );
  let stateFromStorage;
  const hydrate = () => {
    var _a2;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => cb(get2()));
    const postRehydrationCallback = ((_a2 = options.onRehydrateStorage) == null ? void 0 : _a2.call(options, get2())) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
      if (storageValue) {
        return options.deserialize(storageValue);
      }
    }).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a22;
      stateFromStorage = options.merge(
        migratedState,
        (_a22 = get2()) != null ? _a22 : configResult
      );
      set2(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.getStorage) {
        storage = newOptions.getStorage();
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  hydrate();
  return stateFromStorage || configResult;
};
const newImpl = (config, baseOptions) => (set2, get2, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          "[zustand persist middleware] Unable to update item '".concat(options.name, "', the given storage is currently unavailable.")
        );
        set2(...args);
      },
      get2,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get2() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set2(...args);
      void setItem();
    },
    get2,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate = () => {
    var _a2, _b2;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a22;
      return cb((_a22 = get2()) != null ? _a22 : configResult);
    });
    const postRehydrationCallback = ((_b2 = options.onRehydrateStorage) == null ? void 0 : _b2.call(options, (_a2 = get2()) != null ? _a2 : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return [
              true,
              options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version
              )
            ];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, void 0];
    }).then((migrationResult) => {
      var _a22;
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a22 = get2()) != null ? _a22 : configResult
      );
      set2(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get2();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
const persistImpl = (config, baseOptions) => {
  if ("getStorage" in baseOptions || "serialize" in baseOptions || "deserialize" in baseOptions) {
    if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
      );
    }
    return oldImpl(config, baseOptions);
  }
  return newImpl(config, baseOptions);
};
const persist = persistImpl;
({ "LEGACY": false });
function shallow$1(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (const [key, value] of objA) {
      if (!Object.is(value, objB.get(key))) {
        return false;
      }
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (const value of objA) {
      if (!objB.has(value)) {
        return false;
      }
    }
    return true;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (const keyA of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) {
      return false;
    }
  }
  return true;
}
const createCache = (lastNumberWeakMap) => {
  return (collection, nextNumber) => {
    lastNumberWeakMap.set(collection, nextNumber);
    return nextNumber;
  };
};
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER;
const TWO_TO_THE_POWER_OF_TWENTY_NINE = 536870912;
const TWO_TO_THE_POWER_OF_THIRTY = TWO_TO_THE_POWER_OF_TWENTY_NINE * 2;
const createGenerateUniqueNumber = (cache2, lastNumberWeakMap) => {
  return (collection) => {
    const lastNumber = lastNumberWeakMap.get(collection);
    let nextNumber = lastNumber === void 0 ? collection.size : lastNumber < TWO_TO_THE_POWER_OF_THIRTY ? lastNumber + 1 : 0;
    if (!collection.has(nextNumber)) {
      return cache2(collection, nextNumber);
    }
    if (collection.size < TWO_TO_THE_POWER_OF_TWENTY_NINE) {
      while (collection.has(nextNumber)) {
        nextNumber = Math.floor(Math.random() * TWO_TO_THE_POWER_OF_THIRTY);
      }
      return cache2(collection, nextNumber);
    }
    if (collection.size > MAX_SAFE_INTEGER) {
      throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
    }
    while (collection.has(nextNumber)) {
      nextNumber = Math.floor(Math.random() * MAX_SAFE_INTEGER);
    }
    return cache2(collection, nextNumber);
  };
};
const LAST_NUMBER_WEAK_MAP = /* @__PURE__ */ new WeakMap();
const cache = createCache(LAST_NUMBER_WEAK_MAP);
const generateUniqueNumber = createGenerateUniqueNumber(cache, LAST_NUMBER_WEAK_MAP);
const isMessagePort = (sender) => {
  return typeof sender.start === "function";
};
const PORT_MAP = /* @__PURE__ */ new WeakMap();
const extendBrokerImplementation = (partialBrokerImplementation) => ({
  ...partialBrokerImplementation,
  connect: ({ call }) => {
    return async () => {
      const { port1, port2 } = new MessageChannel();
      const portId = await call("connect", { port: port1 }, [port1]);
      PORT_MAP.set(port2, portId);
      return port2;
    };
  },
  disconnect: ({ call }) => {
    return async (port) => {
      const portId = PORT_MAP.get(port);
      if (portId === void 0) {
        throw new Error("The given port is not connected.");
      }
      await call("disconnect", { portId });
    };
  },
  isSupported: ({ call }) => {
    return () => call("isSupported");
  }
});
const ONGOING_REQUESTS = /* @__PURE__ */ new WeakMap();
const createOrGetOngoingRequests = (sender) => {
  if (ONGOING_REQUESTS.has(sender)) {
    return ONGOING_REQUESTS.get(sender);
  }
  const ongoingRequests = /* @__PURE__ */ new Map();
  ONGOING_REQUESTS.set(sender, ongoingRequests);
  return ongoingRequests;
};
const createBroker = (brokerImplementation) => {
  const fullBrokerImplementation = extendBrokerImplementation(brokerImplementation);
  return (sender) => {
    const ongoingRequests = createOrGetOngoingRequests(sender);
    sender.addEventListener("message", (({ data: message }) => {
      const { id } = message;
      if (id !== null && ongoingRequests.has(id)) {
        const { reject, resolve } = ongoingRequests.get(id);
        ongoingRequests.delete(id);
        if (message.error === void 0) {
          resolve(message.result);
        } else {
          reject(new Error(message.error.message));
        }
      }
    }));
    if (isMessagePort(sender)) {
      sender.start();
    }
    const call = (method, params = null, transferables = []) => {
      return new Promise((resolve, reject) => {
        const id = generateUniqueNumber(ongoingRequests);
        ongoingRequests.set(id, { reject, resolve });
        if (params === null) {
          sender.postMessage({ id, method }, transferables);
        } else {
          sender.postMessage({ id, method, params }, transferables);
        }
      });
    };
    const notify = (method, params, transferables = []) => {
      sender.postMessage({ id: null, method, params }, transferables);
    };
    let functions = {};
    for (const [key, handler] of Object.entries(fullBrokerImplementation)) {
      functions = { ...functions, [key]: handler({ call, notify }) };
    }
    return { ...functions };
  };
};
const scheduledIntervalsState = /* @__PURE__ */ new Map([[0, null]]);
const scheduledTimeoutsState = /* @__PURE__ */ new Map([[0, null]]);
const wrap = createBroker({
  clearInterval: ({ call }) => {
    return (timerId) => {
      if (typeof scheduledIntervalsState.get(timerId) === "symbol") {
        scheduledIntervalsState.set(timerId, null);
        call("clear", { timerId, timerType: "interval" }).then(() => {
          scheduledIntervalsState.delete(timerId);
        });
      }
    };
  },
  clearTimeout: ({ call }) => {
    return (timerId) => {
      if (typeof scheduledTimeoutsState.get(timerId) === "symbol") {
        scheduledTimeoutsState.set(timerId, null);
        call("clear", { timerId, timerType: "timeout" }).then(() => {
          scheduledTimeoutsState.delete(timerId);
        });
      }
    };
  },
  setInterval: ({ call }) => {
    return (func, delay = 0, ...args) => {
      const symbol = Symbol();
      const timerId = generateUniqueNumber(scheduledIntervalsState);
      scheduledIntervalsState.set(timerId, symbol);
      const schedule = () => call("set", {
        delay,
        now: performance.timeOrigin + performance.now(),
        timerId,
        timerType: "interval"
      }).then(() => {
        const state = scheduledIntervalsState.get(timerId);
        if (state === void 0) {
          throw new Error("The timer is in an undefined state.");
        }
        if (state === symbol) {
          func(...args);
          if (scheduledIntervalsState.get(timerId) === symbol) {
            schedule();
          }
        }
      });
      schedule();
      return timerId;
    };
  },
  setTimeout: ({ call }) => {
    return (func, delay = 0, ...args) => {
      const symbol = Symbol();
      const timerId = generateUniqueNumber(scheduledTimeoutsState);
      scheduledTimeoutsState.set(timerId, symbol);
      call("set", {
        delay,
        now: performance.timeOrigin + performance.now(),
        timerId,
        timerType: "timeout"
      }).then(() => {
        const state = scheduledTimeoutsState.get(timerId);
        if (state === void 0) {
          throw new Error("The timer is in an undefined state.");
        }
        if (state === symbol) {
          scheduledTimeoutsState.delete(timerId);
          func(...args);
        }
      });
      return timerId;
    };
  }
});
const load = (url) => {
  const worker2 = new Worker(url);
  return wrap(worker2);
};
const createLoadOrReturnBroker = (loadBroker, worker2) => {
  let broker = null;
  return () => {
    if (broker !== null) {
      return broker;
    }
    const blob = new Blob([worker2], { type: "application/javascript; charset=utf-8" });
    const url = URL.createObjectURL(blob);
    broker = loadBroker(url);
    setTimeout(() => URL.revokeObjectURL(url));
    return broker;
  };
};
const worker = '(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o(\'The handler of the method called "\'.concat(t,\'" returned an unexpected result.\'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o(\'The requested method called "\'.concat(e,\'" is not supported.\'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o(\'The handler of the method called "\'.concat(t,\'" returned no required result.\'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o(\'The specified parameter called "portId" with the given value "\'.concat(e,\'" does not identify a port connected to this worker.\'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();';
const loadOrReturnBroker = createLoadOrReturnBroker(load, worker);
const clearInterval$1 = (timerId) => loadOrReturnBroker().clearInterval(timerId);
const setInterval$1 = (...args) => loadOrReturnBroker().setInterval(...args);
const DEVTOOLS_CONFIG$f = {
  name: "".concat(document.title, " - useNetworkStore"),
  store: "NetworkStore",
  serialize: {
    options: true
  }
};
const useNetworkStore = create()(
  devtools(
    (_) => ({
      isConnected: false,
      isExpired: false,
      isMultiSession: false,
      // repeat login
      isIdleTimeout: false,
      isMaintenance: false,
      forceShowIdleModal: false
    }),
    DEVTOOLS_CONFIG$f
  )
);
const useTimerStore = create()(
  // Adding devtools will cause the Redux extension to crash
  subscribeWithSelector((set2) => ({
    currentMs: 0,
    currentSec: 0,
    timerId: null,
    timers: [],
    refresh: (timestamp) => set2({
      currentMs: timestamp,
      currentSec: Math.ceil(timestamp / 1e3)
    }),
    addTimer: (timerId, endTimeInSec, callback) => {
      if (useTimerStore.getState().timers.find((t2) => t2.id === timerId)) {
        throw new Error("Timer with id ".concat(timerId, " already exists"));
      }
      set2((state) => ({
        ...state,
        timers: [...state.timers, { id: timerId, endTimeInSec, callback }]
      }));
    },
    removeTimer: (timerId) => set2((state) => ({
      ...state,
      timers: state.timers.filter((timer2) => timer2.id !== timerId)
    }))
  }))
);
var howler = {};
/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
var hasRequiredHowler;
function requireHowler() {
  if (hasRequiredHowler) return howler;
  hasRequiredHowler = 1;
  (function(exports) {
    (function() {
      var HowlerGlobal2 = function() {
        this.init();
      };
      HowlerGlobal2.prototype = {
        /**
         * Initialize the global Howler object.
         * @return {Howler}
         */
        init: function() {
          var self = this || Howler2;
          self._counter = 1e3;
          self._html5AudioPool = [];
          self.html5PoolSize = 10;
          self._codecs = {};
          self._howls = [];
          self._muted = false;
          self._volume = 1;
          self._canPlayEvent = "canplaythrough";
          self._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
          self.masterGain = null;
          self.noAudio = false;
          self.usingWebAudio = true;
          self.autoSuspend = true;
          self.ctx = null;
          self.autoUnlock = true;
          self._setup();
          return self;
        },
        /**
         * Get/set the global volume for all sounds.
         * @param  {Float} vol Volume from 0.0 to 1.0.
         * @return {Howler/Float}     Returns self or current volume.
         */
        volume: function(vol) {
          var self = this || Howler2;
          vol = parseFloat(vol);
          if (!self.ctx) {
            setupAudioContext();
          }
          if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
            self._volume = vol;
            if (self._muted) {
              return self;
            }
            if (self.usingWebAudio) {
              self.masterGain.gain.setValueAtTime(vol, Howler2.ctx.currentTime);
            }
            for (var i = 0; i < self._howls.length; i++) {
              if (!self._howls[i]._webAudio) {
                var ids = self._howls[i]._getSoundIds();
                for (var j = 0; j < ids.length; j++) {
                  var sound = self._howls[i]._soundById(ids[j]);
                  if (sound && sound._node) {
                    sound._node.volume = sound._volume * vol;
                  }
                }
              }
            }
            return self;
          }
          return self._volume;
        },
        /**
         * Handle muting and unmuting globally.
         * @param  {Boolean} muted Is muted or not.
         */
        mute: function(muted) {
          var self = this || Howler2;
          if (!self.ctx) {
            setupAudioContext();
          }
          self._muted = muted;
          if (self.usingWebAudio) {
            self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler2.ctx.currentTime);
          }
          for (var i = 0; i < self._howls.length; i++) {
            if (!self._howls[i]._webAudio) {
              var ids = self._howls[i]._getSoundIds();
              for (var j = 0; j < ids.length; j++) {
                var sound = self._howls[i]._soundById(ids[j]);
                if (sound && sound._node) {
                  sound._node.muted = muted ? true : sound._muted;
                }
              }
            }
          }
          return self;
        },
        /**
         * Handle stopping all sounds globally.
         */
        stop: function() {
          var self = this || Howler2;
          for (var i = 0; i < self._howls.length; i++) {
            self._howls[i].stop();
          }
          return self;
        },
        /**
         * Unload and destroy all currently loaded Howl objects.
         * @return {Howler}
         */
        unload: function() {
          var self = this || Howler2;
          for (var i = self._howls.length - 1; i >= 0; i--) {
            self._howls[i].unload();
          }
          if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== "undefined") {
            self.ctx.close();
            self.ctx = null;
            setupAudioContext();
          }
          return self;
        },
        /**
         * Check for codec support of specific extension.
         * @param  {String} ext Audio file extention.
         * @return {Boolean}
         */
        codecs: function(ext) {
          return (this || Howler2)._codecs[ext.replace(/^x-/, "")];
        },
        /**
         * Setup various state values for global tracking.
         * @return {Howler}
         */
        _setup: function() {
          var self = this || Howler2;
          self.state = self.ctx ? self.ctx.state || "suspended" : "suspended";
          self._autoSuspend();
          if (!self.usingWebAudio) {
            if (typeof Audio !== "undefined") {
              try {
                var test = new Audio();
                if (typeof test.oncanplaythrough === "undefined") {
                  self._canPlayEvent = "canplay";
                }
              } catch (e) {
                self.noAudio = true;
              }
            } else {
              self.noAudio = true;
            }
          }
          try {
            var test = new Audio();
            if (test.muted) {
              self.noAudio = true;
            }
          } catch (e) {
          }
          if (!self.noAudio) {
            self._setupCodecs();
          }
          return self;
        },
        /**
         * Check for browser support for various codecs and cache the results.
         * @return {Howler}
         */
        _setupCodecs: function() {
          var self = this || Howler2;
          var audioTest = null;
          try {
            audioTest = typeof Audio !== "undefined" ? new Audio() : null;
          } catch (err) {
            return self;
          }
          if (!audioTest || typeof audioTest.canPlayType !== "function") {
            return self;
          }
          var mpegTest = audioTest.canPlayType("audio/mpeg;").replace(/^no$/, "");
          var ua = self._navigator ? self._navigator.userAgent : "";
          var checkOpera = ua.match(/OPR\/(\d+)/g);
          var isOldOpera = checkOpera && parseInt(checkOpera[0].split("/")[1], 10) < 33;
          var checkSafari = ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1;
          var safariVersion = ua.match(/Version\/(.*?) /);
          var isOldSafari = checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15;
          self._codecs = {
            mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType("audio/mp3;").replace(/^no$/, ""))),
            mpeg: !!mpegTest,
            opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!audioTest.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!audioTest.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(audioTest.canPlayType("audio/x-m4b;") || audioTest.canPlayType("audio/m4b;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(audioTest.canPlayType("audio/x-mp4;") || audioTest.canPlayType("audio/mp4;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(audioTest.canPlayType("audio/x-flac;") || audioTest.canPlayType("audio/flac;")).replace(/^no$/, "")
          };
          return self;
        },
        /**
         * Some browsers/devices will only allow audio to be played after a user interaction.
         * Attempt to automatically unlock audio on the first user interaction.
         * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
         * @return {Howler}
         */
        _unlockAudio: function() {
          var self = this || Howler2;
          if (self._audioUnlocked || !self.ctx) {
            return;
          }
          self._audioUnlocked = false;
          self.autoUnlock = false;
          if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
            self._mobileUnloaded = true;
            self.unload();
          }
          self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
          var unlock = function(e) {
            while (self._html5AudioPool.length < self.html5PoolSize) {
              try {
                var audioNode = new Audio();
                audioNode._unlocked = true;
                self._releaseHtml5Audio(audioNode);
              } catch (e2) {
                self.noAudio = true;
                break;
              }
            }
            for (var i = 0; i < self._howls.length; i++) {
              if (!self._howls[i]._webAudio) {
                var ids = self._howls[i]._getSoundIds();
                for (var j = 0; j < ids.length; j++) {
                  var sound = self._howls[i]._soundById(ids[j]);
                  if (sound && sound._node && !sound._node._unlocked) {
                    sound._node._unlocked = true;
                    sound._node.load();
                  }
                }
              }
            }
            self._autoResume();
            var source = self.ctx.createBufferSource();
            source.buffer = self._scratchBuffer;
            source.connect(self.ctx.destination);
            if (typeof source.start === "undefined") {
              source.noteOn(0);
            } else {
              source.start(0);
            }
            if (typeof self.ctx.resume === "function") {
              self.ctx.resume();
            }
            source.onended = function() {
              source.disconnect(0);
              self._audioUnlocked = true;
              document.removeEventListener("touchstart", unlock, true);
              document.removeEventListener("touchend", unlock, true);
              document.removeEventListener("click", unlock, true);
              document.removeEventListener("keydown", unlock, true);
              for (var i2 = 0; i2 < self._howls.length; i2++) {
                self._howls[i2]._emit("unlock");
              }
            };
          };
          document.addEventListener("touchstart", unlock, true);
          document.addEventListener("touchend", unlock, true);
          document.addEventListener("click", unlock, true);
          document.addEventListener("keydown", unlock, true);
          return self;
        },
        /**
         * Get an unlocked HTML5 Audio object from the pool. If none are left,
         * return a new Audio object and throw a warning.
         * @return {Audio} HTML5 Audio object.
         */
        _obtainHtml5Audio: function() {
          var self = this || Howler2;
          if (self._html5AudioPool.length) {
            return self._html5AudioPool.pop();
          }
          var testPlay = new Audio().play();
          if (testPlay && typeof Promise !== "undefined" && (testPlay instanceof Promise || typeof testPlay.then === "function")) {
            testPlay.catch(function() {
              console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
            });
          }
          return new Audio();
        },
        /**
         * Return an activated HTML5 Audio object to the pool.
         * @return {Howler}
         */
        _releaseHtml5Audio: function(audio) {
          var self = this || Howler2;
          if (audio._unlocked) {
            self._html5AudioPool.push(audio);
          }
          return self;
        },
        /**
         * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
         * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
         * @return {Howler}
         */
        _autoSuspend: function() {
          var self = this;
          if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === "undefined" || !Howler2.usingWebAudio) {
            return;
          }
          for (var i = 0; i < self._howls.length; i++) {
            if (self._howls[i]._webAudio) {
              for (var j = 0; j < self._howls[i]._sounds.length; j++) {
                if (!self._howls[i]._sounds[j]._paused) {
                  return self;
                }
              }
            }
          }
          if (self._suspendTimer) {
            clearTimeout(self._suspendTimer);
          }
          self._suspendTimer = setTimeout(function() {
            if (!self.autoSuspend) {
              return;
            }
            self._suspendTimer = null;
            self.state = "suspending";
            var handleSuspension = function() {
              self.state = "suspended";
              if (self._resumeAfterSuspend) {
                delete self._resumeAfterSuspend;
                self._autoResume();
              }
            };
            self.ctx.suspend().then(handleSuspension, handleSuspension);
          }, 3e4);
          return self;
        },
        /**
         * Automatically resume the Web Audio AudioContext when a new sound is played.
         * @return {Howler}
         */
        _autoResume: function() {
          var self = this;
          if (!self.ctx || typeof self.ctx.resume === "undefined" || !Howler2.usingWebAudio) {
            return;
          }
          if (self.state === "running" && self.ctx.state !== "interrupted" && self._suspendTimer) {
            clearTimeout(self._suspendTimer);
            self._suspendTimer = null;
          } else if (self.state === "suspended" || self.state === "running" && self.ctx.state === "interrupted") {
            self.ctx.resume().then(function() {
              self.state = "running";
              for (var i = 0; i < self._howls.length; i++) {
                self._howls[i]._emit("resume");
              }
            });
            if (self._suspendTimer) {
              clearTimeout(self._suspendTimer);
              self._suspendTimer = null;
            }
          } else if (self.state === "suspending") {
            self._resumeAfterSuspend = true;
          }
          return self;
        }
      };
      var Howler2 = new HowlerGlobal2();
      var Howl2 = function(o) {
        var self = this;
        if (!o.src || o.src.length === 0) {
          console.error("An array of source files must be passed with any new Howl.");
          return;
        }
        self.init(o);
      };
      Howl2.prototype = {
        /**
         * Initialize a new Howl group object.
         * @param  {Object} o Passed in properties for this group.
         * @return {Howl}
         */
        init: function(o) {
          var self = this;
          if (!Howler2.ctx) {
            setupAudioContext();
          }
          self._autoplay = o.autoplay || false;
          self._format = typeof o.format !== "string" ? o.format : [o.format];
          self._html5 = o.html5 || false;
          self._muted = o.mute || false;
          self._loop = o.loop || false;
          self._pool = o.pool || 5;
          self._preload = typeof o.preload === "boolean" || o.preload === "metadata" ? o.preload : true;
          self._rate = o.rate || 1;
          self._sprite = o.sprite || {};
          self._src = typeof o.src !== "string" ? o.src : [o.src];
          self._volume = o.volume !== void 0 ? o.volume : 1;
          self._xhr = {
            method: o.xhr && o.xhr.method ? o.xhr.method : "GET",
            headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
            withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false
          };
          self._duration = 0;
          self._state = "unloaded";
          self._sounds = [];
          self._endTimers = {};
          self._queue = [];
          self._playLock = false;
          self._onend = o.onend ? [{ fn: o.onend }] : [];
          self._onfade = o.onfade ? [{ fn: o.onfade }] : [];
          self._onload = o.onload ? [{ fn: o.onload }] : [];
          self._onloaderror = o.onloaderror ? [{ fn: o.onloaderror }] : [];
          self._onplayerror = o.onplayerror ? [{ fn: o.onplayerror }] : [];
          self._onpause = o.onpause ? [{ fn: o.onpause }] : [];
          self._onplay = o.onplay ? [{ fn: o.onplay }] : [];
          self._onstop = o.onstop ? [{ fn: o.onstop }] : [];
          self._onmute = o.onmute ? [{ fn: o.onmute }] : [];
          self._onvolume = o.onvolume ? [{ fn: o.onvolume }] : [];
          self._onrate = o.onrate ? [{ fn: o.onrate }] : [];
          self._onseek = o.onseek ? [{ fn: o.onseek }] : [];
          self._onunlock = o.onunlock ? [{ fn: o.onunlock }] : [];
          self._onresume = [];
          self._webAudio = Howler2.usingWebAudio && !self._html5;
          if (typeof Howler2.ctx !== "undefined" && Howler2.ctx && Howler2.autoUnlock) {
            Howler2._unlockAudio();
          }
          Howler2._howls.push(self);
          if (self._autoplay) {
            self._queue.push({
              event: "play",
              action: function() {
                self.play();
              }
            });
          }
          if (self._preload && self._preload !== "none") {
            self.load();
          }
          return self;
        },
        /**
         * Load the audio file.
         * @return {Howler}
         */
        load: function() {
          var self = this;
          var url = null;
          if (Howler2.noAudio) {
            self._emit("loaderror", null, "No audio support.");
            return;
          }
          if (typeof self._src === "string") {
            self._src = [self._src];
          }
          for (var i = 0; i < self._src.length; i++) {
            var ext, str;
            if (self._format && self._format[i]) {
              ext = self._format[i];
            } else {
              str = self._src[i];
              if (typeof str !== "string") {
                self._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                continue;
              }
              ext = /^data:audio\/([^;,]+);/i.exec(str);
              if (!ext) {
                ext = /\.([^.]+)$/.exec(str.split("?", 1)[0]);
              }
              if (ext) {
                ext = ext[1].toLowerCase();
              }
            }
            if (!ext) {
              console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
            }
            if (ext && Howler2.codecs(ext)) {
              url = self._src[i];
              break;
            }
          }
          if (!url) {
            self._emit("loaderror", null, "No codec support for selected audio sources.");
            return;
          }
          self._src = url;
          self._state = "loading";
          if (window.location.protocol === "https:" && url.slice(0, 5) === "http:") {
            self._html5 = true;
            self._webAudio = false;
          }
          new Sound2(self);
          if (self._webAudio) {
            loadBuffer(self);
          }
          return self;
        },
        /**
         * Play a sound or resume previous playback.
         * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Number}          Sound ID.
         */
        play: function(sprite, internal) {
          var self = this;
          var id = null;
          if (typeof sprite === "number") {
            id = sprite;
            sprite = null;
          } else if (typeof sprite === "string" && self._state === "loaded" && !self._sprite[sprite]) {
            return null;
          } else if (typeof sprite === "undefined") {
            sprite = "__default";
            if (!self._playLock) {
              var num = 0;
              for (var i = 0; i < self._sounds.length; i++) {
                if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                  num++;
                  id = self._sounds[i]._id;
                }
              }
              if (num === 1) {
                sprite = null;
              } else {
                id = null;
              }
            }
          }
          var sound = id ? self._soundById(id) : self._inactiveSound();
          if (!sound) {
            return null;
          }
          if (id && !sprite) {
            sprite = sound._sprite || "__default";
          }
          if (self._state !== "loaded") {
            sound._sprite = sprite;
            sound._ended = false;
            var soundId = sound._id;
            self._queue.push({
              event: "play",
              action: function() {
                self.play(soundId);
              }
            });
            return soundId;
          }
          if (id && !sound._paused) {
            if (!internal) {
              self._loadQueue("play");
            }
            return sound._id;
          }
          if (self._webAudio) {
            Howler2._autoResume();
          }
          var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1e3);
          var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3 - seek);
          var timeout = duration * 1e3 / Math.abs(sound._rate);
          var start = self._sprite[sprite][0] / 1e3;
          var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3;
          sound._sprite = sprite;
          sound._ended = false;
          var setParams = function() {
            sound._paused = false;
            sound._seek = seek;
            sound._start = start;
            sound._stop = stop;
            sound._loop = !!(sound._loop || self._sprite[sprite][2]);
          };
          if (seek >= stop) {
            self._ended(sound);
            return;
          }
          var node = sound._node;
          if (self._webAudio) {
            var playWebAudio = function() {
              self._playLock = false;
              setParams();
              self._refreshBuffer(sound);
              var vol = sound._muted || self._muted ? 0 : sound._volume;
              node.gain.setValueAtTime(vol, Howler2.ctx.currentTime);
              sound._playStart = Howler2.ctx.currentTime;
              if (typeof node.bufferSource.start === "undefined") {
                sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
              } else {
                sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
              }
              if (timeout !== Infinity) {
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
              }
              if (!internal) {
                setTimeout(function() {
                  self._emit("play", sound._id);
                  self._loadQueue();
                }, 0);
              }
            };
            if (Howler2.state === "running" && Howler2.ctx.state !== "interrupted") {
              playWebAudio();
            } else {
              self._playLock = true;
              self.once("resume", playWebAudio);
              self._clearTimer(sound._id);
            }
          } else {
            var playHtml5 = function() {
              node.currentTime = seek;
              node.muted = sound._muted || self._muted || Howler2._muted || node.muted;
              node.volume = sound._volume * Howler2.volume();
              node.playbackRate = sound._rate;
              try {
                var play = node.play();
                if (play && typeof Promise !== "undefined" && (play instanceof Promise || typeof play.then === "function")) {
                  self._playLock = true;
                  setParams();
                  play.then(function() {
                    self._playLock = false;
                    node._unlocked = true;
                    if (!internal) {
                      self._emit("play", sound._id);
                    } else {
                      self._loadQueue();
                    }
                  }).catch(function() {
                    self._playLock = false;
                    self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    sound._ended = true;
                    sound._paused = true;
                  });
                } else if (!internal) {
                  self._playLock = false;
                  setParams();
                  self._emit("play", sound._id);
                }
                node.playbackRate = sound._rate;
                if (node.paused) {
                  self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  return;
                }
                if (sprite !== "__default" || sound._loop) {
                  self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                } else {
                  self._endTimers[sound._id] = function() {
                    self._ended(sound);
                    node.removeEventListener("ended", self._endTimers[sound._id], false);
                  };
                  node.addEventListener("ended", self._endTimers[sound._id], false);
                }
              } catch (err) {
                self._emit("playerror", sound._id, err);
              }
            };
            if (node.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
              node.src = self._src;
              node.load();
            }
            var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler2._navigator.isCocoonJS;
            if (node.readyState >= 3 || loadedNoReadyState) {
              playHtml5();
            } else {
              self._playLock = true;
              self._state = "loading";
              var listener = function() {
                self._state = "loaded";
                playHtml5();
                node.removeEventListener(Howler2._canPlayEvent, listener, false);
              };
              node.addEventListener(Howler2._canPlayEvent, listener, false);
              self._clearTimer(sound._id);
            }
          }
          return sound._id;
        },
        /**
         * Pause playback and save current position.
         * @param  {Number} id The sound ID (empty to pause all in group).
         * @return {Howl}
         */
        pause: function(id) {
          var self = this;
          if (self._state !== "loaded" || self._playLock) {
            self._queue.push({
              event: "pause",
              action: function() {
                self.pause(id);
              }
            });
            return self;
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            self._clearTimer(ids[i]);
            var sound = self._soundById(ids[i]);
            if (sound && !sound._paused) {
              sound._seek = self.seek(ids[i]);
              sound._rateSeek = 0;
              sound._paused = true;
              self._stopFade(ids[i]);
              if (sound._node) {
                if (self._webAudio) {
                  if (!sound._node.bufferSource) {
                    continue;
                  }
                  if (typeof sound._node.bufferSource.stop === "undefined") {
                    sound._node.bufferSource.noteOff(0);
                  } else {
                    sound._node.bufferSource.stop(0);
                  }
                  self._cleanBuffer(sound._node);
                } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                  sound._node.pause();
                }
              }
            }
            if (!arguments[1]) {
              self._emit("pause", sound ? sound._id : null);
            }
          }
          return self;
        },
        /**
         * Stop playback and reset to start.
         * @param  {Number} id The sound ID (empty to stop all in group).
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Howl}
         */
        stop: function(id, internal) {
          var self = this;
          if (self._state !== "loaded" || self._playLock) {
            self._queue.push({
              event: "stop",
              action: function() {
                self.stop(id);
              }
            });
            return self;
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            self._clearTimer(ids[i]);
            var sound = self._soundById(ids[i]);
            if (sound) {
              sound._seek = sound._start || 0;
              sound._rateSeek = 0;
              sound._paused = true;
              sound._ended = true;
              self._stopFade(ids[i]);
              if (sound._node) {
                if (self._webAudio) {
                  if (sound._node.bufferSource) {
                    if (typeof sound._node.bufferSource.stop === "undefined") {
                      sound._node.bufferSource.noteOff(0);
                    } else {
                      sound._node.bufferSource.stop(0);
                    }
                    self._cleanBuffer(sound._node);
                  }
                } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                  sound._node.currentTime = sound._start || 0;
                  sound._node.pause();
                  if (sound._node.duration === Infinity) {
                    self._clearSound(sound._node);
                  }
                }
              }
              if (!internal) {
                self._emit("stop", sound._id);
              }
            }
          }
          return self;
        },
        /**
         * Mute/unmute a single sound or all sounds in this Howl group.
         * @param  {Boolean} muted Set to true to mute and false to unmute.
         * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
         * @return {Howl}
         */
        mute: function(muted, id) {
          var self = this;
          if (self._state !== "loaded" || self._playLock) {
            self._queue.push({
              event: "mute",
              action: function() {
                self.mute(muted, id);
              }
            });
            return self;
          }
          if (typeof id === "undefined") {
            if (typeof muted === "boolean") {
              self._muted = muted;
            } else {
              return self._muted;
            }
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            var sound = self._soundById(ids[i]);
            if (sound) {
              sound._muted = muted;
              if (sound._interval) {
                self._stopFade(sound._id);
              }
              if (self._webAudio && sound._node) {
                sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler2.ctx.currentTime);
              } else if (sound._node) {
                sound._node.muted = Howler2._muted ? true : muted;
              }
              self._emit("mute", sound._id);
            }
          }
          return self;
        },
        /**
         * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
         *   volume() -> Returns the group's volume value.
         *   volume(id) -> Returns the sound id's current volume.
         *   volume(vol) -> Sets the volume of all sounds in this Howl group.
         *   volume(vol, id) -> Sets the volume of passed sound id.
         * @return {Howl/Number} Returns self or current volume.
         */
        volume: function() {
          var self = this;
          var args = arguments;
          var vol, id;
          if (args.length === 0) {
            return self._volume;
          } else if (args.length === 1 || args.length === 2 && typeof args[1] === "undefined") {
            var ids = self._getSoundIds();
            var index = ids.indexOf(args[0]);
            if (index >= 0) {
              id = parseInt(args[0], 10);
            } else {
              vol = parseFloat(args[0]);
            }
          } else if (args.length >= 2) {
            vol = parseFloat(args[0]);
            id = parseInt(args[1], 10);
          }
          var sound;
          if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
            if (self._state !== "loaded" || self._playLock) {
              self._queue.push({
                event: "volume",
                action: function() {
                  self.volume.apply(self, args);
                }
              });
              return self;
            }
            if (typeof id === "undefined") {
              self._volume = vol;
            }
            id = self._getSoundIds(id);
            for (var i = 0; i < id.length; i++) {
              sound = self._soundById(id[i]);
              if (sound) {
                sound._volume = vol;
                if (!args[2]) {
                  self._stopFade(id[i]);
                }
                if (self._webAudio && sound._node && !sound._muted) {
                  sound._node.gain.setValueAtTime(vol, Howler2.ctx.currentTime);
                } else if (sound._node && !sound._muted) {
                  sound._node.volume = vol * Howler2.volume();
                }
                self._emit("volume", sound._id);
              }
            }
          } else {
            sound = id ? self._soundById(id) : self._sounds[0];
            return sound ? sound._volume : 0;
          }
          return self;
        },
        /**
         * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id (omit to fade all sounds).
         * @return {Howl}
         */
        fade: function(from, to, len, id) {
          var self = this;
          if (self._state !== "loaded" || self._playLock) {
            self._queue.push({
              event: "fade",
              action: function() {
                self.fade(from, to, len, id);
              }
            });
            return self;
          }
          from = Math.min(Math.max(0, parseFloat(from)), 1);
          to = Math.min(Math.max(0, parseFloat(to)), 1);
          len = parseFloat(len);
          self.volume(from, id);
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            var sound = self._soundById(ids[i]);
            if (sound) {
              if (!id) {
                self._stopFade(ids[i]);
              }
              if (self._webAudio && !sound._muted) {
                var currentTime = Howler2.ctx.currentTime;
                var end = currentTime + len / 1e3;
                sound._volume = from;
                sound._node.gain.setValueAtTime(from, currentTime);
                sound._node.gain.linearRampToValueAtTime(to, end);
              }
              self._startFadeInterval(sound, from, to, len, ids[i], typeof id === "undefined");
            }
          }
          return self;
        },
        /**
         * Starts the internal interval to fade a sound.
         * @param  {Object} sound Reference to sound to fade.
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id to fade.
         * @param  {Boolean} isGroup   If true, set the volume on the group.
         */
        _startFadeInterval: function(sound, from, to, len, id, isGroup) {
          var self = this;
          var vol = from;
          var diff = to - from;
          var steps = Math.abs(diff / 0.01);
          var stepLen = Math.max(4, steps > 0 ? len / steps : len);
          var lastTick = Date.now();
          sound._fadeTo = to;
          sound._interval = setInterval(function() {
            var tick = (Date.now() - lastTick) / len;
            lastTick = Date.now();
            vol += diff * tick;
            vol = Math.round(vol * 100) / 100;
            if (diff < 0) {
              vol = Math.max(to, vol);
            } else {
              vol = Math.min(to, vol);
            }
            if (self._webAudio) {
              sound._volume = vol;
            } else {
              self.volume(vol, sound._id, true);
            }
            if (isGroup) {
              self._volume = vol;
            }
            if (to < from && vol <= to || to > from && vol >= to) {
              clearInterval(sound._interval);
              sound._interval = null;
              sound._fadeTo = null;
              self.volume(to, sound._id);
              self._emit("fade", sound._id);
            }
          }, stepLen);
        },
        /**
         * Internal method that stops the currently playing fade when
         * a new fade starts, volume is changed or the sound is stopped.
         * @param  {Number} id The sound id.
         * @return {Howl}
         */
        _stopFade: function(id) {
          var self = this;
          var sound = self._soundById(id);
          if (sound && sound._interval) {
            if (self._webAudio) {
              sound._node.gain.cancelScheduledValues(Howler2.ctx.currentTime);
            }
            clearInterval(sound._interval);
            sound._interval = null;
            self.volume(sound._fadeTo, id);
            sound._fadeTo = null;
            self._emit("fade", id);
          }
          return self;
        },
        /**
         * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
         *   loop() -> Returns the group's loop value.
         *   loop(id) -> Returns the sound id's loop value.
         *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
         *   loop(loop, id) -> Sets the loop value of passed sound id.
         * @return {Howl/Boolean} Returns self or current loop value.
         */
        loop: function() {
          var self = this;
          var args = arguments;
          var loop, id, sound;
          if (args.length === 0) {
            return self._loop;
          } else if (args.length === 1) {
            if (typeof args[0] === "boolean") {
              loop = args[0];
              self._loop = loop;
            } else {
              sound = self._soundById(parseInt(args[0], 10));
              return sound ? sound._loop : false;
            }
          } else if (args.length === 2) {
            loop = args[0];
            id = parseInt(args[1], 10);
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            sound = self._soundById(ids[i]);
            if (sound) {
              sound._loop = loop;
              if (self._webAudio && sound._node && sound._node.bufferSource) {
                sound._node.bufferSource.loop = loop;
                if (loop) {
                  sound._node.bufferSource.loopStart = sound._start || 0;
                  sound._node.bufferSource.loopEnd = sound._stop;
                  if (self.playing(ids[i])) {
                    self.pause(ids[i], true);
                    self.play(ids[i], true);
                  }
                }
              }
            }
          }
          return self;
        },
        /**
         * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   rate() -> Returns the first sound node's current playback rate.
         *   rate(id) -> Returns the sound id's current playback rate.
         *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
         *   rate(rate, id) -> Sets the playback rate of passed sound id.
         * @return {Howl/Number} Returns self or the current playback rate.
         */
        rate: function() {
          var self = this;
          var args = arguments;
          var rate, id;
          if (args.length === 0) {
            id = self._sounds[0]._id;
          } else if (args.length === 1) {
            var ids = self._getSoundIds();
            var index = ids.indexOf(args[0]);
            if (index >= 0) {
              id = parseInt(args[0], 10);
            } else {
              rate = parseFloat(args[0]);
            }
          } else if (args.length === 2) {
            rate = parseFloat(args[0]);
            id = parseInt(args[1], 10);
          }
          var sound;
          if (typeof rate === "number") {
            if (self._state !== "loaded" || self._playLock) {
              self._queue.push({
                event: "rate",
                action: function() {
                  self.rate.apply(self, args);
                }
              });
              return self;
            }
            if (typeof id === "undefined") {
              self._rate = rate;
            }
            id = self._getSoundIds(id);
            for (var i = 0; i < id.length; i++) {
              sound = self._soundById(id[i]);
              if (sound) {
                if (self.playing(id[i])) {
                  sound._rateSeek = self.seek(id[i]);
                  sound._playStart = self._webAudio ? Howler2.ctx.currentTime : sound._playStart;
                }
                sound._rate = rate;
                if (self._webAudio && sound._node && sound._node.bufferSource) {
                  sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler2.ctx.currentTime);
                } else if (sound._node) {
                  sound._node.playbackRate = rate;
                }
                var seek = self.seek(id[i]);
                var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1e3 - seek;
                var timeout = duration * 1e3 / Math.abs(sound._rate);
                if (self._endTimers[id[i]] || !sound._paused) {
                  self._clearTimer(id[i]);
                  self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                }
                self._emit("rate", sound._id);
              }
            }
          } else {
            sound = self._soundById(id);
            return sound ? sound._rate : self._rate;
          }
          return self;
        },
        /**
         * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   seek() -> Returns the first sound node's current seek position.
         *   seek(id) -> Returns the sound id's current seek position.
         *   seek(seek) -> Sets the seek position of the first sound node.
         *   seek(seek, id) -> Sets the seek position of passed sound id.
         * @return {Howl/Number} Returns self or the current seek position.
         */
        seek: function() {
          var self = this;
          var args = arguments;
          var seek, id;
          if (args.length === 0) {
            if (self._sounds.length) {
              id = self._sounds[0]._id;
            }
          } else if (args.length === 1) {
            var ids = self._getSoundIds();
            var index = ids.indexOf(args[0]);
            if (index >= 0) {
              id = parseInt(args[0], 10);
            } else if (self._sounds.length) {
              id = self._sounds[0]._id;
              seek = parseFloat(args[0]);
            }
          } else if (args.length === 2) {
            seek = parseFloat(args[0]);
            id = parseInt(args[1], 10);
          }
          if (typeof id === "undefined") {
            return 0;
          }
          if (typeof seek === "number" && (self._state !== "loaded" || self._playLock)) {
            self._queue.push({
              event: "seek",
              action: function() {
                self.seek.apply(self, args);
              }
            });
            return self;
          }
          var sound = self._soundById(id);
          if (sound) {
            if (typeof seek === "number" && seek >= 0) {
              var playing = self.playing(id);
              if (playing) {
                self.pause(id, true);
              }
              sound._seek = seek;
              sound._ended = false;
              self._clearTimer(id);
              if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
                sound._node.currentTime = seek;
              }
              var seekAndEmit = function() {
                if (playing) {
                  self.play(id, true);
                }
                self._emit("seek", id);
              };
              if (playing && !self._webAudio) {
                var emitSeek = function() {
                  if (!self._playLock) {
                    seekAndEmit();
                  } else {
                    setTimeout(emitSeek, 0);
                  }
                };
                setTimeout(emitSeek, 0);
              } else {
                seekAndEmit();
              }
            } else {
              if (self._webAudio) {
                var realTime = self.playing(id) ? Howler2.ctx.currentTime - sound._playStart : 0;
                var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
              } else {
                return sound._node.currentTime;
              }
            }
          }
          return self;
        },
        /**
         * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
         * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
         * @return {Boolean} True if playing and false if not.
         */
        playing: function(id) {
          var self = this;
          if (typeof id === "number") {
            var sound = self._soundById(id);
            return sound ? !sound._paused : false;
          }
          for (var i = 0; i < self._sounds.length; i++) {
            if (!self._sounds[i]._paused) {
              return true;
            }
          }
          return false;
        },
        /**
         * Get the duration of this sound. Passing a sound id will return the sprite duration.
         * @param  {Number} id The sound id to check. If none is passed, return full source duration.
         * @return {Number} Audio duration in seconds.
         */
        duration: function(id) {
          var self = this;
          var duration = self._duration;
          var sound = self._soundById(id);
          if (sound) {
            duration = self._sprite[sound._sprite][1] / 1e3;
          }
          return duration;
        },
        /**
         * Returns the current loaded state of this Howl.
         * @return {String} 'unloaded', 'loading', 'loaded'
         */
        state: function() {
          return this._state;
        },
        /**
         * Unload and destroy the current Howl object.
         * This will immediately stop all sound instances attached to this group.
         */
        unload: function() {
          var self = this;
          var sounds2 = self._sounds;
          for (var i = 0; i < sounds2.length; i++) {
            if (!sounds2[i]._paused) {
              self.stop(sounds2[i]._id);
            }
            if (!self._webAudio) {
              self._clearSound(sounds2[i]._node);
              sounds2[i]._node.removeEventListener("error", sounds2[i]._errorFn, false);
              sounds2[i]._node.removeEventListener(Howler2._canPlayEvent, sounds2[i]._loadFn, false);
              sounds2[i]._node.removeEventListener("ended", sounds2[i]._endFn, false);
              Howler2._releaseHtml5Audio(sounds2[i]._node);
            }
            delete sounds2[i]._node;
            self._clearTimer(sounds2[i]._id);
          }
          var index = Howler2._howls.indexOf(self);
          if (index >= 0) {
            Howler2._howls.splice(index, 1);
          }
          var remCache = true;
          for (i = 0; i < Howler2._howls.length; i++) {
            if (Howler2._howls[i]._src === self._src || self._src.indexOf(Howler2._howls[i]._src) >= 0) {
              remCache = false;
              break;
            }
          }
          if (cache2 && remCache) {
            delete cache2[self._src];
          }
          Howler2.noAudio = false;
          self._state = "unloaded";
          self._sounds = [];
          self = null;
          return null;
        },
        /**
         * Listen to a custom event.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
         * @return {Howl}
         */
        on: function(event, fn, id, once) {
          var self = this;
          var events = self["_on" + event];
          if (typeof fn === "function") {
            events.push(once ? { id, fn, once } : { id, fn });
          }
          return self;
        },
        /**
         * Remove a custom event. Call without parameters to remove all events.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to remove. Leave empty to remove all.
         * @param  {Number}   id    (optional) Only remove events for this sound.
         * @return {Howl}
         */
        off: function(event, fn, id) {
          var self = this;
          var events = self["_on" + event];
          var i = 0;
          if (typeof fn === "number") {
            id = fn;
            fn = null;
          }
          if (fn || id) {
            for (i = 0; i < events.length; i++) {
              var isId = id === events[i].id;
              if (fn === events[i].fn && isId || !fn && isId) {
                events.splice(i, 1);
                break;
              }
            }
          } else if (event) {
            self["_on" + event] = [];
          } else {
            var keys = Object.keys(self);
            for (i = 0; i < keys.length; i++) {
              if (keys[i].indexOf("_on") === 0 && Array.isArray(self[keys[i]])) {
                self[keys[i]] = [];
              }
            }
          }
          return self;
        },
        /**
         * Listen to a custom event and remove it once fired.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @return {Howl}
         */
        once: function(event, fn, id) {
          var self = this;
          self.on(event, fn, id, 1);
          return self;
        },
        /**
         * Emit all events of a specific type and pass the sound id.
         * @param  {String} event Event name.
         * @param  {Number} id    Sound ID.
         * @param  {Number} msg   Message to go with event.
         * @return {Howl}
         */
        _emit: function(event, id, msg) {
          var self = this;
          var events = self["_on" + event];
          for (var i = events.length - 1; i >= 0; i--) {
            if (!events[i].id || events[i].id === id || event === "load") {
              setTimeout((function(fn) {
                fn.call(this, id, msg);
              }).bind(self, events[i].fn), 0);
              if (events[i].once) {
                self.off(event, events[i].fn, events[i].id);
              }
            }
          }
          self._loadQueue(event);
          return self;
        },
        /**
         * Queue of actions initiated before the sound has loaded.
         * These will be called in sequence, with the next only firing
         * after the previous has finished executing (even if async like play).
         * @return {Howl}
         */
        _loadQueue: function(event) {
          var self = this;
          if (self._queue.length > 0) {
            var task = self._queue[0];
            if (task.event === event) {
              self._queue.shift();
              self._loadQueue();
            }
            if (!event) {
              task.action();
            }
          }
          return self;
        },
        /**
         * Fired when playback ends at the end of the duration.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _ended: function(sound) {
          var self = this;
          var sprite = sound._sprite;
          if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
            setTimeout(self._ended.bind(self, sound), 100);
            return self;
          }
          var loop = !!(sound._loop || self._sprite[sprite][2]);
          self._emit("end", sound._id);
          if (!self._webAudio && loop) {
            self.stop(sound._id, true).play(sound._id);
          }
          if (self._webAudio && loop) {
            self._emit("play", sound._id);
            sound._seek = sound._start || 0;
            sound._rateSeek = 0;
            sound._playStart = Howler2.ctx.currentTime;
            var timeout = (sound._stop - sound._start) * 1e3 / Math.abs(sound._rate);
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }
          if (self._webAudio && !loop) {
            sound._paused = true;
            sound._ended = true;
            sound._seek = sound._start || 0;
            sound._rateSeek = 0;
            self._clearTimer(sound._id);
            self._cleanBuffer(sound._node);
            Howler2._autoSuspend();
          }
          if (!self._webAudio && !loop) {
            self.stop(sound._id, true);
          }
          return self;
        },
        /**
         * Clear the end timer for a sound playback.
         * @param  {Number} id The sound ID.
         * @return {Howl}
         */
        _clearTimer: function(id) {
          var self = this;
          if (self._endTimers[id]) {
            if (typeof self._endTimers[id] !== "function") {
              clearTimeout(self._endTimers[id]);
            } else {
              var sound = self._soundById(id);
              if (sound && sound._node) {
                sound._node.removeEventListener("ended", self._endTimers[id], false);
              }
            }
            delete self._endTimers[id];
          }
          return self;
        },
        /**
         * Return the sound identified by this ID, or return null.
         * @param  {Number} id Sound ID
         * @return {Object}    Sound object or null.
         */
        _soundById: function(id) {
          var self = this;
          for (var i = 0; i < self._sounds.length; i++) {
            if (id === self._sounds[i]._id) {
              return self._sounds[i];
            }
          }
          return null;
        },
        /**
         * Return an inactive sound from the pool or create a new one.
         * @return {Sound} Sound playback object.
         */
        _inactiveSound: function() {
          var self = this;
          self._drain();
          for (var i = 0; i < self._sounds.length; i++) {
            if (self._sounds[i]._ended) {
              return self._sounds[i].reset();
            }
          }
          return new Sound2(self);
        },
        /**
         * Drain excess inactive sounds from the pool.
         */
        _drain: function() {
          var self = this;
          var limit = self._pool;
          var cnt = 0;
          var i = 0;
          if (self._sounds.length < limit) {
            return;
          }
          for (i = 0; i < self._sounds.length; i++) {
            if (self._sounds[i]._ended) {
              cnt++;
            }
          }
          for (i = self._sounds.length - 1; i >= 0; i--) {
            if (cnt <= limit) {
              return;
            }
            if (self._sounds[i]._ended) {
              if (self._webAudio && self._sounds[i]._node) {
                self._sounds[i]._node.disconnect(0);
              }
              self._sounds.splice(i, 1);
              cnt--;
            }
          }
        },
        /**
         * Get all ID's from the sounds pool.
         * @param  {Number} id Only return one ID if one is passed.
         * @return {Array}    Array of IDs.
         */
        _getSoundIds: function(id) {
          var self = this;
          if (typeof id === "undefined") {
            var ids = [];
            for (var i = 0; i < self._sounds.length; i++) {
              ids.push(self._sounds[i]._id);
            }
            return ids;
          } else {
            return [id];
          }
        },
        /**
         * Load the sound back into the buffer source.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _refreshBuffer: function(sound) {
          var self = this;
          sound._node.bufferSource = Howler2.ctx.createBufferSource();
          sound._node.bufferSource.buffer = cache2[self._src];
          if (sound._panner) {
            sound._node.bufferSource.connect(sound._panner);
          } else {
            sound._node.bufferSource.connect(sound._node);
          }
          sound._node.bufferSource.loop = sound._loop;
          if (sound._loop) {
            sound._node.bufferSource.loopStart = sound._start || 0;
            sound._node.bufferSource.loopEnd = sound._stop || 0;
          }
          sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler2.ctx.currentTime);
          return self;
        },
        /**
         * Prevent memory leaks by cleaning up the buffer source after playback.
         * @param  {Object} node Sound's audio node containing the buffer source.
         * @return {Howl}
         */
        _cleanBuffer: function(node) {
          var self = this;
          var isIOS2 = Howler2._navigator && Howler2._navigator.vendor.indexOf("Apple") >= 0;
          if (!node.bufferSource) {
            return self;
          }
          if (Howler2._scratchBuffer && node.bufferSource) {
            node.bufferSource.onended = null;
            node.bufferSource.disconnect(0);
            if (isIOS2) {
              try {
                node.bufferSource.buffer = Howler2._scratchBuffer;
              } catch (e) {
              }
            }
          }
          node.bufferSource = null;
          return self;
        },
        /**
         * Set the source to a 0-second silence to stop any downloading (except in IE).
         * @param  {Object} node Audio node to clear.
         */
        _clearSound: function(node) {
          var checkIE = /MSIE |Trident\//.test(Howler2._navigator && Howler2._navigator.userAgent);
          if (!checkIE) {
            node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
          }
        }
      };
      var Sound2 = function(howl) {
        this._parent = howl;
        this.init();
      };
      Sound2.prototype = {
        /**
         * Initialize a new Sound object.
         * @return {Sound}
         */
        init: function() {
          var self = this;
          var parent = self._parent;
          self._muted = parent._muted;
          self._loop = parent._loop;
          self._volume = parent._volume;
          self._rate = parent._rate;
          self._seek = 0;
          self._paused = true;
          self._ended = true;
          self._sprite = "__default";
          self._id = ++Howler2._counter;
          parent._sounds.push(self);
          self.create();
          return self;
        },
        /**
         * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
         * @return {Sound}
         */
        create: function() {
          var self = this;
          var parent = self._parent;
          var volume = Howler2._muted || self._muted || self._parent._muted ? 0 : self._volume;
          if (parent._webAudio) {
            self._node = typeof Howler2.ctx.createGain === "undefined" ? Howler2.ctx.createGainNode() : Howler2.ctx.createGain();
            self._node.gain.setValueAtTime(volume, Howler2.ctx.currentTime);
            self._node.paused = true;
            self._node.connect(Howler2.masterGain);
          } else if (!Howler2.noAudio) {
            self._node = Howler2._obtainHtml5Audio();
            self._errorFn = self._errorListener.bind(self);
            self._node.addEventListener("error", self._errorFn, false);
            self._loadFn = self._loadListener.bind(self);
            self._node.addEventListener(Howler2._canPlayEvent, self._loadFn, false);
            self._endFn = self._endListener.bind(self);
            self._node.addEventListener("ended", self._endFn, false);
            self._node.src = parent._src;
            self._node.preload = parent._preload === true ? "auto" : parent._preload;
            self._node.volume = volume * Howler2.volume();
            self._node.load();
          }
          return self;
        },
        /**
         * Reset the parameters of this sound to the original state (for recycle).
         * @return {Sound}
         */
        reset: function() {
          var self = this;
          var parent = self._parent;
          self._muted = parent._muted;
          self._loop = parent._loop;
          self._volume = parent._volume;
          self._rate = parent._rate;
          self._seek = 0;
          self._rateSeek = 0;
          self._paused = true;
          self._ended = true;
          self._sprite = "__default";
          self._id = ++Howler2._counter;
          return self;
        },
        /**
         * HTML5 Audio error listener callback.
         */
        _errorListener: function() {
          var self = this;
          self._parent._emit("loaderror", self._id, self._node.error ? self._node.error.code : 0);
          self._node.removeEventListener("error", self._errorFn, false);
        },
        /**
         * HTML5 Audio canplaythrough listener callback.
         */
        _loadListener: function() {
          var self = this;
          var parent = self._parent;
          parent._duration = Math.ceil(self._node.duration * 10) / 10;
          if (Object.keys(parent._sprite).length === 0) {
            parent._sprite = { __default: [0, parent._duration * 1e3] };
          }
          if (parent._state !== "loaded") {
            parent._state = "loaded";
            parent._emit("load");
            parent._loadQueue();
          }
          self._node.removeEventListener(Howler2._canPlayEvent, self._loadFn, false);
        },
        /**
         * HTML5 Audio ended listener callback.
         */
        _endListener: function() {
          var self = this;
          var parent = self._parent;
          if (parent._duration === Infinity) {
            parent._duration = Math.ceil(self._node.duration * 10) / 10;
            if (parent._sprite.__default[1] === Infinity) {
              parent._sprite.__default[1] = parent._duration * 1e3;
            }
            parent._ended(self);
          }
          self._node.removeEventListener("ended", self._endFn, false);
        }
      };
      var cache2 = {};
      var loadBuffer = function(self) {
        var url = self._src;
        if (cache2[url]) {
          self._duration = cache2[url].duration;
          loadSound(self);
          return;
        }
        if (/^data:[^;]+;base64,/.test(url)) {
          var data = atob(url.split(",")[1]);
          var dataView = new Uint8Array(data.length);
          for (var i = 0; i < data.length; ++i) {
            dataView[i] = data.charCodeAt(i);
          }
          decodeAudioData(dataView.buffer, self);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open(self._xhr.method, url, true);
          xhr.withCredentials = self._xhr.withCredentials;
          xhr.responseType = "arraybuffer";
          if (self._xhr.headers) {
            Object.keys(self._xhr.headers).forEach(function(key) {
              xhr.setRequestHeader(key, self._xhr.headers[key]);
            });
          }
          xhr.onload = function() {
            var code = (xhr.status + "")[0];
            if (code !== "0" && code !== "2" && code !== "3") {
              self._emit("loaderror", null, "Failed loading audio file with status: " + xhr.status + ".");
              return;
            }
            decodeAudioData(xhr.response, self);
          };
          xhr.onerror = function() {
            if (self._webAudio) {
              self._html5 = true;
              self._webAudio = false;
              self._sounds = [];
              delete cache2[url];
              self.load();
            }
          };
          safeXhrSend(xhr);
        }
      };
      var safeXhrSend = function(xhr) {
        try {
          xhr.send();
        } catch (e) {
          xhr.onerror();
        }
      };
      var decodeAudioData = function(arraybuffer, self) {
        var error = function() {
          self._emit("loaderror", null, "Decoding audio data failed.");
        };
        var success = function(buffer) {
          if (buffer && self._sounds.length > 0) {
            cache2[self._src] = buffer;
            loadSound(self, buffer);
          } else {
            error();
          }
        };
        if (typeof Promise !== "undefined" && Howler2.ctx.decodeAudioData.length === 1) {
          Howler2.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
        } else {
          Howler2.ctx.decodeAudioData(arraybuffer, success, error);
        }
      };
      var loadSound = function(self, buffer) {
        if (buffer && !self._duration) {
          self._duration = buffer.duration;
        }
        if (Object.keys(self._sprite).length === 0) {
          self._sprite = { __default: [0, self._duration * 1e3] };
        }
        if (self._state !== "loaded") {
          self._state = "loaded";
          self._emit("load");
          self._loadQueue();
        }
      };
      var setupAudioContext = function() {
        if (!Howler2.usingWebAudio) {
          return;
        }
        try {
          if (typeof AudioContext !== "undefined") {
            Howler2.ctx = new AudioContext();
          } else if (typeof webkitAudioContext !== "undefined") {
            Howler2.ctx = new webkitAudioContext();
          } else {
            Howler2.usingWebAudio = false;
          }
        } catch (e) {
          Howler2.usingWebAudio = false;
        }
        if (!Howler2.ctx) {
          Howler2.usingWebAudio = false;
        }
        var iOS = /iP(hone|od|ad)/.test(Howler2._navigator && Howler2._navigator.platform);
        var appVersion = Howler2._navigator && Howler2._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var version = appVersion ? parseInt(appVersion[1], 10) : null;
        if (iOS && version && version < 9) {
          var safari = /safari/.test(Howler2._navigator && Howler2._navigator.userAgent.toLowerCase());
          if (Howler2._navigator && !safari) {
            Howler2.usingWebAudio = false;
          }
        }
        if (Howler2.usingWebAudio) {
          Howler2.masterGain = typeof Howler2.ctx.createGain === "undefined" ? Howler2.ctx.createGainNode() : Howler2.ctx.createGain();
          Howler2.masterGain.gain.setValueAtTime(Howler2._muted ? 0 : Howler2._volume, Howler2.ctx.currentTime);
          Howler2.masterGain.connect(Howler2.ctx.destination);
        }
        Howler2._setup();
      };
      {
        exports.Howler = Howler2;
        exports.Howl = Howl2;
      }
      if (typeof commonjsGlobal !== "undefined") {
        commonjsGlobal.HowlerGlobal = HowlerGlobal2;
        commonjsGlobal.Howler = Howler2;
        commonjsGlobal.Howl = Howl2;
        commonjsGlobal.Sound = Sound2;
      } else if (typeof window !== "undefined") {
        window.HowlerGlobal = HowlerGlobal2;
        window.Howler = Howler2;
        window.Howl = Howl2;
        window.Sound = Sound2;
      }
    })();
    /*!
     *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
     *  
     *  howler.js v2.2.4
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     */
    (function() {
      HowlerGlobal.prototype._pos = [0, 0, 0];
      HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
      HowlerGlobal.prototype.stereo = function(pan) {
        var self = this;
        if (!self.ctx || !self.ctx.listener) {
          return self;
        }
        for (var i = self._howls.length - 1; i >= 0; i--) {
          self._howls[i].stereo(pan);
        }
        return self;
      };
      HowlerGlobal.prototype.pos = function(x, y, z) {
        var self = this;
        if (!self.ctx || !self.ctx.listener) {
          return self;
        }
        y = typeof y !== "number" ? self._pos[1] : y;
        z = typeof z !== "number" ? self._pos[2] : z;
        if (typeof x === "number") {
          self._pos = [x, y, z];
          if (typeof self.ctx.listener.positionX !== "undefined") {
            self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
            self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
            self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
          } else {
            self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
          }
        } else {
          return self._pos;
        }
        return self;
      };
      HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
        var self = this;
        if (!self.ctx || !self.ctx.listener) {
          return self;
        }
        var or = self._orientation;
        y = typeof y !== "number" ? or[1] : y;
        z = typeof z !== "number" ? or[2] : z;
        xUp = typeof xUp !== "number" ? or[3] : xUp;
        yUp = typeof yUp !== "number" ? or[4] : yUp;
        zUp = typeof zUp !== "number" ? or[5] : zUp;
        if (typeof x === "number") {
          self._orientation = [x, y, z, xUp, yUp, zUp];
          if (typeof self.ctx.listener.forwardX !== "undefined") {
            self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
          } else {
            self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
          }
        } else {
          return or;
        }
        return self;
      };
      Howl.prototype.init = /* @__PURE__ */ (function(_super) {
        return function(o) {
          var self = this;
          self._orientation = o.orientation || [1, 0, 0];
          self._stereo = o.stereo || null;
          self._pos = o.pos || null;
          self._pannerAttr = {
            coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : 360,
            coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : 360,
            coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : 0,
            distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : "inverse",
            maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : 1e4,
            panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : "HRTF",
            refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : 1,
            rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : 1
          };
          self._onstereo = o.onstereo ? [{ fn: o.onstereo }] : [];
          self._onpos = o.onpos ? [{ fn: o.onpos }] : [];
          self._onorientation = o.onorientation ? [{ fn: o.onorientation }] : [];
          return _super.call(this, o);
        };
      })(Howl.prototype.init);
      Howl.prototype.stereo = function(pan, id) {
        var self = this;
        if (!self._webAudio) {
          return self;
        }
        if (self._state !== "loaded") {
          self._queue.push({
            event: "stereo",
            action: function() {
              self.stereo(pan, id);
            }
          });
          return self;
        }
        var pannerType = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
        if (typeof id === "undefined") {
          if (typeof pan === "number") {
            self._stereo = pan;
            self._pos = [pan, 0, 0];
          } else {
            return self._stereo;
          }
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
          var sound = self._soundById(ids[i]);
          if (sound) {
            if (typeof pan === "number") {
              sound._stereo = pan;
              sound._pos = [pan, 0, 0];
              if (sound._node) {
                sound._pannerAttr.panningModel = "equalpower";
                if (!sound._panner || !sound._panner.pan) {
                  setupPanner(sound, pannerType);
                }
                if (pannerType === "spatial") {
                  if (typeof sound._panner.positionX !== "undefined") {
                    sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                    sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                    sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                  } else {
                    sound._panner.setPosition(pan, 0, 0);
                  }
                } else {
                  sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
                }
              }
              self._emit("stereo", sound._id);
            } else {
              return sound._stereo;
            }
          }
        }
        return self;
      };
      Howl.prototype.pos = function(x, y, z, id) {
        var self = this;
        if (!self._webAudio) {
          return self;
        }
        if (self._state !== "loaded") {
          self._queue.push({
            event: "pos",
            action: function() {
              self.pos(x, y, z, id);
            }
          });
          return self;
        }
        y = typeof y !== "number" ? 0 : y;
        z = typeof z !== "number" ? -0.5 : z;
        if (typeof id === "undefined") {
          if (typeof x === "number") {
            self._pos = [x, y, z];
          } else {
            return self._pos;
          }
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
          var sound = self._soundById(ids[i]);
          if (sound) {
            if (typeof x === "number") {
              sound._pos = [x, y, z];
              if (sound._node) {
                if (!sound._panner || sound._panner.pan) {
                  setupPanner(sound, "spatial");
                }
                if (typeof sound._panner.positionX !== "undefined") {
                  sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                  sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                  sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
                } else {
                  sound._panner.setPosition(x, y, z);
                }
              }
              self._emit("pos", sound._id);
            } else {
              return sound._pos;
            }
          }
        }
        return self;
      };
      Howl.prototype.orientation = function(x, y, z, id) {
        var self = this;
        if (!self._webAudio) {
          return self;
        }
        if (self._state !== "loaded") {
          self._queue.push({
            event: "orientation",
            action: function() {
              self.orientation(x, y, z, id);
            }
          });
          return self;
        }
        y = typeof y !== "number" ? self._orientation[1] : y;
        z = typeof z !== "number" ? self._orientation[2] : z;
        if (typeof id === "undefined") {
          if (typeof x === "number") {
            self._orientation = [x, y, z];
          } else {
            return self._orientation;
          }
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
          var sound = self._soundById(ids[i]);
          if (sound) {
            if (typeof x === "number") {
              sound._orientation = [x, y, z];
              if (sound._node) {
                if (!sound._panner) {
                  if (!sound._pos) {
                    sound._pos = self._pos || [0, 0, -0.5];
                  }
                  setupPanner(sound, "spatial");
                }
                if (typeof sound._panner.orientationX !== "undefined") {
                  sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                  sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                  sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
                } else {
                  sound._panner.setOrientation(x, y, z);
                }
              }
              self._emit("orientation", sound._id);
            } else {
              return sound._orientation;
            }
          }
        }
        return self;
      };
      Howl.prototype.pannerAttr = function() {
        var self = this;
        var args = arguments;
        var o, id, sound;
        if (!self._webAudio) {
          return self;
        }
        if (args.length === 0) {
          return self._pannerAttr;
        } else if (args.length === 1) {
          if (typeof args[0] === "object") {
            o = args[0];
            if (typeof id === "undefined") {
              if (!o.pannerAttr) {
                o.pannerAttr = {
                  coneInnerAngle: o.coneInnerAngle,
                  coneOuterAngle: o.coneOuterAngle,
                  coneOuterGain: o.coneOuterGain,
                  distanceModel: o.distanceModel,
                  maxDistance: o.maxDistance,
                  refDistance: o.refDistance,
                  rolloffFactor: o.rolloffFactor,
                  panningModel: o.panningModel
                };
              }
              self._pannerAttr = {
                coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== "undefined" ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== "undefined" ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                coneOuterGain: typeof o.pannerAttr.coneOuterGain !== "undefined" ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                distanceModel: typeof o.pannerAttr.distanceModel !== "undefined" ? o.pannerAttr.distanceModel : self._distanceModel,
                maxDistance: typeof o.pannerAttr.maxDistance !== "undefined" ? o.pannerAttr.maxDistance : self._maxDistance,
                refDistance: typeof o.pannerAttr.refDistance !== "undefined" ? o.pannerAttr.refDistance : self._refDistance,
                rolloffFactor: typeof o.pannerAttr.rolloffFactor !== "undefined" ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                panningModel: typeof o.pannerAttr.panningModel !== "undefined" ? o.pannerAttr.panningModel : self._panningModel
              };
            }
          } else {
            sound = self._soundById(parseInt(args[0], 10));
            return sound ? sound._pannerAttr : self._pannerAttr;
          }
        } else if (args.length === 2) {
          o = args[0];
          id = parseInt(args[1], 10);
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
          sound = self._soundById(ids[i]);
          if (sound) {
            var pa = sound._pannerAttr;
            pa = {
              coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : pa.coneInnerAngle,
              coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : pa.coneOuterAngle,
              coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : pa.coneOuterGain,
              distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : pa.distanceModel,
              maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : pa.maxDistance,
              refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : pa.refDistance,
              rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : pa.rolloffFactor,
              panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : pa.panningModel
            };
            var panner = sound._panner;
            if (!panner) {
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }
              setupPanner(sound, "spatial");
              panner = sound._panner;
            }
            panner.coneInnerAngle = pa.coneInnerAngle;
            panner.coneOuterAngle = pa.coneOuterAngle;
            panner.coneOuterGain = pa.coneOuterGain;
            panner.distanceModel = pa.distanceModel;
            panner.maxDistance = pa.maxDistance;
            panner.refDistance = pa.refDistance;
            panner.rolloffFactor = pa.rolloffFactor;
            panner.panningModel = pa.panningModel;
          }
        }
        return self;
      };
      Sound.prototype.init = /* @__PURE__ */ (function(_super) {
        return function() {
          var self = this;
          var parent = self._parent;
          self._orientation = parent._orientation;
          self._stereo = parent._stereo;
          self._pos = parent._pos;
          self._pannerAttr = parent._pannerAttr;
          _super.call(this);
          if (self._stereo) {
            parent.stereo(self._stereo);
          } else if (self._pos) {
            parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
          }
        };
      })(Sound.prototype.init);
      Sound.prototype.reset = /* @__PURE__ */ (function(_super) {
        return function() {
          var self = this;
          var parent = self._parent;
          self._orientation = parent._orientation;
          self._stereo = parent._stereo;
          self._pos = parent._pos;
          self._pannerAttr = parent._pannerAttr;
          if (self._stereo) {
            parent.stereo(self._stereo);
          } else if (self._pos) {
            parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
          } else if (self._panner) {
            self._panner.disconnect(0);
            self._panner = void 0;
            parent._refreshBuffer(self);
          }
          return _super.call(this);
        };
      })(Sound.prototype.reset);
      var setupPanner = function(sound, type) {
        type = type || "spatial";
        if (type === "spatial") {
          sound._panner = Howler.ctx.createPanner();
          sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
          sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
          sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
          sound._panner.distanceModel = sound._pannerAttr.distanceModel;
          sound._panner.maxDistance = sound._pannerAttr.maxDistance;
          sound._panner.refDistance = sound._pannerAttr.refDistance;
          sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
          sound._panner.panningModel = sound._pannerAttr.panningModel;
          if (typeof sound._panner.positionX !== "undefined") {
            sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
            sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
            sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
          } else {
            sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
          }
          if (typeof sound._panner.orientationX !== "undefined") {
            sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
            sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
            sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
          } else {
            sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
          }
        } else {
          sound._panner = Howler.ctx.createStereoPanner();
          sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
        }
        sound._panner.connect(sound._node);
        if (!sound._paused) {
          sound._parent.pause(sound._id, true).play(sound._id, true);
        }
      };
    })();
  })(howler);
  return howler;
}
var howlerExports = requireHowler();
const sounds = /* @__PURE__ */ new Map();
const UISounds = new Set(
  [
    "click",
    "lastfive",
    "chiptrayOpen",
    "disabledAction",
    "double",
    "errorToast",
    "multipleBet",
    "bet",
    "choosingChip",
    ...Array.from({ length: 8 }, (_, i) => "slider".concat(i + 1)),
    ...Array.from({ length: 4 }, (_, i) => "stackingBet".concat(i + 1)),
    "normalToast",
    "undo",
    "rouletteBGM",
    "winEffect"
  ].map((name) => "sound_".concat(name))
);
const voiceOverSound = /* @__PURE__ */ new Set([
  "sound_lastBets",
  "sound_noMoreBets",
  "sound_placeYourBets",
  "sound_youWin",
  ...Array.from({ length: 37 }, (_, i) => "sound_".concat(i)),
  ...Array.from({ length: 6 }, (_, i) => "sound_D".concat(i + 1)),
  ...Array.from({ length: 6 }, (_, i) => "sound_TR".concat(i + 1))
]);
const getVolume = (key) => {
  if (key === "sound_rouletteBGM" || key === "sound_sicboBGM") return 0.25;
  if (UISounds.has(key)) return 1.8;
  if (voiceOverSound.has(key)) return 0.15;
  return 1;
};
const initSoundResource = (soundResource) => {
  let bgmRestarting = false;
  sounds.clear();
  Object.entries(soundResource).forEach(([key, { url }]) => {
    if (key === "sound_rouletteBGM" || key === "sound_sicboBGM") {
      const sound = new howlerExports.Howl({
        src: url,
        autoplay: true,
        volume: 0.25,
        html5: false,
        onend: () => {
          if (bgmRestarting) return;
          bgmRestarting = true;
          setTimeout(() => {
            sound.play();
            bgmRestarting = false;
          }, 50);
        }
      });
      sounds.set(key, sound);
    } else {
      sounds.set(
        key,
        new howlerExports.Howl({
          src: url,
          volume: getVolume(key),
          autoplay: false,
          html5: false
        })
      );
    }
  });
};
function playSound(list) {
  let dispose = false;
  let sound = void 0;
  let id = void 0;
  const next = (name) => {
    if (dispose) return Promise.resolve();
    return new Promise((resolve) => {
      if (!sounds.has(name)) {
        return resolve();
      }
      sound = sounds.get(name);
      id = sound == null ? void 0 : sound.play();
      sound == null ? void 0 : sound.once(
        "end",
        () => {
          resolve();
        },
        id
      );
    });
  };
  let promiser = Promise.resolve();
  list.forEach((item) => {
    const soundName = "sound_".concat(item);
    promiser = promiser.then(() => next(soundName));
  });
  return () => {
    dispose = true;
    sound == null ? void 0 : sound.stop(id);
  };
}
function setVolume(volume) {
  if (volume !== 0) {
    howlerExports.Howler._muted = false;
  }
  howlerExports.Howler.volume(volume);
}
let retryCount = 0;
function suspendAudio() {
  if (howlerExports.Howler.ctx) {
    howlerExports.Howler.ctx.suspend().then(() => {
      setTimeout(() => {
        howlerExports.Howler.ctx.resume();
      }, 100);
      retryCount = 0;
    }).catch((err) => {
      console.warn("AudioContext suspend failed:", err.name + ":", err.message);
      if (retryCount < 5) {
        suspendAudio();
        retryCount++;
      }
    });
  }
}
function setMute(mute) {
  howlerExports.Howler.mute(mute);
}
window.addEventListener("unhandledrejection", (event) => {
  if (!event.reason || typeof event.reason !== "object") return;
  const name = event.reason.name;
  const message = event.reason.message;
  if (name === "InvalidStateError" && message === "Failed to start the audio device") {
    console.log("audio error", name, message);
    setTimeout(() => {
      suspendAudio();
    }, 500);
  }
});
const TOAST_DURATION = 5e3;
const DEVTOOLS_CONFIG$e = {
  name: "".concat(document.title, " - useToastStore"),
  store: "ToastStore",
  serialize: {
    options: true
  }
};
const useToastStore = create()(
  devtools(
    (set2) => ({
      toastQueue: [],
      toastTimeouts: /* @__PURE__ */ new Map(),
      addToast: (type, msg, options) => {
        var _a2, _b2;
        const id = (_a2 = options == null ? void 0 : options.id) != null ? _a2 : "toast-".concat(Date.now(), "-").concat(Math.random().toString(36).substring(2, 9));
        const persistent = (_b2 = options == null ? void 0 : options.persistent) != null ? _b2 : false;
        const newToast = { id, type, msg, persistent };
        if (type === "error") {
          playSound(["errorToast"]);
        } else {
          playSound(["normalToast"]);
        }
        set2((state) => {
          const all = [...state.toastQueue, newToast];
          const persistentToasts = [];
          const normalToasts = [];
          for (const toast of all) {
            if (toast.persistent) persistentToasts.push(toast);
            else normalToasts.push(toast);
          }
          const updated = [...persistentToasts, ...normalToasts.slice(-5)];
          if (persistent) return { toastQueue: updated };
          const timeoutId = setTimeout(() => useToastStore.getState().dismissToast(id), TOAST_DURATION);
          const newTimeouts = new Map(state.toastTimeouts);
          newTimeouts.set(id, timeoutId);
          return {
            toastQueue: updated,
            toastTimeouts: newTimeouts
          };
        });
      },
      dismissToast: (id) => {
        set2((state) => {
          const timeoutId = state.toastTimeouts.get(id);
          const newTimeouts = new Map(state.toastTimeouts);
          if (timeoutId) {
            clearTimeout(timeoutId);
            newTimeouts.delete(id);
          }
          const newQueue = state.toastQueue.filter((toast) => toast.id !== id);
          return {
            toastQueue: newQueue,
            toastTimeouts: newTimeouts
          };
        });
      }
    }),
    DEVTOOLS_CONFIG$e
  )
);
function r(e) {
  var t2, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t2 = 0; t2 < o; t2++) e[t2] && (f = r(e[t2])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t2, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t2 = r(e)) && (n && (n += " "), n += t2);
  return n;
}
/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */
var purify_cjs;
var hasRequiredPurify_cjs;
function requirePurify_cjs() {
  if (hasRequiredPurify_cjs) return purify_cjs;
  hasRequiredPurify_cjs = 1;
  const {
    entries,
    setPrototypeOf,
    isFrozen: isFrozen2,
    getPrototypeOf: getPrototypeOf2,
    getOwnPropertyDescriptor
  } = Object;
  let {
    freeze: freeze2,
    seal,
    create: create2
  } = Object;
  let {
    apply,
    construct
  } = typeof Reflect !== "undefined" && Reflect;
  if (!freeze2) {
    freeze2 = function freeze3(x) {
      return x;
    };
  }
  if (!seal) {
    seal = function seal2(x) {
      return x;
    };
  }
  if (!apply) {
    apply = function apply2(func, thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      return func.apply(thisArg, args);
    };
  }
  if (!construct) {
    construct = function construct2(Func) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return new Func(...args);
    };
  }
  const arrayForEach = unapply(Array.prototype.forEach);
  const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
  const arrayPop = unapply(Array.prototype.pop);
  const arrayPush = unapply(Array.prototype.push);
  const arraySplice = unapply(Array.prototype.splice);
  const stringToLowerCase = unapply(String.prototype.toLowerCase);
  const stringToString = unapply(String.prototype.toString);
  const stringMatch = unapply(String.prototype.match);
  const stringReplace = unapply(String.prototype.replace);
  const stringIndexOf = unapply(String.prototype.indexOf);
  const stringTrim = unapply(String.prototype.trim);
  const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
  const regExpTest = unapply(RegExp.prototype.test);
  const typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function(thisArg) {
      if (thisArg instanceof RegExp) {
        thisArg.lastIndex = 0;
      }
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      return apply(func, thisArg, args);
    };
  }
  function unconstruct(Func) {
    return function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return construct(Func, args);
    };
  }
  function addToSet(set2, array) {
    let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
    if (setPrototypeOf) {
      setPrototypeOf(set2, null);
    }
    let l = array.length;
    while (l--) {
      let element = array[l];
      if (typeof element === "string") {
        const lcElement = transformCaseFunc(element);
        if (lcElement !== element) {
          if (!isFrozen2(array)) {
            array[l] = lcElement;
          }
          element = lcElement;
        }
      }
      set2[element] = true;
    }
    return set2;
  }
  function cleanArray(array) {
    for (let index = 0; index < array.length; index++) {
      const isPropertyExist = objectHasOwnProperty(array, index);
      if (!isPropertyExist) {
        array[index] = null;
      }
    }
    return array;
  }
  function clone(object) {
    const newObject = create2(null);
    for (const [property, value] of entries(object)) {
      const isPropertyExist = objectHasOwnProperty(object, property);
      if (isPropertyExist) {
        if (Array.isArray(value)) {
          newObject[property] = cleanArray(value);
        } else if (value && typeof value === "object" && value.constructor === Object) {
          newObject[property] = clone(value);
        } else {
          newObject[property] = value;
        }
      }
    }
    return newObject;
  }
  function lookupGetter(object, prop) {
    while (object !== null) {
      const desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === "function") {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf2(object);
    }
    function fallbackValue() {
      return null;
    }
    return fallbackValue;
  }
  const html$1 = freeze2(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
  const svg$1 = freeze2(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
  const svgFilters = freeze2(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
  const svgDisallowed = freeze2(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
  const mathMl$1 = freeze2(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
  const mathMlDisallowed = freeze2(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
  const text = freeze2(["#text"]);
  const html = freeze2(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
  const svg = freeze2(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
  const mathMl = freeze2(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
  const xml = freeze2(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
  const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
  const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
  const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
  const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
  const IS_ALLOWED_URI = seal(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    // eslint-disable-line no-useless-escape
  );
  const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  const ATTR_WHITESPACE = seal(
    /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
    // eslint-disable-line no-control-regex
  );
  const DOCTYPE_NAME = seal(/^html$/i);
  const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ARIA_ATTR,
    ATTR_WHITESPACE,
    CUSTOM_ELEMENT,
    DATA_ATTR,
    DOCTYPE_NAME,
    ERB_EXPR,
    IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA,
    MUSTACHE_EXPR,
    TMPLIT_EXPR
  });
  const NODE_TYPE = {
    element: 1,
    text: 3,
    // Deprecated
    progressingInstruction: 7,
    comment: 8,
    document: 9
  };
  const getGlobal = function getGlobal2() {
    return typeof window === "undefined" ? null : window;
  };
  const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
    if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
      return null;
    }
    let suffix = null;
    const ATTR_NAME = "data-tt-policy-suffix";
    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
      suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }
    const policyName = "dompurify" + (suffix ? "#" + suffix : "");
    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML(html2) {
          return html2;
        },
        createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      console.warn("TrustedTypes policy " + policyName + " could not be created.");
      return null;
    }
  };
  const _createHooksMap = function _createHooksMap2() {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    };
  };
  function createDOMPurify() {
    let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
    const DOMPurify2 = (root) => createDOMPurify(root);
    DOMPurify2.version = "3.3.0";
    DOMPurify2.removed = [];
    if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
      DOMPurify2.isSupported = false;
      return DOMPurify2;
    }
    let {
      document: document2
    } = window2;
    const originalDocument = document2;
    const currentScript = originalDocument.currentScript;
    const {
      DocumentFragment,
      HTMLTemplateElement,
      Node,
      Element,
      NodeFilter,
      NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
      HTMLFormElement,
      DOMParser,
      trustedTypes
    } = window2;
    const ElementPrototype = Element.prototype;
    const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
    const remove = lookupGetter(ElementPrototype, "remove");
    const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
    const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
    const getParentNode = lookupGetter(ElementPrototype, "parentNode");
    if (typeof HTMLTemplateElement === "function") {
      const template = document2.createElement("template");
      if (template.content && template.content.ownerDocument) {
        document2 = template.content.ownerDocument;
      }
    }
    let trustedTypesPolicy;
    let emptyHTML = "";
    const {
      implementation,
      createNodeIterator,
      createDocumentFragment,
      getElementsByTagName
    } = document2;
    const {
      importNode
    } = originalDocument;
    let hooks = _createHooksMap();
    DOMPurify2.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
    const {
      MUSTACHE_EXPR: MUSTACHE_EXPR2,
      ERB_EXPR: ERB_EXPR2,
      TMPLIT_EXPR: TMPLIT_EXPR2,
      DATA_ATTR: DATA_ATTR2,
      ARIA_ATTR: ARIA_ATTR2,
      IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
      ATTR_WHITESPACE: ATTR_WHITESPACE2,
      CUSTOM_ELEMENT: CUSTOM_ELEMENT2
    } = EXPRESSIONS;
    let {
      IS_ALLOWED_URI: IS_ALLOWED_URI$1
    } = EXPRESSIONS;
    let ALLOWED_TAGS = null;
    const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
    let ALLOWED_ATTR = null;
    const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
    let CUSTOM_ELEMENT_HANDLING = Object.seal(create2(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    let FORBID_TAGS = null;
    let FORBID_ATTR = null;
    const EXTRA_ELEMENT_HANDLING = Object.seal(create2(null, {
      tagCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      }
    }));
    let ALLOW_ARIA_ATTR = true;
    let ALLOW_DATA_ATTR = true;
    let ALLOW_UNKNOWN_PROTOCOLS = false;
    let ALLOW_SELF_CLOSE_IN_ATTR = true;
    let SAFE_FOR_TEMPLATES = false;
    let SAFE_FOR_XML = true;
    let WHOLE_DOCUMENT = false;
    let SET_CONFIG = false;
    let FORCE_BODY = false;
    let RETURN_DOM = false;
    let RETURN_DOM_FRAGMENT = false;
    let RETURN_TRUSTED_TYPE = false;
    let SANITIZE_DOM = true;
    let SANITIZE_NAMED_PROPS = false;
    const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
    let KEEP_CONTENT = true;
    let IN_PLACE = false;
    let USE_PROFILES = {};
    let FORBID_CONTENTS = null;
    const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let DATA_URI_TAGS = null;
    const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
    let URI_SAFE_ATTRIBUTES = null;
    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
    const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
    const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
    const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
    let NAMESPACE = HTML_NAMESPACE;
    let IS_EMPTY_INPUT = false;
    let ALLOWED_NAMESPACES = null;
    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
    let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
    let PARSER_MEDIA_TYPE = null;
    const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
    const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
    let transformCaseFunc = null;
    let CONFIG = null;
    const formElement = document2.createElement("form");
    const isRegexOrFunction = function isRegexOrFunction2(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    const _parseConfig = function _parseConfig2() {
      let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      if (!cfg || typeof cfg !== "object") {
        cfg = {};
      }
      cfg = clone(cfg);
      PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
      transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
      ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
      FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
      USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
      SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
      RETURN_DOM = cfg.RETURN_DOM || false;
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
      FORCE_BODY = cfg.FORCE_BODY || false;
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
      IN_PLACE = cfg.IN_PLACE || false;
      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
      HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, text);
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      if (cfg.ADD_TAGS) {
        if (typeof cfg.ADD_TAGS === "function") {
          EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
        } else {
          if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
            ALLOWED_TAGS = clone(ALLOWED_TAGS);
          }
          addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
        }
      }
      if (cfg.ADD_ATTR) {
        if (typeof cfg.ADD_ATTR === "function") {
          EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
        } else {
          if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
            ALLOWED_ATTR = clone(ALLOWED_ATTR);
          }
          addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
        }
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      if (KEEP_CONTENT) {
        ALLOWED_TAGS["#text"] = true;
      }
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
      }
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ["tbody"]);
        delete FORBID_TAGS.tbody;
      }
      if (cfg.TRUSTED_TYPES_POLICY) {
        if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        }
        if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        }
        trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
        emptyHTML = trustedTypesPolicy.createHTML("");
      } else {
        if (trustedTypesPolicy === void 0) {
          trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
        }
        if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
          emptyHTML = trustedTypesPolicy.createHTML("");
        }
      }
      if (freeze2) {
        freeze2(cfg);
      }
      CONFIG = cfg;
    };
    const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
    const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
    const _checkValidNamespace = function _checkValidNamespace2(element) {
      let parent = getParentNode(element);
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: "template"
        };
      }
      const tagName = stringToLowerCase(element.tagName);
      const parentTagName = stringToLowerCase(parent.tagName);
      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }
      if (element.namespaceURI === SVG_NAMESPACE) {
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === "svg";
        }
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }
        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === "math";
        }
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
        }
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      }
      if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      }
      return false;
    };
    const _forceRemove = function _forceRemove2(node) {
      arrayPush(DOMPurify2.removed, {
        element: node
      });
      try {
        getParentNode(node).removeChild(node);
      } catch (_) {
        remove(node);
      }
    };
    const _removeAttribute = function _removeAttribute2(name, element) {
      try {
        arrayPush(DOMPurify2.removed, {
          attribute: element.getAttributeNode(name),
          from: element
        });
      } catch (_) {
        arrayPush(DOMPurify2.removed, {
          attribute: null,
          from: element
        });
      }
      element.removeAttribute(name);
      if (name === "is") {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(element);
          } catch (_) {
          }
        } else {
          try {
            element.setAttribute(name, "");
          } catch (_) {
          }
        }
      }
    };
    const _initDocument = function _initDocument2(dirty) {
      let doc = null;
      let leadingWhitespace = null;
      if (FORCE_BODY) {
        dirty = "<remove></remove>" + dirty;
      } else {
        const matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }
      if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
      }
      const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {
        }
      }
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, "template", null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {
        }
      }
      const body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    const _createNodeIterator = function _createNodeIterator2(root) {
      return createNodeIterator.call(
        root.ownerDocument || root,
        root,
        // eslint-disable-next-line no-bitwise
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
        null
      );
    };
    const _isClobbered = function _isClobbered2(element) {
      return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
    };
    const _isNode = function _isNode2(value) {
      return typeof Node === "function" && value instanceof Node;
    };
    function _executeHooks(hooks2, currentNode, data) {
      arrayForEach(hooks2, (hook) => {
        hook.call(DOMPurify2, currentNode, data, CONFIG);
      });
    }
    const _sanitizeElements = function _sanitizeElements2(currentNode) {
      let content = null;
      _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      const tagName = transformCaseFunc(currentNode.nodeName);
      _executeHooks(hooks.uponSanitizeElement, currentNode, {
        tagName,
        allowedTags: ALLOWED_TAGS
      });
      if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }
      if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
        _forceRemove(currentNode);
        return true;
      }
      if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
        _forceRemove(currentNode);
        return true;
      }
      if (!(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName])) {
        if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
            return false;
          }
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
            return false;
          }
        }
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          const parentNode = getParentNode(currentNode) || currentNode.parentNode;
          const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            const childCount = childNodes.length;
            for (let i = childCount - 1; i >= 0; --i) {
              const childClone = cloneNode(childNodes[i], true);
              childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
              parentNode.insertBefore(childClone, getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
        content = currentNode.textContent;
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          content = stringReplace(content, expr, " ");
        });
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify2.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      _executeHooks(hooks.afterSanitizeElements, currentNode, null);
      return false;
    };
    const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
      if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
        return false;
      }
      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName)) ;
      else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName)) ;
      else if (EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag)) ;
      else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
        ) ;
        else {
          return false;
        }
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
      else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
      else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
      else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
      else if (value) {
        return false;
      } else ;
      return true;
    };
    const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
      return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
    };
    const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
      _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
      const {
        attributes
      } = currentNode;
      if (!attributes || _isClobbered(currentNode)) {
        return;
      }
      const hookEvent = {
        attrName: "",
        attrValue: "",
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR,
        forceKeepAttr: void 0
      };
      let l = attributes.length;
      while (l--) {
        const attr = attributes[l];
        const {
          name,
          namespaceURI,
          value: attrValue
        } = attr;
        const lcName = transformCaseFunc(name);
        const initValue = attrValue;
        let value = name === "value" ? initValue : stringTrim(initValue);
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = void 0;
        _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
        value = hookEvent.attrValue;
        if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
          _removeAttribute(name, currentNode);
          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title|textarea)/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (lcName === "attributename" && stringMatch(value, "href")) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (hookEvent.forceKeepAttr) {
          continue;
        }
        if (!hookEvent.keepAttr) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (SAFE_FOR_TEMPLATES) {
          arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
            value = stringReplace(value, expr, " ");
          });
        }
        const lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
          if (namespaceURI) ;
          else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case "TrustedHTML": {
                value = trustedTypesPolicy.createHTML(value);
                break;
              }
              case "TrustedScriptURL": {
                value = trustedTypesPolicy.createScriptURL(value);
                break;
              }
            }
          }
        }
        if (value !== initValue) {
          try {
            if (namespaceURI) {
              currentNode.setAttributeNS(namespaceURI, name, value);
            } else {
              currentNode.setAttribute(name, value);
            }
            if (_isClobbered(currentNode)) {
              _forceRemove(currentNode);
            } else {
              arrayPop(DOMPurify2.removed);
            }
          } catch (_) {
            _removeAttribute(name, currentNode);
          }
        }
      }
      _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
    };
    const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment2) {
      let shadowNode = null;
      const shadowIterator = _createNodeIterator(fragment2);
      _executeHooks(hooks.beforeSanitizeShadowDOM, fragment2, null);
      while (shadowNode = shadowIterator.nextNode()) {
        _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
        _sanitizeElements(shadowNode);
        _sanitizeAttributes(shadowNode);
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM2(shadowNode.content);
        }
      }
      _executeHooks(hooks.afterSanitizeShadowDOM, fragment2, null);
    };
    DOMPurify2.sanitize = function(dirty) {
      let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      let body = null;
      let importedNode = null;
      let currentNode = null;
      let returnNode = null;
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = "<!-->";
      }
      if (typeof dirty !== "string" && !_isNode(dirty)) {
        if (typeof dirty.toString === "function") {
          dirty = dirty.toString();
          if (typeof dirty !== "string") {
            throw typeErrorCreate("dirty is not a string, aborting");
          }
        } else {
          throw typeErrorCreate("toString is not a function");
        }
      }
      if (!DOMPurify2.isSupported) {
        return dirty;
      }
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      DOMPurify2.removed = [];
      if (typeof dirty === "string") {
        IN_PLACE = false;
      }
      if (IN_PLACE) {
        if (dirty.nodeName) {
          const tagName = transformCaseFunc(dirty.nodeName);
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
          }
        }
      } else if (dirty instanceof Node) {
        body = _initDocument("<!---->");
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
          body = importedNode;
        } else if (importedNode.nodeName === "HTML") {
          body = importedNode;
        } else {
          body.appendChild(importedNode);
        }
      } else {
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf("<") === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        body = _initDocument(dirty);
        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
        }
      }
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
      while (currentNode = nodeIterator.nextNode()) {
        _sanitizeElements(currentNode);
        _sanitizeAttributes(currentNode);
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
      }
      if (IN_PLACE) {
        return dirty;
      }
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
      }
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          serializedHTML = stringReplace(serializedHTML, expr, " ");
        });
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    DOMPurify2.setConfig = function() {
      let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _parseConfig(cfg);
      SET_CONFIG = true;
    };
    DOMPurify2.clearConfig = function() {
      CONFIG = null;
      SET_CONFIG = false;
    };
    DOMPurify2.isValidAttribute = function(tag, attr, value) {
      if (!CONFIG) {
        _parseConfig({});
      }
      const lcTag = transformCaseFunc(tag);
      const lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    DOMPurify2.addHook = function(entryPoint, hookFunction) {
      if (typeof hookFunction !== "function") {
        return;
      }
      arrayPush(hooks[entryPoint], hookFunction);
    };
    DOMPurify2.removeHook = function(entryPoint, hookFunction) {
      if (hookFunction !== void 0) {
        const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
        return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
      }
      return arrayPop(hooks[entryPoint]);
    };
    DOMPurify2.removeHooks = function(entryPoint) {
      hooks[entryPoint] = [];
    };
    DOMPurify2.removeAllHooks = function() {
      hooks = _createHooksMap();
    };
    return DOMPurify2;
  }
  var purify = createDOMPurify();
  purify_cjs = purify;
  return purify_cjs;
}
var browser;
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser;
  hasRequiredBrowser = 1;
  browser = window.DOMPurify || (window.DOMPurify = requirePurify_cjs().default || requirePurify_cjs());
  return browser;
}
var browserExports = requireBrowser();
const DOMPurify = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
const CLASS_PART_SEPARATOR = "-";
const createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  var _a2;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a2 = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a2.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
const createClassMap = (config) => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path2) => {
  let currentClassPartObject = classPartObject;
  path2.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = (func) => func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};
const createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache2 = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache2.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache2;
      cache2 = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache2.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache2.has(key)) {
        cache2.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = "!";
const createParseClassName = (config) => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  const parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return (className) => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
const sortModifiers = (modifiers) => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
const createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value) => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value) => getIsArbitraryValue(value, "length", isLengthOnly);
const isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value) => getIsArbitraryValue(value, "number", isNumber);
const isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
const isTshirtSize = (value) => tshirtUnitRegex.test(value);
const sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
const isArbitrarySize = (value) => getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value) => getIsArbitraryValue(value, "position", isNever);
const imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
const isArbitraryImage = (value) => getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value) => getIsArbitraryValue(value, "", isShadow);
const isAny = () => true;
const getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
const isNever = () => false;
const isShadow = (value) => shadowRegex.test(value);
const isImage = (value) => imageRegex.test(value);
const getDefaultConfig = () => {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
};
const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
const navigator$2 = window.navigator;
const hasVibrationSupport = "vibrate" in navigator$2;
const isIOS = () => {
  const ua = navigator$2.userAgent;
  return !!/iPad/i.exec(ua) || !!/iPhone/i.exec(ua);
};
const isSafari = () => {
  const ua = navigator$2.userAgent;
  const iOS = !!/iP(ad|od|hone)/i.exec(ua);
  const hasSafariInUa = !!/Safari/i.exec(ua);
  const noOtherBrowsersInUa = !/Chrome|CriOS|OPiOS|mercury|FxiOS|Firefox/i.exec(ua);
  let result = false;
  if (iOS) {
    const webkit = !!/WebKit/i.exec(ua);
    result = webkit && hasSafariInUa && noOtherBrowsersInUa;
  } else if ("safari" in window) {
    result = true;
  } else {
    result = hasSafariInUa && noOtherBrowsersInUa;
  }
  return result;
};
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator$2.userAgent);
const isDesktop = !isMobileDevice;
const thousandSeparator = (num) => {
  const n = Number(num);
  if (isNaN(n)) return "0.00";
  return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const throttle$1 = (cb, ms) => {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= ms) {
      cb();
      lastTime = now;
    }
  };
};
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.error("Error attempting to enable full-screen mode: ".concat(err.message, " (").concat(err.name, ")"));
    });
  } else if (document.exitFullscreen) {
    document.exitFullscreen().catch((err) => {
      console.error("Error attempting to exit full-screen mode: ".concat(err.message, " (").concat(err.name, ")"));
    });
  }
};
const isEnvDev = true;
const getFormattedRoundId = (roundId) => {
  var _a2, _b2;
  return (_b2 = (_a2 = roundId.split("-").at(-1)) == null ? void 0 : _a2.toUpperCase()) != null ? _b2 : "";
};
const sanitizeRule = (html) => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ["h3", "h4", "p", "ul", "li", "table", "thead", "tbody", "tr", "th", "td", "strong"],
    ALLOWED_ATTR: []
  });
};
const rouletteGameTypes = [GameType.AUTO_ROULETTE, GameType.ROULETTE];
const sicboGameTypes = [GameType.AUTO_SIC_BO, GameType.SIC_BO];
const isRouletteGameType = (gameType) => {
  return rouletteGameTypes.includes(gameType);
};
const isSicboGameType = (gameType) => {
  return sicboGameTypes.includes(gameType);
};
const isBaccaratGameType = (gameType) => {
  return gameType === GameType.BACCARAT;
};
const getGameBetKeys = (gameType) => {
  if (isRouletteGameType(gameType)) return Object.values({ ...RouletteBetNo, ...RouletteCallBet });
  else if (isSicboGameType(gameType)) return Object.values(SicBoBetNo);
  else if (isBaccaratGameType(gameType)) return Object.values(BaccaratBetNo);
  else return [];
};
const getStackingBetSound = (stackingMap, latestPlaceBet) => {
  let stack = 0;
  Object.keys(latestPlaceBet).forEach((betSpot) => {
    stack = stackingMap[betSpot] > stack ? stackingMap[betSpot] : stack;
  });
  const stackingSoundMap = {
    "1": "bet",
    "2": "stackingBet1",
    "3": "stackingBet2",
    "4": "stackingBet3"
  };
  if (Number(stack) < 5) return stackingSoundMap[stack];
  return "stackingBet4";
};
const getStackingMap = (history) => {
  const stackMap = {};
  let prevHistory = {};
  history.forEach((entry) => {
    for (const spot in entry) {
      if (!prevHistory[spot] || prevHistory[spot] !== entry[spot]) stackMap[spot] = (stackMap[spot] || 0) + 1;
    }
    Object.keys(stackMap).forEach((spot) => {
      if (!entry[spot]) {
        stackMap[spot] = 0;
      }
    });
    prevHistory = entry;
  });
  return stackMap;
};
const getBetSound = (history, latestPlaceBet) => {
  if (!history || !latestPlaceBet) return;
  const stackingMap = getStackingMap(history);
  if (latestPlaceBet && Object.keys(latestPlaceBet).length >= 3) {
    playSound(["multipleBet"]);
    return;
  }
  const sound = getStackingBetSound(stackingMap, latestPlaceBet);
  playSound([sound]);
};
const isInIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};
const getPayTable = (gameType) => {
  const betTypeLimits = useConfigStore.getState().betTypesLimit;
  const betTypeConvertMap = {
    [GameType.AUTO_ROULETTE]: {
      "ro.straight": { betType: "STRAIGHT", payouts: "35:1", limits: betTypeLimits[RouletteBetLimitProfile.STRAIGHT_UP] },
      "ro.split": { betType: "SPLIT", payouts: "17:1", limits: betTypeLimits[RouletteBetLimitProfile.SPLIT] },
      "ro.street": { betType: "STREET", payouts: "11:1", limits: betTypeLimits[RouletteBetLimitProfile.STREET] },
      "ro.corner": { betType: "CORNER", payouts: "8:1", limits: betTypeLimits[RouletteBetLimitProfile.CORNER] },
      "ro.line": { betType: "SIX LINE", payouts: "5:1", limits: betTypeLimits[RouletteBetLimitProfile.LINE] },
      "ro.column": { betType: "COLUMN", payouts: "2:1", limits: betTypeLimits[RouletteBetLimitProfile.COLUMN] },
      "ro.dozen": { betType: "DOZEN", payouts: "2:1", limits: betTypeLimits[RouletteBetLimitProfile.DOZEN] },
      "ro.redBlack": { betType: "RED / BLACK", payouts: "1:1", limits: betTypeLimits[RouletteBetLimitProfile.RED_BLACK] },
      "ro.oddEven": { betType: "ODD / EVEN", payouts: "1:1", limits: betTypeLimits[RouletteBetLimitProfile.ODD_EVEN] },
      "ro.lowHigh": { betType: "1-18 / 19-36", payouts: "1:1", limits: betTypeLimits[RouletteBetLimitProfile.LOW_HIGH] }
    },
    [GameType.AUTO_SIC_BO]: {
      "sb.smallBig": { betType: "SMALL / BIG", payouts: "1:1*", limits: betTypeLimits[SicBoBetLimitProfile.SMALL_BIG] },
      "sb.oddEven": { betType: "EVEN / ODD", payouts: "1:1*", limits: betTypeLimits[SicBoBetLimitProfile.ODD_EVEN] },
      "sb.double": { betType: "DOUBLE", payouts: "12:1", limits: betTypeLimits[SicBoBetLimitProfile.DOUBLE] },
      "sb.triple": { betType: "TRIPLE", payouts: "210:1", limits: betTypeLimits[SicBoBetLimitProfile.TRIPLE] },
      "sb.anyTriple": { betType: "ANY TRIPLE", payouts: "34:1", limits: betTypeLimits[SicBoBetLimitProfile.ANY_TRIPLE] },
      "sb.total4Or17": { betType: "TOTAL 4 OR 17", payouts: "70:1", limits: betTypeLimits[SicBoBetLimitProfile.TOTAL_4_17] },
      "sb.total5Or16": { betType: "TOTAL 5 OR 16", payouts: "34:1", limits: betTypeLimits[SicBoBetLimitProfile.TOTAL_5_16] },
      "sb.total6Or15": { betType: "TOTAL 6 OR 15", payouts: "20:1", limits: betTypeLimits[SicBoBetLimitProfile.TOTAL_6_15] },
      "sb.total7Or14": { betType: "TOTAL 7 OR 14", payouts: "13:1", limits: betTypeLimits[SicBoBetLimitProfile.TOTAL_7_14] },
      "sb.total8Or13": { betType: "TOTAL 8 OR 13", payouts: "9:1", limits: betTypeLimits[SicBoBetLimitProfile.TOTAL_8_13] },
      "sb.total9Or12": { betType: "TOTAL 9 OR 12", payouts: "7:1", limits: betTypeLimits[SicBoBetLimitProfile.TOTAL_9_12] },
      "sb.total10Or11": { betType: "TOTAL 10 OR 11", payouts: "6:1", limits: betTypeLimits[SicBoBetLimitProfile.TOTAL_10_11] },
      "sb.comb": { betType: "TWO DICE COMBO", payouts: "6:1", limits: betTypeLimits[SicBoBetLimitProfile.COMBINATION] },
      "sb.single": { betType: "SINGLE", payouts: "", limits: betTypeLimits[SicBoBetLimitProfile.SINGLE] },
      "sb.onSingle": { betType: "ON SINGLE", payouts: "1:1", limits: betTypeLimits[SicBoBetLimitProfile.SINGLE] },
      "sb.onDouble": { betType: "ON DOUBLE", payouts: "2:1", limits: betTypeLimits[SicBoBetLimitProfile.SINGLE] },
      "sb.onTriple": { betType: "ON TRIPLE", payouts: "15:1", limits: betTypeLimits[SicBoBetLimitProfile.SINGLE] }
    },
    [GameType.BACCARAT]: {
      "bc.player": { betType: "PLAYER", payouts: "1:1", limits: betTypeLimits[BaccaratBetLimitProfile.PLAYER] },
      "bc.banker": { betType: "BANKER", payouts: "1:1", limits: betTypeLimits[BaccaratBetLimitProfile.BANKER] },
      "bc.tie": { betType: "TIE", payouts: "8:1", limits: betTypeLimits[BaccaratBetLimitProfile.TIE], className: "borderBottom" },
      "bc.playerPair": {
        betType: "P PAIR",
        payouts: "11:1",
        limits: betTypeLimits[BaccaratBetLimitProfile.PLAYER_PAIR],
        className: "borderTop"
      },
      "bc.bankerPair": { betType: "B PAIR", payouts: "11:1", limits: betTypeLimits[BaccaratBetLimitProfile.BANKER_PAIR] },
      "bc.perfectPair": { betType: "PERFECT PAIR", payouts: "", limits: betTypeLimits[BaccaratBetLimitProfile.PERFECT_PAIR] },
      "bc.oneHand": { betType: "ONE HAND", payouts: "25:1", className: "indent" },
      "bc.bothHands": { betType: "BOTH HANDS", payouts: "200:1", className: "indent" },
      "bc.eitherPair": { betType: "EITHER PAIR", payouts: "5:1", limits: betTypeLimits[BaccaratBetLimitProfile.EITHER_PAIR] },
      "bc.pBonus.bBonus": { betType: "P BONUS / B BONUS", payouts: "", limits: betTypeLimits[BaccaratBetLimitProfile.PLAYER_BANKER_BONUS] },
      "bc.naturalWin": { betType: "NATURAL WIN", payouts: "1:1", className: "indent" },
      "bc.naturalTie": { betType: "NATURAL TIE", payouts: "PUSH", className: "indent" }
    }
  };
  return betTypeConvertMap[gameType];
};
const handleGamePauseToast = (isBet, isPaused) => {
  if (!isBet && isPaused) useToastStore.getState().addToast("info", "COMMON.GAME_PAUSED", { persistent: true, id: "game-paused" });
  if (!isPaused) useToastStore.getState().dismissToast("game-paused");
};
const getBaseDomain = () => {
  const WS_SERVER = useConfigStore.getState().WS_SERVER;
  return WS_SERVER;
};
const extractLeft = (s) => {
  var _a2, _b2;
  return parseFloat((_b2 = (_a2 = s.match(/left-\[([0-9.]+)%\]/)) == null ? void 0 : _a2[1]) != null ? _b2 : "50");
};
const DEVTOOLS_CONFIG$d = {
  name: "".concat(document.title, " - useAutoPlayStore"),
  store: "AutoPlayStore",
  serialize: {
    options: true
  }
};
const useAutoPlayStore = create()(
  devtools(
    (set2, get2) => ({
      isAutoPlay: false,
      boardSnapshot: null,
      autoPlayResumed: true,
      roundLastChosen: null,
      roundSelected: null,
      roundRemaining: 0,
      confirmModalType: null,
      isHaveBets: () => useCartStore.getState().boardHistory.length > 0,
      checkAutoPlay: () => {
        const { isAutoPlay, cancelAutoPlay } = get2();
        if (!isAutoPlay) return false;
        const { totalBet, remainedBalance } = useCartStore.getState();
        const { addToast } = useToastStore.getState();
        const isBalanceEnough = remainedBalance - totalBet >= 0;
        if (!isBalanceEnough) {
          cancelAutoPlay();
          addToast("info", "Autoplay has been deactivated, because of low balance");
          return false;
        }
        return true;
      },
      decrementAutoPlayRound: () => {
        const { isAutoPlay, roundRemaining } = get2();
        if (!isAutoPlay) return;
        set2({ roundRemaining: roundRemaining - 1 });
      },
      handleAutoPlay: () => {
        const { boardSnapshot, isAutoPlay, roundRemaining, cancelAutoPlay } = get2();
        if (!isAutoPlay) return;
        if (roundRemaining === 0) {
          cancelAutoPlay();
          set2({ confirmModalType: "AutoPlayFinished" });
          return;
        } else {
          const { boardHistory } = useCartStore.getState();
          const isSame = JSON.stringify(boardHistory[boardHistory.length - 1]) === JSON.stringify(boardSnapshot);
          if (!isSame) set2({ confirmModalType: "BetChanged" });
        }
      },
      cancelAutoPlay: () => {
        set2({
          confirmModalType: null,
          isAutoPlay: false,
          roundSelected: null,
          roundRemaining: 0
        });
      }
    }),
    DEVTOOLS_CONFIG$d
  )
);
var RoomType = /* @__PURE__ */ ((RoomType2) => {
  RoomType2[RoomType2["Live"] = 0] = "Live";
  RoomType2[RoomType2["Support"] = 1] = "Support";
  return RoomType2;
})(RoomType || {});
const DEVTOOLS_CONFIG$c = {
  name: "".concat(document.title, " - useChatStore"),
  store: "ChatStore",
  serialize: {
    options: true
  }
};
const useChatStore = create()(
  devtools(
    (set2) => ({
      isBanned: false,
      isTableClosed: false,
      queueLive: [],
      queueSupport: [],
      supportChatUnread: 0,
      addBubble: (val, type) => {
        set2(
          (state) => {
            var _a2;
            const queueKey = type === 0 ? "queueLive" : "queueSupport";
            const isSingleIdentical = state[queueKey].length === 1 && val.length === 1 && ((_a2 = val[0].sender) == null ? void 0 : _a2.userId) === "support-system";
            if (isSingleIdentical) return { [queueKey]: state[queueKey] };
            if (val.length === 1) {
              return { [queueKey]: state[queueKey].concat(val) };
            }
            const lastReceiveMessage = val[val.length - 1];
            const lastCurrentMessage = state[queueKey][state[queueKey].length - 1];
            if (val[val.length - 1] !== void 0 && state[queueKey][state[queueKey].length - 1] !== void 0 && "createdAt" in lastReceiveMessage.content && "createdAt" in lastCurrentMessage.content) {
              if (lastCurrentMessage.content.createdAt === lastReceiveMessage.content.createdAt) {
                return { [queueKey]: state[queueKey] };
              }
            }
            return { [queueKey]: val };
          },
          void 0,
          "addBubble"
        );
      }
    }),
    DEVTOOLS_CONFIG$c
  )
);
const skipScrollPages = ["rules_inner", "support"];
const DEVTOOLS_CONFIG$b = {
  name: "".concat(document.title, " - useLayoutStore"),
  store: "LayoutStore",
  serialize: {
    options: true
  }
};
const LEFT_SIDE_DESKTOP_MODALS = ["payout", "chat"];
const useLayoutStore = create()(
  devtools(
    subscribeWithSelector((set2, get2) => ({
      isVirtualKeyboardOpened: false,
      visualViewportMargin: 0,
      isPixiLoading: false,
      isOpenSelector: false,
      isUnmuteHint: true,
      scrollToId: "",
      menuPage: null,
      menuPageHistory: [],
      rootEmFontSize: 16,
      mobileHeaderFontSize: 0.688,
      isPayoutModalOpen: false,
      isChatExpand: false,
      desktopModal: null,
      prevDesktopModal: null,
      desktopModalStack: [],
      isCanStream: true,
      chipTextSize: {
        gridBoard: 0,
        racetrack: 0,
        sicBo: 0,
        baccarat: 0
      },
      modalOpenCount: 0,
      toggleSelector: () => {
        const { isOpenSelector } = get2();
        set2({
          menuPage: null,
          isOpenSelector: !isOpenSelector
        });
        playSound(["chiptrayOpen"]);
      },
      toggleMenu: (newPage) => {
        const { menuPage } = get2();
        if (menuPage === newPage) {
          set2({ menuPage: null });
          return;
        }
        set2({
          menuPage: newPage,
          isOpenSelector: false
        });
      },
      openDesktopModal: (modal) => {
        set2((state) => {
          if (modal === "chat") {
            return {
              isChatExpand: true,
              desktopModalStack: [...state.desktopModalStack, modal]
            };
          }
          if (modal === "payout") {
            return {
              isPayoutModalOpen: true,
              desktopModalStack: [...state.desktopModalStack, modal]
            };
          }
          return {
            prevDesktopModal: state.desktopModal,
            desktopModal: modal,
            // When opening the modal (right side), we retain only left-side modals in the stack.
            // This ensures right-side modals do not overlap, but left-side modals can remain open.
            desktopModalStack: [...state.desktopModalStack.filter((item) => LEFT_SIDE_DESKTOP_MODALS.includes(item)), modal]
          };
        });
      },
      closeDesktopModal: (modal) => {
        set2((state) => {
          if (modal === "chat") {
            return {
              isChatExpand: false,
              desktopModalStack: state.desktopModalStack.filter((item) => item !== modal)
            };
          }
          if (modal === "payout") {
            return {
              isPayoutModalOpen: false,
              desktopModalStack: state.desktopModalStack.filter((item) => item !== modal)
            };
          }
          return {
            prevDesktopModal: null,
            desktopModal: null,
            desktopModalStack: state.desktopModalStack.filter((item) => item !== modal)
          };
        });
      },
      closeNewestDesktopModal: () => {
        set2((state) => {
          const topItem = state.desktopModalStack.at(-1);
          if (topItem === "chat") {
            return {
              isChatExpand: false,
              desktopModalStack: state.desktopModalStack.filter((item) => item !== topItem)
            };
          }
          if (topItem === "payout") {
            return {
              isPayoutModalOpen: false,
              desktopModalStack: state.desktopModalStack.filter((item) => item !== topItem)
            };
          }
          return {
            prevDesktopModal: null,
            desktopModal: null,
            desktopModalStack: state.desktopModalStack.filter((item) => item !== topItem)
          };
        });
      },
      goBackMenu: () => {
        const { menuPageHistory } = get2();
        if (menuPageHistory.length <= 1) {
          set2({ menuPage: null });
          return;
        }
        set2({
          menuPage: menuPageHistory[menuPageHistory.length - 2],
          menuPageHistory: menuPageHistory.slice(0, menuPageHistory.length - 1)
        });
      },
      closeMenu: () => set2({ menuPage: null, desktopModal: null }),
      getIsFullHeight: () => {
        const notFullHeightPages = ["index", "safari_hint", "betting_mode", "betting_mode_intro", "autoplay"];
        const { menuPage } = get2();
        return menuPage === null || !notFullHeightPages.includes(menuPage);
      },
      incrementModalCount: () => {
        set2((state) => ({ modalOpenCount: state.modalOpenCount + 1 }));
      },
      decrementModalCount: () => {
        set2((state) => ({ modalOpenCount: Math.max(0, state.modalOpenCount - 1) }));
      }
    })),
    DEVTOOLS_CONFIG$b
  )
);
useLayoutStore.subscribe(
  (state) => state.menuPage,
  (newPage) => {
    const { menuPageHistory } = useLayoutStore.getState();
    if (newPage === null) {
      useLayoutStore.setState({ menuPageHistory: [] });
      return;
    }
    if (newPage === "chat_support") {
      useChatStore.setState({ supportChatUnread: 0 });
    }
    if (menuPageHistory[menuPageHistory.length - 1] !== newPage) {
      useLayoutStore.setState({ menuPageHistory: [...menuPageHistory, newPage] });
    }
  }
);
var BetState = /* @__PURE__ */ ((BetState2) => {
  BetState2[BetState2["Unknown"] = 0] = "Unknown";
  BetState2[BetState2["Bet"] = 1] = "Bet";
  BetState2[BetState2["WheelSpin"] = 2] = "WheelSpin";
  BetState2[BetState2["Settlement"] = 3] = "Settlement";
  return BetState2;
})(BetState || {});
const DEVTOOLS_CONFIG$a = {
  name: "".concat(document.title, " - useBettingStore"),
  store: "BettingStore",
  serialize: {
    options: true
  }
};
const useBettingStore = create()(
  devtools(
    subscribeWithSelector((set2, get2) => ({
      isRaceTrack: false,
      isBet: false,
      neighborRange: 2,
      betPeriod: 0,
      betStart: 0,
      betEnd: 0,
      gameState: BetState.Unknown,
      roundStart: 0,
      betMode: "default",
      isOverLimit: false,
      dealer: { name: "" },
      isAutoPlay: false,
      autoPlayRound: 0,
      chipSequence: 1,
      resetBoard: true,
      isRetrieveBet: false,
      getGameState: () => {
        const { gameState, isBet } = get2();
        return {
          gameState,
          isBet,
          isWheelSpin: gameState === BetState.WheelSpin,
          isSettlement: gameState === BetState.Settlement
        };
      },
      toggleRaceTrack: () => set2(({ isRaceTrack }) => ({ isRaceTrack: !isRaceTrack })),
      stopCountdown: () => {
        const isBet = get2().isBet;
        if (isBet) set2({ betEnd: Date.now() });
      }
    })),
    DEVTOOLS_CONFIG$a
  )
);
useBettingStore.subscribe(
  (state) => state.gameState,
  (gameState) => {
    const { enterBet, enterWheelSpin, enterSettlement } = useCartStore.getState();
    if (gameState === BetState.Bet) enterBet();
    if (gameState === BetState.WheelSpin) enterWheelSpin();
    if (gameState === BetState.Settlement) enterSettlement();
  }
);
useBettingStore.subscribe(
  (state) => state.isBet,
  (isBet) => {
    const { isPaused } = useConfigStore.getState();
    handleGamePauseToast(isBet, isPaused);
    if (!isBet) useLayoutStore.setState({ isOpenSelector: false });
  }
);
const AUTOPLAY_PLAYER_COUNT_DIFF = 1;
const BET_SAFETY_MARGIN_MS = 500;
const DEFAULT_HISTORY_LIMIT = 20;
const SESSION_ERROR_CODES = {
  EXPIRED: 13040,
  MULTI_SESSION: 13041
};
const DEVTOOLS_CONFIG$9 = {
  name: "".concat(document.title, " - useDebugStore"),
  store: "DebugStore",
  serialize: {
    options: true
  }
};
const getTimestamp = () => (/* @__PURE__ */ new Date()).toISOString();
const useDebugStore = create()(
  devtools(
    (set2) => ({
      msg: [],
      setMsg: (msg) => set2((state) => ({ msg: [...state.msg, ["UTC+0 - ".concat(getTimestamp()), msg]] }))
    }),
    DEVTOOLS_CONFIG$9
  )
);
const getCheckResultValidFn = (gameType) => {
  const currentGameType = gameType != null ? gameType : useConfigStore.getState().GAME_TYPE;
  const gameRule = getGameRuleByType(currentGameType);
  if (!gameRule) return () => false;
  else return (result) => gameRule.validateResult(result) === void 0;
};
const getDateGroup = (date) => {
  return new Date(date).toLocaleDateString("en-gb", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
};
const DEVTOOLS_CONFIG$8 = {
  name: "".concat(document.title, " - useHistoryStore"),
  store: "HistoryStore",
  serialize: {
    options: true
  }
};
const useHistoryStore = create()(
  devtools(
    subscribeWithSelector((set2) => ({
      histories: [],
      groupedHistoryId: {},
      daySubtotals: {},
      currentHistoryContent: null,
      addHistories: (val) => {
        set2(
          (state) => {
            const sorted = state.histories.filter((oldHistory) => !val.some((newHistory) => newHistory.id === oldHistory.id)).concat(val).filter((h) => h.roundCreatedAt && h.roundFinishedAt).filter((history) => {
              const { status, result, gameType } = history;
              if (status !== "finished") return true;
              if (!result) return false;
              const checkResultValid = getCheckResultValidFn(gameType);
              return checkResultValid(result);
            }).sort((a, b) => {
              var _a2, _b2;
              const aCreatedAt = (_a2 = a.roundCreatedAt) != null ? _a2 : 0;
              const bCreatedAt = (_b2 = b.roundCreatedAt) != null ? _b2 : 0;
              return bCreatedAt - aCreatedAt;
            });
            Object.keys(state.daySubtotals);
            const groupedHistory = groupHistoryByDate(sorted);
            const newState = { ...state, histories: sorted, groupedHistoryId: groupedHistory };
            return newState;
          },
          void 0,
          "addHistories"
        );
      },
      addDaySubtotal: (val) => {
        set2(
          (state) => {
            const daySubtotals = val.reduce(
              (acc, value) => {
                const { day } = value;
                const dateStr = getDateGroup(day);
                acc[dateStr] = value;
                return acc;
              },
              {}
            );
            const newState = {
              ...state,
              daySubtotals: { ...state.daySubtotals, ...daySubtotals }
            };
            return newState;
          },
          void 0,
          "addDaySubtotal"
        );
      }
    })),
    DEVTOOLS_CONFIG$8
  )
);
function groupHistoryByDate(history, _daySubtotalKeys) {
  const groupedHistory = history.reduce((acc, value) => {
    var _a2;
    const { roundCreatedAt } = value;
    if (!roundCreatedAt) return acc;
    const dateStr = getDateGroup(roundCreatedAt);
    const prevGroup = (_a2 = acc[dateStr]) != null ? _a2 : [];
    prevGroup.push(value.id);
    acc[dateStr] = prevGroup;
    return acc;
  }, {});
  const days = Object.keys(groupedHistory);
  if (days.length) getHistoryDaySubtotal(days);
  return groupedHistory;
}
function getHistoryDaySubtotal(daysStr) {
  if (!daysStr.length) return;
  function convertToUnixUTCTimestamp(dateString) {
    const [day, month, year] = dateString.split("/").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getTime();
  }
  const days = daysStr.map(convertToUnixUTCTimestamp);
  connectIns == null ? void 0 : connectIns.subtotalBetHistory(days);
}
const isString$1 = (obj) => typeof obj === "string";
const defer = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
const makeString = (object) => {
  if (object == null) return "";
  return "" + object;
};
const copy = (a, s, t2) => {
  a.forEach((m) => {
    if (s[m]) t2[m] = s[m];
  });
};
const lastOfPathSeparatorRegExp = /###/g;
const cleanKey = (key) => key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
const canNotTraverseDeeper = (object) => !object || isString$1(object);
const getLastOfPath = (object, path2, Empty) => {
  const stack = !isString$1(path2) ? path2 : path2.split(".");
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object)) return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object)) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
const setPath = (object, path2, newValue) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path2, Object);
  if (obj !== void 0 || path2.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path2[path2.length - 1];
  let p = path2.slice(0, path2.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === void 0 && p.length) {
    e = "".concat(p[p.length - 1], ".").concat(e);
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if ((last == null ? void 0 : last.obj) && typeof last.obj["".concat(last.k, ".").concat(e)] !== "undefined") {
      last.obj = void 0;
    }
  }
  last.obj["".concat(last.k, ".").concat(e)] = newValue;
};
const pushPath = (object, path2, newValue, concat) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path2, Object);
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
};
const getPath = (object, path2) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path2);
  if (!obj) return void 0;
  if (!Object.prototype.hasOwnProperty.call(obj, k)) return void 0;
  return obj[k];
};
const getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
};
const deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (isString$1(target[prop]) || target[prop] instanceof String || isString$1(source[prop]) || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
const regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const escape = (data) => {
  if (isString$1(data)) {
    return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
  }
  return data;
};
class RegExpCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = /* @__PURE__ */ new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== void 0) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
}
const chars = [" ", ",", "?", "!", ";"];
const looksLikeObjectPathRegExpCache = new RegExpCache(20);
const looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c) => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0) return true;
  const r2 = looksLikeObjectPathRegExpCache.getRegExp("(".concat(possibleChars.map((c) => c === "?" ? "\\?" : c).join("|"), ")"));
  let matched = !r2.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r2.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
const deepFind = (obj, path2, keySeparator = ".") => {
  if (!obj) return void 0;
  if (obj[path2]) {
    if (!Object.prototype.hasOwnProperty.call(obj, path2)) return void 0;
    return obj[path2];
  }
  const tokens = path2.split(keySeparator);
  let current2 = obj;
  for (let i = 0; i < tokens.length; ) {
    if (!current2 || typeof current2 !== "object") {
      return void 0;
    }
    let next;
    let nextPath = "";
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current2[nextPath];
      if (next !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current2 = next;
  }
  return current2;
};
const getCleanedCode = (code) => code == null ? void 0 : code.replace("_", "-");
const consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    var _a2, _b2;
    (_b2 = (_a2 = console == null ? void 0 : console[type]) == null ? void 0 : _a2.apply) == null ? void 0 : _b2.call(_a2, console, args);
  }
};
class Logger {
  constructor(concreteLogger, options = {}) {
    this.init(concreteLogger, options);
  }
  init(concreteLogger, options = {}) {
    this.prefix = options.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log(...args) {
    return this.forward(args, "log", "", true);
  }
  warn(...args) {
    return this.forward(args, "warn", "", true);
  }
  error(...args) {
    return this.forward(args, "error", "");
  }
  deprecate(...args) {
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (isString$1(args[0])) args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger();
class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(" ").forEach((event) => {
      if (!this.observers[event]) this.observers[event] = /* @__PURE__ */ new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event, ...args) {
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach(([observer, numTimesAdded]) => {
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers["*"]) {
      const cloned = Array.from(this.observers["*"].entries());
      cloned.forEach(([observer, numTimesAdded]) => {
        for (let i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
}
class ResourceStore extends EventEmitter {
  constructor(data, options = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === void 0) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key, options = {}) {
    var _a2, _b2;
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path2;
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
    } else {
      path2 = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path2.push(...key);
        } else if (isString$1(key) && keySeparator) {
          path2.push(...key.split(keySeparator));
        } else {
          path2.push(key);
        }
      }
    }
    const result = getPath(this.data, path2);
    if (!result && !ns && !key && lng.indexOf(".") > -1) {
      lng = path2[0];
      ns = path2[1];
      key = path2.slice(2).join(".");
    }
    if (result || !ignoreJSONStructure || !isString$1(key)) return result;
    return deepFind((_b2 = (_a2 = this.data) == null ? void 0 : _a2[lng]) == null ? void 0 : _b2[ns], key, keySeparator);
  }
  addResource(lng, ns, key, value, options = {
    silent: false
  }) {
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let path2 = [lng, ns];
    if (key) path2 = path2.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
      value = ns;
      ns = path2[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path2, value);
    if (!options.silent) this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources2, options = {
    silent: false
  }) {
    for (const m in resources2) {
      if (isString$1(resources2[m]) || Array.isArray(resources2[m])) this.addResource(lng, ns, m, resources2[m], {
        silent: true
      });
    }
    if (!options.silent) this.emit("added", lng, ns, resources2);
  }
  addResourceBundle(lng, ns, resources2, deep, overwrite, options = {
    silent: false,
    skipCopy: false
  }) {
    let path2 = [lng, ns];
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
      deep = resources2;
      resources2 = ns;
      ns = path2[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path2) || {};
    if (!options.skipCopy) resources2 = JSON.parse(JSON.stringify(resources2));
    if (deep) {
      deepExtend(pack, resources2, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources2
      };
    }
    setPath(this.data, path2, pack);
    if (!options.silent) this.emit("added", lng, ns, resources2);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== void 0;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find((v) => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach((processor) => {
      var _a2, _b2;
      value = (_b2 = (_a2 = this.processors[processor]) == null ? void 0 : _a2.process(value, key, options, translator)) != null ? _b2 : value;
    });
    return value;
  }
};
const PATH_KEY = Symbol("i18next/PATH_KEY");
function createProxy$1() {
  const state = [];
  const handler = /* @__PURE__ */ Object.create(null);
  let proxy;
  handler.get = (target, key) => {
    var _a2;
    (_a2 = proxy == null ? void 0 : proxy.revoke) == null ? void 0 : _a2.call(proxy);
    if (key === PATH_KEY) return state;
    state.push(key);
    proxy = Proxy.revocable(target, handler);
    return proxy.proxy;
  };
  return Proxy.revocable(/* @__PURE__ */ Object.create(null), handler).proxy;
}
function keysFromSelector(selector, opts) {
  var _a2;
  const {
    [PATH_KEY]: path2
  } = selector(createProxy$1());
  return path2.join((_a2 = opts == null ? void 0 : opts.keySeparator) != null ? _a2 : ".");
}
const checkedLoadedFor = {};
const shouldHandleAsObject = (res) => !isString$1(res) && typeof res !== "boolean" && typeof res !== "number";
class Translator extends EventEmitter {
  constructor(services, options = {}) {
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key, o = {
    interpolation: {}
  }) {
    const opt = {
      ...o
    };
    if (key == null) return false;
    const resolved = this.resolve(key, opt);
    return (resolved == null ? void 0 : resolved.res) !== void 0;
  }
  extractFromKey(key, opt) {
    let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0) nsSeparator = ":";
    const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
    let namespaces = opt.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces: isString$1(namespaces) ? [namespaces] : namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key,
      namespaces: isString$1(namespaces) ? [namespaces] : namespaces
    };
  }
  translate(keys, o, lastKey) {
    let opt = typeof o === "object" ? {
      ...o
    } : o;
    if (typeof opt !== "object" && this.options.overloadTranslationOptionHandler) {
      opt = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof opt === "object") opt = {
      ...opt
    };
    if (!opt) opt = {};
    if (keys == null) return "";
    if (typeof keys === "function") keys = keysFromSelector(keys, {
      ...this.options,
      ...opt
    });
    if (!Array.isArray(keys)) keys = [String(keys)];
    const returnDetails = opt.returnDetails !== void 0 ? opt.returnDetails : this.options.returnDetails;
    const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], opt);
    const namespace = namespaces[namespaces.length - 1];
    let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0) nsSeparator = ":";
    const lng = opt.lng || this.language;
    const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((lng == null ? void 0 : lng.toLowerCase()) === "cimode") {
      if (appendNamespaceToCIMode) {
        if (returnDetails) {
          return {
            res: "".concat(namespace).concat(nsSeparator).concat(key),
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(opt)
          };
        }
        return "".concat(namespace).concat(nsSeparator).concat(key);
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(opt)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, opt);
    let res = resolved == null ? void 0 : resolved.res;
    const resUsedKey = (resolved == null ? void 0 : resolved.usedKey) || key;
    const resExactUsedKey = (resolved == null ? void 0 : resolved.exactUsedKey) || key;
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = opt.joinArrays !== void 0 ? opt.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const needsPluralHandling = opt.count !== void 0 && !isString$1(opt.count);
    const hasDefaultValue = Translator.hasDefaultValue(opt);
    const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : "";
    const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, {
      ordinal: false
    }) : "";
    const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
    const defaultValue = needsZeroSuffixLookup && opt["defaultValue".concat(this.options.pluralSeparator, "zero")] || opt["defaultValue".concat(defaultValueSuffix)] || opt["defaultValue".concat(defaultValueSuffixOrdinalFallback)] || opt.defaultValue;
    let resForObjHndl = res;
    if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
      resForObjHndl = defaultValue;
    }
    const handleAsObject = shouldHandleAsObject(resForObjHndl);
    const resType = Object.prototype.toString.apply(resForObjHndl);
    if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && noObject.indexOf(resType) < 0 && !(isString$1(joinArrays) && Array.isArray(resForObjHndl))) {
      if (!opt.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r2 = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
          ...opt,
          ns: namespaces
        }) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        if (returnDetails) {
          resolved.res = r2;
          resolved.usedParams = this.getUsedParamsDetails(opt);
          return resolved;
        }
        return r2;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(resForObjHndl);
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in resForObjHndl) {
          if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
            const deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
            if (hasDefaultValue && !res) {
              copy2[m] = this.translate(deepKey, {
                ...opt,
                defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : void 0,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            } else {
              copy2[m] = this.translate(deepKey, {
                ...opt,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            }
            if (copy2[m] === deepKey) copy2[m] = resForObjHndl[m];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && isString$1(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, opt, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...opt,
            keySeparator: false
          });
          if (fk && fk.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
        } else {
          lngs.push(opt.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          var _a2;
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
          } else if ((_a2 = this.backendConnector) == null ? void 0 : _a2.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
          }
          this.emit("missingKey", l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language) => {
              const suffixes = this.pluralResolver.getSuffixes(language, opt);
              if (needsZeroSuffixLookup && opt["defaultValue".concat(this.options.pluralSeparator, "zero")] && suffixes.indexOf("".concat(this.options.pluralSeparator, "zero")) < 0) {
                suffixes.push("".concat(this.options.pluralSeparator, "zero"));
              }
              suffixes.forEach((suffix) => {
                send([language], key + suffix, opt["defaultValue".concat(suffix)] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, opt, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) {
        res = "".concat(namespace).concat(nsSeparator).concat(key);
      }
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace).concat(nsSeparator).concat(key) : key, usedDefault ? res : void 0, opt);
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(opt);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, opt, resolved, lastKey) {
    var _a2, _b2;
    if ((_a2 = this.i18nFormat) == null ? void 0 : _a2.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...opt
      }, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!opt.skipInterpolation) {
      if (opt.interpolation) this.interpolator.init({
        ...opt,
        ...{
          interpolation: {
            ...this.options.interpolation,
            ...opt.interpolation
          }
        }
      });
      const skipOnVariables = isString$1(res) && (((_b2 = opt == null ? void 0 : opt.interpolation) == null ? void 0 : _b2.skipOnVariables) !== void 0 ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = opt.replace && !isString$1(opt.replace) ? opt.replace : opt;
      if (this.options.interpolation.defaultVariables) data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
      res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) opt.nest = false;
      }
      if (!opt.lng && resolved && resolved.res) opt.lng = this.language || resolved.usedLng;
      if (opt.nest !== false) res = this.interpolator.nest(res, (...args) => {
        if ((lastKey == null ? void 0 : lastKey[0]) === args[0] && !opt.context) {
          this.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
          return null;
        }
        return this.translate(...args, key);
      }, opt);
      if (opt.interpolation) this.interpolator.reset();
    }
    const postProcess = opt.postProcess || this.options.postProcess;
    const postProcessorNames = isString$1(postProcess) ? [postProcess] : postProcess;
    if (res != null && (postProcessorNames == null ? void 0 : postProcessorNames.length) && opt.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(opt)
        },
        ...opt
      } : opt, this);
    }
    return res;
  }
  resolve(keys, opt = {}) {
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (isString$1(keys)) keys = [keys];
    keys.forEach((k) => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k, opt);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = opt.count !== void 0 && !isString$1(opt.count);
      const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
      const needsContextHandling = opt.context !== void 0 && (isString$1(opt.context) || typeof opt.context === "number") && opt.context !== "";
      const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
      namespaces.forEach((ns) => {
        var _a2, _b2;
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && ((_a2 = this.utils) == null ? void 0 : _a2.hasLoadedNamespace) && !((_b2 = this.utils) == null ? void 0 : _b2.hasLoadedNamespace(usedNS))) {
          checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
          this.logger.warn('key "'.concat(usedKey, '" for languages "').concat(codes.join(", "), '" won\'t get resolved as namespace "').concat(usedNS, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          var _a3;
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if ((_a3 = this.i18nFormat) == null ? void 0 : _a3.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
            const zeroSuffix = "".concat(this.options.pluralSeparator, "zero");
            const ordinalPrefix = "".concat(this.options.pluralSeparator, "ordinal").concat(this.options.pluralSeparator);
            if (needsPluralHandling) {
              if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              finalKeys.push(key + pluralSuffix);
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = "".concat(key).concat(this.options.contextSeparator || "_").concat(opt.context);
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                finalKeys.push(contextKey + pluralSuffix);
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, opt);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key, options = {}) {
    var _a2;
    if ((_a2 = this.i18nFormat) == null ? void 0 : _a2.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails(options = {}) {
    const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
    const useOptionsReplaceForData = options.replace && !isString$1(options.replace);
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== "undefined") {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = "defaultValue";
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
        return true;
      }
    }
    return false;
  }
}
class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0) return null;
    const p = code.split("-");
    if (p.length === 2) return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === "x") return null;
    return this.formatLanguageCode(p.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0) return code;
    const p = code.split("-");
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (isString$1(code) && code.indexOf("-") > -1) {
      let formattedCode;
      try {
        formattedCode = Intl.getCanonicalLocales(code)[0];
      } catch (e) {
      }
      if (formattedCode && this.options.lowerCaseLng) {
        formattedCode = formattedCode.toLowerCase();
      }
      if (formattedCode) return formattedCode;
      if (this.options.lowerCaseLng) {
        return code.toLowerCase();
      }
      return code;
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach((code) => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found) return;
        const lngScOnly = this.getScriptPartFromCode(code);
        if (this.isSupportedCode(lngScOnly)) return found = lngScOnly;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0) return;
          if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly) return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === "function") fallbacks = fallbacks(code);
    if (isString$1(fallbacks)) fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c) => {
      if (!c) return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
      }
    };
    if (isString$1(code) && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
    } else if (isString$1(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc) => {
      if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
}
const suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
const dummyRule = {
  select: (count) => count === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class PluralResolver {
  constructor(languageUtils, options = {}) {
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    this.pluralRulesCache = {};
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code, options = {}) {
    const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
    const type = options.ordinal ? "ordinal" : "cardinal";
    const cacheKey = JSON.stringify({
      cleanedCode,
      type
    });
    if (cacheKey in this.pluralRulesCache) {
      return this.pluralRulesCache[cacheKey];
    }
    let rule;
    try {
      rule = new Intl.PluralRules(cleanedCode, {
        type
      });
    } catch (err) {
      if (!Intl) {
        this.logger.error("No Intl support, please use an Intl polyfill!");
        return dummyRule;
      }
      if (!code.match(/-|_/)) return dummyRule;
      const lngPart = this.languageUtils.getLanguagePartFromCode(code);
      rule = this.getRule(lngPart, options);
    }
    this.pluralRulesCache[cacheKey] = rule;
    return rule;
  }
  needsPlural(code, options = {}) {
    let rule = this.getRule(code, options);
    if (!rule) rule = this.getRule("dev", options);
    return (rule == null ? void 0 : rule.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(code, key, options = {}) {
    return this.getSuffixes(code, options).map((suffix) => "".concat(key).concat(suffix));
  }
  getSuffixes(code, options = {}) {
    let rule = this.getRule(code, options);
    if (!rule) rule = this.getRule("dev", options);
    if (!rule) return [];
    return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => "".concat(this.options.prepend).concat(options.ordinal ? "ordinal".concat(this.options.prepend) : "").concat(pluralCategory));
  }
  getSuffix(code, count, options = {}) {
    const rule = this.getRule(code, options);
    if (rule) {
      return "".concat(this.options.prepend).concat(options.ordinal ? "ordinal".concat(this.options.prepend) : "").concat(rule.select(count));
    }
    this.logger.warn("no plural rule found for: ".concat(code));
    return this.getSuffix("dev", count, options);
  }
}
const deepFindWithDefaults = (data, defaultData, key, keySeparator = ".", ignoreJSONStructure = true) => {
  let path2 = getPathWithDefaults(data, defaultData, key);
  if (!path2 && ignoreJSONStructure && isString$1(key)) {
    path2 = deepFind(data, key, keySeparator);
    if (path2 === void 0) path2 = deepFind(defaultData, key, keySeparator);
  }
  return path2;
};
const regexSafe = (val) => val.replace(/\$/g, "$$$$");
class Interpolator {
  constructor(options = {}) {
    var _a2;
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = ((_a2 = options == null ? void 0 : options.interpolation) == null ? void 0 : _a2.format) || ((value) => value);
    this.init(options);
  }
  init(options = {}) {
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== void 0 ? escape$1 : escape;
    this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
    this.formatSeparator = formatSeparator || ",";
    this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
    this.maxReplaces = maxReplaces || 1e3;
    this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if ((existingRegExp == null ? void 0 : existingRegExp.source) === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, "g");
    };
    this.regexp = getOrResetRegExp(this.regexp, "".concat(this.prefix, "(.+?)").concat(this.suffix));
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix));
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, "".concat(this.nestingPrefix, "((?:[^()\"']+|\"[^\"]*\"|'[^']*'|\\((?:[^()]|\"[^\"]*\"|'[^']*')*\\))*?)").concat(this.nestingSuffix));
  }
  interpolate(str, data, lng, options) {
    var _a2;
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = (key) => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path2 = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path2, void 0, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path2;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = (options == null ? void 0 : options.missingInterpolationHandler) || this.options.missingInterpolationHandler;
    const skipOnVariables = ((_a2 = options == null ? void 0 : options.interpolation) == null ? void 0 : _a2.skipOnVariables) !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === void 0) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match, options);
            value = isString$1(temp) ? temp : "";
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));
            value = "";
          }
        } else if (!isString$1(value) && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc, options = {}) {
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      var _a2;
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      const c = key.split(new RegExp("".concat(sep, "[ ]*{")));
      let optionsString = "{".concat(c[1]);
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (((_a2 = matchedSingleQuotes == null ? void 0 : matchedSingleQuotes.length) != null ? _a2 : 0) % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = {
          ...inheritedOptions,
          ...clonedOptions
        };
      } catch (e) {
        this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
        return "".concat(key).concat(sep).concat(optionsString);
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && !isString$1(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      const keyEndIndex = /{.*}/.test(match[1]) ? match[1].lastIndexOf("}") + 1 : match[1].indexOf(this.formatSeparator);
      if (keyEndIndex !== -1) {
        formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem) => elem.trim()).filter(Boolean);
        match[1] = match[1].slice(0, keyEndIndex);
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString$1(value)) return value;
      if (!isString$1(value)) value = makeString(value);
      if (!value) {
        this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
        value = "";
      }
      if (formatters.length) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}
const parseFormatStr = (formatStr) => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    const p = formatStr.split("(");
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (opt) {
          const [key, ...rest] = opt.split(":");
          const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === "false") formatOptions[trimmedKey] = false;
          if (val === "true") formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
const createCachedFormatter = (fn) => {
  const cache2 = {};
  return (v, l, o) => {
    let optForCache = o;
    if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) {
      optForCache = {
        ...optForCache,
        [o.interpolationkey]: void 0
      };
    }
    const key = l + JSON.stringify(optForCache);
    let frm = cache2[key];
    if (!frm) {
      frm = fn(getCleanedCode(l), o);
      cache2[key] = frm;
    }
    return frm(v);
  };
};
const createNonCachedFormatter = (fn) => (v, l, o) => fn(getCleanedCode(l), o)(v);
class Formatter {
  constructor(options = {}) {
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.init(options);
  }
  init(services, options = {
    interpolation: {}
  }) {
    this.formatSeparator = options.interpolation.formatSeparator || ",";
    const cf = options.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
    this.formats = {
      number: cf((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      currency: cf((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: "currency"
        });
        return (val) => formatter.format(val);
      }),
      datetime: cf((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      relativetime: cf((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: cf((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      })
    };
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng, options = {}) {
    const formats = format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf("(") > 1 && formats[0].indexOf(")") < 0 && formats.find((f) => f.indexOf(")") > -1)) {
      const lastIndex = formats.findIndex((f) => f.indexOf(")") > -1);
      formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
    }
    const result = formats.reduce((mem, f) => {
      var _a2;
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = ((_a2 = options == null ? void 0 : options.formatParams) == null ? void 0 : _a2[options.interpolationkey]) || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn("there was no format function for ".concat(formatName));
      }
      return mem;
    }, value);
    return result;
  }
}
const removePending = (q, name) => {
  if (q.pending[name] !== void 0) {
    delete q.pending[name];
    q.pendingCount--;
  }
};
class Connector extends EventEmitter {
  constructor(backend, store, services, options = {}) {
    var _a2, _b2;
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    (_b2 = (_a2 = this.backend) == null ? void 0 : _a2.init) == null ? void 0 : _b2.call(_a2, services, options.backend, options);
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = "".concat(lng, "|").concat(ns);
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ;
        else if (this.state[name] === 1) {
          if (pending[name] === void 0) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === void 0) pending[name] = true;
          if (toLoad[name] === void 0) toLoad[name] = true;
          if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    if (err) this.emit("failedLoading", lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, void 0, void 0, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data) this.state[name] = 0;
    const loaded = {};
    this.queue.forEach((q) => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach((l) => {
          if (!loaded[l]) loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach((n) => {
              if (loaded[l][n] === void 0) loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q) => !q.done);
  }
  read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r2 = fc(lng, ns);
        if (r2 && typeof r2.then === "function") {
          r2.then((data) => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r2);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces, options = {}, callback) {
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (isString$1(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
    if (isString$1(namespaces)) namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name, prefix = "") {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, "read", void 0, void 0, (err, data) => {
      if (err) this.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
      if (!err && data) this.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate, options = {}, clb = () => {
  }) {
    var _a2, _b2, _c2, _d, _e;
    if (((_b2 = (_a2 = this.services) == null ? void 0 : _a2.utils) == null ? void 0 : _b2.hasLoadedNamespace) && !((_d = (_c2 = this.services) == null ? void 0 : _c2.utils) == null ? void 0 : _d.hasLoadedNamespace(namespace))) {
      this.logger.warn('did not save key "'.concat(key, '" as the namespace "').concat(namespace, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === void 0 || key === null || key === "") return;
    if ((_e = this.backend) == null ? void 0 : _e.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r2;
          if (fc.length === 5) {
            r2 = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r2 = fc(languages, namespace, key, fallbackValue);
          }
          if (r2 && typeof r2.then === "function") {
            r2.then((data) => clb(null, data)).catch(clb);
          } else {
            clb(null, r2);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}
const get = () => ({
  debug: false,
  initAsync: true,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: "all",
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: "fallback",
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: (args) => {
    let ret = {};
    if (typeof args[1] === "object") ret = args[1];
    if (isString$1(args[1])) ret.defaultValue = args[1];
    if (isString$1(args[2])) ret.tDescription = args[2];
    if (typeof args[2] === "object" || typeof args[3] === "object") {
      const options = args[3] || args[2];
      Object.keys(options).forEach((key) => {
        ret[key] = options[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    format: (value) => value,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: true
  },
  cacheInBuiltFormats: true
});
const transformOptions = (options) => {
  var _a2, _b2;
  if (isString$1(options.ns)) options.ns = [options.ns];
  if (isString$1(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
  if (isString$1(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
  if (((_b2 = (_a2 = options.supportedLngs) == null ? void 0 : _a2.indexOf) == null ? void 0 : _b2.call(_a2, "cimode")) < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  if (typeof options.initImmediate === "boolean") options.initAsync = options.initImmediate;
  return options;
};
const noop = () => {
};
const bindMemberFunctions = (inst) => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
class I18n extends EventEmitter {
  constructor(options = {}, callback) {
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initAsync) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init(options = {}, callback) {
    this.isInitializing = true;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (options.defaultNS == null && options.ns) {
      if (isString$1(options.ns)) {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf("translation") < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    this.options.interpolation = {
      ...defOpts.interpolation,
      ...this.options.interpolation
    };
    if (options.keySeparator !== void 0) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== void 0) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    const createClassOnDemand2 = (ClassOrObject) => {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === "function") return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand2(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      const usingLegacyFormatFunction = this.options.interpolation.format && this.options.interpolation.format !== defOpts.interpolation.format;
      if (usingLegacyFormatFunction) {
        this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting");
      }
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand2(formatter);
        if (s.formatter.init) s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand2(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on("*", (event, ...args) => {
        this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand2(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand2(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", (event, ...args) => {
        this.emit(event, ...args);
      });
      this.modules.external.forEach((m) => {
        if (m.init) m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = (...args) => this.store[fcName](...args);
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = (...args) => {
        this.store[fcName](...args);
        return this;
      };
    });
    const deferred = defer();
    const load2 = () => {
      const finish = (err, t2) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t2);
        callback(err, t2);
      };
      if (this.languages && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initAsync) {
      load2();
    } else {
      setTimeout(load2, 0);
    }
    return deferred;
  }
  loadResources(language, callback = noop) {
    var _a2, _b2;
    let usedCallback = callback;
    const usedLng = isString$1(language) ? language : this.language;
    if (typeof language === "function") usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if ((usedLng == null ? void 0 : usedLng.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      const toLoad = [];
      const append = (lng) => {
        if (!lng) return;
        if (lng === "cimode") return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l) => {
          if (l === "cimode") return;
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l) => append(l));
      } else {
        append(usedLng);
      }
      (_b2 = (_a2 = this.options.preload) == null ? void 0 : _a2.forEach) == null ? void 0 : _b2.call(_a2, (l) => append(l));
      this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
        if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (typeof lngs === "function") {
      callback = lngs;
      lngs = void 0;
    }
    if (typeof ns === "function") {
      callback = ns;
      ns = void 0;
    }
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module.type === "backend") {
      this.modules.backend = module;
    }
    if (module.type === "logger" || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === "languageDetector") {
      this.modules.languageDetector = module;
    }
    if (module.type === "i18nFormat") {
      this.modules.i18nFormat = module;
    }
    if (module.type === "postProcessor") {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === "formatter") {
      this.modules.formatter = module;
    }
    if (module.type === "3rdParty") {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages) return;
    if (["cimode", "dev"].indexOf(l) > -1) return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (["cimode", "dev"].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
    if (!this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l)) {
      this.resolvedLanguage = l;
      this.languages.unshift(l);
    }
  }
  changeLanguage(lng, callback) {
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit("languageChanging", lng);
    const setLngProps = (l) => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = void 0;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        if (this.isLanguageChangingTo === lng) {
          setLngProps(l);
          this.translator.changeLanguage(l);
          this.isLanguageChangingTo = void 0;
          this.emit("languageChanged", l);
          this.logger.log("languageChanged", l);
        }
      } else {
        this.isLanguageChangingTo = void 0;
      }
      deferred.resolve((...args) => this.t(...args));
      if (callback) callback(err, (...args) => this.t(...args));
    };
    const setLng = (lngs) => {
      var _a2, _b2;
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const fl = isString$1(lngs) ? lngs : lngs && lngs[0];
      const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString$1(lngs) ? [lngs] : lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language) this.translator.changeLanguage(l);
        (_b2 = (_a2 = this.services.languageDetector) == null ? void 0 : _a2.cacheUserLanguage) == null ? void 0 : _b2.call(_a2, l);
      }
      this.loadResources(l, (err) => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    const fixedT = (key, opts, ...rest) => {
      let o;
      if (typeof opts !== "object") {
        o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        o = {
          ...opts
        };
      }
      o.lng = o.lng || fixedT.lng;
      o.lngs = o.lngs || fixedT.lngs;
      o.ns = o.ns || fixedT.ns;
      if (o.keyPrefix !== "") o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = this.options.keySeparator || ".";
      let resultKey;
      if (o.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k) => {
          if (typeof k === "function") k = keysFromSelector(k, {
            ...this.options,
            ...opts
          });
          return "".concat(o.keyPrefix).concat(keySeparator).concat(k);
        });
      } else {
        if (typeof key === "function") key = keysFromSelector(key, {
          ...this.options,
          ...opts
        });
        resultKey = o.keyPrefix ? "".concat(o.keyPrefix).concat(keySeparator).concat(key) : key;
      }
      return this.t(resultKey, o);
    };
    if (isString$1(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t(...args) {
    var _a2;
    return (_a2 = this.translator) == null ? void 0 : _a2.translate(...args);
  }
  exists(...args) {
    var _a2;
    return (_a2 = this.translator) == null ? void 0 : _a2.exists(...args);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns, options = {}) {
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode") return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state["".concat(l, "|").concat(n)];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== void 0) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (isString$1(ns)) ns = [ns];
    ns.forEach((n) => {
      if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (isString$1(lngs)) lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    var _a2, _b2;
    if (!lng) lng = this.resolvedLanguage || (((_a2 = this.languages) == null ? void 0 : _a2.length) > 0 ? this.languages[0] : this.language);
    if (!lng) return "rtl";
    try {
      const l = new Intl.Locale(lng);
      if (l && l.getTextInfo) {
        const ti = l.getTextInfo();
        if (ti && ti.direction) return ti.direction;
      }
    } catch (e) {
    }
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = ((_b2 = this.services) == null ? void 0 : _b2.languageUtils) || new LanguageUtil(get());
    if (lng.toLowerCase().indexOf("-latn") > 1) return "ltr";
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(options = {}, callback) {
    return new I18n(options, callback);
  }
  cloneInstance(options = {}, callback = noop) {
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== void 0 || options.prefix !== void 0) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m) => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      const clonedData = Object.keys(this.store.data).reduce((prev, l) => {
        prev[l] = {
          ...this.store.data[l]
        };
        prev[l] = Object.keys(prev[l]).reduce((acc, n) => {
          acc[n] = {
            ...prev[l][n]
          };
          return acc;
        }, prev[l]);
        return prev;
      }, {});
      clone.store = new ResourceStore(clonedData, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", (event, ...args) => {
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
instance.createInstance;
instance.dir;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
const changeLanguage = instance.changeLanguage;
instance.getFixedT;
const t = instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;
const DEVTOOLS_CONFIG$7 = {
  name: "".concat(document.title, " - useWinNumberStore"),
  store: "WinNumberStore",
  serialize: {
    options: true
  }
};
function createWinNumberStore() {
  return create(
    devtools(
      subscribeWithSelector((set2, get2) => ({
        userWin: 0,
        history: [],
        recentHistoryDetails: [],
        // for locating wins in bet result
        lastWinCache: 0,
        showWinnerList: false,
        winnerList: [],
        initPrevRounds: (data) => {
          const { tableHistory } = data;
          if (!tableHistory) return;
          const recentHistoryDetails = tableHistory.filter((round) => round.result).map((round) => {
            var _a2;
            return {
              result: Object.values(round.result)[0],
              roundId: (_a2 = round.roundId) != null ? _a2 : ""
            };
          }).reverse().slice(-500);
          const history = recentHistoryDetails.map((round) => round.result);
          set2({ history, recentHistoryDetails });
        },
        add: (result, roundId) => {
          set2((s) => {
            const history = s.history.concat([result]).slice(-500);
            const recentHistoryDetails = s.recentHistoryDetails.concat({ result, roundId }).slice(-20);
            return { history, recentHistoryDetails };
          });
        },
        getDescHistory: () => get2().history.slice().reverse(),
        clearHistory: () => {
          console.debug("history cleared");
          set2({ history: [] });
        }
      })),
      DEVTOOLS_CONFIG$7
    )
  );
}
const useWinNumberStore = createWinNumberStore();
const getWinNumberStore = () => useWinNumberStore;
const DEVTOOLS_CONFIG$6 = {
  name: "".concat(document.title, " - useWinAnimStore"),
  store: "WinAnimStore",
  serialize: { options: true }
};
function createWinAnimStore() {
  const useWinNumberStore2 = getWinNumberStore();
  const createWinResultData = (payload, timecode, isTableFinished = false) => {
    const { table, activeRound } = payload;
    if (!table || !activeRound) return null;
    const { gameType, gameCode } = table;
    const { roundId, result: roundResult } = activeRound;
    if (!roundId || !roundResult || !gameType) return null;
    const result = Object.values(roundResult)[0];
    const checkResultValid = getCheckResultValidFn(gameType);
    const isValid = checkResultValid(roundResult);
    if (!isValid) {
      console.error("Invalid result structure:", { gameType, gameCode, result });
      return null;
    }
    const roundInfo = { roundId, gameType, gameCode };
    console.debug("roundInfo", roundInfo, "roundResult", roundResult);
    const betDetail = getBetDetail();
    const { payoutDetail = {}, amount = 0 } = betDetail ? getPayout(gameType, roundResult, betDetail) : {};
    const tableMaxPayout = useConfigStore.getState().tableMaxPayout;
    const isMaxWin = amount > tableMaxPayout;
    return {
      roundId,
      result,
      betDetail,
      payout: payoutDetail,
      userWin: isMaxWin ? tableMaxPayout : amount,
      isMaxWin,
      // TODO: Since player.setMaxLatency is working, we can use the table.finish as win animation trigger and remove this logic, leaving it for now just in case
      isTimeUp: true,
      // isTimeUp: timecode ? false : true, // If timecode is provided, it will be set to false for timeup callback
      isTableFinished,
      timecode
    };
  };
  const updateStores = (roundId, winResult) => {
    const { result, userWin } = winResult;
    useWinNumberStore2.getState().add(result, roundId);
    const tableMaxPayout = useConfigStore.getState().tableMaxPayout;
    if (userWin) useWinNumberStore2.setState({ lastWinCache: Math.min(tableMaxPayout, userWin) });
  };
  const runWinResultAnim = async (set2, get2, winResult) => {
    const ANIMATION_START_DELAY = 333;
    const WIN_ANIMATION_DELAY = 2250 - 333;
    const CHIPS_MOVING_DELAY = 1250;
    set2({ animState: "animationStart", winResult });
    await sleep(ANIMATION_START_DELAY);
    set2({ animState: "winAnimationStart" });
    await sleep(WIN_ANIMATION_DELAY);
    set2({ animState: "winChipsMoving" });
    await sleep(CHIPS_MOVING_DELAY);
    set2({ animState: null, winResult: null, dealResult: null });
    useConfigStore.setState({ tableFinished: true });
    const roundId = winResult.roundId;
    const { winResults, pendingTimecodes } = get2();
    const newWinResults = removeRoundFromResults(winResults, roundId);
    set2({ winResults: newWinResults });
    const timecode = pendingTimecodes.shift();
    if (timecode) handleTimeUp(set2, get2, timecode);
  };
  const runCancelAnim = async (set2) => {
    set2({ animState: "winChipsMoving" });
    await sleep(600);
    set2({ animState: null, winResult: null, dealResult: null });
    useCartStore.setState({ boardHistory: [] });
  };
  const handleTimeUp = (set2, get2, timecode) => {
    const { animState, pendingTimecodes, dealResults, winResults } = get2();
    const dealResult = Object.values(dealResults).flat().find((v) => v.timecode === timecode);
    if (dealResult) set2({ dealResult });
    const winResult = Object.entries(winResults).find(([, v]) => v.timecode === timecode);
    if (!winResult) return;
    if (animState) {
      pendingTimecodes.push(timecode);
      set2({ pendingTimecodes });
      return;
    }
    const [roundId, winResultData] = winResult;
    const { isTableFinished } = winResultData;
    if (isTableFinished) {
      updateStores(roundId, winResultData);
      runWinResultAnim(set2, get2, winResultData);
    } else {
      set2({ winResults: { ...get2().winResults, [roundId]: { ...winResultData, isTimeUp: true } } });
    }
  };
  const subscribe = subscribeWithSelector((set2, get2) => ({
    animState: null,
    animTimeCode: null,
    pendingTimecodes: [],
    dealResults: {},
    dealResult: null,
    onTableDeal: (payload, timecode) => {
      var _a2, _b2;
      const { table, activeRound } = payload;
      if (!table || !activeRound) return;
      const { roundId } = activeRound;
      if (!roundId) return;
      const { getDealDetail, dealResults, betResultErrorRoundId } = get2();
      if (betResultErrorRoundId === roundId) return;
      const winResult = createWinResultData(payload, timecode, false);
      if (!winResult) return;
      const setWinResult = () => set2((s) => ({
        animTimeCode: timecode,
        winResults: { ...s.winResults, [roundId]: winResult }
      }));
      if (!getDealDetail) {
        setWinResult();
        return;
      }
      const { result } = winResult;
      const prevResult = (_b2 = (_a2 = dealResults[roundId]) == null ? void 0 : _a2.at(-1)) == null ? void 0 : _b2.curr;
      const { isDone, diff, detail } = getDealDetail(result, prevResult);
      const dealResult = {
        roundId,
        curr: result,
        diff,
        timecode,
        currDetail: detail
      };
      console.debug("dealResult", dealResult, "isDone", isDone);
      set2({ dealResult });
      if (isDone) setWinResult();
    },
    winResults: {},
    winResult: null,
    onTableFinished: (payload, finishedTimecode) => {
      var _a2;
      const { roundId, status } = (_a2 = payload == null ? void 0 : payload.activeRound) != null ? _a2 : {};
      const { dealResults, winResults, betResultErrorRoundId, getDealDetail } = get2();
      const storedDealResult = dealResults[roundId || ""];
      let storedWinResult = winResults[roundId || ""];
      if (betResultErrorRoundId === roundId) {
        set2({ betResultErrorRoundId: null });
        return;
      }
      if (!roundId || status !== "finished") {
        runCancelAnim(set2);
        return;
      }
      if (!storedWinResult) {
        const createdWinResult = createWinResultData(payload, finishedTimecode, true);
        if (!createdWinResult) {
          runCancelAnim(set2);
          return;
        }
        storedWinResult = createdWinResult;
        set2({ winResults: { ...winResults, [roundId]: storedWinResult } });
      }
      const { userWin, timecode, isTimeUp } = storedWinResult;
      if (!storedDealResult && getDealDetail) {
        const { result } = storedWinResult;
        const { diff, detail } = getDealDetail(result);
        const dealResult = {
          roundId,
          curr: result,
          diff,
          timecode,
          currDetail: detail
        };
        set2({ dealResult });
      }
      if (isTimeUp) {
        const tableMaxPayout = useConfigStore.getState().tableMaxPayout;
        const currencySymbol = useCartStore.getState().currencySymbol;
        if (userWin >= tableMaxPayout) {
          const toastText = instance.t("COMMON.MAX_WIN_REACHED", {
            currencySymbol,
            amount: thousandSeparator(tableMaxPayout)
          });
          useToastStore.getState().addToast("info", toastText);
        }
        updateStores(roundId, storedWinResult);
        runWinResultAnim(set2, get2, storedWinResult);
        return;
      } else if (timecode) {
        set2({ winResults: { ...winResults, [roundId]: { ...storedWinResult, isTableFinished: true } } });
      }
    },
    betResultErrorRoundId: null,
    onBetResultError: (roundId) => {
      const { dealResults, winResults } = get2();
      const newDealResults = removeRoundFromResults(dealResults, roundId);
      const newWinResults = removeRoundFromResults(winResults, roundId);
      set2({
        betResultErrorRoundId: roundId,
        dealResults: newDealResults,
        winResults: newWinResults
      });
      runCancelAnim(set2);
    },
    onTimeUp: (timecode) => handleTimeUp(set2, get2, timecode),
    animateChipRemoval: async () => {
      set2({ animState: "animationStart" });
      await sleep(333);
      set2({ animState: null, winResult: null, dealResult: null });
    }
  }));
  return create(devtools(subscribe, DEVTOOLS_CONFIG$6));
}
const useWinAnimStore$2 = createWinAnimStore();
const removeRoundFromResults = (results, roundId) => {
  return Object.entries(results).reduce((acc, [k, v]) => k !== roundId ? { ...acc, [k]: v } : acc, {});
};
const getWinAnimStore = () => useWinAnimStore$2;
class BetEventHandlers {
  static onBetResult(msg, currentRoundId) {
    const ev = msg;
    console.debug("BET_RESULT", ev);
    if (ev.error) {
      const { error } = ev;
      console.error("error code: ".concat(error.code, ", ").concat(error.message));
      useWinAnimStore$2.getState().onBetResultError(currentRoundId);
      useToastStore.getState().addToast("error", error.message);
      useDebugStore.getState().setMsg("".concat(GameEvent.BET_RESULT, ": ").concat(JSON.stringify(ev.error)));
      return false;
    }
    return true;
  }
  static onBetHistoryList(msg) {
    var _a2;
    const ev = msg;
    console.debug(GameEvent.BET_HISTORY_LIST, ev);
    const { betHistory, next } = (_a2 = ev.data) != null ? _a2 : {};
    if (betHistory) useHistoryStore.getState().addHistories(betHistory);
    useHistoryStore.setState({ next });
  }
  static onBetHistorySubtotal(msg) {
    var _a2;
    const ev = msg;
    console.debug(GameEvent.BET_HISTORY_SUBTOTAL, ev);
    const { betHistorySubtotals } = (_a2 = ev.data) != null ? _a2 : {};
    if (betHistorySubtotals) useHistoryStore.getState().addDaySubtotal(betHistorySubtotals);
  }
  static onBetStats(msg) {
    var _a2;
    const ev = msg;
    const { betStats } = (_a2 = ev.data) != null ? _a2 : {};
    if (betStats) useCartStore.setState({ betStats });
  }
}
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
function die(error, ...args) {
  throw new Error(
    "[Immer] minified error nr: ".concat(error, ". Full error at: https://bit.ly/3cXEKWf")
  );
}
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  var _a2;
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!((_a2 = value.constructor) == null ? void 0 : _a2[DRAFTABLE]) || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function each$1(obj, iter) {
  if (getArchtype(obj) === 0) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function set(thing, propOrOldValue, value) {
  const t2 = getArchtype(thing);
  if (t2 === 2)
    thing.set(propOrOldValue, value);
  else if (t2 === 3) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    Object.defineProperties(obj, {
      set: { value: dontMutateFrozenCollections },
      add: { value: dontMutateFrozenCollections },
      clear: { value: dontMutateFrozenCollections },
      delete: { value: dontMutateFrozenCollections }
    });
  }
  Object.freeze(obj);
  if (deep)
    Object.values(obj).forEach((value) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 || state.type_ === 1)
    state.revoke_();
  else
    state.revoked_ = true;
}
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path2) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each$1(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path2)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each$1(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path2, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path2 && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path2,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (isDraft(childValue)) {
    const path2 = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path2);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop)))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc == null ? void 0 : desc.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2 == null ? void 0 : current2[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each$1(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  var _a2;
  const desc = getDescriptorFromProto(source, prop);
  return desc ? "value" in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (_a2 = desc.get) == null ? void 0 : _a2.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof (config == null ? void 0 : config.autoFreeze) === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof (config == null ? void 0 : config.useStrictShallowCopy) === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy2;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy2 = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy2 = shallowCopy(value, true);
  }
  each$1(copy2, (key, childValue) => {
    set(copy2, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy2;
}
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each$1(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r2 = iterator.next();
          if (r2.done)
            return r2;
          const value = this.get(r2.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r2 = iterator.next();
          if (r2.done)
            return r2;
          const value = this.get(r2.value);
          return {
            done: false,
            value: [r2.value, value]
          };
        }
      };
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [Symbol.iterator]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}
var immer$1 = new Immer2();
var produce = immer$1.produce;
const immerImpl = (initializer) => (set2, get2, store) => {
  store.setState = (updater, replace, ...a) => {
    const nextState = typeof updater === "function" ? produce(updater) : updater;
    return set2(nextState, replace, ...a);
  };
  return initializer(store.setState, get2, store);
};
const immer = immerImpl;
enableMapSet();
var LoadingResourceEnum = /* @__PURE__ */ ((LoadingResourceEnum2) => {
  LoadingResourceEnum2["PixiCore"] = "Pixi Core";
  LoadingResourceEnum2["ConnectToRGS"] = "Connect To RGS";
  LoadingResourceEnum2["SyncWallet"] = "Sync Wallet";
  LoadingResourceEnum2["AppPromise"] = "Lazy App Promise";
  LoadingResourceEnum2["i18n"] = "i18n";
  return LoadingResourceEnum2;
})(LoadingResourceEnum || {});
var LoadingStageEnum = /* @__PURE__ */ ((LoadingStageEnum2) => {
  LoadingStageEnum2[LoadingStageEnum2["Init"] = 0] = "Init";
  LoadingStageEnum2[LoadingStageEnum2["Idle"] = 1] = "Idle";
  LoadingStageEnum2[LoadingStageEnum2["Loading"] = 2] = "Loading";
  LoadingStageEnum2[LoadingStageEnum2["Loaded"] = 3] = "Loaded";
  LoadingStageEnum2[LoadingStageEnum2["PostLoaded1"] = 4] = "PostLoaded1";
  LoadingStageEnum2[LoadingStageEnum2["PostLoaded2"] = 5] = "PostLoaded2";
  LoadingStageEnum2[LoadingStageEnum2["PostLoaded3"] = 6] = "PostLoaded3";
  LoadingStageEnum2[LoadingStageEnum2["PostLoaded4"] = 7] = "PostLoaded4";
  return LoadingStageEnum2;
})(LoadingStageEnum || {});
const DEVTOOLS_CONFIG$5 = {
  name: "".concat(document.title, " - useLoadingStore"),
  store: "LoadingStore",
  serialize: {
    options: true
  }
};
const useLoadingStore = create()(
  devtools(
    subscribeWithSelector(
      immer((set2, _get) => ({
        resources: /* @__PURE__ */ new Set([
          "i18n"
          /* i18n */
        ]),
        totalResources: 0,
        isWebP: false,
        loadingStage: 0,
        isUpdatingStage: false,
        isLoadingFinished: false,
        addToResources: (key) => {
          set2(
            (state) => {
              state.resources.add(key);
              state.totalResources = Math.max(state.totalResources, state.resources.size);
            },
            void 0,
            "addToResources"
          );
        },
        decrementResources: (key) => {
          set2(
            (state) => {
              state.resources.delete(key);
            },
            void 0,
            "decrementResources"
          );
        }
      }))
    ),
    DEVTOOLS_CONFIG$5
  )
);
useLoadingStore.subscribe(
  (state) => state.loadingStage,
  async (loadingStage) => {
    if (loadingStage !== 3) return;
    await sleep(1e3);
    useLoadingStore.setState({
      loadingStage: 4
      /* PostLoaded1 */
    });
    await sleep(500);
    useLoadingStore.setState({
      loadingStage: 5
      /* PostLoaded2 */
    });
    await sleep(1500);
    useLoadingStore.setState({
      loadingStage: 6
      /* PostLoaded3 */
    });
    await sleep(3500);
    useLoadingStore.setState({
      loadingStage: 7,
      isLoadingFinished: true
    });
  }
);
useLoadingStore.subscribe(
  (state) => ({
    resources: state.resources,
    totalResources: state.totalResources,
    loadingStage: state.loadingStage,
    isUpdatingStage: state.isUpdatingStage
  }),
  ({ resources: resources2, totalResources, loadingStage, isUpdatingStage }) => {
    if (loadingStage >= 3) return;
    const progress = (totalResources - resources2.size) / totalResources || 0;
    if (loadingStage !== 1 && progress === 0) return;
    let targetStage = 1;
    if (progress > 0) targetStage = 2;
    if (progress >= 1) targetStage = 3;
    const nextStage = loadingStage + 1;
    if (nextStage <= targetStage && nextStage !== loadingStage && !isUpdatingStage) {
      useLoadingStore.setState({ isUpdatingStage: true });
      const updateStage = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        useLoadingStore.setState({
          loadingStage: nextStage,
          isUpdatingStage: false
        });
      };
      updateStage();
    }
  }
);
const traceWsMessageEvent = (name, msg, user) => startSpan({ name, op: "websocket.event" }, (span) => {
  try {
    span.setAttribute("sid", (user == null ? void 0 : user.sid) || "no sid provided");
    span.setAttribute("msg", JSON.stringify(msg || "no message provided"));
  } catch (error) {
    console.warn("Failed to serialize WebSocket message for tracing:", error);
    span.setAttribute("serialization_error", true);
  }
  return span;
});
class ConnectionEventHandlers {
  static onOpened(_msg, connectIns2, gameTable) {
    useNetworkStore.setState({ isConnected: true });
    connectIns2.send(GameAction.SUBSCRIBE_TABLE, { gameCode: gameTable });
    const decrementResources2 = useLoadingStore.getState().decrementResources;
    decrementResources2(LoadingResourceEnum.ConnectToRGS);
    console.debug("connect to RGS");
    useDebugStore.getState().setMsg("".concat(WsEvent.WS_OPENED));
  }
  static onClosed(_msg) {
    useDebugStore.getState().setMsg("".concat(WsEvent.WS_CLOSED));
  }
  static onReconnecting(msg, sessionId) {
    traceWsMessageEvent(WsEvent.WS_RECONNECTING, msg, { sid: sessionId });
    console.debug(WsEvent.WS_RECONNECTING, msg);
    useNetworkStore.setState({ isConnected: false });
    useDebugStore.getState().setMsg("".concat(WsEvent.WS_RECONNECTING));
  }
  static onReconnected(msg, connectIns2, gameTable, sessionId) {
    traceWsMessageEvent(WsEvent.WS_RECONNECTED, msg, { sid: sessionId });
    console.debug(WsEvent.WS_RECONNECTED, msg);
    connectIns2.syncWallet();
    useNetworkStore.setState({ isConnected: true });
    connectIns2.send(GameAction.SUBSCRIBE_TABLE, { gameCode: gameTable });
    useDebugStore.getState().setMsg("".concat(WsEvent.WS_RECONNECTED));
  }
}
const SYSTEM_MESSAGE_KEY_MAP = {
  // SDP events
  ROULETTE_LAUNCH_FAIL: { localeKey: "SYSTEM_MESSAGE.GENERAL_ERROR_RESPIN", type: "error" },
  ROULETTE_SENSOR_STUCK: { localeKey: "SYSTEM_MESSAGE.GENERAL_ERROR", type: "error" },
  ROULETTE_WRONG_BALL_DIR: { localeKey: "SYSTEM_MESSAGE.GENERAL_ERROR_RESPIN", type: "error" },
  SICBO_INVALID_RESULT: { localeKey: "SYSTEM_MESSAGE.SICBO_INVALID_RESULT", type: "error" },
  SICBO_NO_SHAKE: { localeKey: "SYSTEM_MESSAGE.GENERAL_ERROR", type: "error" },
  // Live events
  SHUFFLE: {
    localeKey: "SYSTEM_MESSAGE.SHUFFLE",
    type: "info",
    callback: () => {
      useWinNumberStore.getState().clearHistory();
    }
  }
};
class MessageEventHandlers {
  static onGameMessage(msg) {
    var _a2;
    const ev = msg;
    const msgHistory = (_a2 = ev.data) == null ? void 0 : _a2.msgHistory;
    console.debug(GameEvent.GAME_MESSAGE, msgHistory);
    if (msgHistory) {
      useChatStore.getState().addBubble(msgHistory, RoomType.Live);
    }
  }
  static onSupportMessage(msg) {
    var _a2;
    const ev = msg;
    const msgHistory = (_a2 = ev.data) == null ? void 0 : _a2.msgHistory;
    console.debug(GameEvent.SUPPORT_MESSAGE, msgHistory);
    if (msgHistory) {
      useChatStore.getState().addBubble(msgHistory, RoomType.Support);
    }
  }
  static onSystemMessage(msg) {
    var _a2, _b2;
    const ev = msg;
    console.debug(GameEvent.SYSTEM_MESSAGE, ev);
    const msgId = (_b2 = (_a2 = msg.data) == null ? void 0 : _a2.sysMsg) == null ? void 0 : _b2.msgId;
    if (!msgId) {
      console.error("SYSTEM_MESSAGE missing required fields");
      return;
    }
    const messageMap = SYSTEM_MESSAGE_KEY_MAP[msg.data.sysMsg.msgId];
    if (messageMap) {
      const { localeKey, type, callback } = messageMap;
      useToastStore.getState().addToast(type, t(localeKey));
      callback == null ? void 0 : callback();
    } else {
      useDebugStore.getState().setMsg("type: unknown, system msgId: ".concat(msgId));
    }
  }
}
class PlayerEventHandlers {
  static onPlayerState(msg) {
    var _a2, _b2, _c2, _d;
    const ev = msg;
    console.debug(GameEvent.PLAYER_STATE, ev);
    const unreadMessages = (_d = (_c2 = (_b2 = (_a2 = ev.data) == null ? void 0 : _a2.player) == null ? void 0 : _b2.unread) == null ? void 0 : _c2.support) != null ? _d : 0;
    useChatStore.setState({ supportChatUnread: unreadMessages });
  }
  static onWalletState(msg, getHistory) {
    var _a2, _b2, _c2, _d, _e, _f;
    const ev = msg;
    console.debug(GameEvent.WALLET_STATE, ev);
    getHistory();
    const minChipAmount = useCartStore.getState().chipList[0];
    const balance = (_c2 = (_b2 = (_a2 = ev.data) == null ? void 0 : _a2.wallet) == null ? void 0 : _b2.balance) != null ? _c2 : 0;
    const currencySymbol = (_f = (_e = (_d = ev.data) == null ? void 0 : _d.wallet) == null ? void 0 : _e.currencySymbol) != null ? _f : useCartStore.getState().currencySymbol;
    useCartStore.setState((s) => ({
      ...s,
      walletBalance: balance,
      remainedBalance: balance,
      currencySymbol,
      lowBalanceNotifyCount: balance < minChipAmount.amount ? s.lowBalanceNotifyCount + 1 : 1
    }));
  }
}
class SessionEventHandlers {
  static onSessionKicked(msg) {
    var _a2, _b2, _c2;
    const ev = msg;
    console.debug(GameEvent.SESSION_KICKED, ev);
    const code = (_b2 = (_a2 = ev.data) == null ? void 0 : _a2.kicked) == null ? void 0 : _b2.code;
    useDebugStore.getState().setMsg(
      "".concat(GameEvent.SESSION_KICKED, ": ").concat(code === SESSION_ERROR_CODES.EXPIRED ? "expired" : code === SESSION_ERROR_CODES.MULTI_SESSION ? "multiSession" : "", " ").concat(JSON.stringify((_c2 = ev.data) == null ? void 0 : _c2.kicked, null, "	"))
    );
    if (code === SESSION_ERROR_CODES.EXPIRED) {
      useNetworkStore.setState({ isExpired: true });
    }
    if (code === SESSION_ERROR_CODES.MULTI_SESSION) {
      useNetworkStore.setState({ isMultiSession: true });
    }
  }
}
const ONE_FRAME_TIME_SEC = 1 / 30;
const COUNT_DOWN_DELAY_SEC = 0.25;
const NO_MORE_BETS_ANIMATION_DURATION = 2500;
const volumeKeys = ["masterVolume", "studioVolume", "gameVolume", "dealerVolume"];
const videoQualities = [0, 1, 2, 3, "AUTO"];
const DEVTOOLS_CONFIG$4 = {
  name: "".concat(document.title, " - useSettingStore"),
  store: "SettingStore",
  serialize: {
    options: true
  }
};
const useSettingStore = create()(
  devtools(
    persist(
      (set2) => ({
        allVolume: 1,
        masterVolume: 1,
        prevMasterVolume: 1,
        studioVolume: 1,
        prevStudioVolume: 1,
        gameVolume: 1,
        prevGameVolume: 1,
        dealerVolume: 1,
        prevDealerVolume: 1,
        otherMessagesEnable: true,
        screenName: "",
        videoQuality: "AUTO",
        soundEnable: true,
        // Game specifics
        showAllSideBets: true,
        toggleShowAllSideBets: () => set2((state) => ({ showAllSideBets: !state.showAllSideBets })),
        bettingStatistics: true,
        toggleBettingStatistics: () => set2((state) => ({ bettingStatistics: !state.bettingStatistics })),
        scorecardsMode: "classic",
        selectScorecardsMode: (mode) => set2(() => ({ scorecardsMode: mode })),
        toggleOtherMessages: () => set2((state) => ({ otherMessagesEnable: !state.otherMessagesEnable })),
        volumeChange: (volumeKey, val) => {
          const prevKey = getPrevVolumeKey(volumeKey);
          const newVolume = {
            [volumeKey]: val,
            [prevKey]: val
          };
          set2(() => newVolume);
        },
        toggleAllVolume: () => {
          set2((state) => {
            const newState = {};
            const checkAllPrev = state.prevGameVolume === 0 && state.prevDealerVolume === 0 && state.prevStudioVolume === 0;
            volumeKeys.forEach((key) => {
              const prevKey = getPrevVolumeKey(key);
              if (state.masterVolume !== 0) {
                newState[key] = 0;
              } else if (state.prevMasterVolume === 0) {
                newState[key] = checkAllPrev || key === "masterVolume" ? 0.2 : state[prevKey];
              } else {
                newState[key] = state[prevKey];
              }
              if (state.prevMasterVolume === 0 && checkAllPrev) {
                newState[prevKey] = 0.2;
              }
            });
            return newState;
          });
        },
        toggleVolume: (volumeKey) => {
          set2((state) => {
            const newState = {};
            const prevKey = getPrevVolumeKey(volumeKey);
            newState[volumeKey] = state[volumeKey] === 0 ? state[prevKey] === 0 ? 0.2 : state[prevKey] : 0;
            if (state[volumeKey] === 0 && state[prevKey] === 0) {
              newState[prevKey] = 0.2;
            }
            return newState;
          });
        }
      }),
      {
        name: "useSettingStore-".concat(isMobileDevice ? "mobile" : "desktop"),
        storage: createJSONStorage(() => localStorage),
        onRehydrateStorage: () => (state) => {
          if (!state) return;
          if (!videoQualities.includes(state.videoQuality)) state.videoQuality = "AUTO";
        },
        // Increment this number whenever there is a "breaking" change to the state structure.
        version: 2,
        migrate: (persistedState, version) => {
          if (version < 2) {
            return void 0;
          }
          return persistedState;
        }
      }
    ),
    DEVTOOLS_CONFIG$4
  )
);
const getPrevVolumeKey = (volumeKey) => {
  if (!volumeKeys.includes(volumeKey)) throw new Error("Invalid volume key: ".concat(volumeKey));
  return "prev".concat(volumeKey.charAt(0).toUpperCase() + volumeKey.slice(1));
};
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr2, offset = 0) {
  return (byteToHex[arr2[offset + 0]] + byteToHex[arr2[offset + 1]] + byteToHex[arr2[offset + 2]] + byteToHex[arr2[offset + 3]] + "-" + byteToHex[arr2[offset + 4]] + byteToHex[arr2[offset + 5]] + "-" + byteToHex[arr2[offset + 6]] + byteToHex[arr2[offset + 7]] + "-" + byteToHex[arr2[offset + 8]] + byteToHex[arr2[offset + 9]] + "-" + byteToHex[arr2[offset + 10]] + byteToHex[arr2[offset + 11]] + byteToHex[arr2[offset + 12]] + byteToHex[arr2[offset + 13]] + byteToHex[arr2[offset + 14]] + byteToHex[arr2[offset + 15]]).toLowerCase();
}
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = { randomUUID };
function _v4(options, buf, offset) {
  var _a2, _b2, _c2;
  options = options || {};
  const rnds = (_c2 = (_b2 = options.random) != null ? _b2 : (_a2 = options.rng) == null ? void 0 : _a2.call(options)) != null ? _c2 : rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
function v4(options, buf, offset) {
  if (native.randomUUID && true && !options) {
    return native.randomUUID();
  }
  return _v4(options);
}
const createEmptyRoundInfo = () => ({
  gameCode: "",
  gameType: GameType.UNKNOWN,
  roundId: "",
  betResult: false,
  dealer: { name: "" }
});
const getActiveRound = (payload) => {
  return payload.activeRound;
};
const updateRoundInfo = (payload) => {
  var _a2, _b2, _c2;
  const table = payload.table;
  if (!table || !payload || !table.gameType) {
    return createEmptyRoundInfo();
  }
  const round = getActiveRound(payload);
  const roundInfo = {
    gameCode: (_a2 = table.gameCode) != null ? _a2 : "",
    gameType: table.gameType,
    roundId: (_b2 = round == null ? void 0 : round.roundId) != null ? _b2 : "",
    betResult: false,
    dealer: (_c2 = table.dealer) != null ? _c2 : { name: "" }
  };
  useConfigStore.setState({ roundInfo });
  useDebugStore.getState().setMsg("roundInfo:\n".concat(JSON.stringify(roundInfo, null, 2)));
  return roundInfo;
};
const updateBettingFromPayload = (payload) => {
  var _a2, _b2;
  const round = getActiveRound(payload);
  if (!round) return;
  const current2 = Date.now();
  const { remainBetPeriod, betStopTime } = round;
  const deviceBetStopTime = Date.now() + (remainBetPeriod != null ? remainBetPeriod : 0);
  const timeDiffWithRgs = (betStopTime != null ? betStopTime : 0) - deviceBetStopTime;
  console.debug("Time difference with RGS: ".concat(timeDiffWithRgs, "ms"));
  const betEnd = remainBetPeriod ? remainBetPeriod + Date.now() - BET_SAFETY_MARGIN_MS : 0;
  const betStart = betEnd - useBettingStore.getState().betPeriod * 1e3;
  const isBet = current2 < betEnd;
  const dealer = (_b2 = (_a2 = payload.table) == null ? void 0 : _a2.dealer) != null ? _b2 : { name: "" };
  useBettingStore.setState({ betStart, betEnd, isBet, dealer });
};
const updateBetState = (state) => {
  useBettingStore.setState({ gameState: state });
};
const updateBetPeriod = (betPeriod) => {
  if (typeof betPeriod === "number" && betPeriod > 0) {
    useBettingStore.setState({ betPeriod });
  }
};
const updateChipTray = (payload) => {
  const { chipTray } = payload;
  if (!chipTray || chipTray.length === 0) return;
  const sortedChips = [...chipTray].sort((a, b) => a.index - b.index);
  const chipList = sortedChips.map(({ amount, onTable }) => ({ amount, onTable: !!onTable }));
  const foundIdx = sortedChips.findIndex((chip) => chip.defaultSelected);
  const selectedChipIdx = foundIdx !== -1 ? foundIdx : Math.min(3, chipList.length - 1);
  useCartStore.setState({
    chipList,
    selectedChipIdx,
    selectedChipVal: chipList[selectedChipIdx].amount
  });
};
class TableEventHandlers {
  static onTableState(msg, connectIns2, getHistory) {
    var _a2;
    const ev = msg;
    console.debug(GameEvent.TABLE_STATE, ev);
    updateBetState(BetState.Bet);
    connectIns2.syncWallet();
    const decrementResources2 = useLoadingStore.getState().decrementResources;
    decrementResources2(LoadingResourceEnum.SyncWallet);
    const { data } = ev;
    if (!data) return;
    const { table, jurisdiction, betSettings, activeRoundBets, player, activeRound } = data;
    const { betPeriod, gameType, link, streams, pause, maintenance } = table != null ? table : {};
    const { status } = activeRound != null ? activeRound : {};
    useBettingStore.setState({ betPeriod: betPeriod != null ? betPeriod : 0 });
    getHistory();
    updateChipTray(data);
    updateBettingFromPayload(data);
    useConfigStore.setState({ isPaused: !!pause });
    useWinNumberStore.getState().initPrevRounds(data);
    updateRoundInfo(data);
    const { GAME_TABLE: GAME_TABLE2 } = useConfigStore.getState();
    connectIns2.listGameChatHistory(GAME_TABLE2);
    connectIns2.listSupportChatHistory();
    if (activeRoundBets && Array.isArray(activeRoundBets) && activeRoundBets.length > 0) {
      useBettingStore.setState({ isRetrieveBet: true });
      useCartStore.setState({ boardHistory: activeRoundBets });
    }
    const jurisdictionPayloadHelper = new JurisdictionPayloadHelper(jurisdiction);
    const AUTOPLAY_ALLOWED = jurisdictionPayloadHelper.getAutoplayAllowed();
    const FULLSCREEN_ALLOWED = jurisdictionPayloadHelper.getFullscreenAllowed();
    const SHOW_LOBBY_ALLOWED = jurisdictionPayloadHelper.getShowLobby();
    const SHOW_ACTIVE_SESSION_ALLOWED = jurisdictionPayloadHelper.getShowActiveSessionCounter();
    const SHOW_SUPPORT_CHAT = jurisdictionPayloadHelper.getShowSupportChat();
    const BET_OPTIONS = jurisdictionPayloadHelper.getBetOptions();
    const JURISDICTION = {
      AUTOPLAY_ALLOWED,
      FULLSCREEN_ALLOWED,
      SHOW_LOBBY_ALLOWED,
      SHOW_ACTIVE_SESSION_ALLOWED,
      SHOW_SUPPORT_CHAT,
      BET_OPTIONS
    };
    const GAME_TYPE = gameType;
    if (GAME_TYPE) useConfigStore.setState({ GAME_TYPE });
    const screenName = player == null ? void 0 : player.nickname;
    if (screenName) useSettingStore.setState({ screenName });
    const LOBBY_URL = link == null ? void 0 : link.lobby;
    if (LOBBY_URL) useConfigStore.setState({ LOBBY_URL });
    if (streams) {
      useConfigStore.setState({ streams });
    } else {
      useLayoutStore.setState({ isCanStream: false });
    }
    if (betSettings) {
      useConfigStore.setState({
        betTypesLimit: betSettings.betTypesLimit,
        tableLimit: betSettings.tableLimit,
        tableMaxPayout: (_a2 = betSettings.tableMaxPayout) != null ? _a2 : 0
      });
    }
    if (maintenance) {
      const { startTime, endTime = Infinity } = maintenance;
      const now = Date.now();
      if (now >= startTime && now < endTime) {
        useNetworkStore.setState({ isMaintenance: true });
        connectIns2.close();
      }
      useConfigStore.setState({ maintenanceStartTime: startTime, maintenanceEndTime: endTime });
    }
    if (status === TableRoundStatus.BET_STOPPED) {
      useBettingStore.setState({ betEnd: Date.now() - NO_MORE_BETS_ANIMATION_DURATION });
    }
    const debugEntries = [
      ["streams", streams],
      ["jurisdiction", JURISDICTION],
      ["lobby url", LOBBY_URL]
    ];
    debugEntries.forEach(([label, payload]) => useDebugStore.getState().setMsg("".concat(label, ": ").concat(JSON.stringify(payload, null, "	"))));
  }
  static onTableStart(msg, connectIns2, getBetDetail2) {
    var _a2;
    const ev = msg;
    console.debug(GameEvent.TABLE_START, ev);
    useBettingStore.setState({ resetBoard: true });
    updateBetState(BetState.Bet);
    connectIns2.syncWallet();
    const { data } = ev;
    if (!data) return;
    const { betPeriod } = (_a2 = data.table) != null ? _a2 : {};
    updateBetPeriod(betPeriod != null ? betPeriod : 0);
    updateBettingFromPayload(data);
    const roundInfo = updateRoundInfo(data);
    this.handleAutoPlayBetPeek(roundInfo, connectIns2, getBetDetail2);
    const { decrementAutoPlayRound, isAutoPlay } = useAutoPlayStore.getState();
    if (isAutoPlay) {
      decrementAutoPlayRound();
      const boardHistory = useCartStore.getState().boardHistory;
      const totalBet = useCartStore.getState().getTotalBet(boardHistory);
      useCartStore.setState({ totalBet });
    }
    useCartStore.setState({ betStats: { amount: {}, count: {} } });
  }
  static onTableBetStop(msg) {
    const ev = msg;
    console.debug(GameEvent.TABLE_BET_STOP, ev);
    updateBetState(BetState.WheelSpin);
    const { isBet } = useBettingStore.getState();
    if (isBet) useBettingStore.setState({ betEnd: Date.now() });
  }
  static onTableDeal(msg) {
    const ev = msg;
    console.debug(GameEvent.TABLE_DEAL, ev);
    updateBetState(BetState.Settlement);
    const { data, timecode } = ev;
    if (!data) return;
    useWinAnimStore$2.getState().onTableDeal(data, timecode);
  }
  static onTableWinners(msg) {
    var _a2, _b2;
    const ev = msg;
    console.debug(GameEvent.TABLE_WINNERS, ev);
    const { data } = ev;
    if (!data) return;
    const winnerList = (_b2 = (_a2 = ev.data) == null ? void 0 : _a2.winners) != null ? _b2 : [];
    useWinNumberStore.setState({ winnerList });
  }
  static onTableFinish(msg, connectIns2) {
    const ev = msg;
    console.debug(GameEvent.TABLE_FINISH, ev);
    const { data, timecode } = ev;
    useCartStore.setState({ totalBet: 0 });
    if (!data) return;
    if (data.activeRound.status === TableRoundStatus.CANCELLED) {
      useToastStore.getState().addToast("info", t("COMMON.ROUND_CANCELLED"));
      useBettingStore.setState({ gameState: BetState.Settlement });
      useWinAnimStore$2.getState().animateChipRemoval();
      useConfigStore.setState({ tableFinished: true });
      if (useAutoPlayStore.getState().isAutoPlay) {
        useAutoPlayStore.setState({ roundRemaining: useAutoPlayStore.getState().roundRemaining + 1 });
      }
      if (useBettingStore.getState().isBet) {
        useBettingStore.getState().stopCountdown();
      }
      connectIns2.syncWallet();
    } else {
      useWinAnimStore$2.getState().onTableFinished(data, timecode);
    }
  }
  static onTablePause(msg) {
    const ev = msg;
    console.debug(GameEvent.TABLE_PAUSE, ev);
    useConfigStore.setState({ isPaused: true });
  }
  static onTableResume(msg) {
    const ev = msg;
    console.debug(GameEvent.TABLE_RESUME, ev);
    useConfigStore.setState({ isPaused: false });
  }
  static onTableMaintenance(msg) {
    const ev = msg;
    const { data } = ev;
    if (!data) return;
    const {
      table: { maintenance }
    } = data;
    if (!maintenance) return;
    const { startTime, endTime = Infinity } = maintenance;
    useConfigStore.setState({ maintenanceStartTime: startTime, maintenanceEndTime: endTime });
    console.debug(GameEvent.TABLE_MAINTENANCE, ev);
  }
  static handleAutoPlayBetPeek(roundInfo, connectIns2, getBetDetail2) {
    const boardHistory = useCartStore.getState().boardHistory;
    const lastHistory = boardHistory[boardHistory.length - 1];
    if (!lastHistory) return;
    const betDetail = getBetDetail2();
    if (!betDetail) return;
    const { roundId, gameType, gameCode } = roundInfo;
    const uuid = v4();
    connectIns2.betPeek(roundId, gameType, gameCode, betDetail, AUTOPLAY_PLAYER_COUNT_DIFF, uuid);
  }
}
class SocketConnectionManager {
  constructor(domainUrl, launch, gameTable, sessionId) {
    __publicField(this, "connection");
    __publicField(this, "unsubscribers", []);
    __publicField(this, "gameTable");
    __publicField(this, "sessionId");
    this.gameTable = gameTable;
    this.sessionId = sessionId;
    this.connection = new Connect(domainUrl, launch);
    this.setupEventHandlers();
    this.setupSubscriptions();
    this.setupLogger();
  }
  setupEventHandlers() {
    this.connection.on(WsEvent.WS_OPENED, (msg) => ConnectionEventHandlers.onOpened(msg, this.connection, this.gameTable)).on(WsEvent.WS_CLOSED, (msg) => ConnectionEventHandlers.onClosed(msg)).on(WsEvent.WS_RECONNECTING, (msg) => ConnectionEventHandlers.onReconnecting(msg, this.sessionId)).on(WsEvent.WS_RECONNECTED, (msg) => ConnectionEventHandlers.onReconnected(msg, this.connection, this.gameTable, this.sessionId)).on(GameEvent.TABLE_PAUSE, (msg) => TableEventHandlers.onTablePause(msg)).on(GameEvent.TABLE_RESUME, (msg) => TableEventHandlers.onTableResume(msg)).on(GameEvent.TABLE_STATE, (msg) => TableEventHandlers.onTableState(msg, this.connection, () => this.getHistory())).on(GameEvent.TABLE_START, (msg) => TableEventHandlers.onTableStart(msg, this.connection, getBetDetail)).on(GameEvent.TABLE_BET_STOP, (msg) => TableEventHandlers.onTableBetStop(msg)).on(GameEvent.TABLE_DEAL, (msg) => TableEventHandlers.onTableDeal(msg)).on(GameEvent.TABLE_WINNERS, (msg) => TableEventHandlers.onTableWinners(msg)).on(GameEvent.TABLE_FINISH, (msg) => TableEventHandlers.onTableFinish(msg, this.connection)).on(GameEvent.TABLE_MAINTENANCE, (msg) => TableEventHandlers.onTableMaintenance(msg)).on(GameEvent.SESSION_KICKED, (msg) => SessionEventHandlers.onSessionKicked(msg)).on(GameEvent.PLAYER_STATE, (msg) => PlayerEventHandlers.onPlayerState(msg)).on(GameEvent.WALLET_STATE, (msg) => PlayerEventHandlers.onWalletState(msg, () => this.getHistory())).on(GameEvent.GAME_MESSAGE, (msg) => MessageEventHandlers.onGameMessage(msg)).on(GameEvent.SUPPORT_MESSAGE, (msg) => MessageEventHandlers.onSupportMessage(msg)).on(GameEvent.BET_RESULT, (msg) => {
      const currentRoundId = useConfigStore.getState().roundInfo.roundId;
      BetEventHandlers.onBetResult(msg, currentRoundId);
    }).on(GameEvent.BET_HISTORY_LIST, (msg) => BetEventHandlers.onBetHistoryList(msg)).on(GameEvent.BET_HISTORY_SUBTOTAL, (msg) => BetEventHandlers.onBetHistorySubtotal(msg)).on(GameEvent.BET_STATS, (msg) => BetEventHandlers.onBetStats(msg)).on(GameEvent.SYSTEM_MESSAGE, (msg) => MessageEventHandlers.onSystemMessage(msg)).onElse((msg) => {
      const ev = msg;
      console.debug("onElse event", JSON.stringify(ev));
    });
  }
  setupSubscriptions() {
    this.unsubscribers.push(
      useTimerStore.subscribe(
        (state) => state.currentMs,
        (current2) => this.handleTimerUpdate(current2)
      )
    );
    this.unsubscribers.push(
      useLayoutStore.subscribe(
        (state) => state.menuPage,
        (type) => {
          if (type === "history") this.getHistory();
        }
      )
    );
  }
  setupLogger() {
    this.connection.setLogger({
      info: (...args) => {
        console.log("[Connect]", ...args);
      },
      error: (...args) => {
        console.error("[Connect]", ...args);
      }
    });
  }
  handleTimerUpdate(current2) {
    const { isBet, betEnd } = useBettingStore.getState();
    if (isBet !== current2 < betEnd) {
      useBettingStore.setState({ isBet: false });
      const { handleAutoPlay } = useAutoPlayStore.getState();
      handleAutoPlay();
    }
    const { maintenanceStartTime, maintenanceEndTime } = useConfigStore.getState();
    if (maintenanceStartTime === 0) return;
    if (current2 >= maintenanceStartTime && current2 < maintenanceEndTime) {
      useConfigStore.setState({ maintenanceState: "maintenance" });
    }
  }
  getHistory(offset) {
    var _a2;
    (_a2 = this.connection) == null ? void 0 : _a2.listBetHistory(DEFAULT_HISTORY_LIMIT, offset);
  }
  connect() {
    this.connection.connect();
  }
  close() {
    this.unsubscribers.forEach((unsub) => unsub());
    this.connection.send(GameAction.UNSUBSCRIBE_TABLE);
    this.connection.close();
  }
  getInstance() {
    return this.connection;
  }
}
let connectIns;
let connectionManager = null;
const connectWS = (force = false) => {
  if (connectIns && !force) {
    console.debug("WebSocket connection already exists.");
    return;
  }
  if (force && connectionManager) {
    connectionManager.close();
  }
  const { GAME_TABLE: GAME_TABLE2, IS_CLOSE_SERVER, SESSION_ID } = useConfigStore.getState();
  if (IS_CLOSE_SERVER) {
    console.debug("Server connection is disabled ");
    return;
  }
  const domainUrl = getBaseDomain();
  const launch = SESSION_ID ? domainUrl + "/?sid=" + SESSION_ID : "";
  connectionManager = new SocketConnectionManager(domainUrl, launch, GAME_TABLE2, SESSION_ID);
  connectIns = connectionManager.getInstance();
  connectionManager.connect();
  window.onbeforeunload = function() {
    if (connectionManager) {
      connectionManager.close();
    }
  };
};
const defaultJurisdictionValue = true;
const exitGame = () => {
  if (isInIframe()) {
    window.parent.postMessage({ type: "REDIRECT", targetUrl: "/" }, "*");
  } else {
    const { LOBBY_URL } = useConfigStore.getState();
    if (LOBBY_URL) window.location.href = LOBBY_URL;
  }
};
const DEVTOOLS_CONFIG$3 = {
  name: "".concat(document.title, " - useConfigStore"),
  store: "ConfigStore",
  serialize: {
    options: true
  }
};
const useConfigStore = create()(
  devtools(
    subscribeWithSelector((_set, _get) => ({
      GAME: "",
      WS_SERVER: "",
      GAME_TABLE: "",
      SESSION_ID: "",
      GAME_TYPE: GameType.UNKNOWN,
      // Exit/Lobby ctrl
      LOBBY_URL: void 0,
      exitGame,
      // Jurisdiction
      JURISDICTION: {
        AUTOPLAY_ALLOWED: defaultJurisdictionValue,
        FULLSCREEN_ALLOWED: defaultJurisdictionValue,
        SHOW_LOBBY_ALLOWED: defaultJurisdictionValue,
        SHOW_ACTIVE_SESSION_ALLOWED: defaultJurisdictionValue,
        SHOW_SUPPORT_CHAT: defaultJurisdictionValue,
        BET_OPTIONS: { forbidOppositeBets: true }
      },
      roundInfo: {
        gameCode: "",
        gameType: GameType.UNKNOWN,
        roundId: "",
        betResult: false,
        dealer: { name: "" }
      },
      tableLimit: { min: 0.1, max: 2e4 },
      tableMaxPayout: 1e5,
      betTypesLimit: {},
      isPaused: false,
      tableFinished: false,
      maintenanceState: "",
      maintenanceStartTime: 0,
      maintenanceEndTime: Infinity,
      streams: null,
      // TODO: testing
      // streams: {
      //   primary: {
      //     hd: 'https://pull-ws-test.stream.iki-utl.cc/live/sr_hd.flv',
      //     hi: 'https://pull-ws-test.stream.iki-utl.cc/live/sr_hd.flv',
      //     me: 'https://pull-ws-test.stream.iki-utl.cc/live/sr_hd.flv',
      //     lo: 'https://pull-ws-test.stream.iki-utl.cc/live/sr_hd.flv',
      //   },
      // },
      IS_SMALL_DEVICE: false,
      IS_CLOSE_SERVER: false,
      CHAT_API_KEY: ""
    })),
    DEVTOOLS_CONFIG$3
  )
);
useConfigStore.subscribe(
  (state) => state.isPaused,
  (isPaused) => {
    const { isBet } = useBettingStore.getState();
    handleGamePauseToast(isBet, isPaused);
  }
);
useConfigStore.subscribe(
  (state) => [state.maintenanceState, state.tableFinished],
  ([maintenanceState, tableFinished]) => {
    if (maintenanceState === "maintenance" && tableFinished) {
      useNetworkStore.setState({ isMaintenance: true });
      connectIns.close();
      const timerId = useTimerStore.getState().timerId;
      if (timerId !== null) {
        clearInterval$1(timerId);
      }
    }
  },
  { equalityFn: shallow$1 }
);
const convertLabel = (val) => {
  if (val < 1e3) {
    return new Decimal(val).toDecimalPlaces(2, Decimal.ROUND_DOWN).toString();
  }
  let num = new Decimal(val);
  let unit = "";
  if (num.gte(1e9)) {
    num = num.div(1e9);
    unit = "B";
  } else if (num.gte(1e6)) {
    num = num.div(1e6);
    unit = "M";
  } else {
    num = num.div(1e3);
    unit = "K";
  }
  if (num.dp() > 1) {
    num = num.toDecimalPlaces(1, Decimal.ROUND_DOWN);
    unit += "+";
  }
  return num.toString() + unit;
};
const calculateBetDelta = (currBets, prevBets, gameBetKeys) => {
  const allKeys = [...Object.keys(prevBets), ...Object.keys(currBets)];
  const filteredKeys = allKeys.filter((k) => gameBetKeys.includes(k));
  const uniqueKeys = [...new Set(filteredKeys)];
  const delta = uniqueKeys.reduce(
    (acc, key) => {
      var _a2, _b2;
      const prevVal = new Decimal((_a2 = prevBets[key]) != null ? _a2 : 0);
      const currVal = new Decimal((_b2 = currBets[key]) != null ? _b2 : 0);
      const diff = currVal.minus(prevVal);
      if (!diff.isZero()) {
        acc[key] = diff.toNumber();
      }
      return acc;
    },
    {}
  );
  return delta;
};
const calculateCountDelta = (prevBets, currBets) => {
  const currBetKeys = Object.keys(currBets);
  const prevBetKeys = Object.keys(prevBets);
  if (currBetKeys.length > prevBetKeys.length) return 1;
  else if (currBetKeys.length < prevBetKeys.length) return -1;
  else {
    const keysChanged = currBetKeys.some((key) => !prevBetKeys.includes(key)) || prevBetKeys.some((key) => !currBetKeys.includes(key));
    return keysChanged ? 1 : 0;
  }
};
const warn = (i18n, code, msg, rest) => {
  var _a2, _b2, _c2, _d;
  const args = [msg, {
    code,
    ...rest || {}
  }];
  if ((_b2 = (_a2 = i18n == null ? void 0 : i18n.services) == null ? void 0 : _a2.logger) == null ? void 0 : _b2.forward) {
    return i18n.services.logger.forward(args, "warn", "react-i18next::", true);
  }
  if (isString(args[0])) args[0] = "react-i18next:: ".concat(args[0]);
  if ((_d = (_c2 = i18n == null ? void 0 : i18n.services) == null ? void 0 : _c2.logger) == null ? void 0 : _d.warn) {
    i18n.services.logger.warn(...args);
  } else if (console == null ? void 0 : console.warn) {
    console.warn(...args);
  }
};
const alreadyWarned$1 = {};
const warnOnce = (i18n, code, msg, rest) => {
  if (isString(msg) && alreadyWarned$1[msg]) return;
  if (isString(msg)) alreadyWarned$1[msg] = /* @__PURE__ */ new Date();
  warn(i18n, code, msg, rest);
};
const loadedClb = (i18n, cb) => () => {
  if (i18n.isInitialized) {
    cb();
  } else {
    const initialized = () => {
      setTimeout(() => {
        i18n.off("initialized", initialized);
      }, 0);
      cb();
    };
    i18n.on("initialized", initialized);
  }
};
const loadNamespaces = (i18n, ns, cb) => {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
const loadLanguages = (i18n, lng, ns, cb) => {
  if (isString(ns)) ns = [ns];
  if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1) return loadNamespaces(i18n, ns, cb);
  ns.forEach((n) => {
    if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
const hasLoadedNamespace = (ns, i18n, options = {}) => {
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce(i18n, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
      languages: i18n.languages
    });
    return true;
  }
  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: (i18nInstance2, loadNotPending) => {
      if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance2.services.backendConnector.backend && i18nInstance2.isLanguageChangingTo && !loadNotPending(i18nInstance2.isLanguageChangingTo, ns)) return false;
    }
  });
};
const isString = (obj) => typeof obj === "string";
const isObject = (obj) => typeof obj === "object" && obj !== null;
const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
};
const unescapeHtmlEntity = (m) => htmlEntities[m];
const unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
let defaultOptions = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: true,
  unescape
};
const setDefaults = (options = {}) => {
  defaultOptions = {
    ...defaultOptions,
    ...options
  };
};
const getDefaults$3 = () => defaultOptions;
let i18nInstance;
const setI18n = (instance2) => {
  i18nInstance = instance2;
};
const getI18n = () => i18nInstance;
const initReactI18next = {
  type: "3rdParty",
  init(instance2) {
    setDefaults(instance2.options.react);
    setI18n(instance2);
  }
};
const I18nContext = reactExports.createContext();
class ReportNamespaces {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach((ns) => {
      if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const usePrevious = (value, ignore) => {
  const ref = reactExports.useRef();
  reactExports.useEffect(() => {
    ref.current = value;
  }, [value, ignore]);
  return ref.current;
};
const alwaysNewT = (i18n, language, namespace, keyPrefix) => i18n.getFixedT(language, namespace, keyPrefix);
const useMemoizedT = (i18n, language, namespace, keyPrefix) => reactExports.useCallback(alwaysNewT(i18n, language, namespace, keyPrefix), [i18n, language, namespace, keyPrefix]);
const useTranslation = (ns, props = {}) => {
  var _a2, _b2, _c2, _d;
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = reactExports.useContext(I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
  if (!i18n) {
    warnOnce(i18n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const notReadyT = (k, optsOrDefaultValue) => {
      if (isString(optsOrDefaultValue)) return optsOrDefaultValue;
      if (isObject(optsOrDefaultValue) && isString(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
      return Array.isArray(k) ? k[k.length - 1] : k;
    };
    const retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }
  if ((_a2 = i18n.options.react) == null ? void 0 : _a2.wait) warnOnce(i18n, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const i18nOptions = {
    ...getDefaults$3(),
    ...i18n.options.react,
    ...props
  };
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  let namespaces = defaultNSFromContext || ((_b2 = i18n.options) == null ? void 0 : _b2.defaultNS);
  namespaces = isString(namespaces) ? [namespaces] : namespaces || ["translation"];
  (_d = (_c2 = i18n.reportNamespaces).addUsedNamespaces) == null ? void 0 : _d.call(_c2, namespaces);
  const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n) => hasLoadedNamespace(n, i18n, i18nOptions));
  const memoGetT = useMemoizedT(i18n, props.lng || null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
  const getT = () => memoGetT;
  const getNewT = () => alwaysNewT(i18n, props.lng || null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
  const [t2, setT] = reactExports.useState(getT);
  let joinedNS = namespaces.join();
  if (props.lng) joinedNS = "".concat(props.lng).concat(joinedNS);
  const previousJoinedNS = usePrevious(joinedNS);
  const isMounted = reactExports.useRef(true);
  reactExports.useEffect(() => {
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    isMounted.current = true;
    if (!ready && !useSuspense) {
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      } else {
        loadNamespaces(i18n, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      }
    }
    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getNewT);
    }
    const boundReset = () => {
      if (isMounted.current) setT(getNewT);
    };
    if (bindI18n) i18n == null ? void 0 : i18n.on(bindI18n, boundReset);
    if (bindI18nStore) i18n == null ? void 0 : i18n.store.on(bindI18nStore, boundReset);
    return () => {
      isMounted.current = false;
      if (i18n && bindI18n) bindI18n == null ? void 0 : bindI18n.split(" ").forEach((e) => i18n.off(e, boundReset));
      if (bindI18nStore && i18n) bindI18nStore.split(" ").forEach((e) => i18n.store.off(e, boundReset));
    };
  }, [i18n, joinedNS]);
  reactExports.useEffect(() => {
    if (isMounted.current && ready) {
      setT(getT);
    }
  }, [i18n, keyPrefix, ready]);
  const ret = [t2, i18n, ready];
  ret.t = t2;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise((resolve) => {
    if (props.lng) {
      loadLanguages(i18n, props.lng, namespaces, () => resolve());
    } else {
      loadNamespaces(i18n, namespaces, () => resolve());
    }
  });
};
function useModalOverlay(isOpen) {
  const increment = useLayoutStore((s) => s.incrementModalCount);
  const decrement = useLayoutStore((s) => s.decrementModalCount);
  reactExports.useEffect(() => {
    if (isOpen) {
      increment();
      return () => {
        decrement();
      };
    }
  }, [isOpen, increment, decrement]);
}
const modalHeader = "" + new URL("modalHeader-CXrySjnZ.webp", import.meta.url).href;
const modalHeaderAutoPlayBetChanged = "" + new URL("modalHeaderAutoPlayBetChanged-DAIXjlhF.webp", import.meta.url).href;
const modalHeaderAutoPlayFinished = "" + new URL("modalHeaderAutoPlayFinished-CO0fUs3S.webp", import.meta.url).href;
const modalHeaderExpiredChip = "" + new URL("modalHeaderExpired-BTLnHOjV.webp", import.meta.url).href;
const modalHeaderIdle = "" + new URL("modalHeaderIdle-CZtqOGV5.webp", import.meta.url).href;
const modalHeaderMultiSession = "" + new URL("modalHeaderMultiSession-NpuKSS0h.webp", import.meta.url).href;
function PopUpButton(props) {
  const { onClick, cancel, disabled } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      id: "PopUpButton",
      onClick,
      className: cn(
        "px-10 py-4 text-[1rem] leading-[1.5rem] tracking-[-0.03rem]",
        { "px-5 py-[0.625rem] text-[0.875rem] leading-[1.25rem] tracking-[-0.02625rem]": isMobileDevice, cancel, disabled },
        props.className
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inner", children: props.children })
    }
  );
}
const PopUpButton$1 = reactExports.memo(PopUpButton);
const modalHeaderSrcMap = {
  autoplayFinished: modalHeaderAutoPlayFinished,
  autoplayBetChanged: modalHeaderAutoPlayBetChanged,
  expired: modalHeaderExpiredChip,
  maintenance: modalHeaderMultiSession,
  idle: modalHeaderIdle,
  multiSession: modalHeaderMultiSession
};
const getModalHeaderImage = (type) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: modalHeaderSrcMap[type],
      alt: "Modal header for ".concat(type)
    }
  );
};
function CenterModal({
  open,
  icon,
  title,
  titleClassName,
  text,
  textClassName,
  cancelText,
  confirmText,
  onConfirm,
  onCancel
}) {
  useModalOverlay(open);
  const handleConfirm = () => {
    onConfirm == null ? void 0 : onConfirm();
  };
  const handleCancel = () => {
    onCancel == null ? void 0 : onCancel();
  };
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "CenterModal",
      className: "absolute inset-0 z-[100]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-full flex-col items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn("content w-[23.8125rem] !overflow-visible rounded-3xl px-4 pb-8 pt-[3.25rem]", {
            "w-[21rem] rounded-[2rem]": isMobileDevice
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: modalHeader,
                alt: "Modal header",
                className: "absolute -top-[1.6rem] left-1/2 z-[100] h-[1.6875rem] w-[14rem] -translate-x-1/2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -top-7 left-1/2 z-[100] size-[5rem] -translate-x-1/2",
                role: "img",
                "aria-label": "".concat(icon, " icon"),
                children: getModalHeaderImage(icon)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
              title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("title", titleClassName), children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text", textClassName), children: text }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                cancelText && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PopUpButton$1,
                  {
                    cancel: true,
                    onClick: handleCancel,
                    children: cancelText
                  }
                ),
                confirmText && /* @__PURE__ */ jsxRuntimeExports.jsx(PopUpButton$1, { onClick: handleConfirm, children: confirmText })
              ] })
            ] })
          ]
        }
      ) })
    }
  );
}
function resumeAutoPlay() {
  const autoplayRoundArr = [5, 10, 25, 100];
  const boardSnapshot = useAutoPlayStore.getState().boardSnapshot;
  const boardHistory = useCartStore.getState().boardHistory;
  const roundLastChosen = useAutoPlayStore.getState().roundLastChosen;
  useAutoPlayStore.setState({
    roundRemaining: autoplayRoundArr[roundLastChosen],
    roundSelected: roundLastChosen,
    isAutoPlay: true,
    confirmModalType: null,
    autoPlayResumed: true
  });
  useCartStore.setState({ boardHistory: [boardSnapshot] });
  getBetSound(boardHistory, boardSnapshot);
}
function AutoPlayFinishedModal() {
  const confirmModalType = useAutoPlayStore((s) => s.confirmModalType);
  const { t: t2 } = useTranslation();
  const handleContinue = () => {
    playSound(["click"]);
    const gameState = useBettingStore.getState().gameState;
    if (gameState !== 1) {
      useAutoPlayStore.setState({ autoPlayResumed: false, confirmModalType: null });
      return;
    }
    resumeAutoPlay();
  };
  const handleStop = () => {
    playSound(["click"]);
    useAutoPlayStore.setState({ confirmModalType: null });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CenterModal,
    {
      open: confirmModalType === "AutoPlayFinished",
      icon: "autoplayFinished",
      title: t2("COMMON.AUTOPLAY_FINISHED"),
      titleClassName: "pl-[0.2rem]",
      text: t2("COMMON.AUTOPLAY_PROMPT4"),
      confirmText: t2("COMMON.CONTINUE"),
      onConfirm: handleContinue,
      cancelText: t2("COMMON.STOP"),
      onCancel: handleStop
    }
  );
}
const exceptionList = /* @__PURE__ */ new Set(["betAutomatically"]);
class TooltipEventBus {
  constructor() {
    __publicField(this, "listeners");
    this.listeners = /* @__PURE__ */ new Map();
  }
  subscribe(type, listener) {
    this.listeners.set(type, listener);
    return (type2) => {
      this.listeners.delete(type2);
    };
  }
  emit(type, props) {
    if (!exceptionList.has(type) && !(props == null ? void 0 : props.mute)) playSound(["disabledAction"]);
    const listener = this.listeners.get(type);
    listener == null ? void 0 : listener(props);
  }
}
const tooltipEventBus = new TooltipEventBus();
const betTypeMap$2 = {
  [RouletteBetNo.STRAIGHT_UP_0]: "0 Green",
  [RouletteBetNo.STRAIGHT_UP_1]: "1 Red",
  [RouletteBetNo.STRAIGHT_UP_2]: "2 Black",
  [RouletteBetNo.STRAIGHT_UP_3]: "3 Red",
  [RouletteBetNo.STRAIGHT_UP_4]: "4 Black",
  [RouletteBetNo.STRAIGHT_UP_5]: "5 Red",
  [RouletteBetNo.STRAIGHT_UP_6]: "6 Black",
  [RouletteBetNo.STRAIGHT_UP_7]: "7 Red",
  [RouletteBetNo.STRAIGHT_UP_8]: "8 Black",
  [RouletteBetNo.STRAIGHT_UP_9]: "9 Red",
  [RouletteBetNo.STRAIGHT_UP_10]: "10 Black",
  [RouletteBetNo.STRAIGHT_UP_11]: "11 Black",
  [RouletteBetNo.STRAIGHT_UP_12]: "12 Red",
  [RouletteBetNo.STRAIGHT_UP_13]: "13 Black",
  [RouletteBetNo.STRAIGHT_UP_14]: "14 Red",
  [RouletteBetNo.STRAIGHT_UP_15]: "15 Black",
  [RouletteBetNo.STRAIGHT_UP_16]: "16 Red",
  [RouletteBetNo.STRAIGHT_UP_17]: "17 Black",
  [RouletteBetNo.STRAIGHT_UP_18]: "18 Red",
  [RouletteBetNo.STRAIGHT_UP_19]: "19 Red",
  [RouletteBetNo.STRAIGHT_UP_20]: "20 Black",
  [RouletteBetNo.STRAIGHT_UP_21]: "21 Red",
  [RouletteBetNo.STRAIGHT_UP_22]: "22 Black",
  [RouletteBetNo.STRAIGHT_UP_23]: "23 Red",
  [RouletteBetNo.STRAIGHT_UP_24]: "24 Black",
  [RouletteBetNo.STRAIGHT_UP_25]: "25 Red",
  [RouletteBetNo.STRAIGHT_UP_26]: "26 Black",
  [RouletteBetNo.STRAIGHT_UP_27]: "27 Red",
  [RouletteBetNo.STRAIGHT_UP_28]: "28 Black",
  [RouletteBetNo.STRAIGHT_UP_29]: "29 Black",
  [RouletteBetNo.STRAIGHT_UP_30]: "30 Red",
  [RouletteBetNo.STRAIGHT_UP_31]: "31 Black",
  [RouletteBetNo.STRAIGHT_UP_32]: "32 Red",
  [RouletteBetNo.STRAIGHT_UP_33]: "33 Black",
  [RouletteBetNo.STRAIGHT_UP_34]: "34 Red",
  [RouletteBetNo.STRAIGHT_UP_35]: "35 Black",
  [RouletteBetNo.STRAIGHT_UP_36]: "36 Red",
  [RouletteBetNo.COLUMN_1]: "Column 1",
  [RouletteBetNo.COLUMN_2]: "Column 2",
  [RouletteBetNo.COLUMN_3]: "Column 3",
  [RouletteBetNo.DOZEN_1]: "Dozen 1-12",
  [RouletteBetNo.DOZEN_13]: "Dozen 13-24",
  [RouletteBetNo.DOZEN_25]: "Dozen 25-36",
  [RouletteBetNo.ODD]: "Odd",
  [RouletteBetNo.EVEN]: "Even",
  [RouletteBetNo.LOW]: "Low",
  [RouletteBetNo.HIGH]: "High",
  [RouletteBetNo.RED]: "Red",
  [RouletteBetNo.BLACK]: "Black",
  [RouletteBetNo.LINE_1]: "Line 1-6",
  [RouletteBetNo.LINE_4]: "Line 4-9",
  [RouletteBetNo.LINE_7]: "Line 7-12",
  [RouletteBetNo.LINE_10]: "Line 10-15",
  [RouletteBetNo.LINE_13]: "Line 13-18",
  [RouletteBetNo.LINE_16]: "Line 16-21",
  [RouletteBetNo.LINE_19]: "Line 19-24",
  [RouletteBetNo.LINE_22]: "Line 22-27",
  [RouletteBetNo.LINE_25]: "Line 25-30",
  [RouletteBetNo.LINE_28]: "Line 28-33",
  [RouletteBetNo.LINE_31]: "Line 31-36",
  [RouletteBetNo.STREET_0_1_2]: "Street 0,1,2",
  [RouletteBetNo.STREET_0_2_3]: "Street 0,2,3",
  [RouletteBetNo.STREET_1_2_3]: "Street 1,2,3",
  [RouletteBetNo.STREET_4_5_6]: "Street 4,5,6",
  [RouletteBetNo.STREET_7_8_9]: "Street 7,8,9",
  [RouletteBetNo.STREET_10_11_12]: "Street 10,11,12",
  [RouletteBetNo.STREET_13_14_15]: "Street 13,14,15",
  [RouletteBetNo.STREET_16_17_18]: "Street 16,17,18",
  [RouletteBetNo.STREET_19_20_21]: "Street 19,20,21",
  [RouletteBetNo.STREET_22_23_24]: "Street 22,23,24",
  [RouletteBetNo.STREET_25_26_27]: "Street 25,26,27",
  [RouletteBetNo.STREET_28_29_30]: "Street 28,29,30",
  [RouletteBetNo.STREET_31_32_33]: "Street 31,32,33",
  [RouletteBetNo.STREET_34_35_36]: "Street 34,35,36",
  [RouletteBetNo.SPLIT_0_1]: "Split 0/1",
  [RouletteBetNo.SPLIT_0_2]: "Split 0/2",
  [RouletteBetNo.SPLIT_0_3]: "Split 0/3",
  [RouletteBetNo.SPLIT_1_2]: "Split 1/2",
  [RouletteBetNo.SPLIT_1_4]: "Split 1/4",
  [RouletteBetNo.SPLIT_2_3]: "Split 2/3",
  [RouletteBetNo.SPLIT_2_5]: "Split 2/5",
  [RouletteBetNo.SPLIT_3_6]: "Split 3/6",
  [RouletteBetNo.SPLIT_4_5]: "Split 4/5",
  [RouletteBetNo.SPLIT_4_7]: "Split 4/7",
  [RouletteBetNo.SPLIT_5_6]: "Split 5/6",
  [RouletteBetNo.SPLIT_5_8]: "Split 5/8",
  [RouletteBetNo.SPLIT_6_9]: "Split 6/9",
  [RouletteBetNo.SPLIT_7_8]: "Split 7/8",
  [RouletteBetNo.SPLIT_7_10]: "Split 7/10",
  [RouletteBetNo.SPLIT_8_9]: "Split 8/9",
  [RouletteBetNo.SPLIT_8_11]: "Split 8/11",
  [RouletteBetNo.SPLIT_9_12]: "Split 9/12",
  [RouletteBetNo.SPLIT_10_11]: "Split 10/11",
  [RouletteBetNo.SPLIT_10_13]: "Split 10/13",
  [RouletteBetNo.SPLIT_11_12]: "Split 11/12",
  [RouletteBetNo.SPLIT_11_14]: "Split 11/14",
  [RouletteBetNo.SPLIT_12_15]: "Split 12/15",
  [RouletteBetNo.SPLIT_13_14]: "Split 13/14",
  [RouletteBetNo.SPLIT_13_16]: "Split 13/16",
  [RouletteBetNo.SPLIT_14_15]: "Split 14/15",
  [RouletteBetNo.SPLIT_14_17]: "Split 14/17",
  [RouletteBetNo.SPLIT_15_18]: "Split 15/18",
  [RouletteBetNo.SPLIT_16_17]: "Split 16/17",
  [RouletteBetNo.SPLIT_16_19]: "Split 16/19",
  [RouletteBetNo.SPLIT_17_18]: "Split 17/18",
  [RouletteBetNo.SPLIT_17_20]: "Split 17/20",
  [RouletteBetNo.SPLIT_18_21]: "Split 18/21",
  [RouletteBetNo.SPLIT_19_20]: "Split 19/20",
  [RouletteBetNo.SPLIT_19_22]: "Split 19/22",
  [RouletteBetNo.SPLIT_20_21]: "Split 20/21",
  [RouletteBetNo.SPLIT_20_23]: "Split 20/23",
  [RouletteBetNo.SPLIT_21_24]: "Split 21/24",
  [RouletteBetNo.SPLIT_22_23]: "Split 22/23",
  [RouletteBetNo.SPLIT_22_25]: "Split 22/25",
  [RouletteBetNo.SPLIT_23_24]: "Split 23/24",
  [RouletteBetNo.SPLIT_23_26]: "Split 23/26",
  [RouletteBetNo.SPLIT_24_27]: "Split 24/27",
  [RouletteBetNo.SPLIT_25_26]: "Split 25/26",
  [RouletteBetNo.SPLIT_25_28]: "Split 25/28",
  [RouletteBetNo.SPLIT_26_27]: "Split 26/27",
  [RouletteBetNo.SPLIT_26_29]: "Split 26/29",
  [RouletteBetNo.SPLIT_27_30]: "Split 27/30",
  [RouletteBetNo.SPLIT_28_29]: "Split 28/29",
  [RouletteBetNo.SPLIT_28_31]: "Split 28/31",
  [RouletteBetNo.SPLIT_29_30]: "Split 29/30",
  [RouletteBetNo.SPLIT_29_32]: "Split 29/32",
  [RouletteBetNo.SPLIT_30_33]: "Split 30/33",
  [RouletteBetNo.SPLIT_31_32]: "Split 31/32",
  [RouletteBetNo.SPLIT_31_34]: "Split 31/34",
  [RouletteBetNo.SPLIT_32_33]: "Split 32/33",
  [RouletteBetNo.SPLIT_32_35]: "Split 32/35",
  [RouletteBetNo.SPLIT_33_36]: "Split 33/36",
  [RouletteBetNo.SPLIT_34_35]: "Split 34/35",
  [RouletteBetNo.SPLIT_35_36]: "Split 35/36",
  [RouletteBetNo.CORNER_0_1_2_3]: "Corner 0,1,2,3",
  [RouletteBetNo.CORNER_1_2_4_5]: "Corner 1,2,4,5",
  [RouletteBetNo.CORNER_2_3_5_6]: "Corner 2,3,5,6",
  [RouletteBetNo.CORNER_4_5_7_8]: "Corner 4,5,7,8",
  [RouletteBetNo.CORNER_5_6_8_9]: "Corner 5,6,8,9",
  [RouletteBetNo.CORNER_7_8_10_11]: "Corner 7,8,10,11",
  [RouletteBetNo.CORNER_8_9_11_12]: "Corner 8,9,11,12",
  [RouletteBetNo.CORNER_10_11_13_14]: "Corner 10,11,13,14",
  [RouletteBetNo.CORNER_11_12_14_15]: "Corner 11,12,14,15",
  [RouletteBetNo.CORNER_13_14_16_17]: "Corner 13,14,16,17",
  [RouletteBetNo.CORNER_14_15_17_18]: "Corner 14,15,17,18",
  [RouletteBetNo.CORNER_16_17_19_20]: "Corner 16,17,19,20",
  [RouletteBetNo.CORNER_17_18_20_21]: "Corner 17,18,20,21",
  [RouletteBetNo.CORNER_19_20_22_23]: "Corner 19,20,22,23",
  [RouletteBetNo.CORNER_20_21_23_24]: "Corner 20,21,23,24",
  [RouletteBetNo.CORNER_22_23_25_26]: "Corner 22,23,25,26",
  [RouletteBetNo.CORNER_23_24_26_27]: "Corner 23,24,26,27",
  [RouletteBetNo.CORNER_25_26_28_29]: "Corner 25,26,28,29",
  [RouletteBetNo.CORNER_26_27_29_30]: "Corner 26,27,29,30",
  [RouletteBetNo.CORNER_28_29_31_32]: "Corner 28,29,31,32",
  [RouletteBetNo.CORNER_29_30_32_33]: "Corner 29,30,32,33",
  [RouletteBetNo.CORNER_31_32_34_35]: "Corner 31,32,34,35",
  [RouletteBetNo.CORNER_32_33_35_36]: "Corner 32,33,35,36"
};
var CallBetsEnum$1 = /* @__PURE__ */ ((CallBetsEnum2) => {
  CallBetsEnum2["TIER"] = "TIER";
  CallBetsEnum2["ORPH"] = "ORPH";
  CallBetsEnum2["VOISINS"] = "VOISINS";
  CallBetsEnum2["ZERO"] = "ZERO";
  return CallBetsEnum2;
})(CallBetsEnum$1 || {});
const BetTypeEnum$1 = {
  ...RouletteBetNo,
  ...CallBetsEnum$1
};
const raceTrackGroup$1 = Object.values(CallBetsEnum$1);
const raceTrackGroupMap$1 = {
  [BetTypeEnum$1.TIER]: [
    BetTypeEnum$1.SPLIT_5_8,
    BetTypeEnum$1.SPLIT_10_11,
    BetTypeEnum$1.SPLIT_13_16,
    BetTypeEnum$1.SPLIT_23_24,
    BetTypeEnum$1.SPLIT_27_30,
    BetTypeEnum$1.SPLIT_33_36
  ],
  [BetTypeEnum$1.ORPH]: [
    BetTypeEnum$1.STRAIGHT_UP_1,
    BetTypeEnum$1.SPLIT_6_9,
    BetTypeEnum$1.SPLIT_14_17,
    BetTypeEnum$1.SPLIT_17_20,
    BetTypeEnum$1.SPLIT_31_34
  ],
  [BetTypeEnum$1.VOISINS]: [
    BetTypeEnum$1.STREET_0_2_3,
    BetTypeEnum$1.STREET_0_2_3,
    BetTypeEnum$1.SPLIT_4_7,
    BetTypeEnum$1.SPLIT_12_15,
    BetTypeEnum$1.SPLIT_18_21,
    BetTypeEnum$1.SPLIT_19_22,
    BetTypeEnum$1.SPLIT_32_35,
    BetTypeEnum$1.CORNER_25_26_28_29,
    BetTypeEnum$1.CORNER_25_26_28_29
  ],
  [BetTypeEnum$1.ZERO]: [BetTypeEnum$1.STRAIGHT_UP_26, BetTypeEnum$1.SPLIT_0_3, BetTypeEnum$1.SPLIT_12_15, BetTypeEnum$1.SPLIT_32_35]
};
const cleanExtraBets = (history) => {
  const cleanedBets = { ...history };
  const extraBets = {};
  Object.keys(cleanedBets).forEach((key) => {
    if (raceTrackGroup$1.includes(key)) {
      extraBets[key] = cleanedBets[key];
      delete cleanedBets[key];
    }
  });
  return { cleanedBets, extraBets };
};
const addExtraBets = (historyExtraBets, diffExtraBets) => {
  const result = { ...historyExtraBets };
  const limit = getRaceTrackGroupLimit();
  if (diffExtraBets) {
    Object.keys(diffExtraBets).forEach((key) => {
      var _a2;
      const existingAmount = new Decimal(result[key] || 0);
      const diffAmount = new Decimal(diffExtraBets[key]);
      const betLimit = new Decimal((_a2 = limit[key]) != null ? _a2 : Number.MAX_SAFE_INTEGER);
      const newTotal = existingAmount.plus(diffAmount);
      result[key] = Math.min(newTotal.toNumber(), betLimit.toNumber());
    });
  }
  return result;
};
const getRaceTrackGroupLimit = () => {
  const limit = {};
  const betTypesLimit = useConfigStore.getState().betTypesLimit;
  if (!Object.keys(betTypesLimit).every((v) => v.startsWith("ro."))) return limit;
  raceTrackGroup$1.forEach((betType) => {
    const filteredGroup = raceTrackGroupMap$1[betType].filter((item) => !item.includes("straight"));
    new Set(filteredGroup).forEach((item) => {
      var _a2, _b2, _c2;
      limit[betType] = ((_a2 = limit[betType]) != null ? _a2 : 0) + ((_c2 = (_b2 = betTypesLimit["ro.".concat(item.split("-")[0])]) == null ? void 0 : _b2.max) != null ? _c2 : 0);
    });
  });
  return limit;
};
const getDraggedChipEdgeDist = (mouseX, mouseY, element) => {
  if (!element) return;
  const rect = element.getBoundingClientRect();
  const inHorizontally = mouseX >= rect.left && mouseX <= rect.right;
  const inVertically = mouseY >= rect.top && mouseY <= rect.bottom;
  if (!inHorizontally || !inVertically) return;
  return {
    offsetX: mouseX - rect.left,
    // distance from left edge
    offsetY: mouseY - rect.top
    // distance from top edge
  };
};
var BoardIDEnum = /* @__PURE__ */ ((BoardIDEnum2) => {
  BoardIDEnum2["SICBO_BOARD"] = "StandardBoard";
  BoardIDEnum2["RACETRACK"] = "RacetrackBoard";
  BoardIDEnum2["GRID_DESKTOP"] = "D_GridBoard";
  BoardIDEnum2["GRID_MOBILE"] = "GridBoard";
  BoardIDEnum2["GameBoard"] = "GameBoard";
  return BoardIDEnum2;
})(BoardIDEnum || {});
const getDraggedChipRef = (betType, boardId) => {
  if (!betType) return;
  const board = document.getElementById(boardId);
  if (!board) return;
  const preChip = board == null ? void 0 : board.querySelector('[data-drag-chip="'.concat(betType, '"]'));
  return preChip;
};
const getCenterPosition = (event) => {
  const target = document.elementFromPoint(event.pageX, event.pageY);
  const rect = target.getBoundingClientRect();
  const centerPosition = {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
  return centerPosition;
};
const getBetDiff = (prevBets, curBets) => {
  const diff = {};
  const curEntries = Object.entries(curBets);
  for (const [betType, amount] of curEntries) {
    if (!prevBets[betType] || prevBets[betType] !== amount) {
      diff[betType] = amount;
    }
  }
  return diff;
};
const DEVTOOLS_CONFIG$2 = {
  name: "".concat(document.title, " - useCartStore"),
  store: "CartStore",
  serialize: {
    options: true
  }
};
const AllBetValues = [...Object.values(BaccaratBetNo), ...Object.values(RouletteBetNo), ...Object.values(SicBoBetNo)];
const VALID_BET_TYPES = new Set(AllBetValues);
const useCartStore = create()(
  devtools(
    subscribeWithSelector((set2, get2) => {
      const chipAmounts = [1, 2, 5, 10, 25, 50, 100, 250, 500, 1e3, 2e3, 5e3];
      const initialChipList = chipAmounts.map((amount, index) => ({ amount, onTable: index <= 7 }));
      const initialSelectedChipIdx = 3;
      const initialSelectedChipVal = initialChipList[initialSelectedChipIdx].amount;
      return {
        walletBalance: 0,
        remainedBalance: 0,
        lowBalanceNotifyCount: 1,
        currencySymbol: "$",
        betStats: {
          amount: {},
          count: {}
        },
        chipList: initialChipList,
        selectedChipIdx: initialSelectedChipIdx,
        selectedChipVal: initialSelectedChipVal,
        setSelectChipVal: (value) => {
          const newIdx = get2().chipList.findIndex((num) => num.amount === value);
          const selectedChipIdx = Math.max(0, newIdx);
          set2({ selectedChipIdx, selectedChipVal: value });
        },
        boardHistory: [],
        boardHistoryCache: null,
        latestPlaceBet: null,
        totalBet: 0,
        repeatCount: 0,
        playChipSound: true,
        handleUndo: () => {
          var _a2;
          const isBet = useBettingStore.getState().isBet;
          if (!isBet) {
            tooltipEventBus.emit("close", { anchorSelect: "#MainUndoBtn" });
            return;
          }
          const { boardHistory } = useCartStore.getState();
          const betToBeRemoved = boardHistory.at(-1);
          if (!betToBeRemoved) {
            tooltipEventBus.emit("empty");
            return;
          }
          if (useWinNumberStore.getState().lastWinCache !== 0) {
            useWinNumberStore.setState({ lastWinCache: 0 });
          }
          playSound(["undo"]);
          const betToBeNewEnd = (_a2 = boardHistory.at(-2)) != null ? _a2 : {};
          const latestPlaceBet = getBetDiff(betToBeNewEnd, betToBeRemoved);
          const undoHistory = boardHistory.slice(0, -1);
          useCartStore.setState({ latestPlaceBet, boardHistory: undoHistory, playChipSound: false });
        },
        handleDouble: () => {
        },
        handleRepeat: (e) => {
          const pointerPosition = { x: e.pageX, y: e.pageY };
          const isBet = useBettingStore.getState().isBet;
          if (!isBet) {
            tooltipEventBus.emit("close", { anchorSelect: "#doubleRepeatBtn" });
            return;
          }
          const { boardHistoryCache, repeatCount, remainedBalance } = useCartStore.getState();
          if (!boardHistoryCache) {
            tooltipEventBus.emit("empty", { anchorSelect: "#doubleRepeatBtn" });
            return;
          }
          const sum = get2().getTotalBet([boardHistoryCache]);
          const balance = new Decimal(remainedBalance);
          if (balance.minus(sum).isNegative()) {
            tooltipEventBus.emit("lowBalance", { position: isMobileDevice ? void 0 : pointerPosition });
            return;
          }
          if (useWinNumberStore.getState().lastWinCache !== 0) {
            useWinNumberStore.setState({ lastWinCache: 0 });
          }
          if (repeatCount === 2) {
            tooltipEventBus.emit("betAutomatically");
            useCartStore.setState({ repeatCount: 0 });
          } else {
            useCartStore.setState({ repeatCount: repeatCount + 1 });
          }
          useBettingStore.setState({ resetBoard: false });
          playSound(["double"]);
          useCartStore.setState({
            boardHistory: [boardHistoryCache]
          });
        },
        canDouble: () => true,
        enterBet: () => {
          useConfigStore.setState({ tableFinished: false });
          const { autoPlayResumed, boardSnapshot, confirmModalType } = useAutoPlayStore.getState();
          const { boardHistory } = useCartStore.getState();
          if (!autoPlayResumed) {
            resumeAutoPlay();
          }
          if (confirmModalType === "BetChanged") {
            const index = boardHistory.findIndex((bet) => JSON.stringify(bet) === JSON.stringify(boardSnapshot));
            const originalBet = boardHistory.slice(0, index + 1);
            useCartStore.setState({ boardHistory: originalBet });
            useAutoPlayStore.setState({ confirmModalType: null });
          }
          const latest2 = boardHistory[boardHistory.length - 1];
          if (latest2 && latest2.length !== 0) {
            useCartStore.setState({ boardHistoryCache: latest2 });
          }
          const isAutoPlay = useAutoPlayStore.getState().checkAutoPlay();
          if (isAutoPlay) {
            useWinNumberStore.setState({ lastWinCache: 0 });
            getBetSound(boardHistory, latest2);
            return;
          }
          useCartStore.setState({ boardHistory: [] });
        },
        enterWheelSpin: () => {
          console.debug("enterWheelSpin");
        },
        enterSettlement: () => {
          console.debug("enterSettlement");
        },
        package: () => /* @__PURE__ */ new Map(),
        getTotalBet: (boardHistory) => {
          if (boardHistory.length === 0) return 0;
          const lastBet = boardHistory[boardHistory.length - 1];
          const filteredData = Object.fromEntries(Object.entries(lastBet).filter(([key]) => VALID_BET_TYPES.has(key)));
          const totalBet = Object.values(filteredData).reduce((acc, b) => acc.plus(b), new Decimal(0));
          return totalBet.toNumber();
        }
      };
    }),
    DEVTOOLS_CONFIG$2
  )
);
useCartStore.subscribe(
  (s) => s.boardHistory,
  (curr, prev) => {
    var _a2, _b2;
    const resetBoard = useBettingStore.getState().resetBoard;
    const currLastBet = (_a2 = curr.at(-1)) != null ? _a2 : {};
    const prevLastBet = (_b2 = prev.at(-1)) != null ? _b2 : {};
    const { roundId, gameType, gameCode } = useConfigStore.getState().roundInfo;
    const { isAutoPlay } = useAutoPlayStore.getState();
    const { isRetrieveBet } = useBettingStore.getState();
    const gameBetKeys = getGameBetKeys(gameType);
    const delta = calculateBetDelta(currLastBet, prevLastBet, gameBetKeys);
    const playerCountDelta = calculateCountDelta(prevLastBet, currLastBet);
    const shouldNormalPeek = !isRetrieveBet && (!resetBoard || curr.length !== 0);
    const shouldAutoplayUndoPeek = !isRetrieveBet && isAutoPlay && curr.length === 0 && prev.length !== 0 && resetBoard;
    if (shouldNormalPeek || shouldAutoplayUndoPeek) {
      const uuid = v4();
      connectIns.betPeek(roundId, gameType, gameCode, delta, playerCountDelta, uuid);
    }
    if (curr.length === 0) {
      useCartStore.setState({ totalBet: 0 });
      return;
    }
    const { getTotalBet } = useCartStore.getState();
    useCartStore.setState({ totalBet: getTotalBet(curr) });
    if (currLastBet) {
      const isCanDouble = useCartStore.getState().canDouble(currLastBet);
      useBettingStore.setState({ isOverLimit: !isCanDouble });
    }
    if (isRetrieveBet) useBettingStore.setState({ isRetrieveBet: false });
  }
);
useCartStore.subscribe(
  (s) => s.remainedBalance,
  (remainedBalance) => {
    const { chipList, selectedChipVal } = useCartStore.getState();
    const currChipIdx = chipList.findIndex((num) => num.amount === selectedChipVal);
    if (remainedBalance < chipList[Math.max(0, currChipIdx)].amount) {
      const reversedChipList = [...chipList].reverse();
      const chipConfig = reversedChipList.find((c) => c.onTable && c.amount <= remainedBalance);
      const selectedChipIdx = chipConfig ? chipList.indexOf(chipConfig) : -1;
      if (selectedChipIdx === -1) return;
      const selectedChipVal2 = chipList[selectedChipIdx].amount;
      useCartStore.setState({ selectedChipIdx, selectedChipVal: selectedChipVal2 });
    }
  }
);
useCartStore.subscribe(
  (s) => s.lowBalanceNotifyCount,
  (lowBalanceNotifyCount) => {
    if (lowBalanceNotifyCount && lowBalanceNotifyCount % 2 === 0) {
      useToastStore.getState().addToast("info", "COMMON.LOW_BALANCE2");
      useCartStore.setState({ lowBalanceNotifyCount: 0 });
    }
  }
);
useCartStore.subscribe(
  (s) => ({ walletBalance: s.walletBalance, totalBet: s.totalBet }),
  (curr) => {
    const isBet = useBettingStore.getState().isBet;
    if (!isBet) return;
    const { walletBalance, totalBet } = curr;
    const balance = new Decimal(walletBalance);
    const bet = new Decimal(totalBet);
    const remainedBalance = balance.minus(bet).toNumber();
    useCartStore.setState({ remainedBalance });
  },
  { equalityFn: shallow$1 }
);
useCartStore.subscribe(
  (s) => s.totalBet,
  (curr) => {
    const menuPage = useLayoutStore.getState().menuPage;
    if (curr === 0 && menuPage === "autoplay") useLayoutStore.setState({ menuPage: null });
  }
);
useCartStore.subscribe(
  (s) => s.latestPlaceBet,
  (curr) => {
    if (!curr) return;
    const playChipSound = useCartStore.getState().playChipSound;
    if (!playChipSound) return;
    const boardHistory = useCartStore.getState().boardHistory;
    getBetSound(boardHistory, curr);
  }
);
const getBetDetail = () => {
  const data = useCartStore.getState().package();
  if (data.size === 0) return null;
  return Object.fromEntries(data.entries());
};
const DEVTOOLS_CONFIG$1 = {
  name: "".concat(document.title, " - useDataStore"),
  store: "DataStore",
  serialize: {
    options: true
  }
};
const useDataStore = create()(
  devtools(
    (_) => ({
      payoutLimits: [],
      titleList: []
    }),
    DEVTOOLS_CONFIG$1
  )
);
let GameRules$1;
const setAppComponent = ({ GameRulesComponent }) => {
  GameRules$1 = GameRulesComponent;
};
const DESKTOP_RATIO = 1.7777;
const DESKTOP_REM_RATIO = 100;
const MOBILE_REM_RATIO = 22.5;
const MOBILE_NARROW_REM_RATIO = 18.95;
const SM_DEVICE_HEIGHT_BREAKPOINT = 649;
const SM_DEVICE_WIDTH_RATIO = 0.845;
const SM_DEVICE_BOARD_HEIGHT_OFFSET = 13;
let timer;
let cacheW = 0;
let cacheH = 0;
const shouldSkipResizeHandling = () => {
  var _a2;
  const skipPath = ["/history-content"];
  const currentPath = (_a2 = window.location) == null ? void 0 : _a2.pathname;
  if (!currentPath) return false;
  return skipPath.some((path2) => currentPath.endsWith(path2));
};
const handleResize = () => {
  if (shouldSkipResizeHandling()) return;
  const ratio = window.innerWidth / window.innerHeight;
  const [maxRatio, minRatio] = isMobileDevice ? [9.5 / 16, 400 / 800, 9.5 / 16] : [DESKTOP_RATIO, DESKTOP_RATIO];
  let w = ratio < maxRatio ? window.innerWidth : maxRatio * window.innerHeight;
  let h = ratio < minRatio ? window.innerWidth / minRatio : window.innerHeight;
  const isSmallDevice = isMobileDevice && window.innerHeight < SM_DEVICE_HEIGHT_BREAKPOINT;
  if (isMobileDevice && isSmallDevice) {
    w = window.innerWidth * SM_DEVICE_WIDTH_RATIO;
    h = window.innerHeight - SM_DEVICE_BOARD_HEIGHT_OFFSET;
  }
  useConfigStore.setState({ IS_SMALL_DEVICE: isSmallDevice });
  document.documentElement.style.setProperty(isMobileDevice ? "--mobile-narrow" : "--desktop-narrow", "".concat(w, "px"));
  document.documentElement.style.setProperty(isMobileDevice ? "--mobile-wide" : "--desktop-wide", "".concat(h, "px"));
  if (w !== cacheW || h !== cacheH) {
    cacheW = w;
    cacheH = h;
    const remRatio = isMobileDevice ? isSmallDevice ? MOBILE_NARROW_REM_RATIO : MOBILE_REM_RATIO : DESKTOP_REM_RATIO;
    const rootFontSize = w / remRatio;
    document.documentElement.style.fontSize = "".concat(rootFontSize.toFixed(2), "px");
    useLayoutStore.setState({ rootEmFontSize: Number(rootFontSize.toFixed(2)) });
  }
};
handleResize();
const resizeCallback = throttle$1(() => {
  handleResize();
  window.clearTimeout(timer);
  timer = window.setTimeout(handleResize, 100);
}, 100);
window.addEventListener("resize", resizeCallback);
const __vite_import_meta_env__ = { "BASE_URL": "./", "DEV": false, "LEGACY": false, "MODE": "production", "PROD": true, "SSR": false, "VITE_API_URL": "", "VITE_APP_GIT_SHA": "<sha>", "VITE_APP_TOLGEE_API_KEY": "tgpak_gi2demjsl4yxgnzxmvxgg5tpmvstqnlkmzyhantggrzxmz3ennsa", "VITE_APP_TOLGEE_API_URL": "https://app.tolgee.io", "VITE_DEPLOY_AAA": "dev", "VITE_DEPLOY_ENV": "dev", "VITE_GAME_TABLE": "RAOHE-YESU", "VITE_SESSION_ID": "494b474c-4956-4544-4556-000000000113", "VITE_WS_SERVER": "wss://crystal-rgs-gs1.iki-cit.cc/ws" };
async function initializeCacheSystem() {
  try {
    if (!("serviceWorker" in navigator)) return;
    const baseUrl = new URL(window.location.origin + window.location.pathname);
    const swUrl = new URL("sw-cache-interceptor.js", baseUrl).href;
    const scopeUrl = new URL("./", baseUrl).pathname;
    await navigator.serviceWorker.register(swUrl, { scope: scopeUrl });
    await navigator.serviceWorker.ready;
  } catch (error) {
    console.error("Cache initialization failed:", error);
  }
}
async function initializeCommon(config) {
  var _a2, _b2, _c2;
  checkRequiredEnv();
  console.debug(config);
  const searchParams2 = new URLSearchParams(document.location.search);
  const IS_CLOSE_SERVER = searchParams2.get("VITE_CLOSE_SERVER") === "1" || config.VITE_CLOSE_SERVER === "1";
  const WS_SERVER = (_a2 = searchParams2.get("cb")) != null ? _a2 : config.VITE_WS_SERVER;
  const GAME_TABLE2 = (_b2 = searchParams2.get("game")) != null ? _b2 : config.VITE_GAME_TABLE;
  const SESSION_ID = (_c2 = searchParams2.get("sid")) != null ? _c2 : config.VITE_SESSION_ID;
  if (!SESSION_ID) console.error("get your session id first");
  if (!WS_SERVER) console.error("WS_SERVER is not defined. Please check your configuration.");
  useConfigStore.setState({ WS_SERVER, GAME_TABLE: GAME_TABLE2, SESSION_ID, IS_CLOSE_SERVER });
  useBettingStore.setState({ isBet: IS_CLOSE_SERVER });
  await initializeCacheSystem();
}
function checkRequiredEnv() {
  const requiredEnvVars = ["VITE_DEPLOY_ENV", "VITE_WS_SERVER", "VITE_GAME_TABLE"];
  const missingVars = requiredEnvVars.filter((varName) => !__vite_import_meta_env__[varName]);
  if (missingVars.length > 0) {
    throw new Error("Missing required environment variables: ".concat(missingVars.join(", ")));
  }
}
const defaultTableLimit = { min: 0.1, max: 2e4 };
const titleList = [
  "COMMON.GAMES_RULES",
  "COMMON.BET_TYPES",
  "COMMON.RACETRACK_BETS",
  "COMMON.PAYOUTS",
  "COMMON.RETURN_TO_PLAYER",
  "COMMON.WINNING_NUMBERS",
  "COMMON.STATISTICS",
  "COMMON.PLACING_BETS",
  "COMMON.AUTOPLAY",
  "COMMON.GAME_HISTORY",
  "COMMON.CHAT",
  "COMMON.DISCONNECTION_POLICY",
  "COMMON.ERROR_HANDLING"
];
const payoutLimits = [
  {
    betType: "STRAIGHT UP",
    betLimits: "$0.1-500",
    payouts: "35:1"
  },
  {
    betType: "SPLIT",
    betLimits: "$0.1-1,000",
    payouts: "17:1"
  },
  {
    betType: "STREET",
    betLimits: "$0.1-1,500",
    payouts: "11:1"
  },
  {
    betType: "CORNER",
    betLimits: "$0.1-2,000",
    payouts: "8:1"
  },
  {
    betType: "SIX LINE",
    betLimits: "$0.1-3,000",
    payouts: "5:1"
  },
  {
    betType: "COLUMN",
    betLimits: "$0.1-6,000",
    payouts: "2:1"
  },
  {
    betType: "DOZEN",
    betLimits: "$0.1-6,000",
    payouts: "2:1"
  },
  {
    betType: "RED / BLACK",
    betLimits: "$0.1-10,000",
    payouts: "1:1"
  },
  {
    betType: "ODD / EVEN",
    betLimits: "$0.1-10,000",
    payouts: "1:1"
  },
  {
    betType: "1-18 / 19-36",
    betLimits: "$0.1-10,000",
    payouts: "1:1"
  }
];
const GameRules = () => {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Game Rules",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.GAME_RULES")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Bet Types",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.BET_TYPES")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Racetrack Bets",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.RACETRACK_BETS")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Payouts",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.PAYOUTS")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Return To Player",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.RETURN_TO_PLAYER")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Winning Numbers",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.WINNING_NUMBERS")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Statistics",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.STATISTICS")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Placing bets",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.PLACING_BETS")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Autoplay",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.AUTOPLAY")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Game History",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.GAME_HISTORY")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Chat",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.CHAT")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Disconnection policy",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.DISCONNECTION_POLICY")) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "Error Handling",
        dangerouslySetInnerHTML: { __html: sanitizeRule(t2("ROULETTE_RULES.ERROR_HANDLING")) }
      }
    )
  ] });
};
const RACE_ORDER = [
  0,
  32,
  15,
  19,
  4,
  21,
  2,
  25,
  17,
  34,
  6,
  27,
  13,
  36,
  11,
  30,
  8,
  23,
  10,
  5,
  24,
  16,
  33,
  1,
  20,
  14,
  31,
  9,
  22,
  18,
  29,
  7,
  28,
  12,
  35,
  3,
  26
];
function getRouletteNumberColor(num) {
  const idx = RACE_ORDER.findIndex((element) => element === num);
  if (idx === 0) return "green";
  return idx % 2 === 0 ? "black" : "red";
}
const findNeighborByRange = (id, range) => {
  const start = RACE_ORDER.findIndex((ele) => ele === Number(id)) - range;
  const triple = [...RACE_ORDER, ...RACE_ORDER, ...RACE_ORDER];
  const res = [];
  for (let index = 0; index < range * 2 + 1; index++) {
    res.push(triple[start + RACE_ORDER.length + index]);
  }
  return res;
};
var CallBetsEnum = /* @__PURE__ */ ((CallBetsEnum2) => {
  CallBetsEnum2["TIER"] = "TIER";
  CallBetsEnum2["ORPH"] = "ORPH";
  CallBetsEnum2["VOISINS"] = "VOISINS";
  CallBetsEnum2["ZERO"] = "ZERO";
  return CallBetsEnum2;
})(CallBetsEnum || {});
const BetTypeEnum = {
  ...RouletteBetNo,
  ...CallBetsEnum
};
const raceTrackGroup = Object.values(CallBetsEnum);
const raceTrackGroupMap = {
  [BetTypeEnum.TIER]: [
    BetTypeEnum.SPLIT_5_8,
    BetTypeEnum.SPLIT_10_11,
    BetTypeEnum.SPLIT_13_16,
    BetTypeEnum.SPLIT_23_24,
    BetTypeEnum.SPLIT_27_30,
    BetTypeEnum.SPLIT_33_36
  ],
  [BetTypeEnum.ORPH]: [
    BetTypeEnum.STRAIGHT_UP_1,
    BetTypeEnum.SPLIT_6_9,
    BetTypeEnum.SPLIT_14_17,
    BetTypeEnum.SPLIT_17_20,
    BetTypeEnum.SPLIT_31_34
  ],
  [BetTypeEnum.VOISINS]: [
    BetTypeEnum.STREET_0_2_3,
    BetTypeEnum.STREET_0_2_3,
    BetTypeEnum.SPLIT_4_7,
    BetTypeEnum.SPLIT_12_15,
    BetTypeEnum.SPLIT_18_21,
    BetTypeEnum.SPLIT_19_22,
    BetTypeEnum.SPLIT_32_35,
    BetTypeEnum.CORNER_25_26_28_29,
    BetTypeEnum.CORNER_25_26_28_29
  ],
  [BetTypeEnum.ZERO]: [BetTypeEnum.STRAIGHT_UP_26, BetTypeEnum.SPLIT_0_3, BetTypeEnum.SPLIT_12_15, BetTypeEnum.SPLIT_32_35]
};
const raceTrackToStraight = {
  [BetTypeEnum.TIER]: [
    BetTypeEnum.STRAIGHT_UP_5,
    BetTypeEnum.STRAIGHT_UP_8,
    BetTypeEnum.STRAIGHT_UP_10,
    BetTypeEnum.STRAIGHT_UP_11,
    BetTypeEnum.STRAIGHT_UP_13,
    BetTypeEnum.STRAIGHT_UP_16,
    BetTypeEnum.STRAIGHT_UP_23,
    BetTypeEnum.STRAIGHT_UP_24,
    BetTypeEnum.STRAIGHT_UP_27,
    BetTypeEnum.STRAIGHT_UP_30,
    BetTypeEnum.STRAIGHT_UP_33,
    BetTypeEnum.STRAIGHT_UP_36
  ],
  [BetTypeEnum.ORPH]: [
    BetTypeEnum.STRAIGHT_UP_1,
    BetTypeEnum.STRAIGHT_UP_6,
    BetTypeEnum.STRAIGHT_UP_9,
    BetTypeEnum.STRAIGHT_UP_14,
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_20,
    BetTypeEnum.STRAIGHT_UP_31,
    BetTypeEnum.STRAIGHT_UP_34
  ],
  [BetTypeEnum.VOISINS]: [
    BetTypeEnum.STRAIGHT_UP_0,
    BetTypeEnum.STRAIGHT_UP_2,
    BetTypeEnum.STRAIGHT_UP_3,
    // BetTypeEnum.STREET_0_2_3,
    BetTypeEnum.STRAIGHT_UP_4,
    BetTypeEnum.STRAIGHT_UP_7,
    BetTypeEnum.STRAIGHT_UP_12,
    BetTypeEnum.STRAIGHT_UP_15,
    BetTypeEnum.STRAIGHT_UP_18,
    BetTypeEnum.STRAIGHT_UP_21,
    BetTypeEnum.STRAIGHT_UP_19,
    BetTypeEnum.STRAIGHT_UP_22,
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_35,
    // BetTypeEnum.CORNER_25_26_28_29,
    BetTypeEnum.STRAIGHT_UP_25,
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_28,
    BetTypeEnum.STRAIGHT_UP_29
  ],
  [BetTypeEnum.ZERO]: [
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_0,
    BetTypeEnum.STRAIGHT_UP_3,
    BetTypeEnum.STRAIGHT_UP_12,
    BetTypeEnum.STRAIGHT_UP_15,
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_35
  ]
};
const OUTER_GROUP_MAP = {
  [BetTypeEnum.RED]: [
    BetTypeEnum.STRAIGHT_UP_1,
    BetTypeEnum.STRAIGHT_UP_3,
    BetTypeEnum.STRAIGHT_UP_5,
    BetTypeEnum.STRAIGHT_UP_7,
    BetTypeEnum.STRAIGHT_UP_9,
    BetTypeEnum.STRAIGHT_UP_12,
    BetTypeEnum.STRAIGHT_UP_14,
    BetTypeEnum.STRAIGHT_UP_16,
    BetTypeEnum.STRAIGHT_UP_18,
    BetTypeEnum.STRAIGHT_UP_19,
    BetTypeEnum.STRAIGHT_UP_21,
    BetTypeEnum.STRAIGHT_UP_23,
    BetTypeEnum.STRAIGHT_UP_25,
    BetTypeEnum.STRAIGHT_UP_27,
    BetTypeEnum.STRAIGHT_UP_30,
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_34,
    BetTypeEnum.STRAIGHT_UP_36
  ],
  [BetTypeEnum.BLACK]: [
    BetTypeEnum.STRAIGHT_UP_2,
    BetTypeEnum.STRAIGHT_UP_4,
    BetTypeEnum.STRAIGHT_UP_6,
    BetTypeEnum.STRAIGHT_UP_8,
    BetTypeEnum.STRAIGHT_UP_10,
    BetTypeEnum.STRAIGHT_UP_11,
    BetTypeEnum.STRAIGHT_UP_13,
    BetTypeEnum.STRAIGHT_UP_15,
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_20,
    BetTypeEnum.STRAIGHT_UP_22,
    BetTypeEnum.STRAIGHT_UP_24,
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_28,
    BetTypeEnum.STRAIGHT_UP_29,
    BetTypeEnum.STRAIGHT_UP_31,
    BetTypeEnum.STRAIGHT_UP_33,
    BetTypeEnum.STRAIGHT_UP_35
  ],
  [BetTypeEnum.ODD]: [
    BetTypeEnum.STRAIGHT_UP_1,
    BetTypeEnum.STRAIGHT_UP_3,
    BetTypeEnum.STRAIGHT_UP_5,
    BetTypeEnum.STRAIGHT_UP_7,
    BetTypeEnum.STRAIGHT_UP_9,
    BetTypeEnum.STRAIGHT_UP_11,
    BetTypeEnum.STRAIGHT_UP_13,
    BetTypeEnum.STRAIGHT_UP_15,
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_19,
    BetTypeEnum.STRAIGHT_UP_21,
    BetTypeEnum.STRAIGHT_UP_23,
    BetTypeEnum.STRAIGHT_UP_25,
    BetTypeEnum.STRAIGHT_UP_27,
    BetTypeEnum.STRAIGHT_UP_29,
    BetTypeEnum.STRAIGHT_UP_31,
    BetTypeEnum.STRAIGHT_UP_33,
    BetTypeEnum.STRAIGHT_UP_35
  ],
  [BetTypeEnum.EVEN]: [
    BetTypeEnum.STRAIGHT_UP_2,
    BetTypeEnum.STRAIGHT_UP_4,
    BetTypeEnum.STRAIGHT_UP_6,
    BetTypeEnum.STRAIGHT_UP_8,
    BetTypeEnum.STRAIGHT_UP_10,
    BetTypeEnum.STRAIGHT_UP_12,
    BetTypeEnum.STRAIGHT_UP_14,
    BetTypeEnum.STRAIGHT_UP_16,
    BetTypeEnum.STRAIGHT_UP_18,
    BetTypeEnum.STRAIGHT_UP_20,
    BetTypeEnum.STRAIGHT_UP_22,
    BetTypeEnum.STRAIGHT_UP_24,
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_28,
    BetTypeEnum.STRAIGHT_UP_30,
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_34,
    BetTypeEnum.STRAIGHT_UP_36
  ],
  [BetTypeEnum.LOW]: [
    BetTypeEnum.STRAIGHT_UP_1,
    BetTypeEnum.STRAIGHT_UP_2,
    BetTypeEnum.STRAIGHT_UP_3,
    BetTypeEnum.STRAIGHT_UP_4,
    BetTypeEnum.STRAIGHT_UP_5,
    BetTypeEnum.STRAIGHT_UP_6,
    BetTypeEnum.STRAIGHT_UP_7,
    BetTypeEnum.STRAIGHT_UP_8,
    BetTypeEnum.STRAIGHT_UP_9,
    BetTypeEnum.STRAIGHT_UP_10,
    BetTypeEnum.STRAIGHT_UP_11,
    BetTypeEnum.STRAIGHT_UP_12,
    BetTypeEnum.STRAIGHT_UP_13,
    BetTypeEnum.STRAIGHT_UP_14,
    BetTypeEnum.STRAIGHT_UP_15,
    BetTypeEnum.STRAIGHT_UP_16,
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_18
  ],
  [BetTypeEnum.HIGH]: [
    BetTypeEnum.STRAIGHT_UP_19,
    BetTypeEnum.STRAIGHT_UP_20,
    BetTypeEnum.STRAIGHT_UP_21,
    BetTypeEnum.STRAIGHT_UP_22,
    BetTypeEnum.STRAIGHT_UP_23,
    BetTypeEnum.STRAIGHT_UP_24,
    BetTypeEnum.STRAIGHT_UP_25,
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_27,
    BetTypeEnum.STRAIGHT_UP_28,
    BetTypeEnum.STRAIGHT_UP_29,
    BetTypeEnum.STRAIGHT_UP_30,
    BetTypeEnum.STRAIGHT_UP_31,
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_33,
    BetTypeEnum.STRAIGHT_UP_34,
    BetTypeEnum.STRAIGHT_UP_35,
    BetTypeEnum.STRAIGHT_UP_36
  ],
  [BetTypeEnum.DOZEN_1]: [
    BetTypeEnum.STRAIGHT_UP_1,
    BetTypeEnum.STRAIGHT_UP_2,
    BetTypeEnum.STRAIGHT_UP_3,
    BetTypeEnum.STRAIGHT_UP_4,
    BetTypeEnum.STRAIGHT_UP_5,
    BetTypeEnum.STRAIGHT_UP_6,
    BetTypeEnum.STRAIGHT_UP_7,
    BetTypeEnum.STRAIGHT_UP_8,
    BetTypeEnum.STRAIGHT_UP_9,
    BetTypeEnum.STRAIGHT_UP_10,
    BetTypeEnum.STRAIGHT_UP_11,
    BetTypeEnum.STRAIGHT_UP_12
  ],
  [BetTypeEnum.DOZEN_13]: [
    BetTypeEnum.STRAIGHT_UP_13,
    BetTypeEnum.STRAIGHT_UP_14,
    BetTypeEnum.STRAIGHT_UP_15,
    BetTypeEnum.STRAIGHT_UP_16,
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_18,
    BetTypeEnum.STRAIGHT_UP_19,
    BetTypeEnum.STRAIGHT_UP_20,
    BetTypeEnum.STRAIGHT_UP_21,
    BetTypeEnum.STRAIGHT_UP_22,
    BetTypeEnum.STRAIGHT_UP_23,
    BetTypeEnum.STRAIGHT_UP_24
  ],
  [BetTypeEnum.DOZEN_25]: [
    BetTypeEnum.STRAIGHT_UP_25,
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_27,
    BetTypeEnum.STRAIGHT_UP_28,
    BetTypeEnum.STRAIGHT_UP_29,
    BetTypeEnum.STRAIGHT_UP_30,
    BetTypeEnum.STRAIGHT_UP_31,
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_33,
    BetTypeEnum.STRAIGHT_UP_34,
    BetTypeEnum.STRAIGHT_UP_35,
    BetTypeEnum.STRAIGHT_UP_36
  ],
  [BetTypeEnum.COLUMN_1]: [
    BetTypeEnum.STRAIGHT_UP_1,
    BetTypeEnum.STRAIGHT_UP_4,
    BetTypeEnum.STRAIGHT_UP_7,
    BetTypeEnum.STRAIGHT_UP_10,
    BetTypeEnum.STRAIGHT_UP_13,
    BetTypeEnum.STRAIGHT_UP_16,
    BetTypeEnum.STRAIGHT_UP_19,
    BetTypeEnum.STRAIGHT_UP_22,
    BetTypeEnum.STRAIGHT_UP_25,
    BetTypeEnum.STRAIGHT_UP_28,
    BetTypeEnum.STRAIGHT_UP_31,
    BetTypeEnum.STRAIGHT_UP_34
  ],
  [BetTypeEnum.COLUMN_2]: [
    BetTypeEnum.STRAIGHT_UP_2,
    BetTypeEnum.STRAIGHT_UP_5,
    BetTypeEnum.STRAIGHT_UP_8,
    BetTypeEnum.STRAIGHT_UP_11,
    BetTypeEnum.STRAIGHT_UP_14,
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_20,
    BetTypeEnum.STRAIGHT_UP_23,
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_29,
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_35
  ],
  [BetTypeEnum.COLUMN_3]: [
    BetTypeEnum.STRAIGHT_UP_3,
    BetTypeEnum.STRAIGHT_UP_6,
    BetTypeEnum.STRAIGHT_UP_9,
    BetTypeEnum.STRAIGHT_UP_12,
    BetTypeEnum.STRAIGHT_UP_15,
    BetTypeEnum.STRAIGHT_UP_18,
    BetTypeEnum.STRAIGHT_UP_21,
    BetTypeEnum.STRAIGHT_UP_24,
    BetTypeEnum.STRAIGHT_UP_27,
    BetTypeEnum.STRAIGHT_UP_30,
    BetTypeEnum.STRAIGHT_UP_33,
    BetTypeEnum.STRAIGHT_UP_36
  ]
};
const INNER_GROUP_MAP = {
  [BetTypeEnum.SPLIT_0_1]: [BetTypeEnum.STRAIGHT_UP_0, BetTypeEnum.STRAIGHT_UP_1],
  [BetTypeEnum.SPLIT_0_2]: [BetTypeEnum.STRAIGHT_UP_0, BetTypeEnum.STRAIGHT_UP_2],
  [BetTypeEnum.SPLIT_0_3]: [BetTypeEnum.STRAIGHT_UP_0, BetTypeEnum.STRAIGHT_UP_3],
  [BetTypeEnum.SPLIT_1_2]: [BetTypeEnum.STRAIGHT_UP_1, BetTypeEnum.STRAIGHT_UP_2],
  [BetTypeEnum.SPLIT_1_4]: [BetTypeEnum.STRAIGHT_UP_1, BetTypeEnum.STRAIGHT_UP_4],
  [BetTypeEnum.SPLIT_2_3]: [BetTypeEnum.STRAIGHT_UP_2, BetTypeEnum.STRAIGHT_UP_3],
  [BetTypeEnum.SPLIT_2_5]: [BetTypeEnum.STRAIGHT_UP_2, BetTypeEnum.STRAIGHT_UP_5],
  [BetTypeEnum.SPLIT_3_6]: [BetTypeEnum.STRAIGHT_UP_3, BetTypeEnum.STRAIGHT_UP_6],
  [BetTypeEnum.SPLIT_4_5]: [BetTypeEnum.STRAIGHT_UP_4, BetTypeEnum.STRAIGHT_UP_5],
  [BetTypeEnum.SPLIT_4_7]: [BetTypeEnum.STRAIGHT_UP_4, BetTypeEnum.STRAIGHT_UP_7],
  [BetTypeEnum.SPLIT_5_6]: [BetTypeEnum.STRAIGHT_UP_5, BetTypeEnum.STRAIGHT_UP_6],
  [BetTypeEnum.SPLIT_5_8]: [BetTypeEnum.STRAIGHT_UP_5, BetTypeEnum.STRAIGHT_UP_8],
  [BetTypeEnum.SPLIT_6_9]: [BetTypeEnum.STRAIGHT_UP_6, BetTypeEnum.STRAIGHT_UP_9],
  [BetTypeEnum.SPLIT_7_10]: [BetTypeEnum.STRAIGHT_UP_7, BetTypeEnum.STRAIGHT_UP_10],
  [BetTypeEnum.SPLIT_7_8]: [BetTypeEnum.STRAIGHT_UP_7, BetTypeEnum.STRAIGHT_UP_8],
  [BetTypeEnum.SPLIT_8_11]: [BetTypeEnum.STRAIGHT_UP_8, BetTypeEnum.STRAIGHT_UP_11],
  [BetTypeEnum.SPLIT_8_9]: [BetTypeEnum.STRAIGHT_UP_8, BetTypeEnum.STRAIGHT_UP_9],
  [BetTypeEnum.SPLIT_9_12]: [BetTypeEnum.STRAIGHT_UP_9, BetTypeEnum.STRAIGHT_UP_12],
  [BetTypeEnum.SPLIT_10_11]: [BetTypeEnum.STRAIGHT_UP_10, BetTypeEnum.STRAIGHT_UP_11],
  [BetTypeEnum.SPLIT_10_13]: [BetTypeEnum.STRAIGHT_UP_10, BetTypeEnum.STRAIGHT_UP_13],
  [BetTypeEnum.SPLIT_11_12]: [BetTypeEnum.STRAIGHT_UP_11, BetTypeEnum.STRAIGHT_UP_12],
  [BetTypeEnum.SPLIT_11_14]: [BetTypeEnum.STRAIGHT_UP_11, BetTypeEnum.STRAIGHT_UP_14],
  [BetTypeEnum.SPLIT_12_15]: [BetTypeEnum.STRAIGHT_UP_12, BetTypeEnum.STRAIGHT_UP_15],
  [BetTypeEnum.SPLIT_13_14]: [BetTypeEnum.STRAIGHT_UP_13, BetTypeEnum.STRAIGHT_UP_14],
  [BetTypeEnum.SPLIT_13_16]: [BetTypeEnum.STRAIGHT_UP_13, BetTypeEnum.STRAIGHT_UP_16],
  [BetTypeEnum.SPLIT_14_15]: [BetTypeEnum.STRAIGHT_UP_14, BetTypeEnum.STRAIGHT_UP_15],
  [BetTypeEnum.SPLIT_14_17]: [BetTypeEnum.STRAIGHT_UP_14, BetTypeEnum.STRAIGHT_UP_17],
  [BetTypeEnum.SPLIT_15_18]: [BetTypeEnum.STRAIGHT_UP_15, BetTypeEnum.STRAIGHT_UP_18],
  [BetTypeEnum.SPLIT_16_17]: [BetTypeEnum.STRAIGHT_UP_16, BetTypeEnum.STRAIGHT_UP_17],
  [BetTypeEnum.SPLIT_16_19]: [BetTypeEnum.STRAIGHT_UP_16, BetTypeEnum.STRAIGHT_UP_19],
  [BetTypeEnum.SPLIT_17_18]: [BetTypeEnum.STRAIGHT_UP_17, BetTypeEnum.STRAIGHT_UP_18],
  [BetTypeEnum.SPLIT_17_20]: [BetTypeEnum.STRAIGHT_UP_17, BetTypeEnum.STRAIGHT_UP_20],
  [BetTypeEnum.SPLIT_18_21]: [BetTypeEnum.STRAIGHT_UP_18, BetTypeEnum.STRAIGHT_UP_21],
  [BetTypeEnum.SPLIT_19_20]: [BetTypeEnum.STRAIGHT_UP_19, BetTypeEnum.STRAIGHT_UP_20],
  [BetTypeEnum.SPLIT_19_22]: [BetTypeEnum.STRAIGHT_UP_19, BetTypeEnum.STRAIGHT_UP_22],
  [BetTypeEnum.SPLIT_20_21]: [BetTypeEnum.STRAIGHT_UP_20, BetTypeEnum.STRAIGHT_UP_21],
  [BetTypeEnum.SPLIT_20_23]: [BetTypeEnum.STRAIGHT_UP_20, BetTypeEnum.STRAIGHT_UP_23],
  [BetTypeEnum.SPLIT_21_24]: [BetTypeEnum.STRAIGHT_UP_21, BetTypeEnum.STRAIGHT_UP_24],
  [BetTypeEnum.SPLIT_22_23]: [BetTypeEnum.STRAIGHT_UP_22, BetTypeEnum.STRAIGHT_UP_23],
  [BetTypeEnum.SPLIT_22_25]: [BetTypeEnum.STRAIGHT_UP_22, BetTypeEnum.STRAIGHT_UP_25],
  [BetTypeEnum.SPLIT_23_24]: [BetTypeEnum.STRAIGHT_UP_23, BetTypeEnum.STRAIGHT_UP_24],
  [BetTypeEnum.SPLIT_23_26]: [BetTypeEnum.STRAIGHT_UP_23, BetTypeEnum.STRAIGHT_UP_26],
  [BetTypeEnum.SPLIT_24_27]: [BetTypeEnum.STRAIGHT_UP_24, BetTypeEnum.STRAIGHT_UP_27],
  [BetTypeEnum.SPLIT_25_26]: [BetTypeEnum.STRAIGHT_UP_25, BetTypeEnum.STRAIGHT_UP_26],
  [BetTypeEnum.SPLIT_25_28]: [BetTypeEnum.STRAIGHT_UP_25, BetTypeEnum.STRAIGHT_UP_28],
  [BetTypeEnum.SPLIT_26_27]: [BetTypeEnum.STRAIGHT_UP_26, BetTypeEnum.STRAIGHT_UP_27],
  [BetTypeEnum.SPLIT_26_29]: [BetTypeEnum.STRAIGHT_UP_26, BetTypeEnum.STRAIGHT_UP_29],
  [BetTypeEnum.SPLIT_27_30]: [BetTypeEnum.STRAIGHT_UP_27, BetTypeEnum.STRAIGHT_UP_30],
  [BetTypeEnum.SPLIT_28_29]: [BetTypeEnum.STRAIGHT_UP_28, BetTypeEnum.STRAIGHT_UP_29],
  [BetTypeEnum.SPLIT_28_31]: [BetTypeEnum.STRAIGHT_UP_28, BetTypeEnum.STRAIGHT_UP_31],
  [BetTypeEnum.SPLIT_29_30]: [BetTypeEnum.STRAIGHT_UP_29, BetTypeEnum.STRAIGHT_UP_30],
  [BetTypeEnum.SPLIT_29_32]: [BetTypeEnum.STRAIGHT_UP_29, BetTypeEnum.STRAIGHT_UP_32],
  [BetTypeEnum.SPLIT_30_33]: [BetTypeEnum.STRAIGHT_UP_30, BetTypeEnum.STRAIGHT_UP_33],
  [BetTypeEnum.SPLIT_31_32]: [BetTypeEnum.STRAIGHT_UP_31, BetTypeEnum.STRAIGHT_UP_32],
  [BetTypeEnum.SPLIT_31_34]: [BetTypeEnum.STRAIGHT_UP_31, BetTypeEnum.STRAIGHT_UP_34],
  [BetTypeEnum.SPLIT_32_33]: [BetTypeEnum.STRAIGHT_UP_32, BetTypeEnum.STRAIGHT_UP_33],
  [BetTypeEnum.SPLIT_32_35]: [BetTypeEnum.STRAIGHT_UP_32, BetTypeEnum.STRAIGHT_UP_35],
  [BetTypeEnum.SPLIT_33_36]: [BetTypeEnum.STRAIGHT_UP_33, BetTypeEnum.STRAIGHT_UP_36],
  [BetTypeEnum.SPLIT_34_35]: [BetTypeEnum.STRAIGHT_UP_34, BetTypeEnum.STRAIGHT_UP_35],
  [BetTypeEnum.SPLIT_35_36]: [BetTypeEnum.STRAIGHT_UP_35, BetTypeEnum.STRAIGHT_UP_36],
  [BetTypeEnum.STREET_0_1_2]: [BetTypeEnum.STRAIGHT_UP_0, BetTypeEnum.STRAIGHT_UP_1, BetTypeEnum.STRAIGHT_UP_2],
  [BetTypeEnum.STREET_0_2_3]: [BetTypeEnum.STRAIGHT_UP_0, BetTypeEnum.STRAIGHT_UP_2, BetTypeEnum.STRAIGHT_UP_3],
  [BetTypeEnum.STREET_1_2_3]: [BetTypeEnum.STRAIGHT_UP_1, BetTypeEnum.STRAIGHT_UP_2, BetTypeEnum.STRAIGHT_UP_3],
  [BetTypeEnum.STREET_4_5_6]: [BetTypeEnum.STRAIGHT_UP_4, BetTypeEnum.STRAIGHT_UP_5, BetTypeEnum.STRAIGHT_UP_6],
  [BetTypeEnum.STREET_7_8_9]: [BetTypeEnum.STRAIGHT_UP_7, BetTypeEnum.STRAIGHT_UP_8, BetTypeEnum.STRAIGHT_UP_9],
  [BetTypeEnum.STREET_10_11_12]: [BetTypeEnum.STRAIGHT_UP_10, BetTypeEnum.STRAIGHT_UP_11, BetTypeEnum.STRAIGHT_UP_12],
  [BetTypeEnum.STREET_13_14_15]: [BetTypeEnum.STRAIGHT_UP_13, BetTypeEnum.STRAIGHT_UP_14, BetTypeEnum.STRAIGHT_UP_15],
  [BetTypeEnum.STREET_16_17_18]: [BetTypeEnum.STRAIGHT_UP_16, BetTypeEnum.STRAIGHT_UP_17, BetTypeEnum.STRAIGHT_UP_18],
  [BetTypeEnum.STREET_19_20_21]: [BetTypeEnum.STRAIGHT_UP_19, BetTypeEnum.STRAIGHT_UP_20, BetTypeEnum.STRAIGHT_UP_21],
  [BetTypeEnum.STREET_22_23_24]: [BetTypeEnum.STRAIGHT_UP_22, BetTypeEnum.STRAIGHT_UP_23, BetTypeEnum.STRAIGHT_UP_24],
  [BetTypeEnum.STREET_25_26_27]: [BetTypeEnum.STRAIGHT_UP_25, BetTypeEnum.STRAIGHT_UP_26, BetTypeEnum.STRAIGHT_UP_27],
  [BetTypeEnum.STREET_28_29_30]: [BetTypeEnum.STRAIGHT_UP_28, BetTypeEnum.STRAIGHT_UP_29, BetTypeEnum.STRAIGHT_UP_30],
  [BetTypeEnum.STREET_31_32_33]: [BetTypeEnum.STRAIGHT_UP_31, BetTypeEnum.STRAIGHT_UP_32, BetTypeEnum.STRAIGHT_UP_33],
  [BetTypeEnum.STREET_34_35_36]: [BetTypeEnum.STRAIGHT_UP_34, BetTypeEnum.STRAIGHT_UP_35, BetTypeEnum.STRAIGHT_UP_36],
  [BetTypeEnum.CORNER_0_1_2_3]: [
    BetTypeEnum.STRAIGHT_UP_0,
    BetTypeEnum.STRAIGHT_UP_1,
    BetTypeEnum.STRAIGHT_UP_2,
    BetTypeEnum.STRAIGHT_UP_3
  ],
  [BetTypeEnum.CORNER_1_2_4_5]: [
    BetTypeEnum.STRAIGHT_UP_1,
    BetTypeEnum.STRAIGHT_UP_2,
    BetTypeEnum.STRAIGHT_UP_4,
    BetTypeEnum.STRAIGHT_UP_5
  ],
  [BetTypeEnum.CORNER_2_3_5_6]: [
    BetTypeEnum.STRAIGHT_UP_2,
    BetTypeEnum.STRAIGHT_UP_3,
    BetTypeEnum.STRAIGHT_UP_5,
    BetTypeEnum.STRAIGHT_UP_6
  ],
  [BetTypeEnum.CORNER_4_5_7_8]: [
    BetTypeEnum.STRAIGHT_UP_4,
    BetTypeEnum.STRAIGHT_UP_5,
    BetTypeEnum.STRAIGHT_UP_7,
    BetTypeEnum.STRAIGHT_UP_8
  ],
  [BetTypeEnum.CORNER_5_6_8_9]: [
    BetTypeEnum.STRAIGHT_UP_5,
    BetTypeEnum.STRAIGHT_UP_6,
    BetTypeEnum.STRAIGHT_UP_8,
    BetTypeEnum.STRAIGHT_UP_9
  ],
  [BetTypeEnum.CORNER_7_8_10_11]: [
    BetTypeEnum.STRAIGHT_UP_7,
    BetTypeEnum.STRAIGHT_UP_8,
    BetTypeEnum.STRAIGHT_UP_10,
    BetTypeEnum.STRAIGHT_UP_11
  ],
  [BetTypeEnum.CORNER_8_9_11_12]: [
    BetTypeEnum.STRAIGHT_UP_8,
    BetTypeEnum.STRAIGHT_UP_9,
    BetTypeEnum.STRAIGHT_UP_11,
    BetTypeEnum.STRAIGHT_UP_12
  ],
  [BetTypeEnum.CORNER_10_11_13_14]: [
    BetTypeEnum.STRAIGHT_UP_10,
    BetTypeEnum.STRAIGHT_UP_11,
    BetTypeEnum.STRAIGHT_UP_13,
    BetTypeEnum.STRAIGHT_UP_14
  ],
  [BetTypeEnum.CORNER_11_12_14_15]: [
    BetTypeEnum.STRAIGHT_UP_11,
    BetTypeEnum.STRAIGHT_UP_12,
    BetTypeEnum.STRAIGHT_UP_14,
    BetTypeEnum.STRAIGHT_UP_15
  ],
  [BetTypeEnum.CORNER_13_14_16_17]: [
    BetTypeEnum.STRAIGHT_UP_13,
    BetTypeEnum.STRAIGHT_UP_14,
    BetTypeEnum.STRAIGHT_UP_16,
    BetTypeEnum.STRAIGHT_UP_17
  ],
  [BetTypeEnum.CORNER_14_15_17_18]: [
    BetTypeEnum.STRAIGHT_UP_14,
    BetTypeEnum.STRAIGHT_UP_15,
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_18
  ],
  [BetTypeEnum.CORNER_16_17_19_20]: [
    BetTypeEnum.STRAIGHT_UP_16,
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_19,
    BetTypeEnum.STRAIGHT_UP_20
  ],
  [BetTypeEnum.CORNER_17_18_20_21]: [
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_18,
    BetTypeEnum.STRAIGHT_UP_20,
    BetTypeEnum.STRAIGHT_UP_21
  ],
  [BetTypeEnum.CORNER_19_20_22_23]: [
    BetTypeEnum.STRAIGHT_UP_19,
    BetTypeEnum.STRAIGHT_UP_20,
    BetTypeEnum.STRAIGHT_UP_22,
    BetTypeEnum.STRAIGHT_UP_23
  ],
  [BetTypeEnum.CORNER_20_21_23_24]: [
    BetTypeEnum.STRAIGHT_UP_20,
    BetTypeEnum.STRAIGHT_UP_21,
    BetTypeEnum.STRAIGHT_UP_23,
    BetTypeEnum.STRAIGHT_UP_24
  ],
  [BetTypeEnum.CORNER_22_23_25_26]: [
    BetTypeEnum.STRAIGHT_UP_22,
    BetTypeEnum.STRAIGHT_UP_23,
    BetTypeEnum.STRAIGHT_UP_25,
    BetTypeEnum.STRAIGHT_UP_26
  ],
  [BetTypeEnum.CORNER_23_24_26_27]: [
    BetTypeEnum.STRAIGHT_UP_23,
    BetTypeEnum.STRAIGHT_UP_24,
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_27
  ],
  [BetTypeEnum.CORNER_25_26_28_29]: [
    BetTypeEnum.STRAIGHT_UP_25,
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_28,
    BetTypeEnum.STRAIGHT_UP_29
  ],
  [BetTypeEnum.CORNER_26_27_29_30]: [
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_27,
    BetTypeEnum.STRAIGHT_UP_29,
    BetTypeEnum.STRAIGHT_UP_30
  ],
  [BetTypeEnum.CORNER_28_29_31_32]: [
    BetTypeEnum.STRAIGHT_UP_28,
    BetTypeEnum.STRAIGHT_UP_29,
    BetTypeEnum.STRAIGHT_UP_31,
    BetTypeEnum.STRAIGHT_UP_32
  ],
  [BetTypeEnum.CORNER_29_30_32_33]: [
    BetTypeEnum.STRAIGHT_UP_29,
    BetTypeEnum.STRAIGHT_UP_30,
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_33
  ],
  [BetTypeEnum.CORNER_31_32_34_35]: [
    BetTypeEnum.STRAIGHT_UP_31,
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_34,
    BetTypeEnum.STRAIGHT_UP_35
  ],
  [BetTypeEnum.CORNER_32_33_35_36]: [
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_33,
    BetTypeEnum.STRAIGHT_UP_35,
    BetTypeEnum.STRAIGHT_UP_36
  ],
  [BetTypeEnum.LINE_1]: [
    BetTypeEnum.STRAIGHT_UP_1,
    BetTypeEnum.STRAIGHT_UP_2,
    BetTypeEnum.STRAIGHT_UP_3,
    BetTypeEnum.STRAIGHT_UP_4,
    BetTypeEnum.STRAIGHT_UP_5,
    BetTypeEnum.STRAIGHT_UP_6
  ],
  [BetTypeEnum.LINE_4]: [
    BetTypeEnum.STRAIGHT_UP_4,
    BetTypeEnum.STRAIGHT_UP_5,
    BetTypeEnum.STRAIGHT_UP_6,
    BetTypeEnum.STRAIGHT_UP_7,
    BetTypeEnum.STRAIGHT_UP_8,
    BetTypeEnum.STRAIGHT_UP_9
  ],
  [BetTypeEnum.LINE_7]: [
    BetTypeEnum.STRAIGHT_UP_7,
    BetTypeEnum.STRAIGHT_UP_8,
    BetTypeEnum.STRAIGHT_UP_9,
    BetTypeEnum.STRAIGHT_UP_10,
    BetTypeEnum.STRAIGHT_UP_11,
    BetTypeEnum.STRAIGHT_UP_12
  ],
  [BetTypeEnum.LINE_10]: [
    BetTypeEnum.STRAIGHT_UP_10,
    BetTypeEnum.STRAIGHT_UP_11,
    BetTypeEnum.STRAIGHT_UP_12,
    BetTypeEnum.STRAIGHT_UP_13,
    BetTypeEnum.STRAIGHT_UP_14,
    BetTypeEnum.STRAIGHT_UP_15
  ],
  [BetTypeEnum.LINE_13]: [
    BetTypeEnum.STRAIGHT_UP_13,
    BetTypeEnum.STRAIGHT_UP_14,
    BetTypeEnum.STRAIGHT_UP_15,
    BetTypeEnum.STRAIGHT_UP_16,
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_18
  ],
  [BetTypeEnum.LINE_16]: [
    BetTypeEnum.STRAIGHT_UP_16,
    BetTypeEnum.STRAIGHT_UP_17,
    BetTypeEnum.STRAIGHT_UP_18,
    BetTypeEnum.STRAIGHT_UP_19,
    BetTypeEnum.STRAIGHT_UP_20,
    BetTypeEnum.STRAIGHT_UP_21
  ],
  [BetTypeEnum.LINE_19]: [
    BetTypeEnum.STRAIGHT_UP_19,
    BetTypeEnum.STRAIGHT_UP_20,
    BetTypeEnum.STRAIGHT_UP_21,
    BetTypeEnum.STRAIGHT_UP_22,
    BetTypeEnum.STRAIGHT_UP_23,
    BetTypeEnum.STRAIGHT_UP_24
  ],
  [BetTypeEnum.LINE_22]: [
    BetTypeEnum.STRAIGHT_UP_22,
    BetTypeEnum.STRAIGHT_UP_23,
    BetTypeEnum.STRAIGHT_UP_24,
    BetTypeEnum.STRAIGHT_UP_25,
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_27
  ],
  [BetTypeEnum.LINE_25]: [
    BetTypeEnum.STRAIGHT_UP_25,
    BetTypeEnum.STRAIGHT_UP_26,
    BetTypeEnum.STRAIGHT_UP_27,
    BetTypeEnum.STRAIGHT_UP_28,
    BetTypeEnum.STRAIGHT_UP_29,
    BetTypeEnum.STRAIGHT_UP_30
  ],
  [BetTypeEnum.LINE_28]: [
    BetTypeEnum.STRAIGHT_UP_28,
    BetTypeEnum.STRAIGHT_UP_29,
    BetTypeEnum.STRAIGHT_UP_30,
    BetTypeEnum.STRAIGHT_UP_31,
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_33
  ],
  [BetTypeEnum.LINE_31]: [
    BetTypeEnum.STRAIGHT_UP_31,
    BetTypeEnum.STRAIGHT_UP_32,
    BetTypeEnum.STRAIGHT_UP_33,
    BetTypeEnum.STRAIGHT_UP_34,
    BetTypeEnum.STRAIGHT_UP_35,
    BetTypeEnum.STRAIGHT_UP_36
  ]
};
const ALL_GROUP_MAP = {
  ...OUTER_GROUP_MAP,
  ...INNER_GROUP_MAP
};
const betGridPrefix = "bc-";
const gridBoardTiltVariants = {
  flat: {
    transform: ["translateY(0%) perspective(8.5rem) rotateX(0deg) scale(1, 1)"],
    transition: { duration: 1, ease: [0.47, 0, 0.05, 1] }
  },
  slope: {
    transform: ["translateY(-1.6%) perspective(8rem) rotateX(7.6deg) scale(1.207, 1.06)"],
    transition: { duration: 1, ease: [0.47, 0, 0.05, 1] }
  }
};
const gridBoardTiltCompactVariants = {
  flat: {
    transform: ["translateY(0%) perspective(8.5rem) rotateX(0deg) scale(1, 0.99)"],
    transition: { duration: 1, ease: [0.47, 0, 0.05, 1] }
  },
  slope: {
    transform: ["translateY(-3.9%) perspective(8rem) rotateX(8.3deg) scale(1.15, 0.87)"],
    transition: { duration: 1, ease: [0.47, 0, 0.05, 1] }
  }
};
const raceTrackBoardTiltVariants = {
  flat: {
    transform: ["translateY(0%) perspective(8.5rem) rotateX(0deg) scale(1, 1)"],
    transition: { duration: 1, ease: [0.47, 0, 0.05, 1] }
  },
  slope: {
    transform: ["translateY(-2.5%) perspective(8rem) rotateX(6.4deg) scale(1.135, 0.933)"],
    transition: { duration: 1, ease: [0.47, 0, 0.05, 1] }
  }
};
const raceTrackBoardTiltCompactVariants = {
  flat: {
    transform: ["translateY(0%) perspective(8.5rem) rotateX(0deg) scale(1, 0.99)"],
    transition: { duration: 1, ease: [0.47, 0, 0.05, 1] }
  },
  slope: {
    transform: ["translateY(-3.5%) perspective(8rem) rotateX(10.1deg) scale(1.09, 0.97)"],
    transition: { duration: 1, ease: [0.47, 0, 0.05, 1] }
  }
};
const gridBoardMoveVariants = {
  default: {
    translateX: 0,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.667,
      ease: [0.47, 0.02, 0.08, 0.98]
    }
  },
  hide: {
    translateX: "100vw",
    scale: 0.85,
    transition: {
      delay: 0.1,
      duration: 0.667,
      ease: [0.47, 0.02, 0.08, 0.98]
    }
  }
};
const raceTrackBoardMoveVariants = {
  default: {
    translateX: 0,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.667,
      ease: [0.47, 0.02, 0.08, 0.98]
    }
  },
  hide: {
    translateX: "-100vw",
    scale: 0.85,
    transition: {
      delay: 0.1,
      duration: 0.667,
      ease: [0.47, 0.02, 0.08, 0.98]
    }
  }
};
const buttonMoveVariants = {
  default: {
    translateX: 0,
    scale: 1,
    transition: {
      scale: {
        duration: 0.6,
        ease: [0.6, 0, 0.45, 0.99]
      },
      translateX: {
        duration: 0.6,
        ease: [0.43, 0, 0.58, 0.99]
      }
    }
  },
  buttonDefault: {
    scale: 1
  },
  button: {
    scale: [1, 0.9, 1],
    transition: {
      scale: {
        duration: 0.6,
        ease: [
          [0.42, 0, 0.38, 1],
          [0.56, 0, 0.58, 1]
        ]
      }
    }
  },
  raceTrackMove: {
    translateX: "-100%",
    scale: [1, 0.9, 1],
    transition: {
      scale: {
        duration: 0.6,
        ease: [0.6, 0, 0.45, 0.99]
      },
      translateX: {
        duration: 0.6,
        ease: [0.43, 0, 0.58, 0.99]
      }
    }
  },
  gridMove: {
    translateX: "100%",
    scale: [1, 0.9, 1],
    transition: {
      scale: {
        duration: 0.6,
        ease: [0.6, 0, 0.45, 0.99]
      },
      translateX: {
        duration: 0.6,
        ease: [0.43, 0, 0.58, 0.99]
      }
    }
  }
};
const iconColorVariants = {
  default: {
    stopColor: "#FFFAF5"
  },
  changeColor1: {
    stopColor: ["#FFFAF5", "#BBA487", "#FFFAF5"],
    transition: {
      duration: 0.6,
      ease: [0.43, 0, 0.58, 0.99]
    }
  },
  changeColor2: {
    stopColor: ["#BAA284", "#816C52", "#BAA284"],
    transition: {
      duration: 0.6,
      ease: [0.43, 0, 0.58, 0.99]
    }
  }
};
const getBetColor = (num) => {
  const _bet = "straight-".concat(num);
  if (ALL_GROUP_MAP[BetTypeEnum.RED].includes(_bet)) return "red";
  if (ALL_GROUP_MAP[BetTypeEnum.BLACK].includes(_bet)) return "black";
  if (_bet === BetTypeEnum.STRAIGHT_UP_0) return "green";
  return "red";
};
const getBetTypeLimit = (betType) => {
  var _a2, _b2, _c2, _d;
  const betTypesLimit = useConfigStore.getState().betTypesLimit;
  const prefix = "ro.".concat(betType.split("-")[0]);
  const betGroups = /* @__PURE__ */ new Map([
    ["ro.red", RouletteBetLimitProfile.RED_BLACK],
    ["ro.black", RouletteBetLimitProfile.RED_BLACK],
    ["ro.odd", RouletteBetLimitProfile.ODD_EVEN],
    ["ro.even", RouletteBetLimitProfile.ODD_EVEN],
    ["ro.low", RouletteBetLimitProfile.LOW_HIGH],
    ["ro.high", RouletteBetLimitProfile.LOW_HIGH]
  ]);
  if (betTypesLimit[prefix]) {
    return (_b2 = (_a2 = betTypesLimit[prefix]) == null ? void 0 : _a2.max) != null ? _b2 : 0;
  }
  if (betGroups.has(prefix)) {
    return (_d = (_c2 = betTypesLimit[betGroups.get(prefix)]) == null ? void 0 : _c2.max) != null ? _d : 0;
  }
  return 0;
};
const getBetLimit = (curBet, multiplier = 1) => {
  const [betType, amount] = curBet;
  const isAddingCallBet = raceTrackGroup.includes(betType);
  if (isAddingCallBet) {
    const betItems = Array.from(new Set(raceTrackGroupMap[betType]));
    const limit = betItems.reduce((acc, item) => {
      const isPartOfCallbets = !item.startsWith("straight-");
      if (!isPartOfCallbets) return acc;
      const limit2 = getBetTypeLimit(item);
      if (!limit2) return acc;
      return acc + limit2;
    }, 0);
    if (amount * multiplier > limit) return limit;
  } else {
    const limit = getBetTypeLimit(betType);
    if (typeof limit !== "number") return;
    if (amount * multiplier > limit) return limit;
  }
};
const convertRouletteMap = (betType, draggedChipVal, isDrag = false, boardID) => {
  var _a2;
  const diff = { normalBets: {}, extraBets: {} };
  const selectedChipVal = useCartStore.getState().selectedChipVal;
  const neighborRange = useBettingStore.getState().neighborRange;
  const betMode = useBettingStore.getState().betMode;
  const amount = isDrag ? draggedChipVal : selectedChipVal;
  const isRaceTrack = boardID === BoardIDEnum.RACETRACK;
  if (isRaceTrack) {
    if (betType.startsWith("straight-")) {
      if (isDrag) {
        diff.normalBets[betType] = draggedChipVal;
      } else {
        if (neighborRange > 0) {
          const list = findNeighborByRange(Number(betType.replace("straight-", "")), neighborRange);
          list.forEach((type) => {
            const _betType = "straight-" + type;
            const existingAmount = new Decimal(diff.normalBets[_betType] || 0);
            diff.normalBets[_betType] = existingAmount.plus(amount).toNumber();
          });
        } else {
          const existingAmount = new Decimal(diff.normalBets[betType] || 0);
          diff.normalBets[betType] = existingAmount.plus(amount).toNumber();
        }
      }
    } else {
      const raceTrackMapVal = raceTrackGroupMap[betType];
      const innerLength = raceTrackMapVal == null ? void 0 : raceTrackMapVal.filter((type) => !type.startsWith("straight-")).length;
      const existingExtraAmount = new Decimal(diff.extraBets[betType] || 0);
      diff.extraBets[betType] = existingExtraAmount.plus(new Decimal(amount).times(innerLength)).toNumber();
      raceTrackMapVal == null ? void 0 : raceTrackMapVal.forEach((subType) => {
        const existingAmount = new Decimal(diff.normalBets[subType] || 0);
        diff.normalBets[subType] = existingAmount.plus(amount).toNumber();
      });
    }
    return diff;
  }
  if (betMode === "default" || isDrag) {
    const existingAmount = new Decimal(diff.normalBets[betType] || 0);
    diff.normalBets[betType] = existingAmount.plus(amount).toNumber();
    return diff;
  }
  if (betMode === "straight") {
    if (betType.startsWith("straight-")) {
      const existingAmount = new Decimal(diff.normalBets[betType] || 0);
      diff.normalBets[betType] = existingAmount.plus(amount).toNumber();
    } else {
      if (Object.prototype.hasOwnProperty.call(ALL_GROUP_MAP, betType)) {
        ((_a2 = ALL_GROUP_MAP[betType]) != null ? _a2 : []).forEach((bt) => {
          const existingAmount = new Decimal(diff.normalBets[bt] || 0);
          diff.normalBets[bt] = existingAmount.plus(amount).toNumber();
        });
      }
    }
    return diff;
  }
  if (betMode === "fullComplete") {
    const arr2 = Object.entries(INNER_GROUP_MAP).filter(([, val]) => val.includes(betType)).map(([key]) => key);
    arr2.forEach((betType2) => {
      const count = INNER_GROUP_MAP[betType2].length;
      const existingAmount2 = new Decimal(diff.normalBets[betType2] || 0);
      diff.normalBets[betType2] = existingAmount2.plus(new Decimal(amount).times(count)).toNumber();
    });
    const existingAmount = new Decimal(diff.normalBets[betType] || 0);
    diff.normalBets[betType] = existingAmount.plus(amount).toNumber();
    return diff;
  }
  return diff;
};
const GRID_HOVER_HIGHLIGHT = {
  [BetTypeEnum.LOW]: {
    pos: [-3, 3, -12, 21]
  },
  [BetTypeEnum.HIGH]: {
    pos: [-3, 21, -12, 39]
  },
  [BetTypeEnum.DOZEN_1]: {
    pos: [-3, 3, -15, 15],
    className: "rounded-tl-[0.9em]"
  },
  [BetTypeEnum.DOZEN_13]: {
    pos: [-3, 15, -15, 27]
  },
  [BetTypeEnum.DOZEN_25]: {
    pos: [-3, 27, -15, 39],
    className: "rounded-tr-[0.9em]"
  },
  [BetTypeEnum.COLUMN_1]: {
    pos: [-3, 3, -6, 42],
    className: "rounded-br-[0.9em]"
  },
  [BetTypeEnum.COLUMN_2]: {
    pos: [-6, 3, -9, 42]
  },
  [BetTypeEnum.COLUMN_3]: {
    pos: [-9, 3, -12, 42],
    className: "rounded-tr-[0.9em]"
  }
};
const getInitWinHighlight = (winNumber, prefix) => {
  return ["".concat(prefix != null ? prefix : "").concat(winNumber)];
};
const GRID_WIN_HIGHLIGHT = {
  [BetTypeEnum.LOW]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  [BetTypeEnum.HIGH]: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  [BetTypeEnum.DOZEN_1]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [BetTypeEnum.DOZEN_13]: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  [BetTypeEnum.DOZEN_25]: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  [BetTypeEnum.COLUMN_1]: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
  [BetTypeEnum.COLUMN_2]: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
  [BetTypeEnum.COLUMN_3]: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
  [BetTypeEnum.RED]: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
  [BetTypeEnum.BLACK]: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
  [BetTypeEnum.EVEN]: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
  [BetTypeEnum.ODD]: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35]
};
const RACE_TRACK_HIGHLIGHT = {
  [BetTypeEnum.TIER]: ["33", "16", "24", "5", "10", "23", "8", "30", "11", "36", "13", "27"],
  [BetTypeEnum.ORPH]: ["17", "34", "6", "1", "20", "14", "31", "9"],
  [BetTypeEnum.VOISINS]: ["22", "18", "29", "7", "28", "12", "35", "3", "26", "0", "32", "15", "19", "4", "21", "2", "25"],
  [BetTypeEnum.ZERO]: ["0", "3", "12", "15", "26", "32", "35"]
};
const GRID_WIN_HIGHLIGHT_FN = {
  [BetTypeEnum.LOW]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.LOW].includes(num);
  },
  [BetTypeEnum.HIGH]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.HIGH].includes(num);
  },
  [BetTypeEnum.DOZEN_1]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.DOZEN_1].includes(num);
  },
  [BetTypeEnum.DOZEN_13]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.DOZEN_13].includes(num);
  },
  [BetTypeEnum.DOZEN_25]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.DOZEN_25].includes(num);
  },
  [BetTypeEnum.COLUMN_1]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.COLUMN_1].includes(num);
  },
  [BetTypeEnum.COLUMN_2]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.COLUMN_2].includes(num);
  },
  [BetTypeEnum.COLUMN_3]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.COLUMN_3].includes(num);
  },
  [BetTypeEnum.RED]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.RED].includes(num);
  },
  [BetTypeEnum.BLACK]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.BLACK].includes(num);
  },
  [BetTypeEnum.EVEN]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.EVEN].includes(num);
  },
  [BetTypeEnum.ODD]: (winNumber) => {
    const num = parseInt(winNumber, 10);
    return GRID_WIN_HIGHLIGHT[BetTypeEnum.ODD].includes(num);
  }
};
const RACE_TRACK_HIGHLIGHT_FN = {
  [BetTypeEnum.TIER]: (winNumber) => {
    return RACE_TRACK_HIGHLIGHT[BetTypeEnum.TIER].includes(winNumber);
  },
  [BetTypeEnum.ORPH]: (winNumber) => {
    return RACE_TRACK_HIGHLIGHT[BetTypeEnum.ORPH].includes(winNumber);
  },
  [BetTypeEnum.VOISINS]: (winNumber) => {
    return RACE_TRACK_HIGHLIGHT[BetTypeEnum.VOISINS].includes(winNumber);
  },
  [BetTypeEnum.ZERO]: (winNumber) => {
    return RACE_TRACK_HIGHLIGHT[BetTypeEnum.ZERO].includes(winNumber);
  }
};
function initCartStore(cartStore) {
  if (useConfigStore.getState().IS_CLOSE_SERVER) {
    useBettingStore.setState({ isBet: true, gameState: BetState.Bet });
    useCartStore.setState({ walletBalance: 1e4 });
  }
  cartStore.setState({
    handleDouble: (e) => {
      var _a2;
      const pointerPosition = { x: e.pageX, y: e.pageY };
      const isBet = useBettingStore.getState().isBet;
      if (!isBet) {
        tooltipEventBus.emit("close", { anchorSelect: "#doubleRepeatBtn" });
        return;
      }
      const { walletBalance, boardHistory } = useCartStore.getState();
      const tableLimit = useConfigStore.getState().tableLimit;
      const latest2 = boardHistory.at(-1);
      if (!latest2) return;
      const overLimitBets = [];
      const latestEntries = Object.entries(latest2);
      const doubled = latestEntries.reduce(
        (acc, pair) => {
          const [key, value] = pair;
          const doubledValue = value * 2;
          const limitedValue = getBetLimit([key, doubledValue]);
          if (typeof limitedValue === "number") {
            overLimitBets.push(key);
            acc[key] = limitedValue;
          } else {
            acc[key] = doubledValue;
          }
          return acc;
        },
        {}
      );
      const { getTotalBet } = useCartStore.getState();
      const doubledBets = getTotalBet([doubled]);
      if (doubledBets > walletBalance) {
        tooltipEventBus.emit("lowBalance", { position: isMobileDevice ? void 0 : pointerPosition });
        return;
      }
      if (doubledBets > ((_a2 = tableLimit == null ? void 0 : tableLimit.max) != null ? _a2 : 0)) {
        tooltipEventBus.emit("overLimit", { anchorSelect: "#doubleRepeatBtn" });
        return;
      }
      if (overLimitBets.length === latestEntries.length) {
        tooltipEventBus.emit("overLimit", { anchorSelect: "#doubleRepeatBtn" });
      }
      playSound(["double"]);
      const diff = getBetDiff(latest2, doubled);
      if (Object.keys(diff).length < 1) return;
      useCartStore.setState({
        latestPlaceBet: diff,
        boardHistory: [...boardHistory, doubled],
        playChipSound: false
      });
    },
    package: () => {
      const { boardHistory } = useCartStore.getState();
      const latest2 = boardHistory[boardHistory.length - 1];
      if (!latest2) return /* @__PURE__ */ new Map();
      const filtered = Object.entries(latest2).filter(([k]) => !raceTrackGroup.includes(k));
      return new Map(filtered);
    },
    canDouble: (curBets) => {
      var _a2;
      if (!curBets) return false;
      const curEntries = Object.entries(curBets);
      const { walletBalance } = useCartStore.getState();
      const tableLimit = useConfigStore.getState().tableLimit;
      const doubled = curEntries.reduce(
        (acc, pair) => {
          const [key, value] = pair;
          const doubledValue = value * 2;
          const limitedValue = getBetLimit([key, doubledValue]);
          if (typeof limitedValue === "number") {
            acc[key] = limitedValue;
          } else {
            acc[key] = doubledValue;
          }
          return acc;
        },
        {}
      );
      const { getTotalBet } = useCartStore.getState();
      const doubledBets = getTotalBet([doubled]);
      if (doubledBets > walletBalance) return false;
      if (doubledBets > ((_a2 = tableLimit == null ? void 0 : tableLimit.max) != null ? _a2 : 0)) return false;
      for (const pair of curEntries) {
        const [, amount] = pair;
        const limit = getBetLimit(pair, 2);
        if (typeof limit !== "number" || amount < limit) {
          return true;
        }
      }
      return false;
    }
  });
}
const searchParams = new URLSearchParams(document.location.search);
setAppComponent({ GameRulesComponent: GameRules });
useDataStore.setState({ payoutLimits, titleList });
const defaultBetTypesLimit = {
  "ro.column": { min: 0.1, max: 6e3 },
  "ro.corner": { min: 0.1, max: 2e3 },
  "ro.dozen": { min: 0.1, max: 6e3 },
  "ro.line": { min: 0.1, max: 3e3 },
  "ro.lowHigh": { min: 0.1, max: 1e4 },
  "ro.oddEven": { min: 0.1, max: 1e4 },
  "ro.redBlack": { min: 0.1, max: 1e4 },
  "ro.split": { min: 0.1, max: 1e3 },
  "ro.straight": { min: 0.1, max: 500 },
  "ro.street": { min: 0.1, max: 1500 }
};
useConfigStore.setState({
  GAME_TYPE: GameType.AUTO_ROULETTE,
  betTypesLimit: defaultBetTypesLimit,
  tableLimit: defaultTableLimit
});
const TITLE_MAP = { "ARO-001": "CRYSTAL Speed Auto Roulette", "ARO-002": "CRYSTAL VIP Auto Roulette" };
const titleKey = (_a = searchParams.get("game")) != null ? _a : "RAOHE-YESU";
document.title = (_b = TITLE_MAP[titleKey]) != null ? _b : "CRYSTAL Auto Roulette";
initializeCommon({
  VITE_WS_SERVER: "wss://crystal-rgs-gs1.iki-cit.cc/ws",
  VITE_GAME_TABLE: "RAOHE-YESU",
  VITE_SESSION_ID: "494b474c-4956-4544-4556-000000000113",
  VITE_ENABLE_SCALE: void 0,
  VITE_VERSION: void 0,
  VITE_DEPLOY_ENV: "dev",
  VITE_CLOSE_SERVER: void 0,
  MODE: "production"
});
initCartStore(useCartStore);
const Error$1 = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.LogoDesktop, { className: "h-20 w-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: "oops, something went wrong..." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "border-gray rounded-md border p-2",
        onClick: () => window.location.reload(),
        children: "refresh"
      }
    )
  ] });
};
/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var PopStateEventType = "popstate";
function createBrowserHistory(options = {}) {
  function createBrowserLocation(window2, globalHistory) {
    let { pathname, search, hash: hash2 } = window2.location;
    return createLocation(
      "",
      { pathname, search, hash: hash2 },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath$1(to);
  }
  return getUrlBasedHistory(
    createBrowserLocation,
    createBrowserHref,
    null,
    options
  );
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substring(2, 10);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current2, to, state = null, key) {
  let location = {
    pathname: typeof current2 === "string" ? current2 : current2.pathname,
    search: "",
    hash: "",
    ...typeof to === "string" ? parsePath(to) : to,
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  };
  return location;
}
function createPath$1({
  pathname = "/",
  search = "",
  hash: hash2 = ""
}) {
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash2 && hash2 !== "#")
    pathname += hash2.charAt(0) === "#" ? hash2 : "#" + hash2;
  return pathname;
}
function parsePath(path2) {
  let parsedPath = {};
  if (path2) {
    let hashIndex = path2.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path2.substring(hashIndex);
      path2 = path2.substring(0, hashIndex);
    }
    let searchIndex = path2.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path2.substring(searchIndex);
      path2 = path2.substring(0, searchIndex);
    }
    if (path2) {
      parsedPath.pathname = path2;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
  let { window: window2 = document.defaultView, v5Compat = false } = options;
  let globalHistory = window2.history;
  let action = "POP";
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
  }
  function getIndex() {
    let state = globalHistory.state || { idx: null };
    return state.idx;
  }
  function handlePop() {
    action = "POP";
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({ action, location: history.location, delta });
    }
  }
  function push(to, state) {
    action = "PUSH";
    let location = createLocation(history.location, to, state);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 1 });
    }
  }
  function replace2(to, state) {
    action = "REPLACE";
    let location = createLocation(history.location, to, state);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 0 });
    }
  }
  function createURL(to) {
    return createBrowserURLImpl(to);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref2(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace: replace2,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
function createBrowserURLImpl(to, isAbsolute = false) {
  let base = "http://localhost";
  if (typeof window !== "undefined") {
    base = window.location.origin !== "null" ? window.location.origin : window.location.href;
  }
  invariant(base, "No window.location.(origin|href) available to create URL");
  let href = typeof to === "string" ? to : createPath$1(to);
  href = href.replace(/ $/, "%20");
  if (!isAbsolute && href.startsWith("//")) {
    href = base + href;
  }
  return new URL(href, base);
}
function matchRoutes(routes, locationArg, basename = "/") {
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(
      branches[i],
      decoded,
      allowPartial
    );
  }
  return matches;
}
function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
  let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
        return;
      }
      invariant(
        meta.relativePath.startsWith(parentPath),
        'Absolute route path "'.concat(meta.relativePath, '" nested under path "').concat(parentPath, '" is not valid. An absolute child route path must start with the combined path of all its parent routes.')
      );
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path2 = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        'Index routes must not have child routes. Please remove all child routes from route path "'.concat(path2, '".')
      );
      flattenRoutes(
        route.children,
        branches,
        routesMeta,
        path2,
        hasParentOptionalSegments
      );
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path: path2,
      score: computeScore(path2, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _a2;
    if (route.path === "" || !((_a2 = route.path) == null ? void 0 : _a2.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, true, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path2) {
  let segments = path2.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(
    ...restExploded.map(
      (subpath) => subpath === "" ? required : [required, subpath].join("/")
    )
  );
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map(
    (exploded) => path2.startsWith("/") && exploded === "" ? "/" : exploded
  );
}
function rankRouteBranches(branches) {
  branches.sort(
    (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
      a.routesMeta.map((meta) => meta.childrenIndex),
      b.routesMeta.map((meta) => meta.childrenIndex)
    )
  );
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === "*";
function computeScore(path2, index) {
  let segments = path2.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce(
    (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
    initialScore
  );
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath(
      { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
      remainingPathname
    );
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath(
        {
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false
        },
        remainingPathname
      );
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(
        joinPaths([matchedPathname, match.pathnameBase])
      ),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = { path: pattern, caseSensitive: false, end: true };
  }
  let [matcher, compiledParams] = compilePath(
    pattern.path,
    pattern.caseSensitive,
    pattern.end
  );
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce(
    (memo2, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo2[paramName] = void 0;
      } else {
        memo2[paramName] = (value || "").replace(/%2F/g, "/");
      }
      return memo2;
    },
    {}
  );
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path2, caseSensitive = false, end = true) {
  warning(
    path2 === "*" || !path2.endsWith("*") || path2.endsWith("/*"),
    'Route path "'.concat(path2, '" will be treated as if it were "').concat(path2.replace(/\*$/, "/*"), '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "').concat(path2.replace(/\*$/, "/*"), '".')
  );
  let params = [];
  let regexpSource = "^" + path2.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (_, paramName, isOptional) => {
      params.push({ paramName, isOptional: isOptional != null });
      return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  if (path2.endsWith("*")) {
    params.push({ paramName: "*" });
    regexpSource += path2 === "*" || path2 === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path2 !== "" && path2 !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(
      false,
      'The URL path "'.concat(value, '" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (').concat(error, ").")
    );
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname = "/") {
  let {
    pathname: toPathname,
    search = "",
    hash: hash2 = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash2)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path2) {
  return "Cannot include a '".concat(char, "' character in a manually specified `to.").concat(field, "` field [").concat(JSON.stringify(
    path2
  ), "].  Please separate it out to the `to.").concat(dest, '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.');
}
function getPathContributingMatches(matches) {
  return matches.filter(
    (match, index) => index === 0 || match.route.path && match.route.path.length > 0
  );
}
function getResolveToMatches(matches) {
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches.map(
    (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
  );
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = { ...toArg };
    invariant(
      !to.pathname || !to.pathname.includes("?"),
      getInvalidPathError("?", "pathname", "search", to)
    );
    invariant(
      !to.pathname || !to.pathname.includes("#"),
      getInvalidPathError("#", "pathname", "hash", to)
    );
    invariant(
      !to.search || !to.search.includes("#"),
      getInvalidPathError("#", "search", "hash", to)
    );
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path2 = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path2.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path2.pathname += "/";
  }
  return path2;
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash2) => !hash2 || hash2 === "#" ? "" : hash2.startsWith("#") ? hash2 : "#" + hash2;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
var validMutationMethodsArr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  validMutationMethodsArr
);
var validRequestMethodsArr = [
  "GET",
  ...validMutationMethodsArr
];
new Set(validRequestMethodsArr);
var DataRouterContext = reactExports.createContext(null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = reactExports.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
reactExports.createContext(false);
var ViewTransitionContext = reactExports.createContext({
  isTransitioning: false
});
ViewTransitionContext.displayName = "ViewTransition";
var FetchersContext = reactExports.createContext(
  /* @__PURE__ */ new Map()
);
FetchersContext.displayName = "Fetchers";
var AwaitContext = reactExports.createContext(null);
AwaitContext.displayName = "Await";
var NavigationContext = reactExports.createContext(
  null
);
NavigationContext.displayName = "Navigation";
var LocationContext = reactExports.createContext(
  null
);
LocationContext.displayName = "Location";
var RouteContext = reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = reactExports.createContext(null);
RouteErrorContext.displayName = "RouteError";
function useHref(to, { relative } = {}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename, navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { hash: hash2, pathname, search } = useResolvedPath(to, { relative });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({ pathname: joinedPathname, search, hash: hash2 });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  );
  return reactExports.useContext(LocationContext).location;
}
function useMatch(pattern) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component."
  );
  let { pathname } = useLocation();
  return reactExports.useMemo(
    () => matchPath(pattern, decodePath(pathname)),
    [pathname, pattern]
  );
}
var navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function useIsomorphicLayoutEffect(cb) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports.useLayoutEffect(cb);
  }
}
function useNavigate() {
  let { isDataRoute } = reactExports.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let { basename, navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { matches } = reactExports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(
    (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        navigator2.go(to);
        return;
      }
      let path2 = resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        options.relative === "path"
      );
      if (dataRouterContext == null && basename !== "/") {
        path2.pathname = path2.pathname === "/" ? basename : joinPaths([basename, path2.pathname]);
      }
      (!!options.replace ? navigator2.replace : navigator2.push)(
        path2,
        options.state,
        options
      );
    },
    [
      basename,
      navigator2,
      routePathnamesJson,
      locationPathname,
      dataRouterContext
    ]
  );
  return navigate;
}
reactExports.createContext(null);
function useResolvedPath(to, { relative } = {}) {
  let { matches } = reactExports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return reactExports.useMemo(
    () => resolveTo(
      to,
      JSON.parse(routePathnamesJson),
      locationPathname,
      relative === "path"
    ),
    [to, routePathnamesJson, locationPathname, relative]
  );
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, unstable_onError, future) {
  var _a2;
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { matches: parentMatches } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(
      parentPathname,
      !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
      'You rendered descendant <Routes> (or called `useRoutes()`) at "'.concat(parentPathname, '" (under <Route path="').concat(parentPath, '">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="').concat(parentPath, '"> to <Route path="').concat(parentPath === "/" ? "*" : "".concat(parentPath, "/*"), '">.')
    );
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    invariant(
      parentPathnameBase === "/" || ((_a2 = parsedLocationArg.pathname) == null ? void 0 : _a2.startsWith(parentPathnameBase)),
      'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'.concat(parentPathnameBase, '" but pathname "').concat(parsedLocationArg.pathname, '" was given in the `location` prop.')
    );
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes, { pathname: remainingPathname });
  {
    warning(
      parentRoute || matches != null,
      'No routes matched location "'.concat(location.pathname).concat(location.search).concat(location.hash, '" ')
    );
    warning(
      matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
      'Matched leaf route at location "'.concat(location.pathname).concat(location.search).concat(location.hash, '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.')
    );
  }
  let renderedMatches = _renderMatches(
    matches && matches.map(
      (match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
        ]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
        ])
      })
    ),
    parentMatches,
    dataRouterState,
    unstable_onError,
    future
  );
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(
      LocationContext.Provider,
      {
        value: {
          location: {
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
            ...location
          },
          navigationType: "POP"
          /* Pop */
        }
      },
      renderedMatches
    );
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? "".concat(error.status, " ").concat(error.statusText) : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
  let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
  let devInfo = null;
  {
    console.error(
      "Error handled by React Router default ErrorBoundary:",
      error
    );
    devInfo = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ reactExports.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ reactExports.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ reactExports.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", { style: preStyles }, stack) : null, devInfo);
}
var defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    if (this.props.unstable_onError) {
      this.props.unstable_onError(error, errorInfo);
    } else {
      console.error(
        "React Router caught the following error during render",
        error
      );
    }
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ reactExports.createElement(
      RouteErrorContext.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function RenderedRoute({ routeContext, match, children }) {
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, { value: routeContext }, children);
}
function _renderMatches(matches, parentMatches = [], dataRouterState = null, unstable_onError = null, future = null) {
  if (matches == null) {
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(
      (m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== void 0
    );
    invariant(
      errorIndex >= 0,
      "Could not find a matching route for errors on route IDs: ".concat(Object.keys(
        errors
      ).join(","))
    );
    renderedMatches = renderedMatches.slice(
      0,
      Math.min(renderedMatches.length, errorIndex + 1)
    );
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let { loaderData, errors: errors2 } = dataRouterState;
        let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight(
    (outlet, match, index) => {
      let error;
      let shouldRenderHydrateFallback = false;
      let errorElement = null;
      let hydrateFallbackElement = null;
      if (dataRouterState) {
        error = errors && match.route.id ? errors[match.route.id] : void 0;
        errorElement = match.route.errorElement || defaultErrorElement;
        if (renderFallback) {
          if (fallbackIndex < 0 && index === 0) {
            warningOnce(
              "route-fallback",
              false,
              "No `HydrateFallback` element provided to render during initial hydration"
            );
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = null;
          } else if (fallbackIndex === index) {
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = match.route.hydrateFallbackElement || null;
          }
        }
      }
      let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
      let getChildren = () => {
        let children;
        if (error) {
          children = errorElement;
        } else if (shouldRenderHydrateFallback) {
          children = hydrateFallbackElement;
        } else if (match.route.Component) {
          children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
        } else if (match.route.element) {
          children = match.route.element;
        } else {
          children = outlet;
        }
        return /* @__PURE__ */ reactExports.createElement(
          RenderedRoute,
          {
            match,
            routeContext: {
              outlet,
              matches: matches2,
              isDataRoute: dataRouterState != null
            },
            children
          }
        );
      };
      return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(
        RenderErrorBoundary,
        {
          location: dataRouterState.location,
          revalidation: dataRouterState.revalidation,
          component: errorElement,
          error,
          children: getChildren(),
          routeContext: { outlet: null, matches: matches2, isDataRoute: true },
          unstable_onError
        }
      ) : getChildren();
    },
    null
  );
}
function getDataRouterConsoleError(hookName) {
  return "".concat(hookName, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.");
}
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError(hookName));
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError(hookName));
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  invariant(route, getDataRouterConsoleError(hookName));
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  invariant(
    thisRoute.route.id,
    "".concat(hookName, ' can only be used on routes that contain a unique "id"')
  );
  return thisRoute.route.id;
}
function useRouteId() {
  return useCurrentRouteId(
    "useRouteId"
    /* UseRouteId */
  );
}
function useRouteError() {
  var _a2;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(
    "useRouteError"
    /* UseRouteError */
  );
  let routeId = useCurrentRouteId(
    "useRouteError"
    /* UseRouteError */
  );
  if (error !== void 0) {
    return error;
  }
  return (_a2 = state.errors) == null ? void 0 : _a2[routeId];
}
function useNavigateStable() {
  let { router } = useDataRouterContext(
    "useNavigate"
    /* UseNavigateStable */
  );
  let id = useCurrentRouteId(
    "useNavigate"
    /* UseNavigateStable */
  );
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(
    async (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        router.navigate(to);
      } else {
        await router.navigate(to, { fromRouteId: id, ...options });
      }
    },
    [router, id]
  );
  return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    warning(false, message);
  }
}
reactExports.memo(DataRoutes);
function DataRoutes({
  routes,
  future,
  state,
  unstable_onError
}) {
  return useRoutesImpl(routes, void 0, state, unstable_onError, future);
}
function Route(props) {
  invariant(
    false,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Router({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = "POP",
  navigator: navigator2,
  static: staticProp = false
}) {
  invariant(
    !useInRouterContext(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(
    () => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      future: {}
    }),
    [basename, navigator2, staticProp]
  );
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash: hash2 = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash: hash2,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash2, state, key, navigationType]);
  warning(
    locationContext != null,
    '<Router basename="'.concat(basename, '"> is not able to match the URL "').concat(pathname).concat(search).concat(hash2, "\" because it does not start with the basename, so the <Router> won't render anything.")
  );
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, { children, value: locationContext }));
}
function Routes$1({
  children,
  location
}) {
  return useRoutes(createRoutesFromChildren(children), location);
}
function createRoutesFromChildren(children, parentPath = []) {
  let routes = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (!reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === reactExports.Fragment) {
      routes.push.apply(
        routes,
        createRoutesFromChildren(element.props.children, treePath)
      );
      return;
    }
    invariant(
      element.type === Route,
      "[".concat(typeof element.type === "string" ? element.type : element.type.name, "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>")
    );
    invariant(
      !element.props.index || !element.props.children,
      "An index route cannot have child routes."
    );
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      hydrateFallbackElement: element.props.hydrateFallbackElement,
      HydrateFallback: element.props.HydrateFallback,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(
        element.props.children,
        treePath
      );
    }
    routes.push(route);
  });
  return routes;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    warning(
      false,
      '"'.concat(encType, '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "').concat(defaultEncType, '"')
    );
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let { name, type, value } = target;
      if (type === "image") {
        let prefix = name ? "".concat(name, ".") : "";
        formData.append("".concat(prefix, "x"), "0");
        formData.append("".concat(prefix, "y"), "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error(
      'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
    );
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = void 0;
  }
  return { action, method: method.toLowerCase(), encType, formData, body };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function invariant2(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function singleFetchUrl(reqUrl, basename, extension) {
  let url = typeof reqUrl === "string" ? new URL(
    reqUrl,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
  ) : reqUrl;
  if (url.pathname === "/") {
    url.pathname = "_root.".concat(extension);
  } else if (basename && stripBasename(url.pathname, basename) === "/") {
    url.pathname = "".concat(basename.replace(/\/$/, ""), "/_root.").concat(extension);
  } else {
    url.pathname = "".concat(url.pathname.replace(/\/$/, ""), ".").concat(extension);
  }
  return url;
}
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      route.module
    );
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    console.error(
      "Error loading route module `".concat(route.module, "`, reloading page...")
    );
    console.error(error);
    if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
    void 0) ;
    window.location.reload();
    return new Promise(() => {
    });
  }
}
function isHtmlLinkDescriptor(object) {
  if (object == null) {
    return false;
  }
  if (object.href == null) {
    return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
  }
  return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(
    matches.map(async (match) => {
      let route = manifest.routes[match.route.id];
      if (route) {
        let mod = await loadRouteModule(route, routeModules);
        return mod.links ? mod.links() : [];
      }
      return [];
    })
  );
  return dedupeLinkDescriptors(
    links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
      (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
    )
  );
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
  let isNew = (match, index) => {
    if (!currentMatches[index]) return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _a2;
    return (
      // param change, /users/123 -> /users/456
      currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((_a2 = currentMatches[index].route.path) == null ? void 0 : _a2.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"]
    );
  };
  if (mode === "assets") {
    return nextMatches.filter(
      (match, index) => isNew(match, index) || matchPathChanged(match, index)
    );
  }
  if (mode === "data") {
    return nextMatches.filter((match, index) => {
      var _a2;
      let manifestRoute = manifest.routes[match.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return false;
      }
      if (isNew(match, index) || matchPathChanged(match, index)) {
        return true;
      }
      if (match.route.shouldRevalidate) {
        let routeChoice = match.route.shouldRevalidate({
          currentUrl: new URL(
            location.pathname + location.search + location.hash,
            window.origin
          ),
          currentParams: ((_a2 = currentMatches[0]) == null ? void 0 : _a2.params) || {},
          nextUrl: new URL(page, window.origin),
          nextParams: match.params,
          defaultShouldRevalidate: true
        });
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return true;
    });
  }
  return [];
}
function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
  return dedupeHrefs(
    matches.map((match) => {
      let route = manifest.routes[match.route.id];
      if (!route) return [];
      let hrefs = [route.module];
      if (route.clientActionModule) {
        hrefs = hrefs.concat(route.clientActionModule);
      }
      if (route.clientLoaderModule) {
        hrefs = hrefs.concat(route.clientLoaderModule);
      }
      if (includeHydrateFallback && route.hydrateFallbackModule) {
        hrefs = hrefs.concat(route.hydrateFallbackModule);
      }
      if (route.imports) {
        hrefs = hrefs.concat(route.imports);
      }
      return hrefs;
    }).flat(1)
  );
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function sortKeys(obj) {
  let sorted = {};
  let keys = Object.keys(obj).sort();
  for (let key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
  let set2 = /* @__PURE__ */ new Set();
  new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let key = JSON.stringify(sortKeys(descriptor));
    if (!set2.has(key)) {
      set2.add(key);
      deduped.push({ key, link: descriptor });
    }
    return deduped;
  }, []);
}
function useDataRouterContext2() {
  let context = reactExports.useContext(DataRouterContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterContext.Provider> element"
  );
  return context;
}
function useDataRouterStateContext() {
  let context = reactExports.useContext(DataRouterStateContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  );
  return context;
}
var FrameworkContext = reactExports.createContext(void 0);
FrameworkContext.displayName = "FrameworkContext";
function useFrameworkContext() {
  let context = reactExports.useContext(FrameworkContext);
  invariant2(
    context,
    "You must render this element inside a <HydratedRouter> element"
  );
  return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let frameworkContext = reactExports.useContext(FrameworkContext);
  let [maybePrefetch, setMaybePrefetch] = reactExports.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = reactExports.useState(false);
  let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
  let ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
    if (prefetch === "viewport") {
      let callback = (entries) => {
        entries.forEach((entry) => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      let observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  reactExports.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  let setIntent = () => {
    setMaybePrefetch(true);
  };
  let cancelIntent = () => {
    setMaybePrefetch(false);
    setShouldPrefetch(false);
  };
  if (!frameworkContext) {
    return [false, ref, {}];
  }
  if (prefetch !== "intent") {
    return [shouldPrefetch, ref, {}];
  }
  return [
    shouldPrefetch,
    ref,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent)
    }
  ];
}
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function PrefetchPageLinks({ page, ...linkProps }) {
  let { router } = useDataRouterContext2();
  let matches = reactExports.useMemo(
    () => matchRoutes(router.routes, page, router.basename),
    [router.routes, page, router.basename]
  );
  if (!matches) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
}
function useKeyedPrefetchLinks(matches) {
  let { manifest, routeModules } = useFrameworkContext();
  let [keyedPrefetchLinks, setKeyedPrefetchLinks] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let interrupted = false;
    void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
      (links) => {
        if (!interrupted) {
          setKeyedPrefetchLinks(links);
        }
      }
    );
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return keyedPrefetchLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = useLocation();
  let { manifest, routeModules } = useFrameworkContext();
  let { basename } = useDataRouterContext2();
  let { loaderData, matches } = useDataRouterStateContext();
  let newMatchesForData = reactExports.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "data"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let newMatchesForAssets = reactExports.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "assets"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let dataHrefs = reactExports.useMemo(() => {
    if (page === location.pathname + location.search + location.hash) {
      return [];
    }
    let routesParams = /* @__PURE__ */ new Set();
    let foundOptOutRoute = false;
    nextMatches.forEach((m) => {
      var _a2;
      let manifestRoute = manifest.routes[m.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return;
      }
      if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && ((_a2 = routeModules[m.route.id]) == null ? void 0 : _a2.shouldRevalidate)) {
        foundOptOutRoute = true;
      } else if (manifestRoute.hasClientLoader) {
        foundOptOutRoute = true;
      } else {
        routesParams.add(m.route.id);
      }
    });
    if (routesParams.size === 0) {
      return [];
    }
    let url = singleFetchUrl(page, basename, "data");
    if (foundOptOutRoute && routesParams.size > 0) {
      url.searchParams.set(
        "_routes",
        nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
      );
    }
    return [url.pathname + url.search];
  }, [
    basename,
    loaderData,
    location,
    manifest,
    newMatchesForData,
    nextMatches,
    page,
    routeModules
  ]);
  let moduleHrefs = reactExports.useMemo(
    () => getModuleLinkHrefs(newMatchesForAssets, manifest),
    [newMatchesForAssets, manifest]
  );
  let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ reactExports.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ reactExports.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ reactExports.createElement("link", { key, nonce: linkProps.nonce, ...link })
  )));
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
  if (isBrowser) {
    window.__reactRouterVersion = // @ts-expect-error
    "7.9.1";
  }
} catch (e) {
}
function BrowserRouter({
  basename,
  children,
  window: window2
}) {
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({ window: window2, v5Compat: true });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  let setState = reactExports.useCallback(
    (newState) => {
      reactExports.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ reactExports.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = reactExports.forwardRef(
  function LinkWithRef({
    onClick,
    discover = "render",
    prefetch = "none",
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition,
    ...rest
  }, forwardedRef) {
    let { basename } = reactExports.useContext(NavigationContext);
    let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && isAbsolute) {
      absoluteHref = to;
      if (isBrowser) {
        try {
          let currentUrl = new URL(window.location.href);
          let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
          let path2 = stripBasename(targetUrl.pathname, basename);
          if (targetUrl.origin === currentUrl.origin && path2 != null) {
            to = path2 + targetUrl.search + targetUrl.hash;
          } else {
            isExternal = true;
          }
        } catch (e) {
          warning(
            false,
            '<Link to="'.concat(to, '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.')
          );
        }
      }
    }
    let href = useHref(to, { relative });
    let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
      prefetch,
      rest
    );
    let internalOnClick = useLinkClickHandler(to, {
      replace: replace2,
      state,
      target,
      preventScrollReset,
      relative,
      viewTransition
    });
    function handleClick(event) {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }
    }
    let link = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ reactExports.createElement(
        "a",
        {
          ...rest,
          ...prefetchHandlers,
          href: absoluteHref || href,
          onClick: isExternal || reloadDocument ? onClick : handleClick,
          ref: mergeRefs(forwardedRef, prefetchRef),
          target,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      )
    );
    return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, link, /* @__PURE__ */ reactExports.createElement(PrefetchPageLinks, { page: href })) : link;
  }
);
Link.displayName = "Link";
var NavLink = reactExports.forwardRef(
  function NavLinkWithRef({
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children,
    ...rest
  }, ref) {
    let path2 = useResolvedPath(to, { relative: rest.relative });
    let location = useLocation();
    let routerState = reactExports.useContext(DataRouterStateContext);
    let { navigator: navigator2, basename } = reactExports.useContext(NavigationContext);
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path2) && viewTransition === true;
    let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path2).pathname : path2.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
      toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
      nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
    }
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
      isActive,
      isPending,
      isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : void 0;
    let className;
    if (typeof classNameProp === "function") {
      className = classNameProp(renderProps);
    } else {
      className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
      ].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /* @__PURE__ */ reactExports.createElement(
      Link,
      {
        ...rest,
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to,
        viewTransition
      },
      typeof children === "function" ? children(renderProps) : children
    );
  }
);
NavLink.displayName = "NavLink";
var Form = reactExports.forwardRef(
  ({
    discover = "render",
    fetcherKey,
    navigate,
    reloadDocument,
    replace: replace2,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition,
    ...props
  }, forwardedRef) => {
    let submit = useSubmit();
    let formAction = useFormAction(action, { relative });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
    let submitHandler = (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
      submit(submitter || event.currentTarget, {
        fetcherKey,
        method: submitMethod,
        navigate,
        replace: replace2,
        state,
        relative,
        preventScrollReset,
        viewTransition
      });
    };
    return /* @__PURE__ */ reactExports.createElement(
      "form",
      {
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler,
        ...props,
        "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
      }
    );
  }
);
Form.displayName = "Form";
function getDataRouterConsoleError2(hookName) {
  return "".concat(hookName, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.");
}
function useDataRouterContext3(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError2(hookName));
  return ctx;
}
function useLinkClickHandler(to, {
  target,
  replace: replaceProp,
  state,
  preventScrollReset,
  relative,
  viewTransition
} = {}) {
  let navigate = useNavigate();
  let location = useLocation();
  let path2 = useResolvedPath(to, { relative });
  return reactExports.useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace2 = replaceProp !== void 0 ? replaceProp : createPath$1(location) === createPath$1(path2);
        navigate(to, {
          replace: replace2,
          state,
          preventScrollReset,
          relative,
          viewTransition
        });
      }
    },
    [
      location,
      navigate,
      path2,
      replaceProp,
      state,
      target,
      to,
      preventScrollReset,
      relative,
      viewTransition
    ]
  );
}
var fetcherId = 0;
var getUniqueFetcherId = () => "__".concat(String(++fetcherId), "__");
function useSubmit() {
  let { router } = useDataRouterContext3(
    "useSubmit"
    /* UseSubmit */
  );
  let { basename } = reactExports.useContext(NavigationContext);
  let currentRouteId = useRouteId();
  return reactExports.useCallback(
    async (target, options = {}) => {
      let { action, method, encType, formData, body } = getFormSubmissionInfo(
        target,
        basename
      );
      if (options.navigate === false) {
        let key = options.fetcherKey || getUniqueFetcherId();
        await router.fetch(key, currentRouteId, options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          flushSync: options.flushSync
        });
      } else {
        await router.navigate(options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          replace: options.replace,
          state: options.state,
          fromRouteId: currentRouteId,
          flushSync: options.flushSync,
          viewTransition: options.viewTransition
        });
      }
    },
    [router, basename, currentRouteId]
  );
}
function useFormAction(action, { relative } = {}) {
  let { basename } = reactExports.useContext(NavigationContext);
  let routeContext = reactExports.useContext(RouteContext);
  invariant(routeContext, "useFormAction must be used inside a RouteContext");
  let [match] = routeContext.matches.slice(-1);
  let path2 = { ...useResolvedPath(action ? action : ".", { relative }) };
  let location = useLocation();
  if (action == null) {
    path2.search = location.search;
    let params = new URLSearchParams(path2.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v) => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path2.search = qs ? "?".concat(qs) : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path2.search = path2.search ? path2.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path2.pathname = path2.pathname === "/" ? basename : joinPaths([basename, path2.pathname]);
  }
  return createPath$1(path2);
}
function useViewTransitionState(to, { relative } = {}) {
  let vtContext = reactExports.useContext(ViewTransitionContext);
  invariant(
    vtContext != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename } = useDataRouterContext3(
    "useViewTransitionState"
    /* useViewTransitionState */
  );
  let path2 = useResolvedPath(to, { relative });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path2.pathname, nextPath) != null || matchPath(path2.pathname, currentPath) != null;
}
const {
  slice: slice$1,
  forEach
} = [];
function defaults$1(obj) {
  forEach.call(slice$1.call(arguments, 1), (source) => {
    if (source) {
      for (const prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function hasXSS(input) {
  if (typeof input !== "string") return false;
  const xssPatterns = [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i];
  return xssPatterns.some((pattern) => pattern.test(input));
}
const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
const serializeCookie = function(name, val) {
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    path: "/"
  };
  const opt = options;
  const value = encodeURIComponent(val);
  let str = "".concat(name, "=").concat(value);
  if (opt.maxAge > 0) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge)) throw new Error("maxAge should be a Number");
    str += "; Max-Age=".concat(Math.floor(maxAge));
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=".concat(opt.domain);
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=".concat(opt.path);
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=".concat(opt.expires.toUTCString());
  }
  if (opt.httpOnly) str += "; HttpOnly";
  if (opt.secure) str += "; Secure";
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  if (opt.partitioned) str += "; Partitioned";
  return str;
};
const cookie = {
  create(name, value, minutes, domain) {
    let cookieOptions = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    if (minutes) {
      cookieOptions.expires = /* @__PURE__ */ new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1e3);
    }
    if (domain) cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, value, cookieOptions);
  },
  read(name) {
    const nameEQ = "".concat(name, "=");
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  remove(name, domain) {
    this.create(name, "", -1, domain);
  }
};
var cookie$1 = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(_ref) {
    let {
      lookupCookie
    } = _ref;
    if (lookupCookie && typeof document !== "undefined") {
      return cookie.read(lookupCookie) || void 0;
    }
    return void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupCookie,
      cookieMinutes,
      cookieDomain,
      cookieOptions
    } = _ref2;
    if (lookupCookie && typeof document !== "undefined") {
      cookie.create(lookupCookie, lng, cookieMinutes, cookieDomain, cookieOptions);
    }
  }
};
var querystring = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(_ref) {
    var _a2;
    let {
      lookupQuerystring
    } = _ref;
    let found;
    if (typeof window !== "undefined") {
      let {
        search
      } = window.location;
      if (!window.location.search && ((_a2 = window.location.hash) == null ? void 0 : _a2.indexOf("?")) > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf("?"));
      }
      const query = search.substring(1);
      const params = query.split("&");
      for (let i = 0; i < params.length; i++) {
        const pos = params[i].indexOf("=");
        if (pos > 0) {
          const key = params[i].substring(0, pos);
          if (key === lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }
    return found;
  }
};
var hash = {
  name: "hash",
  // Deconstruct the options object and extract the lookupHash property and the lookupFromHashIndex property
  lookup(_ref) {
    var _a2;
    let {
      lookupHash,
      lookupFromHashIndex
    } = _ref;
    let found;
    if (typeof window !== "undefined") {
      const {
        hash: hash2
      } = window.location;
      if (hash2 && hash2.length > 2) {
        const query = hash2.substring(1);
        if (lookupHash) {
          const params = query.split("&");
          for (let i = 0; i < params.length; i++) {
            const pos = params[i].indexOf("=");
            if (pos > 0) {
              const key = params[i].substring(0, pos);
              if (key === lookupHash) {
                found = params[i].substring(pos + 1);
              }
            }
          }
        }
        if (found) return found;
        if (!found && lookupFromHashIndex > -1) {
          const language = hash2.match(/\/([a-zA-Z-]*)/g);
          if (!Array.isArray(language)) return void 0;
          const index = typeof lookupFromHashIndex === "number" ? lookupFromHashIndex : 0;
          return (_a2 = language[index]) == null ? void 0 : _a2.replace("/", "");
        }
      }
    }
    return found;
  }
};
let hasLocalStorageSupport = null;
const localStorageAvailable = () => {
  if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;
  try {
    hasLocalStorageSupport = typeof window !== "undefined" && window.localStorage !== null;
    if (!hasLocalStorageSupport) {
      return false;
    }
    const testKey = "i18next.translate.boo";
    window.localStorage.setItem(testKey, "foo");
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
};
var localStorage$1 = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(_ref) {
    let {
      lookupLocalStorage
    } = _ref;
    if (lookupLocalStorage && localStorageAvailable()) {
      return window.localStorage.getItem(lookupLocalStorage) || void 0;
    }
    return void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupLocalStorage
    } = _ref2;
    if (lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(lookupLocalStorage, lng);
    }
  }
};
let hasSessionStorageSupport = null;
const sessionStorageAvailable = () => {
  if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;
  try {
    hasSessionStorageSupport = typeof window !== "undefined" && window.sessionStorage !== null;
    if (!hasSessionStorageSupport) {
      return false;
    }
    const testKey = "i18next.translate.boo";
    window.sessionStorage.setItem(testKey, "foo");
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
};
var sessionStorage = {
  name: "sessionStorage",
  lookup(_ref) {
    let {
      lookupSessionStorage
    } = _ref;
    if (lookupSessionStorage && sessionStorageAvailable()) {
      return window.sessionStorage.getItem(lookupSessionStorage) || void 0;
    }
    return void 0;
  },
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupSessionStorage
    } = _ref2;
    if (lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(lookupSessionStorage, lng);
    }
  }
};
var navigator$1 = {
  name: "navigator",
  lookup(options) {
    const found = [];
    if (typeof navigator !== "undefined") {
      const {
        languages,
        userLanguage,
        language
      } = navigator;
      if (languages) {
        for (let i = 0; i < languages.length; i++) {
          found.push(languages[i]);
        }
      }
      if (userLanguage) {
        found.push(userLanguage);
      }
      if (language) {
        found.push(language);
      }
    }
    return found.length > 0 ? found : void 0;
  }
};
var htmlTag = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(_ref) {
    let {
      htmlTag: htmlTag2
    } = _ref;
    let found;
    const internalHtmlTag = htmlTag2 || (typeof document !== "undefined" ? document.documentElement : null);
    if (internalHtmlTag && typeof internalHtmlTag.getAttribute === "function") {
      found = internalHtmlTag.getAttribute("lang");
    }
    return found;
  }
};
var path = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(_ref) {
    var _a2;
    let {
      lookupFromPathIndex
    } = _ref;
    if (typeof window === "undefined") return void 0;
    const language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    if (!Array.isArray(language)) return void 0;
    const index = typeof lookupFromPathIndex === "number" ? lookupFromPathIndex : 0;
    return (_a2 = language[index]) == null ? void 0 : _a2.replace("/", "");
  }
};
var subdomain = {
  name: "subdomain",
  lookup(_ref) {
    var _a2, _b2;
    let {
      lookupFromSubdomainIndex
    } = _ref;
    const internalLookupFromSubdomainIndex = typeof lookupFromSubdomainIndex === "number" ? lookupFromSubdomainIndex + 1 : 1;
    const language = typeof window !== "undefined" && ((_b2 = (_a2 = window.location) == null ? void 0 : _a2.hostname) == null ? void 0 : _b2.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (!language) return void 0;
    return language[internalLookupFromSubdomainIndex];
  }
};
let canCookies = false;
try {
  document.cookie;
  canCookies = true;
} catch (e) {
}
const order = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
if (!canCookies) order.splice(1, 1);
const getDefaults$2 = () => ({
  order,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  // cache user language
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain'
  convertDetectedLanguage: (l) => l
});
class Browser {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector";
    this.detectors = {};
    this.init(services, options);
  }
  init() {
    let services = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      languageUtils: {}
    };
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let i18nOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = services;
    this.options = defaults$1(options, this.options || {}, getDefaults$2());
    if (typeof this.options.convertDetectedLanguage === "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1) {
      this.options.convertDetectedLanguage = (l) => l.replace("-", "_");
    }
    if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
    this.i18nOptions = i18nOptions;
    this.addDetector(cookie$1);
    this.addDetector(querystring);
    this.addDetector(localStorage$1);
    this.addDetector(sessionStorage);
    this.addDetector(navigator$1);
    this.addDetector(htmlTag);
    this.addDetector(path);
    this.addDetector(subdomain);
    this.addDetector(hash);
  }
  addDetector(detector) {
    this.detectors[detector.name] = detector;
    return this;
  }
  detect() {
    let detectionOrder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order;
    let detected = [];
    detectionOrder.forEach((detectorName) => {
      if (this.detectors[detectorName]) {
        let lookup = this.detectors[detectorName].lookup(this.options);
        if (lookup && typeof lookup === "string") lookup = [lookup];
        if (lookup) detected = detected.concat(lookup);
      }
    });
    detected = detected.filter((d) => d !== void 0 && d !== null && !hasXSS(d)).map((d) => this.options.convertDetectedLanguage(d));
    if (this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes) return detected;
    return detected.length > 0 ? detected[0] : null;
  }
  cacheUserLanguage(lng) {
    let caches2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    if (!caches2) return;
    if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
    caches2.forEach((cacheName) => {
      if (this.detectors[cacheName]) this.detectors[cacheName].cacheUserLanguage(lng, this.options);
    });
  }
}
Browser.type = "languageDetector";
function _classCallCheck$1(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _typeof$3(o) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$3(o);
}
function toPrimitive(t2, r2) {
  if ("object" != _typeof$3(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t2, r2);
    if ("object" != _typeof$3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t2);
}
function toPropertyKey(t2) {
  var i = toPrimitive(t2, "string");
  return "symbol" == _typeof$3(i) ? i : i + "";
}
function _defineProperties$1(e, r2) {
  for (var t2 = 0; t2 < r2.length; t2++) {
    var o = r2[t2];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass$1(e, r2, t2) {
  return r2 && _defineProperties$1(e.prototype, r2), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function(source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function createClassOnDemand(ClassOrObject) {
  if (!ClassOrObject) return null;
  if (typeof ClassOrObject === "function") return new ClassOrObject();
  return ClassOrObject;
}
function getDefaults$1() {
  return {
    handleEmptyResourcesAsFailed: true,
    cacheHitMode: "none"
    // reloadInterval: typeof window !== 'undefined' ? false : 60 * 60 * 1000
    // refreshExpirationTime: 60 * 60 * 1000
  };
}
function handleCorrectReadFunction(backend, language, namespace, resolver) {
  var fc = backend.read.bind(backend);
  if (fc.length === 2) {
    try {
      var r2 = fc(language, namespace);
      if (r2 && typeof r2.then === "function") {
        r2.then(function(data) {
          return resolver(null, data);
        })["catch"](resolver);
      } else {
        resolver(null, r2);
      }
    } catch (err) {
      resolver(err);
    }
    return;
  }
  fc(language, namespace, resolver);
}
var Backend$1 = /* @__PURE__ */ (function() {
  function Backend2(services) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i18nextOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck$1(this, Backend2);
    this.backends = [];
    this.type = "backend";
    this.allOptions = i18nextOptions;
    this.init(services, options);
  }
  _createClass$1(Backend2, [{
    key: "init",
    value: function init(services) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var i18nextOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults$1());
      this.allOptions = i18nextOptions;
      this.options.backends && this.options.backends.forEach(function(b, i) {
        _this.backends[i] = _this.backends[i] || createClassOnDemand(b);
        _this.backends[i].init(services, _this.options.backendOptions && _this.options.backendOptions[i] || {}, i18nextOptions);
      });
      if (this.services && this.options.reloadInterval) {
        setInterval(function() {
          return _this.reload();
        }, this.options.reloadInterval);
      }
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      var _this2 = this;
      var bLen = this.backends.length;
      var loadPosition = function loadPosition2(pos) {
        if (pos >= bLen) return callback(new Error("non of the backend loaded data", true));
        var isLastBackend = pos === bLen - 1;
        var lengthCheckAmount = _this2.options.handleEmptyResourcesAsFailed && !isLastBackend ? 0 : -1;
        var backend = _this2.backends[pos];
        if (backend.read) {
          handleCorrectReadFunction(backend, language, namespace, function(err, data, savedAt) {
            if (!err && data && Object.keys(data).length > lengthCheckAmount) {
              callback(null, data, pos);
              savePosition(pos - 1, data);
              if (backend.save && _this2.options.cacheHitMode && ["refresh", "refreshAndUpdateStore"].indexOf(_this2.options.cacheHitMode) > -1) {
                if (savedAt && _this2.options.refreshExpirationTime && savedAt + _this2.options.refreshExpirationTime > Date.now()) return;
                var nextBackend = _this2.backends[pos + 1];
                if (nextBackend && nextBackend.read) {
                  handleCorrectReadFunction(nextBackend, language, namespace, function(err2, data2) {
                    if (err2) return;
                    if (!data2) return;
                    if (Object.keys(data2).length <= lengthCheckAmount) return;
                    savePosition(pos, data2);
                    if (_this2.options.cacheHitMode !== "refreshAndUpdateStore") return;
                    if (_this2.services && _this2.services.resourceStore) {
                      _this2.services.resourceStore.addResourceBundle(language, namespace, data2);
                    }
                  });
                }
              }
            } else {
              loadPosition2(pos + 1);
            }
          });
        } else {
          loadPosition2(pos + 1);
        }
      };
      var savePosition = function savePosition2(pos, data) {
        if (pos < 0) return;
        var backend = _this2.backends[pos];
        if (backend.save) {
          backend.save(language, namespace, data);
          savePosition2(pos - 1, data);
        } else {
          savePosition2(pos - 1, data);
        }
      };
      loadPosition(0);
    }
  }, {
    key: "create",
    value: function create2(languages, namespace, key, fallbackValue) {
      var clb = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : function() {
      };
      var opts = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      this.backends.forEach(function(b) {
        if (!b.create) return;
        var fc = b.create.bind(b);
        if (fc.length < 6) {
          try {
            var r2;
            if (fc.length === 5) {
              r2 = fc(languages, namespace, key, fallbackValue, opts);
            } else {
              r2 = fc(languages, namespace, key, fallbackValue);
            }
            if (r2 && typeof r2.then === "function") {
              r2.then(function(data) {
                return clb(null, data);
              })["catch"](clb);
            } else {
              clb(null, r2);
            }
          } catch (err) {
            clb(err);
          }
          return;
        }
        fc(languages, namespace, key, fallbackValue, clb, opts);
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this3 = this;
      var _this$services = this.services, backendConnector = _this$services.backendConnector, languageUtils = _this$services.languageUtils, logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === "cimode") return;
      var toLoad = [];
      var append = function append2(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function(l) {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      append(currentLanguage);
      if (this.allOptions.preload) this.allOptions.preload.forEach(function(l) {
        return append(l);
      });
      toLoad.forEach(function(lng) {
        _this3.allOptions.ns.forEach(function(ns) {
          backendConnector.read(lng, ns, "read", null, null, function(err, data) {
            if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);
  return Backend2;
})();
Backend$1.type = "backend";
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function hasXMLHttpRequest() {
  return typeof XMLHttpRequest === "function" || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof$2(XMLHttpRequest)) === "object";
}
function isPromise(maybePromise) {
  return !!maybePromise && typeof maybePromise.then === "function";
}
function makePromise(maybePromise) {
  if (isPromise(maybePromise)) {
    return maybePromise;
  }
  return Promise.resolve(maybePromise);
}
function ownKeys$1(e, r2) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$1(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$1(Object(t2), true).forEach(function(r3) {
      _defineProperty$1(e, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e;
}
function _defineProperty$1(e, r2, t2) {
  return (r2 = _toPropertyKey$1(r2)) in e ? Object.defineProperty(e, r2, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r2] = t2, e;
}
function _toPropertyKey$1(t2) {
  var i = _toPrimitive$1(t2, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t2, r2) {
  if ("object" != _typeof$1(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t2, r2);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
var fetchApi = typeof fetch === "function" ? fetch : void 0;
if (typeof global !== "undefined" && global.fetch) {
  fetchApi = global.fetch;
} else if (typeof window !== "undefined" && window.fetch) {
  fetchApi = window.fetch;
}
var XmlHttpRequestApi;
if (hasXMLHttpRequest()) {
  if (typeof global !== "undefined" && global.XMLHttpRequest) {
    XmlHttpRequestApi = global.XMLHttpRequest;
  } else if (typeof window !== "undefined" && window.XMLHttpRequest) {
    XmlHttpRequestApi = window.XMLHttpRequest;
  }
}
var ActiveXObjectApi;
if (typeof ActiveXObject === "function") {
  if (typeof global !== "undefined" && global.ActiveXObject) {
    ActiveXObjectApi = global.ActiveXObject;
  } else if (typeof window !== "undefined" && window.ActiveXObject) {
    ActiveXObjectApi = window.ActiveXObject;
  }
}
if (typeof fetchApi !== "function") fetchApi = void 0;
if (!fetchApi && !XmlHttpRequestApi && !ActiveXObjectApi) {
  try {
    __vitePreload(() => import("./browser-ponyfill-CT8vT0g7.js").then((n) => n.b), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url).then(function(mod) {
      fetchApi = mod.default;
    }).catch(function() {
    });
  } catch (e) {
  }
}
var addQueryString = function addQueryString2(url, params) {
  if (params && _typeof$1(params) === "object") {
    var queryString = "";
    for (var paramName in params) {
      queryString += "&" + encodeURIComponent(paramName) + "=" + encodeURIComponent(params[paramName]);
    }
    if (!queryString) return url;
    url = url + (url.indexOf("?") !== -1 ? "&" : "?") + queryString.slice(1);
  }
  return url;
};
var fetchIt = function fetchIt2(url, fetchOptions, callback, altFetch) {
  var resolver = function resolver2(response) {
    if (!response.ok) return callback(response.statusText || "Error", {
      status: response.status
    });
    response.text().then(function(data) {
      callback(null, {
        status: response.status,
        data
      });
    }).catch(callback);
  };
  if (altFetch) {
    var altResponse = altFetch(url, fetchOptions);
    if (altResponse instanceof Promise) {
      altResponse.then(resolver).catch(callback);
      return;
    }
  }
  if (typeof fetch === "function") {
    fetch(url, fetchOptions).then(resolver).catch(callback);
  } else {
    fetchApi(url, fetchOptions).then(resolver).catch(callback);
  }
};
var omitFetchOptions = false;
var requestWithFetch = function requestWithFetch2(options, url, payload, callback) {
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  var headers = _objectSpread$1({}, typeof options.customHeaders === "function" ? options.customHeaders() : options.customHeaders);
  if (typeof window === "undefined" && typeof global !== "undefined" && typeof global.process !== "undefined" && global.process.versions && global.process.versions.node) {
    headers["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")");
  }
  if (payload) headers["Content-Type"] = "application/json";
  var reqOptions = typeof options.requestOptions === "function" ? options.requestOptions(payload) : options.requestOptions;
  var fetchOptions = _objectSpread$1({
    method: payload ? "POST" : "GET",
    body: payload ? options.stringify(payload) : void 0,
    headers
  }, omitFetchOptions ? {} : reqOptions);
  var altFetch = typeof options.alternateFetch === "function" && options.alternateFetch.length >= 1 ? options.alternateFetch : void 0;
  try {
    fetchIt(url, fetchOptions, callback, altFetch);
  } catch (e) {
    if (!reqOptions || Object.keys(reqOptions).length === 0 || !e.message || e.message.indexOf("not implemented") < 0) {
      return callback(e);
    }
    try {
      Object.keys(reqOptions).forEach(function(opt) {
        delete fetchOptions[opt];
      });
      fetchIt(url, fetchOptions, callback, altFetch);
      omitFetchOptions = true;
    } catch (err) {
      callback(err);
    }
  }
};
var requestWithXmlHttpRequest = function requestWithXmlHttpRequest2(options, url, payload, callback) {
  if (payload && _typeof$1(payload) === "object") {
    payload = addQueryString("", payload).slice(1);
  }
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  try {
    var x = XmlHttpRequestApi ? new XmlHttpRequestApi() : new ActiveXObjectApi("MSXML2.XMLHTTP.3.0");
    x.open(payload ? "POST" : "GET", url, 1);
    if (!options.crossDomain) {
      x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    }
    x.withCredentials = !!options.withCredentials;
    if (payload) {
      x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (x.overrideMimeType) {
      x.overrideMimeType("application/json");
    }
    var h = options.customHeaders;
    h = typeof h === "function" ? h() : h;
    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }
    x.onreadystatechange = function() {
      x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
        status: x.status,
        data: x.responseText
      });
    };
    x.send(payload);
  } catch (e) {
    console && console.log(e);
  }
};
var request = function request2(options, url, payload, callback) {
  if (typeof payload === "function") {
    callback = payload;
    payload = void 0;
  }
  callback = callback || function() {
  };
  if (fetchApi && url.indexOf("file:") !== 0) {
    return requestWithFetch(options, url, payload, callback);
  }
  if (hasXMLHttpRequest() || typeof ActiveXObject === "function") {
    return requestWithXmlHttpRequest(options, url, payload, callback);
  }
  callback(new Error("No fetch and no xhr implementation found!"));
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r2) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r2) {
  for (var t2 = 0; t2 < r2.length; t2++) {
    var o = r2[t2];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r2, t2) {
  return r2 && _defineProperties(e.prototype, r2), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _defineProperty(e, r2, t2) {
  return (r2 = _toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r2] = t2, e;
}
function _toPropertyKey(t2) {
  var i = _toPrimitive(t2, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t2, r2);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t2);
}
var getDefaults = function getDefaults2() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function parse(data) {
      return JSON.parse(data);
    },
    stringify: JSON.stringify,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return _defineProperty({}, key, fallbackValue || "");
    },
    parseLoadPayload: function parseLoadPayload(languages, namespaces) {
      return void 0;
    },
    request,
    reloadInterval: typeof window !== "undefined" ? false : 60 * 60 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
};
var Backend = (function() {
  function Backend2(services) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck(this, Backend2);
    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = "backend";
    this.init(services, options, allOptions);
  }
  return _createClass(Backend2, [{
    key: "init",
    value: function init(services) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = services;
      this.options = _objectSpread(_objectSpread(_objectSpread({}, getDefaults()), this.options || {}), options);
      this.allOptions = allOptions;
      if (this.services && this.options.reloadInterval) {
        var timer2 = setInterval(function() {
          return _this.reload();
        }, this.options.reloadInterval);
        if (_typeof(timer2) === "object" && typeof timer2.unref === "function") timer2.unref();
      }
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages, namespaces, callback) {
      this._readAny(languages, languages, namespaces, namespaces, callback);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      this._readAny([language], language, [namespace], namespace, callback);
    }
  }, {
    key: "_readAny",
    value: function _readAny(languages, loadUrlLanguages, namespaces, loadUrlNamespaces, callback) {
      var _this2 = this;
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === "function") {
        loadPath = this.options.loadPath(languages, namespaces);
      }
      loadPath = makePromise(loadPath);
      loadPath.then(function(resolvedLoadPath) {
        if (!resolvedLoadPath) return callback(null, {});
        var url = _this2.services.interpolator.interpolate(resolvedLoadPath, {
          lng: languages.join("+"),
          ns: namespaces.join("+")
        });
        _this2.loadUrl(url, callback, loadUrlLanguages, loadUrlNamespaces);
      });
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback, languages, namespaces) {
      var _this3 = this;
      var lng = typeof languages === "string" ? [languages] : languages;
      var ns = typeof namespaces === "string" ? [namespaces] : namespaces;
      var payload = this.options.parseLoadPayload(lng, ns);
      this.options.request(this.options, url, payload, function(err, res) {
        if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback("failed loading " + url + "; status code: " + res.status, true);
        if (res && res.status >= 400 && res.status < 500) return callback("failed loading " + url + "; status code: " + res.status, false);
        if (!res && err && err.message) {
          var errorMessage = err.message.toLowerCase();
          var isNetworkError = ["failed", "fetch", "network", "load"].find(function(term) {
            return errorMessage.indexOf(term) > -1;
          });
          if (isNetworkError) {
            return callback("failed loading " + url + ": " + err.message, true);
          }
        }
        if (err) return callback(err, false);
        var ret, parseErr;
        try {
          if (typeof res.data === "string") {
            ret = _this3.options.parse(res.data, languages, namespaces);
          } else {
            ret = res.data;
          }
        } catch (e) {
          parseErr = "failed parsing " + url + " to json";
        }
        if (parseErr) return callback(parseErr, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create2(languages, namespace, key, fallbackValue, callback) {
      var _this4 = this;
      if (!this.options.addPath) return;
      if (typeof languages === "string") languages = [languages];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      var finished = 0;
      var dataArray = [];
      var resArray = [];
      languages.forEach(function(lng) {
        var addPath = _this4.options.addPath;
        if (typeof _this4.options.addPath === "function") {
          addPath = _this4.options.addPath(lng, namespace);
        }
        var url = _this4.services.interpolator.interpolate(addPath, {
          lng,
          ns: namespace
        });
        _this4.options.request(_this4.options, url, payload, function(data, res) {
          finished += 1;
          dataArray.push(data);
          resArray.push(res);
          if (finished === languages.length) {
            if (typeof callback === "function") callback(dataArray, resArray);
          }
        });
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this5 = this;
      var _this$services = this.services, backendConnector = _this$services.backendConnector, languageUtils = _this$services.languageUtils, logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === "cimode") return;
      var toLoad = [];
      var append = function append2(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function(l) {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      append(currentLanguage);
      if (this.allOptions.preload) this.allOptions.preload.forEach(function(l) {
        return append(l);
      });
      toLoad.forEach(function(lng) {
        _this5.allOptions.ns.forEach(function(ns) {
          backendConnector.read(lng, ns, "read", null, null, function(err, data) {
            if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);
})();
Backend.type = "backend";
var resourcesToBackend = function resourcesToBackend2(res) {
  return {
    type: "backend",
    init: function init(services, backendOptions, i18nextOptions) {
    },
    read: function read(language, namespace, callback) {
      if (typeof res === "function") {
        if (res.length < 3) {
          try {
            var r2 = res(language, namespace);
            if (r2 && typeof r2.then === "function") {
              r2.then(function(data) {
                return callback(null, data && data.default || data);
              }).catch(callback);
            } else {
              callback(null, r2);
            }
          } catch (err) {
            callback(err);
          }
          return;
        }
        res(language, namespace, callback);
        return;
      }
      callback(null, res && res[language] && res[language][namespace]);
    }
  };
};
const LANGUAGES = [
  { name: "English", code: "en", display: "English - EN" },
  { name: "Español", code: "es", display: "Español - ES - Traducción" },
  { name: "Deutsch", code: "de", display: "Deutsch - DE - Übersetzung" },
  { name: "한국어", code: "ko", display: "한국어 - KO - 번역" },
  { name: "中文 (简体)", code: "zh-CN", display: "中文 (简体) - ZH - 翻译" },
  { name: "中文 (繁體)", code: "zh-TW", display: "中文 (繁體) - ZH - 翻譯" },
  { name: "Français", code: "fr", display: "Français - FR - Traduction" },
  { name: "日本語", code: "ja", display: "日本語 - JA - 翻訳" },
  { name: "Русский", code: "ru", display: "Русский - RU - Перевод" },
  { name: "Türkçe", code: "tr", display: "Türkçe - TR - Çeviri" },
  { name: "Tiếng Việt", code: "vi", display: "Tiếng Việt - VI - Dịch" },
  { name: "ไทย", code: "th", display: "ไทย - TH - แปล" },
  { name: "Filipino", code: "fil", display: "Filipino - FIL - Pagsasalin" },
  { name: "Indonesia", code: "id", display: "Indonesia - ID - Terjemahan" },
  { name: "हिन्दी", code: "hi", display: "हिन्दी - HI - अनुवाद" },
  { name: "বাংলা", code: "bn", display: "বাংলা - BN - অনুবাদ" }
];
const FALLBACK_LANGUAGE_MAP = {
  "zh-Hans": ["zh-CN", "en"],
  "zh-SG": ["zh-CN", "en"],
  "zh-MY": ["zh-CN", "en"],
  "zh-Hant": ["zh-TW", "en"],
  "zh-HK": ["zh-TW", "en"],
  "zh-MO": ["zh-TW", "en"],
  default: ["en"]
};
const BACCARAT = { "BETTING_STATISTICS": "Betting statistics", "CLASSIC": "Classic", "GAME_SPECIFICS": "Game Specifics", "IMMERSIVE": "Immersive", "LOADING_APPLYING_MAKEUP": "Applying make-up...", "LOADING_DEALER_REFRESHING": "Dealer refreshing...", "LOADING_READING_RULES": "Reading the rules...", "LOADING_VACUUMING_STUDIO": "Vacuuming the studio...", "LOADING_WATERING_PLANTS": "Watering the plants...", "LOADING_WAXING_TABLE": "Waxing the table...", "PLAYER_BETTING_ACTIVITY_FOR_EACH_BET_SPOT": "Player betting activity for each bet spot", "PREPARING_DEALER": "Preparing the dealer...", "SCORECARDS": "Scorecards", "SHOW_ALL_SIDE_BETS": "Show all side bets", "SHUFFLING_CARDS": "Shuffling cards..." };
const COMMON = { "ADVANCED": "Advanced", "ALL_SOUNDS": "All sounds", "AUTOPLAY": "Autoplay", "AUTOPLAY_FINISHED": "Auto-Play Finished", "AUTOPLAY_PROMPT1": "Would you like to continue Autoplay with your bet changes", "AUTOPLAY_PROMPT2": "To activate Autoplay place a bet", "AUTOPLAY_PROMPT3": "Autoplay will automatically repeat your last bet", "AUTOPLAY_PROMPT4": "Do you want to continue auto-play", "AUTOPLAY_RULE": "Roulette is a classic casino game where players bet on where a ball will land on a spinning wheel. The game offers various betting options and payouts, providing excitement and strategic opportunities for players.", "BALANCE": "Balance", "BANNED": "YOU ARE BANNED", "BANNED_TIP": "Dear Players, apologies for inconveniences. The table is closed for now. There are other ones where you can join and play", "BET": "BET", "BET_CHANGED": "Bet changed", "BET_LIMITS": "Bet Limits", "BETTING_GRID": "Betting grid", "BETTING_MODES": "Betting modes", "BET_TYPE": "Bet Type", "BET_TYPES": "Bet Types", "CHAT": "Chat", "CHAT_DISABLED": "CHAT DISABLED", "CHAT_DISABLED_TIP": "Your chat privileges are disabled, please top-up balance or place a bet", "CLOSE": "Close", "COLD": "Cold", "COMING_SOON": "Coming soon", "CONFIRM": "Confirm", "CONTINUE": "Continue", "DATE": "DATE", "DEALER": "DEALER", "DEALERS_VOICE": "Dealer's voice", "DISCONNECTION_POLICY": "Disconnection policy", "DOUBLE": "Double", "ENTER_SCREEN_NAME": "ENTER YOUR SCREEN NAME", "ERROR_HANDLING": "Error Handling", "ERROR_MAX_20": "Maximum 20 characters", "ERROR_MIN_3": "Minimum 3 characters", "ERROR_SYMBOLS": "Special symbols not allowed", "EVEN": "Even", "EXIT": "Exit game", "EXPAND_CHAT": "Expand chat", "FIRST_BETS": "First place your bets", "FULL_SCREEN": "Full screen", "GAME": "GAME", "GAME_CANCELED": "Game Canceled", "GAME_HISTORY": "Game History", "GAME_NUMBER": "Game number", "GAME_PAUSED": "Game paused briefly. Stand by.", "GAME_PRESENTER": "Game Presenter", "GAME_RESOLVED": "Game resolved", "GAME_RESULT": "Game Result", "GAME_SETTINGS": "Game Settings", "GAME_SOUNDS": "Game sounds", "GAMES_RULES": "Game Rules", "GAME_STATISTICS": "Game Statistics", "GENERAL": "GENERAL", "HELP": "Help", "HELP_RULES": "Help & Rules", "HISTORY": "History", "HISTORY_EMPTY1": "No games played yet!", "HISTORY_EMPTY2": "Start playing to see your game history here.", "HISTORY_EMPTY3": "Your recent games and bets will be displayed for easy tracking and review.", "HOT": "Hot", "HOT_COLD": "Hot/Cold", "INACTIVITY": "Game paused due to inactivity", "INTRODUCTION": "Introduction", "KEEP_AUTOPLAY": "Keep Autoplay", "LANGUAGE": "Language", "LAST_500": "Last 500", "LAST_WIN": "Last win", "LEFT": "left", "LESS_VOLUME_SETTINGS": "Less volume settings", "LIVE_CHAT": "LIVE CHAT", "LIVE_ROULETTE": "LIVE ROULETTE", "LIVE_SICBO": "AUTO SIC BO", "LOBBY": "Lobby", "LOW_BALANCE1": "Low balance", "LOW_BALANCE2": "Balance is too low. Deposit funds to play.", "MAKE_BET": "Make bet", "MASTER_VOLUME": "Master volume", "MAX_LIMIT_REACHED": "Max limit reached", "MAX_PAYOUT": "MAX PAYOUT {{currencySymbol}}{{amount}} PLUS PLAYER WINNING BET", "MAX_WIN": "MAX WIN", "MAX_WIN_REACHED": "You've reached the maximum win of {{currencySymbol}}{{amount}}", "MINIMIZE": "Minimize", "MODE_DEFAULT": "Default", "MODE_DEFAULT_TIP": "Put bets on numbers", "MODE_FULL_COMPLETE": "Full complete", "MODE_STRAIGHT": "Straight-up", "MODE_STRAIGHT_TIP": "Features 38 numbered slots, including 0", "MORE_VOLUME_SETTINGS": "More volume settings", "MUTE": "Mute", "NEXT_GAME_SOON": "Wait for next round", "NO_BET": "Place a bet to activate Autoplay", "NO_HISTORY": "Place a bet", "NO_MORE_BET": "NO MORE BETS", "NO_ROLL_SITUATIONS": "No Roll Situations", "ODD": "Odd", "OPPOSITE_BETTING_RESTRICTED": "Opposite betting is restricted.", "PAYOUTS": "Payouts", "PAYOUTS_LIMITS": "Payouts & Limits", "PAYTABLE": "Paytable", "PLACE_A_BET": "Place a bet", "PLACE_BET": "PLACE YOUR BETS", "PLACING_BETS": "Placing bets", "PLAYER_MESSAGES": "Player messages", "PLAYER_MESSAGES_TIP": "Show other players' messages in the chat", "RACETRACK": "Racetrack", "RACETRACK_BETS": "Racetrack Bets", "RECONNECTING": "Reconnecting", "REFRESH": "Refresh", "REJOIN_TIP": "Refresh the page to re-join the game on this device", "REPEAT": "Repeat", "REPEAT_AUTOMATICALLY": "Repeat your bets automatically", "RESULT": "RESULT", "RESUME_PLAY": "Resume", "RETURN_TO_PLAYER": "Return To Player", "ROTATE_ME_PLEASE": "Rotate me please", "ROUND_CANCELLED": "Round is cancelled by Service Manager. Bets are cancelled", "ROUND_one": "Round", "ROUND_other": "Rounds", "SAFARI_HINT1": "BEFORE WE START", "SAFARI_HINT2": "Enhance your experience by hiding Toolbar", "SCREEN_NAME": "SCREEN NAME", "SCREEN_NAME_TIP1": "Screen name can't contain special characters", "SCREEN_NAME_TIP2": "Min/Max characters display (3-15 characters)", "SCREEN_NAME_UPDATED": "Screen name updated", "SESSION_EXPIRED": "Your session has expired", "SETTING": "Setting", "SETTINGS": "Settings", "SKIP": "Skip", "SOUND": "Sound", "STATISTICS": "Statistics", "STOP": "Stop", "STOP_AUTOPLAY": "Stop Autoplay", "STUDIO_SOUNDS": "Studio sounds", "SUPPORT": "Support", "SWITCH": "Switch", "TABLE_CLOSED": "TABLE CLOSED", "TABLE_CLOSED_TIP1": "Dear Players, apologies for inconveniences.", "TABLE_CLOSED_TIP2": "The table is closed for now. There are other ones where you can join and play", "TABLE_MAINTENANCE": "Maintenance ongoing. Please choose another table", "TOGGLE_SOUNDS": "Toggle to enable or disable all sounds.", "TOTAL": "Total", "TOTAL_BET": "Total Bet", "TURNED_OFF": "TURNED OFF", "TURNED_ON": "TURNED ON", "UNDO": "Undo", "VIDEO": "Video", "VIDEO_AUTO": "Auto", "VIDEO_HD": "HD", "VIDEO_HIGH": "High", "VIDEO_LOW": "Low", "VIDEO_MEDIUM": "Medium", "VOLUME": "Volume", "WINNING_NUMBER": "WINNING NUMBER", "WINNING_NUMBERS": "Winning Numbers", "YOUR_MESSAGE": "YOUR MESSAGE...", "YOU_WIN": "YOU WIN" };
const ROULETTE = { "BETTING_MODE": "Betting mode", "BET_TYPES": "Bet Types", "BLACK": "Black", "COLUMN": "Column", "CORNER": "Corner", "DOZEN": "Dozen", "FLIP_PHONE": "Flip your phone to continue playing", "LOADING_CHECKING_HORIZON": "Checking horizon level...", "LOADING_LIGHTING_LIGHT": "Lighting the light...", "LOADING_POLISHING_BALL": "Polishing the ball...", "LOADING_POWERING_CAMERA": "Powering the camera...", "LOADING_SLAM_DUNKING": "Slam dunking the ball...", "LOADING_SPIN_TO_WIN": "Spin to win...", "LOADING_STARTING_ENGINES": "Starting the engines...", "LOADING_WAXING_WHEEL": "Waxing the wheel...", "LOADING_YOUR_TURN": "It's your turn...", "NUMBER_OF_ROUNDS": "Number Of Rounds", "RED": "Red", "SIX_LINE": "Six line", "SPLIT": "Split", "STRAIGHT_UP": "Straight up", "STREET": "Street" };
const ROULETTE_RULES = /* @__PURE__ */ JSON.parse('{"AUTOPLAY":"<h3>Autoplay</h3><p>The Autoplay feature allows you to automatically repeat your previous bets for a chosen number of game rounds. To use Autoplay, you must have placed a bet in the current or a previous game round. To initiate Autoplay, click the AUTOPLAY button and select the number of rounds you wish to play automatically.</p><p>Once Autoplay is activated, the remaining number of rounds will be displayed on the Autoplay button. Autoplay will continue until either the selected number of rounds is completed or you choose to stop it by clicking the STOP button.</p><p>Please note:</p><ul><li>If you modify your bets while Autoplay is running, Autoplay will stop.</li><li>Exiting the game will stop Autoplay, but any bets already placed will remain active for the next round</li></ul><p>The total Autoplay bet amount is calculated by multiplying your total bet per round by the number of Autoplay rounds selected.</p>","BET_TYPES":"<h3>Bet Types</h3>\\n<p>Roulette offers various betting options, each with its own payout rate. These are divided into Inside Bets and Outside Bets.</p><p>Inside Bets are placed on the numbered grid and include:</p><ul><li>Straight Up (single number),</li><li>Split (two adjacent numbers),</li><li>Street (three numbers in a row),</li><li>Corner (four adjoining numbers),</li><li>Line (six numbers across two rows).</li></ul><p>Outside Bets are placed around the main grid and cover larger groups of numbers.</p><p>These include:</p><ul><li>Red/Black,</li><li>Even/Odd,</li><li>Column and Dozen (each covering 12 numbers),</li><li>and 1-18/19-36 (each covering 18 numbers).</li></ul><p>Note that zero is not included in Outside Bets.</p><p>The Straight Up bet offers the highest payout, while Outside Bets have lower payouts but better odds of winning.</p>","CHAT":"<h3>Chat</h3><p>The Chat feature allows communication between players and the game presenter. To use it, enter your message in the chat field and press Enter or the arrow button to send.</p><p>Players are expected to maintain respectful communication. Abusive behavior, offensive language, or inappropriate content may result in warnings or chat privileges being revoked. If you disagree with any moderation decision, contact Casino support for assistance.</p><p>Please note, that chat functionality is available for players with balance that is higher than minimum bet at the particular game. Players with 0 balance are not allowed to chat with game presenters</p>","DISCONNECTION_POLICY":"<h3>Disconnection policy</h3><p>If you experience a disconnection during an active game round, any bets you\'ve placed will be handled accordingly. If you place a bet and become disconnected before the betting period ends, your bet will be returned to your account. However, if your bet is accepted because the betting time has ended before you disconnect, your bet remains valid and will be settled according to the game outcome. Upon reconnecting, you can check the results of your bets by accessing the History window, which displays the outcomes of any rounds played during your absence.</p>","ERROR_HANDLING":"<h3>Error Handling</h3><p>In the event of a game, system, or procedural error, the current round will be temporarily suspended. Players will be notified via a pop-up message or chat that the issue is under investigation. If the error can be promptly resolved, the game will resume normally. However, if an immediate solution isn\'t possible, the round will be cancelled and all initial bets refunded to participants.</p><p>Additionally, for a round to be considered valid, the ball must complete at least three full revolutions on the wheel. If it fails to do so, the round will be declared invalid.</p>","GAME_HISTORY":"<h3>Game History</h3><p>The Game History feature allows you to review your past gameplay in a comprehensive and intuitive manner. Games are organized by date, with the most recent at the top, and you can navigate between dates using arrow buttons. By selecting a specific date, you can filter games by type and view detailed information for each game round, including time, total bet, and results. Tapping on a specific game provides an in-depth breakdown of the bets placed and their outcomes.</p><p>The feature also includes a \\"Report Problem\\" option to flag any issues with specific games. Your balance and total bet information remain visible throughout your history navigation, helping you track your betting patterns and verify game outcomes efficiently.</p>","GAME_RULES":"<h3>Game Rules</h3><p>The goal in Roulette is to correctly guess where the ball will land by placing wagers on specific numbers or groups of numbers. The wheel features numbers from 0 to 36. Betting closes before the ball is released. Once it settles in a pocket, the winning number is announced and successful bets are paid.</p><p>Players can make multiple bets per round using the inner and outer betting areas. Winning occurs when your bet covers the final resting place of the ball, with payouts depending on the type of bet placed.</p>","PAYOUTS":"<h3>Payouts</h3><p>Roulette winnings are determined by the type of bet placed on the table.</p><table><thead><tr><th>Bet Type</th><th>Payout</th></tr></thead><tbody><tr><td>Straight Up</td><td>35:1</td></tr><tr><td>Split</td><td>17:1</td></tr><tr><td>Street</td><td>11:1</td></tr><tr><td>Corner</td><td>8:1</td></tr><tr><td>Line</td><td>5:1</td></tr><tr><td>Column</td><td>2:1</td></tr><tr><td>Dozen</td><td>2:1</td></tr><tr><td>Red/Black</td><td>1:1</td></tr><tr><td>Even/Odd</td><td>1:1</td></tr><tr><td>1-18/19-36</td><td>1:1</td></tr></tbody></table><p>Any malfunction or technical issue voids all bets and results.</p>","PLACING_BETS":"<h3>Placing bets</h3><p>The Bet Limits panel displays the minimum and maximum bet amounts allowed at the table. These limits may change periodically, so it\'s advisable to check your current limits regularly. To participate in the game, ensure you have sufficient funds in your account to cover your intended bets. Your current balance is visible on the screen.</p><p>To place a bet, first select your desired chip value from the Chip Display. Only chip denominations that your current balance can cover will be available. Once you\'ve chosen a chip, click or tap on the appropriate betting area on the table. Each click increases your bet by the selected chip value, up to the maximum limit for that bet type.</p><p>The Double (2x) button becomes available after you\'ve placed a bet. Clicking this button doubles all your current bets, up to the maximum limit. Ensure you have sufficient funds to cover doubling all your bets before using this feature. The Repeat button allows you to replicate all bets from the previous game round. This option is only available before placing your first chip in the current round.If you need to adjust your bets, the Undo button removes the last bet you placed. You can click this button repeatedly to remove bets one by one, in reverse order of placement. To clear all your bets at once, simply hold down the Undo button.</p><p>The Total Bet indicator shows the cumulative amount of all bets placed in the current round. If you attempt to place a bet that exceeds your total balance, the game will notify you to adjust your bet.</p>","RACETRACK_BETS":"<h3>Racetrack Bets</h3><p>Neighbor bets are special wagers in Roulette that cover a specific number and its adjacent numbers on the wheel. These bets are placed using the racetrack, an oval-shaped betting area that represents the wheel\'s layout. To access the racetrack, click the RACETRACK button. This feature allows for more intuitive placement of complex bets based on wheel positions rather than the standard table layout.</p><h4>Tiers du Cylindre</h4><p>This bet covers 12 numbers on the opposite side of the wheel from zero. It requires 6 chips, placed as follows:</p><ul><li>5/8 split</li><li>10/11 split</li><li>13/16 split</li><li>23/24 split</li><li>27/30 split</li><li>33/36 split</li></ul><p>This bet effectively covers about one-third of the wheel, excluding the zero section.</p><h4>Orphelins a Cheval</h4><p>This bet covers 8 numbers in two separate sections of the wheel not included in other announced bets. It uses 5 chips:</p><ul><li>1 (straight up)</li><li>6/9 split</li><li>14/17 split</li><li>17/20 split</li><li>31/34 split</li></ul><p>This bet covers the \\"orphaned\\" numbers not included in Voisins or Tiers bets.</p><h4>Voisins du Zero</h4><p>Covering 17 numbers around zero, this bet uses 9 chips:</p><ul><li>2 chips on 0/2/3 street</li><li>4/7 split</li><li>12/15 split</li><li>18/21 split</li><li>19/22 split</li><li>2 chips on 25/26/28/29 corner</li><li>32/35 split</li></ul><p>This bet covers nearly half the wheel, including zero and its neighbors.</p><h4>Jeu Zero</h4><p>This bet focuses on 7 numbers close to zero, using 4 chips:</p><ul><li>0/3 split</li><li>12/15 split</li><li>26 (straight up)</li><li>32/35 split</li></ul><p>It\'s a smaller version of Voisins du Zero, concentrating on the immediate area around zero.</p><p>To place a neighbor bet, select a number on the racetrack. This automatically bets on the chosen number and its immediate neighbors on both sides. Use the + and - buttons to adjust the number of neighbors included, allowing for customized coverage of wheel sections.</p>","RETURN_TO_PLAYER":"<h3>Return To Player</h3><p>The theoretical Return to Player (RTP) for this Roulette game is 97.30%.</p>","STATISTICS":"<h3>Statistics</h3><p>The Statistics feature displays outcomes from up to 500 recent game rounds. Access it by clicking the STATISTICS button and use the slider to adjust the number of past results shown. Hovering over areas in the statistics diagram highlights corresponding bet positions on the table. To place a bet based on these statistics, simply click or tap the highlighted area.</p>","WINNING_NUMBERS":"<h3>Winning Numbers</h3><p>The Winning Numbers panel displays recent game outcomes. The leftmost number represents the most recent round\'s result</p>"}');
const SICBO = { "ANY_TRIPLE": "Any triple", "BIG": "Big", "EACH_DOUBLE": "Each double", "EACH_TRIPLE": "Each triple", "LOADING_FORTUNE_AWAITS": "Fortune awaits the roll...", "LOADING_PLACE_LUCKY_BETS": "Place your lucky bets soon...", "LOADING_PREPARING_ROLL": "Preparing the roll...", "LOADING_SECURING_DICE_DOME": "Securing the dice dome...", "LOSE_ON_ANY_TRIPLE": "Lose on any triple", "ON_DOUBLE": "on double", "ON_SINGLE": "on single", "ON_TRIPLE": "on triple", "POLISHING_THE_PRECIOUS_DICE": "Polishing the precious dice...", "PREPARING_THE_SHAKE": "Preparing the shaker...", "SIDE_BETS_LOSE_ON": "Side bets lose on", "SINGLE": "Single", "SMALL": "Small", "SPECIFIC_TRIPLE": "Specific triple", "TRIPLE": "Triple", "TWO_DICE": "Two dice", "TWO_DICE_COMBO": "Two dice combo", "VOIDS_OTHER_SIDEBETS": "any triple" };
const SICBO_RULES = { "AUTOPLAY": '<h3>Autoplay</h3><p>The Autoplay feature automatically repeats your last bet for 5, 10, 25, or 100 rounds. To begin, place a bet and then select a round count in the AUTOPLAY menu. The remaining rounds are displayed, and you can stop Autoplay anytime—this takes effect after the current round finishes.</p><ul><li>Placing Additional Bets during an active Autoplay session triggers a prompt: "Your auto-play will be updated according to this bet."</li><li>Stop ends Autoplay after the current round.</li><li>Update applies your new bet for all remaining Autoplay rounds.</li></ul><p>Balance updates occur after each round as usual. If you leave the game or refresh, Autoplay ends, but any bet for the current round remains valid.</p>', "BET_TYPES": "<h3>Bet Types</h3><strong>Small/Big</strong><p>A Small bet wins if the total of the three dice is between 4 and 10, while a Big bet wins if the total is between 11 and 17. Both lose when the result is any triple, meaning all three dice show the same number.</p><strong>Odd/Even</strong><p>This bet predicts whether the total will be odd or even. If all three dice form a triple, this bet automatically loses. The Odd range excludes triples that happen to be odd, and the Even range excludes even triples.</p><strong>Double</strong><p>Placing a Double bet means you're wagering that exactly two of the three dice will show the same face. If all three dice match, the Double bet still pays at the same rate since the condition of having at least two matching dice is satisfied.</p><strong>Specific Triple</strong><p>A Specific Triple bet focuses on one exact triple, such as three 2s or three 5s. You win only if all three dice match the specific number you chose. It's among the highest-paying bets due to its lower probability.</p><strong>Any Triple</strong><p>Any Triple covers all six possible triples at once. You win if the three dice match any single number (e.g., three 1s, three 2s, etc.), offering a broader but still relatively rare outcome.</p><strong>Three Dice Total</strong><p>This wager is placed on one of the totals from 4 to 17. Each total offers a unique payout based on its likelihood, with less frequent totals having higher payouts.</p><strong>Two Dice Combo</strong><p>A Two Dice Combo bet covers any two distinct numbers (such as 3 and 6) appearing among the three dice. It doesn't matter which dice show these two faces, as long as both appear somewhere in the final roll.</p><strong>Single</strong><p>A Single bet is placed on one of the six faces (1, 2, 3, 4, 5, or 6). If your chosen number appears once, you receive a standard payout; if it appears twice or three times, you earn higher rewards.</p>", "CHAT": "<h3>Chat</h3><p>The Chat feature lets you communicate with other players and the game presenter. Enter your message in the chat field and press Enter or the arrow button to send. Keep discussion respectful; offensive or abusive language may result in chat privileges being revoked.</p>", "DISCONNECTION_POLICY": "<h3>Disconnection policy</h3><p>If disconnected mid-round, any accepted bets remain valid and are settled normally. If your bet was not accepted before disconnection, it will be refunded. You can review outcomes in the History window upon reconnection.</p>", "ERROR_HANDLING": "<h3>Error Handling</h3><p>If a game, system, or procedural error occurs, the round is suspended. Players are notified via pop-up or chat. If the issue can't be resolved promptly, the round is cancelled and all bets are refunded.</p>", "GAME_HISTORY": '<h3>Game History</h3><p>Game History is accessed by clicking the GAME HISTORY button. Rounds are sorted by date, with the most recent at the top. Each entry displays the game type, date, total bet, and result. Selecting an entry shows additional details such as the time the game resolved, the game number, the winning number if applicable, the bets placed, and whether the game was canceled. A "Report Problem" option is also available if you encounter issues. If no rounds have been played, a prompt to place a bet appears.</p>', "GAME_RESULT": "<h3>Game Result</h3><p>A graphical representation of the winning dice face values will be shown on your screen. The amount of your winnings will be displayed below.</p><p>The Winner List is displayed at the end of the game round and will show the nicknames of all the players who won at the current table in the last game round.</p>", "GAME_RULES": "<h3>Game Rules</h3><p>Players select a chip value and place it on any of the 52 available bet spots before the dice roll begins. Each bet spot follows its own payout structure. Once betting time ends, the dice are revealed, and the result determines all winning bets.</p><p>If opposing bets (such as Small vs Big or Odd vs Even) are not permitted simultaneously, the system will block one when the other is placed and players will be informed by displaying tooltip message.</p>", "GAME_STATISTICS": "<h3>Game Statistics</h3><p>The Statistics window provides a wide range of game round details and may help you in deciding which betting options to choose to bet on in future game rounds.</p><p>Game statistics help players quickly assess the history of the game, identify trends, and attempt to predict future results. Game displays last 15 game rounds of Small, Big, Triple, Odds and Even statistics.</p><p>Roadmaps are pictorial representations of game round results and trends distributed on a grid.</p><p>In the Small/Big tab, each result for Small (S), Big (B), and Triple (T) is represented as a separate circle. In the Odd/Even tab, the results Odd (O), Even (E), and Triple (T) are shown in the same fashion as on the Small/Big roadmap. Statistics of up to 500 most recent game rounds are displayed on the charts.</p><p>In the Chart tab, you can see the percentage representation of all six numerical values and values of Small, Big, Triple, Odd, and Even results.</p>", "INTRODUCTION": "<h3>Introduction</h3><p>Sic Bo is a fast-paced dice game played with three six-sided dice inside an automated Dice Shaker. The goal is to predict the outcome of the dice roll by placing bets on various possible results. Once bets close, the Dice Shaker determines the outcome, and winning bets are paid accordingly.</p>", "NO_ROLL_SITUATIONS": '<h3>No Roll Situations</h3><p>If the roll is invalid, it will be considered a "No roll" event. A "No roll" occurs under the following conditions:</p><ul><li>The dice shaker shakes for less than 3 seconds.</li><li>One or more dice are stuck on the edge or on top of each other.</li><li>A mechanical malfunction affects the dice shaker or any of the dice.</li></ul><p>In the event of a "No roll," a re-roll will be initiated according to standard operating procedures. Your bets will remain in place until a valid roll is completed.</p>', "PAYOUTS": "<h3>Payouts</h3><table><thead><tr><th>Bet Type</th><th>Payout</th></tr></thead><tbody><tr><td>Small/Big</td><td>1:1</td></tr><tr><td>Odd/Even</td><td>1:1</td></tr><tr><td>Double</td><td>12:1</td></tr><tr><td>Specific Triple</td><td>210:1</td></tr><tr><td>Any Triple</td><td>34:1</td></tr><tr><td>Total 4 or 17</td><td>70:1</td></tr><tr><td>Total 5 or 16</td><td>34:1</td></tr><tr><td>Total 6 or 15</td><td>20:1</td></tr><tr><td>Total 7 or 14</td><td>13:1</td></tr><tr><td>Total 8 or 13</td><td>9:1</td></tr><tr><td>Total 9 or 12</td><td>7:1</td></tr><tr><td>Total 10 or 11</td><td>6:1</td></tr><tr><td>Two Dice Combo</td><td>6:1</td></tr><tr><td>Single</td></tr><tr><td>On Single</td><td>1:1</td></tr><tr><td>On Double</td><td>2:1</td></tr><tr><td>On Triple</td><td>15:1</td></tr></tbody></table>", "PLACING_BETS": "<h3>Placing bets</h3><p>The Bet Limits panel shows the minimum and maximum bet amounts allowed at the table. To participate, ensure you have sufficient funds in your account. Your current balance is always displayed on-screen.</p><ul><li>1. Select a chip value from the Chip Display (only denominations covered by your balance are available).</li><li>2. Click or tap on the desired bet area on the table. Each click increases your bet by the selected chip value, up to the maximum limit.</li><li>3. Click the Double (2x) button to double all current bets (funds permitting).</li><li>4. Click the Repeat button to replicate all bets from the previous round (only available before placing any new bets).</li><li>5. Undo removes the last bet; holding Undo clears all bets at once.</li><li>6. The Total Bet indicator shows the sum of all current bets.</li></ul><p>If you exceed your balance, the game will prompt you to adjust your bet.</p>", "RETURN_TO_PLAYER": "<h3>Return To Player</h3><table><thead><tr><th>Bet</th><th>Return To Player</th></tr></thead><tbody><tr><td>Small/Big</td><td>97.22%</td></tr><tr><td>Odd/Even</td><td>97.22%</td></tr><tr><td>Double</td><td>96.30%</td></tr><tr><td>Specific Triple</td><td>97.69%</td></tr><tr><td>Any Triple</td><td>97.22%</td></tr><tr><td>Three Dice Total</td></tr><tr><td>Total 4 or 17</td><td>98.61%</td></tr><tr><td>Total 5 or 16</td><td>97.22%</td></tr><tr><td>Total 6 or 15</td><td>97.22%</td></tr><tr><td>Total 7 or 14</td><td>97.22%</td></tr><tr><td>Total 8 or 13</td><td>97.22%</td></tr><tr><td>Total 9 or 12</td><td>92.59%</td></tr><tr><td>Total 10 or 11</td><td>87.50%</td></tr><tr><td>Two Dice Combo</td><td>97.22%</td></tr><tr><td>Single</td><td>97.69%</td></tr></tbody></table>", "SUPPORT": "<h3>Support</h3><p>If you need additional help or have any questions, click the SUPPORT button to open a dedicated chat window with our support team. Describe your problem and the live support agent will assist you as soon as possible.</p>", "WINNING_NUMBERS": "<h3>Winning Numbers</h3><p>The Winning Numbers panel displays recent game outcomes. The leftmost number represents the most recent round's result</p>" };
const SYSTEM_MESSAGE = { "GENERAL_ERROR": "Issue detected", "GENERAL_ERROR_RESPIN": "Issue detected. Respinning ball", "SHUFFLE": "Deck shuffled", "SICBO_INVALID_RESULT": "Incorrect roll. Shaking again" };
const fallbackJson = {
  BACCARAT,
  COMMON,
  ROULETTE,
  ROULETTE_RULES,
  SICBO,
  SICBO_RULES,
  SYSTEM_MESSAGE
};
const resources = {
  en: { translation: fallbackJson }
};
const tolgeeTranslated = "https://i18lg.iki-utl.cc/react-live-roulette/translated/{{lng}}.json";
const httpBackendConfig = {
  loadPath: tolgeeTranslated,
  crossDomain: true
};
instance.on("loaded", (loaded) => {
  if (Object.keys(loaded).length !== 0) {
    useLoadingStore.getState().decrementResources(LoadingResourceEnum.i18n);
  }
});
instance.on("failedLoading", (lng, ns, msg) => {
  console.warn("Failed loading ".concat(lng, " ").concat(ns, ": ").concat(msg));
  useLoadingStore.getState().decrementResources(LoadingResourceEnum.i18n);
});
instance.use(Browser).use(Backend$1).use(initReactI18next).init({
  fallbackLng: FALLBACK_LANGUAGE_MAP,
  load: "currentOnly",
  debug: isEnvDev,
  interpolation: {
    escapeValue: false
    // react already safes from xss
  },
  backend: {
    // HTTP -> Fallback
    // See: https://www.i18next.com/how-to/caching and https://www.i18next.com/how-to/backend-fallback
    backends: [Backend, resourcesToBackend(resources)],
    backendOptions: [httpBackendConfig, {}]
  }
});
const bankerResult = "" + new URL("baccaratBankerResult-D-qiCZGA.webp", import.meta.url).href;
const playerResult = "" + new URL("baccaratPlayerResult-rXpM-xoA.webp", import.meta.url).href;
const tieResult = "" + new URL("baccaratTieResult-CP2O6dxX.webp", import.meta.url).href;
const SvgRankA = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 21 28", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M15.4169 27.9985L13.9595 22.2808H6.79239L5.37518 27.9985H0L7.93054 0H12.8608L20.8323 27.9985H15.4169ZM12.8455 17.8731L10.4333 8.05646L7.94807 17.8731H12.8455Z", fill: "currentColor" }));
const ForwardRef$g = reactExports.forwardRef(SvgRankA);
const Memo$g = reactExports.memo(ForwardRef$g);
const SvgRankEight = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17 30", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M8.53275 29.1573C6.36894 29.1573 4.38265 28.3797 2.9406 26.9689C1.40431 25.466 0.59198 23.3856 0.59198 20.9529C0.59198 19.4678 0.950662 18.027 1.62859 16.7871C2.18743 15.7658 2.93988 14.9318 3.77194 14.4073C2.02746 13.1895 0.916327 10.8868 0.916327 8.4355C0.916327 6.155 1.72064 4.19252 3.24231 2.7589C4.64711 1.43534 6.526 0.707092 8.53348 0.707092C10.541 0.707092 12.4198 1.43605 13.8246 2.7589C15.3463 4.19252 16.1506 6.15571 16.1506 8.4355C16.1506 10.8868 15.0395 13.1895 13.295 14.4073C14.1263 14.9318 14.8795 15.7658 15.4384 16.7871C16.1163 18.027 16.475 19.4678 16.475 20.9529C16.475 23.3856 15.6626 25.466 14.1264 26.9689C12.6836 28.3804 10.6973 29.1573 8.53421 29.1573H8.53275ZM8.53275 16.6006C6.64873 16.6006 5.66252 18.6509 5.66252 20.6763C5.66252 23.099 6.84305 24.7914 8.53275 24.7914C10.2224 24.7914 11.403 23.099 11.403 20.6763C11.403 18.6509 10.4168 16.6006 8.53275 16.6006ZM8.53275 5.11301C7.03372 5.11301 5.94596 6.64383 5.94596 8.75281C5.94596 10.8618 7.03372 12.4719 8.53275 12.4719C10.0318 12.4719 11.1195 10.9075 11.1195 8.75281C11.1195 6.59809 10.0318 5.11301 8.53275 5.11301Z", fill: "currentColor" }));
const ForwardRef$f = reactExports.forwardRef(SvgRankEight);
const Memo$f = reactExports.memo(ForwardRef$f);
const SvgRankFive = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 30", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M8.13316 29.159C6.16505 29.159 4.31372 28.4463 2.92132 27.1528C1.46718 25.8024 0.602129 23.9419 0.419154 21.7742L0.400558 21.5527H5.42645L5.45472 21.7251C5.78199 23.7068 6.64108 24.7117 8.00893 24.7117C9.64232 24.7117 10.4367 23.0784 10.4367 19.7182C10.4367 14.7608 9.13951 14.1246 8.00893 14.1246C7.02562 14.1246 6.33613 14.7147 5.77158 16.0377L5.71801 16.1639H1.11983V0.800537H14.6928V5.56819H6.15836V10.5746C6.9572 9.79336 8.00746 9.39731 9.2868 9.39731C11.179 9.39731 12.7671 10.3229 13.8776 12.0737C15.0037 13.849 15.5995 16.4366 15.5995 19.5581C15.5995 22.6795 14.968 25.0103 13.7236 26.6421C12.4494 28.3121 10.5684 29.159 8.13241 29.159H8.13316Z", fill: "currentColor" }));
const ForwardRef$e = reactExports.forwardRef(SvgRankFive);
const Memo$e = reactExports.memo(ForwardRef$e);
const SvgRankFour = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 29", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M10.4332 29V24.7965H0.545914V21.3595L8.39186 0.902771H13.3937L6.05779 20.507H10.4332V12.908H15.2214V20.507H17.4541V24.7965H15.2214V29H10.4332Z", fill: "currentColor" }));
const ForwardRef$d = reactExports.forwardRef(SvgRankFour);
const Memo$d = reactExports.memo(ForwardRef$d);
const SvgRankJ = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17 30", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M8.03715 29.1314C6.01725 29.1314 4.25889 28.5723 2.95272 27.514C1.22942 26.1188 0.242479 23.8681 0.0196704 20.8246L0.00360107 20.6038L4.46417 20.6413L4.49265 20.8109C4.50288 20.87 4.51311 20.9335 4.52334 21.0013C4.71547 22.1967 5.11433 24.684 7.93999 24.684C9.93723 24.684 11.0937 23.5334 11.0937 17.6512V0.772888H16.2051V17.6512C16.2051 21.7559 15.4797 24.6739 13.9887 26.5726C12.6358 28.2945 10.6889 29.1314 8.03788 29.1314H8.03715Z", fill: "currentColor" }));
const ForwardRef$c = reactExports.forwardRef(SvgRankJ);
const Memo$c = reactExports.memo(ForwardRef$c);
const SvgRankK = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 29", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M13.7393 28.799L7.98743 16.7648L5.17961 21.5715V28.799H0V0.800537H5.17961V13.2127L12.2728 0.800537H18.0935L11.443 12.0506L19.4963 28.799H13.7393Z", fill: "currentColor" }));
const ForwardRef$b = reactExports.forwardRef(SvgRankK);
const Memo$b = reactExports.memo(ForwardRef$b);
const SvgRankNine = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17 29", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M4.34921 29L9.04153 17.5425C8.51329 17.7397 7.94679 17.8297 7.267 17.8297C3.54508 17.8297 0.737648 14.2433 0.737648 9.48726C0.737648 6.80408 1.53294 4.55419 3.03672 2.98013C4.4375 1.51403 6.41801 0.706482 8.61261 0.706482C10.8072 0.706482 12.8378 1.49387 14.2422 2.92327C15.7644 4.47214 16.5685 6.71412 16.5685 9.40737C16.5685 11.5896 15.6011 14.2238 14.5549 16.7444L9.73382 28.9993H4.34848L4.34921 29ZM8.61261 5.14437C7.71873 5.14437 7.0257 5.52007 6.5519 6.25996C6.08915 6.9833 5.8449 8.05786 5.8449 9.36778C5.8449 12.0524 6.85354 13.5919 8.61334 13.5919C9.54107 13.5919 10.2591 13.2112 10.7461 12.4598C11.2148 11.7372 11.4627 10.6676 11.4627 9.36778C11.4627 7.79012 11.0927 5.14365 8.61261 5.14365V5.14437Z", fill: "currentColor" }));
const ForwardRef$a = reactExports.forwardRef(SvgRankNine);
const Memo$a = reactExports.memo(ForwardRef$a);
const SvgRankQ = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 21 31", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M14.6388 27.9705C13.2989 28.8826 11.6748 29.3455 9.80784 29.3455C3.9309 29.3455 0.694473 24.8515 0.694473 16.6917V13.1577C0.694473 4.99781 3.9309 0.503845 9.80784 0.503845C15.6848 0.503845 18.9212 4.99781 18.9212 13.1577V16.6917C18.9212 19.9533 18.4097 22.6426 17.4 24.6893L20.3055 27.1018L17.4955 30.3424L14.6395 27.9705H14.6388ZM9.80784 4.92971C6.32046 4.92971 5.87334 9.3266 5.87334 13.1569V16.691C5.87334 23.9836 7.97569 24.9182 9.80784 24.9182C10.1676 24.9182 10.5022 24.8747 10.8072 24.7878L7.79062 22.2825L10.6007 19.0419L13.3344 21.3124C13.6083 20.1011 13.7416 18.5848 13.7416 16.691V13.1569C13.7416 5.8643 11.6392 4.92971 9.8071 4.92971H9.80784Z", fill: "currentColor" }));
const ForwardRef$9 = reactExports.forwardRef(SvgRankQ);
const Memo$9 = reactExports.memo(ForwardRef$9);
const SvgRankSeven = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 15 28", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M2.52253 27.9985L9.32536 4.44736L-0.00714493 4.44158V0H14.555V3.79017L7.78569 27.9985H2.52253Z", fill: "currentColor" }));
const ForwardRef$8 = reactExports.forwardRef(SvgRankSeven);
const Memo$8 = reactExports.memo(ForwardRef$8);
const SvgRankSix = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 30", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M7.92483 29.1589C5.71501 29.1589 3.72945 28.3697 2.33488 26.937C0.823432 25.3846 0.0249634 23.1375 0.0249634 20.438C0.0249634 18.2508 0.985608 15.6105 2.02441 13.0842L6.81152 0.801147H12.1589L7.49966 12.2849C8.02418 12.0873 8.58667 11.9971 9.26167 11.9971C12.9574 11.9971 15.7451 15.5918 15.7451 20.3587C15.7451 23.048 14.9554 25.3031 13.4622 26.8808C12.0713 28.3502 10.1047 29.1596 7.92556 29.1596L7.92483 29.1589ZM7.92483 16.2439C7.00365 16.2439 6.29066 16.6255 5.80705 17.3786C5.34171 18.1029 5.09551 19.1749 5.09551 20.4777C5.09551 22.059 5.46298 24.7115 7.92556 24.7115C8.81315 24.7115 9.50128 24.335 9.97174 23.5934C10.4312 22.8684 10.6738 21.7914 10.6738 20.4784C10.6738 17.7877 9.67224 16.2446 7.92483 16.2446V16.2439Z", fill: "currentColor" }));
const ForwardRef$7 = reactExports.forwardRef(SvgRankSix);
const Memo$7 = reactExports.memo(ForwardRef$7);
const SvgRankTen = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 23 29", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M14.4289 29C12.2252 29 10.3271 28.2686 8.93985 26.8853C7.39865 25.3482 6.58444 23.0478 6.58444 20.2337V8.76629C6.58444 5.95225 7.39865 3.6525 8.93985 2.11472C10.3264 0.731374 12.2245 0 14.4289 0C16.6334 0 18.5308 0.731374 19.9181 2.11472C21.4593 3.65177 22.2735 5.95225 22.2735 8.76629V20.2337C22.2735 23.0478 21.4593 25.3475 19.9181 26.8853C18.5315 28.2686 16.6334 29 14.4289 29ZM14.4289 4.45089C13.2454 4.45089 11.6712 4.92366 11.6712 9.00887V19.9911C11.6712 24.0763 13.2447 24.5491 14.4289 24.5491C15.6132 24.5491 17.1867 24.0763 17.1867 19.9911V9.00887C17.1867 4.92366 15.6132 4.45089 14.4289 4.45089ZM0.0243684 28.6365V2.15843L5.11114 0.0662899V28.6365H0.0243684Z", fill: "currentColor" }));
const ForwardRef$6 = reactExports.forwardRef(SvgRankTen);
const Memo$6 = reactExports.memo(ForwardRef$6);
const SvgRankThree = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17 30", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M8.93349 29.1573C6.57609 29.1573 4.58835 28.4011 3.18648 26.9704C1.8562 25.6139 1.09792 23.7144 0.993453 21.4767L0.983215 21.2652H5.63519L5.65711 21.4439C5.92667 23.6386 6.93333 24.7513 8.65005 24.7513C9.47189 24.7513 10.1578 24.3869 10.6349 23.6965C11.1083 23.0111 11.3588 22.0485 11.3588 20.9136C11.3588 18.1042 10.2572 16.6799 8.0839 16.6799H6.21668V12.3133H8.0839C9.93358 12.3133 10.9943 10.8997 10.9943 8.43621C10.9943 6.433 9.94746 5.0344 8.4477 5.0344C6.52789 5.0344 6.083 7.26202 5.98146 8.21967L5.96246 8.40119H1.30977L1.3178 8.19108C1.39816 6.01278 2.16739 4.13606 3.54297 2.76319C4.87178 1.43748 6.68641 0.707092 8.65079 0.707092C10.6152 0.707092 12.5963 1.4968 13.9697 2.92971C15.3212 4.34046 16.0656 6.25362 16.0656 8.31686C16.0656 11.7151 14.1699 13.6097 13.115 14.4008C15.2562 15.7272 16.4301 18.0685 16.4301 21.0322C16.4301 23.262 15.7441 25.2895 14.4986 26.7424C13.1449 28.3218 11.2208 29.1573 8.93422 29.1573H8.93349Z", fill: "currentColor" }));
const ForwardRef$5 = reactExports.forwardRef(SvgRankThree);
const Memo$5 = reactExports.memo(ForwardRef$5);
const SvgRankTwo = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 29", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M1.07398 28.8006V25.2873L8.76272 14.2236C10.1566 12.1589 10.7512 10.4744 10.7512 8.59344C10.7512 6.43014 9.75183 5.03297 8.20459 5.03297C6.65734 5.03297 5.72957 6.33438 5.6178 8.60344L5.60831 8.7964H0.952698V8.59415C0.952698 6.35224 1.7373 4.32045 3.16181 2.87325C4.53738 1.47607 6.40022 0.707092 8.40769 0.707092C12.7039 0.707092 15.8225 4.05745 15.8225 8.67348C15.8225 12.2404 13.8282 15.1677 12.5081 17.1044L7.4609 24.4347H15.539V28.8014H1.07469L1.07398 28.8006Z", fill: "currentColor" }));
const ForwardRef$4 = reactExports.forwardRef(SvgRankTwo);
const Memo$4 = reactExports.memo(ForwardRef$4);
const RANK_CONFIG = {
  [CardRank.A]: { Component: Memo$g, width: 1.3125, height: 1.75 },
  [CardRank.K]: { Component: Memo$b, width: 1.25, height: 1.8125 },
  [CardRank.Q]: { Component: Memo$9, width: 1.3125, height: 1.9375 },
  [CardRank.J]: { Component: Memo$c, width: 1.0625, height: 1.875 },
  [CardRank.R10]: { Component: Memo$6, width: 1.4375, height: 1.8125 },
  [CardRank.R9]: { Component: Memo$a, width: 1.0625, height: 1.8125 },
  [CardRank.R8]: { Component: Memo$f, width: 1.0625, height: 1.875 },
  [CardRank.R7]: { Component: Memo$8, width: 0.9375, height: 1.75 },
  [CardRank.R6]: { Component: Memo$7, width: 1, height: 1.875 },
  [CardRank.R5]: { Component: Memo$e, width: 1, height: 1.875 },
  [CardRank.R4]: { Component: Memo$d, width: 1.125, height: 1.8125 },
  [CardRank.R3]: { Component: Memo$5, width: 1.0625, height: 1.875 },
  [CardRank.R2]: { Component: Memo$4, width: 1, height: 1.8125 }
};
function RankIcon({ rank, isRed = false, scaleFactor = 1 }) {
  const currentColor = isRed ? "text-[#CE2127]" : "text-[#000]";
  const config = RANK_CONFIG[rank];
  if (!config) return null;
  const { Component, width, height } = config;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      style: {
        "--scale-factor": scaleFactor,
        height: "calc(".concat(height, "rem*var(--scale-factor))"),
        width: "calc(".concat(width, "rem*var(--scale-factor))")
      },
      className: cn(currentColor)
    }
  );
}
const SvgClubs = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 23 23", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M18.3971 9.29771C16.0358 9.29771 15.4523 9.72365 13.4923 10.7719L13.4886 10.4959C13.4886 10.4959 16.7499 8.16407 16.7499 5.25457C16.7499 2.34506 14.3987 0 11.5 0C8.6013 0 6.25014 2.26537 6.25014 5.25457C6.25014 8.24376 9.5114 10.4959 9.5114 10.4959L9.50772 10.7719C7.54673 9.72365 6.96423 9.29771 4.60294 9.29771C2.08798 9.29771 0 11.3136 0 14.3028C0 17.292 2.35024 19.38 5.24986 19.38C6.30903 19.38 8.22493 18.6742 10.6424 16.5416C10.4261 19.5659 8.40622 20.6606 5.51396 22.02C5.3198 22.1111 5.27563 22.3967 5.43574 22.5465C5.84156 22.926 6.2621 23 6.2621 23C6.2621 23 8.86265 22.5987 11.5 22.5978C14.1374 22.5978 16.7379 23 16.7379 23C16.7379 23 17.1584 22.926 17.5643 22.5465C17.7253 22.3967 17.6802 22.1111 17.486 22.02C14.5947 20.6606 12.5739 19.5659 12.3576 16.5416C14.776 18.6751 16.691 19.38 17.7501 19.38C20.6498 19.38 23 17.291 23 14.3028C23 11.3145 20.912 9.29866 18.3971 9.29866V9.29771Z", fill: "currentColor" }));
const ForwardRef$3 = reactExports.forwardRef(SvgClubs);
const Memo$3 = reactExports.memo(ForwardRef$3);
const SvgDiamonds = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 23 24", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M16.8424 6.4273C14.8887 4.38993 13.1101 2.24208 11.5 0C9.88987 2.23883 8.11131 4.38993 6.15759 6.4273C4.20387 8.46466 2.14572 10.3233 0 12C2.14572 13.6799 4.20723 15.5353 6.15759 17.5727C8.11131 19.6101 9.88987 21.7579 11.5 24C13.1101 21.7612 14.8887 19.6101 16.8424 17.5727C18.7961 15.5353 20.8543 13.6767 23 12C20.8543 10.3201 18.7928 8.46466 16.8424 6.4273Z", fill: "currentColor" }));
const ForwardRef$2 = reactExports.forwardRef(SvgDiamonds);
const Memo$2 = reactExports.memo(ForwardRef$2);
const SvgHearts = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 23 21", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M17.634 0.034081C14.0801 -0.312406 11.9477 2.06103 11.5 3.61329C11.0523 2.06103 8.91995 -0.312406 5.36596 0.034081C2.14346 0.345919 0.0486612 2.65352 0.000819107 6.17729C-0.1017 13.5886 9.44963 16.267 11.5 21C13.5504 16.267 23.1017 13.5886 22.9992 6.17729C22.9513 2.65352 20.8565 0.345919 17.634 0.034081Z", fill: "currentColor" }));
const ForwardRef$1 = reactExports.forwardRef(SvgHearts);
const Memo$1 = reactExports.memo(ForwardRef$1);
const SvgSpades = (props, ref) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 23", fill: "none", ref, ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M16.8671 18.7265C19.949 18.447 22.0708 16.3858 21.9982 13.2383C21.8492 6.79508 15.2727 4.26626 10.9995 0C6.7273 4.26626 0.150838 6.79508 0.00180731 13.2383C-0.0707975 16.3858 2.05098 18.447 5.13286 18.7265C7.43902 18.9354 9.11944 18.0265 10.0948 16.9882C9.8111 19.7603 7.73613 20.7913 4.78513 22.0657C4.58355 22.1525 4.5377 22.4248 4.70392 22.5677C5.12522 22.9295 5.56181 23 5.56181 23C5.56181 23 8.26156 22.6174 10.9995 22.6165C13.7375 22.6165 16.4372 23 16.4372 23C16.4372 23 16.8738 22.9295 17.2951 22.5677C17.4623 22.4248 17.4155 22.1525 17.2139 22.0657C14.2639 20.7923 12.1879 19.7612 11.9052 16.9891C12.8815 18.0283 14.561 18.9363 16.8671 18.7265Z", fill: "currentColor" }));
const ForwardRef = reactExports.forwardRef(SvgSpades);
const Memo = reactExports.memo(ForwardRef);
const SUIT_CONFIG = {
  [CardSuit.HEART]: { Component: Memo$1, width: 1.4375, height: 1.3125, colorClass: "text-[#CE2127]" },
  [CardSuit.DIAMOND]: { Component: Memo$2, width: 1.4375, height: 1.5, colorClass: "text-[#CE2127]" },
  [CardSuit.SPADE]: { Component: Memo, width: 1.375, height: 1.4375, colorClass: "text-[#000]" },
  [CardSuit.CLUB]: { Component: Memo$3, width: 1.4375, height: 1.4375, colorClass: "text-[#000]" }
};
function SuitIcon({ suit, scaleFactor = 1 }) {
  const config = SUIT_CONFIG[suit];
  if (!config) return null;
  const { Component, width, height, colorClass } = config;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      style: {
        "--scale-factor": scaleFactor,
        height: "calc(".concat(height, "rem*var(--scale-factor))"),
        width: "calc(".concat(width, "rem*var(--scale-factor))")
      },
      className: cn(colorClass)
    }
  );
}
const MOTION_CONFIG = {
  "top-board": {
    up: {
      initial: { opacity: 0, y: "50%" },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: "easeInOut" },
      exit: { opacity: 0 }
    },
    left: {
      initial: { opacity: 0, x: "-50%" },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.4, ease: "easeInOut" },
      exit: { opacity: 0 }
    },
    right: {
      initial: { opacity: 0, x: "50%" },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.4, ease: "easeInOut" },
      exit: { opacity: 0 }
    }
  },
  history: {
    up: {
      initial: false
    },
    left: {
      initial: false
    },
    right: {
      initial: false
    }
  }
};
function MiniCard(props) {
  const { suit, rank, status, isVisible = true, fadeInOutDirection, orientation, className, scaleFactor = 1 } = props;
  const isRed = suit === CardSuit.HEART || suit === CardSuit.DIAMOND;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "MiniCard",
      className,
      style: { "--scale-factor": scaleFactor },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isVisible ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...MOTION_CONFIG[status][fadeInOutDirection], children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "relative rounded-[calc(0.1875rem*var(--scale-factor))] bg-white",
            orientation === "vertical" && "aspect-[45/62] h-[calc(3.875rem*var(--scale-factor))] w-[calc(2.8125rem*var(--scale-factor))]",
            orientation === "horizontal" && "aspect-[62/45] h-[calc(2.8125rem*var(--scale-factor))] w-[calc(3.875rem*var(--scale-factor))]",
            status === "history" && "historyDropShadow",
            status === "top-board" && "topBoardDropShadow"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "absolute top-[calc(0.25rem*var(--scale-factor))]",
                  orientation === "vertical" && "left-[calc(0.25rem*var(--scale-factor))]",
                  orientation === "horizontal" && "right-[calc(0.25rem*var(--scale-factor))] origin-top-right translate-y-full rotate-90"
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-[calc(1.8125rem*var(--scale-factor))] flex-shrink-0 items-start justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  RankIcon,
                  {
                    rank,
                    isRed,
                    scaleFactor
                  }
                ) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "absolute bottom-[calc(0.25rem*var(--scale-factor))]",
                  orientation === "vertical" && "right-[calc(0.25rem*var(--scale-factor))]",
                  orientation === "horizontal" && "left-[calc(0.25rem*var(--scale-factor))] origin-bottom-left -translate-y-full rotate-90"
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-[calc(1.5rem*var(--scale-factor))] flex-shrink-0 items-end justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SuitIcon,
                  {
                    suit,
                    scaleFactor
                  }
                ) })
              }
            )
          ]
        }
      ) }) : null })
    }
  );
}
const createBaccaratHand = (cards) => {
  const result = cards.map((card) => Card(card));
  return new BaccaratCards(result);
};
function WinNumberAreaTitle({ role, status }) {
  const title = role === "player" ? "Player" : "Banker";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "winNumberArea__title",
        "text-[0.75rem] font-medium uppercase leading-4 tracking-[0.03rem] text-[#eadfd2]",
        status === "win" && "text-white"
      ),
      children: title
    }
  );
}
function WinNumberAreaDigit({ status, digit, role }) {
  const digitContainerClasses = cn(
    "winNumberArea__digitContainer",
    role === "player" && status === "win" && "winNumberArea__digitContainer--playerWin",
    role === "player" && status === "lose" && "winNumberArea__digitContainer--playerLose",
    role === "banker" && status === "win" && "winNumberArea__digitContainer--bankerWin",
    role === "banker" && status === "lose" && "winNumberArea__digitContainer--bankerLose",
    status === "tie" && "winNumberArea__digitContainer--tie"
  );
  const digitTextClasses = cn(
    "winNumberArea__digitText",
    role === "player" && status === "win" && "winNumberArea__digitText--playerWin",
    role === "player" && status === "lose" && "winNumberArea__digitText--playerLose",
    role === "banker" && status === "win" && "winNumberArea__digitText--bankerWin",
    role === "banker" && status === "lose" && "winNumberArea__digitText--bankerLose",
    status === "tie" && "winNumberArea__digitText--tie"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: digitContainerClasses, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: digitTextClasses, children: digit }) });
}
function WinNumberArea({ role, status, digit, cards }) {
  const winNumberAreaClasses = cn(
    "winNumberArea",
    role === "player" && status === "win" && "winNumberArea--playerWin",
    role === "player" && status === "lose" && "winNumberArea--playerLose",
    role === "banker" && status === "win" && "winNumberArea--bankerWin",
    role === "banker" && status === "lose" && "winNumberArea--bankerLose",
    role === "player" && status === "tie" && "winNumberArea--playerTie",
    role === "banker" && status === "tie" && "winNumberArea--bankerTie"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: winNumberAreaClasses, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex h-[1.5rem] items-start justify-between", role === "banker" && "flex-row-reverse"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WinNumberAreaTitle,
        {
          role,
          status
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WinNumberAreaDigit,
        {
          role,
          status,
          digit
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HistoryCardGroup,
      {
        role,
        cards
      }
    )
  ] });
}
function HistoryCardGroup({ role, cards }) {
  const isThirdCard = (index) => index === cards.length - 1;
  const isVisibleCard = (card) => card.rank !== CardRank.UNKNOWN && card.suit !== CardSuit.UNKNOWN;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex h-[2.5625rem] flex-grow items-end justify-end gap-x-[0.30356rem]", role === "player" && "flex-row-reverse"), children: cards.map((card, index) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      MiniCard,
      {
        className: cn(!isVisibleCard(card) && "opacity-0"),
        status: "history",
        suit: card.suit,
        rank: card.rank,
        fadeInOutDirection: "up",
        orientation: isThirdCard(index) ? "horizontal" : "vertical",
        scaleFactor: 29.1 / 45
      },
      index
    );
  }) });
}
const RESULT_BADGE_CONFIG = {
  P: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: playerResult,
        alt: "Player Result"
      }
    )
  },
  B: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: bankerResult,
        alt: "Banker Result"
      }
    )
  },
  T: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: tieResult,
        alt: "Tie Result"
      }
    )
  }
};
function ResultBadge({ result }) {
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const config = RESULT_BADGE_CONFIG[result];
  if (!config) return null;
  const { icon } = config;
  const resultBadgeClasses = cn(
    "flex items-center justify-center size-[1.40625rem] shrink-0 aspect-square",
    isMobileDevice && isSmallDevice && "size-[1.17188rem]"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: resultBadgeClasses, children: icon });
}
function BaccaratWinNumberResult({ winNumber }) {
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const baccaratHand = createBaccaratHand(winNumber);
  const isPlayerWin = baccaratHand.isPlayerWin();
  const isBankerWin = baccaratHand.isBankerWin();
  const isTie = baccaratHand.isTie();
  const resultIcon = isTie ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResultBadge, { result: "T" }) : isPlayerWin ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResultBadge, { result: "P" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResultBadge, { result: "B" });
  const resultText = isTie ? "tie" : isPlayerWin ? "player win" : "banker win";
  const playerStatus = isTie ? "tie" : isPlayerWin ? "win" : "lose";
  const playerDigit = baccaratHand.sumPlayer();
  const bankerStatus = isTie ? "tie" : isBankerWin ? "win" : "lose";
  const bankerDigit = baccaratHand.sumBanker();
  const playerCards = baccaratHand.playerCards;
  const bankerCards = baccaratHand.bankerCards;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "BaccaratWinNumberResult", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("my-[2rem] h-[8.13rem] w-full", isMobileDevice && isSmallDevice && "my-4 h-[7.625rem]"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "h-[2.9375rem] rounded-tl-[0.75rem] rounded-tr-[0.75rem] border border-solid border-[#bf9e77] p-[0.75rem_1rem]",
          "winNumberResultHeader",
          isPlayerWin && "winNumberResultHeader--playerWin",
          isBankerWin && "winNumberResultHeader--bankerWin",
          isTie && "winNumberResultHeader--tie",
          isMobileDevice && isSmallDevice && "h-[2.4375rem] p-0"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex h-[1.5rem] items-center justify-center gap-x-[0.56rem]", isMobileDevice && isSmallDevice && "h-full"), children: [
          resultIcon,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "winNumberResultHeader__resultTitle",
                isMobileDevice && isSmallDevice && "winNumberResultHeader__resultTitle--sm"
              ),
              children: resultText
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex shrink-0 items-start self-stretch"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WinNumberArea,
        {
          role: "player",
          status: playerStatus,
          digit: playerDigit,
          cards: playerCards
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WinNumberArea,
        {
          role: "banker",
          status: bankerStatus,
          digit: bankerDigit,
          cards: bankerCards
        }
      )
    ] })
  ] }) });
}
const winGradient = "" + new URL("gradient-ClqwXeka.webp", import.meta.url).href;
const winShadow = "" + new URL("shadow-6M5iLbkL.webp", import.meta.url).href;
const winSide = "" + new URL("side-CmsQufZU.webp", import.meta.url).href;
const winWhiteball = "" + new URL("whiteball-D3rcdWXL.webp", import.meta.url).href;
function WinNumberResult$1({ winNumber }) {
  const color = getRouletteNumberColor(winNumber);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        cn("my-8 flex h-[8.625rem] flex-col items-center justify-end gap-[0.55rem] p-[1.2rem_4rem_0rem_4rem]", "g-winNumberFrame", color)
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t2("COMMON.WINNING_NUMBER") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[12.5rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WinNumber$1, { win: winNumber }) })
      ]
    }
  );
}
const WinNumber$1 = (props) => {
  const slots = findNeighborByRange(props.win, 2).map((item) => {
    return {
      num: item,
      color: getRouletteNumberColor(item)
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 200 92",
      fill: "none",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#win_number_filter_l1_".concat(slots[1].color, ")"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "url(#win_number_slot_l1_".concat(slots[1].color, ")"),
            d: "M84.312 65.15c-10.18 3.305-18.937 9.776-25.102 18.25L19.606 54.622C31.789 37.885 49.08 25.107 69.184 18.58l15.128 46.57Z"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#win_number_filter_r1_".concat(slots[3].color, ")"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "url(#win_number_slot_r_1_".concat(slots[3].color, ")"),
            d: "m180.063 54.627-39.604 28.772c-6.169-8.473-14.923-14.944-25.106-18.25l15.132-46.569c20.108 6.53 37.398 19.308 49.578 36.047Z"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#win_number_filter_r2_".concat(slots[4].color, ")"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "url(#win_number_slot_r_2_".concat(slots[4].color, ")"),
            d: "M198.996 112.916h-48.952a49.995 49.995 0 0 0-9.585-29.516l39.604-28.773c11.907 16.36 18.933 36.506 18.933 58.289Z"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#win_number_filter_l2_".concat(slots[0].color, ")"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "url(#win_number_slot_l_2_".concat(slots[0].color, ")"),
            d: "M59.21 83.4a49.975 49.975 0 0 0-9.589 29.515H.673c0-21.785 7.026-41.929 18.933-58.292L59.21 83.399Z"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#win_number_i)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "#2C2625",
            d: "M150.044 112.915h-24.978a25.119 25.119 0 0 0-4.817-14.83l20.21-14.686a49.995 49.995 0 0 1 9.585 29.516Z"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#win_number_j)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "#2C2625",
            d: "m140.459 83.4-20.211 14.685a25.274 25.274 0 0 0-12.614-9.171l7.719-23.765c10.183 3.306 18.937 9.777 25.106 18.25Z"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#win_number_k)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "#2C2625",
            d: "m115.354 65.15-7.72 23.764a25.153 25.153 0 0 0-7.801-1.231c-2.722 0-5.341.431-7.798 1.231l-7.72-23.764a50.095 50.095 0 0 1 15.518-2.446 50.12 50.12 0 0 1 15.521 2.446Z"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#win_number_l)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "#2C2625",
            d: "M92.035 88.914a25.241 25.241 0 0 0-12.615 9.17L59.21 83.4c6.166-8.473 14.922-14.944 25.102-18.25h.004l7.72 23.765Z"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#win_number_m)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "#2C2625",
            d: "M79.42 98.085a25.113 25.113 0 0 0-4.817 14.83H49.62a49.975 49.975 0 0 1 9.588-29.516L79.42 98.085Z"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#win_number_n)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fill: "url(#win_number_o)",
            d: "M94.017 68.667h13.675v13.675H94.017z",
            shapeRendering: "crispEdges"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            stroke: "#AF8E5E",
            strokeMiterlimit: 10,
            strokeWidth: 0.84,
            d: "M115.357 65.15c10.18 3.305 18.936 9.776 25.102 18.25l39.604-28.777c-12.183-16.738-29.474-29.516-49.578-36.043l-15.128 46.57ZM19.606 54.627 59.21 83.398c6.169-8.473 14.922-14.944 25.105-18.25L69.184 18.58c-20.108 6.53-37.398 19.308-49.578 36.047ZM.673 112.916h48.951A49.996 49.996 0 0 1 59.21 83.4L19.606 54.627C7.699 70.987.673 91.133.673 112.916Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            stroke: "#AF8E5E",
            strokeMiterlimit: 10,
            strokeWidth: 0.84,
            d: "M140.459 83.4a49.978 49.978 0 0 1 9.589 29.515h48.948c0-21.785-7.026-41.929-18.933-58.292l-39.604 28.776ZM49.624 112.915h24.979a25.113 25.113 0 0 1 4.817-14.83L59.21 83.399a49.996 49.996 0 0 0-9.586 29.516Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            stroke: "#AF8E5E",
            strokeMiterlimit: 10,
            strokeWidth: 0.84,
            d: "m59.21 83.4 20.21 14.685a25.278 25.278 0 0 1 12.615-9.171l-7.72-23.765C74.132 68.455 65.38 74.926 59.21 83.4Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            stroke: "#AF8E5E",
            strokeMiterlimit: 10,
            strokeWidth: 0.84,
            d: "m84.315 65.15 7.72 23.764c2.456-.8 5.08-1.231 7.801-1.231 2.722 0 5.341.431 7.798 1.231l7.719-23.764a50.095 50.095 0 0 0-15.517-2.446c-5.415 0-10.633.857-15.52 2.446Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            stroke: "#AF8E5E",
            strokeMiterlimit: 10,
            strokeWidth: 0.84,
            d: "M107.634 88.914a25.24 25.24 0 0 1 12.614 9.17L140.459 83.4c-6.166-8.473-14.923-14.944-25.102-18.25h-.004l-7.719 23.765Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            stroke: "#AF8E5E",
            strokeMiterlimit: 10,
            strokeWidth: 0.84,
            d: "M120.248 98.085a25.113 25.113 0 0 1 4.818 14.83h24.982a49.977 49.977 0 0 0-9.589-29.516l-20.211 14.686Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "100",
            y: "43",
            textAnchor: "middle",
            fill: "url(#win_text_r1)",
            fontSize: 24.679,
            fontWeight: 600,
            letterSpacing: 0.02,
            fontFamily: "Khand",
            transform: "rotate(45,100,96)",
            children: slots[3].num
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "100",
            y: "50",
            textAnchor: "middle",
            fill: "url(#win_text_r2)",
            fontSize: 24.679,
            fontWeight: 600,
            letterSpacing: 0.02,
            fontFamily: "Khand",
            transform: "rotate(65,100,120)",
            children: slots[4].num
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "100",
            y: "50",
            textAnchor: "middle",
            fill: "url(#win_text_l2)",
            fontSize: 24.679,
            fontWeight: 600,
            letterSpacing: 0.02,
            fontFamily: "Khand",
            transform: "rotate(295,100,120)",
            children: slots[0].num
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "100",
            y: "43",
            textAnchor: "middle",
            fill: "url(#win_text_l1)",
            fontSize: 24.679,
            fontWeight: 600,
            letterSpacing: 0.02,
            fontFamily: "Khand",
            transform: "rotate(315,100,96)",
            children: slots[1].num
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "image",
          {
            xlinkHref: winShadow,
            width: 119,
            height: 61,
            x: 40.5,
            y: 12.484
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { filter: "url(#win_number_p)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              fill: "url(#win_number_slot_center_".concat(slots[2].color, ")"),
              d: "m137.5 7.961-18.566 57.5a61.132 61.132 0 0 0-19.043-3.02 61.112 61.112 0 0 0-19.039 3.02h-.004l-18.562-57.5C74.13 4.093 86.767 2 99.891 2c13.124 0 25.766 2.093 37.609 5.961Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "image",
            {
              xlinkHref: winSide,
              width: 76,
              height: 64,
              x: 62,
              y: 0
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              stroke: "url(#win_number_s)",
              strokeWidth: 2.35,
              d: "m137.5 7.961-18.566 57.5a61.132 61.132 0 0 0-19.043-3.02 61.112 61.112 0 0 0-19.039 3.02h-.004l-18.562-57.5C74.13 4.093 86.767 2 99.891 2c13.124 0 25.766 2.093 37.609 5.961Z"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "mask",
          {
            id: "win_number_u",
            width: 76,
            height: 64,
            x: 62,
            y: 2,
            maskUnits: "userSpaceOnUse",
            style: { maskType: "alpha" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  stroke: "url(#win_number_t)",
                  strokeWidth: 1.175,
                  d: "M99.895 2.588c-12.855 0-25.245 2.018-36.87 5.751l18.206 56.383a61.748 61.748 0 0 1 18.664-2.868c6.502 0 12.77 1.003 18.664 2.87L136.76 8.339c-11.623-3.733-24.009-5.751-36.865-5.751Z"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  stroke: "#fff",
                  strokeWidth: 1.175,
                  d: "M99.895 2.588c-12.855 0-25.245 2.018-36.87 5.751l18.206 56.383a61.748 61.748 0 0 1 18.664-2.868c6.502 0 12.77 1.003 18.664 2.87L136.76 8.339c-11.623-3.733-24.009-5.751-36.865-5.751Z"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { mask: "url(#win_number_u)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "image",
          {
            xlinkHref: winGradient,
            width: 152,
            height: 128,
            x: 26,
            y: -45,
            className: "g-shinning"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "100",
            y: "50",
            textAnchor: "middle",
            fill: "url(#win_text_center)",
            fontSize: 50.443,
            fontWeight: 600,
            letterSpacing: 0.02,
            fontFamily: "Khand",
            children: slots[2].num
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_l1_red",
              width: 68.615,
              height: 68.728,
              x: 17.623,
              y: 17.352,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5804_7354",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: -0.349,
                    dy: -0.349
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.624 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.158584 0 0 0 0 0.0112415 0 0 0 0 0.0112415 0 0 0 0.39 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect2_innerShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: 1.047,
                    dy: 1.047
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.571 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.725821 0 0 0 0 0.182767 0 0 0 0 0.182767 0 0 0 0.48 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect2_innerShadow_5804_7354",
                    result: "effect3_innerShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 1.397 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 5.551 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.307709 0 0 0 0 0.0203909 0 0 0 0 0.0203909 0 0 0 0.45 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect3_innerShadow_5804_7354",
                    result: "effect4_innerShadow_5804_7354"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_l1_black",
              width: 65.822,
              height: 65.934,
              x: 21.019,
              y: 18.051,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feMorphology",
                  {
                    in: "SourceAlpha",
                    radius: 4,
                    result: "effect1_innerShadow_5891_45658"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 16.795 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect1_innerShadow_5891_45658"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_l1_green",
              width: 68.615,
              height: 68.727,
              x: 17.622,
              y: 17.353,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5936_48830"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5936_48830",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: -0.349,
                    dy: -0.349
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.624 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.158584 0 0 0 0 0.0112415 0 0 0 0 0.0112415 0 0 0 0.39 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect2_innerShadow_5936_48830"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: 1.047,
                    dy: 1.047
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.571 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.725821 0 0 0 0 0.182767 0 0 0 0 0.182767 0 0 0 0.48 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect2_innerShadow_5936_48830",
                    result: "effect3_innerShadow_5936_48830"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 1.397 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 5.551 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.307709 0 0 0 0 0.0203909 0 0 0 0 0.0203909 0 0 0 0.45 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect3_innerShadow_5936_48830",
                    result: "effect4_innerShadow_5936_48830"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_r1_red",
              width: 68.618,
              height: 68.728,
              x: 113.428,
              y: 17.352,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5804_7354",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: -0.349,
                    dy: -0.349
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.624 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.158584 0 0 0 0 0.0112415 0 0 0 0 0.0112415 0 0 0 0.39 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect2_innerShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: 1.047,
                    dy: 1.047
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.571 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.725821 0 0 0 0 0.182767 0 0 0 0 0.182767 0 0 0 0.48 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect2_innerShadow_5804_7354",
                    result: "effect3_innerShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 1.397 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 5.551 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.307709 0 0 0 0 0.0203909 0 0 0 0 0.0203909 0 0 0 0.45 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect3_innerShadow_5804_7354",
                    result: "effect4_innerShadow_5804_7354"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_r1_black",
              width: 65.825,
              height: 65.935,
              x: 116.824,
              y: 18.051,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feMorphology",
                  {
                    in: "SourceAlpha",
                    radius: 4,
                    result: "effect1_innerShadow_5804_31330"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 16.795 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect1_innerShadow_5804_31330"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_r1_green",
              width: 68.619,
              height: 68.727,
              x: 113.427,
              y: 17.353,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5936_53456"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5936_53456",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: -0.349,
                    dy: -0.349
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.624 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.158584 0 0 0 0 0.0112415 0 0 0 0 0.0112415 0 0 0 0.39 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect2_innerShadow_5936_53456"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: 1.047,
                    dy: 1.047
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.571 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.725821 0 0 0 0 0.182767 0 0 0 0 0.182767 0 0 0 0.48 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect2_innerShadow_5936_53456",
                    result: "effect3_innerShadow_5936_53456"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 1.397 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 5.551 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.307709 0 0 0 0 0.0203909 0 0 0 0 0.0203909 0 0 0 0.45 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect3_innerShadow_5936_53456",
                    result: "effect4_innerShadow_5936_53456"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_r2_black",
              width: 59.543,
              height: 59.295,
              x: 139.873,
              y: 54.041,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feMorphology",
                  {
                    in: "SourceAlpha",
                    radius: 4,
                    result: "effect1_innerShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 16.795 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect1_innerShadow_5804_7354"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_r2_red",
              width: 62.336,
              height: 62.088,
              x: 140.476,
              y: 53.343,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5804_31330"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5804_31330",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: -0.349,
                    dy: -0.349
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.624 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.158584 0 0 0 0 0.0112415 0 0 0 0 0.0112415 0 0 0 0.39 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect2_innerShadow_5804_31330"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: 1.047,
                    dy: 1.047
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.571 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.725821 0 0 0 0 0.182767 0 0 0 0 0.182767 0 0 0 0.48 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect2_innerShadow_5804_31330",
                    result: "effect3_innerShadow_5804_31330"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 1.397 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 5.551 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.307709 0 0 0 0 0.0203909 0 0 0 0 0.0203909 0 0 0 0.45 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect3_innerShadow_5804_31330",
                    result: "effect4_innerShadow_5804_31330"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_r2_green",
              width: 62.337,
              height: 62.088,
              x: 140.475,
              y: 53.342,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5936_48930"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5936_48930",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: -0.349,
                    dy: -0.349
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.624 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.158584 0 0 0 0 0.0112415 0 0 0 0 0.0112415 0 0 0 0.39 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect2_innerShadow_5936_48930"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: 1.047,
                    dy: 1.047
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.571 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.725821 0 0 0 0 0.182767 0 0 0 0 0.182767 0 0 0 0.48 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect2_innerShadow_5936_48930",
                    result: "effect3_innerShadow_5936_48930"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 1.397 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 5.551 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.307709 0 0 0 0 0.0203909 0 0 0 0 0.0203909 0 0 0 0.45 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect3_innerShadow_5936_48930",
                    result: "effect4_innerShadow_5936_48930"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_l2_black",
              width: 59.543,
              height: 59.298,
              x: 0.253,
              y: 54.037,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feMorphology",
                  {
                    in: "SourceAlpha",
                    radius: 4,
                    result: "effect1_innerShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 16.795 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect1_innerShadow_5804_7354"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_l2_red",
              width: 62.336,
              height: 62.091,
              x: 0.857,
              y: 53.339,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5804_31330"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5804_31330",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: -0.349,
                    dy: -0.349
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.624 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.158584 0 0 0 0 0.0112415 0 0 0 0 0.0112415 0 0 0 0.39 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect2_innerShadow_5804_31330"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: 1.047,
                    dy: 1.047
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.571 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.725821 0 0 0 0 0.182767 0 0 0 0 0.182767 0 0 0 0.48 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect2_innerShadow_5804_31330",
                    result: "effect3_innerShadow_5804_31330"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 1.397 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 5.551 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.307709 0 0 0 0 0.0203909 0 0 0 0 0.0203909 0 0 0 0.45 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect3_innerShadow_5804_31330",
                    result: "effect4_innerShadow_5804_31330"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_filter_l2_green",
              width: 62.337,
              height: 62.092,
              x: 0.856,
              y: 53.338,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5936_53576"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5936_53576",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: -0.349,
                    dy: -0.349
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.624 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.158584 0 0 0 0 0.0112415 0 0 0 0 0.0112415 0 0 0 0.39 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect2_innerShadow_5936_53576"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: 1.047,
                    dy: 1.047
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.571 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.725821 0 0 0 0 0.182767 0 0 0 0 0.182767 0 0 0 0.48 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect2_innerShadow_5936_53576",
                    result: "effect3_innerShadow_5936_53576"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 1.397 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 5.551 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.307709 0 0 0 0 0.0203909 0 0 0 0 0.0203909 0 0 0 0.45 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect3_innerShadow_5936_53576",
                    result: "effect4_innerShadow_5936_53576"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_i",
              width: 30.875,
              height: 33.298,
              x: 119.619,
              y: 82.77,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 2.702 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 2.702 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect1_innerShadow_5804_7354"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_j",
              width: 34.023,
              height: 36.834,
              x: 107.066,
              y: 64.582,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 2.702 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 2.702 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect1_innerShadow_5804_7354"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_k",
              width: 32.173,
              height: 29.931,
              x: 83.748,
              y: 62.254,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 2.702 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 2.702 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect1_innerShadow_5804_7354"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_l",
              width: 34.023,
              height: 36.717,
              x: 58.58,
              y: 64.699,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 2.702 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 2.702 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect1_innerShadow_5804_7354"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_m",
              width: 30.879,
              height: 33.298,
              x: 49.17,
              y: 82.77,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 2.702 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 2.702 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect1_innerShadow_5804_7354"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_n",
              width: 17.279,
              height: 17.278,
              x: 92.216,
              y: 67.766,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 0.901 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 0.901 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5804_7354",
                    result: "shape"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_p",
              width: 80.963,
              height: 68.913,
              x: 59.411,
              y: 0.127,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5804_7354",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: -0.349,
                    dy: -0.349
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.624 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.39 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect2_innerShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: 1.047,
                    dy: 1.047
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.571 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 1 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect2_innerShadow_5804_7354",
                    result: "effect3_innerShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 1.397 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 4.583 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.45 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect3_innerShadow_5804_7354",
                    result: "effect4_innerShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 4.924 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.45 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect4_innerShadow_5804_7354",
                    result: "effect5_innerShadow_5804_7354"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "filter",
            {
              id: "win_number_slot_r1_red",
              width: 68.618,
              height: 68.728,
              x: 113.428,
              y: 17.352,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feFlood",
                  {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 0.698 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5804_7354",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: -0.349,
                    dy: -0.349
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.624 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.158584 0 0 0 0 0.0112415 0 0 0 0 0.0112415 0 0 0 0.39 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "shape",
                    result: "effect2_innerShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feOffset",
                  {
                    dx: 1.047,
                    dy: 1.047
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 1.571 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.725821 0 0 0 0 0.182767 0 0 0 0 0.182767 0 0 0 0.48 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect2_innerShadow_5804_7354",
                    result: "effect3_innerShadow_5804_7354"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: 1.397 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: 5.551 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    k2: -1,
                    k3: 1,
                    operator: "arithmetic"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { values: "0 0 0 0 0.307709 0 0 0 0 0.0203909 0 0 0 0 0.0203909 0 0 0 0.45 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "feBlend",
                  {
                    in2: "effect3_innerShadow_5804_7354",
                    result: "effect4_innerShadow_5804_7354"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_l1_red",
              x1: 126.628,
              x2: 53.131,
              y1: 253.595,
              y2: -3.411,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#5F1111" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#811D1D"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_l1_black",
              x1: 126.628,
              x2: 53.131,
              y1: 253.595,
              y2: -3.411,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#2A2B35" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#18191E"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_l1_green",
              x1: 126.628,
              x2: 53.131,
              y1: 253.595,
              y2: -3.411,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#173723" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#347A4D"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_r_1_red",
              x1: 222.382,
              x2: 148.888,
              y1: 253.595,
              y2: -3.414,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#5F1111" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#811D1D"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_r_1_black",
              x1: 222.382,
              x2: 148.888,
              y1: 253.595,
              y2: -3.414,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#2A2B35" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#18191E"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_r_1_green",
              x1: 222.382,
              x2: 148.888,
              y1: 253.595,
              y2: -3.414,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#173723" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#347A4D"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_r_2_red",
              x1: 198.996,
              x2: 189.053,
              y1: 112.916,
              y2: 46.543,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#5F1111" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#811D1D"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_r_2_black",
              x1: 198.996,
              x2: 189.053,
              y1: 112.916,
              y2: 46.543,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#2A2B35" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#18191E"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_r_2_green",
              x1: 198.996,
              x2: 189.053,
              y1: 112.916,
              y2: 46.543,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#173723" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#347A4D"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_l_2_red",
              x1: 59.21,
              x2: 49.266,
              y1: 112.915,
              y2: 46.538,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#5F1111" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#811D1D"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_l_2_black",
              x1: 59.21,
              x2: 49.266,
              y1: 112.915,
              y2: 46.538,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#2A2B35" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#18191E"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_l_2_green",
              x1: 59.21,
              x2: 49.266,
              y1: 112.915,
              y2: 46.538,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#173723" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#347A4D"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_center_black",
              x1: 137.5,
              x2: 128.27,
              y1: 65.462,
              y2: -7.252,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#2A2B35" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.498,
                    stopColor: "#18191E"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_center_red",
              x1: 137.5,
              x2: 128.27,
              y1: 65.462,
              y2: -7.252,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#5F1111" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#811D1D"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_number_slot_center_green",
              x1: 137.5,
              x2: 128.27,
              y1: 65.462,
              y2: -7.252,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#173723" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#347A4D"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "radialGradient",
            {
              id: "win_number_s",
              cx: 0,
              cy: 0,
              r: 1,
              gradientTransform: "matrix(0 -39.9573 52.8846 0 99.893 33.73)",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#AF8E5E" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.101,
                    stopColor: "#AF8E5E"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.138,
                    stopColor: "#EDCEA2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.175,
                    stopColor: "#AF8E5E"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.655,
                    stopColor: "#493B27"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.828,
                    stopColor: "#AF8E5E"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.869,
                    stopColor: "#EDCEA2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.906,
                    stopColor: "#AF8E5E"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#AF8E5E"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "radialGradient",
            {
              id: "win_number_t",
              cx: 0,
              cy: 0,
              r: 1,
              gradientTransform: "rotate(-5.247 418.01 -1073.149) scale(57.8278 59.3373)",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 9e-3,
                    stopColor: "#1D1104"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.014,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.024,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.037,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.042,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.045,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.048,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.056,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.06,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.082,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.11,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.119,
                    stopColor: "#fff"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.124,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.132,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.16,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.165,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.169,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.171,
                    stopColor: "#673018"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.175,
                    stopColor: "#39230A"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.181,
                    stopColor: "#0F0800"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.186,
                    stopColor: "#39230A"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.188,
                    stopColor: "#673018"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.19,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.199,
                    stopColor: "#673018"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.202,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.206,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.212,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.224,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.238,
                    stopColor: "#FFC786"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.241,
                    stopColor: "#673018"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.257,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.274,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.277,
                    stopColor: "#FFC786"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.28,
                    stopColor: "#673018"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.29,
                    stopColor: "#FFC786"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.297,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.321,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.324,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.326,
                    stopColor: "#673018"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.329,
                    stopColor: "#39230A"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.342,
                    stopColor: "#0A0601"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.354,
                    stopColor: "#39230A"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.356,
                    stopColor: "#673018"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.359,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.362,
                    stopColor: "#FFC786"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.369,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.382,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.389,
                    stopColor: "#FFC786"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.397,
                    stopColor: "#673018"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.402,
                    stopColor: "#0A0601"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.418,
                    stopColor: "#0A0601"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.422,
                    stopColor: "#39230A"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.424,
                    stopColor: "#673018"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.427,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.432,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.453,
                    stopColor: "#FFC786"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.46,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.48,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.493,
                    stopColor: "#FFC786"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.543,
                    stopColor: "#39230A"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.55,
                    stopColor: "#FFE4BC"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.556,
                    stopColor: "#FFC786"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.567,
                    stopColor: "#F9E2C8"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.588,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.593,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.614,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.618,
                    stopColor: "#FFE4BC"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.625,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.648,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.669,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.678,
                    stopColor: "#39230A"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.691,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.694,
                    stopColor: "#FFE4BC"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.699,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.703,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.707,
                    stopColor: "#FFE4BC"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.734,
                    stopColor: "#FFE4BC"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.739,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.752,
                    stopColor: "#947046"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.767,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.771,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.792,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.819,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.839,
                    stopColor: "#1D1104"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.874,
                    stopColor: "#32200C"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.905,
                    stopColor: "#1D1104"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.908,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.91,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.924,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.927,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.93,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.96,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.964,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.979,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.982,
                    stopColor: "#E5B883"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.989,
                    stopColor: "#B68B59"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.992,
                    stopColor: "#1D1104"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.65,
                    stopColor: "#F9E2C8"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 0.986,
                    stopColor: "#FFEBD3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#452C0F"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_text_center",
              x1: 101.893,
              x2: 101.893,
              y1: 19.125,
              y2: 40.53,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#E5DDCB" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#D4C4AA"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_text_r1",
              x1: 148.102,
              x2: 144.335,
              y1: 50.014,
              y2: 54.775,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#CAC3AE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#AFA483"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_text_r2",
              x1: 175.732,
              x2: 169.958,
              y1: 88.646,
              y2: 90.522,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#CAC3AE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#AFA483"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_text_l2",
              x1: 27.077,
              x2: 32.877,
              y1: 87.537,
              y2: 89.332,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#CAC3AE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#AFA483"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "win_text_l1",
              x1: 54.364,
              x2: 58.194,
              y1: 48.88,
              y2: 53.591,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#CAC3AE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: 1,
                    stopColor: "#AFA483"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "pattern",
            {
              id: "win_number_o",
              width: 1,
              height: 1,
              patternContentUnits: "objectBoundingBox",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "use",
                {
                  xlinkHref: "#win_number_w",
                  transform: "matrix(.0007 0 0 .0007 -.167 -.167)"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "image",
            {
              id: "win_number_w",
              width: 1920,
              height: 1920,
              href: winWhiteball
            }
          )
        ] })
      ]
    }
  );
};
const chooseDomeType = (betResult) => {
  if (new Set(betResult).size === 1) {
    return "triple";
  }
  if (betResult.reduce((a, c) => a + c, 0) < 11) {
    return "small";
  }
  return "big";
};
const getSicBoNumberColor = (numbers) => {
  if (new Set(numbers).size === 1) return "green";
  const total = numbers.reduce((a, b) => a + b, 0);
  return total < 11 ? "blue" : "red";
};
const betTypeMap$1 = {
  [SicBoBetNo.SMALL]: "Small",
  [SicBoBetNo.BIG]: "Big",
  [SicBoBetNo.ODD]: "Odd",
  [SicBoBetNo.EVEN]: "Even",
  [SicBoBetNo.TOTAL_4]: "Total 4",
  [SicBoBetNo.TOTAL_5]: "Total 5",
  [SicBoBetNo.TOTAL_6]: "Total 6",
  [SicBoBetNo.TOTAL_7]: "Total 7",
  [SicBoBetNo.TOTAL_8]: "Total 8",
  [SicBoBetNo.TOTAL_9]: "Total 9",
  [SicBoBetNo.TOTAL_10]: "Total 10",
  [SicBoBetNo.TOTAL_11]: "Total 11",
  [SicBoBetNo.TOTAL_12]: "Total 12",
  [SicBoBetNo.TOTAL_13]: "Total 13",
  [SicBoBetNo.TOTAL_14]: "Total 14",
  [SicBoBetNo.TOTAL_15]: "Total 15",
  [SicBoBetNo.TOTAL_16]: "Total 16",
  [SicBoBetNo.TOTAL_17]: "Total 17",
  [SicBoBetNo.DOUBLE_1]: "Double 1",
  [SicBoBetNo.DOUBLE_2]: "Double 2",
  [SicBoBetNo.DOUBLE_3]: "Double 3",
  [SicBoBetNo.DOUBLE_4]: "Double 4",
  [SicBoBetNo.DOUBLE_5]: "Double 5",
  [SicBoBetNo.DOUBLE_6]: "Double 6",
  [SicBoBetNo.TRIPLE_1]: "Triple 1",
  [SicBoBetNo.TRIPLE_2]: "Triple 2",
  [SicBoBetNo.TRIPLE_3]: "Triple 3",
  [SicBoBetNo.TRIPLE_4]: "Triple 4",
  [SicBoBetNo.TRIPLE_5]: "Triple 5",
  [SicBoBetNo.TRIPLE_6]: "Triple 6",
  [SicBoBetNo.ANY_TRIPLE]: "Any Triple",
  [SicBoBetNo.COMBINATION_1_2]: "Combination 1-2",
  [SicBoBetNo.COMBINATION_1_3]: "Combination 1-3",
  [SicBoBetNo.COMBINATION_1_4]: "Combination 1-4",
  [SicBoBetNo.COMBINATION_1_5]: "Combination 1-5",
  [SicBoBetNo.COMBINATION_1_6]: "Combination 1-6",
  [SicBoBetNo.COMBINATION_2_3]: "Combination 2-3",
  [SicBoBetNo.COMBINATION_2_4]: "Combination 2-4",
  [SicBoBetNo.COMBINATION_2_5]: "Combination 2-5",
  [SicBoBetNo.COMBINATION_2_6]: "Combination 2-6",
  [SicBoBetNo.COMBINATION_3_4]: "Combination 3-4",
  [SicBoBetNo.COMBINATION_3_5]: "Combination 3-5",
  [SicBoBetNo.COMBINATION_3_6]: "Combination 3-6",
  [SicBoBetNo.COMBINATION_4_5]: "Combination 4-5",
  [SicBoBetNo.COMBINATION_4_6]: "Combination 4-6",
  [SicBoBetNo.COMBINATION_5_6]: "Combination 5-6",
  [SicBoBetNo.SINGLE_1]: "Single 1",
  [SicBoBetNo.SINGLE_2]: "Single 2",
  [SicBoBetNo.SINGLE_3]: "Single 3",
  [SicBoBetNo.SINGLE_4]: "Single 4",
  [SicBoBetNo.SINGLE_5]: "Single 5",
  [SicBoBetNo.SINGLE_6]: "Single 6"
};
const bigDome = "" + new URL("big-dome-CwCpvmDQ.webp", import.meta.url).href;
const smallDome = "" + new URL("small-dome-wcHq3o8E.webp", import.meta.url).href;
const tripleDome = "" + new URL("triple-dome-B8ECFOwv.webp", import.meta.url).href;
const Image = ({ src, fallback, ref, alt, className, width, height, style, onClick, onMouseEnter, onMouseLeave }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("picture", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "source",
      {
        srcSet: src,
        type: getType(src)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: fallback,
        className,
        ref,
        style,
        width,
        height,
        alt,
        onClick,
        onMouseEnter,
        onMouseLeave
      }
    )
  ] });
};
const getType = (url) => {
  var _a2;
  const extension = ((_a2 = url == null ? void 0 : url.split(".").pop()) == null ? void 0 : _a2.toLowerCase()) || "";
  switch (extension) {
    case "webp":
      return "image/webp";
    case "avif":
      return "image/avif";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    default:
      return "image/webp";
  }
};
const Dome = ({ betResult, className }) => {
  const type = chooseDomeType(betResult);
  const total = betResult.reduce((a, b) => a + b, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "Dome",
      className: cn("relative h-[9.3125rem] w-[8.6875rem]", className),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Image,
          {
            src: type === "small" ? smallDome : type === "big" ? bigDome : tripleDome,
            alt: type === "small" ? "Small Dome" : type === "big" ? "Big Dome" : "Triple Dome",
            className: "w-full"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "totalText absolute left-[50%] top-[2.565rem] -translate-x-1/2", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sumText absolute left-[50%] top-[3.5rem] -translate-x-1/2", children: total })
      ]
    }
  );
};
const frontDice1 = "" + new URL("front-1-ClmYYovh.webp", import.meta.url).href;
const frontDice2 = "" + new URL("front-2-sjCanmSr.webp", import.meta.url).href;
const frontDice3 = "" + new URL("front-3-1VtUgjid.webp", import.meta.url).href;
const frontDice4 = "" + new URL("front-4-BjkpR6U9.webp", import.meta.url).href;
const frontDice5 = "" + new URL("front-5-BnJCuhfP.webp", import.meta.url).href;
const frontDice6 = "" + new URL("front-6-CUJ0Uoga.webp", import.meta.url).href;
const tiltDice1 = "" + new URL("tilt-1-D0vmYg7U.webp", import.meta.url).href;
const tiltDice2 = "" + new URL("tilt-2-CE243gkz.webp", import.meta.url).href;
const tiltDice3 = "" + new URL("tilt-3-DRlsHEZc.webp", import.meta.url).href;
const tiltDice4 = "" + new URL("tilt-4-C3pyGigP.webp", import.meta.url).href;
const tiltDice5 = "" + new URL("tilt-5-JkICGscD.webp", import.meta.url).href;
const tiltDice6 = "" + new URL("tilt-6-BKXli5pO.webp", import.meta.url).href;
const diceMap = {
  "front-1": frontDice1,
  "front-2": frontDice2,
  "front-3": frontDice3,
  "front-4": frontDice4,
  "front-5": frontDice5,
  "front-6": frontDice6,
  "tilt-1": tiltDice1,
  "tilt-2": tiltDice2,
  "tilt-3": tiltDice3,
  "tilt-4": tiltDice4,
  "tilt-5": tiltDice5,
  "tilt-6": tiltDice6
};
const Dice = ({ type, value, className }) => {
  const src = diceMap["".concat(type, "-").concat(value)];
  if (!src) {
    console.warn("Missing dice image for ".concat(type, "-").concat(value));
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("dice", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Image,
    {
      src,
      alt: "Dice ".concat(type, "-").concat(value),
      className: "h-full w-full"
    }
  ) });
};
const ResultDices = ({ betResult, className }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dice,
      {
        type: "tilt",
        value: betResult[0],
        className: "h-[2.5rem] w-[2.5625rem] rotate-[-10deg]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dice,
      {
        type: "front",
        value: betResult[1],
        className: "mt-[-0.36rem] h-[2.5rem] w-[2.25rem]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dice,
      {
        type: "tilt",
        value: betResult[2],
        className: "h-[2.5rem] w-[2.5625rem] rotate-[10deg] scale-x-[-1]"
      }
    )
  ] });
};
function WinNumberResult({ winNumber }) {
  const { t: t2 } = useTranslation();
  const color = getSicBoNumberColor(winNumber);
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "g-winNumberFrame",
        "my-8 flex h-[8.625rem] flex-col items-center justify-start overflow-visible p-[0.6rem_4rem_0rem_4rem]",
        color
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t2("COMMON.GAME_RESULT") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(isSmallDevice && "w-[12.5rem]"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(WinNumber, { win: winNumber }) })
      ]
    }
  ) });
}
const WinNumber = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-[-1.7rem] left-1/2 -translate-x-1/2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dome,
      {
        betResult: props.win,
        className: "scale-[0.85]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResultDices,
      {
        betResult: props.win,
        className: "absolute bottom-[0.5rem] left-[50%] z-[2] flex -translate-x-1/2 scale-[0.85] gap-[0.4rem]"
      }
    )
  ] });
};
function scrollWrap(options = {}) {
  const { modalType, elementId, offset = 0 } = options;
  const findScrollWrap = () => {
    let scrollWrapElement = null;
    if (modalType) {
      const modalElement = document.querySelector('[data-modal-type="'.concat(modalType, '"]'));
      scrollWrapElement = (modalElement == null ? void 0 : modalElement.querySelector(".scrollWrap")) || null;
    } else {
      scrollWrapElement = document.querySelector(".scrollWrap");
    }
    return scrollWrapElement;
  };
  const scroll = () => {
    const scrollWrap2 = findScrollWrap();
    if (!scrollWrap2) return false;
    if (elementId) {
      const section = document.getElementById(elementId);
      if (!section) return false;
      if (section.offsetHeight === 0 || scrollWrap2.offsetHeight === 0) return false;
      scrollWrap2.scrollTop = section.offsetTop - scrollWrap2.offsetTop - offset;
    } else {
      scrollWrap2.scrollTo(0, 0);
    }
    return true;
  };
  return requestAnimationFrame(scroll);
}
function scrollWrapToTop(dataModalType) {
  return scrollWrap({ modalType: dataModalType });
}
const betTypeMap = {
  [BaccaratBetNo.BANKER]: "Banker",
  [BaccaratBetNo.PLAYER]: "Player",
  [BaccaratBetNo.TIE]: "Tie",
  [BaccaratBetNo.PLAYER_PAIR]: "P Pair",
  [BaccaratBetNo.BANKER_PAIR]: "B Pair",
  [BaccaratBetNo.PERFECT_PAIR]: "Perfect Pair",
  [BaccaratBetNo.EITHER_PAIR]: "Either Pair",
  [BaccaratBetNo.PLAYER_BONUS]: "P Bonus",
  [BaccaratBetNo.BANKER_BONUS]: "B Bonus"
};
const currencyFormat = (val, currency = "USD") => {
  var _a2;
  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "symbol"
    // ensure we’re asking for the symbol
  });
  const parts = fmt.formatToParts(val);
  const currencyPart = (_a2 = parts.find((p) => p.type === "currency")) == null ? void 0 : _a2.value;
  if (currencyPart === currency) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(val);
  }
  return fmt.format(val);
};
function GameHistoryResult({ result, currency, status, ...restDivProps }) {
  const color = status === "finished" && result > 0 ? "#4EB472" : "#b0b0b0";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: { color },
      ...restDivProps,
      children: currencyFormat(result, currency != null ? currency : "USD")
    }
  );
}
const GameHistoryResult$1 = reactExports.memo(GameHistoryResult);
const gameTypeMap = {
  [GameType.AUTO_ROULETTE]: "AUTO ROULETTE",
  [GameType.ROULETTE]: "ROULETTE",
  [GameType.AUTO_SIC_BO]: "AUTO SIC BO",
  [GameType.SIC_BO]: "SIC BO",
  [GameType.BACCARAT]: "LIVE BACCARAT"
};
function GameNumber(roundCreatedAt) {
  return "#".concat(new Date(roundCreatedAt).toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC"
  }));
}
function GameHistoryContentHeader() {
  var _a2;
  const { histories, currentHistoryContent: current2 } = useHistoryStore();
  const isHistoryContentRoute = useMatch("/history-content");
  const changePage = (page) => {
    const idx = histories.findIndex((item) => current2 && item.id === current2.id);
    const target = histories.at((idx + page) % histories.length);
    useHistoryStore.setState({ currentHistoryContent: target });
    scrollWrapToTop("history_content");
    playSound(["click"]);
  };
  return isHistoryContentRoute ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "GameHistoryTypeHeader", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header relative h-8 w-[9.1875rem]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon.RightGoldenDarkerBottom,
      {
        style: { transform: "rotateY(180deg)" },
        onClick: () => changePage(-1),
        className: "absolute left-2 w-4 cursor-pointer"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: GameNumber((_a2 = current2 == null ? void 0 : current2.roundCreatedAt) != null ? _a2 : 0) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon.RightGoldenDarkerBottom,
      {
        onClick: () => changePage(1),
        className: "absolute right-2 w-4 cursor-pointer"
      }
    )
  ] }) });
}
function GameHistoryContent() {
  const { t: t2 } = useTranslation();
  const { currentHistoryContent: current2 } = useHistoryStore();
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const isHistoryContentRoute = useMatch("/history-content");
  if (!current2) return null;
  const { roundId, result: betResults, winMax } = current2;
  const { status, gameType, gameCode, roundCreatedAt, roundFinishedAt } = current2;
  const { bets, payouts, betTotal, winTotal, currency } = current2;
  const result = Object.values(betResults != null ? betResults : {})[0];
  const isFinished = status === "finished";
  const isMax = winMax && current2.winTotal >= winMax;
  const handleReport = () => {
    if (!current2 || !roundCreatedAt || !roundFinishedAt) return;
    const data = {
      roundId,
      createdAt: roundCreatedAt,
      finishedAt: roundFinishedAt,
      status,
      result: betResults,
      gameCode,
      gameType
    };
    connectIns.sendSupportChatGameHistory(data);
    useLayoutStore.setState({ menuPage: "chat_support", desktopModal: "support" });
    playSound(["click"]);
  };
  return roundCreatedAt && roundFinishedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "GameHistoryContent",
      className: cn("flex flex-col justify-center px-4 pt-2", {
        "pt-3": isMobileDevice
      }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-grow flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "g-subTitle-1", children: gameTypeMap[gameType] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn("inline-flex gap-x-1", {
                  "flex-col items-start": isMobileDevice && isSmallDevice
                }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "item", children: [
                    t2("COMMON.GAME_RESOLVED"),
                    ":"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content", children: new Date(roundFinishedAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                    timeZone: "UTC"
                  }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("inline-flex gap-x-1", { "flex-col items-start": isMobileDevice && isSmallDevice }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "item", children: [
                t2("COMMON.GAME_NUMBER"),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content", children: "#".concat(getFormattedRoundId(roundId)) })
            ] })
          ] }),
          !isHistoryContentRoute && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-items-center gap-[0.375rem]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "h-[2.5rem] w-[2.5rem]",
                onClick: handleReport,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inner grid items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Support, { className: "h-[1.25rem] w-[1.25rem]" }) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "g-subTitle-1 text-[0.625rem] leading-3 tracking-[.0938rem]", children: t2("COMMON.SUPPORT") })
          ] })
        ] }),
        !isFinished ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "g-winNumberFrame cancel my-8 flex h-[8.625rem] items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: t2("COMMON.GAME_CANCELED") }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          isRouletteGameType(gameType) && /* @__PURE__ */ jsxRuntimeExports.jsx(WinNumberResult$1, { winNumber: result }),
          isSicboGameType(gameType) && /* @__PURE__ */ jsxRuntimeExports.jsx(WinNumberResult, { winNumber: result }),
          isBaccaratGameType(gameType) && /* @__PURE__ */ jsxRuntimeExports.jsx(BaccaratWinNumberResult, { winNumber: result })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "headerRow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left", children: t2("COMMON.BET") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: t2("COMMON.TOTAL_BET") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-10 pl-[1.85rem] text-left", children: t2("COMMON.RESULT") })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            Object.keys(bets).map((k, idx) => {
              var _a2, _b2;
              const key = k;
              const val = (_a2 = bets[key]) != null ? _a2 : 0;
              const payout = (_b2 = payouts == null ? void 0 : payouts[key]) != null ? _b2 : 0;
              const win = isFinished ? payout : val;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "subtotalRow",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-left text-[#EADFD2]", children: [
                      isRouletteGameType(current2.gameType) && betTypeMap$2[key],
                      isSicboGameType(current2.gameType) && betTypeMap$1[key],
                      isBaccaratGameType(current2.gameType) && betTypeMap[key]
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right text-[#B0B0B0]", children: currencyFormat(val, currency) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      GameHistoryResult$1,
                      {
                        status,
                        result: win,
                        currency
                      }
                    ) })
                  ]
                },
                idx
              );
            }),
            isMax && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "maxWinRow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "td",
              {
                colSpan: 3,
                className: "text-center",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "maxWin", children: "MAXWIN IS REACHED" })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "divider", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-solid border-t-[#323232]" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "totalRow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "total text-left uppercase", children: t2("COMMON.TOTAL") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right text-[#B0B0B0]", children: currencyFormat(betTotal, currency) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                GameHistoryResult$1,
                {
                  status,
                  result: (
                    // For cancelled games, show the bet amount as the result since no win/loss occurred
                    isFinished ? winTotal : betTotal
                  ),
                  currency
                }
              ) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function isValidPostMessageData(data) {
  if (!data || typeof data !== "object") return false;
  const messageData = data;
  const hasValidPayload = Boolean(
    messageData.betHistoryPayload && typeof messageData.betHistoryPayload === "object" && messageData.betHistoryPayload !== null
  );
  const hasValidLang = !messageData.lang || typeof messageData.lang === "string";
  return hasValidPayload && hasValidLang;
}
function HistoryContentRoute() {
  const [hasReceivedMessage, setHasReceivedMessage] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleMessage = (event) => {
      if (!isValidPostMessageData(event.data)) {
        console.warn("Received message with invalid data structure:", event.data);
        return;
      }
      const { betHistoryPayload, lang } = event.data;
      if (betHistoryPayload) {
        useHistoryStore.setState({ currentHistoryContent: betHistoryPayload });
        setHasReceivedMessage(true);
      }
      if (lang) {
        changeLanguage(lang);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      useHistoryStore.setState({ currentHistoryContent: null });
    };
  }, []);
  return hasReceivedMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("history-content-route", "w-[20.5rem]"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GameHistoryContentHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GameHistoryContent, {})
  ] });
}
const APP_NAMES = ["roulette", "sicbo", "baccarat"];
function getBasename() {
  var _a2;
  const currentPath = (_a2 = window.location) == null ? void 0 : _a2.pathname;
  const segments = currentPath.split("/").filter(Boolean);
  if (segments.length > 0 && APP_NAMES.includes(segments[0])) {
    return "/".concat(segments[0]);
  }
  return "/";
}
function Routes({ Root: Root2 }) {
  const basename = getBasename();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { basename, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes$1, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/history-content",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(HistoryContentRoute, {})
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/*",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, {})
      }
    )
  ] }) });
}
const crystalLogo = "" + new URL("crystalLogo-C8XDQlyG.webp", import.meta.url).href;
const goldenLiveLogo = "" + new URL("goldenLiveLogo-BBp7hdwC.webp", import.meta.url).href;
const desktopBGDefault = "" + new URL("rouLoadingBG-Ds1sVjsF.webp", import.meta.url).href;
const desktopBG001 = "" + new URL("rouLoadingBG001-avnT-F-h.webp", import.meta.url).href;
const desktopBG002 = "" + new URL("rouLoadingBG002-B6pdvRMk.webp", import.meta.url).href;
const mobileBGDefault = "" + new URL("rouMobileLoadingBG-DkDhajir.webp", import.meta.url).href;
const mobileBG001 = "" + new URL("rouMobileLoadingBG001-CT8iOGUa.webp", import.meta.url).href;
const mobileBG002 = "" + new URL("rouMobileLoadingBG002-BAaPLbp8.webp", import.meta.url).href;
function isTouchEvent({ nativeEvent }) {
  return window.TouchEvent ? nativeEvent instanceof TouchEvent : "touches" in nativeEvent;
}
function isMouseEvent(event) {
  return event.nativeEvent instanceof MouseEvent;
}
function throttle(cb, ms) {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= ms) {
      cb();
      lastTime = now;
    }
  };
}
function useClickAway(cb) {
  const ref = reactExports.useRef(null);
  const refCb = reactExports.useRef(cb);
  reactExports.useLayoutEffect(() => {
    refCb.current = cb;
  });
  reactExports.useEffect(() => {
    const handler = (e) => {
      const element = ref.current;
      if (element && !element.contains(e.target)) {
        refCb.current(e);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);
  return ref;
}
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = reactExports.useState(value);
  reactExports.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
function useIdle(ms = 1e3 * 60) {
  const [idle, setIdle] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let timeoutId;
    const handleTimeout = () => {
      setIdle(true);
    };
    const handleEvent = throttle((e) => {
      setIdle(false);
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleTimeout, ms);
    }, 500);
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        handleEvent();
      }
    };
    timeoutId = window.setTimeout(handleTimeout, ms);
    window.addEventListener("mousemove", handleEvent);
    window.addEventListener("mousedown", handleEvent);
    window.addEventListener("resize", handleEvent);
    window.addEventListener("keydown", handleEvent);
    window.addEventListener("touchstart", handleEvent);
    window.addEventListener("wheel", handleEvent);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener("mousemove", handleEvent);
      window.removeEventListener("mousedown", handleEvent);
      window.removeEventListener("resize", handleEvent);
      window.removeEventListener("keydown", handleEvent);
      window.removeEventListener("touchstart", handleEvent);
      window.removeEventListener("wheel", handleEvent);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.clearTimeout(timeoutId);
    };
  }, [ms]);
  return idle;
}
function useLongPress(callback, options = {}) {
  const { threshold = 400, onStart, onFinish, onCancel } = options;
  const isLongPressActive = reactExports.useRef(false);
  const isPressed = reactExports.useRef(false);
  const timerId = reactExports.useRef();
  return reactExports.useMemo(() => {
    if (typeof callback !== "function") {
      return {};
    }
    const start = (event) => {
      if (!isMouseEvent(event) && !isTouchEvent(event)) return;
      if (onStart) {
        onStart(event);
      }
      isPressed.current = true;
      timerId.current = setTimeout(() => {
        callback(event);
        isLongPressActive.current = true;
      }, threshold);
    };
    const cancel = (event) => {
      if (!isMouseEvent(event) && !isTouchEvent(event)) return;
      if (isLongPressActive.current) {
        if (onFinish) {
          onFinish(event);
        }
      } else if (isPressed.current) {
        if (onCancel) {
          onCancel(event);
        }
      }
      isLongPressActive.current = false;
      isPressed.current = false;
      if (timerId.current) {
        window.clearTimeout(timerId.current);
      }
    };
    const mouseHandlers = {
      onMouseDown: start,
      onMouseUp: cancel,
      onMouseLeave: cancel
    };
    const touchHandlers = {
      onTouchStart: start,
      onTouchEnd: cancel
    };
    return {
      ...mouseHandlers,
      ...touchHandlers
    };
  }, [callback, threshold, onCancel, onFinish, onStart]);
}
function useMediaQuery(query) {
  const subscribe = reactExports.useCallback(
    (callback) => {
      const matchMedia = window.matchMedia(query);
      matchMedia.addEventListener("change", callback);
      return () => {
        matchMedia.removeEventListener("change", callback);
      };
    },
    [query]
  );
  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };
  const getServerSnapshot = () => {
    throw Error("useMediaQuery is a client-only hook");
  };
  return reactExports.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
function useWindowSize() {
  const [size, setSize] = reactExports.useState({
    width: null,
    height: null
  });
  reactExports.useLayoutEffect(() => {
    const handleResize2 = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    handleResize2();
    window.addEventListener("resize", handleResize2);
    return () => {
      window.removeEventListener("resize", handleResize2);
    };
  }, []);
  return size;
}
const landscapePlaceholderBrightRectangle0deg = "" + new URL("bright-rectangle-0deg-lMSEdDBH.webp", import.meta.url).href;
const landscapePlaceholderBrightRectangle270deg = "" + new URL("bright-rectangle-270deg-DOAavZwl.webp", import.meta.url).href;
const landscapePlaceholderBrightRectangle90deg = "" + new URL("bright-rectangle-90deg-tunPY1uz.webp", import.meta.url).href;
const landscapePlaceholderCheckIcon = "" + new URL("check-DwFMa5ye.webp", import.meta.url).href;
const landscapePlaceholderCloseIcon = "" + new URL("close-XySlwOfc.webp", import.meta.url).href;
const landscapePlaceholderDarkRectangle0deg = "" + new URL("dark-rectangle-0deg-CuXpPNuu.webp", import.meta.url).href;
const landscapePlaceholderDarkRectangle270deg = "" + new URL("dark-rectangle-270deg-CWKKzNXn.webp", import.meta.url).href;
const landscapePlaceholderDarkRectangle90deg = "" + new URL("dark-rectangle-90deg-CZSkj5j0.webp", import.meta.url).href;
const LandscapeProvider = () => {
  const { t: t2 } = useTranslation();
  const { width, height } = useWindowSize();
  const isLandscape = useMediaQuery("(orientation: landscape)") || width && height && width > height;
  const frames = reactExports.useMemo(() => {
    const springTransition = {
      type: "spring",
      mass: 1,
      stiffness: 256,
      damping: 24
    };
    const instantTransition = {
      type: "tween",
      duration: 0
    };
    const CLOSE_ICON_SIZE = { width: 13.333, height: 13.333 };
    const CHECK_ICON_SIZE = { width: 16.6, height: 15.1 };
    const LANDSCAPE_RECTANGLE_SIZE = { width: 140, height: 64 };
    const PORTRAIT_RECTANGLE_SIZE = { width: 64, height: 140 };
    return [
      {
        key: "frame-1",
        rotate: 0,
        rectSrc: landscapePlaceholderDarkRectangle90deg,
        rectSize: LANDSCAPE_RECTANGLE_SIZE,
        iconSrc: landscapePlaceholderCloseIcon,
        iconSize: CLOSE_ICON_SIZE,
        iconRotate: 0,
        delay: 500,
        // 500ms,
        duration: 0,
        // 0ms
        transition: instantTransition
      },
      {
        key: "frame-2",
        rotate: 180,
        rectSrc: landscapePlaceholderBrightRectangle90deg,
        rectSize: LANDSCAPE_RECTANGLE_SIZE,
        iconSrc: landscapePlaceholderCheckIcon,
        iconSize: CHECK_ICON_SIZE,
        iconRotate: 180,
        delay: 0,
        // 0ms
        duration: 500,
        // 500ms
        transition: springTransition
      },
      {
        key: "frame-3",
        rotate: 0,
        rectSrc: landscapePlaceholderBrightRectangle0deg,
        rectSize: PORTRAIT_RECTANGLE_SIZE,
        iconSrc: landscapePlaceholderCheckIcon,
        iconSize: CHECK_ICON_SIZE,
        iconRotate: 0,
        delay: 400,
        // 400ms
        duration: 0,
        // 0ms
        transition: instantTransition
      },
      {
        key: "frame-4",
        rotate: 180,
        rectSrc: landscapePlaceholderDarkRectangle0deg,
        rectSize: PORTRAIT_RECTANGLE_SIZE,
        iconSrc: landscapePlaceholderCloseIcon,
        iconSize: CLOSE_ICON_SIZE,
        iconRotate: 0,
        delay: 0,
        // 0ms
        duration: 500,
        // 500ms
        transition: springTransition
      },
      {
        key: "frame-5",
        rotate: 0,
        rectSrc: landscapePlaceholderDarkRectangle270deg,
        rectSize: LANDSCAPE_RECTANGLE_SIZE,
        iconSrc: landscapePlaceholderCloseIcon,
        iconSize: CLOSE_ICON_SIZE,
        iconRotate: 0,
        delay: 500,
        // 500ms
        duration: 0,
        // 0ms
        transition: instantTransition
      },
      {
        key: "frame-6",
        rotate: -180,
        rectSrc: landscapePlaceholderBrightRectangle270deg,
        rectSize: LANDSCAPE_RECTANGLE_SIZE,
        iconSrc: landscapePlaceholderCheckIcon,
        iconSize: CHECK_ICON_SIZE,
        iconRotate: -180,
        delay: 0,
        // 0ms
        duration: 500,
        // 500ms
        transition: springTransition
      },
      {
        key: "frame-7",
        rotate: 0,
        rectSrc: landscapePlaceholderBrightRectangle0deg,
        rectSize: PORTRAIT_RECTANGLE_SIZE,
        iconSrc: landscapePlaceholderCheckIcon,
        iconSize: CHECK_ICON_SIZE,
        iconRotate: 0,
        delay: 500,
        // 500ms
        duration: 0,
        // 0ms
        transition: instantTransition
      },
      {
        key: "frame-8",
        rotate: -180,
        rectSrc: landscapePlaceholderDarkRectangle0deg,
        rectSize: PORTRAIT_RECTANGLE_SIZE,
        iconSrc: landscapePlaceholderCloseIcon,
        iconSize: CLOSE_ICON_SIZE,
        iconRotate: 0,
        delay: 0,
        // 0ms
        duration: 500,
        // 500ms
        transition: springTransition
      }
    ];
  }, []);
  const [animationState, setAnimationState] = reactExports.useState(0);
  const frameTimer = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!isMobileDevice || !isLandscape) return;
    const currentFrameConfig = frames[animationState];
    const totalDurationForThisFrame = currentFrameConfig.delay + currentFrameConfig.duration;
    frameTimer.current = setTimeout(() => {
      setAnimationState((prev) => (prev + 1) % frames.length);
    }, totalDurationForThisFrame);
    return () => {
      if (frameTimer.current) {
        clearTimeout(frameTimer.current);
      }
    };
  }, [animationState, frames, isLandscape]);
  const currentFrame = frames[animationState];
  return isMobileDevice && isLandscape && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[1000] flex h-screen w-screen items-center justify-center overflow-hidden bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[-160px] top-[-152px] z-0 h-[460px] w-[460px] flex-shrink-0 rounded-full bg-[rgba(212,_190,_164,_0.10)] blur-[98px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-[-34px] top-[-10px] z-0 h-[142px] w-[142px] flex-shrink-0 rounded-full bg-[rgba(212,_190,_164,_0.30)] blur-[98px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-344px] right-[-168px] z-0 h-[470px] w-[470px] flex-shrink-0 rounded-full bg-[rgba(212,_190,_164,_0.10)] blur-[98px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-rotate-90 text-[14px] font-semibold uppercase leading-[20px] tracking-[0.56px] text-[#7A7A7A]", children: t2("COMMON.ROTATE_ME_PLEASE") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative size-[140px] flex-shrink-0 flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute flex size-full items-center justify-center will-change-transform",
        animate: { rotate: currentFrame.rotate },
        transition: currentFrame.transition,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "absolute",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Image,
                {
                  src: currentFrame.rectSrc,
                  width: currentFrame.rectSize.width,
                  height: currentFrame.rectSize.height
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.2 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Image,
                    {
                      className: cn({
                        "-rotate-180": currentFrame.iconRotate === -180,
                        "rotate-180": currentFrame.iconRotate === 180
                      }),
                      src: currentFrame.iconSrc,
                      width: currentFrame.iconSize.width,
                      height: currentFrame.iconSize.height
                    }
                  )
                },
                currentFrame.key + "-icon"
              ) })
            ]
          },
          currentFrame.key + "-rect"
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rotate-90 text-[14px] font-semibold uppercase leading-[20px] tracking-[0.56px] text-[#7A7A7A]", children: t2("COMMON.ROTATE_ME_PLEASE") })
  ] });
};
const getMainBoard = (mainBoardRef) => {
  const mainBoardEle = document.getElementById("MainBoard");
  if (!mainBoardEle) return;
  mainBoardRef.current = mainBoardEle;
};
const DIST_TO_LEFT_EDGE = 8;
const getMainBoardParams = (mainBoardRef) => {
  const mainBoardEle = mainBoardRef.current;
  if (!mainBoardEle) return null;
  const boundingRect = mainBoardEle.getBoundingClientRect();
  const isCompact = useConfigStore.getState().IS_SMALL_DEVICE && isMobileDevice;
  const dpr = 1;
  const ratio = useLayoutStore.getState().rootEmFontSize;
  const factor = ratio / 16;
  const left = isCompact || isDesktop ? DIST_TO_LEFT_EDGE * factor + boundingRect.left : boundingRect.left;
  const top = boundingRect.top;
  const width = mainBoardEle.offsetWidth * dpr;
  const height = mainBoardEle.offsetHeight * dpr;
  const round = (isCompact ? 24 : 32) * dpr;
  return { left, top, width, height, round, dpr, ratio, factor };
};
const DEVTOOLS_CONFIG = {
  name: "".concat(document.title, " - useStageStore"),
  store: "StageStore",
  serialize: {
    replacer: (key, value) => {
      if (key === "core" && value !== null) {
        return "[Pixi Application Instance]";
      }
      return value;
    }
  }
};
const useStageStore = create()(
  devtools(
    (set2) => ({
      core: null,
      setCore: (core) => set2({ core })
    }),
    DEVTOOLS_CONFIG
  )
);
const LINES_SPECS = [
  // Trailing long glow
  {
    width: 32,
    length: 858,
    blur: 20,
    alpha: 0.9,
    color: 9263667
    // Medium brown
  },
  // Background glow layer
  {
    width: 32,
    length: 386,
    blur: 16,
    alpha: 0.8,
    color: 7748381
    // Dark brown
  },
  // Large glow layer
  {
    width: 30,
    length: 340,
    blur: 8,
    alpha: 0.5,
    color: 9721377
    // Even darker orange
  },
  // Medium glow layer
  {
    width: 20,
    length: 280,
    blur: 4,
    alpha: 0.4,
    color: 12420162
    // Darker orange
  },
  // Bright thin line - top layer
  {
    width: 1,
    length: 160,
    blur: 1,
    alpha: 0.1,
    color: 16763282
    // Bright orange/yellow
  }
];
const SEGMENTS_SPECS = [
  { widthMultiplier: 1, lengthMultiplier: 0.4 },
  // Thickest center
  { widthMultiplier: 0.8, lengthMultiplier: 0.55 },
  // Thick
  { widthMultiplier: 0.6, lengthMultiplier: 0.7 },
  // Medium-thick
  { widthMultiplier: 0.4, lengthMultiplier: 0.85 },
  // Medium edge
  { widthMultiplier: 0.2, lengthMultiplier: 1 }
  // Thin outer edge
];
const DESIGN_PERIMETER = 2400;
const ROTATION_DURATION_MS = 4e3;
const OPACITY_ANIMATION_DURATION_MS = 800;
const FADE_IN_DELAY_MS = 500;
const FADE_IN_DURATION_MS = 1500;
const CORNER_SEGMENTS = 8;
const DRAW_SEGMENT_EVERY_PIXEL = 16;
const GLOW_FILTER_CONFIG = { distance: 5, outerStrength: 20, quality: 1 };
const KAWASE_BLUR_FILTER_CONFIG = { quality: 8 };
const getFactor = () => {
  const rem = useLayoutStore.getState().rootEmFontSize;
  return rem / 16;
};
function createLineSpec(totalPerimeter) {
  const factor = getFactor();
  const lengthRatio = totalPerimeter / DESIGN_PERIMETER;
  return LINES_SPECS.map(({ color, alpha, width, length, blur }) => ({
    width: width * factor,
    blur: blur * factor,
    length: length * lengthRatio,
    color,
    alpha
  }));
}
function calcDegreeOffsetDist(degreeOffset, totalPerimeter) {
  const normalizedDegrees = (degreeOffset % 360 + 360) % 360;
  const baseOffset = normalizedDegrees / 360 * totalPerimeter;
  return baseOffset;
}
const getPointAtDistance = (path2, distance, totalPerimeter) => {
  const normalizedDistance = (distance % totalPerimeter + totalPerimeter) % totalPerimeter;
  if (!path2 || path2.length === 0) return null;
  let low = 0;
  let high = path2.length - 1;
  let segmentIndex = 0;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const segment2 = path2[mid];
    if (normalizedDistance >= segment2.cumulativeLength) {
      segmentIndex = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  const segment = path2[segmentIndex];
  const distanceIntoSegment = normalizedDistance - segment.cumulativeLength;
  if (segment.length === 0) return new Point(segment.p1.x, segment.p1.y);
  const ratio = distanceIntoSegment / segment.length;
  const { p1, p2 } = segment;
  const xDist = p2.x - p1.x;
  const yDist = p2.y - p1.y;
  const x = p1.x + xDist * ratio;
  const y = p1.y + yDist * ratio;
  return new Point(x, y);
};
const drawSegment = (graphics, path2, offset, totalPerimeter) => {
  graphics.clear();
  const { width, length, color, alpha } = graphics.userData.lineSpec;
  const lineStartOffset = offset - length / 2;
  const startPoint = getPointAtDistance(path2, lineStartOffset, totalPerimeter);
  if (!startPoint) return;
  graphics.moveTo(startPoint.x, startPoint.y);
  const segments = Math.ceil(length / DRAW_SEGMENT_EVERY_PIXEL);
  for (let i = 1; i <= segments; i++) {
    const distance = lineStartOffset + DRAW_SEGMENT_EVERY_PIXEL * i;
    const point = getPointAtDistance(path2, distance, totalPerimeter);
    if (!point) break;
    graphics.lineTo(point.x, point.y);
  }
  graphics.stroke({ width, alpha, color });
};
const addCornerPoints = (points, centerX, centerY, radius, startAngle, endAngle) => {
  for (let i = 0; i <= CORNER_SEGMENTS; i++) {
    const angle = startAngle + (endAngle - startAngle) * (i / CORNER_SEGMENTS);
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    points.push(new Point(x, y));
  }
};
const createPoints = (width, height, radius) => {
  const points = [];
  const left = 0;
  const top = 0;
  const right = width;
  const bottom = height;
  addCornerPoints(points, right - radius, top + radius, radius, -Math.PI / 2, 0);
  addCornerPoints(points, right - radius, bottom - radius, radius, 0, Math.PI / 2);
  addCornerPoints(points, left + radius, bottom - radius, radius, Math.PI / 2, Math.PI);
  addCornerPoints(points, left + radius, top + radius, radius, Math.PI, Math.PI * 3 / 2);
  return points;
};
const createMainBoardMask = (params) => {
  const { width, height, round } = params;
  const mask = new Graphics();
  const factor = getFactor();
  mask.roundRect(0, 0, width, height, round * factor);
  mask.fill({ color: 16777215 });
  return mask;
};
const createSegmentGraphics = (lineSpec, segmentSpec, offset, totalPerimeter, path2) => {
  const graphics = new Graphics();
  const segmentWidth = lineSpec.width * segmentSpec.widthMultiplier;
  const segmentLength = lineSpec.length * segmentSpec.lengthMultiplier;
  graphics.userData = { lineSpec: { ...lineSpec, width: segmentWidth, length: segmentLength }, baseDegree: 0 };
  drawSegment(graphics, path2, offset, totalPerimeter);
  return graphics;
};
const createPath = (points) => {
  const path2 = [];
  let calculatedPerimeter = 0;
  const closedPath = [...points, points[0]];
  for (let i = 0; i < closedPath.length - 1; i++) {
    const p1 = closedPath[i];
    const p2 = closedPath[i + 1];
    const length = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    path2.push({ p1, p2, length, cumulativeLength: calculatedPerimeter });
    calculatedPerimeter += length;
  }
  return { path: path2, totalPerimeter: calculatedPerimeter };
};
function useLoadingLightEffect() {
  const core = useStageStore((s) => s.core);
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const rafRef = reactExports.useRef(null);
  const mainBoardRef = reactExports.useRef(null);
  const wrapperContainerRef = reactExports.useRef(null);
  const graphicsRef = reactExports.useRef([]);
  const animTimeRef = reactExports.useRef(0);
  const currDegreeRef = reactExports.useRef(0);
  const currOpacityRef = reactExports.useRef(0);
  const renderCacheRef = reactExports.useRef({
    params: null,
    path: [],
    totalPerimeter: 0,
    glow: null,
    kawase: []
  });
  const updateAnim = reactExports.useCallback((ticker) => {
    animTimeRef.current += ticker.deltaMS;
    const { totalPerimeter, path: path2 } = renderCacheRef.current;
    if (!path2.length || !totalPerimeter) return;
    const rotationProgress = animTimeRef.current % ROTATION_DURATION_MS / ROTATION_DURATION_MS;
    currDegreeRef.current = rotationProgress * 360;
    const baseOffset = rotationProgress * totalPerimeter;
    graphicsRef.current.forEach((graphics) => {
      const { baseDegree } = graphics.userData;
      const animatedDegreeOffset = calcDegreeOffsetDist(baseDegree, totalPerimeter);
      drawSegment(graphics, path2, animatedDegreeOffset + baseOffset, totalPerimeter);
    });
  }, []);
  const createFilter = reactExports.useCallback((lineSpec, lineIndex, isLastLine) => {
    const { alpha, blur, color } = lineSpec;
    const cache2 = renderCacheRef.current;
    if (isLastLine) {
      if (!cache2.glow) cache2.glow = new GlowFilter({ ...GLOW_FILTER_CONFIG, color, alpha });
      return [cache2.glow];
    }
    if (!cache2.kawase[lineIndex]) {
      cache2.kawase[lineIndex] = new KawaseBlurFilter({ strength: blur, ...KAWASE_BLUR_FILTER_CONFIG });
    }
    return [cache2.kawase[lineIndex]];
  }, []);
  const cleanUpGraphics = reactExports.useCallback(() => {
    var _a2, _b2, _c2;
    const container = wrapperContainerRef.current;
    if (!container) return;
    container.destroy({ children: true, texture: true });
    (_a2 = container.parent) == null ? void 0 : _a2.removeChild(container);
    wrapperContainerRef.current = null;
    graphicsRef.current = [];
    (_c2 = (_b2 = core == null ? void 0 : core.ticker) == null ? void 0 : _b2.remove) == null ? void 0 : _c2.call(_b2, updateAnim);
  }, [core, updateAnim]);
  const renderLines = reactExports.useCallback(
    (linesSpec, degreeOffset, baseDegree, container, totalPerimeter, path2) => {
      const offsetDist = calcDegreeOffsetDist(degreeOffset, totalPerimeter);
      linesSpec.forEach((lineSpec, lineIndex) => {
        const lineGraphics = [];
        SEGMENTS_SPECS.forEach((segmentSpec) => {
          const graphics = createSegmentGraphics(lineSpec, segmentSpec, offsetDist, totalPerimeter, path2);
          graphics.userData.baseDegree = baseDegree;
          lineGraphics.push(graphics);
          graphicsRef.current.push(graphics);
        });
        const isLastLine = lineIndex === linesSpec.length - 1;
        const lineContainer = new Container({
          children: lineGraphics,
          filters: createFilter(lineSpec, lineIndex, isLastLine)
        });
        container.addChild(lineContainer);
      });
    },
    [createFilter]
  );
  const createWrapperContainer = reactExports.useCallback(
    (params) => {
      const container = new Container();
      container.x = params.left;
      container.y = params.top;
      container.alpha = currOpacityRef.current;
      wrapperContainerRef.current = container;
      const mainBoardMask = createMainBoardMask(params);
      container.addChild(mainBoardMask);
      container.mask = mainBoardMask;
      core == null ? void 0 : core.stage.addChild(container);
      return container;
    },
    [core]
  );
  const initLoadingLight = reactExports.useCallback(() => {
    cleanUpGraphics();
    getMainBoard(mainBoardRef);
    const params = getMainBoardParams(mainBoardRef);
    if (!params || !(core == null ? void 0 : core.stage) || loadingStage >= LoadingStageEnum.PostLoaded4) return;
    const points = createPoints(params.width, params.height, params.round * getFactor());
    const { path: path2, totalPerimeter } = createPath(points);
    const linesSpec = createLineSpec(totalPerimeter);
    renderCacheRef.current = { params, path: path2, totalPerimeter, glow: null, kawase: [] };
    const container = createWrapperContainer(params);
    const currDegree = currDegreeRef.current;
    renderLines(linesSpec, currDegree, 0, container, totalPerimeter, path2);
    renderLines(linesSpec, currDegree + 180, 180, container, totalPerimeter, path2);
    core.ticker.add(updateAnim);
  }, [cleanUpGraphics, core, loadingStage, renderLines, updateAnim, createWrapperContainer]);
  const finalCleanUp = reactExports.useCallback(() => {
    cleanUpGraphics();
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const { glow, kawase } = renderCacheRef.current;
    glow == null ? void 0 : glow.destroy(true);
    kawase.forEach((filter) => filter.destroy(true));
    renderCacheRef.current = { params: null, path: [], totalPerimeter: 0, glow: null, kawase: [] };
  }, [cleanUpGraphics]);
  reactExports.useEffect(() => {
    var _a2;
    if (!core) return;
    initLoadingLight();
    (_a2 = core.renderer) == null ? void 0 : _a2.on("resize", initLoadingLight);
    return () => {
      var _a3;
      (_a3 = core.renderer) == null ? void 0 : _a3.off("resize", initLoadingLight);
    };
  }, [core, initLoadingLight]);
  const animateOpacity = reactExports.useCallback((targetOpacity, duration = OPACITY_ANIMATION_DURATION_MS) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const container = wrapperContainerRef.current;
    if (!container) return;
    const startOpacity = currOpacityRef.current;
    const startTime = Date.now();
    const change = targetOpacity - startOpacity;
    const step = () => {
      if (!wrapperContainerRef.current) return;
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newOpacity = startOpacity + change * progress;
      currOpacityRef.current = newOpacity;
      wrapperContainerRef.current.alpha = newOpacity;
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        currOpacityRef.current = targetOpacity;
        wrapperContainerRef.current.alpha = targetOpacity;
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(step);
  }, []);
  reactExports.useEffect(() => {
    switch (loadingStage) {
      case LoadingStageEnum.Idle: {
        setTimeout(() => animateOpacity(1, FADE_IN_DURATION_MS), FADE_IN_DELAY_MS);
        break;
      }
      case LoadingStageEnum.Loaded: {
        animateOpacity(0);
        break;
      }
      case LoadingStageEnum.PostLoaded4: {
        finalCleanUp();
        break;
      }
    }
  }, [loadingStage, animateOpacity, finalCleanUp]);
}
function useTransitionMount(shouldMount = true) {
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (shouldMount && !mounted) {
      reactExports.startTransition(() => setMounted(true));
    }
  }, [shouldMount, mounted]);
  return mounted;
}
const MOBILE_NORMAL_HEADER_HEIGHT_REM = 2.55;
const MOBILE_SMALL_HEADER_HEIGHT_REM = 2;
const MOBILE_NORMAL_HEADER_NO_HISTORY_HEIGHT_REM = 1.35;
const MOBILE_SMALL_HEADER_NO_HISTORY_HEIGHT_REM = 0.82;
const MOBILE_NORMAL_FOOTER_HEIGHT_REM = 2.9;
const MOBILE_SMALL_FOOTER_HEIGHT_REM = 0.45;
const DESKTOP_HEADER_HEIGHT_REM = 3.5;
const DESKTOP_FOOTER_HEIGHT_REM = 3.5;
const SMALL_DEVICE_MARGIN_LEFT_REM = 2.5;
function useLoadingCalculations(headerWithoutWinHistory = false) {
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const [animationValues, setAnimationValues] = reactExports.useState({
    headerHeight: 0,
    footerHeight: 0,
    layoutWidth: 0
  });
  reactExports.useEffect(() => {
    const { documentElement, body } = document;
    const updateHeight = () => {
      const widthKey = isMobileDevice ? "--mobile-narrow" : "--desktop-narrow";
      const heightKey = isMobileDevice ? "--mobile-wide" : "--desktop-wide";
      const layoutWidthPx = getComputedStyle(documentElement).getPropertyValue(widthKey);
      const layoutHeightPx = getComputedStyle(documentElement).getPropertyValue(heightKey);
      if (!layoutWidthPx || !layoutHeightPx || layoutWidthPx === "" || layoutHeightPx === "") {
        return;
      }
      const rootFontSizePx = parseFloat(getComputedStyle(documentElement).fontSize);
      const bodyHeightPx = body.offsetHeight;
      const extraHalfHeightPx = (bodyHeightPx - parseFloat(layoutHeightPx)) / 2;
      let headerHeightPx, footerHeightPx;
      if (isMobileDevice) {
        const headerHeightRem = isSmallDevice ? headerWithoutWinHistory ? MOBILE_SMALL_HEADER_NO_HISTORY_HEIGHT_REM : MOBILE_SMALL_HEADER_HEIGHT_REM : headerWithoutWinHistory ? MOBILE_NORMAL_HEADER_NO_HISTORY_HEIGHT_REM : MOBILE_NORMAL_HEADER_HEIGHT_REM;
        const footerHeightRem = isSmallDevice ? MOBILE_SMALL_FOOTER_HEIGHT_REM : MOBILE_NORMAL_FOOTER_HEIGHT_REM;
        headerHeightPx = headerHeightRem * rootFontSizePx;
        footerHeightPx = footerHeightRem * rootFontSizePx;
      } else {
        headerHeightPx = DESKTOP_HEADER_HEIGHT_REM * rootFontSizePx;
        footerHeightPx = DESKTOP_FOOTER_HEIGHT_REM * rootFontSizePx;
      }
      const loadingHeaderHeightPx = headerHeightPx + extraHalfHeightPx;
      const loadingFooterHeightPx = footerHeightPx + extraHalfHeightPx;
      const loadingHeaderHeightRem = loadingHeaderHeightPx / rootFontSizePx;
      const loadingFooterHeightRem = loadingFooterHeightPx / rootFontSizePx;
      const loadingWidthRem = parseFloat(layoutWidthPx) / rootFontSizePx;
      setAnimationValues({
        headerHeight: loadingHeaderHeightRem,
        footerHeight: loadingFooterHeightRem,
        layoutWidth: loadingWidthRem
      });
    };
    updateHeight();
    const observer = new MutationObserver(() => {
      updateHeight();
    });
    observer.observe(documentElement, { attributes: true, attributeFilter: ["style"] });
    return () => {
      observer.disconnect();
    };
  }, [isSmallDevice, loadingStage, headerWithoutWinHistory]);
  const mainBoardBound = reactExports.useMemo(() => {
    const { headerHeight, footerHeight, layoutWidth } = animationValues;
    const baseAnimate = {
      height: "calc(100% - ".concat(headerHeight, "rem - ").concat(footerHeight, "rem)"),
      width: "".concat(layoutWidth, "rem"),
      top: "".concat(headerHeight, "rem")
    };
    return {
      initial: {
        height: "110%",
        width: "110%",
        top: "-5%"
      },
      animate: isSmallDevice ? {
        ...baseAnimate,
        marginLeft: "-".concat(SMALL_DEVICE_MARGIN_LEFT_REM, "rem")
      } : baseAnimate
    };
  }, [animationValues, isSmallDevice]);
  const boundedStyle = reactExports.useMemo(() => {
    const { headerHeight, footerHeight, layoutWidth } = animationValues;
    const rootElement = document.documentElement;
    const rootFontSizePx = parseFloat(getComputedStyle(rootElement).fontSize) || 16;
    const viewportHeight = window.innerHeight;
    const headerHeightPx = headerHeight * rootFontSizePx;
    const footerHeightPx = footerHeight * rootFontSizePx;
    const availableHeightPx = viewportHeight - headerHeightPx - footerHeightPx;
    const availableHeightPercent = availableHeightPx / viewportHeight * 100;
    const topPercent = headerHeightPx / viewportHeight * 100;
    const baseStyle = {
      height: "".concat(availableHeightPercent, "%"),
      width: "".concat(layoutWidth, "rem"),
      top: "".concat(topPercent, "%")
    };
    return isSmallDevice ? { ...baseStyle, marginLeft: "-".concat(SMALL_DEVICE_MARGIN_LEFT_REM, "rem") } : baseStyle;
  }, [animationValues, isSmallDevice]);
  const loadingOverlayAnimation = reactExports.useMemo(() => {
    const { headerHeight, footerHeight, layoutWidth } = animationValues;
    const rootElement = document.documentElement;
    const rootFontSizePx = parseFloat(getComputedStyle(rootElement).fontSize) || 16;
    const viewportHeight = window.innerHeight;
    const headerHeightPx = headerHeight * rootFontSizePx;
    const footerHeightPx = footerHeight * rootFontSizePx;
    const availableHeightPx = viewportHeight - headerHeightPx - footerHeightPx;
    const availableHeightPercent = availableHeightPx / viewportHeight * 100;
    const topPercent = headerHeightPx / viewportHeight * 100;
    const baseStyle = {
      height: "".concat(availableHeightPercent, "%"),
      width: "".concat(layoutWidth, "rem"),
      top: "".concat(topPercent, "%")
    };
    const overlayBoundedStyle = isSmallDevice ? { ...baseStyle, marginLeft: "-".concat(SMALL_DEVICE_MARGIN_LEFT_REM, "rem") } : baseStyle;
    const baseAnimation = {
      initial: { ...overlayBoundedStyle, opacity: 0 },
      animate: { ...overlayBoundedStyle, opacity: 1 },
      transition: { duration: 0 }
    };
    if (loadingStage === LoadingStageEnum.Init) {
      return baseAnimation;
    }
    if (loadingStage >= LoadingStageEnum.PostLoaded1) {
      if (isMobileDevice) {
        const shrunkHeightPercent = availableHeightPercent * 0.8;
        const shrunkStyle = {
          ...baseStyle,
          height: "".concat(shrunkHeightPercent, "%"),
          ...isSmallDevice && { marginLeft: "-".concat(SMALL_DEVICE_MARGIN_LEFT_REM, "rem") }
        };
        return {
          initial: overlayBoundedStyle,
          animate: shrunkStyle,
          transition: { duration: 2, ease: [0.33, 1, 0.68, 1] }
        };
      } else {
        return baseAnimation;
      }
    }
    return baseAnimation;
  }, [animationValues, isSmallDevice, loadingStage]);
  return {
    animationValues,
    mainBoardBound,
    loadingOverlayAnimation,
    boundedStyle
  };
}
function LoadingBackground({ desktopBG, mobileBG, gameId }) {
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const animProps = reactExports.useMemo(() => {
    const base = {
      initial: {
        opacity: 0,
        filter: "blur(".concat(isMobileDevice ? 4 : 12, "px)"),
        height: "100%",
        top: isMobileDevice ? "-4.5rem" : "0"
      },
      transition: {
        height: { duration: 1.8, ease: [0.33, 1, 0.68, 1] },
        top: { duration: 1.8, ease: [0.33, 1, 0.68, 1] },
        default: { duration: 2, ease: [0.8, 0, 0.9, 1] }
      }
    };
    let animate;
    if (loadingStage >= LoadingStageEnum.PostLoaded3) {
      animate = {
        opacity: 0.9,
        filter: "blur(0px)",
        height: isMobileDevice && gameId === "baccarat" ? "calc(100% - 9.8rem)" : "100%",
        top: isMobileDevice ? "-7rem" : "0"
      };
      base.transition.default = { duration: 0.85, ease: [0.8, 0, 0.9, 1] };
    } else if (loadingStage >= LoadingStageEnum.PostLoaded1) {
      animate = {
        opacity: 0.6,
        height: isMobileDevice ? "calc(100% - 9.8rem)" : "100%",
        top: isMobileDevice ? "-7rem" : "0"
      };
    } else if (loadingStage >= LoadingStageEnum.Idle) {
      animate = {
        opacity: 0.6
      };
    } else {
      animate = {
        opacity: 0
      };
    }
    return { ...base, animate };
  }, [gameId, loadingStage]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: cn("loadingScreenBG", { isMobileDevice }),
      style: { backgroundImage: "url(".concat(isMobileDevice ? mobileBG : desktopBG, ")") },
      ...animProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loadingFadeout absolute bottom-[-2rem] left-0 h-full w-full" })
    }
  );
}
const gambleAware = "" + new URL("gambleAware-SB5OHib9.webp", import.meta.url).href;
const mga = "" + new URL("MGA-D0PpxxAF.webp", import.meta.url).href;
function LoadingFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: cn("loadingFooter", "absolute flex flex-col justify-end opacity-60"),
      initial: { opacity: 0 },
      animate: { opacity: 0.6 },
      transition: { duration: 1, delay: 1 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("icons", "center"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: gambleAware,
              alt: "Gamble Aware"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: mga,
              alt: "MGA"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.IKG, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.AdultOnly, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info", children: "Crystal is a premium sub-brand operated by IKG LLC, dedicated to delivering exceptional live Baccarat experiences. We operate under the strict regulations of the Malta Gaming Authority, ensuring a secure and fair gaming environment." })
      ]
    }
  );
}
const DESTROY_OPTIONS = {
  children: true,
  textureSource: true
};
const killSprites = (refs, stage) => {
  const core = useStageStore.getState().core;
  const removeObject = (obj) => {
    obj == null ? void 0 : obj.destroy(DESTROY_OPTIONS);
    if (core == null ? void 0 : core.stage) {
      core.stage.removeChild(obj);
    }
  };
  refs.forEach((ref) => {
    if (Array.isArray(ref.current)) {
      ref.current.forEach(removeObject);
      ref.current = [];
    } else if (ref.current) {
      removeObject(ref.current);
      ref.current = null;
    }
  });
};
const DEFAULT_PROGRESS = 1;
const _VideoPreloadManager = class _VideoPreloadManager {
  constructor() {
    __publicField(this, "cache", /* @__PURE__ */ new Map());
    __publicField(this, "progress", /* @__PURE__ */ new Map());
  }
  static getInstance() {
    if (!this.instance) this.instance = new _VideoPreloadManager();
    return this.instance;
  }
  async preloadVideo(url, onProgress) {
    if (this.isVideoCached(url)) return onProgress == null ? void 0 : onProgress(DEFAULT_PROGRESS);
    if (this.isDownloadComplete(url)) return onProgress == null ? void 0 : onProgress(DEFAULT_PROGRESS);
    try {
      await this.downloadVideo(url, onProgress);
    } catch (error) {
      console.error("Failed to preload video:", error);
      throw error;
    }
  }
  async getVideoForPlayback(url) {
    var _a2, _b2;
    return (_b2 = (_a2 = this.cache.get(url)) == null ? void 0 : _a2.blob) != null ? _b2 : null;
  }
  getPreloadStatus(url) {
    const progress = this.progress.get(url);
    if (!progress) return null;
    return {
      loaded: progress.loaded,
      total: progress.total,
      progress: this.calculateProgress(progress.loaded, progress.total)
    };
  }
  getCacheSize() {
    return Array.from(this.cache.values()).reduce((total, { blob }) => total + blob.size, 0);
  }
  getCachedUrls() {
    return Array.from(this.cache.keys());
  }
  clearCache(url) {
    this.cache.delete(url);
    this.progress.delete(url);
  }
  isVideoCached(url) {
    return this.cache.has(url);
  }
  isDownloadComplete(url) {
    const progress = this.progress.get(url);
    return progress ? progress.loaded === progress.total : false;
  }
  async downloadVideo(url, onProgress) {
    const response = await this.fetchVideo(url);
    const contentLength = this.getContentLength(response.headers);
    this.initializeProgress(url, contentLength);
    if (!contentLength) return await this.handleEmptyContent(url, response, onProgress);
    await this.downloadWithProgress(url, response, contentLength, onProgress);
  }
  async fetchVideo(url) {
    const response = await fetch(url);
    if (!response.ok || !response.body) throw new Error("Failed to fetch video: ".concat(response.statusText));
    return response;
  }
  getContentLength(headers) {
    return parseInt(headers.get("content-length") || "0");
  }
  initializeProgress(url, total) {
    this.progress.set(url, { url, loaded: 0, total });
  }
  async handleEmptyContent(url, response, onProgress) {
    const blob = await response.blob();
    this.cacheVideo(url, blob);
    onProgress == null ? void 0 : onProgress(DEFAULT_PROGRESS);
  }
  async downloadWithProgress(url, response, contentLength, onProgress) {
    const reader = response.body.getReader();
    const chunks = [];
    let receivedLength = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      receivedLength += value.length;
      this.updateProgress(url, receivedLength, contentLength);
      onProgress == null ? void 0 : onProgress(this.calculateProgress(receivedLength, contentLength));
    }
    const blob = this.createBlob(chunks, response.headers);
    this.cacheVideo(url, blob);
    this.finalizeProgress(url, contentLength);
  }
  updateProgress(url, loaded, total) {
    this.progress.set(url, { url, loaded, total });
  }
  calculateProgress(loaded, total) {
    return total > 0 ? loaded / total : 0;
  }
  createBlob(chunks, headers) {
    var _a2;
    const contentType = (_a2 = headers.get("content-type")) != null ? _a2 : void 0;
    return new Blob(chunks, { type: contentType });
  }
  cacheVideo(url, blob) {
    this.cache.set(url, { blob });
  }
  finalizeProgress(url, total) {
    this.progress.set(url, { url, loaded: total, total });
  }
};
__publicField(_VideoPreloadManager, "instance");
let VideoPreloadManager = _VideoPreloadManager;
const videoManager = VideoPreloadManager.getInstance();
const fragment = "in vec2 vTextureCoord;\nuniform sampler2D uTexture;\n\nvoid main(void)\n{\n    // Read the color from the video texture.\n    // Since the video was exported with premultiplied alpha against black,\n    // videoColor.rgb is already (original_color.rgb * original_alpha).\n    vec4 videoColor = texture2D(uTexture, vTextureCoord);\n\n    // For content premultiplied against black, the most accurate way to\n    // retrieve the original alpha is to take the maximum of the R, G, or B channels.\n    // Using luminance can be inaccurate for saturated, non-white colors.\n    float alpha = max(videoColor.r, max(videoColor.g, videoColor.b));\n\n    // Use a smoothstep to crush the very darkest pixels to full transparency.\n    // Adjust the second parameter (e.g., 0.05) to control the threshold.\n    // alpha = smoothstep(0.0, 0.05, alpha);\n\n    // The final output needs to be a premultiplied RGBA vector.\n    // We use the original premultiplied RGB from the video and pair it\n    // with our accurately extracted alpha.\n    gl_FragColor = vec4(videoColor.rgb, alpha);\n}";
const vertex = "in vec2 aPosition;\nout vec2 vTextureCoord;\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0 * uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}";
const PLAYBACK_FPS = 24;
const FRAME_TIME = 1 / PLAYBACK_FPS;
const FADE_SPEED = 0.03;
const FADE_DELAY_MS = 500;
const CTX_OPTS = {
  willReadFrequently: true,
  powerPreference: "low-power"
};
function useLoadingDissolveEffect({
  gameIconDissolve,
  gameIconRef,
  shouldRender,
  gameId
}) {
  const core = useStageStore((s) => s.core);
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const getWidthScale = (gameId2) => {
    switch (gameId2) {
      case "roulette":
        return 3.03;
      case "baccarat":
      case "sicbo":
        return 1.7;
      default:
        return 1;
    }
  };
  const widthScale = getWidthScale(gameId);
  const gameIconCtnRef = reactExports.useRef(null);
  const gameIconSpriteRef = reactExports.useRef(null);
  const vidSpriteRef = reactExports.useRef(null);
  const vidEleRef = reactExports.useRef(null);
  const vidSrcRef = reactExports.useRef(null);
  const frameBufferRef = reactExports.useRef(null);
  const fadeTimerRef = reactExports.useRef(null);
  const elapsedRef = reactExports.useRef(0);
  const createContainer = () => {
    if (!gameIconCtnRef.current && core) {
      gameIconCtnRef.current = new Container();
      core.stage.addChild(gameIconCtnRef.current);
    }
  };
  const createVideoSprite = async () => {
    if (!vidSpriteRef.current && core && gameIconCtnRef.current) {
      try {
        const blob = await videoManager.getVideoForPlayback(gameIconDissolve);
        if (!blob) throw new Error("Video not preloaded or cached properly: ".concat(gameIconDissolve));
        vidEleRef.current = document.createElement("video");
        vidSrcRef.current = URL.createObjectURL(blob);
        vidEleRef.current.src = vidSrcRef.current;
        vidEleRef.current.muted = true;
        vidEleRef.current.loop = false;
        vidEleRef.current.autoplay = false;
        vidEleRef.current.playsInline = true;
        vidEleRef.current.currentTime = 0;
        vidEleRef.current.load();
        await new Promise((resolve, reject) => {
          var _a2, _b2;
          (_a2 = vidEleRef.current) == null ? void 0 : _a2.addEventListener("loadedmetadata", () => resolve(), { once: true });
          (_b2 = vidEleRef.current) == null ? void 0 : _b2.addEventListener("error", (err) => reject(err), { once: true });
        });
        const vidRatio = vidEleRef.current.videoWidth / vidEleRef.current.videoHeight;
        frameBufferRef.current = document.createElement("canvas");
        frameBufferRef.current.width = core.screen.width;
        frameBufferRef.current.height = core.screen.width / vidRatio;
        const ctx = frameBufferRef.current.getContext("2d", CTX_OPTS);
        ctx == null ? void 0 : ctx.drawImage(vidEleRef.current, 0, 0, frameBufferRef.current.width, frameBufferRef.current.height);
        const canvasTexture = Texture.from(frameBufferRef.current);
        vidSpriteRef.current = new Sprite(canvasTexture);
        vidSpriteRef.current.anchor.set(0.5);
        vidSpriteRef.current.alpha = 0;
        const filter = new Filter({ glProgram: new GlProgram({ fragment, vertex }), resolution: 2, antialias: true });
        vidSpriteRef.current.filters = [filter];
        gameIconCtnRef.current.addChild(vidSpriteRef.current);
      } catch (error) {
        console.error("Failed to create video sprite:", error);
      }
    }
  };
  const createGameIconSprite = () => {
    if (!gameIconSpriteRef.current && gameIconRef.current && core && gameIconCtnRef.current) {
      const graphics = new Graphics().svg(gameIconRef.current.innerHTML || "");
      const logoTexture = core.renderer.generateTexture(graphics);
      gameIconSpriteRef.current = new Sprite(logoTexture);
      gameIconSpriteRef.current.anchor.set(0.5);
      gameIconSpriteRef.current.alpha = 0;
      gameIconCtnRef.current.addChild(gameIconSpriteRef.current);
    }
  };
  const renderVideo = reactExports.useCallback(
    (ticker) => {
      var _a2;
      const currStage = useLoadingStore.getState().loadingStage;
      const shouldPlay = currStage >= LoadingStageEnum.PostLoaded3 && currStage <= LoadingStageEnum.PostLoaded4;
      if (!core || !shouldPlay || !gameIconRef.current || !vidSpriteRef.current || !vidEleRef.current || !frameBufferRef.current) return;
      const { left, top, width, height } = gameIconRef.current.getBoundingClientRect();
      const factor = useLayoutStore.getState().rootEmFontSize / 16;
      const vidRatio = vidEleRef.current.videoWidth / vidEleRef.current.videoHeight;
      const canvasRect = core.canvas.getBoundingClientRect();
      const frameBuffer = frameBufferRef.current;
      const TOP_OFFSET = 2 * factor + 1;
      const WIDTH_SCALE = widthScale;
      vidSpriteRef.current.x = left + width / 2 - canvasRect.left;
      vidSpriteRef.current.y = top + height / 2 - canvasRect.top - TOP_OFFSET;
      vidSpriteRef.current.width = width * WIDTH_SCALE;
      vidSpriteRef.current.height = width * WIDTH_SCALE / vidRatio;
      vidSpriteRef.current.alpha = 1;
      elapsedRef.current += ticker.deltaMS / 1e3;
      if (elapsedRef.current >= FRAME_TIME) {
        elapsedRef.current %= FRAME_TIME;
        const next = vidEleRef.current.currentTime + FRAME_TIME;
        vidEleRef.current.currentTime = next;
        const ctx = frameBuffer == null ? void 0 : frameBuffer.getContext("2d", CTX_OPTS);
        ctx.drawImage(vidEleRef.current, 0, 0, frameBuffer.width, frameBuffer.height);
        (_a2 = vidSpriteRef.current) == null ? void 0 : _a2.texture.source.update();
      }
    },
    // TODO: Fixing this warning directly may break some functionality. This will require future refactoring.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [core]
  );
  const renderGameIcon = reactExports.useCallback(
    (ticker) => {
      if (!gameIconSpriteRef.current || !gameIconRef.current || !core) return;
      const sprite = gameIconSpriteRef.current;
      const currStage = useLoadingStore.getState().loadingStage;
      const shouldFade = currStage >= LoadingStageEnum.PostLoaded3;
      if (!shouldFade) {
        sprite.alpha = 0;
        fadeTimerRef.current = null;
        return;
      }
      if (fadeTimerRef.current === null) {
        fadeTimerRef.current = 0;
        sprite.alpha = 1;
      }
      fadeTimerRef.current += ticker.deltaMS;
      if (fadeTimerRef.current >= FADE_DELAY_MS && sprite.alpha > 0) {
        sprite.alpha = Math.max(0, sprite.alpha - FADE_SPEED);
      }
      if (sprite.alpha > 0) {
        const factor = useLayoutStore.getState().rootEmFontSize / 16;
        const divRect = gameIconRef.current.getBoundingClientRect();
        const canvasRect = core.canvas.getBoundingClientRect();
        const TOP_OFFSET = 0.75 * factor;
        const HEIGHT_OFFSET = 2 * factor;
        sprite.width = divRect.width;
        sprite.height = divRect.height - HEIGHT_OFFSET;
        sprite.x = divRect.left - canvasRect.left + divRect.width / 2;
        sprite.y = divRect.top - canvasRect.top - TOP_OFFSET + divRect.height / 2;
      }
    },
    // TODO: Fixing this warning directly may break some functionality. This will require future refactoring.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [core]
  );
  const cleanup = () => {
    var _a2, _b2;
    core == null ? void 0 : core.ticker.remove(renderGameIcon);
    core == null ? void 0 : core.ticker.remove(renderVideo);
    killSprites([gameIconCtnRef]);
    gameIconCtnRef.current = null;
    gameIconSpriteRef.current = null;
    vidSpriteRef.current = null;
    (_a2 = frameBufferRef.current) == null ? void 0 : _a2.remove();
    frameBufferRef.current = null;
    (_b2 = vidEleRef.current) == null ? void 0 : _b2.remove();
    vidEleRef.current = null;
    if (vidSrcRef.current) {
      videoManager.clearCache(gameIconDissolve);
      URL.revokeObjectURL(vidSrcRef.current);
      vidSrcRef.current = null;
    }
  };
  reactExports.useEffect(() => {
    if (loadingStage !== LoadingStageEnum.Loaded) return;
    const init = async () => {
      try {
        cleanup();
        createContainer();
        await createVideoSprite();
        createGameIconSprite();
        core == null ? void 0 : core.ticker.add(renderGameIcon);
        core == null ? void 0 : core.ticker.add(renderVideo);
      } catch (error) {
        console.error("Loading dissolve effect cannot be loaded properly.", error);
      }
    };
    init();
  }, [core, renderGameIcon, renderVideo, loadingStage]);
  reactExports.useEffect(() => {
    if (!shouldRender) cleanup();
  }, [shouldRender]);
}
const DissolveEffect = ({
  gameIconDissolve,
  gameIconRef,
  shouldRender,
  gameId
}) => {
  useLoadingDissolveEffect({ gameIconDissolve, gameIconRef, shouldRender, gameId });
  return null;
};
const PPA_OFFSETS = {
  baccarat: {
    desktop: { x: -6, y: -4 },
    mobile: { x: 0, y: -21 },
    mobileCompact: { x: 0, y: -20 }
  },
  sicbo: {
    desktop: { x: -7, y: -2 },
    mobile: { x: 0, y: -20 },
    mobileCompact: { x: 0, y: -18.9 }
  }
};
const DEFAULT_OFFSET = { x: 0, y: 0 };
function LoadingLogo({ topIcon, gameIcon, bottomIcon, gameIconDissolve, loadingOverlayRef, gameId }) {
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const isLoadingFinished = useLoadingStore((s) => s.isLoadingFinished);
  const shouldFadeOut = loadingStage >= LoadingStageEnum.PostLoaded3;
  const shouldRender = !isLoadingFinished;
  const shouldTranslate = loadingStage >= LoadingStageEnum.PostLoaded1;
  const gameIconRef = reactExports.useRef(null);
  const wrapperRef = reactExports.useRef(null);
  const [translateX, setTranslateX] = reactExports.useState(0);
  const [translateY, setTranslateY] = reactExports.useState(0);
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const center = reactExports.useCallback(() => {
    var _a2;
    const factor = useLayoutStore.getState().rootEmFontSize;
    if (shouldTranslate && isMobileDevice && gameId === "baccarat") {
      const overlayEle = loadingOverlayRef.current;
      const boundaryEle = document.querySelector("[data-loading-logo-boundary]");
      const boundary = parseFloat((boundaryEle == null ? void 0 : boundaryEle.getAttribute("data-loading-logo-boundary")) || "0") * factor;
      const { height } = (overlayEle == null ? void 0 : overlayEle.getBoundingClientRect()) || { height: 0 };
      const center2 = height / 2;
      const remain = height - boundary;
      const remainCenter = remain / 2;
      setTranslateX(0);
      setTranslateY(-(center2 - remainCenter));
      return;
    }
    const deviceKey = isDesktop ? "desktop" : isSmallDevice ? "mobileCompact" : "mobile";
    const offsets = (_a2 = PPA_OFFSETS[gameId]) == null ? void 0 : _a2[deviceKey];
    if (offsets) {
      setTranslateX(offsets.x);
      setTranslateY(offsets.y);
    } else {
      setTranslateX(DEFAULT_OFFSET.x);
      setTranslateY(DEFAULT_OFFSET.y);
    }
  }, [gameId, isSmallDevice, loadingOverlayRef, shouldTranslate]);
  reactExports.useEffect(() => {
    if (!shouldRender) return;
    center();
    const overlayEle = loadingOverlayRef.current;
    const observer = new ResizeObserver(center);
    if (overlayEle) observer.observe(overlayEle);
    else observer.disconnect();
    return () => {
      observer.disconnect();
    };
  }, [shouldTranslate, shouldRender, loadingOverlayRef, gameId, isSmallDevice, center]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    shouldRender && gameIconDissolve && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DissolveEffect,
      {
        gameIconDissolve,
        gameIconRef,
        shouldRender,
        gameId
      }
    ),
    shouldRender && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: wrapperRef,
        className: cn("loadingLogo origin-center", "".concat(gameId), {
          shouldTranslate,
          shouldFadeOut
        }),
        style: { transform: "translate(".concat(translateX, "px, ").concat(translateY, "px)") },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "topIcon", children: topIcon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "gameIcon",
              ref: gameIconRef,
              children: gameIcon
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bottomIcon", children: bottomIcon })
        ]
      },
      "loadingLogo"
    )
  ] });
}
const MESSAGE_CHANGE_INTERVAL = 1e3;
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
function LoadingMessages({ loadingTextOptions }) {
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const { t: t2 } = useTranslation();
  const [currentMessage, setCurrentMessage] = reactExports.useState("");
  const poolRef = reactExports.useRef([]);
  const drawOne = reactExports.useCallback(() => {
    return poolRef.current.pop() || null;
  }, []);
  const showRandomMessage = reactExports.useCallback(() => {
    let message = drawOne();
    if (!message && (loadingTextOptions == null ? void 0 : loadingTextOptions.length)) {
      poolRef.current = shuffleArray(loadingTextOptions);
      message = drawOne();
    }
    if (message) {
      setCurrentMessage(t2(message));
    }
  }, [drawOne, loadingTextOptions, t2]);
  reactExports.useEffect(() => {
    const shouldShowMessages = (loadingTextOptions == null ? void 0 : loadingTextOptions.length) && loadingStage >= LoadingStageEnum.Loading;
    if (!shouldShowMessages) {
      return;
    }
    poolRef.current = shuffleArray(loadingTextOptions);
    showRandomMessage();
    const interval = setInterval(showRandomMessage, MESSAGE_CHANGE_INTERVAL);
    return () => clearInterval(interval);
  }, [loadingStage, loadingTextOptions, showRandomMessage]);
  const shouldRender = (loadingTextOptions == null ? void 0 : loadingTextOptions.length) && loadingStage >= LoadingStageEnum.Loading;
  if (!shouldRender) return null;
  const fontSize = isMobileDevice ? "0.7rem" : "1rem";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("loadingMessages"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "loadingMessage",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.4, ease: [0.25, 0, 0.25, 1] },
      style: { fontSize },
      children: currentMessage
    },
    currentMessage
  ) }) });
}
function LoadingOverlay(props) {
  const {
    loadingOverlayAnimation,
    boundedStyle,
    desktopBG,
    mobileBG,
    topIcon,
    gameIcon,
    bottomIcon,
    gameIconDissolve,
    loadingTextOptions,
    gameId
  } = props;
  const loadingOverlayRef = reactExports.useRef(null);
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const shouldShowContent = loadingStage >= LoadingStageEnum.Idle && loadingStage < LoadingStageEnum.PostLoaded1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "loadingOverlay bg-black",
        style: { ...boundedStyle },
        ref: loadingOverlayRef,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LoadingBackground,
            {
              desktopBG,
              mobileBG,
              gameId
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LoadingLogo,
            {
              topIcon,
              gameIcon,
              bottomIcon,
              gameId,
              gameIconDissolve,
              loadingOverlayRef
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "loadingOverlay",
        ...loadingOverlayAnimation,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: shouldShowContent && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: shouldShowContent ? 1 : 0 },
            transition: shouldShowContent ? { duration: 0.7, ease: "linear" } : { duration: 2 },
            className: "loadingContent",
            exit: { opacity: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingMessages, { loadingTextOptions }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingFooter, {})
            ]
          }
        ) })
      }
    )
  ] });
}
function MainBoard({ mainBoardBound }) {
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const isCompact = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const shouldFadeOut = loadingStage < LoadingStageEnum.PostLoaded2;
  const [animComplete, setAnimComplete] = reactExports.useState(false);
  const onAnimationComplete = (def) => {
    if (def !== "animate") return;
    setAnimComplete(true);
  };
  const createMainBoardAnimation = reactExports.useMemo(() => {
    const baseAnimation = { initial: "initial", variants: mainBoardBound };
    const ease = [0.1, 0, 0.2, 1];
    if (loadingStage >= LoadingStageEnum.Idle) {
      return {
        ...baseAnimation,
        animate: "animate",
        transition: { duration: 1.5, ease }
      };
    } else {
      return {
        ...baseAnimation,
        animate: "initial"
      };
    }
  }, [loadingStage, mainBoardBound]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: shouldFadeOut && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      id: "MainBoard",
      className: cn("fixed z-10", { isCompact, animComplete }),
      exit: { opacity: 0 },
      onAnimationComplete,
      ...createMainBoardAnimation
    }
  ) });
}
function LoadingScreen({ resources: resources2 }) {
  const {
    headerWithoutWinHistory = false,
    loadingTextOptions,
    desktopBG,
    mobileBG,
    topIcon,
    gameIcon,
    bottomIcon,
    gameIconDissolve,
    gameId
  } = resources2;
  const isSmallDevice = useConfigStore.getState().IS_SMALL_DEVICE;
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const { mainBoardBound, loadingOverlayAnimation, boundedStyle } = useLoadingCalculations(headerWithoutWinHistory);
  const shouldShowMainBoard = loadingStage < LoadingStageEnum.PostLoaded3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "LoadingScreen",
      className: cn({ mb: isMobileDevice, sd: isSmallDevice, "z-[1]": shouldShowMainBoard }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoadingOverlay,
          {
            loadingOverlayAnimation,
            boundedStyle,
            desktopBG,
            mobileBG,
            topIcon,
            gameIcon,
            bottomIcon,
            gameIconDissolve,
            gameId,
            loadingTextOptions
          }
        ),
        shouldShowMainBoard && /* @__PURE__ */ jsxRuntimeExports.jsx(MainBoard, { mainBoardBound })
      ]
    }
  );
}
var ResourceType = /* @__PURE__ */ ((ResourceType2) => {
  ResourceType2["Image"] = "image";
  ResourceType2["Video"] = "video";
  ResourceType2["Json"] = "json";
  ResourceType2["Audio"] = "audio";
  ResourceType2["PixiJson"] = "pixiJson";
  return ResourceType2;
})(ResourceType || {});
const CACHE_NAME = "react-live-resources";
const { decrementResources } = useLoadingStore.getState();
async function checkStorageQuota() {
  if (!("storage" in navigator) || !("estimate" in navigator.storage)) {
    return null;
  }
  try {
    const estimate = await navigator.storage.estimate();
    if (!estimate.quota || !estimate.usage) {
      return null;
    }
    const usage = estimate.usage;
    const quota = estimate.quota;
    const ratio = usage / quota;
    if (ratio > 0.9) {
      console.warn(
        "Storage quota warning: ".concat(Math.round(ratio * 100), "% used (").concat(Math.round(usage / 1024 / 1024), "MB / ").concat(Math.round(quota / 1024 / 1024), "MB)")
      );
    }
    return { usage, quota, ratio };
  } catch (error) {
    console.warn("Failed to check storage quota:", error);
    return null;
  }
}
function shouldPruneCache() {
  {
    return true;
  }
}
async function pruneCache(checkLocalStorage = true) {
  if (checkLocalStorage && !shouldPruneCache()) {
    return;
  }
  try {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(async (cacheName) => {
        if (cacheName.startsWith(CACHE_NAME)) {
          await caches.delete(cacheName);
        }
      })
    );
  } catch (error) {
    console.error("Failed to prune cache:", error);
  }
}
async function loadResource(type, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch ".concat(type, ": ").concat(url));
    }
    if (type === ResourceType.Video) {
      await videoManager.preloadVideo(url);
    } else if (type === ResourceType.PixiJson) {
      await Assets.load(url);
    }
    decrementResources(url);
  } catch (error) {
    console.error("Failed to preload ".concat(type, ": ").concat(url), error);
    if (type === ResourceType.Video) {
      videoManager.clearCache(url);
    }
    decrementResources(url);
  }
}
const useAppLoader = (preloadResources2, AppPromise2) => {
  const addToResources = useLoadingStore((state) => state.addToResources);
  const decrementResources2 = useLoadingStore((state) => state.decrementResources);
  const IS_CLOSE_SERVER = useConfigStore((state) => state.IS_CLOSE_SERVER);
  const loadingStage = useLoadingStore((state) => state.loadingStage);
  const progress = useLoadingStore((state) => {
    const { totalResources, resources: resources2 } = state;
    if (totalResources === 0) return 0;
    return (totalResources - resources2.size) / totalResources;
  });
  const isUpdatingStageRef = reactExports.useRef(false);
  const isPreloadStartedRef = reactExports.useRef(false);
  const resourcesArray = reactExports.useMemo(() => Object.values(preloadResources2), [preloadResources2]);
  reactExports.useEffect(() => {
    resourcesArray.forEach(({ url }) => {
      if (url) addToResources(url);
    });
    if (!IS_CLOSE_SERVER) {
      addToResources(LoadingResourceEnum.ConnectToRGS);
      addToResources(LoadingResourceEnum.SyncWallet);
    }
    connectWS();
  }, [IS_CLOSE_SERVER, addToResources, resourcesArray]);
  reactExports.useEffect(() => {
    if (loadingStage !== LoadingStageEnum.Idle || isPreloadStartedRef.current) return;
    isPreloadStartedRef.current = true;
    pruneCache().then(() => {
      resourcesArray.forEach(({ type, url }) => loadResource(type, url));
    });
    AppPromise2.then(() => {
      decrementResources2(LoadingResourceEnum.AppPromise);
    }).catch((err) => {
      console.error("Failed to load lazy app promise", err);
    });
  }, [AppPromise2, decrementResources2, loadingStage, resourcesArray]);
  reactExports.useEffect(() => {
    if (loadingStage === LoadingStageEnum.Init || loadingStage >= LoadingStageEnum.Loaded || isUpdatingStageRef.current) return;
    let targetStage = LoadingStageEnum.Idle;
    if (progress >= 0.1) targetStage = LoadingStageEnum.Loading;
    if (progress >= 1) targetStage = LoadingStageEnum.Loaded;
    const nextStage = loadingStage + 1;
    if (nextStage <= targetStage && nextStage !== loadingStage) {
      isUpdatingStageRef.current = true;
      const updateStage = async () => {
        await sleep(1e3);
        useLoadingStore.setState({ loadingStage: nextStage });
        isUpdatingStageRef.current = false;
      };
      updateStage();
    }
  }, [progress, loadingStage]);
  useLoadingLightEffect();
};
function LoadingProvider(props) {
  const { children, AppPromise: AppPromise2, preloadResources: preloadResources2, loadingResources: loadingResources2 } = props;
  const { desktopBG, mobileBG } = loadingResources2;
  useAppLoader(preloadResources2, AppPromise2);
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const isLoadingFinished = useLoadingStore((s) => s.isLoadingFinished);
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const shouldRenderApp = useTransitionMount(loadingStage >= LoadingStageEnum.Loaded);
  const interactionBlockOverlay = !isLoadingFinished;
  const showMainBG = loadingStage >= LoadingStageEnum.Idle;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "LoadingProvider",
      className: cn({ isSmallDevice }),
      children: [
        interactionBlockOverlay && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "interactionBlockOverlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: showMainBG ? "mainBG" : "",
            style: { backgroundImage: showMainBG ? "url(".concat(isMobileDevice ? mobileBG : desktopBG, ")") : "black" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { resources: loadingResources2 }),
        shouldRenderApp && children
      ]
    }
  );
}
function Stage({ className }) {
  const decrementResources2 = useLoadingStore((s) => s.decrementResources);
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const core = useStageStore((s) => s.core);
  const canvasRef = reactExports.useRef(null);
  const wrapperRef = reactExports.useRef(null);
  const isInitializingRef = reactExports.useRef(false);
  const resizeTimeoutRef = reactExports.useRef(null);
  const animationFrameRef = reactExports.useRef(null);
  const { isIdleTimeout, isExpired, isMultiSession } = useNetworkStore((state) => ({
    isIdleTimeout: state.isIdleTimeout,
    isExpired: state.isExpired,
    isMultiSession: state.isMultiSession
  }));
  const resize = reactExports.useCallback(() => {
    var _a2;
    if (!wrapperRef.current || !canvasRef.current || !core || !core.renderer) return;
    const root = document.getElementById("root");
    const { width, height } = (_a2 = root == null ? void 0 : root.getBoundingClientRect()) != null ? _a2 : { width: 0, height: 0 };
    const isCompact = useConfigStore.getState().IS_SMALL_DEVICE && isMobileDevice;
    const ratio = useLayoutStore.getState().rootEmFontSize;
    const factor = ratio / 16;
    const offset = isCompact || isDesktop ? DIST_TO_LEFT_EDGE * factor : 0;
    core.renderer.resolution = Math.max(Math.min(window.devicePixelRatio, 2), 1);
    core.renderer.resize(width + offset, height);
    canvasRef.current.style.width = "".concat(width + offset, "px");
    canvasRef.current.style.height = "".concat(height, "px");
    wrapperRef.current.style.width = "".concat(width + offset, "px");
    wrapperRef.current.style.height = "".concat(height, "px");
    wrapperRef.current.style.left = "".concat(offset * -1, "px");
    core.render();
  }, [core]);
  const debouncedResize = reactExports.useCallback(() => {
    const delay = loadingStage >= LoadingStageEnum.PostLoaded4 ? 16 : 0;
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    resizeTimeoutRef.current = setTimeout(() => {
      animationFrameRef.current = requestAnimationFrame(resize);
    }, delay);
  }, [resize, loadingStage]);
  const init = reactExports.useCallback(async () => {
    if (!canvasRef.current) return;
    if (useStageStore.getState().core || isInitializingRef.current) return;
    isInitializingRef.current = true;
    const app = new Application();
    await app.init({
      width: 0,
      height: 0,
      backgroundAlpha: 0,
      antialias: false,
      powerPreference: "low-power",
      resolution: Math.max(Math.min(window.devicePixelRatio, 2), 1),
      // autoStart: false,
      canvas: canvasRef.current
    });
    useStageStore.setState({ core: app });
    useLayoutStore.setState({ isPixiLoading: false });
    useLoadingStore.setState({ loadingStage: LoadingStageEnum.Idle });
    console.debug("Pixi core finished initialization.");
    isInitializingRef.current = false;
    decrementResources2(LoadingResourceEnum.PixiCore);
    return app;
  }, [decrementResources2]);
  reactExports.useEffect(() => {
    init();
    return () => {
      const currentCore = useStageStore.getState().core;
      if (currentCore) {
        currentCore.destroy();
        useStageStore.setState({ core: null });
      }
    };
  }, [init]);
  reactExports.useEffect(() => {
    const currentCore = useStageStore.getState().core;
    if (!currentCore) return;
    if (isIdleTimeout || isExpired || isMultiSession) {
      if (currentCore.ticker.started) {
        currentCore.ticker.stop();
      }
    } else {
      if (!currentCore.ticker.started) {
        currentCore.ticker.start();
      }
    }
  }, [isIdleTimeout, isExpired, isMultiSession]);
  reactExports.useEffect(() => {
    if (!wrapperRef.current || !core) return;
    const root = document.getElementById("root");
    const allMainBoards = document.querySelectorAll("#MainBoard");
    if (allMainBoards.length !== 1) return;
    const resizeObserver = new ResizeObserver(debouncedResize);
    resizeObserver.observe(root);
    resizeObserver.observe(allMainBoards[0]);
    return () => {
      resizeObserver.disconnect();
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [core, debouncedResize, loadingStage, resize]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: wrapperRef,
      className: cn(className),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "canvas",
        {
          ref: canvasRef,
          className: "relative"
        }
      )
    }
  );
}
const Stage$1 = reactExports.memo(Stage);
function VisualEffect({ hooks = [] }) {
  hooks.forEach((hook) => hook());
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Stage$1, { className: cn("pointer-events-none absolute left-0 top-0", isDesktop ? "z-[11]" : "z-[2]") });
}
const VisualEffect$1 = reactExports.memo(VisualEffect);
const NEWTON_ITERATIONS = 4;
const NEWTON_MIN_SLOPE = 1e-3;
const SUBDIVISION_PRECISION = 1e-7;
const SUBDIVISION_MAX_ITERATIONS = 10;
const kSplineTableSize = 11;
const kSampleStepSize = 1 / (kSplineTableSize - 1);
const float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  const sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (x === 0 || x === 1) {
      return x;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
var InterpolationMode = /* @__PURE__ */ ((InterpolationMode2) => {
  InterpolationMode2["LINEAR"] = "LINEAR";
  InterpolationMode2["EASE_IN_OUT_CUBIC"] = "EASE_IN_OUT_CUBIC";
  InterpolationMode2["CAP_MORPH"] = "CAP_MORPH";
  InterpolationMode2["NUM_DESCEND"] = "NUM_DESCEND";
  InterpolationMode2["NUM_LANDING"] = "NUM_LANDING";
  InterpolationMode2["WHEEL_ROTATION"] = "WHEEL_ROTATION";
  InterpolationMode2["WHEEL_Y_POSITION"] = "WHEEL_Y_POSITION";
  InterpolationMode2["WIN_NUM_SCALE"] = "WIN_NUM_SCALE";
  InterpolationMode2["WIN_TEXT_SCALE"] = "WIN_TEXT_SCALE";
  InterpolationMode2["ROULETTE_RAISE_BALL_SCALE"] = "ROULETTE_RAISE_BALL_SCALE";
  InterpolationMode2["TITLE_EARN_POSITION_Y"] = "TITLE_EARN_POSITION_Y";
  return InterpolationMode2;
})(InterpolationMode || {});
const interpolatorMap = {
  [
    "LINEAR"
    /* LINEAR */
  ]: (percent) => percent,
  [
    "EASE_IN_OUT_CUBIC"
    /* EASE_IN_OUT_CUBIC */
  ]: bezier(0.94, 0, 0.68, 1),
  [
    "CAP_MORPH"
    /* CAP_MORPH */
  ]: bezier(0.6, 0, 0.16, 1),
  [
    "NUM_DESCEND"
    /* NUM_DESCEND */
  ]: bezier(0.94, 0, 0.68, 1),
  [
    "NUM_LANDING"
    /* NUM_LANDING */
  ]: bezier(0.67, 0, 0.1, 1),
  [
    "WHEEL_Y_POSITION"
    /* WHEEL_Y_POSITION */
  ]: bezier(0.3, 0, 0.09, 1),
  [
    "WHEEL_ROTATION"
    /* WHEEL_ROTATION */
  ]: bezier(0.3, 0, 0.26, 1),
  [
    "WIN_TEXT_SCALE"
    /* WIN_TEXT_SCALE */
  ]: bezier(0.35, 0, 0.13, 0.85),
  [
    "WIN_NUM_SCALE"
    /* WIN_NUM_SCALE */
  ]: bezier(0.54, 0.19, 0.17, 1),
  [
    "ROULETTE_RAISE_BALL_SCALE"
    /* ROULETTE_RAISE_BALL_SCALE */
  ]: bezier(0.5, 0, 0.05, 1),
  [
    "TITLE_EARN_POSITION_Y"
    /* TITLE_EARN_POSITION_Y */
  ]: bezier(0.88, 0, 0.31, 1)
};
const initInterpolationFunc = (mode) => (elapsed, keyFrames) => {
  if (!keyFrames.length) return NaN;
  if (elapsed < keyFrames[0].sec) return keyFrames[0].value;
  let start = 0;
  let end = 0;
  let prev = 0;
  let percent = 0;
  for (const keyFrame of keyFrames) {
    const { sec, value } = keyFrame;
    if (elapsed < sec) {
      percent = (elapsed - prev) / (sec - prev);
      end = value;
      break;
    }
    prev = sec;
    start = value;
  }
  const interpolator = interpolatorMap[mode];
  percent = interpolator(percent);
  return start + (end - start) * percent;
};
function initParticleAlphaKeyFrame(fps) {
  return [
    { sec: 0, value: 0 },
    { sec: 20 * fps, value: 1 },
    { sec: 40 * fps, value: 1 },
    { sec: 60 * fps, value: 1 },
    { sec: 80 * fps, value: 0 }
  ];
}
function initWheelRotationKeyFrame(fps) {
  return [
    { sec: 0, value: -0.8 },
    { sec: 30 * fps, value: 0 },
    { sec: 60 * fps, value: 0 },
    { sec: 90 * fps, value: 0.8 }
  ];
}
function initTitleCtnScaleKeyFrame(fps) {
  return [
    { sec: 0, value: 0 },
    { sec: 18 * fps, value: 1.1 },
    { sec: 28 * fps, value: 0.95 }
  ];
}
function initWinNumCtnScaleKeyFrame(fps) {
  return [
    { sec: 0, value: 0 },
    { sec: 20 * fps, value: 1 }
  ];
}
function initRaiseCtnScaleKeyFrame(fps) {
  return [
    { sec: 0, value: 0.95 },
    { sec: 12 * fps, value: 0.95 },
    { sec: 42 * fps, value: 1.02 }
  ];
}
function initWinNumScaleKeyFrame(fps) {
  return [
    { sec: 0, value: 0.85 },
    { sec: 102 * fps, value: 0.95 }
  ];
}
function initFadeKeyFrame(fps) {
  return [
    { sec: 0, value: 0 },
    { sec: 20 * fps, value: 1 },
    { sec: 30 * fps, value: 1 },
    { sec: 60 * fps, value: 1 },
    { sec: 72 * fps, value: 0 }
  ];
}
function initWheelYPositionKeyFrame(fps, factor, top, isMobile) {
  return [
    { sec: 0, value: isMobile ? 150 * factor + top : 207 * factor + top },
    { sec: 30 * fps, value: isMobile ? 34 * factor + top : 52 * factor + top },
    { sec: 60 * fps, value: isMobile ? 34 * factor + top : 52 * factor + top },
    { sec: 90 * fps, value: isMobile ? 150 * factor + top : 207 * factor + top }
  ];
}
function initTitlePositionYKeyFrame(fps, factor, top, isMobile) {
  return [
    { sec: 0, value: isMobile ? 190 * factor + top : 376 * factor + top },
    { sec: 30 * fps, value: isMobile ? 190 * factor + top : 376 * factor + top },
    { sec: 57 * fps, value: isMobile ? 190 * factor + top : 376 * factor + top },
    { sec: 87 * fps, value: isMobile ? 418 * factor + top : 469 * factor + top }
  ];
}
function initEarnPositionYKeyFrame(fps, factor, top, isMobile) {
  return [
    { sec: 0, value: isMobile ? 218 * factor + top : 416 * factor + top },
    { sec: 30 * fps, value: isMobile ? 218 * factor + top : 416 * factor + top },
    { sec: 57 * fps, value: isMobile ? 218 * factor + top : 416 * factor + top },
    { sec: 87 * fps, value: isMobile ? 476 * factor + top : 550 * factor + top }
  ];
}
function initBallScaleKeyFrame(fps, isMobile) {
  return [
    { sec: 0, value: isMobile ? 1.6 : 1 },
    { sec: 5 * fps, value: isMobile ? 1.6 : 1 },
    { sec: 20 * fps, value: isMobile ? 1.8 : 1.2 },
    { sec: 40 * fps, value: isMobile ? 1.6 : 1 }
  ];
}
const PARTICLE_COUNT = 50;
const PARTICLE_ANIMATION_SPEED = 0.3;
const PARTICLE_ANIM_DURATION_SEC = 2.7;
const PARTICLE_TOTAL_FRAMES = 50;
const PARTICLE_DIMENSIONS = { width: 1024, height: 576 };
const SHADOW_COLOR = "rgba(0, 0, 0, 0.31)";
const WHEEL_POSITIONS = {
  mobile: {
    wheelMaskX: 130,
    wheelMaskY: -90,
    rouletteBgY: 10,
    wheelWrapY: 175,
    titleY: 229,
    userWinY: 258,
    ballYRatio: 1.55,
    raiseYRatio: 2.9,
    particleTopY: -70,
    particleBottomY: -80,
    rotateMaskY: -6
  },
  desktop: {
    wheelMaskX: 220,
    wheelMaskY: -101,
    rouletteBgY: 199,
    wheelWrapYRatio: 2.22,
    titleYRatio: 1.825,
    userWinYRatio: 1.67,
    ballYRatio: 1.59,
    raiseYRatio: 3.15,
    particleTopY: -230,
    particleBottomY: 650,
    rotateMaskY: -8
  }
};
const ROTATION_POSITIONS = {
  rotateGradX: 60,
  rotateGradY: 55,
  rouletteRedY: 14,
  slotRedX: 1
};
const MOBILE_SCALE = {
  wheelMaskY: 0.8,
  wheelMaskX: 1,
  rotateGrad: 4,
  rotateMask: 0.5,
  rouletteRed: 0.5,
  slotRed: 0.5,
  rouletteBg: 1,
  rouletteBall: 0.3,
  titleSprites: 0.35,
  titleDistance: 20,
  particleShrink: 4,
  particleLength: 2
};
const DESKTOP_SCALE = {
  wheelMaskY: 0.9,
  wheelMaskX: 0.8,
  rotateGrad: 4,
  rotateMask: 0.75,
  rouletteRed: 0.75,
  slotRed: 0.75,
  rouletteBg: 1.15,
  rouletteBall: 0.7,
  titleSprites: 0.5,
  titleDistance: 28,
  particleShrink: 1.5,
  particleLength: 3
};
const NUMBER_POSITIONS = {
  mobile: [
    { x: 57, y: 107, rotation: -1.25 },
    { x: 87, y: 64, rotation: -0.725 },
    { x: 140, y: 43, rotation: 0 },
    { x: 191, y: 65, rotation: 0.75 },
    { x: 223, y: 107, rotation: 1.25 }
  ],
  desktop: [
    { x: 84, y: 154, rotation: -1.25 },
    { x: 129, y: 90, rotation: -0.725 },
    { x: 210, y: 54, rotation: 0 },
    { x: 287, y: 92, rotation: 0.75 },
    { x: 334, y: 156, rotation: 1.25 }
  ]
};
const createCtn = (ref, alpha = 1) => {
  const container = new Container();
  container.interactive = false;
  container.interactiveChildren = false;
  container.cullable = true;
  container.cullableChildren = true;
  ref.current = container;
  container.alpha = alpha;
  return container;
};
const GOLDEN_GRADIENT = {
  type: "linear",
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
  colorStops: [
    { offset: 0, color: 16642271 },
    { offset: 0.63, color: 11502677 },
    { offset: 0.9, color: 16642271 }
  ],
  textureSpace: "local"
};
const SILVER_GRADIENT = {
  type: "linear",
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
  colorStops: [
    { offset: 0, color: 14868178 },
    { offset: 1, color: 11510914 }
  ],
  textureSpace: "local"
};
const createBaseStyle = (factor, options) => new TextStyle({
  fontFamily: options.fontFamily,
  fontSize: "".concat(isMobileDevice ? options.fontSize * factor : options.fontSize * 1.5 * factor, "px"),
  fontWeight: options.fontWeight,
  fontVariant: "normal",
  lineHeight: isMobileDevice ? options.lineHeight * factor : options.lineHeight * 1.5 * factor,
  letterSpacing: options.letterSpacing,
  align: "center",
  fill: new FillGradient(options.gradient)
});
const createTitleStyle = (factor) => createBaseStyle(factor, {
  fontFamily: ["Lufga", "Arial"],
  fontSize: 16,
  fontWeight: "700",
  lineHeight: 32,
  letterSpacing: 1.1,
  gradient: GOLDEN_GRADIENT
});
const createUserWinStyle = (factor) => createBaseStyle(factor, {
  fontFamily: ["Lufga", "Arial"],
  fontSize: 24,
  fontWeight: "600",
  lineHeight: 28,
  letterSpacing: 0.48,
  gradient: SILVER_GRADIENT
});
const createNumStyle = (factor) => createBaseStyle(factor, {
  fontFamily: ["Khand", "Segoe UI", "Helvetica Neue"],
  fontSize: 29,
  fontWeight: "600",
  lineHeight: 20,
  letterSpacing: 0,
  gradient: SILVER_GRADIENT
});
const createNumHighlightStyle = (factor) => createBaseStyle(factor, {
  fontFamily: ["Khand", "Segoe UI", "Helvetica Neue"],
  fontSize: 59,
  fontWeight: "600",
  lineHeight: 30,
  letterSpacing: 0,
  gradient: SILVER_GRADIENT
});
const useWinAnimStore$1 = getWinAnimStore();
const useWinSprite = () => {
  const { t: t2 } = useTranslation();
  const winResult = useWinAnimStore$1((s) => s.winResult);
  const core = useStageStore((s) => s.core);
  const loadingStage = useLoadingStore((s) => s.loadingStage);
  const { isMaxWin } = winResult != null ? winResult : {};
  const refs = {
    mainBoardRef: reactExports.useRef(null),
    wrapperCtnRef: reactExports.useRef(null),
    wheelCtnRef: reactExports.useRef(null),
    wheelMaskRef: reactExports.useRef(null),
    wheelWrapRef: reactExports.useRef(null),
    numbersRef: reactExports.useRef([]),
    rouletteRef: reactExports.useRef(null),
    rouletteBgRef: reactExports.useRef(null),
    rouletteBallRef: reactExports.useRef(null),
    rouletteBallCtnRef: reactExports.useRef(null),
    rouletteTitleLRef: reactExports.useRef(null),
    rouletteTitleRRef: reactExports.useRef(null),
    raiseRef: reactExports.useRef(null),
    raiseCtnRef: reactExports.useRef(null),
    rotateCtnRef: reactExports.useRef(null),
    rotateGradRef: reactExports.useRef(null),
    rotateMaskRef: reactExports.useRef(null),
    particlesRef: reactExports.useRef([]),
    particlesCtnRef: reactExports.useRef(null),
    particlesMaskRef: reactExports.useRef(null),
    particlesFramesRef: reactExports.useRef(null),
    titleCtnRef: reactExports.useRef(null),
    titleRef: reactExports.useRef(null),
    userWinRef: reactExports.useRef(null),
    userWinCtnRef: reactExports.useRef(null),
    shadowRef: reactExports.useRef(null),
    menuMaskRef: reactExports.useRef(null)
  };
  const init = () => {
    if (!core || loadingStage < LoadingStageEnum.Loaded) return;
    killSprites([refs.wrapperCtnRef]);
    refs.particlesFramesRef.current = null;
    getMainBoard(refs.mainBoardRef);
    const params = getMainBoardParams(refs.mainBoardRef);
    if (!params || !(core == null ? void 0 : core.stage)) return;
    createContainers();
    createWheel(params);
    createParticles(params);
    createShadow(params);
    adjustContainerProperties(params);
    createMenuMask(params);
    addToStage();
  };
  const createWheelSprites = (factor) => {
    const { currencySymbol } = useCartStore.getState();
    const { isMaxWin: isMaxWin2 } = winResult != null ? winResult : {};
    return {
      rotateGrad: new Sprite(Assets.get(
        "rotating_gradient"
        /* ROTATING_GRADIENT */
      )),
      rotateMask: new Sprite(Assets.get(
        "rotating_mask"
        /* ROTATING_MASK */
      )),
      wheelMask: new Sprite(Assets.get(
        "wheel_mask"
        /* WHEEL_MASK */
      )),
      rouletteRed: new Sprite(Assets.get(
        "roulette_red"
        /* ROULETTE_RED */
      )),
      rouletteBg: new Sprite(Assets.get(
        "roulette_background"
        /* ROULETTE_BACKGROUND */
      )),
      rouletteBall: new Sprite(Assets.get(
        "roulette_ball"
        /* ROULETTE_BALL */
      )),
      rouletteTitleL: new Sprite(Assets.get(
        "roulette_title_l"
        /* ROULETTE_TITLE_L */
      )),
      rouletteTitleR: new Sprite(Assets.get(
        "roulette_title_r"
        /* ROULETTE_TITLE_R */
      )),
      slotRed: new Sprite(Assets.get(
        "slot_red"
        /* SLOT_RED */
      )),
      numbers: [
        new Text({ style: createNumStyle(factor) }),
        new Text({ style: createNumStyle(factor) }),
        new Text({ style: createNumHighlightStyle(factor) }),
        new Text({ style: createNumStyle(factor) }),
        new Text({ style: createNumStyle(factor) })
      ],
      earn: new Text({ text: "".concat(currencySymbol, " 0.00"), style: createUserWinStyle(factor) }),
      title: new Text({ text: isMaxWin2 ? t2("COMMON.MAX_WIN") : t2("COMMON.YOU_WIN"), style: createTitleStyle(factor) })
    };
  };
  const addSpritesToContainers = (sprites) => {
    var _a2, _b2, _c2, _d, _e, _f;
    (_a2 = refs.rotateCtnRef.current) == null ? void 0 : _a2.addChild(sprites.rotateMask, sprites.rotateGrad);
    (_b2 = refs.raiseCtnRef.current) == null ? void 0 : _b2.addChild(sprites.slotRed, refs.rotateCtnRef.current);
    (_c2 = refs.titleCtnRef.current) == null ? void 0 : _c2.addChild(sprites.title, sprites.rouletteTitleL, sprites.rouletteTitleR);
    (_d = refs.userWinCtnRef.current) == null ? void 0 : _d.addChild(sprites.earn);
    (_e = refs.rouletteBallCtnRef.current) == null ? void 0 : _e.addChild(sprites.rouletteBall);
    (_f = refs.wheelCtnRef.current) == null ? void 0 : _f.addChild(sprites.rouletteRed, refs.rouletteBallCtnRef.current, refs.raiseCtnRef.current, ...sprites.numbers);
  };
  const createMenuMask = (params) => {
    const { width, height, top } = params;
    const maskY = isMobileDevice ? 0 : top;
    const mask = new Graphics().rect(0, maskY, width, height).fill(4095);
    refs.menuMaskRef.current = mask;
    if (!refs.wrapperCtnRef.current) return;
    refs.wrapperCtnRef.current.addChild(mask);
    refs.wrapperCtnRef.current.setMask({ mask, inverse: false });
  };
  const createParticleSprite = (frames, x, y, factor, inverted = false) => {
    const scale = getScale();
    const sprite = new AnimatedSprite(frames);
    sprite.position.set(x, y);
    sprite.width = PARTICLE_DIMENSIONS.width * factor / scale.particleShrink;
    sprite.height = PARTICLE_DIMENSIONS.height * factor / scale.particleShrink;
    sprite.animationSpeed = PARTICLE_ANIMATION_SPEED;
    sprite.alpha = 0;
    if (inverted) {
      sprite.anchor.y = 1;
      sprite.scale.y *= -1;
    }
    return sprite;
  };
  const createParticles = (params) => {
    var _a2;
    if (!refs.particlesCtnRef.current) return;
    const { factor, height, width, top, round } = params;
    const scale = getScale();
    const positions = isMobileDevice ? WHEEL_POSITIONS.mobile : WHEEL_POSITIONS.desktop;
    const particleFrames = Array.from({ length: PARTICLE_COUNT }, (_, i) => Assets.get("Particle".concat(i.toString().padStart(3, "0"))));
    refs.particlesFramesRef.current = particleFrames;
    refs.particlesRef.current = [];
    for (let idx = 0; idx < scale.particleLength; idx++) {
      const xPos = PARTICLE_DIMENSIONS.width * factor / scale.particleShrink * idx;
      const topY = positions.particleTopY * factor + top;
      const bottomY = isMobileDevice ? top + height + positions.particleBottomY * factor : positions.particleBottomY * factor + top;
      const topParticle = createParticleSprite(particleFrames, xPos, topY, factor);
      const bottomParticle = createParticleSprite(particleFrames, xPos, bottomY, factor, true);
      refs.particlesRef.current.push(topParticle, bottomParticle);
      refs.particlesCtnRef.current.addChild(topParticle, bottomParticle);
    }
    const particleMask = new Graphics().roundRect(0, top, width, height, round * factor).fill(4095);
    refs.particlesMaskRef.current = particleMask;
    refs.particlesCtnRef.current.mask = particleMask;
    refs.particlesCtnRef.current.addChild(particleMask);
    (_a2 = refs.wrapperCtnRef.current) == null ? void 0 : _a2.addChild(refs.particlesCtnRef.current);
  };
  const createContainers = () => {
    const containerRefs = [
      refs.rotateCtnRef,
      refs.wheelCtnRef,
      refs.raiseCtnRef,
      refs.rouletteBallCtnRef,
      refs.particlesCtnRef,
      refs.wrapperCtnRef
    ];
    const zeroIndexRefs = [refs.wheelWrapRef, refs.titleCtnRef, refs.userWinCtnRef];
    containerRefs.forEach((ref) => createCtn(ref));
    zeroIndexRefs.forEach((ref) => createCtn(ref, 0));
  };
  const createShadow = (params) => {
    const { left, top, width, height, round, factor } = params;
    const shadow = new Graphics().roundRect(left, top, width, height, round * factor).fill(SHADOW_COLOR);
    shadow.zIndex = -1;
    shadow.alpha = 0;
    refs.shadowRef.current = shadow;
  };
  const createWheel = (params) => {
    const requiredContainers = [
      refs.rouletteBallCtnRef.current,
      refs.raiseCtnRef.current,
      refs.wheelCtnRef.current,
      refs.rotateCtnRef.current,
      refs.wheelWrapRef.current,
      refs.userWinCtnRef.current,
      refs.titleCtnRef.current
    ];
    if (requiredContainers.some((container) => !container)) return;
    const sprites = createWheelSprites(params.factor);
    assignSpriteRefs(sprites);
    addSpritesToContainers(sprites);
    configureSpriteTransforms(sprites, params);
    configureNumberPositions(sprites.numbers, params.factor);
    setupMasksAndHierarchy(sprites);
  };
  const assignSpriteRefs = (sprites) => {
    refs.wheelMaskRef.current = sprites.wheelMask;
    refs.rotateGradRef.current = sprites.rotateGrad;
    refs.rotateMaskRef.current = sprites.rotateMask;
    refs.rouletteBallRef.current = sprites.rouletteBall;
    refs.rouletteRef.current = sprites.rouletteRed;
    refs.rouletteBgRef.current = sprites.rouletteBg;
    refs.rouletteTitleLRef.current = sprites.rouletteTitleL;
    refs.rouletteTitleRRef.current = sprites.rouletteTitleR;
    refs.raiseRef.current = sprites.slotRed;
    refs.titleRef.current = sprites.title;
    refs.userWinRef.current = sprites.earn;
    refs.numbersRef.current = sprites.numbers;
  };
  const adjustContainerProperties = (params) => {
    const { width, height, factor, left } = params;
    const requiredContainers = [
      refs.wheelWrapRef.current,
      refs.wheelCtnRef.current,
      refs.raiseCtnRef.current,
      refs.rouletteBallCtnRef.current,
      refs.particlesCtnRef.current,
      refs.titleCtnRef.current,
      refs.userWinCtnRef.current,
      refs.rotateCtnRef.current,
      refs.wrapperCtnRef.current
    ];
    if (requiredContainers.some((container) => !container)) return;
    refs.wheelWrapRef.current.x = width / 2;
    if (isMobileDevice) refs.wheelWrapRef.current.y = WHEEL_POSITIONS.mobile.wheelWrapY * factor;
    else refs.wheelWrapRef.current.y = height / WHEEL_POSITIONS.desktop.wheelWrapYRatio;
    refs.wheelWrapRef.current.pivot.x = refs.wheelWrapRef.current.width / 2;
    refs.wheelCtnRef.current.x = refs.wheelWrapRef.current.width / 2;
    refs.wheelCtnRef.current.y = refs.wheelWrapRef.current.height / 2;
    refs.wheelCtnRef.current.pivot.x = refs.wheelCtnRef.current.width / 2;
    refs.wheelCtnRef.current.pivot.y = refs.wheelCtnRef.current.height;
    refs.titleCtnRef.current.x = width / 2;
    if (isMobileDevice) refs.titleCtnRef.current.y = WHEEL_POSITIONS.mobile.titleY * factor;
    else refs.titleCtnRef.current.y = height / WHEEL_POSITIONS.desktop.titleYRatio;
    refs.titleCtnRef.current.pivot.x = refs.titleCtnRef.current.width / 2;
    refs.titleCtnRef.current.pivot.y = 0;
    refs.userWinCtnRef.current.x = width / 2;
    if (isMobileDevice) refs.userWinCtnRef.current.y = WHEEL_POSITIONS.mobile.userWinY * factor;
    else refs.userWinCtnRef.current.y = height / WHEEL_POSITIONS.desktop.userWinYRatio;
    refs.userWinCtnRef.current.pivot.x = refs.userWinCtnRef.current.width / 2;
    refs.userWinCtnRef.current.pivot.y = 0;
    refs.rouletteBallCtnRef.current.x = refs.wheelCtnRef.current.width / 2;
    const ballYRatio = isMobileDevice ? WHEEL_POSITIONS.mobile.ballYRatio : WHEEL_POSITIONS.desktop.ballYRatio;
    refs.rouletteBallCtnRef.current.y = refs.wheelCtnRef.current.height / ballYRatio;
    refs.rouletteBallCtnRef.current.pivot.x = refs.rouletteBallCtnRef.current.width / 2;
    refs.rouletteBallCtnRef.current.pivot.y = refs.rouletteBallCtnRef.current.height / 2;
    refs.raiseCtnRef.current.x = refs.wheelCtnRef.current.width / 2;
    const raiseYRatio = isMobileDevice ? WHEEL_POSITIONS.mobile.raiseYRatio : WHEEL_POSITIONS.desktop.raiseYRatio;
    refs.raiseCtnRef.current.y = refs.wheelCtnRef.current.height / raiseYRatio;
    refs.raiseCtnRef.current.pivot.x = refs.raiseCtnRef.current.width / 2;
    refs.raiseCtnRef.current.pivot.y = refs.raiseCtnRef.current.height / 2;
    refs.rotateCtnRef.current.x = refs.raiseCtnRef.current.width / 2;
    refs.rotateCtnRef.current.y = refs.raiseCtnRef.current.height / 2;
    refs.rotateCtnRef.current.pivot.x = refs.rotateCtnRef.current.width / 2;
    refs.rotateCtnRef.current.pivot.y = refs.rotateCtnRef.current.height / 2;
    refs.wrapperCtnRef.current.x = left;
  };
  const configureSpriteTransforms = (sprites, params) => {
    var _a2;
    const { width, factor, top } = params;
    const scale = getScale();
    const positions = isMobileDevice ? WHEEL_POSITIONS.mobile : WHEEL_POSITIONS.desktop;
    sprites.wheelMask.anchor.set(0.5, 0.5);
    sprites.wheelMask.scale.y = scale.wheelMaskY * factor;
    sprites.wheelMask.scale.x = scale.wheelMaskX * factor;
    sprites.wheelMask.position.x = positions.wheelMaskX * factor;
    sprites.wheelMask.position.y = positions.wheelMaskY * factor + top;
    sprites.rotateGrad.anchor.set(0.5, 0.5);
    sprites.rotateGrad.scale.set(scale.rotateGrad);
    sprites.rotateGrad.x = ROTATION_POSITIONS.rotateGradX * factor;
    sprites.rotateGrad.y = ROTATION_POSITIONS.rotateGradY * factor;
    sprites.rotateMask.scale.set(scale.rotateMask * factor);
    sprites.rotateMask.y = positions.rotateMaskY * factor;
    sprites.rouletteRed.y = ROTATION_POSITIONS.rouletteRedY * factor;
    sprites.rouletteRed.scale.set(scale.rouletteRed * factor);
    sprites.slotRed.x = ROTATION_POSITIONS.slotRedX * factor;
    sprites.slotRed.scale.set(scale.slotRed * factor);
    sprites.rouletteBg.anchor.set(0.5, 0);
    sprites.rouletteBg.scale.set(scale.rouletteBg * factor);
    sprites.rouletteBg.position.set(width / 2, positions.rouletteBgY * factor + top);
    sprites.rouletteBg.zIndex = -1;
    sprites.rouletteBg.alpha = 0;
    sprites.rouletteBall.scale.set(scale.rouletteBall * factor);
    sprites.rouletteTitleR.anchor.set(0.5);
    sprites.rouletteTitleL.anchor.set(0.5);
    sprites.rouletteTitleR.scale.set(scale.titleSprites * factor);
    sprites.rouletteTitleL.scale.set(scale.titleSprites * factor);
    sprites.rouletteTitleL.position.set(sprites.rouletteTitleR.width / 2, sprites.title.height / 2);
    const distance = scale.titleDistance * factor;
    sprites.rouletteTitleR.position.x = sprites.rouletteTitleL.width / 2 + (sprites.title.width + distance);
    sprites.rouletteTitleR.position.y = sprites.title.height / 2;
    const titleContainerWidth = ((_a2 = refs.titleCtnRef.current) == null ? void 0 : _a2.width) || 0;
    sprites.title.anchor.set(0.5, 0);
    sprites.title.position.set(titleContainerWidth / 2, 0);
    sprites.earn.anchor.set(0.5, 0);
    sprites.earn.position.set(sprites.earn.width / 2, 0);
  };
  const configureNumberPositions = (numbers, factor) => {
    const positions = isMobileDevice ? NUMBER_POSITIONS.mobile : NUMBER_POSITIONS.desktop;
    numbers.forEach((sprite, idx) => {
      const pos = positions[idx];
      sprite.anchor.set(0.5, 0.5);
      sprite.x = pos.x * factor;
      sprite.y = pos.y * factor;
      sprite.rotation = pos.rotation;
    });
  };
  const setupMasksAndHierarchy = (sprites) => {
    var _a2, _b2;
    refs.rotateCtnRef.current.mask = refs.rotateMaskRef.current;
    refs.wheelWrapRef.current.mask = sprites.wheelMask;
    (_a2 = refs.wheelWrapRef.current) == null ? void 0 : _a2.addChild(refs.wheelCtnRef.current, sprites.wheelMask);
    (_b2 = refs.wrapperCtnRef.current) == null ? void 0 : _b2.addChild(
      refs.wheelWrapRef.current,
      refs.rouletteBgRef.current,
      refs.userWinCtnRef.current,
      refs.titleCtnRef.current
    );
  };
  const addToStage = () => {
    if (!refs.wrapperCtnRef.current) return;
    core == null ? void 0 : core.stage.addChild(refs.wrapperCtnRef.current);
  };
  reactExports.useEffect(() => {
    var _a2;
    init();
    const handleResize2 = () => init();
    (_a2 = core == null ? void 0 : core.renderer) == null ? void 0 : _a2.on("resize", handleResize2);
    return () => {
      var _a3;
      (_a3 = core == null ? void 0 : core.renderer) == null ? void 0 : _a3.off("resize", handleResize2);
    };
  }, [core, instance.language, winResult, isMaxWin, loadingStage]);
  return { refs };
};
const getScale = () => isMobileDevice ? MOBILE_SCALE : DESKTOP_SCALE;
const useWinAnimStore = getWinAnimStore();
const WHEEL_ROTATION = initWheelRotationKeyFrame(ONE_FRAME_TIME_SEC);
const WIN_NUM_CTN_SCALE = initWinNumCtnScaleKeyFrame(ONE_FRAME_TIME_SEC);
const WIN_NUM_SCALE = initWinNumScaleKeyFrame(ONE_FRAME_TIME_SEC);
const RAISE_CTN_SCALE = initRaiseCtnScaleKeyFrame(ONE_FRAME_TIME_SEC);
const PARTICLE_ALPHA = initParticleAlphaKeyFrame(ONE_FRAME_TIME_SEC);
const TITLE_CTN_SCALE = initTitleCtnScaleKeyFrame(ONE_FRAME_TIME_SEC);
const FADE = initFadeKeyFrame(ONE_FRAME_TIME_SEC);
function computeDynamicAnim(factor, mainBoardRef) {
  var _a2;
  const boardTop = (_a2 = mainBoardRef == null ? void 0 : mainBoardRef.getBoundingClientRect().top) != null ? _a2 : 0;
  const isMobile = isMobileDevice;
  return {
    WHEEL_Y_POSIT: initWheelYPositionKeyFrame(ONE_FRAME_TIME_SEC, factor, boardTop, isMobile),
    TITLE_POSIT_Y: initTitlePositionYKeyFrame(ONE_FRAME_TIME_SEC, factor, boardTop, isMobile),
    EARN_POSIT_Y: initEarnPositionYKeyFrame(ONE_FRAME_TIME_SEC, factor, boardTop, isMobile),
    BALL_SCALE: initBallScaleKeyFrame(ONE_FRAME_TIME_SEC, isMobile)
  };
}
const linear = initInterpolationFunc(InterpolationMode.LINEAR);
const wheelYPosition = initInterpolationFunc(InterpolationMode.WHEEL_Y_POSITION);
const wheelRotation = initInterpolationFunc(InterpolationMode.WHEEL_ROTATION);
const winTextScale = initInterpolationFunc(InterpolationMode.WIN_TEXT_SCALE);
const winNumScale = initInterpolationFunc(InterpolationMode.WIN_NUM_SCALE);
const rouletteRaiseBallScale = initInterpolationFunc(InterpolationMode.ROULETTE_RAISE_BALL_SCALE);
const titleEarnPositionY = initInterpolationFunc(InterpolationMode.TITLE_EARN_POSITION_Y);
const useWinEffect = () => {
  const currWinNum = reactExports.useRef(0);
  const startMs = reactExports.useRef(0);
  const ratio = useLayoutStore((s) => s.rootEmFontSize);
  const factor = ratio / 16;
  const core = useStageStore((state) => state.core);
  const [dynamicAnim, setDynamicAnim] = reactExports.useState(null);
  const { refs } = useWinSprite();
  const {
    mainBoardRef,
    numbersRef,
    raiseRef,
    rouletteRef,
    rouletteBgRef,
    rouletteBallCtnRef,
    raiseCtnRef,
    rotateGradRef,
    wheelCtnRef,
    wheelWrapRef,
    userWinCtnRef,
    userWinRef,
    shadowRef,
    titleCtnRef,
    particlesCtnRef,
    menuMaskRef
  } = refs;
  const render = (currentMs) => {
    var _a2, _b2;
    const height = (_a2 = mainBoardRef.current) == null ? void 0 : _a2.offsetHeight;
    const width = (_b2 = mainBoardRef.current) == null ? void 0 : _b2.offsetWidth;
    const allRefsReady = Object.values(refs).every((ref) => ref.current);
    if (!allRefsReady || !height || !width) return;
    const { animState, winResult } = useWinAnimStore.getState();
    const { result, userWin } = winResult != null ? winResult : {};
    if (!animState || !result || typeof userWin !== "number" || !dynamicAnim) return reset();
    const winNumber = Number(result);
    const isWin = userWin > 0;
    if (startMs.current === 0) startMs.current = (/* @__PURE__ */ new Date()).getTime();
    if (isMobileDevice) updateMenuMaskPosition(width, height);
    const { WHEEL_Y_POSIT, EARN_POSIT_Y, TITLE_POSIT_Y, BALL_SCALE } = dynamicAnim;
    const elapsed = (currentMs - startMs.current) * 1e-3;
    const currFrame = Math.floor(elapsed * 30);
    const color = getRouletteNumberColor(winNumber);
    const neighbors = findNeighborByRange(winNumber, 2);
    const zeroIndex = neighbors.findIndex((num) => num === 0);
    numbersRef.current.forEach((num, idx) => num.text = neighbors[idx].toString());
    numbersRef.current[2].scale.set(winNumScale(elapsed, WIN_NUM_SCALE));
    const { currencySymbol } = useCartStore.getState();
    currWinNum.current = currFrame < 30 ? userWin * (currFrame / 30) : userWin;
    userWinCtnRef.current.scale.set(winTextScale(elapsed, WIN_NUM_CTN_SCALE));
    userWinCtnRef.current.y = titleEarnPositionY(elapsed, EARN_POSIT_Y);
    userWinCtnRef.current.alpha = isWin ? linear(elapsed, FADE) : 0;
    userWinRef.current.text = "".concat(currencySymbol, " ").concat(thousandSeparator(currWinNum.current));
    titleCtnRef.current.scale.set(winTextScale(elapsed, TITLE_CTN_SCALE));
    titleCtnRef.current.y = titleEarnPositionY(elapsed, TITLE_POSIT_Y);
    titleCtnRef.current.alpha = isWin ? linear(elapsed, FADE) : 0;
    rouletteBgRef.current.alpha = linear(elapsed, FADE);
    rouletteBallCtnRef.current.scale.set(rouletteRaiseBallScale(elapsed, BALL_SCALE));
    rouletteRef.current.texture = zeroIndex === -1 ? Assets.get("roulette_".concat(color)) : Assets.get("roulette_green_".concat(zeroIndex));
    wheelCtnRef.current.y = wheelYPosition(elapsed, WHEEL_Y_POSIT);
    wheelCtnRef.current.rotation = wheelRotation(elapsed, WHEEL_ROTATION);
    raiseRef.current.texture = Assets.get("slot_".concat(color));
    raiseCtnRef.current.scale.set(rouletteRaiseBallScale(elapsed, RAISE_CTN_SCALE));
    rotateGradRef.current.rotation = elapsed * 1.6;
    shadowRef.current.alpha = linear(elapsed, FADE);
    wheelWrapRef.current.alpha = linear(elapsed, FADE);
    particlesCtnRef.current.children.forEach((child) => {
      if (!(child instanceof AnimatedSprite)) return;
      if (isWin) {
        child.alpha = linear(elapsed, PARTICLE_ALPHA);
        const timeInLoop = elapsed % PARTICLE_ANIM_DURATION_SEC;
        const progress = timeInLoop / PARTICLE_ANIM_DURATION_SEC;
        const currentFrame = Math.floor(progress * PARTICLE_TOTAL_FRAMES);
        if (currentFrame >= 0 && child.currentFrame !== currentFrame) child.gotoAndStop(currentFrame);
      } else {
        child.alpha = 0;
      }
    });
  };
  const updateMenuMaskPosition = (width, height) => {
    var _a2, _b2, _c2, _d, _e;
    const menuMask = menuMaskRef.current;
    if (!menuMask || width == null || height == null) return;
    const menu = document.getElementById("FooterMenu");
    const layout = document.getElementById("MobileLayout");
    const isMenuOpen = Boolean(useLayoutStore.getState().menuPage);
    const isCompact = useConfigStore.getState().IS_SMALL_DEVICE && isMobileDevice;
    const mainBoardTop = (_b2 = (_a2 = mainBoardRef.current) == null ? void 0 : _a2.getBoundingClientRect().top) != null ? _b2 : 0;
    menuMask.x = 0;
    menuMask.y = isMenuOpen ? 0 : mainBoardTop;
    menuMask.width = isMenuOpen ? (_c2 = menu == null ? void 0 : menu.offsetWidth) != null ? _c2 : width : width;
    if (isMenuOpen) {
      const menuTop = (_d = menu == null ? void 0 : menu.getBoundingClientRect().top) != null ? _d : 0;
      const layoutTop = (_e = layout == null ? void 0 : layout.getBoundingClientRect().top) != null ? _e : 0;
      menuMask.height = isCompact ? menuTop : menuTop - layoutTop;
    } else {
      menuMask.height = height;
    }
  };
  function reset() {
    var _a2;
    const refs2 = [wheelWrapRef, titleCtnRef, userWinCtnRef, shadowRef, rouletteBgRef];
    startMs.current = 0;
    refs2.forEach((ref) => ref.current.alpha = 0);
    userWinRef.current.text = "$0.00";
    (_a2 = particlesCtnRef.current) == null ? void 0 : _a2.children.forEach((child) => {
      if (child instanceof AnimatedSprite) child.alpha = 0;
    });
  }
  reactExports.useEffect(() => {
    const unSubscribes = [
      useTimerStore.subscribe(
        (state) => state.currentMs,
        (currentMs) => render(currentMs)
      )
    ];
    return () => unSubscribes.forEach((unsubscribe) => unsubscribe());
  }, [factor, dynamicAnim]);
  reactExports.useEffect(() => {
    var _a2;
    if (!core) return;
    const handleResize2 = () => setDynamicAnim(computeDynamicAnim(factor, mainBoardRef.current));
    setDynamicAnim(computeDynamicAnim(factor, mainBoardRef.current));
    (_a2 = core.renderer) == null ? void 0 : _a2.on("resize", handleResize2);
    return () => {
      var _a3;
      (_a3 = core.renderer) == null ? void 0 : _a3.off("resize", handleResize2);
    };
  }, [factor, core]);
};
const winNumberSpotlightJson = "" + new URL("winNumberSpotlight-DeIS2mwC.json", import.meta.url).href;
const winNumberSpotlight = "" + new URL("winNumberSpotlight-D0_ZzT9G.webp", import.meta.url).href;
const winParticleDesktopJson = "" + new URL("winParticleDesktop-BchQAzin.json", import.meta.url).href;
const winParticleDesktop = "" + new URL("winParticleDesktop-CuemOEgs.webp", import.meta.url).href;
const winParticleMobileJson = "" + new URL("winParticleMobile-D0t8ZU64.json", import.meta.url).href;
const winParticleMobile = "" + new URL("winParticleMobile-DLfLk-4J.webp", import.meta.url).href;
const pixiResources = {
  winNumberSpotlightJson: { type: ResourceType.PixiJson, url: winNumberSpotlightJson },
  winNumberSpotlight: { type: ResourceType.Image, url: winNumberSpotlight },
  winParticleJson: { type: ResourceType.PixiJson, url: isMobileDevice ? winParticleMobileJson : winParticleDesktopJson },
  winParticle: { type: ResourceType.Image, url: isMobileDevice ? winParticleMobile : winParticleDesktop }
};
const Default$1 = "" + new URL("default-3IetjjWS.webp", import.meta.url).href;
const FullComplete$1 = "" + new URL("fullComplete-Dud8ku6o.webp", import.meta.url).href;
const StraightUp$1 = "" + new URL("straightUp-9g8fMRwr.webp", import.meta.url).href;
const bettingGrid = "" + new URL("grid-GV9hAFYK.webp", import.meta.url).href;
const mobileGridLowerThick = "" + new URL("mobileGridLowerThick-B4zR7GNG.webp", import.meta.url).href;
const mobileGridUpperThick = "" + new URL("mobileGridUpperThick-DtTo5Gnm.webp", import.meta.url).href;
const mobileRacetrackThick1 = "" + new URL("mobileRacetrackThick1-4393PWR8.webp", import.meta.url).href;
const mobileRacetrackThick2 = "" + new URL("mobileRacetrackThick2-M7Y6GqHc.webp", import.meta.url).href;
const mobileRacetrackThick3 = "" + new URL("mobileRacetrackThick3-BkA1CH0k.webp", import.meta.url).href;
const mobileRacetrackThick4 = "" + new URL("mobileRacetrackThick4-BKLrDoyW.webp", import.meta.url).href;
const mobileRacetrackThick5 = "" + new URL("mobileRacetrackThick5-B6YO4gc-.webp", import.meta.url).href;
const mobileRacetrackThick6 = "" + new URL("mobileRacetrackThick6-CJy4zTwT.webp", import.meta.url).href;
const raceTrack = "" + new URL("raceTrack-ZU9HXmKv.webp", import.meta.url).href;
const dissolveLogoMobile = "" + new URL("dissolveLogoMobile-jiBIEoaD.mp4", import.meta.url).href;
const blurBg = "" + new URL("mobile_blurBg-BDPWGy_B.webp", import.meta.url).href;
const Default = "" + new URL("default-BHDUdlxL.webp", import.meta.url).href;
const FullComplete = "" + new URL("fullComplete-BCw7xBtl.webp", import.meta.url).href;
const StraightUp = "" + new URL("straightUp-C2CtOZ8w.webp", import.meta.url).href;
const grid = "" + new URL("grid-7YKFKO17.webp", import.meta.url).href;
const gridBoardTiltBottom = "" + new URL("gridBoardTiltBottom-BRtLQ1nI.webp", import.meta.url).href;
const gridBoardTiltShadow = "" + new URL("gridBoardTiltShadow-BDZj1nV3.webp", import.meta.url).href;
const gridBoardTiltTop = "" + new URL("gridBoardTiltTop-B5UtmvcF.webp", import.meta.url).href;
const boardRaceTrack = "" + new URL("raceTrack-BaWEeZ_D.webp", import.meta.url).href;
const raceTrackTiltBottom = "" + new URL("raceTrackTiltBottom-C6NsOgl5.webp", import.meta.url).href;
const raceTrackTiltCenter = "" + new URL("raceTrackTiltCenter-CvCQeycY.webp", import.meta.url).href;
const raceTrackTiltShadow = "" + new URL("raceTrackTiltShadow-BHh-c9vl.webp", import.meta.url).href;
const raceTrackTiltTop1 = "" + new URL("raceTrackTiltTop-1-B-7IBeFg.webp", import.meta.url).href;
const raceTrackTiltTop2 = "" + new URL("raceTrackTiltTop-2-Dn5mFD66.webp", import.meta.url).href;
const raceTrackTiltTop3 = "" + new URL("raceTrackTiltTop-3-CmEU3EhF.webp", import.meta.url).href;
const raceTrackTiltTop4 = "" + new URL("raceTrackTiltTop-4-5ub7Pbus.webp", import.meta.url).href;
const raceTrackTiltTop5 = "" + new URL("raceTrackTiltTop-5-xCtNzf4b.webp", import.meta.url).href;
const raceTrackTiltTop6 = "" + new URL("raceTrackTiltTop-6-C7x8Fyee.webp", import.meta.url).href;
const raceTrackTiltTop = "" + new URL("raceTrackTiltTop-0GYZTCQz.webp", import.meta.url).href;
const dissolveLogoDesktop = "" + new URL("dissolveLogoDesktop-BvBjtYTf.mp4", import.meta.url).href;
const mobileCapCentralGreen = "" + new URL("cap-central-green-CewUD_0t.webp", import.meta.url).href;
const mobileCapCentralRed = "" + new URL("cap-central-red-O-aLQ2ld.webp", import.meta.url).href;
const mobileCapCentralYellow = "" + new URL("cap-central-yellow-Cjbf52Qb.webp", import.meta.url).href;
const mobileCapLeftGreen = "" + new URL("cap-left-green-DMnJqpLt.webp", import.meta.url).href;
const mobileCapLeftRed = "" + new URL("cap-left-red-vFVrgnZU.webp", import.meta.url).href;
const mobileCapLeftYellow = "" + new URL("cap-left-yellow-CBa8aan_.webp", import.meta.url).href;
const mobileCapRightGreen = "" + new URL("cap-right-green-B9S-5tRE.webp", import.meta.url).href;
const mobileCapRightRed = "" + new URL("cap-right-red-Cp1T1BCZ.webp", import.meta.url).href;
const mobileCapRightYellow = "" + new URL("cap-right-yellow-CLxRjlzT.webp", import.meta.url).href;
const chipTrayChips = "" + new URL("chips-BjKgkGNz.webp", import.meta.url).href;
const Semicircle = "" + new URL("Semicircle-ta4zbKzc.webp", import.meta.url).href;
const safariHint = "" + new URL("safariHint-1KPW-hwO.webp", import.meta.url).href;
const desktopCapCentralGreen = "" + new URL("cap-central-green-t7yOUAEO.webp", import.meta.url).href;
const desktopCapCentralRed = "" + new URL("cap-central-red-D-SCe1ek.webp", import.meta.url).href;
const desktopCapCentralYellow = "" + new URL("cap-central-yellow-BhETYdjw.webp", import.meta.url).href;
const desktopCapLeftGreen = "" + new URL("cap-left-green-omHSE5C-.webp", import.meta.url).href;
const desktopCapLeftRed = "" + new URL("cap-left-red-B2zD66Ex.webp", import.meta.url).href;
const desktopCapLeftYellow = "" + new URL("cap-left-yellow-W4k0AUyc.webp", import.meta.url).href;
const desktopCapRightGreen = "" + new URL("cap-right-green-gf9mB0xg.webp", import.meta.url).href;
const desktopCapRightRed = "" + new URL("cap-right-red-Cba0YdKa.webp", import.meta.url).href;
const desktopCapRightYellow = "" + new URL("cap-right-yellow-ByV-TZim.webp", import.meta.url).href;
const desktopBg = "" + new URL("desktopBg-BHL2PzDH.webp", import.meta.url).href;
const autoplayCloseImg = "" + new URL("autoplayClose-XUpeSjMn.webp", import.meta.url).href;
const autoplayRoundImg = "" + new URL("autoplayRound-zoKCJjuC.webp", import.meta.url).href;
const playImg = "" + new URL("play-CaNsieB5.webp", import.meta.url).href;
const stopImg = "" + new URL("stop-Dvio0AOg.webp", import.meta.url).href;
const logoLightImg = "" + new URL("logoLight-D8003_j9.webp", import.meta.url).href;
const toggle = "" + new URL("toggle-HRJyP8Cv.webp", import.meta.url).href;
const person = "" + new URL("person-1tvXmwgU.webp", import.meta.url).href;
const youWinVector = "" + new URL("you-win-vector-C8hyDl4t.webp", import.meta.url).href;
const c1 = "" + new URL("c1-CdaDEe1j.webp", import.meta.url).href;
const c10 = "" + new URL("c10-UFOJX2Vd.webp", import.meta.url).href;
const c11 = "" + new URL("c11-CGUjgAZU.webp", import.meta.url).href;
const c12 = "" + new URL("c12-ChWwFVtN.webp", import.meta.url).href;
const c2 = "" + new URL("c2-BCevMfuq.webp", import.meta.url).href;
const c3 = "" + new URL("c3-C67Ybri3.webp", import.meta.url).href;
const c4 = "" + new URL("c4-iMMWXL9Q.webp", import.meta.url).href;
const c5 = "" + new URL("c5-5FnYoSKE.webp", import.meta.url).href;
const c6 = "" + new URL("c6-VPH3pJo1.webp", import.meta.url).href;
const c7 = "" + new URL("c7-DukXy2JI.webp", import.meta.url).href;
const c8 = "" + new URL("c8-CGF33yDO.webp", import.meta.url).href;
const c9 = "" + new URL("c9-DQ7HNAGz.webp", import.meta.url).href;
const c1_disable = "" + new URL("c1-DQafPoNU.webp", import.meta.url).href;
const c10_disable = "" + new URL("c10-Br1flTUD.webp", import.meta.url).href;
const c11_disable = "" + new URL("c11-sbCa-put.webp", import.meta.url).href;
const c12_disable = "" + new URL("c12-DtxqCX1f.webp", import.meta.url).href;
const c2_disable = "" + new URL("c1-DQafPoNU.webp", import.meta.url).href;
const c3_disable = "" + new URL("c1-DQafPoNU.webp", import.meta.url).href;
const c4_disable = "" + new URL("c4-DPHcH5DB.webp", import.meta.url).href;
const c5_disable = "" + new URL("c4-DPHcH5DB.webp", import.meta.url).href;
const c6_disable = "" + new URL("c4-DPHcH5DB.webp", import.meta.url).href;
const c7_disable = "" + new URL("c7-C2x-xK85.webp", import.meta.url).href;
const c8_disable = "" + new URL("c7-C2x-xK85.webp", import.meta.url).href;
const c9_disable = "" + new URL("c7-C2x-xK85.webp", import.meta.url).href;
const c1_back = "" + new URL("c1-DwlGGdvK.webp", import.meta.url).href;
const c10_back = "" + new URL("c10-DNphMbxJ.webp", import.meta.url).href;
const c11_back = "" + new URL("c11-C1fAp60-.webp", import.meta.url).href;
const c12_back = "" + new URL("c12-DaOVdPKr.webp", import.meta.url).href;
const c2_back = "" + new URL("c2-D6mUgWsP.webp", import.meta.url).href;
const c3_back = "" + new URL("c3-DtByoGnp.webp", import.meta.url).href;
const c4_back = "" + new URL("c4-CpbaZob6.webp", import.meta.url).href;
const c5_back = "" + new URL("c5-D5t4yt2r.webp", import.meta.url).href;
const c6_back = "" + new URL("c6-Ckl-svJ7.webp", import.meta.url).href;
const c7_back = "" + new URL("c7-D-IWSVQ9.webp", import.meta.url).href;
const c8_back = "" + new URL("c8-CR8roGSQ.webp", import.meta.url).href;
const c9_back = "" + new URL("c9-WEIH-ZU7.webp", import.meta.url).href;
const chipResources = {
  c1: { type: ResourceType.Image, url: c1 },
  c2: { type: ResourceType.Image, url: c2 },
  c3: { type: ResourceType.Image, url: c3 },
  c4: { type: ResourceType.Image, url: c4 },
  c5: { type: ResourceType.Image, url: c5 },
  c6: { type: ResourceType.Image, url: c6 },
  c7: { type: ResourceType.Image, url: c7 },
  c8: { type: ResourceType.Image, url: c8 },
  c9: { type: ResourceType.Image, url: c9 },
  c10: { type: ResourceType.Image, url: c10 },
  c11: { type: ResourceType.Image, url: c11 },
  c12: { type: ResourceType.Image, url: c12 },
  c1_disable: { type: ResourceType.Image, url: c1_disable },
  c2_disable: { type: ResourceType.Image, url: c2_disable },
  c3_disable: { type: ResourceType.Image, url: c3_disable },
  c4_disable: { type: ResourceType.Image, url: c4_disable },
  c5_disable: { type: ResourceType.Image, url: c5_disable },
  c6_disable: { type: ResourceType.Image, url: c6_disable },
  c7_disable: { type: ResourceType.Image, url: c7_disable },
  c8_disable: { type: ResourceType.Image, url: c8_disable },
  c9_disable: { type: ResourceType.Image, url: c9_disable },
  c10_disable: { type: ResourceType.Image, url: c10_disable },
  c11_disable: { type: ResourceType.Image, url: c11_disable },
  c12_disable: { type: ResourceType.Image, url: c12_disable },
  c1_back: { type: ResourceType.Image, url: c1_back },
  c10_back: { type: ResourceType.Image, url: c10_back },
  c11_back: { type: ResourceType.Image, url: c11_back },
  c12_back: { type: ResourceType.Image, url: c12_back },
  c2_back: { type: ResourceType.Image, url: c2_back },
  c3_back: { type: ResourceType.Image, url: c3_back },
  c4_back: { type: ResourceType.Image, url: c4_back },
  c5_back: { type: ResourceType.Image, url: c5_back },
  c6_back: { type: ResourceType.Image, url: c6_back },
  c7_back: { type: ResourceType.Image, url: c7_back },
  c8_back: { type: ResourceType.Image, url: c8_back },
  c9_back: { type: ResourceType.Image, url: c9_back }
};
const soundBet = "" + new URL("bet-CaZc-Rbg.aac", import.meta.url).href;
const soundChiptrayOpen = "" + new URL("chiptray_open-DJ52XWPY.aac", import.meta.url).href;
const soundChoosingChip = "" + new URL("choosing_chip-D6lV6v7u.aac", import.meta.url).href;
const soundClick = "" + new URL("click-PNPOxISS.aac", import.meta.url).href;
const soundDisabledAction = "" + new URL("disabled_action-ByRLnFD7.aac", import.meta.url).href;
const soundDouble = "" + new URL("double-mWNHN-tg.aac", import.meta.url).href;
const soundErrorToast = "" + new URL("error_toast-C9kl4eX3.aac", import.meta.url).href;
const soundLastBets = "" + new URL("last_bets-BK29ZdsU.aac", import.meta.url).href;
const soundLastfive = "" + new URL("loop-C2XCfVzI.aac", import.meta.url).href;
const soundLoop = "" + new URL("loop-C2XCfVzI.aac", import.meta.url).href;
const soundMultipleBet = "" + new URL("multiple_bet-BAEqRDC2.aac", import.meta.url).href;
const soundNoMoreBets = "" + new URL("no_more_bets-CyfXjiMp.aac", import.meta.url).href;
const soundNormalToast = "" + new URL("normal_toast-BoxD8NFs.aac", import.meta.url).href;
const soundPlaceYourBets = "" + new URL("place_your_bets-C8_NUzKh.aac", import.meta.url).href;
const soundSlider = "" + new URL("slider-tBoI0F11.aac", import.meta.url).href;
const soundSlider1 = "" + new URL("slider_01-BV27B12C.aac", import.meta.url).href;
const soundSlider2 = "" + new URL("slider_02-Ds67hvSm.aac", import.meta.url).href;
const soundSlider3 = "" + new URL("slider_03-Co9VBoDz.aac", import.meta.url).href;
const soundSlider4 = "" + new URL("slider_04-B-vmR1k1.aac", import.meta.url).href;
const soundSlider5 = "" + new URL("slider_05-DCLrRltN.aac", import.meta.url).href;
const soundSlider6 = "" + new URL("slider_06-BRAAKXSE.aac", import.meta.url).href;
const soundSlider7 = "" + new URL("slider_07-D7c9frT9.aac", import.meta.url).href;
const soundSlider8 = "" + new URL("slider_08-BO91jsF3.aac", import.meta.url).href;
const soundStackingBet1 = "" + new URL("stacking_bet1-7SToYB2S.aac", import.meta.url).href;
const soundStackingBet2 = "" + new URL("stacking_bet2-CxrFQ55M.aac", import.meta.url).href;
const soundStackingBet3 = "" + new URL("stacking_bet3-C6iDyiQr.aac", import.meta.url).href;
const soundStackingBet4 = "" + new URL("stacking_bet4-CyHlHDo3.aac", import.meta.url).href;
const soundUndo = "" + new URL("undo-BE3UvArH.aac", import.meta.url).href;
const soundWinEffect = "" + new URL("win_effect-B55XeAPC.aac", import.meta.url).href;
const soundYouWin = "" + new URL("you_win-8UoYhZbn.aac", import.meta.url).href;
const commonSoundResources = {
  sound_youWin: { url: soundYouWin },
  sound_bet: { url: soundBet },
  sound_noMoreBets: { url: soundNoMoreBets },
  sound_placeYourBets: { url: soundPlaceYourBets },
  sound_chiptrayOpen: { url: soundChiptrayOpen },
  sound_choosingChip: { url: soundChoosingChip },
  sound_click: { url: soundClick },
  sound_double: { url: soundDouble },
  sound_lastBets: { url: soundLastBets },
  sound_lastfive: { url: soundLastfive },
  sound_undo: { url: soundUndo },
  sound_winEffect: { url: soundWinEffect },
  sound_slider: { url: soundSlider },
  sound_errorToast: { url: soundErrorToast },
  sound_normalToast: { url: soundNormalToast },
  sound_disabledAction: { url: soundDisabledAction },
  sound_stackingBet1: { url: soundStackingBet1 },
  sound_stackingBet2: { url: soundStackingBet2 },
  sound_stackingBet3: { url: soundStackingBet3 },
  sound_stackingBet4: { url: soundStackingBet4 },
  sound_slider1: { url: soundSlider1 },
  sound_slider2: { url: soundSlider2 },
  sound_slider3: { url: soundSlider3 },
  sound_slider4: { url: soundSlider4 },
  sound_slider5: { url: soundSlider5 },
  sound_slider6: { url: soundSlider6 },
  sound_slider7: { url: soundSlider7 },
  sound_slider8: { url: soundSlider8 },
  sound_loop: { url: soundLoop },
  sound_multipleBet: { url: soundMultipleBet }
};
const mobileResources$1 = {
  safariHintPNG: { type: ResourceType.Image, url: safariHint },
  chipTrayChips: { type: ResourceType.Image, url: chipTrayChips },
  Semicircle: { type: ResourceType.Image, url: Semicircle },
  mobileCapCentralGreen: { type: ResourceType.Image, url: mobileCapCentralGreen },
  mobileCapCentralRed: { type: ResourceType.Image, url: mobileCapCentralRed },
  mobileCapCentralYellow: { type: ResourceType.Image, url: mobileCapCentralYellow },
  mobileCapLeftGreen: { type: ResourceType.Image, url: mobileCapLeftGreen },
  mobileCapLeftRed: { type: ResourceType.Image, url: mobileCapLeftRed },
  mobileCapLeftYellow: { type: ResourceType.Image, url: mobileCapLeftYellow },
  mobileCapRightGreen: { type: ResourceType.Image, url: mobileCapRightGreen },
  mobileCapRightRed: { type: ResourceType.Image, url: mobileCapRightRed },
  mobileCapRightYellow: { type: ResourceType.Image, url: mobileCapRightYellow },
  landscapePlaceholderBrightRectangle0deg: { type: ResourceType.Image, url: landscapePlaceholderBrightRectangle0deg },
  landscapePlaceholderBrightRectangle90deg: { type: ResourceType.Image, url: landscapePlaceholderBrightRectangle90deg },
  landscapePlaceholderBrightRectangle270deg: { type: ResourceType.Image, url: landscapePlaceholderBrightRectangle270deg },
  landscapePlaceholderDarkRectangle0deg: { type: ResourceType.Image, url: landscapePlaceholderDarkRectangle0deg },
  landscapePlaceholderDarkRectangle90deg: { type: ResourceType.Image, url: landscapePlaceholderDarkRectangle90deg },
  landscapePlaceholderDarkRectangle270deg: { type: ResourceType.Image, url: landscapePlaceholderDarkRectangle270deg },
  landscapePlaceholderCheckIcon: { type: ResourceType.Image, url: landscapePlaceholderCheckIcon },
  landscapePlaceholderCloseIcon: { type: ResourceType.Image, url: landscapePlaceholderCloseIcon }
};
const desktopResources$1 = {
  desktopBg: { type: ResourceType.Image, url: desktopBg },
  desktopCapCentralGreen: { type: ResourceType.Image, url: desktopCapCentralGreen },
  desktopCapCentralRed: { type: ResourceType.Image, url: desktopCapCentralRed },
  desktopCapCentralYellow: { type: ResourceType.Image, url: desktopCapCentralYellow },
  desktopCapLeftGreen: { type: ResourceType.Image, url: desktopCapLeftGreen },
  desktopCapLeftRed: { type: ResourceType.Image, url: desktopCapLeftRed },
  desktopCapLeftYellow: { type: ResourceType.Image, url: desktopCapLeftYellow },
  desktopCapRightGreen: { type: ResourceType.Image, url: desktopCapRightGreen },
  desktopCapRightRed: { type: ResourceType.Image, url: desktopCapRightRed },
  desktopCapRightYellow: { type: ResourceType.Image, url: desktopCapRightYellow }
};
const sicboHistoryResultResources = {
  frontDice1: { type: ResourceType.Image, url: frontDice1 },
  frontDice2: { type: ResourceType.Image, url: frontDice2 },
  frontDice3: { type: ResourceType.Image, url: frontDice3 },
  frontDice4: { type: ResourceType.Image, url: frontDice4 },
  frontDice5: { type: ResourceType.Image, url: frontDice5 },
  frontDice6: { type: ResourceType.Image, url: frontDice6 },
  tiltDice1: { type: ResourceType.Image, url: tiltDice1 },
  tiltDice2: { type: ResourceType.Image, url: tiltDice2 },
  tiltDice3: { type: ResourceType.Image, url: tiltDice3 },
  tiltDice4: { type: ResourceType.Image, url: tiltDice4 },
  tiltDice5: { type: ResourceType.Image, url: tiltDice5 },
  tiltDice6: { type: ResourceType.Image, url: tiltDice6 },
  bigDome: { type: ResourceType.Image, url: bigDome },
  smallDome: { type: ResourceType.Image, url: smallDome },
  tripleDome: { type: ResourceType.Image, url: tripleDome },
  youWinVector: { type: ResourceType.Image, url: youWinVector }
};
const rouletteHistoryResultResources = {
  winGradient: { type: ResourceType.Image, url: winGradient },
  winShadow: { type: ResourceType.Image, url: winShadow },
  winSide: { type: ResourceType.Image, url: winSide },
  winWhiteball: { type: ResourceType.Image, url: winWhiteball }
};
const loadingScreenResources = {
  mga: { type: ResourceType.Image, url: mga },
  gambleAware: { type: ResourceType.Image, url: gambleAware },
  crystalLogo: { type: ResourceType.Image, url: crystalLogo }
};
const preloadResources$1 = {
  ...isMobileDevice ? mobileResources$1 : desktopResources$1,
  ...chipResources,
  ...commonSoundResources,
  ...sicboHistoryResultResources,
  ...rouletteHistoryResultResources,
  ...loadingScreenResources,
  togglePNG: { type: ResourceType.Image, url: toggle },
  logoLight: { type: ResourceType.Image, url: logoLightImg },
  autoplayPlay: { type: ResourceType.Image, url: playImg },
  autoplayStop: { type: ResourceType.Image, url: stopImg },
  autoplayClose: { type: ResourceType.Image, url: autoplayCloseImg },
  autoplayRound: { type: ResourceType.Image, url: autoplayRoundImg },
  modalHeader: { type: ResourceType.Image, url: modalHeader },
  modalHeaderAutoPlayBetChanged: { type: ResourceType.Image, url: modalHeaderAutoPlayBetChanged },
  modalHeaderAutoPlayFinished: { type: ResourceType.Image, url: modalHeaderAutoPlayFinished },
  modalHeaderExpiredChip: { type: ResourceType.Image, url: modalHeaderExpiredChip },
  modalHeaderIdle: { type: ResourceType.Image, url: modalHeaderIdle },
  modalHeaderMultiSession: { type: ResourceType.Image, url: modalHeaderMultiSession },
  person: { type: ResourceType.Image, url: person }
};
const logoImg = "" + new URL("logo-iZblRLCZ.webp", import.meta.url).href;
const aro001Bg = "" + new URL("ARO-001-sZcZmUK6.webp", import.meta.url).href;
const aro002Bg = "" + new URL("ARO-002-D6rF4MdZ.webp", import.meta.url).href;
const aro003Bg = "" + new URL("ARO-003-DbQfJ0iZ.webp", import.meta.url).href;
const aro004Bg = "" + new URL("ARO-004-BR1hgpdM.webp", import.meta.url).href;
const aro005Bg = "" + new URL("ARO-001-sZcZmUK6.webp", import.meta.url).href;
const aro006Bg = "" + new URL("ARO-006-prEmt4rJ.webp", import.meta.url).href;
const aro007Bg = "" + new URL("ARO-007-BpHgqoU0.webp", import.meta.url).href;
const maskBg = "" + new URL("maskBg-DucZoSPQ.webp", import.meta.url).href;
const Bg$1 = "" + new URL("grid-DsYGUVIY.webp", import.meta.url).href;
const Bg = "" + new URL("raceTrack-D8yAhu8V.webp", import.meta.url).href;
const polarCenter = "" + new URL("polarCenter-DvlFy7Lu.webp", import.meta.url).href;
const radial = "" + new URL("radial-SkzvgMtz.webp", import.meta.url).href;
const sound0Aac = "" + new URL("0-CUGvcmiL.aac", import.meta.url).href;
const sound1Aac = "" + new URL("1-4JLKN_Jz.aac", import.meta.url).href;
const sound10Aac = "" + new URL("10-CL-lYdMF.aac", import.meta.url).href;
const sound11Aac = "" + new URL("11-D78OP0y9.aac", import.meta.url).href;
const sound12Aac = "" + new URL("12-rsr5aI3l.aac", import.meta.url).href;
const sound13Aac = "" + new URL("13-BC285k8p.aac", import.meta.url).href;
const sound14Aac = "" + new URL("14-DQsr39dF.aac", import.meta.url).href;
const sound15Aac = "" + new URL("15-D94-R5uW.aac", import.meta.url).href;
const sound16Aac = "" + new URL("16-mmyJPrv2.aac", import.meta.url).href;
const sound17Aac = "" + new URL("17-CRHK5gXA.aac", import.meta.url).href;
const sound18Aac = "" + new URL("18-CGGnBRwG.aac", import.meta.url).href;
const sound19Aac = "" + new URL("19-C3K7n_YI.aac", import.meta.url).href;
const sound2Aac = "" + new URL("2-C_vKIXvV.aac", import.meta.url).href;
const sound20Aac = "" + new URL("20-uFLjrD12.aac", import.meta.url).href;
const sound21Aac = "" + new URL("21-TLcDyeLr.aac", import.meta.url).href;
const sound22Aac = "" + new URL("22-DL9GYks1.aac", import.meta.url).href;
const sound23Aac = "" + new URL("23-FoeTzlyh.aac", import.meta.url).href;
const sound24Aac = "" + new URL("24-D0OaCbH4.aac", import.meta.url).href;
const sound25Aac = "" + new URL("25-COi_7gO6.aac", import.meta.url).href;
const sound26Aac = "" + new URL("26-5jYvPZhf.aac", import.meta.url).href;
const sound27Aac = "" + new URL("27-Dl24h3sd.aac", import.meta.url).href;
const sound28Aac = "" + new URL("28-CyGPN39M.aac", import.meta.url).href;
const sound29Aac = "" + new URL("29-DiBvhxTz.aac", import.meta.url).href;
const sound3Aac = "" + new URL("3-B0GP8w8y.aac", import.meta.url).href;
const sound30Aac = "" + new URL("30-7-uZ0r3C.aac", import.meta.url).href;
const sound31Aac = "" + new URL("31-C4NsEcoR.aac", import.meta.url).href;
const sound32Aac = "" + new URL("32-CWLgUgCo.aac", import.meta.url).href;
const sound33Aac = "" + new URL("33-DS1yNwWi.aac", import.meta.url).href;
const sound34Aac = "" + new URL("34-CpgVjZdS.aac", import.meta.url).href;
const sound35Aac = "" + new URL("35-C2PEaEla.aac", import.meta.url).href;
const sound36Aac = "" + new URL("36-Cyj_2zYk.aac", import.meta.url).href;
const sound4Aac = "" + new URL("4-BaijHd9H.aac", import.meta.url).href;
const sound5Aac = "" + new URL("5-b_gp3bK_.aac", import.meta.url).href;
const sound6Aac = "" + new URL("6-BW4S1QEG.aac", import.meta.url).href;
const sound7Aac = "" + new URL("7-Cj2DFmwb.aac", import.meta.url).href;
const sound8Aac = "" + new URL("8-DyEdGI8f.aac", import.meta.url).href;
const sound9Aac = "" + new URL("9-Dj98fqQw.aac", import.meta.url).href;
const soundSpeedRouletteBGMAac = "" + new URL("speed_roulette_bgm-BS3qJGmi.aac", import.meta.url).href;
const soundVipRouletteBGMAac = "" + new URL("vip_roulette_bgm-CGMAKsaF.aac", import.meta.url).href;
const soundResources = {
  sound_0: { url: sound0Aac },
  sound_1: { url: sound1Aac },
  sound_2: { url: sound2Aac },
  sound_3: { url: sound3Aac },
  sound_4: { url: sound4Aac },
  sound_5: { url: sound5Aac },
  sound_6: { url: sound6Aac },
  sound_7: { url: sound7Aac },
  sound_8: { url: sound8Aac },
  sound_9: { url: sound9Aac },
  sound_10: { url: sound10Aac },
  sound_11: { url: sound11Aac },
  sound_12: { url: sound12Aac },
  sound_13: { url: sound13Aac },
  sound_14: { url: sound14Aac },
  sound_15: { url: sound15Aac },
  sound_16: { url: sound16Aac },
  sound_17: { url: sound17Aac },
  sound_18: { url: sound18Aac },
  sound_19: { url: sound19Aac },
  sound_20: { url: sound20Aac },
  sound_21: { url: sound21Aac },
  sound_22: { url: sound22Aac },
  sound_23: { url: sound23Aac },
  sound_24: { url: sound24Aac },
  sound_25: { url: sound25Aac },
  sound_26: { url: sound26Aac },
  sound_27: { url: sound27Aac },
  sound_28: { url: sound28Aac },
  sound_29: { url: sound29Aac },
  sound_30: { url: sound30Aac },
  sound_31: { url: sound31Aac },
  sound_32: { url: sound32Aac },
  sound_33: { url: sound33Aac },
  sound_34: { url: sound34Aac },
  sound_35: { url: sound35Aac },
  sound_36: { url: sound36Aac }
};
const { GAME_TABLE: GAME_TABLE$2 } = useConfigStore.getState();
if (GAME_TABLE$2 === "ARO-001") {
  soundResources.sound_rouletteBGM = { url: soundSpeedRouletteBGMAac };
} else {
  soundResources.sound_rouletteBGM = { url: soundVipRouletteBGMAac };
}
const mobileResources = {
  mobileGrid: { type: ResourceType.Image, url: bettingGrid },
  raceTrackBoardPNG: { type: ResourceType.Image, url: raceTrack },
  blurBg: { type: ResourceType.Image, url: blurBg },
  dissolveLogo: { type: ResourceType.Video, url: dissolveLogoMobile },
  mobileDefaultMode: { type: ResourceType.Image, url: Default$1 },
  mobileFullCompleteMode: { type: ResourceType.Image, url: FullComplete$1 },
  mobileStraightUpMode: { type: ResourceType.Image, url: StraightUp$1 },
  mobileGridLowerThick: { type: ResourceType.Image, url: mobileGridLowerThick },
  mobileGridUpperThick: { type: ResourceType.Image, url: mobileGridUpperThick },
  mobileRacetrackThick1: { type: ResourceType.Image, url: mobileRacetrackThick1 },
  mobileRacetrackThick2: { type: ResourceType.Image, url: mobileRacetrackThick2 },
  mobileRacetrackThick3: { type: ResourceType.Image, url: mobileRacetrackThick3 },
  mobileRacetrackThick4: { type: ResourceType.Image, url: mobileRacetrackThick4 },
  mobileRacetrackThick5: { type: ResourceType.Image, url: mobileRacetrackThick5 },
  mobileRacetrackThick6: { type: ResourceType.Image, url: mobileRacetrackThick6 }
};
const desktopResources = {
  dissolveLogo: { type: ResourceType.Video, url: dissolveLogoDesktop },
  desktopGrid: { type: ResourceType.Image, url: grid },
  gridBoardTiltBottom: { type: ResourceType.Image, url: gridBoardTiltBottom },
  gridBoardTiltShadow: { type: ResourceType.Image, url: gridBoardTiltShadow },
  gridBoardTiltTop: { type: ResourceType.Image, url: gridBoardTiltTop },
  desktopRaceTrack: { type: ResourceType.Image, url: boardRaceTrack },
  raceTrackTiltBottom: { type: ResourceType.Image, url: raceTrackTiltBottom },
  raceTrackTiltShadow: { type: ResourceType.Image, url: raceTrackTiltShadow },
  raceTrackTiltCenter: { type: ResourceType.Image, url: raceTrackTiltCenter },
  raceTrackTiltTop: { type: ResourceType.Image, url: raceTrackTiltTop },
  raceTrackTiltTop1: { type: ResourceType.Image, url: raceTrackTiltTop1 },
  raceTrackTiltTop2: { type: ResourceType.Image, url: raceTrackTiltTop2 },
  raceTrackTiltTop3: { type: ResourceType.Image, url: raceTrackTiltTop3 },
  raceTrackTiltTop4: { type: ResourceType.Image, url: raceTrackTiltTop4 },
  raceTrackTiltTop5: { type: ResourceType.Image, url: raceTrackTiltTop5 },
  raceTrackTiltTop6: { type: ResourceType.Image, url: raceTrackTiltTop6 },
  desktopDefaultMode: { type: ResourceType.Image, url: Default },
  desktopFullCompleteMode: { type: ResourceType.Image, url: FullComplete },
  desktopStraightUpMode: { type: ResourceType.Image, url: StraightUp }
};
const BACKGROUND_MAP = {
  "ARO-001": aro001Bg,
  "ARO-002": aro002Bg,
  "ARO-003": aro003Bg,
  "ARO-004": aro004Bg,
  "ARO-005": aro005Bg,
  "ARO-006": aro006Bg,
  "ARO-007": aro007Bg
};
const GAME_TABLE$1 = useConfigStore.getState().GAME_TABLE;
const virtualBackground = (_c = BACKGROUND_MAP[GAME_TABLE$1]) != null ? _c : "";
const virtualBackgroundResource = virtualBackground ? { virtualBackground: { type: ResourceType.Image, url: virtualBackground } } : {};
const preloadResources = {
  ...preloadResources$1,
  ...pixiResources,
  ...isMobileDevice ? mobileResources : desktopResources,
  statisticPolarCenter: { type: ResourceType.Image, url: polarCenter },
  statisticRadial: { type: ResourceType.Image, url: radial },
  statisticGridBg: { type: ResourceType.Image, url: Bg$1 },
  statisticRaceBg: { type: ResourceType.Image, url: Bg },
  logo: { type: ResourceType.Image, url: logoImg },
  // virtual background poc (ARO-242, ARO-259)
  maskBg: { type: ResourceType.Image, url: maskBg },
  ...virtualBackgroundResource,
  // Sounds
  ...soundResources
};
const App = reactExports.lazy(() => __vitePreload(() => import("./App-DX8Hmlgm.js").then((n) => n.A), true ? __vite__mapDeps([2,3,1,4,5,6,7,8]) : void 0, import.meta.url));
const AppPromise = __vitePreload(() => import("./App-DX8Hmlgm.js").then((n) => n.A), true ? __vite__mapDeps([2,3,1,4,5,6,7,8]) : void 0, import.meta.url);
const getBackgroundForTable = (tableId) => {
  switch (tableId) {
    case "ARO-001":
    case "ARO-005":
    case "ARO-006":
    case "ARO-007":
      return isMobileDevice ? mobileBG001 : desktopBG001;
    case "ARO-002":
    case "ARO-003":
    case "ARO-004":
      return isMobileDevice ? mobileBG002 : desktopBG002;
    default:
      return isMobileDevice ? mobileBGDefault : desktopBGDefault;
  }
};
const GAME_TABLE = useConfigStore.getState().GAME_TABLE;
const backgroundImage = getBackgroundForTable(GAME_TABLE);
const LOADING_TEXT_OPTIONS = [
  "ROULETTE.LOADING_WAXING_WHEEL",
  "ROULETTE.LOADING_STARTING_ENGINES",
  "ROULETTE.LOADING_LIGHTING_LIGHT",
  "ROULETTE.LOADING_POLISHING_BALL",
  "ROULETTE.LOADING_POWERING_CAMERA",
  "ROULETTE.LOADING_SPIN_TO_WIN",
  "ROULETTE.LOADING_YOUR_TURN",
  "ROULETTE.LOADING_CHECKING_HORIZON",
  "ROULETTE.LOADING_SLAM_DUNKING"
];
const loadingResources = {
  headerWithoutWinHistory: true,
  desktopBG: backgroundImage,
  mobileBG: backgroundImage,
  topIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Image,
    {
      src: goldenLiveLogo,
      alt: "Golden Live Logo",
      className: "h-auto max-w-full"
    }
  ),
  gameIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Roulette, {}),
  bottomIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Image,
    {
      src: crystalLogo,
      alt: "Crystal Logo",
      className: "h-auto max-w-full"
    }
  ),
  gameId: "roulette",
  gameIconDissolve: preloadResources.dissolveLogo.url,
  loadingTextOptions: LOADING_TEXT_OPTIONS
};
function Root() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LoadingProvider,
      {
        preloadResources,
        loadingResources,
        AppPromise,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LandscapeProvider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisualEffect$1, { hooks: [useWinEffect] })
  ] });
}
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Error$1, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { Root }) }) })
);
export {
  useLongPress as $,
  getVolume as A,
  BetState as B,
  CenterModal as C,
  sleep as D,
  useWinAnimStore$2 as E,
  useDebugStore as F,
  checkStorageQuota as G,
  cn as H,
  useWinNumberStore as I,
  useToastStore as J,
  t as K,
  tooltipEventBus as L,
  LoadingStageEnum as M,
  initInterpolationFunc as N,
  COUNT_DOWN_DELAY_SEC as O,
  InterpolationMode as P,
  getMainBoard as Q,
  getMainBoardParams as R,
  isDesktop as S,
  ONE_FRAME_TIME_SEC as T,
  blurBg as U,
  AutoPlayFinishedModal as V,
  convertLabel as W,
  logoLightImg as X,
  Image as Y,
  Semicircle as Z,
  useChatStore as _,
  __vite_legacy_guard,
  useLoadingStore as a,
  mobileCapRightRed as a$,
  thousandSeparator as a0,
  skipScrollPages as a1,
  scrollWrapToTop as a2,
  safariHint as a3,
  LANGUAGES as a4,
  useDataStore as a5,
  GameRules$1 as a6,
  RoomType as a7,
  GameHistoryContent as a8,
  GameHistoryContentHeader as a9,
  raceTrackGroup as aA,
  extractLeft as aB,
  buttonMoveVariants as aC,
  iconColorVariants as aD,
  logoImg as aE,
  useClickAway as aF,
  autoplayRoundImg as aG,
  autoplayCloseImg as aH,
  getFormattedRoundId as aI,
  toggleFullScreen as aJ,
  isSicboGameType as aK,
  StraightUp as aL,
  FullComplete as aM,
  Default as aN,
  gridBoardTiltShadow as aO,
  grid as aP,
  GRID_HOVER_HIGHLIGHT as aQ,
  ALL_GROUP_MAP as aR,
  boardRaceTrack as aS,
  RACE_TRACK_HIGHLIGHT as aT,
  findNeighborByRange as aU,
  gridBoardTiltTop as aV,
  gridBoardTiltBottom as aW,
  raceTrackTiltTop as aX,
  raceTrackTiltCenter as aY,
  raceTrackTiltBottom as aZ,
  getWinNumberStore as a_,
  StraightUp$1 as aa,
  FullComplete$1 as ab,
  Default$1 as ac,
  BoardIDEnum as ad,
  GRID_WIN_HIGHLIGHT_FN as ae,
  getInitWinHighlight as af,
  convertRouletteMap as ag,
  BetTypeEnum as ah,
  betGridPrefix as ai,
  gridBoardTiltCompactVariants as aj,
  gridBoardTiltVariants as ak,
  bettingGrid as al,
  mobileGridUpperThick as am,
  mobileGridLowerThick as an,
  gridBoardMoveVariants as ao,
  RACE_TRACK_HIGHLIGHT_FN as ap,
  raceTrackBoardMoveVariants as aq,
  raceTrackBoardTiltCompactVariants as ar,
  raceTrackBoardTiltVariants as as,
  raceTrack as at,
  mobileRacetrackThick1 as au,
  mobileRacetrackThick2 as av,
  mobileRacetrackThick3 as aw,
  mobileRacetrackThick4 as ax,
  mobileRacetrackThick5 as ay,
  mobileRacetrackThick6 as az,
  isSafari as b,
  desktopCapRightRed as b0,
  mobileCapCentralRed as b1,
  desktopCapCentralRed as b2,
  mobileCapLeftRed as b3,
  desktopCapLeftRed as b4,
  mobileCapRightYellow as b5,
  desktopCapRightYellow as b6,
  mobileCapCentralYellow as b7,
  desktopCapCentralYellow as b8,
  mobileCapLeftYellow as b9,
  changeLanguage as bA,
  create as bB,
  subscribeWithSelector as bC,
  persist as bD,
  createJSONStorage as bE,
  OUTER_GROUP_MAP as bF,
  raceTrackToStraight as bG,
  Bg$1 as bH,
  Bg as bI,
  radial as bJ,
  polarCenter as bK,
  RACE_ORDER as bL,
  maskBg as bM,
  virtualBackground as bN,
  raceTrackGroup$1 as bO,
  getDraggedChipEdgeDist as bP,
  getCenterPosition as bQ,
  cleanExtraBets as bR,
  addExtraBets as bS,
  getDraggedChipRef as bT,
  desktopCapLeftYellow as ba,
  mobileCapRightGreen as bb,
  desktopCapRightGreen as bc,
  mobileCapCentralGreen as bd,
  desktopCapCentralGreen as be,
  mobileCapLeftGreen as bf,
  desktopCapLeftGreen as bg,
  isIOS as bh,
  hasVibrationSupport as bi,
  chipResources as bj,
  isRouletteGameType as bk,
  getBetColor as bl,
  stopImg as bm,
  playImg as bn,
  getRouletteNumberColor as bo,
  WinNumber$1 as bp,
  getSicBoNumberColor as bq,
  WinNumber as br,
  useDebounce as bs,
  getPayTable as bt,
  scrollWrap as bu,
  useHistoryStore as bv,
  currencyFormat as bw,
  GameHistoryResult$1 as bx,
  DEFAULT_HISTORY_LIMIT as by,
  toggle as bz,
  useLayoutStore as c,
  useTimerStore as d,
  useNetworkStore as e,
  clearInterval$1 as f,
  useSettingStore as g,
  useBettingStore as h,
  isMobileDevice as i,
  useCartStore as j,
  setVolume as k,
  setMute as l,
  initSoundResource as m,
  getWinAnimStore as n,
  commonSoundResources as o,
  playSound as p,
  soundResources as q,
  useAutoPlayStore as r,
  setInterval$1 as s,
  useTranslation as t,
  useWindowSize as u,
  useConfigStore as v,
  isInIframe as w,
  useIdle as x,
  connectIns as y,
  sounds as z
};
//# sourceMappingURL=index-CmJqq2pL.js.map
