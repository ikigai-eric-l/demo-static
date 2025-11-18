;
(function () {
  const _excluded5 = ["children"],
    _excluded6 = ["children"],
    _excluded7 = ["asChild"],
    _excluded8 = ["container"],
    _excluded9 = ["variants", "compoundVariants", "defaultVariants"],
    _excluded0 = ["css"],
    _excluded1 = ["css"],
    _excluded10 = ["scope", "children"],
    _excluded11 = ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"],
    _excluded12 = ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "flipAlignment"],
    _excluded13 = ["strategy"],
    _excluded14 = ["mainAxis", "crossAxis", "limiter"],
    _excluded15 = ["apply"],
    _excluded16 = ["children", "width", "height"],
    _excluded17 = ["__scopePopper", "virtualRef"],
    _excluded18 = ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "avoidCollisions", "onPlaced"],
    _excluded19 = ["__scopePopper"],
    _excluded20 = ["__scopeTooltip"],
    _excluded21 = ["forceMount", "side"],
    _excluded22 = ["__scopeTooltip", "children", "aria-label", "onEscapeKeyDown", "onPointerDownOutside"],
    _excluded23 = ["__scopeTooltip"],
    _excluded24 = ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"],
    _excluded25 = ["mainAxis", "crossAxis", "limiter"];
  function _objectWithoutProperties2(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose2(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
  function _objectWithoutPropertiesLoose2(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty2(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty2(e, r, t) { return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey2(t) { var i = _toPrimitive2(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive2(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./pixi.js-vendor-legacy-DddHKyqC.js', './framer-motion-vendor-legacy-BRQCrC7T.js', './@sentry-vendor-legacy-Ca039euQ.js', './index-legacy-CPkG-0qj.js', './ikigaians-house-core-legacy-BYu6jnS6.js', './react-dom-vendor-legacy-DChcbfwc.js', './ui-icons-internal-legacy-6Smvdqu1.js'], function (exports, module) {
    'use strict';

    var __vitePreload, jsxRuntimeExports, reactExports, React, React$1, getDefaultExportFromCjs, useWindowSize, isMobileDevice, useLoadingStore, isSafari, useLayoutStore, useTimerStore, useNetworkStore, clearInterval, setInterval, useSettingStore, useBettingStore, useCartStore, playSound, setVolume, setMute, initSoundResource, getWinAnimStore, commonSoundResources, soundResources, useAutoPlayStore, useTranslation, CenterModal, useConfigStore, isInIframe, useIdle, connectIns, BetState, sounds, getVolume, sleep, useWinAnimStore$2, useDebugStore, checkStorageQuota, cn, useWinNumberStore, useToastStore, t$3, tooltipEventBus, LoadingStageEnum, initInterpolationFunc, COUNT_DOWN_DELAY_SEC, InterpolationMode, getMainBoard, getMainBoardParams, isDesktop, ONE_FRAME_TIME_SEC, blurBg, AutoPlayFinishedModal, SicBoBetNo, reactDomExports, $7SXl2$reactdom, clientExports, IconMenu;
    return {
      setters: [module => {
        __vitePreload = module._;
      }, module => {
        jsxRuntimeExports = module.j;
      }, module => {
        reactExports = module.r;
        React = module.R;
        React$1 = module.b;
        getDefaultExportFromCjs = module.g;
      }, module => {
        useWindowSize = module.u;
        isMobileDevice = module.i;
        useLoadingStore = module.a;
        isSafari = module.b;
        useLayoutStore = module.c;
        useTimerStore = module.d;
        useNetworkStore = module.e;
        clearInterval = module.f;
        setInterval = module.s;
        useSettingStore = module.g;
        useBettingStore = module.h;
        useCartStore = module.j;
        playSound = module.p;
        setVolume = module.k;
        setMute = module.l;
        initSoundResource = module.m;
        getWinAnimStore = module.n;
        commonSoundResources = module.o;
        soundResources = module.q;
        useAutoPlayStore = module.r;
        useTranslation = module.t;
        CenterModal = module.C;
        useConfigStore = module.v;
        isInIframe = module.w;
        useIdle = module.x;
        connectIns = module.y;
        BetState = module.B;
        sounds = module.z;
        getVolume = module.A;
        sleep = module.D;
        useWinAnimStore$2 = module.E;
        useDebugStore = module.F;
        checkStorageQuota = module.G;
        cn = module.H;
        useWinNumberStore = module.I;
        useToastStore = module.J;
        t$3 = module.K;
        tooltipEventBus = module.L;
        LoadingStageEnum = module.M;
        initInterpolationFunc = module.N;
        COUNT_DOWN_DELAY_SEC = module.O;
        InterpolationMode = module.P;
        getMainBoard = module.Q;
        getMainBoardParams = module.R;
        isDesktop = module.S;
        ONE_FRAME_TIME_SEC = module.T;
        blurBg = module.U;
        AutoPlayFinishedModal = module.V;
      }, module => {
        SicBoBetNo = module.S;
      }, module => {
        reactDomExports = module.r;
        $7SXl2$reactdom = module.$;
        clientExports = module.c;
      }, module => {
        IconMenu = module.a;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "#GlobalModalOverlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%);\n  background-size: 100% calc(100dvh - var(--header-height, 64px));\n  background-position: 0 var(--header-height, 64px);\n  -webkit-clip-path: polygon(0 var(--header-height, 64px), 100% var(--header-height, 64px), 100% 100%, 0 100%);\n          clip-path: polygon(0 var(--header-height, 64px), 100% var(--header-height, 64px), 100% 100%, 0 100%);\n}#CustomDebugPanel ol li {\n  margin-left: 0.8rem;\n}\n#CustomDebugPanel ol li kbd {\n  border-radius: 0.375rem;\n  background-color: #e5e7eb;\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}#TrafficLight .trafficLightFrame {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: calc(100% - 2.875rem);\n  height: calc(100% - 2.375rem + 0.0625rem);\n  transform: translate(-50%, -50%);\n  border-radius: 2rem;\n}\n#TrafficLight .trafficLightWrapper {\n  position: absolute;\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  -webkit-mask-size: 100% 100%;\n          mask-size: 100% 100%;\n  opacity: 0;\n  -webkit-mask-image: linear-gradient(to bottom, white 3%, transparent 28%, transparent 69%, white 100%);\n          mask-image: linear-gradient(to bottom, white 3%, transparent 28%, transparent 69%, white 100%);\n}\n#TrafficLight .trafficLightFrame.green {\n  border: 0.0625rem solid #40965e;\n  box-shadow: 0px 0px 0.6rem #3e9274, inset 0px 0px 0.4313rem rgba(79, 222, 128, 0.05), inset 0px 0px 1.125rem rgba(27, 118, 58, 0.2), inset 0px 0px 2.5rem rgba(31, 87, 95, 0.4);\n}\n#TrafficLight .trafficLightFrame.yellow {\n  box-shadow: 0px 0px 0.6rem #b4604d, inset 0px 0px 0.4313rem rgba(222, 174, 79, 0.05), inset 0px 0px 1.125rem rgba(118, 82, 27, 0.2), inset 0px 0px 2.5rem rgba(95, 62, 31, 0.4);\n}\n#TrafficLight .trafficLightFrame.red {\n  box-shadow: 0px 0px 0.6rem #831a13, inset 0px 0px 0.4313rem rgba(222, 88, 79, 0.05), inset 0px 0px 1.125rem rgba(118, 27, 49, 0.2), inset 0px 0px 2.5rem rgba(95, 31, 77, 0.4);\n}\n#TrafficLight .trafficLightFrame.win {\n  box-shadow: 0px 0px 0.6rem #8d3c0e, inset 0px 0px 0.4313rem rgba(222, 182, 79, 0.3137254902), inset 0px 0px 1.125rem rgba(118, 92, 27, 0.3137254902), inset 0px 0px 2.5rem rgba(95, 35, 31, 0.4392156863);\n}\n#TrafficLight .trafficLightFrame.yellow::after,\n#TrafficLight .trafficLightFrame.red::after,\n#TrafficLight .trafficLightFrame.win::after,\n#TrafficLight .trafficLightFrame.normal::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0.0625rem solid transparent;\n  border-radius: 2rem;\n  background-origin: border-box;\n  content: \"\";\n  -webkit-mask-clip: padding-box, border-box;\n          mask-clip: padding-box, border-box;\n  -webkit-mask-image: linear-gradient(white, white), linear-gradient(white, white);\n          mask-image: linear-gradient(white, white), linear-gradient(white, white);\n  -webkit-mask-composite: xor;\n          mask-composite: exclude;\n}\n#TrafficLight .trafficLightFrame.yellow::after {\n  background-image: linear-gradient(to bottom, #b48e60 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 87%, #3b2d1c 100%);\n}\n#TrafficLight .trafficLightFrame.red::after {\n  background-image: linear-gradient(to bottom, #921e1e 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 87%, #4d1010 97%, #731818 100%);\n}\n#TrafficLight .trafficLightFrame.win::after {\n  background-image: linear-gradient(to bottom, #b5ab8a 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 75%, #67391e 96%, #b5ab8a 100%);\n}\n#TrafficLight .trafficLightFrame.normal::after {\n  background-image: linear-gradient(to bottom, rgba(184, 152, 114, 0.3764705882) 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 87%, rgba(139, 108, 72, 0.3764705882) 100%);\n}\n#TrafficLight.isCompact .trafficLightWrapper {\n  -webkit-mask-image: unset;\n          mask-image: unset;\n}\n#TrafficLight.isCompact .trafficLightFrame::after, #TrafficLight.isCompact .trafficLightFrame {\n  border-radius: 1.5rem;\n}\n#TrafficLight.isCompact .trafficLightFrame.normal::after {\n  background-image: linear-gradient(to bottom, rgba(181, 171, 138, 0.3764705882) 0%, rgba(103, 57, 30, 0.3764705882) 54%, rgba(181, 171, 138, 0.3764705882) 100%);\n}\n#TrafficLight.isCompact .trafficLightWrapper.normal {\n  -webkit-mask-image: linear-gradient(to bottom, #ffffff 3%, rgba(255, 255, 255, 0.3764705882) 34%, rgba(255, 255, 255, 0.3764705882) 69%, #ffffff 100%);\n          mask-image: linear-gradient(to bottom, #ffffff 3%, rgba(255, 255, 255, 0.3764705882) 34%, rgba(255, 255, 255, 0.3764705882) 69%, #ffffff 100%);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports({
          a: isElement,
          b: isNode,
          d: autoUpdate,
          i: isShadowRoot
        });
        const HEADER_HEIGHT_DEBOUNCE_DELAY = 150;
        function useGlobalOverlayHeightCalculator() {
          const windowSize = useWindowSize();
          const calculateHeaderHeight = reactExports.useCallback(() => {
            const headerElement = document.getElementById("DesktopHeader") ||
            // Desktop header ID
            document.getElementById("Header");
            let height = 64;
            if (headerElement) {
              height = headerElement.getBoundingClientRect().height;
            } else {
              height = isMobileDevice ? 48 : 64;
            }
            document.documentElement.style.setProperty("--header-height", `${height}px`);
          }, []);
          reactExports.useEffect(() => {
            const timeoutId = window.setTimeout(calculateHeaderHeight, HEADER_HEIGHT_DEBOUNCE_DELAY);
            return () => clearTimeout(timeoutId);
          }, [windowSize, calculateHeaderHeight]);
        }
        function useSafariCheck() {
          const isLoadingFinished = useLoadingStore(s => s.isLoadingFinished);
          reactExports.useEffect(() => {
            if (!isLoadingFinished) return;
            const isShowSafariHint = isSafari() && !localStorage.getItem("safariLaunch");
            if (isShowSafariHint) {
              useLayoutStore.setState({
                menuPage: "safari_hint"
              });
            }
          }, [isLoadingFinished]);
        }
        const FRAME_INTERVAL = 1e3 / 60;
        function useTicker() {
          const refresh = useTimerStore(state => state.refresh);
          const {
            isIdleTimeout,
            isExpired,
            isMultiSession
          } = useNetworkStore(state => ({
            isIdleTimeout: state.isIdleTimeout,
            isExpired: state.isExpired,
            isMultiSession: state.isMultiSession
          }));
          reactExports.useEffect(() => {
            if (isIdleTimeout || isExpired || isMultiSession) return;
            const intervalId = simulateRAF(refresh);
            useTimerStore.setState({
              timerId: intervalId
            });
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
        const useBaseSound = soundResource2 => {
          reactExports.useEffect(() => {
            const {
              gameVolume,
              masterVolume
            } = useSettingStore.getState();
            const initial = (masterVolume2, gameVolume2) => {
              setVolume(gameVolume2);
              setMute(masterVolume2 === 0);
            };
            initial(masterVolume, gameVolume);
            let betState;
            const playState = name => {
              if (betState) betState();
              betState = playSound([name]);
            };
            const unSubscribes = [useBettingStore.subscribe(state => state.isBet, cur => {
              playState(cur ? "placeYourBets" : "noMoreBets");
            }), useBettingStore.subscribe(state => state.betMode, () => {
              playSound(["click"]);
            }), useSettingStore.subscribe((cur, prev) => {
              if (cur.gameVolume !== prev.gameVolume || cur.masterVolume !== prev.masterVolume) {
                setVolume(cur.gameVolume * cur.masterVolume);
              }
              if (cur.screenName !== prev.screenName) {
                return;
              }
            }), useTimerStore.subscribe(state => state.currentMs, /* @__PURE__ */(() => {
              let lastBetsPlayed = false;
              let lastFivePlayed = false;
              return cur => {
                const {
                  betEnd
                } = useBettingStore.getState();
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
            })()), useCartStore.subscribe(state => state.selectedChipVal, () => {
              playSound(["choosingChip"]);
            }), useBettingStore.subscribe(state => state.neighborRange, () => {
              playSound(["click"]);
            })];
            const visibilitychange = () => {
              if (!isMobileDevice) return;
              if (document.hidden) {
                Howler.mute(true);
              } else {
                const {
                  isExpired,
                  isMultiSession,
                  isIdleTimeout
                } = useNetworkStore.getState();
                if (isExpired || isMultiSession || isIdleTimeout) return;
                Howler.mute(false);
              }
              const {
                ctx
              } = Howler;
              if (document.visibilityState !== "hidden") {
                document.addEventListener("click", resumeOnInteraction);
                document.addEventListener("touchstart", resumeOnInteraction);
                setTimeout(() => {
                  ctx === null || ctx === void 0 || ctx.resume();
                }, 100);
              }
            };
            const resumeOnInteraction = () => {
              const {
                ctx
              } = Howler;
              if (ctx && ctx.state === "suspended") {
                ctx.resume().then(() => {
                  console.log("✅ AudioContext resumed successfully on user interaction.");
                }).catch(e => {
                  console.error("Error resuming AudioContext:", e.message);
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
              useLayoutStore.setState({
                isUnmuteHint: false
              });
            };
            document.addEventListener("touchend", unlockAudioContext, true);
            document.addEventListener("click", unlockAudioContext, true);
            return () => {
              document.removeEventListener("visibilitychange", visibilitychange, false);
              removeGestureListener();
              unSubscribes.forEach(unsubscribe => unsubscribe());
            };
          }, []);
        };
        const useWinAnimStore$1 = getWinAnimStore();
        const useSound = () => {
          useBaseSound(_objectSpread3(_objectSpread3({}, soundResources), commonSoundResources));
          const animState = useWinAnimStore$1(s => s.animState);
          const winResult = useWinAnimStore$1(s => s.winResult);
          reactExports.useEffect(() => {
            if (animState !== "animationStart" || !winResult) return;
            const {
              result,
              userWin
            } = winResult;
            const list = [result.toString()];
            if (userWin > 0) {
              setTimeout(() => playSound(["winEffect"]), 600);
              list.push("youWin");
            }
            playSound(list);
          }, [animState, winResult]);
        };
        function AutoPlayBetChangedModal() {
          const confirmModalType = useAutoPlayStore(s => s.confirmModalType);
          const {
            cancelAutoPlay
          } = useAutoPlayStore();
          const {
            t
          } = useTranslation();
          const handleContinue = () => {
            playSound(["click"]);
            useAutoPlayStore.setState({
              confirmModalType: null,
              boardSnapshot: useCartStore.getState().boardHistory[useCartStore.getState().boardHistory.length - 1]
            });
          };
          const handleCancel = () => {
            playSound(["click"]);
            useAutoPlayStore.setState({
              confirmModalType: null
            });
            cancelAutoPlay();
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(CenterModal, {
            open: confirmModalType === "BetChanged",
            icon: "autoplayBetChanged",
            title: t("COMMON.BET_CHANGED"),
            titleClassName: "pl-[0.2rem]",
            text: t("COMMON.AUTOPLAY_PROMPT1"),
            confirmText: t("COMMON.CONTINUE"),
            onConfirm: handleContinue,
            cancelText: t("COMMON.STOP_AUTOPLAY"),
            onCancel: handleCancel
          });
        }
        function ExpiredModal() {
          const isExpired = useNetworkStore(state => state.isExpired);
          const {
            t
          } = useTranslation();
          const LOBBY_URL = useConfigStore(s => s.LOBBY_URL);
          const canShowExit = isInIframe() || !!LOBBY_URL;
          const exitGame = useConfigStore(s => s.exitGame);
          reactExports.useEffect(() => {
            if (isExpired) return setMute(true);
          }, [isExpired]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(CenterModal, {
            open: isExpired,
            icon: "expired",
            text: t("COMMON.SESSION_EXPIRED"),
            confirmText: canShowExit ? t("COMMON.CLOSE") : void 0,
            onConfirm: exitGame
          });
        }
        function GlobalModalOverlay() {
          const modalOpenCount = useLayoutStore(s => s.modalOpenCount);
          if (modalOpenCount === 0) return null;
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "GlobalModalOverlay"
          });
        }
        const IDLE_TIMEOUT = 10 * 60 * 1e3;
        const FINAL_TIMEOUT = 5 * 60 * 1e3;
        function IdleModal() {
          const isAutoPlay = useAutoPlayStore(s => s.isAutoPlay);
          const [modalState, setModalState] = reactExports.useState("");
          const [isInIdle, setIsInIdle] = reactExports.useState(false);
          const timerId = reactExports.useRef(null);
          const {
            t
          } = useTranslation();
          const idle = useIdle(IDLE_TIMEOUT);
          const forceShowIdleModal = useNetworkStore(state => state.forceShowIdleModal);
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
                var _connectIns;
                setModalState("timeout");
                setMute(true);
                (_connectIns = connectIns) === null || _connectIns === void 0 || _connectIns.close();
                useNetworkStore.setState({
                  isIdleTimeout: true
                });
              }, FINAL_TIMEOUT);
              return () => {
                if (timerId.current) {
                  clearTimeout(timerId.current);
                }
              };
            }
          }, [modalState]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(CenterModal, {
            open: !!modalState || forceShowIdleModal,
            icon: "idle",
            text: t("COMMON.INACTIVITY"),
            confirmText: t(modalState === "idle" ? "COMMON.RESUME_PLAY" : "COMMON.REFRESH"),
            onConfirm: modalState === "idle" ? handleResume : handleRefresh
          });
        }
        function MaintenanceModal() {
          const isMaintenance = useNetworkStore(state => state.isMaintenance);
          const {
            t
          } = useTranslation();
          reactExports.useEffect(() => {
            if (isMaintenance) return setMute(true);
          }, [isMaintenance]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(CenterModal, {
            open: isMaintenance,
            icon: "maintenance",
            text: t("COMMON.TABLE_MAINTENANCE"),
            textClassName: "max-w-[12rem] whitespace-break-spaces",
            confirmText: "Lobby"
          });
        }
        function MultiSessionModal() {
          const isMultiSession = useNetworkStore(state => state.isMultiSession);
          const {
            t
          } = useTranslation();
          const LOBBY_URL = useConfigStore(s => s.LOBBY_URL);
          const canShowExit = isInIframe() || !!LOBBY_URL;
          const exitGame = useConfigStore(s => s.exitGame);
          reactExports.useEffect(() => {
            if (isMultiSession) return setMute(true);
          }, [isMultiSession]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(CenterModal, {
            open: isMultiSession,
            icon: "multiSession",
            text: t("COMMON.REJOIN_TIP"),
            textClassName: "w-[10.625rem]",
            confirmText: t("COMMON.REFRESH"),
            onConfirm: () => setTimeout(() => location.reload(), 200),
            cancelText: canShowExit ? t("COMMON.CLOSE") : void 0,
            onCancel: exitGame
          });
        }
        const TAP_COUNT = 5;
        const TAP_TIMEOUT_MS = 1500;
        const TAP_AREA_PX = 50;
        const DEBUG_PANEL_KEY_SEQUENCE = "2882";
        const LEVA_KEY_SEQUENCE = "1001";
        const ROUND_INFO_SEQUENCE = "2000";
        function useDebuggerTrigger({
          onOpen,
          keySequence
        }) {
          const tapCountRef = reactExports.useRef(0);
          const tapTimeoutRef = reactExports.useRef(null);
          const keySequenceRef = reactExports.useRef("");
          reactExports.useEffect(() => {
            if (!isMobileDevice) return;
            const onTouchEnd = event => {
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
            const onKeyDown = event => {
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
        const setHasRegistered = value => {
          hasRegistered = value;
        };
        function useDevQATests() {
          if (getHasRegistered()) return;
          setHasRegistered(true);
          window.betState = {
            setBetState: state => {
              useBettingStore.setState({
                gameState: state,
                isBet: state === BetState.Bet
              });
            }
          };
          window.sound = {
            mute: name => {
              name.forEach(soundName => {
                const sound = sounds.get(`sound_${soundName}`);
                if (sound) sound.volume(0);
              });
            },
            unMute: name => {
              name.forEach(soundName => {
                const sound = sounds.get(`sound_${soundName}`);
                if (sound) sound.volume(getVolume(`sound_${soundName}`));
              });
            }
          };
          window.winAnim = {
            // * For Playwright tests
            runWinAnim: async tableDealPayload => {
              window.betState.setBetState(BetState.Settlement);
              await sleep(2e3);
              useWinAnimStore$2.getState().onTableDeal(tableDealPayload);
              useWinAnimStore$2.getState().onTableFinished(tableDealPayload);
            }
          };
          window.layout = {
            setMenuPage: page => {
              useLayoutStore.setState({
                menuPage: page
              });
            },
            desktopModal: modal => {
              useLayoutStore.setState({
                desktopModal: modal,
                prevDesktopModal: null
              });
            }
          };
          window.numGrow = {
            setAmount: (small, big) => {
              useCartStore.setState(state => ({
                betStats: {
                  amount: {
                    [SicBoBetNo.SMALL]: small,
                    [SicBoBetNo.BIG]: big
                  },
                  count: state.betStats.count
                }
              }));
            },
            setCount: (small, big) => {
              useCartStore.setState(state => ({
                betStats: {
                  amount: state.betStats.amount,
                  count: {
                    [SicBoBetNo.SMALL]: small,
                    [SicBoBetNo.BIG]: big
                  }
                }
              }));
            }
          };
          window.maintenance = {
            startTime: timestamp => {
              useConfigStore.setState({
                maintenanceStartTime: timestamp
              });
            }
          };
          console.debug("Dev/QA tools registered");
        }
        function _extends$1() {
          return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }
            return n;
          }, _extends$1.apply(null, arguments);
        }

        /**
         * Set a given ref to a given value
         * This utility takes care of different types of refs: callback refs and RefObject(s)
         */
        function $6ed0406888f73fc4$var$setRef(ref, value) {
          if (typeof ref === 'function') ref(value);else if (ref !== null && ref !== undefined) ref.current = value;
        }
        /**
         * A utility to compose multiple refs together
         * Accepts callback refs and RefObject(s)
         */
        function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
          return node => refs.forEach(ref => $6ed0406888f73fc4$var$setRef(ref, node));
        }
        /**
         * A custom hook that composes multiple refs
         * Accepts callback refs and RefObject(s)
         */
        function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          return reactExports.useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
        }

        /* -------------------------------------------------------------------------------------------------
         * Slot
         * -----------------------------------------------------------------------------------------------*/
        const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          const {
              children: children
            } = props,
            slotProps = _objectWithoutProperties2(props, _excluded5);
          const childrenArray = reactExports.Children.toArray(children);
          const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
          if (slottable) {
            // the new element to render is the one passed as a child of `Slottable`
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map(child => {
              if (child === slottable) {
                // because the new element will be the one rendered, we are only interested
                // in grabbing its children (`newElement.props.children`)
                if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
                return /*#__PURE__*/reactExports.isValidElement(newElement) ? newElement.props.children : null;
              } else return child;
            });
            return /*#__PURE__*/reactExports.createElement($5e63c961fc1ce211$var$SlotClone, _extends$1({}, slotProps, {
              ref: forwardedRef
            }), /*#__PURE__*/reactExports.isValidElement(newElement) ? /*#__PURE__*/reactExports.cloneElement(newElement, undefined, newChildren) : null);
          }
          return /*#__PURE__*/reactExports.createElement($5e63c961fc1ce211$var$SlotClone, _extends$1({}, slotProps, {
            ref: forwardedRef
          }), children);
        });
        $5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = 'Slot';
        /* -------------------------------------------------------------------------------------------------
         * SlotClone
         * -----------------------------------------------------------------------------------------------*/
        const $5e63c961fc1ce211$var$SlotClone = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          const {
              children: children
            } = props,
            slotProps = _objectWithoutProperties2(props, _excluded6);
          if (/*#__PURE__*/reactExports.isValidElement(children)) return /*#__PURE__*/reactExports.cloneElement(children, _objectSpread3(_objectSpread3({}, $5e63c961fc1ce211$var$mergeProps(slotProps, children.props)), {}, {
            ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
          }));
          return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
        });
        $5e63c961fc1ce211$var$SlotClone.displayName = 'SlotClone';
        /* -------------------------------------------------------------------------------------------------
         * Slottable
         * -----------------------------------------------------------------------------------------------*/
        const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({
          children: children
        }) => {
          return /*#__PURE__*/reactExports.createElement(reactExports.Fragment, null, children);
        };
        /* ---------------------------------------------------------------------------------------------- */
        function $5e63c961fc1ce211$var$isSlottable(child) {
          return /*#__PURE__*/reactExports.isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
        }
        function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
          // all child props should override
          const overrideProps = _objectSpread3({}, childProps);
          for (const propName in childProps) {
            const slotPropValue = slotProps[propName];
            const childPropValue = childProps[propName];
            const isHandler = /^on[A-Z]/.test(propName);
            if (isHandler) {
              // if the handler exists on both, we compose them
              if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
                childPropValue(...args);
                slotPropValue(...args);
              };else if (slotPropValue) overrideProps[propName] = slotPropValue;
            } else if (propName === 'style') overrideProps[propName] = _objectSpread3(_objectSpread3({}, slotPropValue), childPropValue);else if (propName === 'className') overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(' ');
          }
          return _objectSpread3(_objectSpread3({}, slotProps), overrideProps);
        }
        const $8927f6f2acc4f386$var$NODES = ['a', 'button', 'div', 'form', 'h2', 'h3', 'img', 'input', 'label', 'li', 'nav', 'ol', 'p', 'span', 'svg', 'ul']; // Temporary while we await merge of this fix:
        // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
        // prettier-ignore
        /* -------------------------------------------------------------------------------------------------
         * Primitive
         * -----------------------------------------------------------------------------------------------*/
        const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
          const Node = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
            const {
                asChild: asChild
              } = props,
              primitiveProps = _objectWithoutProperties2(props, _excluded7);
            const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
            reactExports.useEffect(() => {
              window[Symbol.for('radix-ui')] = true;
            }, []);
            return /*#__PURE__*/reactExports.createElement(Comp, _extends$1({}, primitiveProps, {
              ref: forwardedRef
            }));
          });
          Node.displayName = `Primitive.${node}`;
          return _objectSpread3(_objectSpread3({}, primitive), {}, {
            [node]: Node
          });
        }, {});
        /* -------------------------------------------------------------------------------------------------
         * Utils
         * -----------------------------------------------------------------------------------------------*/ /**
                                                                                                             * Flush custom event dispatch
                                                                                                             * https://github.com/radix-ui/primitives/pull/1378
                                                                                                             *
                                                                                                             * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
                                                                                                             *
                                                                                                             * Internally, React prioritises events in the following order:
                                                                                                             *  - discrete
                                                                                                             *  - continuous
                                                                                                             *  - default
                                                                                                             *
                                                                                                             * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
                                                                                                             *
                                                                                                             * `discrete` is an  important distinction as updates within these events are applied immediately.
                                                                                                             * React however, is not able to infer the priority of custom event types due to how they are detected internally.
                                                                                                             * Because of this, it's possible for updates from custom events to be unexpectedly batched when
                                                                                                             * dispatched by another `discrete` event.
                                                                                                             *
                                                                                                             * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
                                                                                                             * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
                                                                                                             * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
                                                                                                             * For example:
                                                                                                             *
                                                                                                             * dispatching a known click 👎
                                                                                                             * target.dispatchEvent(new Event(‘click’))
                                                                                                             *
                                                                                                             * dispatching a custom type within a non-discrete event 👎
                                                                                                             * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
                                                                                                             *
                                                                                                             * dispatching a custom type within a `discrete` event 👍
                                                                                                             * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
                                                                                                             *
                                                                                                             * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
                                                                                                             * this utility with them. This is because it's possible for those handlers to be called implicitly during render
                                                                                                             * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
                                                                                                             */
        function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
          if (target) reactDomExports.flushSync(() => target.dispatchEvent(event));
        }
        const $f1701beae083dbae$export$602eac185826482c = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          var _globalThis$document;
          const {
              container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body
            } = props,
            portalProps = _objectWithoutProperties2(props, _excluded8);
          return container ? /*#__PURE__*/$7SXl2$reactdom.createPortal(/*#__PURE__*/reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({}, portalProps, {
            ref: forwardedRef
          })), container) : null;
        });
        /* -----------------------------------------------------------------------------------------------*/
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
                while (len-- && dequal(foo[len], bar[len]));
              }
              return len === -1;
            }
            if (!ctor || typeof foo === 'object') {
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
          for (let i = 0; i < keysA.length; i++) {
            if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
              return false;
            }
          }
          return true;
        }
        var Rule = function Rule(name, fn, args, modifiers) {
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
            fn = function () {
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
            if (testAux(this.modifiers.slice(), function (it) {
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
          return new Promise(function (resolve, reject) {
            testAsyncAux(this$1$1.modifiers.slice(), this$1$1.fn, this$1$1)(value).then(function (valid) {
              if (valid) {
                resolve(value);
              } else {
                reject(null);
              }
            }).catch(function (ex) {
              return reject(ex);
            });
          });
        };
        function pickFn(fn, variant) {
          if (variant === void 0) variant = 'simple';
          return typeof fn === 'object' ? fn[variant] : fn;
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
            return function (value) {
              return Promise.resolve(pickFn(fn, 'async')(value));
            };
          }
        }
        var Modifier = function Modifier(name, perform, performAsync) {
          this.name = name;
          this.perform = perform;
          this.performAsync = performAsync;
        };
        var ValidationError = /*@__PURE__*/function (Error) {
          function ValidationError(rule, value, cause, target) {
            var remaining = [],
              len = arguments.length - 4;
            while (len-- > 0) remaining[len] = arguments[len + 4];
            Error.call(this, remaining);
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, ValidationError);
            }
            this.rule = rule;
            this.value = value;
            this.cause = cause;
            this.target = target;
          }
          if (Error) ValidationError.__proto__ = Error;
          ValidationError.prototype = Object.create(Error && Error.prototype);
          ValidationError.prototype.constructor = ValidationError;
          return ValidationError;
        }(Error);
        var Context = function Context(chain, nextRuleModifiers) {
          if (chain === void 0) chain = [];
          if (nextRuleModifiers === void 0) nextRuleModifiers = [];
          this.chain = chain;
          this.nextRuleModifiers = nextRuleModifiers;
        };
        Context.prototype._applyRule = function _applyRule(ruleFn, name) {
          var this$1$1 = this;
          return function () {
            var args = [],
              len = arguments.length;
            while (len--) args[len] = arguments[len];
            this$1$1.chain.push(new Rule(name, ruleFn.apply(this$1$1, args), args, this$1$1.nextRuleModifiers));
            this$1$1.nextRuleModifiers = [];
            return this$1$1;
          };
        };
        Context.prototype._applyModifier = function _applyModifier(modifier, name) {
          this.nextRuleModifiers.push(new Modifier(name, modifier.simple, modifier.async));
          return this;
        };
        Context.prototype._clone = function _clone() {
          return new Context(this.chain.slice(), this.nextRuleModifiers.slice());
        };
        Context.prototype.test = function test(value) {
          return this.chain.every(function (rule) {
            return rule._test(value);
          });
        };
        Context.prototype.testAll = function testAll(value) {
          var err = [];
          this.chain.forEach(function (rule) {
            try {
              rule._check(value);
            } catch (ex) {
              err.push(new ValidationError(rule, value, ex));
            }
          });
          return err;
        };
        Context.prototype.check = function check(value) {
          this.chain.forEach(function (rule) {
            try {
              rule._check(value);
            } catch (ex) {
              throw new ValidationError(rule, value, ex);
            }
          });
        };
        Context.prototype.testAsync = function testAsync(value) {
          var this$1$1 = this;
          return new Promise(function (resolve, reject) {
            executeAsyncRules(value, this$1$1.chain.slice(), resolve, reject);
          });
        };
        function executeAsyncRules(value, rules, resolve, reject) {
          if (rules.length) {
            var rule = rules.shift();
            rule._testAsync(value).then(function () {
              executeAsyncRules(value, rules, resolve, reject);
            }, function (cause) {
              reject(new ValidationError(rule, value, cause));
            });
          } else {
            resolve(value);
          }
        }
        var consideredEmpty = function (value, considerTrimmedEmptyString) {
          if (considerTrimmedEmptyString && typeof value === 'string' && value.trim().length === 0) {
            return true;
          }
          return value === undefined || value === null;
        };
        function optional(validation, considerTrimmedEmptyString) {
          if (considerTrimmedEmptyString === void 0) considerTrimmedEmptyString = false;
          return {
            simple: function (value) {
              return consideredEmpty(value, considerTrimmedEmptyString) || validation.check(value) === undefined;
            },
            async: function (value) {
              return consideredEmpty(value, considerTrimmedEmptyString) || validation.testAsync(value);
            }
          };
        }
        function v8n() {
          return typeof Proxy !== 'undefined' ? proxyContext(new Context()) : proxylessContext(new Context());
        }

        // Custom rules
        var customRules = {};
        v8n.extend = function (newRules) {
          Object.assign(customRules, newRules);
        };
        v8n.clearCustomRules = function () {
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
          var addRuleSet = function (ruleSet, targetContext) {
            Object.keys(ruleSet).forEach(function (prop) {
              targetContext[prop] = function () {
                var args = [],
                  len = arguments.length;
                while (len--) args[len] = arguments[len];
                var newContext = proxylessContext(targetContext._clone());
                var contextWithRuleApplied = newContext._applyRule(ruleSet[prop], prop).apply(void 0, args);
                return contextWithRuleApplied;
              };
            });
            return targetContext;
          };
          var contextWithAvailableRules = addRuleSet(availableRules, context);
          var contextWithAllRules = addRuleSet(customRules, contextWithAvailableRules);
          Object.keys(availableModifiers).forEach(function (prop) {
            Object.defineProperty(contextWithAllRules, prop, {
              get: function () {
                var newContext = proxylessContext(contextWithAllRules._clone());
                return newContext._applyModifier(availableModifiers[prop], prop);
              }
            });
          });
          return contextWithAllRules;
        }
        var availableModifiers = {
          not: {
            simple: function (fn) {
              return function (value) {
                return !fn(value);
              };
            },
            async: function (fn) {
              return function (value) {
                return Promise.resolve(fn(value)).then(function (result) {
                  return !result;
                }).catch(function () {
                  return true;
                });
              };
            }
          },
          some: {
            simple: function (fn) {
              return function (value) {
                return split(value).some(function (item) {
                  try {
                    return fn(item);
                  } catch (ex) {
                    return false;
                  }
                });
              };
            },
            async: function (fn) {
              return function (value) {
                return Promise.all(split(value).map(function (item) {
                  try {
                    return fn(item).catch(function () {
                      return false;
                    });
                  } catch (ex) {
                    return false;
                  }
                })).then(function (result) {
                  return result.some(Boolean);
                });
              };
            }
          },
          every: {
            simple: function (fn) {
              return function (value) {
                return value !== false && split(value).every(fn);
              };
            },
            async: function (fn) {
              return function (value) {
                return Promise.all(split(value).map(fn)).then(function (result) {
                  return result.every(Boolean);
                });
              };
            }
          },
          strict: {
            simple: function (fn, rule) {
              return function (value) {
                if (isSchemaRule(rule) && value && typeof value === 'object') {
                  return Object.keys(rule.args[0]).length === Object.keys(value).length && fn(value);
                }
                return fn(value);
              };
            },
            async: function (fn, rule) {
              return function (value) {
                return Promise.resolve(fn(value)).then(function (result) {
                  if (isSchemaRule(rule) && value && typeof value === 'object') {
                    return Object.keys(rule.args[0]).length === Object.keys(value).length && result;
                  }
                  return result;
                }).catch(function () {
                  return false;
                });
              };
            }
          }
        };
        function isSchemaRule(rule) {
          return rule && rule.name === 'schema' && rule.args.length > 0 && typeof rule.args[0] === 'object';
        }
        function split(value) {
          if (typeof value === 'string') {
            return value.split('');
          }
          return value;
        }
        var availableRules = {
          // Value

          equal: function (expected) {
            return function (value) {
              return value == expected;
            };
          },
          exact: function (expected) {
            return function (value) {
              return value === expected;
            };
          },
          // Types

          number: function (allowInfinite) {
            if (allowInfinite === void 0) allowInfinite = true;
            return function (value) {
              return typeof value === 'number' && (allowInfinite || isFinite(value));
            };
          },
          integer: function () {
            return function (value) {
              var isInteger = Number.isInteger || isIntegerPolyfill;
              return isInteger(value);
            };
          },
          numeric: function () {
            return function (value) {
              return !isNaN(parseFloat(value)) && isFinite(value);
            };
          },
          string: function () {
            return testType('string');
          },
          boolean: function () {
            return testType('boolean');
          },
          undefined: function () {
            return testType('undefined');
          },
          null: function () {
            return testType('null');
          },
          array: function () {
            return testType('array');
          },
          object: function () {
            return testType('object');
          },
          instanceOf: function (instance) {
            return function (value) {
              return value instanceof instance;
            };
          },
          // Pattern

          pattern: function (expected) {
            return function (value) {
              return expected.test(value);
            };
          },
          lowercase: function () {
            return function (value) {
              return typeof value === 'boolean' || value === value.toLowerCase() && value.trim() !== '';
            };
          },
          uppercase: function () {
            return function (value) {
              return value === value.toUpperCase() && value.trim() !== '';
            };
          },
          vowel: function () {
            return function (value) {
              return /^[aeiou]+$/i.test(value);
            };
          },
          consonant: function () {
            return function (value) {
              return /^(?=[^aeiou])([a-z]+)$/i.test(value);
            };
          },
          // Value at

          first: function (expected) {
            return function (value) {
              return value[0] == expected;
            };
          },
          last: function (expected) {
            return function (value) {
              return value[value.length - 1] == expected;
            };
          },
          // Length

          empty: function () {
            return function (value) {
              return value.length === 0;
            };
          },
          length: function (min, max) {
            return function (value) {
              return value.length >= min && value.length <= (max || min);
            };
          },
          minLength: function (min) {
            return function (value) {
              return value.length >= min;
            };
          },
          maxLength: function (max) {
            return function (value) {
              return value.length <= max;
            };
          },
          // Range

          negative: function () {
            return function (value) {
              return value < 0;
            };
          },
          positive: function () {
            return function (value) {
              return value >= 0;
            };
          },
          between: function (a, b) {
            return function (value) {
              return value >= a && value <= b;
            };
          },
          range: function (a, b) {
            return function (value) {
              return value >= a && value <= b;
            };
          },
          lessThan: function (n) {
            return function (value) {
              return value < n;
            };
          },
          lessThanOrEqual: function (n) {
            return function (value) {
              return value <= n;
            };
          },
          greaterThan: function (n) {
            return function (value) {
              return value > n;
            };
          },
          greaterThanOrEqual: function (n) {
            return function (value) {
              return value >= n;
            };
          },
          // Divisible

          even: function () {
            return function (value) {
              return value % 2 === 0;
            };
          },
          odd: function () {
            return function (value) {
              return value % 2 !== 0;
            };
          },
          includes: function (expected) {
            return function (value) {
              return ~value.indexOf(expected);
            };
          },
          schema: function (schema) {
            return testSchema(schema);
          },
          // branching

          passesAnyOf: function () {
            var validations = [],
              len = arguments.length;
            while (len--) validations[len] = arguments[len];
            return function (value) {
              return validations.some(function (validation) {
                return validation.test(value);
              });
            };
          },
          optional: optional
        };
        function testType(expected) {
          return function (value) {
            return Array.isArray(value) && expected === 'array' || value === null && expected === 'null' || typeof value === expected;
          };
        }
        function isIntegerPolyfill(value) {
          return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
        }
        function testSchema(schema) {
          return {
            simple: function (value) {
              var causes = [];
              Object.keys(schema).forEach(function (key) {
                var nestedValidation = schema[key];
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
            async: function (value) {
              var causes = [];
              var nested = Object.keys(schema).map(function (key) {
                var nestedValidation = schema[key];
                return nestedValidation.testAsync((value || {})[key]).catch(function (ex) {
                  ex.target = key;
                  causes.push(ex);
                });
              });
              return Promise.all(nested).then(function () {
                if (causes.length > 0) {
                  throw causes;
                }
                return true;
              });
            }
          };
        }
        var e$2 = "colors",
          t$2 = "sizes",
          r$3 = "space",
          n$3 = {
            gap: r$3,
            gridGap: r$3,
            columnGap: r$3,
            gridColumnGap: r$3,
            rowGap: r$3,
            gridRowGap: r$3,
            inset: r$3,
            insetBlock: r$3,
            insetBlockEnd: r$3,
            insetBlockStart: r$3,
            insetInline: r$3,
            insetInlineEnd: r$3,
            insetInlineStart: r$3,
            margin: r$3,
            marginTop: r$3,
            marginRight: r$3,
            marginBottom: r$3,
            marginLeft: r$3,
            marginBlock: r$3,
            marginBlockEnd: r$3,
            marginBlockStart: r$3,
            marginInline: r$3,
            marginInlineEnd: r$3,
            marginInlineStart: r$3,
            padding: r$3,
            paddingTop: r$3,
            paddingRight: r$3,
            paddingBottom: r$3,
            paddingLeft: r$3,
            paddingBlock: r$3,
            paddingBlockEnd: r$3,
            paddingBlockStart: r$3,
            paddingInline: r$3,
            paddingInlineEnd: r$3,
            paddingInlineStart: r$3,
            top: r$3,
            right: r$3,
            bottom: r$3,
            left: r$3,
            scrollMargin: r$3,
            scrollMarginTop: r$3,
            scrollMarginRight: r$3,
            scrollMarginBottom: r$3,
            scrollMarginLeft: r$3,
            scrollMarginX: r$3,
            scrollMarginY: r$3,
            scrollMarginBlock: r$3,
            scrollMarginBlockEnd: r$3,
            scrollMarginBlockStart: r$3,
            scrollMarginInline: r$3,
            scrollMarginInlineEnd: r$3,
            scrollMarginInlineStart: r$3,
            scrollPadding: r$3,
            scrollPaddingTop: r$3,
            scrollPaddingRight: r$3,
            scrollPaddingBottom: r$3,
            scrollPaddingLeft: r$3,
            scrollPaddingX: r$3,
            scrollPaddingY: r$3,
            scrollPaddingBlock: r$3,
            scrollPaddingBlockEnd: r$3,
            scrollPaddingBlockStart: r$3,
            scrollPaddingInline: r$3,
            scrollPaddingInlineEnd: r$3,
            scrollPaddingInlineStart: r$3,
            fontSize: "fontSizes",
            background: e$2,
            backgroundColor: e$2,
            backgroundImage: e$2,
            borderImage: e$2,
            border: e$2,
            borderBlock: e$2,
            borderBlockEnd: e$2,
            borderBlockStart: e$2,
            borderBottom: e$2,
            borderBottomColor: e$2,
            borderColor: e$2,
            borderInline: e$2,
            borderInlineEnd: e$2,
            borderInlineStart: e$2,
            borderLeft: e$2,
            borderLeftColor: e$2,
            borderRight: e$2,
            borderRightColor: e$2,
            borderTop: e$2,
            borderTopColor: e$2,
            caretColor: e$2,
            color: e$2,
            columnRuleColor: e$2,
            fill: e$2,
            outline: e$2,
            outlineColor: e$2,
            stroke: e$2,
            textDecorationColor: e$2,
            fontFamily: "fonts",
            fontWeight: "fontWeights",
            lineHeight: "lineHeights",
            letterSpacing: "letterSpacings",
            blockSize: t$2,
            minBlockSize: t$2,
            maxBlockSize: t$2,
            inlineSize: t$2,
            minInlineSize: t$2,
            maxInlineSize: t$2,
            width: t$2,
            minWidth: t$2,
            maxWidth: t$2,
            height: t$2,
            minHeight: t$2,
            maxHeight: t$2,
            flexBasis: t$2,
            gridTemplateColumns: t$2,
            gridTemplateRows: t$2,
            borderWidth: "borderWidths",
            borderTopWidth: "borderWidths",
            borderRightWidth: "borderWidths",
            borderBottomWidth: "borderWidths",
            borderLeftWidth: "borderWidths",
            borderStyle: "borderStyles",
            borderTopStyle: "borderStyles",
            borderRightStyle: "borderStyles",
            borderBottomStyle: "borderStyles",
            borderLeftStyle: "borderStyles",
            borderRadius: "radii",
            borderTopLeftRadius: "radii",
            borderTopRightRadius: "radii",
            borderBottomRightRadius: "radii",
            borderBottomLeftRadius: "radii",
            boxShadow: "shadows",
            textShadow: "shadows",
            transition: "transitions",
            zIndex: "zIndices"
          },
          i$4 = (e, t) => "function" == typeof t ? {
            "()": Function.prototype.toString.call(t)
          } : t,
          o$3 = () => {
            const e = Object.create(null);
            return (t, r, ...n) => {
              const o = (e => JSON.stringify(e, i$4))(t);
              return o in e ? e[o] : e[o] = r(t, ...n);
            };
          },
          l$3 = Symbol.for("sxs.internal"),
          s$4 = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
          a$3 = e => {
            for (const t in e) return true;
            return false;
          },
          {
            hasOwnProperty: c$4
          } = Object.prototype,
          d$4 = e => e.includes("-") ? e : e.replace(/[A-Z]/g, e => "-" + e.toLowerCase()),
          g$4 = /\s+(?![^()]*\))/,
          p$4 = e => t => e(...("string" == typeof t ? String(t).split(g$4) : [t])),
          u$4 = {
            appearance: e => ({
              WebkitAppearance: e,
              appearance: e
            }),
            backfaceVisibility: e => ({
              WebkitBackfaceVisibility: e,
              backfaceVisibility: e
            }),
            backdropFilter: e => ({
              WebkitBackdropFilter: e,
              backdropFilter: e
            }),
            backgroundClip: e => ({
              WebkitBackgroundClip: e,
              backgroundClip: e
            }),
            boxDecorationBreak: e => ({
              WebkitBoxDecorationBreak: e,
              boxDecorationBreak: e
            }),
            clipPath: e => ({
              WebkitClipPath: e,
              clipPath: e
            }),
            content: e => ({
              content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"`
            }),
            hyphens: e => ({
              WebkitHyphens: e,
              hyphens: e
            }),
            maskImage: e => ({
              WebkitMaskImage: e,
              maskImage: e
            }),
            maskSize: e => ({
              WebkitMaskSize: e,
              maskSize: e
            }),
            tabSize: e => ({
              MozTabSize: e,
              tabSize: e
            }),
            textSizeAdjust: e => ({
              WebkitTextSizeAdjust: e,
              textSizeAdjust: e
            }),
            userSelect: e => ({
              WebkitUserSelect: e,
              userSelect: e
            }),
            marginBlock: p$4((e, t) => ({
              marginBlockStart: e,
              marginBlockEnd: t || e
            })),
            marginInline: p$4((e, t) => ({
              marginInlineStart: e,
              marginInlineEnd: t || e
            })),
            maxSize: p$4((e, t) => ({
              maxBlockSize: e,
              maxInlineSize: t || e
            })),
            minSize: p$4((e, t) => ({
              minBlockSize: e,
              minInlineSize: t || e
            })),
            paddingBlock: p$4((e, t) => ({
              paddingBlockStart: e,
              paddingBlockEnd: t || e
            })),
            paddingInline: p$4((e, t) => ({
              paddingInlineStart: e,
              paddingInlineEnd: t || e
            }))
          },
          h$5 = /([\d.]+)([^]*)/,
          f$4 = (e, t) => e.length ? e.reduce((e, r) => (e.push(...t.map(e => e.includes("&") ? e.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(e) ? `:is(${r})` : r) : r + " " + e)), e), []) : t,
          m$4 = (e, t) => e in b$5 && "string" == typeof t ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, r, n, i) => r + ("stretch" === n ? `-moz-available${i};${d$4(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${d$4(e)}:${r}fit-content`) + i) : String(t),
          b$5 = {
            blockSize: 1,
            height: 1,
            inlineSize: 1,
            maxBlockSize: 1,
            maxHeight: 1,
            maxInlineSize: 1,
            maxWidth: 1,
            minBlockSize: 1,
            minHeight: 1,
            minInlineSize: 1,
            minWidth: 1,
            width: 1
          },
          S$4 = e => e ? e + "-" : "",
          k$4 = (e, t, r) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e, n, i, o, l) => "$" == o == !!i ? e : (n || "--" == o ? "calc(" : "") + "var(--" + ("$" === o ? S$4(t) + (l.includes("$") ? "" : S$4(r)) + l.replace(/\$/g, "-") : l) + ")" + (n || "--" == o ? "*" + (n || "") + (i || "1") + ")" : "")),
          y$5 = /\s*,\s*(?![^()]*\))/,
          B$1 = Object.prototype.toString,
          $$3 = (e, t, r, n, i) => {
            let o, l, s;
            const a = (e, t, r) => {
              let c, g;
              const p = e => {
                for (c in e) {
                  const R = 64 === c.charCodeAt(0),
                    z = R && Array.isArray(e[c]) ? e[c] : [e[c]];
                  for (g of z) {
                    const e = /[A-Z]/.test($ = c) ? $ : $.replace(/-[^]/g, e => e[1].toUpperCase()),
                      z = "object" == typeof g && g && g.toString === B$1 && (!n.utils[e] || !t.length);
                    if (e in n.utils && !z) {
                      const t = n.utils[e];
                      if (t !== l) {
                        l = t, p(t(g)), l = null;
                        continue;
                      }
                    } else if (e in u$4) {
                      const t = u$4[e];
                      if (t !== s) {
                        s = t, p(t(g)), s = null;
                        continue;
                      }
                    }
                    if (R && (b = c.slice(1) in n.media ? "@media " + n.media[c.slice(1)] : c, c = b.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e, t, r, n, i, o) => {
                      const l = h$5.test(t),
                        s = .0625 * (l ? -1 : 1),
                        [a, c] = l ? [n, t] : [t, n];
                      return "(" + ("=" === r[0] ? "" : ">" === r[0] === l ? "max-" : "min-") + a + ":" + ("=" !== r[0] && 1 === r.length ? c.replace(h$5, (e, t, n) => Number(t) + s * (">" === r ? 1 : -1) + n) : c) + (i ? ") and (" + (">" === i[0] ? "min-" : "max-") + a + ":" + (1 === i.length ? o.replace(h$5, (e, t, r) => Number(t) + s * (">" === i ? -1 : 1) + r) : o) : "") + ")";
                    })), z) {
                      const e = R ? r.concat(c) : [...r],
                        n = R ? [...t] : f$4(t, c.split(y$5));
                      void 0 !== o && i(x$4(...o)), o = void 0, a(g, n, e);
                    } else void 0 === o && (o = [[], t, r]), c = R || 36 !== c.charCodeAt(0) ? c : `--${S$4(n.prefix)}${c.slice(1).replace(/\$/g, "-")}`, g = z ? g : "number" == typeof g ? g && e in I$2 ? String(g) + "px" : String(g) : k$4(m$4(e, null == g ? "" : g), n.prefix, n.themeMap[e]), o[0].push(`${R ? `${c} ` : `${d$4(c)}:`}${g}`);
                  }
                }
                var b, $;
              };
              p(e), void 0 !== o && i(x$4(...o)), o = void 0;
            };
            a(e, t, r);
          },
          x$4 = (e, t, r) => `${r.map(e => `${e}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(r.length ? r.length + 1 : 0).join("}")}`,
          I$2 = {
            animationDelay: 1,
            animationDuration: 1,
            backgroundSize: 1,
            blockSize: 1,
            border: 1,
            borderBlock: 1,
            borderBlockEnd: 1,
            borderBlockEndWidth: 1,
            borderBlockStart: 1,
            borderBlockStartWidth: 1,
            borderBlockWidth: 1,
            borderBottom: 1,
            borderBottomLeftRadius: 1,
            borderBottomRightRadius: 1,
            borderBottomWidth: 1,
            borderEndEndRadius: 1,
            borderEndStartRadius: 1,
            borderInlineEnd: 1,
            borderInlineEndWidth: 1,
            borderInlineStart: 1,
            borderInlineStartWidth: 1,
            borderInlineWidth: 1,
            borderLeft: 1,
            borderLeftWidth: 1,
            borderRadius: 1,
            borderRight: 1,
            borderRightWidth: 1,
            borderSpacing: 1,
            borderStartEndRadius: 1,
            borderStartStartRadius: 1,
            borderTop: 1,
            borderTopLeftRadius: 1,
            borderTopRightRadius: 1,
            borderTopWidth: 1,
            borderWidth: 1,
            bottom: 1,
            columnGap: 1,
            columnRule: 1,
            columnRuleWidth: 1,
            columnWidth: 1,
            containIntrinsicSize: 1,
            flexBasis: 1,
            fontSize: 1,
            gap: 1,
            gridAutoColumns: 1,
            gridAutoRows: 1,
            gridTemplateColumns: 1,
            gridTemplateRows: 1,
            height: 1,
            inlineSize: 1,
            inset: 1,
            insetBlock: 1,
            insetBlockEnd: 1,
            insetBlockStart: 1,
            insetInline: 1,
            insetInlineEnd: 1,
            insetInlineStart: 1,
            left: 1,
            letterSpacing: 1,
            margin: 1,
            marginBlock: 1,
            marginBlockEnd: 1,
            marginBlockStart: 1,
            marginBottom: 1,
            marginInline: 1,
            marginInlineEnd: 1,
            marginInlineStart: 1,
            marginLeft: 1,
            marginRight: 1,
            marginTop: 1,
            maxBlockSize: 1,
            maxHeight: 1,
            maxInlineSize: 1,
            maxWidth: 1,
            minBlockSize: 1,
            minHeight: 1,
            minInlineSize: 1,
            minWidth: 1,
            offsetDistance: 1,
            offsetRotate: 1,
            outline: 1,
            outlineOffset: 1,
            outlineWidth: 1,
            overflowClipMargin: 1,
            padding: 1,
            paddingBlock: 1,
            paddingBlockEnd: 1,
            paddingBlockStart: 1,
            paddingBottom: 1,
            paddingInline: 1,
            paddingInlineEnd: 1,
            paddingInlineStart: 1,
            paddingLeft: 1,
            paddingRight: 1,
            paddingTop: 1,
            perspective: 1,
            right: 1,
            rowGap: 1,
            scrollMargin: 1,
            scrollMarginBlock: 1,
            scrollMarginBlockEnd: 1,
            scrollMarginBlockStart: 1,
            scrollMarginBottom: 1,
            scrollMarginInline: 1,
            scrollMarginInlineEnd: 1,
            scrollMarginInlineStart: 1,
            scrollMarginLeft: 1,
            scrollMarginRight: 1,
            scrollMarginTop: 1,
            scrollPadding: 1,
            scrollPaddingBlock: 1,
            scrollPaddingBlockEnd: 1,
            scrollPaddingBlockStart: 1,
            scrollPaddingBottom: 1,
            scrollPaddingInline: 1,
            scrollPaddingInlineEnd: 1,
            scrollPaddingInlineStart: 1,
            scrollPaddingLeft: 1,
            scrollPaddingRight: 1,
            scrollPaddingTop: 1,
            shapeMargin: 1,
            textDecoration: 1,
            textDecorationThickness: 1,
            textIndent: 1,
            textUnderlineOffset: 1,
            top: 1,
            transitionDelay: 1,
            transitionDuration: 1,
            verticalAlign: 1,
            width: 1,
            wordSpacing: 1
          },
          R$3 = e => String.fromCharCode(e + (e > 25 ? 39 : 97)),
          z$2 = e => (e => {
            let t,
              r = "";
            for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = R$3(t % 52) + r;
            return R$3(t % 52) + r;
          })(((e, t) => {
            let r = t.length;
            for (; r;) e = 33 * e ^ t.charCodeAt(--r);
            return e;
          })(5381, JSON.stringify(e)) >>> 0),
          W$1 = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"],
          j$1 = e => {
            if (e.href && !e.href.startsWith(location.origin)) return false;
            try {
              return !!e.cssRules;
            } catch (e) {
              return false;
            }
          },
          E$2 = e => {
            let t;
            const r = () => {
                const {
                  cssRules: e
                } = t.sheet;
                return [].map.call(e, (r, n) => {
                  const {
                    cssText: i
                  } = r;
                  let o = "";
                  if (i.startsWith("--sxs")) return "";
                  if (e[n - 1] && (o = e[n - 1].cssText).startsWith("--sxs")) {
                    if (!r.cssRules.length) return "";
                    for (const e in t.rules) if (t.rules[e].group === r) return `--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;
                    return r.cssRules.length ? `${o}${i}` : "";
                  }
                  return i;
                }).join("");
              },
              n = () => {
                if (t) {
                  const {
                    rules: e,
                    sheet: r
                  } = t;
                  if (!r.deleteRule) {
                    for (; 3 === Object(Object(r.cssRules)[0]).type;) r.cssRules.splice(0, 1);
                    r.cssRules = [];
                  }
                  for (const t in e) delete e[t];
                }
                const i = Object(e).styleSheets || [];
                for (const e of i) if (j$1(e)) {
                  for (let i = 0, o = e.cssRules; o[i]; ++i) {
                    const l = Object(o[i]);
                    if (1 !== l.type) continue;
                    const s = Object(o[i + 1]);
                    if (4 !== s.type) continue;
                    ++i;
                    const {
                      cssText: a
                    } = l;
                    if (!a.startsWith("--sxs")) continue;
                    const c = a.slice(14, -3).trim().split(/\s+/),
                      d = W$1[c[0]];
                    d && (t || (t = {
                      sheet: e,
                      reset: n,
                      rules: {},
                      toString: r
                    }), t.rules[d] = {
                      group: s,
                      index: i,
                      cache: new Set(c)
                    });
                  }
                  if (t) break;
                }
                if (!t) {
                  const i = (e, t) => ({
                    type: t,
                    cssRules: [],
                    insertRule(e, t) {
                      this.cssRules.splice(t, 0, i(e, {
                        import: 3,
                        undefined: 1
                      }[(e.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
                    },
                    get cssText() {
                      return "@media{}" === e ? `@media{${[].map.call(this.cssRules, e => e.cssText).join("")}}` : e;
                    }
                  });
                  t = {
                    sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : i("", "text/css"),
                    rules: {},
                    reset: n,
                    toString: r
                  };
                }
                const {
                  sheet: o,
                  rules: l
                } = t;
                for (let e = W$1.length - 1; e >= 0; --e) {
                  const t = W$1[e];
                  if (!l[t]) {
                    const r = W$1[e + 1],
                      n = l[r] ? l[r].index : o.cssRules.length;
                    o.insertRule("@media{}", n), o.insertRule(`--sxs{--sxs:${e}}`, n), l[t] = {
                      group: o.cssRules[n + 1],
                      index: n,
                      cache: new Set([e])
                    };
                  }
                  v$3(l[t]);
                }
              };
            return n(), t;
          },
          v$3 = e => {
            const t = e.group;
            let r = t.cssRules.length;
            e.apply = e => {
              try {
                t.insertRule(e, r), ++r;
              } catch (e) {}
            };
          },
          T$4 = Symbol(),
          w$3 = o$3(),
          M$2 = (e, t) => w$3(e, () => (...r) => {
            let n = {
              type: null,
              composers: new Set()
            };
            for (const t of r) if (null != t) if (t[l$3]) {
              null == n.type && (n.type = t[l$3].type);
              for (const e of t[l$3].composers) n.composers.add(e);
            } else t.constructor !== Object || t.$$typeof ? null == n.type && (n.type = t) : n.composers.add(C$2(t, e));
            return null == n.type && (n.type = "span"), n.composers.size || n.composers.add(["PJLV", {}, [], [], {}, []]), P$1(e, n, t);
          }),
          C$2 = (_ref4, i) => {
            let {
                variants: e,
                compoundVariants: t,
                defaultVariants: r
              } = _ref4,
              n = _objectWithoutProperties2(_ref4, _excluded9);
            const o = `${S$4(i.prefix)}c-${z$2(n)}`,
              l = [],
              s = [],
              d = Object.create(null),
              g = [];
            for (const e in r) d[e] = String(r[e]);
            if ("object" == typeof e && e) for (const t in e) {
              p = d, u = t, c$4.call(p, u) || (d[t] = "undefined");
              const r = e[t];
              for (const e in r) {
                const n = {
                  [t]: String(e)
                };
                "undefined" === String(e) && g.push(t);
                const i = r[e],
                  o = [n, i, !a$3(i)];
                l.push(o);
              }
            }
            var p, u;
            if ("object" == typeof t && t) for (const e of t) {
              let {
                  css: t
                } = e,
                r = _objectWithoutProperties2(e, _excluded0);
              t = "object" == typeof t && t || {};
              for (const e in r) r[e] = String(r[e]);
              const n = [r, t, !a$3(t)];
              s.push(n);
            }
            return [o, n, l, s, d, g];
          },
          P$1 = (e, t, r) => {
            const [n, i, o, a] = L$4(t.composers),
              c = "function" == typeof t.type || t.type.$$typeof ? (e => {
                function t() {
                  for (let r = 0; r < t[T$4].length; r++) {
                    const [n, i] = t[T$4][r];
                    e.rules[n].apply(i);
                  }
                  return t[T$4] = [], null;
                }
                return t[T$4] = [], t.rules = {}, W$1.forEach(e => t.rules[e] = {
                  apply: r => t[T$4].push([e, r])
                }), t;
              })(r) : null,
              d = (c || r).rules,
              g = `.${n}${i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""}`,
              p = l => {
                l = "object" == typeof l && l || A$2;
                const {
                    css: s
                  } = l,
                  p = _objectWithoutProperties2(l, _excluded1),
                  u = {};
                for (const e in o) if (delete p[e], e in l) {
                  let t = l[e];
                  "object" == typeof t && t ? u[e] = _objectSpread3({
                    "@initial": o[e]
                  }, t) : (t = String(t), u[e] = "undefined" !== t || a.has(e) ? t : o[e]);
                } else u[e] = o[e];
                const h = new Set([...i]);
                for (const [n, i, o, l] of t.composers) {
                  r.rules.styled.cache.has(n) || (r.rules.styled.cache.add(n), $$3(i, [`.${n}`], [], e, e => {
                    d.styled.apply(e);
                  }));
                  const t = O$2(o, u, e.media),
                    s = O$2(l, u, e.media, true);
                  for (const i of t) if (void 0 !== i) for (const [t, o, l] of i) {
                    const i = `${n}-${z$2(o)}-${t}`;
                    h.add(i);
                    const s = (l ? r.rules.resonevar : r.rules.onevar).cache,
                      a = l ? d.resonevar : d.onevar;
                    s.has(i) || (s.add(i), $$3(o, [`.${i}`], [], e, e => {
                      a.apply(e);
                    }));
                  }
                  for (const t of s) if (void 0 !== t) for (const [i, o] of t) {
                    const t = `${n}-${z$2(o)}-${i}`;
                    h.add(t), r.rules.allvar.cache.has(t) || (r.rules.allvar.cache.add(t), $$3(o, [`.${t}`], [], e, e => {
                      d.allvar.apply(e);
                    }));
                  }
                }
                if ("object" == typeof s && s) {
                  const t = `${n}-i${z$2(s)}-css`;
                  h.add(t), r.rules.inline.cache.has(t) || (r.rules.inline.cache.add(t), $$3(s, [`.${t}`], [], e, e => {
                    d.inline.apply(e);
                  }));
                }
                for (const e of String(l.className || "").trim().split(/\s+/)) e && h.add(e);
                const f = p.className = [...h].join(" ");
                return {
                  type: t.type,
                  className: f,
                  selector: g,
                  props: p,
                  toString: () => f,
                  deferredInjector: c
                };
              };
            return s$4(p, {
              className: n,
              selector: g,
              [l$3]: t,
              toString: () => (r.rules.styled.cache.has(n) || p(), n)
            });
          },
          L$4 = e => {
            let t = "";
            const r = [],
              n = {},
              i = [];
            for (const [o,,,, l, s] of e) {
              "" === t && (t = o), r.push(o), i.push(...s);
              for (const e in l) {
                const t = l[e];
                (void 0 === n[e] || "undefined" !== t || s.includes(t)) && (n[e] = t);
              }
            }
            return [t, r, n, new Set(i)];
          },
          O$2 = (e, t, r, n) => {
            const i = [];
            e: for (let [o, l, s] of e) {
              if (s) continue;
              let e,
                a = 0,
                c = false;
              for (e in o) {
                const n = o[e];
                let i = t[e];
                if (i !== n) {
                  if ("object" != typeof i || !i) continue e;
                  {
                    let e,
                      t,
                      o = 0;
                    for (const l in i) {
                      if (n === String(i[l])) {
                        if ("@initial" !== l) {
                          const e = l.slice(1);
                          (t = t || []).push(e in r ? r[e] : l.replace(/^@media ?/, "")), c = true;
                        }
                        a += o, e = true;
                      }
                      ++o;
                    }
                    if (t && t.length && (l = {
                      ["@media " + t.join(", ")]: l
                    }), !e) continue e;
                  }
                }
              }
              (i[a] = i[a] || []).push([n ? "cv" : `${e}-${o[e]}`, l, c]);
            }
            return i;
          },
          A$2 = {},
          N$3 = o$3(),
          D$3 = (e, t) => N$3(e, () => (...r) => {
            const n = () => {
              for (let n of r) {
                n = "object" == typeof n && n || {};
                let r = z$2(n);
                if (!t.rules.global.cache.has(r)) {
                  if (t.rules.global.cache.add(r), "@import" in n) {
                    let e = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
                    for (let r of [].concat(n["@import"])) r = r.includes('"') || r.includes("'") ? r : `"${r}"`, t.sheet.insertRule(`@import ${r};`, e++);
                    delete n["@import"];
                  }
                  $$3(n, [], [], e, e => {
                    t.rules.global.apply(e);
                  });
                }
              }
              return "";
            };
            return s$4(n, {
              toString: n
            });
          }),
          H$3 = o$3(),
          V$2 = (e, t) => H$3(e, () => r => {
            const n = `${S$4(e.prefix)}k-${z$2(r)}`,
              i = () => {
                if (!t.rules.global.cache.has(n)) {
                  t.rules.global.cache.add(n);
                  const i = [];
                  $$3(r, [], [], e, e => i.push(e));
                  const o = `@keyframes ${n}{${i.join("")}}`;
                  t.rules.global.apply(o);
                }
                return n;
              };
            return s$4(i, {
              get name() {
                return i();
              },
              toString: i
            });
          }),
          G = class {
            constructor(e, t, r, n) {
              this.token = null == e ? "" : String(e), this.value = null == t ? "" : String(t), this.scale = null == r ? "" : String(r), this.prefix = null == n ? "" : String(n);
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
          },
          F$1 = o$3(),
          J$1 = (e, t) => F$1(e, () => (r, n) => {
            n = "object" == typeof r && r || Object(n);
            const i = `.${r = (r = "string" == typeof r ? r : "") || `${S$4(e.prefix)}t-${z$2(n)}`}`,
              o = {},
              l = [];
            for (const t in n) {
              o[t] = {};
              for (const r in n[t]) {
                const i = `--${S$4(e.prefix)}${t}-${r}`,
                  s = k$4(String(n[t][r]), e.prefix, t);
                o[t][r] = new G(r, s, t, e.prefix), l.push(`${i}:${s}`);
              }
            }
            const s = () => {
              if (l.length && !t.rules.themed.cache.has(r)) {
                t.rules.themed.cache.add(r);
                const i = `${n === e.theme ? ":root," : ""}.${r}{${l.join(";")}}`;
                t.rules.themed.apply(i);
              }
              return r;
            };
            return _objectSpread3(_objectSpread3({}, o), {}, {
              get className() {
                return s();
              },
              selector: i,
              toString: s
            });
          }),
          U$1 = o$3();
        var Y$1 = o$3(),
          q$2 = e => {
            const t = (e => {
              let t = false;
              const r = U$1(e, e => {
                t = true;
                const r = "prefix" in (e = "object" == typeof e && e || {}) ? String(e.prefix) : "",
                  i = "object" == typeof e.media && e.media || {},
                  o = "object" == typeof e.root ? e.root || null : globalThis.document || null,
                  l = "object" == typeof e.theme && e.theme || {},
                  s = {
                    prefix: r,
                    media: i,
                    theme: l,
                    themeMap: "object" == typeof e.themeMap && e.themeMap || _objectSpread3({}, n$3),
                    utils: "object" == typeof e.utils && e.utils || {}
                  },
                  a = E$2(o),
                  c = {
                    css: M$2(s, a),
                    globalCss: D$3(s, a),
                    keyframes: V$2(s, a),
                    createTheme: J$1(s, a),
                    reset() {
                      a.reset(), c.theme.toString();
                    },
                    theme: {},
                    sheet: a,
                    config: s,
                    prefix: r,
                    getCssText: a.toString,
                    toString: a.toString
                  };
                return String(c.theme = c.createTheme(l)), c;
              });
              return t || r.reset(), r;
            })(e);
            return t.styled = (({
              config: e,
              sheet: t
            }) => Y$1(e, () => {
              const r = M$2(e, t);
              return (...e) => {
                const t = r(...e),
                  n = t[l$3].type,
                  i = React.forwardRef((e, r) => {
                    const i = e && e.as || n,
                      {
                        props: o,
                        deferredInjector: l
                      } = t(e);
                    return delete o.as, o.ref = r, l ? React.createElement(React.Fragment, null, React.createElement(i, o), React.createElement(l, null)) : React.createElement(i, o);
                  });
                return i.className = t.className, i.displayName = `Styled.${n.displayName || n.name || n}`, i.selector = t.selector, i.toString = () => t.selector, i[l$3] = t[l$3], i;
              };
            }))(t), t;
          }; //# sourceMappingUrl=index.map

        function clamp$2(v, min, max) {
          return Math.max(min, Math.min(v, max));
        }
        const V$1 = {
          toVector(v, fallback) {
            if (v === undefined) v = fallback;
            return Array.isArray(v) ? v : [v, v];
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
        function rubberbandIfOutOfBounds(position, min, max, constant = 0.15) {
          if (constant === 0) return clamp$2(position, min, max);
          if (position < min) return -rubberband(min - position, max - min, constant) + min;
          if (position > max) return +rubberband(position - max, max - min, constant) + max;
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
        function ownKeys$3(e, r) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function (r2) {
              return Object.getOwnPropertyDescriptor(e, r2).enumerable;
            })), t.push.apply(t, o);
          }
          return t;
        }
        function _objectSpread2$1(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys$3(Object(t), true).forEach(function (r2) {
              _defineProperty$3(e, r2, t[r2]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r2) {
              Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
            });
          }
          return e;
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
        function capitalize(string) {
          if (!string) return "";
          return string[0].toUpperCase() + string.slice(1);
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
          return Array.from(event.touches).filter(e => {
            var _event$currentTarget, _event$currentTarget$;
            return e.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e.target));
          });
        }
        function getTouchList(event) {
          return event.type === "touchend" || event.type === "touchcancel" ? event.changedTouches : event.targetTouches;
        }
        function getValueEvent(event) {
          return isTouch(event) ? getTouchList(event)[0] : event;
        }
        function touchIds(event) {
          return getCurrentTargetTouchList(event).map(touch => touch.identifier);
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
        function call(v, ...args) {
          if (typeof v === "function") {
            return v(...args);
          } else {
            return v;
          }
        }
        function noop$1() {}
        function chain(...fns) {
          if (fns.length === 0) return noop$1;
          if (fns.length === 1) return fns[0];
          return function () {
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
            const rubberband = state._active ? config.rubberband || [0, 0] : [0, 0];
            state.offset = computeRubberband(state._bounds, state.offset, rubberband);
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
          restrictToAxis(v) {
            if (this.config.axis || this.config.lockDirection) {
              switch (this.state.axis) {
                case "x":
                  v[1] = 0;
                  break;
                case "y":
                  v[0] = 0;
                  break;
              }
            }
          }
        }
        const identity = v => v;
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
              return state => coordinatesConfigResolver.bounds(value(state));
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
            } catch (_unused) {}
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
          } catch (e) {
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
            const _scaleBounds = state => {
              const D = assignDefault(call(scaleBounds, state), {
                min: -Infinity,
                max: Infinity
              });
              return [D.min, D.max];
            };
            const _angleBounds = state => {
              const A = assignDefault(call(angleBounds, state), {
                min: -Infinity,
                max: Infinity
              });
              return [A.min, A.max];
            };
            if (typeof scaleBounds !== "function" && typeof angleBounds !== "function") return [_scaleBounds(), _angleBounds()];
            return state => [_scaleBounds(state), _angleBounds(state)];
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
        const EngineMap = /* @__PURE__ */new Map();
        const ConfigResolverMap = /* @__PURE__ */new Map();
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
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }
        function _objectWithoutProperties$2(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose$2(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
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
          const _ref = newConfig,
            {
              target,
              eventOptions,
              window: window2,
              enabled,
              transform
            } = _ref,
            rest = _objectWithoutProperties$2(_ref, _excluded$c);
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
            }, rest), resolver);
          } else {
            for (const key in rest) {
              const resolver = ConfigResolverMap.get(key);
              if (resolver) {
                _config[key] = resolveWith(_objectSpread2$1({
                  shared: _config.shared
                }, rest[key]), resolver);
              }
            }
          }
          return _config;
        }
        class EventStore {
          constructor(ctrl, gestureKey) {
            _defineProperty$3(this, "_listeners", /* @__PURE__ */new Set());
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
            this._listeners.forEach(remove => remove());
            this._listeners.clear();
          }
        }
        class TimeoutStore {
          constructor() {
            _defineProperty$3(this, "_timeouts", /* @__PURE__ */new Map());
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
            this._timeouts.forEach(timeout => void window.clearTimeout(timeout));
            this._timeouts.clear();
          }
        }
        class Controller {
          constructor(handlers) {
            _defineProperty$3(this, "gestures", /* @__PURE__ */new Set());
            _defineProperty$3(this, "_targetEventStore", new EventStore(this));
            _defineProperty$3(this, "gestureEventStores", {});
            _defineProperty$3(this, "gestureTimeoutStores", {});
            _defineProperty$3(this, "handlers", {});
            _defineProperty$3(this, "config", {});
            _defineProperty$3(this, "pointerIds", /* @__PURE__ */new Set());
            _defineProperty$3(this, "touchIds", /* @__PURE__ */new Set());
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
              if (event.type === "pointerup" || event.type === "pointercancel") this.pointerIds.delete(event.pointerId);else if (event.type === "pointerdown") this.pointerIds.add(event.pointerId);
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
            const props = {};
            let target;
            if (sharedConfig.target) {
              target = sharedConfig.target();
              if (!target) return;
            }
            if (sharedConfig.enabled) {
              for (const gestureKey of this.gestures) {
                const gestureConfig = this.config[gestureKey];
                const bindFunction = bindToProps(props, gestureConfig.eventOptions, !!target);
                if (gestureConfig.enabled) {
                  const Engine = EngineMap.get(gestureKey);
                  new Engine(this, args, gestureKey).bind(bindFunction);
                }
              }
              const nativeBindFunction = bindToProps(props, sharedConfig.eventOptions, !!target);
              for (const eventKey in this.nativeHandlers) {
                nativeBindFunction(eventKey, "", event => this.nativeHandlers[eventKey](_objectSpread2$1(_objectSpread2$1({}, this.state.shared), {}, {
                  event,
                  args
                })), void 0, true);
              }
            }
            for (const handlerProp in props) {
              props[handlerProp] = chain(...props[handlerProp]);
            }
            if (!target) return props;
            for (const handlerProp in props) {
              const {
                device,
                capture,
                passive
              } = parseProp(handlerProp);
              this._targetEventStore.add(target, device, "", props[handlerProp], {
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
        const bindToProps = (props, eventOptions, withPassiveOption) => (device, action, handler, options = {}, isNative = false) => {
          var _options$capture, _options$passive;
          const capture = (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
          const passive = (_options$passive = options.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
          let handlerProp = isNative ? device : toHandlerProp(device, action, capture);
          if (withPassiveOption && passive) handlerProp += "Passive";
          props[handlerProp] = props[handlerProp] || [];
          props[handlerProp].push(handler);
        };
        function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
          const ctrl = React.useMemo(() => new Controller(handlers), []);
          ctrl.applyHandlers(handlers, nativeHandlers);
          ctrl.applyConfig(config, gestureKey);
          React.useEffect(ctrl.effect.bind(ctrl));
          React.useEffect(() => {
            return ctrl.clean.bind(ctrl);
          }, []);
          if (config.target === undefined) {
            return ctrl.bind.bind(ctrl);
          }
          return undefined;
        }
        function useDrag$1(handler, config) {
          registerAction(dragAction);
          return useRecognizers({
            drag: handler
          }, config || {}, 'drag');
        }
        function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, {
          checkForDefaultPrevented = true
        } = {}) {
          return function handleEvent(event) {
            originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
            if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
          };
        }

        /* -------------------------------------------------------------------------------------------------
         * createContextScope
         * -----------------------------------------------------------------------------------------------*/
        function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
          let defaultContexts = [];
          /* -----------------------------------------------------------------------------------------------
          * createContext
          * ---------------------------------------------------------------------------------------------*/
          function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
            const BaseContext = /*#__PURE__*/reactExports.createContext(defaultContext);
            const index = defaultContexts.length;
            defaultContexts = [...defaultContexts, defaultContext];
            function Provider(props) {
              const {
                  scope: scope,
                  children: children
                } = props,
                context = _objectWithoutProperties2(props, _excluded10);
              const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext; // Only re-memoize when prop values change
              // eslint-disable-next-line react-hooks/exhaustive-deps
              const value = reactExports.useMemo(() => context, Object.values(context));
              return /*#__PURE__*/reactExports.createElement(Context.Provider, {
                value: value
              }, children);
            }
            function useContext(consumerName, scope) {
              const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
              const context = reactExports.useContext(Context);
              if (context) return context;
              if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
              throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
            }
            Provider.displayName = rootComponentName + 'Provider';
            return [Provider, useContext];
          }
          /* -----------------------------------------------------------------------------------------------
          * createScope
          * ---------------------------------------------------------------------------------------------*/
          const createScope = () => {
            const scopeContexts = defaultContexts.map(defaultContext => {
              return /*#__PURE__*/reactExports.createContext(defaultContext);
            });
            return function useScope(scope) {
              const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
              return reactExports.useMemo(() => ({
                [`__scope${scopeName}`]: _objectSpread3(_objectSpread3({}, scope), {}, {
                  [scopeName]: contexts
                })
              }), [scope, contexts]);
            };
          };
          createScope.scopeName = scopeName;
          return [$c512c27ab02ef895$export$fd42f52fd3ae1109, $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)];
        }
        /* -------------------------------------------------------------------------------------------------
         * composeContextScopes
         * -----------------------------------------------------------------------------------------------*/
        function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
          const baseScope = scopes[0];
          if (scopes.length === 1) return baseScope;
          const createScope1 = () => {
            const scopeHooks = scopes.map(createScope => ({
              useScope: createScope(),
              scopeName: createScope.scopeName
            }));
            return function useComposedScopes(overrideScopes) {
              const nextScopes1 = scopeHooks.reduce((nextScopes, {
                useScope: useScope,
                scopeName: scopeName
              }) => {
                // We are calling a hook inside a callback which React warns against to avoid inconsistent
                // renders, however, scoping doesn't have render side effects so we ignore the rule.
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return _objectSpread3(_objectSpread3({}, nextScopes), currentScope);
              }, {});
              return reactExports.useMemo(() => ({
                [`__scope${baseScope.scopeName}`]: nextScopes1
              }), [nextScopes1]);
            };
          };
          createScope1.scopeName = baseScope.scopeName;
          return createScope1;
        }

        /**
         * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
         * prop or avoid re-executing effects when passed as a dependency
         */
        function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
          const callbackRef = reactExports.useRef(callback);
          reactExports.useEffect(() => {
            callbackRef.current = callback;
          }); // https://github.com/facebook/react/issues/19240
          return reactExports.useMemo(() => (...args) => {
            var _callbackRef$current;
            return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
          }, []);
        }

        /**
         * Listens for when the escape key is down
         */
        function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
          const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
          reactExports.useEffect(() => {
            const handleKeyDown = event => {
              if (event.key === 'Escape') onEscapeKeyDown(event);
            };
            ownerDocument.addEventListener('keydown', handleKeyDown);
            return () => ownerDocument.removeEventListener('keydown', handleKeyDown);
          }, [onEscapeKeyDown, ownerDocument]);
        }
        const $5cb92bef7577960e$var$CONTEXT_UPDATE = 'dismissableLayer.update';
        const $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = 'dismissableLayer.pointerDownOutside';
        const $5cb92bef7577960e$var$FOCUS_OUTSIDE = 'dismissableLayer.focusOutside';
        let $5cb92bef7577960e$var$originalBodyPointerEvents;
        const $5cb92bef7577960e$var$DismissableLayerContext = /*#__PURE__*/reactExports.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set()
        });
        const $5cb92bef7577960e$export$177fb62ff3ec1f22 = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          var _node$ownerDocument;
          const {
              disableOutsidePointerEvents = false,
              onEscapeKeyDown: onEscapeKeyDown,
              onPointerDownOutside: onPointerDownOutside,
              onFocusOutside: onFocusOutside,
              onInteractOutside: onInteractOutside,
              onDismiss: onDismiss
            } = props,
            layerProps = _objectWithoutProperties2(props, _excluded11);
          const context = reactExports.useContext($5cb92bef7577960e$var$DismissableLayerContext);
          const [node1, setNode] = reactExports.useState(null);
          const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
          const [, force] = reactExports.useState({});
          const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, node => setNode(node));
          const layers = Array.from(context.layers);
          const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1); // prettier-ignore
          const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled); // prettier-ignore
          const index = node1 ? layers.indexOf(node1) : -1;
          const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
          const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
          const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside(event => {
            const target = event.target;
            const isPointerDownOnBranch = [...context.branches].some(branch => branch.contains(target));
            if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
            onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
            onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
            if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
          }, ownerDocument);
          const focusOutside = $5cb92bef7577960e$var$useFocusOutside(event => {
            const target = event.target;
            const isFocusInBranch = [...context.branches].some(branch => branch.contains(target));
            if (isFocusInBranch) return;
            onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
            onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
            if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
          }, ownerDocument);
          $addc16e1bbe58fd0$export$3a72a57244d6e765(event => {
            const isHighestLayer = index === context.layers.size - 1;
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
                ownerDocument.body.style.pointerEvents = 'none';
              }
              context.layersWithOutsidePointerEventsDisabled.add(node1);
            }
            context.layers.add(node1);
            $5cb92bef7577960e$var$dispatchUpdate();
            return () => {
              if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
            };
          }, [node1, ownerDocument, disableOutsidePointerEvents, context]);
          /**
          * We purposefully prevent combining this effect with the `disableOutsidePointerEvents` effect
          * because a change to `disableOutsidePointerEvents` would remove this layer from the stack
          * and add it to the end again so the layering order wouldn't be _creation order_.
          * We only want them to be removed from context stacks when unmounted.
          */
          reactExports.useEffect(() => {
            return () => {
              if (!node1) return;
              context.layers.delete(node1);
              context.layersWithOutsidePointerEventsDisabled.delete(node1);
              $5cb92bef7577960e$var$dispatchUpdate();
            };
          }, [node1, context]);
          reactExports.useEffect(() => {
            const handleUpdate = () => force({});
            document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
            return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
          }, []);
          return /*#__PURE__*/reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({}, layerProps, {
            ref: composedRefs,
            style: _objectSpread3({
              pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? 'auto' : 'none' : undefined
            }, props.style),
            onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
            onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
            onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
          }));
        });
        /* -----------------------------------------------------------------------------------------------*/ /**
                                                                                                             * Listens for `pointerdown` outside a react subtree. We use `pointerdown` rather than `pointerup`
                                                                                                             * to mimic layer dismissing behaviour present in OS.
                                                                                                             * Returns props to pass to the node we want to check for outside events.
                                                                                                             */
        function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
          const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
          const isPointerInsideReactTreeRef = reactExports.useRef(false);
          const handleClickRef = reactExports.useRef(() => {});
          reactExports.useEffect(() => {
            const handlePointerDown = event => {
              if (event.target && !isPointerInsideReactTreeRef.current) {
                const eventDetail = {
                  originalEvent: event
                };
                function handleAndDispatchPointerDownOutsideEvent() {
                  $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                    discrete: true
                  });
                }
                /**
                * On touch devices, we need to wait for a click event because browsers implement
                * a ~350ms delay between the time the user stops touching the display and when the
                * browser executres events. We need to ensure we don't reactivate pointer-events within
                * this timeframe otherwise the browser may execute events that should have been prevented.
                *
                * Additionally, this also lets us deal automatically with cancellations when a click event
                * isn't raised because the page was considered scrolled/drag-scrolled, long-pressed, etc.
                *
                * This is why we also continuously remove the previous listener, because we cannot be
                * certain that it was raised, and therefore cleaned-up.
                */
                if (event.pointerType === 'touch') {
                  ownerDocument.removeEventListener('click', handleClickRef.current);
                  handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
                  ownerDocument.addEventListener('click', handleClickRef.current, {
                    once: true
                  });
                } else handleAndDispatchPointerDownOutsideEvent();
              }
              isPointerInsideReactTreeRef.current = false;
            };
            /**
            * if this hook executes in a component that mounts via a `pointerdown` event, the event
            * would bubble up to the document and trigger a `pointerDownOutside` event. We avoid
            * this by delaying the event listener registration on the document.
            * This is not React specific, but rather how the DOM works, ie:
            * ```
            * button.addEventListener('pointerdown', () => {
            *   console.log('I will log');
            *   document.addEventListener('pointerdown', () => {
            *     console.log('I will also log');
            *   })
            * });
            */
            const timerId = window.setTimeout(() => {
              ownerDocument.addEventListener('pointerdown', handlePointerDown);
            }, 0);
            return () => {
              window.clearTimeout(timerId);
              ownerDocument.removeEventListener('pointerdown', handlePointerDown);
              ownerDocument.removeEventListener('click', handleClickRef.current);
            };
          }, [ownerDocument, handlePointerDownOutside]);
          return {
            // ensures we check React component tree (not just DOM tree)
            onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
          };
        }
        /**
         * Listens for when focus happens outside a react subtree.
         * Returns props to pass to the root (node) of the subtree we want to check.
         */
        function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
          const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
          const isFocusInsideReactTreeRef = reactExports.useRef(false);
          reactExports.useEffect(() => {
            const handleFocus = event => {
              if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                  originalEvent: event
                };
                $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                  discrete: false
                });
              }
            };
            ownerDocument.addEventListener('focusin', handleFocus);
            return () => ownerDocument.removeEventListener('focusin', handleFocus);
          }, [ownerDocument, handleFocusOutside]);
          return {
            onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
            onBlurCapture: () => isFocusInsideReactTreeRef.current = false
          };
        }
        function $5cb92bef7577960e$var$dispatchUpdate() {
          const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
          document.dispatchEvent(event);
        }
        function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, {
          discrete: discrete
        }) {
          const target = detail.originalEvent.target;
          const event = new CustomEvent(name, {
            bubbles: false,
            cancelable: true,
            detail: detail
          });
          if (handler) target.addEventListener(name, handler, {
            once: true
          });
          if (discrete) $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);else target.dispatchEvent(event);
        }

        /**
         * On the server, React emits a warning when calling `useLayoutEffect`.
         * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
         * We use this safe version which suppresses the warning by replacing it with a noop on the server.
         *
         * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
         */
        const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {};
        const $1746a345f3d73bb7$var$useReactId = React$1['useId'.toString()] || (() => undefined);
        let $1746a345f3d73bb7$var$count = 0;
        function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
          const [id, setId] = reactExports.useState($1746a345f3d73bb7$var$useReactId()); // React versions older than 18 will have client-side ids only.
          $9f79659886946c16$export$e5c5a5f917a5871c(() => {
            setId(reactId => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++));
          }, [deterministicId]);
          return id ? `radix-${id}` : '';
        }
        function t$1(t) {
          return t.split("-")[0];
        }
        function e$1(t) {
          return t.split("-")[1];
        }
        function n$2(e) {
          return ["top", "bottom"].includes(t$1(e)) ? "x" : "y";
        }
        function r$2(t) {
          return "y" === t ? "height" : "width";
        }
        function i$3(i, o, a) {
          let {
            reference: l,
            floating: s
          } = i;
          const c = l.x + l.width / 2 - s.width / 2,
            f = l.y + l.height / 2 - s.height / 2,
            u = n$2(o),
            m = r$2(u),
            g = l[m] / 2 - s[m] / 2,
            d = "x" === u;
          let p;
          switch (t$1(o)) {
            case "top":
              p = {
                x: c,
                y: l.y - s.height
              };
              break;
            case "bottom":
              p = {
                x: c,
                y: l.y + l.height
              };
              break;
            case "right":
              p = {
                x: l.x + l.width,
                y: f
              };
              break;
            case "left":
              p = {
                x: l.x - s.width,
                y: f
              };
              break;
            default:
              p = {
                x: l.x,
                y: l.y
              };
          }
          switch (e$1(o)) {
            case "start":
              p[u] -= g * (a && d ? -1 : 1);
              break;
            case "end":
              p[u] += g * (a && d ? -1 : 1);
          }
          return p;
        }
        const o$2 = async (t, e, n) => {
          const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: a = [],
              platform: l
            } = n,
            s = await (null == l.isRTL ? void 0 : l.isRTL(e));
          let c = await l.getElementRects({
              reference: t,
              floating: e,
              strategy: o
            }),
            {
              x: f,
              y: u
            } = i$3(c, r, s),
            m = r,
            g = {},
            d = 0;
          for (let n = 0; n < a.length; n++) {
            const {
                name: p,
                fn: h
              } = a[n],
              {
                x: y,
                y: x,
                data: w,
                reset: v
              } = await h({
                x: f,
                y: u,
                initialPlacement: r,
                placement: m,
                strategy: o,
                middlewareData: g,
                rects: c,
                platform: l,
                elements: {
                  reference: t,
                  floating: e
                }
              });
            f = null != y ? y : f, u = null != x ? x : u, g = _objectSpread3(_objectSpread3({}, g), {}, {
              [p]: _objectSpread3(_objectSpread3({}, g[p]), w)
            }), v && d <= 50 && (d++, "object" == typeof v && (v.placement && (m = v.placement), v.rects && (c = true === v.rects ? await l.getElementRects({
              reference: t,
              floating: e,
              strategy: o
            }) : v.rects), {
              x: f,
              y: u
            } = i$3(c, m, s)), n = -1);
          }
          return {
            x: f,
            y: u,
            placement: m,
            strategy: o,
            middlewareData: g
          };
        };
        function a$2(t) {
          return "number" != typeof t ? function (t) {
            return _objectSpread3({
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }, t);
          }(t) : {
            top: t,
            right: t,
            bottom: t,
            left: t
          };
        }
        function l$2(t) {
          return _objectSpread3(_objectSpread3({}, t), {}, {
            top: t.y,
            left: t.x,
            right: t.x + t.width,
            bottom: t.y + t.height
          });
        }
        async function s$3(t, e) {
          var n;
          void 0 === e && (e = {});
          const {
              x: r,
              y: i,
              platform: o,
              rects: s,
              elements: c,
              strategy: f
            } = t,
            {
              boundary: u = "clippingAncestors",
              rootBoundary: m = "viewport",
              elementContext: g = "floating",
              altBoundary: d = false,
              padding: p = 0
            } = e,
            h = a$2(p),
            y = c[d ? "floating" === g ? "reference" : "floating" : g],
            x = l$2(await o.getClippingRect({
              element: null == (n = await (null == o.isElement ? void 0 : o.isElement(y))) || n ? y : y.contextElement || (await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(c.floating))),
              boundary: u,
              rootBoundary: m,
              strategy: f
            })),
            w = l$2(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
              rect: "floating" === g ? _objectSpread3(_objectSpread3({}, s.floating), {}, {
                x: r,
                y: i
              }) : s.reference,
              offsetParent: await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(c.floating)),
              strategy: f
            }) : s[g]);
          return {
            top: x.top - w.top + h.top,
            bottom: w.bottom - x.bottom + h.bottom,
            left: x.left - w.left + h.left,
            right: w.right - x.right + h.right
          };
        }
        const c$3 = Math.min,
          f$3 = Math.max;
        function u$3(t, e, n) {
          return f$3(t, c$3(e, n));
        }
        const m$3 = t => ({
            name: "arrow",
            options: t,
            async fn(i) {
              const {
                  element: o,
                  padding: l = 0
                } = null != t ? t : {},
                {
                  x: s,
                  y: c,
                  placement: f,
                  rects: m,
                  platform: g
                } = i;
              if (null == o) return {};
              const d = a$2(l),
                p = {
                  x: s,
                  y: c
                },
                h = n$2(f),
                y = e$1(f),
                x = r$2(h),
                w = await g.getDimensions(o),
                v = "y" === h ? "top" : "left",
                b = "y" === h ? "bottom" : "right",
                R = m.reference[x] + m.reference[h] - p[h] - m.floating[x],
                A = p[h] - m.reference[h],
                P = await (null == g.getOffsetParent ? void 0 : g.getOffsetParent(o));
              let T = P ? "y" === h ? P.clientHeight || 0 : P.clientWidth || 0 : 0;
              0 === T && (T = m.floating[x]);
              const O = R / 2 - A / 2,
                D = d[v],
                L = T - w[x] - d[b],
                k = T / 2 - w[x] / 2 + O,
                E = u$3(D, k, L),
                C = ("start" === y ? d[v] : d[b]) > 0 && k !== E && m.reference[x] <= m.floating[x];
              return {
                [h]: p[h] - (C ? k < D ? D - k : L - k : 0),
                data: {
                  [h]: E,
                  centerOffset: k - E
                }
              };
            }
          }),
          g$3 = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
          };
        function d$3(t) {
          return t.replace(/left|right|bottom|top/g, t => g$3[t]);
        }
        function p$3(t, i, o) {
          void 0 === o && (o = false);
          const a = e$1(t),
            l = n$2(t),
            s = r$2(l);
          let c = "x" === l ? a === (o ? "end" : "start") ? "right" : "left" : "start" === a ? "bottom" : "top";
          return i.reference[s] > i.floating[s] && (c = d$3(c)), {
            main: c,
            cross: d$3(c)
          };
        }
        const h$4 = {
          start: "end",
          end: "start"
        };
        function y$4(t) {
          return t.replace(/start|end/g, t => h$4[t]);
        }
        const x$3 = ["top", "right", "bottom", "left"];
        x$3.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
        const b$4 = function (e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(n) {
              var r;
              const {
                  placement: i,
                  middlewareData: o,
                  rects: a,
                  initialPlacement: l,
                  platform: c,
                  elements: f
                } = n,
                {
                  mainAxis: u = true,
                  crossAxis: m = true,
                  fallbackPlacements: g,
                  fallbackStrategy: h = "bestFit",
                  flipAlignment: x = true
                } = e,
                w = _objectWithoutProperties2(e, _excluded12),
                v = t$1(i),
                b = g || (v === l || !x ? [d$3(l)] : function (t) {
                  const e = d$3(t);
                  return [y$4(t), e, y$4(e)];
                }(l)),
                R = [l, ...b],
                A = await s$3(n, w),
                P = [];
              let T = (null == (r = o.flip) ? void 0 : r.overflows) || [];
              if (u && P.push(A[v]), m) {
                const {
                  main: t,
                  cross: e
                } = p$3(i, a, await (null == c.isRTL ? void 0 : c.isRTL(f.floating)));
                P.push(A[t], A[e]);
              }
              if (T = [...T, {
                placement: i,
                overflows: P
              }], !P.every(t => t <= 0)) {
                var O, D;
                const t = (null != (O = null == (D = o.flip) ? void 0 : D.index) ? O : 0) + 1,
                  e = R[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: T
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = "bottom";
                switch (h) {
                  case "bestFit":
                    {
                      var L;
                      const t = null == (L = T.map(t => [t, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : L[0].placement;
                      t && (n = t);
                      break;
                    }
                  case "initialPlacement":
                    n = l;
                }
                if (i !== n) return {
                  reset: {
                    placement: n
                  }
                };
              }
              return {};
            }
          };
        };
        function R$2(t, e) {
          return {
            top: t.top - e.height,
            right: t.right - e.width,
            bottom: t.bottom - e.height,
            left: t.left - e.width
          };
        }
        function A$1(t) {
          return x$3.some(e => t[e] >= 0);
        }
        const P = function (t) {
          let _ref5 = void 0 === t ? {} : t,
            {
              strategy: e = "referenceHidden"
            } = _ref5,
            n = _objectWithoutProperties2(_ref5, _excluded13);
          return {
            name: "hide",
            async fn(t) {
              const {
                rects: r
              } = t;
              switch (e) {
                case "referenceHidden":
                  {
                    const e = R$2(await s$3(t, _objectSpread3(_objectSpread3({}, n), {}, {
                      elementContext: "reference"
                    })), r.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: A$1(e)
                      }
                    };
                  }
                case "escaped":
                  {
                    const e = R$2(await s$3(t, _objectSpread3(_objectSpread3({}, n), {}, {
                      altBoundary: true
                    })), r.floating);
                    return {
                      data: {
                        escapedOffsets: e,
                        escaped: A$1(e)
                      }
                    };
                  }
                default:
                  return {};
              }
            }
          };
        };
        const T$3 = function (r) {
          return void 0 === r && (r = 0), {
            name: "offset",
            options: r,
            async fn(i) {
              const {
                  x: o,
                  y: a
                } = i,
                l = await async function (r, i) {
                  const {
                      placement: o,
                      platform: a,
                      elements: l
                    } = r,
                    s = await (null == a.isRTL ? void 0 : a.isRTL(l.floating)),
                    c = t$1(o),
                    f = e$1(o),
                    u = "x" === n$2(o),
                    m = ["left", "top"].includes(c) ? -1 : 1,
                    g = s && u ? -1 : 1,
                    d = "function" == typeof i ? i(r) : i;
                  let {
                    mainAxis: p,
                    crossAxis: h,
                    alignmentAxis: y
                  } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                  } : _objectSpread3({
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null
                  }, d);
                  return f && "number" == typeof y && (h = "end" === f ? -1 * y : y), u ? {
                    x: h * g,
                    y: p * m
                  } : {
                    x: p * m,
                    y: h * g
                  };
                }(i, r);
              return {
                x: o + l.x,
                y: a + l.y,
                data: l
              };
            }
          };
        };
        function O$1(t) {
          return "x" === t ? "y" : "x";
        }
        const D$2 = function (e) {
            return void 0 === e && (e = {}), {
              name: "shift",
              options: e,
              async fn(r) {
                const {
                    x: i,
                    y: o,
                    placement: a
                  } = r,
                  {
                    mainAxis: l = true,
                    crossAxis: c = false,
                    limiter: f = {
                      fn: t => {
                        let {
                          x: e,
                          y: n
                        } = t;
                        return {
                          x: e,
                          y: n
                        };
                      }
                    }
                  } = e,
                  m = _objectWithoutProperties2(e, _excluded14),
                  g = {
                    x: i,
                    y: o
                  },
                  d = await s$3(r, m),
                  p = n$2(t$1(a)),
                  h = O$1(p);
                let y = g[p],
                  x = g[h];
                if (l) {
                  const t = "y" === p ? "bottom" : "right";
                  y = u$3(y + d["y" === p ? "top" : "left"], y, y - d[t]);
                }
                if (c) {
                  const t = "y" === h ? "bottom" : "right";
                  x = u$3(x + d["y" === h ? "top" : "left"], x, x - d[t]);
                }
                const w = f.fn(_objectSpread3(_objectSpread3({}, r), {}, {
                  [p]: y,
                  [h]: x
                }));
                return _objectSpread3(_objectSpread3({}, w), {}, {
                  data: {
                    x: w.x - i,
                    y: w.y - o
                  }
                });
              }
            };
          },
          L$3 = function (e) {
            return void 0 === e && (e = {}), {
              options: e,
              fn(r) {
                const {
                    x: i,
                    y: o,
                    placement: a,
                    rects: l,
                    middlewareData: s
                  } = r,
                  {
                    offset: c = 0,
                    mainAxis: f = true,
                    crossAxis: u = true
                  } = e,
                  m = {
                    x: i,
                    y: o
                  },
                  g = n$2(a),
                  d = O$1(g);
                let p = m[g],
                  h = m[d];
                const y = "function" == typeof c ? c(_objectSpread3(_objectSpread3({}, l), {}, {
                    placement: a
                  })) : c,
                  x = "number" == typeof y ? {
                    mainAxis: y,
                    crossAxis: 0
                  } : _objectSpread3({
                    mainAxis: 0,
                    crossAxis: 0
                  }, y);
                if (f) {
                  const t = "y" === g ? "height" : "width",
                    e = l.reference[g] - l.floating[t] + x.mainAxis,
                    n = l.reference[g] + l.reference[t] - x.mainAxis;
                  p < e ? p = e : p > n && (p = n);
                }
                if (u) {
                  var w, v, b, R;
                  const e = "y" === g ? "width" : "height",
                    n = ["top", "left"].includes(t$1(a)),
                    r = l.reference[d] - l.floating[e] + (n && null != (w = null == (v = s.offset) ? void 0 : v[d]) ? w : 0) + (n ? 0 : x.crossAxis),
                    i = l.reference[d] + l.reference[e] + (n ? 0 : null != (b = null == (R = s.offset) ? void 0 : R[d]) ? b : 0) - (n ? x.crossAxis : 0);
                  h < r ? h = r : h > i && (h = i);
                }
                return {
                  [g]: p,
                  [d]: h
                };
              }
            };
          },
          k$3 = function (n) {
            return void 0 === n && (n = {}), {
              name: "size",
              options: n,
              async fn(r) {
                const {
                    placement: i,
                    rects: o,
                    platform: a,
                    elements: l
                  } = r,
                  {
                    apply: c
                  } = n,
                  u = _objectWithoutProperties2(n, _excluded15),
                  m = await s$3(r, u),
                  g = t$1(i),
                  d = e$1(i);
                let p, h;
                "top" === g || "bottom" === g ? (p = g, h = d === ((await (null == a.isRTL ? void 0 : a.isRTL(l.floating))) ? "start" : "end") ? "left" : "right") : (h = g, p = "end" === d ? "top" : "bottom");
                const y = f$3(m.left, 0),
                  x = f$3(m.right, 0),
                  w = f$3(m.top, 0),
                  v = f$3(m.bottom, 0),
                  b = {
                    availableHeight: o.floating.height - (["left", "right"].includes(i) ? 2 * (0 !== w || 0 !== v ? w + v : f$3(m.top, m.bottom)) : m[p]),
                    availableWidth: o.floating.width - (["top", "bottom"].includes(i) ? 2 * (0 !== y || 0 !== x ? y + x : f$3(m.left, m.right)) : m[h])
                  },
                  R = await a.getDimensions(l.floating);
                null == c || c(_objectSpread3(_objectSpread3({}, r), b));
                const A = await a.getDimensions(l.floating);
                return R.width !== A.width || R.height !== A.height ? {
                  reset: {
                    rects: true
                  }
                } : {};
              }
            };
          };
        function n$1(t) {
          return t && t.document && t.location && t.alert && t.setInterval;
        }
        function o$1(t) {
          if (null == t) return window;
          if (!n$1(t)) {
            const e = t.ownerDocument;
            return e && e.defaultView || window;
          }
          return t;
        }
        function i$2(t) {
          return o$1(t).getComputedStyle(t);
        }
        function r$1(t) {
          return n$1(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
        }
        function l$1() {
          const t = navigator.userAgentData;
          return null != t && t.brands ? t.brands.map(t => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
        }
        function c$2(t) {
          return t instanceof o$1(t).HTMLElement;
        }
        function f$2(t) {
          return t instanceof o$1(t).Element;
        }
        function s$2(t) {
          if ("undefined" == typeof ShadowRoot) return false;
          return t instanceof o$1(t).ShadowRoot || t instanceof ShadowRoot;
        }
        function u$2(t) {
          const {
            overflow: e,
            overflowX: n,
            overflowY: o
          } = i$2(t);
          return /auto|scroll|overlay|hidden/.test(e + o + n);
        }
        function d$2(t) {
          return ["table", "td", "th"].includes(r$1(t));
        }
        function h$3(t) {
          const e = /firefox/i.test(l$1()),
            n = i$2(t);
          return "none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || ["transform", "perspective"].includes(n.willChange) || e && "filter" === n.willChange || e && !!n.filter && "none" !== n.filter;
        }
        function a$1() {
          return !/^((?!chrome|android).)*safari/i.test(l$1());
        }
        const g$2 = Math.min,
          p$2 = Math.max,
          m$2 = Math.round;
        function w$2(t, e, n) {
          var i, r, l, s;
          void 0 === e && (e = false), void 0 === n && (n = false);
          const u = t.getBoundingClientRect();
          let d = 1,
            h = 1;
          e && c$2(t) && (d = t.offsetWidth > 0 && m$2(u.width) / t.offsetWidth || 1, h = t.offsetHeight > 0 && m$2(u.height) / t.offsetHeight || 1);
          const g = f$2(t) ? o$1(t) : window,
            p = !a$1() && n,
            w = (u.left + (p && null != (i = null == (r = g.visualViewport) ? void 0 : r.offsetLeft) ? i : 0)) / d,
            v = (u.top + (p && null != (l = null == (s = g.visualViewport) ? void 0 : s.offsetTop) ? l : 0)) / h,
            y = u.width / d,
            x = u.height / h;
          return {
            width: y,
            height: x,
            top: v,
            right: w + y,
            bottom: v + x,
            left: w,
            x: w,
            y: v
          };
        }
        function v$2(t) {
          return (e = t, (e instanceof o$1(e).Node ? t.ownerDocument : t.document) || window.document).documentElement;
          var e;
        }
        function y$3(t) {
          return f$2(t) ? {
            scrollLeft: t.scrollLeft,
            scrollTop: t.scrollTop
          } : {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
          };
        }
        function x$2(t) {
          return w$2(v$2(t)).left + y$3(t).scrollLeft;
        }
        function b$3(t, e, n) {
          const o = c$2(e),
            i = v$2(e),
            l = w$2(t, o && function (t) {
              const e = w$2(t);
              return m$2(e.width) !== t.offsetWidth || m$2(e.height) !== t.offsetHeight;
            }(e), "fixed" === n);
          let f = {
            scrollLeft: 0,
            scrollTop: 0
          };
          const s = {
            x: 0,
            y: 0
          };
          if (o || !o && "fixed" !== n) if (("body" !== r$1(e) || u$2(i)) && (f = y$3(e)), c$2(e)) {
            const t = w$2(e, true);
            s.x = t.x + e.clientLeft, s.y = t.y + e.clientTop;
          } else i && (s.x = x$2(i));
          return {
            x: l.left + f.scrollLeft - s.x,
            y: l.top + f.scrollTop - s.y,
            width: l.width,
            height: l.height
          };
        }
        function L$2(t) {
          return "html" === r$1(t) ? t : t.assignedSlot || t.parentNode || (s$2(t) ? t.host : null) || v$2(t);
        }
        function R$1(t) {
          return c$2(t) && "fixed" !== getComputedStyle(t).position ? t.offsetParent : null;
        }
        function T$2(t) {
          const e = o$1(t);
          let n = R$1(t);
          for (; n && d$2(n) && "static" === getComputedStyle(n).position;) n = R$1(n);
          return n && ("html" === r$1(n) || "body" === r$1(n) && "static" === getComputedStyle(n).position && !h$3(n)) ? e : n || function (t) {
            let e = L$2(t);
            for (s$2(e) && (e = e.host); c$2(e) && !["html", "body"].includes(r$1(e));) {
              if (h$3(e)) return e;
              e = e.parentNode;
            }
            return null;
          }(t) || e;
        }
        function W(t) {
          if (c$2(t)) return {
            width: t.offsetWidth,
            height: t.offsetHeight
          };
          const e = w$2(t);
          return {
            width: e.width,
            height: e.height
          };
        }
        function E$1(t) {
          const e = L$2(t);
          return ["html", "body", "#document"].includes(r$1(e)) ? t.ownerDocument.body : c$2(e) && u$2(e) ? e : E$1(e);
        }
        function H$2(t, e) {
          var n;
          void 0 === e && (e = []);
          const i = E$1(t),
            r = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
            l = o$1(i),
            c = r ? [l].concat(l.visualViewport || [], u$2(i) ? i : []) : i,
            f = e.concat(c);
          return r ? f : f.concat(H$2(c));
        }
        function C$1(e, n, r) {
          return "viewport" === n ? l$2(function (t, e) {
            const n = o$1(t),
              i = v$2(t),
              r = n.visualViewport;
            let l = i.clientWidth,
              c = i.clientHeight,
              f = 0,
              s = 0;
            if (r) {
              l = r.width, c = r.height;
              const t = a$1();
              (t || !t && "fixed" === e) && (f = r.offsetLeft, s = r.offsetTop);
            }
            return {
              width: l,
              height: c,
              x: f,
              y: s
            };
          }(e, r)) : f$2(n) ? function (t, e) {
            const n = w$2(t, false, "fixed" === e),
              o = n.top + t.clientTop,
              i = n.left + t.clientLeft;
            return {
              top: o,
              left: i,
              x: i,
              y: o,
              right: i + t.clientWidth,
              bottom: o + t.clientHeight,
              width: t.clientWidth,
              height: t.clientHeight
            };
          }(n, r) : l$2(function (t) {
            var e;
            const n = v$2(t),
              o = y$3(t),
              r = null == (e = t.ownerDocument) ? void 0 : e.body,
              l = p$2(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
              c = p$2(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0);
            let f = -o.scrollLeft + x$2(t);
            const s = -o.scrollTop;
            return "rtl" === i$2(r || n).direction && (f += p$2(n.clientWidth, r ? r.clientWidth : 0) - l), {
              width: l,
              height: c,
              x: f,
              y: s
            };
          }(v$2(e)));
        }
        function S$3(t) {
          const e = H$2(t),
            n = ["absolute", "fixed"].includes(i$2(t).position) && c$2(t) ? T$2(t) : t;
          return f$2(n) ? e.filter(t => f$2(t) && function (t, e) {
            const n = null == e.getRootNode ? void 0 : e.getRootNode();
            if (t.contains(e)) return true;
            if (n && s$2(n)) {
              let n = e;
              do {
                if (n && t === n) return true;
                n = n.parentNode || n.host;
              } while (n);
            }
            return false;
          }(t, n) && "body" !== r$1(t)) : [];
        }
        const D$1 = {
          getClippingRect: function (t) {
            let {
              element: e,
              boundary: n,
              rootBoundary: o,
              strategy: i
            } = t;
            const r = [...("clippingAncestors" === n ? S$3(e) : [].concat(n)), o],
              l = r[0],
              c = r.reduce((t, n) => {
                const o = C$1(e, n, i);
                return t.top = p$2(o.top, t.top), t.right = g$2(o.right, t.right), t.bottom = g$2(o.bottom, t.bottom), t.left = p$2(o.left, t.left), t;
              }, C$1(e, l, i));
            return {
              width: c.right - c.left,
              height: c.bottom - c.top,
              x: c.left,
              y: c.top
            };
          },
          convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
            let {
              rect: e,
              offsetParent: n,
              strategy: o
            } = t;
            const i = c$2(n),
              l = v$2(n);
            if (n === l) return e;
            let f = {
              scrollLeft: 0,
              scrollTop: 0
            };
            const s = {
              x: 0,
              y: 0
            };
            if ((i || !i && "fixed" !== o) && (("body" !== r$1(n) || u$2(l)) && (f = y$3(n)), c$2(n))) {
              const t = w$2(n, true);
              s.x = t.x + n.clientLeft, s.y = t.y + n.clientTop;
            }
            return _objectSpread3(_objectSpread3({}, e), {}, {
              x: e.x - f.scrollLeft + s.x,
              y: e.y - f.scrollTop + s.y
            });
          },
          isElement: f$2,
          getDimensions: W,
          getOffsetParent: T$2,
          getDocumentElement: v$2,
          getElementRects: t => {
            let {
              reference: e,
              floating: n,
              strategy: o
            } = t;
            return {
              reference: b$3(e, T$2(n), o),
              floating: _objectSpread3(_objectSpread3({}, W(n)), {}, {
                x: 0,
                y: 0
              })
            };
          },
          getClientRects: t => Array.from(t.getClientRects()),
          isRTL: t => "rtl" === i$2(t).direction
        };
        function N$2(t, e, n, o) {
          void 0 === o && (o = {});
          const {
              ancestorScroll: i = true,
              ancestorResize: r = true,
              elementResize: l = true,
              animationFrame: c = false
            } = o,
            s = i && !c,
            u = r && !c,
            d = s || u ? [...(f$2(t) ? H$2(t) : []), ...H$2(e)] : [];
          d.forEach(t => {
            s && t.addEventListener("scroll", n, {
              passive: true
            }), u && t.addEventListener("resize", n);
          });
          let h,
            a = null;
          if (l) {
            let o = true;
            a = new ResizeObserver(() => {
              o || n(), o = false;
            }), f$2(t) && !c && a.observe(t), a.observe(e);
          }
          let g = c ? w$2(t) : null;
          return c && function e() {
            const o = w$2(t);
            !g || o.x === g.x && o.y === g.y && o.width === g.width && o.height === g.height || n();
            g = o, h = requestAnimationFrame(e);
          }(), n(), () => {
            var t;
            d.forEach(t => {
              s && t.removeEventListener("scroll", n), u && t.removeEventListener("resize", n);
            }), null == (t = a) || t.disconnect(), a = null, c && cancelAnimationFrame(h);
          };
        }
        const z$1 = (t, n, o) => o$2(t, n, _objectSpread3({
          platform: D$1
        }, o));
        var index = typeof document !== 'undefined' ? reactExports.useLayoutEffect : reactExports.useEffect;

        // Fork of `fast-deep-equal` that only does the comparisons we need and compares
        // functions
        function deepEqual(a, b) {
          if (a === b) {
            return true;
          }
          if (typeof a !== typeof b) {
            return false;
          }
          if (typeof a === 'function' && a.toString() === b.toString()) {
            return true;
          }
          let length, i, keys;
          if (a && b && typeof a == 'object') {
            if (Array.isArray(a)) {
              length = a.length;
              if (length != b.length) return false;
              for (i = length; i-- !== 0;) {
                if (!deepEqual(a[i], b[i])) {
                  return false;
                }
              }
              return true;
            }
            keys = Object.keys(a);
            length = keys.length;
            if (length !== Object.keys(b).length) {
              return false;
            }
            for (i = length; i-- !== 0;) {
              if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
                return false;
              }
            }
            for (i = length; i-- !== 0;) {
              const key = keys[i];
              if (key === '_owner' && a.$$typeof) {
                continue;
              }
              if (!deepEqual(a[key], b[key])) {
                return false;
              }
            }
            return true;
          }
          return a !== a && b !== b;
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
            placement = 'bottom',
            strategy = 'absolute',
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
          if (!deepEqual(latestMiddleware == null ? void 0 : latestMiddleware.map(_ref => {
            let {
              options
            } = _ref;
            return options;
          }), middleware == null ? void 0 : middleware.map(_ref2 => {
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
            }).then(data => {
              if (isMountedRef.current) {
                reactDomExports.flushSync(() => {
                  setData(data);
                });
              }
            });
          }, [latestMiddleware, placement, strategy]);
          index(() => {
            // Skip first update
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
            if (typeof cleanupRef.current === 'function') {
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
          const setReference = reactExports.useCallback(node => {
            reference.current = node;
            runElementMountCallback();
          }, [runElementMountCallback]);
          const setFloating = reactExports.useCallback(node => {
            floating.current = node;
            runElementMountCallback();
          }, [runElementMountCallback]);
          const refs = reactExports.useMemo(() => ({
            reference,
            floating
          }), []);
          return reactExports.useMemo(() => _objectSpread3(_objectSpread3({}, data), {}, {
            update,
            refs,
            reference: setReference,
            floating: setFloating
          }), [data, update, refs, setReference, setFloating]);
        }

        /**
         * Positions an inner element of the floating element such that it is centered
         * to the reference element.
         * This wraps the core `arrow` middleware to allow React refs as the element.
         * @see https://floating-ui.com/docs/arrow
         */

        const arrow$2 = options => {
          const {
            element,
            padding
          } = options;
          function isRef(value) {
            return Object.prototype.hasOwnProperty.call(value, 'current');
          }
          return {
            name: 'arrow',
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
        const $7e8f5cd07187803e$export$21b07c8f274aebd5 = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          const {
              children: children,
              width = 10,
              height = 5
            } = props,
            arrowProps = _objectWithoutProperties2(props, _excluded16);
          return /*#__PURE__*/reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.svg, _extends$1({}, arrowProps, {
            ref: forwardedRef,
            width: width,
            height: height,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none"
          }), props.asChild ? children : /*#__PURE__*/reactExports.createElement("polygon", {
            points: "0,0 30,0 15,10"
          }));
        });
        /* -----------------------------------------------------------------------------------------------*/
        const $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;
        function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
          const [size, setSize] = reactExports.useState(undefined);
          $9f79659886946c16$export$e5c5a5f917a5871c(() => {
            if (element) {
              // provide size as early as possible
              setSize({
                width: element.offsetWidth,
                height: element.offsetHeight
              });
              const resizeObserver = new ResizeObserver(entries => {
                if (!Array.isArray(entries)) return;
                // Since we only observe the one element, we don't need to loop over the
                // array
                if (!entries.length) return;
                const entry = entries[0];
                let width;
                let height;
                if ('borderBoxSize' in entry) {
                  const borderSizeEntry = entry['borderBoxSize']; // iron out differences between browsers
                  const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                  width = borderSize['inlineSize'];
                  height = borderSize['blockSize'];
                } else {
                  // for browsers that don't support `borderBoxSize`
                  // we calculate it ourselves to get the correct border box.
                  width = element.offsetWidth;
                  height = element.offsetHeight;
                }
                setSize({
                  width: width,
                  height: height
                });
              });
              resizeObserver.observe(element, {
                box: 'border-box'
              });
              return () => resizeObserver.unobserve(element);
            } else
              // We only want to reset to `undefined` when the element becomes `null`,
              // not if it changes to another element.
              setSize(undefined);
          }, [element]);
          return size;
        }

        /* -------------------------------------------------------------------------------------------------
         * Popper
         * -----------------------------------------------------------------------------------------------*/
        const $cf1ac5d9fe0e8206$var$POPPER_NAME = 'Popper';
        const [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
        const [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
        const $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = props => {
          const {
            __scopePopper: __scopePopper,
            children: children
          } = props;
          const [anchor, setAnchor] = reactExports.useState(null);
          return /*#__PURE__*/reactExports.createElement($cf1ac5d9fe0e8206$var$PopperProvider, {
            scope: __scopePopper,
            anchor: anchor,
            onAnchorChange: setAnchor
          }, children);
        };
        /* -------------------------------------------------------------------------------------------------
         * PopperAnchor
         * -----------------------------------------------------------------------------------------------*/
        const $cf1ac5d9fe0e8206$var$ANCHOR_NAME = 'PopperAnchor';
        const $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          const {
              __scopePopper: __scopePopper,
              virtualRef: virtualRef
            } = props,
            anchorProps = _objectWithoutProperties2(props, _excluded17);
          const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
          const ref = reactExports.useRef(null);
          const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
          reactExports.useEffect(() => {
            // Consumer can anchor the popper to something that isn't
            // a DOM node e.g. pointer position, so we override the
            // `anchorRef` with their virtual ref in this case.
            context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
          });
          return virtualRef ? null : /*#__PURE__*/reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({}, anchorProps, {
            ref: composedRefs
          }));
        });
        /* -------------------------------------------------------------------------------------------------
         * PopperContent
         * -----------------------------------------------------------------------------------------------*/
        const $cf1ac5d9fe0e8206$var$CONTENT_NAME = 'PopperContent';
        const [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
        const [$cf1ac5d9fe0e8206$var$PositionContextProvider, $cf1ac5d9fe0e8206$var$usePositionContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, {
          hasParent: false,
          positionUpdateFns: new Set()
        });
        const $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$hide, _middlewareData$trans, _middlewareData$trans2;
          const {
              __scopePopper: __scopePopper,
              side = 'bottom',
              sideOffset = 0,
              align = 'center',
              alignOffset = 0,
              arrowPadding = 0,
              collisionBoundary = [],
              collisionPadding: collisionPaddingProp = 0,
              sticky = 'partial',
              hideWhenDetached = false,
              avoidCollisions = true,
              onPlaced: onPlaced
            } = props,
            contentProps = _objectWithoutProperties2(props, _excluded18);
          const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
          const [content, setContent] = reactExports.useState(null);
          const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, node => setContent(node));
          const [arrow, setArrow] = reactExports.useState(null);
          const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow);
          const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
          const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
          const desiredPlacement = side + (align !== 'center' ? '-' + align : '');
          const collisionPadding = typeof collisionPaddingProp === 'number' ? collisionPaddingProp : _objectSpread3({
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }, collisionPaddingProp);
          const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
          const hasExplicitBoundaries = boundary.length > 0;
          const detectOverflowOptions = {
            padding: collisionPadding,
            boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
            // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
            altBoundary: hasExplicitBoundaries
          };
          const {
            reference: reference,
            floating: floating,
            strategy: strategy,
            x: x,
            y: y,
            placement: placement,
            middlewareData: middlewareData,
            update: update
          } = useFloating({
            // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
            strategy: 'fixed',
            placement: desiredPlacement,
            whileElementsMounted: N$2,
            middleware: [$cf1ac5d9fe0e8206$var$anchorCssProperties(), T$3({
              mainAxis: sideOffset + arrowHeight,
              alignmentAxis: alignOffset
            }), avoidCollisions ? D$2(_objectSpread3({
              mainAxis: true,
              crossAxis: false,
              limiter: sticky === 'partial' ? L$3() : undefined
            }, detectOverflowOptions)) : undefined, arrow ? arrow$2({
              element: arrow,
              padding: arrowPadding
            }) : undefined, avoidCollisions ? b$4(_objectSpread3({}, detectOverflowOptions)) : undefined, k$3(_objectSpread3(_objectSpread3({}, detectOverflowOptions), {}, {
              apply: ({
                elements: elements,
                availableWidth: width,
                availableHeight: height
              }) => {
                elements.floating.style.setProperty('--radix-popper-available-width', `${width}px`);
                elements.floating.style.setProperty('--radix-popper-available-height', `${height}px`);
              }
            })), $cf1ac5d9fe0e8206$var$transformOrigin({
              arrowWidth: arrowWidth,
              arrowHeight: arrowHeight
            }), hideWhenDetached ? P({
              strategy: 'referenceHidden'
            }) : undefined].filter($cf1ac5d9fe0e8206$var$isDefined)
          }); // assign the reference dynamically once `Content` has mounted so we can collocate the logic
          $9f79659886946c16$export$e5c5a5f917a5871c(() => {
            reference(context.anchor);
          }, [reference, context.anchor]);
          const isPlaced = x !== null && y !== null;
          const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
          const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
          $9f79659886946c16$export$e5c5a5f917a5871c(() => {
            if (isPlaced) handlePlaced === null || handlePlaced === void 0 || handlePlaced();
          }, [isPlaced, handlePlaced]);
          const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
          const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
          const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
          const [contentZIndex, setContentZIndex] = reactExports.useState();
          $9f79659886946c16$export$e5c5a5f917a5871c(() => {
            if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
          }, [content]);
          const {
            hasParent: hasParent,
            positionUpdateFns: positionUpdateFns
          } = $cf1ac5d9fe0e8206$var$usePositionContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
          const isRoot = !hasParent;
          reactExports.useLayoutEffect(() => {
            if (!isRoot) {
              positionUpdateFns.add(update);
              return () => {
                positionUpdateFns.delete(update);
              };
            }
          }, [isRoot, positionUpdateFns, update]); // when nested contents are rendered in portals, they are appended out of order causing
          // children to be positioned incorrectly if initially open.
          // we need to re-compute the positioning once the parent has finally been placed.
          // https://github.com/floating-ui/floating-ui/issues/1531
          $9f79659886946c16$export$e5c5a5f917a5871c(() => {
            if (isRoot && isPlaced) Array.from(positionUpdateFns).reverse().forEach(fn => requestAnimationFrame(fn));
          }, [isRoot, isPlaced, positionUpdateFns]);
          const commonProps = _objectSpread3(_objectSpread3({
            'data-side': placedSide,
            'data-align': placedAlign
          }, contentProps), {}, {
            ref: composedRefs,
            style: _objectSpread3(_objectSpread3({}, contentProps.style), {}, {
              // if the PopperContent hasn't been placed yet (not all measurements done)
              // we prevent animations so that users's animation don't kick in too early referring wrong sides
              animation: !isPlaced ? 'none' : undefined,
              // hide the content if using the hide middleware and should be hidden
              opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : undefined
            })
          });
          return /*#__PURE__*/reactExports.createElement("div", {
            ref: floating,
            "data-radix-popper-content-wrapper": "",
            style: {
              position: strategy,
              left: 0,
              top: 0,
              transform: isPlaced ? `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)` : 'translate3d(0, -200%, 0)',
              // keep off the page when measuring
              minWidth: 'max-content',
              zIndex: contentZIndex,
              ['--radix-popper-transform-origin']: [(_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x, (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y].join(' ')
            } // Floating UI interally calculates logical alignment based the `dir` attribute on
            ,

            dir: props.dir
          }, /*#__PURE__*/reactExports.createElement($cf1ac5d9fe0e8206$var$PopperContentProvider, {
            scope: __scopePopper,
            placedSide: placedSide,
            onArrowChange: setArrow,
            arrowX: arrowX,
            arrowY: arrowY,
            shouldHideArrow: cannotCenterArrow
          }, isRoot ? /*#__PURE__*/reactExports.createElement($cf1ac5d9fe0e8206$var$PositionContextProvider, {
            scope: __scopePopper,
            hasParent: true,
            positionUpdateFns: positionUpdateFns
          }, /*#__PURE__*/reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, commonProps)) : /*#__PURE__*/reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, commonProps)));
        });
        /* -------------------------------------------------------------------------------------------------
         * PopperArrow
         * -----------------------------------------------------------------------------------------------*/
        const $cf1ac5d9fe0e8206$var$ARROW_NAME = 'PopperArrow';
        const $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right'
        };
        const $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = /*#__PURE__*/reactExports.forwardRef(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0(props, forwardedRef) {
          const {
              __scopePopper: __scopePopper
            } = props,
            arrowProps = _objectWithoutProperties2(props, _excluded19);
          const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
          const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
          return (/*#__PURE__*/ // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
            // doesn't report size as we'd expect on SVG elements.
            // it reports their bounding box which is effectively the largest path inside the SVG.
            reactExports.createElement("span", {
              ref: contentContext.onArrowChange,
              style: {
                position: 'absolute',
                left: contentContext.arrowX,
                top: contentContext.arrowY,
                [baseSide]: 0,
                transformOrigin: {
                  top: '',
                  right: '0 0',
                  bottom: 'center 0',
                  left: '100% 0'
                }[contentContext.placedSide],
                transform: {
                  top: 'translateY(100%)',
                  right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                  bottom: `rotate(180deg)`,
                  left: 'translateY(50%) rotate(-90deg) translateX(50%)'
                }[contentContext.placedSide],
                visibility: contentContext.shouldHideArrow ? 'hidden' : undefined
              }
            }, /*#__PURE__*/reactExports.createElement($7e8f5cd07187803e$export$be92b6f5f03c0fe9, _extends$1({}, arrowProps, {
              ref: forwardedRef,
              style: _objectSpread3(_objectSpread3({}, arrowProps.style), {}, {
                // ensures the element can be measured correctly (mostly for if SVG)
                display: 'block'
              })
            })))
          );
        });
        /*#__PURE__*/
        Object.assign($cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0, {
          displayName: $cf1ac5d9fe0e8206$var$ARROW_NAME
        });
        /* -----------------------------------------------------------------------------------------------*/
        function $cf1ac5d9fe0e8206$var$isDefined(value) {
          return value !== undefined;
        }
        function $cf1ac5d9fe0e8206$var$isNotNull(value) {
          return value !== null;
        }
        const $cf1ac5d9fe0e8206$var$anchorCssProperties = () => ({
          name: 'anchorCssProperties',
          fn(data) {
            const {
              rects: rects,
              elements: elements
            } = data;
            const {
              width: width,
              height: height
            } = rects.reference;
            elements.floating.style.setProperty('--radix-popper-anchor-width', `${width}px`);
            elements.floating.style.setProperty('--radix-popper-anchor-height', `${height}px`);
            return {};
          }
        });
        const $cf1ac5d9fe0e8206$var$transformOrigin = options => ({
          name: 'transformOrigin',
          options: options,
          fn(data) {
            var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
            const {
              placement: placement,
              rects: rects,
              middlewareData: middlewareData
            } = data;
            const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
              start: '0%',
              center: '50%',
              end: '100%'
            }[placedAlign];
            const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
            const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
            let x = '';
            let y = '';
            if (placedSide === 'bottom') {
              x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
              y = `${-arrowHeight}px`;
            } else if (placedSide === 'top') {
              x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
              y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === 'right') {
              x = `${-arrowHeight}px`;
              y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === 'left') {
              x = `${rects.floating.width + arrowHeight}px`;
              y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
              data: {
                x: x,
                y: y
              }
            };
          }
        });
        function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
          const [side, align = 'center'] = placement.split('-');
          return [side, align];
        }
        const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
        const $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
        const $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
        const $cf1ac5d9fe0e8206$export$21b07c8f274aebd5 = $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0;
        function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
          return reactExports.useReducer((state, event) => {
            const nextState = machine[state][event];
            return nextState !== null && nextState !== void 0 ? nextState : state;
          }, initialState);
        }
        const $921a889cee6df7e8$export$99c2b779aa4e8b8b = props => {
          const {
            present: present,
            children: children
          } = props;
          const presence = $921a889cee6df7e8$var$usePresence(present);
          const child = typeof children === 'function' ? children({
            present: presence.isPresent
          }) : reactExports.Children.only(children);
          const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
          const forceMount = typeof children === 'function';
          return forceMount || presence.isPresent ? /*#__PURE__*/reactExports.cloneElement(child, {
            ref: ref
          }) : null;
        };
        $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = 'Presence';
        /* -------------------------------------------------------------------------------------------------
         * usePresence
         * -----------------------------------------------------------------------------------------------*/
        function $921a889cee6df7e8$var$usePresence(present) {
          const [node1, setNode] = reactExports.useState();
          const stylesRef = reactExports.useRef({});
          const prevPresentRef = reactExports.useRef(present);
          const prevAnimationNameRef = reactExports.useRef('none');
          const initialState = present ? 'mounted' : 'unmounted';
          const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
            mounted: {
              UNMOUNT: 'unmounted',
              ANIMATION_OUT: 'unmountSuspended'
            },
            unmountSuspended: {
              MOUNT: 'mounted',
              ANIMATION_END: 'unmounted'
            },
            unmounted: {
              MOUNT: 'mounted'
            }
          });
          reactExports.useEffect(() => {
            const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
            prevAnimationNameRef.current = state === 'mounted' ? currentAnimationName : 'none';
          }, [state]);
          $9f79659886946c16$export$e5c5a5f917a5871c(() => {
            const styles = stylesRef.current;
            const wasPresent = prevPresentRef.current;
            const hasPresentChanged = wasPresent !== present;
            if (hasPresentChanged) {
              const prevAnimationName = prevAnimationNameRef.current;
              const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
              if (present) send('MOUNT');else if (currentAnimationName === 'none' || (styles === null || styles === void 0 ? void 0 : styles.display) === 'none')
                // If there is no exit animation or the element is hidden, animations won't run
                // so we unmount instantly
                send('UNMOUNT');else {
                /**
                * When `present` changes to `false`, we check changes to animation-name to
                * determine whether an animation has started. We chose this approach (reading
                * computed styles) because there is no `animationrun` event and `animationstart`
                * fires after `animation-delay` has expired which would be too late.
                */
                const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) send('ANIMATION_OUT');else send('UNMOUNT');
              }
              prevPresentRef.current = present;
            }
          }, [present, send]);
          $9f79659886946c16$export$e5c5a5f917a5871c(() => {
            if (node1) {
              /**
              * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
              * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
              * make sure we only trigger ANIMATION_END for the currently active animation.
              */
              const handleAnimationEnd = event => {
                const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node1 && isCurrentAnimation)
                  // With React 18 concurrency this update is applied
                  // a frame after the animation ends, creating a flash of visible content.
                  // By manually flushing we ensure they sync within a frame, removing the flash.
                  reactDomExports.flushSync(() => send('ANIMATION_END'));
              };
              const handleAnimationStart = event => {
                if (event.target === node1)
                  // if animation occurred, store its name as the previous animation.
                  prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
              };
              node1.addEventListener('animationstart', handleAnimationStart);
              node1.addEventListener('animationcancel', handleAnimationEnd);
              node1.addEventListener('animationend', handleAnimationEnd);
              return () => {
                node1.removeEventListener('animationstart', handleAnimationStart);
                node1.removeEventListener('animationcancel', handleAnimationEnd);
                node1.removeEventListener('animationend', handleAnimationEnd);
              };
            } else
              // Transition to the unmounted state if the node is removed prematurely.
              // We avoid doing so during cleanup as the node may change but still exist.
              send('ANIMATION_END');
          }, [node1, send]);
          return {
            isPresent: ['mounted', 'unmountSuspended'].includes(state),
            ref: reactExports.useCallback(node => {
              if (node) stylesRef.current = getComputedStyle(node);
              setNode(node);
            }, [])
          };
        }
        /* -----------------------------------------------------------------------------------------------*/
        function $921a889cee6df7e8$var$getAnimationName(styles) {
          return (styles === null || styles === void 0 ? void 0 : styles.animationName) || 'none';
        }
        function $71cd76cc60e0454e$export$6f32135080cb4c3({
          prop: prop,
          defaultProp: defaultProp,
          onChange = () => {}
        }) {
          const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
            defaultProp: defaultProp,
            onChange: onChange
          });
          const isControlled = prop !== undefined;
          const value1 = isControlled ? prop : uncontrolledProp;
          const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
          const setValue = reactExports.useCallback(nextValue => {
            if (isControlled) {
              const setter = nextValue;
              const value = typeof nextValue === 'function' ? setter(prop) : nextValue;
              if (value !== prop) handleChange(value);
            } else setUncontrolledProp(nextValue);
          }, [isControlled, prop, setUncontrolledProp, handleChange]);
          return [value1, setValue];
        }
        function $71cd76cc60e0454e$var$useUncontrolledState({
          defaultProp: defaultProp,
          onChange: onChange
        }) {
          const uncontrolledState = reactExports.useState(defaultProp);
          const [value] = uncontrolledState;
          const prevValueRef = reactExports.useRef(value);
          const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
          reactExports.useEffect(() => {
            if (prevValueRef.current !== value) {
              handleChange(value);
              prevValueRef.current = value;
            }
          }, [value, prevValueRef, handleChange]);
          return uncontrolledState;
        }
        const $ea1ef594cf570d83$export$439d29a4e110a164 = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          return /*#__PURE__*/reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$1({}, props, {
            ref: forwardedRef,
            style: _objectSpread3({
              // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
              position: 'absolute',
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              wordWrap: 'normal'
            }, props.style)
          }));
        });
        /* -----------------------------------------------------------------------------------------------*/
        const $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;
        const [$a093c7e1ec25a057$var$createTooltipContext] = $c512c27ab02ef895$export$50c7b4e9d9f19c1('Tooltip', [$cf1ac5d9fe0e8206$export$722aac194ae923]);
        const $a093c7e1ec25a057$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
        /* -------------------------------------------------------------------------------------------------
         * TooltipProvider
         * -----------------------------------------------------------------------------------------------*/
        const $a093c7e1ec25a057$var$PROVIDER_NAME = 'TooltipProvider';
        const $a093c7e1ec25a057$var$TOOLTIP_OPEN = 'tooltip.open';
        const [$a093c7e1ec25a057$var$TooltipProviderContextProvider, $a093c7e1ec25a057$var$useTooltipProviderContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PROVIDER_NAME);
        /* -------------------------------------------------------------------------------------------------
         * Tooltip
         * -----------------------------------------------------------------------------------------------*/
        const $a093c7e1ec25a057$var$TOOLTIP_NAME = 'Tooltip';
        const [$a093c7e1ec25a057$var$TooltipContextProvider, $a093c7e1ec25a057$var$useTooltipContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME);
        const $a093c7e1ec25a057$export$28c660c63b792dea = props => {
          const {
            __scopeTooltip: __scopeTooltip,
            children: children,
            open: openProp,
            defaultOpen = false,
            onOpenChange: onOpenChange,
            disableHoverableContent: disableHoverableContentProp,
            delayDuration: delayDurationProp
          } = props;
          const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TOOLTIP_NAME, props.__scopeTooltip);
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
            onChange: open => {
              if (open) {
                providerContext.onOpen(); // as `onChange` is called within a lifecycle method we
                // avoid dispatching via `dispatchDiscreteCustomEvent`.
                document.dispatchEvent(new CustomEvent($a093c7e1ec25a057$var$TOOLTIP_OPEN));
              } else providerContext.onClose();
              onOpenChange === null || onOpenChange === void 0 || onOpenChange(open);
            }
          });
          const stateAttribute = reactExports.useMemo(() => {
            return open1 ? wasOpenDelayedRef.current ? 'delayed-open' : 'instant-open' : 'closed';
          }, [open1]);
          const handleOpen = reactExports.useCallback(() => {
            window.clearTimeout(openTimerRef.current);
            wasOpenDelayedRef.current = false;
            setOpen(true);
          }, [setOpen]);
          const handleClose = reactExports.useCallback(() => {
            window.clearTimeout(openTimerRef.current);
            setOpen(false);
          }, [setOpen]);
          const handleDelayedOpen = reactExports.useCallback(() => {
            window.clearTimeout(openTimerRef.current);
            openTimerRef.current = window.setTimeout(() => {
              wasOpenDelayedRef.current = true;
              setOpen(true);
            }, delayDuration);
          }, [delayDuration, setOpen]);
          reactExports.useEffect(() => {
            return () => window.clearTimeout(openTimerRef.current);
          }, []);
          return /*#__PURE__*/reactExports.createElement($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /*#__PURE__*/reactExports.createElement($a093c7e1ec25a057$var$TooltipContextProvider, {
            scope: __scopeTooltip,
            contentId: contentId,
            open: open1,
            stateAttribute: stateAttribute,
            trigger: trigger,
            onTriggerChange: setTrigger,
            onTriggerEnter: reactExports.useCallback(() => {
              if (providerContext.isOpenDelayed) handleDelayedOpen();else handleOpen();
            }, [providerContext.isOpenDelayed, handleDelayedOpen, handleOpen]),
            onTriggerLeave: reactExports.useCallback(() => {
              if (disableHoverableContent) handleClose();else
                // Clear the timer in case the pointer leaves the trigger before the tooltip is opened.
                window.clearTimeout(openTimerRef.current);
            }, [handleClose, disableHoverableContent]),
            onOpen: handleOpen,
            onClose: handleClose,
            disableHoverableContent: disableHoverableContent
          }, children));
        };
        /* -------------------------------------------------------------------------------------------------
         * TooltipTrigger
         * -----------------------------------------------------------------------------------------------*/
        const $a093c7e1ec25a057$var$TRIGGER_NAME = 'TooltipTrigger';
        const $a093c7e1ec25a057$export$8c610744efcf8a1d = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          const {
              __scopeTooltip: __scopeTooltip
            } = props,
            triggerProps = _objectWithoutProperties2(props, _excluded20);
          const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
          const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
          const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
          const ref = reactExports.useRef(null);
          const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onTriggerChange);
          const isPointerDownRef = reactExports.useRef(false);
          const hasPointerMoveOpenedRef = reactExports.useRef(false);
          const handlePointerUp = reactExports.useCallback(() => isPointerDownRef.current = false, []);
          reactExports.useEffect(() => {
            return () => document.removeEventListener('pointerup', handlePointerUp);
          }, [handlePointerUp]);
          return /*#__PURE__*/reactExports.createElement($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends$1({
            asChild: true
          }, popperScope), /*#__PURE__*/reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$1({
            // We purposefully avoid adding `type=button` here because tooltip triggers are also
            // commonly anchors and the anchor `type` attribute signifies MIME type.
            "aria-describedby": context.open ? context.contentId : undefined,
            "data-state": context.stateAttribute
          }, triggerProps, {
            ref: composedRefs,
            onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, event => {
              if (event.pointerType === 'touch') return;
              if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
                context.onTriggerEnter();
                hasPointerMoveOpenedRef.current = true;
              }
            }),
            onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, () => {
              context.onTriggerLeave();
              hasPointerMoveOpenedRef.current = false;
            }),
            onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, () => {
              isPointerDownRef.current = true;
              document.addEventListener('pointerup', handlePointerUp, {
                once: true
              });
            }),
            onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
              if (!isPointerDownRef.current) context.onOpen();
            }),
            onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, context.onClose),
            onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onClose)
          })));
        });
        /* -------------------------------------------------------------------------------------------------
         * TooltipPortal
         * -----------------------------------------------------------------------------------------------*/
        const $a093c7e1ec25a057$var$PORTAL_NAME = 'TooltipPortal';
        const [$a093c7e1ec25a057$var$PortalProvider, $a093c7e1ec25a057$var$usePortalContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, {
          forceMount: undefined
        });
        /* -------------------------------------------------------------------------------------------------
         * TooltipContent
         * -----------------------------------------------------------------------------------------------*/
        const $a093c7e1ec25a057$var$CONTENT_NAME = 'TooltipContent';
        const $a093c7e1ec25a057$export$e9003e2be37ec060 = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          const portalContext = $a093c7e1ec25a057$var$usePortalContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
          const {
              forceMount = portalContext.forceMount,
              side = 'top'
            } = props,
            contentProps = _objectWithoutProperties2(props, _excluded21);
          const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
          return /*#__PURE__*/reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
            present: forceMount || context.open
          }, context.disableHoverableContent ? /*#__PURE__*/reactExports.createElement($a093c7e1ec25a057$var$TooltipContentImpl, _extends$1({
            side: side
          }, contentProps, {
            ref: forwardedRef
          })) : /*#__PURE__*/reactExports.createElement($a093c7e1ec25a057$var$TooltipContentHoverable, _extends$1({
            side: side
          }, contentProps, {
            ref: forwardedRef
          })));
        });
        const $a093c7e1ec25a057$var$TooltipContentHoverable = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
          const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
          const ref = reactExports.useRef(null);
          const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
          const [pointerGraceArea, setPointerGraceArea] = reactExports.useState(null);
          const {
            trigger: trigger,
            onClose: onClose
          } = context;
          const content = ref.current;
          const {
            onPointerInTransitChange: onPointerInTransitChange
          } = providerContext;
          const handleRemoveGraceArea = reactExports.useCallback(() => {
            setPointerGraceArea(null);
            onPointerInTransitChange(false);
          }, [onPointerInTransitChange]);
          const handleCreateGraceArea = reactExports.useCallback((event, hoverTarget) => {
            const currentTarget = event.currentTarget;
            const exitPoint = {
              x: event.clientX,
              y: event.clientY
            };
            const exitSide = $a093c7e1ec25a057$var$getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
            const bleed = exitSide === 'right' || exitSide === 'bottom' ? -5 : 5;
            const isXAxis = exitSide === 'right' || exitSide === 'left';
            const startPoint = isXAxis ? {
              x: event.clientX + bleed,
              y: event.clientY
            } : {
              x: event.clientX,
              y: event.clientY + bleed
            };
            const hoverTargetPoints = $a093c7e1ec25a057$var$getPointsFromRect(hoverTarget.getBoundingClientRect());
            const graceArea = $a093c7e1ec25a057$var$getHull([startPoint, ...hoverTargetPoints]);
            setPointerGraceArea(graceArea);
            onPointerInTransitChange(true);
          }, [onPointerInTransitChange]);
          reactExports.useEffect(() => {
            return () => handleRemoveGraceArea();
          }, [handleRemoveGraceArea]);
          reactExports.useEffect(() => {
            if (trigger && content) {
              const handleTriggerLeave = event => handleCreateGraceArea(event, content);
              const handleContentLeave = event => handleCreateGraceArea(event, trigger);
              trigger.addEventListener('pointerleave', handleTriggerLeave);
              content.addEventListener('pointerleave', handleContentLeave);
              return () => {
                trigger.removeEventListener('pointerleave', handleTriggerLeave);
                content.removeEventListener('pointerleave', handleContentLeave);
              };
            }
          }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
          reactExports.useEffect(() => {
            if (pointerGraceArea) {
              const handleTrackPointerGrace = event => {
                const target = event.target;
                const pointerPosition = {
                  x: event.clientX,
                  y: event.clientY
                };
                const hasEnteredTarget = (trigger === null || trigger === void 0 ? void 0 : trigger.contains(target)) || (content === null || content === void 0 ? void 0 : content.contains(target));
                const isPointerOutsideGraceArea = !$a093c7e1ec25a057$var$isPointInPolygon(pointerPosition, pointerGraceArea);
                if (hasEnteredTarget) handleRemoveGraceArea();else if (isPointerOutsideGraceArea) {
                  handleRemoveGraceArea();
                  onClose();
                }
              };
              document.addEventListener('pointermove', handleTrackPointerGrace);
              return () => document.removeEventListener('pointermove', handleTrackPointerGrace);
            }
          }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
          return /*#__PURE__*/reactExports.createElement($a093c7e1ec25a057$var$TooltipContentImpl, _extends$1({}, props, {
            ref: composedRefs
          }));
        });
        const [$a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, $a093c7e1ec25a057$var$useVisuallyHiddenContentContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME, {
          isInside: false
        });
        const $a093c7e1ec25a057$var$TooltipContentImpl = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          const {
              __scopeTooltip: __scopeTooltip,
              children: children,
              'aria-label': ariaLabel,
              onEscapeKeyDown: onEscapeKeyDown,
              onPointerDownOutside: onPointerDownOutside
            } = props,
            contentProps = _objectWithoutProperties2(props, _excluded22);
          const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, __scopeTooltip);
          const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
          const {
            onClose: onClose
          } = context; // Close this tooltip if another one opens
          reactExports.useEffect(() => {
            document.addEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
            return () => document.removeEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
          }, [onClose]); // Close the tooltip if the trigger is scrolled
          reactExports.useEffect(() => {
            if (context.trigger) {
              const handleScroll = event => {
                const target = event.target;
                if (target !== null && target !== void 0 && target.contains(context.trigger)) onClose();
              };
              window.addEventListener('scroll', handleScroll, {
                capture: true
              });
              return () => window.removeEventListener('scroll', handleScroll, {
                capture: true
              });
            }
          }, [context.trigger, onClose]);
          return /*#__PURE__*/reactExports.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
            asChild: true,
            disableOutsidePointerEvents: false,
            onEscapeKeyDown: onEscapeKeyDown,
            onPointerDownOutside: onPointerDownOutside,
            onFocusOutside: event => event.preventDefault(),
            onDismiss: onClose
          }, /*#__PURE__*/reactExports.createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends$1({
            "data-state": context.stateAttribute
          }, popperScope, contentProps, {
            ref: forwardedRef,
            style: _objectSpread3(_objectSpread3({}, contentProps.style), {}, {
              '--radix-tooltip-content-transform-origin': 'var(--radix-popper-transform-origin)',
              '--radix-tooltip-content-available-width': 'var(--radix-popper-available-width)',
              '--radix-tooltip-content-available-height': 'var(--radix-popper-available-height)',
              '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
              '--radix-tooltip-trigger-height': 'var(--radix-popper-anchor-height)'
            })
          }), /*#__PURE__*/reactExports.createElement($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), /*#__PURE__*/reactExports.createElement($a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, {
            scope: __scopeTooltip,
            isInside: true
          }, /*#__PURE__*/reactExports.createElement($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
            id: context.contentId,
            role: "tooltip"
          }, ariaLabel || children))));
        });
        /* -------------------------------------------------------------------------------------------------
         * TooltipArrow
         * -----------------------------------------------------------------------------------------------*/
        const $a093c7e1ec25a057$var$ARROW_NAME = 'TooltipArrow';
        const $a093c7e1ec25a057$export$c27ee0ad710f7559 = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
          const {
              __scopeTooltip: __scopeTooltip
            } = props,
            arrowProps = _objectWithoutProperties2(props, _excluded23);
          const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
          const visuallyHiddenContentContext = $a093c7e1ec25a057$var$useVisuallyHiddenContentContext($a093c7e1ec25a057$var$ARROW_NAME, __scopeTooltip); // if the arrow is inside the `VisuallyHidden`, we don't want to render it all to
          // prevent issues in positioning the arrow due to the duplicate
          return visuallyHiddenContentContext.isInside ? null : /*#__PURE__*/reactExports.createElement($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, _extends$1({}, popperScope, arrowProps, {
            ref: forwardedRef
          }));
        });
        /* -----------------------------------------------------------------------------------------------*/
        function $a093c7e1ec25a057$var$getExitSideFromRect(point, rect) {
          const top = Math.abs(rect.top - point.y);
          const bottom = Math.abs(rect.bottom - point.y);
          const right = Math.abs(rect.right - point.x);
          const left = Math.abs(rect.left - point.x);
          switch (Math.min(top, bottom, right, left)) {
            case left:
              return 'left';
            case right:
              return 'right';
            case top:
              return 'top';
            case bottom:
              return 'bottom';
            default:
              return null;
          }
        }
        function $a093c7e1ec25a057$var$getPointsFromRect(rect) {
          const {
            top: top,
            right: right,
            bottom: bottom,
            left: left
          } = rect;
          return [{
            x: left,
            y: top
          }, {
            x: right,
            y: top
          }, {
            x: right,
            y: bottom
          }, {
            x: left,
            y: bottom
          }];
        } // Determine if a point is inside of a polygon.
        // Based on https://github.com/substack/point-in-polygon
        function $a093c7e1ec25a057$var$isPointInPolygon(point, polygon) {
          const {
            x: x,
            y: y
          } = point;
          let inside = false;
          for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const xi = polygon[i].x;
            const yi = polygon[i].y;
            const xj = polygon[j].x;
            const yj = polygon[j].y; // prettier-ignore
            const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
            if (intersect) inside = !inside;
          }
          return inside;
        } // Returns a new array of points representing the convex hull of the given set of points.
        // https://www.nayuki.io/page/convex-hull-algorithm
        function $a093c7e1ec25a057$var$getHull(points) {
          const newPoints = points.slice();
          newPoints.sort((a, b) => {
            if (a.x < b.x) return -1;else if (a.x > b.x) return 1;else if (a.y < b.y) return -1;else if (a.y > b.y) return 1;else return 0;
          });
          return $a093c7e1ec25a057$var$getHullPresorted(newPoints);
        } // Returns the convex hull, assuming that each points[i] <= points[i + 1]. Runs in O(n) time.
        function $a093c7e1ec25a057$var$getHullPresorted(points) {
          if (points.length <= 1) return points.slice();
          const upperHull = [];
          for (let i = 0; i < points.length; i++) {
            const p = points[i];
            while (upperHull.length >= 2) {
              const q = upperHull[upperHull.length - 1];
              const r = upperHull[upperHull.length - 2];
              if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();else break;
            }
            upperHull.push(p);
          }
          upperHull.pop();
          const lowerHull = [];
          for (let i1 = points.length - 1; i1 >= 0; i1--) {
            const p = points[i1];
            while (lowerHull.length >= 2) {
              const q = lowerHull[lowerHull.length - 1];
              const r = lowerHull[lowerHull.length - 2];
              if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();else break;
            }
            lowerHull.push(p);
          }
          lowerHull.pop();
          if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;else return upperHull.concat(lowerHull);
        }
        const $a093c7e1ec25a057$export$be92b6f5f03c0fe9 = $a093c7e1ec25a057$export$28c660c63b792dea;
        const $a093c7e1ec25a057$export$41fb9f06171c75f4 = $a093c7e1ec25a057$export$8c610744efcf8a1d;
        const $a093c7e1ec25a057$export$7c6e2c02157bb7d2 = $a093c7e1ec25a057$export$e9003e2be37ec060;
        const $a093c7e1ec25a057$export$21b07c8f274aebd5 = $a093c7e1ec25a057$export$c27ee0ad710f7559;
        function _objectWithoutPropertiesLoose$1(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }
        function _objectWithoutProperties$1(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose$1(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }
          return target;
        }
        let LevaErrors;
        (function (LevaErrors) {
          LevaErrors[LevaErrors["UNSUPPORTED_INPUT"] = 0] = "UNSUPPORTED_INPUT";
          LevaErrors[LevaErrors["NO_COMPONENT_FOR_TYPE"] = 1] = "NO_COMPONENT_FOR_TYPE";
          LevaErrors[LevaErrors["UNKNOWN_INPUT"] = 2] = "UNKNOWN_INPUT";
          LevaErrors[LevaErrors["DUPLICATE_KEYS"] = 3] = "DUPLICATE_KEYS";
          LevaErrors[LevaErrors["ALREADY_REGISTERED_TYPE"] = 4] = "ALREADY_REGISTERED_TYPE";
          LevaErrors[LevaErrors["CLIPBOARD_ERROR"] = 5] = "CLIPBOARD_ERROR";
          LevaErrors[LevaErrors["THEME_ERROR"] = 6] = "THEME_ERROR";
          LevaErrors[LevaErrors["PATH_DOESNT_EXIST"] = 7] = "PATH_DOESNT_EXIST";
          LevaErrors[LevaErrors["INPUT_TYPE_OVERRIDE"] = 8] = "INPUT_TYPE_OVERRIDE";
          LevaErrors[LevaErrors["EMPTY_KEY"] = 9] = "EMPTY_KEY";
        })(LevaErrors || (LevaErrors = {}));
        const ErrorList = {
          [LevaErrors.UNSUPPORTED_INPUT]: (type, path) => [`An input with type \`${type}\` input was found at path \`${path}\` but it's not supported yet.`],
          [LevaErrors.NO_COMPONENT_FOR_TYPE]: (type, path) => [`Type \`${type}\` found at path \`${path}\` can't be displayed in panel because no component supports it yet.`],
          [LevaErrors.UNKNOWN_INPUT]: (path, value) => [`input at path \`${path}\` is not recognized.`, value],
          [LevaErrors.DUPLICATE_KEYS]: (key, path, prevPath) => [`Key \`${key}\` of path \`${path}\` already exists at path \`${prevPath}\`. Even nested keys need to be unique. Rename one of the keys.`],
          [LevaErrors.ALREADY_REGISTERED_TYPE]: type => [`Type ${type} has already been registered. You can't register a component with the same type.`],
          [LevaErrors.CLIPBOARD_ERROR]: value => [`Error copying the value`, value],
          [LevaErrors.THEME_ERROR]: (category, key) => [`Error accessing the theme \`${category}.${key}\` value.`],
          [LevaErrors.PATH_DOESNT_EXIST]: path => [`Error getting the value at path \`${path}\`. There is probably an error in your \`render\` function.`],
          [LevaErrors.PATH_DOESNT_EXIST]: path => [`Error accessing the value at path \`${path}\``],
          [LevaErrors.INPUT_TYPE_OVERRIDE]: (path, type, wrongType) => [`Input at path \`${path}\` already exists with type: \`${type}\`. Its type cannot be overridden with type \`${wrongType}\`.`],
          [LevaErrors.EMPTY_KEY]: () => ['Keys can not be empty, if you want to hide a label use whitespace.']
        };
        function _log(fn, errorType, ...args) {
          const [message, ...rest] = ErrorList[errorType](...args);
          console[fn]('LEVA: ' + message, ...rest);
        }
        const warn = _log.bind(null, 'warn');
        const log = _log.bind(null, 'log');
        const _excluded$a = ["value"],
          _excluded2$4 = ["schema"],
          _excluded3$1 = ["value"];
        const Schemas = [];
        const Plugins = {};
        function getValueType(_ref) {
          let {
              value
            } = _ref,
            settings = _objectWithoutProperties$1(_ref, _excluded$a);
          for (let checker of Schemas) {
            const type = checker(value, settings);
            if (type) return type;
          }
          return undefined;
        }
        function register(type, _ref2) {
          let {
              schema
            } = _ref2,
            plugin = _objectWithoutProperties$1(_ref2, _excluded2$4);
          if (type in Plugins) {
            warn(LevaErrors.ALREADY_REGISTERED_TYPE, type);
            return;
          }
          Schemas.push((value, settings) => schema(value, settings) && type);
          Plugins[type] = plugin;
        }
        function createInternalPlugin(plugin) {
          return plugin;
        }
        function normalize$3$1(type, input, path, data) {
          const {
            normalize: _normalize
          } = Plugins[type];
          if (_normalize) return _normalize(input, path, data);
          if (typeof input !== 'object' || !('value' in input)) return {
            value: input
          };
          const {
              value
            } = input,
            settings = _objectWithoutProperties$1(input, _excluded3$1);
          return {
            value,
            settings
          };
        }
        function sanitize$4(type, value, settings, prevValue, path, store) {
          const {
            sanitize
          } = Plugins[type];
          if (sanitize) return sanitize(value, settings, prevValue, path, store);
          return value;
        }
        function format$2(type, value, settings) {
          const {
            format
          } = Plugins[type];
          if (format) return format(value, settings);
          return value;
        }
        function _defineProperty$2(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
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
            enumerableOnly && (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread2(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys$2(Object(source), true).forEach(function (key) {
              _defineProperty$2(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        const clamp$1 = (x, min, max) => x > max ? max : x < min ? min : x;
        const parseNumber = v => {
          if (v === '' || typeof v === 'number') return v;
          try {
            const _v = evaluate$1(v);
            if (!isNaN(_v)) return _v;
          } catch (_unused) {}
          return parseFloat(v);
        };
        const log10 = Math.log(10);
        function getStep(number) {
          let n = Math.abs(+String(number).replace('.', ''));
          if (n === 0) return 0.01;
          while (n !== 0 && n % 10 === 0) n /= 10;
          const significantDigits = Math.floor(Math.log(n) / log10) + 1;
          const numberLog = Math.floor(Math.log10(Math.abs(number)));
          const step = Math.pow(10, numberLog - significantDigits);
          return Math.max(step, 0.001);
        }
        const range = (v, min, max) => {
          if (max === min) return 0;
          const _v = clamp$1(v, min, max);
          return (_v - min) / (max - min);
        };
        const invertedRange = (p, min, max) => p * (max - min) + min;
        const getUid = () => '_' + Math.random().toString(36).substr(2, 9);
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
              const newExpr = expr.replace(mul, (match, a, b) => String(Number(a) * Number(b)));
              return evaluate$1(newExpr);
            } else if (div.test(expr)) {
              const newExpr = expr.replace(div, (match, a, b) => {
                if (b != 0) return String(Number(a) / Number(b));else throw new Error('Division by zero');
              });
              return evaluate$1(newExpr);
            } else if (add.test(expr)) {
              const newExpr = expr.replace(add, (match, a, b) => String(Number(a) + Number(b)));
              return evaluate$1(newExpr);
            } else if (sub.test(expr)) {
              const newExpr = expr.replace(sub, (match, a, b) => String(Number(a) - Number(b)));
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
          keys.forEach(k => k in object && delete obj[k]);
          return obj;
        }
        function mapArrayToKeys(value, keys) {
          return value.reduce((acc, v, i) => Object.assign(acc, {
            [keys[i]]: v
          }), {});
        }
        function isObject$1(variable) {
          return Object.prototype.toString.call(variable) === '[object Object]';
        }
        const isEmptyObject = obj => isObject$1(obj) && Object.keys(obj).length === 0;
        let SpecialInputs;
        (function (SpecialInputs) {
          SpecialInputs["BUTTON"] = "BUTTON";
          SpecialInputs["BUTTON_GROUP"] = "BUTTON_GROUP";
          SpecialInputs["MONITOR"] = "MONITOR";
          SpecialInputs["FOLDER"] = "FOLDER";
        })(SpecialInputs || (SpecialInputs = {}));
        let LevaInputs;
        (function (LevaInputs) {
          LevaInputs["SELECT"] = "SELECT";
          LevaInputs["IMAGE"] = "IMAGE";
          LevaInputs["NUMBER"] = "NUMBER";
          LevaInputs["COLOR"] = "COLOR";
          LevaInputs["STRING"] = "STRING";
          LevaInputs["BOOLEAN"] = "BOOLEAN";
          LevaInputs["INTERVAL"] = "INTERVAL";
          LevaInputs["VECTOR3D"] = "VECTOR3D";
          LevaInputs["VECTOR2D"] = "VECTOR2D";
        })(LevaInputs || (LevaInputs = {}));
        const _excluded$9 = ["type", "__customInput"],
          _excluded2$3 = ["render", "label", "optional", "order", "disabled", "hint", "onChange", "onEditStart", "onEditEnd", "transient"],
          _excluded3$2 = ["type"];
        function parseOptions(_input, key, mergedOptions = {}, customType) {
          var _commonOptions$option, _commonOptions$disabl;
          if (typeof _input !== 'object' || Array.isArray(_input)) {
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
          if ('__customInput' in _input) {
            const {
                type: _type,
                __customInput
              } = _input,
              options = _objectWithoutProperties$1(_input, _excluded$9);
            return parseOptions(__customInput, key, options, _type);
          }
          const {
              render,
              label,
              optional,
              order = 0,
              disabled,
              hint,
              onChange,
              onEditStart,
              onEditEnd,
              transient
            } = _input,
            inputWithType = _objectWithoutProperties$1(_input, _excluded2$3);
          const commonOptions = _objectSpread2({
            render,
            key,
            label: label !== null && label !== void 0 ? label : key,
            hint,
            transient: transient !== null && transient !== void 0 ? transient : !!onChange,
            onEditStart,
            onEditEnd,
            disabled,
            optional,
            order
          }, mergedOptions);
          let {
              type
            } = inputWithType,
            input = _objectWithoutProperties$1(inputWithType, _excluded3$2);
          type = customType !== null && customType !== void 0 ? customType : type;
          if (type in SpecialInputs) {
            return {
              type,
              input,
              options: commonOptions
            };
          }
          let computedInput;
          if (customType && isObject$1(input) && 'value' in input) computedInput = input.value;else computedInput = isEmptyObject(input) ? undefined : input;
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
            if (type in SpecialInputs) return parsedInputAndOptions;
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
        const ValueError = function ValueError(message, value, error) {
          this.type = 'LEVA_ERROR';
          this.message = 'LEVA: ' + message;
          this.previousValue = value;
          this.error = error;
        };
        function sanitizeValue({
          type,
          value,
          settings
        }, newValue, path, store) {
          const _newValue = type !== 'SELECT' && typeof newValue === 'function' ? newValue(value) : newValue;
          let sanitizedNewValue;
          try {
            sanitizedNewValue = sanitize$4(type, _newValue, settings, value, path, store);
          } catch (e) {
            throw new ValueError(`The value \`${newValue}\` did not result in a correct value.`, value, e);
          }
          if (dequal(sanitizedNewValue, value)) {
            return value;
          }
          return sanitizedNewValue;
        }
        const debounce = (callback, wait, immediate = false) => {
          let timeout = 0;
          return function () {
            const args = arguments;
            const callNow = immediate && !timeout;
            const next = () => callback.apply(this, args);
            window.clearTimeout(timeout);
            timeout = window.setTimeout(next, wait);
            if (callNow) next();
          };
        };
        const multiplyStep = event => event.shiftKey ? 5 : event.altKey ? 1 / 5 : 1;
        const _excluded$8 = ["value"],
          _excluded2$2$1 = ["min", "max"];
        const schema$3 = v => {
          if (typeof v === 'number') return true;
          if (typeof v === 'string') {
            const _v = parseFloat(v);
            if (isNaN(_v)) return false;
            const suffix = v.substring(('' + _v).length).trim();
            return suffix.length < 4;
          }
          return false;
        };
        const sanitize$3 = (v, {
          min: _min = -Infinity,
          max: _max = Infinity,
          suffix
        }) => {
          const _v = parseFloat(v);
          if (v === '' || isNaN(_v)) throw Error('Invalid number');
          const f = clamp$1(_v, _min, _max);
          return suffix ? f + suffix : f;
        };
        const format$1$1 = (v, {
          pad: _pad = 0,
          suffix
        }) => {
          const f = parseFloat(v).toFixed(_pad);
          return suffix ? f + suffix : f;
        };
        const normalize$2$1 = _ref => {
          let {
              value
            } = _ref,
            settings = _objectWithoutProperties$1(_ref, _excluded$8);
          const {
              min = -Infinity,
              max = Infinity
            } = settings,
            _settings = _objectWithoutProperties$1(settings, _excluded2$2$1);
          let _value = parseFloat(value);
          const suffix = typeof value === 'string' ? value.substring(('' + _value).length) : undefined;
          _value = clamp$1(_value, min, max);
          let step = settings.step;
          if (!step) {
            if (Number.isFinite(min)) {
              if (Number.isFinite(max)) step = +(Math.abs(max - min) / 100).toPrecision(1);else step = +(Math.abs(_value - min) / 100).toPrecision(1);
            } else if (Number.isFinite(max)) step = +(Math.abs(max - _value) / 100).toPrecision(1);
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
              min,
              max,
              suffix
            }, _settings)
          };
        };
        const sanitizeStep$1 = (v, {
          step,
          initialValue
        }) => {
          const steps = Math.round((v - initialValue) / step);
          return initialValue + steps * step;
        };
        var props$3 = /*#__PURE__*/Object.freeze({
          __proto__: null,
          schema: schema$3,
          sanitize: sanitize$3,
          format: format$1$1,
          normalize: normalize$2$1,
          sanitizeStep: sanitizeStep$1
        });
        function _extends() {
          _extends = Object.assign ? Object.assign.bind() : function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
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
            elevation1: '#292d39',
            elevation2: '#181c20',
            elevation3: '#373c4b',
            accent1: '#0066dc',
            accent2: '#007bff',
            accent3: '#3c93ff',
            highlight1: '#535760',
            highlight2: '#8c92a4',
            highlight3: '#fefefe',
            vivid1: '#ffcc00',
            folderWidgetColor: '$highlight2',
            folderTextColor: '$highlight3',
            toolTipBackground: '$highlight3',
            toolTipText: '$elevation2'
          },
          radii: {
            xs: '2px',
            sm: '3px',
            lg: '10px'
          },
          space: {
            xs: '3px',
            sm: '6px',
            md: '10px',
            rowGap: '7px',
            colGap: '7px'
          },
          fonts: {
            mono: `ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace`,
            sans: `system-ui, sans-serif`
          },
          fontSizes: {
            root: '11px',
            toolTip: '$root'
          },
          sizes: {
            rootWidth: '280px',
            controlWidth: '160px',
            numberInputMinWidth: '38px',
            scrubberWidth: '8px',
            scrubberHeight: '16px',
            rowHeight: '24px',
            folderTitleHeight: '20px',
            checkboxSize: '16px',
            joystickWidth: '100px',
            joystickHeight: '100px',
            colorPickerWidth: '$controlWidth',
            colorPickerHeight: '100px',
            imagePreviewWidth: '$controlWidth',
            imagePreviewHeight: '100px',
            monitorHeight: '60px',
            titleBarHeight: '39px'
          },
          shadows: {
            level1: '0 0 9px 0 #00000088',
            level2: '0 4px 14px #00000033'
          },
          borderWidths: {
            root: '0px',
            input: '1px',
            focus: '1px',
            hover: '1px',
            active: '1px',
            folder: '1px'
          },
          fontWeights: {
            label: 'normal',
            folder: 'normal',
            button: 'normal'
          }
        });
        function createStateClass(value, options) {
          const [borderColor, bgColor] = value.split(' ');
          const css = {};
          if (borderColor !== 'none') {
            css.boxShadow = `${options.inset ? 'inset ' : ''}0 0 0 $borderWidths${[options.key]} $colors${borderColor !== 'default' && borderColor || options.borderColor}`;
          }
          if (bgColor) {
            css.backgroundColor = bgColor;
          }
          return css;
        }
        const utils = {
          $inputStyle: () => value => createStateClass(value, {
            key: '$input',
            borderColor: '$highlight1',
            inset: true
          }),
          $focusStyle: () => value => createStateClass(value, {
            key: '$focus',
            borderColor: '$accent2'
          }),
          $hoverStyle: () => value => createStateClass(value, {
            key: '$hover',
            borderColor: '$accent1',
            inset: true
          }),
          $activeStyle: () => value => createStateClass(value, {
            key: '$active',
            borderColor: '$accent1',
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
          prefix: 'leva',
          theme: getDefaultTheme(),
          utils: _objectSpread2(_objectSpread2({}, utils), {}, {
            $flex: () => ({
              display: 'flex',
              alignItems: 'center'
            }),
            $flexCenter: () => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }),
            $reset: () => ({
              outline: 'none',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              color: 'inherit',
              fontFamily: 'inherit',
              border: 'none',
              backgroundColor: 'transparent',
              appearance: 'none'
            }),
            $draggable: () => ({
              touchAction: 'none',
              WebkitUserDrag: 'none',
              userSelect: 'none'
            }),
            $focus: value => ({
              '&:focus': utils.$focusStyle()(value)
            }),
            $focusWithin: value => ({
              '&:focus-within': utils.$focusStyle()(value)
            }),
            $hover: value => ({
              '&:hover': utils.$hoverStyle()(value)
            }),
            $active: value => ({
              '&:active': utils.$activeStyle()(value)
            })
          })
        });
        const globalStyles = globalCss({
          '.leva__panel__dragged': {
            WebkitUserDrag: 'none',
            userSelect: 'none',
            input: {
              userSelect: 'none'
            },
            '*': {
              cursor: 'ew-resize !important'
            }
          }
        });
        function mergeTheme(newTheme) {
          const defaultTheme = getDefaultTheme();
          if (!newTheme) return {
            theme: defaultTheme,
            className: ''
          };
          Object.keys(newTheme).forEach(key => {
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
            return '';
          }
          let _key = key;
          while (true) {
            let value = theme[category][_key];
            if (typeof value === 'string' && value.charAt(0) === '$') _key = value.substr(1);else return value;
          }
        }
        const StyledInput = styled('input', {
          $reset: '',
          padding: '0 $sm',
          width: 0,
          minWidth: 0,
          flex: 1,
          height: '100%',
          variants: {
            levaType: {
              number: {
                textAlign: 'right'
              }
            },
            as: {
              textarea: {
                padding: '$sm'
              }
            }
          }
        });
        const InnerLabel = styled('div', {
          $draggable: '',
          height: '100%',
          $flexCenter: '',
          position: 'relative',
          padding: '0 $xs',
          fontSize: '0.8em',
          opacity: 0.8,
          cursor: 'default',
          touchAction: 'none',
          [`& + ${StyledInput}`]: {
            paddingLeft: 0
          }
        });
        const InnerNumberLabel = styled(InnerLabel, {
          cursor: 'ew-resize',
          marginRight: '-$xs',
          textTransform: 'uppercase',
          opacity: 0.3,
          '&:hover': {
            opacity: 1
          },
          variants: {
            dragging: {
              true: {
                backgroundColor: '$accent2',
                opacity: 1
              }
            }
          }
        });
        const InputContainer = styled('div', {
          $flex: '',
          position: 'relative',
          borderRadius: '$sm',
          overflow: 'hidden',
          color: 'inherit',
          height: '$rowHeight',
          backgroundColor: '$elevation3',
          $inputStyle: '$elevation1',
          $hover: '',
          $focusWithin: '',
          variants: {
            textArea: {
              true: {
                height: 'auto'
              }
            }
          }
        });
        const _excluded$7$1 = ["innerLabel", "value", "onUpdate", "onChange", "onKeyDown", "type", "id", "inputType", "rows"],
          _excluded2$1$1 = ["onUpdate"];
        function ValueInput(_ref) {
          let {
              innerLabel,
              value,
              onUpdate,
              onChange,
              onKeyDown,
              type,
              id,
              inputType = 'text',
              rows = 0
            } = _ref,
            props = _objectWithoutProperties$1(_ref, _excluded$7$1);
          const {
            id: _id,
            emitOnEditStart,
            emitOnEditEnd,
            disabled
          } = useInputContext();
          const inputId = id || _id;
          const inputRef = reactExports.useRef(null);
          const isTextArea = rows > 0;
          const asType = isTextArea ? 'textarea' : 'input';
          const update = reactExports.useCallback(fn => event => {
            const _value = event.currentTarget.value;
            fn(_value);
          }, []);
          React.useEffect(() => {
            const ref = inputRef.current;
            const _onUpdate = update(value => {
              onUpdate(value);
              emitOnEditEnd();
            });
            ref === null || ref === void 0 ? void 0 : ref.addEventListener('blur', _onUpdate);
            return () => ref === null || ref === void 0 ? void 0 : ref.removeEventListener('blur', _onUpdate);
          }, [update, onUpdate, emitOnEditEnd]);
          const onKeyPress = reactExports.useCallback(event => {
            if (event.key === 'Enter') {
              update(onUpdate)(event);
            }
          }, [update, onUpdate]);
          const inputProps = Object.assign({
            as: asType
          }, isTextArea ? {
            rows
          } : {}, props);
          return React.createElement(InputContainer, {
            textArea: isTextArea
          }, innerLabel && typeof innerLabel === 'string' ? React.createElement(InnerLabel, null, innerLabel) : innerLabel, React.createElement(StyledInput, _extends({
            levaType: type,
            ref: inputRef,
            id: inputId,
            type: inputType,
            autoComplete: "off",
            spellCheck: "false",
            value: value,
            onChange: update(onChange),
            onFocus: () => emitOnEditStart(),
            onKeyPress: onKeyPress,
            onKeyDown: onKeyDown,
            disabled: disabled
          }, inputProps)));
        }
        function NumberInput(_ref2) {
          let {
              onUpdate
            } = _ref2,
            props = _objectWithoutProperties$1(_ref2, _excluded2$1$1);
          const _onUpdate = reactExports.useCallback(v => onUpdate(parseNumber(v)), [onUpdate]);
          const onKeyDown = reactExports.useCallback(event => {
            const dir = event.key === 'ArrowUp' ? 1 : event.key === 'ArrowDown' ? -1 : 0;
            if (dir) {
              event.preventDefault();
              const step = event.altKey ? 0.1 : event.shiftKey ? 10 : 1;
              onUpdate(v => parseFloat(v) + dir * step);
            }
          }, [onUpdate]);
          return React.createElement(ValueInput, _extends({}, props, {
            onUpdate: _onUpdate,
            onKeyDown: onKeyDown,
            type: "number"
          }));
        }
        const StyledFolder = styled('div', {});
        const StyledWrapper = styled('div', {
          position: 'relative',
          background: '$elevation2',
          transition: 'height 300ms ease',
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
                paddingLeft: '$md',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '$borderWidths$folder',
                  height: '100%',
                  backgroundColor: '$folderWidgetColor',
                  opacity: 0.4,
                  transform: 'translateX(-50%)'
                }
              }
            }
          },
          compoundVariants: [{
            isRoot: true,
            fill: false,
            css: {
              overflowY: 'auto',
              maxHeight: 'calc(100vh - 20px - $$titleBarHeight)'
            }
          }, {
            isRoot: true,
            flat: false,
            css: {
              borderRadius: '$lg'
            }
          }]
        });
        const StyledTitle = styled('div', {
          $flex: '',
          color: '$folderTextColor',
          userSelect: 'none',
          cursor: 'pointer',
          height: '$folderTitleHeight',
          fontWeight: '$folder',
          '> svg': {
            marginLeft: -4,
            marginRight: 4,
            cursor: 'pointer',
            fill: '$folderWidgetColor',
            opacity: 0.6
          },
          '&:hover > svg': {
            fill: '$folderWidgetColor'
          },
          [`&:hover + ${StyledWrapper}::after`]: {
            opacity: 0.6
          },
          [`${StyledFolder}:hover > & + ${StyledWrapper}::after`]: {
            opacity: 0.6
          },
          [`${StyledFolder}:hover > & > svg`]: {
            opacity: 1
          }
        });
        const StyledContent = styled('div', {
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '100%',
          rowGap: '$rowGap',
          transition: 'opacity 250ms ease',
          variants: {
            toggled: {
              true: {
                opacity: 1,
                transitionDelay: '250ms'
              },
              false: {
                opacity: 0,
                transitionDelay: '0ms',
                pointerEvents: 'none'
              }
            },
            isRoot: {
              true: {
                '& > div': {
                  paddingLeft: '$md',
                  paddingRight: '$md'
                },
                '& > div:first-of-type': {
                  paddingTop: '$sm'
                },
                '& > div:last-of-type': {
                  paddingBottom: '$sm'
                },
                [`> ${StyledFolder}:not(:first-of-type)`]: {
                  paddingTop: '$sm',
                  marginTop: '$md',
                  borderTop: '$borderWidths$folder solid $colors$elevation1'
                }
              }
            }
          }
        });
        const StyledRow = styled('div', {
          position: 'relative',
          zIndex: 100,
          display: 'grid',
          rowGap: '$rowGap',
          gridTemplateRows: 'minmax($sizes$rowHeight, max-content)',
          alignItems: 'center',
          color: '$highlight2',
          [`${StyledContent} > &`]: {
            '&:first-of-type': {
              marginTop: '$rowGap'
            },
            '&:last-of-type': {
              marginBottom: '$rowGap'
            }
          },
          variants: {
            disabled: {
              true: {
                pointerEvents: 'none'
              },
              false: {
                '&:hover,&:focus-within': {
                  color: '$highlight3'
                }
              }
            }
          }
        });
        const StyledInputRow = styled(StyledRow, {
          gridTemplateColumns: 'auto $sizes$controlWidth',
          columnGap: '$colGap'
        });
        const CopyLabelContainer = styled('div', {
          $flex: '',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          '& > div': {
            marginLeft: '$colGap',
            padding: '0 $xs',
            opacity: 0.4
          },
          '& > div:hover': {
            opacity: 0.8
          },
          '& > div > svg': {
            display: 'none',
            cursor: 'pointer',
            width: 13,
            minWidth: 13,
            height: 13,
            backgroundColor: '$elevation2'
          },
          '&:hover > div > svg': {
            display: 'block'
          },
          variants: {
            align: {
              top: {
                height: '100%',
                alignItems: 'flex-start',
                paddingTop: '$sm'
              }
            }
          }
        });
        const StyledOptionalToggle = styled('input', {
          $reset: '',
          height: 0,
          width: 0,
          opacity: 0,
          margin: 0,
          '& + label': {
            position: 'relative',
            $flexCenter: '',
            height: '100%',
            userSelect: 'none',
            cursor: 'pointer',
            paddingLeft: 2,
            paddingRight: '$sm',
            pointerEvents: 'auto'
          },
          '& + label:after': {
            content: '""',
            width: 6,
            height: 6,
            backgroundColor: '$elevation3',
            borderRadius: '50%',
            $activeStyle: ''
          },
          '&:focus + label:after': {
            $focusStyle: ''
          },
          '& + label:active:after': {
            backgroundColor: '$accent1',
            $focusStyle: ''
          },
          '&:checked + label:after': {
            backgroundColor: '$accent1'
          }
        });
        const StyledLabel = styled('label', {
          fontWeight: '$label',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          '& > svg': {
            display: 'block'
          }
        });
        const StyledInputWrapper$1 = styled('div', {
          opacity: 1,
          variants: {
            disabled: {
              true: {
                opacity: 0.6,
                pointerEvents: 'none',
                [`& ${StyledLabel}`]: {
                  pointerEvents: 'auto'
                }
              }
            }
          }
        });
        const Overlay = styled('div', {
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1000,
          userSelect: 'none'
        });
        const StyledToolTipContent = styled('div', {
          background: '$toolTipBackground',
          fontFamily: '$sans',
          fontSize: '$toolTip',
          padding: '$xs $sm',
          color: '$toolTipText',
          borderRadius: '$xs',
          boxShadow: '$level2',
          maxWidth: 260
        });
        const ToolTipArrow = styled($a093c7e1ec25a057$export$21b07c8f274aebd5, {
          fill: '$toolTipBackground'
        });
        function Portal({
          children
        }) {
          const {
            className
          } = reactExports.useContext(ThemeContext);
          return React.createElement($f1701beae083dbae$export$be92b6f5f03c0fe9, {
            className: className
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
            id: id + '__disable',
            type: "checkbox",
            checked: !disabled,
            onChange: () => disable(!disabled)
          }), React.createElement("label", {
            htmlFor: id + '__disable'
          }));
        }
        function RawLabel(props) {
          const {
            id,
            optional,
            hint
          } = useInputContext();
          const htmlFor = props.htmlFor || (id ? {
            htmlFor: id
          } : null);
          const title = !hint && typeof props.children === 'string' ? {
            title: props.children
          } : null;
          return React.createElement(React.Fragment, null, optional && React.createElement(OptionalToggle, null), hint !== undefined ? React.createElement($a093c7e1ec25a057$export$be92b6f5f03c0fe9, null, React.createElement($a093c7e1ec25a057$export$41fb9f06171c75f4, {
            asChild: true
          }, React.createElement(StyledLabel, _extends({}, htmlFor, props))), React.createElement($a093c7e1ec25a057$export$7c6e2c02157bb7d2, {
            side: "top",
            sideOffset: 2
          }, React.createElement(StyledToolTipContent, null, hint, React.createElement(ToolTipArrow, null)))) : React.createElement(StyledLabel, _extends({}, htmlFor, title, props)));
        }
        function Label(_ref) {
          let {
              align
            } = _ref,
            props = _objectWithoutProperties$1(_ref, _excluded$6$1);
          const {
            value,
            label,
            key,
            disabled
          } = useInputContext();
          const {
            hideCopyButton
          } = usePanelSettingsContext();
          const copyEnabled = !hideCopyButton && key !== undefined;
          const [copied, setCopied] = reactExports.useState(false);
          const handleClick = async () => {
            try {
              await navigator.clipboard.writeText(JSON.stringify({
                [key]: value !== null && value !== void 0 ? value : ''
              }));
              setCopied(true);
            } catch (_unused) {
              warn(LevaErrors.CLIPBOARD_ERROR, {
                [key]: value
              });
            }
          };
          return React.createElement(CopyLabelContainer, {
            align: align,
            onPointerLeave: () => setCopied(false)
          }, React.createElement(RawLabel, props), copyEnabled && !disabled && React.createElement("div", {
            title: `Click to copy ${typeof label === 'string' ? label : key} value`
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
        const Svg = styled('svg', {
          fill: 'currentColor',
          transition: 'transform 350ms ease, fill 250ms ease'
        });
        function Chevron(_ref) {
          let {
              toggled
            } = _ref,
            props = _objectWithoutProperties$1(_ref, _excluded$5$1);
          return React.createElement(Svg, _extends({
            width: "9",
            height: "5",
            viewBox: "0 0 9 5",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
              transform: `rotate(${toggled ? 0 : -90}deg)`
            }
          }, props), React.createElement("path", {
            d: "M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z"
          }));
        }
        const _excluded$4$1 = ["input"];
        function Row(_ref) {
          let {
              input
            } = _ref,
            props = _objectWithoutProperties$1(_ref, _excluded$4$1);
          if (input) return React.createElement(StyledInputRow, props);
          return React.createElement(StyledRow, props);
        }
        function useInputSetters({
          value,
          type,
          settings,
          setValue
        }) {
          const [displayValue, setDisplayValue] = reactExports.useState(format$2(type, value, settings));
          const previousValueRef = reactExports.useRef(value);
          const settingsRef = reactExports.useRef(settings);
          settingsRef.current = settings;
          const setFormat = reactExports.useCallback(v => setDisplayValue(format$2(type, v, settingsRef.current)), [type]);
          const onUpdate = reactExports.useCallback(updatedValue => {
            try {
              setValue(updatedValue);
            } catch (error) {
              const {
                type,
                previousValue
              } = error;
              if (type !== 'LEVA_ERROR') throw error;
              setFormat(previousValue);
            }
          }, [setFormat, setValue]);
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
          return useDrag$1(state => {
            if (state.first) {
              document.body.classList.add('leva__panel__dragged');
              emitOnEditStart === null || emitOnEditStart === void 0 ? void 0 : emitOnEditStart();
            }
            const result = handler(state);
            if (state.last) {
              document.body.classList.remove('leva__panel__dragged');
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
            window.addEventListener('resize', handleCanvas);
            if (!hasFired.current) {
              handleCanvas();
              hasFired.current = true;
            }
            return () => window.removeEventListener('resize', handleCanvas);
          }, [fn]);
          reactExports.useEffect(() => {
            ctx.current = canvas.current.getContext('2d');
          }, []);
          return [canvas, ctx];
        }
        function useTransform() {
          const ref = reactExports.useRef(null);
          const local = reactExports.useRef({
            x: 0,
            y: 0
          });
          const set = reactExports.useCallback(point => {
            Object.assign(local.current, point);
            if (ref.current) ref.current.style.transform = `translate3d(${local.current.x}px, ${local.current.y}px, 0)`;
          }, []);
          return [ref, set];
        }
        const _excluded$3$1 = ["__refCount"];
        const getInputAtPath = (data, path) => {
          if (!data[path]) return null;
          const _data$path = data[path],
            input = _objectWithoutProperties$1(_data$path, _excluded$3$1);
          return input;
        };
        function useInput(path) {
          const store = useStoreContext();
          const [state, setState] = reactExports.useState(getInputAtPath(store.getData(), path));
          const set = reactExports.useCallback(value => store.setValueAtPath(path, value, true), [path, store]);
          const setSettings = reactExports.useCallback(settings => store.setSettingsAtPath(path, settings), [path, store]);
          const disable = reactExports.useCallback(flag => store.disableInputAtPath(path, flag), [path, store]);
          const emitOnEditStart = reactExports.useCallback(() => store.emitOnEditStart(path), [path, store]);
          const emitOnEditEnd = reactExports.useCallback(() => store.emitOnEditEnd(path), [path, store]);
          reactExports.useEffect(() => {
            setState(getInputAtPath(store.getData(), path));
            const unsub = store.useStore.subscribe(s => getInputAtPath(s.data, path), setState, {
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
        const RangeGrid = styled('div', {
          variants: {
            hasRange: {
              true: {
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'auto $sizes$numberInputMinWidth',
                columnGap: '$colGap',
                alignItems: 'center'
              }
            }
          }
        });
        const Range = styled('div', {
          position: 'relative',
          width: '100%',
          height: 2,
          borderRadius: '$xs',
          backgroundColor: '$elevation1'
        });
        const Scrubber = styled('div', {
          position: 'absolute',
          width: '$scrubberWidth',
          height: '$scrubberHeight',
          borderRadius: '$xs',
          boxShadow: '0 0 0 2px $colors$elevation2',
          backgroundColor: '$accent2',
          cursor: 'pointer',
          $active: 'none $accent1',
          $hover: 'none $accent3',
          variants: {
            position: {
              left: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                transform: 'translateX(calc(-0.5 * ($sizes$scrubberWidth + 4px)))'
              },
              right: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                transform: 'translateX(calc(0.5 * ($sizes$scrubberWidth + 4px)))'
              }
            }
          }
        });
        const RangeWrapper = styled('div', {
          position: 'relative',
          $flex: '',
          height: '100%',
          cursor: 'pointer',
          touchAction: 'none'
        });
        const Indicator = styled('div', {
          position: 'absolute',
          height: '100%',
          backgroundColor: '$accent2'
        });
        function RangeSlider({
          value,
          min,
          max,
          onDrag,
          step,
          initialValue
        }) {
          const ref = reactExports.useRef(null);
          const scrubberRef = reactExports.useRef(null);
          const rangeWidth = reactExports.useRef(0);
          const scrubberWidth = useTh('sizes', 'scrubberWidth');
          const bind = useDrag(({
            event,
            first,
            xy: [x],
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
              memo = targetIsScrub ? value : invertedRange((x - left) / width, min, max);
            }
            const newValue = memo + invertedRange(mx / rangeWidth.current, 0, max - min);
            onDrag(sanitizeStep$1(newValue, {
              step,
              initialValue
            }));
            return memo;
          });
          const pos = range(value, min, max);
          return React.createElement(RangeWrapper, _extends({
            ref: ref
          }, bind()), React.createElement(Range, null, React.createElement(Indicator, {
            style: {
              left: 0,
              right: `${(1 - pos) * 100}%`
            }
          })), React.createElement(Scrubber, {
            ref: scrubberRef,
            style: {
              left: `calc(${pos} * (100% - ${scrubberWidth}))`
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
              const label = target;
              label.requestPointerLock();
            }
            if (last) {
              document.exitPointerLock();
            }
            setDragging(active);
            _memo += dx / 2;
            if (Math.abs(_memo) >= 1) {
              onUpdate(v => parseFloat(v) + Math.floor(_memo) * step * multiplyStep(event));
              _memo = 0;
            }
            return _memo;
          });
          return React.createElement(InnerNumberLabel, _extends({
            dragging: dragging,
            title: label.length > 1 ? label : ''
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
          const InnerLabel = innerLabelTrim > 0 && React.createElement(DraggableLabel, {
            label: label,
            step: settings.step,
            onUpdate: onUpdate,
            innerLabelTrim: innerLabelTrim
          });
          return React.createElement(NumberInput, {
            id: id,
            value: String(displayValue),
            onUpdate: onUpdate,
            onChange: onChange,
            innerLabel: InnerLabel
          });
        }
        function NumberComponent() {
          const props = useInputContext();
          const {
            label,
            value,
            onUpdate,
            settings,
            id
          } = props;
          const {
            min,
            max
          } = settings;
          const hasRange = max !== Infinity && min !== -Infinity;
          return React.createElement(Row, {
            input: true
          }, React.createElement(Label, null, label), React.createElement(RangeGrid, {
            hasRange: hasRange
          }, hasRange && React.createElement(RangeSlider, _extends({
            value: parseFloat(value),
            onDrag: onUpdate
          }, settings)), React.createElement(Number$1, _extends({}, props, {
            id: id,
            label: "value",
            innerLabelTrim: hasRange ? 0 : 1
          }))));
        }
        const {
            sanitizeStep
          } = props$3,
          rest = _objectWithoutProperties$1(props$3, ["sanitizeStep"]);
        var number$1 = createInternalPlugin(_objectSpread2({
          component: NumberComponent
        }, rest));
        const schema$2$1 = (_o, s) => v8n().schema({
          options: v8n().passesAnyOf(v8n().object(), v8n().array())
        }).test(s);
        const sanitize$2$1 = (value, {
          values
        }) => {
          if (values.indexOf(value) < 0) throw Error(`Selected value doesn't match Select options`);
          return value;
        };
        const format$3 = (value, {
          values
        }) => {
          return values.indexOf(value);
        };
        const normalize$1$1 = input => {
          let {
            value,
            options
          } = input;
          let keys;
          let values;
          if (Array.isArray(options)) {
            values = options;
            keys = options.map(o => String(o));
          } else {
            values = Object.values(options);
            keys = Object.keys(options);
          }
          if (!('value' in input)) value = values[0];else if (!values.includes(value)) {
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
        var props$2$1 = /*#__PURE__*/Object.freeze({
          __proto__: null,
          schema: schema$2$1,
          sanitize: sanitize$2$1,
          format: format$3,
          normalize: normalize$1$1
        });
        const SelectContainer = styled('div', {
          $flexCenter: '',
          position: 'relative',
          '> svg': {
            pointerEvents: 'none',
            position: 'absolute',
            right: '$md'
          }
        });
        const NativeSelect = styled('select', {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0
        });
        const PresentationalSelect = styled('div', {
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '$rowHeight',
          backgroundColor: '$elevation3',
          borderRadius: '$sm',
          padding: '0 $sm',
          cursor: 'pointer',
          [`${NativeSelect}:focus + &`]: {
            $focusStyle: ''
          },
          [`${NativeSelect}:hover + &`]: {
            $hoverStyle: ''
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
            id: id,
            value: displayValue,
            onChange: e => onUpdate(values[Number(e.currentTarget.value)]),
            disabled: disabled
          }, keys.map((key, index) => React.createElement("option", {
            key: key,
            value: index
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
            id: id,
            value: value,
            displayValue: displayValue,
            onUpdate: onUpdate,
            settings: settings,
            disabled: disabled
          }));
        }
        var select = createInternalPlugin(_objectSpread2({
          component: SelectComponent
        }, props$2$1));
        const schema$1$1 = o => v8n().string().test(o);
        const sanitize$1$1 = v => {
          if (typeof v !== 'string') throw Error(`Invalid string`);
          return v;
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
              rows: typeof _rows === 'number' ? _rows : _rows ? 5 : 0
            }
          };
        };
        var props$1$1 = /*#__PURE__*/Object.freeze({
          __proto__: null,
          schema: schema$1$1,
          sanitize: sanitize$1$1,
          normalize: normalize$4
        });
        const _excluded$2$1 = ["displayValue", "onUpdate", "onChange", "editable"];
        const NonEditableString = styled('div', {
          whiteSpace: 'pre-wrap'
        });
        function String$1(_ref) {
          let {
              displayValue,
              onUpdate,
              onChange,
              editable = true
            } = _ref,
            props = _objectWithoutProperties$1(_ref, _excluded$2$1);
          if (editable) return React.createElement(ValueInput, _extends({
            value: displayValue,
            onUpdate: onUpdate,
            onChange: onChange
          }, props));
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
            displayValue: displayValue,
            onUpdate: onUpdate,
            onChange: onChange
          }, settings)));
        }
        var string = createInternalPlugin(_objectSpread2({
          component: StringComponent
        }, props$1$1));
        const schema$4 = o => v8n().boolean().test(o);
        const sanitize$5 = v => {
          if (typeof v !== 'boolean') throw Error('Invalid boolean');
          return v;
        };
        var props$4 = /*#__PURE__*/Object.freeze({
          __proto__: null,
          schema: schema$4,
          sanitize: sanitize$5
        });
        const StyledInputWrapper = styled('div', {
          position: 'relative',
          $flex: '',
          height: '$rowHeight',
          input: {
            $reset: '',
            height: 0,
            width: 0,
            opacity: 0,
            margin: 0
          },
          label: {
            position: 'relative',
            $flexCenter: '',
            userSelect: 'none',
            cursor: 'pointer',
            height: '$checkboxSize',
            width: '$checkboxSize',
            backgroundColor: '$elevation3',
            borderRadius: '$sm',
            $hover: ''
          },
          'input:focus + label': {
            $focusStyle: ''
          },
          'input:focus:checked + label, input:checked + label:hover': {
            $hoverStyle: '$accent3'
          },
          'input + label:active': {
            backgroundColor: '$accent1'
          },
          'input:checked + label:active': {
            backgroundColor: '$accent1'
          },
          'label > svg': {
            display: 'none',
            width: '90%',
            height: '90%',
            stroke: '$highlight3'
          },
          'input:checked + label': {
            backgroundColor: '$accent2'
          },
          'input:checked + label > svg': {
            display: 'block'
          }
        });
        function Boolean$1({
          value,
          onUpdate,
          id,
          disabled
        }) {
          return React.createElement(StyledInputWrapper, null, React.createElement("input", {
            id: id,
            type: "checkbox",
            checked: value,
            onChange: e => onUpdate(e.currentTarget.checked),
            disabled: disabled
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
            value: value,
            onUpdate: onUpdate,
            id: id,
            disabled: disabled
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
          const setValue = reactExports.useCallback(newValue => onUpdate({
            [valueKey]: sanitizeValue({
              type: 'NUMBER',
              value: valueRef.current,
              settings
            }, newValue)
          }), [onUpdate, settings, valueKey]);
          const number = useInputSetters({
            type: 'NUMBER',
            value: value[valueKey],
            settings,
            setValue
          });
          return React.createElement(Number$1, {
            id: id,
            label: valueKey,
            value: value[valueKey],
            displayValue: number.displayValue,
            onUpdate: number.onUpdate,
            onChange: number.onChange,
            settings: settings,
            innerLabelTrim: innerLabelTrim
          });
        }
        const Container$2 = styled('div', {
          display: 'grid',
          columnGap: '$colGap',
          gridAutoFlow: 'column dense',
          alignItems: 'center',
          variants: {
            withLock: {
              true: {
                gridTemplateColumns: '10px auto',
                '> svg': {
                  cursor: 'pointer'
                }
              }
            }
          }
        });
        function Lock(_ref) {
          let {
              locked
            } = _ref,
            props = _objectWithoutProperties$1(_ref, _excluded$1$1);
          return React.createElement("svg", _extends({
            width: "10",
            height: "10",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, props), locked ? React.createElement("path", {
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
            locked: locked,
            onClick: () => setSettings({
              locked: !locked
            })
          }), Object.keys(value).map((key, i) => React.createElement(Coordinate, {
            id: i === 0 ? id : `${id}.${key}`,
            key: key,
            valueKey: key,
            value: value,
            settings: settings[key],
            onUpdate: onUpdate,
            innerLabelTrim: innerLabelTrim
          })));
        }
        const normalizeKeyedNumberSettings = (value, settings) => {
          const _settings = {};
          let maxStep = 0;
          let minPad = Infinity;
          Object.entries(value).forEach(([key, v]) => {
            _settings[key] = normalize$2$1(_objectSpread2({
              value: v
            }, settings[key])).settings;
            maxStep = Math.max(maxStep, _settings[key].step);
            minPad = Math.min(minPad, _settings[key].pad);
          });
          for (let key in _settings) {
            const {
              step,
              min,
              max
            } = settings[key] || {};
            if (!isFinite(step) && (!isFinite(min) || !isFinite(max))) {
              _settings[key].step = maxStep;
              _settings[key].pad = minPad;
            }
          }
          return _settings;
        };
        const _excluded$b = ["lock"],
          _excluded2$5 = ["value"];
        function getVectorSchema(dimension) {
          const isVectorArray = v8n().array().length(dimension).every.number();
          const isVectorObject = o => {
            if (!o || typeof o !== 'object') return false;
            const values = Object.values(o);
            return values.length === dimension && values.every(v => isFinite(v));
          };
          return o => {
            return isVectorArray.test(o) || isVectorObject(o);
          };
        }
        function getVectorType(value) {
          return Array.isArray(value) ? 'array' : 'object';
        }
        function convert$1(value, format, keys) {
          if (getVectorType(value) === format) return value;
          return format === 'array' ? Object.values(value) : mapArrayToKeys(value, keys);
        }
        const sanitizeVector = (value, settings, previousValue) => {
          const _value = convert$1(value, 'object', settings.keys);
          for (let key in _value) _value[key] = sanitize$3(_value[key], settings[key]);
          const _valueKeys = Object.keys(_value);
          let newValue = {};
          if (_valueKeys.length === settings.keys.length) newValue = _value;else {
            const _previousValue = convert$1(previousValue, 'object', settings.keys);
            if (_valueKeys.length === 1 && settings.locked) {
              const lockedKey = _valueKeys[0];
              const lockedCoordinate = _value[lockedKey];
              const previousLockedCoordinate = _previousValue[lockedKey];
              const ratio = previousLockedCoordinate !== 0 ? lockedCoordinate / previousLockedCoordinate : 1;
              for (let key in _previousValue) {
                if (key === lockedKey) newValue[lockedKey] = lockedCoordinate;else newValue[key] = _previousValue[key] * ratio;
              }
            } else {
              newValue = _objectSpread2(_objectSpread2({}, _previousValue), _value);
            }
          }
          return convert$1(newValue, settings.format, settings.keys);
        };
        const formatVector = (value, settings) => convert$1(value, 'object', settings.keys);
        const isNumberSettings = o => !!o && ('step' in o || 'min' in o || 'max' in o);
        function normalizeVector(value, settings, defaultKeys = []) {
          const {
              lock = false
            } = settings,
            _settings = _objectWithoutProperties$1(settings, _excluded$b);
          const format = Array.isArray(value) ? 'array' : 'object';
          const keys = format === 'object' ? Object.keys(value) : defaultKeys;
          const _value = convert$1(value, 'object', keys);
          const mergedSettings = isNumberSettings(_settings) ? keys.reduce((acc, k) => Object.assign(acc, {
            [k]: _settings
          }), {}) : _settings;
          const numberSettings = normalizeKeyedNumberSettings(_value, mergedSettings);
          return {
            value: format === 'array' ? value : _value,
            settings: _objectSpread2(_objectSpread2({}, numberSettings), {}, {
              format,
              keys,
              lock,
              locked: false
            })
          };
        }
        function getVectorPlugin(defaultKeys) {
          return {
            schema: getVectorSchema(defaultKeys.length),
            normalize: _ref => {
              let {
                  value
                } = _ref,
                settings = _objectWithoutProperties$1(_ref, _excluded2$5);
              return normalizeVector(value, settings, defaultKeys);
            },
            format: (value, settings) => formatVector(value, settings),
            sanitize: (value, settings, prevValue) => sanitizeVector(value, settings, prevValue)
          };
        }
        var r = {
            grad: .9,
            turn: 360,
            rad: 360 / (2 * Math.PI)
          },
          t = function (r) {
            return "string" == typeof r ? r.length > 0 : "number" == typeof r;
          },
          n = function (r, t, n) {
            return void 0 === t && (t = 0), void 0 === n && (n = Math.pow(10, t)), Math.round(n * r) / n + 0;
          },
          e = function (r, t, n) {
            return void 0 === t && (t = 0), void 0 === n && (n = 1), r > n ? n : r > t ? r : t;
          },
          u$1 = function (r) {
            return (r = isFinite(r) ? r % 360 : 0) > 0 ? r : r + 360;
          },
          a = function (r) {
            return {
              r: e(r.r, 0, 255),
              g: e(r.g, 0, 255),
              b: e(r.b, 0, 255),
              a: e(r.a)
            };
          },
          o = function (r) {
            return {
              r: n(r.r),
              g: n(r.g),
              b: n(r.b),
              a: n(r.a, 3)
            };
          },
          i$1 = /^#([0-9a-f]{3,8})$/i,
          s$1 = function (r) {
            var t = r.toString(16);
            return t.length < 2 ? "0" + t : t;
          },
          h$2 = function (r) {
            var t = r.r,
              n = r.g,
              e = r.b,
              u = r.a,
              a = Math.max(t, n, e),
              o = a - Math.min(t, n, e),
              i = o ? a === t ? (n - e) / o : a === n ? 2 + (e - t) / o : 4 + (t - n) / o : 0;
            return {
              h: 60 * (i < 0 ? i + 6 : i),
              s: a ? o / a * 100 : 0,
              v: a / 255 * 100,
              a: u
            };
          },
          b$2 = function (r) {
            var t = r.h,
              n = r.s,
              e = r.v,
              u = r.a;
            t = t / 360 * 6, n /= 100, e /= 100;
            var a = Math.floor(t),
              o = e * (1 - n),
              i = e * (1 - (t - a) * n),
              s = e * (1 - (1 - t + a) * n),
              h = a % 6;
            return {
              r: 255 * [e, i, o, o, s, e][h],
              g: 255 * [s, e, e, i, o, o][h],
              b: 255 * [o, o, s, e, e, i][h],
              a: u
            };
          },
          g$1 = function (r) {
            return {
              h: u$1(r.h),
              s: e(r.s, 0, 100),
              l: e(r.l, 0, 100),
              a: e(r.a)
            };
          },
          d$1 = function (r) {
            return {
              h: n(r.h),
              s: n(r.s),
              l: n(r.l),
              a: n(r.a, 3)
            };
          },
          f$1 = function (r) {
            return b$2((n = (t = r).s, {
              h: t.h,
              s: (n *= ((e = t.l) < 50 ? e : 100 - e) / 100) > 0 ? 2 * n / (e + n) * 100 : 0,
              v: e + n,
              a: t.a
            }));
            var t, n, e;
          },
          c$1 = function (r) {
            return {
              h: (t = h$2(r)).h,
              s: (u = (200 - (n = t.s)) * (e = t.v) / 100) > 0 && u < 200 ? n * e / 100 / (u <= 100 ? u : 200 - u) * 100 : 0,
              l: u / 2,
              a: t.a
            };
            var t, n, e, u;
          },
          l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
          p$1 = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
          v$1 = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
          m$1 = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
          y$2 = {
            string: [[function (r) {
              var t = i$1.exec(r);
              return t ? (r = t[1]).length <= 4 ? {
                r: parseInt(r[0] + r[0], 16),
                g: parseInt(r[1] + r[1], 16),
                b: parseInt(r[2] + r[2], 16),
                a: 4 === r.length ? n(parseInt(r[3] + r[3], 16) / 255, 2) : 1
              } : 6 === r.length || 8 === r.length ? {
                r: parseInt(r.substr(0, 2), 16),
                g: parseInt(r.substr(2, 2), 16),
                b: parseInt(r.substr(4, 2), 16),
                a: 8 === r.length ? n(parseInt(r.substr(6, 2), 16) / 255, 2) : 1
              } : null : null;
            }, "hex"], [function (r) {
              var t = v$1.exec(r) || m$1.exec(r);
              return t ? t[2] !== t[4] || t[4] !== t[6] ? null : a({
                r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                a: void 0 === t[7] ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
              }) : null;
            }, "rgb"], [function (t) {
              var n = l.exec(t) || p$1.exec(t);
              if (!n) return null;
              var e,
                u,
                a = g$1({
                  h: (e = n[1], u = n[2], void 0 === u && (u = "deg"), Number(e) * (r[u] || 1)),
                  s: Number(n[3]),
                  l: Number(n[4]),
                  a: void 0 === n[5] ? 1 : Number(n[5]) / (n[6] ? 100 : 1)
                });
              return f$1(a);
            }, "hsl"]],
            object: [[function (r) {
              var n = r.r,
                e = r.g,
                u = r.b,
                o = r.a,
                i = void 0 === o ? 1 : o;
              return t(n) && t(e) && t(u) ? a({
                r: Number(n),
                g: Number(e),
                b: Number(u),
                a: Number(i)
              }) : null;
            }, "rgb"], [function (r) {
              var n = r.h,
                e = r.s,
                u = r.l,
                a = r.a,
                o = void 0 === a ? 1 : a;
              if (!t(n) || !t(e) || !t(u)) return null;
              var i = g$1({
                h: Number(n),
                s: Number(e),
                l: Number(u),
                a: Number(o)
              });
              return f$1(i);
            }, "hsl"], [function (r) {
              var n = r.h,
                a = r.s,
                o = r.v,
                i = r.a,
                s = void 0 === i ? 1 : i;
              if (!t(n) || !t(a) || !t(o)) return null;
              var h = function (r) {
                return {
                  h: u$1(r.h),
                  s: e(r.s, 0, 100),
                  v: e(r.v, 0, 100),
                  a: e(r.a)
                };
              }({
                h: Number(n),
                s: Number(a),
                v: Number(o),
                a: Number(s)
              });
              return b$2(h);
            }, "hsv"]]
          },
          N$1 = function (r, t) {
            for (var n = 0; n < t.length; n++) {
              var e = t[n][0](r);
              if (e) return [e, t[n][1]];
            }
            return [null, void 0];
          },
          x$1 = function (r) {
            return "string" == typeof r ? N$1(r.trim(), y$2.string) : "object" == typeof r && null !== r ? N$1(r, y$2.object) : [null, void 0];
          },
          I$1 = function (r) {
            return x$1(r)[1];
          },
          M$1 = function (r, t) {
            var n = c$1(r);
            return {
              h: n.h,
              s: e(n.s + 100 * t, 0, 100),
              l: n.l,
              a: n.a
            };
          },
          H$1 = function (r) {
            return (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 / 255;
          },
          $$2 = function (r, t) {
            var n = c$1(r);
            return {
              h: n.h,
              s: n.s,
              l: e(n.l + 100 * t, 0, 100),
              a: n.a
            };
          },
          j = function () {
            function r(r) {
              this.parsed = x$1(r)[0], this.rgba = this.parsed || {
                r: 0,
                g: 0,
                b: 0,
                a: 1
              };
            }
            return r.prototype.isValid = function () {
              return null !== this.parsed;
            }, r.prototype.brightness = function () {
              return n(H$1(this.rgba), 2);
            }, r.prototype.isDark = function () {
              return H$1(this.rgba) < .5;
            }, r.prototype.isLight = function () {
              return H$1(this.rgba) >= .5;
            }, r.prototype.toHex = function () {
              return r = o(this.rgba), t = r.r, e = r.g, u = r.b, i = (a = r.a) < 1 ? s$1(n(255 * a)) : "", "#" + s$1(t) + s$1(e) + s$1(u) + i;
              var r, t, e, u, a, i;
            }, r.prototype.toRgb = function () {
              return o(this.rgba);
            }, r.prototype.toRgbString = function () {
              return r = o(this.rgba), t = r.r, n = r.g, e = r.b, (u = r.a) < 1 ? "rgba(" + t + ", " + n + ", " + e + ", " + u + ")" : "rgb(" + t + ", " + n + ", " + e + ")";
              var r, t, n, e, u;
            }, r.prototype.toHsl = function () {
              return d$1(c$1(this.rgba));
            }, r.prototype.toHslString = function () {
              return r = d$1(c$1(this.rgba)), t = r.h, n = r.s, e = r.l, (u = r.a) < 1 ? "hsla(" + t + ", " + n + "%, " + e + "%, " + u + ")" : "hsl(" + t + ", " + n + "%, " + e + "%)";
              var r, t, n, e, u;
            }, r.prototype.toHsv = function () {
              return r = h$2(this.rgba), {
                h: n(r.h),
                s: n(r.s),
                v: n(r.v),
                a: n(r.a, 3)
              };
              var r;
            }, r.prototype.invert = function () {
              return w$1({
                r: 255 - (r = this.rgba).r,
                g: 255 - r.g,
                b: 255 - r.b,
                a: r.a
              });
              var r;
            }, r.prototype.saturate = function (r) {
              return void 0 === r && (r = .1), w$1(M$1(this.rgba, r));
            }, r.prototype.desaturate = function (r) {
              return void 0 === r && (r = .1), w$1(M$1(this.rgba, -r));
            }, r.prototype.grayscale = function () {
              return w$1(M$1(this.rgba, -1));
            }, r.prototype.lighten = function (r) {
              return void 0 === r && (r = .1), w$1($$2(this.rgba, r));
            }, r.prototype.darken = function (r) {
              return void 0 === r && (r = .1), w$1($$2(this.rgba, -r));
            }, r.prototype.rotate = function (r) {
              return void 0 === r && (r = 15), this.hue(this.hue() + r);
            }, r.prototype.alpha = function (r) {
              return "number" == typeof r ? w$1({
                r: (t = this.rgba).r,
                g: t.g,
                b: t.b,
                a: r
              }) : n(this.rgba.a, 3);
              var t;
            }, r.prototype.hue = function (r) {
              var t = c$1(this.rgba);
              return "number" == typeof r ? w$1({
                h: r,
                s: t.s,
                l: t.l,
                a: t.a
              }) : n(t.h);
            }, r.prototype.isEqual = function (r) {
              return this.toHex() === w$1(r).toHex();
            }, r;
          }(),
          w$1 = function (r) {
            return r instanceof j ? r : new j(r);
          },
          S$2 = [],
          k$2 = function (r) {
            r.forEach(function (r) {
              S$2.indexOf(r) < 0 && (r(j, y$2), S$2.push(r));
            });
          };
        function namesPlugin(e, f) {
          var a = {
              white: "#ffffff",
              bisque: "#ffe4c4",
              blue: "#0000ff",
              cadetblue: "#5f9ea0",
              chartreuse: "#7fff00",
              chocolate: "#d2691e",
              coral: "#ff7f50",
              antiquewhite: "#faebd7",
              aqua: "#00ffff",
              azure: "#f0ffff",
              whitesmoke: "#f5f5f5",
              papayawhip: "#ffefd5",
              plum: "#dda0dd",
              blanchedalmond: "#ffebcd",
              black: "#000000",
              gold: "#ffd700",
              goldenrod: "#daa520",
              gainsboro: "#dcdcdc",
              cornsilk: "#fff8dc",
              cornflowerblue: "#6495ed",
              burlywood: "#deb887",
              aquamarine: "#7fffd4",
              beige: "#f5f5dc",
              crimson: "#dc143c",
              cyan: "#00ffff",
              darkblue: "#00008b",
              darkcyan: "#008b8b",
              darkgoldenrod: "#b8860b",
              darkkhaki: "#bdb76b",
              darkgray: "#a9a9a9",
              darkgreen: "#006400",
              darkgrey: "#a9a9a9",
              peachpuff: "#ffdab9",
              darkmagenta: "#8b008b",
              darkred: "#8b0000",
              darkorchid: "#9932cc",
              darkorange: "#ff8c00",
              darkslateblue: "#483d8b",
              gray: "#808080",
              darkslategray: "#2f4f4f",
              darkslategrey: "#2f4f4f",
              deeppink: "#ff1493",
              deepskyblue: "#00bfff",
              wheat: "#f5deb3",
              firebrick: "#b22222",
              floralwhite: "#fffaf0",
              ghostwhite: "#f8f8ff",
              darkviolet: "#9400d3",
              magenta: "#ff00ff",
              green: "#008000",
              dodgerblue: "#1e90ff",
              grey: "#808080",
              honeydew: "#f0fff0",
              hotpink: "#ff69b4",
              blueviolet: "#8a2be2",
              forestgreen: "#228b22",
              lawngreen: "#7cfc00",
              indianred: "#cd5c5c",
              indigo: "#4b0082",
              fuchsia: "#ff00ff",
              brown: "#a52a2a",
              maroon: "#800000",
              mediumblue: "#0000cd",
              lightcoral: "#f08080",
              darkturquoise: "#00ced1",
              lightcyan: "#e0ffff",
              ivory: "#fffff0",
              lightyellow: "#ffffe0",
              lightsalmon: "#ffa07a",
              lightseagreen: "#20b2aa",
              linen: "#faf0e6",
              mediumaquamarine: "#66cdaa",
              lemonchiffon: "#fffacd",
              lime: "#00ff00",
              khaki: "#f0e68c",
              mediumseagreen: "#3cb371",
              limegreen: "#32cd32",
              mediumspringgreen: "#00fa9a",
              lightskyblue: "#87cefa",
              lightblue: "#add8e6",
              midnightblue: "#191970",
              lightpink: "#ffb6c1",
              mistyrose: "#ffe4e1",
              moccasin: "#ffe4b5",
              mintcream: "#f5fffa",
              lightslategray: "#778899",
              lightslategrey: "#778899",
              navajowhite: "#ffdead",
              navy: "#000080",
              mediumvioletred: "#c71585",
              powderblue: "#b0e0e6",
              palegoldenrod: "#eee8aa",
              oldlace: "#fdf5e6",
              paleturquoise: "#afeeee",
              mediumturquoise: "#48d1cc",
              mediumorchid: "#ba55d3",
              rebeccapurple: "#663399",
              lightsteelblue: "#b0c4de",
              mediumslateblue: "#7b68ee",
              thistle: "#d8bfd8",
              tan: "#d2b48c",
              orchid: "#da70d6",
              mediumpurple: "#9370db",
              purple: "#800080",
              pink: "#ffc0cb",
              skyblue: "#87ceeb",
              springgreen: "#00ff7f",
              palegreen: "#98fb98",
              red: "#ff0000",
              yellow: "#ffff00",
              slateblue: "#6a5acd",
              lavenderblush: "#fff0f5",
              peru: "#cd853f",
              palevioletred: "#db7093",
              violet: "#ee82ee",
              teal: "#008080",
              slategray: "#708090",
              slategrey: "#708090",
              aliceblue: "#f0f8ff",
              darkseagreen: "#8fbc8f",
              darkolivegreen: "#556b2f",
              greenyellow: "#adff2f",
              seagreen: "#2e8b57",
              seashell: "#fff5ee",
              tomato: "#ff6347",
              silver: "#c0c0c0",
              sienna: "#a0522d",
              lavender: "#e6e6fa",
              lightgreen: "#90ee90",
              orange: "#ffa500",
              orangered: "#ff4500",
              steelblue: "#4682b4",
              royalblue: "#4169e1",
              turquoise: "#40e0d0",
              yellowgreen: "#9acd32",
              salmon: "#fa8072",
              saddlebrown: "#8b4513",
              sandybrown: "#f4a460",
              rosybrown: "#bc8f8f",
              darksalmon: "#e9967a",
              lightgoldenrodyellow: "#fafad2",
              snow: "#fffafa",
              lightgrey: "#d3d3d3",
              lightgray: "#d3d3d3",
              dimgray: "#696969",
              dimgrey: "#696969",
              olivedrab: "#6b8e23",
              olive: "#808000"
            },
            r = {};
          for (var d in a) r[a[d]] = d;
          var l = {};
          e.prototype.toName = function (f) {
            if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
            var d,
              i,
              n = r[this.toHex()];
            if (n) return n;
            if (null == f ? void 0 : f.closest) {
              var o = this.toRgb(),
                t = 1 / 0,
                b = "black";
              if (!l.length) for (var c in a) l[c] = new e(a[c]).toRgb();
              for (var g in a) {
                var u = (d = o, i = l[g], Math.pow(d.r - i.r, 2) + Math.pow(d.g - i.g, 2) + Math.pow(d.b - i.b, 2));
                u < t && (t = u, b = g);
              }
              return b;
            }
          };
          f.string.push([function (f) {
            var r = f.toLowerCase(),
              d = "transparent" === r ? "#0000" : a[r];
            return d ? new e(d).toRgb() : null;
          }, "name"]);
        }
        function u() {
          return (u = Object.assign || function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
        }
        function c(e, r) {
          if (null == e) return {};
          var t,
            n,
            o = {},
            a = Object.keys(e);
          for (n = 0; n < a.length; n++) r.indexOf(t = a[n]) >= 0 || (o[t] = e[t]);
          return o;
        }
        function i(e) {
          var t = reactExports.useRef(e),
            n = reactExports.useRef(function (e) {
              t.current && t.current(e);
            });
          return t.current = e, n.current;
        }
        var s = function (e, r, t) {
            return void 0 === r && (r = 0), void 0 === t && (t = 1), e > t ? t : e < r ? r : e;
          },
          f = function (e) {
            return "touches" in e;
          },
          v = function (e) {
            return e && e.ownerDocument.defaultView || self;
          },
          d = function (e, r, t) {
            var n = e.getBoundingClientRect(),
              o = f(r) ? function (e, r) {
                for (var t = 0; t < e.length; t++) if (e[t].identifier === r) return e[t];
                return e[0];
              }(r.touches, t) : r;
            return {
              left: s((o.pageX - (n.left + v(e).pageXOffset)) / n.width),
              top: s((o.pageY - (n.top + v(e).pageYOffset)) / n.height)
            };
          },
          h$1 = function (e) {
            !f(e) && e.preventDefault();
          },
          m = React.memo(function (o) {
            var a = o.onMove,
              l = o.onKey,
              s = c(o, ["onMove", "onKey"]),
              m = reactExports.useRef(null),
              g = i(a),
              p = i(l),
              b = reactExports.useRef(null),
              _ = reactExports.useRef(false),
              x = reactExports.useMemo(function () {
                var e = function (e) {
                    h$1(e), (f(e) ? e.touches.length > 0 : e.buttons > 0) && m.current ? g(d(m.current, e, b.current)) : t(false);
                  },
                  r = function () {
                    return t(false);
                  };
                function t(t) {
                  var n = _.current,
                    o = v(m.current),
                    a = t ? o.addEventListener : o.removeEventListener;
                  a(n ? "touchmove" : "mousemove", e), a(n ? "touchend" : "mouseup", r);
                }
                return [function (e) {
                  var r = e.nativeEvent,
                    n = m.current;
                  if (n && (h$1(r), !function (e, r) {
                    return r && !f(e);
                  }(r, _.current) && n)) {
                    if (f(r)) {
                      _.current = true;
                      var o = r.changedTouches || [];
                      o.length && (b.current = o[0].identifier);
                    }
                    n.focus(), g(d(n, r, b.current)), t(true);
                  }
                }, function (e) {
                  var r = e.which || e.keyCode;
                  r < 37 || r > 40 || (e.preventDefault(), p({
                    left: 39 === r ? .05 : 37 === r ? -0.05 : 0,
                    top: 40 === r ? .05 : 38 === r ? -0.05 : 0
                  }));
                }, t];
              }, [p, g]),
              C = x[0],
              E = x[1],
              H = x[2];
            return reactExports.useEffect(function () {
              return H;
            }, [H]), React.createElement("div", u({}, s, {
              onTouchStart: C,
              onMouseDown: C,
              className: "react-colorful__interactive",
              ref: m,
              onKeyDown: E,
              tabIndex: 0,
              role: "slider"
            }));
          }),
          g = function (e) {
            return e.filter(Boolean).join(" ");
          },
          p = function (r) {
            var t = r.color,
              n = r.left,
              o = r.top,
              a = void 0 === o ? .5 : o,
              l = g(["react-colorful__pointer", r.className]);
            return React.createElement("div", {
              className: l,
              style: {
                top: 100 * a + "%",
                left: 100 * n + "%"
              }
            }, React.createElement("div", {
              className: "react-colorful__pointer-fill",
              style: {
                backgroundColor: t
              }
            }));
          },
          b$1 = function (e, r, t) {
            return void 0 === r && (r = 0), void 0 === t && (t = Math.pow(10, r)), Math.round(t * e) / t;
          },
          y$1 = function (e) {
            var r = e.s,
              t = e.v,
              n = e.a,
              o = (200 - r) * t / 100;
            return {
              h: b$1(e.h),
              s: b$1(o > 0 && o < 200 ? r * t / 100 / (o <= 100 ? o : 200 - o) * 100 : 0),
              l: b$1(o / 2),
              a: b$1(n, 2)
            };
          },
          q$1 = function (e) {
            var r = y$1(e);
            return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
          },
          k$1 = function (e) {
            var r = y$1(e);
            return "hsla(" + r.h + ", " + r.s + "%, " + r.l + "%, " + r.a + ")";
          },
          I = function (e) {
            var r = e.h,
              t = e.s,
              n = e.v,
              o = e.a;
            r = r / 360 * 6, t /= 100, n /= 100;
            var a = Math.floor(r),
              l = n * (1 - t),
              u = n * (1 - (r - a) * t),
              c = n * (1 - (1 - r + a) * t),
              i = a % 6;
            return {
              r: b$1(255 * [n, u, l, l, c, n][i]),
              g: b$1(255 * [c, n, n, u, l, l][i]),
              b: b$1(255 * [l, l, c, n, n, u][i]),
              a: b$1(o, 2)
            };
          },
          L$1 = function (e) {
            var r = e.r,
              t = e.g,
              n = e.b,
              o = e.a,
              a = Math.max(r, t, n),
              l = a - Math.min(r, t, n),
              u = l ? a === r ? (t - n) / l : a === t ? 2 + (n - r) / l : 4 + (r - t) / l : 0;
            return {
              h: b$1(60 * (u < 0 ? u + 6 : u)),
              s: b$1(a ? l / a * 100 : 0),
              v: b$1(a / 255 * 100),
              a: o
            };
          },
          S$1 = React.memo(function (r) {
            var t = r.hue,
              n = r.onChange,
              o = g(["react-colorful__hue", r.className]);
            return React.createElement("div", {
              className: o
            }, React.createElement(m, {
              onMove: function (e) {
                n({
                  h: 360 * e.left
                });
              },
              onKey: function (e) {
                n({
                  h: s(t + 360 * e.left, 0, 360)
                });
              },
              "aria-label": "Hue",
              "aria-valuenow": b$1(t),
              "aria-valuemax": "360",
              "aria-valuemin": "0"
            }, React.createElement(p, {
              className: "react-colorful__hue-pointer",
              left: t / 360,
              color: q$1({
                h: t,
                s: 100,
                v: 100,
                a: 1
              })
            })));
          }),
          T$1 = React.memo(function (r) {
            var t = r.hsva,
              n = r.onChange,
              o = {
                backgroundColor: q$1({
                  h: t.h,
                  s: 100,
                  v: 100,
                  a: 1
                })
              };
            return React.createElement("div", {
              className: "react-colorful__saturation",
              style: o
            }, React.createElement(m, {
              onMove: function (e) {
                n({
                  s: 100 * e.left,
                  v: 100 - 100 * e.top
                });
              },
              onKey: function (e) {
                n({
                  s: s(t.s + 100 * e.left, 0, 100),
                  v: s(t.v - 100 * e.top, 0, 100)
                });
              },
              "aria-label": "Color",
              "aria-valuetext": "Saturation " + b$1(t.s) + "%, Brightness " + b$1(t.v) + "%"
            }, React.createElement(p, {
              className: "react-colorful__saturation-pointer",
              top: 1 - t.v / 100,
              left: t.s / 100,
              color: q$1(t)
            })));
          }),
          F = function (e, r) {
            if (e === r) return true;
            for (var t in e) if (e[t] !== r[t]) return false;
            return true;
          };
        function Y(e, t, l) {
          var u = i(l),
            c = reactExports.useState(function () {
              return e.toHsva(t);
            }),
            s = c[0],
            f = c[1],
            v = reactExports.useRef({
              color: t,
              hsva: s
            });
          reactExports.useEffect(function () {
            if (!e.equal(t, v.current.color)) {
              var r = e.toHsva(t);
              v.current = {
                hsva: r,
                color: t
              }, f(r);
            }
          }, [t, e]), reactExports.useEffect(function () {
            var r;
            F(s, v.current.hsva) || e.equal(r = e.fromHsva(s), v.current.color) || (v.current = {
              hsva: s,
              color: r
            }, u(r));
          }, [s, e, u]);
          var d = reactExports.useCallback(function (e) {
            f(function (r) {
              return Object.assign({}, r, e);
            });
          }, []);
          return [s, d];
        }
        var V = "undefined" != typeof window ? reactExports.useLayoutEffect : reactExports.useEffect,
          $$1 = function () {
            return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
          },
          J = new Map(),
          Q = function (e) {
            V(function () {
              var r = e.current ? e.current.ownerDocument : document;
              if (void 0 !== r && !J.has(r)) {
                var t = r.createElement("style");
                t.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', J.set(r, t);
                var n = $$1();
                n && t.setAttribute("nonce", n), r.head.appendChild(t);
              }
            }, []);
          },
          U = function (t) {
            var n = t.className,
              o = t.colorModel,
              a = t.color,
              l = void 0 === a ? o.defaultColor : a,
              i = t.onChange,
              s = c(t, ["className", "colorModel", "color", "onChange"]),
              f = reactExports.useRef(null);
            Q(f);
            var v = Y(o, l, i),
              d = v[0],
              h = v[1],
              m = g(["react-colorful", n]);
            return React.createElement("div", u({}, s, {
              ref: f,
              className: m
            }), React.createElement(T$1, {
              hsva: d,
              onChange: h
            }), React.createElement(S$1, {
              hue: d.h,
              onChange: h,
              className: "react-colorful__last-control"
            }));
          },
          ee = function (r) {
            var t = r.className,
              n = r.hsva,
              o = r.onChange,
              a = {
                backgroundImage: "linear-gradient(90deg, " + k$1(Object.assign({}, n, {
                  a: 0
                })) + ", " + k$1(Object.assign({}, n, {
                  a: 1
                })) + ")"
              },
              l = g(["react-colorful__alpha", t]),
              u = b$1(100 * n.a);
            return React.createElement("div", {
              className: l
            }, React.createElement("div", {
              className: "react-colorful__alpha-gradient",
              style: a
            }), React.createElement(m, {
              onMove: function (e) {
                o({
                  a: e.left
                });
              },
              onKey: function (e) {
                o({
                  a: s(n.a + e.left)
                });
              },
              "aria-label": "Alpha",
              "aria-valuetext": u + "%",
              "aria-valuenow": u,
              "aria-valuemin": "0",
              "aria-valuemax": "100"
            }, React.createElement(p, {
              className: "react-colorful__alpha-pointer",
              left: n.a,
              color: k$1(n)
            })));
          },
          re = function (t) {
            var n = t.className,
              o = t.colorModel,
              a = t.color,
              l = void 0 === a ? o.defaultColor : a,
              i = t.onChange,
              s = c(t, ["className", "colorModel", "color", "onChange"]),
              f = reactExports.useRef(null);
            Q(f);
            var v = Y(o, l, i),
              d = v[0],
              h = v[1],
              m = g(["react-colorful", n]);
            return React.createElement("div", u({}, s, {
              ref: f,
              className: m
            }), React.createElement(T$1, {
              hsva: d,
              onChange: h
            }), React.createElement(S$1, {
              hue: d.h,
              onChange: h
            }), React.createElement(ee, {
              hsva: d,
              onChange: h,
              className: "react-colorful__last-control"
            }));
          },
          xe = {
            defaultColor: {
              r: 0,
              g: 0,
              b: 0,
              a: 1
            },
            toHsva: L$1,
            fromHsva: I,
            equal: F
          },
          Ce = function (r) {
            return React.createElement(re, u({}, r, {
              colorModel: xe
            }));
          },
          Me = {
            defaultColor: {
              r: 0,
              g: 0,
              b: 0
            },
            toHsva: function (e) {
              return L$1({
                r: e.r,
                g: e.g,
                b: e.b,
                a: 1
              });
            },
            fromHsva: function (e) {
              return {
                r: (r = I(e)).r,
                g: r.g,
                b: r.b
              };
              var r;
            },
            equal: F
          },
          Ne = function (r) {
            return React.createElement(U, u({}, r, {
              colorModel: Me
            }));
          };
        var propTypes = {
          exports: {}
        };

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret_1;
        var hasRequiredReactPropTypesSecret;
        function requireReactPropTypesSecret() {
          if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
          hasRequiredReactPropTypesSecret = 1;
          var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
          ReactPropTypesSecret_1 = ReactPropTypesSecret;
          return ReactPropTypesSecret_1;
        }

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var factoryWithThrowingShims;
        var hasRequiredFactoryWithThrowingShims;
        function requireFactoryWithThrowingShims() {
          if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
          hasRequiredFactoryWithThrowingShims = 1;
          var ReactPropTypesSecret = /*@__PURE__*/requireReactPropTypesSecret();
          function emptyFunction() {}
          function emptyFunctionWithReset() {}
          emptyFunctionWithReset.resetWarningCache = emptyFunction;
          factoryWithThrowingShims = function () {
            function shim(props, propName, componentName, location, propFullName, secret) {
              if (secret === ReactPropTypesSecret) {
                // It is still safe when called from React.
                return;
              }
              var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
              err.name = 'Invariant Violation';
              throw err;
            }
            shim.isRequired = shim;
            function getShim() {
              return shim;
            } // Important!
            // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
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
            propTypes.exports = /*@__PURE__*/requireFactoryWithThrowingShims()();
          }
          return propTypes.exports;
        }
        var propTypesExports = /*@__PURE__*/requirePropTypes();
        const PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

        /******************************************************************************
        Copyright (c) Microsoft Corporation.
         Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.
         THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
        /* global Reflect, Promise, SuppressedError, Symbol, Iterator */

        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }
        function __generator(thisArg, body) {
          var _ = {
              label: 0,
              sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: []
            },
            f,
            y,
            t,
            g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
          return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
          }), g;
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: true
            };
          }
        }
        function __read(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
            r,
            ar = [],
            e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
          } catch (error) {
            e = {
              error: error
            };
          } finally {
            try {
              if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return ar;
        }

        /** @deprecated */
        function __spread() {
          for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
          return ar;
        }
        typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
          var e = new Error(message);
          return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
        };
        var COMMON_MIME_TYPES = new Map([
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
        ['aac', 'audio/aac'], ['abw', 'application/x-abiword'], ['arc', 'application/x-freearc'], ['avif', 'image/avif'], ['avi', 'video/x-msvideo'], ['azw', 'application/vnd.amazon.ebook'], ['bin', 'application/octet-stream'], ['bmp', 'image/bmp'], ['bz', 'application/x-bzip'], ['bz2', 'application/x-bzip2'], ['cda', 'application/x-cdf'], ['csh', 'application/x-csh'], ['css', 'text/css'], ['csv', 'text/csv'], ['doc', 'application/msword'], ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'], ['eot', 'application/vnd.ms-fontobject'], ['epub', 'application/epub+zip'], ['gz', 'application/gzip'], ['gif', 'image/gif'], ['heic', 'image/heic'], ['heif', 'image/heif'], ['htm', 'text/html'], ['html', 'text/html'], ['ico', 'image/vnd.microsoft.icon'], ['ics', 'text/calendar'], ['jar', 'application/java-archive'], ['jpeg', 'image/jpeg'], ['jpg', 'image/jpeg'], ['js', 'text/javascript'], ['json', 'application/json'], ['jsonld', 'application/ld+json'], ['mid', 'audio/midi'], ['midi', 'audio/midi'], ['mjs', 'text/javascript'], ['mp3', 'audio/mpeg'], ['mp4', 'video/mp4'], ['mpeg', 'video/mpeg'], ['mpkg', 'application/vnd.apple.installer+xml'], ['odp', 'application/vnd.oasis.opendocument.presentation'], ['ods', 'application/vnd.oasis.opendocument.spreadsheet'], ['odt', 'application/vnd.oasis.opendocument.text'], ['oga', 'audio/ogg'], ['ogv', 'video/ogg'], ['ogx', 'application/ogg'], ['opus', 'audio/opus'], ['otf', 'font/otf'], ['png', 'image/png'], ['pdf', 'application/pdf'], ['php', 'application/x-httpd-php'], ['ppt', 'application/vnd.ms-powerpoint'], ['pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'], ['rar', 'application/vnd.rar'], ['rtf', 'application/rtf'], ['sh', 'application/x-sh'], ['svg', 'image/svg+xml'], ['swf', 'application/x-shockwave-flash'], ['tar', 'application/x-tar'], ['tif', 'image/tiff'], ['tiff', 'image/tiff'], ['ts', 'video/mp2t'], ['ttf', 'font/ttf'], ['txt', 'text/plain'], ['vsd', 'application/vnd.visio'], ['wav', 'audio/wav'], ['weba', 'audio/webm'], ['webm', 'video/webm'], ['webp', 'image/webp'], ['woff', 'font/woff'], ['woff2', 'font/woff2'], ['xhtml', 'application/xhtml+xml'], ['xls', 'application/vnd.ms-excel'], ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'], ['xml', 'application/xml'], ['xul', 'application/vnd.mozilla.xul+xml'], ['zip', 'application/zip'], ['7z', 'application/x-7z-compressed'],
        // Others
        ['mkv', 'video/x-matroska'], ['mov', 'video/quicktime'], ['msg', 'application/vnd.ms-outlook']]);
        function toFileWithPath(file, path) {
          var f = withMimeType(file);
          if (typeof f.path !== 'string') {
            // on electron, path is already set to the absolute path
            var webkitRelativePath = file.webkitRelativePath;
            Object.defineProperty(f, 'path', {
              value: typeof path === 'string' ? path
              // If <input webkitdirectory> is set,
              // the File will have a {webkitRelativePath} property
              // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
              : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
              writable: false,
              configurable: false,
              enumerable: true
            });
          }
          return f;
        }
        function withMimeType(file) {
          var name = file.name;
          var hasExtension = name && name.lastIndexOf('.') !== -1;
          if (hasExtension && !file.type) {
            var ext = name.split('.').pop().toLowerCase();
            var type = COMMON_MIME_TYPES.get(ext);
            if (type) {
              Object.defineProperty(file, 'type', {
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
        '.DS_Store', 'Thumbs.db' // Windows
        ];
        /**
         * Convert a DragEvent's DataTrasfer object to a list of File objects
         * NOTE: If some of the items are folders,
         * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
         *
         * EXPERIMENTAL: A list of https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle objects can also be passed as an arg
         * and a list of File objects will be returned.
         *
         * @param evt
         */
        function fromEvent(evt) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              if (isObject(evt) && isDataTransfer(evt)) {
                return [2 /*return*/, getDataTransferFiles(evt.dataTransfer, evt.type)];
              } else if (isChangeEvt(evt)) {
                return [2 /*return*/, getInputFiles(evt)];
              } else if (Array.isArray(evt) && evt.every(function (item) {
                return 'getFile' in item && typeof item.getFile === 'function';
              })) {
                return [2 /*return*/, getFsHandleFiles(evt)];
              }
              return [2 /*return*/, []];
            });
          });
        }
        function isDataTransfer(value) {
          return isObject(value.dataTransfer);
        }
        function isChangeEvt(value) {
          return isObject(value) && isObject(value.target);
        }
        function isObject(v) {
          return typeof v === 'object' && v !== null;
        }
        function getInputFiles(evt) {
          return fromList(evt.target.files).map(function (file) {
            return toFileWithPath(file);
          });
        }
        // Ee expect each handle to be https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
        function getFsHandleFiles(handles) {
          return __awaiter(this, void 0, void 0, function () {
            var files;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4 /*yield*/, Promise.all(handles.map(function (h) {
                    return h.getFile();
                  }))];
                case 1:
                  files = _a.sent();
                  return [2 /*return*/, files.map(function (file) {
                    return toFileWithPath(file);
                  })];
              }
            });
          });
        }
        function getDataTransferFiles(dt, type) {
          return __awaiter(this, void 0, void 0, function () {
            var items, files;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (dt === null) {
                    return [2 /*return*/, []];
                  }
                  if (!dt.items) return [3 /*break*/, 2];
                  items = fromList(dt.items).filter(function (item) {
                    return item.kind === 'file';
                  });
                  // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                  // only 'dragstart' and 'drop' has access to the data (source node)
                  if (type !== 'drop') {
                    return [2 /*return*/, items];
                  }
                  return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                case 1:
                  files = _a.sent();
                  return [2 /*return*/, noIgnoredFiles(flatten(files))];
                case 2:
                  return [2 /*return*/, noIgnoredFiles(fromList(dt.files).map(function (file) {
                    return toFileWithPath(file);
                  }))];
              }
            });
          });
        }
        function noIgnoredFiles(files) {
          return files.filter(function (file) {
            return FILES_TO_IGNORE.indexOf(file.name) === -1;
          });
        }
        // IE11 does not support Array.from()
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
        // https://developer.mozilla.org/en-US/docs/Web/API/FileList
        // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
        function fromList(items) {
          if (items === null) {
            return [];
          }
          var files = [];
          // tslint:disable: prefer-for-of
          for (var i = 0; i < items.length; i++) {
            var file = items[i];
            files.push(file);
          }
          return files;
        }
        // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
        function toFilePromises(item) {
          if (typeof item.webkitGetAsEntry !== 'function') {
            return fromDataTransferItem(item);
          }
          var entry = item.webkitGetAsEntry();
          // Safari supports dropping an image node from a different window and can be retrieved using
          // the DataTransferItem.getAsFile() API
          // NOTE: FileSystemEntry.file() throws if trying to get the file
          if (entry && entry.isDirectory) {
            return fromDirEntry(entry);
          }
          return fromDataTransferItem(item);
        }
        function flatten(items) {
          return items.reduce(function (acc, files) {
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
        // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
        function fromEntry(entry) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
            });
          });
        }
        // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
        function fromDirEntry(entry) {
          var reader = entry.createReader();
          return new Promise(function (resolve, reject) {
            var entries = [];
            function readEntries() {
              var _this = this;
              // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
              // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
              reader.readEntries(function (batch) {
                return __awaiter(_this, void 0, void 0, function () {
                  var files, err_1, items;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        if (!!batch.length) return [3 /*break*/, 5];
                        _a.label = 1;
                      case 1:
                        _a.trys.push([1, 3,, 4]);
                        return [4 /*yield*/, Promise.all(entries)];
                      case 2:
                        files = _a.sent();
                        resolve(files);
                        return [3 /*break*/, 4];
                      case 3:
                        err_1 = _a.sent();
                        reject(err_1);
                        return [3 /*break*/, 4];
                      case 4:
                        return [3 /*break*/, 6];
                      case 5:
                        items = Promise.all(batch.map(fromEntry));
                        entries.push(items);
                        // Continue reading
                        readEntries();
                        _a.label = 6;
                      case 6:
                        return [2 /*return*/];
                    }
                  });
                });
              }, function (err) {
                reject(err);
              });
            }
            readEntries();
          });
        }
        // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
        function fromFileEntry(entry) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              return [2 /*return*/, new Promise(function (resolve, reject) {
                entry.file(function (file) {
                  var fwp = toFileWithPath(file, entry.fullPath);
                  resolve(fwp);
                }, function (err) {
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
          es.default = function (file, acceptedFiles) {
            if (file && acceptedFiles) {
              var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
              if (acceptedFilesArray.length === 0) {
                return true;
              }
              var fileName = file.name || '';
              var mimeType = (file.type || '').toLowerCase();
              var baseMimeType = mimeType.replace(/\/.*$/, '');
              return acceptedFilesArray.some(function (type) {
                var validType = type.trim().toLowerCase();
                if (validType.charAt(0) === '.') {
                  return fileName.toLowerCase().endsWith(validType);
                } else if (validType.endsWith('/*')) {
                  // This is something like a image/* mime type
                  return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
              });
            }
            return true;
          };
          return es;
        }
        var esExports = requireEs();
        const accepts = /*@__PURE__*/getDefaultExportFromCjs(esExports);
        function ownKeys$1(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread$1(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys$1(Object(source), true).forEach(function (key) {
              _defineProperty$1(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _defineProperty$1(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _slicedToArray$1(arr, i) {
          return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
        }
        function _nonIterableRest$1() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray$1(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
        }
        function _arrayLikeToArray$1(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function _iterableToArrayLimit$1(arr, i) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
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
        var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr(accept) {
          accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
          var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
          return {
            code: FILE_INVALID_TYPE,
            message: "File type must be ".concat(messageSuffix)
          };
        };
        var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
          return {
            code: FILE_TOO_LARGE,
            message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
          };
        };
        var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
          return {
            code: FILE_TOO_SMALL,
            message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
          };
        };
        var TOO_MANY_FILES_REJECTION = {
          code: TOO_MANY_FILES,
          message: "Too many files"
        }; // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
        // that MIME type will always be accepted

        function fileAccepted(file, accept) {
          var isAcceptable = file.type === "application/x-moz-file" || accepts(file, accept);
          return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
        }
        function fileMatchSize(file, minSize, maxSize) {
          if (isDefined(file.size)) {
            if (isDefined(minSize) && isDefined(maxSize)) {
              if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
              if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
            } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
          }
          return [true, null];
        }
        function isDefined(value) {
          return value !== undefined && value !== null;
        }
        function allFilesAccepted(_ref) {
          var files = _ref.files,
            accept = _ref.accept,
            minSize = _ref.minSize,
            maxSize = _ref.maxSize,
            multiple = _ref.multiple,
            maxFiles = _ref.maxFiles;
          if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
            return false;
          }
          return files.every(function (file) {
            var _fileAccepted = fileAccepted(file, accept),
              _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1),
              accepted = _fileAccepted2[0];
            var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
              _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1),
              sizeMatch = _fileMatchSize2[0];
            return accepted && sizeMatch;
          });
        } // React's synthetic events has event.isPropagationStopped,
        // but to remain compatibility with other libs (Preact) fall back
        // to check event.cancelBubble

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
          } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
          // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file

          return Array.prototype.some.call(event.dataTransfer.types, function (type) {
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
          var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
          return isIe(userAgent) || isEdge(userAgent);
        }
        /**
         * This is intended to be used to compose event handlers
         * They are executed in order until one of them calls `event.isPropagationStopped()`.
         * Note that the check is done on the first invoke too,
         * meaning that if propagation was stopped before invoking the fns,
         * no handlers will be executed.
         *
         * @param {Function} fns the event hanlder functions
         * @return {Function} the event handler to add to an element
         */

        function composeEventHandlers() {
          for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
            fns[_key] = arguments[_key];
          }
          return function (event) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            return fns.some(function (fn) {
              if (!isPropagationStopped(event) && fn) {
                fn.apply(void 0, [event].concat(args));
              }
              return isPropagationStopped(event);
            });
          };
        }
        /**
         * canUseFileSystemAccessAPI checks if the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
         * is supported by the browser.
         * @returns {boolean}
         */

        function canUseFileSystemAccessAPI() {
          return "showOpenFilePicker" in window;
        }
        /**
         * filePickerOptionsTypes returns the {types} option for https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
         * based on the accept attr (see https://github.com/react-dropzone/attr-accept)
         * E.g: converts ['image/*', 'text/*'] to {'image/*': [], 'text/*': []}
         * @param {string|string[]} accept
         */

        function filePickerOptionsTypes(accept) {
          accept = typeof accept === "string" ? accept.split(",") : accept;
          return [{
            description: "everything",
            // TODO: Need to handle filtering more elegantly than this!
            accept: Array.isArray(accept) ?
            // Accept just MIME types as per spec
            // NOTE: accept can be https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
            accept.filter(function (item) {
              return item === "audio/*" || item === "video/*" || item === "image/*" || item === "text/*" || /\w+\/[-+.\w]+/g.test(item);
            }).reduce(function (a, b) {
              return _objectSpread$1(_objectSpread$1({}, a), {}, _defineProperty$1({}, b, []));
            }, {}) : {}
          }];
        }
        /**
         * Check if v is an exception caused by aborting a request (e.g window.showOpenFilePicker()).
         *
         * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
         * @param {any} v
         * @returns {boolean} True if v is an abort exception.
         */

        function isAbort(v) {
          return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
        }
        /**
         * Check if v is a security error.
         *
         * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
         * @param {any} v
         * @returns {boolean} True if v is a security error.
         */

        function isSecurityError(v) {
          return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
        }
        var _excluded = ["children"],
          _excluded2$2 = ["open"],
          _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
          _excluded4 = ["refKey", "onChange", "onClick"];
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
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function _iterableToArrayLimit(arr, i) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
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
            enumerableOnly && (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
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
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }
        /**
         * Convenience wrapper component for the `useDropzone` hook
         *
         * ```jsx
         * <Dropzone>
         *   {({getRootProps, getInputProps}) => (
         *     <div {...getRootProps()}>
         *       <input {...getInputProps()} />
         *       <p>Drag 'n' drop some files here, or click to select files</p>
         *     </div>
         *   )}
         * </Dropzone>
         * ```
         */

        var Dropzone = /*#__PURE__*/reactExports.forwardRef(function (_ref, ref) {
          var children = _ref.children,
            params = _objectWithoutProperties(_ref, _excluded);
          var _useDropzone = useDropzone(params),
            open = _useDropzone.open,
            props = _objectWithoutProperties(_useDropzone, _excluded2$2);
          reactExports.useImperativeHandle(ref, function () {
            return {
              open: open
            };
          }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

          return /*#__PURE__*/React.createElement(reactExports.Fragment, null, children(_objectSpread(_objectSpread({}, props), {}, {
            open: open
          })));
        });
        Dropzone.displayName = "Dropzone"; // Add default props for react-docgen

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
        /**
         * A function that is invoked for the `dragenter`,
         * `dragover` and `dragleave` events.
         * It is not invoked if the items are not files (such as link, text, etc.).
         *
         * @callback dragCb
         * @param {DragEvent} event
         */

        /**
         * A function that is invoked for the `drop` or input change event.
         * It is not invoked if the items are not files (such as link, text, etc.).
         *
         * @callback dropCb
         * @param {File[]} acceptedFiles List of accepted files
         * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
         * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
         */

        /**
         * A function that is invoked for the `drop` or input change event.
         * It is not invoked if the items are files (such as link, text, etc.).
         *
         * @callback dropAcceptedCb
         * @param {File[]} files List of accepted files that meet the given criteria
         * (`accept`, `multiple`, `minSize`, `maxSize`)
         * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
         */

        /**
         * A function that is invoked for the `drop` or input change event.
         *
         * @callback dropRejectedCb
         * @param {File[]} files List of rejected files that do not meet the given criteria
         * (`accept`, `multiple`, `minSize`, `maxSize`)
         * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
         */

        /**
         * A function that is used aggregate files,
         * in a asynchronous fashion, from drag or input change events.
         *
         * @callback getFilesFromEvent
         * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
         * @returns {(File[]|Promise<File[]>)}
         */

        /**
         * An object with the current dropzone state and some helper functions.
         *
         * @typedef {object} DropzoneState
         * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
         * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
         * @property {Function} open Open the native file selection dialog
         * @property {boolean} isFocused Dropzone area is in focus
         * @property {boolean} isFileDialogActive File dialog is opened
         * @property {boolean} isDragActive Active drag is in progress
         * @property {boolean} isDragAccept Dragged files are accepted
         * @property {boolean} isDragReject Some dragged files are rejected
         * @property {File[]} draggedFiles Files in active drag
         * @property {File[]} acceptedFiles Accepted files
         * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
         */

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
        /**
         * A React hook that creates a drag 'n' drop area.
         *
         * ```jsx
         * function MyDropzone(props) {
         *   const {getRootProps, getInputProps} = useDropzone({
         *     onDrop: acceptedFiles => {
         *       // do something with the File objects, e.g. upload to some server
         *     }
         *   });
         *   return (
         *     <div {...getRootProps()}>
         *       <input {...getInputProps()} />
         *       <p>Drag and drop some files here, or click to select files</p>
         *     </div>
         *   )
         * }
         * ```
         *
         * @function useDropzone
         *
         * @param {object} props
         * @param {string|string[]} [props.accept] Set accepted file types.
         * See https://github.com/okonet/attr-accept for more information.
         * Keep in mind that mime type determination is not reliable across platforms. CSV files,
         * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
         * Windows. In some cases there might not be a mime type set at all.
         * See: https://github.com/react-dropzone/react-dropzone/issues/276
         * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
         * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
         * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
         * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
         * Note that it also stops tracking the focus state.
         * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
         * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
         * @param {number} [props.minSize=0] Minimum file size (in bytes)
         * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
         * @param {boolean} [props.disabled=false] Enable/disable the dropzone
         * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
         * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
         * @param {boolean} [props.useFsAccessApi] Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
         * to open the file picker instead of using an `<input type="file">` click event.
         * @param {Function} [props.onFileDialogOpen] Cb for when opening the file dialog
         * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
         * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
         * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
         * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
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
         * @param {dropAcceptedCb} [props.onDropAccepted]
         * @param {dropRejectedCb} [props.onDropRejected]
         *
         * @returns {DropzoneState}
         */

        function useDropzone() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _defaultProps$options = _objectSpread(_objectSpread({}, defaultProps), options),
            accept = _defaultProps$options.accept,
            disabled = _defaultProps$options.disabled,
            getFilesFromEvent = _defaultProps$options.getFilesFromEvent,
            maxSize = _defaultProps$options.maxSize,
            minSize = _defaultProps$options.minSize,
            multiple = _defaultProps$options.multiple,
            maxFiles = _defaultProps$options.maxFiles,
            onDragEnter = _defaultProps$options.onDragEnter,
            onDragLeave = _defaultProps$options.onDragLeave,
            onDragOver = _defaultProps$options.onDragOver,
            onDrop = _defaultProps$options.onDrop,
            onDropAccepted = _defaultProps$options.onDropAccepted,
            onDropRejected = _defaultProps$options.onDropRejected,
            onFileDialogCancel = _defaultProps$options.onFileDialogCancel,
            onFileDialogOpen = _defaultProps$options.onFileDialogOpen,
            useFsAccessApi = _defaultProps$options.useFsAccessApi,
            preventDropOnDocument = _defaultProps$options.preventDropOnDocument,
            noClick = _defaultProps$options.noClick,
            noKeyboard = _defaultProps$options.noKeyboard,
            noDrag = _defaultProps$options.noDrag,
            noDragEventsBubbling = _defaultProps$options.noDragEventsBubbling,
            validator = _defaultProps$options.validator;
          var onFileDialogOpenCb = reactExports.useMemo(function () {
            return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
          }, [onFileDialogOpen]);
          var onFileDialogCancelCb = reactExports.useMemo(function () {
            return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
          }, [onFileDialogCancel]);
          var rootRef = reactExports.useRef(null);
          var inputRef = reactExports.useRef(null);
          var _useReducer = reactExports.useReducer(reducer, initialState),
            _useReducer2 = _slicedToArray(_useReducer, 2),
            state = _useReducer2[0],
            dispatch = _useReducer2[1];
          var isFocused = state.isFocused,
            isFileDialogActive = state.isFileDialogActive,
            draggedFiles = state.draggedFiles;
          var fsAccessApiWorksRef = reactExports.useRef(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI()); // Update file dialog active state when the window is focused on

          var onWindowFocus = function onWindowFocus() {
            // Execute the timeout only if the file dialog is opened in the browser
            if (!fsAccessApiWorksRef.current && isFileDialogActive) {
              setTimeout(function () {
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
          reactExports.useEffect(function () {
            window.addEventListener("focus", onWindowFocus, false);
            return function () {
              window.removeEventListener("focus", onWindowFocus, false);
            };
          }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
          var dragTargetsRef = reactExports.useRef([]);
          var onDocumentDrop = function onDocumentDrop(event) {
            if (rootRef.current && rootRef.current.contains(event.target)) {
              // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
              return;
            }
            event.preventDefault();
            dragTargetsRef.current = [];
          };
          reactExports.useEffect(function () {
            if (preventDropOnDocument) {
              document.addEventListener("dragover", onDocumentDragOver, false);
              document.addEventListener("drop", onDocumentDrop, false);
            }
            return function () {
              if (preventDropOnDocument) {
                document.removeEventListener("dragover", onDocumentDragOver);
                document.removeEventListener("drop", onDocumentDrop);
              }
            };
          }, [rootRef, preventDropOnDocument]);
          var onDragEnterCb = reactExports.useCallback(function (event) {
            event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

            event.persist();
            stopPropagation(event);
            dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
            if (isEvtWithFiles(event)) {
              Promise.resolve(getFilesFromEvent(event)).then(function (draggedFiles) {
                if (isPropagationStopped(event) && !noDragEventsBubbling) {
                  return;
                }
                dispatch({
                  draggedFiles: draggedFiles,
                  isDragActive: true,
                  type: "setDraggedFiles"
                });
                if (onDragEnter) {
                  onDragEnter(event);
                }
              });
            }
          }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
          var onDragOverCb = reactExports.useCallback(function (event) {
            event.preventDefault();
            event.persist();
            stopPropagation(event);
            var hasFiles = isEvtWithFiles(event);
            if (hasFiles && event.dataTransfer) {
              try {
                event.dataTransfer.dropEffect = "copy";
              } catch (_unused) {}
              /* eslint-disable-line no-empty */
            }
            if (hasFiles && onDragOver) {
              onDragOver(event);
            }
            return false;
          }, [onDragOver, noDragEventsBubbling]);
          var onDragLeaveCb = reactExports.useCallback(function (event) {
            event.preventDefault();
            event.persist();
            stopPropagation(event); // Only deactivate once the dropzone and all children have been left

            var targets = dragTargetsRef.current.filter(function (target) {
              return rootRef.current && rootRef.current.contains(target);
            }); // Make sure to remove a target present multiple times only once
            // (Firefox may fire dragenter/dragleave multiple times on the same element)

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
          var setFiles = reactExports.useCallback(function (files, event) {
            var acceptedFiles = [];
            var fileRejections = [];
            files.forEach(function (file) {
              var _fileAccepted = fileAccepted(file, accept),
                _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
                accepted = _fileAccepted2[0],
                acceptError = _fileAccepted2[1];
              var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
                _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
                sizeMatch = _fileMatchSize2[0],
                sizeError = _fileMatchSize2[1];
              var customErrors = validator ? validator(file) : null;
              if (accepted && sizeMatch && !customErrors) {
                acceptedFiles.push(file);
              } else {
                var errors = [acceptError, sizeError];
                if (customErrors) {
                  errors = errors.concat(customErrors);
                }
                fileRejections.push({
                  file: file,
                  errors: errors.filter(function (e) {
                    return e;
                  })
                });
              }
            });
            if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
              // Reject everything and empty accepted files
              acceptedFiles.forEach(function (file) {
                fileRejections.push({
                  file: file,
                  errors: [TOO_MANY_FILES_REJECTION]
                });
              });
              acceptedFiles.splice(0);
            }
            dispatch({
              acceptedFiles: acceptedFiles,
              fileRejections: fileRejections,
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
          var onDropCb = reactExports.useCallback(function (event) {
            event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

            event.persist();
            stopPropagation(event);
            dragTargetsRef.current = [];
            if (isEvtWithFiles(event)) {
              Promise.resolve(getFilesFromEvent(event)).then(function (files) {
                if (isPropagationStopped(event) && !noDragEventsBubbling) {
                  return;
                }
                setFiles(files, event);
              });
            }
            dispatch({
              type: "reset"
            });
          }, [getFilesFromEvent, setFiles, noDragEventsBubbling]); // Fn for opening the file dialog programmatically

          var openFileDialog = reactExports.useCallback(function () {
            // No point to use FS access APIs if context is not secure
            // https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#feature_detection
            if (fsAccessApiWorksRef.current) {
              dispatch({
                type: "openDialog"
              });
              onFileDialogOpenCb(); // https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker

              var opts = {
                multiple: multiple,
                types: filePickerOptionsTypes(accept)
              };
              window.showOpenFilePicker(opts).then(function (handles) {
                return getFilesFromEvent(handles);
              }).then(function (files) {
                setFiles(files, null);
                dispatch({
                  type: "closeDialog"
                });
              }).catch(function (e) {
                // AbortError means the user canceled
                if (isAbort(e)) {
                  onFileDialogCancelCb(e);
                  dispatch({
                    type: "closeDialog"
                  });
                } else if (isSecurityError(e)) {
                  fsAccessApiWorksRef.current = false; // CORS, so cannot use this API
                  // Try using the input

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
          }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, accept, multiple]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

          var onKeyDownCb = reactExports.useCallback(function (event) {
            // Ignore keyboard events bubbling up the DOM tree
            if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
              return;
            }
            if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
              event.preventDefault();
              openFileDialog();
            }
          }, [rootRef, openFileDialog]); // Update focus state for the dropzone

          var onFocusCb = reactExports.useCallback(function () {
            dispatch({
              type: "focus"
            });
          }, []);
          var onBlurCb = reactExports.useCallback(function () {
            dispatch({
              type: "blur"
            });
          }, []); // Cb to open the file dialog when click occurs on the dropzone

          var onClickCb = reactExports.useCallback(function () {
            if (noClick) {
              return;
            } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
            // to ensure React can handle state changes
            // See: https://github.com/react-dropzone/react-dropzone/issues/450

            if (isIeOrEdge()) {
              setTimeout(openFileDialog, 0);
            } else {
              openFileDialog();
            }
          }, [noClick, openFileDialog]);
          var composeHandler = function composeHandler(fn) {
            return disabled ? null : fn;
          };
          var composeKeyboardHandler = function composeKeyboardHandler(fn) {
            return noKeyboard ? null : composeHandler(fn);
          };
          var composeDragHandler = function composeDragHandler(fn) {
            return noDrag ? null : composeHandler(fn);
          };
          var stopPropagation = function stopPropagation(event) {
            if (noDragEventsBubbling) {
              event.stopPropagation();
            }
          };
          var getRootProps = reactExports.useMemo(function () {
            return function () {
              var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$refKey = _ref2.refKey,
                refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey,
                role = _ref2.role,
                onKeyDown = _ref2.onKeyDown,
                onFocus = _ref2.onFocus,
                onBlur = _ref2.onBlur,
                onClick = _ref2.onClick,
                onDragEnter = _ref2.onDragEnter,
                onDragOver = _ref2.onDragOver,
                onDragLeave = _ref2.onDragLeave,
                onDrop = _ref2.onDrop,
                rest = _objectWithoutProperties(_ref2, _excluded3);
              return _objectSpread(_objectSpread(_defineProperty({
                onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
                onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
                onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
                onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
                onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
                onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
                onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
                onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb)),
                role: typeof role === "string" && role !== "" ? role : "button"
              }, refKey, rootRef), !disabled && !noKeyboard ? {
                tabIndex: 0
              } : {}), rest);
            };
          }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
          var onInputElementClick = reactExports.useCallback(function (event) {
            event.stopPropagation();
          }, []);
          var getInputProps = reactExports.useMemo(function () {
            return function () {
              var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref3$refKey = _ref3.refKey,
                refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey,
                onChange = _ref3.onChange,
                onClick = _ref3.onClick,
                rest = _objectWithoutProperties(_ref3, _excluded4);
              var inputProps = _defineProperty({
                accept: accept,
                multiple: multiple,
                type: "file",
                style: {
                  display: "none"
                },
                onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
                onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
                tabIndex: -1
              }, refKey, inputRef);
              return _objectSpread(_objectSpread({}, inputProps), rest);
            };
          }, [inputRef, accept, multiple, onDropCb, disabled]);
          var fileCount = draggedFiles.length;
          var isDragAccept = fileCount > 0 && allFilesAccepted({
            files: draggedFiles,
            accept: accept,
            minSize: minSize,
            maxSize: maxSize,
            multiple: multiple,
            maxFiles: maxFiles
          });
          var isDragReject = fileCount > 0 && !isDragAccept;
          return _objectSpread(_objectSpread({}, state), {}, {
            isDragAccept: isDragAccept,
            isDragReject: isDragReject,
            isFocused: isFocused && !disabled,
            getRootProps: getRootProps,
            getInputProps: getInputProps,
            rootRef: rootRef,
            inputRef: inputRef,
            open: composeHandler(openFileDialog)
          });
        }
        function reducer(state, action) {
          /* istanbul ignore next */
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
              /* eslint no-case-declarations: 0 */
              var isDragActive = action.isDragActive,
                draggedFiles = action.draggedFiles;
              return _objectSpread(_objectSpread({}, state), {}, {
                draggedFiles: draggedFiles,
                isDragActive: isDragActive
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
        function noop() {}
        function createStore(createState) {
          let state;
          const listeners = /* @__PURE__ */new Set();
          const setState = (partial, replace) => {
            const nextState = typeof partial === "function" ? partial(state) : partial;
            if (nextState !== state) {
              const previousState = state;
              state = replace ? nextState : Object.assign({}, state, nextState);
              listeners.forEach(listener => listener(state, previousState));
            }
          };
          const getState = () => state;
          const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is) => {
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
              return subscribeWithSelector(listener, selector, equalityFn);
            }
            listeners.add(listener);
            return () => listeners.delete(listener);
          };
          const destroy = () => listeners.clear();
          const api = {
            setState,
            getState,
            subscribe,
            destroy
          };
          state = createState(setState, getState, api);
          return api;
        }
        const isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
        const useIsomorphicLayoutEffect = isSSR ? reactExports.useEffect : reactExports.useLayoutEffect;
        function create(createState) {
          const api = typeof createState === "function" ? createStore(createState) : createState;
          const useStore = (selector = api.getState, equalityFn = Object.is) => {
            const [, forceUpdate] = reactExports.useReducer(c => c + 1, 0);
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
          useStore[Symbol.iterator] = function () {
            console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
            const items = [useStore, api];
            return {
              next() {
                const done = items.length <= 0;
                return {
                  value: items.shift(),
                  done
                };
              }
            };
          };
          return useStore;
        }
        ({
          "LEGACY": true
        });
        const subscribeWithSelector = fn => (set, get, api) => {
          const origSubscribe = api.subscribe;
          api.subscribe = (selector, optListener, options) => {
            let listener = selector;
            if (optListener) {
              const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
              let currentSlice = selector(api.getState());
              listener = state => {
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
          const initialState = fn(set, get, api);
          return initialState;
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
          isobject = function isObject(val) {
            return val != null && typeof val === 'object' && Array.isArray(val) === false;
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
          var isObject = requireIsobject();
          function isObjectObject(o) {
            return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
          }
          isPlainObject = function isPlainObject(o) {
            var ctor, prot;
            if (isObjectObject(o) === false) return false;

            // If has modified constructor
            ctor = o.constructor;
            if (typeof ctor !== 'function') return false;

            // If has modified prototype
            prot = ctor.prototype;
            if (isObjectObject(prot) === false) return false;

            // If constructor does not have an Object-specific method
            if (prot.hasOwnProperty('isPrototypeOf') === false) {
              return false;
            }

            // Most likely a plain Object
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
          var isPlainObject = requireIsPlainObject();
          isExtendable$1 = function isExtendable(val) {
            return isPlainObject(val) || typeof val === 'function' || Array.isArray(val);
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
          forIn = function forIn(obj, fn, thisArg) {
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
          var isExtendable = requireIsExtendable$1();
          var forIn = requireForIn();
          function mixinDeep(target, objects) {
            var len = arguments.length,
              i = 0;
            while (++i < len) {
              var obj = arguments[i];
              if (isObject(obj)) {
                forIn(obj, copy, target);
              }
            }
            return target;
          }

          /**
           * Copy properties from the source object to the
           * target object.
           *
           * @param  {*} `val`
           * @param  {String} `key`
           */

          function copy(val, key) {
            if (!isValidKey(key)) {
              return;
            }
            var obj = this[key];
            if (isObject(val) && isObject(obj)) {
              mixinDeep(obj, val);
            } else {
              this[key] = val;
            }
          }

          /**
           * Returns true if `val` is an object or function.
           *
           * @param  {any} val
           * @return {Boolean}
           */

          function isObject(val) {
            return isExtendable(val) && !Array.isArray(val);
          }

          /**
           * Returns true if `key` is a valid key to use when extending objects.
           *
           * @param  {String} `key`
           * @return {Boolean}
           */

          function isValidKey(key) {
            return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
          }
          /**
           * Expose `mixinDeep`
           */

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
          getValue$1 = function (obj, prop, a, b, c) {
            if (!isObject(obj) || !prop) {
              return obj;
            }
            prop = toString(prop);

            // allowing for multiple properties to be passed as
            // a string or array, but much faster (3-4x) than doing
            // `[].slice.call(arguments)`
            if (a) prop += '.' + toString(a);
            if (b) prop += '.' + toString(b);
            if (c) prop += '.' + toString(c);
            if (prop in obj) {
              return obj[prop];
            }
            var segs = prop.split('.');
            var len = segs.length;
            var i = -1;
            while (obj && ++i < len) {
              var key = segs[i];
              while (key[key.length - 1] === '\\') {
                key = key.slice(0, -1) + '.' + segs[++i];
              }
              obj = obj[key];
            }
            return obj;
          };
          function isObject(val) {
            return val !== null && (typeof val === 'object' || typeof val === 'function');
          }
          function toString(val) {
            if (!val) return '';
            if (Array.isArray(val)) {
              return val.join('.');
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
          assignSymbols = function (receiver, objects) {
            if (receiver === null || typeof receiver === 'undefined') {
              throw new TypeError('expected first argument to be an object.');
            }
            if (typeof objects === 'undefined' || typeof Symbol === 'undefined') {
              return receiver;
            }
            if (typeof Object.getOwnPropertySymbols !== 'function') {
              return receiver;
            }
            var isEnumerable = Object.prototype.propertyIsEnumerable;
            var target = Object(receiver);
            var len = arguments.length,
              i = 0;
            while (++i < len) {
              var provider = Object(arguments[i]);
              var names = Object.getOwnPropertySymbols(provider);
              for (var j = 0; j < names.length; j++) {
                var key = names[j];
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
          var isExtendable = requireIsExtendable$1();
          var assignSymbols = requireAssignSymbols();
          extendShallow$1 = Object.assign || function (obj /*, objects*/) {
            if (obj === null || typeof obj === 'undefined') {
              throw new TypeError('Cannot convert undefined or null to object');
            }
            if (!isObject(obj)) {
              obj = {};
            }
            for (var i = 1; i < arguments.length; i++) {
              var val = arguments[i];
              if (isString(val)) {
                val = toObject(val);
              }
              if (isObject(val)) {
                assign(obj, val);
                assignSymbols(obj, val);
              }
            }
            return obj;
          };
          function assign(a, b) {
            for (var key in b) {
              if (hasOwn(b, key)) {
                a[key] = b[key];
              }
            }
          }
          function isString(val) {
            return val && typeof val === 'string';
          }
          function toObject(str) {
            var obj = {};
            for (var i in str) {
              obj[i] = str[i];
            }
            return obj;
          }
          function isObject(val) {
            return val && typeof val === 'object' || isExtendable(val);
          }

          /**
           * Returns true if the given `key` is an own property of `obj`.
           */

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
          splitString = function (str, options, fn) {
            if (typeof str !== 'string') {
              throw new TypeError('expected a string');
            }
            if (typeof options === 'function') {
              fn = options;
              options = null;
            }

            // allow separator to be defined as a string
            if (typeof options === 'string') {
              options = {
                sep: options
              };
            }
            var opts = extend({
              sep: '.'
            }, options);
            var quotes = opts.quotes || ['"', "'", '`'];
            var brackets;
            if (opts.brackets === true) {
              brackets = {
                '<': '>',
                '(': ')',
                '[': ']',
                '{': '}'
              };
            } else if (opts.brackets) {
              brackets = opts.brackets;
            }
            var tokens = [];
            var stack = [];
            var arr = [''];
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
              var tok = {
                val: ch,
                idx: idx,
                arr: arr,
                str: str
              };
              tokens.push(tok);
              if (ch === '\\') {
                tok.val = keepEscaping(opts, str, idx) === true ? ch + next : next;
                tok.escaped = true;
                if (typeof fn === 'function') {
                  fn(tok);
                }
                arr[arr.length - 1] += tok.val;
                idx++;
                continue;
              }
              if (brackets && brackets[ch]) {
                stack.push(ch);
                var e = expected();
                var i = idx + 1;
                if (str.indexOf(e, i + 1) !== -1) {
                  while (stack.length && i < len) {
                    var s = str[++i];
                    if (s === '\\') {
                      s++;
                      continue;
                    }
                    if (quotes.indexOf(s) !== -1) {
                      i = getClosingQuote(str, s, i + 1);
                      continue;
                    }
                    e = expected();
                    if (stack.length && str.indexOf(e, i + 1) === -1) {
                      break;
                    }
                    if (brackets[s]) {
                      stack.push(s);
                      continue;
                    }
                    if (e === s) {
                      stack.pop();
                    }
                  }
                }
                closeIdx = i;
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
              if (typeof fn === 'function') {
                fn(tok, tokens);
                ch = tok.val;
                idx = tok.idx;
              }
              if (tok.val === sep && tok.split !== false) {
                arr.push('');
                continue;
              }
              arr[arr.length - 1] += tok.val;
            }
            return arr;
          };
          function getClosingQuote(str, ch, i, brackets) {
            var idx = str.indexOf(ch, i);
            if (str.charAt(idx - 1) === '\\') {
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
            if (typeof opts.keepEscaping === 'function') {
              return opts.keepEscaping(str, idx);
            }
            return opts.keepEscaping === true || str[idx + 1] === '\\';
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
          isExtendable = function isExtendable(val) {
            return typeof val !== 'undefined' && val !== null && (typeof val === 'object' || typeof val === 'function');
          };
          return isExtendable;
        }
        var extendShallow;
        var hasRequiredExtendShallow;
        function requireExtendShallow() {
          if (hasRequiredExtendShallow) return extendShallow;
          hasRequiredExtendShallow = 1;
          var isObject = requireIsExtendable();
          extendShallow = function extend(o /*, objects*/) {
            if (!isObject(o)) {
              o = {};
            }
            var len = arguments.length;
            for (var i = 1; i < len; i++) {
              var obj = arguments[i];
              if (isObject(obj)) {
                assign(o, obj);
              }
            }
            return o;
          };
          function assign(a, b) {
            for (var key in b) {
              if (hasOwn(b, key)) {
                a[key] = b[key];
              }
            }
          }

          /**
           * Returns true if the given `key` is an own property of `obj`.
           */

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
          var split = requireSplitString();
          var extend = requireExtendShallow();
          var isPlainObject = requireIsPlainObject();
          var isObject = requireIsExtendable();
          setValue = function (obj, prop, val) {
            if (!isObject(obj)) {
              return obj;
            }
            if (Array.isArray(prop)) {
              prop = [].concat.apply([], prop).join('.');
            }
            if (typeof prop !== 'string') {
              return obj;
            }
            var keys = split(prop, {
              sep: '.',
              brackets: true
            }).filter(isValidKey);
            var len = keys.length;
            var idx = -1;
            var current = obj;
            while (++idx < len) {
              var key = keys[idx];
              if (idx !== len - 1) {
                if (!isObject(current[key])) {
                  current[key] = {};
                }
                current = current[key];
                continue;
              }
              if (isPlainObject(current[key]) && isPlainObject(val)) {
                current[key] = extend({}, current[key], val);
              } else {
                current[key] = val;
              }
            }
            return obj;
          };
          function isValidKey(key) {
            return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
          }
          return setValue;
        }
        var mergeValue;
        var hasRequiredMergeValue;
        function requireMergeValue() {
          if (hasRequiredMergeValue) return mergeValue;
          hasRequiredMergeValue = 1;
          var isObject = requireIsExtendable$1();
          var merge = requireMixinDeep();
          var get = requireGetValue();
          var set = requireSetValue();
          mergeValue = function mergeValue(obj, prop, value) {
            if (!isObject(obj)) {
              throw new TypeError('expected an object');
            }
            if (typeof prop !== 'string' || value == null) {
              return merge.apply(null, arguments);
            }
            if (typeof value === 'string') {
              set(obj, prop, value);
              return obj;
            }
            var current = get(obj, prop);
            if (isObject(value) && isObject(current)) {
              value = merge({}, current, value);
            }
            set(obj, prop, value);
            return obj;
          };
          return mergeValue;
        }
        var mergeValueExports = requireMergeValue();
        const merge = /*@__PURE__*/getDefaultExportFromCjs(mergeValueExports);
        const join = (...args) => args.filter(Boolean).join(".");
        function getKeyPath(path) {
          const dir = path.split(".");
          return [dir.pop(), dir.join(".") || void 0];
        }
        function getValuesForPaths(data, paths) {
          return Object.entries(pick(data, paths)).reduce((acc, [, {
            value,
            disabled,
            key
          }]) => {
            acc[key] = disabled ? void 0 : value;
            return acc;
          }, {});
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
        const useVisiblePaths = store => {
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
          const valuesForPath = store.useStore(s => {
            const data = _objectSpread2(_objectSpread2({}, initialData), s.data);
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
              if (direction === "down") wrapperRef.current.style.top = bottom + margin + "px";else wrapperRef.current.style.bottom = window.innerHeight - top + margin + "px";
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
          color: () => value => w$1(value).isValid()
        });
        const schema$2 = o => v8n().color().test(o);
        function convert(color2, {
          format: format2,
          hasAlpha,
          isString
        }) {
          const convertFn = convertMap[format2] + (isString && format2 !== "hex" ? "String" : "");
          const result = color2[convertFn]();
          return typeof result === "object" && !hasAlpha ? omit(result, ["a"]) : result;
        }
        const sanitize$2 = (v, settings) => {
          const color2 = w$1(v);
          if (!color2.isValid()) throw Error("Invalid color");
          return convert(color2, settings);
        };
        const format$1 = (v, settings) => {
          return convert(w$1(v), _objectSpread2(_objectSpread2({}, settings), {}, {
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
        var props$2 = /* @__PURE__ */Object.freeze({
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
          backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
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
            onMouseLeave: e => e.buttons === 0 && hideAfterDelay()
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
          const w = parseFloat(wpx) * 0.8 / 2;
          const h = parseFloat(hpx) * 0.8 / 2;
          const startOutOfBounds = reactExports.useCallback(() => {
            if (timeout.current) return;
            setIsOutOfBounds(true);
            if (outOfBoundsX.current) set({
              x: outOfBoundsX.current * w
            });
            if (outOfBoundsY.current) set({
              y: outOfBoundsY.current * -h
            });
            timeout.current = window.setInterval(() => {
              onUpdate(v => {
                const incX = stepV1 * outOfBoundsX.current * stepMultiplier.current;
                const incY = yFactor * stepV2 * outOfBoundsY.current * stepMultiplier.current;
                return Array.isArray(v) ? {
                  [v1]: v[0] + incX,
                  [v2]: v[1] + incY
                } : {
                  [v1]: v[v1] + incX,
                  [v2]: v[v2] + incY
                };
              });
            }, 16);
          }, [w, h, onUpdate, set, stepV1, stepV2, v1, v2, yFactor]);
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
            const _x = clamp$1(mx, -w, w);
            const _y = clamp$1(my, -h, h);
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
              if (outOfBoundsX.current || outOfBoundsY.current) startOutOfBounds();else endOutOfBounds();
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
        const normalize$2 = _ref => {
          let {
              joystick = true
            } = _ref,
            input = _objectWithoutProperties$1(_ref, _excluded$7);
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
        const sanitize$1 = v => {
          if (v === void 0) return void 0;
          if (v instanceof File) {
            try {
              return URL.createObjectURL(v);
            } catch (e) {
              return void 0;
            }
          }
          if (typeof v === "string" && v.indexOf("blob:") === 0) return v;
          throw Error(`Invalid image format [undefined | blob | File].`);
        };
        const schema$1 = (_o, s) => typeof s === "object" && "image" in s;
        const normalize$1 = ({
          image: image2
        }) => {
          return {
            value: image2
          };
        };
        var props$1 = /* @__PURE__ */Object.freeze({
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
          const onDrop = reactExports.useCallback(acceptedFiles => {
            if (acceptedFiles.length) onUpdate(acceptedFiles[0]);
          }, [onUpdate]);
          const clear = reactExports.useCallback(e => {
            e.stopPropagation();
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
              backgroundImage: value ? `url(${value})` : "none"
            }
          }), shown && !!value && React.createElement(Portal, null, React.createElement(Overlay, {
            onPointerUp: hide,
            style: {
              cursor: "pointer"
            }
          }), React.createElement(ImageLargePreview, {
            ref: wrapperRef,
            style: {
              backgroundImage: `url(${value})`
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
        const schema = (o, s) => v8n().array().length(2).every.number().test(o) && v8n().schema({
          min: number,
          max: number
        }).test(s);
        const format = v => ({
          min: v[0],
          max: v[1]
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
            min,
            max
          } = _objectSpread2(_objectSpread2({}, _newValue), _value);
          return [clamp$1(Number(min), MIN, Math.max(MIN, max)), clamp$1(Number(max), Math.min(MAX, min), MAX)];
        };
        const normalize = ({
          value,
          min,
          max
        }) => {
          const boundsSettings = {
            min,
            max
          };
          const _settings = normalizeKeyedNumberSettings(format(value), {
            min: boundsSettings,
            max: boundsSettings
          });
          const bounds = [min, max];
          const settings = _objectSpread2(_objectSpread2({}, _settings), {}, {
            bounds
          });
          const _value = sanitize(format(value), settings, value);
          return {
            value: _value,
            settings
          };
        };
        var props = /* @__PURE__ */Object.freeze({
          __proto__: null,
          schema,
          format,
          sanitize,
          normalize
        });
        const _excluded$6 = ["value", "bounds", "onDrag"],
          _excluded2$1 = ["bounds"];
        const Container = styled("div", {
          display: "grid",
          columnGap: "$colGap",
          gridTemplateColumns: "auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)"
        });
        function IntervalSlider(_ref) {
          let {
              value,
              bounds: [min, max],
              onDrag
            } = _ref,
            settings = _objectWithoutProperties$1(_ref, _excluded$6);
          const ref = reactExports.useRef(null);
          const minScrubberRef = reactExports.useRef(null);
          const maxScrubberRef = reactExports.useRef(null);
          const rangeWidth = reactExports.useRef(0);
          const scrubberWidth = useTh("sizes", "scrubberWidth");
          const bind = useDrag(({
            event,
            first,
            xy: [x],
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
              _memo.pos = invertedRange((x - left) / width, min, max);
              const delta = Math.abs(_memo.pos - value.min) - Math.abs(_memo.pos - value.max);
              _memo.key = delta < 0 || delta === 0 && _memo.pos <= value.min ? "min" : "max";
              if (targetIsScrub) _memo.pos = value[_memo.key];
            }
            const newValue = _memo.pos + invertedRange(mx / rangeWidth.current, 0, max - min);
            onDrag({
              [_memo.key]: sanitizeStep(newValue, settings[_memo.key])
            });
            return _memo;
          });
          const minStyle = `calc(${range(value.min, min, max)} * (100% - ${scrubberWidth} - 8px) + 4px)`;
          const maxStyle = `calc(${1 - range(value.max, min, max)} * (100% - ${scrubberWidth} - 8px) + 4px)`;
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
          const listenerMapping = /* @__PURE__ */new Map();
          return {
            on: (topic, listener) => {
              let listeners = listenerMapping.get(topic);
              if (listeners === void 0) {
                listeners = /* @__PURE__ */new Set();
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
        const _excluded$5 = ["type", "value"],
          _excluded2 = ["onChange", "transient", "onEditStart", "onEditEnd"];
        const Store = function Store2() {
          const store = create(subscribeWithSelector(() => ({
            data: {}
          })));
          const eventEmitter = createEventEmitter();
          this.storeId = getUid();
          this.useStore = store;
          const folders = {};
          const orderedPaths = /* @__PURE__ */new Set();
          this.getVisiblePaths = () => {
            const data = this.getData();
            const paths = Object.keys(data);
            const hiddenFolders = [];
            Object.entries(folders).forEach(([path, settings]) => {
              if (settings.render && paths.some(p => p.indexOf(path) === 0) && !settings.render(this.get)) hiddenFolders.push(path + ".");
            });
            const visiblePaths = [];
            orderedPaths.forEach(path => {
              if (path in data && data[path].__refCount > 0 && hiddenFolders.every(p => path.indexOf(p) === -1) && (!data[path].render || data[path].render(this.get))) {
                visiblePaths.push(path);
              }
            });
            return visiblePaths;
          };
          this.setOrderedPaths = newPaths => {
            newPaths.forEach(p => orderedPaths.add(p));
          };
          this.orderPaths = paths => {
            this.setOrderedPaths(paths);
            return paths;
          };
          this.disposePaths = paths => {
            store.setState(s => {
              const data = s.data;
              paths.forEach(path => {
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
          this.getFolderSettings = path => {
            return folders[path] || {};
          };
          this.getData = () => {
            return store.getState().data;
          };
          this.addData = (newData, override) => {
            store.setState(s => {
              const data = s.data;
              Object.entries(newData).forEach(([path, newInputData]) => {
                let input = data[path];
                if (!!input) {
                  const {
                      type,
                      value
                    } = newInputData,
                    rest = _objectWithoutProperties$1(newInputData, _excluded$5);
                  if (type !== input.type) {
                    warn(LevaErrors.INPUT_TYPE_OVERRIDE, type);
                  } else {
                    if (input.__refCount === 0 || override) {
                      Object.assign(input, rest);
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
            store.setState(s => {
              const data = s.data;
              updateInput(data[path], value, path, this, fromPanel);
              return {
                data
              };
            });
          };
          this.setSettingsAtPath = (path, settings) => {
            store.setState(s => {
              const data = s.data;
              data[path].settings = _objectSpread2(_objectSpread2({}, data[path].settings), settings);
              return {
                data
              };
            });
          };
          this.disableInputAtPath = (path, flag) => {
            store.setState(s => {
              const data = s.data;
              data[path].disabled = flag;
              return {
                data
              };
            });
          };
          this.set = (values, fromPanel) => {
            store.setState(s => {
              const data = s.data;
              Object.entries(values).forEach(([path, value]) => {
                try {
                  updateInput(data[path], value, void 0, void 0, fromPanel);
                } catch (e) {}
              });
              return {
                data
              };
            });
          };
          this.getInput = path => {
            try {
              return this.getData()[path];
            } catch (e) {
              warn(LevaErrors.PATH_DOESNT_EXIST, path);
            }
          };
          this.get = path => {
            var _this$getInput;
            return (_this$getInput = this.getInput(path)) === null || _this$getInput === void 0 ? void 0 : _this$getInput.value;
          };
          this.emitOnEditStart = path => {
            eventEmitter.emit(`onEditStart:${path}`, this.get(path), path, _objectSpread2(_objectSpread2({}, this.getInput(path)), {}, {
              get: this.get
            }));
          };
          this.emitOnEditEnd = path => {
            eventEmitter.emit(`onEditEnd:${path}`, this.get(path), path, _objectSpread2(_objectSpread2({}, this.getInput(path)), {}, {
              get: this.get
            }));
          };
          this.subscribeToEditStart = (path, listener) => {
            const _path = `onEditStart:${path}`;
            eventEmitter.on(_path, listener);
            return () => eventEmitter.off(_path, listener);
          };
          this.subscribeToEditEnd = (path, listener) => {
            const _path = `onEditEnd:${path}`;
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
                    } = options,
                    _options = _objectWithoutProperties$1(options, _excluded2);
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
          this.getDataFromSchema = schema2 => {
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
        const isInput = v => "__levaInput" in v;
        const buildTree = (paths, filter) => {
          const tree = {};
          const _filter = filter ? filter.toLowerCase() : null;
          paths.forEach(path => {
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
              setValue,
              disabled
            } = _ref,
            rest = _objectWithoutProperties$1(_ref, _excluded$4);
          const {
            displayValue,
            onChange,
            onUpdate
          } = useInputSetters({
            type,
            value,
            settings,
            setValue
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
              setValue,
              disabled
            }, rest)
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
        const MonitorCanvas = reactExports.forwardRef(function ({
          initialValue
        }, ref) {
          const accentColor = useTh("colors", "highlight3");
          const backgroundColor = useTh("colors", "elevation2");
          const fillColor = useTh("colors", "highlight1");
          const [gradientTop, gradientBottom] = reactExports.useMemo(() => {
            return [w$1(fillColor).alpha(0.4).toRgbString(), w$1(fillColor).alpha(0.1).toRgbString()];
          }, [fillColor]);
          const points = reactExports.useRef([initialValue]);
          const min = reactExports.useRef(initialValue);
          const max = reactExports.useRef(initialValue);
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
            for (let i = 0; i < points.current.length; i++) {
              const p = range(points.current[i], min.current, max.current);
              const x = interval2 * i;
              const y = height - p * (height - verticalPadding * 2) - verticalPadding;
              path.lineTo(x, y);
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
            frame: val => {
              if (min.current === void 0 || val < min.current) min.current = val;
              if (max.current === void 0 || val > max.current) max.current = val;
              push(points.current, val);
              raf.current = requestAnimationFrame(() => drawPlot(canvas.current, ctx.current));
            }
          }), [canvas, ctx, drawPlot]);
          reactExports.useEffect(() => () => cancelAnimationFrame(raf.current), []);
          return React.createElement(Canvas, {
            ref: canvas
          });
        });
        const parse = val => Number.isFinite(val) ? val.toPrecision(2) : val.toString();
        const MonitorLog = reactExports.forwardRef(function ({
          initialValue
        }, ref) {
          const [val, set] = reactExports.useState(parse(initialValue));
          reactExports.useImperativeHandle(ref, () => ({
            frame: v => set(parse(v))
          }), []);
          return React.createElement("div", null, val);
        });
        function getValue(o) {
          return typeof o === "function" ? o() : o.current;
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
            } = input,
            inputProps = _objectWithoutProperties$1(input, _excluded$3);
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
            toggle: () => setToggle(t => !t)
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
          const getOrder = ([key, o]) => {
            var _store$getInput;
            const order = isInput(o) ? (_store$getInput = store.getInput(o.path)) === null || _store$getInput === void 0 ? void 0 : _store$getInput.order : store.getFolderSettings(join(parent, key)).order;
            return order || 0;
          };
          const entries = Object.entries(tree).sort((a, b) => getOrder(a) - getOrder(b));
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
                [`${StyledInputRow}`]: {
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
          [`> ${Icon}`]: {
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
          const _onChange = e => {
            const v = e.currentTarget.value;
            toggle(true);
            set(v);
          };
          reactExports.useEffect(() => {
            debouncedOnChange(value);
          }, [value, debouncedOnChange]);
          return React.createElement(React.Fragment, null, React.createElement(StyledFilterInput, {
            ref,
            value,
            placeholder: "[Open filter with CMD+SHIFT+L]",
            onPointerDown: e => e.stopPropagation(),
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
            if (filterShown) (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();else (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
          }, [filterShown]);
          const bind = useDrag(({
            offset: [x, y],
            first,
            last
          }) => {
            onDrag({
              x,
              y
            });
            if (first) {
              onDragStart({
                x,
                y
              });
            }
            if (last) {
              onDragEnd({
                x,
                y
              });
            }
          }, {
            filterTaps: true,
            from: ({
              offset: [x, y]
            }) => [(from === null || from === void 0 ? void 0 : from.x) || x, (from === null || from === void 0 ? void 0 : from.y) || y]
          });
          reactExports.useEffect(() => {
            const handleShortcut = event => {
              if (event.key === "L" && event.shiftKey && event.metaKey) {
                setShowFilter(f => !f);
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
            onClick: () => setShowFilter(f => !f)
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
            } = _ref,
            props2 = _objectWithoutProperties$1(_ref, _excluded$2);
          const themeContext = useDeepMemo(() => mergeTheme(theme), [theme]);
          const [toggled, setToggle] = reactExports.useState(!collapsed);
          const computedToggled = typeof collapsed === "object" ? !collapsed.collapsed : toggled;
          const computedSetToggle = reactExports.useMemo(() => {
            if (typeof collapsed === "object") {
              return value => {
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
            onDrag: point => {
              set(point);
              onDrag === null || onDrag === void 0 ? void 0 : onDrag(point);
            },
            onDragStart: point => onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(point),
            onDragEnd: point => onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(point),
            setFilter,
            toggle: flag => setToggle(t => flag !== null && flag !== void 0 ? flag : !t),
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
            } = _ref,
            props2 = _objectWithoutProperties$1(_ref, _excluded$1);
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
            const s = typeof schema2 === "function" ? schema2() : schema2;
            return folderName ? {
              [folderName]: folder(s, folderSettings)
            } : s;
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
          const set = reactExports.useCallback(values2 => {
            const _values = Object.entries(values2).reduce((acc, [p, v]) => Object.assign(acc, {
              [mappedPaths[p].path]: v
            }), {});
            store.set(_values, false);
          }, [store, mappedPaths]);
          const get = reactExports.useCallback(path => store.get(mappedPaths[path].path), [store, mappedPaths]);
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
              const unsub = store.useStore.subscribe(s => {
                const input = s.data[path];
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
            return () => unsubscriptions.forEach(unsub => unsub());
          }, [store, onChangePaths]);
          reactExports.useEffect(() => {
            const unsubscriptions = [];
            Object.entries(onEditStartPaths).forEach(([path, onEditStart]) => unsubscriptions.push(store.subscribeToEditStart(path, onEditStart)));
            Object.entries(onEditEndPaths).forEach(([path, onEditEnd]) => unsubscriptions.push(store.subscribeToEditEnd(path, onEditEnd)));
            return () => unsubscriptions.forEach(unsub => unsub());
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
        const useKeyPress = exports("u", props => {
          const {
            targetKey,
            targetRef,
            callback
          } = props;
          const [isKeyPressed, setIsKeyPressed] = reactExports.useState(false);
          const callbackRef = reactExports.useRef(callback);
          reactExports.useEffect(() => {
            callbackRef.current = callback;
          });
          reactExports.useEffect(() => {
            var _targetRef$current;
            const targetElement = (_targetRef$current = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) !== null && _targetRef$current !== void 0 ? _targetRef$current : window;
            const handleKeyDown = event => {
              const keyboardEvent = event;
              if (keyboardEvent.key === targetKey) {
                var _callbackRef$current2;
                setIsKeyPressed(true);
                (_callbackRef$current2 = callbackRef.current) === null || _callbackRef$current2 === void 0 || _callbackRef$current2.call(callbackRef, keyboardEvent);
              }
            };
            const handleKeyUp = event => {
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
        });
        function CustomDebugPanel({
          isVisible,
          onClose
        }) {
          const messages = useDebugStore(state => state.msg);
          const debuggerRef = reactExports.useRef(null);
          const containerRef = reactExports.useRef(null);
          const panelRef = reactExports.useRef(null);
          const [isCollapsed, setIsCollapsed] = reactExports.useState(false);
          const [position, setPosition] = reactExports.useState({
            x: 0,
            y: 0
          });
          const [isDragging, setIsDragging] = reactExports.useState(false);
          const bind = useDrag$1(({
            offset: [x, y],
            dragging
          }) => {
            setPosition({
              x,
              y
            });
            setIsDragging(!!dragging);
          }, {
            filterTaps: true,
            pointer: {
              capture: false
            }
          });
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
                window.open(`${window.location.origin}${window.location.pathname}iframe.html?url=${encodeURIComponent(url)}`, "_blank");
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
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "CustomDebugPanel",
            ref: debuggerRef,
            tabIndex: -1,
            className: "fixed inset-0 z-[9999] flex items-center justify-center",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              ref: panelRef,
              className: cn("relative max-h-[90vh] overflow-y-auto rounded-2xl bg-white bg-opacity-90 p-4 shadow-2xl", isMobileDevice ? "w-4/5" : "w-1/4"),
              style: {
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                userSelect: "text"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(CloseButton, {
                onClose
              }), /* @__PURE__ */jsxRuntimeExports.jsx("h2", _objectSpread3(_objectSpread3({}, bind()), {}, {
                className: "mb-4 select-none text-2xl font-bold text-black",
                style: {
                  cursor: isDragging ? "grabbing" : "grab",
                  touchAction: "none"
                },
                children: "CustomDebugPanel"
              })), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                ref: containerRef,
                className: "mb-4 flex max-h-[50vh] w-full flex-col gap-2 overflow-auto py-1",
                style: {
                  userSelect: "text"
                },
                children: messages.length ? messages.map(([time, msg], i) => /* @__PURE__ */jsxRuntimeExports.jsx(Message, {
                  timestamp: time,
                  text: msg
                }, `${time}-${i}`)) : /* @__PURE__ */jsxRuntimeExports.jsx(Empty, {})
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                onClick: () => setIsCollapsed(!isCollapsed),
                className: "mt-2 flex w-full items-center justify-between border-t-[0.0625rem] border-gray-200 py-2 text-xs text-gray-600 hover:bg-gray-50",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "font-semibold",
                  children: "Additional Info"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xs",
                  children: isCollapsed ? "▼" : "▲"
                })]
              }), !isCollapsed && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: cn("border-t-[0.0625rem] border-gray-200 py-2 text-xs text-gray-600"),
                  style: {
                    userSelect: "text"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "mb-2 text-sm font-semibold text-gray-800",
                    children: "Storage Quota"
                  }), storageQuota ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "space-y-1 text-xs text-gray-600",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: ["Usage: ", Math.round(storageQuota.usage / 1024 / 1024), "MB"]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: ["Quota: ", Math.round(storageQuota.quota / 1024 / 1024), "MB"]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: ["Ratio: ", Math.round(storageQuota.ratio * 100), "%"]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "mt-2",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "h-2 w-full rounded-full bg-gray-200",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                          className: cn("h-2 rounded-full transition-all", storageQuota.ratio > 0.9 ? "bg-red-500" : storageQuota.ratio > 0.7 ? "bg-yellow-500" : "bg-green-500"),
                          style: {
                            width: `${Math.min(storageQuota.ratio * 100, 100)}%`
                          }
                        })
                      })
                    })]
                  }) : /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "text-xs text-gray-500",
                    children: "Storage API not supported"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: cn("border-t-[0.0625rem] border-gray-200 pt-2 text-xs text-gray-600"),
                  style: {
                    userSelect: "text"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "font-bold",
                    children: "Note:"
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("ol", {
                    className: "list-decimal",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                      children: ["Press ", /* @__PURE__ */jsxRuntimeExports.jsx("kbd", {
                        children: "i"
                      }), " to open the icon menu."]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                      children: ["Press ", /* @__PURE__ */jsxRuntimeExports.jsx("kbd", {
                        children: "q"
                      }), " to intentionally break the site."]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                      children: ["Press ", /* @__PURE__ */jsxRuntimeExports.jsx("kbd", {
                        children: "f"
                      }), " to open the game with third-party iframe."]
                    }), isMobileDevice ? /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                      children: ["Tap the top-left corner ", TAP_COUNT, " times within ", TAP_TIMEOUT_MS, "ms to open the debugger."]
                    }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                        children: ["Press ", /* @__PURE__ */jsxRuntimeExports.jsx("kbd", {
                          children: DEBUG_PANEL_KEY_SEQUENCE
                        }), " to open the debugger."]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                        children: ["Press ", /* @__PURE__ */jsxRuntimeExports.jsx("kbd", {
                          children: LEVA_KEY_SEQUENCE
                        }), " to open the Leva Control Panel."]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                        children: ["Press ", /* @__PURE__ */jsxRuntimeExports.jsx("kbd", {
                          children: "Esc"
                        }), " to close."]
                      })]
                    })]
                  })]
                })]
              })]
            }), showIconMenu && /* @__PURE__ */jsxRuntimeExports.jsx(IconMenu, {})]
          });
        }
        function Message({
          timestamp,
          text
        }) {
          return /* @__PURE__ */jsxRuntimeExports.jsxs("p", {
            className: "whitespace-pre-line break-words text-xs text-gray-600",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
              className: "font-bold",
              children: `[${timestamp}]`
            }), " ", /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), " ", text]
          });
        }
        function Empty() {
          return /* @__PURE__ */jsxRuntimeExports.jsx("p", {
            className: "text-center text-xs italic text-gray-400",
            children: "No debug messages to display."
          });
        }
        function CloseButton({
          onClose
        }) {
          return /* @__PURE__ */jsxRuntimeExports.jsx("button", {
            "aria-label": "Close debugger",
            className: "absolute right-3 top-3 aspect-square w-8 rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-400",
            onClick: onClose,
            children: /* @__PURE__ */jsxRuntimeExports.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M6 6l8 8M14 6l-8 8"
              })
            })
          });
        }
        const CustomDebugPanel$1 = reactExports.memo(CustomDebugPanel);
        const EventsLogDisplay = ({
          isVisible
        }) => {
          const sessionId = useConfigStore(s => s.SESSION_ID);
          const {
            gameCode,
            roundId
          } = useConfigStore(s => s.roundInfo);
          return isVisible && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn("center pointer-events-none fixed left-1/2 top-1/2 z-[999] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col bg-gray-900 bg-opacity-50 py-2", {
              "text-xs": isMobileDevice
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              children: ["Session ID: ", sessionId]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              children: ["Round ID: ", roundId]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              children: ["Game Code: ", gameCode]
            })]
          });
        };
        const Debugger = () => {
          var _useConfigStore$getSt;
          useDevQATests();
          const [isDebugPanel, setIsDebugPanel] = reactExports.useState(false);
          const [isLevaVisible, setIsLevaVisible] = reactExports.useState(false);
          const [isEventLogVisible, setIsEventLogVisible] = reactExports.useState(false);
          useDebuggerTrigger({
            onOpen: () => setIsDebugPanel(true),
            keySequence: DEBUG_PANEL_KEY_SEQUENCE
          });
          useDebuggerTrigger({
            onOpen: () => setIsLevaVisible(v => !v),
            keySequence: LEVA_KEY_SEQUENCE
          });
          useDebuggerTrigger({
            onOpen: () => setIsEventLogVisible(v => !v),
            keySequence: ROUND_INFO_SEQUENCE
          });
          useControls({
            "Jurisdictions Controls": folder({
              "Support Chat": button(() => {
                useConfigStore.setState(state => ({
                  JURISDICTION: _objectSpread3(_objectSpread3({}, state.JURISDICTION), {}, {
                    SHOW_SUPPORT_CHAT: !state.JURISDICTION.SHOW_SUPPORT_CHAT
                  })
                }));
              }),
              "Lobby Button": button(() => {
                useConfigStore.setState(state => ({
                  JURISDICTION: _objectSpread3(_objectSpread3({}, state.JURISDICTION), {}, {
                    SHOW_LOBBY_ALLOWED: !state.JURISDICTION.SHOW_LOBBY_ALLOWED
                  })
                }));
              }),
              "Autoplay Button": button(() => {
                useConfigStore.setState(state => ({
                  JURISDICTION: _objectSpread3(_objectSpread3({}, state.JURISDICTION), {}, {
                    AUTOPLAY_ALLOWED: !state.JURISDICTION.AUTOPLAY_ALLOWED
                  })
                }));
              }),
              "Full Screen": button(() => {
                useConfigStore.setState(state => ({
                  JURISDICTION: _objectSpread3(_objectSpread3({}, state.JURISDICTION), {}, {
                    FULLSCREEN_ALLOWED: !state.JURISDICTION.FULLSCREEN_ALLOWED
                  })
                }));
              }),
              "Opposite Bets": {
                options: ["Allowed", "Forbidden"],
                value: (_useConfigStore$getSt = useConfigStore.getState().JURISDICTION) !== null && _useConfigStore$getSt !== void 0 && (_useConfigStore$getSt = _useConfigStore$getSt.BET_OPTIONS) !== null && _useConfigStore$getSt !== void 0 && _useConfigStore$getSt.forbidOppositeBets ? "Forbidden" : "Allowed",
                onChange: value => {
                  const currentJurisdictions = useConfigStore.getState().JURISDICTION;
                  useConfigStore.setState({
                    JURISDICTION: _objectSpread3(_objectSpread3({}, currentJurisdictions), {}, {
                      BET_OPTIONS: _objectSpread3(_objectSpread3({}, currentJurisdictions.BET_OPTIONS), {}, {
                        forbidOppositeBets: value === "Forbidden"
                      })
                    })
                  });
                }
              }
            }, {
              collapsed: true
            }),
            "Settings Controls": folder({
              "Mute BGM": button(() => {
                const bgmRoulette = sounds.get("sound_rouletteBGM");
                const bgmSicbo = sounds.get("sound_sicboBGM");
                const noMoreBets = sounds.get("sound_noMoreBets");
                const placeYourBets = sounds.get("sound_placeYourBets");
                const lastBets = sounds.get("sound_lastBets");
                if ((bgmRoulette || bgmSicbo) && noMoreBets && placeYourBets && lastBets) {
                  bgmRoulette === null || bgmRoulette === void 0 || bgmRoulette.volume(0);
                  bgmSicbo === null || bgmSicbo === void 0 || bgmSicbo.volume(0);
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
                useConfigStore.setState({
                  isPaused: true
                });
              }),
              "Game Resumed": button(() => {
                useConfigStore.setState({
                  isPaused: false
                });
              }),
              "IDLE Timeout": button(() => {
                useNetworkStore.setState({
                  forceShowIdleModal: true
                });
              })
            }, {
              collapsed: true
            }),
            "Table State": folder({
              "Bet States": {
                options: [0, 1, 2, 3],
                value: useBettingStore.getState().gameState,
                onChange: value => {
                  useBettingStore.setState({
                    gameState: value,
                    isBet: value === BetState.Bet
                  });
                }
              }
            }, {
              collapsed: true
            }),
            // TODO:
            // 'Win Animation': folder({
            //   'Trigger Win Anim': button(async () => {
            //     useBettingStore.setState({ gameState: BetState.Settlement })
            //     await sleep(2000)
            //   }),
            // }),
            "Player Change": folder({
              "Wallet Balance": {
                value: useCartStore.getState().remainedBalance,
                onChange: value => useCartStore.setState({
                  remainedBalance: value
                })
              },
              "Set Total Bet": {
                value: useCartStore.getState().totalBet,
                onChange: value => useCartStore.setState({
                  totalBet: value
                })
              }
            }, {
              collapsed: true
            }),
            "Toasts Controls": folder({
              "Show Error Toast": button(() => useToastStore.getState().addToast("error", "Low balance")),
              "Show Info Toast": button(() => useToastStore.getState().addToast("info", "Better than never")),
              "Show Success Toast": button(() => useToastStore.getState().addToast("success", "Happy new year")),
              "i18n Error Toast": {
                value: "",
                onChange: value => {
                  if (!value) return;
                  useToastStore.getState().addToast("error", t$3(value));
                }
              }
            }, {
              collapsed: true
            }),
            Animations: folder({
              "Add more Pill": button(() => {
                const randomNum = () => Math.floor(Math.random() * 6) + 1;
                useWinNumberStore.setState(state => ({
                  history: [...state.history, [randomNum(), randomNum(), randomNum()]]
                }));
              }),
              "Toggle board tilt": button(() => {
                useBettingStore.setState(state => ({
                  isBet: !state.isBet
                }));
              })
            }, {
              collapsed: true
            }),
            "Network Change": folder({
              "Network Expired": button(() => useNetworkStore.setState({
                isExpired: true
              })),
              isMultiSession: button(() => useNetworkStore.setState({
                isMultiSession: true
              })),
              "Force show idle Modal": button(() => useNetworkStore.setState({
                forceShowIdleModal: true
              })),
              "Force close websocket": button(() => {
                connectIns.close();
                console.log("Debugger: Websocket closed");
              })
            }, {
              collapsed: true
            }),
            "Bet Range Empty": folder({
              "Set Bet Range Empty": button(() => {
                useConfigStore.setState({
                  tableLimit: {
                    min: 0,
                    max: 0
                  },
                  betTypesLimit: {}
                });
              })
            }),
            "Sicbo Only": folder({
              "Sicbo - Small Amount": {
                value: useCartStore.getState().betStats.amount[SicBoBetNo.SMALL] || 0,
                onChange: value => useCartStore.setState(state => ({
                  betStats: {
                    amount: _objectSpread3(_objectSpread3({}, state.betStats.amount), {}, {
                      [SicBoBetNo.SMALL]: value
                    }),
                    count: _objectSpread3({}, state.betStats.count)
                  }
                }))
              },
              "Sicbo - Small Count": {
                value: useCartStore.getState().betStats.count[SicBoBetNo.SMALL] || 0,
                onChange: value => useCartStore.setState(state => ({
                  betStats: {
                    count: _objectSpread3(_objectSpread3({}, state.betStats.count), {}, {
                      [SicBoBetNo.SMALL]: value
                    }),
                    amount: _objectSpread3({}, state.betStats.amount)
                  }
                }))
              },
              "Sicbo - Big Amount": {
                value: useCartStore.getState().betStats.amount[SicBoBetNo.BIG] || 0,
                onChange: value => useCartStore.setState(state => ({
                  betStats: {
                    amount: _objectSpread3(_objectSpread3({}, state.betStats.amount), {}, {
                      [SicBoBetNo.BIG]: value
                    }),
                    count: _objectSpread3({}, state.betStats.count)
                  }
                }))
              },
              "Sicbo - Big Count": {
                value: useCartStore.getState().betStats.count[SicBoBetNo.BIG] || 0,
                onChange: value => useCartStore.setState(state => ({
                  betStats: {
                    count: _objectSpread3(_objectSpread3({}, state.betStats.count), {}, {
                      [SicBoBetNo.BIG]: value
                    }),
                    amount: _objectSpread3({}, state.betStats.amount)
                  }
                }))
              }
            }, {
              collapsed: true
            }),
            Misc: folder({
              "Toggle Round Info": button(() => {
                setIsEventLogVisible(v => !v);
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
                  window.open(`${window.location.origin}${window.location.pathname}iframe.html?url=${encodeURIComponent(url)}`, "_blank");
                }
              })
            })
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Leva, {
              titleBar: {
                title: "Controls",
                position: {
                  x: 0,
                  y: 50
                }
              },
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
            }), /* @__PURE__ */jsxRuntimeExports.jsx(CustomDebugPanel$1, {
              isVisible: isDebugPanel,
              onClose: () => setIsDebugPanel(false)
            }), /* @__PURE__ */jsxRuntimeExports.jsx(EventsLogDisplay, {
              isVisible: isEventLogVisible
            })]
          });
        };

        /**
         * Custom positioning reference element.
         * @see https://floating-ui.com/docs/virtual-elements
         */

        const min = Math.min;
        const max = Math.max;
        const round = Math.round;
        const floor = Math.floor;
        const createCoords = v => ({
          x: v,
          y: v
        });
        const oppositeSideMap = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
        };
        const oppositeAlignmentMap = {
          start: 'end',
          end: 'start'
        };
        function clamp(start, value, end) {
          return max(start, min(value, end));
        }
        function evaluate(value, param) {
          return typeof value === 'function' ? value(param) : value;
        }
        function getSide(placement) {
          return placement.split('-')[0];
        }
        function getAlignment(placement) {
          return placement.split('-')[1];
        }
        function getOppositeAxis(axis) {
          return axis === 'x' ? 'y' : 'x';
        }
        function getAxisLength(axis) {
          return axis === 'y' ? 'height' : 'width';
        }
        const yAxisSides = /*#__PURE__*/new Set(['top', 'bottom']);
        function getSideAxis(placement) {
          return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
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
          let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
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
          return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
        }
        const lrPlacement = ['left', 'right'];
        const rlPlacement = ['right', 'left'];
        const tbPlacement = ['top', 'bottom'];
        const btPlacement = ['bottom', 'top'];
        function getSideList(side, isStart, rtl) {
          switch (side) {
            case 'top':
            case 'bottom':
              if (rtl) return isStart ? rlPlacement : lrPlacement;
              return isStart ? lrPlacement : rlPlacement;
            case 'left':
            case 'right':
              return isStart ? tbPlacement : btPlacement;
            default:
              return [];
          }
        }
        function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
          const alignment = getAlignment(placement);
          let list = getSideList(getSide(placement), direction === 'start', rtl);
          if (alignment) {
            list = list.map(side => side + "-" + alignment);
            if (flipAlignment) {
              list = list.concat(list.map(getOppositeAlignmentPlacement));
            }
          }
          return list;
        }
        function getOppositePlacement(placement) {
          return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
        }
        function expandPaddingObject(padding) {
          return _objectSpread3({
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }, padding);
        }
        function getPaddingObject(padding) {
          return typeof padding !== 'number' ? expandPaddingObject(padding) : {
            top: padding,
            right: padding,
            bottom: padding,
            left: padding
          };
        }
        function rectToClientRect(rect) {
          const {
            x,
            y,
            width,
            height
          } = rect;
          return {
            width,
            height,
            top: y,
            left: x,
            right: x + width,
            bottom: y + height,
            x,
            y
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
          const isVertical = sideAxis === 'y';
          const commonX = reference.x + reference.width / 2 - floating.width / 2;
          const commonY = reference.y + reference.height / 2 - floating.height / 2;
          const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
          let coords;
          switch (side) {
            case 'top':
              coords = {
                x: commonX,
                y: reference.y - floating.height
              };
              break;
            case 'bottom':
              coords = {
                x: commonX,
                y: reference.y + reference.height
              };
              break;
            case 'right':
              coords = {
                x: reference.x + reference.width,
                y: commonY
              };
              break;
            case 'left':
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
            case 'start':
              coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
              break;
            case 'end':
              coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
              break;
          }
          return coords;
        }

        /**
         * Computes the `x` and `y` coordinates that will place the floating element
         * next to a given reference element.
         *
         * This export does not have any `platform` interface logic. You will need to
         * write one for the platform you are using Floating UI with.
         */
        const computePosition$1 = async (reference, floating, config) => {
          const {
            placement = 'bottom',
            strategy = 'absolute',
            middleware = [],
            platform
          } = config;
          const validMiddleware = middleware.filter(Boolean);
          const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
          let rects = await platform.getElementRects({
            reference,
            floating,
            strategy
          });
          let {
            x,
            y
          } = computeCoordsFromPlacement(rects, placement, rtl);
          let statefulPlacement = placement;
          let middlewareData = {};
          let resetCount = 0;
          for (let i = 0; i < validMiddleware.length; i++) {
            const {
              name,
              fn
            } = validMiddleware[i];
            const {
              x: nextX,
              y: nextY,
              data,
              reset
            } = await fn({
              x,
              y,
              initialPlacement: placement,
              placement: statefulPlacement,
              strategy,
              middlewareData,
              rects,
              platform,
              elements: {
                reference,
                floating
              }
            });
            x = nextX != null ? nextX : x;
            y = nextY != null ? nextY : y;
            middlewareData = _objectSpread3(_objectSpread3({}, middlewareData), {}, {
              [name]: _objectSpread3(_objectSpread3({}, middlewareData[name]), data)
            });
            if (reset && resetCount <= 50) {
              resetCount++;
              if (typeof reset === 'object') {
                if (reset.placement) {
                  statefulPlacement = reset.placement;
                }
                if (reset.rects) {
                  rects = reset.rects === true ? await platform.getElementRects({
                    reference,
                    floating,
                    strategy
                  }) : reset.rects;
                }
                ({
                  x,
                  y
                } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
              }
              i = -1;
            }
          }
          return {
            x,
            y,
            placement: statefulPlacement,
            strategy,
            middlewareData
          };
        };

        /**
         * Resolves with an object of overflow side offsets that determine how much the
         * element is overflowing a given clipping boundary on each side.
         * - positive = overflowing the boundary by that number of pixels
         * - negative = how many pixels left before it will overflow
         * - 0 = lies flush with the boundary
         * @see https://floating-ui.com/docs/detectOverflow
         */
        async function detectOverflow(state, options) {
          var _await$platform$isEle;
          if (options === void 0) {
            options = {};
          }
          const {
            x,
            y,
            platform,
            rects,
            elements,
            strategy
          } = state;
          const {
            boundary = 'clippingAncestors',
            rootBoundary = 'viewport',
            elementContext = 'floating',
            altBoundary = false,
            padding = 0
          } = evaluate(options, state);
          const paddingObject = getPaddingObject(padding);
          const altContext = elementContext === 'floating' ? 'reference' : 'floating';
          const element = elements[altBoundary ? altContext : elementContext];
          const clippingClientRect = rectToClientRect(await platform.getClippingRect({
            element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
            boundary,
            rootBoundary,
            strategy
          }));
          const rect = elementContext === 'floating' ? {
            x,
            y,
            width: rects.floating.width,
            height: rects.floating.height
          } : rects.reference;
          const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
          const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
            x: 1,
            y: 1
          } : {
            x: 1,
            y: 1
          };
          const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
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

        /**
         * Provides data to position an inner element of the floating element so that it
         * appears centered to the reference element.
         * @see https://floating-ui.com/docs/arrow
         */
        const arrow$1 = options => ({
          name: 'arrow',
          options,
          async fn(state) {
            const {
              x,
              y,
              placement,
              rects,
              platform,
              elements,
              middlewareData
            } = state;
            // Since `element` is required, we don't Partial<> the type.
            const {
              element,
              padding = 0
            } = evaluate(options, state) || {};
            if (element == null) {
              return {};
            }
            const paddingObject = getPaddingObject(padding);
            const coords = {
              x,
              y
            };
            const axis = getAlignmentAxis(placement);
            const length = getAxisLength(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
              clientSize = elements.floating[clientProp] || rects.floating[length];
            }
            const centerToReference = endDiff / 2 - startDiff / 2;

            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = min(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = clamp(min$1, center, max);

            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
            return {
              [axis]: coords[axis] + alignmentOffset,
              data: _objectSpread3({
                [axis]: offset,
                centerOffset: center - offset - alignmentOffset
              }, shouldAddOffset && {
                alignmentOffset
              }),
              reset: shouldAddOffset
            };
          }
        });

        /**
         * Optimizes the visibility of the floating element by flipping the `placement`
         * in order to keep it in view when the preferred placement(s) will overflow the
         * clipping boundary. Alternative to `autoPlacement`.
         * @see https://floating-ui.com/docs/flip
         */
        const flip$1 = function (options) {
          if (options === void 0) {
            options = {};
          }
          return {
            name: 'flip',
            options,
            async fn(state) {
              var _middlewareData$arrow, _middlewareData$flip;
              const {
                placement,
                middlewareData,
                rects,
                initialPlacement,
                platform,
                elements
              } = state;
              const _evaluate = evaluate(options, state),
                {
                  mainAxis: checkMainAxis = true,
                  crossAxis: checkCrossAxis = true,
                  fallbackPlacements: specifiedFallbackPlacements,
                  fallbackStrategy = 'bestFit',
                  fallbackAxisSideDirection = 'none',
                  flipAlignment = true
                } = _evaluate,
                detectOverflowOptions = _objectWithoutProperties2(_evaluate, _excluded24);

              // If a reset by the arrow was caused due to an alignment offset being
              // added, we should skip any logic now since `flip()` has already done its
              // work.
              // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
              if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
              }
              const side = getSide(placement);
              const initialSideAxis = getSideAxis(initialPlacement);
              const isBasePlacement = getSide(initialPlacement) === initialPlacement;
              const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
              const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
              const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
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

              // One or more sides is overflowing.
              if (!overflows.every(side => side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) {
                  const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== getSideAxis(nextPlacement) : false;
                  if (!ignoreCrossAxisOverflow ||
                  // We leave the current main axis only if every placement on that axis
                  // overflows the main axis.
                  overflowsData.every(d => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
                    // Try next placement and re-run the lifecycle.
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

                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

                // Otherwise fallback.
                if (!resetPlacement) {
                  switch (fallbackStrategy) {
                    case 'bestFit':
                      {
                        var _overflowsData$filter2;
                        const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                          if (hasFallbackAxisSideDirection) {
                            const currentSideAxis = getSideAxis(d.placement);
                            return currentSideAxis === initialSideAxis ||
                            // Create a bias to the `y` side axis due to horizontal
                            // reading directions favoring greater width.
                            currentSideAxis === 'y';
                          }
                          return true;
                        }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                        if (placement) {
                          resetPlacement = placement;
                        }
                        break;
                      }
                    case 'initialPlacement':
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
        const originSides = /*#__PURE__*/new Set(['left', 'top']);

        // For type backwards-compatibility, the `OffsetOptions` type was also
        // Derivable.

        async function convertValueToCoords(state, options) {
          const {
            placement,
            platform,
            elements
          } = state;
          const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
          const side = getSide(placement);
          const alignment = getAlignment(placement);
          const isVertical = getSideAxis(placement) === 'y';
          const mainAxisMulti = originSides.has(side) ? -1 : 1;
          const crossAxisMulti = rtl && isVertical ? -1 : 1;
          const rawValue = evaluate(options, state);

          // eslint-disable-next-line prefer-const
          let {
            mainAxis,
            crossAxis,
            alignmentAxis
          } = typeof rawValue === 'number' ? {
            mainAxis: rawValue,
            crossAxis: 0,
            alignmentAxis: null
          } : {
            mainAxis: rawValue.mainAxis || 0,
            crossAxis: rawValue.crossAxis || 0,
            alignmentAxis: rawValue.alignmentAxis
          };
          if (alignment && typeof alignmentAxis === 'number') {
            crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
          }
          return isVertical ? {
            x: crossAxis * crossAxisMulti,
            y: mainAxis * mainAxisMulti
          } : {
            x: mainAxis * mainAxisMulti,
            y: crossAxis * crossAxisMulti
          };
        }

        /**
         * Modifies the placement by translating the floating element along the
         * specified axes.
         * A number (shorthand for `mainAxis` or distance), or an axes configuration
         * object may be passed.
         * @see https://floating-ui.com/docs/offset
         */
        const offset$1 = function (options) {
          if (options === void 0) {
            options = 0;
          }
          return {
            name: 'offset',
            options,
            async fn(state) {
              var _middlewareData$offse, _middlewareData$arrow;
              const {
                x,
                y,
                placement,
                middlewareData
              } = state;
              const diffCoords = await convertValueToCoords(state, options);

              // If the placement is the same and the arrow caused an alignment offset
              // then we don't need to change the positioning coordinates.
              if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
              }
              return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: _objectSpread3(_objectSpread3({}, diffCoords), {}, {
                  placement
                })
              };
            }
          };
        };

        /**
         * Optimizes the visibility of the floating element by shifting it in order to
         * keep it in view when it will overflow the clipping boundary.
         * @see https://floating-ui.com/docs/shift
         */
        const shift$1 = function (options) {
          if (options === void 0) {
            options = {};
          }
          return {
            name: 'shift',
            options,
            async fn(state) {
              const {
                x,
                y,
                placement
              } = state;
              const _evaluate2 = evaluate(options, state),
                {
                  mainAxis: checkMainAxis = true,
                  crossAxis: checkCrossAxis = false,
                  limiter = {
                    fn: _ref => {
                      let {
                        x,
                        y
                      } = _ref;
                      return {
                        x,
                        y
                      };
                    }
                  }
                } = _evaluate2,
                detectOverflowOptions = _objectWithoutProperties2(_evaluate2, _excluded25);
              const coords = {
                x,
                y
              };
              const overflow = await detectOverflow(state, detectOverflowOptions);
              const crossAxis = getSideAxis(getSide(placement));
              const mainAxis = getOppositeAxis(crossAxis);
              let mainAxisCoord = coords[mainAxis];
              let crossAxisCoord = coords[crossAxis];
              if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = clamp(min, mainAxisCoord, max);
              }
              if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = clamp(min, crossAxisCoord, max);
              }
              const limitedCoords = limiter.fn(_objectSpread3(_objectSpread3({}, state), {}, {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
              }));
              return _objectSpread3(_objectSpread3({}, limitedCoords), {}, {
                data: {
                  x: limitedCoords.x - x,
                  y: limitedCoords.y - y,
                  enabled: {
                    [mainAxis]: checkMainAxis,
                    [crossAxis]: checkCrossAxis
                  }
                }
              });
            }
          };
        };
        function hasWindow() {
          return typeof window !== 'undefined';
        }
        function getNodeName(node) {
          if (isNode(node)) {
            return (node.nodeName || '').toLowerCase();
          }
          // Mocked nodes in testing environments may not be instances of Node. By
          // returning `#document` an infinite loop won't occur.
          // https://github.com/floating-ui/floating-ui/issues/2317
          return '#document';
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
          if (!hasWindow() || typeof ShadowRoot === 'undefined') {
            return false;
          }
          return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
        }
        const invalidOverflowDisplayValues = /*#__PURE__*/new Set(['inline', 'contents']);
        function isOverflowElement(element) {
          const {
            overflow,
            overflowX,
            overflowY,
            display
          } = getComputedStyle$1(element);
          return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
        }
        const tableElements = /*#__PURE__*/new Set(['table', 'td', 'th']);
        function isTableElement(element) {
          return tableElements.has(getNodeName(element));
        }
        const topLayerSelectors = [':popover-open', ':modal'];
        function isTopLayer(element) {
          return topLayerSelectors.some(selector => {
            try {
              return element.matches(selector);
            } catch (_e) {
              return false;
            }
          });
        }
        const transformProperties = ['transform', 'translate', 'scale', 'rotate', 'perspective'];
        const willChangeValues = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'];
        const containValues = ['paint', 'layout', 'strict', 'content'];
        function isContainingBlock(elementOrCss) {
          const webkit = isWebKit();
          const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

          // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
          // https://drafts.csswg.org/css-transforms-2/#individual-transforms
          return transformProperties.some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some(value => (css.willChange || '').includes(value)) || containValues.some(value => (css.contain || '').includes(value));
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
          if (typeof CSS === 'undefined' || !CSS.supports) return false;
          return CSS.supports('-webkit-backdrop-filter', 'none');
        }
        const lastTraversableNodeNames = /*#__PURE__*/new Set(['html', 'body', '#document']);
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
          if (getNodeName(node) === 'html') {
            return node;
          }
          const result =
          // Step into the shadow DOM of the parent of a slotted node.
          node.assignedSlot ||
          // DOM Element detected.
          node.parentNode ||
          // ShadowRoot detected.
          isShadowRoot(node) && node.host ||
          // Fallback.
          getDocumentElement(node);
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
          const css = getComputedStyle$1(element);
          // In testing environments, the `width` and `height` properties are empty
          // strings for SVG elements, returning NaN. Fallback to `0` in this case.
          let width = parseFloat(css.width) || 0;
          let height = parseFloat(css.height) || 0;
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
            $
          } = getCssDimensions(domElement);
          let x = ($ ? round(rect.width) : rect.width) / width;
          let y = ($ ? round(rect.height) : rect.height) / height;

          // 0, NaN, or Infinity should always fallback to 1.

          if (!x || !Number.isFinite(x)) {
            x = 1;
          }
          if (!y || !Number.isFinite(y)) {
            y = 1;
          }
          return {
            x,
            y
          };
        }
        const noOffsets = /*#__PURE__*/createCoords(0);
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
          let x = (clientRect.left + visualOffsets.x) / scale.x;
          let y = (clientRect.top + visualOffsets.y) / scale.y;
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
              const css = getComputedStyle$1(currentIFrame);
              const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
              const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
              x *= iframeScale.x;
              y *= iframeScale.y;
              width *= iframeScale.x;
              height *= iframeScale.y;
              x += left;
              y += top;
              currentWin = getWindow(currentIFrame);
              currentIFrame = getFrameElement(currentWin);
            }
          }
          return rectToClientRect({
            width,
            height,
            x,
            y
          });
        }

        // If <html> has a CSS width greater than the viewport, then this will be
        // incorrect for RTL.
        function getWindowScrollBarX(element, rect) {
          const leftScroll = getNodeScroll(element).scrollLeft;
          if (!rect) {
            return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
          }
          return rect.left + leftScroll;
        }
        function getHTMLOffset(documentElement, scroll) {
          const htmlRect = documentElement.getBoundingClientRect();
          const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
          const y = htmlRect.top + scroll.scrollTop;
          return {
            x,
            y
          };
        }
        function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
          let {
            elements,
            rect,
            offsetParent,
            strategy
          } = _ref;
          const isFixed = strategy === 'fixed';
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
            if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
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

        // Gets the entire size of the scrollable document area, even extending outside
        // of the `<html>` and `<body>` rect bounds if horizontally scrollable.
        function getDocumentRect(element) {
          const html = getDocumentElement(element);
          const scroll = getNodeScroll(element);
          const body = element.ownerDocument.body;
          const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
          const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
          let x = -scroll.scrollLeft + getWindowScrollBarX(element);
          const y = -scroll.scrollTop;
          if (getComputedStyle$1(body).direction === 'rtl') {
            x += max(html.clientWidth, body.clientWidth) - width;
          }
          return {
            width,
            height,
            x,
            y
          };
        }

        // Safety check: ensure the scrollbar space is reasonable in case this
        // calculation is affected by unusual styles.
        // Most scrollbars leave 15-18px of space.
        const SCROLLBAR_MAX = 25;
        function getViewportRect(element, strategy) {
          const win = getWindow(element);
          const html = getDocumentElement(element);
          const visualViewport = win.visualViewport;
          let width = html.clientWidth;
          let height = html.clientHeight;
          let x = 0;
          let y = 0;
          if (visualViewport) {
            width = visualViewport.width;
            height = visualViewport.height;
            const visualViewportBased = isWebKit();
            if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
              x = visualViewport.offsetLeft;
              y = visualViewport.offsetTop;
            }
          }
          const windowScrollbarX = getWindowScrollBarX(html);
          // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
          // visual width of the <html> but this is not considered in the size
          // of `html.clientWidth`.
          if (windowScrollbarX <= 0) {
            const doc = html.ownerDocument;
            const body = doc.body;
            const bodyStyles = getComputedStyle(body);
            const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
            const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
            if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
              width -= clippingStableScrollbarWidth;
            }
          } else if (windowScrollbarX <= SCROLLBAR_MAX) {
            // If the <body> scrollbar is on the left, the width needs to be extended
            // by the scrollbar amount so there isn't extra space on the right.
            width += windowScrollbarX;
          }
          return {
            width,
            height,
            x,
            y
          };
        }
        const absoluteOrFixed = /*#__PURE__*/new Set(['absolute', 'fixed']);
        // Returns the inner client rect, subtracting scrollbars if present.
        function getInnerBoundingClientRect(element, strategy) {
          const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
          const top = clientRect.top + element.clientTop;
          const left = clientRect.left + element.clientLeft;
          const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
          const width = element.clientWidth * scale.x;
          const height = element.clientHeight * scale.y;
          const x = left * scale.x;
          const y = top * scale.y;
          return {
            width,
            height,
            x,
            y
          };
        }
        function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
          let rect;
          if (clippingAncestor === 'viewport') {
            rect = getViewportRect(element, strategy);
          } else if (clippingAncestor === 'document') {
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
          return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
        }

        // A "clipping ancestor" is an `overflow` element with the characteristic of
        // clipping (or hiding) child elements. This returns all clipping ancestors
        // of the given element up the tree.
        function getClippingElementAncestors(element, cache) {
          const cachedResult = cache.get(element);
          if (cachedResult) {
            return cachedResult;
          }
          let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
          let currentContainingBlockComputedStyle = null;
          const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
          let currentNode = elementIsFixed ? getParentNode(element) : element;

          // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
          while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
            const computedStyle = getComputedStyle$1(currentNode);
            const currentNodeIsContaining = isContainingBlock(currentNode);
            if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
              currentContainingBlockComputedStyle = null;
            }
            const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
            if (shouldDropCurrentNode) {
              // Drop non-containing blocks.
              result = result.filter(ancestor => ancestor !== currentNode);
            } else {
              // Record last containing block for next iteration.
              currentContainingBlockComputedStyle = computedStyle;
            }
            currentNode = getParentNode(currentNode);
          }
          cache.set(element, result);
          return result;
        }

        // Gets the maximum area that the element is visible in due to any number of
        // clipping ancestors.
        function getClippingRect(_ref) {
          let {
            element,
            boundary,
            rootBoundary,
            strategy
          } = _ref;
          const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
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
          const isFixed = strategy === 'fixed';
          const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
          let scroll = {
            scrollLeft: 0,
            scrollTop: 0
          };
          const offsets = createCoords(0);

          // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
          // Firefox with layout.scrollbar.side = 3 in about:config to test this.
          function setLeftRTLScrollbarOffset() {
            offsets.x = getWindowScrollBarX(documentElement);
          }
          if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
            if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
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
          const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
          const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
          return {
            x,
            y,
            width: rect.width,
            height: rect.height
          };
        }
        function isStaticPositioned(element) {
          return getComputedStyle$1(element).position === 'static';
        }
        function getTrueOffsetParent(element, polyfill) {
          if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
            return null;
          }
          if (polyfill) {
            return polyfill(element);
          }
          let rawOffsetParent = element.offsetParent;

          // Firefox returns the <html> element as the offsetParent if it's non-static,
          // while Chrome and Safari return the <body> element. The <body> element must
          // be used to perform the correct calculations even if the <html> element is
          // non-static.
          if (getDocumentElement(element) === rawOffsetParent) {
            rawOffsetParent = rawOffsetParent.ownerDocument.body;
          }
          return rawOffsetParent;
        }

        // Gets the closest ancestor positioned element. Handles some edge cases,
        // such as table ancestors and cross browser bugs.
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
        const getElementRects = async function (data) {
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
          return getComputedStyle$1(element).direction === 'rtl';
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
        function rectsAreEqual(a, b) {
          return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
        }

        // https://samthor.au/2021/observing-dom/
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
                  // If the reference is clipped, the ratio is 0. Throttle the refresh
                  // to prevent an infinite loop of updates.
                  timeoutId = setTimeout(() => {
                    refresh(false, 1e-7);
                  }, 1000);
                } else {
                  refresh(false, ratio);
                }
              }
              if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
                // It's possible that even though the ratio is reported as 1, the
                // element is not actually fully within the IntersectionObserver's root
                // area anymore. This can happen under performance constraints. This may
                // be a bug in the browser's IntersectionObserver implementation. To
                // work around this, we compare the element's bounding rect now with
                // what it was at the time we created the IntersectionObserver. If they
                // are not equal then the element moved, so we refresh.
                refresh();
              }
              isFirstUpdate = false;
            }

            // Older browsers don't support a `document` as the root and will throw an
            // error.
            try {
              io = new IntersectionObserver(handleObserve, _objectSpread3(_objectSpread3({}, options), {}, {
                // Handle <iframe>s
                root: root.ownerDocument
              }));
            } catch (_e) {
              io = new IntersectionObserver(handleObserve, options);
            }
            io.observe(element);
          }
          refresh(true);
          return cleanup;
        }

        /**
         * Automatically updates the position of the floating element when necessary.
         * Should only be called when the floating element is mounted on the DOM or
         * visible on the screen.
         * @returns cleanup function that should be invoked when the floating element is
         * removed from the DOM or hidden from the screen.
         * @see https://floating-ui.com/docs/autoUpdate
         */
        function autoUpdate(reference, floating, update, options) {
          if (options === void 0) {
            options = {};
          }
          const {
            ancestorScroll = true,
            ancestorResize = true,
            elementResize = typeof ResizeObserver === 'function',
            layoutShift = typeof IntersectionObserver === 'function',
            animationFrame = false
          } = options;
          const referenceEl = unwrapElement(reference);
          const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
          ancestors.forEach(ancestor => {
            ancestorScroll && ancestor.addEventListener('scroll', update, {
              passive: true
            });
            ancestorResize && ancestor.addEventListener('resize', update);
          });
          const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
          let reobserveFrame = -1;
          let resizeObserver = null;
          if (elementResize) {
            resizeObserver = new ResizeObserver(_ref => {
              let [firstEntry] = _ref;
              if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
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
            ancestors.forEach(ancestor => {
              ancestorScroll && ancestor.removeEventListener('scroll', update);
              ancestorResize && ancestor.removeEventListener('resize', update);
            });
            cleanupIo == null || cleanupIo();
            (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
            resizeObserver = null;
            if (animationFrame) {
              cancelAnimationFrame(frameId);
            }
          };
        }

        /**
         * Modifies the placement by translating the floating element along the
         * specified axes.
         * A number (shorthand for `mainAxis` or distance), or an axes configuration
         * object may be passed.
         * @see https://floating-ui.com/docs/offset
         */
        const offset = exports("o", offset$1);

        /**
         * Optimizes the visibility of the floating element by shifting it in order to
         * keep it in view when it will overflow the clipping boundary.
         * @see https://floating-ui.com/docs/shift
         */
        const shift = exports("s", shift$1);

        /**
         * Optimizes the visibility of the floating element by flipping the `placement`
         * in order to keep it in view when the preferred placement(s) will overflow the
         * clipping boundary. Alternative to `autoPlacement`.
         * @see https://floating-ui.com/docs/flip
         */
        const flip = flip$1;

        /**
         * Provides data to position an inner element of the floating element so that it
         * appears centered to the reference element.
         * @see https://floating-ui.com/docs/arrow
         */
        const arrow = arrow$1;

        /**
         * Computes the `x` and `y` coordinates that will place the floating element
         * next to a given reference element.
         */
        const computePosition = exports("c", (reference, floating, options) => {
          // This caches the expensive `getClippingElementAncestors` function so that
          // multiple lifecycle resets re-use the same result. It only lives for a
          // single call. If other functions become expensive, we can add them as well.
          const cache = new Map();
          const mergedOptions = _objectSpread3({
            platform
          }, options);
          const platformWithCache = _objectSpread3(_objectSpread3({}, mergedOptions.platform), {}, {
            _c: cache
          });
          return computePosition$1(reference, floating, _objectSpread3(_objectSpread3({}, mergedOptions), {}, {
            platform: platformWithCache
          }));
        });
        var classnames = {
          exports: {}
        };

        /*!
        	Copyright (c) 2018 Jed Watson.
        	Licensed under the MIT License (MIT), see
        	http://jedwatson.github.io/classnames
        */

        var hasRequiredClassnames;
        function requireClassnames() {
          if (hasRequiredClassnames) return classnames.exports;
          hasRequiredClassnames = 1;
          (function (module) {
            /* global define */

            (function () {
              var hasOwn = {}.hasOwnProperty;
              function classNames() {
                var classes = '';
                for (var i = 0; i < arguments.length; i++) {
                  var arg = arguments[i];
                  if (arg) {
                    classes = appendClass(classes, parseValue(arg));
                  }
                }
                return classes;
              }
              function parseValue(arg) {
                if (typeof arg === 'string' || typeof arg === 'number') {
                  return arg;
                }
                if (typeof arg !== 'object') {
                  return '';
                }
                if (Array.isArray(arg)) {
                  return classNames.apply(null, arg);
                }
                if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                  return arg.toString();
                }
                var classes = '';
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
                  return value + ' ' + newClass;
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
        const y = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);
        var define_process_env_default = {};
        const h = "react-tooltip-core-styles",
          w = "react-tooltip-base-styles",
          b = {
            core: false,
            base: false
          };
        function S({
          css: e2,
          id: t2 = w,
          type: o2 = "base",
          ref: l2
        }) {
          var r2, n2;
          if (!e2 || "undefined" == typeof document || b[o2]) return;
          if ("core" === o2 && "undefined" != typeof process && (null === (r2 = null === process || void 0 === process ? void 0 : define_process_env_default) || void 0 === r2 ? void 0 : r2.REACT_TOOLTIP_DISABLE_CORE_STYLES)) return;
          if ("base" !== o2 && "undefined" != typeof process && (null === (n2 = null === process || void 0 === process ? void 0 : define_process_env_default) || void 0 === n2 ? void 0 : n2.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
          "core" === o2 && (t2 = h), l2 || (l2 = {});
          const {
            insertAt: i2
          } = l2;
          if (document.getElementById(t2)) return;
          const c2 = document.head || document.getElementsByTagName("head")[0],
            s2 = document.createElement("style");
          s2.id = t2, s2.type = "text/css", "top" === i2 && c2.firstChild ? c2.insertBefore(s2, c2.firstChild) : c2.appendChild(s2), s2.styleSheet ? s2.styleSheet.cssText = e2 : s2.appendChild(document.createTextNode(e2)), b[o2] = true;
        }
        const E = async ({
            elementReference: e2 = null,
            tooltipReference: t2 = null,
            tooltipArrowReference: o2 = null,
            place: l2 = "top",
            offset: r2 = 10,
            strategy: n2 = "absolute",
            middlewares: i2 = [offset(Number(r2)), flip({
              fallbackAxisSideDirection: "start"
            }), shift({
              padding: 5
            })],
            border: c2,
            arrowSize: s2 = 8
          }) => {
            if (!e2) return {
              tooltipStyles: {},
              tooltipArrowStyles: {},
              place: l2
            };
            if (null === t2) return {
              tooltipStyles: {},
              tooltipArrowStyles: {},
              place: l2
            };
            const a2 = i2;
            return o2 ? (a2.push(arrow({
              element: o2,
              padding: 5
            })), computePosition(e2, t2, {
              placement: l2,
              strategy: n2,
              middleware: a2
            }).then(({
              x: e3,
              y: t3,
              placement: o3,
              middlewareData: l3
            }) => {
              var r3, n3;
              const i3 = {
                  left: `${e3}px`,
                  top: `${t3}px`,
                  border: c2
                },
                {
                  x: a3,
                  y: u2
                } = null !== (r3 = l3.arrow) && void 0 !== r3 ? r3 : {
                  x: 0,
                  y: 0
                },
                d2 = null !== (n3 = {
                  top: "bottom",
                  right: "left",
                  bottom: "top",
                  left: "right"
                }[o3.split("-")[0]]) && void 0 !== n3 ? n3 : "bottom",
                p2 = c2 && {
                  borderBottom: c2,
                  borderRight: c2
                };
              let v2 = 0;
              if (c2) {
                const e4 = `${c2}`.match(/(\d+)px/);
                v2 = (null == e4 ? void 0 : e4[1]) ? Number(e4[1]) : 1;
              }
              return {
                tooltipStyles: i3,
                tooltipArrowStyles: _objectSpread3(_objectSpread3({
                  left: null != a3 ? `${a3}px` : "",
                  top: null != u2 ? `${u2}px` : "",
                  right: "",
                  bottom: ""
                }, p2), {}, {
                  [d2]: `-${s2 / 2 + v2}px`
                }),
                place: o3
              };
            })) : computePosition(e2, t2, {
              placement: "bottom",
              strategy: n2,
              middleware: a2
            }).then(({
              x: e3,
              y: t3,
              placement: o3
            }) => ({
              tooltipStyles: {
                left: `${e3}px`,
                top: `${t3}px`
              },
              tooltipArrowStyles: {},
              place: o3
            }));
          },
          A = (e2, t2) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e2, t2),
          _ = (e2, t2, o2) => {
            let l2 = null;
            const r2 = function (...r3) {
              const n2 = () => {
                l2 = null;
              };
              !l2 && (e2.apply(this, r3), l2 = setTimeout(n2, t2));
            };
            return r2.cancel = () => {
              l2 && (clearTimeout(l2), l2 = null);
            }, r2;
          },
          O = e2 => null !== e2 && !Array.isArray(e2) && "object" == typeof e2,
          k = (e2, t2) => {
            if (e2 === t2) return true;
            if (Array.isArray(e2) && Array.isArray(t2)) return e2.length === t2.length && e2.every((e3, o3) => k(e3, t2[o3]));
            if (Array.isArray(e2) !== Array.isArray(t2)) return false;
            if (!O(e2) || !O(t2)) return e2 === t2;
            const o2 = Object.keys(e2),
              l2 = Object.keys(t2);
            return o2.length === l2.length && o2.every(o3 => k(e2[o3], t2[o3]));
          },
          T = e2 => {
            if (!(e2 instanceof HTMLElement || e2 instanceof SVGElement)) return false;
            const t2 = getComputedStyle(e2);
            return ["overflow", "overflow-x", "overflow-y"].some(e3 => {
              const o2 = t2.getPropertyValue(e3);
              return "auto" === o2 || "scroll" === o2;
            });
          },
          L = e2 => {
            if (!e2) return null;
            let t2 = e2.parentElement;
            for (; t2;) {
              if (T(t2)) return t2;
              t2 = t2.parentElement;
            }
            return document.scrollingElement || document.documentElement;
          },
          C = "undefined" != typeof window ? reactExports.useLayoutEffect : reactExports.useEffect,
          R = e2 => {
            e2.current && (clearTimeout(e2.current), e2.current = null);
          },
          x = "DEFAULT_TOOLTIP_ID",
          N = {
            anchorRefs: /* @__PURE__ */new Set(),
            activeAnchor: {
              current: null
            },
            attach: () => {},
            detach: () => {},
            setActiveAnchor: () => {}
          },
          $ = reactExports.createContext({
            getTooltipData: () => N
          });
        function z(e2 = x) {
          return reactExports.useContext($).getTooltipData(e2);
        }
        var B = {
            tooltip: "core-styles-module_tooltip__3vRRp",
            fixed: "core-styles-module_fixed__pcSol",
            arrow: "core-styles-module_arrow__cvMwQ",
            noArrow: "core-styles-module_noArrow__xock6",
            clickable: "core-styles-module_clickable__ZuTTB",
            show: "core-styles-module_show__Nt9eE",
            closing: "core-styles-module_closing__sGnxF"
          },
          D = {
            tooltip: "styles-module_tooltip__mnnfp",
            arrow: "styles-module_arrow__K0L3T",
            dark: "styles-module_dark__xNqje",
            light: "styles-module_light__Z6W-X",
            success: "styles-module_success__A2AKt",
            warning: "styles-module_warning__SCK0X",
            error: "styles-module_error__JvumD",
            info: "styles-module_info__BWdHW"
          };
        const q = ({
            forwardRef: t2,
            id: l2,
            className: i2,
            classNameArrow: c2,
            variant: u2 = "dark",
            anchorId: d2,
            anchorSelect: p2,
            place: v2 = "top",
            offset: m2 = 10,
            events: h2 = ["hover"],
            openOnClick: w2 = false,
            positionStrategy: b2 = "absolute",
            middlewares: S2,
            wrapper: g2,
            delayShow: A2 = 0,
            delayHide: O2 = 0,
            float: T2 = false,
            hidden: x2 = false,
            noArrow: N2 = false,
            clickable: $2 = false,
            closeOnEsc: I2 = false,
            closeOnScroll: j2 = false,
            closeOnResize: q2 = false,
            openEvents: H2,
            closeEvents: M2,
            globalCloseEvents: W,
            imperativeModeOnly: P,
            style: V,
            position: F,
            afterShow: K,
            afterHide: U,
            disableTooltip: X,
            content: Y,
            contentWrapperRef: G,
            isOpen: Z,
            defaultIsOpen: J = false,
            setIsOpen: Q,
            activeAnchor: ee,
            setActiveAnchor: te,
            border: oe,
            opacity: le,
            arrowColor: re,
            arrowSize: ne = 8,
            role: ie = "tooltip"
          }) => {
            var ce;
            const se = reactExports.useRef(null),
              ae = reactExports.useRef(null),
              ue = reactExports.useRef(null),
              de = reactExports.useRef(null),
              pe = reactExports.useRef(null),
              [ve, me] = reactExports.useState({
                tooltipStyles: {},
                tooltipArrowStyles: {},
                place: v2
              }),
              [fe, ye] = reactExports.useState(false),
              [he, we] = reactExports.useState(false),
              [be, Se] = reactExports.useState(null),
              ge = reactExports.useRef(false),
              Ee = reactExports.useRef(null),
              {
                anchorRefs: Ae,
                setActiveAnchor: _e
              } = z(l2),
              Oe = reactExports.useRef(false),
              [ke, Te] = reactExports.useState([]),
              Le = reactExports.useRef(false),
              Ce = w2 || h2.includes("click"),
              Re = Ce || (null == H2 ? void 0 : H2.click) || (null == H2 ? void 0 : H2.dblclick) || (null == H2 ? void 0 : H2.mousedown),
              xe = H2 ? _objectSpread3({}, H2) : {
                mouseover: true,
                focus: true,
                mouseenter: false,
                click: false,
                dblclick: false,
                mousedown: false
              };
            !H2 && Ce && Object.assign(xe, {
              mouseenter: false,
              focus: false,
              mouseover: false,
              click: true
            });
            const Ne = M2 ? _objectSpread3({}, M2) : {
              mouseout: true,
              blur: true,
              mouseleave: false,
              click: false,
              dblclick: false,
              mouseup: false
            };
            !M2 && Ce && Object.assign(Ne, {
              mouseleave: false,
              blur: false,
              mouseout: false
            });
            const $e = W ? _objectSpread3({}, W) : {
              escape: I2 || false,
              scroll: j2 || false,
              resize: q2 || false,
              clickOutsideAnchor: Re || false
            };
            P && (Object.assign(xe, {
              mouseover: false,
              focus: false,
              mouseenter: false,
              click: false,
              dblclick: false,
              mousedown: false
            }), Object.assign(Ne, {
              mouseout: false,
              blur: false,
              mouseleave: false,
              click: false,
              dblclick: false,
              mouseup: false
            }), Object.assign($e, {
              escape: false,
              scroll: false,
              resize: false,
              clickOutsideAnchor: false
            })), C(() => (Le.current = true, () => {
              Le.current = false;
            }), []);
            const Ie = e2 => {
              Le.current && (e2 && we(true), setTimeout(() => {
                Le.current && (null == Q || Q(e2), void 0 === Z && ye(e2));
              }, 10));
            };
            reactExports.useEffect(() => {
              if (void 0 === Z) return () => null;
              Z && we(true);
              const e2 = setTimeout(() => {
                ye(Z);
              }, 10);
              return () => {
                clearTimeout(e2);
              };
            }, [Z]), reactExports.useEffect(() => {
              if (fe !== ge.current) if (R(pe), ge.current = fe, fe) null == K || K();else {
                const e2 = (e3 => {
                  const t3 = e3.match(/^([\d.]+)(ms|s)$/);
                  if (!t3) return 0;
                  const [, o2, l3] = t3;
                  return Number(o2) * ("ms" === l3 ? 1 : 1e3);
                })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
                pe.current = setTimeout(() => {
                  we(false), Se(null), null == U || U();
                }, e2 + 25);
              }
            }, [fe]);
            const ze = e2 => {
                me(t3 => k(t3, e2) ? t3 : e2);
              },
              je = (e2 = A2) => {
                R(ue), he ? Ie(true) : ue.current = setTimeout(() => {
                  Ie(true);
                }, e2);
              },
              Be = (e2 = O2) => {
                R(de), de.current = setTimeout(() => {
                  Oe.current || Ie(false);
                }, e2);
              },
              De = e2 => {
                var t3;
                if (!e2) return;
                const o2 = null !== (t3 = e2.currentTarget) && void 0 !== t3 ? t3 : e2.target;
                if (!(null == o2 ? void 0 : o2.isConnected)) return te(null), void _e({
                  current: null
                });
                A2 ? je() : Ie(true), te(o2), _e({
                  current: o2
                }), R(de);
              },
              qe = () => {
                $2 ? Be(O2 || 100) : O2 ? Be() : Ie(false), R(ue);
              },
              He = ({
                x: e2,
                y: t3
              }) => {
                var o2;
                const l3 = {
                  getBoundingClientRect: () => ({
                    x: e2,
                    y: t3,
                    width: 0,
                    height: 0,
                    top: t3,
                    left: e2,
                    right: e2,
                    bottom: t3
                  })
                };
                E({
                  place: null !== (o2 = null == be ? void 0 : be.place) && void 0 !== o2 ? o2 : v2,
                  offset: m2,
                  elementReference: l3,
                  tooltipReference: se.current,
                  tooltipArrowReference: ae.current,
                  strategy: b2,
                  middlewares: S2,
                  border: oe,
                  arrowSize: ne
                }).then(e3 => {
                  ze(e3);
                });
              },
              Me = e2 => {
                if (!e2) return;
                const t3 = e2,
                  o2 = {
                    x: t3.clientX,
                    y: t3.clientY
                  };
                He(o2), Ee.current = o2;
              },
              We = e2 => {
                var t3;
                if (!fe) return;
                const o2 = e2.target;
                if (!o2.isConnected) return;
                if (null === (t3 = se.current) || void 0 === t3 ? void 0 : t3.contains(o2)) return;
                [document.querySelector(`[id='${d2}']`), ...ke].some(e3 => null == e3 ? void 0 : e3.contains(o2)) || (Ie(false), R(ue));
              },
              Pe = _(De, 50),
              Ve = _(qe, 50),
              Fe = e2 => {
                Ve.cancel(), Pe(e2);
              },
              Ke = () => {
                Pe.cancel(), Ve();
              },
              Ue = reactExports.useCallback(() => {
                var e2, t3;
                const o2 = null !== (e2 = null == be ? void 0 : be.position) && void 0 !== e2 ? e2 : F;
                o2 ? He(o2) : T2 ? Ee.current && He(Ee.current) : (null == ee ? void 0 : ee.isConnected) && E({
                  place: null !== (t3 = null == be ? void 0 : be.place) && void 0 !== t3 ? t3 : v2,
                  offset: m2,
                  elementReference: ee,
                  tooltipReference: se.current,
                  tooltipArrowReference: ae.current,
                  strategy: b2,
                  middlewares: S2,
                  border: oe,
                  arrowSize: ne
                }).then(e3 => {
                  Le.current && ze(e3);
                });
              }, [fe, ee, Y, V, v2, null == be ? void 0 : be.place, m2, b2, F, null == be ? void 0 : be.position, T2, ne]);
            reactExports.useEffect(() => {
              var e2, t3;
              const o2 = new Set(Ae);
              ke.forEach(e3 => {
                (null == X ? void 0 : X(e3)) || o2.add({
                  current: e3
                });
              });
              const l3 = document.querySelector(`[id='${d2}']`);
              l3 && !(null == X ? void 0 : X(l3)) && o2.add({
                current: l3
              });
              const r2 = () => {
                  Ie(false);
                },
                n2 = L(ee),
                i3 = L(se.current);
              $e.scroll && (window.addEventListener("scroll", r2), null == n2 || n2.addEventListener("scroll", r2), null == i3 || i3.addEventListener("scroll", r2));
              let c3 = null;
              $e.resize ? window.addEventListener("resize", r2) : ee && se.current && (c3 = autoUpdate(ee, se.current, Ue, {
                ancestorResize: true,
                elementResize: true,
                layoutShift: true
              }));
              const s2 = e3 => {
                "Escape" === e3.key && Ie(false);
              };
              $e.escape && window.addEventListener("keydown", s2), $e.clickOutsideAnchor && window.addEventListener("click", We);
              const a2 = [],
                u3 = e3 => Boolean((null == e3 ? void 0 : e3.target) && (null == ee ? void 0 : ee.contains(e3.target))),
                p3 = e3 => {
                  fe && u3(e3) || De(e3);
                },
                v3 = e3 => {
                  fe && u3(e3) && qe();
                },
                m3 = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"],
                y2 = ["click", "dblclick", "mousedown", "mouseup"];
              Object.entries(xe).forEach(([e3, t4]) => {
                t4 && (m3.includes(e3) ? a2.push({
                  event: e3,
                  listener: Fe
                }) : y2.includes(e3) && a2.push({
                  event: e3,
                  listener: p3
                }));
              }), Object.entries(Ne).forEach(([e3, t4]) => {
                t4 && (m3.includes(e3) ? a2.push({
                  event: e3,
                  listener: Ke
                }) : y2.includes(e3) && a2.push({
                  event: e3,
                  listener: v3
                }));
              }), T2 && a2.push({
                event: "pointermove",
                listener: Me
              });
              const h3 = () => {
                  Oe.current = true;
                },
                w3 = () => {
                  Oe.current = false, qe();
                },
                b3 = $2 && (Ne.mouseout || Ne.mouseleave);
              return b3 && (null === (e2 = se.current) || void 0 === e2 || e2.addEventListener("mouseover", h3), null === (t3 = se.current) || void 0 === t3 || t3.addEventListener("mouseout", w3)), a2.forEach(({
                event: e3,
                listener: t4
              }) => {
                o2.forEach(o3 => {
                  var l4;
                  null === (l4 = o3.current) || void 0 === l4 || l4.addEventListener(e3, t4);
                });
              }), () => {
                var e3, t4;
                $e.scroll && (window.removeEventListener("scroll", r2), null == n2 || n2.removeEventListener("scroll", r2), null == i3 || i3.removeEventListener("scroll", r2)), $e.resize ? window.removeEventListener("resize", r2) : null == c3 || c3(), $e.clickOutsideAnchor && window.removeEventListener("click", We), $e.escape && window.removeEventListener("keydown", s2), b3 && (null === (e3 = se.current) || void 0 === e3 || e3.removeEventListener("mouseover", h3), null === (t4 = se.current) || void 0 === t4 || t4.removeEventListener("mouseout", w3)), a2.forEach(({
                  event: e4,
                  listener: t5
                }) => {
                  o2.forEach(o3 => {
                    var l4;
                    null === (l4 = o3.current) || void 0 === l4 || l4.removeEventListener(e4, t5);
                  });
                });
              };
            }, [ee, Ue, he, Ae, ke, H2, M2, W, Ce, A2, O2]), reactExports.useEffect(() => {
              var e2, t3;
              let o2 = null !== (t3 = null !== (e2 = null == be ? void 0 : be.anchorSelect) && void 0 !== e2 ? e2 : p2) && void 0 !== t3 ? t3 : "";
              !o2 && l2 && (o2 = `[data-tooltip-id='${l2.replace(/'/g, "\\'")}']`);
              const r2 = new MutationObserver(e3 => {
                const t4 = [],
                  r3 = [];
                e3.forEach(e4 => {
                  if ("attributes" === e4.type && "data-tooltip-id" === e4.attributeName) {
                    e4.target.getAttribute("data-tooltip-id") === l2 ? t4.push(e4.target) : e4.oldValue === l2 && r3.push(e4.target);
                  }
                  if ("childList" === e4.type) {
                    if (ee) {
                      const t5 = [...e4.removedNodes].filter(e5 => 1 === e5.nodeType);
                      if (o2) try {
                        r3.push(...t5.filter(e5 => e5.matches(o2))), r3.push(...t5.flatMap(e5 => [...e5.querySelectorAll(o2)]));
                      } catch (e5) {}
                      t5.some(e5 => {
                        var t6;
                        return !!(null === (t6 = null == e5 ? void 0 : e5.contains) || void 0 === t6 ? void 0 : t6.call(e5, ee)) && (we(false), Ie(false), te(null), R(ue), R(de), true);
                      });
                    }
                    if (o2) try {
                      const l3 = [...e4.addedNodes].filter(e5 => 1 === e5.nodeType);
                      t4.push(...l3.filter(e5 => e5.matches(o2))), t4.push(...l3.flatMap(e5 => [...e5.querySelectorAll(o2)]));
                    } catch (e5) {}
                  }
                }), (t4.length || r3.length) && Te(e4 => [...e4.filter(e5 => !r3.includes(e5)), ...t4]);
              });
              return r2.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ["data-tooltip-id"],
                attributeOldValue: true
              }), () => {
                r2.disconnect();
              };
            }, [l2, p2, null == be ? void 0 : be.anchorSelect, ee]), reactExports.useEffect(() => {
              Ue();
            }, [Ue]), reactExports.useEffect(() => {
              if (!(null == G ? void 0 : G.current)) return () => null;
              const e2 = new ResizeObserver(() => {
                setTimeout(() => Ue());
              });
              return e2.observe(G.current), () => {
                e2.disconnect();
              };
            }, [Y, null == G ? void 0 : G.current]), reactExports.useEffect(() => {
              var e2;
              const t3 = document.querySelector(`[id='${d2}']`),
                o2 = [...ke, t3];
              ee && o2.includes(ee) || te(null !== (e2 = ke[0]) && void 0 !== e2 ? e2 : t3);
            }, [d2, ke, ee]), reactExports.useEffect(() => (J && Ie(true), () => {
              R(ue), R(de);
            }), []), reactExports.useEffect(() => {
              var e2;
              let t3 = null !== (e2 = null == be ? void 0 : be.anchorSelect) && void 0 !== e2 ? e2 : p2;
              if (!t3 && l2 && (t3 = `[data-tooltip-id='${l2.replace(/'/g, "\\'")}']`), t3) try {
                const e3 = Array.from(document.querySelectorAll(t3));
                Te(e3);
              } catch (e3) {
                Te([]);
              }
            }, [l2, p2, null == be ? void 0 : be.anchorSelect]), reactExports.useEffect(() => {
              ue.current && (R(ue), je(A2));
            }, [A2]);
            const Xe = null !== (ce = null == be ? void 0 : be.content) && void 0 !== ce ? ce : Y,
              Ye = fe && Object.keys(ve.tooltipStyles).length > 0;
            return reactExports.useImperativeHandle(t2, () => ({
              open: e2 => {
                if (null == e2 ? void 0 : e2.anchorSelect) try {
                  document.querySelector(e2.anchorSelect);
                } catch (t3) {
                  return void console.warn(`[react-tooltip] "${e2.anchorSelect}" is not a valid CSS selector`);
                }
                Se(null != e2 ? e2 : null), (null == e2 ? void 0 : e2.delay) ? je(e2.delay) : Ie(true);
              },
              close: e2 => {
                (null == e2 ? void 0 : e2.delay) ? Be(e2.delay) : Ie(false);
              },
              activeAnchor: ee,
              place: ve.place,
              isOpen: Boolean(he && !x2 && Xe && Ye)
            })), he && !x2 && Xe ? React.createElement(g2, {
              id: l2,
              role: ie,
              className: y("react-tooltip", B.tooltip, D.tooltip, D[u2], i2, `react-tooltip__place-${ve.place}`, B[Ye ? "show" : "closing"], Ye ? "react-tooltip__show" : "react-tooltip__closing", "fixed" === b2 && B.fixed, $2 && B.clickable),
              onTransitionEnd: e2 => {
                R(pe), fe || "opacity" !== e2.propertyName || (we(false), Se(null), null == U || U());
              },
              style: _objectSpread3(_objectSpread3(_objectSpread3({}, V), ve.tooltipStyles), {}, {
                opacity: void 0 !== le && Ye ? le : void 0
              }),
              ref: se
            }, Xe, React.createElement(g2, {
              className: y("react-tooltip-arrow", B.arrow, D.arrow, c2, N2 && B.noArrow),
              style: _objectSpread3(_objectSpread3({}, ve.tooltipArrowStyles), {}, {
                background: re ? `linear-gradient(to right bottom, transparent 50%, ${re} 50%)` : void 0,
                "--rt-arrow-size": `${ne}px`
              }),
              ref: ae
            })) : null;
          },
          H = ({
            content: t2
          }) => React.createElement("span", {
            dangerouslySetInnerHTML: {
              __html: t2
            }
          }),
          M = React.forwardRef(({
            id: t2,
            anchorId: l2,
            anchorSelect: n2,
            content: i2,
            html: c2,
            render: a2,
            className: u2,
            classNameArrow: d2,
            variant: p2 = "dark",
            place: v2 = "top",
            offset: m2 = 10,
            wrapper: f2 = "div",
            children: h2 = null,
            events: w2 = ["hover"],
            openOnClick: b2 = false,
            positionStrategy: S2 = "absolute",
            middlewares: g2,
            delayShow: E2 = 0,
            delayHide: _2 = 0,
            float: O2 = false,
            hidden: k2 = false,
            noArrow: T2 = false,
            clickable: L2 = false,
            closeOnEsc: C2 = false,
            closeOnScroll: R2 = false,
            closeOnResize: x2 = false,
            openEvents: N2,
            closeEvents: $2,
            globalCloseEvents: I2,
            imperativeModeOnly: j2 = false,
            style: B2,
            position: D2,
            isOpen: M2,
            defaultIsOpen: W = false,
            disableStyleInjection: P = false,
            border: V,
            opacity: F,
            arrowColor: K,
            arrowSize: U,
            setIsOpen: X,
            afterShow: Y,
            afterHide: G,
            disableTooltip: Z,
            role: J = "tooltip"
          }, Q) => {
            const [ee, te] = reactExports.useState(i2),
              [oe, le] = reactExports.useState(c2),
              [re, ne] = reactExports.useState(v2),
              [ie, ce] = reactExports.useState(p2),
              [se, ae] = reactExports.useState(m2),
              [ue, de] = reactExports.useState(E2),
              [pe, ve] = reactExports.useState(_2),
              [me, fe] = reactExports.useState(O2),
              [ye, he] = reactExports.useState(k2),
              [we, be] = reactExports.useState(f2),
              [Se, ge] = reactExports.useState(w2),
              [Ee, Ae] = reactExports.useState(S2),
              [_e, Oe] = reactExports.useState(null),
              [ke, Te] = reactExports.useState(null),
              Le = reactExports.useRef(P),
              {
                anchorRefs: Ce,
                activeAnchor: Re
              } = z(t2),
              xe = e2 => null == e2 ? void 0 : e2.getAttributeNames().reduce((t3, o2) => {
                var l3;
                if (o2.startsWith("data-tooltip-")) {
                  t3[o2.replace(/^data-tooltip-/, "")] = null !== (l3 = null == e2 ? void 0 : e2.getAttribute(o2)) && void 0 !== l3 ? l3 : null;
                }
                return t3;
              }, {}),
              Ne = e2 => {
                const t3 = {
                  place: e3 => {
                    var t4;
                    ne(null !== (t4 = e3) && void 0 !== t4 ? t4 : v2);
                  },
                  content: e3 => {
                    te(null != e3 ? e3 : i2);
                  },
                  html: e3 => {
                    le(null != e3 ? e3 : c2);
                  },
                  variant: e3 => {
                    var t4;
                    ce(null !== (t4 = e3) && void 0 !== t4 ? t4 : p2);
                  },
                  offset: e3 => {
                    ae(null === e3 ? m2 : Number(e3));
                  },
                  wrapper: e3 => {
                    var t4;
                    be(null !== (t4 = e3) && void 0 !== t4 ? t4 : f2);
                  },
                  events: e3 => {
                    const t4 = null == e3 ? void 0 : e3.split(" ");
                    ge(null != t4 ? t4 : w2);
                  },
                  "position-strategy": e3 => {
                    var t4;
                    Ae(null !== (t4 = e3) && void 0 !== t4 ? t4 : S2);
                  },
                  "delay-show": e3 => {
                    de(null === e3 ? E2 : Number(e3));
                  },
                  "delay-hide": e3 => {
                    ve(null === e3 ? _2 : Number(e3));
                  },
                  float: e3 => {
                    fe(null === e3 ? O2 : "true" === e3);
                  },
                  hidden: e3 => {
                    he(null === e3 ? k2 : "true" === e3);
                  },
                  "class-name": e3 => {
                    Oe(e3);
                  }
                };
                Object.values(t3).forEach(e3 => e3(null)), Object.entries(e2).forEach(([e3, o2]) => {
                  var l3;
                  null === (l3 = t3[e3]) || void 0 === l3 || l3.call(t3, o2);
                });
              };
            reactExports.useEffect(() => {
              te(i2);
            }, [i2]), reactExports.useEffect(() => {
              le(c2);
            }, [c2]), reactExports.useEffect(() => {
              ne(v2);
            }, [v2]), reactExports.useEffect(() => {
              ce(p2);
            }, [p2]), reactExports.useEffect(() => {
              ae(m2);
            }, [m2]), reactExports.useEffect(() => {
              de(E2);
            }, [E2]), reactExports.useEffect(() => {
              ve(_2);
            }, [_2]), reactExports.useEffect(() => {
              fe(O2);
            }, [O2]), reactExports.useEffect(() => {
              he(k2);
            }, [k2]), reactExports.useEffect(() => {
              Ae(S2);
            }, [S2]), reactExports.useEffect(() => {
              Le.current !== P && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
            }, [P]), reactExports.useEffect(() => {
              "undefined" != typeof window && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", {
                detail: {
                  disableCore: "core" === P,
                  disableBase: P
                }
              }));
            }, []), reactExports.useEffect(() => {
              var e2;
              const o2 = new Set(Ce);
              let r2 = n2;
              if (!r2 && t2 && (r2 = `[data-tooltip-id='${t2.replace(/'/g, "\\'")}']`), r2) try {
                document.querySelectorAll(r2).forEach(e3 => {
                  o2.add({
                    current: e3
                  });
                });
              } catch (e3) {
                console.warn(`[react-tooltip] "${r2}" is not a valid CSS selector`);
              }
              const i3 = document.querySelector(`[id='${l2}']`);
              if (i3 && o2.add({
                current: i3
              }), !o2.size) return () => null;
              const c3 = null !== (e2 = null != ke ? ke : i3) && void 0 !== e2 ? e2 : Re.current,
                s2 = new MutationObserver(e3 => {
                  e3.forEach(e4 => {
                    var t3;
                    if (!c3 || "attributes" !== e4.type || !(null === (t3 = e4.attributeName) || void 0 === t3 ? void 0 : t3.startsWith("data-tooltip-"))) return;
                    const o3 = xe(c3);
                    Ne(o3);
                  });
                }),
                a3 = {
                  attributes: true,
                  childList: false,
                  subtree: false
                };
              if (c3) {
                const e3 = xe(c3);
                Ne(e3), s2.observe(c3, a3);
              }
              return () => {
                s2.disconnect();
              };
            }, [Ce, Re, ke, l2, n2]), reactExports.useEffect(() => {
              (null == B2 ? void 0 : B2.border) && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), V && !A("border", `${V}`) && console.warn(`[react-tooltip] "${V}" is not a valid \`border\`.`), (null == B2 ? void 0 : B2.opacity) && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), F && !A("opacity", `${F}`) && console.warn(`[react-tooltip] "${F}" is not a valid \`opacity\`.`);
            }, []);
            let $e = h2;
            const Ie = reactExports.useRef(null);
            if (a2) {
              const t3 = a2({
                content: (null == ke ? void 0 : ke.getAttribute("data-tooltip-content")) || ee || null,
                activeAnchor: ke
              });
              $e = t3 ? React.createElement("div", {
                ref: Ie,
                className: "react-tooltip-content-wrapper"
              }, t3) : null;
            } else ee && ($e = ee);
            oe && ($e = React.createElement(H, {
              content: oe
            }));
            const ze = {
              forwardRef: Q,
              id: t2,
              anchorId: l2,
              anchorSelect: n2,
              className: y(u2, _e),
              classNameArrow: d2,
              content: $e,
              contentWrapperRef: Ie,
              place: re,
              variant: ie,
              offset: se,
              wrapper: we,
              events: Se,
              openOnClick: b2,
              positionStrategy: Ee,
              middlewares: g2,
              delayShow: ue,
              delayHide: pe,
              float: me,
              hidden: ye,
              noArrow: T2,
              clickable: L2,
              closeOnEsc: C2,
              closeOnScroll: R2,
              closeOnResize: x2,
              openEvents: N2,
              closeEvents: $2,
              globalCloseEvents: I2,
              imperativeModeOnly: j2,
              style: B2,
              position: D2,
              isOpen: M2,
              defaultIsOpen: W,
              border: V,
              opacity: F,
              arrowColor: K,
              arrowSize: U,
              setIsOpen: X,
              afterShow: Y,
              afterHide: G,
              disableTooltip: Z,
              activeAnchor: ke,
              setActiveAnchor: e2 => Te(e2),
              role: J
            };
            return React.createElement(q, _objectSpread3({}, ze));
          });
        "undefined" != typeof window && window.addEventListener("react-tooltip-inject-styles", e2 => {
          e2.detail.disableCore || S({
            css: `:root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s;--rt-arrow-size:8px}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit;z-index:-1}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}`,
            type: "core"
          }), e2.detail.disableBase || S({
            css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:var(--rt-arrow-size);height:var(--rt-arrow-size)}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
            type: "base"
          });
        });
        function TooltipList() {
          const tooltipRef = reactExports.useRef(null);
          const {
            t
          } = useTranslation();
          const openTooltip = props => {
            return extraProps => {
              var _tooltipRef$current, _tooltipRef$current2;
              (_tooltipRef$current = tooltipRef.current) === null || _tooltipRef$current === void 0 || _tooltipRef$current.open(_objectSpread3(_objectSpread3({}, props), extraProps));
              (_tooltipRef$current2 = tooltipRef.current) === null || _tooltipRef$current2 === void 0 || _tooltipRef$current2.close({
                delay: 3e3
              });
            };
          };
          reactExports.useEffect(() => {
            tooltipEventBus.subscribe("lowBalance", openTooltip({
              anchorSelect: "#MainBalance",
              content: t("COMMON.LOW_BALANCE1"),
              place: "bottom-start"
            }));
            tooltipEventBus.subscribe("betAutomatically", openTooltip({
              anchorSelect: "#AutoPlayBtn",
              content: t("COMMON.REPEAT_AUTOMATICALLY"),
              place: "bottom-start"
            }));
            tooltipEventBus.subscribe("empty", openTooltip({
              anchorSelect: "#MainUndoBtn",
              content: t("COMMON.FIRST_BETS"),
              place: "top-start"
            }));
            tooltipEventBus.subscribe("close", openTooltip({
              content: t("COMMON.NEXT_GAME_SOON"),
              place: "top-end"
            }));
            tooltipEventBus.subscribe("comingSoon", openTooltip({
              content: t("COMMON.COMING_SOON"),
              place: "top-start"
            }));
            tooltipEventBus.subscribe("overLimit", openTooltip({
              content: t("COMMON.MAX_LIMIT_REACHED"),
              place: "top"
            }));
            tooltipEventBus.subscribe("noBet", openTooltip({
              anchorSelect: "#AutoPlayBtn",
              content: t("COMMON.NO_BET"),
              place: isMobileDevice ? "bottom-start" : "top"
            }));
            tooltipEventBus.subscribe("oppositeBet", openTooltip({
              content: t("COMMON.OPPOSITE_BETTING_RESTRICTED"),
              place: "top"
            }));
          }, [t]);
          const closeTooltip = () => {
            var _tooltipRef$current3;
            if ((_tooltipRef$current3 = tooltipRef.current) !== null && _tooltipRef$current3 !== void 0 && _tooltipRef$current3.isOpen) {
              var _tooltipRef$current4;
              (_tooltipRef$current4 = tooltipRef.current) === null || _tooltipRef$current4 === void 0 || _tooltipRef$current4.close();
            }
          };
          reactExports.useEffect(() => {
            document.addEventListener("mousedown", closeTooltip);
            return () => document.removeEventListener("mousedown", closeTooltip);
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsx(M, {
            ref: tooltipRef,
            className: "tooltipContainer",
            disableStyleInjection: true
          });
        }
        function initGreenKeyFrame(fps) {
          return [{
            sec: 0,
            value: 0
          }, {
            sec: 10 * fps,
            value: 1
          }, {
            sec: 20 * fps,
            value: 0.8
          }, {
            sec: 30 * fps,
            value: 1
          }, {
            sec: 70 * fps,
            value: 0.5
          }, {
            sec: 85 * fps,
            value: 1
          }, {
            sec: 100 * fps,
            value: 1
          }, {
            sec: 160 * fps,
            value: 1
          }, {
            sec: 170 * fps,
            value: 0.8
          }, {
            sec: 180 * fps,
            value: 1
          }, {
            sec: 220 * fps,
            value: 0.5
          }, {
            sec: 235 * fps,
            value: 1
          }, {
            sec: 250 * fps,
            value: 1
          }, {
            sec: 300 * fps,
            value: 1
          }, {
            sec: 310 * fps,
            value: 0.8
          }, {
            sec: 320 * fps,
            value: 1
          }, {
            sec: 360 * fps,
            value: 0.5
          }, {
            sec: 375 * fps,
            value: 1
          }, {
            sec: 390 * fps,
            value: 1
          }, {
            sec: 420 * fps,
            value: 0
          }];
        }
        function initYellowKeyFrame(fps) {
          return [{
            sec: 390 * fps,
            value: 0
          }, {
            sec: 420 * fps,
            value: 1
          }, {
            sec: 510 * fps,
            value: 1
          }, {
            sec: 540 * fps,
            value: 0
          }];
        }
        function initRedKeyFrame(fps) {
          return [{
            sec: 510 * fps,
            value: 0
          }, {
            sec: 540 * fps,
            value: 1
          }, {
            sec: 600 * fps,
            value: 1
          }, {
            sec: 630 * fps,
            value: 1
          }, {
            sec: 660 * fps,
            value: 1
          }, {
            sec: 690 * fps,
            value: 0
          }];
        }
        function initNormalKeyFrame(fps) {
          return [{
            sec: 660 * fps,
            value: 0
          }, {
            sec: 690 * fps,
            value: 1
          }];
        }
        function initWinKeyFrame(fps) {
          return [{
            sec: 0,
            value: 0
          }, {
            sec: 20 * fps,
            value: 1
          }, {
            sec: 40 * fps,
            value: 0
          }, {
            sec: 60 * fps,
            value: 1
          }, {
            sec: 80 * fps,
            value: 0
          }];
        }
        const linear = initInterpolationFunc(InterpolationMode.LINEAR);
        const useWinAnimStore = getWinAnimStore();
        function useTrafficLightRender(lightRefs) {
          const winStartMs = reactExports.useRef(0);
          reactExports.useEffect(() => {
            const renderFrame = currentMs => {
              var _lightRefs$current3, _LIGHT$find;
              const {
                loadingStage
              } = useLoadingStore.getState();
              const isLoadingScreen = loadingStage >= LoadingStageEnum.Loaded && loadingStage < LoadingStageEnum.PostLoaded4;
              if (isLoadingScreen) {
                var _lightRefs$current;
                (_lightRefs$current = lightRefs.current) === null || _lightRefs$current === void 0 || _lightRefs$current.forEach((element, color) => {
                  const isNormal = color === TRAFFIC_LIGHT_COLOR.NORMAL;
                  const alpha = isNormal ? 1 : 0;
                  element.style.opacity = alpha.toString();
                });
                return;
              }
              const {
                betEnd
              } = useBettingStore.getState();
              const elapsed = (currentMs - (betEnd - 2e4)) * 1e-3 - COUNT_DOWN_DELAY_SEC;
              LIGHT.forEach(({
                color,
                keyFrames
              }) => {
                var _lightRefs$current2;
                const ele = (_lightRefs$current2 = lightRefs.current) === null || _lightRefs$current2 === void 0 ? void 0 : _lightRefs$current2.get(color);
                if (!ele || color === TRAFFIC_LIGHT_COLOR.WIN) return;
                const alpha = linear(elapsed, keyFrames);
                ele.style.opacity = alpha.toString();
              });
              const {
                animState,
                winResult
              } = useWinAnimStore.getState();
              const winEle = (_lightRefs$current3 = lightRefs.current) === null || _lightRefs$current3 === void 0 ? void 0 : _lightRefs$current3.get(TRAFFIC_LIGHT_COLOR.WIN);
              const winKeyFrames = (_LIGHT$find = LIGHT.find(c => c.color === TRAFFIC_LIGHT_COLOR.WIN)) === null || _LIGHT$find === void 0 ? void 0 : _LIGHT$find.keyFrames;
              if (!winEle || !winKeyFrames) return;
              if (!animState || !(winResult !== null && winResult !== void 0 && winResult.result) || typeof (winResult === null || winResult === void 0 ? void 0 : winResult.userWin) !== "number") {
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
            const unsubscribe = useTimerStore.subscribe(state => state.currentMs, renderFrame);
            return () => unsubscribe();
          }, [lightRefs]);
        }
        const W_OFFSET = 2.875;
        const H_OFFSET = 2.375;
        const EXTEND = 0.0625;
        function useTrafficLightResize(wrapperRef, mainBoardRef, lightRefs) {
          const loadingStage = useLoadingStore(s => s.loadingStage);
          reactExports.useEffect(() => {
            let timeoutId;
            let rafId;
            const resize = () => {
              const params = getMainBoardParams(mainBoardRef);
              if (!params || !mainBoardRef.current || !wrapperRef.current) return;
              const ratio = useLayoutStore.getState().rootEmFontSize;
              const {
                width,
                height,
                top: mainBoardTop
              } = params;
              const {
                left: mainBoardLeft
              } = mainBoardRef.current.getBoundingClientRect();
              const {
                top: wrapperTop,
                left: wrapperLeft
              } = wrapperRef.current.getBoundingClientRect();
              const top = mainBoardTop - wrapperTop;
              const left = mainBoardLeft - wrapperLeft;
              const newStyles = {
                left: `calc(${left - W_OFFSET * ratio / 2}px)`,
                top: `calc(${top - H_OFFSET * ratio / 2}px - ${EXTEND / 1.5}rem)`,
                width: `calc(${width}px + ${W_OFFSET}rem)`,
                height: `calc(${height}px + ${H_OFFSET}rem + ${EXTEND}rem)`
              };
              lightRefs.current.forEach(element => Object.assign(element.style, newStyles));
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
        const LIGHT = [{
          color: TRAFFIC_LIGHT_COLOR.GREEN,
          keyFrames: initGreenKeyFrame(ONE_FRAME_TIME_SEC)
        }, {
          color: TRAFFIC_LIGHT_COLOR.YELLOW,
          keyFrames: initYellowKeyFrame(ONE_FRAME_TIME_SEC)
        }, {
          color: TRAFFIC_LIGHT_COLOR.RED,
          keyFrames: initRedKeyFrame(ONE_FRAME_TIME_SEC)
        }, {
          color: TRAFFIC_LIGHT_COLOR.WIN,
          keyFrames: initWinKeyFrame(ONE_FRAME_TIME_SEC)
        }, {
          color: TRAFFIC_LIGHT_COLOR.NORMAL,
          keyFrames: initNormalKeyFrame(ONE_FRAME_TIME_SEC)
        }];
        function TrafficLight() {
          const isCompact = useConfigStore(s => s.IS_SMALL_DEVICE);
          const wrapperRef = reactExports.useRef(null);
          const mainBoardRef = reactExports.useRef(null);
          const lightRefs = reactExports.useRef(/* @__PURE__ */new Map());
          useTrafficLightResize(wrapperRef, mainBoardRef, lightRefs);
          useTrafficLightRender(lightRefs);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "TrafficLight",
            ref: wrapperRef,
            className: cn("pointer-events-none absolute left-0 top-0 size-full", {
              isCompact,
              "z-[11]": isDesktop,
              "z-[2]": !isDesktop
            }),
            children: LIGHT.map(({
              color
            }) => /* @__PURE__ */jsxRuntimeExports.jsx(TrafficLightFrame, {
              color,
              lightRefs
            }, color))
          });
        }
        function TrafficLightFrame({
          color,
          lightRefs
        }) {
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            ref: el => {
              if (el) lightRefs.current.set(color, el);
            },
            className: cn("trafficLightWrapper", color),
            children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn("trafficLightFrame", color)
            })
          });
        }
        const MobileLayout = reactExports.lazy(() => __vitePreload(() => module.import('./MobileLayout-legacy-Cs954ZWU.js'), false              ? __VITE_PRELOAD__ : void 0, module.meta.url));
        const DesktopLayout = reactExports.lazy(() => __vitePreload(() => module.import('./DesktopLayout-legacy-Cq5SNDqd.js'), false              ? __VITE_PRELOAD__ : void 0, module.meta.url));
        function App() {
          useSound();
          useSafariCheck();
          useTicker();
          useGlobalOverlayHeightCalculator();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "App",
            className: "relative transition-opacity duration-[2s]",
            style: {
              backgroundImage: `url(${isMobileDevice && blurBg})`,
              backgroundSize: "cover"
            },
            children: [isMobileDevice ? /* @__PURE__ */jsxRuntimeExports.jsx(MobileLayout, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(DesktopLayout, {}), /* @__PURE__ */jsxRuntimeExports.jsx(TooltipList, {}), /* @__PURE__ */jsxRuntimeExports.jsx(IdleModal, {}), /* @__PURE__ */jsxRuntimeExports.jsx(ExpiredModal, {}), /* @__PURE__ */jsxRuntimeExports.jsx(MultiSessionModal, {}), /* @__PURE__ */jsxRuntimeExports.jsx(MaintenanceModal, {}), /* @__PURE__ */jsxRuntimeExports.jsx(AutoPlayBetChangedModal, {}), /* @__PURE__ */jsxRuntimeExports.jsx(AutoPlayFinishedModal, {}), /* @__PURE__ */jsxRuntimeExports.jsx(GlobalModalOverlay, {}), /* @__PURE__ */jsxRuntimeExports.jsx(TrafficLight, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Debugger, {})]
          });
        }
        const App$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: App
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        exports("A", App$1);
      }
    };
  });
})();
//# sourceMappingURL=App-legacy-C43Kg7P3.js.map
