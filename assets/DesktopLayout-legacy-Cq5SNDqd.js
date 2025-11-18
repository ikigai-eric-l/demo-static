;
(function () {
  const _excluded = ["icon", "item", "className", "placement", "onClick"],
    _excluded2 = ["handlePointerDown", "handlePointerUp"],
    _excluded3 = ["showTiltEffect"],
    _excluded4 = ["handlePointerDown", "handlePointerUp"];
  function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
  function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./framer-motion-vendor-legacy-BRQCrC7T.js', './SquareButton-legacy-DYWXghqP.js', './index-legacy-CPkG-0qj.js', './@sentry-vendor-legacy-Ca039euQ.js', './ui-icons-internal-legacy-6Smvdqu1.js', './App-legacy-C43Kg7P3.js', './ikigaians-house-core-legacy-BYu6jnS6.js', './ikigaians-connect-core-legacy-DuYeXAwv.js', './ikigaians-ikgplayer-core-legacy-n4oGY9YZ.js', './react-dom-vendor-legacy-DChcbfwc.js', './pixi.js-vendor-legacy-DddHKyqC.js', './pixi-filters-vendor-legacy-x0m7DAsF.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, motion, AnimatePresence, AnimatePresence$1, motion$1, getChipSrc, ClickableArea, isChipActive, isChipDisabled, AutoPlay, Tooltip, GameLimit, Clock, NotificationHint, ChatRoom, SettingSlider, SoundButton, GameRuleInfo, GameRule, GameHistory, SettingLanguage, Setting, useStatisticStore, SquareButton, Statistic, StatisticFooter, useBettingBoard, useBoardHighlight, TrackerChip, getAddChipParams, ChipContainer, svgHighlightDef, useRaceTrackHighlights, getAddChipParams$1, AnimateCounter, BetResult, MainBgImage, overlayBg, ToastList, CountDownCap, RouletteVideoStream, NetworkStateModal, convertLabel, cn, useCartStore, useLayoutStore, useClickAway, playSound, scrollWrapToTop, useAutoPlayStore, useTranslation, autoplayRoundImg, autoplayCloseImg, tooltipEventBus, useLongPress, useBettingStore, useConfigStore, thousandSeparator, BetState, useWinNumberStore$1, useSettingStore, isInIframe, getFormattedRoundId, useChatStore, toggleFullScreen, RoomType, isSicboGameType, useDataStore, connectIns, GameRules, GameHistoryContent, GameHistoryContentHeader, Image, StraightUp, FullComplete, Default, BoardIDEnum, GRID_WIN_HIGHLIGHT_FN, getInitWinHighlight, gridBoardTiltShadow, grid, betGridPrefix, GRID_HOVER_HIGHLIGHT, BetTypeEnum, convertRouletteMap, useWinAnimStore, ALL_GROUP_MAP, RACE_TRACK_HIGHLIGHT_FN, boardRaceTrack, raceTrackGroup, RACE_TRACK_HIGHLIGHT, findNeighborByRange, extractLeft, gridBoardTiltTop, gridBoardTiltBottom, raceTrackTiltTop, raceTrackTiltCenter, raceTrackTiltBottom, getWinNumberStore, reactExports, Icon, useKeyPress, GameAction;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        motion = module.m;
        AnimatePresence = module.A;
        AnimatePresence$1 = module.b;
        motion$1 = module.a;
      }, module => {
        getChipSrc = module.I;
        ClickableArea = module.c;
        isChipActive = module.i;
        isChipDisabled = module.a;
        AutoPlay = module.A;
        Tooltip = module.J;
        GameLimit = module.j;
        Clock = module.d;
        NotificationHint = module.N;
        ChatRoom = module.g;
        SettingSlider = module.K;
        SoundButton = module.L;
        GameRuleInfo = module.G;
        GameRule = module.e;
        GameHistory = module.k;
        SettingLanguage = module.S;
        Setting = module.f;
        useStatisticStore = module.l;
        SquareButton = module.z;
        Statistic = module.m;
        StatisticFooter = module.n;
        useBettingBoard = module.o;
        useBoardHighlight = module.p;
        TrackerChip = module.q;
        getAddChipParams = module.r;
        ChipContainer = module.s;
        svgHighlightDef = module.w;
        useRaceTrackHighlights = module.x;
        getAddChipParams$1 = module.y;
        AnimateCounter = module.v;
        BetResult = module.B;
        MainBgImage = module.M;
        overlayBg = module.D;
        ToastList = module.F;
        CountDownCap = module.E;
        RouletteVideoStream = module.R;
        NetworkStateModal = module.H;
      }, module => {
        convertLabel = module.W;
        cn = module.H;
        useCartStore = module.j;
        useLayoutStore = module.c;
        useClickAway = module.aF;
        playSound = module.p;
        scrollWrapToTop = module.a2;
        useAutoPlayStore = module.r;
        useTranslation = module.t;
        autoplayRoundImg = module.aG;
        autoplayCloseImg = module.aH;
        tooltipEventBus = module.L;
        useLongPress = module.$;
        useBettingStore = module.h;
        useConfigStore = module.v;
        thousandSeparator = module.a0;
        BetState = module.B;
        useWinNumberStore$1 = module.I;
        useSettingStore = module.g;
        isInIframe = module.w;
        getFormattedRoundId = module.aI;
        useChatStore = module._;
        toggleFullScreen = module.aJ;
        RoomType = module.a7;
        isSicboGameType = module.aK;
        useDataStore = module.a5;
        connectIns = module.y;
        GameRules = module.a6;
        GameHistoryContent = module.a8;
        GameHistoryContentHeader = module.a9;
        Image = module.Y;
        StraightUp = module.aL;
        FullComplete = module.aM;
        Default = module.aN;
        BoardIDEnum = module.ad;
        GRID_WIN_HIGHLIGHT_FN = module.ae;
        getInitWinHighlight = module.af;
        gridBoardTiltShadow = module.aO;
        grid = module.aP;
        betGridPrefix = module.ai;
        GRID_HOVER_HIGHLIGHT = module.aQ;
        BetTypeEnum = module.ah;
        convertRouletteMap = module.ag;
        useWinAnimStore = module.E;
        ALL_GROUP_MAP = module.aR;
        RACE_TRACK_HIGHLIGHT_FN = module.ap;
        boardRaceTrack = module.aS;
        raceTrackGroup = module.aA;
        RACE_TRACK_HIGHLIGHT = module.aT;
        findNeighborByRange = module.aU;
        extractLeft = module.aB;
        gridBoardTiltTop = module.aV;
        gridBoardTiltBottom = module.aW;
        raceTrackTiltTop = module.aX;
        raceTrackTiltCenter = module.aY;
        raceTrackTiltBottom = module.aZ;
        getWinNumberStore = module.a_;
      }, module => {
        reactExports = module.r;
      }, module => {
        Icon = module.I;
      }, module => {
        useKeyPress = module.u;
      }, null, module => {
        GameAction = module.a;
      }, null, null, null, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "#D_ChipTray:hover .chipMask {\n  opacity: 0;\n}\n#D_ChipTray:hover .strokeOverflowTop,\n#D_ChipTray:hover .strokeOverflowBottom {\n  filter: contrast(1);\n}.desktopChip {\n  width: 1.875rem;\n  height: 1.875rem;\n  position: relative;\n  cursor: pointer;\n  will-change: transform;\n  transition: transform 0.3s;\n  font-size: 0.905rem;\n}\n.desktopChip .stroke,\n.desktopChip .strokeOverflowTop,\n.desktopChip .strokeOverflowBottom,\n.desktopChip .text {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  font-weight: 700;\n  font-family: \"Pill Gothic\";\n  padding-top: 0.18rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.desktopChip .text {\n  background: linear-gradient(180deg, #3d3f40 28.57%, #0d0d0d 64.29%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  z-index: 1;\n  letter-spacing: -0.05rem;\n  padding-right: 0.05rem;\n}\n.desktopChip .stroke {\n  -webkit-mask-image: var(--mask-image);\n          mask-image: var(--mask-image);\n}\n.desktopChip .stroke,\n.desktopChip .strokeOverflowTop,\n.desktopChip .strokeOverflowBottom {\n  padding-right: 0.05rem;\n  letter-spacing: -0.0563rem;\n  -webkit-text-stroke: 0.125rem #e7e6de;\n  -webkit-mask-size: cover;\n          mask-size: cover;\n}\n.desktopChip .strokeOverflowTop,\n.desktopChip .strokeOverflowBottom {\n  z-index: -1;\n  transition: filter 0.3s;\n}\n.desktopChip .strokeOverflowTop {\n  -webkit-clip-path: polygon(-100% 0, 200% 0, 200% 50%, -100% 50%);\n          clip-path: polygon(-100% 0, 200% 0, 200% 50%, -100% 50%);\n  filter: contrast(0.18);\n}\n.desktopChip .strokeOverflowBottom {\n  -webkit-clip-path: polygon(-100% 50%, 200% 50%, 200% 100%, -100% 100%);\n          clip-path: polygon(-100% 50%, 200% 50%, 200% 100%, -100% 100%);\n  filter: contrast(0.5);\n}\n.desktopChip.isDisabled > img {\n  filter: grayscale(100%);\n}\n.desktopChip.isDisabled .text {\n  background: linear-gradient(180deg, #3d3f40 28.57%, #494949 64.29%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.desktopChip .chipMask {\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(0, 0, 0, 0.11) 100%);\n  transition: opacity 0.3s;\n  opacity: 1;\n  pointer-events: none;\n  -webkit-mask-size: cover;\n          mask-size: cover;\n  -webkit-mask-image: var(--mask-image);\n          mask-image: var(--mask-image);\n}\n.desktopChip.isActive {\n  transform: scale(1.4);\n}\n.desktopChip.isActive .strokeOverflowTop,\n.desktopChip.isActive .strokeOverflowBottom {\n  filter: contrast(1);\n}\n.desktopChip.isActive .chipMask {\n  opacity: 0;\n}\n\n.chipClickableArea:hover .desktopChip {\n  transform: scale(1.4);\n}.desktopModal {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  font-family: \"Lufga\";\n  border-radius: 1.5rem;\n  background: linear-gradient(180deg, #232222 0%, #151718 3.3rem, #111213 12rem);\n  position: absolute;\n  overflow: hidden;\n}\n.desktopModal::after {\n  padding: 0.0625rem;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n  background: linear-gradient(180deg, rgba(184, 152, 114, 0.4) 0%, rgba(0, 0, 0, 0) 10.24%, rgba(0, 0, 0, 0) 86.5%, rgba(139, 108, 72, 0.4) 100%);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n.desktopModal .contentWrap {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  overflow: hidden;\n  position: relative;\n  padding-bottom: 0.125rem;\n}\n.desktopModal .scrollWrap {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  touch-action: pan-x pan-y;\n  flex-grow: 1;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.desktopModal .scrollWrap::-webkit-scrollbar {\n  display: none;\n}\n.desktopModal .scrollShadow {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 2.69rem;\n  background: linear-gradient(180deg, rgba(18, 20, 20, 0) 0%, #121414 100%);\n}\n.desktopModal .goldenHeader {\n  margin-left: 0.15em;\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-xxs, 0.875rem);\n  letter-spacing: 0.1125rem;\n  text-transform: uppercase;\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.iconWrapper {\n  display: flex;\n  padding: var(--Spacing-s, 0.5rem);\n  justify-content: center;\n  align-items: center;\n  gap: 0.625rem;\n  border-radius: var(--Spacing-xl);\n  background: var(--Overlay-Screen-Icon-Background, linear-gradient(180deg, rgba(12, 12, 12, 0.05) 0%, rgba(12, 12, 12, 0.5) 100%));\n}#D_Footer .pairLabel {\n  margin-bottom: 0.125rem;\n  font-size: 0.75rem;\n  line-height: var(--Typography-Line-Height-xxs, 0.875rem); /* 116.667% */\n  letter-spacing: -0.015rem;\n  text-transform: uppercase;\n  color: var(--Beige-Gold-Beige-Gold100, #f4efe8);\n  opacity: 0.6;\n}\n#D_Footer .pairNumber {\n  font-family: Sora;\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 100% */\n  letter-spacing: -0.03rem;\n}\n#D_Footer .textBtn {\n  position: relative;\n  cursor: pointer;\n  transition: transform 150ms ease-out;\n}\n#D_Footer .textBtn span {\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 114.286% */\n  letter-spacing: 0.035rem;\n  text-transform: uppercase;\n  background: var(--Navbar-Icon-Default, linear-gradient(180deg, #ece9e1 0%, #afa483 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#D_Footer .textBtn:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 2rem;\n  background: linear-gradient(180deg, rgba(236, 233, 225, 0.375) 0%, rgba(175, 164, 131, 0.375) 100%);\n  border-radius: 50%;\n  filter: blur(0.75rem);\n  opacity: 0;\n  transition: opacity 150ms ease-out;\n}\n#D_Footer .textBtn.isHovering:not(.isDisabled) {\n  transform: scale(1.1);\n}\n#D_Footer .textBtn.isHovering:not(.isDisabled):after {\n  opacity: 1;\n}\n#D_Footer .textBtn.isDisabled {\n  cursor: auto;\n}\n#D_Footer .textBtn.isDisabled > span {\n  background: var(--Button-Text-Disabled);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#D_Footer .iconBtn {\n  position: relative;\n  height: 3rem;\n  width: 4rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 150ms ease-out;\n  will-change: transform;\n}\n#D_Footer .iconBtn .hoverShine {\n  position: absolute;\n  width: 1.5rem;\n  height: 1.5rem;\n  background: linear-gradient(180deg, rgba(236, 233, 225, 0.75) 0%, rgba(175, 164, 131, 0.75) 100%);\n  border-radius: 50%;\n  filter: blur(1rem);\n  opacity: 0;\n  transition: opacity 150ms ease-in-out;\n}\n#D_Footer .iconBtn.isDisabled .UndoSVG path {\n  fill: url(#undo_disable_10013_101800);\n}\n#D_Footer .iconBtn.isDisabled .RepeatSVG path {\n  fill: url(#repeat_disable_10021_104876);\n}\n#D_Footer .iconBtn.isDisabled .DoubleSVG path {\n  fill: url(#double_disable_10013_101800);\n}\n#D_Footer .iconClickableArea:hover .iconBtn:not(.isDisabled),\n#D_Footer .iconClickableArea:hover .textBtn:not(.isDisabled) {\n  transform: scale(1.1);\n}\n#D_Footer .iconClickableArea:hover .iconBtn:not(.isDisabled):after,\n#D_Footer .iconClickableArea:hover .textBtn:not(.isDisabled):after {\n  opacity: 1;\n}\n#D_Footer .iconClickableArea:hover .iconBtn:not(.isDisabled) .hoverShine,\n#D_Footer .iconClickableArea:hover .textBtn:not(.isDisabled) .hoverShine {\n  opacity: 1;\n}\n#D_Footer .divider {\n  border-right-width: 0.0625rem;\n}.winAmount {\n  -webkit-text-fill-color: var(--Warm-Grey-Warm-Grey700, #a1956e);\n  text-align: center;\n  font-family: Sora;\n  font-size: 0.625rem;\n  font-weight: 600;\n  line-height: 0.625rem; /* 100% */\n  letter-spacing: -0.0187rem;\n}\n\n.winName {\n  -webkit-text-fill-color: var(--Neutrial-White-Neutrial-White, #f9f9f9);\n  font-feature-settings: \"ss02\" on;\n  font-family: var(--Typography-Font, Lufga);\n  font-size: var(--Typography-Size-xxs, 10px);\n  font-weight: 400;\n  line-height: var(--Typography-Line-Height-xxs, 14px); /* 140% */\n}\n\n.maskRight {\n  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 2.1%, rgba(0, 0, 0, 0.5) 4.2%, rgb(0, 0, 0) 6.3%, rgb(0, 0, 0) 8.4%);\n          mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 2.1%, rgba(0, 0, 0, 0.5) 4.2%, rgb(0, 0, 0) 6.3%, rgb(0, 0, 0) 8.4%);\n}\n\n.maskLeft {\n  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 0.4rem, rgba(0, 0, 0, 0.5) 1rem, rgb(0, 0, 0) 1.5rem, rgb(0, 0, 0) 2rem);\n          mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 0.4rem, rgba(0, 0, 0, 0.5) 1rem, rgb(0, 0, 0) 1.5rem, rgb(0, 0, 0) 2rem);\n}@keyframes blink {\n  0%, 15% {\n    opacity: 0;\n  }\n}\n#DesktopHeader {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 0.75rem;\n  padding-left: 1.5rem;\n  padding-right: 0.85rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  z-index: 10;\n  font-weight: 500;\n  height: 4rem;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 114.286% */\n  background: var(--Navbar-Icon-Default, linear-gradient(180deg, #ece9e1 0%, #afa483 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-backdrop-filter: blur(0.5rem);\n          backdrop-filter: blur(0.5rem);\n  font-family: \"Sora\";\n}\n#DesktopHeader .title {\n  font-feature-settings: \"ss02\" on;\n  font-family: var(--Typography-Font, Lufga);\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 114.286% */\n  letter-spacing: 0.035rem;\n  text-transform: uppercase;\n  margin-right: 0.75rem;\n}\n#DesktopHeader .divider {\n  height: 1rem;\n  width: 0.0625rem;\n  border-radius: 9999px;\n  margin-right: 0.75rem;\n  background: var(--Neutrial-White-Alpha-Neutrial-White-10, rgba(249, 249, 249, 0.1));\n}\n#DesktopHeader .iconContainer {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  transition: transform 0.08s ease-out;\n  will-change: transform;\n}\n#DesktopHeader .iconContainer svg .pathInactive,\n#DesktopHeader .iconContainer svg .pathActive {\n  transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1);\n}\n#DesktopHeader .iconContainer svg .pathActive {\n  opacity: 0;\n}\n#DesktopHeader .iconContainer div:first-child {\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -58%);\n  width: 1.5rem;\n  aspect-ratio: 1/1;\n  background: linear-gradient(180deg, rgba(236, 233, 225, 0.75) 0%, rgba(175, 164, 131, 0.75) 100%);\n  border-radius: 50%;\n  filter: blur(1.1rem);\n  transition: opacity 0.08s ease-out, filter 0.08s ease-out, width 0.08s ease-out;\n}\n#DesktopHeader .iconContainer.active div:first-child {\n  opacity: 1;\n  filter: blur(1rem);\n  width: 1.6rem;\n}\n#DesktopHeader .iconContainer.active svg {\n  filter: drop-shadow(0 0 0.1rem rgba(223, 207, 187, 0.4));\n}\n#DesktopHeader .iconContainer.active svg .pathActive {\n  animation: blink 0.6s cubic-bezier(0.25, 1, 0.5, 1);\n}\n#DesktopHeader .iconContainer.active .pathInactive, #DesktopHeader .iconContainer.noneSelected .pathInactive {\n  opacity: 0;\n}\n#DesktopHeader .iconContainer.active .pathActive, #DesktopHeader .iconContainer.noneSelected .pathActive {\n  opacity: 1;\n}\n#DesktopHeader .iconClickableArea:hover .iconContainer:not(.active) {\n  transform: scale(1.2);\n}\n#DesktopHeader .iconClickableArea:hover .iconContainer div:first-child {\n  opacity: 1;\n}\n#DesktopHeader .iconClickableArea:hover .iconContainer svg .pathInactive {\n  opacity: 0;\n}\n#DesktopHeader .iconClickableArea:hover .iconContainer svg .pathActive {\n  opacity: 1;\n}#DesktopChatRoom {\n  /* ------------------------------ variable start ------------------------------ */\n  /* ------------------------------ variable end ------------------------------ */\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 23.2rem;\n  height: 100%;\n  border-bottom-right-radius: 1.5rem;\n  z-index: 0;\n}\n#DesktopChatRoom::before, #DesktopChatRoom::after {\n  z-index: -1;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  opacity: 0;\n  transition: opacity 0.3s ease-out, width 0.3s ease-out;\n}\n#DesktopChatRoom::before {\n  background: linear-gradient(273deg, rgba(12, 12, 12, 0.6) 3.13%, rgba(12, 12, 12, 0.75) 41.66%, var(--Neutral-Black-Alpha-Neutral-Black-80, rgba(12, 12, 12, 0.8)) 98.01%);\n}\n#DesktopChatRoom::after {\n  background: linear-gradient(to left, rgba(12, 12, 12, 0) 0%, rgba(12, 12, 12, 0.3137254902) 41%, rgba(12, 12, 12, 0.5019607843) 100%);\n}\n#DesktopChatRoom.isInputHover:not(.isExpand)::after, #DesktopChatRoom.isInputHasText:not(.isExpand)::after {\n  opacity: 1;\n}\n#DesktopChatRoom.isSicbo {\n  bottom: 11.6875rem;\n  height: calc(100% - 11.6875rem);\n}\n#DesktopChatRoom.isSicbo::before {\n  border-bottom-right-radius: unset;\n}\n#DesktopChatRoom .expandBtnWrapper {\n  pointer-events: none;\n  transition: opacity 0.3s ease-out, width 0.3s ease-out, transform 0s ease-out;\n  position: absolute;\n  bottom: 1.975rem;\n  right: -1.15rem;\n  display: flex;\n  height: -webkit-max-content;\n  height: max-content;\n  height: 2.75rem;\n  justify-content: flex-end;\n  opacity: 0;\n}\n#DesktopChatRoom .expandBtn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2.65rem;\n  aspect-ratio: 1/1;\n  border-radius: 50%;\n  -webkit-backdrop-filter: blur(0rem);\n          backdrop-filter: blur(0rem);\n  cursor: pointer;\n  transition: opacity 0.3s ease-out, width 0.3s ease-out;\n}\n#DesktopChatRoom .expandBtn::after {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  padding: 0.0625rem;\n  border-radius: 9999px;\n  background: linear-gradient(180deg, rgba(236, 233, 225, 0.5) 0%, rgba(175, 164, 131, 0.5) 100%), conic-gradient(from 180deg at 50% 50%, rgba(122, 107, 89, 0.2) 58.5179740191deg, rgba(118, 105, 80, 0.2) 110.657762289deg, rgba(181, 174, 161, 0.2) 147.494276762deg, rgba(118, 105, 80, 0.2) 180.3193974495deg, rgba(122, 107, 89, 0.2) 232.3237395287deg, rgba(150, 146, 145, 0.2) 325.2996397018deg);\n  content: \"\";\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  opacity: 0;\n  transition: opacity 0.3s ease-out, width 0.3s ease-out;\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n#DesktopChatRoom .expandBtn svg {\n  transition: opacity 0.3s ease-out, width 0.3s ease-out;\n  width: 0.5rem;\n  aspect-ratio: 1/1;\n}\n#DesktopChatRoom .expandBtn:hover {\n  background: linear-gradient(to bottom, rgba(251, 251, 251, 0.15) 0%, rgba(197, 197, 197, 0.1) 100%);\n  -webkit-backdrop-filter: blur(0.25rem);\n          backdrop-filter: blur(0.25rem);\n}\n#DesktopChatRoom .expandBtn:hover::after {\n  opacity: 1;\n}\n#DesktopChatRoom .expandBtn:hover svg {\n  width: 0.59rem;\n}\n#DesktopChatRoom .expandBtn:hover svg path {\n  fill: #f5f4f0;\n}\n#DesktopChatRoom .collapseBtn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  right: 1.125rem;\n  top: 0.75rem;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 50%;\n  border: 0.0625rem solid transparent;\n  background: linear-gradient(180deg, #232222 0%, #151718 27.41%, #111213 100%) padding-box, linear-gradient(180deg, rgba(104, 104, 104, 0.5) 0%, rgba(49, 49, 49, 0.5) 42%) border-box;\n  box-shadow: 0px 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.6);\n  transition: background 0.3s ease;\n}\n#DesktopChatRoom .collapseBtn::before {\n  position: absolute;\n  border-radius: inherit;\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%);\n  content: \"\";\n  opacity: 0;\n  transition: opacity 0.3s ease-out, width 0.3s ease-out;\n  inset: 0;\n}\n#DesktopChatRoom .collapseBtn:hover::before {\n  opacity: 1;\n}\n#DesktopChatRoom .chatRoomContent {\n  overflow-y: hidden;\n}\n#DesktopChatRoom .chatRoomWrapper {\n  transition: opacity 0.3s ease-out, width 0.3s ease-out;\n  position: relative;\n  top: 3.5rem;\n  height: 100%;\n  max-height: calc(100% - 3.5rem);\n  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.6) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 100%);\n          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.6) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 100%);\n}\n#DesktopChatRoom.isExpandHover .chatRoomWrapper {\n  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.6) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 100%);\n          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.6) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 100%);\n}\n#DesktopChatRoom #ChatRoom {\n  padding-top: inherit;\n  padding-right: 1.65rem;\n  padding-bottom: 1.938rem;\n  padding-left: 0.938rem;\n}\n#DesktopChatRoom .textArea {\n  padding: 0rem 0.17rem 0rem 1.125rem;\n}\n#DesktopChatRoom .ChatBubble .msg {\n  opacity: 0;\n  transition: opacity 0.3s ease-out, width 0.3s ease-out;\n}\n#DesktopChatRoom .ChatBubble:nth-child(-n+3) .msg {\n  transition-delay: 3s;\n}\n#DesktopChatRoom .ChatBubble.isAlive .msg {\n  opacity: 1;\n}\n#DesktopChatRoom .ChatBubble {\n  margin-bottom: 0.5rem;\n}\n#DesktopChatRoom .ChatBubble:first-child {\n  margin-bottom: 0;\n}\n#DesktopChatRoom .ChatBubble:not(.isSelf) .msg {\n  border-radius: 0.25rem var(--Radius-m, 1rem) var(--Radius-m, 1rem) var(--Radius-m, 1rem);\n  background: rgba(85, 85, 85, 0.45);\n}\n#DesktopChatRoom .ChatBubble.isSelf .msg {\n  border-radius: var(--Radius-m, 1rem) 0.25rem var(--Radius-m, 1rem) var(--Radius-m, 1rem);\n}\n#DesktopChatRoom.isLayerHover .ChatBubble:nth-child(-n+3) .msg, #DesktopChatRoom.isInputHasText .ChatBubble:nth-child(-n+3) .msg {\n  opacity: 1;\n  transition-delay: 0s;\n}\n#DesktopChatRoom.isInputHover:not(.isExpandHovered, .isExpand) .ChatBubble:nth-child(4) .msg {\n  transform: translateY(-50%);\n  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);\n}\n#DesktopChatRoom.isExpandHover .ChatBubble:nth-child(4) .msg, #DesktopChatRoom.isExpand .ChatBubble:nth-child(4) .msg {\n  transform: translateY(0);\n  transition: opacity 0.3s ease-out, width 0.3s ease-out;\n}\n#DesktopChatRoom.isInputHover:not(.isExpand) .expandBtnWrapper, #DesktopChatRoom.isInputHasText:not(.isExpand) .expandBtnWrapper {\n  opacity: 1;\n  pointer-events: unset;\n}\n#DesktopChatRoom.isExpandHover .chatRoomContent {\n  height: 100%;\n}\n#DesktopChatRoom.isExpand::before {\n  opacity: 1;\n}\n#DesktopChatRoom.isExpand .chatRoomWrapper {\n  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 100%);\n          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 100%);\n}\n#DesktopChatRoom.isExpand .chatRoomContent {\n  height: 100%;\n  overflow-y: auto;\n  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 100%);\n          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 100%);\n}\n#DesktopChatRoom.isExpand .chatRoomHeader::after {\n  opacity: 1;\n}\n#DesktopChatRoom.isExpand .msg {\n  opacity: 1;\n}\n#DesktopChatRoom.isExpand .expandBtnWrapper {\n  pointer-events: none;\n  transform: translateX(-70%);\n  transition: opacity 0.3s ease-out, width 0.3s ease-out, transform 0.4s ease-out;\n}\n#DesktopChatRoom.isExpandHover .msg {\n  opacity: 1;\n}\n#DesktopChatRoom .presenter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  height: 3.5rem;\n  width: 100%;\n  background: var(--Overlay-Screen-Title);\n  background-clip: text;\n  -webkit-background-clip: text;\n  font-family: var(--Typography-Font);\n  font-feature-settings: \"ss02\" on;\n  font-size: var(--Typography-Size-xs);\n  font-style: normal;\n  font-weight: 500;\n  letter-spacing: 0.03rem;\n  line-height: var(--Typography-Line-Height-xs);\n  text-transform: uppercase;\n  transition: opacity 0.3s ease-out, width 0.3s ease-out;\n  -webkit-text-fill-color: transparent;\n}\n#DesktopChatRoom .presenter .title {\n  color: var(--Overlay-Operator-Dealer-Name, #f4efe8);\n  -webkit-text-fill-color: initial;\n}\n#DesktopChatRoom:not(.isExpand) .presenter {\n  opacity: 0;\n  pointer-events: none;\n}#SoundSetting {\n  margin-top: -0.3rem; /* For pixel perfect */\n}\n#SoundSetting .volumeControlContainer {\n  font-family: var(--Typography-Font, Lufga);\n  z-index: 10;\n  opacity: 1;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 0.5rem;\n  font-size: var(--Typography-Size-s, 0.875rem);\n  line-height: var(--Typography-Line-Height-s, 1.25rem);\n  letter-spacing: -0.0262rem;\n  padding: 1rem;\n  height: -webkit-fit-content;\n  height: fit-content;\n  font-weight: 400;\n  flex-shrink: 0;\n  max-height: 8rem;\n  overflow: hidden;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n  transition: max-height 0.3s linear 0s, opacity 0.2s cubic-bezier(0, 0.98, 0.58, 1) 0.1s, -webkit-clip-path 0s ease-out 0s;\n  transition: clip-path 0s ease-out 0s, max-height 0.3s linear 0s, opacity 0.2s cubic-bezier(0, 0.98, 0.58, 1) 0.1s;\n  transition: clip-path 0s ease-out 0s, max-height 0.3s linear 0s, opacity 0.2s cubic-bezier(0, 0.98, 0.58, 1) 0.1s, -webkit-clip-path 0s ease-out 0s;\n}\n#SoundSetting .volumeControlContainer.open {\n  max-height: 31rem;\n}\n#SoundSetting .volumeControlContainer.open .volumeSettingsArrow {\n  rotate: 180deg;\n}\n#SoundSetting .volumeControlContainer:hover {\n  display: flex;\n}\n#SoundSetting .volumeControl {\n  background: var(--Navbar-Icon-Default, linear-gradient(180deg, #ece9e1 0%, #afa483 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#SoundSetting .volumeControlExpand {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding-left: 0.4rem;\n  text-align: center;\n  line-height: var(--Typography-Line-Height-xs, 1rem);\n  letter-spacing: 0.03rem;\n  text-transform: uppercase;\n  background: var(--General-Colors-Text-Inactive-Text, #7a7a7a);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  cursor: pointer;\n}\n#SoundSetting .volumeControlExpand:hover {\n  background: linear-gradient(180deg, #ece9e1 0%, #afa483 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#SoundSetting .volumeControlExpand:hover > svg > path {\n  fill: url(#volumeSettingsArrow);\n}\n#SoundSetting .volumeControlExpand span {\n  margin-right: 0.25rem;\n  letter-spacing: 0.03rem;\n}\n#SoundSetting .volumeControlExpand .volumeSettingsArrow {\n  transition: rotate 0.25s linear;\n}\n#SoundSetting .volumeControlExpand.open {\n  background: linear-gradient(180deg, #ece9e1 0%, #afa483 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}.desktopModal .selectList .text {\n  color: #7a7a7a;\n  transition: color 0.2s;\n}\n.desktopModal .selectList .desc {\n  --tw-text-opacity: 1;\n  color: rgb(100 76 47 / var(--tw-text-opacity, 1));\n}\n.desktopModal .selectList .checkMark {\n  opacity: 0;\n  width: 1rem;\n}\n.desktopModal .selectList .row.checked .text {\n  color: #eadfd2;\n}\n.desktopModal .selectList .row.checked .desc {\n  --tw-text-opacity: 1;\n  color: rgb(165 125 78 / var(--tw-text-opacity, 1));\n}\n.desktopModal .selectList .row.checked .checkMark {\n  opacity: 1;\n}\n.desktopModal .list {\n  border-radius: var(--Radius-m, 1rem);\n  border: 0.0313rem solid #3e3e3e;\n  display: grid;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  background: var(--Neutral-Black-Neutral-Black300, #252525);\n  color: var(--toggle-switchers-settings-control-heading-active, #eadfd2);\n  font-size: var(--Typography-Size-s, 0.875rem);\n  line-height: var(--Typography-Line-Height-s, 1.25rem);\n  letter-spacing: -0.0262rem;\n}\n.desktopModal .list > .row {\n  border-bottom: 0.0625rem solid #323232;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.25rem;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.desktopModal .list > .row:last-child {\n  border-bottom: none;\n}.d_resultWrap {\n  border-radius: var(--Radius-m, 1rem);\n  background: linear-gradient(180deg, rgba(8, 8, 8, 0.6) 0%, rgba(8, 8, 8, 0.6) 30.5%, rgba(0, 0, 0, 0.6) 73%);\n  padding: var(--Spacing-xs) var(--Spacing-xs-2);\n  width: 21rem;\n  margin-right: auto;\n}\n\n.noBg {\n  background: none;\n}.StaticGridBoard {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-columns: 1.18fr 0.3fr repeat(12, 0.3fr 0.9fr 0.3fr) 0.3fr 1.18fr;\n  grid-template-rows: 1.26fr 0.3fr repeat(3, 0.3fr 0.9fr 0.3fr) 0.3fr 1.26fr;\n  cursor: pointer;\n}\n.StaticGridBoard span {\n  transition: box-shadow 0.2s;\n}\n.StaticGridBoard span.highlighted {\n  background: linear-gradient(131deg, rgba(223, 207, 187, 0.05) 0%, rgba(223, 207, 187, 0.2) 0.37%, rgba(223, 207, 187, 0.05) 100%);\n  box-shadow: 4px -4px 8px 0px rgba(142, 108, 67, 0.25), -4px 4px 8px 0px rgba(223, 207, 187, 0.1), 0px 0px 12px 0px rgba(255, 255, 255, 0.1) inset, -8px 8px 8px 0px rgba(223, 207, 187, 0.15) inset, 8px -8px 8px 0px rgba(142, 108, 67, 0.3) inset;\n  position: relative;\n  overflow: hidden;\n}\n.StaticGridBoard span.highlighted::after {\n  padding: 0.0938rem;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n  background: linear-gradient(194deg, var(--Beige-Gold-Beige-Gold500, #c9ae8d) 9.16%, var(--Beige-Gold-Beige-Gold800, #a57d4e) 89.58%);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n\n.rotateBoard {\n  cursor: pointer;\n  bottom: 0;\n  position: relative;\n  transform-origin: center bottom;\n  transform-style: preserve-3d;\n  transition: opacity 0.4s;\n}\n\n.fadeIn,\n.fadeOut {\n  transition: opacity 1s cubic-bezier(0.47, 0, 0.05, 1);\n}\n\n.fadeIn {\n  opacity: 1;\n}\n\n.fadeOut {\n  opacity: 0;\n}#RacetrackBoard #RacetrackSVG {\n  z-index: 2;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}#RaceTrackRangeButton {\n  border-radius: var(--Radius-lg, 2rem);\n}\n#RaceTrackRangeButton .borderInner {\n  margin: 0.05rem;\n  border-radius: inherit;\n  background: linear-gradient(180deg, rgba(251, 251, 251, 0.1) 0%, rgba(197, 197, 197, 0.05) 100%);\n}\n#RaceTrackRangeButton {\n  position: relative;\n  overflow: hidden;\n}\n#RaceTrackRangeButton::after {\n  padding: 0.1rem;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n  background: conic-gradient(from 180deg at 50% 50%, rgba(122, 107, 89, 0.2) 58.5179740191deg, rgba(118, 105, 80, 0.2) 110.657762289deg, rgba(181, 174, 161, 0.2) 147.494276762deg, rgba(118, 105, 80, 0.2) 180.3193974495deg, rgba(122, 107, 89, 0.2) 232.3237395287deg, rgba(150, 146, 145, 0.2) 325.2996397018deg);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n#RaceTrackRangeButton .num {\n  font-family: Sora;\n  font-size: var(--Typography-Size-s, 0.875rem);\n  font-weight: 600;\n  line-height: 0.625rem; /* 71.429% */\n  letter-spacing: -0.0262rem;\n  background: var(--Navbar-Icon-Default, linear-gradient(180deg, #ece9e1 0%, #afa483 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#RaceTrackRangeButton .iconBtn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.95rem;\n  height: 1.95rem;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n}\n#RaceTrackRangeButton .iconBtn::after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid #7a6b59;\n  border-radius: inherit;\n  background: linear-gradient(180deg, rgba(251, 251, 251, 0.1) 0%, rgba(197, 197, 197, 0.05) 100%);\n  opacity: 0;\n  transition: opacity 0.3s;\n  pointer-events: none;\n}\n#RaceTrackRangeButton .iconBtn:hover::after {\n  opacity: 1;\n}\n#RaceTrackRangeButton .iconBtn.disabled::after {\n  opacity: 0 !important;\n}\n#RaceTrackRangeButton .iconBtn.disabled path {\n  fill: #414141;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const DesktopChip = ({
          val,
          isDisabled,
          isActive,
          className
        }) => {
          const {
            front
          } = getChipSrc(val, isDisabled);
          const displayChipVal = convertLabel(val);
          const handleClick = () => {
            if (isDisabled) return;
            useCartStore.getState().setSelectChipVal(val);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea, {
            wrapClassName: "chipClickableArea",
            className: "size-[3.125rem]",
            onClick: handleClick,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: cn("desktopChip", {
                isActive,
                isDisabled
              }, className),
              style: {
                "--mask-image": `url(${front})`
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                src: front,
                alt: `Chip value ${val}`
              }), !isDisabled && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "strokeOverflowTop",
                  children: displayChipVal
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "strokeOverflowBottom",
                  children: displayChipVal
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "stroke",
                  children: displayChipVal
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "text",
                children: displayChipVal
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "chipMask"
              })]
            })
          });
        };
        function ChipTray() {
          const chipList = useCartStore(s => s.chipList).filter(chip => chip.onTable === true);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "D_ChipTray",
            className: "mx-2 flex items-center gap-[1.25rem] px-[.375rem]",
            children: chipList.map((chip, idx) => {
              const isActive = isChipActive(chip.amount);
              const isDisabled = isChipDisabled(chip.amount);
              return /* @__PURE__ */jsxRuntimeExports.jsx(DesktopChip, {
                val: chip.amount,
                isActive,
                isDisabled,
                className: isActive ? "active" : ""
              }, idx);
            })
          });
        }
        const motions = {
          right: {
            initial: {
              x: 10,
              opacity: 0
            },
            animate: {
              x: 0,
              opacity: 1
            }
          },
          bottom: {
            initial: {
              y: 10,
              opacity: 0
            },
            animate: {
              y: 0,
              opacity: 1
            }
          },
          left: {
            initial: {
              x: -10,
              opacity: 0
            },
            animate: {
              x: 0,
              opacity: 1
            }
          }
        };
        function DesktopModal(props) {
          var _motions$placement, _motions$placement2;
          const prevDesktopModal = useLayoutStore(state => state.prevDesktopModal);
          const openDesktopModal = useLayoutStore(state => state.openDesktopModal);
          const closeDesktopModal = useLayoutStore(state => state.closeDesktopModal);
          const closeNewestDesktopModal = useLayoutStore(state => state.closeNewestDesktopModal);
          const {
            position,
            contentWrapClassName,
            scrollWrapClassName,
            placement
          } = props;
          const {
            content,
            title,
            modalType,
            modalSide
          } = props;
          const {
            leftIcon = false,
            onBeforeCloseModal
          } = props;
          const {
            requireShadow = true
          } = props;
          const handleClose = () => {
            onBeforeCloseModal === null || onBeforeCloseModal === void 0 || onBeforeCloseModal();
            playSound(["click"]);
            closeDesktopModal(modalType);
          };
          const handleReturn = () => {
            playSound(["click"]);
            scrollWrapToTop(prevDesktopModal);
            openDesktopModal(prevDesktopModal);
          };
          useKeyPress({
            targetKey: "Escape",
            callback: () => {
              closeNewestDesktopModal();
            }
          });
          const ref = useClickAway(e => {
            var _e$target$closest;
            const targetSide = (_e$target$closest = e.target.closest("[data-modal-side]")) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.getAttribute("data-modal-side");
            if (!targetSide) closeNewestDesktopModal();
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs(motion.div, {
            ref,
            initial: (_motions$placement = motions[placement]) === null || _motions$placement === void 0 ? void 0 : _motions$placement.initial,
            animate: (_motions$placement2 = motions[placement]) === null || _motions$placement2 === void 0 ? void 0 : _motions$placement2.animate,
            transition: {
              duration: 0.1,
              ease: "linear"
            },
            className: `${position} desktopModal`,
            "data-modal-type": modalType,
            "data-modal-side": modalSide,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex items-center justify-between px-4 pb-1 pt-4",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "size-11",
                children: leftIcon && /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Left, {
                  className: "size-11 cursor-pointer hover:brightness-125",
                  onClick: handleReturn
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "goldenHeader",
                children: title
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Close, {
                className: "size-11 cursor-pointer hover:brightness-125",
                onClick: handleClose
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn("contentWrap", contentWrapClassName),
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("scrollWrap", scrollWrapClassName),
                children: content
              })
            }), requireShadow && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "scrollShadow pointer-events-none h-[5rem] transition-opacity"
            })]
          });
        }
        const FooterAutoPlay = () => {
          const desktopModal = useLayoutStore(state => state.desktopModal);
          const openDesktopModal = useLayoutStore(state => state.openDesktopModal);
          const closeDesktopModal = useLayoutStore(state => state.closeDesktopModal);
          const isAutoPlayOpen = desktopModal === "autoplay";
          const isAutoPlay = useAutoPlayStore(state => state.isAutoPlay);
          const roundRemaining = useAutoPlayStore(state => state.roundRemaining);
          const isHaveBets = useAutoPlayStore(state => state.isHaveBets);
          const noBet = !isHaveBets();
          const cancelAutoPlay = useAutoPlayStore(state => state.cancelAutoPlay);
          const {
            t
          } = useTranslation();
          reactExports.useEffect(() => {
            if (!isAutoPlay) return;
            if (noBet) {
              cancelAutoPlay();
            }
          }, [noBet]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea, {
              wrapClassName: "iconClickableArea",
              className: "h-[3.125rem] w-[120%]",
              onClick: () => {
                if (!isHaveBets()) {
                  tooltipEventBus.emit("noBet", {
                    anchorSelect: "#AutoPlayBtn"
                  });
                  return;
                }
                playSound(["click"]);
                if (isAutoPlayOpen) {
                  closeDesktopModal(desktopModal);
                } else {
                  openDesktopModal("autoplay");
                }
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                id: "AutoPlayBtn",
                className: cn(`textBtn pointer-events-none z-[1] flex items-center`, {
                  isDisabled: noBet,
                  "mr-1": !isAutoPlay
                }),
                "data-modal-side": "right",
                children: [isAutoPlay ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                    src: autoplayRoundImg,
                    alt: "autoplay round",
                    className: "mr-[0.14rem] w-8"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
                    animate: {
                      opacity: 1,
                      y: 0
                    },
                    initial: {
                      opacity: 0,
                      y: -5
                    },
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                      mass: 1,
                      duration: 0.3
                    },
                    exit: {
                      opacity: 0,
                      y: 3
                    },
                    className: "absolute left-[0.55rem] w-4 text-center text-[0.55rem]",
                    children: roundRemaining
                  })]
                }) : noBet ? /* @__PURE__ */jsxRuntimeExports.jsx(Icon.AutoplayDisabled, {
                  className: "mr-[0.275rem] mt-[0.1rem] w-[1.725rem]"
                }) : /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Autoplay, {
                  className: "mr-[0.47rem] w-[1.375rem]"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-[0.875rem]",
                  children: t("COMMON.AUTOPLAY")
                }), isAutoPlay && /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
                  whileHover: {
                    scale: 1.1
                  },
                  whileTap: {
                    scale: 0.9
                  },
                  className: "pointer-events-auto",
                  onClick: e => {
                    e.stopPropagation();
                    cancelAutoPlay();
                    playSound(["click"]);
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                    src: autoplayCloseImg,
                    alt: "autoplay close",
                    className: "w-6"
                  })
                })]
              })
            }), isAutoPlayOpen && !noBet && /* @__PURE__ */jsxRuntimeExports.jsx(DesktopModal, {
              position: "z-16 bottom-16 right-[3.4rem] w-[19rem] z-20",
              contentWrapClassName: "px-4 pb-4 pt-1",
              title: t("COMMON.AUTOPLAY"),
              modalType: "autoplay",
              requireShadow: false,
              content: /* @__PURE__ */jsxRuntimeExports.jsx(AutoPlay, {
                requireTitle: false,
                closeOnDesktop: () => {
                  closeDesktopModal("autoplay");
                }
              }),
              placement: "bottom",
              modalSide: "right"
            })]
          });
        };
        const FooterLobby = () => {
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea, {
            wrapClassName: "iconClickableArea",
            className: "h-[3.125rem] w-[8.25rem] -translate-x-[0.25rem]",
            onClick: () => tooltipEventBus.emit("comingSoon", {
              anchorSelect: "#footerLobbyBtn"
            }),
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              id: "footerLobbyBtn",
              className: "textBtn flex items-center gap-2 pr-2",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Icon.LobbyDesktop, {
                className: "w-[1.125rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                className: "text-[0.875rem]",
                children: t("COMMON.LOBBY")
              })]
            })
          });
        };
        const TotalBet = ({
          isLabel = false,
          lastWinCache
        }) => {
          const totalBet = useCartStore(s => s.totalBet);
          const isAutoPlay = useAutoPlayStore(s => s.isAutoPlay);
          const gameState = useBettingStore(s => s.gameState);
          const {
            t
          } = useTranslation();
          const isAutoPlayWin = isAutoPlay && lastWinCache !== 0 && gameState === BetState.Settlement;
          const isShowLastWin = lastWinCache || isAutoPlayWin;
          if (isLabel) return (isShowLastWin ? t("COMMON.LAST_WIN") : t("COMMON.TOTAL_BET")) + ":";
          return isShowLastWin ? thousandSeparator(lastWinCache) : thousandSeparator(totalBet);
        };
        function Footer({
          lastWinCache
        }) {
          const {
            boardHistory,
            boardHistoryCache,
            remainedBalance,
            currencySymbol
          } = useCartStore(s => ({
            boardHistory: s.boardHistory,
            boardHistoryCache: s.boardHistoryCache,
            remainedBalance: s.remainedBalance,
            currencySymbol: s.currencySymbol
          }));
          const {
            handleDouble,
            handleRepeat,
            handleUndo
          } = useCartStore.getState();
          const pressAttrs = useLongPress(() => useCartStore.setState({
            boardHistory: [],
            totalBet: 0
          }), {
            threshold: 1500
          });
          const cacheSum = boardHistoryCache ? Object.values(boardHistoryCache).reduce((a, b) => a + b, 0) : 0;
          const isRepeatDisable = !boardHistoryCache || remainedBalance - cacheSum < 0;
          const isOverLimit = useBettingStore(state => state.isOverLimit);
          const isBet = useBettingStore(state => state.isBet);
          const {
            AUTOPLAY_ALLOWED,
            SHOW_LOBBY_ALLOWED
          } = useConfigStore(s => s.JURISDICTION);
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "D_Footer",
            className: "relative flex h-14 flex-shrink-0 items-center px-6",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "divider mr-[1.12rem] grid border-[#313131] pr-4",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                className: "pairLabel",
                children: [t("COMMON.BALANCE"), ":"]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                className: "pairNumber text-[#f4efe8]",
                id: "MainBalance",
                children: `${currencySymbol} ${thousandSeparator(remainedBalance)}`
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "mr-auto grid",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                className: "pairLabel",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(TotalBet, {
                  isLabel: true,
                  lastWinCache
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                className: "pairNumber text-[#C9AE8D]",
                children: [`${currencySymbol} `, /* @__PURE__ */jsxRuntimeExports.jsx(TotalBet, {
                  lastWinCache
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "center absolute left-1/2 -translate-x-1/2",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Tooltip, {
                content: t("COMMON.UNDO"),
                placement: "top",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea, {
                  wrapClassName: "iconClickableArea",
                  className: "size-[3.125rem]",
                  onClick: handleUndo,
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", _objectSpread(_objectSpread({
                    className: cn("iconBtn w-[4rem]", {
                      isDisabled: boardHistory.length === 0 || !isBet
                    })
                  }, pressAttrs), {}, {
                    id: "MainUndoBtn",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Icon.Undo, {
                      className: "UndoSVG w-5"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "hoverShine"
                    })]
                  }))
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(ChipTray, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Tooltip, {
                content: boardHistory.length > 0 ? t("COMMON.DOUBLE") : t("COMMON.REPEAT"),
                placement: "top",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  id: "doubleRepeatBtn",
                  className: "w-[4rem]",
                  children: [boardHistory.length > 0 && /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea, {
                    wrapClassName: "iconClickableArea",
                    className: "size-[3.125rem]",
                    onClick: handleDouble,
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: cn("iconBtn", {
                        isDisabled: !isBet || isOverLimit
                      }),
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Icon.Double, {
                        className: "DoubleSVG w-5"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "hoverShine"
                      })]
                    })
                  }), boardHistory.length <= 0 && /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea, {
                    wrapClassName: "iconClickableArea",
                    className: "size-[3.125rem]",
                    onClick: handleRepeat,
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: cn("iconBtn", {
                        isDisabled: !isBet || isRepeatDisable
                      }),
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Icon.Repeat, {
                        className: "RepeatSVG w-5"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "hoverShine"
                      })]
                    })
                  })]
                })
              })]
            }), AUTOPLAY_ALLOWED && /* @__PURE__ */jsxRuntimeExports.jsx(FooterAutoPlay, {}), AUTOPLAY_ALLOWED && SHOW_LOBBY_ALLOWED && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              className: "divider ml-5 mr-6 h-[1.5rem] border-[#313131]"
            }), SHOW_LOBBY_ALLOWED && /* @__PURE__ */jsxRuntimeExports.jsx(FooterLobby, {})]
          });
        }
        const Footer$1 = reactExports.memo(Footer);
        const SPEED_REM_PER_SEC = 4;
        const WinnerList = () => {
          const gameState = useBettingStore(s => s.gameState);
          const currencySymbol = useCartStore(s => s.currencySymbol);
          const rootEmFontSize = useLayoutStore(s => s.rootEmFontSize);
          const ulRef = reactExports.useRef(null);
          const [listDuration, setListDuration] = reactExports.useState(6);
          const [animationComplete, setAnimationComplete] = reactExports.useState(false);
          const showWinnerList = useWinNumberStore$1(s => s.showWinnerList);
          const winnerList = useWinNumberStore$1(s => s.winnerList);
          const winAmount = winnerList.reduce((total, winner) => total + winner.amount, 0);
          const winnerListVariant = {
            containerInitial: {
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeInOut"
              }
            },
            listInitial: {
              transform: "TranslateX(23.75rem)",
              opacity: 1,
              transition: {
                duration: 0,
                delay: 2
              }
            },
            move: {
              transform: "TranslateX(-100%)",
              transition: {
                duration: showWinnerList ? listDuration : 0,
                ease: "linear"
              }
            },
            disappear: {
              opacity: 0,
              transition: {
                duration: 1,
                ease: "easeInOut"
              }
            }
          };
          reactExports.useEffect(() => {
            if (ulRef.current) {
              setListDuration(ulRef.current.offsetWidth / (SPEED_REM_PER_SEC * rootEmFontSize) + 23.75 / SPEED_REM_PER_SEC);
              setAnimationComplete(false);
            }
          }, [winnerList]);
          reactExports.useEffect(() => {
            if (!animationComplete && winnerList.length !== 0) {
              useWinNumberStore$1.setState({
                showWinnerList: true
              });
            } else {
              useWinNumberStore$1.setState({
                showWinnerList: false
              });
            }
          }, [animationComplete, winnerList]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(AnimatePresence, {
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(motion.div, {
              variants: winnerListVariant,
              initial: {
                opacity: 0
              },
              animate: showWinnerList && gameState !== BetState.WheelSpin ? "containerInitial" : "disappear",
              onAnimationComplete: e => {
                if (e === "disappear") {
                  useWinNumberStore$1.setState({
                    winnerList: []
                  });
                  setAnimationComplete(true);
                }
              },
              className: "maskRight pointer-events-none absolute right-[33%] z-10 flex h-4 w-[32.938rem] items-center overflow-hidden bg-clip-text normal-case",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Icon.User, {
                className: "mr-1 h-4 w-4 shrink-0"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "mr-1 shrink-0 text-[0.813rem] font-semibold tracking-[-0.016rem]",
                style: {
                  WebkitTextFillColor: "#D9D9D9"
                },
                children: [winnerList.length, " won"]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "shrink-0 text-[0.813rem] font-semibold tracking-[-0.016rem]",
                style: {
                  WebkitTextFillColor: "#BF9E77"
                },
                children: `${currencySymbol} ${thousandSeparator(winAmount)}`
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "mr-4 h-4 w-4 shrink-0 border-r-[0.063rem] border-[#ffffff] border-opacity-10"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "maskLeft relative flex-1",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "relative overflow-hidden",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(motion.ul, {
                    ref: ulRef,
                    variants: winnerListVariant,
                    initial: "listInitial",
                    animate: showWinnerList && winnerList ? "move" : "listInitial",
                    onAnimationComplete: e => {
                      if (e === "move") {
                        setAnimationComplete(true);
                      }
                    },
                    className: "flex h-[0.875rem] w-fit gap-3",
                    children: winnerList.map(({
                      nickname,
                      amount
                    }) => /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                      className: "flex items-baseline",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "winAmount mr-[0.1rem]",
                        children: `${currencySymbol} `
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "winAmount",
                        children: thousandSeparator(amount)
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "winName ml-[0.125rem]",
                        children: nickname
                      })]
                    }, nickname !== null && nickname !== void 0 ? nickname : "" + amount))
                  })
                })
              })]
            })
          });
        };
        const useFullscreen = () => {
          const [isFullscreen, setIsFullscreen] = reactExports.useState(!!document.fullscreenElement);
          reactExports.useEffect(() => {
            const handleFullscreenChange = () => {
              setIsFullscreen(!!document.fullscreenElement);
            };
            document.addEventListener("fullscreenchange", handleFullscreenChange);
            return () => {
              document.removeEventListener("fullscreenchange", handleFullscreenChange);
            };
          }, []);
          return isFullscreen;
        };
        const menuItems = {
          Volume: "M9.95834 3.48469L6.09641 7.34662C5.97139 7.47165 5.80182 7.54188 5.62501 7.54188H3.75756C3.25765 7.54188 2.8848 7.82353 2.78638 8.1808C2.62701 8.75933 2.54168 9.36928 2.54168 10.0002C2.54168 10.6312 2.62701 11.2411 2.78638 11.8196C2.8848 12.1769 3.25765 12.4586 3.75756 12.4586H5.62501C5.80182 12.4586 5.97139 12.5288 6.09641 12.6538L9.95834 16.5157V3.48469ZM9.08667 2.47075C9.90037 1.65705 11.2917 2.23335 11.2917 3.3841V16.6163C11.2917 17.7671 9.90037 18.3434 9.08666 17.5297L5.34887 13.7919H3.75756C2.79189 13.7919 1.79173 13.2294 1.50093 12.1737C1.31008 11.4809 1.20834 10.7519 1.20834 10.0002C1.20834 9.24851 1.31008 8.5195 1.50093 7.8267C1.79173 6.77103 2.79189 6.20855 3.75756 6.20855H5.34887L9.08666 2.47075L9.55807 2.94216L10 3.3841M9.08667 2.47075L9.55807 2.94216L9.08667 2.47075ZM15.4569 4.22547C15.7173 3.96512 16.1394 3.96512 16.3998 4.22547C19.589 7.41475 19.589 12.5856 16.3998 15.7749C16.1394 16.0352 15.7173 16.0352 15.4569 15.7749C15.1966 15.5145 15.1966 15.0924 15.4569 14.8321C18.1255 12.1635 18.1255 7.83686 15.4569 5.16828C15.1966 4.90793 15.1966 4.48582 15.4569 4.22547ZM13.2475 6.43525C13.5078 6.1749 13.9299 6.1749 14.1903 6.43525C16.1592 8.40414 16.1592 11.5963 14.1903 13.5652C13.9299 13.8256 13.5078 13.8256 13.2475 13.5652C12.9871 13.3049 12.9871 12.8828 13.2475 12.6224C14.6957 11.1742 14.6957 8.82625 13.2475 7.37806C12.9871 7.11771 12.9871 6.6956 13.2475 6.43525Z",
          Setting: "M7.33709 3.17394C7.46601 2.40043 8.13525 1.8335 8.91943 1.8335H11.0811C11.8652 1.8335 12.5345 2.40043 12.6634 3.17394L12.0058 3.28354L12.6634 3.17394L12.8413 4.24148C12.8547 4.32158 12.9155 4.42145 13.0433 4.49219C13.1125 4.53047 13.1808 4.57001 13.2483 4.61078C13.3733 4.68626 13.4903 4.68911 13.5665 4.66058L14.5805 4.28068C15.3149 4.00557 16.1405 4.30169 16.5325 4.98081L17.6134 6.85284C18.0055 7.53196 17.8491 8.39501 17.2437 8.89341L16.4067 9.58242C16.3439 9.6341 16.2881 9.73649 16.2908 9.88159C16.2915 9.92103 16.2919 9.96055 16.2919 10.0002C16.2919 10.0398 16.2915 10.0793 16.2908 10.1187C16.2881 10.2638 16.3439 10.3662 16.4067 10.4179L17.2437 11.1069C17.8491 11.6053 18.0055 12.4684 17.6134 13.1475L16.5325 15.0195C16.1405 15.6986 15.3149 15.9947 14.5805 15.7196L13.5665 15.3397C13.4903 15.3112 13.3734 15.3141 13.2484 15.3895C13.1808 15.4303 13.1125 15.4699 13.0433 15.5081C12.9155 15.5789 12.8547 15.6787 12.8413 15.7588L12.6634 16.8264C12.5345 17.5999 11.8652 18.1668 11.0811 18.1668H8.91943C8.13525 18.1668 7.46601 17.5999 7.33709 16.8264L7.15916 15.7588C7.14581 15.6787 7.08496 15.5789 6.95716 15.5081C6.88801 15.4699 6.81966 15.4303 6.75215 15.3895C6.62715 15.3141 6.51018 15.3112 6.43403 15.3397L5.41997 15.7196C4.68563 15.9948 3.86003 15.6986 3.46794 15.0195L2.38713 13.1475C1.99504 12.4684 2.15139 11.6053 2.75681 11.1069L3.59377 10.4179C3.65655 10.3662 3.71236 10.2638 3.70968 10.1187C3.70895 10.0793 3.70858 10.0398 3.70858 10.0002C3.70858 9.96056 3.70895 9.92104 3.70968 9.88161C3.71236 9.7365 3.65655 9.63411 3.59377 9.58243L2.75681 8.89342C2.15139 8.39502 1.99504 7.53197 2.38713 6.85285L3.46794 4.98082C3.86003 4.3017 4.68563 4.00559 5.41997 4.28069L6.43402 4.66059C6.51016 4.68912 6.62714 4.68627 6.75213 4.61079C6.81965 4.57002 6.88801 4.53047 6.95716 4.49219C7.08496 4.42145 7.14581 4.32158 7.15916 4.24148L7.33709 3.17394ZM8.91943 3.16683C8.78703 3.16683 8.67404 3.26255 8.65228 3.39314L8.47436 4.46068C8.3838 5.00398 8.02803 5.4234 7.60289 5.65873C7.54841 5.68889 7.49456 5.72004 7.44135 5.75217C7.02463 6.00381 6.48271 6.10266 5.96625 5.90918L4.95221 5.52928C4.82823 5.48284 4.68884 5.53283 4.62264 5.64749L3.54183 7.51952C3.47563 7.63418 3.50203 7.77988 3.60424 7.86403L4.4412 8.55304C4.86594 8.9027 5.05179 9.42005 5.04278 9.90629C5.0422 9.9375 5.04191 9.9688 5.04191 10.0002C5.04191 10.0315 5.0422 10.0628 5.04278 10.094C5.05179 10.5803 4.86594 11.0976 4.4412 11.4473L3.60424 12.1363C3.50203 12.2205 3.47563 12.3662 3.54183 12.4808L4.62264 14.3529C4.68884 14.4675 4.82823 14.5175 4.95221 14.4711L5.96626 14.0912C6.48272 13.8977 7.02464 13.9965 7.44136 14.2482C7.49457 14.2803 7.54842 14.3114 7.60289 14.3416C8.02803 14.5769 8.3838 14.9963 8.47436 15.5396L8.65228 16.6072C8.67404 16.7378 8.78703 16.8335 8.91943 16.8335H11.0811C11.2135 16.8335 11.3264 16.7378 11.3482 16.6072L11.5261 15.5396C11.6167 14.9963 11.9725 14.5769 12.3976 14.3416C12.4521 14.3114 12.5059 14.2803 12.5591 14.2482C12.9759 13.9965 13.5178 13.8977 14.0342 14.0911L15.0483 14.471C15.1723 14.5175 15.3117 14.4675 15.3778 14.3528L16.4587 12.4808C16.5249 12.3662 16.4985 12.2204 16.3963 12.1363L15.5593 11.4473C15.1346 11.0976 14.9487 10.5803 14.9577 10.094C14.9583 10.0628 14.9586 10.0315 14.9586 10.0002C14.9586 9.9688 14.9583 9.9375 14.9577 9.90628C14.9487 9.42004 15.1346 8.90269 15.5593 8.55303L16.3963 7.86402C16.4985 7.77987 16.5249 7.63416 16.4587 7.51951L15.3778 5.64747C15.3117 5.53282 15.1723 5.48282 15.0483 5.52927L14.0342 5.90917C13.5178 6.10265 12.9759 6.0038 12.5591 5.75216C12.5059 5.72004 12.4521 5.68888 12.3976 5.65873C11.9725 5.4234 11.6167 5.00398 11.5261 4.46068L11.3482 3.39314C11.3264 3.26255 11.2135 3.16683 11.0811 3.16683H8.91943ZM10.0001 8.16676C8.98753 8.16676 8.16672 8.98757 8.16672 10.0001C8.16672 11.0126 8.98753 11.8334 10.0001 11.8334C11.0126 11.8334 11.8334 11.0126 11.8334 10.0001C11.8334 8.98757 11.0126 8.16676 10.0001 8.16676ZM6.83339 10.0001C6.83339 8.25119 8.25115 6.83343 10.0001 6.83343C11.749 6.83343 13.1667 8.25119 13.1667 10.0001C13.1667 11.749 11.749 13.1668 10.0001 13.1668C8.25115 13.1668 6.83339 11.749 6.83339 10.0001Z",
          History: "M17.9749 9.37237C17.6283 4.96792 13.7764 1.67842 9.37154 2.02506C7.26681 2.19069 5.35872 3.16666 4.00075 4.70649L4.00195 2.75383L3.9951 2.65206C3.94996 2.31928 3.68651 2.05585 3.35369 2.01072L3.25192 2.00387L3.15014 2.01072C2.81733 2.05585 2.55387 2.31928 2.50873 2.65206L2.50188 2.75383V6.75364L2.50873 6.8554C2.55387 7.18819 2.81733 7.4516 3.15014 7.49675L3.25192 7.5036H7.25204L7.35382 7.49675C7.71991 7.44709 8.00208 7.13331 8.00208 6.75364C8.00208 6.37396 7.71991 6.06018 7.35382 6.01052L7.25204 6.00367L4.87313 6.0028L5.07668 5.75494C6.18335 4.47078 7.75288 3.65701 9.48924 3.52036C13.0682 3.23873 16.1978 5.91145 16.4796 9.49006C16.7612 13.0687 14.0882 16.198 10.5093 16.4797C6.9303 16.7613 3.80064 14.0886 3.51898 10.51C3.50108 10.2826 3.49592 10.0321 3.50337 9.78349C3.51578 9.36948 3.19019 9.0238 2.77614 9.01139C2.3621 8.99898 2.01639 9.32454 2.00398 9.73854C1.99495 10.0396 2.00122 10.3442 2.02353 10.6277C2.37021 15.0321 6.22209 18.3216 10.627 17.9749C15.0318 17.6283 18.3216 13.7768 17.9749 9.37237ZM10.2784 6.56814C10.2784 6.22411 9.99531 5.94521 9.64605 5.94521C9.2968 5.94521 9.01367 6.22411 9.01367 6.56814V11.2401C9.01367 11.5841 9.2968 11.863 9.64605 11.863H13.2032C13.5525 11.863 13.8356 11.5841 13.8356 11.2401C13.8356 10.8961 13.5525 10.6172 13.2032 10.6172H10.2784V6.56814Z",
          Help: "M9.99992 3.16683C6.22597 3.16683 3.16659 6.22622 3.16659 10.0002C3.16659 13.7741 6.22597 16.8335 9.99992 16.8335C13.7739 16.8335 16.8333 13.7741 16.8333 10.0002C16.8333 6.22622 13.7739 3.16683 9.99992 3.16683ZM1.83325 10.0002C1.83325 5.48984 5.48959 1.8335 9.99992 1.8335C14.5102 1.8335 18.1666 5.48984 18.1666 10.0002C18.1666 14.5105 14.5102 18.1668 9.99992 18.1668C5.48959 18.1668 1.83325 14.5105 1.83325 10.0002ZM11.3289 6.76758C10.6039 6.13324 9.3963 6.13324 8.67134 6.76758C8.39425 7.01004 7.97308 6.98196 7.73062 6.70487C7.48817 6.42778 7.51625 6.0066 7.79334 5.76415C9.021 4.68995 10.9792 4.68995 12.2069 5.76415C13.4867 6.88403 13.4867 8.7413 12.2069 9.86118C11.9901 10.0509 11.7513 10.2062 11.4998 10.328C10.9401 10.5988 10.6668 10.9603 10.6668 11.2502V11.8752C10.6668 12.2434 10.3683 12.5418 10.0001 12.5418C9.63192 12.5418 9.33344 12.2434 9.33344 11.8752V11.2502C9.33344 10.1593 10.2358 9.45839 10.9189 9.1278C11.0679 9.05569 11.2058 8.9654 11.3289 8.85774C12.0016 8.26908 12.0016 7.35625 11.3289 6.76758ZM9.33325 14.3752C9.33325 14.007 9.63173 13.7085 9.99992 13.7085H10.0062C10.3744 13.7085 10.6728 14.007 10.6728 14.3752V14.3814C10.6728 14.7496 10.3744 15.0481 10.0062 15.0481H9.99992C9.63173 15.0481 9.33325 14.7496 9.33325 14.3814V14.3752Z",
          Support: "M10 3.25006C9.22089 3.25006 8.44941 3.40512 7.7296 3.7064C7.0098 4.00767 6.35577 4.44925 5.80485 5.00593C5.25394 5.5626 4.81693 6.22348 4.51877 6.95081C4.32112 7.43298 4.18706 7.93809 4.11914 8.45318H5.52239C6.12605 8.45318 6.70499 8.6955 7.13185 9.12682C7.5587 9.55814 7.79851 10.1431 7.79851 10.7531V13.0153C7.79851 13.6253 7.5587 14.2103 7.13185 14.6416C6.70499 15.073 6.12605 15.3153 5.52239 15.3153H4.77612C4.17245 15.3153 3.59351 15.073 3.16666 14.6416C2.7398 14.2103 2.5 13.6253 2.5 13.0153V9.24496C2.5 8.24974 2.69399 7.26427 3.0709 6.34481C3.44781 5.42535 4.00026 4.58991 4.6967 3.88618C5.39314 3.18246 6.21993 2.62423 7.12987 2.24338C8.03982 1.86253 9.01509 1.6665 10 1.6665C10.9849 1.6665 11.9602 1.86253 12.8701 2.24338C13.7801 2.62423 14.6069 3.18246 15.3033 3.88618C15.9997 4.58991 16.5522 5.42535 16.9291 6.34481C17.306 7.26427 17.5 8.24974 17.5 9.24496V14.5235C17.5 15.5335 17.1029 16.5021 16.3962 17.2162C15.6894 17.9304 14.7309 18.3316 13.7313 18.3316H10C9.56724 18.3316 9.21642 17.9771 9.21642 17.5398C9.21642 17.1025 9.56724 16.748 10 16.748H13.7313C14.3152 16.748 14.8752 16.5136 15.288 16.0965C15.5298 15.8522 15.7095 15.557 15.8169 15.2358C15.6252 15.2881 15.4259 15.3153 15.2239 15.3153H14.4776C13.8739 15.3153 13.295 15.073 12.8682 14.6416C12.4413 14.2103 12.2015 13.6253 12.2015 13.0153V10.7531C12.2015 10.1431 12.4413 9.55814 12.8682 9.12682C13.295 8.6955 13.8739 8.45318 14.4776 8.45318H15.8809C15.8129 7.93809 15.6789 7.43298 15.4812 6.95081C15.1831 6.22348 14.7461 5.56261 14.1951 5.00593C13.6442 4.44925 12.9902 4.00767 12.2704 3.7064C11.5506 3.40512 10.7791 3.25006 10 3.25006ZM15.9328 10.0367H14.4776C14.2896 10.0367 14.1093 10.1122 13.9763 10.2466C13.8434 10.3809 13.7687 10.5631 13.7687 10.7531V13.0153C13.7687 13.2053 13.8434 13.3875 13.9763 13.5219C14.1093 13.6562 14.2896 13.7317 14.4776 13.7317H15.2239C15.4119 13.7317 15.5922 13.6562 15.7252 13.5219C15.8581 13.3875 15.9328 13.2053 15.9328 13.0153V10.0367ZM4.06716 10.0367V13.0153C4.06716 13.2053 4.14186 13.3875 4.27481 13.5219C4.40777 13.6562 4.58809 13.7317 4.77612 13.7317H5.52239C5.71041 13.7317 5.89074 13.6562 6.0237 13.5219C6.15665 13.3875 6.23134 13.2053 6.23134 13.0153V10.7531C6.23134 10.5631 6.15665 10.3809 6.0237 10.2466C5.89074 10.1122 5.71041 10.0367 5.52239 10.0367H4.06716Z",
          Max: "M15.4999 4.1834C16.135 4.1834 16.6499 4.69827 16.6499 5.3334V6.66673C16.6499 7.13617 17.0304 7.51673 17.4999 7.51673C17.9693 7.51673 18.3499 7.13617 18.3499 6.66673V5.3334C18.3499 3.75939 17.0739 2.4834 15.4999 2.4834H14.1665C13.6971 2.4834 13.3165 2.86396 13.3165 3.3334C13.3165 3.80284 13.6971 4.1834 14.1665 4.1834H15.4999ZM3.3499 5.33342C3.3499 4.69829 3.86477 4.18342 4.4999 4.18342H5.83324C6.30268 4.18342 6.68324 3.80286 6.68324 3.33342C6.68324 2.86398 6.30268 2.48342 5.83324 2.48342H4.4999C2.92589 2.48342 1.6499 3.75941 1.6499 5.33342V6.66675C1.6499 7.13619 2.03046 7.51675 2.4999 7.51675C2.96934 7.51675 3.3499 7.13619 3.3499 6.66675V5.33342ZM16.6499 14.6667C16.6499 15.3019 16.135 15.8167 15.4999 15.8167H14.1665C13.6971 15.8167 13.3165 16.1973 13.3165 16.6667C13.3165 17.1362 13.6971 17.5167 14.1665 17.5167H15.4999C17.0739 17.5167 18.3499 16.2407 18.3499 14.6667V13.3334C18.3499 12.864 17.9693 12.4834 17.4999 12.4834C17.0304 12.4834 16.6499 12.864 16.6499 13.3334V14.6667ZM3.3499 14.6668C3.3499 15.3019 3.86477 15.8168 4.4999 15.8168H5.83324C6.30268 15.8168 6.68324 16.1973 6.68324 16.6668C6.68324 17.1362 6.30268 17.5168 5.83324 17.5168L4.4999 17.5168C2.92589 17.5168 1.6499 16.2408 1.6499 14.6668V13.3334C1.6499 12.864 2.03046 12.4834 2.4999 12.4834C2.96934 12.4834 3.3499 12.864 3.3499 13.3334L3.3499 14.6668Z",
          Min: "M4.66675 12.5342C6.21315 12.5342 7.46655 13.7876 7.46655 15.334V16.667C7.46638 17.1087 7.10847 17.4678 6.66675 17.4678C6.22503 17.4678 5.86712 17.1087 5.86694 16.667V15.334C5.86694 14.6712 5.32949 14.1338 4.66675 14.1338H3.33374C2.89202 14.1338 2.53314 13.7757 2.53296 13.334C2.53296 12.8922 2.89191 12.5342 3.33374 12.5342H4.66675ZM16.6667 12.5342C17.1084 12.5344 17.4675 12.8923 17.4675 13.334C17.4674 13.7756 17.1083 14.1336 16.6667 14.1338H15.3337C14.671 14.1338 14.1335 14.6712 14.1335 15.334V16.667C14.1334 17.1086 13.7753 17.4676 13.3337 17.4678C12.892 17.4678 12.5341 17.1087 12.5339 16.667V15.334C12.5339 13.7876 13.7873 12.5342 15.3337 12.5342H16.6667ZM6.66675 2.5332C7.10858 2.5332 7.46655 2.89216 7.46655 3.33398V4.66699C7.46655 6.21339 6.21314 7.4668 4.66675 7.4668H3.33374C2.89191 7.4668 2.53296 7.10882 2.53296 6.66699C2.53296 6.22516 2.89191 5.86719 3.33374 5.86719H4.66675C5.32949 5.86719 5.86694 5.32973 5.86694 4.66699V3.33398C5.86694 2.89216 6.22492 2.5332 6.66675 2.5332ZM13.3337 2.5332C13.7754 2.53338 14.1335 2.89227 14.1335 3.33398V4.66699C14.1335 5.32973 14.671 5.86719 15.3337 5.86719H16.6667C17.1084 5.86736 17.4675 6.22527 17.4675 6.66699C17.4675 7.10871 17.1084 7.46662 16.6667 7.4668H15.3337C13.7873 7.4668 12.5339 6.21339 12.5339 4.66699V3.33398C12.5339 2.89216 12.8919 2.5332 13.3337 2.5332Z",
          Paytable: "M10 3.16683C6.22609 3.16683 3.16671 6.22622 3.16671 10.0002C3.16671 13.7741 6.22609 16.8335 10 16.8335C13.774 16.8335 16.8334 13.7741 16.8334 10.0002C16.8334 6.22622 13.774 3.16683 10 3.16683ZM1.83337 10.0002C1.83337 5.48984 5.48972 1.8335 10 1.8335C14.5104 1.8335 18.1667 5.48984 18.1667 10.0002C18.1667 14.5105 14.5104 18.1668 10 18.1668C5.48972 18.1668 1.83337 14.5105 1.83337 10.0002ZM9.33337 6.87516C9.33337 6.50697 9.63185 6.2085 10 6.2085H10.0063C10.3745 6.2085 10.673 6.50697 10.673 6.87516V6.88141C10.673 7.2496 10.3745 7.54808 10.0063 7.54808H10C9.63185 7.54808 9.33337 7.2496 9.33337 6.88141V6.87516ZM9.62733 9.99228C9.30753 10.1234 8.93584 9.98748 8.77876 9.67331C8.6141 9.34399 8.74758 8.94354 9.0769 8.77888L9.11147 8.76159C10.0985 8.26807 11.2099 9.15958 10.9422 10.2302L10.3728 12.508C10.6925 12.3769 11.0642 12.5128 11.2213 12.827C11.386 13.1563 11.2525 13.5568 10.9232 13.7214L10.8886 13.7387L10.8886 13.7387C9.90157 14.2323 8.79021 13.3407 9.05786 12.2702L9.62733 9.99228Z",
          Mute: "M9.95898 3.48445L6.09706 7.34638C5.97203 7.4714 5.80246 7.54164 5.62565 7.54164H3.7582C3.25829 7.54164 2.88544 7.82329 2.78702 8.18056C2.62765 8.75909 2.54232 9.36903 2.54232 9.99997C2.54232 10.6309 2.62765 11.2409 2.78702 11.8194C2.88544 12.1767 3.25829 12.4583 3.7582 12.4583H5.62565C5.80246 12.4583 5.97203 12.5285 6.09706 12.6536L9.95898 16.5155V3.48445ZM9.08731 2.47051C9.90101 1.6568 11.2923 2.23311 11.2923 3.38386V16.6161C11.2923 17.7668 9.90101 18.3431 9.08731 17.5294L5.34951 13.7916H3.7582C2.79253 13.7916 1.79237 13.2292 1.50157 12.1735C1.31072 11.4807 1.20898 10.7517 1.20898 9.99997C1.20898 9.24827 1.31072 8.51925 1.50157 7.82645C1.79237 6.77078 2.79253 6.20831 3.7582 6.20831H5.34951L9.08731 2.47051L9.55871 2.94191L10.0007 3.38386M9.08731 2.47051L9.55871 2.94191L9.08731 2.47051ZM13.9042 7.65357C14.1646 7.39322 14.5867 7.39322 14.8471 7.65357L16.2507 9.05717L17.6542 7.65357C17.9146 7.39322 18.3367 7.39322 18.5971 7.65357C18.8574 7.91392 18.8574 8.33603 18.5971 8.59638L17.1935 9.99997L18.5971 11.4036C18.8574 11.6639 18.8574 12.086 18.5971 12.3464C18.3367 12.6067 17.9146 12.6067 17.6542 12.3464L16.2507 10.9428L14.8471 12.3464C14.5867 12.6067 14.1646 12.6067 13.9042 12.3464C13.6439 12.086 13.6439 11.6639 13.9042 11.4036L15.3078 9.99997L13.9042 8.59638C13.6439 8.33603 13.6439 7.91392 13.9042 7.65357Z"
        };
        function MenuIconSVG(_ref) {
          let {
              icon,
              item,
              className,
              placement = "bottom",
              onClick: parentOnClick
            } = _ref,
            rest = _objectWithoutProperties(_ref, _excluded);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Tooltip, {
            placement,
            content: item,
            selected: className.includes("active") || tooltipException.has(icon),
            children: /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea, _objectSpread(_objectSpread({
              className: "size-[3.125rem]",
              wrapClassName: "iconClickableArea",
              onClick: e => {
                parentOnClick === null || parentOnClick === void 0 || parentOnClick(e);
                playSound(["click"]);
              }
            }, rest), {}, {
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: cn(`iconContainer h-6 w-10`, className),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {}), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "pointer-events-none absolute h-[1.25rem] w-[1.25rem]",
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
                      className: "pathInactive",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: menuItems[icon],
                      fill: "url(#paint0_linear_10487_6058)"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                      className: "pathActive",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: menuItems[icon],
                      fill: "url(#paint0_linear_10487_6057)"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("defs", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                        id: "paint0_linear_10487_6057",
                        x1: "10",
                        y1: "2.08984",
                        x2: "10",
                        y2: "17.9106",
                        gradientUnits: "userSpaceOnUse",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                          stopColor: "#ECE9E1"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                          offset: "1",
                          stopColor: "#AFA483"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                        id: "paint0_linear_10487_6058",
                        x1: "10",
                        y1: "2.08984",
                        x2: "10",
                        y2: "17.9106",
                        gradientUnits: "userSpaceOnUse",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                          stopColor: "#7A7A7A"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                          offset: "1",
                          stopColor: "#7A7A7A"
                        })]
                      })]
                    })]
                  })
                })]
              })
            }))
          });
        }
        const MenuIconSVG$1 = reactExports.memo(MenuIconSVG);
        const tooltipException = /* @__PURE__ */new Set();
        const Header = ({
          title = ""
        }) => {
          var _tableLimit$min, _tableLimit$max, _roundInfo$roundId;
          const {
            t
          } = useTranslation();
          const isPayoutModalOpen = useLayoutStore(s => s.isPayoutModalOpen);
          const masterVolume = useSettingStore(s => s.masterVolume);
          const desktopModal = useLayoutStore(s => s.desktopModal);
          const openDesktopModal = useLayoutStore(s => s.openDesktopModal);
          const closeDesktopModal = useLayoutStore(s => s.closeDesktopModal);
          const FULLSCREEN_ALLOWED = useConfigStore(s => s.JURISDICTION.FULLSCREEN_ALLOWED);
          const SHOW_SUPPORT_CHAT = useConfigStore(s => s.JURISDICTION.SHOW_SUPPORT_CHAT);
          const LOBBY_URL = useConfigStore(s => s.LOBBY_URL);
          const canShowExit = isInIframe() || !!LOBBY_URL;
          const exitGame = useConfigStore(s => s.exitGame);
          const isFullscreen = useFullscreen();
          const currencySymbol = useCartStore(s => s.currencySymbol);
          const gameState = useBettingStore(s => s.gameState);
          const showWinnerList = useWinNumberStore$1(s => s.showWinnerList);
          const {
            tableLimit,
            roundInfo
          } = useConfigStore(s => ({
            tableLimit: s.tableLimit,
            roundInfo: s.roundInfo
          }));
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "DesktopHeader",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "mr-auto flex h-full items-center justify-between",
              children: [canShowExit && /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                className: "mr-1 w-5",
                onClick: exitGame,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.GreyArrow, {})
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "title",
                children: title
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                children: [currencySymbol, (_tableLimit$min = tableLimit.min) === null || _tableLimit$min === void 0 ? void 0 : _tableLimit$min.toLocaleString(), " - ", currencySymbol, (_tableLimit$max = tableLimit.max) === null || _tableLimit$max === void 0 ? void 0 : _tableLimit$max.toLocaleString()]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuIconSVG$1, {
                item: t("COMMON.PAYTABLE"),
                icon: "Paytable",
                className: cn("mt-1", {
                  noneSelected: !isPayoutModalOpen,
                  active: isPayoutModalOpen
                }),
                "data-modal-side": "left",
                onClick: () => {
                  if (isPayoutModalOpen) {
                    closeDesktopModal("payout");
                  } else {
                    openDesktopModal("payout");
                  }
                }
              }), isPayoutModalOpen && /* @__PURE__ */jsxRuntimeExports.jsx(DesktopModal, {
                position: "left-[0.6rem] top-[4rem] w-[22.5rem] h-[28.43rem]",
                title: t("COMMON.PAYOUTS_LIMITS"),
                modalType: "payout",
                placement: "left",
                content: /* @__PURE__ */jsxRuntimeExports.jsx(GameLimit, {}),
                modalSide: "left",
                scrollWrapClassName: "pb-5"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "divider"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Clock, {}), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                children: `ID:${getFormattedRoundId((_roundInfo$roundId = roundInfo === null || roundInfo === void 0 ? void 0 : roundInfo.roundId) !== null && _roundInfo$roundId !== void 0 ? _roundInfo$roundId : "")}`
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn(`absolute left-1/2 -translate-x-1/2 transition-opacity duration-1000 ease-linear ${showWinnerList && gameState !== BetState.WheelSpin ? "opacity-0" : "opacity-100"}`),
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.LogoDesktop, {
                className: "w-20"
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(WinnerList, {}), /* @__PURE__ */jsxRuntimeExports.jsx(MenuIconSVG$1, {
              item: masterVolume === 0 ? t("COMMON.MUTE") : t("COMMON.VOLUME"),
              icon: masterVolume === 0 ? "Mute" : "Volume",
              className: cn({
                noneSelected: desktopModal === null,
                active: desktopModal === "sound"
              }),
              "data-modal-side": "right",
              onClick: () => {
                if (desktopModal === "sound") {
                  closeDesktopModal(desktopModal);
                } else {
                  openDesktopModal("sound");
                }
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuIconSVG$1, {
              item: t("COMMON.SETTING"),
              icon: "Setting",
              className: cn({
                noneSelected: desktopModal === null,
                active: desktopModal === "settings" || desktopModal === "language"
              }),
              "data-modal-side": "right",
              onClick: () => {
                if (desktopModal === "settings" || desktopModal === "language") {
                  closeDesktopModal(desktopModal);
                } else {
                  openDesktopModal("settings");
                }
                scrollWrapToTop("settings");
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuIconSVG$1, {
              item: t("COMMON.HISTORY"),
              icon: "History",
              className: cn({
                noneSelected: desktopModal === null,
                active: desktopModal === "history" || desktopModal === "history_content"
              }),
              "data-modal-side": "right",
              onClick: () => {
                if (desktopModal === "history" || desktopModal === "history_content") {
                  closeDesktopModal(desktopModal);
                } else {
                  openDesktopModal("history");
                }
                scrollWrapToTop("history");
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuIconSVG$1, {
              item: t("COMMON.HELP"),
              icon: "Help",
              className: cn({
                noneSelected: desktopModal === null,
                active: desktopModal === "help" || desktopModal === "rules_inner"
              }),
              "data-modal-side": "right",
              onClick: () => {
                if (desktopModal === "help" || desktopModal === "rules_inner") {
                  closeDesktopModal(desktopModal);
                } else {
                  openDesktopModal("help");
                }
                scrollWrapToTop("help");
              }
            }), SHOW_SUPPORT_CHAT && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "relative",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(MenuIconSVG$1, {
                item: t("COMMON.SUPPORT"),
                icon: "Support",
                className: cn({
                  noneSelected: desktopModal === null,
                  active: desktopModal === "support"
                }),
                "data-modal-side": "right",
                onClick: () => {
                  if (desktopModal === "support") {
                    closeDesktopModal(desktopModal);
                  } else {
                    openDesktopModal("support");
                  }
                  scrollWrapToTop("support");
                  useChatStore.setState({
                    supportChatUnread: 0
                  });
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx(NotificationHint, {
                className: "right-0 top-[-40%]"
              })]
            }), FULLSCREEN_ALLOWED && /* @__PURE__ */jsxRuntimeExports.jsx(MenuIconSVG$1, {
              item: isFullscreen ? t("COMMON.MINIMIZE") : t("COMMON.FULL_SCREEN"),
              icon: isFullscreen ? "Min" : "Max",
              placement: "bottom-end",
              className: cn({
                noneSelected: true,
                active: false
              }),
              onClick: toggleFullScreen
            })]
          });
        };
        const Header$1 = reactExports.memo(Header);
        function DesktopChat() {
          const {
            t
          } = useTranslation();
          const dealer = useBettingStore(state => state.dealer);
          const gameType = useConfigStore(state => state.GAME_TYPE);
          const isSicbo = isSicboGameType(gameType);
          const [isInputHover, setIsInputHover] = reactExports.useState(false);
          const [isExpandHover, setIsExpandHover] = reactExports.useState(false);
          const [isLayerHover, setIsLayerHover] = reactExports.useState(false);
          const [isExpandHovered, setIsExpandHovered] = reactExports.useState(false);
          const [isInputHasText, setIsInputHasText] = reactExports.useState(false);
          const desktopModal = useLayoutStore(state => state.desktopModal);
          const isPayoutModalOpen = useLayoutStore(state => state.isPayoutModalOpen);
          const isChatExpand = useLayoutStore(state => state.isChatExpand);
          const openDesktopModal = useLayoutStore(state => state.openDesktopModal);
          const closeDesktopModal = useLayoutStore(state => state.closeDesktopModal);
          const closeNewestDesktopModal = useLayoutStore(state => state.closeNewestDesktopModal);
          useKeyPress({
            targetKey: "Escape",
            callback: () => {
              if (isChatExpand && desktopModal === null) {
                closeNewestDesktopModal();
              }
            }
          });
          const ref = useClickAway(e => {
            var _e$target$closest2;
            const targetSide = (_e$target$closest2 = e.target.closest("[data-modal-side]")) === null || _e$target$closest2 === void 0 ? void 0 : _e$target$closest2.getAttribute("data-modal-side");
            if (!targetSide && isChatExpand && desktopModal === null) closeNewestDesktopModal();
          });
          function handleCollapse() {
            playSound(["click"]);
            closeDesktopModal("chat");
            setIsInputHover(false);
            const chatRoomContent = document.querySelector(".chatRoomContent");
            chatRoomContent === null || chatRoomContent === void 0 || chatRoomContent.scrollTo({
              top: chatRoomContent.scrollHeight,
              behavior: "smooth"
            });
          }
          reactExports.useEffect(() => {
            let timeoutId = null;
            if (isExpandHovered && !isExpandHover) timeoutId = setTimeout(() => setIsExpandHovered(false), 300);
            return () => {
              if (timeoutId) clearTimeout(timeoutId);
            };
          }, [isExpandHovered, isExpandHover]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "DesktopChatRoom",
            ref,
            className: cn({
              isInputHover,
              isExpandHover,
              isExpand: isChatExpand,
              isSicbo,
              isLayerHover,
              isExpandHovered,
              isInputHasText
            }),
            onMouseEnter: () => setIsLayerHover(true),
            onMouseLeave: () => setIsLayerHover(false),
            "data-modal-side": "left",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "presenter",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex gap-[0.125rem] text-xs leading-4 tracking-[0.03rem]",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [t("COMMON.GAME_PRESENTER"), ":"]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "title",
                  children: dealer.name
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                onClick: () => handleCollapse(),
                className: "collapseBtn",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Collapse, {
                  className: "h-[0.688rem] w-[0.688rem] cursor-pointer duration-[0.5s]"
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "chatRoomWrapper",
              children: /* @__PURE__ */jsxRuntimeExports.jsx(ChatRoom, {
                type: RoomType.Live,
                desktopLive: true,
                setIsInputHover,
                isLayerHover,
                isInputHasText,
                setIsInputHasText
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "expandBtnWrapper",
              onMouseEnter: () => setIsInputHover(true),
              onMouseLeave: () => setIsInputHover(false),
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Tooltip, {
                content: t("COMMON.EXPAND_CHAT"),
                placement: "top",
                selected: isChatExpand,
                className: "rounded-full",
                animation: {
                  initial: {
                    opacity: 0,
                    y: "2.35rem"
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                    x: 0
                  },
                  exit: isChatExpand ? {
                    opacity: 0,
                    y: "2.35rem",
                    x: "-3rem"
                  } : {
                    opacity: 0,
                    y: "2.35rem",
                    x: 0
                  },
                  transition: {
                    duration: 0.35,
                    ease: "easeOut"
                  }
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  className: "expandBtn",
                  onMouseEnter: () => {
                    setIsExpandHover(true);
                    setIsExpandHovered(true);
                  },
                  onMouseLeave: () => setIsExpandHover(false),
                  onClick: () => {
                    playSound(["click"]);
                    openDesktopModal("chat");
                    if (isPayoutModalOpen) {
                      closeDesktopModal("payout");
                    }
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Expand, {
                    className: "h-[1.5rem] w-[1.5rem] cursor-pointer duration-[0.5s] hover:brightness-125"
                  })
                })
              })
            })]
          });
        }
        const DesktopChat$1 = reactExports.memo(DesktopChat);
        const VOLUME_SLIDER_INTERVALS = 44;
        function SoundSetting({
          isVolumeControlOpen,
          setIsVolumeControlOpen
        }) {
          const {
            masterVolume,
            gameVolume,
            dealerVolume,
            studioVolume,
            volumeChange,
            toggleVolume
          } = useSettingStore();
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "SoundSetting",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: cn("volumeControlContainer", {
                open: isVolumeControlOpen
              }),
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(SettingSlider, {
                title: t("COMMON.MASTER_VOLUME"),
                value: masterVolume,
                onChange: val => volumeChange("masterVolume", val),
                className: "volumeControl normal-case",
                prefixElement: /* @__PURE__ */jsxRuntimeExports.jsx(SoundButton, {
                  level: masterVolume,
                  onClick: () => toggleVolume("masterVolume"),
                  type: "master"
                }),
                intervalCount: VOLUME_SLIDER_INTERVALS
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "volumeControlExpand group mt-[0.55rem]",
                onClick: () => {
                  playSound(["click"]);
                  setIsVolumeControlOpen(!isVolumeControlOpen);
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xs uppercase",
                  children: isVolumeControlOpen ? t("COMMON.LESS_VOLUME_SETTINGS") : t("COMMON.MORE_VOLUME_SETTINGS")
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
                  viewBox: "0 0 21 20",
                  fill: "none",
                  className: "volumeSettingsArrow mr-[0.15rem] h-5 w-5",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.71967 8.21967C6.01256 7.92678 6.48744 7.92678 6.78033 8.21967L10.5 11.9393L14.2197 8.21967C14.5126 7.92678 14.9874 7.92678 15.2803 8.21967C15.5732 8.51256 15.5732 8.98744 15.2803 9.28033L11.0303 13.5303C10.8897 13.671 10.6989 13.75 10.5 13.75C10.3011 13.75 10.1103 13.671 9.96967 13.5303L5.71967 9.28033C5.42678 8.98744 5.42678 8.51256 5.71967 8.21967Z",
                    fill: isVolumeControlOpen ? "url(#volumeSettingsArrow)" : "#7A7A7A"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("defs", {
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                      id: "volumeSettingsArrow",
                      x1: "10.5",
                      y1: "8",
                      x2: "10.5",
                      y2: "13.75",
                      gradientUnits: "userSpaceOnUse",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                        stopColor: "#ECE9E1"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                        offset: "1",
                        stopColor: "#AFA483"
                      })]
                    })
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("hr", {
                className: `mb-2 mt-[0.45rem] border-t-[0.0625rem] border-[#434343] ${isVolumeControlOpen ? "group-hover:visible" : "invisible"}`
              }), /* @__PURE__ */jsxRuntimeExports.jsx(SettingSlider, {
                title: t("COMMON.STUDIO_SOUNDS"),
                value: studioVolume,
                onChange: val => volumeChange("studioVolume", val),
                className: "volumeControl normal-case",
                prefixElement: /* @__PURE__ */jsxRuntimeExports.jsx(SoundButton, {
                  level: studioVolume,
                  onClick: () => toggleVolume("studioVolume"),
                  type: "studio"
                }),
                intervalCount: VOLUME_SLIDER_INTERVALS
              }), /* @__PURE__ */jsxRuntimeExports.jsx("hr", {
                className: "mb-[0.68rem] mt-[0.73rem] border-t-[0.0625rem] border-[#434343]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(SettingSlider, {
                title: t("COMMON.GAME_SOUNDS"),
                value: gameVolume,
                onChange: val => volumeChange("gameVolume", val),
                className: "volumeControl normal-case",
                prefixElement: /* @__PURE__ */jsxRuntimeExports.jsx(SoundButton, {
                  level: gameVolume,
                  onClick: () => toggleVolume("gameVolume"),
                  type: "game"
                }),
                intervalCount: VOLUME_SLIDER_INTERVALS
              }), /* @__PURE__ */jsxRuntimeExports.jsx("hr", {
                className: "mb-[0.7rem] mt-[0.8rem] border-t-[0.0625rem] border-[#434343]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(SettingSlider, {
                title: t("COMMON.DEALERS_VOICE"),
                value: dealerVolume,
                onChange: val => volumeChange("dealerVolume", val),
                className: "volumeControl normal-case",
                prefixElement: /* @__PURE__ */jsxRuntimeExports.jsx(SoundButton, {
                  level: dealerVolume,
                  onClick: () => toggleVolume("dealerVolume"),
                  type: "dealer"
                }),
                intervalCount: VOLUME_SLIDER_INTERVALS
              })]
            })
          });
        }
        const useMenuComponents = settingContent => {
          const {
            t
          } = useTranslation();
          const titleList = useDataStore.getState().titleList;
          const [isVolumeControlOpen, setIsVolumeControlOpen] = reactExports.useState(false);
          return reactExports.useMemo(() => ({
            settings: {
              modalType: "settings",
              title: t("COMMON.SETTINGS"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(Setting, {
                gameSpecificsElement: settingContent === null || settingContent === void 0 ? void 0 : settingContent.gameSpecificsElement
              }),
              modalSide: "right",
              scrollWrapClassName: "pb-11"
            },
            language: {
              modalType: "language",
              title: t("COMMON.LANGUAGE"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(SettingLanguage, {}),
              leftIcon: true,
              modalSide: "right",
              scrollWrapClassName: "pb-11"
            },
            history: {
              modalType: "history",
              title: t("COMMON.GAME_HISTORY"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(GameHistory, {}),
              modalSide: "right"
            },
            history_content: {
              modalType: "history_content",
              title: /* @__PURE__ */jsxRuntimeExports.jsx(GameHistoryContentHeader, {}),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(GameHistoryContent, {}),
              leftIcon: true,
              modalSide: "right",
              scrollWrapClassName: "pb-[5.25rem]"
            },
            help: {
              modalType: "help",
              title: t("COMMON.HELP_RULES"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(GameRule, {
                titleList
              }),
              modalSide: "right",
              scrollWrapClassName: "pb-11"
            },
            rules_inner: {
              modalType: "rules_inner",
              title: t("COMMON.GAMES_RULES"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(GameRuleInfo, {
                children: /* @__PURE__ */jsxRuntimeExports.jsx(GameRules, {})
              }),
              leftIcon: true,
              modalSide: "right",
              scrollWrapClassName: "pb-11"
            },
            support: {
              modalType: "support",
              title: t("COMMON.SUPPORT"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(ChatRoom, {
                type: RoomType.Support
              }),
              onBeforeCloseModal: () => {
                connectIns.send(GameAction.UNSUBSCRIBE_SUPPORT);
              },
              modalSide: "right"
            },
            sound: {
              modalType: "sound",
              title: t("COMMON.SOUND"),
              content: /* @__PURE__ */jsxRuntimeExports.jsx(SoundSetting, {
                isVolumeControlOpen,
                setIsVolumeControlOpen
              }),
              requireShadow: false,
              scrollWrapClassName: "min-h-[7rem]",
              modalSide: "right"
            }
          }), [t, settingContent === null || settingContent === void 0 ? void 0 : settingContent.gameSpecificsElement, titleList, isVolumeControlOpen]);
        };
        function isValidMenuKey(key, components) {
          if (!key) {
            return false;
          }
          return key in components;
        }
        function DesktopMenu(props) {
          const {
            settingContent
          } = props;
          const desktopModal = useLayoutStore(state => state.desktopModal);
          const menuComponents = useMenuComponents(settingContent);
          const commonModalProps = {
            // FIXME: Now the height of the sound modal is different from other modals and needs to be scaled according to the content height.
            position: desktopModal === "sound" ? "right-[0.5rem] top-[4rem] w-[22.5rem] h-fit" : "right-[0.5rem] top-[4rem] w-[22.5rem] h-[28.43rem]",
            placement: "right"
          };
          if (!isValidMenuKey(desktopModal, menuComponents)) {
            return null;
          }
          const currentModalConfig = menuComponents[desktopModal];
          return /* @__PURE__ */jsxRuntimeExports.jsx(DesktopModal, _objectSpread(_objectSpread({}, commonModalProps), currentModalConfig));
        }
        function DesktopBettingMode() {
          const betMode = useBettingStore(s => s.betMode);
          const {
            t
          } = useTranslation();
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
            id: "BettingMode",
            className: "px-4 pb-4 pt-3",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "relative flex h-[6rem] w-[19.5rem]",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                src: getBettingModeImage(betMode),
                alt: "Auto Play Mode"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("box left-0 w-[33.5%] hover:brightness-125", {
                  active: betMode === "default"
                }),
                onClick: () => toggleType("default"),
                children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: t("COMMON.MODE_DEFAULT")
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("box left-[33%] w-[34.1%] hover:brightness-125", {
                  active: betMode === "straight"
                }),
                onClick: () => toggleType("straight"),
                children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: t("COMMON.MODE_STRAIGHT")
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("box right-0 w-[33%] hover:brightness-125", {
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
        const DesktopSquareButton = () => {
          const {
            t
          } = useTranslation();
          const desktopModal = useLayoutStore(state => state.desktopModal);
          const activeTab = useStatisticStore(state => state.activeTab);
          const openDesktopModal = useLayoutStore(state => state.openDesktopModal);
          const closeDesktopModal = useLayoutStore(state => state.closeDesktopModal);
          const betMode = useBettingStore(state => state.betMode);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(SquareButton, {
              child: betMode === "default" ? /* @__PURE__ */jsxRuntimeExports.jsx(Icon.BettingDefault, {}) : betMode === "straight" ? /* @__PURE__ */jsxRuntimeExports.jsx(Icon.BettingStraightUp, {}) : betMode === "fullComplete" ? /* @__PURE__ */jsxRuntimeExports.jsx(Icon.BettingFullComplete, {}) : null,
              className: "absolute bottom-[16.8rem] right-8",
              buttonClassName: "rounded-[0.75rem] h-10 w-10",
              tooltipContent: t("ROULETTE.BETTING_MODE"),
              tooltipPlacement: "left",
              selected: desktopModal === "betting_mode",
              "data-modal-side": "right",
              onClick: () => {
                if (desktopModal === "betting_mode") {
                  closeDesktopModal(desktopModal);
                } else {
                  openDesktopModal("betting_mode");
                }
              }
            }), desktopModal === "betting_mode" && /* @__PURE__ */jsxRuntimeExports.jsx(DesktopModal, {
              position: "bottom-[16.2rem] right-[5.65rem] w-[21.48rem] z-20",
              title: t("ROULETTE.BETTING_MODE"),
              modalType: "betting_mode",
              requireShadow: false,
              content: /* @__PURE__ */jsxRuntimeExports.jsx(DesktopBettingMode, {}),
              placement: "right",
              modalSide: "right"
            }), /* @__PURE__ */jsxRuntimeExports.jsx(SquareButton, {
              child: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.StatisticSolid, {}),
              tooltipPlacement: "left",
              tooltipContent: t("COMMON.STATISTICS"),
              className: "absolute bottom-[13.55rem] right-8",
              buttonClassName: "rounded-[0.75rem] h-10 w-10",
              selected: desktopModal === "statistics",
              "data-modal-side": "right",
              onClick: () => {
                if (desktopModal === "statistics") {
                  closeDesktopModal(desktopModal);
                } else {
                  openDesktopModal("statistics");
                }
              }
            }), desktopModal === "statistics" && /* @__PURE__ */jsxRuntimeExports.jsx(DesktopModal, {
              position: "right-[5.3rem] top-[4rem] w-[22.1rem] h-[32rem]",
              contentWrapClassName: "pb-[1.9rem]",
              title: t("COMMON.STATISTICS"),
              modalType: "statistics",
              content: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: cn("relative h-[15.6875rem]", {
                  "h-[16.6875rem]": activeTab === "advanced"
                }),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Statistic, {}), activeTab === "last500" && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "scrollShadow h-[3.5rem]"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(StatisticFooter, {})]
              }),
              placement: "right",
              modalSide: "right"
            })]
          });
        };
        const BOARD_COL_COUNT_MEDIAN = 21.5;
        const Lattice = reactExports.memo(props => {
          var _highlights$includes;
          const {
            pos,
            id,
            className,
            children,
            highlights
          } = props;
          const [rowStart, rowEnd, colStart, colEnd] = pos;
          const isHighlighted = (_highlights$includes = highlights === null || highlights === void 0 ? void 0 : highlights.includes(id)) !== null && _highlights$includes !== void 0 ? _highlights$includes : false;
          const isRaceTrack = useBettingStore(s => s.isRaceTrack);
          const isSlope = useBettingStore(s => !s.isBet) && !isRaceTrack;
          const chipSkewXDeg = ((colStart + colEnd) / 2 - BOARD_COL_COUNT_MEDIAN) * -0.4;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
            id: `${betGridPrefix}${id}`,
            className: cn("center relative", className, isHighlighted && "highlighted"),
            style: {
              gridArea: `-${rowStart} / ${colStart} / -${rowEnd} / ${colEnd}`
            },
            children: [children, /* @__PURE__ */jsxRuntimeExports.jsx(ChipContainer, {
              showWin: !isRaceTrack,
              chipId: id,
              chipStyle: cn(`w-[6%] h-[17.5%]`, {
                "text-[76%]": isRaceTrack,
                "text-[114%]": !isRaceTrack
              }),
              isSlope,
              chipSkewXDeg
            })]
          });
        });
        const StaticGridBoard = reactExports.memo(({
          highlights
        }) => {
          const isSettlement = useBettingStore(s => s.gameState === BetState.Settlement);
          const animState = useWinAnimStore(s => s.animState);
          const shouldHoverRange = !isSettlement && !animState;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "StaticGridBoard",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              id: "visibleGridBoard",
              className: "visibleBoard contents",
              children: [shouldHoverRange && Object.entries(GRID_HOVER_HIGHLIGHT).map(([id, ele]) => /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                className: cn(ele.className, highlights.includes(id) && "highlighted", "pointer-events-none"),
                style: {
                  gridArea: `${ele.pos[0]} / ${ele.pos[1]} / ${ele.pos[2]} / ${ele.pos[3]}`
                }
              }, id)), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [1, 3, 3, 9],
                id: BetTypeEnum.LOW,
                className: "rounded-bl-[0.9em]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [1, 3, 9, 15],
                id: BetTypeEnum.EVEN,
                className: ""
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [1, 3, 15, 21],
                id: BetTypeEnum.RED,
                className: ""
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [1, 3, 21, 27],
                id: BetTypeEnum.BLACK,
                className: ""
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [1, 3, 27, 33],
                id: BetTypeEnum.ODD,
                className: ""
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [1, 3, 33, 39],
                id: BetTypeEnum.HIGH,
                className: "rounded-br-[0.9em]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [3, 12, 1, 3],
                id: BetTypeEnum.STRAIGHT_UP_0,
                className: "rounded-l-[0.9em]"
              }), Array.from({
                length: 12
              }, (_, i) => i + 1).map(num => /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  highlights,
                  pos: [3, 6, num * 3, num * 3 + 3],
                  id: `straight-${String(num * 3 - 2)}`
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  highlights,
                  pos: [6, 9, num * 3, num * 3 + 3],
                  id: `straight-${String(num * 3 - 1)}`
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  highlights,
                  pos: [9, 12, num * 3, num * 3 + 3],
                  id: `straight-${String(num * 3)}`
                })]
              }, num)), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights: isSettlement ? highlights : [],
                pos: [15, 12, 3, 15],
                id: BetTypeEnum.DOZEN_1,
                className: "rounded-tl-[0.9em]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights: isSettlement ? highlights : [],
                pos: [15, 12, 15, 27],
                id: BetTypeEnum.DOZEN_13,
                className: ""
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights: isSettlement ? highlights : [],
                pos: [15, 12, 27, 39],
                id: BetTypeEnum.DOZEN_25,
                className: "rounded-tr-[0.9em]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights: isSettlement ? highlights : [],
                pos: [3, 6, 39, 42],
                id: BetTypeEnum.COLUMN_1,
                className: "rounded-br-[0.9em]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights: isSettlement ? highlights : [],
                pos: [6, 9, 39, 42],
                id: BetTypeEnum.COLUMN_2,
                className: ""
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights: isSettlement ? highlights : [],
                pos: [9, 12, 39, 42],
                id: BetTypeEnum.COLUMN_3,
                className: "rounded-tr-[0.9em]"
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "invisibleBoard contents",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [2, 4, 2, 4],
                id: BetTypeEnum.CORNER_0_1_2_3
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [4, 5, 2, 4],
                id: BetTypeEnum.SPLIT_0_1
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [5, 7, 2, 4],
                id: BetTypeEnum.STREET_0_1_2
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [7, 8, 2, 4],
                id: BetTypeEnum.SPLIT_0_2
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [8, 10, 2, 4],
                id: BetTypeEnum.STREET_0_2_3
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [10, 11, 2, 4],
                id: BetTypeEnum.SPLIT_0_3
              }), Array.from({
                length: 11
              }, (_, i) => i * 3).map(num => /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                highlights,
                pos: [2, 4, num + 5, num + 7],
                id: `line-${num + 1}`
              }, num)), Array.from({
                length: 12
              }, (_, i) => i * 3 + 4).map(num => /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  highlights,
                  pos: [2, 4, num, num + 1],
                  id: `street-${num - 3}_${num - 2}_${num - 1}`
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  highlights,
                  pos: [5, 7, num, num + 1],
                  id: `split-${num - 3}_${num - 2}`
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  highlights,
                  pos: [8, 10, num, num + 1],
                  id: `split-${num - 2}_${num - 1}`
                })]
              }, num)), Array.from({
                length: 11
              }, (_, i) => i * 3 + 5).map(num => /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  highlights,
                  pos: [5, 7, num, num + 2],
                  id: `corner-${num - 4}_${num - 3}_${num - 1}_${num}`
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  highlights,
                  pos: [8, 10, num, num + 2],
                  id: `corner-${num - 3}_${num - 2}_${num}_${num + 1}`
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  highlights,
                  pos: [4, 5, num, num + 2],
                  id: `split-${num - 4}_${num - 1}`
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  highlights,
                  pos: [7, 8, num, num + 2],
                  id: `split-${num - 3}_${num}`
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Lattice, {
                  highlights,
                  pos: [10, 11, num, num + 2],
                  id: `split-${num - 2}_${num + 1}`
                })]
              }, num))]
            })]
          });
        });
        const betTypeToGroup = betType => {
          if (ALL_GROUP_MAP[betType]) return ALL_GROUP_MAP[betType];
          return [betType];
        };
        function GridBoard() {
          const bettingBoardArgs = {
            convertBetMap: convertRouletteMap,
            getAddChipParams,
            boardID: BoardIDEnum.GRID_DESKTOP
          };
          const _useBettingBoard = useBettingBoard(bettingBoardArgs),
            {
              handlePointerDown,
              handlePointerUp
            } = _useBettingBoard,
            dragProps = _objectWithoutProperties(_useBettingBoard, _excluded2);
          const isBet = useBettingStore(s => s.isBet);
          const isMain = !useBettingStore(s => s.isRaceTrack);
          const highlightArgs = {
            isMain,
            prefix: "straight-",
            getInitWinHighlight,
            winHighlightMap: GRID_WIN_HIGHLIGHT_FN
          };
          const {
            highlights,
            setHighlights
          } = useBoardHighlight(highlightArgs);
          const handleHover = event => {
            if (!isBet) return;
            const boardId = event.target.id;
            if (!boardId) {
              setHighlights([]);
              return;
            }
            const betType = boardId.slice(betGridPrefix.length);
            let list = betTypeToGroup(betType).map(v => String(v));
            if (Object.keys(GRID_HOVER_HIGHLIGHT).includes(betType)) list = [betType];
            if ([BetTypeEnum.EVEN, BetTypeEnum.RED, BetTypeEnum.BLACK, BetTypeEnum.ODD].some(type => type === betType)) list = list.concat(betType);
            setHighlights(list);
          };
          const handleLeave = () => {
            if (!isBet) return;
            setHighlights([]);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "D_GridBoard",
            className: "relative",
            onMouseOver: handleHover,
            onMouseLeave: handleLeave,
            onPointerDown: handlePointerDown,
            onPointerUp: handlePointerUp,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn("absolute z-[-1] h-full w-full opacity-0 transition-opacity duration-500 ease-in", isMain && "opacity-0 duration-200", !isBet && isMain && "opacity-100 delay-100 duration-500"
              // Flat to slope
              ),
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                src: gridBoardTiltShadow,
                className: "absolute bottom-[-15%] left-[4%] w-[92%]",
                alt: "Grid board tilt shadow"
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
              src: grid,
              alt: "Grid board"
            }), /* @__PURE__ */jsxRuntimeExports.jsx(StaticGridBoard, {
              highlights
            }), /* @__PURE__ */jsxRuntimeExports.jsx(TrackerChip, _objectSpread(_objectSpread({}, dragProps), {}, {
              boardId: "D_GridBoard"
            }))]
          });
        }
        function RacetrackSVG(props) {
          return /* @__PURE__ */jsxRuntimeExports.jsxs("svg", _objectSpread(_objectSpread({
            id: "RacetrackSVG",
            viewBox: "0 0 634 219",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, props), {}, {
            children: [svgHighlightDef, /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "111.616",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              "data-v": "16",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "143.222",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              "data-v": "33",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "174.828",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              "data-v": "1",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "206.434",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "20"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "238.039",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "14"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "269.645",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "31"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "301.251",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "9"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "332.857",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "22"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "364.462",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "18"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "396.068",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "29"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "427.674",
              y: "1",
              width: "31.6058",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "7"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "459.28",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "28"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "490.885",
              y: "1",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "12"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "111.616",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "11"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "143.222",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "36"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "174.828",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "13"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "206.434",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "27"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "238.039",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "6"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "269.645",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "34"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "301.251",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "17"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "332.857",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "25"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "364.462",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "2"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "396.068",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "21"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "427.674",
              y: "161.162",
              width: "31.6058",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "4"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "459.28",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "19"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "490.885",
              y: "161.162",
              width: "31.6057",
              height: "56.8335",
              fill: "#00000000",
              "data-v": "15"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M56.3085 203.463C73.1242 212.987 92.1992 218 111.616 218L111.616 161.166C102.37 161.166 93.2864 158.778 85.2787 154.243L56.3085 203.463Z",
              "data-v": "30",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M15.8204 163.756C25.529 180.251 39.4929 193.948 56.3086 203.472L85.2788 154.251C77.2712 149.716 70.6216 143.194 65.9984 135.339L15.8204 163.756Z",
              "data-v": "8",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M1.00012 109.498C1.00012 128.544 6.11125 147.255 15.8198 163.75L65.9978 135.333C61.3745 127.478 58.9406 118.568 58.9406 109.498L1.00012 109.498Z",
              "data-v": "23",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M15.8198 55.2502C6.11126 71.7449 1.00012 90.4558 1.00012 109.502L58.9406 109.502C58.9406 100.432 61.3745 91.5222 65.9978 83.6674L15.8198 55.2502Z",
              "data-v": "10",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M56.3075 15.5278C39.4918 25.051 25.5279 38.7484 15.8193 55.2431L65.9973 83.6604C70.6205 75.8056 77.2701 69.2829 85.2777 64.748L56.3075 15.5278Z",
              "data-v": "5",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M111.616 0.999945C92.1992 0.999944 73.1242 6.01352 56.3085 15.5368L85.2787 64.757C93.2863 60.222 102.37 57.8345 111.616 57.8345L111.616 0.999945Z",
              "data-v": "24",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M522.385 0.999986C545.744 0.999987 568.505 8.25373 587.403 21.7216L553.346 67.6997C544.347 61.2863 533.509 57.8321 522.385 57.8321L522.385 0.999986Z",
              "data-v": "35",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M587.379 21.703C606.281 35.166 620.353 54.1529 627.577 75.9425L572.477 93.5188C569.037 83.1426 562.336 74.101 553.335 67.69L587.379 21.703Z",
              "data-v": "3",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M627.58 75.953C634.803 97.7432 634.807 121.217 627.592 143.01L572.484 125.457C575.92 115.079 575.918 103.901 572.479 93.5248L627.58 75.953Z",
              "data-v": "26",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M587.379 197.259C606.281 183.796 620.353 164.809 627.577 143.02L572.477 125.443C569.037 135.82 562.336 144.861 553.335 151.272L587.379 197.259Z",
              "data-v": "0",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M587.406 197.275C568.5 210.749 545.73 218.003 522.361 217.999L522.373 161.167C533.501 161.169 544.345 157.714 553.347 151.298L587.406 197.275Z",
              "data-v": "32",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M172.813 66.5522L112.949 66.5522L112.949 66.5684C87.9483 67.2003 67.8906 86.1796 67.8906 109.5C67.8906 132.821 87.9483 151.8 112.949 152.432L112.949 152.448L114.193 152.448C114.208 152.448 114.222 152.448 114.237 152.448C114.251 152.448 114.265 152.448 114.28 152.448L233.964 152.448L172.813 66.5522Z",
              "data-v": "TIER",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M328.533 152.448L240.645 152.448L178.606 66.5522L328.533 66.5522L328.533 152.448Z",
              "data-v": "ORPH",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M485.38 152.448C467.394 145.429 454.756 128.843 454.756 109.5C454.756 90.1573 467.394 73.5714 485.38 66.5522L335.453 66.5522L335.453 152.448L485.38 152.448Z",
              "data-v": "VOISINS",
              fill: "#00000000"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M504.109 152.448C480.389 152.448 461.161 133.22 461.161 109.5V109.5C461.161 85.7806 480.389 66.5522 504.109 66.5522H523.162C546.881 66.5522 566.11 85.7806 566.11 109.5V109.5C566.11 133.22 546.881 152.448 523.162 152.448H504.109Z",
              "data-v": "ZERO",
              fill: "#00000000"
            })]
          }));
        }
        const RacetrackSVG$1 = reactExports.memo(RacetrackSVG);
        function RaceTrackBoard(_ref2) {
          let {
              showTiltEffect
            } = _ref2,
            props = _objectWithoutProperties(_ref2, _excluded3);
          const neighborRange = useBettingStore(s => s.neighborRange);
          const isBet = useBettingStore(s => s.isBet);
          const isMain = useBettingStore(s => s.isRaceTrack);
          const highlightArgs = {
            isMain,
            getInitWinHighlight,
            winHighlightMap: RACE_TRACK_HIGHLIGHT_FN
          };
          const {
            highlights,
            setHighlights
          } = useBoardHighlight(highlightArgs);
          const {
            style
          } = useRaceTrackHighlights({
            highlights
          });
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
            dragProps = _objectWithoutProperties(_useBettingBoard2, _excluded4);
          const handleHover = event => {
            if (!isBet) return;
            const chipId = event.target.dataset.v;
            if (!chipId) return;
            const isGroup = raceTrackGroup.includes(chipId);
            const highlights2 = isGroup ? [...RACE_TRACK_HIGHLIGHT[chipId], chipId] : findNeighborByRange(Number(chipId), neighborRange).map(v => String(v));
            if (dragProps.dragSession.isDrag) return setHighlights([chipId]);
            setHighlights(highlights2);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", _objectSpread(_objectSpread({
            id: "RacetrackBoard"
          }, props), {}, {
            onMouseOver: handleHover,
            onMouseLeave: () => setHighlights([]),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: `absolute z-[-1] h-full w-full ${showTiltEffect ? "fadeIn" : "fadeOut"}`
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
              src: boardRaceTrack,
              className: "absolute",
              alt: "Board race track"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("style", {
              children: style
            }), /* @__PURE__ */jsxRuntimeExports.jsx(RacetrackSVG$1, {
              onPointerDown: handlePointerDown,
              onPointerUp: handlePointerUp
            }), /* @__PURE__ */jsxRuntimeExports.jsx(RaceTrackBoardChips, {}), /* @__PURE__ */jsxRuntimeExports.jsx(TrackerChip, _objectSpread(_objectSpread({}, dragProps), {}, {
              boardId: "RacetrackBoard"
            }))]
          }));
        }
        const BOARD_LENGTH_MEDIAN = 50;
        const RaceTrackBoardChips = reactExports.memo(() => {
          const isRaceTrack = useBettingStore(s => s.isRaceTrack);
          const isSlope = useBettingStore(s => !s.isBet) && isRaceTrack;
          const raceChipsPosition = {
            "straight-30": "bottom-[7.2%] left-[12%]",
            "straight-8": "bottom-[16.2%] left-[6%]",
            "straight-23": "bottom-[33%] left-[2.5%]",
            "straight-10": "bottom-[52.4%] left-[2.5%]",
            "straight-5": "bottom-[69.5%] left-[6%]",
            "straight-24": "bottom-[79%] left-[12%]",
            "straight-16": "bottom-[79.6%] left-[17.8%]",
            "straight-33": "bottom-[79.6%] left-[22.8%]",
            "straight-1": "bottom-[79.6%] left-[27.8%]",
            "straight-20": "bottom-[79.6%] left-[32.8%]",
            "straight-14": "bottom-[79.6%] left-[37.8%]",
            "straight-31": "bottom-[79.6%] left-[42.8%]",
            "straight-9": "bottom-[79.6%] left-[47.8%]",
            "straight-22": "bottom-[79.6%] left-[52.8%]",
            "straight-18": "bottom-[79.6%] left-[57.8%]",
            "straight-29": "bottom-[79.6%] left-[62.8%]",
            "straight-7": "bottom-[79.6%] left-[67.8%]",
            "straight-28": "bottom-[79.6%] left-[72.8%]",
            "straight-12": "bottom-[79.6%] left-[77.8%]",
            "straight-11": "bottom-[6.7%] left-[17.8%]",
            "straight-36": "bottom-[6.7%] left-[22.8%]",
            "straight-13": "bottom-[6.7%] left-[27.8%]",
            "straight-27": "bottom-[6.7%] left-[32.8%]",
            "straight-6": "bottom-[6.7%] left-[37.8%]",
            "straight-34": "bottom-[6.7%] left-[42.8%]",
            "straight-17": "bottom-[6.7%] left-[47.8%]",
            "straight-25": "bottom-[6.7%] left-[52.8%]",
            "straight-2": "bottom-[6.7%] left-[57.8%]",
            "straight-21": "bottom-[6.7%] left-[62.8%]",
            "straight-4": "bottom-[6.7%] left-[67.8%]",
            "straight-19": "bottom-[6.7%] left-[72.8%]",
            "straight-15": "bottom-[6.7%] left-[77.8%]",
            "straight-35": "bottom-[78.4%] left-[84%]",
            "straight-3": "bottom-[66.4%] left-[90.7%]",
            "straight-26": "bottom-[43.4%] left-[92.9%]",
            "straight-0": "bottom-[21.4%] left-[90.9%]",
            "straight-32": "bottom-[7.7%] left-[84.5%]",
            ZERO: "bottom-[43%] left-[79%]",
            VOISINS: "bottom-[43%] left-[60%]",
            ORPH: "bottom-[43%] left-[40.5%]",
            TIER: "bottom-[43%] left-[19.5%]"
          };
          const raceChips = Object.entries(raceChipsPosition);
          return /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children: raceChips.map(([id, posit]) => /* @__PURE__ */jsxRuntimeExports.jsx(ChipContainer, {
              showWin: isRaceTrack,
              chipId: id,
              chipStyle: `w-[4.6%] h-[13.2%] ${posit} ${isRaceTrack ? "text-[92%]" : "text-[57.3%]"} `,
              isSlope,
              chipSkewXDeg: (extractLeft(posit) - BOARD_LENGTH_MEDIAN) * -0.15
            }, id))
          });
        });
        function RaceTrackRangeButton({
          isVertical,
          className
        }) {
          const neighborRange = useBettingStore(state => state.neighborRange);
          const [direction, setDirection] = reactExports.useState(null);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "RaceTrackRangeButton",
            className: cn({
              isVertical
            }, className),
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: cn("borderInner", {
                "flex flex-row-reverse": isVertical
              }),
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("iconBtn", {
                  disabled: neighborRange === 9
                }),
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Plus, {
                  className: "size-full",
                  onClick: () => {
                    if (neighborRange === 9) return;
                    useBettingStore.setState({
                      neighborRange: neighborRange + 1
                    });
                    setDirection("up");
                  }
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("relative", isVertical ? "w-[2rem]" : "h-[2rem]"),
                children: /* @__PURE__ */jsxRuntimeExports.jsx(AnimateCounter, {
                  className: "num center absolute size-8",
                  value: neighborRange,
                  direction,
                  distance: 15,
                  axis: isVertical ? "x" : "y",
                  reverseDirection: isVertical
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("iconBtn", {
                  disabled: neighborRange === 0
                }),
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Minus, {
                  className: "size-full",
                  onClick: () => {
                    if (neighborRange === 0) return;
                    useBettingStore.setState({
                      neighborRange: neighborRange - 1
                    });
                    setDirection("down");
                  }
                })
              })]
            })
          });
        }
        const shareVariants = {
          main: {
            bottom: "1.9rem",
            right: "30.2rem",
            width: "39.6rem"
          },
          sub: {
            bottom: "4.1rem",
            right: "2rem",
            width: "25.2rem"
          },
          transition: {
            duration: 0.6,
            ease: "easeInOut"
          }
        };
        const gridBoardVariants = _objectSpread(_objectSpread({}, shareVariants), {}, {
          flat: {
            transform: ["translate3d(-0.15%, -8.4%, 0) perspective(8rem) rotate3d(1, 0, 0, 4.7deg) scale(1.024, 0.745)", "translate3d(0, 0, 0) perspective(8.5rem) rotate3d(1, 0, 0, 0deg) scale(1, 1)"],
            transition: {
              duration: 1,
              ease: [0.47, 0, 0.05, 1]
            }
          },
          slope: {
            transform: ["translate3d(0, 0, 0) perspective(8.5rem) rotate3d(1, 0, 0, 0deg) scale(1, 1)", "translate3d(-0.15%, -8.4%, 0) perspective(8rem) rotate3d(1, 0, 0, 4.7deg) scale(1.024, 0.745)"],
            transition: {
              duration: 1,
              ease: [0.47, 0, 0.05, 1]
            }
          }
        });
        const raceTrackBoardVariants = _objectSpread(_objectSpread({}, shareVariants), {}, {
          flat: {
            transform: ["translate3d(-0.05rem, -7.6%, 0) perspective(8rem) rotate3d(1, 0, 0, 4.7deg) scale(1.046, 0.76)", "translate3d(0, 0, 0) perspective(8.5rem) rotate3d(1, 0, 0, 0deg) scale(1, 1)"],
            transition: {
              duration: 1,
              ease: [0.47, 0, 0.05, 1]
            }
          },
          slope: {
            transform: ["translate3d(0, 0, 0) perspective(8.5rem) rotate3d(1, 0, 0, 0deg) scale(1, 1)", "translate3d(-0.05rem, -7.6%, 0) perspective(8rem) rotate3d(1, 0, 0, 4.7deg) scale(1.046, 0.76)"],
            transition: {
              duration: 1,
              ease: [0.47, 0, 0.05, 1]
            }
          }
        });
        const GameContent = () => {
          const [isAnimating, setIsAnimating] = reactExports.useState(false);
          const {
            t
          } = useTranslation();
          const isBet = useBettingStore(s => s.isBet);
          const desktopMenu = useLayoutStore(s => s.desktopModal);
          const isRaceTrack = useBettingStore(s => s.isRaceTrack);
          const animState = useWinAnimStore(s => s.animState);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn({
              isAnimating
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(AnimatePresence$1, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(motion$1.div, {
                className: "absolute w-full",
                variants: gridBoardVariants,
                initial: shareVariants.main,
                animate: [!isRaceTrack ? "main" : "sub"],
                transition: shareVariants.transition,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                  src: gridBoardTiltTop,
                  className: cn("absolute bottom-[2.69rem] left-[0.04rem] w-[99.55%] opacity-0 transition-opacity duration-200 ease-in", !isRaceTrack && "opacity-0 duration-200", !isBet && !isRaceTrack && "opacity-100 delay-200 duration-500"),
                  alt: "Grid board tilt top"
                }, "gridBoardTiltTop"), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                  src: gridBoardTiltBottom,
                  className: cn("absolute bottom-[0.7rem] left-[6.16%] w-[87.4%] opacity-0 transition-opacity duration-200 ease-in", !isRaceTrack && "opacity-0 duration-200", !isBet && !isRaceTrack && "opacity-100 delay-200 duration-500"),
                  alt: "Grid board tilt bottom"
                }, "gridBoardTiltBottom")]
              }, "gridTilt"), /* @__PURE__ */jsxRuntimeExports.jsx(motion$1.div, {
                className: "rotateBoard absolute z-[1]",
                variants: gridBoardVariants,
                initial: shareVariants.main,
                animate: [!isRaceTrack ? "main" : "sub", !isBet && !isRaceTrack ? "slope" : "flat"],
                transition: shareVariants.transition,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(GridBoard, {})
              }, "grid"), /* @__PURE__ */jsxRuntimeExports.jsxs(motion$1.div, {
                className: "absolute w-full",
                variants: raceTrackBoardVariants,
                initial: shareVariants.main,
                animate: [isRaceTrack ? "main" : "sub"],
                transition: shareVariants.transition,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                  src: raceTrackTiltTop,
                  className: cn("absolute bottom-[1.5rem] left-[-0.1%] w-[100%] origin-center opacity-0 transition-all duration-200 ease-linear", isRaceTrack && "bottom-[1.5rem] opacity-0 duration-200", !isBet && isRaceTrack && "bottom-[0.61rem] opacity-100 delay-100 duration-700"),
                  alt: "Race track tilt center"
                }, "raceTrackTiltTop"), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                  src: raceTrackTiltCenter,
                  className: cn("absolute bottom-[0.61rem] left-[-0.1%] w-[100%] origin-center opacity-0 transition-opacity duration-200 ease-linear", isRaceTrack && "opacity-0 duration-200", !isBet && isRaceTrack && "opacity-100 delay-[250ms] duration-700"),
                  alt: "Race track tilt center"
                }, "raceTrackTiltCenter"), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                  src: raceTrackTiltBottom,
                  className: cn("absolute bottom-[0.71rem] left-[-0.1%] w-[100%] origin-center opacity-0 transition-all duration-200 ease-linear", isRaceTrack && "bottom-[0.71rem] opacity-0 duration-200", !isBet && isRaceTrack && "bottom-[0.61rem] opacity-100 delay-200 duration-700"),
                  alt: "Race track tilt bottom"
                }, "raceTrackTiltBottom")]
              }, "raceTrackTilt"), /* @__PURE__ */jsxRuntimeExports.jsxs(motion$1.div, {
                className: "rotateBoard absolute",
                variants: raceTrackBoardVariants,
                initial: shareVariants.sub,
                animate: [!isRaceTrack ? "sub" : "main", !isBet && isRaceTrack ? "slope" : "flat"],
                transition: shareVariants.transition,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(motion$1.div, {
                  className: "absolute -left-12 top-1/2 -translate-y-1/2",
                  transition: {
                    duration: 0.6
                  },
                  animate: {
                    opacity: !isRaceTrack ? 0 : !isBet ? 0 : 1
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(RaceTrackRangeButton, {})
                }), /* @__PURE__ */jsxRuntimeExports.jsx(RaceTrackBoard, {
                  showTiltEffect: !isBet && isRaceTrack
                })]
              }, "raceTrack")]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(SquareButton, {
              child: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Switch, {}),
              className: `absolute bottom-[7.18rem] right-[27.445rem] ${animState && "opacity-50"}`,
              buttonClassName: "h-10 w-10 rounded-[0.75rem]",
              isGhost: true,
              tooltipContent: t("COMMON.SWITCH"),
              tooltipPlacement: "bottom",
              selected: false,
              onClick: () => {
                if (animState) {
                  playSound(["disabledAction"]);
                  return;
                }
                useBettingStore.setState(state => ({
                  isRaceTrack: !state.isRaceTrack
                }));
                setIsAnimating(true);
                setTimeout(() => {
                  setIsAnimating(false);
                }, 400);
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx(motion$1.div, {
              className: "absolute bottom-5 right-[11.75rem]",
              transition: {
                duration: 0.6
              },
              animate: {
                opacity: !isRaceTrack ? 1 : 0,
                y: !isRaceTrack ? 0 : "1rem"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx(RaceTrackRangeButton, {
                isVertical: true,
                className: "w-[5.6rem]"
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(BetResult, {
              className: `d_resultWrap absolute bottom-[14rem] right-[5.6rem] z-10 ${desktopMenu === "statistics" && "noBg"}`
            })]
          });
        };
        const useWinNumberStore = getWinNumberStore();
        const GAME_TABLE_MAP = {
          "ARO-001": "SPEED AUTO ROULETTE",
          "ARO-002": "VIP AUTO ROULETTE"
        };
        const DesktopLayout = exports("default", () => {
          var _GAME_TABLE_MAP$gameT;
          const lastWinCache = useWinNumberStore(s => s.lastWinCache);
          const gameTable = useConfigStore(s => s.GAME_TABLE);
          const IS_CLOSE_SERVER = useConfigStore(s => s.IS_CLOSE_SERVER);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "DesktopLayout",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Header$1, {
              title: (_GAME_TABLE_MAP$gameT = GAME_TABLE_MAP[gameTable]) !== null && _GAME_TABLE_MAP$gameT !== void 0 ? _GAME_TABLE_MAP$gameT : "AUTO ROULETTE"
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              id: "MainBoard",
              className: "relative",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(MainBgImage, {
                overlayBg,
                imageClassName: "h-full"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(ToastList, {}), /* @__PURE__ */jsxRuntimeExports.jsx(CountDownCap, {}), /* @__PURE__ */jsxRuntimeExports.jsx(RouletteVideoStream, {}), /* @__PURE__ */jsxRuntimeExports.jsx(GameContent, {}), /* @__PURE__ */jsxRuntimeExports.jsx(DesktopChat$1, {}), /* @__PURE__ */jsxRuntimeExports.jsx(DesktopSquareButton, {}), /* @__PURE__ */jsxRuntimeExports.jsx(NetworkStateModal, {
                isCloseServer: IS_CLOSE_SERVER
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(DesktopMenu, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Footer$1, {
              lastWinCache
            })]
          });
        });
      }
    };
  });
})();
//# sourceMappingURL=DesktopLayout-legacy-Cq5SNDqd.js.map
