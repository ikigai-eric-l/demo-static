;
(function () {
  const _excluded = ["children", "startPosition", "endPosition", "animation", "isAnimating", "initial", "animate", "style", "styleAfterAnimation", "onAnimationComplete", "enable"],
    _excluded2 = ["children", "type", "enable"],
    _excluded3 = ["children", "position", "enable"],
    _excluded4 = ["type", "disable", "className", "animation", "onClick"],
    _excluded5 = ["children", "opacity", "animation", "isAnimating", "initial", "animate", "style", "styleAfterAnimation", "onAnimationComplete", "enable"],
    _excluded6 = ["children", "scale", "animation", "isAnimating", "initial", "animate", "style", "styleAfterAnimation", "onAnimationComplete", "enable"],
    _excluded7 = ["handlePointerDown", "handlePointerUp"],
    _excluded8 = ["handlePointerDown", "handlePointerUp"];
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
  function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  System.register(['./framer-motion-vendor-legacy-BRQCrC7T.js', './SquareButton-legacy-DYWXghqP.js', './index-legacy-CPkG-0qj.js', './@sentry-vendor-legacy-Ca039euQ.js', './ui-icons-internal-legacy-6Smvdqu1.js', './ikigaians-house-core-legacy-BYu6jnS6.js', './ikigaians-connect-core-legacy-DuYeXAwv.js', './ikigaians-ikgplayer-core-legacy-n4oGY9YZ.js', './App-legacy-C43Kg7P3.js', './pixi.js-vendor-legacy-DddHKyqC.js', './react-dom-vendor-legacy-DChcbfwc.js', './pixi-filters-vendor-legacy-x0m7DAsF.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, motion, AnimatePresence, motion$1, useAnimationControls, AnimatePresence$1, ChipImg, isChipActive, isChipDisabled, ChipSelectorChip, ClickableArea, Clock, usePreventPullToRefresh, Toggle, NotificationHint, GameRuleInfo, GameRule, AutoPlay, SettingLanguage, Setting, ChatRoom, ChatHeader, GameLimit, GameHistory, useStatisticStore, Statistic, StatisticFooter, useBettingBoard, useBoardHighlight, TrackerChip, getAddChipParams, ChipContainer, ActiveStateWrapper, AnimateCounter, svgHighlightDef, useRaceTrackHighlights, getAddChipParams$1, SquareButton, BetResult, MainBgImage, overlayBg, CountDownCap, ToastList, RouletteVideoStream, NetworkStateModal, cn, useCartStore, useLayoutStore, convertLabel, useConfigStore, logoLightImg, Image, Semicircle, useChatStore, playSound, useLongPress, useBettingStore, useTranslation, thousandSeparator, useWinNumberStore, skipScrollPages, scrollWrapToTop, safariHint, useSettingStore, LANGUAGES, tooltipEventBus, isInIframe, useDataStore, GameRules, RoomType, GameHistoryContent, GameHistoryContentHeader, StraightUp, FullComplete, Default, BoardIDEnum, GRID_WIN_HIGHLIGHT_FN, getInitWinHighlight, convertRouletteMap, BetTypeEnum, betGridPrefix, gridBoardTiltCompactVariants, gridBoardTiltVariants, bettingGrid, mobileGridUpperThick, mobileGridLowerThick, gridBoardMoveVariants, RACE_TRACK_HIGHLIGHT_FN, raceTrackBoardMoveVariants, raceTrackBoardTiltCompactVariants, raceTrackBoardTiltVariants, raceTrack, mobileRacetrackThick1, mobileRacetrackThick2, mobileRacetrackThick3, mobileRacetrackThick4, mobileRacetrackThick5, mobileRacetrackThick6, raceTrackGroup, extractLeft, useAutoPlayStore, useWinAnimStore, buttonMoveVariants, iconColorVariants, logoImg, reactExports, React, Icon, GameType;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        motion = module.m;
        AnimatePresence = module.A;
        motion$1 = module.a;
        useAnimationControls = module.u;
        AnimatePresence$1 = module.b;
      }, module => {
        ChipImg = module.C;
        isChipActive = module.i;
        isChipDisabled = module.a;
        ChipSelectorChip = module.b;
        ClickableArea = module.c;
        Clock = module.d;
        usePreventPullToRefresh = module.u;
        Toggle = module.T;
        NotificationHint = module.N;
        GameRuleInfo = module.G;
        GameRule = module.e;
        AutoPlay = module.A;
        SettingLanguage = module.S;
        Setting = module.f;
        ChatRoom = module.g;
        ChatHeader = module.h;
        GameLimit = module.j;
        GameHistory = module.k;
        useStatisticStore = module.l;
        Statistic = module.m;
        StatisticFooter = module.n;
        useBettingBoard = module.o;
        useBoardHighlight = module.p;
        TrackerChip = module.q;
        getAddChipParams = module.r;
        ChipContainer = module.s;
        ActiveStateWrapper = module.t;
        AnimateCounter = module.v;
        svgHighlightDef = module.w;
        useRaceTrackHighlights = module.x;
        getAddChipParams$1 = module.y;
        SquareButton = module.z;
        BetResult = module.B;
        MainBgImage = module.M;
        overlayBg = module.D;
        CountDownCap = module.E;
        ToastList = module.F;
        RouletteVideoStream = module.R;
        NetworkStateModal = module.H;
      }, module => {
        cn = module.H;
        useCartStore = module.j;
        useLayoutStore = module.c;
        convertLabel = module.W;
        useConfigStore = module.v;
        logoLightImg = module.X;
        Image = module.Y;
        Semicircle = module.Z;
        useChatStore = module._;
        playSound = module.p;
        useLongPress = module.$;
        useBettingStore = module.h;
        useTranslation = module.t;
        thousandSeparator = module.a0;
        useWinNumberStore = module.I;
        skipScrollPages = module.a1;
        scrollWrapToTop = module.a2;
        safariHint = module.a3;
        useSettingStore = module.g;
        LANGUAGES = module.a4;
        tooltipEventBus = module.L;
        isInIframe = module.w;
        useDataStore = module.a5;
        GameRules = module.a6;
        RoomType = module.a7;
        GameHistoryContent = module.a8;
        GameHistoryContentHeader = module.a9;
        StraightUp = module.aa;
        FullComplete = module.ab;
        Default = module.ac;
        BoardIDEnum = module.ad;
        GRID_WIN_HIGHLIGHT_FN = module.ae;
        getInitWinHighlight = module.af;
        convertRouletteMap = module.ag;
        BetTypeEnum = module.ah;
        betGridPrefix = module.ai;
        gridBoardTiltCompactVariants = module.aj;
        gridBoardTiltVariants = module.ak;
        bettingGrid = module.al;
        mobileGridUpperThick = module.am;
        mobileGridLowerThick = module.an;
        gridBoardMoveVariants = module.ao;
        RACE_TRACK_HIGHLIGHT_FN = module.ap;
        raceTrackBoardMoveVariants = module.aq;
        raceTrackBoardTiltCompactVariants = module.ar;
        raceTrackBoardTiltVariants = module.as;
        raceTrack = module.at;
        mobileRacetrackThick1 = module.au;
        mobileRacetrackThick2 = module.av;
        mobileRacetrackThick3 = module.aw;
        mobileRacetrackThick4 = module.ax;
        mobileRacetrackThick5 = module.ay;
        mobileRacetrackThick6 = module.az;
        raceTrackGroup = module.aA;
        extractLeft = module.aB;
        useAutoPlayStore = module.r;
        useWinAnimStore = module.E;
        buttonMoveVariants = module.aC;
        iconColorVariants = module.aD;
        logoImg = module.aE;
      }, module => {
        reactExports = module.r;
        React = module.R;
      }, module => {
        Icon = module.I;
      }, module => {
        GameType = module.G;
      }, null, null, null, null, null, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "@keyframes circle-expand {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0.2;\n  }\n  100% {\n    transform: scale(1.3);\n    opacity: 0;\n  }\n}\n#ChipTray .blackBackground {\n  position: absolute;\n  width: 100%;\n  height: 30.5rem;\n  bottom: 0;\n  background: radial-gradient(295.35% 94.87% at 50% 100%, #000 10.11%, rgba(0, 0, 0, 0.86) 37%, rgba(20, 12, 54, 0) 100%);\n  opacity: 0;\n  transition: 0.5s;\n  pointer-events: none;\n}\n#ChipTray .mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n#ChipTray .semicircle {\n  width: 13.5rem;\n}\n#ChipTray .chipWrap {\n  position: absolute;\n  bottom: 3.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#ChipTray .chipWrap > div {\n  position: absolute;\n  height: 2.625rem;\n  width: 2.625rem;\n}\n#ChipTray .ChipActive {\n  position: absolute;\n  width: 100%;\n  aspect-ratio: 1/1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  will-change: transform;\n  top: 0;\n  pointer-events: none;\n}\n#ChipTray .ChipActive > div {\n  border-radius: 50%;\n  width: 116%;\n  aspect-ratio: 1/1;\n  position: absolute;\n  border: 0.0625rem solid #c4a886;\n  opacity: 1;\n}\n#ChipTray .ChipActive > div:not(.static) {\n  opacity: 0;\n  animation: circle-expand 3s infinite linear;\n}\n#ChipTray .ChipActive > div:not(.static):nth-child(1) {\n  animation-delay: 0s;\n}\n#ChipTray .ChipActive > div:not(.static):nth-child(2) {\n  animation-delay: 0.75s;\n}\n#ChipTray .ChipActive > div:not(.static):nth-child(3) {\n  animation-delay: 1.5s;\n}\n#ChipTray .ChipActive > div:not(.static):nth-child(4) {\n  animation-delay: 2.25s;\n}\n#ChipTray .ChipActive > div:not(.static):nth-child(5) {\n  animation-delay: 3s;\n}\n#ChipTray .ChipActive > div:not(.static):nth-child(6) {\n  animation-delay: 3.75s;\n}\n#ChipTray .SvgLogo {\n  transition: all 0.3s;\n  transform: translateY(0.625rem);\n  position: absolute;\n  bottom: 2rem;\n  width: 4.625rem;\n  opacity: 0;\n  max-width: unset;\n}\n#ChipTray.isOpen .blackBackground {\n  opacity: 1;\n  z-index: 1;\n}\n#ChipTray.isOpen .SvgLogo {\n  opacity: 1;\n  transform: translateY(0rem);\n}\n#ChipTray.isOpen #ChipBtn {\n  transform: translateY(-0.875rem);\n}\n#ChipTray.isOpen #FooterChip {\n  transform: translateY(-0.35rem);\n  margin-left: 0;\n  margin-bottom: 0;\n}\n#ChipTray.smallDevice .mask {\n  height: 100%;\n  width: 100vh;\n  top: unset;\n  left: unset;\n  bottom: unset;\n  right: unset;\n}\n#ChipTray.smallDevice .blackBackground {\n  width: 100vw;\n  height: 100%;\n  background: radial-gradient(circle at right, #000 15.11%, rgba(0, 0, 0, 0.65) 30.93%, rgba(20, 12, 54, 0) 70%);\n}\n#ChipTray.smallDevice .chipWrap {\n  bottom: -5.8rem;\n}\n#ChipTray.smallDevice .chipWrap > div {\n  height: 3.09rem;\n  width: 3.09rem;\n}\n#ChipTray.smallDevice .SvgLogo {\n  bottom: 4rem;\n  width: 5rem;\n  opacity: 0;\n  rotate: 90deg;\n}\n#ChipTray.smallDevice.isOpen .SvgLogo {\n  opacity: 1;\n  transform: translateX(0rem);\n}\n#ChipTray.smallDevice.isOpen #ChipBtn {\n  transform: translateX(-1.6rem);\n}\n#ChipTray.smallDevice.isOpen #FooterChip {\n  transform: translateX(-0.35rem);\n}\n\n#ChipBtn,\n#FooterChip {\n  transition: 0.5s;\n}\n\n.oval {\n  height: 12.5rem;\n  width: 12.5rem;\n  top: 0.5rem;\n  border-radius: 50% 50% 0 0;\n  position: absolute;\n  background: linear-gradient(180deg, #3d3d3d 0%, #222 30%, rgba(0, 0, 0, 0) 55%);\n  -webkit-mask-image: linear-gradient(#000 30%, transparent 80%);\n          mask-image: linear-gradient(#000 30%, transparent 80%);\n  pointer-events: none;\n}\n.oval .shine {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: inherit;\n}\n.oval .shine::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: linear-gradient(180deg, #1b1e21 0%, #000 100%);\n  border-radius: inherit;\n  width: calc(100% - 0.125rem);\n  height: calc(100% - 0.125rem);\n}\n.oval.smallDevice {\n  -webkit-mask-image: unset;\n          mask-image: unset;\n  height: 10rem;\n  width: 10rem;\n}#Footer:not(.isSmallDevice) > div:first-child {\n  margin-left: 0.8125rem;\n  margin-right: 1.0625rem;\n}\n#Footer:not(.isSmallDevice) > div:nth-child(2) {\n  margin-right: 1.1875rem;\n}\n#Footer:not(.isSmallDevice) > div:nth-child(4) {\n  margin-left: 1.25rem;\n  margin-right: 1rem;\n}\n#Footer.isSmallDevice {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 3rem;\n  height: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n#Footer #FooterIcon .no-animation {\n  animation: none !important;\n}\n#Footer #FooterIcon .no-animation.chat_dot1, #Footer #FooterIcon .no-animation.chat_dot2, #Footer #FooterIcon .no-animation.chat_dot3 {\n  transform: scale(1) !important;\n}\n#Footer #FooterIcon .no-animation.undo_arrow {\n  transform: scale(1) !important;\n}\n#Footer #FooterIcon .no-animation.twice_line2 {\n  transform: translateY(0%) !important;\n}\n#Footer #FooterIcon-chat .chat_dot1 {\n  transform: scale(0);\n  transform-origin: 18.7408px 22.4537px;\n  animation: scaleDot 0.72s ease-out 1s forwards;\n}\n#Footer #FooterIcon-chat .chat_dot2 {\n  transform: scale(0);\n  transform-origin: 22.4533px 22.4537px;\n  animation: scaleDot 0.72s ease-out 1.1s forwards;\n}\n#Footer #FooterIcon-chat .chat_dot3 {\n  transform: scale(0);\n  transform-origin: 26.1658px 22.4537px;\n  animation: scaleDot 0.72s ease-out 1.2s forwards;\n}\n@keyframes scaleDot {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n#Footer #FooterIcon-undo .undo_arrow {\n  transform: scale(0);\n  transform-origin: 15.1966px 17.5px;\n  animation: undoArrowGrow 0.68s ease-out 1s forwards;\n}\n@keyframes undoArrowGrow {\n  from {\n    transform: scale(0.25);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n#Footer #FooterIcon-twice .twice_line2 {\n  transform: translateY(-20%);\n  transform-origin: 33.9116px 22.0992px;\n  animation: twiceLineGrow 0.68s ease-out 1s forwards;\n}\n@keyframes twiceLineGrow {\n  from {\n    transform: translateY(-20%);\n  }\n  to {\n    transform: translateY(0%);\n  }\n}#Header .pairLabel {\n  line-height: var(--Typography-Line-Height-xxs, 0.875rem);\n}\n#Header .pairNumber {\n  font-feature-settings: \"ss02\" on;\n  font-family: Sora;\n  font-weight: 600;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 145.455% */\n  letter-spacing: -0.0206rem;\n  margin-left: -0.0375rem;\n}#FooterMenu {\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  max-width: 27.5rem;\n  display: flex;\n  flex-direction: column;\n  border-radius: inherit;\n  background: var(--Overlay-Background, linear-gradient(180deg, #232222 0%, #151718 27.41%, #111213 100%));\n  background-size: 100vw 100vh;\n  position: absolute;\n  overflow: hidden;\n}\n#FooterMenu::after {\n  padding: 0.0625rem;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n  background: linear-gradient(180deg, rgba(184, 152, 114, 0.4) 0%, rgba(0, 0, 0, 0) 10.24%, rgba(0, 0, 0, 0) 86.5%, rgba(139, 108, 72, 0.4) 100%);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);\n          clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);\n}\n#FooterMenu.isFull {\n  top: -0.125rem;\n}\n#FooterMenu:not(.isOpenMenu) {\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(10%);\n}\n#FooterMenu.isOpenMenu {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateY(0%);\n  transition: all 0.2s;\n}\n#FooterMenu.isOpenMenu + .FooterMenuMask {\n  opacity: 1;\n  pointer-events: auto;\n}\n#FooterMenu .contentWrap {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  overflow: hidden;\n  position: relative;\n  padding-bottom: 0.125rem;\n}\n#FooterMenu .scrollWrap {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  touch-action: pan-x pan-y;\n  overscroll-behavior: contain;\n  flex-grow: 1;\n}\n#FooterMenu .scrollWrap::-webkit-scrollbar {\n  display: none;\n}\n#FooterMenu .scrollShadow {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 2.69rem;\n  background: linear-gradient(180deg, rgba(18, 20, 20, 0) 0%, #121414 100%);\n}\n#FooterMenu .goldenHeader {\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-xxs, 0.875rem);\n  letter-spacing: 0.1125rem;\n  text-transform: uppercase;\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#FooterMenu .list {\n  border-radius: var(--Radius-m, 1rem);\n  border: 0.0313rem solid #3e3e3e;\n  display: grid;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  background: var(--Neutral-Black-Neutral-Black300, #252525);\n  color: var(--toggle-switchers-settings-control-heading-active, #eadfd2);\n  font-size: var(--Typography-Size-s, 0.875rem);\n  line-height: var(--Typography-Line-Height-s, 1.25rem);\n  letter-spacing: -0.0262rem;\n}\n#FooterMenu .list > .row {\n  border-bottom: 0.0625rem solid #323232;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.25rem;\n  padding-top: 1.47rem;\n  padding-bottom: 1.47rem;\n}\n#FooterMenu .list > .row:last-child {\n  border-bottom: none;\n}\n#FooterMenu .desc {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  letter-spacing: -0.015rem;\n  --tw-text-opacity: 1;\n  color: rgb(165 125 78 / var(--tw-text-opacity, 1));\n}\n#FooterMenu .selectList .text {\n  color: #7a7a7a;\n  transition: color 0.2s;\n}\n#FooterMenu .selectList .desc {\n  --tw-text-opacity: 1;\n  color: rgb(100 76 47 / var(--tw-text-opacity, 1));\n}\n#FooterMenu .selectList .checkMark {\n  opacity: 0;\n  width: 1rem;\n}\n#FooterMenu .selectList .row.checked .text {\n  color: #eadfd2;\n}\n#FooterMenu .selectList .row.checked .desc {\n  --tw-text-opacity: 1;\n  color: rgb(165 125 78 / var(--tw-text-opacity, 1));\n}\n#FooterMenu .selectList .row.checked .checkMark {\n  opacity: 1;\n}\n\n.FooterMenuMask {\n  transition: opacity 0.4s;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%);\n  opacity: 0;\n  pointer-events: none;\n}#SafariHint .btn {\n  background: linear-gradient(180deg, #d8d3c3 0%, #7a704f 100%);\n  border-radius: var(--Spacing-xl);\n}\n#SafariHint .btn .inner {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0.0625rem;\n  padding: var(--Spacing-s2, 0.625rem) var(--Spacing-ms, 1.125rem);\n  background: linear-gradient(180deg, #1d1d1d 0%, #151515 100%);\n  border-radius: inherit;\n  color: var(--Button-Text);\n  text-align: center;\n  font-size: var(--Typography-Size-s, 0.875rem);\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-s, 1.25rem); /* 142.857% */\n  letter-spacing: -0.0262rem;\n}#GridBoard {\n  max-width: min(78.2vw, 88%);\n  aspect-ratio: 281/503;\n  position: absolute;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  max-height: 89%;\n  z-index: 1;\n}\n#GridBoard .rotateBoard {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  bottom: 0;\n  position: relative;\n  transform-origin: center bottom;\n  transform-style: preserve-3d;\n  z-index: 1;\n}\n#GridBoard .boardThick {\n  position: absolute;\n  transform-origin: left;\n  will-change: transform;\n  max-width: unset;\n  --scaleStart: 0.85;\n  --scaleEnd: 1;\n}\n#GridBoard .boardThick.upperThick {\n  --moveStart: 4.5%;\n  --moveEnd: 3.8%;\n}\n#GridBoard .boardThick.lowerThick {\n  --moveStart: -3.2%;\n  --moveEnd: -3.8%;\n}\n\n#GridBoard.isSlope .boardThick {\n  animation: showThick 1s cubic-bezier(0.47, 0, 0.05, 1), appear 1s cubic-bezier(0.47, 0, 0.05, 1), scaleUp 1s cubic-bezier(0.47, 0, 0.05, 1);\n  animation-fill-mode: both;\n}\n\n#GridBoard:not(.isSlope) .boardThick {\n  animation: hideThick 0.8s cubic-bezier(0.47, 0, 0.05, 1), disappear 0.8s cubic-bezier(0.47, 0, 0.05, 1), scaleDown 0.8s cubic-bezier(0.47, 0, 0.05, 1);\n  animation-fill-mode: both;\n}\n\n#GridBoard.isCompact .boardThick.upperThick {\n  --moveStart: 4.2%;\n  --moveEnd: 4.9%;\n}\n#GridBoard.isCompact .boardThick.lowerThick {\n  --moveStart: -2.2%;\n  --moveEnd: -1.5%;\n}\n\n#BetGrid .Grids {\n  position: absolute;\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-columns: 1fr 0.3fr repeat(3, 0.3fr 0.9fr 0.3fr) 0.3fr 1fr;\n  grid-template-rows: 1.42fr 0.3fr repeat(12, 0.3fr 0.9fr 0.3fr) 0.3fr 1.42fr;\n}\n#BetGrid .chip {\n  animation: fadeFromBottom 0.2s forwards;\n}\n#BetGrid span.highlighted {\n  background: linear-gradient(131deg, rgba(223, 207, 187, 0.05) 0%, rgba(223, 207, 187, 0.2) 0.37%, rgba(223, 207, 187, 0.05) 100%);\n  box-shadow: 4px -4px 8px 0px rgba(142, 108, 67, 0.25), -4px 4px 8px 0px rgba(223, 207, 187, 0.1), 0px 0px 12px 0px rgba(255, 255, 255, 0.1) inset, -8px 8px 8px 0px rgba(223, 207, 187, 0.15) inset, 8px -8px 8px 0px rgba(142, 108, 67, 0.3) inset;\n  position: relative;\n  overflow: hidden;\n}\n#BetGrid span.highlighted::after {\n  padding: 0.0938rem;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n  background: linear-gradient(194deg, var(--Beige-Gold-Beige-Gold500, #c9ae8d) 9.16%, var(--Beige-Gold-Beige-Gold800, #a57d4e) 89.58%);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n#BetGrid .svgBoard {\n  opacity: 0;\n  position: absolute;\n  transform: translateX(-50%) rotateX(-8.3deg) scale(0.99, 1.15);\n}\n#BetGrid .isSlope .svgBoard {\n  opacity: 1;\n  transition: opacity 0.6s cubic-bezier(0.47, 0, 0.05, 1);\n}.plusMinusButton.disabled path {\n  fill: #414141;\n}\n\n.active .plusMinusButton.disabled::after {\n  display: none;\n}\n.active .plusMinusButton::after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--Radius-Round);\n  border: 1px solid #7a6b59;\n  background: linear-gradient(180deg, rgba(251, 251, 251, 0.1) 0%, rgba(197, 197, 197, 0.05) 100%);\n  pointer-events: none;\n}#RacetrackBoard {\n  position: absolute;\n  max-height: 88.1%;\n  max-width: 61%;\n  aspect-ratio: 190/504;\n  margin-bottom: 0.05rem;\n}\n#RacetrackBoard .rotateBoard {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  bottom: 0;\n  position: relative;\n  transform-origin: center bottom;\n  transform-style: preserve-3d;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.4s;\n  transform-origin: bottom;\n}\n#RacetrackBoard .boardThick {\n  position: absolute;\n  left: 50%;\n  transform-origin: bottom left;\n  will-change: transform;\n  max-width: unset;\n  --scaleStart: 0.95;\n  --scaleEnd: 1;\n}\n#RacetrackBoard .boardThick.vector1 {\n  --moveStart: 126%;\n  --moveEnd: 84.5%;\n  width: 37%;\n}\n#RacetrackBoard .boardThick.rect1 {\n  --moveStart: calc(80% - 0.5rem);\n  --moveEnd: calc(71% - 0.5rem);\n  width: calc(28.3% + 0.5rem);\n}\n#RacetrackBoard .boardThick.rect2 {\n  --moveStart: calc(68% - 0.7rem);\n  --moveEnd: calc(58% - 0.7rem);\n  width: calc(29.7% + 0.5rem);\n}\n#RacetrackBoard .boardThick.vector2 {\n  --moveStart: calc(32% - 0.1rem);\n  --moveEnd: calc(28.5% - 0.1rem);\n  width: calc(34% + 0.3rem);\n}\n#RacetrackBoard .boardThick.vector3 {\n  --moveStart: 14%;\n  --moveEnd: 11.8%;\n  width: calc(36% + 0.1rem);\n}\n#RacetrackBoard .boardThick.vector4 {\n  --moveStart: -10%;\n  --moveEnd: -11%;\n  width: 109%;\n}\n\n#RacetrackBoard.isSlope .boardThick {\n  animation: showThick 1s cubic-bezier(0.47, 0, 0.05, 1), appear 1s cubic-bezier(0.49, 0.05, 0.56, 1.02), scaleUp 1s cubic-bezier(0.47, 0, 0.05, 1);\n  animation-fill-mode: both;\n}\n\n#RacetrackBoard:not(.isSlope) .boardThick {\n  animation: hideThick 0.8s cubic-bezier(0.47, 0, 0.05, 1), disappear 0.8s cubic-bezier(0.19, 0.86, 0.56, 1.02), scaleDown 0.8s cubic-bezier(0.47, 0, 0.05, 1);\n  animation-fill-mode: both;\n}\n\n#RacetrackBoard.isSmallDevice .boardThick.vector1 {\n  --moveStart: calc(115% + 0.1rem);\n  --moveEnd: calc(85% + 0.1rem);\n  width: calc(29% + 0.6rem);\n}\n#RacetrackBoard.isSmallDevice .boardThick.rect1 {\n  --moveStart: 96%;\n  --moveEnd: calc(83.2% - 1.8rem);\n  width: calc(21.5% + 0.8rem);\n}\n#RacetrackBoard.isSmallDevice .boardThick.rect2 {\n  --moveStart: 70%;\n  --moveEnd: calc(70% - 2rem);\n  width: calc(26.5% + 0.5rem);\n}\n#RacetrackBoard.isSmallDevice .boardThick.vector2 {\n  --moveStart: 39%;\n  --moveEnd: calc(36.7% - 1.05rem);\n  width: calc(35% + 0.1rem);\n}\n#RacetrackBoard.isSmallDevice .boardThick.vector3 {\n  --moveStart: 20.4%;\n  --moveEnd: calc(17.7% - 0.7rem);\n  width: calc(34.7% + 0.1rem);\n}\n#RacetrackBoard.isSmallDevice .boardThick.vector4 {\n  --moveStart: -8%;\n  --moveEnd: calc(-10.8% - 0.02rem);\n  width: calc(105% + 0.1rem);\n}\n\n.fakeRacetrack {\n  position: absolute;\n  max-height: 88.1%;\n  max-width: 61%;\n  aspect-ratio: 190/504;\n  margin-bottom: 0.05rem;\n}\n\n#RacetrackSVG {\n  z-index: 2;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n#PlusMinusGroup {\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0s 0.4s;\n  background: linear-gradient(180deg, rgba(251, 251, 251, 0.1) 0%, rgba(197, 197, 197, 0.05) 100%);\n  border: 0.0781rem solid #2e2d2c;\n}\n#PlusMinusGroup > h6 {\n  font-family: Sora;\n  font-size: var(--Typography-Size-xxs, 0.625rem);\n  font-weight: 600;\n  line-height: 0.625rem;\n  letter-spacing: -0.0187rem;\n  background: var(--One-Of-Many-Control-Text, linear-gradient(194deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#PlusMinusGroup.isRaceTrack {\n  opacity: 1;\n  pointer-events: auto;\n}\n#PlusMinusGroup .neighborRange {\n  background: var(--Navbar-Icon-Default, linear-gradient(180deg, var(--Warm-Grey-Warm-Grey200, #ece9e1) 0%, var(--Warm-Grey-Warm-Grey600, #afa483) 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n  font-family: Sora;\n  font-size: 1.0938rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 2rem;\n  letter-spacing: -0.0328rem;\n}\n\n#PlusMinusButton .border_normal {\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n#PlusMinusButton.clicked .border_normal {\n  opacity: 1;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const defaultAnimation = {
          duration: 0.5,
          delay: 0,
          ease: "easeOut"
        };
        const defaultPosition = {
          x: 0,
          y: 0,
          z: 0
        };
        const DisplacementContainer = _ref => {
          var _startPosition$x, _startPosition$y, _startPosition$z, _endPosition$x, _endPosition$y, _startPosition$x2, _startPosition$y2, _endPosition$z;
          let {
              children,
              startPosition = defaultPosition,
              endPosition = defaultPosition,
              animation = defaultAnimation,
              isAnimating = true,
              initial,
              animate,
              style,
              styleAfterAnimation,
              onAnimationComplete,
              enable = true
            } = _ref,
            rest = _objectWithoutProperties(_ref, _excluded);
          const [animationEnded, setAnimationEnded] = reactExports.useState(false);
          const defaultInitial = {
            x: (_startPosition$x = startPosition.x) !== null && _startPosition$x !== void 0 ? _startPosition$x : defaultPosition.x,
            y: (_startPosition$y = startPosition.y) !== null && _startPosition$y !== void 0 ? _startPosition$y : defaultPosition.y,
            z: (_startPosition$z = startPosition.z) !== null && _startPosition$z !== void 0 ? _startPosition$z : defaultPosition.z
          };
          const defaultAnimate = isAnimating ? {
            x: (_endPosition$x = endPosition.x) !== null && _endPosition$x !== void 0 ? _endPosition$x : defaultPosition.x,
            y: (_endPosition$y = endPosition.y) !== null && _endPosition$y !== void 0 ? _endPosition$y : defaultPosition.y
          } : {
            x: (_startPosition$x2 = startPosition.x) !== null && _startPosition$x2 !== void 0 ? _startPosition$x2 : defaultPosition.x,
            y: (_startPosition$y2 = startPosition.y) !== null && _startPosition$y2 !== void 0 ? _startPosition$y2 : defaultPosition.y
          };
          const handleAnimationComplete = () => {
            setAnimationEnded(true);
            onAnimationComplete === null || onAnimationComplete === void 0 || onAnimationComplete();
          };
          const motionProps = enable ? {
            initial: initial || defaultInitial,
            animate: animate || defaultAnimate,
            transition: _objectSpread({}, animation),
            onAnimationComplete: handleAnimationComplete
          } : {
            initial: false,
            animate: false
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, _objectSpread(_objectSpread(_objectSpread({
            style: _objectSpread({}, enable && animationEnded ? _objectSpread({
              zIndex: (_endPosition$z = endPosition.z) !== null && _endPosition$z !== void 0 ? _endPosition$z : defaultPosition.z
            }, styleAfterAnimation) : _objectSpread({}, style))
          }, motionProps), rest), {}, {
            children
          }));
        };
        const FooterAnimation = _ref2 => {
          let {
              children,
              type,
              enable = true
            } = _ref2,
            rest = _objectWithoutProperties(_ref2, _excluded2);
          const delay = reactExports.useMemo(() => {
            if (type === "chat" || type === "hamburger") return 0.83;
            if (type === "undo" || type === "doubleRepeatBtn") return 0.78;
            if (type === "chip") return 0.75;
            return 0.75;
          }, [type]);
          const duration = reactExports.useMemo(() => {
            if (type === "chat" || type === "hamburger") return 0.72;
            if (type === "undo" || type === "doubleRepeatBtn") return 0.68;
            if (type === "chip") return 0.62;
            return 0.62;
          }, [type]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(DisplacementContainer, _objectSpread(_objectSpread({
            enable,
            startPosition: {
              x: 0,
              y: type === "chip" ? "-150%" : "-100%"
            },
            endPosition: {
              x: 0,
              y: "0%",
              z: 1
            },
            animation: {
              duration,
              delay,
              type: "spring",
              stiffness: 250,
              damping: 60
            }
          }, rest), {}, {
            children
          }));
        };
        const chipTrayChips1 = "" + new URL('chips1-bOtshg4c.webp', module.meta.url).href + "";
        const chipTrayChips2 = "" + new URL('chips2-CyQm37fJ.webp', module.meta.url).href + "";
        function ChipActive({
          isSquare = false
        }) {
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn("ChipActive", {
              isSquare
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {}), /* @__PURE__ */jsxRuntimeExports.jsx("div", {}), /* @__PURE__ */jsxRuntimeExports.jsx("div", {}), /* @__PURE__ */jsxRuntimeExports.jsx("div", {}), /* @__PURE__ */jsxRuntimeExports.jsx("div", {}), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "static"
            })]
          });
        }
        function useChipTrayPress() {
          const [pressChipValue, setPressChipValue] = reactExports.useState(0);
          reactExports.useEffect(() => {
            const getPressChipValue = e => {
              const touch = e.touches[0];
              const elementUnderFinger = document.elementFromPoint(touch.clientX, touch.clientY);
              if (elementUnderFinger instanceof SVGPathElement) {
                setPressChipValue(Number(elementUnderFinger.getAttribute("data-value")));
              }
            };
            const onTouchEnd = () => {
              if (!pressChipValue) return;
              useCartStore.getState().setSelectChipVal(pressChipValue);
              useLayoutStore.setState({
                isOpenSelector: false
              });
              setPressChipValue(0);
            };
            document.addEventListener("touchstart", getPressChipValue);
            document.addEventListener("touchmove", getPressChipValue);
            document.addEventListener("touchend", onTouchEnd);
            return () => {
              document.removeEventListener("touchstart", getPressChipValue);
              document.removeEventListener("touchmove", getPressChipValue);
              document.removeEventListener("touchend", onTouchEnd);
            };
          }, [pressChipValue]);
          return pressChipValue;
        }
        const ChipTrayAnimation = _ref3 => {
          let {
              children,
              position,
              enable = true
            } = _ref3,
            rest = _objectWithoutProperties(_ref3, _excluded3);
          const startPosition = reactExports.useMemo(() => {
            if (position === "left") return {
              x: 16,
              y: 0
            };
            if (position === "right") return {
              x: -16,
              y: 0
            };
            if (position === "up") return {
              x: 0,
              y: 16
            };
            if (position === "down") return {
              x: 0,
              y: -16
            };
            return {
              x: 0,
              y: 0
            };
          }, [position]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(DisplacementContainer, _objectSpread(_objectSpread({
            enable,
            startPosition,
            endPosition: {
              x: 0,
              y: 0
            },
            animation: {
              duration: 0.6,
              delay: 1,
              type: "spring",
              stiffness: 250,
              damping: 60
            }
          }, rest), {}, {
            children
          }));
        };
        function FooterChip({
          value,
          isDisabled
        }) {
          const numValue = convertLabel(value);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
            id: "FooterChip",
            className: cn("g-chip", "absolute mb-[0.2rem] ml-[0.1rem] w-[2.625rem] text-[1.25rem]", {
              isDisabled
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(ChipImg, {
              val: value,
              isDisabled
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "stroke",
              children: numValue
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "text",
              children: numValue
            })]
          });
        }
        const FooterChip$1 = reactExports.memo(FooterChip);
        function ShineBorder() {
          const chipList = useCartStore(s => s.chipList);
          const selectedChipVal = useCartStore(s => s.selectedChipVal);
          const filteredChipList = chipList.filter(chip => chip.onTable);
          const IS_SMALL_DEVICE = useConfigStore(s => s.IS_SMALL_DEVICE);
          const shineDegree = filteredChipList.findIndex(chip => chip.amount === selectedChipVal);
          let basicDeg;
          let offsetDeg;
          if (IS_SMALL_DEVICE) {
            basicDeg = 52.5;
            offsetDeg = shineDegree * 140 / 7 + shineDegree * 9;
          } else {
            basicDeg = 70;
            offsetDeg = shineDegree * 130 / 7 + shineDegree * 6;
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "shine",
            style: {
              backgroundImage: `conic-gradient(
          from 180deg at 50% 53.11%,
          rgba(112, 7, 7, 0) ${offsetDeg + basicDeg}deg,
          rgba(0, 0, 0, 0.3) ${offsetDeg + basicDeg + 12}deg,
          #c3a785 ${offsetDeg + basicDeg + 24}deg,
          rgba(112, 7, 7, 0.3) ${offsetDeg + basicDeg + 36}deg,
          rgba(112, 7, 7, 0) ${offsetDeg + basicDeg + 48}deg
        )`
            }
          });
        }
        const ShineBorder$1 = reactExports.memo(ShineBorder);
        const chipsVariants$1 = {
          closed: {
            opacity: 0,
            x: 0,
            y: 0
          },
          open: index => {
            const totalItems = 8;
            const angleRange = 166 * Math.PI / 180;
            const startAngle = -Math.PI + 14 / 2 * Math.PI / 180;
            const angle = startAngle + index * angleRange / (totalItems - 1);
            const radius = 8.8;
            return {
              opacity: 1,
              x: Math.cos(angle) * radius * 0.95 + "rem",
              y: Math.sin(angle) * radius + "rem"
            };
          }
        };
        function ChipTray({
          enableAnimation = false
        }) {
          const isOpen = useLayoutStore(s => s.isOpenSelector);
          const toggleSelector = useLayoutStore(s => s.toggleSelector);
          const chipTrayList = useCartStore(s => s.chipList).filter(chip => chip.onTable === true);
          const selectedChipVal = useCartStore(s => s.selectedChipVal);
          const selectedChipIdx = useCartStore(s => s.selectedChipIdx);
          const isSquare = selectedChipIdx === 11;
          const pressChipValue = useChipTrayPress();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "ChipTray",
            className: cn("contents", {
              isOpen
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "blackBackground"
            }), isOpen && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "mask",
              onClick: () => toggleSelector()
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: cn("center absolute bottom-0 z-[1] w-full text-[1.25rem]", !isOpen && "pointer-events-none"),
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "chipWrap z-10",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                  src: logoLightImg,
                  className: "SvgLogo",
                  alt: "Crystal Logo Light"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(AnimatePresence, {
                  children: chipTrayList.map((chip, idx) => {
                    const isActive = isChipActive(chip.amount);
                    const isDisabled = isChipDisabled(chip.amount);
                    return /* @__PURE__ */jsxRuntimeExports.jsxs(motion.div, {
                      initial: "closed",
                      animate: isOpen ? "open" : "closed",
                      variants: chipsVariants$1,
                      custom: idx,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 256,
                        damping: 24,
                        mass: 1
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(ChipSelectorChip, {
                        value: chip.amount,
                        isActive,
                        isDisabled,
                        pressChipValue,
                        className: "chipTrayChip"
                      }), chip.amount === selectedChipVal && /* @__PURE__ */jsxRuntimeExports.jsx(ChipActive, {
                        isSquare
                      })]
                    }, idx);
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(ChipTrayPressArea$1, {})]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                src: Semicircle,
                className: "semicircle opacity-0",
                alt: "Semicircle decoration"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
                className: "oval z-[1]",
                animate: isOpen ? "open" : "closed",
                variants: {
                  open: {
                    opacity: 1,
                    scale: 1
                  },
                  closed: {
                    opacity: 0,
                    scale: 0.5
                  }
                },
                transition: {
                  duration: 0.5,
                  type: "spring",
                  stiffness: 256,
                  damping: 24,
                  mass: 1
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(ShineBorder$1, {})
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(FooterAnimation, {
              type: "chip",
              enable: enableAnimation,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea, {
                className: "z-[2] h-[3.125rem] w-[5.125rem]",
                onClick: toggleSelector,
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  id: "ChipBtn",
                  className: "center relative z-[1] -mb-1 cursor-pointer",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(FooterChip$1, {
                    value: selectedChipVal,
                    isDisabled: isChipDisabled(selectedChipVal)
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(ChipTrayAnimation, {
                    position: "left",
                    enable: enableAnimation,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                      src: chipTrayChips1,
                      className: "opacity-1 ml-1 h-[2.15rem]",
                      alt: "Chip tray"
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(ChipTrayAnimation, {
                    position: "right",
                    enable: enableAnimation,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                      src: chipTrayChips2,
                      className: "opacity-1 h-[2.15rem]",
                      alt: "Chip tray"
                    })
                  })]
                })
              })
            })]
          });
        }
        const ChipTrayPressArea$1 = () => {
          const chipTrayList = useCartStore(s => s.chipList).filter(chip => chip.onTable === true);
          const isOpen = useLayoutStore(s => s.isOpenSelector);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
            viewBox: "0 0 329 309",
            fill: "none",
            className: cn("absolute top-[-10.8rem] w-[21rem]", {
              hidden: !isOpen
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M4.52506 190.489C-1.27792 167.734 -1.50249 144.039 3.86829 121.192L76.4095 136.234C73.4642 148.763 73.5873 161.758 76.7697 174.236L4.52506 190.489Z",
              fill: "#ffffff66",
              "data-value": chipTrayList[0].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M3.85593 121.244C9.21823 98.3949 20.0361 76.9878 35.4933 58.6384L93.7527 101.929C85.276 111.992 79.3434 123.732 76.4027 136.263L3.85593 121.244Z",
              fill: "#ffffff66",
              "data-value": chipTrayList[1].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M35.4577 58.6806C50.908 40.3262 70.5952 25.5073 93.0335 15.3422L125.308 78.1858C113.003 83.7604 102.206 91.887 93.7332 101.953L35.4577 58.6806Z",
              fill: "#ffffff66",
              "data-value": chipTrayList[2].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M92.9821 15.3655C115.417 5.19316 140.018 -0.0606564 164.93 0.000528247L164.736 69.7724C151.074 69.7389 137.583 72.6201 125.28 78.1986L92.9821 15.3655Z",
              fill: "#ffffff66",
              "data-value": chipTrayList[3].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M164.873 0.000397809C186.302 0.046069 207.514 4.02347 227.319 11.7091L198.95 76.1934C188.089 71.9786 176.456 69.7974 164.705 69.7724L164.873 0.000397809Z",
              fill: "#ffffff66",
              "data-value": chipTrayList[4].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M227.319 11.7091C250.343 20.6441 270.906 34.374 287.455 51.8625L231.929 98.2136C222.853 88.6228 211.576 81.0934 198.95 76.1934L227.319 11.7091Z",
              fill: "#ffffff66",
              "data-value": chipTrayList[5].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M287.417 51.8226C306.297 71.7596 319.358 95.949 325.327 122.035L252.698 136.696C249.424 122.391 242.262 109.125 231.908 98.1917L287.417 51.8226Z",
              fill: "#ffffff66",
              "data-value": chipTrayList[6].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M325.315 121.982C330.559 144.856 330.202 168.549 324.272 191.275L252.119 174.667C255.371 162.205 255.567 149.211 252.691 136.667L325.315 121.982Z",
              fill: "#ffffff66",
              "data-value": chipTrayList[7].amount
            })]
          });
        };
        const chipTrayChips = "" + new URL('vertical_chips-BB5gtvs-.webp', module.meta.url).href + "";
        const chipsVariants = {
          closed: {
            opacity: 0,
            x: 0,
            y: 0
          },
          open: index => {
            const totalItems = 8;
            const angleRange = 3.14;
            const startAngle = 3.14;
            const angle = startAngle + index * angleRange / (totalItems - 1);
            const radius = 9.9;
            return {
              opacity: 1,
              x: Math.cos(angle) * radius * 0.78 + "rem",
              y: Math.sin(angle) * radius + "rem"
            };
          }
        };
        function ChipTrayVertical({
          enableAnimation = false
        }) {
          const isOpen = useLayoutStore(s => s.isOpenSelector);
          const toggleSelector = useLayoutStore(s => s.toggleSelector);
          const chipList = useCartStore(s => s.chipList).filter(chip => chip.onTable === true);
          const selectedChipVal = useCartStore(s => s.selectedChipVal);
          const selectedChipIdx = useCartStore(s => s.selectedChipIdx);
          const isSquare = selectedChipIdx === 11;
          const pressChipValue = useChipTrayPress();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "ChipTray",
            className: cn("smallDevice contents", {
              isOpen
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "blackBackground right-0 top-0"
            }), isOpen && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "mask",
              onClick: () => toggleSelector()
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: cn("center absolute right-[8rem] top-1/2 z-[1] w-full -translate-y-1/2 rotate-[270deg] text-[1.25rem]", !isOpen && "pointer-events-none"),
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "chipWrap z-10",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                  src: logoLightImg,
                  alt: "crystal logo light",
                  className: "SvgLogo -mb-1"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(AnimatePresence, {
                  children: chipList.map((chip, idx) => {
                    const isActive = isChipActive(chip.amount);
                    const isDisabled = isChipDisabled(chip.amount);
                    return /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
                      initial: "closed",
                      animate: isOpen ? "open" : "closed",
                      variants: chipsVariants,
                      custom: idx,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 256,
                        damping: 24,
                        mass: 1
                      },
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "rotate-[90deg] scale-[0.85]",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(ChipSelectorChip, {
                          value: chip.amount,
                          isActive,
                          isDisabled,
                          className: "text-[1.48rem]",
                          pressChipValue
                        }), chip.amount === selectedChipVal && /* @__PURE__ */jsxRuntimeExports.jsx(ChipActive, {
                          isSquare
                        })]
                      })
                    }, idx);
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(ChipTrayPressArea, {})]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                src: Semicircle,
                className: "semicircle opacity-0",
                alt: "Semicircle decoration"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
                className: "oval smallDevice",
                animate: isOpen ? "open" : "closed",
                variants: {
                  open: {
                    opacity: 1,
                    scale: 1
                  },
                  closed: {
                    opacity: 0,
                    scale: 0.5
                  }
                },
                transition: {
                  duration: 0.5,
                  type: "spring",
                  stiffness: 256,
                  damping: 24,
                  mass: 1
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(ShineBorder$1, {})
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea, {
              className: "z-[2] h-[5.125rem] w-[3.125rem]",
              onClick: toggleSelector,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                id: "ChipBtn",
                className: "center relative z-[1] cursor-pointer",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(FooterChip$1, {
                  value: selectedChipVal,
                  isDisabled: isChipDisabled(selectedChipVal)
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                  src: chipTrayChips,
                  alt: "Chip tray"
                })]
              })
            })]
          });
        }
        const ChipTrayPressArea = () => {
          const chipList = useCartStore(s => s.chipList).filter(chip => chip.onTable === true);
          const isOpen = useLayoutStore(s => s.isOpenSelector);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
            viewBox: "0 0 461 318",
            fill: "none",
            className: cn("absolute top-[-8rem] w-[29rem] rotate-90", {
              hidden: !isOpen
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M230.5 318C205.326 318 180.321 315.155 156.48 309.579L184.198 253.193C199.111 256.681 214.753 258.46 230.5 258.46L230.5 318Z",
              fill: "#ffffff66",
              "data-value": chipList[0].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M156.599 309.606C126.449 302.567 98.7392 291.296 75.216 276.504L133.364 232.503C148.079 241.756 165.412 248.806 184.272 253.21L156.599 309.606Z",
              fill: "#ffffff66",
              "data-value": chipList[1].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M75.3706 276.601C52.6918 262.366 34.3581 245.153 21.4433 225.97L99.7272 200.892C107.806 212.892 119.274 223.66 133.461 232.564L75.3706 276.601Z",
              fill: "#ffffff66",
              "data-value": chipList[2].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M21.5961 226.196C7.27764 205.015 -0.0956906 181.917 0.000937465 158.547L86.3142 158.716C86.2538 173.336 90.8661 187.784 99.8228 201.034L21.5961 226.196Z",
              fill: "#ffffff66",
              "data-value": chipList[3].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M0.00035116 158.722C0.05747 136.15 7.08115 113.845 20.6042 93.2908L99.2023 117.896C90.7432 130.754 86.3496 144.707 86.3138 158.826L0.00035116 158.722Z",
              fill: "#ffffff66",
              "data-value": chipList[4].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M20.5874 93.3164C33.2135 74.1164 51.249 56.8403 73.6445 42.4932L132.381 86.1207C118.372 95.0953 107.09 105.902 99.1918 117.912L20.5874 93.3164Z",
              fill: "#ffffff66",
              "data-value": chipList[5].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M73.5939 42.5257C95.983 28.1741 122.286 17.0373 150.973 9.76326L180.753 65.6468C162.808 70.197 146.355 77.1635 132.349 86.1409L73.5939 42.5257Z",
              fill: "#ffffff66",
              "data-value": chipList[6].amount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              opacity: "0",
              d: "M150.984 9.76044C178.175 2.86683 207.007 -0.429288 235.968 0.0447413L233.92 59.5675C215.804 59.271 197.769 61.3329 180.76 65.6451L150.984 9.76044Z",
              fill: "#ffffff66",
              "data-value": chipList[7].amount
            })]
          });
        };
        function FooterIcon(_ref4) {
          let {
              type,
              disable = false,
              className,
              animation = "default",
              onClick: parentOnClick
            } = _ref4,
            rest = _objectWithoutProperties(_ref4, _excluded4);
          const supportChatUnread = useChatStore(s => s.supportChatUnread);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(ClickableArea, _objectSpread(_objectSpread({
            className: cn("size-[3.125rem]", className),
            onClick: e => {
              parentOnClick === null || parentOnClick === void 0 || parentOnClick(e);
              playSound(["click"]);
            }
          }, rest), {}, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
              id: "FooterIcon",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              className: cn({
                disable
              }, "h-11 w-[2.85rem]"),
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("defs", {
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                  id: "FooterIcon_common",
                  x1: "0%",
                  y1: "0%",
                  x2: "0%",
                  y2: "100%",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "28.57%",
                    style: {
                      stopColor: "#efeacf",
                      stopOpacity: 1
                    }
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "64.29%",
                    style: {
                      stopColor: "#aaa48f",
                      stopOpacity: 1
                    }
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("defs", {
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                  id: "FooterIcon_disable",
                  x1: "0%",
                  y1: "0%",
                  x2: "0%",
                  y2: "100%",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "10%",
                    style: {
                      stopColor: "#575757",
                      stopOpacity: 1
                    }
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "38.23%",
                    style: {
                      stopColor: "#363535",
                      stopOpacity: 1
                    }
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "100%",
                    style: {
                      stopColor: "#1d1d1d",
                      stopOpacity: 1
                    }
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("g", {
                clipPath: `url(#FooterIcon-${type})`,
                children: /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                  width: "44",
                  height: "44",
                  fill: `url(#FooterIcon_${disable ? "disable" : "common"})`
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("clipPath", {
                id: "FooterIcon-chat",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  className: cn("chat_dot1", {
                    "no-animation": animation === "none"
                  }),
                  d: "M18.7408 23.6912C19.4243 23.6912 19.9783 23.1372 19.9783 22.4537C19.9783 21.7703 19.4243 21.2162 18.7408 21.2162C18.0574 21.2162 17.5033 21.7703 17.5033 22.4537C17.5033 23.1372 18.0574 23.6912 18.7408 23.6912Z",
                  fill: "currentColor"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  className: cn("chat_dot2", {
                    "no-animation": animation === "none"
                  }),
                  d: "M23.6908 22.4537C23.6908 23.1372 23.1368 23.6912 22.4533 23.6912C21.7699 23.6912 21.2158 23.1372 21.2158 22.4537C21.2158 21.7703 21.7699 21.2162 22.4533 21.2162C23.1368 21.2162 23.6908 21.7703 23.6908 22.4537Z",
                  fill: "currentColor"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  className: cn("chat_dot3", {
                    "no-animation": animation === "none"
                  }),
                  d: "M26.1658 23.6912C26.8493 23.6912 27.4033 23.1372 27.4033 22.4537C27.4033 21.7703 26.8493 21.2162 26.1658 21.2162C25.4824 21.2162 24.9283 21.7703 24.9283 22.4537C24.9283 23.1372 25.4824 23.6912 26.1658 23.6912Z",
                  fill: "currentColor"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M32.3533 22.4537C32.3533 27.9213 27.921 32.3537 22.4533 32.3537H12.5533V22.4537C12.5533 16.9861 16.9857 12.5537 22.4533 12.5537C27.921 12.5537 32.3533 16.9861 32.3533 22.4537ZM30.3733 22.4537C30.3733 26.8278 26.8274 30.3737 22.4533 30.3737H14.5333V22.4537C14.5333 18.0796 18.0792 14.5337 22.4533 14.5337C26.8274 14.5337 30.3733 18.0796 30.3733 22.4537Z",
                  fill: "currentColor"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("clipPath", {
                id: "FooterIcon-undo",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  className: cn("undo_arrow", {
                    "no-animation": animation === "none"
                  }),
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M 17.7665 12.4975 C 18.162 12.875 18.1766 13.5017 17.7991 13.8972 L 15.1966 16.6236 L 15.1966 18.6036 L 15.1966 18.6036 L 17.7991 21.3301 C 18.1766 21.7256 18.162 22.3523 17.7665 22.7298 C 17.371 23.1073 16.7443 23.0927 16.3668 22.6972 L 12.1668 18.2972 C 11.8017 17.9146 11.8017 17.3126 12.1669 16.93 L 16.3668 12.5301 C 16.7444 12.1346 17.371 12.12 17.7665 12.4975 Z",
                  fill: "#FEFEFE"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M 15.1966 16.6236 H 26.323 C 29.6962 16.6236 32.353 19.4748 32.353 22.8937 V 23.7737 C 32.353 27.1926 29.6962 30.0436 26.323 30.0436 H 14.563 C 14.0162 30.0436 13.573 29.6004 13.573 29.0536 C 13.573 28.5069 14.0162 28.0636 14.563 28.0636 H 26.323 C 28.5168 28.0636 30.373 26.1868 30.373 23.7737 V 22.8937 C 30.373 20.4805 28.5168 18.6036 26.323 18.6036 H 15.1966 Z",
                  fill: "#FEFEFE"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("clipPath", {
                id: "FooterIcon-repeat",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  className: cn("repeat_line1", {
                    "no-animation": animation === "none"
                  }),
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.1231 13.874C17.5668 13.874 13.8732 17.5677 13.8732 22.124C13.8732 26.6804 17.5668 30.3741 22.1231 30.3741C26.6795 30.3741 30.3732 26.6804 30.3732 22.124C30.3732 21.5773 30.8164 21.134 31.3632 21.134C31.91 21.134 32.3532 21.5773 32.3532 22.124C32.3532 27.7739 27.773 32.3541 22.1231 32.3541C16.4733 32.3541 11.8932 27.7739 11.8932 22.124C11.8932 16.4742 16.4733 11.894 22.1231 11.894C25.3352 11.894 28.2004 13.3745 30.0752 15.688L30.4166 14.5739C30.5769 14.0512 31.1305 13.7573 31.6533 13.9175C32.1761 14.0777 32.47 14.6314 32.3097 15.1541L31.3456 18.3C31.2181 18.7159 30.834 18.9999 30.399 18.9999H27.5352C26.9884 18.9999 26.5452 18.5566 26.5452 18.0099C26.5452 17.4631 26.9884 17.0199 27.5352 17.0199H28.6054C27.0938 15.1029 24.7514 13.874 22.1231 13.874Z",
                  fill: "#FEFEFE"
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("clipPath", {
                id: "FooterIcon-twice",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  className: cn("twice_line1", {
                    "no-animation": animation === "none"
                  }),
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M19.9768 17.3621C19.4747 16.068 18.0538 15.005 16.1257 15.0523C13.9946 15.1045 12.3642 16.735 12.2304 18.1412C12.1784 18.6878 11.6896 19.0891 11.1387 19.0374C10.5878 18.9858 10.1834 18.5008 10.2354 17.9542C10.4787 15.3988 13.0866 13.1379 16.0762 13.0646C18.7938 12.998 21.0203 14.5176 21.8469 16.6477C22.6986 18.8426 21.9802 21.4362 19.3457 23.2871C18.5803 23.8248 17.704 24.3156 16.8681 24.7837L16.798 24.823C15.9217 25.3138 15.0845 25.7859 14.3431 26.3073C13.2063 27.1066 12.4212 27.9326 12.1152 28.9492H19.7213C20.0756 28.9492 20.4155 28.8096 20.666 28.561L21.7883 27.4475C22.1796 27.0592 22.814 27.0592 23.2052 27.4475C23.5965 27.8357 23.5965 28.4651 23.2052 28.8534L22.0829 29.9669C21.4566 30.5884 20.6071 30.9375 19.7213 30.9375H9.96875V29.9434C9.96875 27.4725 11.5084 25.8637 13.1843 24.6851C14.0236 24.0949 14.9512 23.5743 15.8129 23.0916L15.8358 23.0788C16.708 22.5902 17.5071 22.1426 18.1877 21.6644C20.1821 20.2633 20.4538 18.5913 19.9768 17.3621Z",
                  fill: "#FEFEFE"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  className: cn("twice_line2", {
                    "no-animation": animation === "none"
                  }),
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M33.9116 22.0992C34.3028 22.4875 34.3028 23.1169 33.9116 23.5051L31.0214 26.3728L33.9116 29.2404C34.3028 29.6286 34.3028 30.2581 33.9116 30.6463C33.5203 31.0346 32.8859 31.0346 32.4946 30.6463L29.6045 27.7787L26.7143 30.6463C26.323 31.0346 25.6886 31.0346 25.2974 30.6463C24.9061 30.2581 24.9061 29.6286 25.2974 29.2404L28.1875 26.3728L25.2974 23.5051C24.9061 23.1169 24.9061 22.4875 25.2974 22.0992C25.6886 21.711 26.323 21.711 26.7143 22.0992L29.6045 24.9669L32.4946 22.0992C32.8859 21.711 33.5203 21.711 33.9116 22.0992Z",
                  fill: "#FEFEFE"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("clipPath", {
                id: "FooterIcon-hamburger",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.2137 15.335C13.2137 14.7102 13.7091 14.2036 14.3202 14.2036H30.9173C31.5284 14.2036 32.0237 14.7102 32.0237 15.335C32.0237 15.9599 31.5284 16.4665 30.9173 16.4665H14.3202C13.7091 16.4665 13.2137 15.9599 13.2137 15.335ZM13.2137 22.1236C13.2137 21.4987 13.7091 20.9922 14.3202 20.9922H30.9173C31.5284 20.9922 32.0237 21.4987 32.0237 22.1236C32.0237 22.7485 31.5284 23.255 30.9173 23.255H14.3202C13.7091 23.255 13.2137 22.7485 13.2137 22.1236Z",
                  fill: "#FEFEFE"
                }), animation === "default" ? /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  d: "M13.2137 28.9122 C 13.2137 28.2873 13.7091 27.7808 14.3202 27.7808 H 22.6187 C 23.2298 27.7808 23.7251 28.2873 23.7251 28.9122 C 23.7251 29.5371 23.2298 30.0436 22.6187 30.0436 H 14.3202 C 13.7091 30.0436 13.2137 29.5371 13.2137 28.9122 Z",
                  fill: "#FEFEFE",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("animate", {
                    attributeName: "d",
                    from: "M13.2137 28.9122 C 13.2137 28.2873 13.7091 27.7808 14.3202 27.7808 H 22.6187 C 23.2298 27.7808 23.7251 28.2873 23.7251 28.9122 C 23.7251 29.5371 23.2298 30.0436 22.6187 30.0436 H 14.3202 C 13.7091 30.0436 13.2137 29.5371 13.2137 28.9122 Z",
                    to: "M13.2137 28.9122C13.2137 28.2873 13.7091 27.7808 14.3202 27.7808H30.9173C31.5284 27.7808 32.0237 28.2873 32.0237 28.9122C32.0237 29.5371 31.5284 30.0436 30.9173 30.0436H14.3202C13.7091 30.0436 13.2137 29.5371 13.2137 28.9122Z",
                    dur: "0.72s",
                    fill: "freeze",
                    begin: "1s",
                    id: "hamburgerLineAnim"
                  })
                }) : /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                  d: "M13.2137 28.9122C13.2137 28.2873 13.7091 27.7808 14.3202 27.7808H30.9173C31.5284 27.7808 32.0237 28.2873 32.0237 28.9122C32.0237 29.5371 31.5284 30.0436 30.9173 30.0436H14.3202C13.7091 30.0436 13.2137 29.5371 13.2137 28.9122Z",
                  fill: "#FEFEFE"
                })]
              })]
            }), type === "hamburger" && supportChatUnread !== 0 && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: `absolute bottom-[54%] right-[22%] h-[0.625rem] w-[0.625rem] rounded-full border-[1.5px] border-[#16150E] bg-[linear-gradient(180deg,_#D94747_0%,_#731818_100%)]`
            })]
          }));
        }
        const FooterIcon$1 = reactExports.memo(FooterIcon);
        function Footer({
          enableAnimation = false
        }) {
          const toggleMenu = useLayoutStore(s => s.toggleMenu);
          const isOpen = useLayoutStore(s => s.isOpenSelector);
          const boardHistory = useCartStore(s => s.boardHistory);
          const boardHistoryCache = useCartStore(s => s.boardHistoryCache);
          const remainedBalance = useCartStore(s => s.remainedBalance);
          const handleDouble = useCartStore(s => s.handleDouble);
          const handleRepeat = useCartStore(s => s.handleRepeat);
          const handleUndo = useCartStore(s => s.handleUndo);
          const pressAttrs = useLongPress(() => useCartStore.setState({
            boardHistory: [],
            totalBet: 0
          }), {
            threshold: 1500
          });
          const cacheSum = boardHistoryCache ? Object.values(boardHistoryCache).reduce((a, b) => a + b, 0) : 0;
          const isRepeatDisable = !boardHistoryCache || remainedBalance - cacheSum < 0;
          const isBet = useBettingStore(s => s.isBet);
          const isOverLimit = useBettingStore(s => s.isOverLimit);
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          const DeviceContainer = reactExports.useMemo(() => ({
            children,
            type
          }) => {
            return isSmallDevice ? /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
              children
            }) : /* @__PURE__ */jsxRuntimeExports.jsx(FooterAnimation, {
              type,
              enable: enableAnimation,
              children
            });
          }, [enableAnimation, isSmallDevice]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(DisplacementContainer, {
            className: "flex flex-col overflow-hidden",
            startPosition: {
              x: -1e-3,
              y: 0
            },
            endPosition: {
              x: 0,
              y: 0
            },
            animation: {
              duration: 1.54,
              delay: 0
            },
            styleAfterAnimation: {
              overflow: "visible",
              zIndex: 3
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              id: "Footer",
              className: cn("relative mt-[.275rem] flex h-11 w-full select-none items-center pb-[.4188rem]", isOpen ? "z-[11]" : "z-[3]", {
                isSmallDevice
              }),
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(DeviceContainer, {
                type: "chat",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(FooterIcon$1, {
                  animation: enableAnimation ? "default" : "none",
                  type: "chat",
                  onClick: () => {
                    toggleMenu("chat");
                  }
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(DeviceContainer, {
                type: "undo",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(FooterIcon$1, _objectSpread(_objectSpread({}, pressAttrs), {}, {
                  animation: enableAnimation ? "default" : "none",
                  id: "MainUndoBtn",
                  disable: boardHistory.length === 0 || !isBet,
                  type: "undo",
                  onClick: handleUndo
                }))
              }), isSmallDevice ? /* @__PURE__ */jsxRuntimeExports.jsx(ChipTrayVertical, {
                enableAnimation
              }) : /* @__PURE__ */jsxRuntimeExports.jsx(ChipTray, {
                enableAnimation
              }), /* @__PURE__ */jsxRuntimeExports.jsx(DeviceContainer, {
                type: "doubleRepeatBtn",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "center",
                  id: "doubleRepeatBtn",
                  children: [boardHistory.length > 0 && /* @__PURE__ */jsxRuntimeExports.jsx(FooterIcon$1, {
                    animation: enableAnimation ? "default" : "none",
                    type: "twice",
                    disable: !isBet || isOverLimit,
                    onClick: handleDouble
                  }), boardHistory.length <= 0 && /* @__PURE__ */jsxRuntimeExports.jsx(FooterIcon$1, {
                    animation: enableAnimation ? "default" : "none",
                    type: "repeat",
                    disable: !isBet || isRepeatDisable,
                    onClick: handleRepeat
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(DeviceContainer, {
                type: "hamburger",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(FooterIcon$1, {
                  animation: enableAnimation ? "default" : "none",
                  type: "hamburger",
                  className: "h-12 w-[2.9rem]",
                  onClick: () => toggleMenu("index")
                })
              })]
            })
          });
        }
        const Footer$1 = reactExports.memo(Footer);
        const defaultOpacity = {
          start: 0,
          end: 1
        };
        const OpacityContainer = _ref5 => {
          var _opacity$start, _opacity$end, _opacity$start2;
          let {
              children,
              opacity = defaultOpacity,
              animation = defaultAnimation,
              isAnimating = true,
              initial,
              animate,
              style,
              styleAfterAnimation,
              onAnimationComplete,
              enable = true
            } = _ref5,
            rest = _objectWithoutProperties(_ref5, _excluded5);
          const [animationEnded, setAnimationEnded] = reactExports.useState(false);
          const defaultInitial = {
            opacity: (_opacity$start = opacity.start) !== null && _opacity$start !== void 0 ? _opacity$start : defaultOpacity.start
          };
          const defaultAnimate = isAnimating ? {
            opacity: (_opacity$end = opacity.end) !== null && _opacity$end !== void 0 ? _opacity$end : defaultOpacity.end
          } : {
            opacity: (_opacity$start2 = opacity.start) !== null && _opacity$start2 !== void 0 ? _opacity$start2 : defaultOpacity.start
          };
          const handleAnimationComplete = () => {
            setAnimationEnded(true);
            onAnimationComplete === null || onAnimationComplete === void 0 || onAnimationComplete();
          };
          if (!enable) return /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, _objectSpread(_objectSpread({
            initial: initial || defaultInitial,
            animate: animate || defaultAnimate,
            transition: _objectSpread({}, animation),
            onAnimationComplete: handleAnimationComplete,
            style: _objectSpread(_objectSpread({
              position: "relative"
            }, style), animationEnded ? styleAfterAnimation : {})
          }, rest), {}, {
            children
          }));
        };
        const defaultScale = {
          start: 1,
          end: 1
        };
        const ScaleContainer = _ref6 => {
          var _scale$start, _scale$end, _scale$start2;
          let {
              children,
              scale = defaultScale,
              animation = defaultAnimation,
              isAnimating = true,
              initial,
              animate,
              style,
              styleAfterAnimation,
              onAnimationComplete,
              enable = true
            } = _ref6,
            rest = _objectWithoutProperties(_ref6, _excluded6);
          const [animationEnded, setAnimationEnded] = reactExports.useState(false);
          const defaultInitial = {
            scale: (_scale$start = scale.start) !== null && _scale$start !== void 0 ? _scale$start : defaultScale.start
          };
          const defaultAnimate = isAnimating ? {
            scale: (_scale$end = scale.end) !== null && _scale$end !== void 0 ? _scale$end : defaultScale.end
          } : {
            scale: (_scale$start2 = scale.start) !== null && _scale$start2 !== void 0 ? _scale$start2 : defaultScale.start
          };
          const handleAnimationComplete = () => {
            setAnimationEnded(true);
            onAnimationComplete === null || onAnimationComplete === void 0 || onAnimationComplete();
          };
          if (!enable) return /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, _objectSpread(_objectSpread({
            initial: initial || defaultInitial,
            animate: animate || defaultAnimate,
            transition: _objectSpread({}, animation),
            onAnimationComplete: handleAnimationComplete,
            style: _objectSpread(_objectSpread({
              position: "relative",
              transformOrigin: "center"
            }, style), animationEnded ? styleAfterAnimation : {})
          }, rest), {}, {
            children
          }));
        };
        const HeaderAnimation = ({
          children,
          displacementProps,
          scaleProps,
          type,
          enable = true
        }) => {
          return /* @__PURE__ */jsxRuntimeExports.jsx(DisplacementContainer, _objectSpread(_objectSpread({
            enable,
            startPosition: {
              x: 0,
              y: type === "clock" ? "100%" : "150%"
            },
            endPosition: {
              x: 0,
              y: 0,
              z: 1
            },
            animation: {
              duration: 0.75,
              delay: 1.25,
              type: "spring",
              stiffness: 250,
              damping: 60
            },
            className: "z-[-1] overflow-hidden"
          }, displacementProps), {}, {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(ScaleContainer, _objectSpread(_objectSpread({
              enable,
              scale: {
                start: type === "clock" ? 0.75 : 0,
                end: 1
              },
              animation: {
                duration: 1.06,
                delay: 0.94,
                type: "spring",
                stiffness: 250,
                damping: 60
              }
            }, scaleProps), {}, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(OpacityContainer, {
                enable,
                opacity: {
                  start: 0.75,
                  end: 1
                },
                animation: {
                  duration: 0.5,
                  delay: 1.5,
                  type: "spring",
                  stiffness: 250,
                  damping: 60
                },
                children
              })
            }))
          }));
        };
        function useHeaderFontSize(targetRef) {
          const IS_SMALL_DEVICE = useConfigStore(s => s.IS_SMALL_DEVICE);
          const rootEmFontSize = useLayoutStore(s => s.rootEmFontSize);
          const {
            remainedBalance,
            totalBet
          } = useCartStore(s => ({
            remainedBalance: s.remainedBalance,
            totalBet: s.totalBet
          }));
          reactExports.useLayoutEffect(() => {
            const headerBar = document.getElementById("HeaderBar");
            const clock = document.getElementById("Clock");
            const targetEle = targetRef.current;
            if (!targetEle || !headerBar || !clock) return;
            const cloneWidth = targetEle.getBoundingClientRect().width;
            const headerBarWidth = headerBar.getBoundingClientRect().width;
            const clockWidth = clock.getBoundingClientRect().width > 0 ? clock.getBoundingClientRect().width : 2.07 * rootEmFontSize;
            const elementWidth = (headerBarWidth - clockWidth - 0.255 * 2 * rootEmFontSize) / 2;
            const scaleRatio = elementWidth / cloneWidth > 1 ? 1 : elementWidth / cloneWidth;
            const fontSize = scaleRatio * 0.688;
            useLayoutStore.setState({
              mobileHeaderFontSize: fontSize
            });
            const TotalBet = document.getElementById("TotalBet");
            const MainBalance = document.getElementById("MainBalance");
            if (!TotalBet || !MainBalance) return;
            TotalBet.style.fontSize = `${fontSize}rem`;
            MainBalance.style.fontSize = `${fontSize}rem`;
          }, [remainedBalance, totalBet, IS_SMALL_DEVICE, targetRef, rootEmFontSize]);
        }
        const Balance = reactExports.memo(function () {
          const {
            remainedBalance,
            currencySymbol
          } = useCartStore(s => ({
            remainedBalance: s.remainedBalance,
            currencySymbol: s.currencySymbol
          }));
          const mobileHeaderFontSize = useLayoutStore(s => s.mobileHeaderFontSize);
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
            id: "MainBalance",
            className: "center gap-[0.2rem] whitespace-nowrap text-[0.688rem] text-[#f4EFE8]",
            style: {
              fontSize: `${mobileHeaderFontSize}rem`
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
              className: "pairLabel",
              children: [t("COMMON.BALANCE"), ":"]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              className: "pairNumber",
              children: `${currencySymbol} ${thousandSeparator(remainedBalance)}`
            })]
          });
        });
        const TotalBet = reactExports.memo(() => {
          const mobileHeaderFontSize = useLayoutStore(s => s.mobileHeaderFontSize);
          const totalBet = useCartStore(s => s.totalBet);
          const lastWinCache = useWinNumberStore(s => s.lastWinCache);
          const {
            t
          } = useTranslation();
          const currencySymbol = useCartStore(s => s.currencySymbol);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
            id: "TotalBet",
            className: "center gap-[.2188rem] whitespace-nowrap text-[0.688rem] text-[#C9AE8D]",
            style: {
              fontSize: `${mobileHeaderFontSize}rem`
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
              className: "pairLabel",
              children: [lastWinCache ? t("COMMON.LAST_WIN") : t("COMMON.TOTAL_BET"), ":"]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              className: "pairNumber pr-[.0313rem]",
              children: `${currencySymbol} ${lastWinCache ? thousandSeparator(lastWinCache) : thousandSeparator(totalBet)}`
            })]
          });
        });
        const Clone = reactExports.memo(() => {
          const cloneRef = reactExports.useRef(null);
          const {
            remainedBalance,
            currencySymbol
          } = useCartStore(s => ({
            remainedBalance: s.remainedBalance,
            currencySymbol: s.currencySymbol
          }));
          const totalBet = useCartStore(s => s.totalBet);
          const {
            t
          } = useTranslation();
          useHeaderFontSize(cloneRef);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
            id: "Clone",
            ref: cloneRef,
            className: "center invisible absolute gap-[.2188rem] whitespace-nowrap text-[0.688rem] text-[#f4EFE8]",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
              className: "pairLabel",
              children: [t("COMMON.TOTAL_BET"), ":"]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              className: "pairNumber pr-[.0313rem]",
              children: `${currencySymbol} ${thousandSeparator(Math.max(remainedBalance, totalBet))}`
            })]
          });
        });
        const DeviceContainer = reactExports.memo(({
          children,
          type,
          enableAnimation
        }) => {
          return /* @__PURE__ */jsxRuntimeExports.jsx(HeaderAnimation, {
            type,
            enable: enableAnimation,
            children
          });
        });
        function Header({
          betResult,
          enableAnimation = false
        }) {
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(DisplacementContainer, {
            id: "Header",
            className: cn("z-[0] flex w-full flex-col px-2", {
              "fixed top-0 px-0 pr-5": isSmallDevice
            }),
            startPosition: {
              x: 0,
              y: -1e-3
            },
            endPosition: {
              x: 0,
              y: 0
            },
            animation: {
              duration: 2.2,
              delay: 0
            },
            children: [betResult && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "mr-[-0.5rem]",
              children: betResult
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              id: "HeaderBar",
              className: "relative flex w-full items-center justify-between py-[.125rem]",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Clone, {}), /* @__PURE__ */jsxRuntimeExports.jsx(DeviceContainer, {
                type: "balance",
                enableAnimation,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Balance, {})
              }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                className: "absolute left-1/2 -translate-x-1/2",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(DeviceContainer, {
                  type: "clock",
                  enableAnimation,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Clock, {})
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(DeviceContainer, {
                type: "totalBet",
                enableAnimation,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(TotalBet, {})
              })]
            })]
          });
        }
        const Header$1 = reactExports.memo(Header);
        const useBrowserLayoutEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : () => {};
        const getViewportSize = () => {
          let width = window.innerWidth;
          let height = window.innerHeight;
          if (window.visualViewport) {
            width = window.visualViewport.width;
            height = window.visualViewport.height;
          }
          width = Math.round(width);
          height = Math.round(height);
          return {
            width,
            height
          };
        };
        const fixScroll = () => scrollTo(0, 0);
        const useViewportSize = () => {
          const [viewportSize, setViewportSize] = reactExports.useState(getViewportSize());
          const updateViewportSize = reactExports.useCallback(() => {
            const viewportSize2 = getViewportSize();
            setViewportSize(oldViewportSize => {
              if (oldViewportSize && oldViewportSize.width === viewportSize2.width && oldViewportSize.height === viewportSize2.height) {
                return oldViewportSize;
              }
              return viewportSize2;
            });
            fixScroll();
          }, []);
          useBrowserLayoutEffect(updateViewportSize, [updateViewportSize]);
          reactExports.useEffect(() => {
            var _window$visualViewpor;
            const effectTwice = () => {
              updateViewportSize();
              setTimeout(updateViewportSize, 200);
            };
            window.addEventListener("resize", effectTwice);
            window.addEventListener("orientationchange", effectTwice);
            (_window$visualViewpor = window.visualViewport) === null || _window$visualViewpor === void 0 || _window$visualViewpor.addEventListener("resize", effectTwice);
            window.addEventListener("scroll", fixScroll);
            return () => {
              var _window$visualViewpor2;
              window.removeEventListener("resize", effectTwice);
              window.removeEventListener("orientationchange", effectTwice);
              (_window$visualViewpor2 = window.visualViewport) === null || _window$visualViewpor2 === void 0 || _window$visualViewpor2.removeEventListener("resize", effectTwice);
              window.removeEventListener("scroll", fixScroll);
            };
          }, [updateViewportSize]);
          return viewportSize;
        };
        function useKeyboardMargin() {
          const isSmallDevice = useConfigStore(state => state.IS_SMALL_DEVICE);
          const OFFSET = isSmallDevice ? 0.5 : 2.75;
          const isVirtualKeyboardOpened = useLayoutStore(state => state.isVirtualKeyboardOpened);
          const visualViewportMargin = useLayoutStore(state => state.visualViewportMargin);
          const rootEmFontSize = useLayoutStore(state => state.rootEmFontSize);
          const [mainBoardMb, setMainBoardMb] = reactExports.useState(0);
          useViewportSize();
          reactExports.useEffect(() => {
            if (isVirtualKeyboardOpened) {
              const margin = visualViewportMargin - OFFSET * rootEmFontSize;
              setMainBoardMb(margin > 0 ? margin : 0);
            } else {
              setMainBoardMb(0);
            }
          }, [visualViewportMargin, isVirtualKeyboardOpened, rootEmFontSize, OFFSET]);
          return mainBoardMb;
        }
        function FooterLayout(props) {
          const {
            header,
            isHeaderMultiLineText = false,
            content,
            footer,
            hideScrollHint,
            contentWrapClassName,
            scrollWrapClassName
          } = props;
          const {
            requireContentShadow = false,
            leftIcon = true
          } = props;
          const {
            menuPage,
            closeMenu,
            goBackMenu,
            getIsFullHeight
          } = useLayoutStore();
          const scrollWrapRef = reactExports.useRef(null);
          usePreventPullToRefresh(scrollWrapRef);
          const isOpenMenu = menuPage !== null;
          const isFull = getIsFullHeight() && isOpenMenu;
          const [isBottom, setIsBottom] = reactExports.useState(false);
          const handleScroll = e => {
            const target = e.target;
            const scrollEnd = target.scrollHeight - target.scrollTop === target.clientHeight;
            if (isBottom !== scrollEnd) setIsBottom(scrollEnd);
          };
          const renderLeftIcon = () => {
            if (leftIcon) {
              return /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Left, {
                className: "size-11 cursor-pointer",
                onClick: () => {
                  goBackMenu();
                  playSound(["click"]);
                }
              });
            }
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "size-11"
            });
          };
          reactExports.useEffect(() => {
            if (!menuPage || skipScrollPages.includes(menuPage)) return;
            scrollWrapToTop();
          }, [menuPage]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              id: "FooterMenu",
              className: cn({
                isOpenMenu,
                isFull
              }),
              "data-modal-type": menuPage,
              children: [header && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: cn("flex items-center justify-between px-4 pb-[0.0625rem] pt-4", {
                  "pb-4": isHeaderMultiLineText
                }),
                children: [renderLeftIcon(), typeof header === "string" ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "goldenHeader ml-[0.1rem] mt-[0.1rem]",
                  children: header
                }) : header, /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Close, {
                  className: "size-11 cursor-pointer",
                  onClick: () => {
                    playSound(["click"]);
                    closeMenu();
                  }
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: cn("contentWrap", contentWrapClassName),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  ref: scrollWrapRef,
                  className: cn("scrollWrap", scrollWrapClassName),
                  onScroll: handleScroll,
                  children: content
                }), requireContentShadow && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "scrollShadow"
                }), !hideScrollHint && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: cn("h-[5rem]", "scrollShadow", "transition-opacity", "pointer-events-none", {
                    "opacity-0": isBottom
                  })
                })]
              }), footer]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "FooterMenuMask",
              onClick: () => {
                playSound(["click"]);
                closeMenu();
              }
            })]
          });
        }
        const Layout = reactExports.memo(FooterLayout);
        function SafariHint() {
          const closeMenu = useLayoutStore().closeMenu;
          const {
            t
          } = useTranslation();
          reactExports.useEffect(() => {
            localStorage.setItem("safariLaunch", " ");
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "SafariHint",
            className: "flex w-full flex-col items-center px-4 pb-6 pt-4",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "goldenHeader flex items-center justify-between self-stretch",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "w-8"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                children: t("COMMON.SAFARI_HINT1")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Close, {
                onClick: closeMenu,
                className: "w-8 cursor-pointer"
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "mb-[1.1875rem] w-[8.9375rem] text-center text-xs leading-4 tracking-[-0.015rem] text-[#B0B0B0]",
              children: t("COMMON.SAFARI_HINT2")
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "mb-[1.1875rem] flex items-center",
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                className: "ml-[-0.7rem] h-[16.0625rem]",
                src: safariHint,
                alt: "Safari Hint"
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "btn cursor-pointer",
              onClick: closeMenu,
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "inner",
                children: t("COMMON.SKIP")
              })
            })]
          });
        }
        const SafariHint$1 = reactExports.memo(SafariHint);
        function MenuBottom({
          menus
        }) {
          const {
            t,
            i18n
          } = useTranslation();
          const masterVolume = useSettingStore(s => s.masterVolume);
          const toggleAllVolume = useSettingStore(s => s.toggleAllVolume);
          const exitGame = useConfigStore(s => s.exitGame);
          const selectedLanguageDisplay = reactExports.useMemo(() => {
            var _LANGUAGES$find;
            return ((_LANGUAGES$find = LANGUAGES.find(item => {
              var _i18n$resolvedLanguag;
              return item.code === ((_i18n$resolvedLanguag = i18n.resolvedLanguage) !== null && _i18n$resolvedLanguag !== void 0 ? _i18n$resolvedLanguag : i18n.language);
            })) === null || _LANGUAGES$find === void 0 ? void 0 : _LANGUAGES$find.name) || LANGUAGES[0].name;
          }, [i18n.resolvedLanguage, i18n.language]);
          const muted = masterVolume === 0;
          const menuRenderers = {
            gameSettings: () => /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex h-[3.75rem] items-center justify-between self-stretch border-t-[0.0625rem] border-[#252525]",
              onClick: () => {
                useLayoutStore.setState({
                  menuPage: "setting"
                });
                playSound(["click"]);
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-2 text-[0.875rem] font-normal leading-5 tracking-[-0.0262rem] text-[#f9f9f9]",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Icon.Setting, {
                  className: "w-5"
                }), t("COMMON.GAME_SETTINGS")]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Icon.RightGolden, {
                className: "w-4"
              })]
            }),
            language: () => /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex h-[3.75rem] justify-between self-stretch border-t-[0.0625rem] border-[#252525]",
              onClick: () => {
                useLayoutStore.setState({
                  menuPage: "language"
                });
                playSound(["click"]);
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-2 text-[0.875rem] font-normal leading-5 tracking-[-0.0262rem] text-[#f9f9f9]",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Icon.Language, {
                  className: "w-5"
                }), t("COMMON.LANGUAGE")]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-[0.125rem] pt-[0.08rem]",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "g-text-golden overflow-hidden text-ellipsis whitespace-nowrap pt-[0.1rem] text-xs font-normal uppercase leading-4 tracking-[.045rem]",
                  children: selectedLanguageDisplay
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Icon.RightGolden, {
                  className: "w-4"
                })]
              })]
            }),
            sound: () => /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex h-[3.75rem] items-center justify-between self-stretch border-t-[0.0625rem] border-[#252525]",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-2 text-[0.875rem] font-normal leading-5 tracking-[-0.0262rem] text-[#f9f9f9]",
                children: [muted ? /* @__PURE__ */jsxRuntimeExports.jsx(Icon.SoundOff, {
                  className: "w-5"
                }) : /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Sound, {
                  className: "w-5"
                }), t("COMMON.SOUND")]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea, {
                className: "size-[3.125rem]",
                onClick: () => {
                  playSound(["click"]);
                  toggleAllVolume();
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Toggle, {
                  checked: !muted
                })
              })]
            }),
            help: () => /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex h-[3.75rem] items-center justify-between self-stretch border-t-[0.0625rem] border-[#252525]",
              onClick: () => {
                useLayoutStore.setState({
                  menuPage: "rules"
                });
                playSound(["click"]);
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-2 text-[0.875rem] font-normal leading-5 tracking-[-0.0262rem] text-[#f9f9f9]",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Icon.Help, {
                  className: "w-[1.3125rem]"
                }), t("COMMON.HELP")]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Icon.RightGolden, {
                className: "w-4"
              })]
            }),
            exit: () => /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "flex h-[3.75rem] items-center justify-between self-stretch border-t-[0.0625rem] border-[#252525]",
              onClick: exitGame,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-2 text-[0.875rem] font-normal leading-5 tracking-[-0.0262rem] text-[#f9f9f9]",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Icon.Exit, {
                  className: "w-[1.3125rem]"
                }), t("COMMON.EXIT")]
              })
            })
          };
          return menus.map(menu => {
            const renderMenu = menuRenderers[menu];
            return renderMenu ? /* @__PURE__ */jsxRuntimeExports.jsx(React.Fragment, {
              children: renderMenu()
            }, menu) : null;
          });
        }
        function MenuButton(props) {
          const {
            icon,
            label,
            textClassName,
            menuPage,
            onClick
          } = props;
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          const masterVolume = useSettingStore(s => s.masterVolume);
          const isSupport = menuPage === "chat_support";
          const isSound = icon === "Sound";
          const muted = masterVolume === 0;
          const IconComponent = Icon[icon];
          const id = `mobileMenuButton${icon}`;
          const iconElement = /* @__PURE__ */jsxRuntimeExports.jsx(IconComponent, {
            className: "h-7 w-7"
          });
          const soundIcon = muted ? /* @__PURE__ */jsxRuntimeExports.jsx(Icon.SoundOff, {
            className: "w-5"
          }) : /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Sound, {
            className: "w-5"
          });
          const comingSoon = () => tooltipEventBus.emit("comingSoon", {
            anchorSelect: `#${id}`
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id,
            className: `relative flex cursor-pointer flex-col items-center gap-[0.4rem]`,
            onClick: onClick ? onClick : comingSoon,
            children: [isSound ? soundIcon : iconElement, isSupport && /* @__PURE__ */jsxRuntimeExports.jsx(NotificationHint, {
              className: `${isSmallDevice ? "right-[1.5rem]" : "right-[2rem]"} top-[-0.75rem]`
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: `text-xs font-normal tracking-[-0.015rem] ${textClassName !== null && textClassName !== void 0 ? textClassName : ""}`,
              children: label
            })]
          });
        }
        const createMenuButton = (icon, translationKey, menuPage) => {
          const ButtonComponent = () => {
            const {
              t
            } = useTranslation();
            return /* @__PURE__ */jsxRuntimeExports.jsx(MenuButton, {
              icon,
              label: t(translationKey),
              menuPage,
              onClick: menuPage ? () => {
                useLayoutStore.setState({
                  menuPage
                });
                playSound(["click"]);
              } : void 0
            });
          };
          return ButtonComponent;
        };
        const buttons = {
          lobby: () => createMenuButton("Lobby", "COMMON.LOBBY"),
          statistics: () => createMenuButton("Statistics", "COMMON.STATISTICS", "statistics"),
          payTable: () => createMenuButton("PayTable", "COMMON.PAYTABLE", "limits"),
          history: () => createMenuButton("History", "COMMON.HISTORY", "history"),
          chat: () => createMenuButton("ChatButton", "COMMON.CHAT", "chat"),
          support: () => createMenuButton("HeadPhones", "COMMON.SUPPORT", "chat_support"),
          gameSettings: () => createMenuButton("Setting", "COMMON.GAME_SETTINGS", "setting"),
          language: () => createMenuButton("Language", "COMMON.LANGUAGE", "language"),
          sound: () => createMenuButton("Sound", "COMMON.SOUND"),
          help: () => createMenuButton("Help", "COMMON.HELP", "rules"),
          exit: () => createMenuButton("Exit", "COMMON.EXIT")
        };
        function MenuTop({
          menus
        }) {
          return menus.map((menu, index) => {
            var _buttons$menu;
            const ButtonComponent = (_buttons$menu = buttons[menu]) === null || _buttons$menu === void 0 ? void 0 : _buttons$menu.call(buttons);
            if (!ButtonComponent) return null;
            const shouldShowDivider = index !== 2 && index !== 5;
            return /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(ButtonComponent, {}), shouldShowDivider && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "my-[0.3125rem] bg-[#323232]"
              })]
            }, index);
          });
        }
        const defaultMenus = ["lobby", "statistics", "payTable", "history", "chat", "support", "gameSettings", "language", "sound", "help", "exit"];
        const gameVisibilityMenu = {
          [GameType.AUTO_ROULETTE]: defaultMenus,
          [GameType.ROULETTE]: defaultMenus,
          [GameType.SIC_BO]: defaultMenus,
          [GameType.AUTO_SIC_BO]: defaultMenus,
          [GameType.BACCARAT]: ["lobby", "history", "payTable", "chat", "help", "support", "gameSettings", "language", "sound", "exit"]
        };
        function GameMenu() {
          const JURISDICTION = useConfigStore(s => s.JURISDICTION);
          const LOBBY_URL = useConfigStore(s => s.LOBBY_URL);
          const GAME_TYPE = useConfigStore(s => s.GAME_TYPE);
          const canShowExit = reactExports.useMemo(() => isInIframe() || !!LOBBY_URL, [LOBBY_URL]);
          const {
            topMenus,
            bottomMenus
          } = reactExports.useMemo(() => {
            var _gameVisibilityMenu$G;
            const menus = (_gameVisibilityMenu$G = gameVisibilityMenu[GAME_TYPE]) !== null && _gameVisibilityMenu$G !== void 0 ? _gameVisibilityMenu$G : defaultMenus;
            const availableMenus = menus.filter(item => {
              if (!JURISDICTION.SHOW_LOBBY_ALLOWED && item === "lobby") return false;
              if (!JURISDICTION.SHOW_SUPPORT_CHAT && item === "support") return false;
              if (!canShowExit && item === "exit") return false;
              return true;
            });
            return {
              topMenus: availableMenus.slice(0, 6),
              bottomMenus: availableMenus.slice(6)
            };
          }, [GAME_TYPE, JURISDICTION.SHOW_LOBBY_ALLOWED, JURISDICTION.SHOW_SUPPORT_CHAT, canShowExit]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "mb-[0.4rem] mt-3 flex w-full flex-col items-center gap-5 px-[1rem] pt-4",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "grid grid-cols-[1fr_0.0625rem_1fr_0.0625rem_1fr] gap-x-[0.22rem] gap-y-6 self-stretch",
              children: /* @__PURE__ */jsxRuntimeExports.jsx(MenuTop, {
                menus: topMenus
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "flex flex-col items-start self-stretch px-[.5rem] pt-[0.13rem]",
              children: /* @__PURE__ */jsxRuntimeExports.jsx(MenuBottom, {
                menus: bottomMenus
              })
            })]
          });
        }
        function BaseFooterMenu(props) {
          const {
            extendedMenu,
            settingContent
          } = props;
          const menuPage = useLayoutStore(state => state.menuPage);
          const titleList = useDataStore(state => state.titleList);
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          const {
            t
          } = useTranslation();
          const menuComponents = _objectSpread({
            history: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: t("COMMON.GAME_HISTORY"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(GameHistory, {})
            }),
            history_content: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: /* @__PURE__ */jsxRuntimeExports.jsx(GameHistoryContentHeader, {}),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(GameHistoryContent, {}),
              scrollWrapClassName: "pb-[3.5rem]"
            }),
            limits: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: t("COMMON.PAYOUTS_LIMITS"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(GameLimit, {})
            }),
            chat: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: /* @__PURE__ */jsxRuntimeExports.jsx(ChatHeader, {}),
              isHeaderMultiLineText: true,
              content: /* @__PURE__ */jsxRuntimeExports.jsx(ChatRoom, {
                type: RoomType.Live
              })
            }),
            chat_support: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: t("COMMON.SUPPORT"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(ChatRoom, {
                type: RoomType.Support
              })
            }),
            setting: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: t("COMMON.SETTINGS"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(Setting, {
                gameSpecificsElement: settingContent === null || settingContent === void 0 ? void 0 : settingContent.gameSpecificsElement
              }),
              scrollWrapClassName: "pb-[2.5rem]"
            }),
            language: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: t("COMMON.LANGUAGE"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(SettingLanguage, {}),
              scrollWrapClassName: "pb-[3rem]"
            }),
            safari_hint: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              content: /* @__PURE__ */jsxRuntimeExports.jsx(SafariHint$1, {}),
              hideScrollHint: true
            }),
            autoplay: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: t("COMMON.AUTOPLAY"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(AutoPlay, {
                requireTitle: false
              }),
              leftIcon: false
            }),
            rules: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: t("COMMON.HELP_RULES"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(GameRule, {
                titleList
              }),
              scrollWrapClassName: "pb-[2.6875rem]"
            }),
            rules_inner: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: t("COMMON.GAMES_RULES"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(GameRuleInfo, {
                children: /* @__PURE__ */jsxRuntimeExports.jsx(GameRules, {})
              }),
              scrollWrapClassName: "pb-[2.6875rem]"
            }),
            default: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              scrollWrapClassName: cn("max-h-[25.91875rem] pb-[3.6rem]", {
                "max-h-[25.29569rem] pb-[3rem]": isSmallDevice
              }),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(GameMenu, {})
            })
          }, extendedMenu);
          return menuComponents[menuPage] || menuComponents.default;
        }
        function MobileBettingMode() {
          const {
            t
          } = useTranslation();
          const betMode = useBettingStore(s => s.betMode);
          const toggleType = betMode2 => {
            useBettingStore.setState({
              betMode: betMode2
            });
          };
          const getBettingModeImage = betMode2 => {
            if (betMode2 === "straight") return StraightUp;
            if (betMode2 === "fullComplete") return FullComplete;
            return Default;
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "px-[0.875rem] pb-6",
            id: "BettingMode",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "relative mb-6 mt-[0.7rem] flex px-[0.125rem]",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                src: getBettingModeImage(betMode),
                alt: "Betting mode"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("box left-0 w-[34.1%]", {
                  active: betMode === "default"
                }),
                onClick: () => toggleType("default"),
                children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: t("COMMON.MODE_DEFAULT")
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("box left-[33%] w-[34%]", {
                  active: betMode === "straight"
                }),
                onClick: () => toggleType("straight"),
                children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: t("COMMON.MODE_STRAIGHT")
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("box right-0 w-[33.9%]", {
                  active: betMode === "fullComplete"
                }),
                onClick: () => toggleType("fullComplete"),
                children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: t("COMMON.MODE_FULL_COMPLETE")
                })
              })]
            })
          });
        }
        function FooterMenu() {
          const {
            t
          } = useTranslation();
          const menuPage = useLayoutStore(state => state.menuPage);
          const activeStatisticTab = useStatisticStore(state => state.activeTab);
          const requireContentShadow = menuPage === "statistics" && activeStatisticTab === "last500";
          const extendedMenu = {
            betting_mode: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: t("ROULETTE.BETTING_MODE"),
              leftIcon: false,
              content: /* @__PURE__ */jsxRuntimeExports.jsx(MobileBettingMode, {})
            }),
            statistics: /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
              header: t("COMMON.STATISTICS"),
              footer: /* @__PURE__ */jsxRuntimeExports.jsx(StatisticFooter, {}),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(Statistic, {}),
              hideScrollHint: true,
              requireContentShadow
            })
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(BaseFooterMenu, {
            extendedMenu
          });
        }
        function useChipTextSize(targetRef, sizeRatio, boardName) {
          const [chipTextSize, setChipTextSize] = reactExports.useState(0);
          const isRaceTrack = useBettingStore(s => s.isRaceTrack);
          const previousWidthRef = reactExports.useRef(0);
          reactExports.useEffect(() => {
            const targetEle = targetRef.current;
            if (!targetEle) return;
            let timeoutId;
            const updateTextSize = width => {
              const textSize = Number((width * sizeRatio).toFixed(6));
              setChipTextSize(textSize);
              useLayoutStore.setState(prev => ({
                chipTextSize: _objectSpread(_objectSpread({}, prev.chipTextSize), {}, {
                  [boardName]: textSize
                })
              }));
            };
            const processWidth = () => {
              var _targetEle$clientWidt;
              const width = (_targetEle$clientWidt = targetEle.clientWidth) !== null && _targetEle$clientWidt !== void 0 ? _targetEle$clientWidt : 0;
              if (width !== 0) {
                updateTextSize(width);
              } else {
                timeoutId = setTimeout(getWidth, 300);
              }
            };
            const getWidth = () => {
              if (!targetEle) return;
              const anim = targetEle.getAnimations();
              if (!anim.length) return processWidth();
              Promise.all(anim.map(anim2 => anim2.finished)).then(processWidth).catch(processWidth);
            };
            getWidth();
            const resizeObserver = new ResizeObserver(entries => {
              if (!entries || entries.length === 0) return;
              const newWidth = entries[0].contentRect.width;
              if (previousWidthRef.current !== newWidth) {
                getWidth();
                previousWidthRef.current = newWidth;
              }
            });
            resizeObserver.observe(targetEle);
            return () => {
              resizeObserver.disconnect();
              clearTimeout(timeoutId);
            };
          }, [isRaceTrack, sizeRatio]);
          return chipTextSize;
        }
        const BOARD_COL_COUNT_MEDIAN = 7.5;
        const Lattice = reactExports.memo(props => {
          var _highlights$includes;
          const {
            pos,
            id,
            className,
            children,
            highlights,
            chipTextSize
          } = props;
          const [colStart, colEnd, rowStart, rowEnd] = pos;
          const isHighlighted = (_highlights$includes = highlights === null || highlights === void 0 ? void 0 : highlights.includes(id)) !== null && _highlights$includes !== void 0 ? _highlights$includes : false;
          const isRaceTrack = useBettingStore(s => s.isRaceTrack);
          const isSlope = useBettingStore(s => !s.isBet);
          const chipSkewXDeg = ((colStart + colEnd) / 2 - BOARD_COL_COUNT_MEDIAN) * -0.8;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
            id: `${betGridPrefix}${id}`,
            className: cn("center", className, isHighlighted && "highlighted"),
            style: {
              gridArea: `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`
            },
            children: [children, /* @__PURE__ */jsxRuntimeExports.jsx(ChipContainer, {
              chipId: id,
              chipStyle: "w-[11%] h-[6.25%]",
              showWin: !isRaceTrack,
              isSlope,
              chipTextSize,
              chipSkewXDeg
            })]
          });
        });
        const Grids = reactExports.memo(({
          highlights,
          chipTextSize
        }) => {
          const isSlope = useBettingStore(state => !state.isBet);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn("Grids", isSlope && "isSlope"),
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "visibleBoard contents",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [1, 3, 3, 9],
                id: BetTypeEnum.LOW,
                className: "ml-[0.0625em] rounded-tl-[0.9em]",
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [1, 3, 9, 15],
                id: BetTypeEnum.EVEN,
                className: "ml-[0.0625em]",
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [1, 3, 15, 21],
                id: BetTypeEnum.RED,
                className: "ml-[0.0625em]",
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [1, 3, 21, 27],
                id: BetTypeEnum.BLACK,
                className: "ml-[0.0625em]",
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [1, 3, 27, 33],
                id: BetTypeEnum.ODD,
                className: "ml-[0.0625em]",
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [1, 3, 33, 39],
                id: BetTypeEnum.HIGH,
                className: "ml-[0.0625em] rounded-bl-[0.9em]",
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [3, 12, 1, 3],
                id: BetTypeEnum.STRAIGHT_UP_0,
                className: "mt-[0.0625em] rounded-t-[0.9em]",
                highlights,
                chipTextSize
              }), Array.from({
                length: 12
              }, (_, i) => i + 1).map(num => /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  pos: [3, 6, num * 3, num * 3 + 3],
                  id: `straight-${String(num * 3 - 2)}`,
                  highlights,
                  chipTextSize
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  pos: [6, 9, num * 3, num * 3 + 3],
                  id: `straight-${String(num * 3 - 1)}`,
                  highlights,
                  chipTextSize
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  pos: [9, 12, num * 3, num * 3 + 3],
                  id: `straight-${String(num * 3)}`,
                  highlights,
                  chipTextSize
                })]
              }, num)), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [12, 14, 3, 15],
                id: BetTypeEnum.DOZEN_1,
                className: "mr-[0.0625em] rounded-tr-[0.9em]",
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [12, 14, 15, 27],
                id: BetTypeEnum.DOZEN_13,
                className: "mr-[0.0625em]",
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [12, 14, 27, 39],
                id: BetTypeEnum.DOZEN_25,
                className: "mr-[0.0625em] rounded-br-[0.9em]",
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [3, 6, -3, -1],
                id: BetTypeEnum.COLUMN_1,
                className: "rounded-bl-[0.9em]",
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [6, 9, -3, -1],
                id: BetTypeEnum.COLUMN_2,
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [9, 12, -3, -1],
                id: BetTypeEnum.COLUMN_3,
                className: "rounded-br-[0.9em]",
                highlights,
                chipTextSize
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "invisibleBoard contents",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [2, 4, 2, 4],
                id: BetTypeEnum.CORNER_0_1_2_3,
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [4, 5, 2, 4],
                id: BetTypeEnum.SPLIT_0_1,
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [5, 7, 2, 4],
                id: BetTypeEnum.STREET_0_1_2,
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [7, 8, 2, 4],
                id: BetTypeEnum.SPLIT_0_2,
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [8, 10, 2, 4],
                id: BetTypeEnum.STREET_0_2_3,
                highlights,
                chipTextSize
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [10, 11, 2, 4],
                id: BetTypeEnum.SPLIT_0_3,
                highlights,
                chipTextSize
              }), Array.from({
                length: 11
              }, (_, i) => i * 3).map(num => /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                pos: [2, 4, num + 5, num + 7],
                id: `line-${num + 1}`,
                highlights,
                chipTextSize
              }, num)), Array.from({
                length: 12
              }, (_, i) => i * 3 + 4).map(num => /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  pos: [2, 4, num, num + 1],
                  id: `street-${num - 3}_${num - 2}_${num - 1}`,
                  highlights,
                  chipTextSize
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  pos: [5, 7, num, num + 1],
                  id: `split-${num - 3}_${num - 2}`,
                  highlights,
                  chipTextSize
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  pos: [8, 10, num, num + 1],
                  id: `split-${num - 2}_${num - 1}`,
                  highlights,
                  chipTextSize
                })]
              }, num)), Array.from({
                length: 11
              }, (_, i) => i * 3 + 5).map(num => /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  pos: [5, 7, num, num + 2],
                  id: `corner-${num - 4}_${num - 3}_${num - 1}_${num}`,
                  highlights,
                  chipTextSize
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  pos: [8, 10, num, num + 2],
                  id: `corner-${num - 3}_${num - 2}_${num}_${num + 1}`,
                  highlights,
                  chipTextSize
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  pos: [4, 5, num, num + 2],
                  id: `split-${num - 4}_${num - 1}`,
                  highlights,
                  chipTextSize
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  pos: [7, 8, num, num + 2],
                  id: `split-${num - 3}_${num}`,
                  highlights,
                  chipTextSize
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  pos: [10, 11, num, num + 2],
                  id: `split-${num - 2}_${num + 1}`,
                  highlights,
                  chipTextSize
                })]
              }, num))]
            })]
          });
        });
        function BetGrid() {
          const bettingBoardArgs = {
            convertBetMap: convertRouletteMap,
            getAddChipParams,
            boardID: BoardIDEnum.GRID_MOBILE
          };
          const _useBettingBoard = useBettingBoard(bettingBoardArgs),
            {
              handlePointerDown,
              handlePointerUp
            } = _useBettingBoard,
            dragProps = _objectWithoutProperties(_useBettingBoard, _excluded7);
          const isMain = !useBettingStore(s => s.isRaceTrack);
          const highlightArgs = {
            isMain,
            prefix: "straight-",
            getInitWinHighlight,
            winHighlightMap: GRID_WIN_HIGHLIGHT_FN
          };
          const {
            highlights
          } = useBoardHighlight(highlightArgs);
          const chipTextSize = useLayoutStore(s => s.chipTextSize);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "BetGrid",
            onPointerDown: handlePointerDown,
            onPointerUp: handlePointerUp,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Grids, {
              highlights,
              chipTextSize: chipTextSize.gridBoard
            }), /* @__PURE__ */jsxRuntimeExports.jsx(TrackerChip, _objectSpread(_objectSpread({}, dragProps), {}, {
              boardId: "BetGrid"
            }))]
          });
        }
        const Wrap = props => {
          const isRaceTrack = useBettingStore(state => state.isRaceTrack);
          const targetRef = reactExports.useRef(null);
          const isCompact = useConfigStore(state => state.IS_SMALL_DEVICE);
          const isSlope = useBettingStore(state => !state.isBet);
          useChipTextSize(targetRef, 0.0511, "gridBoard");
          return /* @__PURE__ */jsxRuntimeExports.jsxs(motion$1.div, {
            id: "GridBoard",
            initial: "default",
            animate: !isRaceTrack ? "default" : "hide",
            variants: gridBoardMoveVariants,
            ref: targetRef,
            className: cn({
              isSlope,
              isCompact
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
              "data-stream-tip": true,
              className: "pointer-events-none absolute left-0 top-0 h-full w-full origin-bottom",
              style: {
                transform: (isCompact ? gridBoardTiltCompactVariants : gridBoardTiltVariants).slope.transform.at(-1)
              }
            }), props.children]
          });
        };
        const GridBoard = () => {
          const isSlope = useBettingStore(state => !state.isBet);
          const isCompact = useConfigStore(state => state.IS_SMALL_DEVICE);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Wrap, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(motion$1.div, {
              className: "rotateBoard",
              animate: isSlope ? "slope" : "flat",
              initial: false,
              variants: isCompact ? gridBoardTiltCompactVariants : gridBoardTiltVariants,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(BetGrid, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                src: bettingGrid,
                className: "h-full w-full",
                alt: "Betting grid"
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              src: mobileGridUpperThick,
              alt: "grid upper thick",
              className: cn("boardThick upperThick left-1/2 w-[125.8%] -translate-x-1/2", {
                "w-[120.7%]": isCompact
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              src: mobileGridLowerThick,
              alt: "grid lower thick",
              className: cn("boardThick lowerThick left-1/2 w-[88.3%] -translate-x-[49.5%]", {
                "w-[84%]": isCompact
              })
            })]
          });
        };
        const PlusMinusButton = props => {
          const [clicked, setClicked] = reactExports.useState(false);
          let timer = 0;
          const handleClick = event => {
            props.onClick && props.onClick(event);
            if (props.disabled) {
              setClicked(false);
              return;
            }
            setClicked(true);
            clearTimeout(timer);
            timer = window.setTimeout(() => setClicked(false), 2e3);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(ActiveStateWrapper, {
            duration: 150,
            children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn(props.className, "plusMinusButton h-9 w-9 cursor-pointer", props.disabled && "disabled", {
                clicked
              }),
              children: /* @__PURE__ */jsxRuntimeExports.jsx("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                id: "PlusMinusButton",
                onClick: handleClick,
                children: props.type === "plus" ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.8572 18.0003C10.8572 17.2113 11.4968 16.5717 12.2857 16.5717H23.7143C24.5033 16.5717 25.1429 17.2113 25.1429 18.0003C25.1429 18.7893 24.5033 19.4289 23.7143 19.4289H12.2857C11.4968 19.4289 10.8572 18.7893 10.8572 18.0003Z",
                    fill: "url(#paint0_linear_14570_45501)"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 10.8574C18.789 10.8574 19.4286 11.497 19.4286 12.286L19.4286 23.7146C19.4286 24.5035 18.789 25.1431 18 25.1431C17.2111 25.1431 16.5715 24.5035 16.5715 23.7146L16.5715 12.286C16.5715 11.497 17.2111 10.8574 18 10.8574Z",
                    fill: "url(#paint0_linear_14570_45501)"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("defs", {
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                      id: "paint0_linear_14570_45501",
                      x1: "18",
                      y1: "10.8574",
                      x2: "18",
                      y2: "25.1431",
                      gradientUnits: "userSpaceOnUse",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                        stopColor: "#FFFAF5"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                        offset: "1",
                        stopColor: "#BAA284"
                      })]
                    })
                  })]
                }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.8572 18.0008C10.8572 17.2119 11.4968 16.5723 12.2857 16.5723H23.7143C24.5033 16.5723 25.1429 17.2119 25.1429 18.0008C25.1429 18.7898 24.5033 19.4294 23.7143 19.4294H12.2857C11.4968 19.4294 10.8572 18.7898 10.8572 18.0008Z",
                    fill: "url(#paint0_linear_14570_45506)"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("defs", {
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                      id: "paint0_linear_14570_45506",
                      x1: "18",
                      y1: "16.5723",
                      x2: "18",
                      y2: "19.4294",
                      gradientUnits: "userSpaceOnUse",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                        stopColor: "#FFFAF5"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                        offset: "1",
                        stopColor: "#BAA284"
                      })]
                    })
                  })]
                })
              })
            })
          });
        };
        const PlusMinusGroup = props => {
          const neighborRange = useBettingStore(state => state.neighborRange);
          const isRaceTrack = useBettingStore(state => state.isRaceTrack);
          const [neighborRangeStatus, setNeighborRangeStatus] = reactExports.useState(null);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "PlusMinusGroup",
            className: cn(props.className, "center h-[7.5rem] w-10 rounded-[2.5rem]", {
              isRaceTrack
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(AnimateCounter, {
              value: neighborRange,
              className: "neighborRange absolute",
              direction: neighborRangeStatus || null
            }), /* @__PURE__ */jsxRuntimeExports.jsx(PlusMinusButton, {
              className: "absolute left-[0.1rem] top-[0.1rem]",
              type: "plus",
              disabled: neighborRange === 9,
              isClicked: neighborRangeStatus === "up",
              onClick: () => {
                if (neighborRange === 9) return;
                useBettingStore.setState({
                  neighborRange: neighborRange + 1
                });
                setNeighborRangeStatus("up");
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx(PlusMinusButton, {
              className: "absolute bottom-0 left-[0.1rem]",
              disabled: neighborRange === 0,
              isClicked: neighborRangeStatus === "down",
              onClick: () => {
                if (neighborRange === 0) return;
                useBettingStore.setState({
                  neighborRange: neighborRange - 1
                });
                setNeighborRangeStatus("down");
              }
            })]
          });
        };
        function RacetrackSVG(props) {
          const [showRacetrackAnim, setShowRacetrackAnim] = reactExports.useState(false);
          const isSlope = useBettingStore(state => !state.isBet);
          const neighborRange = useBettingStore(state => state.neighborRange);
          reactExports.useEffect(() => {
            setShowRacetrackAnim(true);
            const timer = setTimeout(() => {
              setShowRacetrackAnim(false);
            }, 2e3);
            return () => clearTimeout(timer);
          }, [neighborRange]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("svg", _objectSpread(_objectSpread({
              id: "RacetrackSVG",
              viewBox: "0 0 190 504",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, props), {}, {
              className: cn({
                isSlope
              }),
              children: [svgHighlightDef, /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.999",
                y: "88.8496",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.999 88.8496)",
                fill: "#00000000",
                "data-v": "16"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.992",
                y: "113.951",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.992 113.951)",
                fill: "#00000000",
                "data-v": "33"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.999",
                y: "139.049",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.999 139.049)",
                fill: "#00000000",
                "data-v": "1"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.992",
                y: "164.15",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.992 164.15)",
                fill: "#00000000",
                "data-v": "20"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.999",
                y: "189.25",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.999 189.25)",
                fill: "#00000000",
                "data-v": "14"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.992",
                y: "214.352",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.992 214.352)",
                fill: "#00000000",
                "data-v": "31"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.999",
                y: "239.449",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.999 239.449)",
                fill: "#00000000",
                "data-v": "9"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.992",
                y: "264.551",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.992 264.551)",
                fill: "#00000000",
                "data-v": "22"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.999",
                y: "289.65",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.999 289.65)",
                fill: "#00000000",
                "data-v": "18"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.992",
                y: "314.752",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.992 314.752)",
                fill: "#00000000",
                "data-v": "29"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.999",
                y: "339.85",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.999 339.85)",
                fill: "#00000000",
                "data-v": "7"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.992",
                y: "364.951",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.992 364.951)",
                fill: "#00000000",
                "data-v": "28"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "188.999",
                y: "390.051",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 188.999 390.051)",
                fill: "#00000000",
                "data-v": "12"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2385",
                y: "88.8496",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2385 88.8496)",
                fill: "#00000000",
                "data-v": "11"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2386",
                y: "113.949",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2386 113.949)",
                fill: "#00000000",
                "data-v": "36"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2386",
                y: "139.049",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2386 139.049)",
                fill: "#00000000",
                "data-v": "13"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2388",
                y: "164.148",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2388 164.148)",
                fill: "#00000000",
                "data-v": "27"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2386",
                y: "189.25",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2386 189.25)",
                fill: "#00000000",
                "data-v": "6"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2388",
                y: "214.35",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2388 214.35)",
                fill: "#00000000",
                "data-v": "34"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2386",
                y: "239.449",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2386 239.449)",
                fill: "#00000000",
                "data-v": "17"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2388",
                y: "264.549",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2388 264.549)",
                fill: "#00000000",
                "data-v": "25"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2386",
                y: "289.65",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2386 289.65)",
                fill: "#00000000",
                "data-v": "2"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2388",
                y: "314.75",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2388 314.75)",
                fill: "#00000000",
                "data-v": "21"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2386",
                y: "339.85",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2386 339.85)",
                fill: "#00000000",
                "data-v": "4"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2388",
                y: "364.949",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2388 364.949)",
                fill: "#00000000",
                "data-v": "19"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "50.2386",
                y: "390.051",
                width: "25.1009",
                height: "49.2383",
                transform: "rotate(90 50.2386 390.051)",
                fill: "#00000000",
                "data-v": "15"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M13.5938 44.9258C5.34363 58.2806 1.00025 73.4297 1.00024 88.8506L50.2373 88.8506C50.2373 81.5072 52.3056 74.2932 56.2344 67.9336L13.5938 44.9258Z",
                fill: "#00000000",
                "data-v": "30"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M47.993 12.7695C33.7032 20.4799 21.8369 31.5699 13.5867 44.9247L56.2272 67.9325C60.156 61.5729 65.8067 56.2919 72.6115 52.6202L47.993 12.7695Z",
                fill: "#00000000",
                "data-v": "8"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M94.9978 1C78.4974 0.999998 62.2877 5.05919 47.9979 12.7696L72.6165 52.6203C79.4212 48.9486 87.1403 47.0156 94.9978 47.0156L94.9978 1Z",
                fill: "#00000000",
                "data-v": "23"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M141.994 12.7696C127.704 5.0592 111.495 1 94.9941 1L94.9941 47.0156C102.852 47.0156 110.571 48.9486 117.375 52.6203L141.994 12.7696Z",
                fill: "#00000000",
                "data-v": "10"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M176.406 44.9247C168.156 31.5699 156.289 20.4799 142 12.7695L117.381 52.6202C124.186 56.2919 129.837 61.5729 133.765 67.9325L176.406 44.9247Z",
                fill: "#00000000",
                "data-v": "5"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M188.992 88.8506C188.992 73.4297 184.649 58.2806 176.399 44.9258L133.758 67.9336C137.687 74.2931 139.755 81.5072 139.755 88.8506L188.992 88.8506Z",
                fill: "#00000000",
                "data-v": "24"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M188.999 415.15C188.999 433.702 182.715 451.778 171.047 466.787L131.214 439.74C136.77 432.593 139.762 423.985 139.762 415.15L188.999 415.15Z",
                fill: "#00000000",
                "data-v": "35"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M171.062 466.77C159.398 481.782 142.949 492.957 124.071 498.695L108.844 454.935C117.833 452.203 125.667 446.881 131.221 439.732L171.062 466.77Z",
                fill: "#00000000",
                "data-v": "3"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M124.063 498.694C105.184 504.431 84.8478 504.434 65.9675 498.704L81.1743 454.938C90.1651 457.667 99.8493 457.665 108.839 454.934L124.063 498.694Z",
                fill: "#00000000",
                "data-v": "26"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M18.9678 466.768C30.6316 481.78 47.0811 492.955 65.9587 498.693L81.186 454.933C72.1965 452.201 64.3633 446.879 58.809 439.73L18.9678 466.768Z",
                fill: "#00000000",
                "data-v": "0"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M18.9541 466.79C7.28093 451.776 0.995636 433.692 0.999758 415.133L50.2368 415.142C50.2348 423.98 53.2279 432.592 58.7866 439.742L18.9541 466.79Z",
                fill: "#00000000",
                "data-v": "32"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M132.208 137.471L132.208 89.921L132.194 89.921C131.647 70.0627 115.204 54.1309 95 54.1309C74.796 54.1309 58.3531 70.0627 57.8057 89.921L57.7916 89.921L57.7916 90.9094C57.7916 90.9208 57.7916 90.9322 57.7916 90.9436C57.7916 90.955 57.7916 90.9665 57.7916 90.9779L57.7916 186.043L132.208 137.471Z",
                fill: "#00000000",
                "data-v": "TIER"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M57.7916 261.16L57.7916 191.35L132.208 142.072L132.208 261.16L57.7916 261.16Z",
                fill: "#00000000",
                "data-v": "ORPH"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M57.7916 385.744C63.8728 371.458 78.2422 361.419 95 361.419C111.758 361.419 126.127 371.458 132.208 385.744L132.208 266.656L57.7916 266.656L57.7916 385.744Z",
                fill: "#00000000",
                "data-v": "VOISINS"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M57.7916 403.714C57.7916 383.165 74.4504 366.506 95 366.506C115.55 366.506 132.208 383.165 132.208 403.714V412.659C132.208 433.208 115.55 449.867 95 449.867C74.4504 449.867 57.7916 433.208 57.7916 412.659V403.714Z",
                fill: "#00000000",
                "data-v": "ZERO"
              })]
            })), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
              className: cn("absolute h-full w-full", {
                "opacity-0 transition-opacity duration-300 ease-out": !showRacetrackAnim
              }),
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(CellsAnimation, {
                neighborRange
              }), /* @__PURE__ */jsxRuntimeExports.jsx(WhiteLineAnimation, {
                neighborRange
              })]
            })]
          });
        }
        function CellsAnimation({
          neighborRange
        }) {
          return /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
            viewBox: "0 0 189 502",
            fill: "none",
            className: "absolute overflow-visible",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M170 465.992C158.315 480.171 143.648 490.802 123.698 497.451L109.125 454.574C117.583 451.802 124.993 446.766 130.926 439.678L170 465.992Z",
              fill: "url(#myGradientFill)",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 8,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 8
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M170 465.992C158.315 480.171 143.648 490.802 123.698 497.451L109.125 454.574C117.583 451.802 124.993 446.766 130.926 439.678L170 465.992Z",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 8,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 8
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M122.273 498.035C103.7 503.317 84.33 504.32 66.2546 498.044L80.8064 455.165C89.4157 457.591 98.5983 457.589 108.207 455.16L122.273 498.035Z",
              fill: "url(#myGradientFill)",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 9,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 9
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M122.273 498.035C103.7 503.317 84.33 504.32 66.2546 498.044L80.8064 455.165C89.4157 457.591 98.5983 457.589 108.207 455.16L122.273 498.035Z",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 9,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 9
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M187.992 415.15C187.774 432.819 182.79 450.012 171.128 464.93L131.645 438.503C136.719 431.63 139.54 423.513 139.748 415.15L186.992 415.15Z",
              fill: "url(#myGradientFill)",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 7,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 7
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M187.992 415.15C187.774 432.819 182.79 450.012 171.128 464.93L131.645 438.503C136.719 431.63 139.54 423.513 139.748 415.15L186.992 415.15Z",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 7,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 7
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M176.043 45.2559C183.704 57.9675 187.811 72.2715 187.991 87.8496L139.947 87.8496C139.576 80.0108 137.658 73.3132 134.158 67.3154L175.043 45.2559Z",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 7,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 7
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M176.043 45.2559C183.704 57.9675 187.811 72.2715 187.991 87.8496L139.947 87.8496C139.576 80.0108 137.658 73.3132 134.158 67.3154L175.043 45.2559Z",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 7,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 7
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M94.998 1.00684C110.631 1.16378 125.965 4.99915 140.187 12.5533L116.619 51.4008C109.565 47.9853 102.354 46.1768 94.998 46.0264L94.998 1.00684Z",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 9,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 9
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M94.998 1.00684C110.631 1.16378 125.965 4.99915 140.187 12.5533L116.619 51.4008C109.565 47.9853 102.354 46.1768 94.998 46.0264L94.998 1.00684Z",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 9,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 9
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M141.357 13.1035C155.809 20.5352 166.431 31.0094 174.997 43.8527L133.316 66.6104C129.306 59.74 124.047 54.8187 117.787 52.2549L141.357 13.1035Z",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 8,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 8
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M141.357 13.1035C155.809 20.5352 166.431 31.0094 174.997 43.8527L133.316 66.6104C129.306 59.74 124.047 54.8187 117.787 52.2549L141.357 13.1035Z",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 8,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 8
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "88.8496",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 6,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 6
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "113.949",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 5,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 5
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "113.949",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 5,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 5
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "139.05",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 4,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 4
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "139.05",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 4,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 4
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "164.149",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 3,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 3
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "164.149",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 3,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 3
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "189.25",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 2,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 2
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "189.25",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 2,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 2
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "214.35",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 1,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 1
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "214.35",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 1,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 1
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "239.449",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-center transition-all duration-[250ms] ease-out will-change-transform", {
                "scale-[1.2] opacity-0": neighborRange < 1,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 1
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "239.449",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-center transition-all duration-[250ms] ease-out will-change-transform", {
                "scale-[1.2] opacity-0": neighborRange < 1,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 1
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "264.55",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 1,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 1
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "264.55",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 1,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 1
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "289.649",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 2,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 2
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "289.649",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 2,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 2
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "314.75",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 3,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 3
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "314.75",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 3,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 3
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "339.85",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 4,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 4
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "339.85",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 4,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 4
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "364.949",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 5,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 5
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "364.949",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 5,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 5
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "390.05",
              width: "48",
              height: "24",
              fill: "url(#myGradientFill)",
              filter: "url(#myShadowFilter)",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 6,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 6
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "140",
              y: "390.05",
              width: "48",
              height: "24",
              stroke: "url(#universal-rect-stroke)",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform", {
                "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 6,
                "translate-y-0 scale-100 opacity-100": neighborRange >= 6
              }),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("defs", {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: "myGradientFill",
                gradientTransform: "rotate(131)",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "0%",
                  stopColor: "#DFCFBB",
                  stopOpacity: "0.15"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "49.5%",
                  stopColor: "#DFCFBB",
                  stopOpacity: "0.30"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "100%",
                  stopColor: "#DFCFBB",
                  stopOpacity: "0.15"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: "universal-rect-stroke",
                gradientUnits: "objectBoundingBox",
                gradientTransform: "rotate(104)",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "0.0916",
                  stopColor: "#C9AE8D"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "0.8958",
                  stopColor: "#A57D4E"
                })]
              })]
            })]
          });
        }
        function WhiteLineAnimation({
          neighborRange
        }) {
          return /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
            viewBox: "0 0 189 502",
            fill: "none",
            className: "absolute z-[-1] overflow-visible",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M172.112 466.392C157.815 483.571 141.648 494.502 123.698 498.951L108.125 453.274C117.583 450.802 124.993 444.766 129.626 438.708L172.112 466.392Z",
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              clipPath: "url(#bottom-part-clip-3)",
              className: cn("origin-top transition-all duration-[250ms] ease-out"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M122.373 499.335C103.7 504.817 84.33 505.32 65.8546 499.044L81.064 453.565C89.4157 456.591 98.5983 455.589 107.207 453.56L122.373 499.335Z",
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              clipPath: "url(#bottom-part-clip-26)",
              className: cn("origin-top transition-all duration-[250ms] ease-out"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M189.452 415.15C189.874 432.819 183.79 450.012 172.828 465.43L130.445 437.503C134.919 431.63 138.84 423.513 138.748 415.15L189.452 415.15Z",
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out"),
              clipPath: "url(#bottom-part-clip)",
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M177.043 44.0559C185.204 57.9675 189.811 72.2715 189.331 87.8496L138.731 87.5496C138.576 80.0108 136.658 73.3132 132.658 67.3154L177.043 44.0559Z",
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out"),
              clipPath: "url(#top-part-clip-24)",
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M94.998 0.00684C110.631 0.16378 125.965 2.99915 141.587 11.4533L115.819 52.9008C109.565 49.3853 102.354 47.6768 94.998 47.5264L94.998 0.00684Z",
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              clipPath: "url(#top-part-clip-10)",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M142.357 11.9035C153.809 17.5352 168.431 30.0094 176.497 43.1527L132.216 66.8104C127.306 60.34 123.047 56.8187 116.987 53.5549L141.357 13.1035Z",
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              clipPath: "url(#top-part-clip-5)",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "138.8",
              y: neighborRange >= 6 ? 88.8496 : 112.8496,
              width: "50.6",
              height: neighborRange >= 6 ? 24 : 0,
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "138.8",
              y: neighborRange >= 5 ? 113.949 : 137.949,
              width: "50.6",
              height: neighborRange >= 5 ? 24 : 0,
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "138.8",
              y: neighborRange >= 4 ? 139.05 : 163.05,
              width: "50.6",
              height: neighborRange >= 4 ? 24 : 0,
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "138.8",
              y: neighborRange >= 3 ? 164.149 : 188.149,
              width: "50.6",
              height: neighborRange >= 3 ? 24 : 0,
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "138.8",
              y: neighborRange >= 2 ? 189.25 : 213.25,
              width: "50.6",
              height: neighborRange >= 2 ? 24 : 0,
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "138.8",
              y: neighborRange >= 1 ? 213.949 : 251.449,
              width: "50.6",
              height: neighborRange >= 1 ? 75 : 0,
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-center transition-all duration-[250ms] ease-out will-change-transform"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "138.8",
              y: "289.649",
              width: "50.6",
              height: neighborRange >= 2 ? 24 : 0,
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "138.8",
              y: "314.75",
              width: "50.6",
              height: neighborRange >= 3 ? 24 : 0,
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "138.8",
              y: "339.85",
              width: "50.6",
              height: neighborRange >= 4 ? 24 : 0,
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "138.8",
              y: "364.949",
              width: "50.6",
              height: neighborRange >= 5 ? 24 : 0,
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "138.8",
              y: "390.05",
              width: "50.6",
              height: neighborRange >= 6 ? 24 : 0,
              stroke: "#FFFAF5",
              strokeWidth: "1.5",
              shapeRendering: "crispEdges",
              className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform"),
              style: {
                transformBox: "fill-box"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("defs", {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("clipPath", {
                id: "bottom-part-clip",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                  x: "125",
                  y: "400.15",
                  width: "80",
                  height: neighborRange >= 7 ? 60 : 0,
                  className: "rotate-[10deg] transition-all duration-[250ms] ease-out",
                  style: {
                    transformBox: "fill-box"
                  }
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("clipPath", {
                id: "bottom-part-clip-3",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                  x: neighborRange >= 8 ? 133 : 146,
                  y: neighborRange >= 8 ? 420 : 377,
                  width: "80",
                  height: "60",
                  className: cn("rotate-[33deg] transition-all duration-[250ms] ease-out", {
                    "rotate-[49deg]": neighborRange >= 8
                  }),
                  style: {
                    transformBox: "fill-box"
                  }
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("clipPath", {
                id: "bottom-part-clip-26",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                  x: neighborRange >= 9 ? 130 : 169,
                  y: neighborRange >= 9 ? 437 : 413,
                  width: "80",
                  height: "70",
                  className: cn("rotate-[72deg] transition-all duration-[250ms] ease-out", {
                    "rotate-[90deg]": neighborRange >= 9
                  }),
                  style: {
                    transformBox: "fill-box"
                  }
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("clipPath", {
                id: "top-part-clip-5",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                  x: neighborRange >= 8 ? 100 : 120,
                  y: neighborRange >= 8 ? 44 : 74,
                  width: "80",
                  height: "60",
                  className: cn("rotate-[-10deg] transition-all duration-[250ms] ease-out", {
                    "rotate-[-42deg]": neighborRange >= 8
                  }),
                  style: {
                    transformBox: "fill-box"
                  }
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("clipPath", {
                id: "top-part-clip-24",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                  x: "120",
                  y: neighborRange >= 7 ? 45 : 105,
                  width: "80",
                  height: "60",
                  className: "rotate-[-10deg] transition-all duration-[250ms] ease-out",
                  style: {
                    transformBox: "fill-box"
                  }
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("clipPath", {
                id: "top-part-clip-10",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                  x: neighborRange >= 9 ? 70 : 113,
                  y: neighborRange >= 9 ? 50 : 65,
                  width: "80",
                  height: "60",
                  className: cn("rotate-[-60deg] transition-all duration-[250ms] ease-out", {
                    "rotate-[-70deg]": neighborRange >= 9
                  }),
                  style: {
                    transformBox: "fill-box"
                  }
                })
              })]
            })]
          });
        }
        const RacetrackSVG$1 = reactExports.memo(RacetrackSVG);
        function RacetrackBoard() {
          const bettingBoardArgs = {
            convertBetMap: convertRouletteMap,
            getAddChipParams: getAddChipParams$1,
            boardID: BoardIDEnum.RACETRACK,
            extraBetsGroup: raceTrackGroup
          };
          const _useBettingBoard2 = useBettingBoard(bettingBoardArgs),
            {
              handlePointerDown,
              handlePointerUp
            } = _useBettingBoard2,
            dragProps = _objectWithoutProperties(_useBettingBoard2, _excluded8);
          const isBet = useBettingStore(s => s.isBet);
          const isRaceTrack = useBettingStore(state => state.isRaceTrack);
          const isCompact = useConfigStore(state => state.IS_SMALL_DEVICE);
          const highlightArgs = {
            getInitWinHighlight,
            winHighlightMap: RACE_TRACK_HIGHLIGHT_FN
          };
          const {
            highlights
          } = useBoardHighlight(highlightArgs);
          const chipTextSize = useLayoutStore(s => s.chipTextSize);
          const fakeRotateBoardRef = reactExports.useRef(null);
          const [rotateBoardStyle, setRotateBoardStyle] = reactExports.useState({
            height: 0,
            width: 0,
            bottom: 0
          });
          const {
            style
          } = useRaceTrackHighlights({
            highlights
          });
          const targetRef = reactExports.useRef(null);
          useChipTextSize(targetRef, 0.0557, "racetrack");
          reactExports.useEffect(() => {
            const racetrackBoard = targetRef.current;
            const fakeRotateBoard = fakeRotateBoardRef.current;
            if (!fakeRotateBoard || !racetrackBoard) return;
            const resizeObserver = new ResizeObserver(entries => {
              if (!entries || entries.length === 0) return;
              const targetEle = entries[0].target;
              const fakeRotateBoardRect = targetEle.getBoundingClientRect();
              const fakeRotateBoardHeight = fakeRotateBoardRect.height;
              const fakeRotateBoardWidth = fakeRotateBoardRect.width;
              const fakeRotateBoardbottom = fakeRotateBoardRect.bottom;
              const racetrackBoardBottom = racetrackBoard.getBoundingClientRect().bottom;
              const transformStyle = getComputedStyle(racetrackBoard).transform;
              const matrix = new DOMMatrix(transformStyle);
              const newHeight = matrix.d === 1 ? fakeRotateBoardHeight : fakeRotateBoardHeight / matrix.d;
              const newWidth = matrix.a === 1 ? fakeRotateBoardWidth : fakeRotateBoardWidth / matrix.a;
              const newBottom = matrix.d === 1 ? racetrackBoardBottom - fakeRotateBoardbottom : (racetrackBoardBottom - fakeRotateBoardbottom) / matrix.d;
              setRotateBoardStyle({
                height: newHeight,
                width: newWidth,
                bottom: newBottom
              });
            });
            resizeObserver.observe(fakeRotateBoard);
            return () => {
              resizeObserver.unobserve(fakeRotateBoard);
            };
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(motion$1.div, {
            id: "RacetrackBoard",
            initial: "hide",
            animate: isRaceTrack ? "default" : "hide",
            variants: raceTrackBoardMoveVariants,
            ref: targetRef,
            className: cn({
              isSlope: !isBet,
              isSmallDevice: isCompact
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(motion$1.div, {
              animate: isBet ? "flat" : "slope",
              variants: isCompact ? raceTrackBoardTiltCompactVariants : raceTrackBoardTiltVariants,
              initial: false,
              className: "rotateBoard",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(RacetrackSVG$1, {
                onPointerDown: handlePointerDown,
                onPointerUp: handlePointerUp
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                src: raceTrack,
                className: "h-full w-full",
                alt: "Race track"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("style", {
                children: style
              }), /* @__PURE__ */jsxRuntimeExports.jsx(RaceTrackBoardChips, {
                chipTextSize: chipTextSize.racetrack
              }), /* @__PURE__ */jsxRuntimeExports.jsx(TrackerChip, _objectSpread(_objectSpread({}, dragProps), {}, {
                boardId: "RacetrackBoard"
              }))]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "pointer-events-none invisible absolute bottom-0 h-full w-full origin-bottom",
              style: {
                transform: isCompact ? "translateY(-3.5%) perspective(8rem) rotateX(10.1deg) scale(1.09, 0.97)" : "translateY(-2.5%) perspective(8rem) rotateX(6.4deg) scale(1.135, 0.933)"
              },
              id: "FakeRotateBoard",
              ref: fakeRotateBoardRef
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: cn("pointer-events-none absolute left-1/2 w-full", {
                "-translate-x-[49.8%]": isCompact,
                "-translate-x-1/2": !isCompact
              }),
              id: "ThickWrapper",
              style: {
                height: `${rotateBoardStyle.height}px`,
                width: `${rotateBoardStyle.width}px`,
                bottom: `${rotateBoardStyle.bottom}px`
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                src: mobileRacetrackThick1,
                alt: "mobile racetrack thick 1",
                className: "boardThick vector1 -translate-x-[49.8%]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                src: mobileRacetrackThick2,
                alt: "mobile racetrack thick 2",
                className: "boardThick rect1 -translate-x-[50%]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                src: mobileRacetrackThick3,
                alt: "mobile racetrack thick 3",
                className: "boardThick rect2 -translate-x-[50%]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                src: mobileRacetrackThick4,
                alt: "mobile racetrack thick 4",
                className: "boardThick vector2 -translate-x-[49.6%]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                src: mobileRacetrackThick5,
                alt: "mobile racetrack thick 5",
                className: "boardThick vector3 -translate-x-[49.6%]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                src: mobileRacetrackThick6,
                alt: "mobile racetrack thick 6",
                className: "boardThick vector4 -translate-x-[49.8%]"
              })]
            })]
          });
        }
        const BOARD_LENGTH_MEDIAN = 50;
        const CHIP_OFFSET = 5.8;
        const RaceTrackBoardChips = reactExports.memo(({
          chipTextSize
        }) => {
          const isRaceTrack = useBettingStore(s => s.isRaceTrack);
          const isSlope = useBettingStore(s => !s.isBet) && isRaceTrack;
          const raceChipsPosition = {
            "straight-30": "bottom-[83.7%] left-[8.4%]",
            "straight-8": "bottom-[89.8%] left-[17.5%]",
            "straight-23": "bottom-[93.1%] left-[34.8%]",
            "straight-10": "bottom-[93.1%] left-[54.1%]",
            "straight-5": "bottom-[89.8%] left-[71.5%]",
            "straight-24": "bottom-[83.6%] left-[80.8%]",
            "straight-16": "bottom-[77.7%] left-[80.8%]",
            "straight-33": "bottom-[72.7%] left-[80.8%]",
            "straight-1": "bottom-[67.7%] left-[80.8%]",
            "straight-20": "bottom-[62.7%] left-[80.8%]",
            "straight-14": "bottom-[57.7%] left-[80.8%]",
            "straight-31": "bottom-[52.7%] left-[80.8%]",
            "straight-9": "bottom-[47.7%] left-[80.8%]",
            "straight-22": "bottom-[42.7%] left-[80.8%]",
            "straight-18": "bottom-[37.7%] left-[80.8%]",
            "straight-29": "bottom-[32.7%] left-[80.8%]",
            "straight-7": "bottom-[27.7%] left-[80.8%]",
            "straight-28": "bottom-[22.7%] left-[80.8%]",
            "straight-12": "bottom-[17.7%] left-[80.8%]",
            "straight-11": "bottom-[77.7%] left-[7.7%]",
            "straight-36": "bottom-[72.7%] left-[7.7%]",
            "straight-13": "bottom-[67.7%] left-[7.7%]",
            "straight-27": "bottom-[62.7%] left-[7.7%]",
            "straight-6": "bottom-[57.7%] left-[7.7%]",
            "straight-34": "bottom-[52.7%] left-[7.7%]",
            "straight-17": "bottom-[47.7%] left-[7.7%]",
            "straight-25": "bottom-[42.7%] left-[7.7%]",
            "straight-2": "bottom-[37.7%] left-[7.7%]",
            "straight-21": "bottom-[32.7%] left-[7.7%]",
            "straight-4": "bottom-[27.7%] left-[7.7%]",
            "straight-19": "bottom-[22.7%] left-[7.7%]",
            "straight-15": "bottom-[17.7%] left-[7.7%]",
            "straight-35": "bottom-[11.4%] left-[80.4%]",
            "straight-3": "bottom-[4.8%] left-[66.5%]",
            "straight-26": "bottom-[2.3%] left-[44.1%]",
            "straight-0": "bottom-[4.8%] left-[22.2%]",
            "straight-32": "bottom-[11.4%] left-[8.6%]",
            ZERO: "bottom-[16.8%] left-[44.2%]",
            VOISINS: "bottom-[35%] left-[44.2%]",
            ORPH: "bottom-[55.1%] left-[44.2%]",
            TIER: "bottom-[76.3%] left-[44.2%]"
          };
          const raceChips = Object.entries(raceChipsPosition);
          return /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children: raceChips.map(([id, posit]) => /* @__PURE__ */jsxRuntimeExports.jsx(ChipContainer, {
              chipId: id,
              chipStyle: `w-[12%] h-[4.5%] ${posit}`,
              showWin: isRaceTrack,
              isSlope,
              chipTextSize,
              chipSkewXDeg: (extractLeft(posit) - BOARD_LENGTH_MEDIAN + CHIP_OFFSET) * -0.1
            }, id))
          });
        });
        const RacetrackBoard$1 = reactExports.memo(RacetrackBoard);
        const MobileSquareButton = () => {
          const isRaceTrack = useBettingStore(s => s.isRaceTrack);
          const isAutoPlay = useAutoPlayStore(s => s.isAutoPlay);
          const roundRemaining = useAutoPlayStore(s => s.roundRemaining);
          const betMode = useBettingStore(s => s.betMode);
          const noBet = useCartStore(s => s.boardHistory.length === 0);
          const isHaveBets = useAutoPlayStore(s => s.isHaveBets);
          const AUTOPLAY_ALLOWED = useConfigStore(s => s.JURISDICTION.AUTOPLAY_ALLOWED);
          const animState = useWinAnimStore(s => s.animState);
          const control = useAnimationControls();
          const [firstTimeRender, setFirstTimeRender] = reactExports.useState(true);
          reactExports.useEffect(() => {
            setFirstTimeRender(false);
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(motion$1.div, {
              initial: "buttonDefault",
              animate: control,
              variants: buttonMoveVariants,
              onClick: () => {
                control.start("button");
              },
              className: "absolute bottom-[1.1rem] left-4 h-8 w-8",
              children: /* @__PURE__ */jsxRuntimeExports.jsx(SquareButton, {
                child: /* @__PURE__ */jsxRuntimeExports.jsxs(AnimatePresence$1, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "mask absolute z-[1] flex h-8 w-8 items-center justify-center"
                  }), isRaceTrack ? /* @__PURE__ */jsxRuntimeExports.jsx(motion$1.div, {
                    initial: firstTimeRender ? "default" : "gridMove",
                    animate: "default",
                    variants: buttonMoveVariants,
                    exit: "gridMove",
                    className: "absolute h-7 w-7",
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs(motion$1.svg, {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 28 28",
                      fill: "url(#paint0_linear_14473_45669)",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.2878 2.33398C9.46774 2.33398 8.80295 2.95426 8.80295 3.7194V5.10482H7.3181C6.49804 5.10482 5.83325 5.72509 5.83325 6.49023V20.3444C5.83325 21.1095 6.49804 21.7298 7.3181 21.7298H8.80295V23.1152C8.80295 23.8804 9.46774 24.5007 10.2878 24.5007H17.712C18.5321 24.5007 19.1969 23.8804 19.1969 23.1152V21.7298H20.6817C21.5018 21.7298 22.1666 21.1095 22.1666 20.3444V6.49023C22.1666 5.72509 21.5018 5.10482 20.6817 5.10482H19.1969V3.7194C19.1969 2.95426 18.5321 2.33398 17.712 2.33398H10.2878ZM7.3181 20.3444V6.49023H10.2878V20.3444H7.3181ZM17.712 20.3444H10.2878V23.1152H17.712V20.3444ZM17.712 6.49023V20.3444H20.6817V6.49023H17.712ZM17.712 6.49023V3.7194H10.2878V6.49023H17.712Z"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("defs", {
                        children: /* @__PURE__ */jsxRuntimeExports.jsxs(motion$1.linearGradient, {
                          id: "paint0_linear_14473_45669",
                          x1: "13.9999",
                          y1: "2.33398",
                          x2: "13.9999",
                          y2: "24.5007",
                          gradientUnits: "userSpaceOnUse",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(motion$1.stop, {
                            offset: "0%",
                            initial: "default",
                            animate: "changeColor1",
                            exit: "changeColor1",
                            variants: iconColorVariants
                          }), /* @__PURE__ */jsxRuntimeExports.jsx(motion$1.stop, {
                            offset: "100%",
                            initial: "default",
                            animate: "changeColor2",
                            exit: "changeColor2",
                            variants: iconColorVariants
                          })]
                        })
                      })]
                    })
                  }, "standard") : /* @__PURE__ */jsxRuntimeExports.jsx(motion$1.div, {
                    initial: "raceTrackMove",
                    animate: "default",
                    variants: buttonMoveVariants,
                    exit: "raceTrackMove",
                    className: "absolute h-7 w-7",
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 28 28",
                      fill: "none",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
                        d: "M14 5.76536C12.067 5.76536 10.5 7.30163 10.5 9.19673V18.8046C10.5 20.6997 12.067 22.2359 14 22.2359C15.933 22.2359 17.5 20.6997 17.5 18.8046V9.19673C17.5 7.30163 15.933 5.76536 14 5.76536Z",
                        fill: "url(#paint0_linear_14473_99358)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 2.33398C10.134 2.33398 7 5.40654 7 9.19673V18.8046C7 22.5948 10.134 25.6673 14 25.6673C17.866 25.6673 21 22.5948 21 18.8046V9.19673C21 5.40654 17.866 2.33398 14 2.33398ZM8.4 9.19673C8.4 6.16458 10.9072 3.70653 14 3.70653C17.0928 3.70653 19.6 6.16458 19.6 9.19673V18.8046C19.6 21.8367 17.0928 24.2948 14 24.2948C10.9072 24.2948 8.4 21.8367 8.4 18.8046V9.19673Z",
                        fill: "url(#paint0_linear_14473_99358)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("defs", {
                        children: /* @__PURE__ */jsxRuntimeExports.jsxs(motion$1.linearGradient, {
                          id: "paint0_linear_14473_99358",
                          x1: "14",
                          y1: "2.33398",
                          x2: "14",
                          y2: "25.6673",
                          gradientUnits: "userSpaceOnUse",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(motion$1.stop, {
                            offset: "0%",
                            initial: "default",
                            animate: "changeColor1",
                            exit: "changeColor1",
                            variants: iconColorVariants
                          }), /* @__PURE__ */jsxRuntimeExports.jsx(motion$1.stop, {
                            offset: "100%",
                            initial: "default",
                            animate: "changeColor2",
                            exit: "changeColor2",
                            variants: iconColorVariants
                          })]
                        })
                      })]
                    })
                  }, "raceTrack")]
                }),
                selected: true,
                className: `inactive h-8 w-8 ${animState && "opacity-50"}`,
                buttonClassName: "rounded-[0.5rem]",
                onClick: () => {
                  if (animState) {
                    playSound(["disabledAction"]);
                    return;
                  }
                  useBettingStore.setState({
                    isRaceTrack: !isRaceTrack
                  });
                }
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(SquareButton, {
              child: betMode === "default" ? /* @__PURE__ */jsxRuntimeExports.jsx(Icon.BettingDefault, {}) : betMode === "straight" ? /* @__PURE__ */jsxRuntimeExports.jsx(Icon.BettingStraightUp, {}) : betMode === "fullComplete" ? /* @__PURE__ */jsxRuntimeExports.jsx(Icon.BettingFullComplete, {}) : null,
              selected: true,
              className: "absolute bottom-[1.1rem] right-4 h-8 w-8",
              buttonClassName: "rounded-[0.5rem] h-8 w-8",
              onClick: () => {
                useLayoutStore.setState({
                  menuPage: "betting_mode"
                });
              }
            }), AUTOPLAY_ALLOWED && /* @__PURE__ */jsxRuntimeExports.jsx(SquareButton, {
              child: isAutoPlay ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Icon.AutoPlayRoundMobile, {
                  className: "h-8 w-8"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "roundRemaining absolute left-[0.5rem] top-[0.6rem] w-4 text-center text-[0.6rem] font-[500] text-[#f3f1d5]",
                  children: roundRemaining
                })]
              }) : noBet ? /* @__PURE__ */jsxRuntimeExports.jsx(Icon.AutoplayDisabled, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Autoplay, {}),
              selected: true,
              className: cn("absolute left-4 top-4 h-8 w-8", isAutoPlay && "autoPlayActive", noBet && "inactive"),
              buttonClassName: "rounded-[0.5rem]",
              id: "AutoPlayBtn",
              onClick: () => {
                if (!isHaveBets()) {
                  tooltipEventBus.emit("noBet", {
                    anchorSelect: "#AutoPlayBtn"
                  });
                  return;
                }
                useLayoutStore.setState({
                  menuPage: "autoplay"
                });
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx(SquareButton, {
              child: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.StatisticSolid, {}),
              selected: true,
              className: "absolute right-4 top-4 h-8 w-8",
              buttonClassName: "rounded-[0.5rem]",
              onClick: () => {
                useLayoutStore.setState({
                  menuPage: "statistics"
                });
              }
            })]
          });
        };
        const GameContent = () => {
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(GridBoard, {}), /* @__PURE__ */jsxRuntimeExports.jsx(RacetrackBoard$1, {}), /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              src: logoImg,
              alt: "Logo",
              className: "absolute bottom-[0.65rem] ml-[0.4rem] w-[3.8125rem]"
            }), /* @__PURE__ */jsxRuntimeExports.jsx(MobileSquareButton, {}), /* @__PURE__ */jsxRuntimeExports.jsx(PlusMinusGroup, {
              className: "absolute bottom-[6.35rem] right-[0.7rem]"
            })]
          });
        };
        const MobileLayout = exports("default", () => {
          const mainBoardMb = useKeyboardMargin();
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          const marginBottom = isSmallDevice ? `calc(0.35rem + ${mainBoardMb}px)` : `${mainBoardMb}px`;
          const IS_CLOSE_SERVER = useConfigStore(s => s.IS_CLOSE_SERVER);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "MobileLayout",
            className: cn({
              isSmallDevice
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Header$1, {
              betResult: /* @__PURE__ */jsxRuntimeExports.jsx(BetResult, {})
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              id: "MainBoard",
              className: cn(`mx-auto mt-[.0625rem] flex-1 rounded-[2rem] pb-[1.95rem]`, {
                "mt-[2.1rem] rounded-[1.5rem]": isSmallDevice
              }),
              style: {
                marginBottom
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(MainBgImage, {
                overlayBg,
                imageClassName: "mt-9"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(CountDownCap, {}), /* @__PURE__ */jsxRuntimeExports.jsx(ToastList, {}), /* @__PURE__ */jsxRuntimeExports.jsx(RouletteVideoStream, {}), /* @__PURE__ */jsxRuntimeExports.jsx(GameContent, {}), /* @__PURE__ */jsxRuntimeExports.jsx(FooterMenu, {}), /* @__PURE__ */jsxRuntimeExports.jsx(NetworkStateModal, {
                isCloseServer: IS_CLOSE_SERVER
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Footer$1, {})]
          });
        });
      }
    };
  });
})();
//# sourceMappingURL=MobileLayout-legacy-Cs954ZWU.js.map
