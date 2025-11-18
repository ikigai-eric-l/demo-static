const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MobileLayout-q0bVj0QA.js","./framer-motion-vendor-M-CJJoj5.js","./@sentry-vendor-DIzI_R8p.js","./SquareButton-aOnOtv7Q.js","./index-CmJqq2pL.js","./ikigaians-house-core-CYkxu2p9.js","./ikigaians-connect-core-CK9eHaV7.js","./react-dom-vendor-DIvBW9ov.js","./ui-icons-internal-Cv1pemof.js","./pixi.js-vendor-By4Tt1Nl.js","./pixi-filters-vendor-urfE99zo.js","./index-CDohms2k.css","./ikigaians-ikgplayer-core-CxDPJj5x.js","./SquareButton-APrecJ2x.css","./MobileLayout-B3_NxgiM.css","./DesktopLayout-Ch13kWAm.js","./DesktopLayout-Hw7p-49Z.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./pixi.js-vendor-By4Tt1Nl.js";
import { j as jsxRuntimeExports } from "./framer-motion-vendor-M-CJJoj5.js";
import { r as reactExports, R as React, b as React$1, g as getDefaultExportFromCjs } from "./@sentry-vendor-DIzI_R8p.js";
import { u as useWindowSize, i as isMobileDevice, a as useLoadingStore, b as isSafari, c as useLayoutStore, d as useTimerStore, e as useNetworkStore, f as clearInterval, s as setInterval, g as useSettingStore, h as useBettingStore, j as useCartStore, p as playSound, k as setVolume, l as setMute, m as initSoundResource, n as getWinAnimStore, o as commonSoundResources, q as soundResources, r as useAutoPlayStore, t as useTranslation, C as CenterModal, v as useConfigStore, w as isInIframe, x as useIdle, y as connectIns, B as BetState, z as sounds, A as getVolume, D as sleep, E as useWinAnimStore$2, F as useDebugStore, G as checkStorageQuota, H as cn, I as useWinNumberStore, J as useToastStore, K as t$3, L as tooltipEventBus, M as LoadingStageEnum, N as initInterpolationFunc, O as COUNT_DOWN_DELAY_SEC, P as InterpolationMode, Q as getMainBoard, R as getMainBoardParams, S as isDesktop, T as ONE_FRAME_TIME_SEC, U as blurBg, V as AutoPlayFinishedModal } from "./index-CmJqq2pL.js";
import { S as SicBoBetNo } from "./ikigaians-house-core-CYkxu2p9.js";
import { r as reactDomExports, $ as $7SXl2$reactdom, c as clientExports } from "./react-dom-vendor-DIvBW9ov.js";
import { a as IconMenu } from "./ui-icons-internal-Cv1pemof.js";
const HEADER_HEIGHT_DEBOUNCE_DELAY = 150;
function useGlobalOverlayHeightCalculator() {
  const windowSize = useWindowSize();
  const calculateHeaderHeight = reactExports.useCallback(() => {
    const headerElement = document.getElementById("DesktopHeader") || // Desktop header ID
    document.getElementById("Header");
    let height = 64;
    if (headerElement) {
      height = headerElement.getBoundingClientRect().height;
    } else {
      height = isMobileDevice ? 48 : 64;
    }
    document.documentElement.style.setProperty("--header-height", "".concat(height, "px"));
  }, []);
  reactExports.useEffect(() => {
    const timeoutId = window.setTimeout(calculateHeaderHeight, HEADER_HEIGHT_DEBOUNCE_DELAY);
    return () => clearTimeout(timeoutId);
  }, [windowSize, calculateHeaderHeight]);
}
function useSafariCheck() {
  const isLoadingFinished = useLoadingStore((s2) => s2.isLoadingFinished);
  reactExports.useEffect(() => {
    if (!isLoadingFinished) return;
    const isShowSafariHint = isSafari() && !localStorage.getItem("safariLaunch");
    if (isShowSafariHint) {
      useLayoutStore.setState({ menuPage: "safari_hint" });
    }
  }, [isLoadingFinished]);
}
const FRAME_INTERVAL = 1e3 / 60;
function useTicker() {
  const refresh = useTimerStore((state) => state.refresh);
  const { isIdleTimeout, isExpired, isMultiSession } = useNetworkStore((state) => ({
    isIdleTimeout: state.isIdleTimeout,
    isExpired: state.isExpired,
    isMultiSession: state.isMultiSession
  }));
  reactExports.useEffect(() => {
    if (isIdleTimeout || isExpired || isMultiSession) return;
    const intervalId = simulateRAF(refresh);
    useTimerStore.setState({ timerId: intervalId });
    return () => {
      clearInterval(intervalId);
    };
  }, [isIdleTimeout, isExpired, isMultiSession]);
}
function simulateRAF(callback) {
  return setInterval(() => {
    const now = Date.now();
    callback(now);
  }, FRAME_INTERVAL);
}
const useBaseSound = (soundResource2) => {
  reactExports.useEffect(() => {
    const { gameVolume, masterVolume } = useSettingStore.getState();
    const initial = (masterVolume2, gameVolume2) => {
      setVolume(gameVolume2);
      setMute(masterVolume2 === 0);
    };
    initial(masterVolume, gameVolume);
    let betState;
    const playState = (name) => {
      if (betState) betState();
      betState = playSound([name]);
    };
    const unSubscribes = [
      useBettingStore.subscribe(
        (state) => state.isBet,
        (cur) => {
          playState(cur ? "placeYourBets" : "noMoreBets");
        }
      ),
      useBettingStore.subscribe(
        (state) => state.betMode,
        () => {
          playSound(["click"]);
        }
      ),
      useSettingStore.subscribe((cur, prev) => {
        if (cur.gameVolume !== prev.gameVolume || cur.masterVolume !== prev.masterVolume) {
          setVolume(cur.gameVolume * cur.masterVolume);
        }
        if (cur.screenName !== prev.screenName) {
          return;
        }
      }),
      useTimerStore.subscribe(
        (state) => state.currentMs,
        /* @__PURE__ */ (() => {
          let lastBetsPlayed = false;
          let lastFivePlayed = false;
          return (cur) => {
            const { betEnd } = useBettingStore.getState();
            const betRemain = Math.floor(Math.max(0, betEnd - cur) * 0.01) / 10;
            if (betRemain > 5.6) {
              lastBetsPlayed = false;
            } else if (betRemain === 5.6 && !lastBetsPlayed) {
              lastBetsPlayed = true;
              playSound(["lastBets"]);
            }
            if (betRemain > 5.1) {
              lastFivePlayed = false;
            } else if (betRemain === 5.1 && !lastFivePlayed) {
              lastFivePlayed = true;
              playSound(["lastfive"]);
            }
          };
        })()
      ),
      useCartStore.subscribe(
        (state) => state.selectedChipVal,
        () => {
          playSound(["choosingChip"]);
        }
      ),
      useBettingStore.subscribe(
        (state) => state.neighborRange,
        () => {
          playSound(["click"]);
        }
      )
    ];
    const visibilitychange = () => {
      if (!isMobileDevice) return;
      if (document.hidden) {
        Howler.mute(true);
      } else {
        const { isExpired, isMultiSession, isIdleTimeout } = useNetworkStore.getState();
        if (isExpired || isMultiSession || isIdleTimeout) return;
        Howler.mute(false);
      }
      const { ctx } = Howler;
      if (document.visibilityState !== "hidden") {
        document.addEventListener("click", resumeOnInteraction);
        document.addEventListener("touchstart", resumeOnInteraction);
        setTimeout(() => {
          ctx == null ? void 0 : ctx.resume();
        }, 100);
      }
    };
    const resumeOnInteraction = () => {
      const { ctx } = Howler;
      if (ctx && ctx.state === "suspended") {
        ctx.resume().then(() => {
          console.log("✅ AudioContext resumed successfully on user interaction.");
        }).catch((e2) => {
          console.error("Error resuming AudioContext:", e2.message);
        });
      }
      document.removeEventListener("click", resumeOnInteraction);
      document.removeEventListener("touchstart", resumeOnInteraction);
    };
    document.addEventListener("visibilitychange", visibilitychange, false);
    const removeGestureListener = () => {
      document.removeEventListener("touchend", unlockAudioContext, true);
      document.removeEventListener("click", unlockAudioContext, true);
    };
    const unlockAudioContext = () => {
      removeGestureListener();
      initSoundResource(soundResource2);
      useLayoutStore.setState({ isUnmuteHint: false });
    };
    document.addEventListener("touchend", unlockAudioContext, true);
    document.addEventListener("click", unlockAudioContext, true);
    return () => {
      document.removeEventListener("visibilitychange", visibilitychange, false);
      removeGestureListener();
      unSubscribes.forEach((unsubscribe) => unsubscribe());
    };
  }, []);
};
const useWinAnimStore$1 = getWinAnimStore();
const useSound = () => {
  useBaseSound({ ...soundResources, ...commonSoundResources });
  const animState = useWinAnimStore$1((s2) => s2.animState);
  const winResult = useWinAnimStore$1((s2) => s2.winResult);
  reactExports.useEffect(() => {
    if (animState !== "animationStart" || !winResult) return;
    const { result, userWin } = winResult;
    const list = [result.toString()];
    if (userWin > 0) {
      setTimeout(() => playSound(["winEffect"]), 600);
      list.push("youWin");
    }
    playSound(list);
  }, [animState, winResult]);
};
function AutoPlayBetChangedModal() {
  const confirmModalType = useAutoPlayStore((s2) => s2.confirmModalType);
  const { cancelAutoPlay } = useAutoPlayStore();
  const { t: t2 } = useTranslation();
  const handleContinue = () => {
    playSound(["click"]);
    useAutoPlayStore.setState({
      confirmModalType: null,
      boardSnapshot: useCartStore.getState().boardHistory[useCartStore.getState().boardHistory.length - 1]
    });
  };
  const handleCancel = () => {
    playSound(["click"]);
    useAutoPlayStore.setState({ confirmModalType: null });
    cancelAutoPlay();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CenterModal,
    {
      open: confirmModalType === "BetChanged",
      icon: "autoplayBetChanged",
      title: t2("COMMON.BET_CHANGED"),
      titleClassName: "pl-[0.2rem]",
      text: t2("COMMON.AUTOPLAY_PROMPT1"),
      confirmText: t2("COMMON.CONTINUE"),
      onConfirm: handleContinue,
      cancelText: t2("COMMON.STOP_AUTOPLAY"),
      onCancel: handleCancel
    }
  );
}
function ExpiredModal() {
  const isExpired = useNetworkStore((state) => state.isExpired);
  const { t: t2 } = useTranslation();
  const LOBBY_URL = useConfigStore((s2) => s2.LOBBY_URL);
  const canShowExit = isInIframe() || !!LOBBY_URL;
  const exitGame = useConfigStore((s2) => s2.exitGame);
  reactExports.useEffect(() => {
    if (isExpired) return setMute(true);
  }, [isExpired]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CenterModal,
    {
      open: isExpired,
      icon: "expired",
      text: t2("COMMON.SESSION_EXPIRED"),
      confirmText: canShowExit ? t2("COMMON.CLOSE") : void 0,
      onConfirm: exitGame
    }
  );
}
function GlobalModalOverlay() {
  const modalOpenCount = useLayoutStore((s2) => s2.modalOpenCount);
  if (modalOpenCount === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "GlobalModalOverlay" });
}
const IDLE_TIMEOUT = 10 * 60 * 1e3;
const FINAL_TIMEOUT = 5 * 60 * 1e3;
function IdleModal() {
  const isAutoPlay = useAutoPlayStore((s2) => s2.isAutoPlay);
  const [modalState, setModalState] = reactExports.useState("");
  const [isInIdle, setIsInIdle] = reactExports.useState(false);
  const timerId = reactExports.useRef(null);
  const { t: t2 } = useTranslation();
  const idle = useIdle(IDLE_TIMEOUT);
  const forceShowIdleModal = useNetworkStore((state) => state.forceShowIdleModal);
  const handleResume = () => {
    playSound(["click"]);
    setModalState("");
    setIsInIdle(false);
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
  };
  const handleRefresh = () => {
    playSound(["click"]);
    location.reload();
  };
  reactExports.useEffect(() => {
    if (idle && !isAutoPlay && !isInIdle) {
      setModalState("idle");
      setIsInIdle(true);
    }
  }, [idle, isAutoPlay, isInIdle]);
  reactExports.useEffect(() => {
    if (modalState === "idle") {
      timerId.current = setTimeout(() => {
        var _a;
        setModalState("timeout");
        setMute(true);
        (_a = connectIns) == null ? void 0 : _a.close();
        useNetworkStore.setState({ isIdleTimeout: true });
      }, FINAL_TIMEOUT);
      return () => {
        if (timerId.current) {
          clearTimeout(timerId.current);
        }
      };
    }
  }, [modalState]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CenterModal,
    {
      open: !!modalState || forceShowIdleModal,
      icon: "idle",
      text: t2("COMMON.INACTIVITY"),
      confirmText: t2(modalState === "idle" ? "COMMON.RESUME_PLAY" : "COMMON.REFRESH"),
      onConfirm: modalState === "idle" ? handleResume : handleRefresh
    }
  );
}
function MaintenanceModal() {
  const isMaintenance = useNetworkStore((state) => state.isMaintenance);
  const { t: t2 } = useTranslation();
  reactExports.useEffect(() => {
    if (isMaintenance) return setMute(true);
  }, [isMaintenance]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CenterModal,
    {
      open: isMaintenance,
      icon: "maintenance",
      text: t2("COMMON.TABLE_MAINTENANCE"),
      textClassName: "max-w-[12rem] whitespace-break-spaces",
      confirmText: "Lobby"
    }
  );
}
function MultiSessionModal() {
  const isMultiSession = useNetworkStore((state) => state.isMultiSession);
  const { t: t2 } = useTranslation();
  const LOBBY_URL = useConfigStore((s2) => s2.LOBBY_URL);
  const canShowExit = isInIframe() || !!LOBBY_URL;
  const exitGame = useConfigStore((s2) => s2.exitGame);
  reactExports.useEffect(() => {
    if (isMultiSession) return setMute(true);
  }, [isMultiSession]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CenterModal,
    {
      open: isMultiSession,
      icon: "multiSession",
      text: t2("COMMON.REJOIN_TIP"),
      textClassName: "w-[10.625rem]",
      confirmText: t2("COMMON.REFRESH"),
      onConfirm: () => setTimeout(() => location.reload(), 200),
      cancelText: canShowExit ? t2("COMMON.CLOSE") : void 0,
      onCancel: exitGame
    }
  );
}
const TAP_COUNT = 5;
const TAP_TIMEOUT_MS = 1500;
const TAP_AREA_PX = 50;
const DEBUG_PANEL_KEY_SEQUENCE = "2882";
const LEVA_KEY_SEQUENCE = "1001";
const ROUND_INFO_SEQUENCE = "2000";
function useDebuggerTrigger({ onOpen, keySequence }) {
  const tapCountRef = reactExports.useRef(0);
  const tapTimeoutRef = reactExports.useRef(null);
  const keySequenceRef = reactExports.useRef("");
  reactExports.useEffect(() => {
    if (!isMobileDevice) return;
    const onTouchEnd = (event) => {
      const factor = useLayoutStore.getState().rootEmFontSize / 16;
      const touch = event.changedTouches[0];
      const isTrigger = touch.clientX < TAP_AREA_PX * factor && touch.clientY < TAP_AREA_PX * factor;
      if (!isTrigger) return;
      tapCountRef.current += 1;
      if (tapCountRef.current === 1) {
        tapTimeoutRef.current = setTimeout(() => {
          tapCountRef.current = 0;
          tapTimeoutRef.current = null;
        }, TAP_TIMEOUT_MS);
      }
      if (tapTimeoutRef.current && tapCountRef.current >= TAP_COUNT) {
        clearTimeout(tapTimeoutRef.current);
        tapTimeoutRef.current = null;
        tapCountRef.current = 0;
        onOpen();
      }
    };
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("touchend", onTouchEnd);
      if (tapTimeoutRef.current) clearTimeout(tapTimeoutRef.current);
    };
  }, [onOpen]);
  reactExports.useEffect(() => {
    if (isMobileDevice) return;
    const onKeyDown = (event) => {
      const target = event.target;
      const shouldIgnore = target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      if (shouldIgnore) return;
      if (event.isComposing) return;
      if (/^Digit\d$/.test(event.code)) {
        const digit = event.code.slice(-1);
        keySequenceRef.current = (keySequenceRef.current + digit).slice(-keySequence.length);
        if (keySequenceRef.current === keySequence) {
          onOpen();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [keySequence, onOpen]);
}
let hasRegistered = false;
const getHasRegistered = () => hasRegistered;
const setHasRegistered = (value) => {
  hasRegistered = value;
};
function useDevQATests() {
  if (getHasRegistered()) return;
  setHasRegistered(true);
  window.betState = {
    setBetState: (state) => {
      useBettingStore.setState({ gameState: state, isBet: state === BetState.Bet });
    }
  };
  window.sound = {
    mute: (name) => {
      name.forEach((soundName) => {
        const sound = sounds.get("sound_".concat(soundName));
        if (sound) sound.volume(0);
      });
    },
    unMute: (name) => {
      name.forEach((soundName) => {
        const sound = sounds.get("sound_".concat(soundName));
        if (sound) sound.volume(getVolume("sound_".concat(soundName)));
      });
    }
  };
  window.winAnim = {
    // * For Playwright tests
    runWinAnim: async (tableDealPayload) => {
      window.betState.setBetState(BetState.Settlement);
      await sleep(2e3);
      useWinAnimStore$2.getState().onTableDeal(tableDealPayload);
      useWinAnimStore$2.getState().onTableFinished(tableDealPayload);
    }
  };
  window.layout = {
    setMenuPage: (page) => {
      useLayoutStore.setState({ menuPage: page });
    },
    desktopModal: (modal) => {
      useLayoutStore.setState({ desktopModal: modal, prevDesktopModal: null });
    }
  };
  window.numGrow = {
    setAmount: (small, big) => {
      useCartStore.setState((state) => ({
        betStats: { amount: { [SicBoBetNo.SMALL]: small, [SicBoBetNo.BIG]: big }, count: state.betStats.count }
      }));
    },
    setCount: (small, big) => {
      useCartStore.setState((state) => ({
        betStats: { amount: state.betStats.amount, count: { [SicBoBetNo.SMALL]: small, [SicBoBetNo.BIG]: big } }
      }));
    }
  };
  window.maintenance = {
    startTime: (timestamp) => {
      useConfigStore.setState({ maintenanceStartTime: timestamp });
    }
  };
  console.debug("Dev/QA tools registered");
}
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    }
    return n2;
  }, _extends$1.apply(null, arguments);
}
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function") ref(value);
  else if (ref !== null && ref !== void 0) ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return reactExports.useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}
const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  const { children, ...slotProps } = props2;
  const childrenArray = reactExports.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
        return /* @__PURE__ */ reactExports.isValidElement(newElement) ? newElement.props.children : null;
      } else return child;
    });
    return /* @__PURE__ */ reactExports.createElement($5e63c961fc1ce211$var$SlotClone, _extends$1({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ reactExports.isValidElement(newElement) ? /* @__PURE__ */ reactExports.cloneElement(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ reactExports.createElement($5e63c961fc1ce211$var$SlotClone, _extends$1({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
const $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  const { children, ...slotProps } = props2;
  if (/* @__PURE__ */ reactExports.isValidElement(children)) return /* @__PURE__ */ reactExports.cloneElement(children, {
    ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
  });
  return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ reactExports.isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
        childPropValue(...args);
        slotPropValue(...args);
      };
      else if (slotPropValue) overrideProps[propName] = slotPropValue;
    } else if (propName === "style") overrideProps[propName] = {
      ...slotPropValue,
      ...childPropValue
    };
    else if (propName === "className") overrideProps[propName] = [
      slotPropValue,
      childPropValue
    ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}
const $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node2 = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
    const { asChild, ...primitiveProps } = props2;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    reactExports.useEffect(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ reactExports.createElement(Comp, _extends$1({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node2.displayName = "Primitive.".concat(node);
  return {
    ...primitive,
    [node]: Node2
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target) reactDomExports.flushSync(
    () => target.dispatchEvent(event)
  );
}
const $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props2;
  return container ? /* @__PURE__ */ $7SXl2$reactdom.createPortal(/* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});
const $f1701beae083dbae$export$be92b6f5f03c0fe9 = $f1701beae083dbae$export$602eac185826482c;
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
  var ctor, len;
  if (foo === bar) return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date) return foo.getTime() === bar.getTime();
    if (ctor === RegExp) return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len])) ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (let i2 = 0; i2 < keysA.length; i2++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i2]) || !Object.is(objA[keysA[i2]], objB[keysA[i2]])) {
      return false;
    }
  }
  return true;
}
var Rule = function Rule2(name, fn, args, modifiers) {
  this.name = name;
  this.fn = fn;
  this.args = args;
  this.modifiers = modifiers;
};
Rule.prototype._test = function _test(value) {
  var fn = this.fn;
  try {
    testAux(this.modifiers.slice(), fn, this)(value);
  } catch (ex) {
    fn = function() {
      return false;
    };
  }
  try {
    return testAux(this.modifiers.slice(), fn, this)(value);
  } catch (ex$1) {
    return false;
  }
};
Rule.prototype._check = function _check(value) {
  try {
    testAux(this.modifiers.slice(), this.fn, this)(value);
  } catch (ex) {
    if (testAux(this.modifiers.slice(), function(it) {
      return it;
    }, this)(false)) {
      return;
    }
  }
  if (!testAux(this.modifiers.slice(), this.fn, this)(value)) {
    throw null;
  }
};
Rule.prototype._testAsync = function _testAsync(value) {
  var this$1$1 = this;
  return new Promise(function(resolve, reject) {
    testAsyncAux(
      this$1$1.modifiers.slice(),
      this$1$1.fn,
      this$1$1
    )(value).then(function(valid) {
      if (valid) {
        resolve(value);
      } else {
        reject(null);
      }
    }).catch(function(ex) {
      return reject(ex);
    });
  });
};
function pickFn(fn, variant) {
  if (variant === void 0) variant = "simple";
  return typeof fn === "object" ? fn[variant] : fn;
}
function testAux(modifiers, fn, rule) {
  if (modifiers.length) {
    var modifier = modifiers.shift();
    var nextFn = testAux(modifiers, fn, rule);
    return modifier.perform(nextFn, rule);
  } else {
    return pickFn(fn);
  }
}
function testAsyncAux(modifiers, fn, rule) {
  if (modifiers.length) {
    var modifier = modifiers.shift();
    var nextFn = testAsyncAux(modifiers, fn, rule);
    return modifier.performAsync(nextFn, rule);
  } else {
    return function(value) {
      return Promise.resolve(pickFn(fn, "async")(value));
    };
  }
}
var Modifier = function Modifier2(name, perform, performAsync) {
  this.name = name;
  this.perform = perform;
  this.performAsync = performAsync;
};
var ValidationError = /* @__PURE__ */ (function(Error2) {
  function ValidationError2(rule, value, cause, target) {
    var remaining = [], len = arguments.length - 4;
    while (len-- > 0) remaining[len] = arguments[len + 4];
    Error2.call(this, remaining);
    if (Error2.captureStackTrace) {
      Error2.captureStackTrace(this, ValidationError2);
    }
    this.rule = rule;
    this.value = value;
    this.cause = cause;
    this.target = target;
  }
  if (Error2) ValidationError2.__proto__ = Error2;
  ValidationError2.prototype = Object.create(Error2 && Error2.prototype);
  ValidationError2.prototype.constructor = ValidationError2;
  return ValidationError2;
})(Error);
var Context = function Context2(chain2, nextRuleModifiers) {
  if (chain2 === void 0) chain2 = [];
  if (nextRuleModifiers === void 0) nextRuleModifiers = [];
  this.chain = chain2;
  this.nextRuleModifiers = nextRuleModifiers;
};
Context.prototype._applyRule = function _applyRule(ruleFn, name) {
  var this$1$1 = this;
  return function() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    this$1$1.chain.push(
      new Rule(name, ruleFn.apply(this$1$1, args), args, this$1$1.nextRuleModifiers)
    );
    this$1$1.nextRuleModifiers = [];
    return this$1$1;
  };
};
Context.prototype._applyModifier = function _applyModifier(modifier, name) {
  this.nextRuleModifiers.push(
    new Modifier(name, modifier.simple, modifier.async)
  );
  return this;
};
Context.prototype._clone = function _clone() {
  return new Context(this.chain.slice(), this.nextRuleModifiers.slice());
};
Context.prototype.test = function test(value) {
  return this.chain.every(function(rule) {
    return rule._test(value);
  });
};
Context.prototype.testAll = function testAll(value) {
  var err = [];
  this.chain.forEach(function(rule) {
    try {
      rule._check(value);
    } catch (ex) {
      err.push(new ValidationError(rule, value, ex));
    }
  });
  return err;
};
Context.prototype.check = function check(value) {
  this.chain.forEach(function(rule) {
    try {
      rule._check(value);
    } catch (ex) {
      throw new ValidationError(rule, value, ex);
    }
  });
};
Context.prototype.testAsync = function testAsync(value) {
  var this$1$1 = this;
  return new Promise(function(resolve, reject) {
    executeAsyncRules(value, this$1$1.chain.slice(), resolve, reject);
  });
};
function executeAsyncRules(value, rules, resolve, reject) {
  if (rules.length) {
    var rule = rules.shift();
    rule._testAsync(value).then(
      function() {
        executeAsyncRules(value, rules, resolve, reject);
      },
      function(cause) {
        reject(new ValidationError(rule, value, cause));
      }
    );
  } else {
    resolve(value);
  }
}
var consideredEmpty = function(value, considerTrimmedEmptyString) {
  if (considerTrimmedEmptyString && typeof value === "string" && value.trim().length === 0) {
    return true;
  }
  return value === void 0 || value === null;
};
function optional(validation, considerTrimmedEmptyString) {
  if (considerTrimmedEmptyString === void 0) considerTrimmedEmptyString = false;
  return {
    simple: function(value) {
      return consideredEmpty(value, considerTrimmedEmptyString) || validation.check(value) === void 0;
    },
    async: function(value) {
      return consideredEmpty(value, considerTrimmedEmptyString) || validation.testAsync(value);
    }
  };
}
function v8n() {
  return typeof Proxy !== "undefined" ? proxyContext(new Context()) : proxylessContext(new Context());
}
var customRules = {};
v8n.extend = function(newRules) {
  Object.assign(customRules, newRules);
};
v8n.clearCustomRules = function() {
  customRules = {};
};
function proxyContext(context) {
  return new Proxy(context, {
    get: function get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }
      var newContext = proxyContext(context._clone());
      if (prop in availableModifiers) {
        return newContext._applyModifier(availableModifiers[prop], prop);
      }
      if (prop in customRules) {
        return newContext._applyRule(customRules[prop], prop);
      }
      if (prop in availableRules) {
        return newContext._applyRule(availableRules[prop], prop);
      }
    }
  });
}
function proxylessContext(context) {
  var addRuleSet = function(ruleSet, targetContext) {
    Object.keys(ruleSet).forEach(function(prop) {
      targetContext[prop] = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var newContext = proxylessContext(targetContext._clone());
        var contextWithRuleApplied = newContext._applyRule(
          ruleSet[prop],
          prop
        ).apply(void 0, args);
        return contextWithRuleApplied;
      };
    });
    return targetContext;
  };
  var contextWithAvailableRules = addRuleSet(availableRules, context);
  var contextWithAllRules = addRuleSet(
    customRules,
    contextWithAvailableRules
  );
  Object.keys(availableModifiers).forEach(function(prop) {
    Object.defineProperty(contextWithAllRules, prop, {
      get: function() {
        var newContext = proxylessContext(contextWithAllRules._clone());
        return newContext._applyModifier(availableModifiers[prop], prop);
      }
    });
  });
  return contextWithAllRules;
}
var availableModifiers = {
  not: {
    simple: function(fn) {
      return function(value) {
        return !fn(value);
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.resolve(fn(value)).then(function(result) {
          return !result;
        }).catch(function() {
          return true;
        });
      };
    }
  },
  some: {
    simple: function(fn) {
      return function(value) {
        return split(value).some(function(item) {
          try {
            return fn(item);
          } catch (ex) {
            return false;
          }
        });
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.all(
          split(value).map(function(item) {
            try {
              return fn(item).catch(function() {
                return false;
              });
            } catch (ex) {
              return false;
            }
          })
        ).then(function(result) {
          return result.some(Boolean);
        });
      };
    }
  },
  every: {
    simple: function(fn) {
      return function(value) {
        return value !== false && split(value).every(fn);
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.all(split(value).map(fn)).then(function(result) {
          return result.every(Boolean);
        });
      };
    }
  },
  strict: {
    simple: function(fn, rule) {
      return function(value) {
        if (isSchemaRule(rule) && value && typeof value === "object") {
          return Object.keys(rule.args[0]).length === Object.keys(value).length && fn(value);
        }
        return fn(value);
      };
    },
    async: function(fn, rule) {
      return function(value) {
        return Promise.resolve(fn(value)).then(function(result) {
          if (isSchemaRule(rule) && value && typeof value === "object") {
            return Object.keys(rule.args[0]).length === Object.keys(value).length && result;
          }
          return result;
        }).catch(function() {
          return false;
        });
      };
    }
  }
};
function isSchemaRule(rule) {
  return rule && rule.name === "schema" && rule.args.length > 0 && typeof rule.args[0] === "object";
}
function split(value) {
  if (typeof value === "string") {
    return value.split("");
  }
  return value;
}
var availableRules = {
  // Value
  equal: function(expected) {
    return function(value) {
      return value == expected;
    };
  },
  exact: function(expected) {
    return function(value) {
      return value === expected;
    };
  },
  // Types
  number: function(allowInfinite) {
    if (allowInfinite === void 0) allowInfinite = true;
    return function(value) {
      return typeof value === "number" && (allowInfinite || isFinite(value));
    };
  },
  integer: function() {
    return function(value) {
      var isInteger = Number.isInteger || isIntegerPolyfill;
      return isInteger(value);
    };
  },
  numeric: function() {
    return function(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    };
  },
  string: function() {
    return testType("string");
  },
  boolean: function() {
    return testType("boolean");
  },
  undefined: function() {
    return testType("undefined");
  },
  null: function() {
    return testType("null");
  },
  array: function() {
    return testType("array");
  },
  object: function() {
    return testType("object");
  },
  instanceOf: function(instance) {
    return function(value) {
      return value instanceof instance;
    };
  },
  // Pattern
  pattern: function(expected) {
    return function(value) {
      return expected.test(value);
    };
  },
  lowercase: function() {
    return function(value) {
      return typeof value === "boolean" || value === value.toLowerCase() && value.trim() !== "";
    };
  },
  uppercase: function() {
    return function(value) {
      return value === value.toUpperCase() && value.trim() !== "";
    };
  },
  vowel: function() {
    return function(value) {
      return /^[aeiou]+$/i.test(value);
    };
  },
  consonant: function() {
    return function(value) {
      return /^(?=[^aeiou])([a-z]+)$/i.test(value);
    };
  },
  // Value at
  first: function(expected) {
    return function(value) {
      return value[0] == expected;
    };
  },
  last: function(expected) {
    return function(value) {
      return value[value.length - 1] == expected;
    };
  },
  // Length
  empty: function() {
    return function(value) {
      return value.length === 0;
    };
  },
  length: function(min2, max2) {
    return function(value) {
      return value.length >= min2 && value.length <= (max2 || min2);
    };
  },
  minLength: function(min2) {
    return function(value) {
      return value.length >= min2;
    };
  },
  maxLength: function(max2) {
    return function(value) {
      return value.length <= max2;
    };
  },
  // Range
  negative: function() {
    return function(value) {
      return value < 0;
    };
  },
  positive: function() {
    return function(value) {
      return value >= 0;
    };
  },
  between: function(a2, b2) {
    return function(value) {
      return value >= a2 && value <= b2;
    };
  },
  range: function(a2, b2) {
    return function(value) {
      return value >= a2 && value <= b2;
    };
  },
  lessThan: function(n2) {
    return function(value) {
      return value < n2;
    };
  },
  lessThanOrEqual: function(n2) {
    return function(value) {
      return value <= n2;
    };
  },
  greaterThan: function(n2) {
    return function(value) {
      return value > n2;
    };
  },
  greaterThanOrEqual: function(n2) {
    return function(value) {
      return value >= n2;
    };
  },
  // Divisible
  even: function() {
    return function(value) {
      return value % 2 === 0;
    };
  },
  odd: function() {
    return function(value) {
      return value % 2 !== 0;
    };
  },
  includes: function(expected) {
    return function(value) {
      return ~value.indexOf(expected);
    };
  },
  schema: function(schema2) {
    return testSchema(schema2);
  },
  // branching
  passesAnyOf: function() {
    var validations = [], len = arguments.length;
    while (len--) validations[len] = arguments[len];
    return function(value) {
      return validations.some(function(validation) {
        return validation.test(value);
      });
    };
  },
  optional
};
function testType(expected) {
  return function(value) {
    return Array.isArray(value) && expected === "array" || value === null && expected === "null" || typeof value === expected;
  };
}
function isIntegerPolyfill(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
function testSchema(schema2) {
  return {
    simple: function(value) {
      var causes = [];
      Object.keys(schema2).forEach(function(key) {
        var nestedValidation = schema2[key];
        try {
          nestedValidation.check((value || {})[key]);
        } catch (ex) {
          ex.target = key;
          causes.push(ex);
        }
      });
      if (causes.length > 0) {
        throw causes;
      }
      return true;
    },
    async: function(value) {
      var causes = [];
      var nested = Object.keys(schema2).map(function(key) {
        var nestedValidation = schema2[key];
        return nestedValidation.testAsync((value || {})[key]).catch(function(ex) {
          ex.target = key;
          causes.push(ex);
        });
      });
      return Promise.all(nested).then(function() {
        if (causes.length > 0) {
          throw causes;
        }
        return true;
      });
    }
  };
}
var e$2 = "colors", t$2 = "sizes", r$3 = "space", n$3 = { gap: r$3, gridGap: r$3, columnGap: r$3, gridColumnGap: r$3, rowGap: r$3, gridRowGap: r$3, inset: r$3, insetBlock: r$3, insetBlockEnd: r$3, insetBlockStart: r$3, insetInline: r$3, insetInlineEnd: r$3, insetInlineStart: r$3, margin: r$3, marginTop: r$3, marginRight: r$3, marginBottom: r$3, marginLeft: r$3, marginBlock: r$3, marginBlockEnd: r$3, marginBlockStart: r$3, marginInline: r$3, marginInlineEnd: r$3, marginInlineStart: r$3, padding: r$3, paddingTop: r$3, paddingRight: r$3, paddingBottom: r$3, paddingLeft: r$3, paddingBlock: r$3, paddingBlockEnd: r$3, paddingBlockStart: r$3, paddingInline: r$3, paddingInlineEnd: r$3, paddingInlineStart: r$3, top: r$3, right: r$3, bottom: r$3, left: r$3, scrollMargin: r$3, scrollMarginTop: r$3, scrollMarginRight: r$3, scrollMarginBottom: r$3, scrollMarginLeft: r$3, scrollMarginX: r$3, scrollMarginY: r$3, scrollMarginBlock: r$3, scrollMarginBlockEnd: r$3, scrollMarginBlockStart: r$3, scrollMarginInline: r$3, scrollMarginInlineEnd: r$3, scrollMarginInlineStart: r$3, scrollPadding: r$3, scrollPaddingTop: r$3, scrollPaddingRight: r$3, scrollPaddingBottom: r$3, scrollPaddingLeft: r$3, scrollPaddingX: r$3, scrollPaddingY: r$3, scrollPaddingBlock: r$3, scrollPaddingBlockEnd: r$3, scrollPaddingBlockStart: r$3, scrollPaddingInline: r$3, scrollPaddingInlineEnd: r$3, scrollPaddingInlineStart: r$3, fontSize: "fontSizes", background: e$2, backgroundColor: e$2, backgroundImage: e$2, borderImage: e$2, border: e$2, borderBlock: e$2, borderBlockEnd: e$2, borderBlockStart: e$2, borderBottom: e$2, borderBottomColor: e$2, borderColor: e$2, borderInline: e$2, borderInlineEnd: e$2, borderInlineStart: e$2, borderLeft: e$2, borderLeftColor: e$2, borderRight: e$2, borderRightColor: e$2, borderTop: e$2, borderTopColor: e$2, caretColor: e$2, color: e$2, columnRuleColor: e$2, fill: e$2, outline: e$2, outlineColor: e$2, stroke: e$2, textDecorationColor: e$2, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t$2, minBlockSize: t$2, maxBlockSize: t$2, inlineSize: t$2, minInlineSize: t$2, maxInlineSize: t$2, width: t$2, minWidth: t$2, maxWidth: t$2, height: t$2, minHeight: t$2, maxHeight: t$2, flexBasis: t$2, gridTemplateColumns: t$2, gridTemplateRows: t$2, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, i$4 = (e2, t2) => "function" == typeof t2 ? { "()": Function.prototype.toString.call(t2) } : t2, o$3 = () => {
  const e2 = /* @__PURE__ */ Object.create(null);
  return (t2, r2, ...n2) => {
    const o2 = ((e3) => JSON.stringify(e3, i$4))(t2);
    return o2 in e2 ? e2[o2] : e2[o2] = r2(t2, ...n2);
  };
}, l$3 = Symbol.for("sxs.internal"), s$4 = (e2, t2) => Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)), a$3 = (e2) => {
  for (const t2 in e2) return true;
  return false;
}, { hasOwnProperty: c$4 } = Object.prototype, d$4 = (e2) => e2.includes("-") ? e2 : e2.replace(/[A-Z]/g, ((e3) => "-" + e3.toLowerCase())), g$4 = /\s+(?![^()]*\))/, p$4 = (e2) => (t2) => e2(..."string" == typeof t2 ? String(t2).split(g$4) : [t2]), u$4 = { appearance: (e2) => ({ WebkitAppearance: e2, appearance: e2 }), backfaceVisibility: (e2) => ({ WebkitBackfaceVisibility: e2, backfaceVisibility: e2 }), backdropFilter: (e2) => ({ WebkitBackdropFilter: e2, backdropFilter: e2 }), backgroundClip: (e2) => ({ WebkitBackgroundClip: e2, backgroundClip: e2 }), boxDecorationBreak: (e2) => ({ WebkitBoxDecorationBreak: e2, boxDecorationBreak: e2 }), clipPath: (e2) => ({ WebkitClipPath: e2, clipPath: e2 }), content: (e2) => ({ content: e2.includes('"') || e2.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e2) ? e2 : '"'.concat(e2, '"') }), hyphens: (e2) => ({ WebkitHyphens: e2, hyphens: e2 }), maskImage: (e2) => ({ WebkitMaskImage: e2, maskImage: e2 }), maskSize: (e2) => ({ WebkitMaskSize: e2, maskSize: e2 }), tabSize: (e2) => ({ MozTabSize: e2, tabSize: e2 }), textSizeAdjust: (e2) => ({ WebkitTextSizeAdjust: e2, textSizeAdjust: e2 }), userSelect: (e2) => ({ WebkitUserSelect: e2, userSelect: e2 }), marginBlock: p$4(((e2, t2) => ({ marginBlockStart: e2, marginBlockEnd: t2 || e2 }))), marginInline: p$4(((e2, t2) => ({ marginInlineStart: e2, marginInlineEnd: t2 || e2 }))), maxSize: p$4(((e2, t2) => ({ maxBlockSize: e2, maxInlineSize: t2 || e2 }))), minSize: p$4(((e2, t2) => ({ minBlockSize: e2, minInlineSize: t2 || e2 }))), paddingBlock: p$4(((e2, t2) => ({ paddingBlockStart: e2, paddingBlockEnd: t2 || e2 }))), paddingInline: p$4(((e2, t2) => ({ paddingInlineStart: e2, paddingInlineEnd: t2 || e2 }))) }, h$5 = /([\d.]+)([^]*)/, f$4 = (e2, t2) => e2.length ? e2.reduce(((e3, r2) => (e3.push(...t2.map(((e4) => e4.includes("&") ? e4.replace(/&/g, /[ +>|~]/.test(r2) && /&.*&/.test(e4) ? ":is(".concat(r2, ")") : r2) : r2 + " " + e4))), e3)), []) : t2, m$4 = (e2, t2) => e2 in b$5 && "string" == typeof t2 ? t2.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, ((t3, r2, n2, i2) => r2 + ("stretch" === n2 ? "-moz-available".concat(i2, ";").concat(d$4(e2), ":").concat(r2, "-webkit-fill-available") : "-moz-fit-content".concat(i2, ";").concat(d$4(e2), ":").concat(r2, "fit-content")) + i2)) : String(t2), b$5 = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, S$4 = (e2) => e2 ? e2 + "-" : "", k$4 = (e2, t2, r2) => e2.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, ((e3, n2, i2, o2, l2) => "$" == o2 == !!i2 ? e3 : (n2 || "--" == o2 ? "calc(" : "") + "var(--" + ("$" === o2 ? S$4(t2) + (l2.includes("$") ? "" : S$4(r2)) + l2.replace(/\$/g, "-") : l2) + ")" + (n2 || "--" == o2 ? "*" + (n2 || "") + (i2 || "1") + ")" : ""))), y$5 = /\s*,\s*(?![^()]*\))/, B$1 = Object.prototype.toString, $$3 = (e2, t2, r2, n2, i2) => {
  let o2, l2, s2;
  const a2 = (e3, t3, r3) => {
    let c2, g2;
    const p2 = (e4) => {
      for (c2 in e4) {
        const R2 = 64 === c2.charCodeAt(0), z2 = R2 && Array.isArray(e4[c2]) ? e4[c2] : [e4[c2]];
        for (g2 of z2) {
          const e5 = /[A-Z]/.test($2 = c2) ? $2 : $2.replace(/-[^]/g, ((e6) => e6[1].toUpperCase())), z3 = "object" == typeof g2 && g2 && g2.toString === B$1 && (!n2.utils[e5] || !t3.length);
          if (e5 in n2.utils && !z3) {
            const t4 = n2.utils[e5];
            if (t4 !== l2) {
              l2 = t4, p2(t4(g2)), l2 = null;
              continue;
            }
          } else if (e5 in u$4) {
            const t4 = u$4[e5];
            if (t4 !== s2) {
              s2 = t4, p2(t4(g2)), s2 = null;
              continue;
            }
          }
          if (R2 && (b2 = c2.slice(1) in n2.media ? "@media " + n2.media[c2.slice(1)] : c2, c2 = b2.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, ((e6, t4, r4, n3, i3, o3) => {
            const l3 = h$5.test(t4), s3 = 0.0625 * (l3 ? -1 : 1), [a3, c3] = l3 ? [n3, t4] : [t4, n3];
            return "(" + ("=" === r4[0] ? "" : ">" === r4[0] === l3 ? "max-" : "min-") + a3 + ":" + ("=" !== r4[0] && 1 === r4.length ? c3.replace(h$5, ((e7, t5, n4) => Number(t5) + s3 * (">" === r4 ? 1 : -1) + n4)) : c3) + (i3 ? ") and (" + (">" === i3[0] ? "min-" : "max-") + a3 + ":" + (1 === i3.length ? o3.replace(h$5, ((e7, t5, r5) => Number(t5) + s3 * (">" === i3 ? -1 : 1) + r5)) : o3) : "") + ")";
          }))), z3) {
            const e6 = R2 ? r3.concat(c2) : [...r3], n3 = R2 ? [...t3] : f$4(t3, c2.split(y$5));
            void 0 !== o2 && i2(x$4(...o2)), o2 = void 0, a2(g2, n3, e6);
          } else void 0 === o2 && (o2 = [[], t3, r3]), c2 = R2 || 36 !== c2.charCodeAt(0) ? c2 : "--".concat(S$4(n2.prefix)).concat(c2.slice(1).replace(/\$/g, "-")), g2 = z3 ? g2 : "number" == typeof g2 ? g2 && e5 in I$2 ? String(g2) + "px" : String(g2) : k$4(m$4(e5, null == g2 ? "" : g2), n2.prefix, n2.themeMap[e5]), o2[0].push("".concat(R2 ? "".concat(c2, " ") : "".concat(d$4(c2), ":")).concat(g2));
        }
      }
      var b2, $2;
    };
    p2(e3), void 0 !== o2 && i2(x$4(...o2)), o2 = void 0;
  };
  a2(e2, t2, r2);
}, x$4 = (e2, t2, r2) => "".concat(r2.map(((e3) => "".concat(e3, "{"))).join("")).concat(t2.length ? "".concat(t2.join(","), "{") : "").concat(e2.join(";")).concat(t2.length ? "}" : "").concat(Array(r2.length ? r2.length + 1 : 0).join("}")), I$2 = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, R$3 = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97)), z$2 = (e2) => ((e3) => {
  let t2, r2 = "";
  for (t2 = Math.abs(e3); t2 > 52; t2 = t2 / 52 | 0) r2 = R$3(t2 % 52) + r2;
  return R$3(t2 % 52) + r2;
})(((e3, t2) => {
  let r2 = t2.length;
  for (; r2; ) e3 = 33 * e3 ^ t2.charCodeAt(--r2);
  return e3;
})(5381, JSON.stringify(e2)) >>> 0), W$1 = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], j$1 = (e2) => {
  if (e2.href && !e2.href.startsWith(location.origin)) return false;
  try {
    return !!e2.cssRules;
  } catch (e3) {
    return false;
  }
}, E$2 = (e2) => {
  let t2;
  const r2 = () => {
    const { cssRules: e3 } = t2.sheet;
    return [].map.call(e3, ((r3, n3) => {
      const { cssText: i2 } = r3;
      let o2 = "";
      if (i2.startsWith("--sxs")) return "";
      if (e3[n3 - 1] && (o2 = e3[n3 - 1].cssText).startsWith("--sxs")) {
        if (!r3.cssRules.length) return "";
        for (const e4 in t2.rules) if (t2.rules[e4].group === r3) return "--sxs{--sxs:".concat([...t2.rules[e4].cache].join(" "), "}").concat(i2);
        return r3.cssRules.length ? "".concat(o2).concat(i2) : "";
      }
      return i2;
    })).join("");
  }, n2 = () => {
    if (t2) {
      const { rules: e3, sheet: r3 } = t2;
      if (!r3.deleteRule) {
        for (; 3 === Object(Object(r3.cssRules)[0]).type; ) r3.cssRules.splice(0, 1);
        r3.cssRules = [];
      }
      for (const t3 in e3) delete e3[t3];
    }
    const i2 = Object(e2).styleSheets || [];
    for (const e3 of i2) if (j$1(e3)) {
      for (let i3 = 0, o3 = e3.cssRules; o3[i3]; ++i3) {
        const l3 = Object(o3[i3]);
        if (1 !== l3.type) continue;
        const s2 = Object(o3[i3 + 1]);
        if (4 !== s2.type) continue;
        ++i3;
        const { cssText: a2 } = l3;
        if (!a2.startsWith("--sxs")) continue;
        const c2 = a2.slice(14, -3).trim().split(/\s+/), d2 = W$1[c2[0]];
        d2 && (t2 || (t2 = { sheet: e3, reset: n2, rules: {}, toString: r2 }), t2.rules[d2] = { group: s2, index: i3, cache: new Set(c2) });
      }
      if (t2) break;
    }
    if (!t2) {
      const i3 = (e3, t3) => ({ type: t3, cssRules: [], insertRule(e4, t4) {
        this.cssRules.splice(t4, 0, i3(e4, { import: 3, undefined: 1 }[(e4.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return "@media{}" === e3 ? "@media{".concat([].map.call(this.cssRules, ((e4) => e4.cssText)).join(""), "}") : e3;
      } });
      t2 = { sheet: e2 ? (e2.head || e2).appendChild(document.createElement("style")).sheet : i3("", "text/css"), rules: {}, reset: n2, toString: r2 };
    }
    const { sheet: o2, rules: l2 } = t2;
    for (let e3 = W$1.length - 1; e3 >= 0; --e3) {
      const t3 = W$1[e3];
      if (!l2[t3]) {
        const r3 = W$1[e3 + 1], n3 = l2[r3] ? l2[r3].index : o2.cssRules.length;
        o2.insertRule("@media{}", n3), o2.insertRule("--sxs{--sxs:".concat(e3, "}"), n3), l2[t3] = { group: o2.cssRules[n3 + 1], index: n3, cache: /* @__PURE__ */ new Set([e3]) };
      }
      v$3(l2[t3]);
    }
  };
  return n2(), t2;
}, v$3 = (e2) => {
  const t2 = e2.group;
  let r2 = t2.cssRules.length;
  e2.apply = (e3) => {
    try {
      t2.insertRule(e3, r2), ++r2;
    } catch (e4) {
    }
  };
}, T$4 = Symbol(), w$3 = o$3(), M$2 = (e2, t2) => w$3(e2, (() => (...r2) => {
  let n2 = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const t3 of r2) if (null != t3) if (t3[l$3]) {
    null == n2.type && (n2.type = t3[l$3].type);
    for (const e3 of t3[l$3].composers) n2.composers.add(e3);
  } else t3.constructor !== Object || t3.$$typeof ? null == n2.type && (n2.type = t3) : n2.composers.add(C$2(t3, e2));
  return null == n2.type && (n2.type = "span"), n2.composers.size || n2.composers.add(["PJLV", {}, [], [], {}, []]), P$1(e2, n2, t2);
})), C$2 = ({ variants: e2, compoundVariants: t2, defaultVariants: r2, ...n2 }, i2) => {
  const o2 = "".concat(S$4(i2.prefix), "c-").concat(z$2(n2)), l2 = [], s2 = [], d2 = /* @__PURE__ */ Object.create(null), g2 = [];
  for (const e3 in r2) d2[e3] = String(r2[e3]);
  if ("object" == typeof e2 && e2) for (const t3 in e2) {
    p2 = d2, u2 = t3, c$4.call(p2, u2) || (d2[t3] = "undefined");
    const r3 = e2[t3];
    for (const e3 in r3) {
      const n3 = { [t3]: String(e3) };
      "undefined" === String(e3) && g2.push(t3);
      const i3 = r3[e3], o3 = [n3, i3, !a$3(i3)];
      l2.push(o3);
    }
  }
  var p2, u2;
  if ("object" == typeof t2 && t2) for (const e3 of t2) {
    let { css: t3, ...r3 } = e3;
    t3 = "object" == typeof t3 && t3 || {};
    for (const e4 in r3) r3[e4] = String(r3[e4]);
    const n3 = [r3, t3, !a$3(t3)];
    s2.push(n3);
  }
  return [o2, n2, l2, s2, d2, g2];
}, P$1 = (e2, t2, r2) => {
  const [n2, i2, o2, a2] = L$4(t2.composers), c2 = "function" == typeof t2.type || t2.type.$$typeof ? ((e3) => {
    function t3() {
      for (let r3 = 0; r3 < t3[T$4].length; r3++) {
        const [n3, i3] = t3[T$4][r3];
        e3.rules[n3].apply(i3);
      }
      return t3[T$4] = [], null;
    }
    return t3[T$4] = [], t3.rules = {}, W$1.forEach(((e4) => t3.rules[e4] = { apply: (r3) => t3[T$4].push([e4, r3]) })), t3;
  })(r2) : null, d2 = (c2 || r2).rules, g2 = ".".concat(n2).concat(i2.length > 1 ? ":where(.".concat(i2.slice(1).join("."), ")") : ""), p2 = (l2) => {
    l2 = "object" == typeof l2 && l2 || A$2;
    const { css: s2, ...p3 } = l2, u2 = {};
    for (const e3 in o2) if (delete p3[e3], e3 in l2) {
      let t3 = l2[e3];
      "object" == typeof t3 && t3 ? u2[e3] = { "@initial": o2[e3], ...t3 } : (t3 = String(t3), u2[e3] = "undefined" !== t3 || a2.has(e3) ? t3 : o2[e3]);
    } else u2[e3] = o2[e3];
    const h2 = /* @__PURE__ */ new Set([...i2]);
    for (const [n3, i3, o3, l3] of t2.composers) {
      r2.rules.styled.cache.has(n3) || (r2.rules.styled.cache.add(n3), $$3(i3, [".".concat(n3)], [], e2, ((e3) => {
        d2.styled.apply(e3);
      })));
      const t3 = O$2(o3, u2, e2.media), s3 = O$2(l3, u2, e2.media, true);
      for (const i4 of t3) if (void 0 !== i4) for (const [t4, o4, l4] of i4) {
        const i5 = "".concat(n3, "-").concat(z$2(o4), "-").concat(t4);
        h2.add(i5);
        const s4 = (l4 ? r2.rules.resonevar : r2.rules.onevar).cache, a3 = l4 ? d2.resonevar : d2.onevar;
        s4.has(i5) || (s4.add(i5), $$3(o4, [".".concat(i5)], [], e2, ((e3) => {
          a3.apply(e3);
        })));
      }
      for (const t4 of s3) if (void 0 !== t4) for (const [i4, o4] of t4) {
        const t5 = "".concat(n3, "-").concat(z$2(o4), "-").concat(i4);
        h2.add(t5), r2.rules.allvar.cache.has(t5) || (r2.rules.allvar.cache.add(t5), $$3(o4, [".".concat(t5)], [], e2, ((e3) => {
          d2.allvar.apply(e3);
        })));
      }
    }
    if ("object" == typeof s2 && s2) {
      const t3 = "".concat(n2, "-i").concat(z$2(s2), "-css");
      h2.add(t3), r2.rules.inline.cache.has(t3) || (r2.rules.inline.cache.add(t3), $$3(s2, [".".concat(t3)], [], e2, ((e3) => {
        d2.inline.apply(e3);
      })));
    }
    for (const e3 of String(l2.className || "").trim().split(/\s+/)) e3 && h2.add(e3);
    const f2 = p3.className = [...h2].join(" ");
    return { type: t2.type, className: f2, selector: g2, props: p3, toString: () => f2, deferredInjector: c2 };
  };
  return s$4(p2, { className: n2, selector: g2, [l$3]: t2, toString: () => (r2.rules.styled.cache.has(n2) || p2(), n2) });
}, L$4 = (e2) => {
  let t2 = "";
  const r2 = [], n2 = {}, i2 = [];
  for (const [o2, , , , l2, s2] of e2) {
    "" === t2 && (t2 = o2), r2.push(o2), i2.push(...s2);
    for (const e3 in l2) {
      const t3 = l2[e3];
      (void 0 === n2[e3] || "undefined" !== t3 || s2.includes(t3)) && (n2[e3] = t3);
    }
  }
  return [t2, r2, n2, new Set(i2)];
}, O$2 = (e2, t2, r2, n2) => {
  const i2 = [];
  e: for (let [o2, l2, s2] of e2) {
    if (s2) continue;
    let e3, a2 = 0, c2 = false;
    for (e3 in o2) {
      const n3 = o2[e3];
      let i3 = t2[e3];
      if (i3 !== n3) {
        if ("object" != typeof i3 || !i3) continue e;
        {
          let e4, t3, o3 = 0;
          for (const l3 in i3) {
            if (n3 === String(i3[l3])) {
              if ("@initial" !== l3) {
                const e5 = l3.slice(1);
                (t3 = t3 || []).push(e5 in r2 ? r2[e5] : l3.replace(/^@media ?/, "")), c2 = true;
              }
              a2 += o3, e4 = true;
            }
            ++o3;
          }
          if (t3 && t3.length && (l2 = { ["@media " + t3.join(", ")]: l2 }), !e4) continue e;
        }
      }
    }
    (i2[a2] = i2[a2] || []).push([n2 ? "cv" : "".concat(e3, "-").concat(o2[e3]), l2, c2]);
  }
  return i2;
}, A$2 = {}, N$3 = o$3(), D$3 = (e2, t2) => N$3(e2, (() => (...r2) => {
  const n2 = () => {
    for (let n3 of r2) {
      n3 = "object" == typeof n3 && n3 || {};
      let r3 = z$2(n3);
      if (!t2.rules.global.cache.has(r3)) {
        if (t2.rules.global.cache.add(r3), "@import" in n3) {
          let e3 = [].indexOf.call(t2.sheet.cssRules, t2.rules.themed.group) - 1;
          for (let r4 of [].concat(n3["@import"])) r4 = r4.includes('"') || r4.includes("'") ? r4 : '"'.concat(r4, '"'), t2.sheet.insertRule("@import ".concat(r4, ";"), e3++);
          delete n3["@import"];
        }
        $$3(n3, [], [], e2, ((e3) => {
          t2.rules.global.apply(e3);
        }));
      }
    }
    return "";
  };
  return s$4(n2, { toString: n2 });
})), H$3 = o$3(), V$2 = (e2, t2) => H$3(e2, (() => (r2) => {
  const n2 = "".concat(S$4(e2.prefix), "k-").concat(z$2(r2)), i2 = () => {
    if (!t2.rules.global.cache.has(n2)) {
      t2.rules.global.cache.add(n2);
      const i3 = [];
      $$3(r2, [], [], e2, ((e3) => i3.push(e3)));
      const o2 = "@keyframes ".concat(n2, "{").concat(i3.join(""), "}");
      t2.rules.global.apply(o2);
    }
    return n2;
  };
  return s$4(i2, { get name() {
    return i2();
  }, toString: i2 });
})), G = class {
  constructor(e2, t2, r2, n2) {
    this.token = null == e2 ? "" : String(e2), this.value = null == t2 ? "" : String(t2), this.scale = null == r2 ? "" : String(r2), this.prefix = null == n2 ? "" : String(n2);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + S$4(this.prefix) + S$4(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, F$1 = o$3(), J$1 = (e2, t2) => F$1(e2, (() => (r2, n2) => {
  n2 = "object" == typeof r2 && r2 || Object(n2);
  const i2 = ".".concat(r2 = (r2 = "string" == typeof r2 ? r2 : "") || "".concat(S$4(e2.prefix), "t-").concat(z$2(n2))), o2 = {}, l2 = [];
  for (const t3 in n2) {
    o2[t3] = {};
    for (const r3 in n2[t3]) {
      const i3 = "--".concat(S$4(e2.prefix)).concat(t3, "-").concat(r3), s3 = k$4(String(n2[t3][r3]), e2.prefix, t3);
      o2[t3][r3] = new G(r3, s3, t3, e2.prefix), l2.push("".concat(i3, ":").concat(s3));
    }
  }
  const s2 = () => {
    if (l2.length && !t2.rules.themed.cache.has(r2)) {
      t2.rules.themed.cache.add(r2);
      const i3 = "".concat(n2 === e2.theme ? ":root," : "", ".").concat(r2, "{").concat(l2.join(";"), "}");
      t2.rules.themed.apply(i3);
    }
    return r2;
  };
  return { ...o2, get className() {
    return s2();
  }, selector: i2, toString: s2 };
})), U$1 = o$3();
var Y$1 = o$3(), q$2 = (e2) => {
  const t2 = ((e3) => {
    let t3 = false;
    const r2 = U$1(e3, ((e4) => {
      t3 = true;
      const r3 = "prefix" in (e4 = "object" == typeof e4 && e4 || {}) ? String(e4.prefix) : "", i2 = "object" == typeof e4.media && e4.media || {}, o2 = "object" == typeof e4.root ? e4.root || null : globalThis.document || null, l2 = "object" == typeof e4.theme && e4.theme || {}, s2 = { prefix: r3, media: i2, theme: l2, themeMap: "object" == typeof e4.themeMap && e4.themeMap || { ...n$3 }, utils: "object" == typeof e4.utils && e4.utils || {} }, a2 = E$2(o2), c2 = { css: M$2(s2, a2), globalCss: D$3(s2, a2), keyframes: V$2(s2, a2), createTheme: J$1(s2, a2), reset() {
        a2.reset(), c2.theme.toString();
      }, theme: {}, sheet: a2, config: s2, prefix: r3, getCssText: a2.toString, toString: a2.toString };
      return String(c2.theme = c2.createTheme(l2)), c2;
    }));
    return t3 || r2.reset(), r2;
  })(e2);
  return t2.styled = (({ config: e3, sheet: t3 }) => Y$1(e3, (() => {
    const r2 = M$2(e3, t3);
    return (...e4) => {
      const t4 = r2(...e4), n2 = t4[l$3].type, i2 = React.forwardRef(((e5, r3) => {
        const i3 = e5 && e5.as || n2, { props: o2, deferredInjector: l2 } = t4(e5);
        return delete o2.as, o2.ref = r3, l2 ? React.createElement(React.Fragment, null, React.createElement(i3, o2), React.createElement(l2, null)) : React.createElement(i3, o2);
      }));
      return i2.className = t4.className, i2.displayName = "Styled.".concat(n2.displayName || n2.name || n2), i2.selector = t4.selector, i2.toString = () => t4.selector, i2[l$3] = t4[l$3], i2;
    };
  })))(t2), t2;
};
function clamp$2(v2, min2, max2) {
  return Math.max(min2, Math.min(v2, max2));
}
const V$1 = {
  toVector(v2, fallback) {
    if (v2 === void 0) v2 = fallback;
    return Array.isArray(v2) ? v2 : [v2, v2];
  },
  add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
  },
  sub(v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1]];
  },
  addTo(v1, v2) {
    v1[0] += v2[0];
    v1[1] += v2[1];
  },
  subTo(v1, v2) {
    v1[0] -= v2[0];
    v1[1] -= v2[1];
  }
};
function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity) return Math.pow(distance, constant * 5);
  return distance * dimension * constant / (dimension + constant * distance);
}
function rubberbandIfOutOfBounds(position, min2, max2, constant = 0.15) {
  if (constant === 0) return clamp$2(position, min2, max2);
  if (position < min2) return -rubberband(min2 - position, max2 - min2, constant) + min2;
  if (position > max2) return +rubberband(position - max2, max2 - min2, constant) + max2;
  return position;
}
function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
  const [[X0, X1], [Y0, Y1]] = bounds;
  return [rubberbandIfOutOfBounds(Vx, X0, X1, Rx), rubberbandIfOutOfBounds(Vy, Y0, Y1, Ry)];
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$3(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e2, r22).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2$1(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$3(Object(t2), true).forEach(function(r22) {
      _defineProperty$3(e2, r22, t2[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$3(Object(t2)).forEach(function(r22) {
      Object.defineProperty(e2, r22, Object.getOwnPropertyDescriptor(t2, r22));
    });
  }
  return e2;
}
const EVENT_TYPE_MAP = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function capitalize(string2) {
  if (!string2) return "";
  return string2[0].toUpperCase() + string2.slice(1);
}
const actionsWithoutCaptureSupported = ["enter", "leave"];
function hasCapture(capture = false, actionKey) {
  return capture && !actionsWithoutCaptureSupported.includes(actionKey);
}
function toHandlerProp(device, action = "", capture = false) {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return "on" + capitalize(device) + capitalize(actionKey) + (hasCapture(capture, actionKey) ? "Capture" : "");
}
const pointerCaptureEvents = ["gotpointercapture", "lostpointercapture"];
function parseProp(prop) {
  let eventKey = prop.substring(2).toLowerCase();
  const passive = !!~eventKey.indexOf("passive");
  if (passive) eventKey = eventKey.replace("passive", "");
  const captureKey = pointerCaptureEvents.includes(eventKey) ? "capturecapture" : "capture";
  const capture = !!~eventKey.indexOf(captureKey);
  if (capture) eventKey = eventKey.replace("capture", "");
  return {
    device: eventKey,
    capture,
    passive
  };
}
function toDomEventType(device, action = "") {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return device + actionKey;
}
function isTouch(event) {
  return "touches" in event;
}
function getPointerType(event) {
  if (isTouch(event)) return "touch";
  if ("pointerType" in event) return event.pointerType;
  return "mouse";
}
function getCurrentTargetTouchList(event) {
  return Array.from(event.touches).filter((e2) => {
    var _event$currentTarget, _event$currentTarget$;
    return e2.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e2.target));
  });
}
function getTouchList(event) {
  return event.type === "touchend" || event.type === "touchcancel" ? event.changedTouches : event.targetTouches;
}
function getValueEvent(event) {
  return isTouch(event) ? getTouchList(event)[0] : event;
}
function touchIds(event) {
  return getCurrentTargetTouchList(event).map((touch) => touch.identifier);
}
function pointerId(event) {
  const valueEvent = getValueEvent(event);
  return isTouch(event) ? valueEvent.identifier : valueEvent.pointerId;
}
function pointerValues(event) {
  const valueEvent = getValueEvent(event);
  return [valueEvent.clientX, valueEvent.clientY];
}
function getEventDetails(event) {
  const payload = {};
  if ("buttons" in event) payload.buttons = event.buttons;
  if ("shiftKey" in event) {
    const {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    } = event;
    Object.assign(payload, {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    });
  }
  return payload;
}
function call(v2, ...args) {
  if (typeof v2 === "function") {
    return v2(...args);
  } else {
    return v2;
  }
}
function noop$1() {
}
function chain(...fns) {
  if (fns.length === 0) return noop$1;
  if (fns.length === 1) return fns[0];
  return function() {
    let result;
    for (const fn of fns) {
      result = fn.apply(this, arguments) || result;
    }
    return result;
  };
}
function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {});
}
const BEFORE_LAST_KINEMATICS_DELAY = 32;
class Engine {
  constructor(ctrl, args, key) {
    this.ctrl = ctrl;
    this.args = args;
    this.key = key;
    if (!this.state) {
      this.state = {};
      this.computeValues([0, 0]);
      this.computeInitial();
      if (this.init) this.init();
      this.reset();
    }
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(state) {
    this.ctrl.state[this.key] = state;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state,
      shared,
      ingKey,
      args
    } = this;
    shared[ingKey] = state._active = state.active = state._blocked = state._force = false;
    state._step = [false, false];
    state.intentional = false;
    state._movement = [0, 0];
    state._distance = [0, 0];
    state._direction = [0, 0];
    state._delta = [0, 0];
    state._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]];
    state.args = args;
    state.axis = void 0;
    state.memo = void 0;
    state.elapsedTime = state.timeDelta = 0;
    state.direction = [0, 0];
    state.distance = [0, 0];
    state.overflow = [0, 0];
    state._movementBound = [false, false];
    state.velocity = [0, 0];
    state.movement = [0, 0];
    state.delta = [0, 0];
    state.timeStamp = 0;
  }
  start(event) {
    const state = this.state;
    const config = this.config;
    if (!state._active) {
      this.reset();
      this.computeInitial();
      state._active = true;
      state.target = event.target;
      state.currentTarget = event.currentTarget;
      state.lastOffset = config.from ? call(config.from, state) : state.offset;
      state.offset = state.lastOffset;
      state.startTime = state.timeStamp = event.timeStamp;
    }
  }
  computeValues(values) {
    const state = this.state;
    state._values = values;
    state.values = this.config.transform(values);
  }
  computeInitial() {
    const state = this.state;
    state._initial = state._values;
    state.initial = state.values;
  }
  compute(event) {
    const {
      state,
      config,
      shared
    } = this;
    state.args = this.args;
    let dt = 0;
    if (event) {
      state.event = event;
      if (config.preventDefault && event.cancelable) state.event.preventDefault();
      state.type = event.type;
      shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size;
      shared.locked = !!document.pointerLockElement;
      Object.assign(shared, getEventDetails(event));
      shared.down = shared.pressed = shared.buttons % 2 === 1 || shared.touches > 0;
      dt = event.timeStamp - state.timeStamp;
      state.timeStamp = event.timeStamp;
      state.elapsedTime = state.timeStamp - state.startTime;
    }
    if (state._active) {
      const _absoluteDelta = state._delta.map(Math.abs);
      V$1.addTo(state._distance, _absoluteDelta);
    }
    if (this.axisIntent) this.axisIntent(event);
    const [_m0, _m1] = state._movement;
    const [t0, t1] = config.threshold;
    const {
      _step,
      values
    } = state;
    if (config.hasCustomTransform) {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && values[0];
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && values[1];
    } else {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && Math.sign(_m0) * t0;
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && Math.sign(_m1) * t1;
    }
    state.intentional = _step[0] !== false || _step[1] !== false;
    if (!state.intentional) return;
    const movement = [0, 0];
    if (config.hasCustomTransform) {
      const [v0, v1] = values;
      movement[0] = _step[0] !== false ? v0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? v1 - _step[1] : 0;
    } else {
      movement[0] = _step[0] !== false ? _m0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? _m1 - _step[1] : 0;
    }
    if (this.restrictToAxis && !state._blocked) this.restrictToAxis(movement);
    const previousOffset = state.offset;
    const gestureIsActive = state._active && !state._blocked || state.active;
    if (gestureIsActive) {
      state.first = state._active && !state.active;
      state.last = !state._active && state.active;
      state.active = shared[this.ingKey] = state._active;
      if (event) {
        if (state.first) {
          if ("bounds" in config) state._bounds = call(config.bounds, state);
          if (this.setup) this.setup();
        }
        state.movement = movement;
        this.computeOffset();
      }
    }
    const [ox, oy] = state.offset;
    const [[x0, x1], [y0, y1]] = state._bounds;
    state.overflow = [ox < x0 ? -1 : ox > x1 ? 1 : 0, oy < y0 ? -1 : oy > y1 ? 1 : 0];
    state._movementBound[0] = state.overflow[0] ? state._movementBound[0] === false ? state._movement[0] : state._movementBound[0] : false;
    state._movementBound[1] = state.overflow[1] ? state._movementBound[1] === false ? state._movement[1] : state._movementBound[1] : false;
    const rubberband2 = state._active ? config.rubberband || [0, 0] : [0, 0];
    state.offset = computeRubberband(state._bounds, state.offset, rubberband2);
    state.delta = V$1.sub(state.offset, previousOffset);
    this.computeMovement();
    if (gestureIsActive && (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY)) {
      state.delta = V$1.sub(state.offset, previousOffset);
      const absoluteDelta = state.delta.map(Math.abs);
      V$1.addTo(state.distance, absoluteDelta);
      state.direction = state.delta.map(Math.sign);
      state._direction = state._delta.map(Math.sign);
      if (!state.first && dt > 0) {
        state.velocity = [absoluteDelta[0] / dt, absoluteDelta[1] / dt];
        state.timeDelta = dt;
      }
    }
  }
  emit() {
    const state = this.state;
    const shared = this.shared;
    const config = this.config;
    if (!state._active) this.clean();
    if ((state._blocked || !state.intentional) && !state._force && !config.triggerAllEvents) return;
    const memo = this.handler(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, shared), state), {}, {
      [this.aliasKey]: state.values
    }));
    if (memo !== void 0) state.memo = memo;
  }
  clean() {
    this.eventStore.clean();
    this.timeoutStore.clean();
  }
}
function selectAxis([dx, dy], threshold) {
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);
  if (absDx > absDy && absDx > threshold) {
    return "x";
  }
  if (absDy > absDx && absDy > threshold) {
    return "y";
  }
  return void 0;
}
class CoordinatesEngine extends Engine {
  constructor(...args) {
    super(...args);
    _defineProperty$3(this, "aliasKey", "xy");
  }
  reset() {
    super.reset();
    this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0];
    this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = V$1.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = V$1.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(event) {
    const state = this.state;
    const config = this.config;
    if (!state.axis && event) {
      const threshold = typeof config.axisThreshold === "object" ? config.axisThreshold[getPointerType(event)] : config.axisThreshold;
      state.axis = selectAxis(state._movement, threshold);
    }
    state._blocked = (config.lockDirection || !!config.axis) && !state.axis || !!config.axis && config.axis !== state.axis;
  }
  restrictToAxis(v2) {
    if (this.config.axis || this.config.lockDirection) {
      switch (this.state.axis) {
        case "x":
          v2[1] = 0;
          break;
        case "y":
          v2[0] = 0;
          break;
      }
    }
  }
}
const identity = (v2) => v2;
const DEFAULT_RUBBERBAND = 0.15;
const commonConfigResolver = {
  enabled(value = true) {
    return value;
  },
  eventOptions(value, _k, config) {
    return _objectSpread2$1(_objectSpread2$1({}, config.shared.eventOptions), value);
  },
  preventDefault(value = false) {
    return value;
  },
  triggerAllEvents(value = false) {
    return value;
  },
  rubberband(value = 0) {
    switch (value) {
      case true:
        return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND];
      case false:
        return [0, 0];
      default:
        return V$1.toVector(value);
    }
  },
  from(value) {
    if (typeof value === "function") return value;
    if (value != null) return V$1.toVector(value);
  },
  transform(value, _k, config) {
    const transform = value || config.shared.transform;
    this.hasCustomTransform = !!transform;
    return transform || identity;
  },
  threshold(value) {
    return V$1.toVector(value, 0);
  }
};
const DEFAULT_AXIS_THRESHOLD = 0;
const coordinatesConfigResolver = _objectSpread2$1(_objectSpread2$1({}, commonConfigResolver), {}, {
  axis(_v, _k, {
    axis
  }) {
    this.lockDirection = axis === "lock";
    if (!this.lockDirection) return axis;
  },
  axisThreshold(value = DEFAULT_AXIS_THRESHOLD) {
    return value;
  },
  bounds(value = {}) {
    if (typeof value === "function") {
      return (state) => coordinatesConfigResolver.bounds(value(state));
    }
    if ("current" in value) {
      return () => value.current;
    }
    if (typeof HTMLElement === "function" && value instanceof HTMLElement) {
      return value;
    }
    const {
      left = -Infinity,
      right = Infinity,
      top = -Infinity,
      bottom = Infinity
    } = value;
    return [[left, right], [top, bottom]];
  }
});
const KEYS_DELTA_MAP = {
  ArrowRight: (displacement, factor = 1) => [displacement * factor, 0],
  ArrowLeft: (displacement, factor = 1) => [-1 * displacement * factor, 0],
  ArrowUp: (displacement, factor = 1) => [0, -1 * displacement * factor],
  ArrowDown: (displacement, factor = 1) => [0, displacement * factor]
};
class DragEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty$3(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const state = this.state;
    state._pointerId = void 0;
    state._pointerActive = false;
    state._keyboardActive = false;
    state._preventScroll = false;
    state._delayed = false;
    state.swipe = [0, 0];
    state.tap = false;
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
  }
  setup() {
    const state = this.state;
    if (state._bounds instanceof HTMLElement) {
      const boundRect = state._bounds.getBoundingClientRect();
      const targetRect = state.currentTarget.getBoundingClientRect();
      const _bounds = {
        left: boundRect.left - targetRect.left + state.offset[0],
        right: boundRect.right - targetRect.right + state.offset[0],
        top: boundRect.top - targetRect.top + state.offset[1],
        bottom: boundRect.bottom - targetRect.bottom + state.offset[1]
      };
      state._bounds = coordinatesConfigResolver.bounds(_bounds);
    }
  }
  cancel() {
    const state = this.state;
    if (state.canceled) return;
    state.canceled = true;
    state._active = false;
    setTimeout(() => {
      this.compute();
      this.emit();
    }, 0);
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean();
    this.state._pointerActive = false;
    this.state._keyboardActive = false;
    super.clean();
  }
  pointerDown(event) {
    const config = this.config;
    const state = this.state;
    if (event.buttons != null && (Array.isArray(config.pointerButtons) ? !config.pointerButtons.includes(event.buttons) : config.pointerButtons !== -1 && config.pointerButtons !== event.buttons)) return;
    const ctrlIds = this.ctrl.setEventIds(event);
    if (config.pointerCapture) {
      event.target.setPointerCapture(event.pointerId);
    }
    if (ctrlIds && ctrlIds.size > 1 && state._pointerActive) return;
    this.start(event);
    this.setupPointer(event);
    state._pointerId = pointerId(event);
    state._pointerActive = true;
    this.computeValues(pointerValues(event));
    this.computeInitial();
    if (config.preventScrollAxis && getPointerType(event) !== "mouse") {
      state._active = false;
      this.setupScrollPrevention(event);
    } else if (config.delay > 0) {
      this.setupDelayTrigger(event);
      if (config.triggerAllEvents) {
        this.compute(event);
        this.emit();
      }
    } else {
      this.startPointerDrag(event);
    }
  }
  startPointerDrag(event) {
    const state = this.state;
    state._active = true;
    state._preventScroll = true;
    state._delayed = false;
    this.compute(event);
    this.emit();
  }
  pointerMove(event) {
    const state = this.state;
    const config = this.config;
    if (!state._pointerActive) return;
    const id = pointerId(event);
    if (state._pointerId !== void 0 && id !== state._pointerId) return;
    const _values = pointerValues(event);
    if (document.pointerLockElement === event.target) {
      state._delta = [event.movementX, event.movementY];
    } else {
      state._delta = V$1.sub(_values, state._values);
      this.computeValues(_values);
    }
    V$1.addTo(state._movement, state._delta);
    this.compute(event);
    if (state._delayed && state.intentional) {
      this.timeoutStore.remove("dragDelay");
      state.active = false;
      this.startPointerDrag(event);
      return;
    }
    if (config.preventScrollAxis && !state._preventScroll) {
      if (state.axis) {
        if (state.axis === config.preventScrollAxis || config.preventScrollAxis === "xy") {
          state._active = false;
          this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag");
          this.startPointerDrag(event);
          return;
        }
      } else {
        return;
      }
    }
    this.emit();
  }
  pointerUp(event) {
    this.ctrl.setEventIds(event);
    try {
      if (this.config.pointerCapture && event.target.hasPointerCapture(event.pointerId)) {
        ;
        event.target.releasePointerCapture(event.pointerId);
      }
    } catch (_unused) {
    }
    const state = this.state;
    const config = this.config;
    if (!state._active || !state._pointerActive) return;
    const id = pointerId(event);
    if (state._pointerId !== void 0 && id !== state._pointerId) return;
    this.state._pointerActive = false;
    this.setActive();
    this.compute(event);
    const [dx, dy] = state._distance;
    state.tap = dx <= config.tapsThreshold && dy <= config.tapsThreshold;
    if (state.tap && config.filterTaps) {
      state._force = true;
    } else {
      const [_dx, _dy] = state._delta;
      const [_mx, _my] = state._movement;
      const [svx, svy] = config.swipe.velocity;
      const [sx, sy] = config.swipe.distance;
      const sdt = config.swipe.duration;
      if (state.elapsedTime < sdt) {
        const _vx = Math.abs(_dx / state.timeDelta);
        const _vy = Math.abs(_dy / state.timeDelta);
        if (_vx > svx && Math.abs(_mx) > sx) state.swipe[0] = Math.sign(_dx);
        if (_vy > svy && Math.abs(_my) > sy) state.swipe[1] = Math.sign(_dy);
      }
    }
    this.emit();
  }
  pointerClick(event) {
    if (!this.state.tap && event.detail > 0) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  setupPointer(event) {
    const config = this.config;
    const device = config.device;
    if (config.pointerLock) {
      event.currentTarget.requestPointerLock();
    }
    if (!config.pointerCapture) {
      this.eventStore.add(this.sharedConfig.window, device, "change", this.pointerMove.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, "end", this.pointerUp.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, "cancel", this.pointerUp.bind(this));
    }
  }
  pointerClean() {
    if (this.config.pointerLock && document.pointerLockElement === this.state.currentTarget) {
      document.exitPointerLock();
    }
  }
  preventScroll(event) {
    if (this.state._preventScroll && event.cancelable) {
      event.preventDefault();
    }
  }
  setupScrollPrevention(event) {
    this.state._preventScroll = false;
    persistEvent(event);
    const remove = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: false
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", remove);
    this.eventStore.add(this.sharedConfig.window, "touch", "cancel", remove);
    this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, event);
  }
  setupDelayTrigger(event) {
    this.state._delayed = true;
    this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0];
      this.startPointerDrag(event);
    }, this.config.delay);
  }
  keyDown(event) {
    const deltaFn = KEYS_DELTA_MAP[event.key];
    if (deltaFn) {
      const state = this.state;
      const factor = event.shiftKey ? 10 : event.altKey ? 0.1 : 1;
      this.start(event);
      state._delta = deltaFn(this.config.keyboardDisplacement, factor);
      state._keyboardActive = true;
      V$1.addTo(state._movement, state._delta);
      this.compute(event);
      this.emit();
    }
  }
  keyUp(event) {
    if (!(event.key in KEYS_DELTA_MAP)) return;
    this.state._keyboardActive = false;
    this.setActive();
    this.compute(event);
    this.emit();
  }
  bind(bindFunction) {
    const device = this.config.device;
    bindFunction(device, "start", this.pointerDown.bind(this));
    if (this.config.pointerCapture) {
      bindFunction(device, "change", this.pointerMove.bind(this));
      bindFunction(device, "end", this.pointerUp.bind(this));
      bindFunction(device, "cancel", this.pointerUp.bind(this));
      bindFunction("lostPointerCapture", "", this.pointerUp.bind(this));
    }
    if (this.config.keys) {
      bindFunction("key", "down", this.keyDown.bind(this));
      bindFunction("key", "up", this.keyUp.bind(this));
    }
    if (this.config.filterTaps) {
      bindFunction("click", "", this.pointerClick.bind(this), {
        capture: true,
        passive: false
      });
    }
  }
}
function persistEvent(event) {
  "persist" in event && typeof event.persist === "function" && event.persist();
}
const isBrowser = typeof window !== "undefined" && window.document && window.document.createElement;
function supportsTouchEvents() {
  return isBrowser && "ontouchstart" in window;
}
function isTouchScreen() {
  return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
}
function supportsPointerEvents() {
  return isBrowser && "onpointerdown" in window;
}
function supportsPointerLock() {
  return isBrowser && "exitPointerLock" in window.document;
}
function supportsGestureEvents() {
  try {
    return "constructor" in GestureEvent;
  } catch (e2) {
    return false;
  }
}
const SUPPORT = {
  isBrowser,
  gesture: supportsGestureEvents(),
  touch: supportsTouchEvents(),
  touchscreen: isTouchScreen(),
  pointer: supportsPointerEvents(),
  pointerLock: supportsPointerLock()
};
const DEFAULT_PREVENT_SCROLL_DELAY = 250;
const DEFAULT_DRAG_DELAY = 180;
const DEFAULT_SWIPE_VELOCITY = 0.5;
const DEFAULT_SWIPE_DISTANCE = 50;
const DEFAULT_SWIPE_DURATION = 250;
const DEFAULT_KEYBOARD_DISPLACEMENT = 10;
const DEFAULT_DRAG_AXIS_THRESHOLD = {
  mouse: 0,
  touch: 0,
  pen: 8
};
const dragConfigResolver = _objectSpread2$1(_objectSpread2$1({}, coordinatesConfigResolver), {}, {
  device(_v, _k, {
    pointer: {
      touch = false,
      lock = false,
      mouse = false
    } = {}
  }) {
    this.pointerLock = lock && SUPPORT.pointerLock;
    if (SUPPORT.touch && touch) return "touch";
    if (this.pointerLock) return "mouse";
    if (SUPPORT.pointer && !mouse) return "pointer";
    if (SUPPORT.touch) return "touch";
    return "mouse";
  },
  preventScrollAxis(value, _k, {
    preventScroll
  }) {
    this.preventScrollDelay = typeof preventScroll === "number" ? preventScroll : preventScroll || preventScroll === void 0 && value ? DEFAULT_PREVENT_SCROLL_DELAY : void 0;
    if (!SUPPORT.touchscreen || preventScroll === false) return void 0;
    return value ? value : preventScroll !== void 0 ? "y" : void 0;
  },
  pointerCapture(_v, _k, {
    pointer: {
      capture = true,
      buttons = 1,
      keys = true
    } = {}
  }) {
    this.pointerButtons = buttons;
    this.keys = keys;
    return !this.pointerLock && this.device === "pointer" && capture;
  },
  threshold(value, _k, {
    filterTaps = false,
    tapsThreshold = 3,
    axis = void 0
  }) {
    const threshold = V$1.toVector(value, filterTaps ? tapsThreshold : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    this.tapsThreshold = tapsThreshold;
    return threshold;
  },
  swipe({
    velocity = DEFAULT_SWIPE_VELOCITY,
    distance = DEFAULT_SWIPE_DISTANCE,
    duration = DEFAULT_SWIPE_DURATION
  } = {}) {
    return {
      velocity: this.transform(V$1.toVector(velocity)),
      distance: this.transform(V$1.toVector(distance)),
      duration
    };
  },
  delay(value = 0) {
    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;
      case false:
        return 0;
      default:
        return value;
    }
  },
  axisThreshold(value) {
    if (!value) return DEFAULT_DRAG_AXIS_THRESHOLD;
    return _objectSpread2$1(_objectSpread2$1({}, DEFAULT_DRAG_AXIS_THRESHOLD), value);
  },
  keyboardDisplacement(value = DEFAULT_KEYBOARD_DISPLACEMENT) {
    return value;
  }
});
_objectSpread2$1(_objectSpread2$1({}, commonConfigResolver), {}, {
  device(_v, _k, {
    shared,
    pointer: {
      touch = false
    } = {}
  }) {
    const sharedConfig = shared;
    if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture) return "gesture";
    if (SUPPORT.touch && touch) return "touch";
    if (SUPPORT.touchscreen) {
      if (SUPPORT.pointer) return "pointer";
      if (SUPPORT.touch) return "touch";
    }
  },
  bounds(_v, _k, {
    scaleBounds = {},
    angleBounds = {}
  }) {
    const _scaleBounds = (state) => {
      const D2 = assignDefault(call(scaleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D2.min, D2.max];
    };
    const _angleBounds = (state) => {
      const A2 = assignDefault(call(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A2.min, A2.max];
    };
    if (typeof scaleBounds !== "function" && typeof angleBounds !== "function") return [_scaleBounds(), _angleBounds()];
    return (state) => [_scaleBounds(state), _angleBounds(state)];
  },
  threshold(value, _k, config) {
    this.lockDirection = config.axis === "lock";
    const threshold = V$1.toVector(value, this.lockDirection ? [0.1, 3] : 0);
    return threshold;
  },
  modifierKey(value) {
    if (value === void 0) return "ctrlKey";
    return value;
  },
  pinchOnWheel(value = true) {
    return value;
  }
});
_objectSpread2$1(_objectSpread2$1({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});
_objectSpread2$1(_objectSpread2$1({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});
const EngineMap = /* @__PURE__ */ new Map();
const ConfigResolverMap = /* @__PURE__ */ new Map();
function registerAction(action) {
  EngineMap.set(action.key, action.engine);
  ConfigResolverMap.set(action.key, action.resolver);
}
const dragAction = {
  key: "drag",
  engine: DragEngine,
  resolver: dragConfigResolver
};
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties$2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
const sharedConfigResolver = {
  target(value) {
    if (value) {
      return () => "current" in value ? value.current : value;
    }
    return void 0;
  },
  enabled(value = true) {
    return value;
  },
  window(value = SUPPORT.isBrowser ? window : void 0) {
    return value;
  },
  eventOptions({
    passive = true,
    capture = false
  } = {}) {
    return {
      passive,
      capture
    };
  },
  transform(value) {
    return value;
  }
};
const _excluded$c = ["target", "eventOptions", "window", "enabled", "transform"];
function resolveWith(config = {}, resolvers) {
  const result = {};
  for (const [key, resolver] of Object.entries(resolvers)) {
    switch (typeof resolver) {
      case "function":
        {
          result[key] = resolver.call(result, config[key], key, config);
        }
        break;
      case "object":
        result[key] = resolveWith(config[key], resolver);
        break;
      case "boolean":
        if (resolver) result[key] = config[key];
        break;
    }
  }
  return result;
}
function parse$1(newConfig, gestureKey, _config = {}) {
  const _ref = newConfig, {
    target,
    eventOptions,
    window: window2,
    enabled,
    transform
  } = _ref, rest2 = _objectWithoutProperties$2(_ref, _excluded$c);
  _config.shared = resolveWith({
    target,
    eventOptions,
    window: window2,
    enabled,
    transform
  }, sharedConfigResolver);
  if (gestureKey) {
    const resolver = ConfigResolverMap.get(gestureKey);
    _config[gestureKey] = resolveWith(_objectSpread2$1({
      shared: _config.shared
    }, rest2), resolver);
  } else {
    for (const key in rest2) {
      const resolver = ConfigResolverMap.get(key);
      if (resolver) {
        _config[key] = resolveWith(_objectSpread2$1({
          shared: _config.shared
        }, rest2[key]), resolver);
      }
    }
  }
  return _config;
}
class EventStore {
  constructor(ctrl, gestureKey) {
    _defineProperty$3(this, "_listeners", /* @__PURE__ */ new Set());
    this._ctrl = ctrl;
    this._gestureKey = gestureKey;
  }
  add(element, device, action, handler, options) {
    const listeners = this._listeners;
    const type = toDomEventType(device, action);
    const _options = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {};
    const eventOptions = _objectSpread2$1(_objectSpread2$1({}, _options), options);
    element.addEventListener(type, handler, eventOptions);
    const remove = () => {
      element.removeEventListener(type, handler, eventOptions);
      listeners.delete(remove);
    };
    listeners.add(remove);
    return remove;
  }
  clean() {
    this._listeners.forEach((remove) => remove());
    this._listeners.clear();
  }
}
class TimeoutStore {
  constructor() {
    _defineProperty$3(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(key, callback, ms = 140, ...args) {
    this.remove(key);
    this._timeouts.set(key, window.setTimeout(callback, ms, ...args));
  }
  remove(key) {
    const timeout = this._timeouts.get(key);
    if (timeout) window.clearTimeout(timeout);
  }
  clean() {
    this._timeouts.forEach((timeout) => void window.clearTimeout(timeout));
    this._timeouts.clear();
  }
}
class Controller {
  constructor(handlers) {
    _defineProperty$3(this, "gestures", /* @__PURE__ */ new Set());
    _defineProperty$3(this, "_targetEventStore", new EventStore(this));
    _defineProperty$3(this, "gestureEventStores", {});
    _defineProperty$3(this, "gestureTimeoutStores", {});
    _defineProperty$3(this, "handlers", {});
    _defineProperty$3(this, "config", {});
    _defineProperty$3(this, "pointerIds", /* @__PURE__ */ new Set());
    _defineProperty$3(this, "touchIds", /* @__PURE__ */ new Set());
    _defineProperty$3(this, "state", {
      shared: {
        shiftKey: false,
        metaKey: false,
        ctrlKey: false,
        altKey: false
      }
    });
    resolveGestures(this, handlers);
  }
  setEventIds(event) {
    if (isTouch(event)) {
      this.touchIds = new Set(touchIds(event));
      return this.touchIds;
    } else if ("pointerId" in event) {
      if (event.type === "pointerup" || event.type === "pointercancel") this.pointerIds.delete(event.pointerId);
      else if (event.type === "pointerdown") this.pointerIds.add(event.pointerId);
      return this.pointerIds;
    }
  }
  applyHandlers(handlers, nativeHandlers) {
    this.handlers = handlers;
    this.nativeHandlers = nativeHandlers;
  }
  applyConfig(config, gestureKey) {
    this.config = parse$1(config, gestureKey, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const key of this.gestures) {
      this.gestureEventStores[key].clean();
      this.gestureTimeoutStores[key].clean();
    }
  }
  effect() {
    if (this.config.shared.target) this.bind();
    return () => this._targetEventStore.clean();
  }
  bind(...args) {
    const sharedConfig = this.config.shared;
    const props2 = {};
    let target;
    if (sharedConfig.target) {
      target = sharedConfig.target();
      if (!target) return;
    }
    if (sharedConfig.enabled) {
      for (const gestureKey of this.gestures) {
        const gestureConfig = this.config[gestureKey];
        const bindFunction = bindToProps(props2, gestureConfig.eventOptions, !!target);
        if (gestureConfig.enabled) {
          const Engine2 = EngineMap.get(gestureKey);
          new Engine2(this, args, gestureKey).bind(bindFunction);
        }
      }
      const nativeBindFunction = bindToProps(props2, sharedConfig.eventOptions, !!target);
      for (const eventKey in this.nativeHandlers) {
        nativeBindFunction(eventKey, "", (event) => this.nativeHandlers[eventKey](_objectSpread2$1(_objectSpread2$1({}, this.state.shared), {}, {
          event,
          args
        })), void 0, true);
      }
    }
    for (const handlerProp in props2) {
      props2[handlerProp] = chain(...props2[handlerProp]);
    }
    if (!target) return props2;
    for (const handlerProp in props2) {
      const {
        device,
        capture,
        passive
      } = parseProp(handlerProp);
      this._targetEventStore.add(target, device, "", props2[handlerProp], {
        capture,
        passive
      });
    }
  }
}
function setupGesture(ctrl, gestureKey) {
  ctrl.gestures.add(gestureKey);
  ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl, gestureKey);
  ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore();
}
function resolveGestures(ctrl, internalHandlers) {
  if (internalHandlers.drag) setupGesture(ctrl, "drag");
  if (internalHandlers.wheel) setupGesture(ctrl, "wheel");
  if (internalHandlers.scroll) setupGesture(ctrl, "scroll");
  if (internalHandlers.move) setupGesture(ctrl, "move");
  if (internalHandlers.pinch) setupGesture(ctrl, "pinch");
  if (internalHandlers.hover) setupGesture(ctrl, "hover");
}
const bindToProps = (props2, eventOptions, withPassiveOption) => (device, action, handler, options = {}, isNative = false) => {
  var _options$capture, _options$passive;
  const capture = (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
  const passive = (_options$passive = options.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
  let handlerProp = isNative ? device : toHandlerProp(device, action, capture);
  if (withPassiveOption && passive) handlerProp += "Passive";
  props2[handlerProp] = props2[handlerProp] || [];
  props2[handlerProp].push(handler);
};
function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
  const ctrl = React.useMemo(() => new Controller(handlers), []);
  ctrl.applyHandlers(handlers, nativeHandlers);
  ctrl.applyConfig(config, gestureKey);
  React.useEffect(ctrl.effect.bind(ctrl));
  React.useEffect(() => {
    return ctrl.clean.bind(ctrl);
  }, []);
  if (config.target === void 0) {
    return ctrl.bind.bind(ctrl);
  }
  return void 0;
}
function useDrag$1(handler, config) {
  registerAction(dragAction);
  return useRecognizers({
    drag: handler
  }, config || {}, "drag");
}
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ reactExports.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props2) {
      const { scope, children, ...context } = props2;
      const Context3 = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = reactExports.useMemo(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ reactExports.createElement(Context3.Provider, {
        value
      }, children);
    }
    function useContext(consumerName, scope) {
      const Context3 = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = reactExports.useContext(Context3);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error("`".concat(consumerName, "` must be used within `").concat(rootComponentName, "`"));
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return reactExports.useMemo(
        () => ({
          ["__scope".concat(scopeName)]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps["__scope".concat(scopeName)];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return reactExports.useMemo(
        () => ({
          ["__scope".concat(baseScope.scopeName)]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return reactExports.useMemo(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  reactExports.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}
const $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
const $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
const $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
let $5cb92bef7577960e$var$originalBodyPointerEvents;
const $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ reactExports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
const $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props2;
  const context = reactExports.useContext($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = reactExports.useState(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = reactExports.useState({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index2 = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch) return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index2 === context.layers.size - 1;
    if (!isHighestLayer) return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  reactExports.useEffect(() => {
    if (!node1) return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  reactExports.useEffect(() => {
    return () => {
      if (!node1) return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  reactExports.useEffect(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props2.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props2.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props2.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props2.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = reactExports.useRef(false);
  const handleClickRef = reactExports.useRef(() => {
  });
  reactExports.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else handleAndDispatchPointerDownOutsideEvent();
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler) target.addEventListener(name, handler, {
    once: true
  });
  if (discrete) $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else target.dispatchEvent(event);
}
const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
};
const $1746a345f3d73bb7$var$useReactId = React$1["useId".toString()] || (() => void 0);
let $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = reactExports.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    setId(
      (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
    );
  }, [
    deterministicId
  ]);
  return id ? "radix-".concat(id) : "";
}
function t$1(t2) {
  return t2.split("-")[0];
}
function e$1(t2) {
  return t2.split("-")[1];
}
function n$2(e2) {
  return ["top", "bottom"].includes(t$1(e2)) ? "x" : "y";
}
function r$2(t2) {
  return "y" === t2 ? "height" : "width";
}
function i$3(i2, o2, a2) {
  let { reference: l2, floating: s2 } = i2;
  const c2 = l2.x + l2.width / 2 - s2.width / 2, f2 = l2.y + l2.height / 2 - s2.height / 2, u2 = n$2(o2), m2 = r$2(u2), g2 = l2[m2] / 2 - s2[m2] / 2, d2 = "x" === u2;
  let p2;
  switch (t$1(o2)) {
    case "top":
      p2 = { x: c2, y: l2.y - s2.height };
      break;
    case "bottom":
      p2 = { x: c2, y: l2.y + l2.height };
      break;
    case "right":
      p2 = { x: l2.x + l2.width, y: f2 };
      break;
    case "left":
      p2 = { x: l2.x - s2.width, y: f2 };
      break;
    default:
      p2 = { x: l2.x, y: l2.y };
  }
  switch (e$1(o2)) {
    case "start":
      p2[u2] -= g2 * (a2 && d2 ? -1 : 1);
      break;
    case "end":
      p2[u2] += g2 * (a2 && d2 ? -1 : 1);
  }
  return p2;
}
const o$2 = async (t2, e2, n2) => {
  const { placement: r2 = "bottom", strategy: o2 = "absolute", middleware: a2 = [], platform: l2 } = n2, s2 = await (null == l2.isRTL ? void 0 : l2.isRTL(e2));
  let c2 = await l2.getElementRects({ reference: t2, floating: e2, strategy: o2 }), { x: f2, y: u2 } = i$3(c2, r2, s2), m2 = r2, g2 = {}, d2 = 0;
  for (let n3 = 0; n3 < a2.length; n3++) {
    const { name: p2, fn: h2 } = a2[n3], { x: y2, y: x2, data: w2, reset: v2 } = await h2({ x: f2, y: u2, initialPlacement: r2, placement: m2, strategy: o2, middlewareData: g2, rects: c2, platform: l2, elements: { reference: t2, floating: e2 } });
    f2 = null != y2 ? y2 : f2, u2 = null != x2 ? x2 : u2, g2 = { ...g2, [p2]: { ...g2[p2], ...w2 } }, v2 && d2 <= 50 && (d2++, "object" == typeof v2 && (v2.placement && (m2 = v2.placement), v2.rects && (c2 = true === v2.rects ? await l2.getElementRects({ reference: t2, floating: e2, strategy: o2 }) : v2.rects), { x: f2, y: u2 } = i$3(c2, m2, s2)), n3 = -1);
  }
  return { x: f2, y: u2, placement: m2, strategy: o2, middlewareData: g2 };
};
function a$2(t2) {
  return "number" != typeof t2 ? (function(t3) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t3 };
  })(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
}
function l$2(t2) {
  return { ...t2, top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height };
}
async function s$3(t2, e2) {
  var n2;
  void 0 === e2 && (e2 = {});
  const { x: r2, y: i2, platform: o2, rects: s2, elements: c2, strategy: f2 } = t2, { boundary: u2 = "clippingAncestors", rootBoundary: m2 = "viewport", elementContext: g2 = "floating", altBoundary: d2 = false, padding: p2 = 0 } = e2, h2 = a$2(p2), y2 = c2[d2 ? "floating" === g2 ? "reference" : "floating" : g2], x2 = l$2(await o2.getClippingRect({ element: null == (n2 = await (null == o2.isElement ? void 0 : o2.isElement(y2))) || n2 ? y2 : y2.contextElement || await (null == o2.getDocumentElement ? void 0 : o2.getDocumentElement(c2.floating)), boundary: u2, rootBoundary: m2, strategy: f2 })), w2 = l$2(o2.convertOffsetParentRelativeRectToViewportRelativeRect ? await o2.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: "floating" === g2 ? { ...s2.floating, x: r2, y: i2 } : s2.reference, offsetParent: await (null == o2.getOffsetParent ? void 0 : o2.getOffsetParent(c2.floating)), strategy: f2 }) : s2[g2]);
  return { top: x2.top - w2.top + h2.top, bottom: w2.bottom - x2.bottom + h2.bottom, left: x2.left - w2.left + h2.left, right: w2.right - x2.right + h2.right };
}
const c$3 = Math.min, f$3 = Math.max;
function u$3(t2, e2, n2) {
  return f$3(t2, c$3(e2, n2));
}
const m$3 = (t2) => ({ name: "arrow", options: t2, async fn(i2) {
  const { element: o2, padding: l2 = 0 } = null != t2 ? t2 : {}, { x: s2, y: c2, placement: f2, rects: m2, platform: g2 } = i2;
  if (null == o2) return {};
  const d2 = a$2(l2), p2 = { x: s2, y: c2 }, h2 = n$2(f2), y2 = e$1(f2), x2 = r$2(h2), w2 = await g2.getDimensions(o2), v2 = "y" === h2 ? "top" : "left", b2 = "y" === h2 ? "bottom" : "right", R2 = m2.reference[x2] + m2.reference[h2] - p2[h2] - m2.floating[x2], A2 = p2[h2] - m2.reference[h2], P2 = await (null == g2.getOffsetParent ? void 0 : g2.getOffsetParent(o2));
  let T2 = P2 ? "y" === h2 ? P2.clientHeight || 0 : P2.clientWidth || 0 : 0;
  0 === T2 && (T2 = m2.floating[x2]);
  const O2 = R2 / 2 - A2 / 2, D2 = d2[v2], L2 = T2 - w2[x2] - d2[b2], k2 = T2 / 2 - w2[x2] / 2 + O2, E2 = u$3(D2, k2, L2), C2 = ("start" === y2 ? d2[v2] : d2[b2]) > 0 && k2 !== E2 && m2.reference[x2] <= m2.floating[x2];
  return { [h2]: p2[h2] - (C2 ? k2 < D2 ? D2 - k2 : L2 - k2 : 0), data: { [h2]: E2, centerOffset: k2 - E2 } };
} }), g$3 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function d$3(t2) {
  return t2.replace(/left|right|bottom|top/g, ((t3) => g$3[t3]));
}
function p$3(t2, i2, o2) {
  void 0 === o2 && (o2 = false);
  const a2 = e$1(t2), l2 = n$2(t2), s2 = r$2(l2);
  let c2 = "x" === l2 ? a2 === (o2 ? "end" : "start") ? "right" : "left" : "start" === a2 ? "bottom" : "top";
  return i2.reference[s2] > i2.floating[s2] && (c2 = d$3(c2)), { main: c2, cross: d$3(c2) };
}
const h$4 = { start: "end", end: "start" };
function y$4(t2) {
  return t2.replace(/start|end/g, ((t3) => h$4[t3]));
}
const x$3 = ["top", "right", "bottom", "left"];
x$3.reduce(((t2, e2) => t2.concat(e2, e2 + "-start", e2 + "-end")), []);
const b$4 = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "flip", options: e2, async fn(n2) {
    var r2;
    const { placement: i2, middlewareData: o2, rects: a2, initialPlacement: l2, platform: c2, elements: f2 } = n2, { mainAxis: u2 = true, crossAxis: m2 = true, fallbackPlacements: g2, fallbackStrategy: h2 = "bestFit", flipAlignment: x2 = true, ...w2 } = e2, v2 = t$1(i2), b2 = g2 || (v2 === l2 || !x2 ? [d$3(l2)] : (function(t2) {
      const e3 = d$3(t2);
      return [y$4(t2), e3, y$4(e3)];
    })(l2)), R2 = [l2, ...b2], A2 = await s$3(n2, w2), P2 = [];
    let T2 = (null == (r2 = o2.flip) ? void 0 : r2.overflows) || [];
    if (u2 && P2.push(A2[v2]), m2) {
      const { main: t2, cross: e3 } = p$3(i2, a2, await (null == c2.isRTL ? void 0 : c2.isRTL(f2.floating)));
      P2.push(A2[t2], A2[e3]);
    }
    if (T2 = [...T2, { placement: i2, overflows: P2 }], !P2.every(((t2) => t2 <= 0))) {
      var O2, D2;
      const t2 = (null != (O2 = null == (D2 = o2.flip) ? void 0 : D2.index) ? O2 : 0) + 1, e3 = R2[t2];
      if (e3) return { data: { index: t2, overflows: T2 }, reset: { placement: e3 } };
      let n3 = "bottom";
      switch (h2) {
        case "bestFit": {
          var L2;
          const t3 = null == (L2 = T2.map(((t4) => [t4, t4.overflows.filter(((t5) => t5 > 0)).reduce(((t5, e4) => t5 + e4), 0)])).sort(((t4, e4) => t4[1] - e4[1]))[0]) ? void 0 : L2[0].placement;
          t3 && (n3 = t3);
          break;
        }
        case "initialPlacement":
          n3 = l2;
      }
      if (i2 !== n3) return { reset: { placement: n3 } };
    }
    return {};
  } };
};
function R$2(t2, e2) {
  return { top: t2.top - e2.height, right: t2.right - e2.width, bottom: t2.bottom - e2.height, left: t2.left - e2.width };
}
function A$1(t2) {
  return x$3.some(((e2) => t2[e2] >= 0));
}
const P = function(t2) {
  let { strategy: e2 = "referenceHidden", ...n2 } = void 0 === t2 ? {} : t2;
  return { name: "hide", async fn(t3) {
    const { rects: r2 } = t3;
    switch (e2) {
      case "referenceHidden": {
        const e3 = R$2(await s$3(t3, { ...n2, elementContext: "reference" }), r2.reference);
        return { data: { referenceHiddenOffsets: e3, referenceHidden: A$1(e3) } };
      }
      case "escaped": {
        const e3 = R$2(await s$3(t3, { ...n2, altBoundary: true }), r2.floating);
        return { data: { escapedOffsets: e3, escaped: A$1(e3) } };
      }
      default:
        return {};
    }
  } };
};
const T$3 = function(r2) {
  return void 0 === r2 && (r2 = 0), { name: "offset", options: r2, async fn(i2) {
    const { x: o2, y: a2 } = i2, l2 = await (async function(r3, i3) {
      const { placement: o3, platform: a3, elements: l3 } = r3, s2 = await (null == a3.isRTL ? void 0 : a3.isRTL(l3.floating)), c2 = t$1(o3), f2 = e$1(o3), u2 = "x" === n$2(o3), m2 = ["left", "top"].includes(c2) ? -1 : 1, g2 = s2 && u2 ? -1 : 1, d2 = "function" == typeof i3 ? i3(r3) : i3;
      let { mainAxis: p2, crossAxis: h2, alignmentAxis: y2 } = "number" == typeof d2 ? { mainAxis: d2, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d2 };
      return f2 && "number" == typeof y2 && (h2 = "end" === f2 ? -1 * y2 : y2), u2 ? { x: h2 * g2, y: p2 * m2 } : { x: p2 * m2, y: h2 * g2 };
    })(i2, r2);
    return { x: o2 + l2.x, y: a2 + l2.y, data: l2 };
  } };
};
function O$1(t2) {
  return "x" === t2 ? "y" : "x";
}
const D$2 = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "shift", options: e2, async fn(r2) {
    const { x: i2, y: o2, placement: a2 } = r2, { mainAxis: l2 = true, crossAxis: c2 = false, limiter: f2 = { fn: (t2) => {
      let { x: e3, y: n2 } = t2;
      return { x: e3, y: n2 };
    } }, ...m2 } = e2, g2 = { x: i2, y: o2 }, d2 = await s$3(r2, m2), p2 = n$2(t$1(a2)), h2 = O$1(p2);
    let y2 = g2[p2], x2 = g2[h2];
    if (l2) {
      const t2 = "y" === p2 ? "bottom" : "right";
      y2 = u$3(y2 + d2["y" === p2 ? "top" : "left"], y2, y2 - d2[t2]);
    }
    if (c2) {
      const t2 = "y" === h2 ? "bottom" : "right";
      x2 = u$3(x2 + d2["y" === h2 ? "top" : "left"], x2, x2 - d2[t2]);
    }
    const w2 = f2.fn({ ...r2, [p2]: y2, [h2]: x2 });
    return { ...w2, data: { x: w2.x - i2, y: w2.y - o2 } };
  } };
}, L$3 = function(e2) {
  return void 0 === e2 && (e2 = {}), { options: e2, fn(r2) {
    const { x: i2, y: o2, placement: a2, rects: l2, middlewareData: s2 } = r2, { offset: c2 = 0, mainAxis: f2 = true, crossAxis: u2 = true } = e2, m2 = { x: i2, y: o2 }, g2 = n$2(a2), d2 = O$1(g2);
    let p2 = m2[g2], h2 = m2[d2];
    const y2 = "function" == typeof c2 ? c2({ ...l2, placement: a2 }) : c2, x2 = "number" == typeof y2 ? { mainAxis: y2, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...y2 };
    if (f2) {
      const t2 = "y" === g2 ? "height" : "width", e3 = l2.reference[g2] - l2.floating[t2] + x2.mainAxis, n2 = l2.reference[g2] + l2.reference[t2] - x2.mainAxis;
      p2 < e3 ? p2 = e3 : p2 > n2 && (p2 = n2);
    }
    if (u2) {
      var w2, v2, b2, R2;
      const e3 = "y" === g2 ? "width" : "height", n2 = ["top", "left"].includes(t$1(a2)), r3 = l2.reference[d2] - l2.floating[e3] + (n2 && null != (w2 = null == (v2 = s2.offset) ? void 0 : v2[d2]) ? w2 : 0) + (n2 ? 0 : x2.crossAxis), i3 = l2.reference[d2] + l2.reference[e3] + (n2 ? 0 : null != (b2 = null == (R2 = s2.offset) ? void 0 : R2[d2]) ? b2 : 0) - (n2 ? x2.crossAxis : 0);
      h2 < r3 ? h2 = r3 : h2 > i3 && (h2 = i3);
    }
    return { [g2]: p2, [d2]: h2 };
  } };
}, k$3 = function(n2) {
  return void 0 === n2 && (n2 = {}), { name: "size", options: n2, async fn(r2) {
    const { placement: i2, rects: o2, platform: a2, elements: l2 } = r2, { apply: c2, ...u2 } = n2, m2 = await s$3(r2, u2), g2 = t$1(i2), d2 = e$1(i2);
    let p2, h2;
    "top" === g2 || "bottom" === g2 ? (p2 = g2, h2 = d2 === (await (null == a2.isRTL ? void 0 : a2.isRTL(l2.floating)) ? "start" : "end") ? "left" : "right") : (h2 = g2, p2 = "end" === d2 ? "top" : "bottom");
    const y2 = f$3(m2.left, 0), x2 = f$3(m2.right, 0), w2 = f$3(m2.top, 0), v2 = f$3(m2.bottom, 0), b2 = { availableHeight: o2.floating.height - (["left", "right"].includes(i2) ? 2 * (0 !== w2 || 0 !== v2 ? w2 + v2 : f$3(m2.top, m2.bottom)) : m2[p2]), availableWidth: o2.floating.width - (["top", "bottom"].includes(i2) ? 2 * (0 !== y2 || 0 !== x2 ? y2 + x2 : f$3(m2.left, m2.right)) : m2[h2]) }, R2 = await a2.getDimensions(l2.floating);
    null == c2 || c2({ ...r2, ...b2 });
    const A2 = await a2.getDimensions(l2.floating);
    return R2.width !== A2.width || R2.height !== A2.height ? { reset: { rects: true } } : {};
  } };
};
function n$1(t2) {
  return t2 && t2.document && t2.location && t2.alert && t2.setInterval;
}
function o$1(t2) {
  if (null == t2) return window;
  if (!n$1(t2)) {
    const e2 = t2.ownerDocument;
    return e2 && e2.defaultView || window;
  }
  return t2;
}
function i$2(t2) {
  return o$1(t2).getComputedStyle(t2);
}
function r$1(t2) {
  return n$1(t2) ? "" : t2 ? (t2.nodeName || "").toLowerCase() : "";
}
function l$1() {
  const t2 = navigator.userAgentData;
  return null != t2 && t2.brands ? t2.brands.map(((t3) => t3.brand + "/" + t3.version)).join(" ") : navigator.userAgent;
}
function c$2(t2) {
  return t2 instanceof o$1(t2).HTMLElement;
}
function f$2(t2) {
  return t2 instanceof o$1(t2).Element;
}
function s$2(t2) {
  if ("undefined" == typeof ShadowRoot) return false;
  return t2 instanceof o$1(t2).ShadowRoot || t2 instanceof ShadowRoot;
}
function u$2(t2) {
  const { overflow: e2, overflowX: n2, overflowY: o2 } = i$2(t2);
  return /auto|scroll|overlay|hidden/.test(e2 + o2 + n2);
}
function d$2(t2) {
  return ["table", "td", "th"].includes(r$1(t2));
}
function h$3(t2) {
  const e2 = /firefox/i.test(l$1()), n2 = i$2(t2);
  return "none" !== n2.transform || "none" !== n2.perspective || "paint" === n2.contain || ["transform", "perspective"].includes(n2.willChange) || e2 && "filter" === n2.willChange || e2 && !!n2.filter && "none" !== n2.filter;
}
function a$1() {
  return !/^((?!chrome|android).)*safari/i.test(l$1());
}
const g$2 = Math.min, p$2 = Math.max, m$2 = Math.round;
function w$2(t2, e2, n2) {
  var i2, r2, l2, s2;
  void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = false);
  const u2 = t2.getBoundingClientRect();
  let d2 = 1, h2 = 1;
  e2 && c$2(t2) && (d2 = t2.offsetWidth > 0 && m$2(u2.width) / t2.offsetWidth || 1, h2 = t2.offsetHeight > 0 && m$2(u2.height) / t2.offsetHeight || 1);
  const g2 = f$2(t2) ? o$1(t2) : window, p2 = !a$1() && n2, w2 = (u2.left + (p2 && null != (i2 = null == (r2 = g2.visualViewport) ? void 0 : r2.offsetLeft) ? i2 : 0)) / d2, v2 = (u2.top + (p2 && null != (l2 = null == (s2 = g2.visualViewport) ? void 0 : s2.offsetTop) ? l2 : 0)) / h2, y2 = u2.width / d2, x2 = u2.height / h2;
  return { width: y2, height: x2, top: v2, right: w2 + y2, bottom: v2 + x2, left: w2, x: w2, y: v2 };
}
function v$2(t2) {
  return (e2 = t2, (e2 instanceof o$1(e2).Node ? t2.ownerDocument : t2.document) || window.document).documentElement;
  var e2;
}
function y$3(t2) {
  return f$2(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function x$2(t2) {
  return w$2(v$2(t2)).left + y$3(t2).scrollLeft;
}
function b$3(t2, e2, n2) {
  const o2 = c$2(e2), i2 = v$2(e2), l2 = w$2(t2, o2 && (function(t3) {
    const e3 = w$2(t3);
    return m$2(e3.width) !== t3.offsetWidth || m$2(e3.height) !== t3.offsetHeight;
  })(e2), "fixed" === n2);
  let f2 = { scrollLeft: 0, scrollTop: 0 };
  const s2 = { x: 0, y: 0 };
  if (o2 || !o2 && "fixed" !== n2) if (("body" !== r$1(e2) || u$2(i2)) && (f2 = y$3(e2)), c$2(e2)) {
    const t3 = w$2(e2, true);
    s2.x = t3.x + e2.clientLeft, s2.y = t3.y + e2.clientTop;
  } else i2 && (s2.x = x$2(i2));
  return { x: l2.left + f2.scrollLeft - s2.x, y: l2.top + f2.scrollTop - s2.y, width: l2.width, height: l2.height };
}
function L$2(t2) {
  return "html" === r$1(t2) ? t2 : t2.assignedSlot || t2.parentNode || (s$2(t2) ? t2.host : null) || v$2(t2);
}
function R$1(t2) {
  return c$2(t2) && "fixed" !== getComputedStyle(t2).position ? t2.offsetParent : null;
}
function T$2(t2) {
  const e2 = o$1(t2);
  let n2 = R$1(t2);
  for (; n2 && d$2(n2) && "static" === getComputedStyle(n2).position; ) n2 = R$1(n2);
  return n2 && ("html" === r$1(n2) || "body" === r$1(n2) && "static" === getComputedStyle(n2).position && !h$3(n2)) ? e2 : n2 || (function(t3) {
    let e3 = L$2(t3);
    for (s$2(e3) && (e3 = e3.host); c$2(e3) && !["html", "body"].includes(r$1(e3)); ) {
      if (h$3(e3)) return e3;
      e3 = e3.parentNode;
    }
    return null;
  })(t2) || e2;
}
function W(t2) {
  if (c$2(t2)) return { width: t2.offsetWidth, height: t2.offsetHeight };
  const e2 = w$2(t2);
  return { width: e2.width, height: e2.height };
}
function E$1(t2) {
  const e2 = L$2(t2);
  return ["html", "body", "#document"].includes(r$1(e2)) ? t2.ownerDocument.body : c$2(e2) && u$2(e2) ? e2 : E$1(e2);
}
function H$2(t2, e2) {
  var n2;
  void 0 === e2 && (e2 = []);
  const i2 = E$1(t2), r2 = i2 === (null == (n2 = t2.ownerDocument) ? void 0 : n2.body), l2 = o$1(i2), c2 = r2 ? [l2].concat(l2.visualViewport || [], u$2(i2) ? i2 : []) : i2, f2 = e2.concat(c2);
  return r2 ? f2 : f2.concat(H$2(c2));
}
function C$1(e2, n2, r2) {
  return "viewport" === n2 ? l$2((function(t2, e3) {
    const n3 = o$1(t2), i2 = v$2(t2), r3 = n3.visualViewport;
    let l2 = i2.clientWidth, c2 = i2.clientHeight, f2 = 0, s2 = 0;
    if (r3) {
      l2 = r3.width, c2 = r3.height;
      const t3 = a$1();
      (t3 || !t3 && "fixed" === e3) && (f2 = r3.offsetLeft, s2 = r3.offsetTop);
    }
    return { width: l2, height: c2, x: f2, y: s2 };
  })(e2, r2)) : f$2(n2) ? (function(t2, e3) {
    const n3 = w$2(t2, false, "fixed" === e3), o2 = n3.top + t2.clientTop, i2 = n3.left + t2.clientLeft;
    return { top: o2, left: i2, x: i2, y: o2, right: i2 + t2.clientWidth, bottom: o2 + t2.clientHeight, width: t2.clientWidth, height: t2.clientHeight };
  })(n2, r2) : l$2((function(t2) {
    var e3;
    const n3 = v$2(t2), o2 = y$3(t2), r3 = null == (e3 = t2.ownerDocument) ? void 0 : e3.body, l2 = p$2(n3.scrollWidth, n3.clientWidth, r3 ? r3.scrollWidth : 0, r3 ? r3.clientWidth : 0), c2 = p$2(n3.scrollHeight, n3.clientHeight, r3 ? r3.scrollHeight : 0, r3 ? r3.clientHeight : 0);
    let f2 = -o2.scrollLeft + x$2(t2);
    const s2 = -o2.scrollTop;
    return "rtl" === i$2(r3 || n3).direction && (f2 += p$2(n3.clientWidth, r3 ? r3.clientWidth : 0) - l2), { width: l2, height: c2, x: f2, y: s2 };
  })(v$2(e2)));
}
function S$3(t2) {
  const e2 = H$2(t2), n2 = ["absolute", "fixed"].includes(i$2(t2).position) && c$2(t2) ? T$2(t2) : t2;
  return f$2(n2) ? e2.filter(((t3) => f$2(t3) && (function(t4, e3) {
    const n3 = null == e3.getRootNode ? void 0 : e3.getRootNode();
    if (t4.contains(e3)) return true;
    if (n3 && s$2(n3)) {
      let n4 = e3;
      do {
        if (n4 && t4 === n4) return true;
        n4 = n4.parentNode || n4.host;
      } while (n4);
    }
    return false;
  })(t3, n2) && "body" !== r$1(t3))) : [];
}
const D$1 = { getClippingRect: function(t2) {
  let { element: e2, boundary: n2, rootBoundary: o2, strategy: i2 } = t2;
  const r2 = [..."clippingAncestors" === n2 ? S$3(e2) : [].concat(n2), o2], l2 = r2[0], c2 = r2.reduce(((t3, n3) => {
    const o3 = C$1(e2, n3, i2);
    return t3.top = p$2(o3.top, t3.top), t3.right = g$2(o3.right, t3.right), t3.bottom = g$2(o3.bottom, t3.bottom), t3.left = p$2(o3.left, t3.left), t3;
  }), C$1(e2, l2, i2));
  return { width: c2.right - c2.left, height: c2.bottom - c2.top, x: c2.left, y: c2.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
  let { rect: e2, offsetParent: n2, strategy: o2 } = t2;
  const i2 = c$2(n2), l2 = v$2(n2);
  if (n2 === l2) return e2;
  let f2 = { scrollLeft: 0, scrollTop: 0 };
  const s2 = { x: 0, y: 0 };
  if ((i2 || !i2 && "fixed" !== o2) && (("body" !== r$1(n2) || u$2(l2)) && (f2 = y$3(n2)), c$2(n2))) {
    const t3 = w$2(n2, true);
    s2.x = t3.x + n2.clientLeft, s2.y = t3.y + n2.clientTop;
  }
  return { ...e2, x: e2.x - f2.scrollLeft + s2.x, y: e2.y - f2.scrollTop + s2.y };
}, isElement: f$2, getDimensions: W, getOffsetParent: T$2, getDocumentElement: v$2, getElementRects: (t2) => {
  let { reference: e2, floating: n2, strategy: o2 } = t2;
  return { reference: b$3(e2, T$2(n2), o2), floating: { ...W(n2), x: 0, y: 0 } };
}, getClientRects: (t2) => Array.from(t2.getClientRects()), isRTL: (t2) => "rtl" === i$2(t2).direction };
function N$2(t2, e2, n2, o2) {
  void 0 === o2 && (o2 = {});
  const { ancestorScroll: i2 = true, ancestorResize: r2 = true, elementResize: l2 = true, animationFrame: c2 = false } = o2, s2 = i2 && !c2, u2 = r2 && !c2, d2 = s2 || u2 ? [...f$2(t2) ? H$2(t2) : [], ...H$2(e2)] : [];
  d2.forEach(((t3) => {
    s2 && t3.addEventListener("scroll", n2, { passive: true }), u2 && t3.addEventListener("resize", n2);
  }));
  let h2, a2 = null;
  if (l2) {
    let o3 = true;
    a2 = new ResizeObserver((() => {
      o3 || n2(), o3 = false;
    })), f$2(t2) && !c2 && a2.observe(t2), a2.observe(e2);
  }
  let g2 = c2 ? w$2(t2) : null;
  return c2 && (function e3() {
    const o3 = w$2(t2);
    !g2 || o3.x === g2.x && o3.y === g2.y && o3.width === g2.width && o3.height === g2.height || n2();
    g2 = o3, h2 = requestAnimationFrame(e3);
  })(), n2(), () => {
    var t3;
    d2.forEach(((t4) => {
      s2 && t4.removeEventListener("scroll", n2), u2 && t4.removeEventListener("resize", n2);
    })), null == (t3 = a2) || t3.disconnect(), a2 = null, c2 && cancelAnimationFrame(h2);
  };
}
const z$1 = (t2, n2, o2) => o$2(t2, n2, { platform: D$1, ...o2 });
var index = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function deepEqual(a2, b2) {
  if (a2 === b2) {
    return true;
  }
  if (typeof a2 !== typeof b2) {
    return false;
  }
  if (typeof a2 === "function" && a2.toString() === b2.toString()) {
    return true;
  }
  let length, i2, keys;
  if (a2 && b2 && typeof a2 == "object") {
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length != b2.length) return false;
      for (i2 = length; i2-- !== 0; ) {
        if (!deepEqual(a2[i2], b2[i2])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b2).length) {
      return false;
    }
    for (i2 = length; i2-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) {
        return false;
      }
    }
    for (i2 = length; i2-- !== 0; ) {
      const key = keys[i2];
      if (key === "_owner" && a2.$$typeof) {
        continue;
      }
      if (!deepEqual(a2[key], b2[key])) {
        return false;
      }
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
}
function useLatestRef(value) {
  const ref = reactExports.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(_temp) {
  let {
    middleware,
    placement = "bottom",
    strategy = "absolute",
    whileElementsMounted
  } = _temp === void 0 ? {} : _temp;
  const reference = reactExports.useRef(null);
  const floating = reactExports.useRef(null);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const cleanupRef = reactExports.useRef(null);
  const [data, setData] = reactExports.useState({
    // Setting these to `null` will allow the consumer to determine if
    // `computePosition()` has run yet
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {}
  });
  const [latestMiddleware, setLatestMiddleware] = reactExports.useState(middleware);
  if (!deepEqual(latestMiddleware == null ? void 0 : latestMiddleware.map((_ref) => {
    let {
      options
    } = _ref;
    return options;
  }), middleware == null ? void 0 : middleware.map((_ref2) => {
    let {
      options
    } = _ref2;
    return options;
  }))) {
    setLatestMiddleware(middleware);
  }
  const update = reactExports.useCallback(() => {
    if (!reference.current || !floating.current) {
      return;
    }
    z$1(reference.current, floating.current, {
      middleware: latestMiddleware,
      placement,
      strategy
    }).then((data2) => {
      if (isMountedRef.current) {
        reactDomExports.flushSync(() => {
          setData(data2);
        });
      }
    });
  }, [latestMiddleware, placement, strategy]);
  index(() => {
    if (isMountedRef.current) {
      update();
    }
  }, [update]);
  const isMountedRef = reactExports.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const runElementMountCallback = reactExports.useCallback(() => {
    if (typeof cleanupRef.current === "function") {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (reference.current && floating.current) {
      if (whileElementsMountedRef.current) {
        const cleanupFn = whileElementsMountedRef.current(reference.current, floating.current, update);
        cleanupRef.current = cleanupFn;
      } else {
        update();
      }
    }
  }, [update, whileElementsMountedRef]);
  const setReference = reactExports.useCallback((node) => {
    reference.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const setFloating = reactExports.useCallback((node) => {
    floating.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const refs = reactExports.useMemo(() => ({
    reference,
    floating
  }), []);
  return reactExports.useMemo(() => ({
    ...data,
    update,
    refs,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, setReference, setFloating]);
}
const arrow$2 = (options) => {
  const {
    element,
    padding
  } = options;
  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return m$3({
            element: element.current,
            padding
          }).fn(args);
        }
        return {};
      } else if (element) {
        return m$3({
          element,
          padding
        }).fn(args);
      }
      return {};
    }
  };
};
const $7e8f5cd07187803e$export$21b07c8f274aebd5 = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props2;
  return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.svg, _extends$1({}, arrowProps, {
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), props2.asChild ? children : /* @__PURE__ */ reactExports.createElement("polygon", {
    points: "0,0 30,0 15,10"
  }));
});
const $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size, setSize] = reactExports.useState(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) return;
        if (!entries.length) return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size;
}
const $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
const [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
const [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
const $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props2) => {
  const { __scopePopper, children } = props2;
  const [anchor, setAnchor] = reactExports.useState(null);
  return /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$var$PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor
  }, children);
};
const $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
const $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props2;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = reactExports.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  reactExports.useEffect(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({}, anchorProps, {
    ref: composedRefs
  }));
});
const $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
const [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
const [$cf1ac5d9fe0e8206$var$PositionContextProvider, $cf1ac5d9fe0e8206$var$usePositionContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, {
  hasParent: false,
  positionUpdateFns: /* @__PURE__ */ new Set()
});
const $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$hide, _middlewareData$trans, _middlewareData$trans2;
  const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, avoidCollisions = true, onPlaced, ...contentProps } = props2;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = reactExports.useState(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [arrow2, setArrow] = reactExports.useState(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow2);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...collisionPaddingProp
  };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  };
  const { reference, floating, strategy, x: x2, y: y2, placement, middlewareData, update } = useFloating({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: N$2,
    middleware: [
      $cf1ac5d9fe0e8206$var$anchorCssProperties(),
      T$3({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions ? D$2({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? L$3() : void 0,
        ...detectOverflowOptions
      }) : void 0,
      arrow2 ? arrow$2({
        element: arrow2,
        padding: arrowPadding
      }) : void 0,
      avoidCollisions ? b$4({
        ...detectOverflowOptions
      }) : void 0,
      k$3({
        ...detectOverflowOptions,
        apply: ({ elements, availableWidth: width, availableHeight: height }) => {
          elements.floating.style.setProperty("--radix-popper-available-width", "".concat(width, "px"));
          elements.floating.style.setProperty("--radix-popper-available-height", "".concat(height, "px"));
        }
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached ? P({
        strategy: "referenceHidden"
      }) : void 0
    ].filter($cf1ac5d9fe0e8206$var$isDefined)
  });
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    reference(context.anchor);
  }, [
    reference,
    context.anchor
  ]);
  const isPlaced = x2 !== null && y2 !== null;
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPlaced) handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPlaced,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = reactExports.useState();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  const { hasParent, positionUpdateFns } = $cf1ac5d9fe0e8206$var$usePositionContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const isRoot = !hasParent;
  reactExports.useLayoutEffect(() => {
    if (!isRoot) {
      positionUpdateFns.add(update);
      return () => {
        positionUpdateFns.delete(update);
      };
    }
  }, [
    isRoot,
    positionUpdateFns,
    update
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isRoot && isPlaced) Array.from(positionUpdateFns).reverse().forEach(
      (fn) => requestAnimationFrame(fn)
    );
  }, [
    isRoot,
    isPlaced,
    positionUpdateFns
  ]);
  const commonProps = {
    "data-side": placedSide,
    "data-align": placedAlign,
    ...contentProps,
    ref: composedRefs,
    style: {
      ...contentProps.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPlaced ? "none" : void 0,
      // hide the content if using the hide middleware and should be hidden
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    }
  };
  return /* @__PURE__ */ reactExports.createElement("div", {
    ref: floating,
    "data-radix-popper-content-wrapper": "",
    style: {
      position: strategy,
      left: 0,
      top: 0,
      transform: isPlaced ? "translate3d(".concat(Math.round(x2), "px, ").concat(Math.round(y2), "px, 0)") : "translate3d(0, -200%, 0)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    },
    dir: props2.dir
  }, /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, isRoot ? /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$var$PositionContextProvider, {
    scope: __scopePopper,
    hasParent: true,
    positionUpdateFns
  }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, commonProps)) : /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, commonProps)));
});
const $cf1ac5d9fe0e8206$var$ARROW_NAME = "PopperArrow";
const $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
const $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = /* @__PURE__ */ reactExports.forwardRef(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd02(props2, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props2;
  const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
  const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ reactExports.createElement("span", {
      ref: contentContext.onArrowChange,
      style: {
        position: "absolute",
        left: contentContext.arrowX,
        top: contentContext.arrowY,
        [baseSide]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[contentContext.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[contentContext.placedSide],
        visibility: contentContext.shouldHideArrow ? "hidden" : void 0
      }
    }, /* @__PURE__ */ reactExports.createElement($7e8f5cd07187803e$export$be92b6f5f03c0fe9, _extends$1({}, arrowProps, {
      ref: forwardedRef,
      style: {
        ...arrowProps.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
/* @__PURE__ */ Object.assign($cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0, {
  displayName: $cf1ac5d9fe0e8206$var$ARROW_NAME
});
function $cf1ac5d9fe0e8206$var$isDefined(value) {
  return value !== void 0;
}
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
const $cf1ac5d9fe0e8206$var$anchorCssProperties = () => ({
  name: "anchorCssProperties",
  fn(data) {
    const { rects, elements } = data;
    const { width, height } = rects.reference;
    elements.floating.style.setProperty("--radix-popper-anchor-width", "".concat(width, "px"));
    elements.floating.style.setProperty("--radix-popper-anchor-height", "".concat(height, "px"));
    return {};
  }
});
const $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x2 = "";
    let y2 = "";
    if (placedSide === "bottom") {
      x2 = isArrowHidden ? noArrowAlign : "".concat(arrowXCenter, "px");
      y2 = "".concat(-arrowHeight, "px");
    } else if (placedSide === "top") {
      x2 = isArrowHidden ? noArrowAlign : "".concat(arrowXCenter, "px");
      y2 = "".concat(rects.floating.height + arrowHeight, "px");
    } else if (placedSide === "right") {
      x2 = "".concat(-arrowHeight, "px");
      y2 = isArrowHidden ? noArrowAlign : "".concat(arrowYCenter, "px");
    } else if (placedSide === "left") {
      x2 = "".concat(rects.floating.width + arrowHeight, "px");
      y2 = isArrowHidden ? noArrowAlign : "".concat(arrowYCenter, "px");
    }
    return {
      data: {
        x: x2,
        y: y2
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
const $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
const $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
const $cf1ac5d9fe0e8206$export$21b07c8f274aebd5 = $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0;
function $fe963b355347cc68$export$3e6543de14f8614f(initialState2, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState2);
}
const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props2) => {
  const { present, children } = props2;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : reactExports.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ reactExports.cloneElement(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = reactExports.useState();
  const stylesRef = reactExports.useRef({});
  const prevPresentRef = reactExports.useRef(present);
  const prevAnimationNameRef = reactExports.useRef("none");
  const initialState2 = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState2, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  reactExports.useEffect(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present) send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) send("ANIMATION_OUT");
        else send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          reactDomExports.flushSync(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: reactExports.useCallback((node) => {
      if (node) stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue2 = reactExports.useCallback((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop) handleChange(value);
    } else setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue2
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = reactExports.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = reactExports.useRef(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  reactExports.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}
const $ea1ef594cf570d83$export$439d29a4e110a164 = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$1({}, props2, {
    ref: forwardedRef,
    style: {
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...props2.style
    }
  }));
});
const $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;
const [$a093c7e1ec25a057$var$createTooltipContext] = $c512c27ab02ef895$export$50c7b4e9d9f19c1("Tooltip", [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
const $a093c7e1ec25a057$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
const $a093c7e1ec25a057$var$PROVIDER_NAME = "TooltipProvider";
const $a093c7e1ec25a057$var$TOOLTIP_OPEN = "tooltip.open";
const [$a093c7e1ec25a057$var$TooltipProviderContextProvider, $a093c7e1ec25a057$var$useTooltipProviderContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PROVIDER_NAME);
const $a093c7e1ec25a057$var$TOOLTIP_NAME = "Tooltip";
const [$a093c7e1ec25a057$var$TooltipContextProvider, $a093c7e1ec25a057$var$useTooltipContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME);
const $a093c7e1ec25a057$export$28c660c63b792dea = (props2) => {
  const { __scopeTooltip, children, open: openProp, defaultOpen = false, onOpenChange, disableHoverableContent: disableHoverableContentProp, delayDuration: delayDurationProp } = props2;
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TOOLTIP_NAME, props2.__scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = reactExports.useState(null);
  const contentId = $1746a345f3d73bb7$export$f680877a34711e37();
  const openTimerRef = reactExports.useRef(0);
  const disableHoverableContent = disableHoverableContentProp !== null && disableHoverableContentProp !== void 0 ? disableHoverableContentProp : providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp !== null && delayDurationProp !== void 0 ? delayDurationProp : providerContext.delayDuration;
  const wasOpenDelayedRef = reactExports.useRef(false);
  const [open1 = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: (open) => {
      if (open) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent($a093c7e1ec25a057$var$TOOLTIP_OPEN));
      } else providerContext.onClose();
      onOpenChange === null || onOpenChange === void 0 || onOpenChange(open);
    }
  });
  const stateAttribute = reactExports.useMemo(() => {
    return open1 ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [
    open1
  ]);
  const handleOpen = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [
    setOpen
  ]);
  const handleClose = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    setOpen(false);
  }, [
    setOpen
  ]);
  const handleDelayedOpen = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
    }, delayDuration);
  }, [
    delayDuration,
    setOpen
  ]);
  reactExports.useEffect(() => {
    return () => window.clearTimeout(openTimerRef.current);
  }, []);
  return /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$TooltipContextProvider, {
    scope: __scopeTooltip,
    contentId,
    open: open1,
    stateAttribute,
    trigger,
    onTriggerChange: setTrigger,
    onTriggerEnter: reactExports.useCallback(() => {
      if (providerContext.isOpenDelayed) handleDelayedOpen();
      else handleOpen();
    }, [
      providerContext.isOpenDelayed,
      handleDelayedOpen,
      handleOpen
    ]),
    onTriggerLeave: reactExports.useCallback(() => {
      if (disableHoverableContent) handleClose();
      else
        window.clearTimeout(openTimerRef.current);
    }, [
      handleClose,
      disableHoverableContent
    ]),
    onOpen: handleOpen,
    onClose: handleClose,
    disableHoverableContent
  }, children));
};
const $a093c7e1ec25a057$var$TRIGGER_NAME = "TooltipTrigger";
const $a093c7e1ec25a057$export$8c610744efcf8a1d = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  const { __scopeTooltip, ...triggerProps } = props2;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const ref = reactExports.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onTriggerChange);
  const isPointerDownRef = reactExports.useRef(false);
  const hasPointerMoveOpenedRef = reactExports.useRef(false);
  const handlePointerUp = reactExports.useCallback(
    () => isPointerDownRef.current = false,
    []
  );
  reactExports.useEffect(() => {
    return () => document.removeEventListener("pointerup", handlePointerUp);
  }, [
    handlePointerUp
  ]);
  return /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends$1({
    asChild: true
  }, popperScope), /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$1({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": context.open ? context.contentId : void 0,
    "data-state": context.stateAttribute
  }, triggerProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props2.onPointerMove, (event) => {
      if (event.pointerType === "touch") return;
      if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
        context.onTriggerEnter();
        hasPointerMoveOpenedRef.current = true;
      }
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props2.onPointerLeave, () => {
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props2.onPointerDown, () => {
      isPointerDownRef.current = true;
      document.addEventListener("pointerup", handlePointerUp, {
        once: true
      });
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props2.onFocus, () => {
      if (!isPointerDownRef.current) context.onOpen();
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props2.onBlur, context.onClose),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props2.onClick, context.onClose)
  })));
});
const $a093c7e1ec25a057$var$PORTAL_NAME = "TooltipPortal";
const [$a093c7e1ec25a057$var$PortalProvider, $a093c7e1ec25a057$var$usePortalContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, {
  forceMount: void 0
});
const $a093c7e1ec25a057$var$CONTENT_NAME = "TooltipContent";
const $a093c7e1ec25a057$export$e9003e2be37ec060 = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  const portalContext = $a093c7e1ec25a057$var$usePortalContext($a093c7e1ec25a057$var$CONTENT_NAME, props2.__scopeTooltip);
  const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props2;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props2.__scopeTooltip);
  return /* @__PURE__ */ reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.disableHoverableContent ? /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$TooltipContentImpl, _extends$1({
    side
  }, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$TooltipContentHoverable, _extends$1({
    side
  }, contentProps, {
    ref: forwardedRef
  })));
});
const $a093c7e1ec25a057$var$TooltipContentHoverable = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props2.__scopeTooltip);
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$CONTENT_NAME, props2.__scopeTooltip);
  const ref = reactExports.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = reactExports.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = reactExports.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [
    onPointerInTransitChange
  ]);
  const handleCreateGraceArea = reactExports.useCallback((event, hoverTarget) => {
    const currentTarget = event.currentTarget;
    const exitPoint = {
      x: event.clientX,
      y: event.clientY
    };
    const exitSide = $a093c7e1ec25a057$var$getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const bleed = exitSide === "right" || exitSide === "bottom" ? -5 : 5;
    const isXAxis = exitSide === "right" || exitSide === "left";
    const startPoint = isXAxis ? {
      x: event.clientX + bleed,
      y: event.clientY
    } : {
      x: event.clientX,
      y: event.clientY + bleed
    };
    const hoverTargetPoints = $a093c7e1ec25a057$var$getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = $a093c7e1ec25a057$var$getHull([
      startPoint,
      ...hoverTargetPoints
    ]);
    setPointerGraceArea(graceArea);
    onPointerInTransitChange(true);
  }, [
    onPointerInTransitChange
  ]);
  reactExports.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [
    handleRemoveGraceArea
  ]);
  reactExports.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [
    trigger,
    content,
    handleCreateGraceArea,
    handleRemoveGraceArea
  ]);
  reactExports.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const hasEnteredTarget = (trigger === null || trigger === void 0 ? void 0 : trigger.contains(target)) || (content === null || content === void 0 ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !$a093c7e1ec25a057$var$isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) handleRemoveGraceArea();
        else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [
    trigger,
    content,
    pointerGraceArea,
    onClose,
    handleRemoveGraceArea
  ]);
  return /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$TooltipContentImpl, _extends$1({}, props2, {
    ref: composedRefs
  }));
});
const [$a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, $a093c7e1ec25a057$var$useVisuallyHiddenContentContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME, {
  isInside: false
});
const $a093c7e1ec25a057$var$TooltipContentImpl = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  const { __scopeTooltip, children, "aria-label": ariaLabel, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props2;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, __scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const { onClose } = context;
  reactExports.useEffect(() => {
    document.addEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
    return () => document.removeEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
  }, [
    onClose
  ]);
  reactExports.useEffect(() => {
    if (context.trigger) {
      const handleScroll = (event) => {
        const target = event.target;
        if (target !== null && target !== void 0 && target.contains(context.trigger)) onClose();
      };
      window.addEventListener("scroll", handleScroll, {
        capture: true
      });
      return () => window.removeEventListener("scroll", handleScroll, {
        capture: true
      });
    }
  }, [
    context.trigger,
    onClose
  ]);
  return /* @__PURE__ */ reactExports.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: onClose
  }, /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends$1({
    "data-state": context.stateAttribute
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ reactExports.createElement($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, {
    scope: __scopeTooltip,
    isInside: true
  }, /* @__PURE__ */ reactExports.createElement($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    id: context.contentId,
    role: "tooltip"
  }, ariaLabel || children))));
});
const $a093c7e1ec25a057$var$ARROW_NAME = "TooltipArrow";
const $a093c7e1ec25a057$export$c27ee0ad710f7559 = /* @__PURE__ */ reactExports.forwardRef((props2, forwardedRef) => {
  const { __scopeTooltip, ...arrowProps } = props2;
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const visuallyHiddenContentContext = $a093c7e1ec25a057$var$useVisuallyHiddenContentContext($a093c7e1ec25a057$var$ARROW_NAME, __scopeTooltip);
  return visuallyHiddenContentContext.isInside ? null : /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, _extends$1({}, popperScope, arrowProps, {
    ref: forwardedRef
  }));
});
function $a093c7e1ec25a057$var$getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      return null;
  }
}
function $a093c7e1ec25a057$var$getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: right,
      y: bottom
    },
    {
      x: left,
      y: bottom
    }
  ];
}
function $a093c7e1ec25a057$var$isPointInPolygon(point, polygon) {
  const { x: x2, y: y2 } = point;
  let inside = false;
  for (let i2 = 0, j2 = polygon.length - 1; i2 < polygon.length; j2 = i2++) {
    const xi = polygon[i2].x;
    const yi = polygon[i2].y;
    const xj = polygon[j2].x;
    const yj = polygon[j2].y;
    const intersect = yi > y2 !== yj > y2 && x2 < (xj - xi) * (y2 - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function $a093c7e1ec25a057$var$getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a2, b2) => {
    if (a2.x < b2.x) return -1;
    else if (a2.x > b2.x) return 1;
    else if (a2.y < b2.y) return -1;
    else if (a2.y > b2.y) return 1;
    else return 0;
  });
  return $a093c7e1ec25a057$var$getHullPresorted(newPoints);
}
function $a093c7e1ec25a057$var$getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i2 = 0; i2 < points.length; i2++) {
    const p2 = points[i2];
    while (upperHull.length >= 2) {
      const q2 = upperHull[upperHull.length - 1];
      const r2 = upperHull[upperHull.length - 2];
      if ((q2.x - r2.x) * (p2.y - r2.y) >= (q2.y - r2.y) * (p2.x - r2.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p2);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i1 = points.length - 1; i1 >= 0; i1--) {
    const p2 = points[i1];
    while (lowerHull.length >= 2) {
      const q2 = lowerHull[lowerHull.length - 1];
      const r2 = lowerHull[lowerHull.length - 2];
      if ((q2.x - r2.x) * (p2.y - r2.y) >= (q2.y - r2.y) * (p2.x - r2.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p2);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
const $a093c7e1ec25a057$export$be92b6f5f03c0fe9 = $a093c7e1ec25a057$export$28c660c63b792dea;
const $a093c7e1ec25a057$export$41fb9f06171c75f4 = $a093c7e1ec25a057$export$8c610744efcf8a1d;
const $a093c7e1ec25a057$export$7c6e2c02157bb7d2 = $a093c7e1ec25a057$export$e9003e2be37ec060;
const $a093c7e1ec25a057$export$21b07c8f274aebd5 = $a093c7e1ec25a057$export$c27ee0ad710f7559;
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
let LevaErrors;
(function(LevaErrors2) {
  LevaErrors2[LevaErrors2["UNSUPPORTED_INPUT"] = 0] = "UNSUPPORTED_INPUT";
  LevaErrors2[LevaErrors2["NO_COMPONENT_FOR_TYPE"] = 1] = "NO_COMPONENT_FOR_TYPE";
  LevaErrors2[LevaErrors2["UNKNOWN_INPUT"] = 2] = "UNKNOWN_INPUT";
  LevaErrors2[LevaErrors2["DUPLICATE_KEYS"] = 3] = "DUPLICATE_KEYS";
  LevaErrors2[LevaErrors2["ALREADY_REGISTERED_TYPE"] = 4] = "ALREADY_REGISTERED_TYPE";
  LevaErrors2[LevaErrors2["CLIPBOARD_ERROR"] = 5] = "CLIPBOARD_ERROR";
  LevaErrors2[LevaErrors2["THEME_ERROR"] = 6] = "THEME_ERROR";
  LevaErrors2[LevaErrors2["PATH_DOESNT_EXIST"] = 7] = "PATH_DOESNT_EXIST";
  LevaErrors2[LevaErrors2["INPUT_TYPE_OVERRIDE"] = 8] = "INPUT_TYPE_OVERRIDE";
  LevaErrors2[LevaErrors2["EMPTY_KEY"] = 9] = "EMPTY_KEY";
})(LevaErrors || (LevaErrors = {}));
const ErrorList = {
  [LevaErrors.UNSUPPORTED_INPUT]: (type, path) => ["An input with type `".concat(type, "` input was found at path `").concat(path, "` but it's not supported yet.")],
  [LevaErrors.NO_COMPONENT_FOR_TYPE]: (type, path) => ["Type `".concat(type, "` found at path `").concat(path, "` can't be displayed in panel because no component supports it yet.")],
  [LevaErrors.UNKNOWN_INPUT]: (path, value) => ["input at path `".concat(path, "` is not recognized."), value],
  [LevaErrors.DUPLICATE_KEYS]: (key, path, prevPath) => ["Key `".concat(key, "` of path `").concat(path, "` already exists at path `").concat(prevPath, "`. Even nested keys need to be unique. Rename one of the keys.")],
  [LevaErrors.ALREADY_REGISTERED_TYPE]: (type) => ["Type ".concat(type, " has already been registered. You can't register a component with the same type.")],
  [LevaErrors.CLIPBOARD_ERROR]: (value) => ["Error copying the value", value],
  [LevaErrors.THEME_ERROR]: (category, key) => ["Error accessing the theme `".concat(category, ".").concat(key, "` value.")],
  [LevaErrors.PATH_DOESNT_EXIST]: (path) => ["Error getting the value at path `".concat(path, "`. There is probably an error in your `render` function.")],
  [LevaErrors.PATH_DOESNT_EXIST]: (path) => ["Error accessing the value at path `".concat(path, "`")],
  [LevaErrors.INPUT_TYPE_OVERRIDE]: (path, type, wrongType) => ["Input at path `".concat(path, "` already exists with type: `").concat(type, "`. Its type cannot be overridden with type `").concat(wrongType, "`.")],
  [LevaErrors.EMPTY_KEY]: () => ["Keys can not be empty, if you want to hide a label use whitespace."]
};
function _log(fn, errorType, ...args) {
  const [message, ...rest2] = ErrorList[errorType](...args);
  console[fn]("LEVA: " + message, ...rest2);
}
const warn = _log.bind(null, "warn");
const log = _log.bind(null, "log");
const _excluded$a = ["value"], _excluded2$4 = ["schema"], _excluded3$1 = ["value"];
const Schemas = [];
const Plugins = {};
function getValueType(_ref) {
  let {
    value
  } = _ref, settings = _objectWithoutProperties$1(_ref, _excluded$a);
  for (let checker of Schemas) {
    const type = checker(value, settings);
    if (type) return type;
  }
  return void 0;
}
function register(type, _ref2) {
  let {
    schema: schema2
  } = _ref2, plugin2 = _objectWithoutProperties$1(_ref2, _excluded2$4);
  if (type in Plugins) {
    warn(LevaErrors.ALREADY_REGISTERED_TYPE, type);
    return;
  }
  Schemas.push((value, settings) => schema2(value, settings) && type);
  Plugins[type] = plugin2;
}
function createInternalPlugin(plugin2) {
  return plugin2;
}
function normalize$3$1(type, input, path, data) {
  const {
    normalize: _normalize
  } = Plugins[type];
  if (_normalize) return _normalize(input, path, data);
  if (typeof input !== "object" || !("value" in input)) return {
    value: input
  };
  const {
    value
  } = input, settings = _objectWithoutProperties$1(input, _excluded3$1);
  return {
    value,
    settings
  };
}
function sanitize$4(type, value, settings, prevValue, path, store) {
  const {
    sanitize: sanitize2
  } = Plugins[type];
  if (sanitize2) return sanitize2(value, settings, prevValue, path, store);
  return value;
}
function format$2(type, value, settings) {
  const {
    format: format2
  } = Plugins[type];
  if (format2) return format2(value, settings);
  return value;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
const clamp$1 = (x2, min2, max2) => x2 > max2 ? max2 : x2 < min2 ? min2 : x2;
const parseNumber = (v2) => {
  if (v2 === "" || typeof v2 === "number") return v2;
  try {
    const _v = evaluate$1(v2);
    if (!isNaN(_v)) return _v;
  } catch (_unused) {
  }
  return parseFloat(v2);
};
const log10 = Math.log(10);
function getStep(number2) {
  let n2 = Math.abs(+String(number2).replace(".", ""));
  if (n2 === 0) return 0.01;
  while (n2 !== 0 && n2 % 10 === 0) n2 /= 10;
  const significantDigits = Math.floor(Math.log(n2) / log10) + 1;
  const numberLog = Math.floor(Math.log10(Math.abs(number2)));
  const step = Math.pow(10, numberLog - significantDigits);
  return Math.max(step, 1e-3);
}
const range = (v2, min2, max2) => {
  if (max2 === min2) return 0;
  const _v = clamp$1(v2, min2, max2);
  return (_v - min2) / (max2 - min2);
};
const invertedRange = (p2, min2, max2) => p2 * (max2 - min2) + min2;
const getUid = () => "_" + Math.random().toString(36).substr(2, 9);
const parens = /\(([0-9+\-*/^ .]+)\)/;
const exp = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/;
const mul = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/;
const div = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/;
const add = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/;
const sub = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/;
function evaluate$1(expr) {
  if (isNaN(Number(expr))) {
    if (parens.test(expr)) {
      const newExpr = expr.replace(parens, (match, subExpr) => String(evaluate$1(subExpr)));
      return evaluate$1(newExpr);
    } else if (exp.test(expr)) {
      const newExpr = expr.replace(exp, (match, base, pow) => String(Math.pow(Number(base), Number(pow))));
      return evaluate$1(newExpr);
    } else if (mul.test(expr)) {
      const newExpr = expr.replace(mul, (match, a2, b2) => String(Number(a2) * Number(b2)));
      return evaluate$1(newExpr);
    } else if (div.test(expr)) {
      const newExpr = expr.replace(div, (match, a2, b2) => {
        if (b2 != 0) return String(Number(a2) / Number(b2));
        else throw new Error("Division by zero");
      });
      return evaluate$1(newExpr);
    } else if (add.test(expr)) {
      const newExpr = expr.replace(add, (match, a2, b2) => String(Number(a2) + Number(b2)));
      return evaluate$1(newExpr);
    } else if (sub.test(expr)) {
      const newExpr = expr.replace(sub, (match, a2, b2) => String(Number(a2) - Number(b2)));
      return evaluate$1(newExpr);
    } else {
      return Number(expr);
    }
  }
  return Number(expr);
}
function pick(object, keys) {
  return keys.reduce((obj, key) => {
    if (!!object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}
function omit(object, keys) {
  const obj = _objectSpread2({}, object);
  keys.forEach((k2) => k2 in object && delete obj[k2]);
  return obj;
}
function mapArrayToKeys(value, keys) {
  return value.reduce((acc, v2, i2) => Object.assign(acc, {
    [keys[i2]]: v2
  }), {});
}
function isObject$1(variable) {
  return Object.prototype.toString.call(variable) === "[object Object]";
}
const isEmptyObject = (obj) => isObject$1(obj) && Object.keys(obj).length === 0;
let SpecialInputs;
(function(SpecialInputs2) {
  SpecialInputs2["BUTTON"] = "BUTTON";
  SpecialInputs2["BUTTON_GROUP"] = "BUTTON_GROUP";
  SpecialInputs2["MONITOR"] = "MONITOR";
  SpecialInputs2["FOLDER"] = "FOLDER";
})(SpecialInputs || (SpecialInputs = {}));
let LevaInputs;
(function(LevaInputs2) {
  LevaInputs2["SELECT"] = "SELECT";
  LevaInputs2["IMAGE"] = "IMAGE";
  LevaInputs2["NUMBER"] = "NUMBER";
  LevaInputs2["COLOR"] = "COLOR";
  LevaInputs2["STRING"] = "STRING";
  LevaInputs2["BOOLEAN"] = "BOOLEAN";
  LevaInputs2["INTERVAL"] = "INTERVAL";
  LevaInputs2["VECTOR3D"] = "VECTOR3D";
  LevaInputs2["VECTOR2D"] = "VECTOR2D";
})(LevaInputs || (LevaInputs = {}));
const _excluded$9 = ["type", "__customInput"], _excluded2$3 = ["render", "label", "optional", "order", "disabled", "hint", "onChange", "onEditStart", "onEditEnd", "transient"], _excluded3$2 = ["type"];
function parseOptions(_input, key, mergedOptions = {}, customType) {
  var _commonOptions$option, _commonOptions$disabl;
  if (typeof _input !== "object" || Array.isArray(_input)) {
    return {
      type: customType,
      input: _input,
      options: _objectSpread2({
        key,
        label: key,
        optional: false,
        disabled: false,
        order: 0
      }, mergedOptions)
    };
  }
  if ("__customInput" in _input) {
    const {
      type: _type,
      __customInput
    } = _input, options = _objectWithoutProperties$1(_input, _excluded$9);
    return parseOptions(__customInput, key, options, _type);
  }
  const {
    render,
    label,
    optional: optional2,
    order = 0,
    disabled,
    hint,
    onChange,
    onEditStart,
    onEditEnd,
    transient
  } = _input, inputWithType = _objectWithoutProperties$1(_input, _excluded2$3);
  const commonOptions = _objectSpread2({
    render,
    key,
    label: label !== null && label !== void 0 ? label : key,
    hint,
    transient: transient !== null && transient !== void 0 ? transient : !!onChange,
    onEditStart,
    onEditEnd,
    disabled,
    optional: optional2,
    order
  }, mergedOptions);
  let {
    type
  } = inputWithType, input = _objectWithoutProperties$1(inputWithType, _excluded3$2);
  type = customType !== null && customType !== void 0 ? customType : type;
  if (type in SpecialInputs) {
    return {
      type,
      input,
      options: commonOptions
    };
  }
  let computedInput;
  if (customType && isObject$1(input) && "value" in input) computedInput = input.value;
  else computedInput = isEmptyObject(input) ? void 0 : input;
  return {
    type,
    input: computedInput,
    options: _objectSpread2(_objectSpread2({}, commonOptions), {}, {
      onChange,
      optional: (_commonOptions$option = commonOptions.optional) !== null && _commonOptions$option !== void 0 ? _commonOptions$option : false,
      disabled: (_commonOptions$disabl = commonOptions.disabled) !== null && _commonOptions$disabl !== void 0 ? _commonOptions$disabl : false
    })
  };
}
function normalizeInput(_input, key, path, data) {
  const parsedInputAndOptions = parseOptions(_input, key);
  const {
    type,
    input: parsedInput,
    options
  } = parsedInputAndOptions;
  if (type) {
    if (type in SpecialInputs)
      return parsedInputAndOptions;
    return {
      type,
      input: normalize$3$1(type, parsedInput, path, data),
      options
    };
  }
  let inputType = getValueType(parsedInput);
  if (inputType) return {
    type: inputType,
    input: normalize$3$1(inputType, parsedInput, path, data),
    options
  };
  inputType = getValueType({
    value: parsedInput
  });
  if (inputType) return {
    type: inputType,
    input: normalize$3$1(inputType, {
      value: parsedInput
    }, path, data),
    options
  };
  return false;
}
function updateInput(input, newValue, path, store, fromPanel) {
  const {
    value,
    type,
    settings
  } = input;
  input.value = sanitizeValue({
    type,
    value,
    settings
  }, newValue, path, store);
  input.fromPanel = fromPanel;
}
const ValueError = function ValueError2(message, value, error) {
  this.type = "LEVA_ERROR";
  this.message = "LEVA: " + message;
  this.previousValue = value;
  this.error = error;
};
function sanitizeValue({
  type,
  value,
  settings
}, newValue, path, store) {
  const _newValue = type !== "SELECT" && typeof newValue === "function" ? newValue(value) : newValue;
  let sanitizedNewValue;
  try {
    sanitizedNewValue = sanitize$4(type, _newValue, settings, value, path, store);
  } catch (e2) {
    throw new ValueError("The value `".concat(newValue, "` did not result in a correct value."), value, e2);
  }
  if (dequal(sanitizedNewValue, value)) {
    return value;
  }
  return sanitizedNewValue;
}
const debounce = (callback, wait, immediate = false) => {
  let timeout = 0;
  return function() {
    const args = arguments;
    const callNow = immediate && !timeout;
    const next = () => callback.apply(this, args);
    window.clearTimeout(timeout);
    timeout = window.setTimeout(next, wait);
    if (callNow) next();
  };
};
const multiplyStep = (event) => event.shiftKey ? 5 : event.altKey ? 1 / 5 : 1;
const _excluded$8 = ["value"], _excluded2$2$1 = ["min", "max"];
const schema$3 = (v2) => {
  if (typeof v2 === "number") return true;
  if (typeof v2 === "string") {
    const _v = parseFloat(v2);
    if (isNaN(_v)) return false;
    const suffix = v2.substring(("" + _v).length).trim();
    return suffix.length < 4;
  }
  return false;
};
const sanitize$3 = (v2, {
  min: _min = -Infinity,
  max: _max = Infinity,
  suffix
}) => {
  const _v = parseFloat(v2);
  if (v2 === "" || isNaN(_v)) throw Error("Invalid number");
  const f2 = clamp$1(_v, _min, _max);
  return suffix ? f2 + suffix : f2;
};
const format$1$1 = (v2, {
  pad: _pad = 0,
  suffix
}) => {
  const f2 = parseFloat(v2).toFixed(_pad);
  return suffix ? f2 + suffix : f2;
};
const normalize$2$1 = (_ref) => {
  let {
    value
  } = _ref, settings = _objectWithoutProperties$1(_ref, _excluded$8);
  const {
    min: min2 = -Infinity,
    max: max2 = Infinity
  } = settings, _settings = _objectWithoutProperties$1(settings, _excluded2$2$1);
  let _value = parseFloat(value);
  const suffix = typeof value === "string" ? value.substring(("" + _value).length) : void 0;
  _value = clamp$1(_value, min2, max2);
  let step = settings.step;
  if (!step) {
    if (Number.isFinite(min2)) {
      if (Number.isFinite(max2)) step = +(Math.abs(max2 - min2) / 100).toPrecision(1);
      else step = +(Math.abs(_value - min2) / 100).toPrecision(1);
    } else if (Number.isFinite(max2)) step = +(Math.abs(max2 - _value) / 100).toPrecision(1);
  }
  const padStep = step ? getStep(step) * 10 : getStep(_value);
  step = step || padStep / 10;
  const pad = Math.round(clamp$1(Math.log10(1 / padStep), 0, 2));
  return {
    value: suffix ? _value + suffix : _value,
    settings: _objectSpread2({
      initialValue: _value,
      step,
      pad,
      min: min2,
      max: max2,
      suffix
    }, _settings)
  };
};
const sanitizeStep$1 = (v2, {
  step,
  initialValue
}) => {
  const steps = Math.round((v2 - initialValue) / step);
  return initialValue + steps * step;
};
var props$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  schema: schema$3,
  sanitize: sanitize$3,
  format: format$1$1,
  normalize: normalize$2$1,
  sanitizeStep: sanitizeStep$1
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
const InputContext = reactExports.createContext({});
function useInputContext() {
  return reactExports.useContext(InputContext);
}
const ThemeContext = reactExports.createContext(null);
const StoreContext = reactExports.createContext(null);
const PanelSettingsContext = reactExports.createContext(null);
function useStoreContext() {
  return reactExports.useContext(StoreContext);
}
function usePanelSettingsContext() {
  return reactExports.useContext(PanelSettingsContext);
}
const getDefaultTheme = () => ({
  colors: {
    elevation1: "#292d39",
    elevation2: "#181c20",
    elevation3: "#373c4b",
    accent1: "#0066dc",
    accent2: "#007bff",
    accent3: "#3c93ff",
    highlight1: "#535760",
    highlight2: "#8c92a4",
    highlight3: "#fefefe",
    vivid1: "#ffcc00",
    folderWidgetColor: "$highlight2",
    folderTextColor: "$highlight3",
    toolTipBackground: "$highlight3",
    toolTipText: "$elevation2"
  },
  radii: {
    xs: "2px",
    sm: "3px",
    lg: "10px"
  },
  space: {
    xs: "3px",
    sm: "6px",
    md: "10px",
    rowGap: "7px",
    colGap: "7px"
  },
  fonts: {
    mono: "ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace",
    sans: "system-ui, sans-serif"
  },
  fontSizes: {
    root: "11px",
    toolTip: "$root"
  },
  sizes: {
    rootWidth: "280px",
    controlWidth: "160px",
    numberInputMinWidth: "38px",
    scrubberWidth: "8px",
    scrubberHeight: "16px",
    rowHeight: "24px",
    folderTitleHeight: "20px",
    checkboxSize: "16px",
    joystickWidth: "100px",
    joystickHeight: "100px",
    colorPickerWidth: "$controlWidth",
    colorPickerHeight: "100px",
    imagePreviewWidth: "$controlWidth",
    imagePreviewHeight: "100px",
    monitorHeight: "60px",
    titleBarHeight: "39px"
  },
  shadows: {
    level1: "0 0 9px 0 #00000088",
    level2: "0 4px 14px #00000033"
  },
  borderWidths: {
    root: "0px",
    input: "1px",
    focus: "1px",
    hover: "1px",
    active: "1px",
    folder: "1px"
  },
  fontWeights: {
    label: "normal",
    folder: "normal",
    button: "normal"
  }
});
function createStateClass(value, options) {
  const [borderColor, bgColor] = value.split(" ");
  const css2 = {};
  if (borderColor !== "none") {
    css2.boxShadow = "".concat(options.inset ? "inset " : "", "0 0 0 $borderWidths").concat([options.key], " $colors").concat(borderColor !== "default" && borderColor || options.borderColor);
  }
  if (bgColor) {
    css2.backgroundColor = bgColor;
  }
  return css2;
}
const utils = {
  $inputStyle: () => (value) => createStateClass(value, {
    key: "$input",
    borderColor: "$highlight1",
    inset: true
  }),
  $focusStyle: () => (value) => createStateClass(value, {
    key: "$focus",
    borderColor: "$accent2"
  }),
  $hoverStyle: () => (value) => createStateClass(value, {
    key: "$hover",
    borderColor: "$accent1",
    inset: true
  }),
  $activeStyle: () => (value) => createStateClass(value, {
    key: "$active",
    borderColor: "$accent1",
    inset: true
  })
};
const {
  styled,
  css,
  createTheme,
  globalCss,
  keyframes
} = q$2({
  prefix: "leva",
  theme: getDefaultTheme(),
  utils: _objectSpread2(_objectSpread2({}, utils), {}, {
    $flex: () => ({
      display: "flex",
      alignItems: "center"
    }),
    $flexCenter: () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }),
    $reset: () => ({
      outline: "none",
      fontSize: "inherit",
      fontWeight: "inherit",
      color: "inherit",
      fontFamily: "inherit",
      border: "none",
      backgroundColor: "transparent",
      appearance: "none"
    }),
    $draggable: () => ({
      touchAction: "none",
      WebkitUserDrag: "none",
      userSelect: "none"
    }),
    $focus: (value) => ({
      "&:focus": utils.$focusStyle()(value)
    }),
    $focusWithin: (value) => ({
      "&:focus-within": utils.$focusStyle()(value)
    }),
    $hover: (value) => ({
      "&:hover": utils.$hoverStyle()(value)
    }),
    $active: (value) => ({
      "&:active": utils.$activeStyle()(value)
    })
  })
});
const globalStyles = globalCss({
  ".leva__panel__dragged": {
    WebkitUserDrag: "none",
    userSelect: "none",
    input: {
      userSelect: "none"
    },
    "*": {
      cursor: "ew-resize !important"
    }
  }
});
function mergeTheme(newTheme) {
  const defaultTheme = getDefaultTheme();
  if (!newTheme) return {
    theme: defaultTheme,
    className: ""
  };
  Object.keys(newTheme).forEach((key) => {
    Object.assign(defaultTheme[key], newTheme[key]);
  });
  const customTheme = createTheme(defaultTheme);
  return {
    theme: defaultTheme,
    className: customTheme.className
  };
}
function useTh(category, key) {
  const {
    theme
  } = reactExports.useContext(ThemeContext);
  if (!(category in theme) || !(key in theme[category])) {
    warn(LevaErrors.THEME_ERROR, category, key);
    return "";
  }
  let _key = key;
  while (true) {
    let value = theme[category][_key];
    if (typeof value === "string" && value.charAt(0) === "$") _key = value.substr(1);
    else return value;
  }
}
const StyledInput = styled("input", {
  $reset: "",
  padding: "0 $sm",
  width: 0,
  minWidth: 0,
  flex: 1,
  height: "100%",
  variants: {
    levaType: {
      number: {
        textAlign: "right"
      }
    },
    as: {
      textarea: {
        padding: "$sm"
      }
    }
  }
});
const InnerLabel = styled("div", {
  $draggable: "",
  height: "100%",
  $flexCenter: "",
  position: "relative",
  padding: "0 $xs",
  fontSize: "0.8em",
  opacity: 0.8,
  cursor: "default",
  touchAction: "none",
  ["& + ".concat(StyledInput)]: {
    paddingLeft: 0
  }
});
const InnerNumberLabel = styled(InnerLabel, {
  cursor: "ew-resize",
  marginRight: "-$xs",
  textTransform: "uppercase",
  opacity: 0.3,
  "&:hover": {
    opacity: 1
  },
  variants: {
    dragging: {
      true: {
        backgroundColor: "$accent2",
        opacity: 1
      }
    }
  }
});
const InputContainer = styled("div", {
  $flex: "",
  position: "relative",
  borderRadius: "$sm",
  overflow: "hidden",
  color: "inherit",
  height: "$rowHeight",
  backgroundColor: "$elevation3",
  $inputStyle: "$elevation1",
  $hover: "",
  $focusWithin: "",
  variants: {
    textArea: {
      true: {
        height: "auto"
      }
    }
  }
});
const _excluded$7$1 = ["innerLabel", "value", "onUpdate", "onChange", "onKeyDown", "type", "id", "inputType", "rows"], _excluded2$1$1 = ["onUpdate"];
function ValueInput(_ref) {
  let {
    innerLabel,
    value,
    onUpdate,
    onChange,
    onKeyDown,
    type,
    id,
    inputType = "text",
    rows = 0
  } = _ref, props2 = _objectWithoutProperties$1(_ref, _excluded$7$1);
  const {
    id: _id,
    emitOnEditStart,
    emitOnEditEnd,
    disabled
  } = useInputContext();
  const inputId = id || _id;
  const inputRef = reactExports.useRef(null);
  const isTextArea = rows > 0;
  const asType = isTextArea ? "textarea" : "input";
  const update = reactExports.useCallback((fn) => (event) => {
    const _value = event.currentTarget.value;
    fn(_value);
  }, []);
  React.useEffect(() => {
    const ref = inputRef.current;
    const _onUpdate = update((value2) => {
      onUpdate(value2);
      emitOnEditEnd();
    });
    ref === null || ref === void 0 ? void 0 : ref.addEventListener("blur", _onUpdate);
    return () => ref === null || ref === void 0 ? void 0 : ref.removeEventListener("blur", _onUpdate);
  }, [update, onUpdate, emitOnEditEnd]);
  const onKeyPress = reactExports.useCallback((event) => {
    if (event.key === "Enter") {
      update(onUpdate)(event);
    }
  }, [update, onUpdate]);
  const inputProps = Object.assign({
    as: asType
  }, isTextArea ? {
    rows
  } : {}, props2);
  return React.createElement(InputContainer, {
    textArea: isTextArea
  }, innerLabel && typeof innerLabel === "string" ? React.createElement(InnerLabel, null, innerLabel) : innerLabel, React.createElement(StyledInput, _extends({
    levaType: type,
    ref: inputRef,
    id: inputId,
    type: inputType,
    autoComplete: "off",
    spellCheck: "false",
    value,
    onChange: update(onChange),
    onFocus: () => emitOnEditStart(),
    onKeyPress,
    onKeyDown,
    disabled
  }, inputProps)));
}
function NumberInput(_ref2) {
  let {
    onUpdate
  } = _ref2, props2 = _objectWithoutProperties$1(_ref2, _excluded2$1$1);
  const _onUpdate = reactExports.useCallback((v2) => onUpdate(parseNumber(v2)), [onUpdate]);
  const onKeyDown = reactExports.useCallback((event) => {
    const dir = event.key === "ArrowUp" ? 1 : event.key === "ArrowDown" ? -1 : 0;
    if (dir) {
      event.preventDefault();
      const step = event.altKey ? 0.1 : event.shiftKey ? 10 : 1;
      onUpdate((v2) => parseFloat(v2) + dir * step);
    }
  }, [onUpdate]);
  return React.createElement(ValueInput, _extends({}, props2, {
    onUpdate: _onUpdate,
    onKeyDown,
    type: "number"
  }));
}
const StyledFolder = styled("div", {});
const StyledWrapper = styled("div", {
  position: "relative",
  background: "$elevation2",
  transition: "height 300ms ease",
  variants: {
    fill: {
      true: {},
      false: {}
    },
    flat: {
      false: {},
      true: {}
    },
    isRoot: {
      true: {},
      false: {
        paddingLeft: "$md",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          width: "$borderWidths$folder",
          height: "100%",
          backgroundColor: "$folderWidgetColor",
          opacity: 0.4,
          transform: "translateX(-50%)"
        }
      }
    }
  },
  compoundVariants: [{
    isRoot: true,
    fill: false,
    css: {
      overflowY: "auto",
      maxHeight: "calc(100vh - 20px - $$titleBarHeight)"
    }
  }, {
    isRoot: true,
    flat: false,
    css: {
      borderRadius: "$lg"
    }
  }]
});
const StyledTitle = styled("div", {
  $flex: "",
  color: "$folderTextColor",
  userSelect: "none",
  cursor: "pointer",
  height: "$folderTitleHeight",
  fontWeight: "$folder",
  "> svg": {
    marginLeft: -4,
    marginRight: 4,
    cursor: "pointer",
    fill: "$folderWidgetColor",
    opacity: 0.6
  },
  "&:hover > svg": {
    fill: "$folderWidgetColor"
  },
  ["&:hover + ".concat(StyledWrapper, "::after")]: {
    opacity: 0.6
  },
  ["".concat(StyledFolder, ":hover > & + ").concat(StyledWrapper, "::after")]: {
    opacity: 0.6
  },
  ["".concat(StyledFolder, ":hover > & > svg")]: {
    opacity: 1
  }
});
const StyledContent = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "100%",
  rowGap: "$rowGap",
  transition: "opacity 250ms ease",
  variants: {
    toggled: {
      true: {
        opacity: 1,
        transitionDelay: "250ms"
      },
      false: {
        opacity: 0,
        transitionDelay: "0ms",
        pointerEvents: "none"
      }
    },
    isRoot: {
      true: {
        "& > div": {
          paddingLeft: "$md",
          paddingRight: "$md"
        },
        "& > div:first-of-type": {
          paddingTop: "$sm"
        },
        "& > div:last-of-type": {
          paddingBottom: "$sm"
        },
        ["> ".concat(StyledFolder, ":not(:first-of-type)")]: {
          paddingTop: "$sm",
          marginTop: "$md",
          borderTop: "$borderWidths$folder solid $colors$elevation1"
        }
      }
    }
  }
});
const StyledRow = styled("div", {
  position: "relative",
  zIndex: 100,
  display: "grid",
  rowGap: "$rowGap",
  gridTemplateRows: "minmax($sizes$rowHeight, max-content)",
  alignItems: "center",
  color: "$highlight2",
  ["".concat(StyledContent, " > &")]: {
    "&:first-of-type": {
      marginTop: "$rowGap"
    },
    "&:last-of-type": {
      marginBottom: "$rowGap"
    }
  },
  variants: {
    disabled: {
      true: {
        pointerEvents: "none"
      },
      false: {
        "&:hover,&:focus-within": {
          color: "$highlight3"
        }
      }
    }
  }
});
const StyledInputRow = styled(StyledRow, {
  gridTemplateColumns: "auto $sizes$controlWidth",
  columnGap: "$colGap"
});
const CopyLabelContainer = styled("div", {
  $flex: "",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  "& > div": {
    marginLeft: "$colGap",
    padding: "0 $xs",
    opacity: 0.4
  },
  "& > div:hover": {
    opacity: 0.8
  },
  "& > div > svg": {
    display: "none",
    cursor: "pointer",
    width: 13,
    minWidth: 13,
    height: 13,
    backgroundColor: "$elevation2"
  },
  "&:hover > div > svg": {
    display: "block"
  },
  variants: {
    align: {
      top: {
        height: "100%",
        alignItems: "flex-start",
        paddingTop: "$sm"
      }
    }
  }
});
const StyledOptionalToggle = styled("input", {
  $reset: "",
  height: 0,
  width: 0,
  opacity: 0,
  margin: 0,
  "& + label": {
    position: "relative",
    $flexCenter: "",
    height: "100%",
    userSelect: "none",
    cursor: "pointer",
    paddingLeft: 2,
    paddingRight: "$sm",
    pointerEvents: "auto"
  },
  "& + label:after": {
    content: '""',
    width: 6,
    height: 6,
    backgroundColor: "$elevation3",
    borderRadius: "50%",
    $activeStyle: ""
  },
  "&:focus + label:after": {
    $focusStyle: ""
  },
  "& + label:active:after": {
    backgroundColor: "$accent1",
    $focusStyle: ""
  },
  "&:checked + label:after": {
    backgroundColor: "$accent1"
  }
});
const StyledLabel = styled("label", {
  fontWeight: "$label",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "& > svg": {
    display: "block"
  }
});
const StyledInputWrapper$1 = styled("div", {
  opacity: 1,
  variants: {
    disabled: {
      true: {
        opacity: 0.6,
        pointerEvents: "none",
        ["& ".concat(StyledLabel)]: {
          pointerEvents: "auto"
        }
      }
    }
  }
});
const Overlay = styled("div", {
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 1e3,
  userSelect: "none"
});
const StyledToolTipContent = styled("div", {
  background: "$toolTipBackground",
  fontFamily: "$sans",
  fontSize: "$toolTip",
  padding: "$xs $sm",
  color: "$toolTipText",
  borderRadius: "$xs",
  boxShadow: "$level2",
  maxWidth: 260
});
const ToolTipArrow = styled($a093c7e1ec25a057$export$21b07c8f274aebd5, {
  fill: "$toolTipBackground"
});
function Portal({
  children
}) {
  const {
    className
  } = reactExports.useContext(ThemeContext);
  return React.createElement($f1701beae083dbae$export$be92b6f5f03c0fe9, {
    className
  }, children);
}
const _excluded$6$1 = ["align"];
function OptionalToggle() {
  const {
    id,
    disable,
    disabled
  } = useInputContext();
  return React.createElement(React.Fragment, null, React.createElement(StyledOptionalToggle, {
    id: id + "__disable",
    type: "checkbox",
    checked: !disabled,
    onChange: () => disable(!disabled)
  }), React.createElement("label", {
    htmlFor: id + "__disable"
  }));
}
function RawLabel(props2) {
  const {
    id,
    optional: optional2,
    hint
  } = useInputContext();
  const htmlFor = props2.htmlFor || (id ? {
    htmlFor: id
  } : null);
  const title = !hint && typeof props2.children === "string" ? {
    title: props2.children
  } : null;
  return React.createElement(React.Fragment, null, optional2 && React.createElement(OptionalToggle, null), hint !== void 0 ? React.createElement($a093c7e1ec25a057$export$be92b6f5f03c0fe9, null, React.createElement($a093c7e1ec25a057$export$41fb9f06171c75f4, {
    asChild: true
  }, React.createElement(StyledLabel, _extends({}, htmlFor, props2))), React.createElement($a093c7e1ec25a057$export$7c6e2c02157bb7d2, {
    side: "top",
    sideOffset: 2
  }, React.createElement(StyledToolTipContent, null, hint, React.createElement(ToolTipArrow, null)))) : React.createElement(StyledLabel, _extends({}, htmlFor, title, props2)));
}
function Label(_ref) {
  let {
    align
  } = _ref, props2 = _objectWithoutProperties$1(_ref, _excluded$6$1);
  const {
    value,
    label,
    key,
    disabled
  } = useInputContext();
  const {
    hideCopyButton
  } = usePanelSettingsContext();
  const copyEnabled = !hideCopyButton && key !== void 0;
  const [copied, setCopied] = reactExports.useState(false);
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify({
        [key]: value !== null && value !== void 0 ? value : ""
      }));
      setCopied(true);
    } catch (_unused) {
      warn(LevaErrors.CLIPBOARD_ERROR, {
        [key]: value
      });
    }
  };
  return React.createElement(CopyLabelContainer, {
    align,
    onPointerLeave: () => setCopied(false)
  }, React.createElement(RawLabel, props2), copyEnabled && !disabled && React.createElement("div", {
    title: "Click to copy ".concat(typeof label === "string" ? label : key, " value")
  }, !copied ? React.createElement("svg", {
    onClick: handleClick,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
  }), React.createElement("path", {
    d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
  })) : React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }))));
}
const _excluded$5$1 = ["toggled"];
const Svg = styled("svg", {
  fill: "currentColor",
  transition: "transform 350ms ease, fill 250ms ease"
});
function Chevron(_ref) {
  let {
    toggled
  } = _ref, props2 = _objectWithoutProperties$1(_ref, _excluded$5$1);
  return React.createElement(Svg, _extends({
    width: "9",
    height: "5",
    viewBox: "0 0 9 5",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      transform: "rotate(".concat(toggled ? 0 : -90, "deg)")
    }
  }, props2), React.createElement("path", {
    d: "M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z"
  }));
}
const _excluded$4$1 = ["input"];
function Row(_ref) {
  let {
    input
  } = _ref, props2 = _objectWithoutProperties$1(_ref, _excluded$4$1);
  if (input) return React.createElement(StyledInputRow, props2);
  return React.createElement(StyledRow, props2);
}
function useInputSetters({
  value,
  type,
  settings,
  setValue: setValue2
}) {
  const [displayValue, setDisplayValue] = reactExports.useState(format$2(type, value, settings));
  const previousValueRef = reactExports.useRef(value);
  const settingsRef = reactExports.useRef(settings);
  settingsRef.current = settings;
  const setFormat = reactExports.useCallback((v2) => setDisplayValue(format$2(type, v2, settingsRef.current)), [type]);
  const onUpdate = reactExports.useCallback((updatedValue) => {
    try {
      setValue2(updatedValue);
    } catch (error) {
      const {
        type: type2,
        previousValue
      } = error;
      if (type2 !== "LEVA_ERROR") throw error;
      setFormat(previousValue);
    }
  }, [setFormat, setValue2]);
  reactExports.useEffect(() => {
    if (!dequal(value, previousValueRef.current)) {
      setFormat(value);
    }
    previousValueRef.current = value;
  }, [value, setFormat]);
  return {
    displayValue,
    onChange: setDisplayValue,
    onUpdate
  };
}
function useDrag(handler, config) {
  const {
    emitOnEditStart,
    emitOnEditEnd
  } = useInputContext();
  return useDrag$1((state) => {
    if (state.first) {
      document.body.classList.add("leva__panel__dragged");
      emitOnEditStart === null || emitOnEditStart === void 0 ? void 0 : emitOnEditStart();
    }
    const result = handler(state);
    if (state.last) {
      document.body.classList.remove("leva__panel__dragged");
      emitOnEditEnd === null || emitOnEditEnd === void 0 ? void 0 : emitOnEditEnd();
    }
    return result;
  }, config);
}
function useCanvas2d(fn) {
  const canvas = reactExports.useRef(null);
  const ctx = reactExports.useRef(null);
  const hasFired = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleCanvas = debounce(() => {
      canvas.current.width = canvas.current.offsetWidth * window.devicePixelRatio;
      canvas.current.height = canvas.current.offsetHeight * window.devicePixelRatio;
      fn(canvas.current, ctx.current);
    }, 250);
    window.addEventListener("resize", handleCanvas);
    if (!hasFired.current) {
      handleCanvas();
      hasFired.current = true;
    }
    return () => window.removeEventListener("resize", handleCanvas);
  }, [fn]);
  reactExports.useEffect(() => {
    ctx.current = canvas.current.getContext("2d");
  }, []);
  return [canvas, ctx];
}
function useTransform() {
  const ref = reactExports.useRef(null);
  const local = reactExports.useRef({
    x: 0,
    y: 0
  });
  const set = reactExports.useCallback((point) => {
    Object.assign(local.current, point);
    if (ref.current) ref.current.style.transform = "translate3d(".concat(local.current.x, "px, ").concat(local.current.y, "px, 0)");
  }, []);
  return [ref, set];
}
const _excluded$3$1 = ["__refCount"];
const getInputAtPath = (data, path) => {
  if (!data[path]) return null;
  const _data$path = data[path], input = _objectWithoutProperties$1(_data$path, _excluded$3$1);
  return input;
};
function useInput(path) {
  const store = useStoreContext();
  const [state, setState] = reactExports.useState(getInputAtPath(store.getData(), path));
  const set = reactExports.useCallback((value) => store.setValueAtPath(path, value, true), [path, store]);
  const setSettings = reactExports.useCallback((settings) => store.setSettingsAtPath(path, settings), [path, store]);
  const disable = reactExports.useCallback((flag) => store.disableInputAtPath(path, flag), [path, store]);
  const emitOnEditStart = reactExports.useCallback(() => store.emitOnEditStart(path), [path, store]);
  const emitOnEditEnd = reactExports.useCallback(() => store.emitOnEditEnd(path), [path, store]);
  reactExports.useEffect(() => {
    setState(getInputAtPath(store.getData(), path));
    const unsub = store.useStore.subscribe((s2) => getInputAtPath(s2.data, path), setState, {
      equalityFn: shallow
    });
    return () => unsub();
  }, [store, path]);
  return [state, {
    set,
    setSettings,
    disable,
    storeId: store.storeId,
    emitOnEditStart,
    emitOnEditEnd
  }];
}
const RangeGrid = styled("div", {
  variants: {
    hasRange: {
      true: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "auto $sizes$numberInputMinWidth",
        columnGap: "$colGap",
        alignItems: "center"
      }
    }
  }
});
const Range = styled("div", {
  position: "relative",
  width: "100%",
  height: 2,
  borderRadius: "$xs",
  backgroundColor: "$elevation1"
});
const Scrubber = styled("div", {
  position: "absolute",
  width: "$scrubberWidth",
  height: "$scrubberHeight",
  borderRadius: "$xs",
  boxShadow: "0 0 0 2px $colors$elevation2",
  backgroundColor: "$accent2",
  cursor: "pointer",
  $active: "none $accent1",
  $hover: "none $accent3",
  variants: {
    position: {
      left: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        transform: "translateX(calc(-0.5 * ($sizes$scrubberWidth + 4px)))"
      },
      right: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        transform: "translateX(calc(0.5 * ($sizes$scrubberWidth + 4px)))"
      }
    }
  }
});
const RangeWrapper = styled("div", {
  position: "relative",
  $flex: "",
  height: "100%",
  cursor: "pointer",
  touchAction: "none"
});
const Indicator = styled("div", {
  position: "absolute",
  height: "100%",
  backgroundColor: "$accent2"
});
function RangeSlider({
  value,
  min: min2,
  max: max2,
  onDrag,
  step,
  initialValue
}) {
  const ref = reactExports.useRef(null);
  const scrubberRef = reactExports.useRef(null);
  const rangeWidth = reactExports.useRef(0);
  const scrubberWidth = useTh("sizes", "scrubberWidth");
  const bind = useDrag(({
    event,
    first,
    xy: [x2],
    movement: [mx],
    memo
  }) => {
    if (first) {
      const {
        width,
        left
      } = ref.current.getBoundingClientRect();
      rangeWidth.current = width - parseFloat(scrubberWidth);
      const targetIsScrub = (event === null || event === void 0 ? void 0 : event.target) === scrubberRef.current;
      memo = targetIsScrub ? value : invertedRange((x2 - left) / width, min2, max2);
    }
    const newValue = memo + invertedRange(mx / rangeWidth.current, 0, max2 - min2);
    onDrag(sanitizeStep$1(newValue, {
      step,
      initialValue
    }));
    return memo;
  });
  const pos = range(value, min2, max2);
  return React.createElement(RangeWrapper, _extends({
    ref
  }, bind()), React.createElement(Range, null, React.createElement(Indicator, {
    style: {
      left: 0,
      right: "".concat((1 - pos) * 100, "%")
    }
  })), React.createElement(Scrubber, {
    ref: scrubberRef,
    style: {
      left: "calc(".concat(pos, " * (100% - ").concat(scrubberWidth, "))")
    }
  }));
}
const DraggableLabel = React.memo(({
  label,
  onUpdate,
  step,
  innerLabelTrim
}) => {
  const [dragging, setDragging] = reactExports.useState(false);
  const bind = useDrag(({
    active,
    delta: [dx],
    event,
    memo: _memo = 0,
    first,
    last,
    target
  }) => {
    if (first) {
      const label2 = target;
      label2.requestPointerLock();
    }
    if (last) {
      document.exitPointerLock();
    }
    setDragging(active);
    _memo += dx / 2;
    if (Math.abs(_memo) >= 1) {
      onUpdate((v2) => parseFloat(v2) + Math.floor(_memo) * step * multiplyStep(event));
      _memo = 0;
    }
    return _memo;
  });
  return React.createElement(InnerNumberLabel, _extends({
    dragging,
    title: label.length > 1 ? label : ""
  }, bind()), label.slice(0, innerLabelTrim));
});
function Number$1({
  label,
  id,
  displayValue,
  onUpdate,
  onChange,
  settings,
  innerLabelTrim = 1
}) {
  const InnerLabel2 = innerLabelTrim > 0 && React.createElement(DraggableLabel, {
    label,
    step: settings.step,
    onUpdate,
    innerLabelTrim
  });
  return React.createElement(NumberInput, {
    id,
    value: String(displayValue),
    onUpdate,
    onChange,
    innerLabel: InnerLabel2
  });
}
function NumberComponent() {
  const props2 = useInputContext();
  const {
    label,
    value,
    onUpdate,
    settings,
    id
  } = props2;
  const {
    min: min2,
    max: max2
  } = settings;
  const hasRange = max2 !== Infinity && min2 !== -Infinity;
  return React.createElement(Row, {
    input: true
  }, React.createElement(Label, null, label), React.createElement(RangeGrid, {
    hasRange
  }, hasRange && React.createElement(RangeSlider, _extends({
    value: parseFloat(value),
    onDrag: onUpdate
  }, settings)), React.createElement(Number$1, _extends({}, props2, {
    id,
    label: "value",
    innerLabelTrim: hasRange ? 0 : 1
  }))));
}
const {
  sanitizeStep
} = props$3, rest = _objectWithoutProperties$1(props$3, ["sanitizeStep"]);
var number$1 = createInternalPlugin(_objectSpread2({
  component: NumberComponent
}, rest));
const schema$2$1 = (_o, s2) => v8n().schema({
  options: v8n().passesAnyOf(v8n().object(), v8n().array())
}).test(s2);
const sanitize$2$1 = (value, {
  values
}) => {
  if (values.indexOf(value) < 0) throw Error("Selected value doesn't match Select options");
  return value;
};
const format$3 = (value, {
  values
}) => {
  return values.indexOf(value);
};
const normalize$1$1 = (input) => {
  let {
    value,
    options
  } = input;
  let keys;
  let values;
  if (Array.isArray(options)) {
    values = options;
    keys = options.map((o2) => String(o2));
  } else {
    values = Object.values(options);
    keys = Object.keys(options);
  }
  if (!("value" in input)) value = values[0];
  else if (!values.includes(value)) {
    keys.unshift(String(value));
    values.unshift(value);
  }
  if (!Object.values(options).includes(value)) options[String(value)] = value;
  return {
    value,
    settings: {
      keys,
      values
    }
  };
};
var props$2$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  schema: schema$2$1,
  sanitize: sanitize$2$1,
  format: format$3,
  normalize: normalize$1$1
});
const SelectContainer = styled("div", {
  $flexCenter: "",
  position: "relative",
  "> svg": {
    pointerEvents: "none",
    position: "absolute",
    right: "$md"
  }
});
const NativeSelect = styled("select", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0
});
const PresentationalSelect = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "$rowHeight",
  backgroundColor: "$elevation3",
  borderRadius: "$sm",
  padding: "0 $sm",
  cursor: "pointer",
  ["".concat(NativeSelect, ":focus + &")]: {
    $focusStyle: ""
  },
  ["".concat(NativeSelect, ":hover + &")]: {
    $hoverStyle: ""
  }
});
function Select({
  displayValue,
  value,
  onUpdate,
  id,
  settings,
  disabled
}) {
  const {
    keys,
    values
  } = settings;
  const lastDisplayedValue = reactExports.useRef();
  if (value === values[displayValue]) {
    lastDisplayedValue.current = keys[displayValue];
  }
  return React.createElement(SelectContainer, null, React.createElement(NativeSelect, {
    id,
    value: displayValue,
    onChange: (e2) => onUpdate(values[Number(e2.currentTarget.value)]),
    disabled
  }, keys.map((key, index2) => React.createElement("option", {
    key,
    value: index2
  }, key))), React.createElement(PresentationalSelect, null, lastDisplayedValue.current), React.createElement(Chevron, {
    toggled: true
  }));
}
function SelectComponent() {
  const {
    label,
    value,
    displayValue,
    onUpdate,
    id,
    disabled,
    settings
  } = useInputContext();
  return React.createElement(Row, {
    input: true
  }, React.createElement(Label, null, label), React.createElement(Select, {
    id,
    value,
    displayValue,
    onUpdate,
    settings,
    disabled
  }));
}
var select = createInternalPlugin(_objectSpread2({
  component: SelectComponent
}, props$2$1));
const schema$1$1 = (o2) => v8n().string().test(o2);
const sanitize$1$1 = (v2) => {
  if (typeof v2 !== "string") throw Error("Invalid string");
  return v2;
};
const normalize$4 = ({
  value,
  editable: _editable = true,
  rows: _rows = false
}) => {
  return {
    value,
    settings: {
      editable: _editable,
      rows: typeof _rows === "number" ? _rows : _rows ? 5 : 0
    }
  };
};
var props$1$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  schema: schema$1$1,
  sanitize: sanitize$1$1,
  normalize: normalize$4
});
const _excluded$2$1 = ["displayValue", "onUpdate", "onChange", "editable"];
const NonEditableString = styled("div", {
  whiteSpace: "pre-wrap"
});
function String$1(_ref) {
  let {
    displayValue,
    onUpdate,
    onChange,
    editable = true
  } = _ref, props2 = _objectWithoutProperties$1(_ref, _excluded$2$1);
  if (editable) return React.createElement(ValueInput, _extends({
    value: displayValue,
    onUpdate,
    onChange
  }, props2));
  return React.createElement(NonEditableString, null, displayValue);
}
function StringComponent() {
  const {
    label,
    settings,
    displayValue,
    onUpdate,
    onChange
  } = useInputContext();
  return React.createElement(Row, {
    input: true
  }, React.createElement(Label, null, label), React.createElement(String$1, _extends({
    displayValue,
    onUpdate,
    onChange
  }, settings)));
}
var string = createInternalPlugin(_objectSpread2({
  component: StringComponent
}, props$1$1));
const schema$4 = (o2) => v8n().boolean().test(o2);
const sanitize$5 = (v2) => {
  if (typeof v2 !== "boolean") throw Error("Invalid boolean");
  return v2;
};
var props$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  schema: schema$4,
  sanitize: sanitize$5
});
const StyledInputWrapper = styled("div", {
  position: "relative",
  $flex: "",
  height: "$rowHeight",
  input: {
    $reset: "",
    height: 0,
    width: 0,
    opacity: 0,
    margin: 0
  },
  label: {
    position: "relative",
    $flexCenter: "",
    userSelect: "none",
    cursor: "pointer",
    height: "$checkboxSize",
    width: "$checkboxSize",
    backgroundColor: "$elevation3",
    borderRadius: "$sm",
    $hover: ""
  },
  "input:focus + label": {
    $focusStyle: ""
  },
  "input:focus:checked + label, input:checked + label:hover": {
    $hoverStyle: "$accent3"
  },
  "input + label:active": {
    backgroundColor: "$accent1"
  },
  "input:checked + label:active": {
    backgroundColor: "$accent1"
  },
  "label > svg": {
    display: "none",
    width: "90%",
    height: "90%",
    stroke: "$highlight3"
  },
  "input:checked + label": {
    backgroundColor: "$accent2"
  },
  "input:checked + label > svg": {
    display: "block"
  }
});
function Boolean$1({
  value,
  onUpdate,
  id,
  disabled
}) {
  return React.createElement(StyledInputWrapper, null, React.createElement("input", {
    id,
    type: "checkbox",
    checked: value,
    onChange: (e2) => onUpdate(e2.currentTarget.checked),
    disabled
  }), React.createElement("label", {
    htmlFor: id
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 13l4 4L19 7"
  }))));
}
function BooleanComponent() {
  const {
    label,
    value,
    onUpdate,
    disabled,
    id
  } = useInputContext();
  return React.createElement(Row, {
    input: true
  }, React.createElement(Label, null, label), React.createElement(Boolean$1, {
    value,
    onUpdate,
    id,
    disabled
  }));
}
var boolean = createInternalPlugin(_objectSpread2({
  component: BooleanComponent
}, props$4));
const _excluded$1$1 = ["locked"];
function Coordinate({
  value,
  id,
  valueKey,
  settings,
  onUpdate,
  innerLabelTrim
}) {
  const valueRef = reactExports.useRef(value[valueKey]);
  valueRef.current = value[valueKey];
  const setValue2 = reactExports.useCallback((newValue) => onUpdate({
    [valueKey]: sanitizeValue({
      type: "NUMBER",
      value: valueRef.current,
      settings
    }, newValue)
  }), [onUpdate, settings, valueKey]);
  const number2 = useInputSetters({
    type: "NUMBER",
    value: value[valueKey],
    settings,
    setValue: setValue2
  });
  return React.createElement(Number$1, {
    id,
    label: valueKey,
    value: value[valueKey],
    displayValue: number2.displayValue,
    onUpdate: number2.onUpdate,
    onChange: number2.onChange,
    settings,
    innerLabelTrim
  });
}
const Container$2 = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  gridAutoFlow: "column dense",
  alignItems: "center",
  variants: {
    withLock: {
      true: {
        gridTemplateColumns: "10px auto",
        "> svg": {
          cursor: "pointer"
        }
      }
    }
  }
});
function Lock(_ref) {
  let {
    locked
  } = _ref, props2 = _objectWithoutProperties$1(_ref, _excluded$1$1);
  return React.createElement("svg", _extends({
    width: "10",
    height: "10",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props2), locked ? React.createElement("path", {
    d: "M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }) : React.createElement("path", {
    d: "M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}
function Vector({
  value,
  onUpdate,
  settings,
  innerLabelTrim
}) {
  const {
    id,
    setSettings
  } = useInputContext();
  const {
    lock,
    locked
  } = settings;
  return React.createElement(Container$2, {
    withLock: lock
  }, lock && React.createElement(Lock, {
    locked,
    onClick: () => setSettings({
      locked: !locked
    })
  }), Object.keys(value).map((key, i2) => React.createElement(Coordinate, {
    id: i2 === 0 ? id : "".concat(id, ".").concat(key),
    key,
    valueKey: key,
    value,
    settings: settings[key],
    onUpdate,
    innerLabelTrim
  })));
}
const normalizeKeyedNumberSettings = (value, settings) => {
  const _settings = {};
  let maxStep = 0;
  let minPad = Infinity;
  Object.entries(value).forEach(([key, v2]) => {
    _settings[key] = normalize$2$1(_objectSpread2({
      value: v2
    }, settings[key])).settings;
    maxStep = Math.max(maxStep, _settings[key].step);
    minPad = Math.min(minPad, _settings[key].pad);
  });
  for (let key in _settings) {
    const {
      step,
      min: min2,
      max: max2
    } = settings[key] || {};
    if (!isFinite(step) && (!isFinite(min2) || !isFinite(max2))) {
      _settings[key].step = maxStep;
      _settings[key].pad = minPad;
    }
  }
  return _settings;
};
const _excluded$b = ["lock"], _excluded2$5 = ["value"];
function getVectorSchema(dimension) {
  const isVectorArray = v8n().array().length(dimension).every.number();
  const isVectorObject = (o2) => {
    if (!o2 || typeof o2 !== "object") return false;
    const values = Object.values(o2);
    return values.length === dimension && values.every((v2) => isFinite(v2));
  };
  return (o2) => {
    return isVectorArray.test(o2) || isVectorObject(o2);
  };
}
function getVectorType(value) {
  return Array.isArray(value) ? "array" : "object";
}
function convert$1(value, format2, keys) {
  if (getVectorType(value) === format2) return value;
  return format2 === "array" ? Object.values(value) : mapArrayToKeys(value, keys);
}
const sanitizeVector = (value, settings, previousValue) => {
  const _value = convert$1(value, "object", settings.keys);
  for (let key in _value) _value[key] = sanitize$3(_value[key], settings[key]);
  const _valueKeys = Object.keys(_value);
  let newValue = {};
  if (_valueKeys.length === settings.keys.length) newValue = _value;
  else {
    const _previousValue = convert$1(previousValue, "object", settings.keys);
    if (_valueKeys.length === 1 && settings.locked) {
      const lockedKey = _valueKeys[0];
      const lockedCoordinate = _value[lockedKey];
      const previousLockedCoordinate = _previousValue[lockedKey];
      const ratio = previousLockedCoordinate !== 0 ? lockedCoordinate / previousLockedCoordinate : 1;
      for (let key in _previousValue) {
        if (key === lockedKey) newValue[lockedKey] = lockedCoordinate;
        else newValue[key] = _previousValue[key] * ratio;
      }
    } else {
      newValue = _objectSpread2(_objectSpread2({}, _previousValue), _value);
    }
  }
  return convert$1(newValue, settings.format, settings.keys);
};
const formatVector = (value, settings) => convert$1(value, "object", settings.keys);
const isNumberSettings = (o2) => !!o2 && ("step" in o2 || "min" in o2 || "max" in o2);
function normalizeVector(value, settings, defaultKeys = []) {
  const {
    lock = false
  } = settings, _settings = _objectWithoutProperties$1(settings, _excluded$b);
  const format2 = Array.isArray(value) ? "array" : "object";
  const keys = format2 === "object" ? Object.keys(value) : defaultKeys;
  const _value = convert$1(value, "object", keys);
  const mergedSettings = isNumberSettings(_settings) ? keys.reduce((acc, k2) => Object.assign(acc, {
    [k2]: _settings
  }), {}) : _settings;
  const numberSettings = normalizeKeyedNumberSettings(_value, mergedSettings);
  return {
    value: format2 === "array" ? value : _value,
    settings: _objectSpread2(_objectSpread2({}, numberSettings), {}, {
      format: format2,
      keys,
      lock,
      locked: false
    })
  };
}
function getVectorPlugin(defaultKeys) {
  return {
    schema: getVectorSchema(defaultKeys.length),
    normalize: (_ref) => {
      let {
        value
      } = _ref, settings = _objectWithoutProperties$1(_ref, _excluded2$5);
      return normalizeVector(value, settings, defaultKeys);
    },
    format: (value, settings) => formatVector(value, settings),
    sanitize: (value, settings, prevValue) => sanitizeVector(value, settings, prevValue)
  };
}
var r = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, t = function(r2) {
  return "string" == typeof r2 ? r2.length > 0 : "number" == typeof r2;
}, n = function(r2, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = Math.pow(10, t2)), Math.round(n2 * r2) / n2 + 0;
}, e = function(r2, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 1), r2 > n2 ? n2 : r2 > t2 ? r2 : t2;
}, u$1 = function(r2) {
  return (r2 = isFinite(r2) ? r2 % 360 : 0) > 0 ? r2 : r2 + 360;
}, a = function(r2) {
  return { r: e(r2.r, 0, 255), g: e(r2.g, 0, 255), b: e(r2.b, 0, 255), a: e(r2.a) };
}, o = function(r2) {
  return { r: n(r2.r), g: n(r2.g), b: n(r2.b), a: n(r2.a, 3) };
}, i$1 = /^#([0-9a-f]{3,8})$/i, s$1 = function(r2) {
  var t2 = r2.toString(16);
  return t2.length < 2 ? "0" + t2 : t2;
}, h$2 = function(r2) {
  var t2 = r2.r, n2 = r2.g, e2 = r2.b, u2 = r2.a, a2 = Math.max(t2, n2, e2), o2 = a2 - Math.min(t2, n2, e2), i2 = o2 ? a2 === t2 ? (n2 - e2) / o2 : a2 === n2 ? 2 + (e2 - t2) / o2 : 4 + (t2 - n2) / o2 : 0;
  return { h: 60 * (i2 < 0 ? i2 + 6 : i2), s: a2 ? o2 / a2 * 100 : 0, v: a2 / 255 * 100, a: u2 };
}, b$2 = function(r2) {
  var t2 = r2.h, n2 = r2.s, e2 = r2.v, u2 = r2.a;
  t2 = t2 / 360 * 6, n2 /= 100, e2 /= 100;
  var a2 = Math.floor(t2), o2 = e2 * (1 - n2), i2 = e2 * (1 - (t2 - a2) * n2), s2 = e2 * (1 - (1 - t2 + a2) * n2), h2 = a2 % 6;
  return { r: 255 * [e2, i2, o2, o2, s2, e2][h2], g: 255 * [s2, e2, e2, i2, o2, o2][h2], b: 255 * [o2, o2, s2, e2, e2, i2][h2], a: u2 };
}, g$1 = function(r2) {
  return { h: u$1(r2.h), s: e(r2.s, 0, 100), l: e(r2.l, 0, 100), a: e(r2.a) };
}, d$1 = function(r2) {
  return { h: n(r2.h), s: n(r2.s), l: n(r2.l), a: n(r2.a, 3) };
}, f$1 = function(r2) {
  return b$2((n2 = (t2 = r2).s, { h: t2.h, s: (n2 *= ((e2 = t2.l) < 50 ? e2 : 100 - e2) / 100) > 0 ? 2 * n2 / (e2 + n2) * 100 : 0, v: e2 + n2, a: t2.a }));
  var t2, n2, e2;
}, c$1 = function(r2) {
  return { h: (t2 = h$2(r2)).h, s: (u2 = (200 - (n2 = t2.s)) * (e2 = t2.v) / 100) > 0 && u2 < 200 ? n2 * e2 / 100 / (u2 <= 100 ? u2 : 200 - u2) * 100 : 0, l: u2 / 2, a: t2.a };
  var t2, n2, e2, u2;
}, l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, p$1 = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, v$1 = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, m$1 = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, y$2 = { string: [[function(r2) {
  var t2 = i$1.exec(r2);
  return t2 ? (r2 = t2[1]).length <= 4 ? { r: parseInt(r2[0] + r2[0], 16), g: parseInt(r2[1] + r2[1], 16), b: parseInt(r2[2] + r2[2], 16), a: 4 === r2.length ? n(parseInt(r2[3] + r2[3], 16) / 255, 2) : 1 } : 6 === r2.length || 8 === r2.length ? { r: parseInt(r2.substr(0, 2), 16), g: parseInt(r2.substr(2, 2), 16), b: parseInt(r2.substr(4, 2), 16), a: 8 === r2.length ? n(parseInt(r2.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r2) {
  var t2 = v$1.exec(r2) || m$1.exec(r2);
  return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : a({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: void 0 === t2[7] ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t2) {
  var n2 = l.exec(t2) || p$1.exec(t2);
  if (!n2) return null;
  var e2, u2, a2 = g$1({ h: (e2 = n2[1], u2 = n2[2], void 0 === u2 && (u2 = "deg"), Number(e2) * (r[u2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: void 0 === n2[5] ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
  return f$1(a2);
}, "hsl"]], object: [[function(r2) {
  var n2 = r2.r, e2 = r2.g, u2 = r2.b, o2 = r2.a, i2 = void 0 === o2 ? 1 : o2;
  return t(n2) && t(e2) && t(u2) ? a({ r: Number(n2), g: Number(e2), b: Number(u2), a: Number(i2) }) : null;
}, "rgb"], [function(r2) {
  var n2 = r2.h, e2 = r2.s, u2 = r2.l, a2 = r2.a, o2 = void 0 === a2 ? 1 : a2;
  if (!t(n2) || !t(e2) || !t(u2)) return null;
  var i2 = g$1({ h: Number(n2), s: Number(e2), l: Number(u2), a: Number(o2) });
  return f$1(i2);
}, "hsl"], [function(r2) {
  var n2 = r2.h, a2 = r2.s, o2 = r2.v, i2 = r2.a, s2 = void 0 === i2 ? 1 : i2;
  if (!t(n2) || !t(a2) || !t(o2)) return null;
  var h2 = (function(r3) {
    return { h: u$1(r3.h), s: e(r3.s, 0, 100), v: e(r3.v, 0, 100), a: e(r3.a) };
  })({ h: Number(n2), s: Number(a2), v: Number(o2), a: Number(s2) });
  return b$2(h2);
}, "hsv"]] }, N$1 = function(r2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var e2 = t2[n2][0](r2);
    if (e2) return [e2, t2[n2][1]];
  }
  return [null, void 0];
}, x$1 = function(r2) {
  return "string" == typeof r2 ? N$1(r2.trim(), y$2.string) : "object" == typeof r2 && null !== r2 ? N$1(r2, y$2.object) : [null, void 0];
}, I$1 = function(r2) {
  return x$1(r2)[1];
}, M$1 = function(r2, t2) {
  var n2 = c$1(r2);
  return { h: n2.h, s: e(n2.s + 100 * t2, 0, 100), l: n2.l, a: n2.a };
}, H$1 = function(r2) {
  return (299 * r2.r + 587 * r2.g + 114 * r2.b) / 1e3 / 255;
}, $$2 = function(r2, t2) {
  var n2 = c$1(r2);
  return { h: n2.h, s: n2.s, l: e(n2.l + 100 * t2, 0, 100), a: n2.a };
}, j = (function() {
  function r2(r3) {
    this.parsed = x$1(r3)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r2.prototype.isValid = function() {
    return null !== this.parsed;
  }, r2.prototype.brightness = function() {
    return n(H$1(this.rgba), 2);
  }, r2.prototype.isDark = function() {
    return H$1(this.rgba) < 0.5;
  }, r2.prototype.isLight = function() {
    return H$1(this.rgba) >= 0.5;
  }, r2.prototype.toHex = function() {
    return r3 = o(this.rgba), t2 = r3.r, e2 = r3.g, u2 = r3.b, i2 = (a2 = r3.a) < 1 ? s$1(n(255 * a2)) : "", "#" + s$1(t2) + s$1(e2) + s$1(u2) + i2;
    var r3, t2, e2, u2, a2, i2;
  }, r2.prototype.toRgb = function() {
    return o(this.rgba);
  }, r2.prototype.toRgbString = function() {
    return r3 = o(this.rgba), t2 = r3.r, n2 = r3.g, e2 = r3.b, (u2 = r3.a) < 1 ? "rgba(" + t2 + ", " + n2 + ", " + e2 + ", " + u2 + ")" : "rgb(" + t2 + ", " + n2 + ", " + e2 + ")";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsl = function() {
    return d$1(c$1(this.rgba));
  }, r2.prototype.toHslString = function() {
    return r3 = d$1(c$1(this.rgba)), t2 = r3.h, n2 = r3.s, e2 = r3.l, (u2 = r3.a) < 1 ? "hsla(" + t2 + ", " + n2 + "%, " + e2 + "%, " + u2 + ")" : "hsl(" + t2 + ", " + n2 + "%, " + e2 + "%)";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsv = function() {
    return r3 = h$2(this.rgba), { h: n(r3.h), s: n(r3.s), v: n(r3.v), a: n(r3.a, 3) };
    var r3;
  }, r2.prototype.invert = function() {
    return w$1({ r: 255 - (r3 = this.rgba).r, g: 255 - r3.g, b: 255 - r3.b, a: r3.a });
    var r3;
  }, r2.prototype.saturate = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w$1(M$1(this.rgba, r3));
  }, r2.prototype.desaturate = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w$1(M$1(this.rgba, -r3));
  }, r2.prototype.grayscale = function() {
    return w$1(M$1(this.rgba, -1));
  }, r2.prototype.lighten = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w$1($$2(this.rgba, r3));
  }, r2.prototype.darken = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w$1($$2(this.rgba, -r3));
  }, r2.prototype.rotate = function(r3) {
    return void 0 === r3 && (r3 = 15), this.hue(this.hue() + r3);
  }, r2.prototype.alpha = function(r3) {
    return "number" == typeof r3 ? w$1({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: r3 }) : n(this.rgba.a, 3);
    var t2;
  }, r2.prototype.hue = function(r3) {
    var t2 = c$1(this.rgba);
    return "number" == typeof r3 ? w$1({ h: r3, s: t2.s, l: t2.l, a: t2.a }) : n(t2.h);
  }, r2.prototype.isEqual = function(r3) {
    return this.toHex() === w$1(r3).toHex();
  }, r2;
})(), w$1 = function(r2) {
  return r2 instanceof j ? r2 : new j(r2);
}, S$2 = [], k$2 = function(r2) {
  r2.forEach(function(r3) {
    S$2.indexOf(r3) < 0 && (r3(j, y$2), S$2.push(r3));
  });
};
function namesPlugin(e2, f2) {
  var a2 = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, r2 = {};
  for (var d2 in a2) r2[a2[d2]] = d2;
  var l2 = {};
  e2.prototype.toName = function(f3) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
    var d3, i2, n2 = r2[this.toHex()];
    if (n2) return n2;
    if (null == f3 ? void 0 : f3.closest) {
      var o2 = this.toRgb(), t2 = 1 / 0, b2 = "black";
      if (!l2.length) for (var c2 in a2) l2[c2] = new e2(a2[c2]).toRgb();
      for (var g2 in a2) {
        var u2 = (d3 = o2, i2 = l2[g2], Math.pow(d3.r - i2.r, 2) + Math.pow(d3.g - i2.g, 2) + Math.pow(d3.b - i2.b, 2));
        u2 < t2 && (t2 = u2, b2 = g2);
      }
      return b2;
    }
  };
  f2.string.push([function(f3) {
    var r3 = f3.toLowerCase(), d3 = "transparent" === r3 ? "#0000" : a2[r3];
    return d3 ? new e2(d3).toRgb() : null;
  }, "name"]);
}
function u() {
  return (u = Object.assign || function(e2) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t2 = arguments[r2];
      for (var n2 in t2) Object.prototype.hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
    }
    return e2;
  }).apply(this, arguments);
}
function c(e2, r2) {
  if (null == e2) return {};
  var t2, n2, o2 = {}, a2 = Object.keys(e2);
  for (n2 = 0; n2 < a2.length; n2++) r2.indexOf(t2 = a2[n2]) >= 0 || (o2[t2] = e2[t2]);
  return o2;
}
function i(e2) {
  var t2 = reactExports.useRef(e2), n2 = reactExports.useRef(function(e3) {
    t2.current && t2.current(e3);
  });
  return t2.current = e2, n2.current;
}
var s = function(e2, r2, t2) {
  return void 0 === r2 && (r2 = 0), void 0 === t2 && (t2 = 1), e2 > t2 ? t2 : e2 < r2 ? r2 : e2;
}, f = function(e2) {
  return "touches" in e2;
}, v = function(e2) {
  return e2 && e2.ownerDocument.defaultView || self;
}, d = function(e2, r2, t2) {
  var n2 = e2.getBoundingClientRect(), o2 = f(r2) ? (function(e3, r3) {
    for (var t3 = 0; t3 < e3.length; t3++) if (e3[t3].identifier === r3) return e3[t3];
    return e3[0];
  })(r2.touches, t2) : r2;
  return { left: s((o2.pageX - (n2.left + v(e2).pageXOffset)) / n2.width), top: s((o2.pageY - (n2.top + v(e2).pageYOffset)) / n2.height) };
}, h$1 = function(e2) {
  !f(e2) && e2.preventDefault();
}, m = React.memo(function(o2) {
  var a2 = o2.onMove, l2 = o2.onKey, s2 = c(o2, ["onMove", "onKey"]), m2 = reactExports.useRef(null), g2 = i(a2), p2 = i(l2), b2 = reactExports.useRef(null), _2 = reactExports.useRef(false), x2 = reactExports.useMemo(function() {
    var e2 = function(e3) {
      h$1(e3), (f(e3) ? e3.touches.length > 0 : e3.buttons > 0) && m2.current ? g2(d(m2.current, e3, b2.current)) : t2(false);
    }, r2 = function() {
      return t2(false);
    };
    function t2(t3) {
      var n2 = _2.current, o3 = v(m2.current), a3 = t3 ? o3.addEventListener : o3.removeEventListener;
      a3(n2 ? "touchmove" : "mousemove", e2), a3(n2 ? "touchend" : "mouseup", r2);
    }
    return [function(e3) {
      var r3 = e3.nativeEvent, n2 = m2.current;
      if (n2 && (h$1(r3), !(function(e4, r4) {
        return r4 && !f(e4);
      })(r3, _2.current) && n2)) {
        if (f(r3)) {
          _2.current = true;
          var o3 = r3.changedTouches || [];
          o3.length && (b2.current = o3[0].identifier);
        }
        n2.focus(), g2(d(n2, r3, b2.current)), t2(true);
      }
    }, function(e3) {
      var r3 = e3.which || e3.keyCode;
      r3 < 37 || r3 > 40 || (e3.preventDefault(), p2({ left: 39 === r3 ? 0.05 : 37 === r3 ? -0.05 : 0, top: 40 === r3 ? 0.05 : 38 === r3 ? -0.05 : 0 }));
    }, t2];
  }, [p2, g2]), C2 = x2[0], E2 = x2[1], H2 = x2[2];
  return reactExports.useEffect(function() {
    return H2;
  }, [H2]), React.createElement("div", u({}, s2, { onTouchStart: C2, onMouseDown: C2, className: "react-colorful__interactive", ref: m2, onKeyDown: E2, tabIndex: 0, role: "slider" }));
}), g = function(e2) {
  return e2.filter(Boolean).join(" ");
}, p = function(r2) {
  var t2 = r2.color, n2 = r2.left, o2 = r2.top, a2 = void 0 === o2 ? 0.5 : o2, l2 = g(["react-colorful__pointer", r2.className]);
  return React.createElement("div", { className: l2, style: { top: 100 * a2 + "%", left: 100 * n2 + "%" } }, React.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t2 } }));
}, b$1 = function(e2, r2, t2) {
  return void 0 === r2 && (r2 = 0), void 0 === t2 && (t2 = Math.pow(10, r2)), Math.round(t2 * e2) / t2;
}, y$1 = function(e2) {
  var r2 = e2.s, t2 = e2.v, n2 = e2.a, o2 = (200 - r2) * t2 / 100;
  return { h: b$1(e2.h), s: b$1(o2 > 0 && o2 < 200 ? r2 * t2 / 100 / (o2 <= 100 ? o2 : 200 - o2) * 100 : 0), l: b$1(o2 / 2), a: b$1(n2, 2) };
}, q$1 = function(e2) {
  var r2 = y$1(e2);
  return "hsl(" + r2.h + ", " + r2.s + "%, " + r2.l + "%)";
}, k$1 = function(e2) {
  var r2 = y$1(e2);
  return "hsla(" + r2.h + ", " + r2.s + "%, " + r2.l + "%, " + r2.a + ")";
}, I = function(e2) {
  var r2 = e2.h, t2 = e2.s, n2 = e2.v, o2 = e2.a;
  r2 = r2 / 360 * 6, t2 /= 100, n2 /= 100;
  var a2 = Math.floor(r2), l2 = n2 * (1 - t2), u2 = n2 * (1 - (r2 - a2) * t2), c2 = n2 * (1 - (1 - r2 + a2) * t2), i2 = a2 % 6;
  return { r: b$1(255 * [n2, u2, l2, l2, c2, n2][i2]), g: b$1(255 * [c2, n2, n2, u2, l2, l2][i2]), b: b$1(255 * [l2, l2, c2, n2, n2, u2][i2]), a: b$1(o2, 2) };
}, L$1 = function(e2) {
  var r2 = e2.r, t2 = e2.g, n2 = e2.b, o2 = e2.a, a2 = Math.max(r2, t2, n2), l2 = a2 - Math.min(r2, t2, n2), u2 = l2 ? a2 === r2 ? (t2 - n2) / l2 : a2 === t2 ? 2 + (n2 - r2) / l2 : 4 + (r2 - t2) / l2 : 0;
  return { h: b$1(60 * (u2 < 0 ? u2 + 6 : u2)), s: b$1(a2 ? l2 / a2 * 100 : 0), v: b$1(a2 / 255 * 100), a: o2 };
}, S$1 = React.memo(function(r2) {
  var t2 = r2.hue, n2 = r2.onChange, o2 = g(["react-colorful__hue", r2.className]);
  return React.createElement("div", { className: o2 }, React.createElement(m, { onMove: function(e2) {
    n2({ h: 360 * e2.left });
  }, onKey: function(e2) {
    n2({ h: s(t2 + 360 * e2.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": b$1(t2), "aria-valuemax": "360", "aria-valuemin": "0" }, React.createElement(p, { className: "react-colorful__hue-pointer", left: t2 / 360, color: q$1({ h: t2, s: 100, v: 100, a: 1 }) })));
}), T$1 = React.memo(function(r2) {
  var t2 = r2.hsva, n2 = r2.onChange, o2 = { backgroundColor: q$1({ h: t2.h, s: 100, v: 100, a: 1 }) };
  return React.createElement("div", { className: "react-colorful__saturation", style: o2 }, React.createElement(m, { onMove: function(e2) {
    n2({ s: 100 * e2.left, v: 100 - 100 * e2.top });
  }, onKey: function(e2) {
    n2({ s: s(t2.s + 100 * e2.left, 0, 100), v: s(t2.v - 100 * e2.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + b$1(t2.s) + "%, Brightness " + b$1(t2.v) + "%" }, React.createElement(p, { className: "react-colorful__saturation-pointer", top: 1 - t2.v / 100, left: t2.s / 100, color: q$1(t2) })));
}), F = function(e2, r2) {
  if (e2 === r2) return true;
  for (var t2 in e2) if (e2[t2] !== r2[t2]) return false;
  return true;
};
function Y(e2, t2, l2) {
  var u2 = i(l2), c2 = reactExports.useState(function() {
    return e2.toHsva(t2);
  }), s2 = c2[0], f2 = c2[1], v2 = reactExports.useRef({ color: t2, hsva: s2 });
  reactExports.useEffect(function() {
    if (!e2.equal(t2, v2.current.color)) {
      var r2 = e2.toHsva(t2);
      v2.current = { hsva: r2, color: t2 }, f2(r2);
    }
  }, [t2, e2]), reactExports.useEffect(function() {
    var r2;
    F(s2, v2.current.hsva) || e2.equal(r2 = e2.fromHsva(s2), v2.current.color) || (v2.current = { hsva: s2, color: r2 }, u2(r2));
  }, [s2, e2, u2]);
  var d2 = reactExports.useCallback(function(e3) {
    f2(function(r2) {
      return Object.assign({}, r2, e3);
    });
  }, []);
  return [s2, d2];
}
var V = "undefined" != typeof window ? reactExports.useLayoutEffect : reactExports.useEffect, $$1 = function() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}, J = /* @__PURE__ */ new Map(), Q = function(e2) {
  V(function() {
    var r2 = e2.current ? e2.current.ownerDocument : document;
    if (void 0 !== r2 && !J.has(r2)) {
      var t2 = r2.createElement("style");
      t2.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', J.set(r2, t2);
      var n2 = $$1();
      n2 && t2.setAttribute("nonce", n2), r2.head.appendChild(t2);
    }
  }, []);
}, U = function(t2) {
  var n2 = t2.className, o2 = t2.colorModel, a2 = t2.color, l2 = void 0 === a2 ? o2.defaultColor : a2, i2 = t2.onChange, s2 = c(t2, ["className", "colorModel", "color", "onChange"]), f2 = reactExports.useRef(null);
  Q(f2);
  var v2 = Y(o2, l2, i2), d2 = v2[0], h2 = v2[1], m2 = g(["react-colorful", n2]);
  return React.createElement("div", u({}, s2, { ref: f2, className: m2 }), React.createElement(T$1, { hsva: d2, onChange: h2 }), React.createElement(S$1, { hue: d2.h, onChange: h2, className: "react-colorful__last-control" }));
}, ee = function(r2) {
  var t2 = r2.className, n2 = r2.hsva, o2 = r2.onChange, a2 = { backgroundImage: "linear-gradient(90deg, " + k$1(Object.assign({}, n2, { a: 0 })) + ", " + k$1(Object.assign({}, n2, { a: 1 })) + ")" }, l2 = g(["react-colorful__alpha", t2]), u2 = b$1(100 * n2.a);
  return React.createElement("div", { className: l2 }, React.createElement("div", { className: "react-colorful__alpha-gradient", style: a2 }), React.createElement(m, { onMove: function(e2) {
    o2({ a: e2.left });
  }, onKey: function(e2) {
    o2({ a: s(n2.a + e2.left) });
  }, "aria-label": "Alpha", "aria-valuetext": u2 + "%", "aria-valuenow": u2, "aria-valuemin": "0", "aria-valuemax": "100" }, React.createElement(p, { className: "react-colorful__alpha-pointer", left: n2.a, color: k$1(n2) })));
}, re = function(t2) {
  var n2 = t2.className, o2 = t2.colorModel, a2 = t2.color, l2 = void 0 === a2 ? o2.defaultColor : a2, i2 = t2.onChange, s2 = c(t2, ["className", "colorModel", "color", "onChange"]), f2 = reactExports.useRef(null);
  Q(f2);
  var v2 = Y(o2, l2, i2), d2 = v2[0], h2 = v2[1], m2 = g(["react-colorful", n2]);
  return React.createElement("div", u({}, s2, { ref: f2, className: m2 }), React.createElement(T$1, { hsva: d2, onChange: h2 }), React.createElement(S$1, { hue: d2.h, onChange: h2 }), React.createElement(ee, { hsva: d2, onChange: h2, className: "react-colorful__last-control" }));
}, xe = { defaultColor: { r: 0, g: 0, b: 0, a: 1 }, toHsva: L$1, fromHsva: I, equal: F }, Ce = function(r2) {
  return React.createElement(re, u({}, r2, { colorModel: xe }));
}, Me = { defaultColor: { r: 0, g: 0, b: 0 }, toHsva: function(e2) {
  return L$1({ r: e2.r, g: e2.g, b: e2.b, a: 1 });
}, fromHsva: function(e2) {
  return { r: (r2 = I(e2)).r, g: r2.g, b: r2.b };
  var r2;
}, equal: F }, Ne = function(r2) {
  return React.createElement(U, u({}, r2, { colorModel: Me }));
};
var propTypes = { exports: {} };
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function() {
    function shim(props2, propName, componentName, location2, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}
var hasRequiredPropTypes;
function requirePropTypes() {
  if (hasRequiredPropTypes) return propTypes.exports;
  hasRequiredPropTypes = 1;
  {
    propTypes.exports = /* @__PURE__ */ requireFactoryWithThrowingShims()();
  }
  return propTypes.exports;
}
var propTypesExports = /* @__PURE__ */ requirePropTypes();
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g2.next = verb(0), g2["throw"] = verb(1), g2["return"] = verb(2), typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2) try {
      if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
      if (y2 = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _2.label++;
          return { value: op[1], done: false };
        case 5:
          _2.label++;
          y2 = op[1];
          op = [0];
          continue;
        case 7:
          op = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t2[1]) {
            _2.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _2.label < t2[2]) {
            _2.label = t2[2];
            _2.ops.push(op);
            break;
          }
          if (t2[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e2) {
      op = [6, e2];
      y2 = 0;
    } finally {
      f2 = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __read(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2) return o2;
  var i2 = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i2["return"])) m2.call(i2);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
    ar = ar.concat(__read(arguments[i2]));
  return ar;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function toFileWithPath(file, path) {
  var f2 = withMimeType(file);
  if (typeof f2.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f2, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f2;
}
function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}
var FILES_TO_IGNORE = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      if (isObject(evt) && isDataTransfer(evt)) {
        return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
      } else if (isChangeEvt(evt)) {
        return [2, getInputFiles(evt)];
      } else if (Array.isArray(evt) && evt.every(function(item) {
        return "getFile" in item && typeof item.getFile === "function";
      })) {
        return [2, getFsHandleFiles(evt)];
      }
      return [2, []];
    });
  });
}
function isDataTransfer(value) {
  return isObject(value.dataTransfer);
}
function isChangeEvt(value) {
  return isObject(value) && isObject(value.target);
}
function isObject(v2) {
  return typeof v2 === "object" && v2 !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map(function(file) {
    return toFileWithPath(file);
  });
}
function getFsHandleFiles(handles) {
  return __awaiter(this, void 0, void 0, function() {
    var files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, Promise.all(handles.map(function(h2) {
            return h2.getFile();
          }))];
        case 1:
          files = _a.sent();
          return [2, files.map(function(file) {
            return toFileWithPath(file);
          })];
      }
    });
  });
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (dt === null) {
            return [2, []];
          }
          if (!dt.items) return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  if (items === null) {
    return [];
  }
  var files = [];
  for (var i2 = 0; i2 < items.length; i2++) {
    var file = items[i2];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject(item + " is not a File");
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch) {
        return __awaiter(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length) return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}
var es = {};
var hasRequiredEs;
function requireEs() {
  if (hasRequiredEs) return es;
  hasRequiredEs = 1;
  es.__esModule = true;
  es.default = function(file, acceptedFiles) {
    if (file && acceptedFiles) {
      var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
      if (acceptedFilesArray.length === 0) {
        return true;
      }
      var fileName = file.name || "";
      var mimeType = (file.type || "").toLowerCase();
      var baseMimeType = mimeType.replace(/\/.*$/, "");
      return acceptedFilesArray.some(function(type) {
        var validType = type.trim().toLowerCase();
        if (validType.charAt(0) === ".") {
          return fileName.toLowerCase().endsWith(validType);
        } else if (validType.endsWith("/*")) {
          return baseMimeType === validType.replace(/\/.*$/, "");
        }
        return mimeType === validType;
      });
    }
    return true;
  };
  return es;
}
var esExports = requireEs();
const accepts = /* @__PURE__ */ getDefaultExportFromCjs(esExports);
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$1(arr, i2) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i2) || _unsupportedIterableToArray$1(arr, i2) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray$1(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$1(o2, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || accepts(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function allFilesAccepted(_ref) {
  var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles;
  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }
  return files.every(function(file) {
    var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1), accepted = _fileAccepted2[0];
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
    return accepted && sizeMatch;
  });
}
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  return Array.prototype.some.call(event.dataTransfer.types, function(type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function onDocumentDragOver(event) {
  event.preventDefault();
}
function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(function(fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }
      return isPropagationStopped(event);
    });
  };
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function filePickerOptionsTypes(accept) {
  accept = typeof accept === "string" ? accept.split(",") : accept;
  return [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(accept) ? (
      // Accept just MIME types as per spec
      // NOTE: accept can be https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
      accept.filter(function(item) {
        return item === "audio/*" || item === "video/*" || item === "image/*" || item === "text/*" || /\w+\/[-+.\w]+/g.test(item);
      }).reduce(function(a2, b2) {
        return _objectSpread$1(_objectSpread$1({}, a2), {}, _defineProperty$1({}, b2, []));
      }, {})
    ) : {}
  }];
}
function isAbort(v2) {
  return v2 instanceof DOMException && (v2.name === "AbortError" || v2.code === v2.ABORT_ERR);
}
function isSecurityError(v2) {
  return v2 instanceof DOMException && (v2.name === "SecurityError" || v2.code === v2.SECURITY_ERR);
}
var _excluded = ["children"], _excluded2$2 = ["open"], _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], _excluded4 = ["refKey", "onChange", "onClick"];
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = /* @__PURE__ */ reactExports.forwardRef(function(_ref, ref) {
  var children = _ref.children, params = _objectWithoutProperties(_ref, _excluded);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props2 = _objectWithoutProperties(_useDropzone, _excluded2$2);
  reactExports.useImperativeHandle(ref, function() {
    return {
      open
    };
  }, [open]);
  return /* @__PURE__ */ React.createElement(reactExports.Fragment, null, children(_objectSpread(_objectSpread({}, props2), {}, {
    open
  })));
});
Dropzone.displayName = "Dropzone";
var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: true
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.draggedFiles Files in active drag
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: PropTypes.func,
  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: PropTypes.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: PropTypes.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: PropTypes.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: PropTypes.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: PropTypes.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: PropTypes.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: PropTypes.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: PropTypes.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: PropTypes.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: PropTypes.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: PropTypes.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: PropTypes.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: PropTypes.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: PropTypes.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: PropTypes.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: PropTypes.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: PropTypes.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: PropTypes.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: PropTypes.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: PropTypes.func,
  /**
   * Custom validation function
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator: PropTypes.func
};
var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _defaultProps$options = _objectSpread(_objectSpread({}, defaultProps), options), accept = _defaultProps$options.accept, disabled = _defaultProps$options.disabled, getFilesFromEvent = _defaultProps$options.getFilesFromEvent, maxSize = _defaultProps$options.maxSize, minSize = _defaultProps$options.minSize, multiple = _defaultProps$options.multiple, maxFiles = _defaultProps$options.maxFiles, onDragEnter = _defaultProps$options.onDragEnter, onDragLeave = _defaultProps$options.onDragLeave, onDragOver = _defaultProps$options.onDragOver, onDrop = _defaultProps$options.onDrop, onDropAccepted = _defaultProps$options.onDropAccepted, onDropRejected = _defaultProps$options.onDropRejected, onFileDialogCancel = _defaultProps$options.onFileDialogCancel, onFileDialogOpen = _defaultProps$options.onFileDialogOpen, useFsAccessApi = _defaultProps$options.useFsAccessApi, preventDropOnDocument = _defaultProps$options.preventDropOnDocument, noClick = _defaultProps$options.noClick, noKeyboard = _defaultProps$options.noKeyboard, noDrag = _defaultProps$options.noDrag, noDragEventsBubbling = _defaultProps$options.noDragEventsBubbling, validator = _defaultProps$options.validator;
  var onFileDialogOpenCb = reactExports.useMemo(function() {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = reactExports.useMemo(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  var rootRef = reactExports.useRef(null);
  var inputRef = reactExports.useRef(null);
  var _useReducer = reactExports.useReducer(reducer, initialState), _useReducer2 = _slicedToArray(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
  var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive, draggedFiles = state.draggedFiles;
  var fsAccessApiWorksRef = reactExports.useRef(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI());
  var onWindowFocus = function onWindowFocus2() {
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function() {
        if (inputRef.current) {
          var files = inputRef.current.files;
          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };
  reactExports.useEffect(function() {
    window.addEventListener("focus", onWindowFocus, false);
    return function() {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = reactExports.useRef([]);
  var onDocumentDrop = function onDocumentDrop2(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };
  reactExports.useEffect(function() {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
    return function() {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = reactExports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(draggedFiles2) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        dispatch({
          draggedFiles: draggedFiles2,
          isDragActive: true,
          type: "setDraggedFiles"
        });
        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = reactExports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);
    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {
      }
    }
    if (hasFiles && onDragOver) {
      onDragOver(event);
    }
    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = reactExports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var targets = dragTargetsRef.current.filter(function(target) {
      return rootRef.current && rootRef.current.contains(target);
    });
    var targetIdx = targets.indexOf(event.target);
    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }
    dragTargetsRef.current = targets;
    if (targets.length > 0) {
      return;
    }
    dispatch({
      isDragActive: false,
      type: "setDraggedFiles",
      draggedFiles: []
    });
    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = reactExports.useCallback(function(files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function(file) {
      var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
      var customErrors = validator ? validator(file) : null;
      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];
        if (customErrors) {
          errors = errors.concat(customErrors);
        }
        fileRejections.push({
          file,
          errors: errors.filter(function(e2) {
            return e2;
          })
        });
      }
    });
    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      acceptedFiles.forEach(function(file) {
        fileRejections.push({
          file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }
    dispatch({
      acceptedFiles,
      fileRejections,
      type: "setFiles"
    });
    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }
    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }
    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, accept, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = reactExports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        setFiles(files, event);
      });
    }
    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, noDragEventsBubbling]);
  var openFileDialog = reactExports.useCallback(function() {
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      var opts = {
        multiple,
        types: filePickerOptionsTypes(accept)
      };
      window.showOpenFilePicker(opts).then(function(handles) {
        return getFilesFromEvent(handles);
      }).then(function(files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function(e2) {
        if (isAbort(e2)) {
          onFileDialogCancelCb(e2);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e2)) {
          fsAccessApiWorksRef.current = false;
          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          }
        }
      });
      return;
    }
    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, accept, multiple]);
  var onKeyDownCb = reactExports.useCallback(function(event) {
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }
    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]);
  var onFocusCb = reactExports.useCallback(function() {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = reactExports.useCallback(function() {
    dispatch({
      type: "blur"
    });
  }, []);
  var onClickCb = reactExports.useCallback(function() {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);
  var composeHandler = function composeHandler2(fn) {
    return disabled ? null : fn;
  };
  var composeKeyboardHandler = function composeKeyboardHandler2(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };
  var composeDragHandler = function composeDragHandler2(fn) {
    return noDrag ? null : composeHandler(fn);
  };
  var stopPropagation = function stopPropagation2(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };
  var getRootProps = reactExports.useMemo(function() {
    return function() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest2 = _objectWithoutProperties(_ref2, _excluded3);
      return _objectSpread(_objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter2, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver2, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave2, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop2, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "button"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest2);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = reactExports.useCallback(function(event) {
    event.stopPropagation();
  }, []);
  var getInputProps = reactExports.useMemo(function() {
    return function() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest2 = _objectWithoutProperties(_ref3, _excluded4);
      var inputProps = _defineProperty({
        accept,
        multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);
      return _objectSpread(_objectSpread({}, inputProps), rest2);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept,
    minSize,
    maxSize,
    multiple,
    maxFiles
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread(_objectSpread({}, state), {}, {
    isDragAccept,
    isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    open: composeHandler(openFileDialog)
  });
}
function reducer(state, action) {
  switch (action.type) {
    case "focus":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });
    case "blur":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });
    case "openDialog":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isFileDialogActive: true
      });
    case "closeDialog":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });
    case "setDraggedFiles":
      var isDragActive = action.isDragActive, draggedFiles = action.draggedFiles;
      return _objectSpread(_objectSpread({}, state), {}, {
        draggedFiles,
        isDragActive
      });
    case "setFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });
    case "reset":
      return _objectSpread({}, initialState);
    default:
      return state;
  }
}
function noop() {
}
function createStore(createState) {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribeWithSelector2 = (listener, selector = getState, equalityFn = Object.is) => {
    console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
    let currentSlice = selector(state);
    function listenerToAdd() {
      const nextSlice = selector(state);
      if (!equalityFn(currentSlice, nextSlice)) {
        const previousSlice = currentSlice;
        listener(currentSlice = nextSlice, previousSlice);
      }
    }
    listeners.add(listenerToAdd);
    return () => listeners.delete(listenerToAdd);
  };
  const subscribe = (listener, selector, equalityFn) => {
    if (selector || equalityFn) {
      return subscribeWithSelector2(listener, selector, equalityFn);
    }
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
}
const isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
const useIsomorphicLayoutEffect = isSSR ? reactExports.useEffect : reactExports.useLayoutEffect;
function create(createState) {
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useStore = (selector = api.getState, equalityFn = Object.is) => {
    const [, forceUpdate] = reactExports.useReducer((c2) => c2 + 1, 0);
    const state = api.getState();
    const stateRef = reactExports.useRef(state);
    const selectorRef = reactExports.useRef(selector);
    const equalityFnRef = reactExports.useRef(equalityFn);
    const erroredRef = reactExports.useRef(false);
    const currentSliceRef = reactExports.useRef();
    if (currentSliceRef.current === void 0) {
      currentSliceRef.current = selector(state);
    }
    let newStateSlice;
    let hasNewStateSlice = false;
    if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
      newStateSlice = selector(state);
      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
    }
    useIsomorphicLayoutEffect(() => {
      if (hasNewStateSlice) {
        currentSliceRef.current = newStateSlice;
      }
      stateRef.current = state;
      selectorRef.current = selector;
      equalityFnRef.current = equalityFn;
      erroredRef.current = false;
    });
    const stateBeforeSubscriptionRef = reactExports.useRef(state);
    useIsomorphicLayoutEffect(() => {
      const listener = () => {
        try {
          const nextState = api.getState();
          const nextStateSlice = selectorRef.current(nextState);
          if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
            stateRef.current = nextState;
            currentSliceRef.current = nextStateSlice;
            forceUpdate();
          }
        } catch (error) {
          erroredRef.current = true;
          forceUpdate();
        }
      };
      const unsubscribe = api.subscribe(listener);
      if (api.getState() !== stateBeforeSubscriptionRef.current) {
        listener();
      }
      return unsubscribe;
    }, []);
    const sliceToReturn = hasNewStateSlice ? newStateSlice : currentSliceRef.current;
    reactExports.useDebugValue(sliceToReturn);
    return sliceToReturn;
  };
  Object.assign(useStore, api);
  useStore[Symbol.iterator] = function() {
    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
    const items = [useStore, api];
    return {
      next() {
        const done = items.length <= 0;
        return { value: items.shift(), done };
      }
    };
  };
  return useStore;
}
({ "LEGACY": false });
const subscribeWithSelector = (fn) => (set, get, api) => {
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
  const initialState2 = fn(set, get, api);
  return initialState2;
};
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var isobject;
var hasRequiredIsobject;
function requireIsobject() {
  if (hasRequiredIsobject) return isobject;
  hasRequiredIsobject = 1;
  isobject = function isObject2(val) {
    return val != null && typeof val === "object" && Array.isArray(val) === false;
  };
  return isobject;
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var isPlainObject;
var hasRequiredIsPlainObject;
function requireIsPlainObject() {
  if (hasRequiredIsPlainObject) return isPlainObject;
  hasRequiredIsPlainObject = 1;
  var isObject2 = requireIsobject();
  function isObjectObject(o2) {
    return isObject2(o2) === true && Object.prototype.toString.call(o2) === "[object Object]";
  }
  isPlainObject = function isPlainObject2(o2) {
    var ctor, prot;
    if (isObjectObject(o2) === false) return false;
    ctor = o2.constructor;
    if (typeof ctor !== "function") return false;
    prot = ctor.prototype;
    if (isObjectObject(prot) === false) return false;
    if (prot.hasOwnProperty("isPrototypeOf") === false) {
      return false;
    }
    return true;
  };
  return isPlainObject;
}
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var isExtendable$1;
var hasRequiredIsExtendable$1;
function requireIsExtendable$1() {
  if (hasRequiredIsExtendable$1) return isExtendable$1;
  hasRequiredIsExtendable$1 = 1;
  var isPlainObject2 = requireIsPlainObject();
  isExtendable$1 = function isExtendable2(val) {
    return isPlainObject2(val) || typeof val === "function" || Array.isArray(val);
  };
  return isExtendable$1;
}
/*!
 * for-in <https://github.com/jonschlinkert/for-in>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var forIn;
var hasRequiredForIn;
function requireForIn() {
  if (hasRequiredForIn) return forIn;
  hasRequiredForIn = 1;
  forIn = function forIn2(obj, fn, thisArg) {
    for (var key in obj) {
      if (fn.call(thisArg, obj[key], key, obj) === false) {
        break;
      }
    }
  };
  return forIn;
}
var mixinDeep_1;
var hasRequiredMixinDeep;
function requireMixinDeep() {
  if (hasRequiredMixinDeep) return mixinDeep_1;
  hasRequiredMixinDeep = 1;
  var isExtendable2 = requireIsExtendable$1();
  var forIn2 = requireForIn();
  function mixinDeep(target, objects) {
    var len = arguments.length, i2 = 0;
    while (++i2 < len) {
      var obj = arguments[i2];
      if (isObject2(obj)) {
        forIn2(obj, copy, target);
      }
    }
    return target;
  }
  function copy(val, key) {
    if (!isValidKey(key)) {
      return;
    }
    var obj = this[key];
    if (isObject2(val) && isObject2(obj)) {
      mixinDeep(obj, val);
    } else {
      this[key] = val;
    }
  }
  function isObject2(val) {
    return isExtendable2(val) && !Array.isArray(val);
  }
  function isValidKey(key) {
    return key !== "__proto__" && key !== "constructor" && key !== "prototype";
  }
  mixinDeep_1 = mixinDeep;
  return mixinDeep_1;
}
/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var getValue$1;
var hasRequiredGetValue;
function requireGetValue() {
  if (hasRequiredGetValue) return getValue$1;
  hasRequiredGetValue = 1;
  getValue$1 = function(obj, prop, a2, b2, c2) {
    if (!isObject2(obj) || !prop) {
      return obj;
    }
    prop = toString(prop);
    if (a2) prop += "." + toString(a2);
    if (b2) prop += "." + toString(b2);
    if (c2) prop += "." + toString(c2);
    if (prop in obj) {
      return obj[prop];
    }
    var segs = prop.split(".");
    var len = segs.length;
    var i2 = -1;
    while (obj && ++i2 < len) {
      var key = segs[i2];
      while (key[key.length - 1] === "\\") {
        key = key.slice(0, -1) + "." + segs[++i2];
      }
      obj = obj[key];
    }
    return obj;
  };
  function isObject2(val) {
    return val !== null && (typeof val === "object" || typeof val === "function");
  }
  function toString(val) {
    if (!val) return "";
    if (Array.isArray(val)) {
      return val.join(".");
    }
    return val;
  }
  return getValue$1;
}
/*!
 * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var assignSymbols;
var hasRequiredAssignSymbols;
function requireAssignSymbols() {
  if (hasRequiredAssignSymbols) return assignSymbols;
  hasRequiredAssignSymbols = 1;
  assignSymbols = function(receiver, objects) {
    if (receiver === null || typeof receiver === "undefined") {
      throw new TypeError("expected first argument to be an object.");
    }
    if (typeof objects === "undefined" || typeof Symbol === "undefined") {
      return receiver;
    }
    if (typeof Object.getOwnPropertySymbols !== "function") {
      return receiver;
    }
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var target = Object(receiver);
    var len = arguments.length, i2 = 0;
    while (++i2 < len) {
      var provider = Object(arguments[i2]);
      var names = Object.getOwnPropertySymbols(provider);
      for (var j2 = 0; j2 < names.length; j2++) {
        var key = names[j2];
        if (isEnumerable.call(provider, key)) {
          target[key] = provider[key];
        }
      }
    }
    return target;
  };
  return assignSymbols;
}
var extendShallow$1;
var hasRequiredExtendShallow$1;
function requireExtendShallow$1() {
  if (hasRequiredExtendShallow$1) return extendShallow$1;
  hasRequiredExtendShallow$1 = 1;
  var isExtendable2 = requireIsExtendable$1();
  var assignSymbols2 = requireAssignSymbols();
  extendShallow$1 = Object.assign || function(obj) {
    if (obj === null || typeof obj === "undefined") {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    if (!isObject2(obj)) {
      obj = {};
    }
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var val = arguments[i2];
      if (isString(val)) {
        val = toObject(val);
      }
      if (isObject2(val)) {
        assign(obj, val);
        assignSymbols2(obj, val);
      }
    }
    return obj;
  };
  function assign(a2, b2) {
    for (var key in b2) {
      if (hasOwn(b2, key)) {
        a2[key] = b2[key];
      }
    }
  }
  function isString(val) {
    return val && typeof val === "string";
  }
  function toObject(str) {
    var obj = {};
    for (var i2 in str) {
      obj[i2] = str[i2];
    }
    return obj;
  }
  function isObject2(val) {
    return val && typeof val === "object" || isExtendable2(val);
  }
  function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  return extendShallow$1;
}
/*!
 * split-string <https://github.com/jonschlinkert/split-string>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var splitString;
var hasRequiredSplitString;
function requireSplitString() {
  if (hasRequiredSplitString) return splitString;
  hasRequiredSplitString = 1;
  var extend = requireExtendShallow$1();
  splitString = function(str, options, fn) {
    if (typeof str !== "string") {
      throw new TypeError("expected a string");
    }
    if (typeof options === "function") {
      fn = options;
      options = null;
    }
    if (typeof options === "string") {
      options = { sep: options };
    }
    var opts = extend({ sep: "." }, options);
    var quotes = opts.quotes || ['"', "'", "`"];
    var brackets;
    if (opts.brackets === true) {
      brackets = {
        "<": ">",
        "(": ")",
        "[": "]",
        "{": "}"
      };
    } else if (opts.brackets) {
      brackets = opts.brackets;
    }
    var tokens = [];
    var stack = [];
    var arr = [""];
    var sep = opts.sep;
    var len = str.length;
    var idx = -1;
    var closeIdx;
    function expected() {
      if (brackets && stack.length) {
        return brackets[stack[stack.length - 1]];
      }
    }
    while (++idx < len) {
      var ch = str[idx];
      var next = str[idx + 1];
      var tok = { val: ch, idx, arr, str };
      tokens.push(tok);
      if (ch === "\\") {
        tok.val = keepEscaping(opts, str, idx) === true ? ch + next : next;
        tok.escaped = true;
        if (typeof fn === "function") {
          fn(tok);
        }
        arr[arr.length - 1] += tok.val;
        idx++;
        continue;
      }
      if (brackets && brackets[ch]) {
        stack.push(ch);
        var e2 = expected();
        var i2 = idx + 1;
        if (str.indexOf(e2, i2 + 1) !== -1) {
          while (stack.length && i2 < len) {
            var s2 = str[++i2];
            if (s2 === "\\") {
              s2++;
              continue;
            }
            if (quotes.indexOf(s2) !== -1) {
              i2 = getClosingQuote(str, s2, i2 + 1);
              continue;
            }
            e2 = expected();
            if (stack.length && str.indexOf(e2, i2 + 1) === -1) {
              break;
            }
            if (brackets[s2]) {
              stack.push(s2);
              continue;
            }
            if (e2 === s2) {
              stack.pop();
            }
          }
        }
        closeIdx = i2;
        if (closeIdx === -1) {
          arr[arr.length - 1] += ch;
          continue;
        }
        ch = str.slice(idx, closeIdx + 1);
        tok.val = ch;
        tok.idx = idx = closeIdx;
      }
      if (quotes.indexOf(ch) !== -1) {
        closeIdx = getClosingQuote(str, ch, idx + 1);
        if (closeIdx === -1) {
          arr[arr.length - 1] += ch;
          continue;
        }
        if (keepQuotes(ch, opts) === true) {
          ch = str.slice(idx, closeIdx + 1);
        } else {
          ch = str.slice(idx + 1, closeIdx);
        }
        tok.val = ch;
        tok.idx = idx = closeIdx;
      }
      if (typeof fn === "function") {
        fn(tok, tokens);
        ch = tok.val;
        idx = tok.idx;
      }
      if (tok.val === sep && tok.split !== false) {
        arr.push("");
        continue;
      }
      arr[arr.length - 1] += tok.val;
    }
    return arr;
  };
  function getClosingQuote(str, ch, i2, brackets) {
    var idx = str.indexOf(ch, i2);
    if (str.charAt(idx - 1) === "\\") {
      return getClosingQuote(str, ch, idx + 1);
    }
    return idx;
  }
  function keepQuotes(ch, opts) {
    if (opts.keepDoubleQuotes === true && ch === '"') return true;
    if (opts.keepSingleQuotes === true && ch === "'") return true;
    return opts.keepQuotes;
  }
  function keepEscaping(opts, str, idx) {
    if (typeof opts.keepEscaping === "function") {
      return opts.keepEscaping(str, idx);
    }
    return opts.keepEscaping === true || str[idx + 1] === "\\";
  }
  return splitString;
}
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var isExtendable;
var hasRequiredIsExtendable;
function requireIsExtendable() {
  if (hasRequiredIsExtendable) return isExtendable;
  hasRequiredIsExtendable = 1;
  isExtendable = function isExtendable2(val) {
    return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
  };
  return isExtendable;
}
var extendShallow;
var hasRequiredExtendShallow;
function requireExtendShallow() {
  if (hasRequiredExtendShallow) return extendShallow;
  hasRequiredExtendShallow = 1;
  var isObject2 = requireIsExtendable();
  extendShallow = function extend(o2) {
    if (!isObject2(o2)) {
      o2 = {};
    }
    var len = arguments.length;
    for (var i2 = 1; i2 < len; i2++) {
      var obj = arguments[i2];
      if (isObject2(obj)) {
        assign(o2, obj);
      }
    }
    return o2;
  };
  function assign(a2, b2) {
    for (var key in b2) {
      if (hasOwn(b2, key)) {
        a2[key] = b2[key];
      }
    }
  }
  function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  return extendShallow;
}
/*!
 * set-value <https://github.com/jonschlinkert/set-value>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var setValue;
var hasRequiredSetValue;
function requireSetValue() {
  if (hasRequiredSetValue) return setValue;
  hasRequiredSetValue = 1;
  var split2 = requireSplitString();
  var extend = requireExtendShallow();
  var isPlainObject2 = requireIsPlainObject();
  var isObject2 = requireIsExtendable();
  setValue = function(obj, prop, val) {
    if (!isObject2(obj)) {
      return obj;
    }
    if (Array.isArray(prop)) {
      prop = [].concat.apply([], prop).join(".");
    }
    if (typeof prop !== "string") {
      return obj;
    }
    var keys = split2(prop, { sep: ".", brackets: true }).filter(isValidKey);
    var len = keys.length;
    var idx = -1;
    var current = obj;
    while (++idx < len) {
      var key = keys[idx];
      if (idx !== len - 1) {
        if (!isObject2(current[key])) {
          current[key] = {};
        }
        current = current[key];
        continue;
      }
      if (isPlainObject2(current[key]) && isPlainObject2(val)) {
        current[key] = extend({}, current[key], val);
      } else {
        current[key] = val;
      }
    }
    return obj;
  };
  function isValidKey(key) {
    return key !== "__proto__" && key !== "constructor" && key !== "prototype";
  }
  return setValue;
}
var mergeValue;
var hasRequiredMergeValue;
function requireMergeValue() {
  if (hasRequiredMergeValue) return mergeValue;
  hasRequiredMergeValue = 1;
  var isObject2 = requireIsExtendable$1();
  var merge2 = requireMixinDeep();
  var get = requireGetValue();
  var set = requireSetValue();
  mergeValue = function mergeValue2(obj, prop, value) {
    if (!isObject2(obj)) {
      throw new TypeError("expected an object");
    }
    if (typeof prop !== "string" || value == null) {
      return merge2.apply(null, arguments);
    }
    if (typeof value === "string") {
      set(obj, prop, value);
      return obj;
    }
    var current = get(obj, prop);
    if (isObject2(value) && isObject2(current)) {
      value = merge2({}, current, value);
    }
    set(obj, prop, value);
    return obj;
  };
  return mergeValue;
}
var mergeValueExports = requireMergeValue();
const merge = /* @__PURE__ */ getDefaultExportFromCjs(mergeValueExports);
const join = (...args) => args.filter(Boolean).join(".");
function getKeyPath(path) {
  const dir = path.split(".");
  return [dir.pop(), dir.join(".") || void 0];
}
function getValuesForPaths(data, paths) {
  return Object.entries(pick(data, paths)).reduce(
    (acc, [, {
      value,
      disabled,
      key
    }]) => {
      acc[key] = disabled ? void 0 : value;
      return acc;
    },
    {}
  );
}
function useCompareMemoize(value, deep) {
  const ref = reactExports.useRef();
  const compare = dequal;
  if (!compare(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}
function useDeepMemo(fn, deps) {
  return reactExports.useMemo(fn, useCompareMemoize(deps));
}
function useToggle(toggled) {
  const wrapperRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  const firstRender = reactExports.useRef(true);
  reactExports.useLayoutEffect(() => {
    if (!toggled) {
      wrapperRef.current.style.height = "0px";
      wrapperRef.current.style.overflow = "hidden";
    }
  }, []);
  reactExports.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    let timeout;
    const ref = wrapperRef.current;
    const fixHeight = () => {
      if (toggled) {
        ref.style.removeProperty("height");
        ref.style.removeProperty("overflow");
        contentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }
    };
    ref.addEventListener("transitionend", fixHeight, {
      once: true
    });
    const {
      height
    } = contentRef.current.getBoundingClientRect();
    ref.style.height = height + "px";
    if (!toggled) {
      ref.style.overflow = "hidden";
      timeout = window.setTimeout(() => ref.style.height = "0px", 50);
    }
    return () => {
      ref.removeEventListener("transitionend", fixHeight);
      clearTimeout(timeout);
    };
  }, [toggled]);
  return {
    wrapperRef,
    contentRef
  };
}
const useVisiblePaths = (store) => {
  const [paths, setPaths] = reactExports.useState(store.getVisiblePaths());
  reactExports.useEffect(() => {
    setPaths(store.getVisiblePaths());
    const unsub = store.useStore.subscribe(store.getVisiblePaths, setPaths, {
      equalityFn: shallow
    });
    return () => unsub();
  }, [store]);
  return paths;
};
function useValuesForPath(store, paths, initialData) {
  const valuesForPath = store.useStore((s2) => {
    const data = _objectSpread2(_objectSpread2({}, initialData), s2.data);
    return getValuesForPaths(data, paths);
  }, shallow);
  return valuesForPath;
}
function usePopin(margin = 3) {
  const popinRef = reactExports.useRef(null);
  const wrapperRef = reactExports.useRef(null);
  const [shown, setShow] = reactExports.useState(false);
  const show = reactExports.useCallback(() => setShow(true), []);
  const hide = reactExports.useCallback(() => setShow(false), []);
  reactExports.useLayoutEffect(() => {
    if (shown) {
      const {
        bottom,
        top,
        left
      } = popinRef.current.getBoundingClientRect();
      const {
        height
      } = wrapperRef.current.getBoundingClientRect();
      const direction = bottom + height > window.innerHeight - 40 ? "up" : "down";
      wrapperRef.current.style.position = "fixed";
      wrapperRef.current.style.zIndex = "10000";
      wrapperRef.current.style.left = left + "px";
      if (direction === "down") wrapperRef.current.style.top = bottom + margin + "px";
      else wrapperRef.current.style.bottom = window.innerHeight - top + margin + "px";
    }
  }, [margin, shown]);
  return {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  };
}
k$2([namesPlugin]);
const convertMap = {
  rgb: "toRgb",
  hsl: "toHsl",
  hsv: "toHsv",
  hex: "toHex"
};
v8n.extend({
  color: () => (value) => w$1(value).isValid()
});
const schema$2 = (o2) => v8n().color().test(o2);
function convert(color2, {
  format: format2,
  hasAlpha,
  isString
}) {
  const convertFn = convertMap[format2] + (isString && format2 !== "hex" ? "String" : "");
  const result = color2[convertFn]();
  return typeof result === "object" && !hasAlpha ? omit(result, ["a"]) : result;
}
const sanitize$2 = (v2, settings) => {
  const color2 = w$1(v2);
  if (!color2.isValid()) throw Error("Invalid color");
  return convert(color2, settings);
};
const format$1 = (v2, settings) => {
  return convert(w$1(v2), _objectSpread2(_objectSpread2({}, settings), {}, {
    isString: true,
    format: "hex"
  }));
};
const normalize$3 = ({
  value
}) => {
  const _f = I$1(value);
  const format2 = _f === "name" ? "hex" : _f;
  const hasAlpha = typeof value === "object" ? "a" in value : _f === "hex" && value.length === 8 || /^(rgba)|(hsla)|(hsva)/.test(value);
  const settings = {
    format: format2,
    hasAlpha,
    isString: typeof value === "string"
  };
  return {
    value: sanitize$2(value, settings),
    settings
  };
};
var props$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  schema: schema$2,
  sanitize: sanitize$2,
  format: format$1,
  normalize: normalize$3
});
const ColorPreview = styled("div", {
  position: "relative",
  boxSizing: "border-box",
  borderRadius: "$sm",
  overflow: "hidden",
  cursor: "pointer",
  height: "$rowHeight",
  width: "$rowHeight",
  backgroundColor: "#fff",
  backgroundImage: 'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',
  $inputStyle: "",
  $hover: "",
  zIndex: 1,
  variants: {
    active: {
      true: {
        $inputStyle: "$accent1"
      }
    }
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "currentColor",
    zIndex: 1
  }
});
const PickerContainer = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "$sizes$rowHeight auto",
  columnGap: "$colGap",
  alignItems: "center"
});
const PickerWrapper = styled("div", {
  width: "$colorPickerWidth",
  height: "$colorPickerHeight",
  ".react-colorful": {
    width: "100%",
    height: "100%",
    boxShadow: "$level2",
    cursor: "crosshair"
  },
  ".react-colorful__saturation": {
    borderRadius: "$sm $sm 0 0"
  },
  ".react-colorful__alpha, .react-colorful__hue": {
    height: 10
  },
  ".react-colorful__last-control": {
    borderRadius: "0 0 $sm $sm"
  },
  ".react-colorful__pointer": {
    height: 12,
    width: 12
  }
});
function convertToRgb(value, format2) {
  return format2 !== "rgb" ? w$1(value).toRgb() : value;
}
function Color({
  value,
  displayValue,
  settings,
  onUpdate
}) {
  const {
    emitOnEditStart,
    emitOnEditEnd
  } = useInputContext();
  const {
    format: format2,
    hasAlpha
  } = settings;
  const {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  } = usePopin();
  const timer = reactExports.useRef(0);
  const [initialRgb, setInitialRgb] = reactExports.useState(() => convertToRgb(value, format2));
  const ColorPicker = hasAlpha ? Ce : Ne;
  const showPicker = () => {
    setInitialRgb(convertToRgb(value, format2));
    show();
    emitOnEditStart();
  };
  const hidePicker = () => {
    hide();
    emitOnEditEnd();
    window.clearTimeout(timer.current);
  };
  const hideAfterDelay = () => {
    timer.current = window.setTimeout(hidePicker, 500);
  };
  reactExports.useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);
  return React.createElement(React.Fragment, null, React.createElement(ColorPreview, {
    ref: popinRef,
    active: shown,
    onClick: () => showPicker(),
    style: {
      color: displayValue
    }
  }), shown && React.createElement(Portal, null, React.createElement(Overlay, {
    onPointerUp: hidePicker
  }), React.createElement(PickerWrapper, {
    ref: wrapperRef,
    onMouseEnter: () => window.clearTimeout(timer.current),
    onMouseLeave: (e2) => e2.buttons === 0 && hideAfterDelay()
  }, React.createElement(ColorPicker, {
    color: initialRgb,
    onChange: onUpdate
  }))));
}
function ColorComponent() {
  const {
    value,
    displayValue,
    label,
    onChange,
    onUpdate,
    settings
  } = useInputContext();
  return React.createElement(Row, {
    input: true
  }, React.createElement(Label, null, label), React.createElement(PickerContainer, null, React.createElement(Color, {
    value,
    displayValue,
    onChange,
    onUpdate,
    settings
  }), React.createElement(ValueInput, {
    value: displayValue,
    onChange,
    onUpdate
  })));
}
var color = createInternalPlugin(_objectSpread2({
  component: ColorComponent
}, props$2));
function Vector3dComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  return React.createElement(Row, {
    input: true
  }, React.createElement(Label, null, label), React.createElement(Vector, {
    value: displayValue,
    settings,
    onUpdate
  }));
}
var vector3d = createInternalPlugin(_objectSpread2({
  component: Vector3dComponent
}, getVectorPlugin(["x", "y", "z"])));
const JoystickTrigger = styled("div", {
  $flexCenter: "",
  position: "relative",
  backgroundColor: "$elevation3",
  borderRadius: "$sm",
  cursor: "pointer",
  height: "$rowHeight",
  width: "$rowHeight",
  touchAction: "none",
  $draggable: "",
  $hover: "",
  "&:active": {
    cursor: "none"
  },
  "&::after": {
    content: '""',
    backgroundColor: "$accent2",
    height: 4,
    width: 4,
    borderRadius: 2
  }
});
const JoystickPlayground = styled("div", {
  $flexCenter: "",
  width: "$joystickWidth",
  height: "$joystickHeight",
  borderRadius: "$sm",
  boxShadow: "$level2",
  position: "fixed",
  zIndex: 1e4,
  overflow: "hidden",
  $draggable: "",
  transform: "translate(-50%, -50%)",
  variants: {
    isOutOfBounds: {
      true: {
        backgroundColor: "$elevation1"
      },
      false: {
        backgroundColor: "$elevation3"
      }
    }
  },
  "> div": {
    position: "absolute",
    $flexCenter: "",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "$highlight1",
    backgroundColor: "$elevation3",
    width: "80%",
    height: "80%",
    "&::after,&::before": {
      content: '""',
      position: "absolute",
      zindex: 10,
      backgroundColor: "$highlight1"
    },
    "&::before": {
      width: "100%",
      height: 1
    },
    "&::after": {
      height: "100%",
      width: 1
    }
  },
  "> span": {
    position: "relative",
    zindex: 100,
    width: 10,
    height: 10,
    backgroundColor: "$accent2",
    borderRadius: "50%"
  }
});
function Joystick({
  value,
  settings,
  onUpdate
}) {
  const timeout = reactExports.useRef();
  const outOfBoundsX = reactExports.useRef(0);
  const outOfBoundsY = reactExports.useRef(0);
  const stepMultiplier = reactExports.useRef(1);
  const [joystickShown, setShowJoystick] = reactExports.useState(false);
  const [isOutOfBounds, setIsOutOfBounds] = reactExports.useState(false);
  const [spanRef, set] = useTransform();
  const joystickeRef = reactExports.useRef(null);
  const playgroundRef = reactExports.useRef(null);
  reactExports.useLayoutEffect(() => {
    if (joystickShown) {
      const {
        top,
        left,
        width,
        height
      } = joystickeRef.current.getBoundingClientRect();
      playgroundRef.current.style.left = left + width / 2 + "px";
      playgroundRef.current.style.top = top + height / 2 + "px";
    }
  }, [joystickShown]);
  const {
    keys: [v1, v2],
    joystick
  } = settings;
  const yFactor = joystick === "invertY" ? 1 : -1;
  const {
    [v1]: {
      step: stepV1
    },
    [v2]: {
      step: stepV2
    }
  } = settings;
  const wpx = useTh("sizes", "joystickWidth");
  const hpx = useTh("sizes", "joystickHeight");
  const w2 = parseFloat(wpx) * 0.8 / 2;
  const h2 = parseFloat(hpx) * 0.8 / 2;
  const startOutOfBounds = reactExports.useCallback(() => {
    if (timeout.current) return;
    setIsOutOfBounds(true);
    if (outOfBoundsX.current) set({
      x: outOfBoundsX.current * w2
    });
    if (outOfBoundsY.current) set({
      y: outOfBoundsY.current * -h2
    });
    timeout.current = window.setInterval(() => {
      onUpdate((v3) => {
        const incX = stepV1 * outOfBoundsX.current * stepMultiplier.current;
        const incY = yFactor * stepV2 * outOfBoundsY.current * stepMultiplier.current;
        return Array.isArray(v3) ? {
          [v1]: v3[0] + incX,
          [v2]: v3[1] + incY
        } : {
          [v1]: v3[v1] + incX,
          [v2]: v3[v2] + incY
        };
      });
    }, 16);
  }, [w2, h2, onUpdate, set, stepV1, stepV2, v1, v2, yFactor]);
  const endOutOfBounds = reactExports.useCallback(() => {
    window.clearTimeout(timeout.current);
    timeout.current = void 0;
    setIsOutOfBounds(false);
  }, []);
  reactExports.useEffect(() => {
    function setStepMultiplier(event) {
      stepMultiplier.current = multiplyStep(event);
    }
    window.addEventListener("keydown", setStepMultiplier);
    window.addEventListener("keyup", setStepMultiplier);
    return () => {
      window.clearTimeout(timeout.current);
      window.removeEventListener("keydown", setStepMultiplier);
      window.removeEventListener("keyup", setStepMultiplier);
    };
  }, []);
  const bind = useDrag(({
    first,
    active,
    delta: [dx, dy],
    movement: [mx, my]
  }) => {
    if (first) setShowJoystick(true);
    const _x = clamp$1(mx, -w2, w2);
    const _y = clamp$1(my, -h2, h2);
    outOfBoundsX.current = Math.abs(mx) > Math.abs(_x) ? Math.sign(mx - _x) : 0;
    outOfBoundsY.current = Math.abs(my) > Math.abs(_y) ? Math.sign(_y - my) : 0;
    let newX = value[v1];
    let newY = value[v2];
    if (active) {
      if (!outOfBoundsX.current) {
        newX += dx * stepV1 * stepMultiplier.current;
        set({
          x: _x
        });
      }
      if (!outOfBoundsY.current) {
        newY -= yFactor * dy * stepV2 * stepMultiplier.current;
        set({
          y: _y
        });
      }
      if (outOfBoundsX.current || outOfBoundsY.current) startOutOfBounds();
      else endOutOfBounds();
      onUpdate({
        [v1]: newX,
        [v2]: newY
      });
    } else {
      setShowJoystick(false);
      outOfBoundsX.current = 0;
      outOfBoundsY.current = 0;
      set({
        x: 0,
        y: 0
      });
      endOutOfBounds();
    }
  });
  return React.createElement(JoystickTrigger, _extends({
    ref: joystickeRef
  }, bind()), joystickShown && React.createElement(Portal, null, React.createElement(JoystickPlayground, {
    ref: playgroundRef,
    isOutOfBounds
  }, React.createElement("div", null), React.createElement("span", {
    ref: spanRef
  }))));
}
const Container$1 = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  variants: {
    withJoystick: {
      true: {
        gridTemplateColumns: "$sizes$rowHeight auto"
      },
      false: {
        gridTemplateColumns: "auto"
      }
    }
  }
});
function Vector2dComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  return React.createElement(Row, {
    input: true
  }, React.createElement(Label, null, label), React.createElement(Container$1, {
    withJoystick: !!settings.joystick
  }, settings.joystick && React.createElement(Joystick, {
    value: displayValue,
    settings,
    onUpdate
  }), React.createElement(Vector, {
    value: displayValue,
    settings,
    onUpdate
  })));
}
const _excluded$7 = ["joystick"];
const plugin = getVectorPlugin(["x", "y"]);
const normalize$2 = (_ref) => {
  let {
    joystick = true
  } = _ref, input = _objectWithoutProperties$1(_ref, _excluded$7);
  const {
    value,
    settings
  } = plugin.normalize(input);
  return {
    value,
    settings: _objectSpread2(_objectSpread2({}, settings), {}, {
      joystick
    })
  };
};
var vector2d = createInternalPlugin(_objectSpread2(_objectSpread2({
  component: Vector2dComponent
}, plugin), {}, {
  normalize: normalize$2
}));
const sanitize$1 = (v2) => {
  if (v2 === void 0) return void 0;
  if (v2 instanceof File) {
    try {
      return URL.createObjectURL(v2);
    } catch (e2) {
      return void 0;
    }
  }
  if (typeof v2 === "string" && v2.indexOf("blob:") === 0) return v2;
  throw Error("Invalid image format [undefined | blob | File].");
};
const schema$1 = (_o, s2) => typeof s2 === "object" && "image" in s2;
const normalize$1 = ({
  image: image2
}) => {
  return {
    value: image2
  };
};
var props$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  sanitize: sanitize$1,
  schema: schema$1,
  normalize: normalize$1
});
const ImageContainer = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "$sizes$rowHeight auto 20px",
  columnGap: "$colGap",
  alignItems: "center"
});
const DropZone = styled("div", {
  $flexCenter: "",
  overflow: "hidden",
  height: "$rowHeight",
  background: "$elevation3",
  textAlign: "center",
  color: "inherit",
  borderRadius: "$sm",
  outline: "none",
  userSelect: "none",
  cursor: "pointer",
  $inputStyle: "",
  $hover: "",
  $focusWithin: "",
  $active: "$accent1 $elevation1",
  variants: {
    isDragAccept: {
      true: {
        $inputStyle: "$accent1",
        backgroundColor: "$elevation1"
      }
    }
  }
});
const ImagePreview = styled("div", {
  boxSizing: "border-box",
  borderRadius: "$sm",
  height: "$rowHeight",
  width: "$rowHeight",
  $inputStyle: "",
  backgroundSize: "cover",
  backgroundPosition: "center",
  variants: {
    hasImage: {
      true: {
        cursor: "pointer",
        $hover: "",
        $active: ""
      }
    }
  }
});
const ImageLargePreview = styled("div", {
  $flexCenter: "",
  width: "$imagePreviewWidth",
  height: "$imagePreviewHeight",
  borderRadius: "$sm",
  boxShadow: "$level2",
  pointerEvents: "none",
  $inputStyle: "",
  backgroundSize: "cover",
  backgroundPosition: "center"
});
const Instructions = styled("div", {
  fontSize: "0.8em",
  height: "100%",
  padding: "$rowGap $md"
});
const Remove = styled("div", {
  $flexCenter: "",
  top: "0",
  right: "0",
  marginRight: "$sm",
  height: "100%",
  cursor: "pointer",
  variants: {
    disabled: {
      true: {
        color: "$elevation3",
        cursor: "default"
      }
    }
  },
  "&::after,&::before": {
    content: '""',
    position: "absolute",
    height: 2,
    width: 10,
    borderRadius: 1,
    backgroundColor: "currentColor"
  },
  "&::after": {
    transform: "rotate(45deg)"
  },
  "&::before": {
    transform: "rotate(-45deg)"
  }
});
function ImageComponent() {
  const {
    label,
    value,
    onUpdate,
    disabled
  } = useInputContext();
  const {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  } = usePopin();
  const onDrop = reactExports.useCallback((acceptedFiles) => {
    if (acceptedFiles.length) onUpdate(acceptedFiles[0]);
  }, [onUpdate]);
  const clear = reactExports.useCallback((e2) => {
    e2.stopPropagation();
    onUpdate(void 0);
  }, [onUpdate]);
  const {
    getRootProps,
    getInputProps,
    isDragAccept
  } = useDropzone({
    maxFiles: 1,
    accept: "image/*",
    onDrop,
    disabled
  });
  return React.createElement(Row, {
    input: true
  }, React.createElement(Label, null, label), React.createElement(ImageContainer, null, React.createElement(ImagePreview, {
    ref: popinRef,
    hasImage: !!value,
    onPointerDown: () => !!value && show(),
    onPointerUp: hide,
    style: {
      backgroundImage: value ? "url(".concat(value, ")") : "none"
    }
  }), shown && !!value && React.createElement(Portal, null, React.createElement(Overlay, {
    onPointerUp: hide,
    style: {
      cursor: "pointer"
    }
  }), React.createElement(ImageLargePreview, {
    ref: wrapperRef,
    style: {
      backgroundImage: "url(".concat(value, ")")
    }
  })), React.createElement(DropZone, getRootProps({
    isDragAccept
  }), React.createElement("input", getInputProps()), React.createElement(Instructions, null, isDragAccept ? "drop image" : "click or drop")), React.createElement(Remove, {
    onClick: clear,
    disabled: !value
  })));
}
var image = createInternalPlugin(_objectSpread2({
  component: ImageComponent
}, props$1));
const number = v8n().number();
const schema = (o2, s2) => v8n().array().length(2).every.number().test(o2) && v8n().schema({
  min: number,
  max: number
}).test(s2);
const format = (v2) => ({
  min: v2[0],
  max: v2[1]
});
const sanitize = (value, {
  bounds: [MIN, MAX]
}, prevValue) => {
  const _value = Array.isArray(value) ? format(value) : value;
  const _newValue = {
    min: prevValue[0],
    max: prevValue[1]
  };
  const {
    min: min2,
    max: max2
  } = _objectSpread2(_objectSpread2({}, _newValue), _value);
  return [clamp$1(Number(min2), MIN, Math.max(MIN, max2)), clamp$1(Number(max2), Math.min(MAX, min2), MAX)];
};
const normalize = ({
  value,
  min: min2,
  max: max2
}) => {
  const boundsSettings = {
    min: min2,
    max: max2
  };
  const _settings = normalizeKeyedNumberSettings(format(value), {
    min: boundsSettings,
    max: boundsSettings
  });
  const bounds = [min2, max2];
  const settings = _objectSpread2(_objectSpread2({}, _settings), {}, {
    bounds
  });
  const _value = sanitize(format(value), settings, value);
  return {
    value: _value,
    settings
  };
};
var props = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  schema,
  format,
  sanitize,
  normalize
});
const _excluded$6 = ["value", "bounds", "onDrag"], _excluded2$1 = ["bounds"];
const Container = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  gridTemplateColumns: "auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)"
});
function IntervalSlider(_ref) {
  let {
    value,
    bounds: [min2, max2],
    onDrag
  } = _ref, settings = _objectWithoutProperties$1(_ref, _excluded$6);
  const ref = reactExports.useRef(null);
  const minScrubberRef = reactExports.useRef(null);
  const maxScrubberRef = reactExports.useRef(null);
  const rangeWidth = reactExports.useRef(0);
  const scrubberWidth = useTh("sizes", "scrubberWidth");
  const bind = useDrag(({
    event,
    first,
    xy: [x2],
    movement: [mx],
    memo: _memo = {}
  }) => {
    if (first) {
      const {
        width,
        left
      } = ref.current.getBoundingClientRect();
      rangeWidth.current = width - parseFloat(scrubberWidth);
      const targetIsScrub = (event === null || event === void 0 ? void 0 : event.target) === minScrubberRef.current || (event === null || event === void 0 ? void 0 : event.target) === maxScrubberRef.current;
      _memo.pos = invertedRange((x2 - left) / width, min2, max2);
      const delta = Math.abs(_memo.pos - value.min) - Math.abs(_memo.pos - value.max);
      _memo.key = delta < 0 || delta === 0 && _memo.pos <= value.min ? "min" : "max";
      if (targetIsScrub) _memo.pos = value[_memo.key];
    }
    const newValue = _memo.pos + invertedRange(mx / rangeWidth.current, 0, max2 - min2);
    onDrag({
      [_memo.key]: sanitizeStep(newValue, settings[_memo.key])
    });
    return _memo;
  });
  const minStyle = "calc(".concat(range(value.min, min2, max2), " * (100% - ").concat(scrubberWidth, " - 8px) + 4px)");
  const maxStyle = "calc(".concat(1 - range(value.max, min2, max2), " * (100% - ").concat(scrubberWidth, " - 8px) + 4px)");
  return React.createElement(RangeWrapper, _extends({
    ref
  }, bind()), React.createElement(Range, null, React.createElement(Indicator, {
    style: {
      left: minStyle,
      right: maxStyle
    }
  })), React.createElement(Scrubber, {
    position: "left",
    ref: minScrubberRef,
    style: {
      left: minStyle
    }
  }), React.createElement(Scrubber, {
    position: "right",
    ref: maxScrubberRef,
    style: {
      right: maxStyle
    }
  }));
}
function IntervalComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  const _settings = _objectWithoutProperties$1(settings, _excluded2$1);
  return React.createElement(React.Fragment, null, React.createElement(Row, {
    input: true
  }, React.createElement(Label, null, label), React.createElement(Container, null, React.createElement(IntervalSlider, _extends({
    value: displayValue
  }, settings, {
    onDrag: onUpdate
  })), React.createElement(Vector, {
    value: displayValue,
    settings: _settings,
    onUpdate,
    innerLabelTrim: 0
  }))));
}
var interval = createInternalPlugin(_objectSpread2({
  component: IntervalComponent
}, props));
const createEventEmitter = () => {
  const listenerMapping = /* @__PURE__ */ new Map();
  return {
    on: (topic, listener) => {
      let listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        listeners = /* @__PURE__ */ new Set();
        listenerMapping.set(topic, listeners);
      }
      listeners.add(listener);
    },
    off: (topic, listener) => {
      const listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        return;
      }
      listeners.delete(listener);
      if (listeners.size === 0) {
        listenerMapping.delete(topic);
      }
    },
    emit: (topic, ...args) => {
      const listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        return;
      }
      for (const listener of listeners) {
        listener(...args);
      }
    }
  };
};
const _excluded$5 = ["type", "value"], _excluded2 = ["onChange", "transient", "onEditStart", "onEditEnd"];
const Store = function Store2() {
  const store = create(subscribeWithSelector(() => ({
    data: {}
  })));
  const eventEmitter = createEventEmitter();
  this.storeId = getUid();
  this.useStore = store;
  const folders = {};
  const orderedPaths = /* @__PURE__ */ new Set();
  this.getVisiblePaths = () => {
    const data = this.getData();
    const paths = Object.keys(data);
    const hiddenFolders = [];
    Object.entries(folders).forEach(([path, settings]) => {
      if (settings.render && paths.some((p2) => p2.indexOf(path) === 0) && !settings.render(this.get))
        hiddenFolders.push(path + ".");
    });
    const visiblePaths = [];
    orderedPaths.forEach((path) => {
      if (path in data && data[path].__refCount > 0 && hiddenFolders.every((p2) => path.indexOf(p2) === -1) && (!data[path].render || data[path].render(this.get))) {
        visiblePaths.push(path);
      }
    });
    return visiblePaths;
  };
  this.setOrderedPaths = (newPaths) => {
    newPaths.forEach((p2) => orderedPaths.add(p2));
  };
  this.orderPaths = (paths) => {
    this.setOrderedPaths(paths);
    return paths;
  };
  this.disposePaths = (paths) => {
    store.setState((s2) => {
      const data = s2.data;
      paths.forEach((path) => {
        if (path in data) {
          const input = data[path];
          input.__refCount--;
          if (input.__refCount === 0 && input.type in SpecialInputs) {
            delete data[path];
          }
        }
      });
      return {
        data
      };
    });
  };
  this.dispose = () => {
    store.setState(() => {
      return {
        data: {}
      };
    });
  };
  this.getFolderSettings = (path) => {
    return folders[path] || {};
  };
  this.getData = () => {
    return store.getState().data;
  };
  this.addData = (newData, override) => {
    store.setState((s2) => {
      const data = s2.data;
      Object.entries(newData).forEach(([path, newInputData]) => {
        let input = data[path];
        if (!!input) {
          const {
            type,
            value
          } = newInputData, rest2 = _objectWithoutProperties$1(newInputData, _excluded$5);
          if (type !== input.type) {
            warn(LevaErrors.INPUT_TYPE_OVERRIDE, type);
          } else {
            if (input.__refCount === 0 || override) {
              Object.assign(input, rest2);
            }
            input.__refCount++;
          }
        } else {
          data[path] = _objectSpread2(_objectSpread2({}, newInputData), {}, {
            __refCount: 1
          });
        }
      });
      return {
        data
      };
    });
  };
  this.setValueAtPath = (path, value, fromPanel) => {
    store.setState((s2) => {
      const data = s2.data;
      updateInput(data[path], value, path, this, fromPanel);
      return {
        data
      };
    });
  };
  this.setSettingsAtPath = (path, settings) => {
    store.setState((s2) => {
      const data = s2.data;
      data[path].settings = _objectSpread2(_objectSpread2({}, data[path].settings), settings);
      return {
        data
      };
    });
  };
  this.disableInputAtPath = (path, flag) => {
    store.setState((s2) => {
      const data = s2.data;
      data[path].disabled = flag;
      return {
        data
      };
    });
  };
  this.set = (values, fromPanel) => {
    store.setState((s2) => {
      const data = s2.data;
      Object.entries(values).forEach(([path, value]) => {
        try {
          updateInput(data[path], value, void 0, void 0, fromPanel);
        } catch (e2) {
        }
      });
      return {
        data
      };
    });
  };
  this.getInput = (path) => {
    try {
      return this.getData()[path];
    } catch (e2) {
      warn(LevaErrors.PATH_DOESNT_EXIST, path);
    }
  };
  this.get = (path) => {
    var _this$getInput;
    return (_this$getInput = this.getInput(path)) === null || _this$getInput === void 0 ? void 0 : _this$getInput.value;
  };
  this.emitOnEditStart = (path) => {
    eventEmitter.emit("onEditStart:".concat(path), this.get(path), path, _objectSpread2(_objectSpread2({}, this.getInput(path)), {}, {
      get: this.get
    }));
  };
  this.emitOnEditEnd = (path) => {
    eventEmitter.emit("onEditEnd:".concat(path), this.get(path), path, _objectSpread2(_objectSpread2({}, this.getInput(path)), {}, {
      get: this.get
    }));
  };
  this.subscribeToEditStart = (path, listener) => {
    const _path = "onEditStart:".concat(path);
    eventEmitter.on(_path, listener);
    return () => eventEmitter.off(_path, listener);
  };
  this.subscribeToEditEnd = (path, listener) => {
    const _path = "onEditEnd:".concat(path);
    eventEmitter.on(_path, listener);
    return () => eventEmitter.off(_path, listener);
  };
  const _getDataFromSchema = (schema2, rootPath, mappedPaths) => {
    const data = {};
    Object.entries(schema2).forEach(([key, rawInput]) => {
      if (key === "") return warn(LevaErrors.EMPTY_KEY);
      let newPath = join(rootPath, key);
      if (rawInput.type === SpecialInputs.FOLDER) {
        const newData = _getDataFromSchema(rawInput.schema, newPath, mappedPaths);
        Object.assign(data, newData);
        if (!(newPath in folders)) folders[newPath] = rawInput.settings;
      } else if (key in mappedPaths) {
        warn(LevaErrors.DUPLICATE_KEYS, key, newPath, mappedPaths[key].path);
      } else {
        const normalizedInput = normalizeInput(rawInput, key, newPath, data);
        if (normalizedInput) {
          const {
            type,
            options,
            input
          } = normalizedInput;
          const {
            onChange,
            transient,
            onEditStart,
            onEditEnd
          } = options, _options = _objectWithoutProperties$1(options, _excluded2);
          data[newPath] = _objectSpread2(_objectSpread2(_objectSpread2({
            type
          }, _options), input), {}, {
            fromPanel: true
          });
          mappedPaths[key] = {
            path: newPath,
            onChange,
            transient,
            onEditStart,
            onEditEnd
          };
        } else {
          warn(LevaErrors.UNKNOWN_INPUT, newPath, rawInput);
        }
      }
    });
    return data;
  };
  this.getDataFromSchema = (schema2) => {
    const mappedPaths = {};
    const data = _getDataFromSchema(schema2, "", mappedPaths);
    return [data, mappedPaths];
  };
};
const levaStore = new Store();
const defaultSettings$2 = {
  collapsed: false
};
function folder(schema2, settings) {
  return {
    type: SpecialInputs.FOLDER,
    schema: schema2,
    settings: _objectSpread2(_objectSpread2({}, defaultSettings$2), settings)
  };
}
const defaultSettings$1 = {
  disabled: false
};
function button(onClick, settings) {
  return {
    type: SpecialInputs.BUTTON,
    onClick,
    settings: _objectSpread2(_objectSpread2({}, defaultSettings$1), settings)
  };
}
const isInput = (v2) => "__levaInput" in v2;
const buildTree = (paths, filter) => {
  const tree = {};
  const _filter = filter ? filter.toLowerCase() : null;
  paths.forEach((path) => {
    const [valueKey, folderPath] = getKeyPath(path);
    if (!_filter || valueKey.toLowerCase().indexOf(_filter) > -1) {
      merge(tree, folderPath, {
        [valueKey]: {
          __levaInput: true,
          path
        }
      });
    }
  });
  return tree;
};
const _excluded$4 = ["type", "label", "path", "valueKey", "value", "settings", "setValue", "disabled"];
function ControlInput(_ref) {
  let {
    type,
    label,
    path,
    valueKey,
    value,
    settings,
    setValue: setValue2,
    disabled
  } = _ref, rest2 = _objectWithoutProperties$1(_ref, _excluded$4);
  const {
    displayValue,
    onChange,
    onUpdate
  } = useInputSetters({
    type,
    value,
    settings,
    setValue: setValue2
  });
  const Input = Plugins[type].component;
  if (!Input) {
    warn(LevaErrors.NO_COMPONENT_FOR_TYPE, type, path);
    return null;
  }
  return React.createElement(InputContext.Provider, {
    value: _objectSpread2({
      key: valueKey,
      path,
      id: "" + path,
      label,
      displayValue,
      value,
      onChange,
      onUpdate,
      settings,
      setValue: setValue2,
      disabled
    }, rest2)
  }, React.createElement(StyledInputWrapper$1, {
    disabled
  }, React.createElement(Input, null)));
}
const StyledButton = styled("button", {
  display: "block",
  $reset: "",
  fontWeight: "$button",
  height: "$rowHeight",
  borderStyle: "none",
  borderRadius: "$sm",
  backgroundColor: "$elevation1",
  color: "$highlight1",
  "&:not(:disabled)": {
    color: "$highlight3",
    backgroundColor: "$accent2",
    cursor: "pointer",
    $hover: "$accent3",
    $active: "$accent3 $accent1",
    $focus: ""
  }
});
function Button({
  onClick,
  settings,
  label
}) {
  const store = useStoreContext();
  return React.createElement(Row, null, React.createElement(StyledButton, {
    disabled: settings.disabled,
    onClick: () => onClick(store.get)
  }, label));
}
const StyledButtonGroup = styled("div", {
  $flex: "",
  justifyContent: "flex-end",
  gap: "$colGap"
});
const StyledButtonGroupButton = styled("button", {
  $reset: "",
  cursor: "pointer",
  borderRadius: "$xs",
  "&:hover": {
    backgroundColor: "$elevation3"
  }
});
const getOpts = ({
  label: _label,
  opts: _opts
}) => {
  let label = typeof _label === "string" ? _label.trim() === "" ? null : _label : _label;
  let opts = _opts;
  if (typeof _opts.opts === "object") {
    if (opts.label !== void 0) {
      label = _opts.label;
    }
    opts = _opts.opts;
  }
  return {
    label,
    opts
  };
};
function ButtonGroup(props2) {
  const {
    label,
    opts
  } = getOpts(props2);
  const store = useStoreContext();
  return React.createElement(Row, {
    input: !!label
  }, label && React.createElement(Label, null, label), React.createElement(StyledButtonGroup, null, Object.entries(opts).map(([label2, onClick]) => React.createElement(StyledButtonGroupButton, {
    key: label2,
    onClick: () => onClick(store.get)
  }, label2))));
}
const Canvas = styled("canvas", {
  height: "$monitorHeight",
  width: "100%",
  display: "block",
  borderRadius: "$sm"
});
const POINTS = 100;
function push(arr, val) {
  arr.push(val);
  if (arr.length > POINTS) arr.shift();
}
const MonitorCanvas = reactExports.forwardRef(function({
  initialValue
}, ref) {
  const accentColor = useTh("colors", "highlight3");
  const backgroundColor = useTh("colors", "elevation2");
  const fillColor = useTh("colors", "highlight1");
  const [gradientTop, gradientBottom] = reactExports.useMemo(() => {
    return [w$1(fillColor).alpha(0.4).toRgbString(), w$1(fillColor).alpha(0.1).toRgbString()];
  }, [fillColor]);
  const points = reactExports.useRef([initialValue]);
  const min2 = reactExports.useRef(initialValue);
  const max2 = reactExports.useRef(initialValue);
  const raf = reactExports.useRef();
  const drawPlot = reactExports.useCallback((_canvas, _ctx) => {
    if (!_canvas) return;
    const {
      width,
      height
    } = _canvas;
    const path = new Path2D();
    const interval2 = width / POINTS;
    const verticalPadding = height * 0.05;
    for (let i2 = 0; i2 < points.current.length; i2++) {
      const p2 = range(points.current[i2], min2.current, max2.current);
      const x2 = interval2 * i2;
      const y2 = height - p2 * (height - verticalPadding * 2) - verticalPadding;
      path.lineTo(x2, y2);
    }
    _ctx.clearRect(0, 0, width, height);
    const gradientPath = new Path2D(path);
    gradientPath.lineTo(interval2 * (points.current.length + 1), height);
    gradientPath.lineTo(0, height);
    gradientPath.lineTo(0, 0);
    const gradient = _ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, gradientTop);
    gradient.addColorStop(1, gradientBottom);
    _ctx.fillStyle = gradient;
    _ctx.fill(gradientPath);
    _ctx.strokeStyle = backgroundColor;
    _ctx.lineJoin = "round";
    _ctx.lineWidth = 14;
    _ctx.stroke(path);
    _ctx.strokeStyle = accentColor;
    _ctx.lineWidth = 2;
    _ctx.stroke(path);
  }, [accentColor, backgroundColor, gradientTop, gradientBottom]);
  const [canvas, ctx] = useCanvas2d(drawPlot);
  reactExports.useImperativeHandle(ref, () => ({
    frame: (val) => {
      if (min2.current === void 0 || val < min2.current) min2.current = val;
      if (max2.current === void 0 || val > max2.current) max2.current = val;
      push(points.current, val);
      raf.current = requestAnimationFrame(() => drawPlot(canvas.current, ctx.current));
    }
  }), [canvas, ctx, drawPlot]);
  reactExports.useEffect(() => () => cancelAnimationFrame(raf.current), []);
  return React.createElement(Canvas, {
    ref: canvas
  });
});
const parse = (val) => Number.isFinite(val) ? val.toPrecision(2) : val.toString();
const MonitorLog = reactExports.forwardRef(function({
  initialValue
}, ref) {
  const [val, set] = reactExports.useState(parse(initialValue));
  reactExports.useImperativeHandle(ref, () => ({
    frame: (v2) => set(parse(v2))
  }), []);
  return React.createElement("div", null, val);
});
function getValue(o2) {
  return typeof o2 === "function" ? o2() : o2.current;
}
function Monitor({
  label,
  objectOrFn,
  settings
}) {
  const ref = reactExports.useRef();
  const initialValue = reactExports.useRef(getValue(objectOrFn));
  reactExports.useEffect(() => {
    const timeout = window.setInterval(() => {
      var _ref$current;
      if (document.hidden) return;
      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.frame(getValue(objectOrFn));
    }, settings.interval);
    return () => window.clearInterval(timeout);
  }, [objectOrFn, settings.interval]);
  return React.createElement(Row, {
    input: true
  }, React.createElement(Label, {
    align: "top"
  }, label), settings.graph ? React.createElement(MonitorCanvas, {
    ref,
    initialValue: initialValue.current
  }) : React.createElement(MonitorLog, {
    ref,
    initialValue: initialValue.current
  }));
}
const _excluded$3 = ["type", "label", "key"];
const specialComponents = {
  [SpecialInputs.BUTTON]: Button,
  [SpecialInputs.BUTTON_GROUP]: ButtonGroup,
  [SpecialInputs.MONITOR]: Monitor
};
const Control = React.memo(({
  path
}) => {
  const [input, {
    set,
    setSettings,
    disable,
    storeId,
    emitOnEditStart,
    emitOnEditEnd
  }] = useInput(path);
  if (!input) return null;
  const {
    type,
    label,
    key
  } = input, inputProps = _objectWithoutProperties$1(input, _excluded$3);
  if (type in SpecialInputs) {
    const SpecialInputForType = specialComponents[type];
    return React.createElement(SpecialInputForType, _extends({
      label,
      path
    }, inputProps));
  }
  if (!(type in Plugins)) {
    log(LevaErrors.UNSUPPORTED_INPUT, type, path);
    return null;
  }
  return React.createElement(ControlInput, _extends({
    key: storeId + path,
    type,
    label,
    storeId,
    path,
    valueKey: key,
    setValue: set,
    setSettings,
    disable,
    emitOnEditStart,
    emitOnEditEnd
  }, inputProps));
});
function FolderTitle({
  toggle,
  toggled,
  name
}) {
  return React.createElement(StyledTitle, {
    onClick: () => toggle()
  }, React.createElement(Chevron, {
    toggled
  }), React.createElement("div", null, name));
}
const Folder = ({
  name,
  path,
  tree
}) => {
  const store = useStoreContext();
  const newPath = join(path, name);
  const {
    collapsed,
    color: color2
  } = store.getFolderSettings(newPath);
  const [toggled, setToggle] = reactExports.useState(!collapsed);
  const folderRef = reactExports.useRef(null);
  const widgetColor = useTh("colors", "folderWidgetColor");
  const textColor = useTh("colors", "folderTextColor");
  reactExports.useLayoutEffect(() => {
    folderRef.current.style.setProperty("--leva-colors-folderWidgetColor", color2 || widgetColor);
    folderRef.current.style.setProperty("--leva-colors-folderTextColor", color2 || textColor);
  }, [color2, widgetColor, textColor]);
  return React.createElement(StyledFolder, {
    ref: folderRef
  }, React.createElement(FolderTitle, {
    name,
    toggled,
    toggle: () => setToggle((t2) => !t2)
  }), React.createElement(TreeWrapper, {
    parent: newPath,
    tree,
    toggled
  }));
};
const TreeWrapper = React.memo(({
  isRoot: _isRoot = false,
  fill: _fill = false,
  flat: _flat = false,
  parent,
  tree,
  toggled
}) => {
  const {
    wrapperRef,
    contentRef
  } = useToggle(toggled);
  const store = useStoreContext();
  const getOrder = ([key, o2]) => {
    var _store$getInput;
    const order = isInput(o2) ? (_store$getInput = store.getInput(o2.path)) === null || _store$getInput === void 0 ? void 0 : _store$getInput.order : store.getFolderSettings(join(parent, key)).order;
    return order || 0;
  };
  const entries = Object.entries(tree).sort((a2, b2) => getOrder(a2) - getOrder(b2));
  return React.createElement(StyledWrapper, {
    ref: wrapperRef,
    isRoot: _isRoot,
    fill: _fill,
    flat: _flat
  }, React.createElement(StyledContent, {
    ref: contentRef,
    isRoot: _isRoot,
    toggled
  }, entries.map(([key, value]) => isInput(value) ? React.createElement(Control, {
    key: value.path,
    valueKey: value.valueKey,
    path: value.path
  }) : React.createElement(Folder, {
    key,
    name: key,
    path: parent,
    tree: value
  }))));
});
const StyledRoot = styled("div", {
  position: "relative",
  fontFamily: "$mono",
  fontSize: "$root",
  color: "$rootText",
  backgroundColor: "$elevation1",
  variants: {
    fill: {
      false: {
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 1e3,
        width: "$rootWidth"
      },
      true: {
        position: "relative",
        width: "100%"
      }
    },
    flat: {
      false: {
        borderRadius: "$lg",
        boxShadow: "$level1"
      }
    },
    oneLineLabels: {
      true: {
        ["".concat(StyledInputRow)]: {
          gridTemplateColumns: "auto",
          gridAutoColumns: "minmax(max-content, 1fr)",
          gridAutoRows: "minmax($sizes$rowHeight), auto)",
          rowGap: 0,
          columnGap: 0,
          marginTop: "$rowGap"
        }
      }
    },
    hideTitleBar: {
      true: {
        $$titleBarHeight: "0px"
      },
      false: {
        $$titleBarHeight: "$sizes$titleBarHeight"
      }
    }
  },
  "&,*,*:after,*:before": {
    boxSizing: "border-box"
  },
  "*::selection": {
    backgroundColor: "$accent2"
  }
});
const iconWidth = 40;
const Icon = styled("i", {
  $flexCenter: "",
  width: iconWidth,
  userSelect: "none",
  cursor: "pointer",
  "> svg": {
    fill: "$highlight1",
    transition: "transform 350ms ease, fill 250ms ease"
  },
  "&:hover > svg": {
    fill: "$highlight3"
  },
  variants: {
    active: {
      true: {
        "> svg": {
          fill: "$highlight2"
        }
      }
    }
  }
});
const StyledTitleWithFilter = styled("div", {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
  height: "$titleBarHeight",
  variants: {
    mode: {
      drag: {
        cursor: "grab"
      }
    }
  }
});
const FilterWrapper = styled("div", {
  $flex: "",
  position: "relative",
  width: "100%",
  overflow: "hidden",
  transition: "height 250ms ease",
  color: "$highlight3",
  paddingLeft: "$md",
  ["> ".concat(Icon)]: {
    height: 30
  },
  variants: {
    toggled: {
      true: {
        height: 30
      },
      false: {
        height: 0
      }
    }
  }
});
const StyledFilterInput = styled("input", {
  $reset: "",
  flex: 1,
  position: "relative",
  height: 30,
  width: "100%",
  backgroundColor: "transparent",
  fontSize: "10px",
  borderRadius: "$root",
  "&:focus": {},
  "&::placeholder": {
    color: "$highlight2"
  }
});
const TitleContainer = styled("div", {
  touchAction: "none",
  $flexCenter: "",
  flex: 1,
  "> svg": {
    fill: "$highlight1"
  },
  color: "$highlight1",
  variants: {
    drag: {
      true: {
        $draggable: "",
        "> svg": {
          transition: "fill 250ms ease"
        },
        "&:hover": {
          color: "$highlight3"
        },
        "&:hover > svg": {
          fill: "$highlight3"
        }
      }
    },
    filterEnabled: {
      false: {
        paddingRight: iconWidth
      }
    }
  }
});
const FilterInput = React.forwardRef(({
  setFilter,
  toggle
}, ref) => {
  const [value, set] = reactExports.useState("");
  const debouncedOnChange = reactExports.useMemo(() => debounce(setFilter, 250), [setFilter]);
  const clear = () => {
    setFilter("");
    set("");
  };
  const _onChange = (e2) => {
    const v2 = e2.currentTarget.value;
    toggle(true);
    set(v2);
  };
  reactExports.useEffect(() => {
    debouncedOnChange(value);
  }, [value, debouncedOnChange]);
  return React.createElement(React.Fragment, null, React.createElement(StyledFilterInput, {
    ref,
    value,
    placeholder: "[Open filter with CMD+SHIFT+L]",
    onPointerDown: (e2) => e2.stopPropagation(),
    onChange: _onChange
  }), React.createElement(Icon, {
    onClick: () => clear(),
    style: {
      visibility: value ? "visible" : "hidden"
    }
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "14",
    width: "14",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }))));
});
function TitleWithFilter({
  setFilter,
  onDrag,
  onDragStart,
  onDragEnd,
  toggle,
  toggled,
  title,
  drag,
  filterEnabled,
  from
}) {
  const [filterShown, setShowFilter] = reactExports.useState(false);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _inputRef$current, _inputRef$current2;
    if (filterShown) (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    else (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
  }, [filterShown]);
  const bind = useDrag(({
    offset: [x2, y2],
    first,
    last
  }) => {
    onDrag({
      x: x2,
      y: y2
    });
    if (first) {
      onDragStart({
        x: x2,
        y: y2
      });
    }
    if (last) {
      onDragEnd({
        x: x2,
        y: y2
      });
    }
  }, {
    filterTaps: true,
    from: ({
      offset: [x2, y2]
    }) => [(from === null || from === void 0 ? void 0 : from.x) || x2, (from === null || from === void 0 ? void 0 : from.y) || y2]
  });
  reactExports.useEffect(() => {
    const handleShortcut = (event) => {
      if (event.key === "L" && event.shiftKey && event.metaKey) {
        setShowFilter((f2) => !f2);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);
  return React.createElement(React.Fragment, null, React.createElement(StyledTitleWithFilter, {
    mode: drag ? "drag" : void 0
  }, React.createElement(Icon, {
    active: !toggled,
    onClick: () => toggle()
  }, React.createElement(Chevron, {
    toggled,
    width: 12,
    height: 8
  })), React.createElement(TitleContainer, _extends({}, drag ? bind() : {}, {
    drag,
    filterEnabled
  }), title === void 0 && drag ? React.createElement("svg", {
    width: "20",
    height: "10",
    viewBox: "0 0 28 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "2"
  }), React.createElement("circle", {
    cx: "14",
    cy: "2",
    r: "2"
  }), React.createElement("circle", {
    cx: "26",
    cy: "2",
    r: "2"
  }), React.createElement("circle", {
    cx: "2",
    cy: "12",
    r: "2"
  }), React.createElement("circle", {
    cx: "14",
    cy: "12",
    r: "2"
  }), React.createElement("circle", {
    cx: "26",
    cy: "12",
    r: "2"
  })) : title), filterEnabled && React.createElement(Icon, {
    active: filterShown,
    onClick: () => setShowFilter((f2) => !f2)
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20",
    viewBox: "0 0 20 20"
  }, React.createElement("path", {
    d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
    clipRule: "evenodd"
  })))), React.createElement(FilterWrapper, {
    toggled: filterShown
  }, React.createElement(FilterInput, {
    ref: inputRef,
    setFilter,
    toggle
  })));
}
const _excluded$2 = ["store", "hidden", "theme", "collapsed"];
function LevaRoot(_ref) {
  let {
    store,
    hidden = false,
    theme,
    collapsed = false
  } = _ref, props2 = _objectWithoutProperties$1(_ref, _excluded$2);
  const themeContext = useDeepMemo(() => mergeTheme(theme), [theme]);
  const [toggled, setToggle] = reactExports.useState(!collapsed);
  const computedToggled = typeof collapsed === "object" ? !collapsed.collapsed : toggled;
  const computedSetToggle = reactExports.useMemo(() => {
    if (typeof collapsed === "object") {
      return (value) => {
        if (typeof value === "function") {
          collapsed.onChange(!value(!collapsed.collapsed));
        } else {
          collapsed.onChange(!value);
        }
      };
    }
    return setToggle;
  }, [collapsed]);
  if (!store || hidden) return null;
  return React.createElement(ThemeContext.Provider, {
    value: themeContext
  }, React.createElement(LevaCore, _extends({
    store
  }, props2, {
    toggled: computedToggled,
    setToggle: computedSetToggle,
    rootClass: themeContext.className
  })));
}
const LevaCore = React.memo(({
  store,
  rootClass,
  fill: _fill = false,
  flat: _flat = false,
  neverHide: _neverHide = false,
  oneLineLabels: _oneLineLabels = false,
  titleBar: _titleBar = {
    title: void 0,
    drag: true,
    filter: true,
    position: void 0,
    onDrag: void 0,
    onDragStart: void 0,
    onDragEnd: void 0
  },
  hideCopyButton: _hideCopyButton = false,
  toggled,
  setToggle
}) => {
  var _titleBar$drag, _titleBar$filter;
  const paths = useVisiblePaths(store);
  const [filter, setFilter] = reactExports.useState("");
  const tree = reactExports.useMemo(() => buildTree(paths, filter), [paths, filter]);
  const [rootRef, set] = useTransform();
  const shouldShow = _neverHide || paths.length > 0;
  const title = typeof _titleBar === "object" ? _titleBar.title || void 0 : void 0;
  const drag = typeof _titleBar === "object" ? (_titleBar$drag = _titleBar.drag) !== null && _titleBar$drag !== void 0 ? _titleBar$drag : true : true;
  const filterEnabled = typeof _titleBar === "object" ? (_titleBar$filter = _titleBar.filter) !== null && _titleBar$filter !== void 0 ? _titleBar$filter : true : true;
  const position = typeof _titleBar === "object" ? _titleBar.position || void 0 : void 0;
  const onDrag = typeof _titleBar === "object" ? _titleBar.onDrag || void 0 : void 0;
  const onDragStart = typeof _titleBar === "object" ? _titleBar.onDragStart || void 0 : void 0;
  const onDragEnd = typeof _titleBar === "object" ? _titleBar.onDragEnd || void 0 : void 0;
  React.useEffect(() => {
    set({
      x: position === null || position === void 0 ? void 0 : position.x,
      y: position === null || position === void 0 ? void 0 : position.y
    });
  }, [position, set]);
  globalStyles();
  return React.createElement(PanelSettingsContext.Provider, {
    value: {
      hideCopyButton: _hideCopyButton
    }
  }, React.createElement(StyledRoot, {
    ref: rootRef,
    className: rootClass,
    fill: _fill,
    flat: _flat,
    oneLineLabels: _oneLineLabels,
    hideTitleBar: !_titleBar,
    style: {
      display: shouldShow ? "block" : "none"
    }
  }, _titleBar && React.createElement(TitleWithFilter, {
    onDrag: (point) => {
      set(point);
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(point);
    },
    onDragStart: (point) => onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(point),
    onDragEnd: (point) => onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(point),
    setFilter,
    toggle: (flag) => setToggle((t2) => flag !== null && flag !== void 0 ? flag : !t2),
    toggled,
    title,
    drag,
    filterEnabled,
    from: position
  }), shouldShow && React.createElement(StoreContext.Provider, {
    value: store
  }, React.createElement(TreeWrapper, {
    isRoot: true,
    fill: _fill,
    flat: _flat,
    tree,
    toggled
  }))));
});
const _excluded$1 = ["isRoot"];
let rootInitialized = false;
let rootEl = null;
function Leva(_ref) {
  let {
    isRoot = false
  } = _ref, props2 = _objectWithoutProperties$1(_ref, _excluded$1);
  reactExports.useEffect(() => {
    rootInitialized = true;
    if (!isRoot && rootEl) {
      rootEl.remove();
      rootEl = null;
    }
    return () => {
      if (!isRoot) rootInitialized = false;
    };
  }, [isRoot]);
  return React.createElement(LevaRoot, _extends({
    store: levaStore
  }, props2));
}
function useRenderRoot(isGlobalPanel) {
  reactExports.useEffect(() => {
    if (isGlobalPanel && !rootInitialized) {
      if (!rootEl) {
        rootEl = document.getElementById("leva__root") || Object.assign(document.createElement("div"), {
          id: "leva__root"
        });
        if (document.body) {
          document.body.appendChild(rootEl);
          clientExports.createRoot(rootEl).render(React.createElement(Leva, {
            isRoot: true
          }));
        }
      }
      rootInitialized = true;
    }
  }, [isGlobalPanel]);
}
function parseArgs(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined) {
  let schema2;
  let folderName = void 0;
  let folderSettings;
  let hookSettings;
  let deps;
  if (typeof schemaOrFolderName === "string") {
    folderName = schemaOrFolderName;
    schema2 = settingsOrDepsOrSchema;
    if (Array.isArray(depsOrSettingsOrFolderSettings)) {
      deps = depsOrSettingsOrFolderSettings;
    }
  } else {
    schema2 = schemaOrFolderName;
    if (Array.isArray(settingsOrDepsOrSchema)) {
      deps = settingsOrDepsOrSchema;
    } else {
      hookSettings = settingsOrDepsOrSchema;
      deps = depsOrSettingsOrFolderSettings;
    }
  }
  return {
    schema: schema2,
    folderName,
    folderSettings,
    hookSettings,
    deps: deps || []
  };
}
function useControls(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined) {
  const {
    folderName,
    schema: schema2,
    folderSettings,
    hookSettings,
    deps
  } = parseArgs(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings);
  const schemaIsFunction = typeof schema2 === "function";
  const depsChanged = reactExports.useRef(false);
  const firstRender = reactExports.useRef(true);
  const _schema = useDeepMemo(() => {
    depsChanged.current = true;
    const s2 = typeof schema2 === "function" ? schema2() : schema2;
    return folderName ? {
      [folderName]: folder(s2, folderSettings)
    } : s2;
  }, deps);
  const isGlobalPanel = !(hookSettings !== null && hookSettings !== void 0 && hookSettings.store);
  useRenderRoot(isGlobalPanel);
  const [store] = reactExports.useState(() => (hookSettings === null || hookSettings === void 0 ? void 0 : hookSettings.store) || levaStore);
  const [initialData, mappedPaths] = reactExports.useMemo(() => store.getDataFromSchema(_schema), [store, _schema]);
  const [allPaths, renderPaths, onChangePaths, onEditStartPaths, onEditEndPaths] = reactExports.useMemo(() => {
    const allPaths2 = [];
    const renderPaths2 = [];
    const onChangePaths2 = {};
    const onEditStartPaths2 = {};
    const onEditEndPaths2 = {};
    Object.values(mappedPaths).forEach(({
      path,
      onChange,
      onEditStart,
      onEditEnd,
      transient
    }) => {
      allPaths2.push(path);
      if (!!onChange) {
        onChangePaths2[path] = onChange;
        if (!transient) {
          renderPaths2.push(path);
        }
      } else {
        renderPaths2.push(path);
      }
      if (onEditStart) {
        onEditStartPaths2[path] = onEditStart;
      }
      if (onEditEnd) {
        onEditEndPaths2[path] = onEditEnd;
      }
    });
    return [allPaths2, renderPaths2, onChangePaths2, onEditStartPaths2, onEditEndPaths2];
  }, [mappedPaths]);
  const paths = reactExports.useMemo(() => store.orderPaths(allPaths), [allPaths, store]);
  const values = useValuesForPath(store, renderPaths, initialData);
  const set = reactExports.useCallback((values2) => {
    const _values = Object.entries(values2).reduce((acc, [p2, v2]) => Object.assign(acc, {
      [mappedPaths[p2].path]: v2
    }), {});
    store.set(_values, false);
  }, [store, mappedPaths]);
  const get = reactExports.useCallback((path) => store.get(mappedPaths[path].path), [store, mappedPaths]);
  reactExports.useEffect(() => {
    const shouldOverrideSettings = !firstRender.current && depsChanged.current;
    store.addData(initialData, shouldOverrideSettings);
    firstRender.current = false;
    depsChanged.current = false;
    return () => store.disposePaths(paths);
  }, [store, paths, initialData]);
  reactExports.useEffect(() => {
    const unsubscriptions = [];
    Object.entries(onChangePaths).forEach(([path, onChange]) => {
      onChange(store.get(path), path, _objectSpread2({
        initial: true,
        get: store.get
      }, store.getInput(path)));
      const unsub = store.useStore.subscribe((s2) => {
        const input = s2.data[path];
        const value = input.disabled ? void 0 : input.value;
        return [value, input];
      }, ([value, input]) => onChange(value, path, _objectSpread2({
        initial: false,
        get: store.get
      }, input)), {
        equalityFn: shallow
      });
      unsubscriptions.push(unsub);
    });
    return () => unsubscriptions.forEach((unsub) => unsub());
  }, [store, onChangePaths]);
  reactExports.useEffect(() => {
    const unsubscriptions = [];
    Object.entries(onEditStartPaths).forEach(([path, onEditStart]) => unsubscriptions.push(store.subscribeToEditStart(path, onEditStart)));
    Object.entries(onEditEndPaths).forEach(([path, onEditEnd]) => unsubscriptions.push(store.subscribeToEditEnd(path, onEditEnd)));
    return () => unsubscriptions.forEach((unsub) => unsub());
  }, [onEditStartPaths, onEditEndPaths, store]);
  if (schemaIsFunction) return [values, set, get];
  return values;
}
register(LevaInputs.SELECT, select);
register(LevaInputs.IMAGE, image);
register(LevaInputs.NUMBER, number$1);
register(LevaInputs.COLOR, color);
register(LevaInputs.STRING, string);
register(LevaInputs.BOOLEAN, boolean);
register(LevaInputs.INTERVAL, interval);
register(LevaInputs.VECTOR3D, vector3d);
register(LevaInputs.VECTOR2D, vector2d);
const useKeyPress = (props2) => {
  const { targetKey, targetRef, callback } = props2;
  const [isKeyPressed, setIsKeyPressed] = reactExports.useState(false);
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  reactExports.useEffect(() => {
    var _a;
    const targetElement = (_a = targetRef == null ? void 0 : targetRef.current) != null ? _a : window;
    const handleKeyDown = (event) => {
      var _a2;
      const keyboardEvent = event;
      if (keyboardEvent.key === targetKey) {
        setIsKeyPressed(true);
        (_a2 = callbackRef.current) == null ? void 0 : _a2.call(callbackRef, keyboardEvent);
      }
    };
    const handleKeyUp = (event) => {
      const keyboardEvent = event;
      if (keyboardEvent.key === targetKey) {
        setIsKeyPressed(false);
      }
    };
    targetElement.addEventListener("keydown", handleKeyDown);
    targetElement.addEventListener("keyup", handleKeyUp);
    return () => {
      targetElement.removeEventListener("keydown", handleKeyDown);
      targetElement.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey, targetRef]);
  return isKeyPressed;
};
function CustomDebugPanel({ isVisible, onClose }) {
  const messages = useDebugStore((state) => state.msg);
  const debuggerRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const panelRef = reactExports.useRef(null);
  const [isCollapsed, setIsCollapsed] = reactExports.useState(false);
  const [position, setPosition] = reactExports.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const bind = useDrag$1(
    ({ offset: [x2, y2], dragging }) => {
      setPosition({ x: x2, y: y2 });
      setIsDragging(!!dragging);
    },
    {
      filterTaps: true,
      pointer: { capture: false }
    }
  );
  reactExports.useEffect(() => {
    if (isVisible && containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [isVisible, messages]);
  const [storageQuota, setStorageQuota] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (isVisible) {
      checkStorageQuota().then(setStorageQuota);
    }
  }, [isVisible]);
  const [errorToThrow, setErrorToThrow] = reactExports.useState(null);
  if (errorToThrow) {
    throw errorToThrow;
  }
  useKeyPress({
    targetKey: "q",
    targetRef: debuggerRef,
    callback: () => {
      if (isVisible) {
        setErrorToThrow(new Error("kabooom!"));
      }
    }
  });
  useKeyPress({
    targetKey: "f",
    targetRef: debuggerRef,
    callback: () => {
      if (isVisible && !isInIframe()) {
        const url = new URL(window.location.href).toString();
        window.open("".concat(window.location.origin).concat(window.location.pathname, "iframe.html?url=").concat(encodeURIComponent(url)), "_blank");
      }
    }
  });
  const [showIconMenu, setShowIconMenu] = reactExports.useState(false);
  useKeyPress({
    targetKey: "i",
    targetRef: debuggerRef,
    callback: () => {
      if (isVisible) {
        setShowIconMenu(true);
      }
    }
  });
  useKeyPress({
    targetKey: "Escape",
    targetRef: debuggerRef,
    callback: () => {
      if (isVisible) {
        setShowIconMenu(false);
        onClose();
      }
    }
  });
  if (!isVisible) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "CustomDebugPanel",
      ref: debuggerRef,
      tabIndex: -1,
      className: "fixed inset-0 z-[9999] flex items-center justify-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: panelRef,
            className: cn(
              "relative max-h-[90vh] overflow-y-auto rounded-2xl bg-white bg-opacity-90 p-4 shadow-2xl",
              isMobileDevice ? "w-4/5" : "w-1/4"
            ),
            style: {
              transform: "translate3d(".concat(position.x, "px, ").concat(position.y, "px, 0)"),
              userSelect: "text"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CloseButton, { onClose }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  ...bind(),
                  className: "mb-4 select-none text-2xl font-bold text-black",
                  style: {
                    cursor: isDragging ? "grabbing" : "grab",
                    touchAction: "none"
                  },
                  children: "CustomDebugPanel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  ref: containerRef,
                  className: "mb-4 flex max-h-[50vh] w-full flex-col gap-2 overflow-auto py-1",
                  style: { userSelect: "text" },
                  children: messages.length ? messages.map(([time, msg], i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Message,
                    {
                      timestamp: time,
                      text: msg
                    },
                    "".concat(time, "-").concat(i2)
                  )) : /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setIsCollapsed(!isCollapsed),
                  className: "mt-2 flex w-full items-center justify-between border-t-[0.0625rem] border-gray-200 py-2 text-xs text-gray-600 hover:bg-gray-50",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Additional Info" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: isCollapsed ? "▼" : "▲" })
                  ]
                }
              ),
              !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: cn("border-t-[0.0625rem] border-gray-200 py-2 text-xs text-gray-600"),
                    style: { userSelect: "text" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-sm font-semibold text-gray-800", children: "Storage Quota" }),
                      storageQuota ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          "Usage: ",
                          Math.round(storageQuota.usage / 1024 / 1024),
                          "MB"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          "Quota: ",
                          Math.round(storageQuota.quota / 1024 / 1024),
                          "MB"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          "Ratio: ",
                          Math.round(storageQuota.ratio * 100),
                          "%"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full rounded-full bg-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: cn(
                              "h-2 rounded-full transition-all",
                              storageQuota.ratio > 0.9 ? "bg-red-500" : storageQuota.ratio > 0.7 ? "bg-yellow-500" : "bg-green-500"
                            ),
                            style: { width: "".concat(Math.min(storageQuota.ratio * 100, 100), "%") }
                          }
                        ) }) })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500", children: "Storage API not supported" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: cn("border-t-[0.0625rem] border-gray-200 pt-2 text-xs text-gray-600"),
                    style: { userSelect: "text" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Note:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "Press ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "i" }),
                          " to open the icon menu."
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "Press ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "q" }),
                          " to intentionally break the site."
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "Press ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "f" }),
                          " to open the game with third-party iframe."
                        ] }),
                        isMobileDevice ? /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "Tap the top-left corner ",
                          TAP_COUNT,
                          " times within ",
                          TAP_TIMEOUT_MS,
                          "ms to open the debugger."
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                            "Press ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: DEBUG_PANEL_KEY_SEQUENCE }),
                            " to open the debugger."
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                            "Press ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: LEVA_KEY_SEQUENCE }),
                            " to open the Leva Control Panel."
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                            "Press ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Esc" }),
                            " to close."
                          ] })
                        ] })
                      ] })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        showIconMenu && /* @__PURE__ */ jsxRuntimeExports.jsx(IconMenu, {})
      ]
    }
  );
}
function Message({ timestamp, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "whitespace-pre-line break-words text-xs text-gray-600", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "[".concat(timestamp, "]") }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    " ",
    text
  ] });
}
function Empty() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs italic text-gray-400", children: "No debug messages to display." });
}
function CloseButton({ onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      "aria-label": "Close debugger",
      className: "absolute right-3 top-3 aspect-square w-8 rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-400",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 20 20",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M6 6l8 8M14 6l-8 8"
            }
          )
        }
      )
    }
  );
}
const CustomDebugPanel$1 = reactExports.memo(CustomDebugPanel);
const EventsLogDisplay = ({ isVisible }) => {
  const sessionId = useConfigStore((s2) => s2.SESSION_ID);
  const { gameCode, roundId } = useConfigStore((s2) => s2.roundInfo);
  return isVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "center pointer-events-none fixed left-1/2 top-1/2 z-[999] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col bg-gray-900 bg-opacity-50 py-2",
        { "text-xs": isMobileDevice }
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "Session ID: ",
          sessionId
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "Round ID: ",
          roundId
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "Game Code: ",
          gameCode
        ] })
      ]
    }
  );
};
const Debugger = () => {
  var _a, _b;
  useDevQATests();
  const [isDebugPanel, setIsDebugPanel] = reactExports.useState(false);
  const [isLevaVisible, setIsLevaVisible] = reactExports.useState(false);
  const [isEventLogVisible, setIsEventLogVisible] = reactExports.useState(false);
  useDebuggerTrigger({ onOpen: () => setIsDebugPanel(true), keySequence: DEBUG_PANEL_KEY_SEQUENCE });
  useDebuggerTrigger({ onOpen: () => setIsLevaVisible((v2) => !v2), keySequence: LEVA_KEY_SEQUENCE });
  useDebuggerTrigger({ onOpen: () => setIsEventLogVisible((v2) => !v2), keySequence: ROUND_INFO_SEQUENCE });
  useControls({
    "Jurisdictions Controls": folder(
      {
        "Support Chat": button(() => {
          useConfigStore.setState((state) => ({
            JURISDICTION: {
              ...state.JURISDICTION,
              SHOW_SUPPORT_CHAT: !state.JURISDICTION.SHOW_SUPPORT_CHAT
            }
          }));
        }),
        "Lobby Button": button(() => {
          useConfigStore.setState((state) => ({
            JURISDICTION: {
              ...state.JURISDICTION,
              SHOW_LOBBY_ALLOWED: !state.JURISDICTION.SHOW_LOBBY_ALLOWED
            }
          }));
        }),
        "Autoplay Button": button(() => {
          useConfigStore.setState((state) => ({
            JURISDICTION: { ...state.JURISDICTION, AUTOPLAY_ALLOWED: !state.JURISDICTION.AUTOPLAY_ALLOWED }
          }));
        }),
        "Full Screen": button(() => {
          useConfigStore.setState((state) => ({
            JURISDICTION: { ...state.JURISDICTION, FULLSCREEN_ALLOWED: !state.JURISDICTION.FULLSCREEN_ALLOWED }
          }));
        }),
        "Opposite Bets": {
          options: ["Allowed", "Forbidden"],
          value: ((_b = (_a = useConfigStore.getState().JURISDICTION) == null ? void 0 : _a.BET_OPTIONS) == null ? void 0 : _b.forbidOppositeBets) ? "Forbidden" : "Allowed",
          onChange: (value) => {
            const currentJurisdictions = useConfigStore.getState().JURISDICTION;
            useConfigStore.setState({
              JURISDICTION: {
                ...currentJurisdictions,
                BET_OPTIONS: {
                  ...currentJurisdictions.BET_OPTIONS,
                  forbidOppositeBets: value === "Forbidden"
                }
              }
            });
          }
        }
      },
      { collapsed: true }
    ),
    "Settings Controls": folder(
      {
        "Mute BGM": button(() => {
          const bgmRoulette = sounds.get("sound_rouletteBGM");
          const bgmSicbo = sounds.get("sound_sicboBGM");
          const noMoreBets = sounds.get("sound_noMoreBets");
          const placeYourBets = sounds.get("sound_placeYourBets");
          const lastBets = sounds.get("sound_lastBets");
          if ((bgmRoulette || bgmSicbo) && noMoreBets && placeYourBets && lastBets) {
            bgmRoulette == null ? void 0 : bgmRoulette.volume(0);
            bgmSicbo == null ? void 0 : bgmSicbo.volume(0);
            noMoreBets.volume(0);
            placeYourBets.volume(0);
            lastBets.volume(0);
          }
        }),
        "Play BGM": button(() => {
          const bgmRoulette = sounds.get("sound_rouletteBGM");
          const bgmSicbo = sounds.get("sound_sicboBGM");
          const noMoreBets = sounds.get("sound_noMoreBets");
          const placeYourBets = sounds.get("sound_placeYourBets");
          const lastBets = sounds.get("sound_lastBets");
          if (bgmRoulette) bgmRoulette.volume(0.2);
          if (bgmSicbo) bgmSicbo.volume(0.2);
          if (noMoreBets && placeYourBets && lastBets) {
            noMoreBets.volume(0.1);
            placeYourBets.volume(0.1);
            lastBets.volume(0.1);
          }
        }),
        "Game Paused": button(() => {
          useConfigStore.setState({ isPaused: true });
        }),
        "Game Resumed": button(() => {
          useConfigStore.setState({ isPaused: false });
        }),
        "IDLE Timeout": button(() => {
          useNetworkStore.setState({ forceShowIdleModal: true });
        })
      },
      { collapsed: true }
    ),
    "Table State": folder(
      {
        "Bet States": {
          options: [0, 1, 2, 3],
          value: useBettingStore.getState().gameState,
          onChange: (value) => {
            useBettingStore.setState({ gameState: value, isBet: value === BetState.Bet });
          }
        }
      },
      { collapsed: true }
    ),
    // TODO:
    // 'Win Animation': folder({
    //   'Trigger Win Anim': button(async () => {
    //     useBettingStore.setState({ gameState: BetState.Settlement })
    //     await sleep(2000)
    //   }),
    // }),
    "Player Change": folder(
      {
        "Wallet Balance": {
          value: useCartStore.getState().remainedBalance,
          onChange: (value) => useCartStore.setState({ remainedBalance: value })
        },
        "Set Total Bet": {
          value: useCartStore.getState().totalBet,
          onChange: (value) => useCartStore.setState({ totalBet: value })
        }
      },
      { collapsed: true }
    ),
    "Toasts Controls": folder(
      {
        "Show Error Toast": button(() => useToastStore.getState().addToast("error", "Low balance")),
        "Show Info Toast": button(() => useToastStore.getState().addToast("info", "Better than never")),
        "Show Success Toast": button(() => useToastStore.getState().addToast("success", "Happy new year")),
        "i18n Error Toast": {
          value: "",
          onChange: (value) => {
            if (!value) return;
            useToastStore.getState().addToast("error", t$3(value));
          }
        }
      },
      { collapsed: true }
    ),
    Animations: folder(
      {
        "Add more Pill": button(() => {
          const randomNum = () => Math.floor(Math.random() * 6) + 1;
          useWinNumberStore.setState((state) => ({
            history: [...state.history, [randomNum(), randomNum(), randomNum()]]
          }));
        }),
        "Toggle board tilt": button(() => {
          useBettingStore.setState((state) => ({ isBet: !state.isBet }));
        })
      },
      {
        collapsed: true
      }
    ),
    "Network Change": folder(
      {
        "Network Expired": button(() => useNetworkStore.setState({ isExpired: true })),
        isMultiSession: button(() => useNetworkStore.setState({ isMultiSession: true })),
        "Force show idle Modal": button(() => useNetworkStore.setState({ forceShowIdleModal: true })),
        "Force close websocket": button(() => {
          connectIns.close();
          console.log("Debugger: Websocket closed");
        })
      },
      { collapsed: true }
    ),
    "Bet Range Empty": folder({
      "Set Bet Range Empty": button(() => {
        useConfigStore.setState({ tableLimit: { min: 0, max: 0 }, betTypesLimit: {} });
      })
    }),
    "Sicbo Only": folder(
      {
        "Sicbo - Small Amount": {
          value: useCartStore.getState().betStats.amount[SicBoBetNo.SMALL] || 0,
          onChange: (value) => useCartStore.setState((state) => ({
            betStats: {
              amount: { ...state.betStats.amount, [SicBoBetNo.SMALL]: value },
              count: { ...state.betStats.count }
            }
          }))
        },
        "Sicbo - Small Count": {
          value: useCartStore.getState().betStats.count[SicBoBetNo.SMALL] || 0,
          onChange: (value) => useCartStore.setState((state) => ({
            betStats: {
              count: { ...state.betStats.count, [SicBoBetNo.SMALL]: value },
              amount: { ...state.betStats.amount }
            }
          }))
        },
        "Sicbo - Big Amount": {
          value: useCartStore.getState().betStats.amount[SicBoBetNo.BIG] || 0,
          onChange: (value) => useCartStore.setState((state) => ({
            betStats: {
              amount: { ...state.betStats.amount, [SicBoBetNo.BIG]: value },
              count: { ...state.betStats.count }
            }
          }))
        },
        "Sicbo - Big Count": {
          value: useCartStore.getState().betStats.count[SicBoBetNo.BIG] || 0,
          onChange: (value) => useCartStore.setState((state) => ({
            betStats: {
              count: { ...state.betStats.count, [SicBoBetNo.BIG]: value },
              amount: { ...state.betStats.amount }
            }
          }))
        }
      },
      { collapsed: true }
    ),
    Misc: folder({
      "Toggle Round Info": button(() => {
        setIsEventLogVisible((v2) => !v2);
      }),
      "Toggle CustomDebuggerPanel": button(() => {
        setIsDebugPanel(true);
      }),
      "Remove Stream Visual": button(() => {
        const video = document.getElementById("VideoWrapper");
        if (video) video.remove();
      }),
      "Show click area": button(() => document.body.classList.toggle("showClickArea")),
      "Throw Error": button(() => {
        throw new Error("kaboom!");
      }),
      "Open in iFrame": button(() => {
        if (!isInIframe()) {
          const url = new URL(window.location.href).toString();
          window.open("".concat(window.location.origin).concat(window.location.pathname, "iframe.html?url=").concat(encodeURIComponent(url)), "_blank");
        }
      })
    })
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Leva,
      {
        titleBar: { title: "Controls", position: { x: 0, y: 50 } },
        isRoot: true,
        theme: {
          sizes: {
            rootWidth: "20rem",
            controlWidth: "8rem",
            titleBarHeight: "1.5rem"
          },
          fontSizes: {
            root: "0.675rem",
            toolTip: "0.75rem"
          }
        },
        hidden: !isLevaVisible
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomDebugPanel$1,
      {
        isVisible: isDebugPanel,
        onClose: () => setIsDebugPanel(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventsLogDisplay, { isVisible: isEventLogVisible })
  ] });
};
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v2) => ({
  x: v2,
  y: v2
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
const yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ["left", "right"];
const rlPlacement = ["right", "left"];
const tbPlacement = ["top", "bottom"];
const btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x2,
    y: y2,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y2,
    left: x2,
    right: x2 + width,
    bottom: y2 + height,
    x: x2,
    y: y2
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x2,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i2 = 0; i2 < validMiddleware.length; i2++) {
    const {
      name,
      fn
    } = validMiddleware[i2];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x2,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x2 = nextX != null ? nextX : x2;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x2,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i2 = -1;
    }
  }
  return {
    x: x2,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x2,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x2,
    y: y2,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$1 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x2,
      y: y2,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x2,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d2) => getSideAxis(d2.placement) === initialSideAxis ? d2.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a2, b2) => a2.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d2) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d2.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b2) => a2[1] - b2[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
const originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x2,
        y: y2,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x2 + diffCoords.x,
        y: y2 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y2,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x3,
              y: y3
            } = _ref;
            return {
              x: x3,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x2,
        y: y2
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x2,
          y: limitedCoords.y - y2,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
const willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
const containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css2 = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css2[value] ? css2[value] !== "none" : false) || (css2.containerType ? css2.containerType !== "normal" : false) || !webkit && (css2.backdropFilter ? css2.backdropFilter !== "none" : false) || !webkit && (css2.filter ? css2.filter !== "none" : false) || willChangeValues.some((value) => (css2.willChange || "").includes(value)) || containValues.some((value) => (css2.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
const lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css2 = getComputedStyle$1(element);
  let width = parseFloat(css2.width) || 0;
  let height = parseFloat(css2.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x2 = ($2 ? round(rect.width) : rect.width) / width;
  let y2 = ($2 ? round(rect.height) : rect.height) / height;
  if (!x2 || !Number.isFinite(x2)) {
    x2 = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x: x2,
    y: y2
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x2 = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css2 = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css2.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css2.paddingTop)) * iframeScale.y;
      x2 *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x2 += left;
      y2 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x2,
    y: y2
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x2 = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y2 = htmlRect.top + scroll.scrollTop;
  return {
    x: x2,
    y: y2
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x2 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x2 = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
const absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x2 = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x2 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y2 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x: x2,
    y: y2,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle$1(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a2, b2) {
  return a2.x === b2.x && a2.y === b2.y && a2.width === b2.width && a2.height === b2.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset = offset$1;
const shift = shift$1;
const flip = flip$1;
const arrow = arrow$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var hasRequiredClassnames;
function requireClassnames() {
  if (hasRequiredClassnames) return classnames.exports;
  hasRequiredClassnames = 1;
  (function(module) {
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i2 = 0; i2 < arguments.length; i2++) {
          var arg = arguments[i2];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames);
  return classnames.exports;
}
var classnamesExports = requireClassnames();
const y = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
var define_process_env_default = {};
const h = "react-tooltip-core-styles", w = "react-tooltip-base-styles", b = { core: false, base: false };
function S({ css: e2, id: t2 = w, type: o2 = "base", ref: l2 }) {
  var r2, n2;
  if (!e2 || "undefined" == typeof document || b[o2]) return;
  if ("core" === o2 && "undefined" != typeof process && (null === (r2 = null === process || void 0 === process ? void 0 : define_process_env_default) || void 0 === r2 ? void 0 : r2.REACT_TOOLTIP_DISABLE_CORE_STYLES)) return;
  if ("base" !== o2 && "undefined" != typeof process && (null === (n2 = null === process || void 0 === process ? void 0 : define_process_env_default) || void 0 === n2 ? void 0 : n2.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
  "core" === o2 && (t2 = h), l2 || (l2 = {});
  const { insertAt: i2 } = l2;
  if (document.getElementById(t2)) return;
  const c2 = document.head || document.getElementsByTagName("head")[0], s2 = document.createElement("style");
  s2.id = t2, s2.type = "text/css", "top" === i2 && c2.firstChild ? c2.insertBefore(s2, c2.firstChild) : c2.appendChild(s2), s2.styleSheet ? s2.styleSheet.cssText = e2 : s2.appendChild(document.createTextNode(e2)), b[o2] = true;
}
const E = async ({ elementReference: e2 = null, tooltipReference: t2 = null, tooltipArrowReference: o2 = null, place: l2 = "top", offset: r2 = 10, strategy: n2 = "absolute", middlewares: i2 = [offset(Number(r2)), flip({ fallbackAxisSideDirection: "start" }), shift({ padding: 5 })], border: c2, arrowSize: s2 = 8 }) => {
  if (!e2) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: l2 };
  if (null === t2) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: l2 };
  const a2 = i2;
  return o2 ? (a2.push(arrow({ element: o2, padding: 5 })), computePosition(e2, t2, { placement: l2, strategy: n2, middleware: a2 }).then((({ x: e3, y: t3, placement: o3, middlewareData: l3 }) => {
    var r3, n3;
    const i3 = { left: "".concat(e3, "px"), top: "".concat(t3, "px"), border: c2 }, { x: a3, y: u2 } = null !== (r3 = l3.arrow) && void 0 !== r3 ? r3 : { x: 0, y: 0 }, d2 = null !== (n3 = { top: "bottom", right: "left", bottom: "top", left: "right" }[o3.split("-")[0]]) && void 0 !== n3 ? n3 : "bottom", p2 = c2 && { borderBottom: c2, borderRight: c2 };
    let v2 = 0;
    if (c2) {
      const e4 = "".concat(c2).match(/(\d+)px/);
      v2 = (null == e4 ? void 0 : e4[1]) ? Number(e4[1]) : 1;
    }
    return { tooltipStyles: i3, tooltipArrowStyles: { left: null != a3 ? "".concat(a3, "px") : "", top: null != u2 ? "".concat(u2, "px") : "", right: "", bottom: "", ...p2, [d2]: "-".concat(s2 / 2 + v2, "px") }, place: o3 };
  }))) : computePosition(e2, t2, { placement: "bottom", strategy: n2, middleware: a2 }).then((({ x: e3, y: t3, placement: o3 }) => ({ tooltipStyles: { left: "".concat(e3, "px"), top: "".concat(t3, "px") }, tooltipArrowStyles: {}, place: o3 })));
}, A = (e2, t2) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e2, t2), _ = (e2, t2, o2) => {
  let l2 = null;
  const r2 = function(...r3) {
    const n2 = () => {
      l2 = null;
    };
    !l2 && (e2.apply(this, r3), l2 = setTimeout(n2, t2));
  };
  return r2.cancel = () => {
    l2 && (clearTimeout(l2), l2 = null);
  }, r2;
}, O = (e2) => null !== e2 && !Array.isArray(e2) && "object" == typeof e2, k = (e2, t2) => {
  if (e2 === t2) return true;
  if (Array.isArray(e2) && Array.isArray(t2)) return e2.length === t2.length && e2.every(((e3, o3) => k(e3, t2[o3])));
  if (Array.isArray(e2) !== Array.isArray(t2)) return false;
  if (!O(e2) || !O(t2)) return e2 === t2;
  const o2 = Object.keys(e2), l2 = Object.keys(t2);
  return o2.length === l2.length && o2.every(((o3) => k(e2[o3], t2[o3])));
}, T = (e2) => {
  if (!(e2 instanceof HTMLElement || e2 instanceof SVGElement)) return false;
  const t2 = getComputedStyle(e2);
  return ["overflow", "overflow-x", "overflow-y"].some(((e3) => {
    const o2 = t2.getPropertyValue(e3);
    return "auto" === o2 || "scroll" === o2;
  }));
}, L = (e2) => {
  if (!e2) return null;
  let t2 = e2.parentElement;
  for (; t2; ) {
    if (T(t2)) return t2;
    t2 = t2.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, C = "undefined" != typeof window ? reactExports.useLayoutEffect : reactExports.useEffect, R = (e2) => {
  e2.current && (clearTimeout(e2.current), e2.current = null);
}, x = "DEFAULT_TOOLTIP_ID", N = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, $ = reactExports.createContext({ getTooltipData: () => N });
function z(e2 = x) {
  return reactExports.useContext($).getTooltipData(e2);
}
var B = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, D = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const q = ({ forwardRef: t2, id: l2, className: i2, classNameArrow: c2, variant: u2 = "dark", anchorId: d2, anchorSelect: p2, place: v2 = "top", offset: m2 = 10, events: h2 = ["hover"], openOnClick: w2 = false, positionStrategy: b2 = "absolute", middlewares: S2, wrapper: g2, delayShow: A2 = 0, delayHide: O2 = 0, float: T2 = false, hidden: x2 = false, noArrow: N2 = false, clickable: $2 = false, closeOnEsc: I2 = false, closeOnScroll: j2 = false, closeOnResize: q2 = false, openEvents: H2, closeEvents: M2, globalCloseEvents: W2, imperativeModeOnly: P2, style: V2, position: F2, afterShow: K, afterHide: U2, disableTooltip: X, content: Y2, contentWrapperRef: G2, isOpen: Z, defaultIsOpen: J2 = false, setIsOpen: Q2, activeAnchor: ee2, setActiveAnchor: te, border: oe, opacity: le, arrowColor: re2, arrowSize: ne = 8, role: ie = "tooltip" }) => {
  var ce;
  const se = reactExports.useRef(null), ae = reactExports.useRef(null), ue = reactExports.useRef(null), de = reactExports.useRef(null), pe = reactExports.useRef(null), [ve, me] = reactExports.useState({ tooltipStyles: {}, tooltipArrowStyles: {}, place: v2 }), [fe, ye] = reactExports.useState(false), [he, we] = reactExports.useState(false), [be, Se] = reactExports.useState(null), ge = reactExports.useRef(false), Ee = reactExports.useRef(null), { anchorRefs: Ae, setActiveAnchor: _e } = z(l2), Oe = reactExports.useRef(false), [ke, Te] = reactExports.useState([]), Le = reactExports.useRef(false), Ce2 = w2 || h2.includes("click"), Re = Ce2 || (null == H2 ? void 0 : H2.click) || (null == H2 ? void 0 : H2.dblclick) || (null == H2 ? void 0 : H2.mousedown), xe2 = H2 ? { ...H2 } : { mouseover: true, focus: true, mouseenter: false, click: false, dblclick: false, mousedown: false };
  !H2 && Ce2 && Object.assign(xe2, { mouseenter: false, focus: false, mouseover: false, click: true });
  const Ne2 = M2 ? { ...M2 } : { mouseout: true, blur: true, mouseleave: false, click: false, dblclick: false, mouseup: false };
  !M2 && Ce2 && Object.assign(Ne2, { mouseleave: false, blur: false, mouseout: false });
  const $e = W2 ? { ...W2 } : { escape: I2 || false, scroll: j2 || false, resize: q2 || false, clickOutsideAnchor: Re || false };
  P2 && (Object.assign(xe2, { mouseover: false, focus: false, mouseenter: false, click: false, dblclick: false, mousedown: false }), Object.assign(Ne2, { mouseout: false, blur: false, mouseleave: false, click: false, dblclick: false, mouseup: false }), Object.assign($e, { escape: false, scroll: false, resize: false, clickOutsideAnchor: false })), C((() => (Le.current = true, () => {
    Le.current = false;
  })), []);
  const Ie = (e2) => {
    Le.current && (e2 && we(true), setTimeout((() => {
      Le.current && (null == Q2 || Q2(e2), void 0 === Z && ye(e2));
    }), 10));
  };
  reactExports.useEffect((() => {
    if (void 0 === Z) return () => null;
    Z && we(true);
    const e2 = setTimeout((() => {
      ye(Z);
    }), 10);
    return () => {
      clearTimeout(e2);
    };
  }), [Z]), reactExports.useEffect((() => {
    if (fe !== ge.current) if (R(pe), ge.current = fe, fe) null == K || K();
    else {
      const e2 = ((e3) => {
        const t3 = e3.match(/^([\d.]+)(ms|s)$/);
        if (!t3) return 0;
        const [, o2, l3] = t3;
        return Number(o2) * ("ms" === l3 ? 1 : 1e3);
      })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
      pe.current = setTimeout((() => {
        we(false), Se(null), null == U2 || U2();
      }), e2 + 25);
    }
  }), [fe]);
  const ze = (e2) => {
    me(((t3) => k(t3, e2) ? t3 : e2));
  }, je = (e2 = A2) => {
    R(ue), he ? Ie(true) : ue.current = setTimeout((() => {
      Ie(true);
    }), e2);
  }, Be = (e2 = O2) => {
    R(de), de.current = setTimeout((() => {
      Oe.current || Ie(false);
    }), e2);
  }, De = (e2) => {
    var t3;
    if (!e2) return;
    const o2 = null !== (t3 = e2.currentTarget) && void 0 !== t3 ? t3 : e2.target;
    if (!(null == o2 ? void 0 : o2.isConnected)) return te(null), void _e({ current: null });
    A2 ? je() : Ie(true), te(o2), _e({ current: o2 }), R(de);
  }, qe = () => {
    $2 ? Be(O2 || 100) : O2 ? Be() : Ie(false), R(ue);
  }, He = ({ x: e2, y: t3 }) => {
    var o2;
    const l3 = { getBoundingClientRect: () => ({ x: e2, y: t3, width: 0, height: 0, top: t3, left: e2, right: e2, bottom: t3 }) };
    E({ place: null !== (o2 = null == be ? void 0 : be.place) && void 0 !== o2 ? o2 : v2, offset: m2, elementReference: l3, tooltipReference: se.current, tooltipArrowReference: ae.current, strategy: b2, middlewares: S2, border: oe, arrowSize: ne }).then(((e3) => {
      ze(e3);
    }));
  }, Me2 = (e2) => {
    if (!e2) return;
    const t3 = e2, o2 = { x: t3.clientX, y: t3.clientY };
    He(o2), Ee.current = o2;
  }, We = (e2) => {
    var t3;
    if (!fe) return;
    const o2 = e2.target;
    if (!o2.isConnected) return;
    if (null === (t3 = se.current) || void 0 === t3 ? void 0 : t3.contains(o2)) return;
    [document.querySelector("[id='".concat(d2, "']")), ...ke].some(((e3) => null == e3 ? void 0 : e3.contains(o2))) || (Ie(false), R(ue));
  }, Pe = _(De, 50), Ve = _(qe, 50), Fe = (e2) => {
    Ve.cancel(), Pe(e2);
  }, Ke = () => {
    Pe.cancel(), Ve();
  }, Ue = reactExports.useCallback((() => {
    var e2, t3;
    const o2 = null !== (e2 = null == be ? void 0 : be.position) && void 0 !== e2 ? e2 : F2;
    o2 ? He(o2) : T2 ? Ee.current && He(Ee.current) : (null == ee2 ? void 0 : ee2.isConnected) && E({ place: null !== (t3 = null == be ? void 0 : be.place) && void 0 !== t3 ? t3 : v2, offset: m2, elementReference: ee2, tooltipReference: se.current, tooltipArrowReference: ae.current, strategy: b2, middlewares: S2, border: oe, arrowSize: ne }).then(((e3) => {
      Le.current && ze(e3);
    }));
  }), [fe, ee2, Y2, V2, v2, null == be ? void 0 : be.place, m2, b2, F2, null == be ? void 0 : be.position, T2, ne]);
  reactExports.useEffect((() => {
    var e2, t3;
    const o2 = new Set(Ae);
    ke.forEach(((e3) => {
      (null == X ? void 0 : X(e3)) || o2.add({ current: e3 });
    }));
    const l3 = document.querySelector("[id='".concat(d2, "']"));
    l3 && !(null == X ? void 0 : X(l3)) && o2.add({ current: l3 });
    const r2 = () => {
      Ie(false);
    }, n2 = L(ee2), i3 = L(se.current);
    $e.scroll && (window.addEventListener("scroll", r2), null == n2 || n2.addEventListener("scroll", r2), null == i3 || i3.addEventListener("scroll", r2));
    let c3 = null;
    $e.resize ? window.addEventListener("resize", r2) : ee2 && se.current && (c3 = autoUpdate(ee2, se.current, Ue, { ancestorResize: true, elementResize: true, layoutShift: true }));
    const s2 = (e3) => {
      "Escape" === e3.key && Ie(false);
    };
    $e.escape && window.addEventListener("keydown", s2), $e.clickOutsideAnchor && window.addEventListener("click", We);
    const a2 = [], u3 = (e3) => Boolean((null == e3 ? void 0 : e3.target) && (null == ee2 ? void 0 : ee2.contains(e3.target))), p3 = (e3) => {
      fe && u3(e3) || De(e3);
    }, v3 = (e3) => {
      fe && u3(e3) && qe();
    }, m3 = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], y2 = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(xe2).forEach((([e3, t4]) => {
      t4 && (m3.includes(e3) ? a2.push({ event: e3, listener: Fe }) : y2.includes(e3) && a2.push({ event: e3, listener: p3 }));
    })), Object.entries(Ne2).forEach((([e3, t4]) => {
      t4 && (m3.includes(e3) ? a2.push({ event: e3, listener: Ke }) : y2.includes(e3) && a2.push({ event: e3, listener: v3 }));
    })), T2 && a2.push({ event: "pointermove", listener: Me2 });
    const h3 = () => {
      Oe.current = true;
    }, w3 = () => {
      Oe.current = false, qe();
    }, b3 = $2 && (Ne2.mouseout || Ne2.mouseleave);
    return b3 && (null === (e2 = se.current) || void 0 === e2 || e2.addEventListener("mouseover", h3), null === (t3 = se.current) || void 0 === t3 || t3.addEventListener("mouseout", w3)), a2.forEach((({ event: e3, listener: t4 }) => {
      o2.forEach(((o3) => {
        var l4;
        null === (l4 = o3.current) || void 0 === l4 || l4.addEventListener(e3, t4);
      }));
    })), () => {
      var e3, t4;
      $e.scroll && (window.removeEventListener("scroll", r2), null == n2 || n2.removeEventListener("scroll", r2), null == i3 || i3.removeEventListener("scroll", r2)), $e.resize ? window.removeEventListener("resize", r2) : null == c3 || c3(), $e.clickOutsideAnchor && window.removeEventListener("click", We), $e.escape && window.removeEventListener("keydown", s2), b3 && (null === (e3 = se.current) || void 0 === e3 || e3.removeEventListener("mouseover", h3), null === (t4 = se.current) || void 0 === t4 || t4.removeEventListener("mouseout", w3)), a2.forEach((({ event: e4, listener: t5 }) => {
        o2.forEach(((o3) => {
          var l4;
          null === (l4 = o3.current) || void 0 === l4 || l4.removeEventListener(e4, t5);
        }));
      }));
    };
  }), [ee2, Ue, he, Ae, ke, H2, M2, W2, Ce2, A2, O2]), reactExports.useEffect((() => {
    var e2, t3;
    let o2 = null !== (t3 = null !== (e2 = null == be ? void 0 : be.anchorSelect) && void 0 !== e2 ? e2 : p2) && void 0 !== t3 ? t3 : "";
    !o2 && l2 && (o2 = "[data-tooltip-id='".concat(l2.replace(/'/g, "\\'"), "']"));
    const r2 = new MutationObserver(((e3) => {
      const t4 = [], r3 = [];
      e3.forEach(((e4) => {
        if ("attributes" === e4.type && "data-tooltip-id" === e4.attributeName) {
          e4.target.getAttribute("data-tooltip-id") === l2 ? t4.push(e4.target) : e4.oldValue === l2 && r3.push(e4.target);
        }
        if ("childList" === e4.type) {
          if (ee2) {
            const t5 = [...e4.removedNodes].filter(((e5) => 1 === e5.nodeType));
            if (o2) try {
              r3.push(...t5.filter(((e5) => e5.matches(o2)))), r3.push(...t5.flatMap(((e5) => [...e5.querySelectorAll(o2)])));
            } catch (e5) {
            }
            t5.some(((e5) => {
              var t6;
              return !!(null === (t6 = null == e5 ? void 0 : e5.contains) || void 0 === t6 ? void 0 : t6.call(e5, ee2)) && (we(false), Ie(false), te(null), R(ue), R(de), true);
            }));
          }
          if (o2) try {
            const l3 = [...e4.addedNodes].filter(((e5) => 1 === e5.nodeType));
            t4.push(...l3.filter(((e5) => e5.matches(o2)))), t4.push(...l3.flatMap(((e5) => [...e5.querySelectorAll(o2)])));
          } catch (e5) {
          }
        }
      })), (t4.length || r3.length) && Te(((e4) => [...e4.filter(((e5) => !r3.includes(e5))), ...t4]));
    }));
    return r2.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["data-tooltip-id"], attributeOldValue: true }), () => {
      r2.disconnect();
    };
  }), [l2, p2, null == be ? void 0 : be.anchorSelect, ee2]), reactExports.useEffect((() => {
    Ue();
  }), [Ue]), reactExports.useEffect((() => {
    if (!(null == G2 ? void 0 : G2.current)) return () => null;
    const e2 = new ResizeObserver((() => {
      setTimeout((() => Ue()));
    }));
    return e2.observe(G2.current), () => {
      e2.disconnect();
    };
  }), [Y2, null == G2 ? void 0 : G2.current]), reactExports.useEffect((() => {
    var e2;
    const t3 = document.querySelector("[id='".concat(d2, "']")), o2 = [...ke, t3];
    ee2 && o2.includes(ee2) || te(null !== (e2 = ke[0]) && void 0 !== e2 ? e2 : t3);
  }), [d2, ke, ee2]), reactExports.useEffect((() => (J2 && Ie(true), () => {
    R(ue), R(de);
  })), []), reactExports.useEffect((() => {
    var e2;
    let t3 = null !== (e2 = null == be ? void 0 : be.anchorSelect) && void 0 !== e2 ? e2 : p2;
    if (!t3 && l2 && (t3 = "[data-tooltip-id='".concat(l2.replace(/'/g, "\\'"), "']")), t3) try {
      const e3 = Array.from(document.querySelectorAll(t3));
      Te(e3);
    } catch (e3) {
      Te([]);
    }
  }), [l2, p2, null == be ? void 0 : be.anchorSelect]), reactExports.useEffect((() => {
    ue.current && (R(ue), je(A2));
  }), [A2]);
  const Xe = null !== (ce = null == be ? void 0 : be.content) && void 0 !== ce ? ce : Y2, Ye = fe && Object.keys(ve.tooltipStyles).length > 0;
  return reactExports.useImperativeHandle(t2, (() => ({ open: (e2) => {
    if (null == e2 ? void 0 : e2.anchorSelect) try {
      document.querySelector(e2.anchorSelect);
    } catch (t3) {
      return void console.warn('[react-tooltip] "'.concat(e2.anchorSelect, '" is not a valid CSS selector'));
    }
    Se(null != e2 ? e2 : null), (null == e2 ? void 0 : e2.delay) ? je(e2.delay) : Ie(true);
  }, close: (e2) => {
    (null == e2 ? void 0 : e2.delay) ? Be(e2.delay) : Ie(false);
  }, activeAnchor: ee2, place: ve.place, isOpen: Boolean(he && !x2 && Xe && Ye) }))), he && !x2 && Xe ? React.createElement(g2, { id: l2, role: ie, className: y("react-tooltip", B.tooltip, D.tooltip, D[u2], i2, "react-tooltip__place-".concat(ve.place), B[Ye ? "show" : "closing"], Ye ? "react-tooltip__show" : "react-tooltip__closing", "fixed" === b2 && B.fixed, $2 && B.clickable), onTransitionEnd: (e2) => {
    R(pe), fe || "opacity" !== e2.propertyName || (we(false), Se(null), null == U2 || U2());
  }, style: { ...V2, ...ve.tooltipStyles, opacity: void 0 !== le && Ye ? le : void 0 }, ref: se }, Xe, React.createElement(g2, { className: y("react-tooltip-arrow", B.arrow, D.arrow, c2, N2 && B.noArrow), style: { ...ve.tooltipArrowStyles, background: re2 ? "linear-gradient(to right bottom, transparent 50%, ".concat(re2, " 50%)") : void 0, "--rt-arrow-size": "".concat(ne, "px") }, ref: ae })) : null;
}, H = ({ content: t2 }) => React.createElement("span", { dangerouslySetInnerHTML: { __html: t2 } }), M = React.forwardRef((({ id: t2, anchorId: l2, anchorSelect: n2, content: i2, html: c2, render: a2, className: u2, classNameArrow: d2, variant: p2 = "dark", place: v2 = "top", offset: m2 = 10, wrapper: f2 = "div", children: h2 = null, events: w2 = ["hover"], openOnClick: b2 = false, positionStrategy: S2 = "absolute", middlewares: g2, delayShow: E2 = 0, delayHide: _2 = 0, float: O2 = false, hidden: k2 = false, noArrow: T2 = false, clickable: L2 = false, closeOnEsc: C2 = false, closeOnScroll: R2 = false, closeOnResize: x2 = false, openEvents: N2, closeEvents: $2, globalCloseEvents: I2, imperativeModeOnly: j2 = false, style: B2, position: D2, isOpen: M2, defaultIsOpen: W2 = false, disableStyleInjection: P2 = false, border: V2, opacity: F2, arrowColor: K, arrowSize: U2, setIsOpen: X, afterShow: Y2, afterHide: G2, disableTooltip: Z, role: J2 = "tooltip" }, Q2) => {
  const [ee2, te] = reactExports.useState(i2), [oe, le] = reactExports.useState(c2), [re2, ne] = reactExports.useState(v2), [ie, ce] = reactExports.useState(p2), [se, ae] = reactExports.useState(m2), [ue, de] = reactExports.useState(E2), [pe, ve] = reactExports.useState(_2), [me, fe] = reactExports.useState(O2), [ye, he] = reactExports.useState(k2), [we, be] = reactExports.useState(f2), [Se, ge] = reactExports.useState(w2), [Ee, Ae] = reactExports.useState(S2), [_e, Oe] = reactExports.useState(null), [ke, Te] = reactExports.useState(null), Le = reactExports.useRef(P2), { anchorRefs: Ce2, activeAnchor: Re } = z(t2), xe2 = (e2) => null == e2 ? void 0 : e2.getAttributeNames().reduce(((t3, o2) => {
    var l3;
    if (o2.startsWith("data-tooltip-")) {
      t3[o2.replace(/^data-tooltip-/, "")] = null !== (l3 = null == e2 ? void 0 : e2.getAttribute(o2)) && void 0 !== l3 ? l3 : null;
    }
    return t3;
  }), {}), Ne2 = (e2) => {
    const t3 = { place: (e3) => {
      var t4;
      ne(null !== (t4 = e3) && void 0 !== t4 ? t4 : v2);
    }, content: (e3) => {
      te(null != e3 ? e3 : i2);
    }, html: (e3) => {
      le(null != e3 ? e3 : c2);
    }, variant: (e3) => {
      var t4;
      ce(null !== (t4 = e3) && void 0 !== t4 ? t4 : p2);
    }, offset: (e3) => {
      ae(null === e3 ? m2 : Number(e3));
    }, wrapper: (e3) => {
      var t4;
      be(null !== (t4 = e3) && void 0 !== t4 ? t4 : f2);
    }, events: (e3) => {
      const t4 = null == e3 ? void 0 : e3.split(" ");
      ge(null != t4 ? t4 : w2);
    }, "position-strategy": (e3) => {
      var t4;
      Ae(null !== (t4 = e3) && void 0 !== t4 ? t4 : S2);
    }, "delay-show": (e3) => {
      de(null === e3 ? E2 : Number(e3));
    }, "delay-hide": (e3) => {
      ve(null === e3 ? _2 : Number(e3));
    }, float: (e3) => {
      fe(null === e3 ? O2 : "true" === e3);
    }, hidden: (e3) => {
      he(null === e3 ? k2 : "true" === e3);
    }, "class-name": (e3) => {
      Oe(e3);
    } };
    Object.values(t3).forEach(((e3) => e3(null))), Object.entries(e2).forEach((([e3, o2]) => {
      var l3;
      null === (l3 = t3[e3]) || void 0 === l3 || l3.call(t3, o2);
    }));
  };
  reactExports.useEffect((() => {
    te(i2);
  }), [i2]), reactExports.useEffect((() => {
    le(c2);
  }), [c2]), reactExports.useEffect((() => {
    ne(v2);
  }), [v2]), reactExports.useEffect((() => {
    ce(p2);
  }), [p2]), reactExports.useEffect((() => {
    ae(m2);
  }), [m2]), reactExports.useEffect((() => {
    de(E2);
  }), [E2]), reactExports.useEffect((() => {
    ve(_2);
  }), [_2]), reactExports.useEffect((() => {
    fe(O2);
  }), [O2]), reactExports.useEffect((() => {
    he(k2);
  }), [k2]), reactExports.useEffect((() => {
    Ae(S2);
  }), [S2]), reactExports.useEffect((() => {
    Le.current !== P2 && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }), [P2]), reactExports.useEffect((() => {
    "undefined" != typeof window && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: "core" === P2, disableBase: P2 } }));
  }), []), reactExports.useEffect((() => {
    var e2;
    const o2 = new Set(Ce2);
    let r2 = n2;
    if (!r2 && t2 && (r2 = "[data-tooltip-id='".concat(t2.replace(/'/g, "\\'"), "']")), r2) try {
      document.querySelectorAll(r2).forEach(((e3) => {
        o2.add({ current: e3 });
      }));
    } catch (e3) {
      console.warn('[react-tooltip] "'.concat(r2, '" is not a valid CSS selector'));
    }
    const i3 = document.querySelector("[id='".concat(l2, "']"));
    if (i3 && o2.add({ current: i3 }), !o2.size) return () => null;
    const c3 = null !== (e2 = null != ke ? ke : i3) && void 0 !== e2 ? e2 : Re.current, s2 = new MutationObserver(((e3) => {
      e3.forEach(((e4) => {
        var t3;
        if (!c3 || "attributes" !== e4.type || !(null === (t3 = e4.attributeName) || void 0 === t3 ? void 0 : t3.startsWith("data-tooltip-"))) return;
        const o3 = xe2(c3);
        Ne2(o3);
      }));
    })), a3 = { attributes: true, childList: false, subtree: false };
    if (c3) {
      const e3 = xe2(c3);
      Ne2(e3), s2.observe(c3, a3);
    }
    return () => {
      s2.disconnect();
    };
  }), [Ce2, Re, ke, l2, n2]), reactExports.useEffect((() => {
    (null == B2 ? void 0 : B2.border) && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), V2 && !A("border", "".concat(V2)) && console.warn('[react-tooltip] "'.concat(V2, '" is not a valid `border`.')), (null == B2 ? void 0 : B2.opacity) && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), F2 && !A("opacity", "".concat(F2)) && console.warn('[react-tooltip] "'.concat(F2, '" is not a valid `opacity`.'));
  }), []);
  let $e = h2;
  const Ie = reactExports.useRef(null);
  if (a2) {
    const t3 = a2({ content: (null == ke ? void 0 : ke.getAttribute("data-tooltip-content")) || ee2 || null, activeAnchor: ke });
    $e = t3 ? React.createElement("div", { ref: Ie, className: "react-tooltip-content-wrapper" }, t3) : null;
  } else ee2 && ($e = ee2);
  oe && ($e = React.createElement(H, { content: oe }));
  const ze = { forwardRef: Q2, id: t2, anchorId: l2, anchorSelect: n2, className: y(u2, _e), classNameArrow: d2, content: $e, contentWrapperRef: Ie, place: re2, variant: ie, offset: se, wrapper: we, events: Se, openOnClick: b2, positionStrategy: Ee, middlewares: g2, delayShow: ue, delayHide: pe, float: me, hidden: ye, noArrow: T2, clickable: L2, closeOnEsc: C2, closeOnScroll: R2, closeOnResize: x2, openEvents: N2, closeEvents: $2, globalCloseEvents: I2, imperativeModeOnly: j2, style: B2, position: D2, isOpen: M2, defaultIsOpen: W2, border: V2, opacity: F2, arrowColor: K, arrowSize: U2, setIsOpen: X, afterShow: Y2, afterHide: G2, disableTooltip: Z, activeAnchor: ke, setActiveAnchor: (e2) => Te(e2), role: J2 };
  return React.createElement(q, { ...ze });
}));
"undefined" != typeof window && window.addEventListener("react-tooltip-inject-styles", ((e2) => {
  e2.detail.disableCore || S({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s;--rt-arrow-size:8px}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit;z-index:-1}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), e2.detail.disableBase || S({ css: "\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:var(--rt-arrow-size);height:var(--rt-arrow-size)}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}", type: "base" });
}));
function TooltipList() {
  const tooltipRef = reactExports.useRef(null);
  const { t: t2 } = useTranslation();
  const openTooltip = (props2) => {
    return (extraProps) => {
      var _a, _b;
      (_a = tooltipRef.current) == null ? void 0 : _a.open({ ...props2, ...extraProps });
      (_b = tooltipRef.current) == null ? void 0 : _b.close({ delay: 3e3 });
    };
  };
  reactExports.useEffect(() => {
    tooltipEventBus.subscribe(
      "lowBalance",
      openTooltip({
        anchorSelect: "#MainBalance",
        content: t2("COMMON.LOW_BALANCE1"),
        place: "bottom-start"
      })
    );
    tooltipEventBus.subscribe(
      "betAutomatically",
      openTooltip({
        anchorSelect: "#AutoPlayBtn",
        content: t2("COMMON.REPEAT_AUTOMATICALLY"),
        place: "bottom-start"
      })
    );
    tooltipEventBus.subscribe(
      "empty",
      openTooltip({
        anchorSelect: "#MainUndoBtn",
        content: t2("COMMON.FIRST_BETS"),
        place: "top-start"
      })
    );
    tooltipEventBus.subscribe(
      "close",
      openTooltip({
        content: t2("COMMON.NEXT_GAME_SOON"),
        place: "top-end"
      })
    );
    tooltipEventBus.subscribe(
      "comingSoon",
      openTooltip({
        content: t2("COMMON.COMING_SOON"),
        place: "top-start"
      })
    );
    tooltipEventBus.subscribe(
      "overLimit",
      openTooltip({
        content: t2("COMMON.MAX_LIMIT_REACHED"),
        place: "top"
      })
    );
    tooltipEventBus.subscribe(
      "noBet",
      openTooltip({
        anchorSelect: "#AutoPlayBtn",
        content: t2("COMMON.NO_BET"),
        place: isMobileDevice ? "bottom-start" : "top"
      })
    );
    tooltipEventBus.subscribe(
      "oppositeBet",
      openTooltip({
        content: t2("COMMON.OPPOSITE_BETTING_RESTRICTED"),
        place: "top"
      })
    );
  }, [t2]);
  const closeTooltip = () => {
    var _a, _b;
    if ((_a = tooltipRef.current) == null ? void 0 : _a.isOpen) {
      (_b = tooltipRef.current) == null ? void 0 : _b.close();
    }
  };
  reactExports.useEffect(() => {
    document.addEventListener("mousedown", closeTooltip);
    return () => document.removeEventListener("mousedown", closeTooltip);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    M,
    {
      ref: tooltipRef,
      className: "tooltipContainer",
      disableStyleInjection: true
    }
  );
}
function initGreenKeyFrame(fps) {
  return [
    { sec: 0, value: 0 },
    { sec: 10 * fps, value: 1 },
    { sec: 20 * fps, value: 0.8 },
    { sec: 30 * fps, value: 1 },
    { sec: 70 * fps, value: 0.5 },
    { sec: 85 * fps, value: 1 },
    { sec: 100 * fps, value: 1 },
    { sec: 160 * fps, value: 1 },
    { sec: 170 * fps, value: 0.8 },
    { sec: 180 * fps, value: 1 },
    { sec: 220 * fps, value: 0.5 },
    { sec: 235 * fps, value: 1 },
    { sec: 250 * fps, value: 1 },
    { sec: 300 * fps, value: 1 },
    { sec: 310 * fps, value: 0.8 },
    { sec: 320 * fps, value: 1 },
    { sec: 360 * fps, value: 0.5 },
    { sec: 375 * fps, value: 1 },
    { sec: 390 * fps, value: 1 },
    { sec: 420 * fps, value: 0 }
  ];
}
function initYellowKeyFrame(fps) {
  return [
    { sec: 390 * fps, value: 0 },
    { sec: 420 * fps, value: 1 },
    { sec: 510 * fps, value: 1 },
    { sec: 540 * fps, value: 0 }
  ];
}
function initRedKeyFrame(fps) {
  return [
    { sec: 510 * fps, value: 0 },
    { sec: 540 * fps, value: 1 },
    { sec: 600 * fps, value: 1 },
    { sec: 630 * fps, value: 1 },
    { sec: 660 * fps, value: 1 },
    { sec: 690 * fps, value: 0 }
  ];
}
function initNormalKeyFrame(fps) {
  return [
    { sec: 660 * fps, value: 0 },
    { sec: 690 * fps, value: 1 }
  ];
}
function initWinKeyFrame(fps) {
  return [
    { sec: 0, value: 0 },
    { sec: 20 * fps, value: 1 },
    { sec: 40 * fps, value: 0 },
    { sec: 60 * fps, value: 1 },
    { sec: 80 * fps, value: 0 }
  ];
}
const linear = initInterpolationFunc(InterpolationMode.LINEAR);
const useWinAnimStore = getWinAnimStore();
function useTrafficLightRender(lightRefs) {
  const winStartMs = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const renderFrame = (currentMs) => {
      var _a, _b, _c;
      const { loadingStage } = useLoadingStore.getState();
      const isLoadingScreen = loadingStage >= LoadingStageEnum.Loaded && loadingStage < LoadingStageEnum.PostLoaded4;
      if (isLoadingScreen) {
        (_a = lightRefs.current) == null ? void 0 : _a.forEach((element, color2) => {
          const isNormal = color2 === TRAFFIC_LIGHT_COLOR.NORMAL;
          const alpha = isNormal ? 1 : 0;
          element.style.opacity = alpha.toString();
        });
        return;
      }
      const { betEnd } = useBettingStore.getState();
      const elapsed = (currentMs - (betEnd - 2e4)) * 1e-3 - COUNT_DOWN_DELAY_SEC;
      LIGHT.forEach(({ color: color2, keyFrames }) => {
        var _a2;
        const ele = (_a2 = lightRefs.current) == null ? void 0 : _a2.get(color2);
        if (!ele || color2 === TRAFFIC_LIGHT_COLOR.WIN) return;
        const alpha = linear(elapsed, keyFrames);
        ele.style.opacity = alpha.toString();
      });
      const { animState, winResult } = useWinAnimStore.getState();
      const winEle = (_b = lightRefs.current) == null ? void 0 : _b.get(TRAFFIC_LIGHT_COLOR.WIN);
      const winKeyFrames = (_c = LIGHT.find((c2) => c2.color === TRAFFIC_LIGHT_COLOR.WIN)) == null ? void 0 : _c.keyFrames;
      if (!winEle || !winKeyFrames) return;
      if (!animState || !(winResult == null ? void 0 : winResult.result) || typeof (winResult == null ? void 0 : winResult.userWin) !== "number") {
        winEle.style.opacity = "0";
        winStartMs.current = 0;
        return;
      }
      if (winStartMs.current === 0) winStartMs.current = Date.now();
      const isWin = winResult.userWin > 0;
      const winElapsed = (currentMs - winStartMs.current) * 1e-3;
      const winAlpha = isWin ? linear(winElapsed, winKeyFrames) : 0;
      winEle.style.opacity = winAlpha.toString();
    };
    const unsubscribe = useTimerStore.subscribe((state) => state.currentMs, renderFrame);
    return () => unsubscribe();
  }, [lightRefs]);
}
const W_OFFSET = 2.875;
const H_OFFSET = 2.375;
const EXTEND = 0.0625;
function useTrafficLightResize(wrapperRef, mainBoardRef, lightRefs) {
  const loadingStage = useLoadingStore((s2) => s2.loadingStage);
  reactExports.useEffect(() => {
    let timeoutId;
    let rafId;
    const resize = () => {
      const params = getMainBoardParams(mainBoardRef);
      if (!params || !mainBoardRef.current || !wrapperRef.current) return;
      const ratio = useLayoutStore.getState().rootEmFontSize;
      const { width, height, top: mainBoardTop } = params;
      const { left: mainBoardLeft } = mainBoardRef.current.getBoundingClientRect();
      const { top: wrapperTop, left: wrapperLeft } = wrapperRef.current.getBoundingClientRect();
      const top = mainBoardTop - wrapperTop;
      const left = mainBoardLeft - wrapperLeft;
      const newStyles = {
        left: "calc(".concat(left - W_OFFSET * ratio / 2, "px)"),
        top: "calc(".concat(top - H_OFFSET * ratio / 2, "px - ").concat(EXTEND / 1.5, "rem)"),
        width: "calc(".concat(width, "px + ").concat(W_OFFSET, "rem)"),
        height: "calc(".concat(height, "px + ").concat(H_OFFSET, "rem + ").concat(EXTEND, "rem)")
      };
      lightRefs.current.forEach((element) => Object.assign(element.style, newStyles));
    };
    getMainBoard(mainBoardRef);
    if (!wrapperRef.current || !mainBoardRef.current) return;
    const debounceResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => rafId = requestAnimationFrame(resize), 16);
    };
    const observer = new ResizeObserver(debounceResize);
    observer.observe(wrapperRef.current);
    observer.observe(mainBoardRef.current);
    resize();
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [wrapperRef, mainBoardRef, lightRefs, loadingStage]);
}
const TRAFFIC_LIGHT_COLOR = {
  GREEN: "green",
  YELLOW: "yellow",
  RED: "red",
  NORMAL: "normal",
  WIN: "win"
};
const LIGHT = [
  { color: TRAFFIC_LIGHT_COLOR.GREEN, keyFrames: initGreenKeyFrame(ONE_FRAME_TIME_SEC) },
  { color: TRAFFIC_LIGHT_COLOR.YELLOW, keyFrames: initYellowKeyFrame(ONE_FRAME_TIME_SEC) },
  { color: TRAFFIC_LIGHT_COLOR.RED, keyFrames: initRedKeyFrame(ONE_FRAME_TIME_SEC) },
  { color: TRAFFIC_LIGHT_COLOR.WIN, keyFrames: initWinKeyFrame(ONE_FRAME_TIME_SEC) },
  { color: TRAFFIC_LIGHT_COLOR.NORMAL, keyFrames: initNormalKeyFrame(ONE_FRAME_TIME_SEC) }
];
function TrafficLight() {
  const isCompact = useConfigStore((s2) => s2.IS_SMALL_DEVICE);
  const wrapperRef = reactExports.useRef(null);
  const mainBoardRef = reactExports.useRef(null);
  const lightRefs = reactExports.useRef(/* @__PURE__ */ new Map());
  useTrafficLightResize(wrapperRef, mainBoardRef, lightRefs);
  useTrafficLightRender(lightRefs);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "TrafficLight",
      ref: wrapperRef,
      className: cn("pointer-events-none absolute left-0 top-0 size-full", {
        isCompact,
        "z-[11]": isDesktop,
        "z-[2]": !isDesktop
      }),
      children: LIGHT.map(({ color: color2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TrafficLightFrame,
        {
          color: color2,
          lightRefs
        },
        color2
      ))
    }
  );
}
function TrafficLightFrame({ color: color2, lightRefs }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: (el) => {
        if (el) lightRefs.current.set(color2, el);
      },
      className: cn("trafficLightWrapper", color2),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("trafficLightFrame", color2) })
    }
  );
}
const MobileLayout = reactExports.lazy(() => __vitePreload(() => import("./MobileLayout-q0bVj0QA.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]) : void 0, import.meta.url));
const DesktopLayout = reactExports.lazy(() => __vitePreload(() => import("./DesktopLayout-Ch13kWAm.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12,13,16]) : void 0, import.meta.url));
function App() {
  useSound();
  useSafariCheck();
  useTicker();
  useGlobalOverlayHeightCalculator();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "App",
      className: "relative transition-opacity duration-[2s]",
      style: {
        backgroundImage: "url(".concat(isMobileDevice && blurBg, ")"),
        backgroundSize: "cover"
      },
      children: [
        isMobileDevice ? /* @__PURE__ */ jsxRuntimeExports.jsx(MobileLayout, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopLayout, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipList, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IdleModal, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExpiredModal, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MultiSessionModal, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MaintenanceModal, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoPlayBetChangedModal, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoPlayFinishedModal, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalModalOverlay, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrafficLight, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Debugger, {})
      ]
    }
  );
}
const App$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
export {
  App$1 as A,
  isElement as a,
  isNode as b,
  computePosition as c,
  autoUpdate as d,
  isShadowRoot as i,
  offset as o,
  shift as s,
  useKeyPress as u
};
//# sourceMappingURL=App-DX8Hmlgm.js.map
