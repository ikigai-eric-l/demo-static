;
(function () {
  const _excluded = ["children", "className", "wrapClassName", "id"],
    _excluded2 = ["val", "isDisabled"],
    _excluded3 = ["id", "className", "buttonClassName", "child", "isGhost", "tooltipContent", "tooltipPlacement", "selected", "onClick"];
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
  function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  System.register(['./framer-motion-vendor-legacy-BRQCrC7T.js', './index-legacy-CPkG-0qj.js', './@sentry-vendor-legacy-Ca039euQ.js', './ui-icons-internal-legacy-6Smvdqu1.js', './ikigaians-house-core-legacy-BYu6jnS6.js', './ikigaians-connect-core-legacy-DuYeXAwv.js', './ikigaians-ikgplayer-core-legacy-n4oGY9YZ.js', './App-legacy-C43Kg7P3.js', './react-dom-vendor-legacy-DChcbfwc.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, AnimatePresence, motion, useAnimate, motion$1, useTranslation, useLayoutStore, useNetworkStore, useTimerStore, Image, mobileCapRightRed, desktopCapRightRed, mobileCapCentralRed, desktopCapCentralRed, mobileCapLeftRed, desktopCapLeftRed, mobileCapRightYellow, desktopCapRightYellow, mobileCapCentralYellow, desktopCapCentralYellow, mobileCapLeftYellow, desktopCapLeftYellow, mobileCapRightGreen, desktopCapRightGreen, mobileCapCentralGreen, desktopCapCentralGreen, mobileCapLeftGreen, desktopCapLeftGreen, cn, isMobileDevice, useBettingStore, initInterpolationFunc, InterpolationMode, COUNT_DOWN_DELAY_SEC, ONE_FRAME_TIME_SEC, useLoadingStore, LoadingStageEnum, isIOS, hasVibrationSupport, useCartStore, chipResources, useConfigStore, convertLabel, isSicboGameType, isRouletteGameType, useToastStore, isDesktop, getWinNumberStore, getBetColor, thousandSeparator, stopImg, playImg, playSound, useAutoPlayStore, BetState, getRouletteNumberColor, WinNumber, getFormattedRoundId, getSicBoNumberColor, WinNumber$1, useDebounce, useChatStore, RoomType, connectIns, useSettingStore, getPayTable, scrollWrap, useHistoryStore, currencyFormat, GameHistoryResult, scrollWrapToTop, DEFAULT_HISTORY_LIMIT, toggle, LANGUAGES, changeLanguage, create, subscribeWithSelector, persist, createJSONStorage, BetTypeEnum, OUTER_GROUP_MAP, raceTrackToStraight, Bg, Bg$1, radial, polarCenter, RACE_ORDER, maskBg, virtualBackground, useWinAnimStore, raceTrackGroup, tooltipEventBus, getDraggedChipEdgeDist, getCenterPosition, useWinNumberStore$4, cleanExtraBets, addExtraBets, getDraggedChipRef, betGridPrefix, raceTrackGroup$1, reactExports, React, Icon, GameType, Decimal, capBets, GameAction, IKGPlayerFactory, isShadowRoot, offset$1, shift$1, computePosition, isElement, isNode, autoUpdate, reactDomExports;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        AnimatePresence = module.A;
        motion = module.m;
        useAnimate = module.c;
        motion$1 = module.a;
      }, module => {
        useTranslation = module.t;
        useLayoutStore = module.c;
        useNetworkStore = module.e;
        useTimerStore = module.d;
        Image = module.Y;
        mobileCapRightRed = module.a$;
        desktopCapRightRed = module.b0;
        mobileCapCentralRed = module.b1;
        desktopCapCentralRed = module.b2;
        mobileCapLeftRed = module.b3;
        desktopCapLeftRed = module.b4;
        mobileCapRightYellow = module.b5;
        desktopCapRightYellow = module.b6;
        mobileCapCentralYellow = module.b7;
        desktopCapCentralYellow = module.b8;
        mobileCapLeftYellow = module.b9;
        desktopCapLeftYellow = module.ba;
        mobileCapRightGreen = module.bb;
        desktopCapRightGreen = module.bc;
        mobileCapCentralGreen = module.bd;
        desktopCapCentralGreen = module.be;
        mobileCapLeftGreen = module.bf;
        desktopCapLeftGreen = module.bg;
        cn = module.H;
        isMobileDevice = module.i;
        useBettingStore = module.h;
        initInterpolationFunc = module.N;
        InterpolationMode = module.P;
        COUNT_DOWN_DELAY_SEC = module.O;
        ONE_FRAME_TIME_SEC = module.T;
        useLoadingStore = module.a;
        LoadingStageEnum = module.M;
        isIOS = module.bh;
        hasVibrationSupport = module.bi;
        useCartStore = module.j;
        chipResources = module.bj;
        useConfigStore = module.v;
        convertLabel = module.W;
        isSicboGameType = module.aK;
        isRouletteGameType = module.bk;
        useToastStore = module.J;
        isDesktop = module.S;
        getWinNumberStore = module.a_;
        getBetColor = module.bl;
        thousandSeparator = module.a0;
        stopImg = module.bm;
        playImg = module.bn;
        playSound = module.p;
        useAutoPlayStore = module.r;
        BetState = module.B;
        getRouletteNumberColor = module.bo;
        WinNumber = module.bp;
        getFormattedRoundId = module.aI;
        getSicBoNumberColor = module.bq;
        WinNumber$1 = module.br;
        useDebounce = module.bs;
        useChatStore = module._;
        RoomType = module.a7;
        connectIns = module.y;
        useSettingStore = module.g;
        getPayTable = module.bt;
        scrollWrap = module.bu;
        useHistoryStore = module.bv;
        currencyFormat = module.bw;
        GameHistoryResult = module.bx;
        scrollWrapToTop = module.a2;
        DEFAULT_HISTORY_LIMIT = module.by;
        toggle = module.bz;
        LANGUAGES = module.a4;
        changeLanguage = module.bA;
        create = module.bB;
        subscribeWithSelector = module.bC;
        persist = module.bD;
        createJSONStorage = module.bE;
        BetTypeEnum = module.ah;
        OUTER_GROUP_MAP = module.bF;
        raceTrackToStraight = module.bG;
        Bg = module.bH;
        Bg$1 = module.bI;
        radial = module.bJ;
        polarCenter = module.bK;
        RACE_ORDER = module.bL;
        maskBg = module.bM;
        virtualBackground = module.bN;
        useWinAnimStore = module.E;
        raceTrackGroup = module.bO;
        tooltipEventBus = module.L;
        getDraggedChipEdgeDist = module.bP;
        getCenterPosition = module.bQ;
        useWinNumberStore$4 = module.I;
        cleanExtraBets = module.bR;
        addExtraBets = module.bS;
        getDraggedChipRef = module.bT;
        betGridPrefix = module.ai;
        raceTrackGroup$1 = module.aA;
      }, module => {
        reactExports = module.r;
        React = module.b;
      }, module => {
        Icon = module.I;
      }, module => {
        GameType = module.G;
        Decimal = module.D;
        capBets = module.j;
      }, module => {
        GameAction = module.a;
      }, module => {
        IKGPlayerFactory = module.I;
      }, module => {
        isShadowRoot = module.i;
        offset$1 = module.o;
        shift$1 = module.s;
        computePosition = module.c;
        isElement = module.a;
        isNode = module.b;
        autoUpdate = module.d;
      }, module => {
        reactDomExports = module.r;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "#Cap {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  transform-origin: top center;\n  opacity: 0;\n  gap: 0;\n}\n#Cap .innerCapWrapper {\n  display: flex;\n  position: absolute;\n  height: 100%;\n  overflow-y: clip;\n}\n#Cap .left,\n#Cap .right {\n  width: 4.0625rem;\n  height: 2rem;\n}\n#Cap .central {\n  width: 7rem;\n  height: 2rem;\n}\n#Cap .isMobileDevice.left,\n#Cap .isMobileDevice.right {\n  width: 2rem;\n  height: 1.25rem;\n}\n#Cap .isMobileDevice.central {\n  width: 6.25rem;\n  height: 1.25rem;\n}#CountDownCap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  width: 100%;\n  -webkit-clip-path: polygon(0 3.9%, 100% 3.9%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 3.9%, 100% 3.9%, 100% 100%, 0% 100%);\n}\n#CountDownCap .textWrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform-origin: center;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n}\n#CountDownCap .textItem {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  font-feature-settings: \"ss02\" on;\n  background: linear-gradient(193.7deg, #f5f4f0 9.16%, #e2ded2 89.58%), #ffffff;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  padding-top: 0.175rem;\n  font-size: 1.75rem;\n  font-weight: 600;\n  height: 2rem;\n}\n#CountDownCap .textItem.isNoMoreBets, #CountDownCap .textItem.isPlaceYourBets {\n  padding-top: 0.0725rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  letter-spacing: -0.034rem;\n}\n#CountDownCap .textItem.isMobileDevice {\n  padding-top: 0.175rem;\n  font-size: 1.1rem;\n  font-weight: 700;\n  height: 1.3rem;\n}\n#CountDownCap .textItem.isMobileDevice.isPlaceYourBets, #CountDownCap .textItem.isMobileDevice.isNoMoreBets {\n  padding-top: 0.1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.0262rem;\n}body.showClickArea .clickableArea {\n  border: 0.0625rem solid rgb(190, 42, 42);\n}#Clock {\n  display: block;\n  margin-right: 0.25rem;\n}\n#Clock.isMobileDevice {\n  color: var(--Neutral-Grey-Neutral-Gey700, #878787);\n  font-family: Sora;\n  font-size: var(--Typography-Size-2xxs, 0.5rem);\n  font-style: normal;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 200% */\n  letter-spacing: 0.03rem;\n  text-transform: uppercase;\n  margin-top: 0.15rem;\n  margin-right: unset;\n}#ToastList {\n  top: 0.5rem;\n}\n#ToastList .toastBubble {\n  width: 100%;\n  z-index: 3;\n  padding: var(--Spacing-m, 1rem);\n  gap: var(--Spacing-sm, 0.75rem);\n  border-radius: 3rem;\n  background: var(--alerts-toast-background, linear-gradient(180deg, rgba(16, 16, 16, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%));\n  box-shadow: 0 0 0.5rem 0.25rem rgba(17, 17, 17, 0.25);\n  -webkit-backdrop-filter: blur(0.4688rem);\n          backdrop-filter: blur(0.4688rem);\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  line-height: var(--Typography-Line-Height-xs, 1rem);\n  letter-spacing: -0.015rem;\n}\n#ToastList .toastBubble .msg {\n  padding-right: 0.75rem;\n}\n#ToastList .toastBubble .iconClear {\n  color: #7a7a7a;\n}\n#ToastList .toastBubble.info {\n  position: relative;\n  overflow: hidden;\n}\n#ToastList .toastBubble.info::after {\n  padding: 0.125rem;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n  background: linear-gradient(180deg, #d8d3c3 0%, #7a704f 42%);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n#ToastList .toastBubble.success {\n  position: relative;\n  overflow: hidden;\n}\n#ToastList .toastBubble.success::after {\n  padding: 0.125rem;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n  background: linear-gradient(180deg, #4eb472 0%, #1f492e 42%);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n#ToastList .toastBubble.error {\n  background: var(--alerts-toast-error-border, linear-gradient(180deg, #d94747 0%, #921e1e 42%));\n  -webkit-backdrop-filter: blur(7.5px);\n          backdrop-filter: blur(7.5px);\n}\n#ToastList .toastBubble.error .iconClear {\n  color: white;\n}\n#ToastList.isDesktop {\n  top: 2.5rem;\n}\n#ToastList.isDesktop .toastBubble {\n  width: auto;\n  min-width: 20rem;\n  color: var(--Alerts-Toast-Text);\n  font-size: var(--Typography-Size-s, 0.875rem);\n  line-height: var(--Typography-Line-Height-s, 1.25rem);\n  padding: var(--Spacing-m, 1rem) var(--Spacing-ms, 1.25rem);\n  letter-spacing: -0.02625rem;\n}\n#ToastList.isDesktop .toastBubble .msg {\n  padding-right: 0.5rem;\n}#BetResult {\n  overflow: visible;\n  display: flex;\n  align-items: center;\n  height: 1.25rem;\n  padding-top: 0.125rem;\n}\n#BetResult .resultList {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n#BetResult .resultList > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.5rem;\n  padding: 0.125rem;\n  padding-top: 0.2rem;\n  gap: 0.625rem;\n  border-radius: var(--Spacing-xl);\n  color: var(--Neutrial-White-Neutrial-White);\n  text-align: center;\n  font-family: Sora;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  line-height: var(--Typography-Line-Height-3xxs); /* 90.909% */\n  letter-spacing: -0.02063rem;\n}\n#BetResult .resultList > div.red {\n  background: linear-gradient(0deg, var(--Red-Red1200) -56.02%, var(--Red-Red900) 137.48%);\n}\n#BetResult .resultList > div.black {\n  background: linear-gradient(171deg, #2a2b35 0.05%, #18191e 99.87%);\n  box-shadow: 1px 1px 5px 0px rgba(169, 175, 213, 0.07) inset, -1px -1px 9.3px 0px rgba(6, 7, 17, 0.49) inset;\n}\n#BetResult .resultList > div.green {\n  background: linear-gradient(180deg, var(--Green-Green800) 0%, var(--Green-Green) 100%);\n}\n#BetResult.isDesktop {\n  display: flex;\n  width: 21rem;\n  align-items: center;\n  padding: 0.75rem 0;\n  overflow: hidden;\n}\n#BetResult.isDesktop .resultList {\n  padding: var(--Spacing-xs, 0.25rem) var(--Spacing-xs-2, 0.375rem);\n  gap: var(--Spacing-xs-2, 0.375rem);\n}#AutoPlayCard {\n  text-align: center;\n  line-height: var(--Typography-Line-Height-2xxs, 0.75rem); /* 150% */\n  font-size: var(--Typography-Size-2xxs, 0.5rem);\n  border-radius: var(--Radius-sm, 0.75rem);\n  box-shadow: 0rem 0.25rem 0.3104rem 0rem rgba(0, 0, 0, 0.25), 0rem 0.1667rem 0.1563rem 0rem rgba(0, 0, 0, 0.25);\n  border: 0.046878rem solid transparent;\n  transition: all 1s;\n  position: relative;\n}\n#AutoPlayCard .inner {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  border-radius: 0.75rem;\n  position: relative;\n  background: var(--Tooltip-Black-Background, linear-gradient(180deg, #252525 0%, #101010 100%));\n}\n#AutoPlayCard .count {\n  font-size: var(--Typography-Size-xl, 1.75rem);\n  font-weight: 600;\n  line-height: var(--Typography-Line-Height-xl, 2.375rem); /* 135.714% */\n  letter-spacing: -0.0525rem;\n  transition: all 0.3s ease-in-out;\n}\n#AutoPlayCard .round {\n  color: var(--General-Colors-Text-Inactive-Text, #7a7a7a);\n  font-weight: 600;\n  letter-spacing: 0.02rem;\n  text-transform: uppercase;\n}\n#AutoPlayCard .left {\n  color: #726351;\n  letter-spacing: -0.005rem;\n}\n#AutoPlayCard .radioBtn {\n  border-radius: var(--Radius-s, 0.5rem);\n  height: 2.5rem;\n  background: linear-gradient(180deg, #275c3a 0%, #173723 100%) padding-box, linear-gradient(180deg, #40975f 0%, #1f492e 100%) border-box;\n  padding: 0.03125rem;\n  border: 0.03906rem solid transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#AutoPlayCard.unSelected {\n  background: var(--Tooltip-Black-Background, linear-gradient(180deg, #252525 0%, #101010 100%)) padding-box, linear-gradient(180deg, #524e40 0%, #2f261c 20%, #2f261c 42%, #524e40 100%) border-box;\n}\n#AutoPlayCard.unSelected .count {\n  background: var(--Overlay-Screen-Title, linear-gradient(194deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#AutoPlayCard.selected {\n  background: var(--Tooltip-Black-Background, linear-gradient(180deg, #252525 0%, #101010 100%)) padding-box, linear-gradient(180deg, #d8d3c3 0%, #d8d3c3 20%, #7a704f 42%, #7a704f 100%) border-box;\n}\n#AutoPlayCard.selected .count {\n  color: var(--General-Colors-Text-Light-Brand-Text, #eadfd2);\n  text-shadow: 0rem 0rem 0.8313rem rgba(255, 255, 255, 0.45);\n  background: unset;\n  background-clip: unset;\n  -webkit-background-clip: unset;\n  -webkit-text-fill-color: unset;\n}\n#AutoPlayCard.selected .radioBtn {\n  background: linear-gradient(180deg, #1d1d1d 0%, #151515 100%) padding-box, linear-gradient(180deg, #c3a785 0%, #927147 100%) border-box;\n}#ChatRoom .textArea {\n  display: flex;\n  column-gap: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 2rem;\n  background: var(--Warm-Black-Alpha-Warm-Black-60);\n  border: 0.0625rem solid #303030;\n}\n#ChatRoom .textArea label {\n  flex: 1;\n}\n#ChatRoom .textArea::after {\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 50%;\n  width: 101%;\n  height: 108%;\n  transform: translate(-50%, -50%);\n  border-radius: inherit;\n  padding: 0.063rem;\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  opacity: 0;\n  background: linear-gradient(180deg, #bdb7a4 0%, #6c6654 42%);\n}\n#ChatRoom .textArea.focus {\n  border: 0.0625rem solid transparent;\n}\n#ChatRoom .textArea.focus::after {\n  opacity: 1;\n}\n#ChatRoom .textArea input {\n  width: 100%;\n  background: transparent;\n  color: var(--General-Colors-Text-Light-Brand-Text);\n  font-size: var(--Typography-Size-s);\n  font-weight: 400;\n  line-height: var(--Typography-Line-Height-xs); /* 142.857% */\n  letter-spacing: -0.026rem;\n}\n#ChatRoom .textArea input ~ span {\n  color: var(--Warm-Grey-Alpha-Warm-Grey-Alpha-60);\n  font-size: var(--Typography-Size-xs);\n  font-weight: 400;\n  line-height: var(--Typography-Line-Height-xs); /* 142.857% */\n  letter-spacing: 0.045rem;\n  transition: 0.25s ease all;\n}\n#ChatRoom .textArea input ~ span.limit {\n  top: 0.75rem;\n  letter-spacing: 0;\n  left: 1.125rem;\n  font-size: 0.5rem;\n  color: var(--General-Colors-Text-Inactive-Text);\n  font-family: var(--Typography-Font);\n  font-size: var(--Typography-Size-2xxs);\n  font-style: normal;\n  font-weight: 400;\n  line-height: var(--Typography-Line-Height-3xxs);\n}\n#ChatRoom .limit {\n  color: var(--General-Colors-Text-Inactive-Text, #7a7a7a);\n  font-size: var(--Typography-Size-xxs, 0.625rem);\n  font-style: normal;\n  font-weight: 400;\n  line-height: var(--Typography-Line-Height-xxs, 0.875rem); /* 140% */\n}\n#ChatRoom .limit.isEmpty {\n  color: var(--Warm-Grey-Alpha-Warm-Grey-Alpha-25, rgba(216, 211, 195, 0.25));\n}\n#ChatRoom .box {\n  width: 100%;\n  border-radius: var(--Radius-m, 1rem);\n  border: 0.0625rem solid var(--Label-Border-Border-Beige, #bf9e77);\n  background: var(--Label-Background-Secondary-Beige, rgba(180, 142, 96, 0.1));\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  gap: 0.375rem;\n  text-align: center;\n}\n#ChatRoom .box.error {\n  border: var(--Basic-Design-Digits-0, 0.0625rem) solid var(--Label-Border-Secondary-Red, #df6666);\n  background: var(--Label-Background-Secondary-Red, rgba(223, 102, 102, 0.1));\n}\n#ChatRoom .box h1 {\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-xxs, 0.875rem); /* 116.667% */\n  letter-spacing: 0.1125rem;\n  text-transform: uppercase;\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#ChatRoom .box h1.error {\n  background: linear-gradient(194deg, #df6666 9.16%, #cf2b2b 89.58%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#ChatRoom .box p {\n  word-break: normal;\n  color: var(--General-Colors-Text-Light-Brand-Text, #eadfd2);\n  /* Typography/Body/p5 */\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 400;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: -0.015rem;\n}\n#ChatRoom .box p.error {\n  color: var(--General-Colors-Text-Secondary-Text, #b0b0b0);\n}\n#ChatRoom .shadowHint {\n  height: 2rem;\n  position: absolute;\n  width: calc(100% - 1.75rem);\n  top: 0rem;\n  z-index: 1;\n}\n#ChatRoom .shadowHint.desktopLive {\n  display: none;\n}\n\n.chatTitleName {\n  color: var(--Overlay-Operator-Dealer-Name, #f4efe8);\n  -webkit-text-fill-color: initial;\n}\n\n.ChatBubble {\n  transform-origin: top left;\n  will-change: transform;\n}\n.ChatBubble .msg {\n  max-width: 14.25rem;\n  padding: var(--Spacing-s, 0.5rem) var(--Spacing-m, 1rem) var(--Spacing-s, 0.5rem) var(--Spacing-sm, 0.75rem);\n  width: -webkit-fit-content;\n  width: fit-content;\n  color: var(--General-Secondary-Text, #e5ddcb);\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: -0.015rem;\n  border-radius: var(--Radius-m, 1rem) var(--Radius-m, 1rem) var(--Radius-m, 1rem) 0.25rem;\n  background: var(--Neutrial-White-Alpha-Neutrial-White-10, rgba(249, 249, 249, 0.1));\n  -webkit-backdrop-filter: blur(2.5rem);\n          backdrop-filter: blur(2.5rem);\n}\n.ChatBubble .msg::after {\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  border-radius: inherit;\n  padding: 0.063rem;\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  opacity: 1;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(115, 115, 115, 0) 100%);\n}\n.ChatBubble .timer {\n  color: var(--Warm-Grey-Alpha-Warm-Grey-Alpha-60, rgba(216, 211, 195, 0.6));\n  font-size: var(--Typography-Size-xxs, 0.625rem);\n  line-height: var(--Typography-Line-Height-xxs, 0.875rem); /* 140% */\n  letter-spacing: -0.0125rem;\n}\n.ChatBubble .name {\n  color: var(--Warm-Grey-Alpha-Warm-Grey-Alpha-60, rgba(216, 211, 195, 0.6));\n  font-size: var(--Typography-Size-xxs, 0.625rem);\n  line-height: var(--Typography-Line-Height-xxs, 0.875rem); /* 140% */\n  letter-spacing: -0.0125rem;\n}\n.ChatBubble .desktopLiveTimer {\n  position: absolute;\n  right: -2rem;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.ChatBubble.isSelf {\n  transform-origin: top right;\n  margin-left: auto;\n}\n.ChatBubble.isSelf .msg {\n  border-radius: var(--Radius-m, 1rem) var(--Radius-m, 1rem) var(--Radius-xs, 0.25rem) var(--Radius-m, 1rem);\n  background: linear-gradient(180deg, #8e6c43 0%, #644c2f 100%);\n}\n.ChatBubble.isSelf .msg::after {\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(115, 115, 115, 0) 100%);\n}\n.ChatBubble.isSelf .timer {\n  text-align: right;\n}\n.ChatBubble.isSelf .name {\n  display: none;\n}\n.ChatBubble.isSelf .desktopLiveTimer {\n  right: unset;\n  left: -2rem;\n}\n\n.chatRoomHeader {\n  font-feature-settings: \"ss02\" on;\n  font-family: var(--Typography-Font);\n  font-size: var(--Typography-Size-xs);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-xs);\n  letter-spacing: 0.03rem;\n  text-transform: uppercase;\n  background: var(--Overlay-Screen-Title);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}#GameLimit {\n  display: grid;\n  gap: 1.25rem;\n  font-family: var(--Typography-Font, Lufga);\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-style: normal;\n  font-weight: 400;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: -0.015rem;\n  margin-bottom: 1rem;\n  -webkit-text-fill-color: initial;\n  color: var(--Neutrial-White-Neutrial-White500);\n}\n#GameLimit > div:first-child {\n  display: grid;\n  gap: 1.25rem;\n}\n#GameLimit section {\n  display: grid;\n}\n#GameLimit h3 {\n  font-weight: 500;\n  letter-spacing: 0.03rem;\n  text-transform: uppercase;\n  width: -webkit-fit-content;\n  width: fit-content;\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#GameLimit h4 {\n  font-weight: bold;\n  color: var(--Neutrial-White-Neutrial-White);\n  margin-top: 0.5rem;\n}\n#GameLimit strong {\n  color: var(--Neutrial-White-Neutrial-White);\n}\n#GameLimit label {\n  color: var(--Neutrial-White-Neutrial-White);\n  font-weight: 600;\n}\n#GameLimit ul {\n  display: grid;\n  gap: 0.5rem;\n  color: var(--Neutrial-White-Neutrial-White);\n  font-weight: 600;\n}\n#GameLimit ol {\n  padding-left: 0.35rem;\n  list-style-position: inside;\n}\n#GameLimit ol li {\n  text-indent: -0.7rem;\n  padding-left: 0.7rem;\n  padding-bottom: 0.5rem;\n}\n#GameLimit table {\n  color: var(--General-Colors-Text-Inactive-Text);\n  text-align: center;\n}\n#GameLimit th {\n  text-transform: uppercase;\n  padding: 0 0 0.5rem 0;\n  font-size: var(--Typography-Size-xxs, 0.625rem);\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 160% */\n  letter-spacing: 0.0375rem;\n  border-bottom: 0.0625rem solid #323232;\n}\n#GameLimit td {\n  padding: 0.75rem 0;\n  color: var(--General-Colors-Text-Light-Brand-Text, #eadfd2);\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: -0.015rem;\n}\n#GameLimit .subSection {\n  margin-top: -0.25rem;\n}\n\n#GameLimit th,\n#GameLimit td {\n  font-weight: 400;\n}\n#GameLimit th:first-child,\n#GameLimit td:first-child {\n  text-align: left;\n}\n#GameLimit th:not(:first-child),\n#GameLimit td:not(:first-child) {\n  text-align: right;\n}\n#GameLimit th:last-child {\n  width: 4rem;\n}\n#GameLimit td:nth-child(2) {\n  color: #b0b0b0;\n}\n#GameLimit td:last-child {\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#GameLimit tbody:before {\n  content: \"@\";\n  display: block;\n  line-height: 0.5rem;\n  text-indent: -624.9375rem;\n}\n#GameLimit .maxPayout {\n  border-top: 0.0625rem solid #323232;\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n}\n#GameLimit .borderTop {\n  border-top: 0.0625rem solid #323232;\n  padding-top: 1rem;\n}\n#GameLimit .borderBottom {\n  border-bottom: 0.0625rem solid #323232;\n  padding-bottom: 1rem;\n}\n#GameLimit .indent {\n  padding-left: 1rem;\n}#GameRuleInfo {\n  display: grid;\n  gap: 1.25rem;\n  font-family: var(--Typography-Font, Lufga);\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-style: normal;\n  font-weight: 400;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: -0.015rem;\n  margin-bottom: 1rem;\n  -webkit-text-fill-color: initial;\n  color: var(--Neutrial-White-Neutrial-White500);\n}\n#GameRuleInfo > div:first-child {\n  display: grid;\n  gap: 1.25rem;\n}\n#GameRuleInfo section {\n  display: grid;\n}\n#GameRuleInfo h3 {\n  font-weight: 500;\n  letter-spacing: 0.03rem;\n  text-transform: uppercase;\n  width: -webkit-fit-content;\n  width: fit-content;\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#GameRuleInfo h4 {\n  font-weight: bold;\n  color: var(--Neutrial-White-Neutrial-White);\n  margin-top: 0.5rem;\n}\n#GameRuleInfo strong {\n  color: var(--Neutrial-White-Neutrial-White);\n}\n#GameRuleInfo label {\n  color: var(--Neutrial-White-Neutrial-White);\n  font-weight: 600;\n}\n#GameRuleInfo ul {\n  display: grid;\n  gap: 0.5rem;\n  color: var(--Neutrial-White-Neutrial-White);\n  font-weight: 600;\n}\n#GameRuleInfo ol {\n  padding-left: 0.35rem;\n  list-style-position: inside;\n}\n#GameRuleInfo ol li {\n  text-indent: -0.7rem;\n  padding-left: 0.7rem;\n  padding-bottom: 0.5rem;\n}\n#GameRuleInfo table {\n  color: var(--General-Colors-Text-Inactive-Text);\n  text-align: center;\n}\n#GameRuleInfo th {\n  text-transform: uppercase;\n  padding: 0 0 0.5rem 0;\n  font-size: var(--Typography-Size-xxs, 0.625rem);\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 160% */\n  letter-spacing: 0.0375rem;\n  border-bottom: 0.0625rem solid #323232;\n}\n#GameRuleInfo td {\n  padding: 0.75rem 0;\n  color: var(--General-Colors-Text-Light-Brand-Text, #eadfd2);\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: -0.015rem;\n}\n#GameRuleInfo .subSection {\n  margin-top: -0.25rem;\n}#GameHistory {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  width: 100%;\n  padding-top: 0.25rem;\n}\n#GameHistory .gridHeader {\n  background: #1c1d1e;\n  color: #7a7a7a;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  padding-bottom: 0.25rem;\n}\n#GameHistory .gridHeader .gridCell {\n  font-size: 0.625rem;\n  letter-spacing: 0.0375rem;\n  color: var(--General-Colors-Text-Inactive-Text, #7a7a7a);\n}\n#GameHistory .gridHeader .gridCell:nth-child(4) {\n  padding-right: 1.4rem;\n}\n#GameHistory .gridRow {\n  display: grid;\n  grid-template-columns: 2fr 3fr 2fr 3fr;\n  padding: 0.5125rem;\n  align-items: center;\n  gap: 0.5rem;\n}\n#GameHistory .gridCell {\n  overflow: hidden;\n  color: var(--General-Colors-Text-Secondary-Text, #b0b0b0);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: -0.015rem;\n}\n#GameHistory .gridCell:nth-child(1) {\n  padding-left: 0.5rem;\n  text-align: left;\n}\n#GameHistory .gridCell:nth-child(2) {\n  text-align: left;\n}\n#GameHistory .gridCell:nth-child(3) {\n  text-align: right;\n}\n#GameHistory .gridCell:nth-child(4) {\n  padding-right: 0.125rem;\n  text-align: right;\n}\n#GameHistory .groupHeader {\n  background: var(--Warm-Grey-Alpha-Warm-Grey-Alpha-10);\n}\n#GameHistory .groupHeader .gridCell {\n  color: var(--General-Colors-Text-Primary-Text);\n}\n#GameHistory .groupHeader .gridCell:nth-child(2),\n#GameHistory .groupHeader .gridCell:nth-child(3) {\n  text-align: right;\n  font-weight: 500;\n}\n#GameHistory .groupHeader .gridCell:nth-child(3) {\n  padding-right: 1.4rem;\n}\n#GameHistory .groupHeader .arrowIcon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: transform 0.3s ease-out;\n  margin-left: 0.25rem;\n}\n#GameHistory .groupHeader .arrowIcon.collapsed {\n  transform: rotate(180deg);\n}\n#GameHistory .groupContent {\n  overflow: hidden;\n  transition: height 0.3s ease-out;\n}\n\n#GameHistoryTypeHeader {\n  background: linear-gradient(180deg, #211f1f 0%, rgba(30, 32, 33, 0.431372549) 27.41%, #1b1d1f 100%);\n  -webkit-background-clip: text;\n          background-clip: text;\n}\n#GameHistoryTypeHeader > .header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.92rem;\n  border-radius: var(--Radius-lg, 2rem);\n  border: 0.0625rem solid var(--General-Colors-Border-Border, #252525);\n  background: var(--Overlay-Overlay-Content-Background-2, #1d1d1d);\n}\n#GameHistoryTypeHeader h1 {\n  text-align: center;\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-xxs, 0.875rem); /* 116.667% */\n  letter-spacing: 0.1125rem;\n  text-transform: uppercase;\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n#GameHistoryListHeader h1 {\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: 0.1125rem;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n#GameHistoryContent table {\n  width: 100%;\n}\n#GameHistoryContent thead {\n  width: 100%;\n  display: contents;\n  text-wrap: nowrap;\n}\n#GameHistoryContent thead div {\n  width: 100%;\n  display: flex;\n  padding: 0.625rem 1rem;\n  background-color: #1c1d1e;\n}\n#GameHistoryContent thead tr.headerRow {\n  border-bottom-width: 1rem;\n  border-color: transparent;\n}\n#GameHistoryContent th {\n  color: var(--General-Colors-Text-Inactive-Text, #7a7a7a);\n  /* Typography/Input/Placeholder M */\n  font-size: var(--Typography-Size-xxs, 0.625rem);\n  font-weight: 400;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 160% */\n  letter-spacing: 0.0375rem;\n  text-transform: uppercase;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#GameHistoryContent th:first-child {\n  padding-left: 0;\n}\n#GameHistoryContent th:last-child {\n  padding-right: 0;\n}\n#GameHistoryContent td {\n  font-feature-settings: \"ss02\" on;\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 400;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: -0.015rem;\n  padding: 0;\n}\n#GameHistoryContent tbody tr.subtotalRow {\n  border-top-width: 1.5rem;\n  border-color: transparent;\n}\n#GameHistoryContent tbody tr.subtotalRow:first-child {\n  border-top-width: 0rem;\n}\n#GameHistoryContent tbody tr.divider {\n  border-top-width: 1.25rem;\n  border-color: transparent;\n}\n#GameHistoryContent tbody tr.totalRow {\n  border-top-width: 1.25rem;\n  border-color: transparent;\n}\n#GameHistoryContent .item {\n  color: var(--Neutrial-White-Neutrial-White);\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 600;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: -0.015rem;\n}\n#GameHistoryContent .content {\n  color: var(--Neutrial-White-Neutrial-White500);\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  line-height: var(--Typography-Line-Height-xs, 1rem);\n  letter-spacing: -0.015rem;\n}\n#GameHistoryContent .total {\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: 0.03rem;\n  text-transform: uppercase;\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#GameHistoryContent button {\n  border-radius: var(--Spacing-xl);\n  background: linear-gradient(180deg, #d8d3c3 0%, #7a704f 100%);\n  padding: 0.0625rem;\n}\n#GameHistoryContent button .inner {\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--Button-Secondary-Secondary-2, linear-gradient(180deg, #1d1d1d 0%, #151515 100%), linear-gradient(180deg, #c3a785 0%, #927147 100%));\n}\n#GameHistoryContent .maxWin {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  padding: 0.5rem;\n  text-align: center;\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: -0.015rem;\n}\n\n#GameHistoryContentHeader .goldenHeader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  gap: 0.5rem;\n  border-radius: var(--Radius-lg, 2rem);\n  border: 0.0625rem solid var(--General-Colors-Border-Border, #252525);\n  background: var(--Overlay-Overlay-Content-Background-2, #1d1d1d);\n}\n#GameHistoryContentHeader h1 {\n  text-align: center;\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-xxs, 0.875rem); /* 116.667% */\n  letter-spacing: 0.1125rem;\n  text-transform: uppercase;\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n#EmptyHistoryButton {\n  padding: 0.575rem 1.25rem;\n  text-wrap: nowrap;\n  border-radius: var(--Spacing-xl);\n  background: var(--Button-Primary-Default, linear-gradient(180deg, #275c3a 0%, #173723 100%)) padding-box, linear-gradient(180deg, #40975f 0%, #1f492e 100%) border-box;\n  border: 0.07rem solid transparent;\n  color: var(--Button-Text, #f9f9f9);\n  text-align: center;\n  font-family: var(--Typography-Font, Lufga);\n  font-size: var(--Typography-Size-s, 0.875rem);\n  font-weight: 500;\n  line-height: var(--Typography-Line-Height-s, 1.25rem);\n  letter-spacing: -0.0262rem;\n}#SoundButton {\n  border-radius: 50%;\n  background: linear-gradient(180deg, rgba(12, 12, 12, 0.05) 0%, rgba(12, 12, 12, 0.5) 100%);\n}#Toggle {\n  display: inline-block;\n  position: relative;\n  width: 2.75rem;\n  height: 1.25rem;\n  cursor: pointer;\n  border-radius: 2.5rem;\n  border: 0.0625rem solid transparent;\n}\n#Toggle .slider {\n  border: inherit;\n  border-radius: inherit;\n  background: linear-gradient(#1d1d1d, #1d1d1d) padding-box, linear-gradient(180deg, var(--neutral-black-neutral-black-500-background-2, #101010) 0%, var(--Neutral-Black-Neutral-Black100, #3e3e3e) 100%) border-box;\n  box-shadow: 0.0625rem 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.5) inset;\n}\n#Toggle .sliderBar {\n  border: inherit;\n  border-radius: inherit;\n  background: linear-gradient(#a57d4e, #a57d4e) padding-box, linear-gradient(180deg, var(--Beige-Gold-Beige-Gold1000, #644c2f) 0%, var(--Beige-Gold-Beige-Gold800, #a57d4e) 100%) border-box;\n  box-shadow: none;\n}\n#Toggle .toggleControl {\n  position: absolute;\n  top: 50%;\n  height: 1.75rem;\n  width: 1.75rem;\n  z-index: 2;\n  pointer-events: none;\n}#SliderBar input[type=range] {\n  -webkit-appearance: none;\n  appearance: none;\n  background: transparent;\n  width: 100%;\n  height: 200%;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n#SliderBar input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 2.4rem;\n  height: 2.4rem;\n  opacity: 0;\n  border-radius: 50%;\n}\n#SliderBar input[type=range]::-moz-range-thumb {\n  border: none;\n  background-color: transparent;\n}\n#SliderBar .ballRange {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: calc(100% - 1.6rem);\n  left: 0.8rem;\n}#MultiCheckInput .input-container {\n  position: relative;\n  padding-left: 1.25rem;\n  width: 100%;\n  height: 3.5rem;\n  background: var(--Inputs-Background-Default);\n  display: flex;\n  align-items: center;\n  align-self: stretch;\n  justify-content: space-between;\n  font-size: 0.875rem;\n  border-radius: 62.4375rem;\n  border-width: 0.0625rem;\n  border-style: solid;\n}\n#MultiCheckInput .input-container.has-content input {\n  top: 43%;\n}\n#MultiCheckInput .input-container.has-content .placeholder {\n  top: 52%;\n  transform: translateY(-100%);\n  font-size: 0.5rem;\n}\n#MultiCheckInput .input-container.default-border {\n  border: 0.0625rem solid var(--Inputs-Border-Default);\n}\n#MultiCheckInput .input-container.success-border {\n  border: 0.0625rem solid var(--General-Colors-General-Success);\n  box-shadow: 0rem 0rem 0rem 0.1875rem rgba(78, 180, 114, 0.2);\n}\n#MultiCheckInput .input-container.error-border {\n  border: 0.0625rem solid var(--General-Colors-General-Error);\n  box-shadow: 0rem 0rem 0rem 0.1875rem rgba(207, 43, 43, 0.2);\n}\n#MultiCheckInput input {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: 1.25rem;\n  margin-right: 3rem;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-weight: 500;\n  line-height: var(1.25rem);\n  letter-spacing: -0.00875rem;\n}\n#MultiCheckInput ::placeholder {\n  opacity: 1;\n  top: 20%;\n}\n#MultiCheckInput .placeholder {\n  position: absolute;\n  top: 50%;\n  left: 1.25rem;\n  transform: translateY(-50%);\n  transition: all 0.2s ease;\n  pointer-events: none;\n  letter-spacing: 0.03rem;\n}\n#MultiCheckInput .placeholder.golden {\n  background: var(--beige-linear-main, linear-gradient(178deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#MultiCheckInput .success {\n  color: var(--General-Colors-General-Success);\n}\n#MultiCheckInput .error {\n  color: var(--General-Colors-General-Error);\n}\n#MultiCheckInput .message {\n  padding-top: 0.5rem;\n  padding-left: 1.25rem;\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1rem;\n  letter-spacing: 0.0005rem;\n}.tabsBtnContainer {\n  border-radius: 1.5rem;\n  background: linear-gradient(to bottom, #3e3e3e 0%, #101010 100%);\n  padding: 0.0625rem;\n}\n.tabsBtnContainer .tabs {\n  display: flex;\n  border-image-source: linear-gradient(180deg, #3e3e3e 0%, #101010 100%);\n  border-radius: inherit;\n  background: linear-gradient(180deg, #252525 0%, #101010 100%);\n  font-size: 0.75rem;\n  letter-spacing: -0.015rem;\n  white-space: nowrap;\n  position: relative;\n}\n.tabsBtnContainer .tabContainer {\n  flex: 4.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n.tabsBtnContainer .tabContainer .tab {\n  color: #c2c2c2;\n}\n.tabsBtnContainer .tabContainer.active .tab {\n  color: var(--Neutrial-White-Neutrial-White);\n}\n.tabsBtnContainer .tabContainer.disabled {\n  pointer-events: none;\n}\n.tabsBtnContainer .tabContainer.disabled .tab {\n  color: #606060;\n}\n\n.activeTabBackground {\n  position: absolute;\n  transition: all 0.2s ease-out;\n}\n.activeTabBackground.firstTimeRender {\n  transition: none;\n}\n.activeTabBackground .container {\n  border-radius: 1.25rem;\n  padding: 0.0625rem;\n  background: linear-gradient(180deg, #bf9e77 0%, #795c39 42%);\n}\n.activeTabBackground .container .background {\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  color: #c2c2c2;\n  background: var(--Tab-Active-Tab-Background, linear-gradient(180deg, #8e6c43 0%, #644c2f 100%));\n}.notificationHint {\n  position: absolute;\n  -webkit-text-fill-color: white;\n  font-family: \"lufga\";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  letter-spacing: -0.023rem;\n  text-align: center;\n  width: 1.36rem;\n  height: 1.36rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0.05rem;\n  border-radius: 50%;\n  border: 0.125rem solid #020301;\n  background: linear-gradient(to bottom, #d94747, #731818);\n  font-weight: 600;\n}#BettingMode h3 {\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 500;\n  letter-spacing: 0.1125rem;\n  text-transform: uppercase;\n  background: var(--Overlay-Screen-Title, linear-gradient(194deg, #c9ae8d 9.16%, #a57d4e 89.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n}\n#BettingMode .subtitle {\n  color: #b9b2aa;\n  text-align: center;\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: -0.015rem;\n}\n#BettingMode .box {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  height: 100%;\n}\n#BettingMode .box span {\n  position: absolute;\n  top: 0.76rem;\n  font-size: var(--Typography-Size-2xxs, 0.5rem);\n  font-weight: 600;\n  letter-spacing: 0.02rem;\n  text-transform: uppercase;\n}\n#BettingMode .box:not(.active) span {\n  background: var(--beige-linear-main, linear-gradient(185deg, #c9ae8d 9.16%, #a57d4e 70.58%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#BettingMode .box.active span {\n  color: var(--General-Colors-Text-Light-Brand-Text, #eadfd2);\n  text-shadow: 0 0 0.8313rem rgba(255, 255, 255, 0.45);\n}#StatisticAdvanced {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n#StatisticAdvanced .unit {\n  position: absolute;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 2.4rem;\n}\n#StatisticAdvanced .unit .title {\n  color: var(--Neutrial-White-Neutrial-White);\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 600;\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n  letter-spacing: -0.015rem;\n}\n#StatisticAdvanced .unit .num {\n  color: var(--Neutrial-White-Alpha-Neutrial-White-60, rgba(249, 249, 249, 0.6));\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 400;\n  line-height: var(--Typography-Line-Height-2xxs, 0.75rem); /* 100% */\n  letter-spacing: -0.015rem;\n}\n#StatisticAdvanced .unit.xl .title {\n  font-size: var(--Typography-Size-s, 0.875rem);\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 114.286% */\n  letter-spacing: -0.0175rem;\n}\n#StatisticAdvanced .unit.xl .num {\n  line-height: var(--Typography-Line-Height-xs, 1rem); /* 133.333% */\n}\n\n.statisticRacetrack .unit {\n  gap: 0.14rem;\n}#StatisticHotCold .bet, #StatisticLast500 .bet {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding: var(--Spacing-xs);\n  color: var(--Neutrial-White-Neutrial-White);\n  font-family: \"Sora\";\n  font-size: var(--Typography-Size-xs, 0.75rem);\n  font-weight: 600;\n  line-height: var(--Typography-Line-Height-3xxs);\n  letter-spacing: -0.0225rem;\n}\n#StatisticHotCold .red.bet, #StatisticLast500 .red.bet {\n  background: var(--Roulette-Numbers-Red, linear-gradient(351deg, #601414 -0.91%, #b02525 101.02%));\n}\n#StatisticHotCold .black.bet, #StatisticLast500 .black.bet {\n  border: 0.0625rem solid transparent;\n  background: linear-gradient(-22.222deg, #18191e 0%, #2a2b35 101.2%) padding-box, linear-gradient(180deg, var(--Neutral-Black-Neutral-Black100) 0%, var(--Neutral-Black-Neutral-Black300) 100%) border-box;\n}\n#StatisticHotCold .black.bet::after, #StatisticLast500 .black.bet::after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 106.5%;\n  height: 106.5%;\n  transform: translate(-50%, -50%);\n  border-radius: var(--Radius-s, 0.5rem);\n  box-shadow: 0.0625rem 0.0625rem 0.3125rem 0rem rgba(169, 175, 213, 0.07) inset, -0.0625rem -0.0625rem 0.5813rem 0rem rgba(6, 7, 17, 0.6) inset;\n  content: \"\";\n  pointer-events: none;\n}\n#StatisticHotCold .green.bet, #StatisticLast500 .green.bet {\n  background: var(--Roulette-Numbers-Green, linear-gradient(180deg, #347a4d 0%, #275c3a 100%));\n}\n\n#StatisticLast500 .bet {\n  border-radius: var(--Radius-s, 0.5rem);\n  width: 1.875rem;\n  height: 1.875rem;\n}\n\n#NumberOfRounds {\n  color: var(--toggle-switchers-settings-control-heading-active, #eadfd2);\n  font-size: var(--Typography-Size-s, 0.875rem);\n  line-height: var(--Typography-Line-Height-s, 1.25rem);\n  letter-spacing: -0.02625rem;\n}\n#NumberOfRounds .slider input[type=range] {\n  -webkit-appearance: none;\n  appearance: none;\n  background: transparent;\n  width: 100%;\n  height: 200%;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n#NumberOfRounds .slider input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 2.4rem;\n  height: 2.4rem;\n  opacity: 0;\n  border-radius: 50%;\n}\n#NumberOfRounds .slider input[type=range]::-moz-range-thumb {\n  border: none;\n  background-color: transparent;\n}\n\n#StatisticHotCold .bet {\n  width: 100%;\n  aspect-ratio: 1;\n  font-size: var(--Typography-Size-xxs, 0.625rem);\n  border-radius: 0.375rem;\n}\n#StatisticHotCold .resultCol {\n  position: relative;\n  padding: 0.5rem 0.375rem 0.75rem;\n  border-radius: var(--Radius-Round, 62.4375rem);\n  overflow: hidden;\n  background: linear-gradient(351deg, #1a1b1c 0%, #1a1b1c 101.2%) padding-box, linear-gradient(351deg, #601414 -0.91%, #b02525 101.02%) border-box;\n  border: 0.0625rem solid transparent;\n}\n#StatisticHotCold .resultCol::before {\n  display: block;\n  content: \"\";\n  width: 3rem;\n  height: 2.875rem;\n  position: absolute;\n  left: -0.375rem;\n  top: 0;\n  background: var(--Roulette-Numbers-Red, linear-gradient(351deg, #601414 -0.91%, #b02525 101.02%));\n  opacity: 0.5;\n  filter: blur(1.375rem);\n  pointer-events: none;\n}\n#StatisticHotCold .resultCol.typeCold {\n  border-radius: var(--Radius-Round, 62.4375rem);\n  background: linear-gradient(351deg, #1a1b1c 0%, #1a1b1c 101.2%) padding-box, linear-gradient(351deg, #344a7a -0.91%, #6b86c0 101.02%) border-box;\n}\n#StatisticHotCold .resultCol.typeCold::before {\n  background: linear-gradient(351deg, #344a7a -0.91%, #6b86c0 101.02%);\n}#VideoWrapper {\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n#VideoWrapper.isCanStream {\n  opacity: 1;\n}\n#VideoWrapper .streamContainer {\n  pointer-events: none;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  transform-origin: top center;\n}\n#VideoWrapper.isMobileDevice .streamContainer {\n  aspect-ratio: 1/0.7;\n  max-width: 100%;\n}\n#VideoWrapper #StreamPlayer {\n  width: 100%;\n  height: 100%;\n  transition: transform 1s ease-in-out;\n}\n#VideoWrapper #StreamPlayer .zoomed {\n  transform: scale(1.5);\n  transform-origin: center center;\n}\n#VideoWrapper #StreamPlayer .streamOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  pointer-events: none;\n}#VideoWrapper .rouletteMask {\n  transform: translateZ(0);\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  -webkit-mask-composite: xor;\n          mask-composite: exclude;\n  /* -------------------------------------------------------------------------- */\n  /*                                   Desktop                                  */\n  /* -------------------------------------------------------------------------- */\n  background-size: 180%;\n  background-position: center 5.5%;\n  -webkit-mask-position: center 6%;\n          mask-position: center 6%;\n  -webkit-mask-size: 63% 73%, 100%;\n          mask-size: 63% 73%, 100%;\n  /* -------------------------------------------------------------------------- */\n  /*                                   Mobile                                   */\n  /* -------------------------------------------------------------------------- */\n}\n#VideoWrapper .rouletteMask.isMobileDevice {\n  left: 50%;\n  aspect-ratio: 1/1.22;\n  background-size: 115%;\n  height: unset;\n  width: 240%;\n  top: -16.5%;\n  transform: translateX(-50%);\n  -webkit-mask-position: center 6%;\n          mask-position: center 6%;\n  -webkit-mask-size: 41% 18.5%, 100%;\n          mask-size: 41% 18.5%, 100%;\n}\n#VideoWrapper .rouletteMask--full {\n  -webkit-mask-composite: unset;\n          mask-composite: unset;\n  -webkit-mask-image: none;\n          mask-image: none;\n}.winChipRim::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1000;\n  inset: 0;\n  padding: 0.25rem;\n  border-radius: 9999px;\n  background: var(--win-chip-rim, linear-gradient(180deg, #ece9e1, #afa483));\n  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 0.12rem), black 0);\n  mask: radial-gradient(farthest-side, transparent calc(100% - 0.12rem), black 0);\n}\n@media (max-width: 768px) {\n  .winChipRim::before {\n    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 0.1rem), black 0);\n    mask: radial-gradient(farthest-side, transparent calc(100% - 0.08rem), black 0);\n  }\n}\n\n.g-chip {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 1/1;\n  font-size: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  will-change: transform;\n  z-index: 10;\n  /* -------------------------------------------------------------------------- */\n  /*                               Chip 3D effect                               */\n  /* -------------------------------------------------------------------------- */\n}\n.g-chip .stroke,\n.g-chip .text {\n  position: absolute;\n  font-weight: 700;\n  font-family: \"Pill Gothic\";\n  margin-top: 8%;\n  margin-right: 3%;\n  width: 4rem;\n  pointer-events: none;\n}\n.g-chip .text {\n  background: linear-gradient(180deg, #3d3f40 28.57%, #0d0d0d 64.29%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  z-index: 1;\n  letter-spacing: -0.05rem;\n}\n.g-chip .stroke {\n  letter-spacing: -0.0563rem;\n  -webkit-text-stroke: 0.125rem #e7e6de;\n}\n.g-chip .chipImg,\n.g-chip .chipImgBack,\n.g-chip .chipImgFront {\n  width: 100%;\n  height: 100%;\n  aspect-ratio: 1/1;\n  max-width: none;\n  position: absolute;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n.g-chip .chipImg .chipImgBack,\n.g-chip .chipImg .chipImgFront {\n  transform: translateY(0) scale(1);\n}\n.g-chip.isDisabled .text {\n  background: linear-gradient(180deg, #3d3f40 28.57%, #494949 64.29%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.g-chip.isDisabled .stroke {\n  display: none;\n}\n.g-chip.isPressed {\n  transform: scale(1.167);\n}\n.g-chip.chipTrayChip {\n  transition: transform 120ms ease-out;\n}\n.g-chip.is3D {\n  transition: transform 1s;\n}\n.g-chip .chipImg,\n.g-chip .chipImgBack,\n.g-chip .chipImgFront,\n.g-chip .stroke,\n.g-chip .text {\n  transition: transform 1s, filter 1s;\n}\n.g-chip.is3D.isLoadingFinished {\n  transform: skewX(var(--chipSkewXDeg));\n}\n.g-chip.is3D.isLoadingFinished .chipImg .chipImgFront {\n  transform: translateY(-4%) scale(1, 0.875);\n}\n.g-chip.is3D.isLoadingFinished .chipImg .chipImgBack {\n  transform: translateY(7%) scale(1, 0.875);\n}\n.g-chip.is3D.isLoadingFinished .stroke, .g-chip.is3D.isLoadingFinished .text {\n  transform: translateY(-5%);\n}\n.g-chip.is3D.isLoadingFinished.isSicbo, .g-chip.is3D.isLoadingFinished.isSicbo .chipImg .chipImgBack, .g-chip.is3D.isLoadingFinished.isSicbo .chipImg .chipImgFront, .g-chip.is3D.isLoadingFinished.isSicbo .stroke, .g-chip.is3D.isLoadingFinished.isSicbo .text {\n  transition-delay: 0.5s;\n}\n.g-chip.is3D.isLoadingFinished .chipImg .chipImgBack {\n  filter: drop-shadow(0 0.125rem 0 rgba(0, 0, 0, 0.1)) drop-shadow(0 0.25rem 0 rgba(0, 0, 0, 0.1)) drop-shadow(0 0.1rem 0.1rem rgba(0, 0, 0, 0.29));\n}.tooltipContainer {\n  pointer-events: none;\n  position: relative;\n  display: flex;\n  text-align: center;\n  padding: 0.3rem 0.7rem;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  width: -webkit-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  background: linear-gradient(180deg, #252525 0%, #101010 100%) padding-box, linear-gradient(180deg, #3e3e3e 0%, #101010 100%) border-box;\n  border: 0.063rem solid transparent;\n  font-size: 0.75rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1rem;\n}\n\n.tooltip {\n  background-color: #f4efe8;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-transform: capitalize;\n}\n\n.tooltipArrow {\n  width: 0.4rem;\n  height: 0.4rem;\n  position: absolute;\n  border-top: 0.06rem solid transparent;\n  border-left: 0.06rem solid transparent;\n  border-radius: 0.05rem;\n}\n.tooltipArrow.top {\n  background: linear-gradient(147deg, #1f1f1f 0%, rgba(0, 0, 0, 0.19) 100%) padding-box, linear-gradient(132deg, #545454 0%, #1d1a1a 100%) border-box;\n  top: -0.21rem;\n  rotate: 45deg;\n  -webkit-clip-path: polygon(0% 0%, 110% 0%, 0% 110%);\n          clip-path: polygon(0% 0%, 110% 0%, 0% 110%);\n}\n.tooltipArrow.top-end {\n  background: linear-gradient(147deg, #1f1f1f 0%, rgba(0, 0, 0, 0.19) 100%) padding-box, linear-gradient(132deg, #545454 0%, #1d1a1a 100%) border-box;\n  right: 1rem;\n  top: -0.21rem;\n  rotate: 45deg;\n  -webkit-clip-path: polygon(0% 0%, 110% 0%, 0% 110%);\n          clip-path: polygon(0% 0%, 110% 0%, 0% 110%);\n}\n.tooltipArrow.bottom {\n  background: linear-gradient(250deg, rgba(20, 20, 20, 0.87) 0%, rgba(16, 16, 16, 0.86) 100%) padding-box, linear-gradient(133deg, #2e2e2e 0%, rgba(0, 0, 0, 0.63) 100%) border-box;\n  rotate: 225deg;\n  bottom: -0.21rem;\n}\n.tooltipArrow.right {\n  background: linear-gradient(56deg, rgb(33, 33, 33) 0%, rgb(22, 22, 22) 100%) padding-box, linear-gradient(127deg, #424242 0%, rgba(0, 0, 0, 0.64) 100%) border-box;\n  rotate: 135deg;\n  right: -0.19rem;\n  -webkit-clip-path: polygon(-1% -1%, 110% -1%, -1% 110%);\n          clip-path: polygon(-1% -1%, 110% -1%, -1% 110%);\n}\n.tooltipArrow.left {\n  background: linear-gradient(272deg, rgba(22, 27, 23, 0.78) 0%, rgb(18, 22, 18) 100%) padding-box, linear-gradient(150deg, #3f3d3d 0%, rgba(38, 38, 38, 0.63) 100%) border-box;\n  rotate: 315deg;\n  left: -0.2rem;\n  -webkit-clip-path: polygon(-1% -1%, 110% -1%, -1% 110%);\n          clip-path: polygon(-1% -1%, 110% -1%, -1% 110%);\n}.SquareButton {\n  overflow: hidden;\n  cursor: pointer;\n}\n.SquareButton .defaultType {\n  opacity: 1;\n}\n.SquareButton .hoverType {\n  opacity: 0;\n}\n\n.defaultType,\n.hoverType {\n  position: absolute;\n  top: 0;\n  transition: opacity 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(0.125rem);\n          backdrop-filter: blur(0.125rem);\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(180deg, rgba(251, 251, 251, 0.1) 0%, rgba(197, 197, 197, 0.05) 100%);\n}\n.defaultType > svg,\n.hoverType > svg {\n  height: 1.75rem;\n  width: 1.75rem;\n}\n.defaultType::after,\n.hoverType::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  padding: 0.0625rem;\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n\n.defaultType::after {\n  background: conic-gradient(from 180deg at 50% 50%, rgba(122, 107, 89, 0.2) 16%, rgba(118, 105, 80, 0.2) 31%, rgba(181, 174, 161, 0.2) 41%, rgba(118, 105, 80, 0.2) 50%, rgba(122, 107, 89, 0.2) 65%, rgba(150, 146, 145, 0.2) 90%);\n}\n.defaultType.isGhost {\n  background: transparent;\n}\n.defaultType.isGhost::after {\n  background: transparent;\n}\n\n.hoverType::after {\n  background: linear-gradient(180deg, rgba(236, 233, 225, 0.5) 0%, rgba(175, 164, 131, 0.5) 100%), conic-gradient(from 180deg at 50% 50%, rgba(122, 107, 89, 0.2) 58.5179740191deg, rgba(118, 105, 80, 0.2) 110.657762289deg, rgba(181, 174, 161, 0.2) 147.494276762deg, rgba(118, 105, 80, 0.2) 180.3193974495deg, rgba(122, 107, 89, 0.2) 232.3237395287deg, rgba(150, 146, 145, 0.2) 325.2996397018deg);\n}\n.hoverType svg path {\n  fill: #f5f4f0;\n}\n\n.autoPlayActive .SquareButton .defaultType,\n.active .SquareButton .defaultType {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.autoPlayActive .SquareButton .hoverType,\n.active .SquareButton .hoverType {\n  opacity: 1;\n}\n\n.inactive .SquareButton .defaultType {\n  opacity: 1;\n}\n.inactive .SquareButton .hoverType {\n  opacity: 0;\n}\n\n.autoPlayActive .SquareButton svg path {\n  fill: revert-layer;\n}\n\n.roundRemaining {\n  background: linear-gradient(180deg, #fffaf5 0%, #baa284 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  letter-spacing: 0.02rem;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports({
          F: ToastList,
          J: Tooltip,
          M: MainBgImage,
          R: RouletteVideoStream,
          d: Clock,
          h: ChatHeader,
          j: GameLimit,
          p: useBoardHighlight,
          t: ActiveStateWrapper,
          u: usePreventPullToRefresh,
          v: AnimateCounter
        });
        const ConnectionIcon = () => {
          const [counter, setCounter] = reactExports.useState(1);
          reactExports.useEffect(() => {
            const interval = setInterval(() => {
              setCounter(prev => prev + 1);
              if (counter >= 4) setCounter(0);
            }, 300);
            return () => clearInterval(interval);
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-12 w-12",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M2.74256 16.2868C14.4583 4.57107 33.4532 4.57107 45.169 16.2868C45.7547 16.8726 45.7548 17.8223 45.169 18.4081L44.1084 19.4688C43.827 19.7501 43.4455 19.9082 43.0477 19.9082C42.6498 19.9082 42.2683 19.7502 41.987 19.4689C32.0286 9.5105 15.8829 9.5105 5.92454 19.4689C5.64323 19.7502 5.26169 19.9082 4.86385 19.9082C4.46602 19.9082 4.08448 19.7501 3.80318 19.4688L2.74252 18.4081C2.15677 17.8223 2.15679 16.8726 2.74256 16.2868ZM9.10652 22.6509C17.3075 14.4499 30.604 14.4499 38.805 22.6509C39.3908 23.2366 39.3908 24.1864 38.805 24.7722L37.7444 25.8328C37.4631 26.1141 37.0816 26.2722 36.6838 26.2722C36.2859 26.2722 35.9044 26.1142 35.6231 25.8328C29.1794 19.3892 18.7322 19.3892 12.2885 25.8328C11.7028 26.4186 10.753 26.4186 10.1672 25.8329L9.10654 24.7722C8.82523 24.4909 8.66719 24.1094 8.66718 23.7115C8.66718 23.3137 8.82522 22.9322 9.10652 22.6509ZM15.5147 29.0147C20.2009 24.3284 27.7989 24.3284 32.4852 29.0147C33.071 29.6005 33.071 30.5503 32.4852 31.136L31.4246 32.1967C31.1433 32.478 30.7617 32.636 30.3639 32.636C29.9661 32.636 29.5845 32.478 29.3032 32.1967C26.3743 29.2678 21.6256 29.2678 18.6966 32.1967C18.1109 32.7825 17.1611 32.7825 16.5753 32.1967L15.5147 31.136C14.9289 30.5503 14.9289 29.6005 15.5147 29.0147ZM21.8786 35.3787C23.0502 34.2071 24.9497 34.2071 26.1213 35.3787C26.707 35.9645 26.7071 36.9142 26.1213 37.5L25.0606 38.5607C24.7793 38.842 24.3978 39 23.9999 39C23.6021 39 23.2206 38.842 22.9393 38.5607L21.8786 37.5C21.2928 36.9142 21.2928 35.9645 21.8786 35.3787Z",
              fill: counter < 4 ? "#434343" : "#EADFD2"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M8.93934 22.6508C17.1404 14.4497 30.4368 14.4497 38.6378 22.6508C39.2236 23.2365 39.2236 24.1863 38.6378 24.7721L37.5772 25.8327C37.2959 26.114 36.9144 26.2721 36.5166 26.2721C36.1187 26.2721 35.7372 26.114 35.4559 25.8327C29.0122 19.3891 18.565 19.3891 12.1214 25.8327C11.5356 26.4185 10.5859 26.4185 10.0001 25.8328L8.93936 24.7721C8.65805 24.4908 8.5 24.1093 8.5 23.7114C8.5 23.3136 8.65803 22.9321 8.93934 22.6508Z",
              fill: counter < 3 ? "#434343" : "#EADFD2"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M15.4393 29.0147C20.1256 24.3284 27.7236 24.3284 32.4099 29.0147C32.9957 29.6005 32.9957 30.5503 32.4099 31.136L31.3492 32.1967C31.0679 32.478 30.6864 32.636 30.2886 32.636C29.8908 32.636 29.5092 32.478 29.2279 32.1967C26.299 29.2678 21.5503 29.2678 18.6213 32.1967C18.0355 32.7825 17.0858 32.7825 16.5 32.1967L15.4393 31.136C14.8536 30.5503 14.8536 29.6005 15.4393 29.0147Z",
              fill: counter < 2 ? "#434343" : "#EADFD2"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M21.9393 35.3787C23.1109 34.2071 25.0104 34.2071 26.182 35.3787C26.7678 35.9645 26.7678 36.9142 26.182 37.5L25.1213 38.5607C24.84 38.842 24.4585 39 24.0607 39C23.6628 39 23.2813 38.842 23 38.5607L21.9393 37.5C21.3536 36.9142 21.3536 35.9645 21.9393 35.3787Z",
              fill: counter < 1 ? "#434343" : "#EADFD2"
            })]
          });
        };
        function NetworkStateModal(props) {
          const {
            isCloseServer
          } = props;
          const {
            t
          } = useTranslation();
          const isPixiLoading = useLayoutStore(s => s.isPixiLoading);
          const isConnected = useNetworkStore(state => state.isConnected);
          if (isCloseServer) return null;
          if (isConnected && !isPixiLoading) return null;
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "NetworkStateModal",
            className: "absolute left-0 top-0 z-[100] size-full",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "wrap center size-full flex-col gap-2",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(ConnectionIcon, {}), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "info",
                children: t("COMMON.RECONNECTING")
              })]
            })
          });
        }
        const NetworkStateModal$1 = exports("H", reactExports.memo(NetworkStateModal));
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
            value: 0.3
          },
          // { sec: 585 * fps, value: 0.6 },
          {
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
        function initTextAlphaKeyframes(fps) {
          return [{
            sec: 0,
            value: 1
          }, {
            sec: 30 * fps,
            value: 1
          }, {
            sec: 60 * fps,
            value: 1
          }, {
            sec: 90 * fps,
            value: 1
          }, {
            sec: 120 * fps,
            value: 1
          }, {
            sec: 150 * fps,
            value: 1
          }, {
            sec: 180 * fps,
            value: 1
          }, {
            sec: 210 * fps,
            value: 1
          }, {
            sec: 240 * fps,
            value: 1
          }, {
            sec: 270 * fps,
            value: 1
          }, {
            sec: 300 * fps,
            value: 1
          }, {
            sec: 330 * fps,
            value: 1
          }, {
            sec: 360 * fps,
            value: 1
          }, {
            sec: 390 * fps,
            value: 1
          }, {
            sec: 420 * fps,
            value: 1
          }, {
            sec: 450 * fps,
            value: 1
          }, {
            sec: 480 * fps,
            value: 1
          }, {
            sec: 510 * fps,
            value: 1
          }, {
            sec: 540 * fps,
            value: 1
          }, {
            sec: 570 * fps,
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
            sec: 675 * fps,
            value: 0
          }, {
            sec: 690 * fps,
            value: 0
          }, {
            sec: 720 * fps,
            value: 0
          }];
        }
        function initPlaceYourBetsAlphaKeyframes(fps) {
          return [{
            sec: 0,
            value: 1
          }, {
            sec: 30 * fps,
            value: 1
          }, {
            sec: 60 * fps,
            value: 1
          }, {
            sec: 90 * fps,
            value: 1
          }, {
            sec: 120 * fps,
            value: 1
          }, {
            sec: 150 * fps,
            value: 1
          }, {
            sec: 180 * fps,
            value: 1
          }, {
            sec: 210 * fps,
            value: 1
          }, {
            sec: 240 * fps,
            value: 1
          }, {
            sec: 270 * fps,
            value: 1
          }, {
            sec: 300 * fps,
            value: 1
          }, {
            sec: 330 * fps,
            value: 1
          }, {
            sec: 360 * fps,
            value: 1
          }, {
            sec: 370 * fps,
            value: 0
          }, {
            sec: 390 * fps,
            value: 0
          }, {
            sec: 420 * fps,
            value: 0
          }, {
            sec: 450 * fps,
            value: 0
          }, {
            sec: 480 * fps,
            value: 0
          }, {
            sec: 510 * fps,
            value: 0
          }, {
            sec: 540 * fps,
            value: 0
          }, {
            sec: 570 * fps,
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
            sec: 663 * fps,
            value: 0
          }, {
            sec: 720 * fps,
            value: 1
          }];
        }
        function initCapPositionKeyFrame(fps) {
          return [
          // Entry anim, dependent upon elapsedFromStart
          {
            sec: 0,
            value: -100
          }, {
            sec: 30 * fps,
            value: 0
          },
          // Intermediate anim, dependent upon elapsed
          {
            sec: 90 * fps,
            value: 0
          }, {
            sec: 120 * fps,
            value: 0
          }, {
            sec: 150 * fps,
            value: 0
          }, {
            sec: 180 * fps,
            value: 0
          }, {
            sec: 210 * fps,
            value: 0
          }, {
            sec: 270 * fps,
            value: 0
          }, {
            sec: 300 * fps,
            value: 0
          }, {
            sec: 330 * fps,
            value: 0
          }, {
            sec: 360 * fps,
            value: 0
          }, {
            sec: 390 * fps,
            value: 0
          }, {
            sec: 420 * fps,
            value: 0
          }, {
            sec: 450 * fps,
            value: 0
          }, {
            sec: 480 * fps,
            value: 0
          }, {
            sec: 510 * fps,
            value: 0
          }, {
            sec: 540 * fps,
            value: 0
          }, {
            sec: 570 * fps,
            value: 0
          }, {
            sec: 600 * fps,
            value: 0
          }, {
            sec: 630 * fps,
            value: 0
          }, {
            sec: 660 * fps,
            value: 0
          }, {
            sec: 690 * fps,
            value: 0
          }, {
            sec: 720 * fps,
            value: -100
          }];
        }
        function initCapMorphKeyFrame(fps) {
          return [
          // Entry anim, dependent upon elapsedFromStart
          {
            sec: 0,
            value: 0
          }, {
            sec: 33 * fps,
            value: 1
          },
          // Intermediate anim, dependent upon elapsed
          {
            sec: 60 * fps,
            value: 1
          }, {
            sec: 90 * fps,
            value: 1
          }, {
            sec: 120 * fps,
            value: 1
          }, {
            sec: 150 * fps,
            value: 1
          }, {
            sec: 180 * fps,
            value: 1
          }, {
            sec: 210 * fps,
            value: 1
          }, {
            sec: 240 * fps,
            value: 1
          }, {
            sec: 270 * fps,
            value: 1
          }, {
            sec: 300 * fps,
            value: 1
          }, {
            sec: 330 * fps,
            value: 1
          }, {
            sec: 360 * fps,
            value: 1
          }, {
            sec: 390 * fps,
            value: 1
          }, {
            sec: 420 * fps,
            value: 1
          }, {
            sec: 450 * fps,
            value: 1
          }, {
            sec: 480 * fps,
            value: 1
          }, {
            sec: 510 * fps,
            value: 1
          }, {
            sec: 540 * fps,
            value: 1
          }, {
            sec: 570 * fps,
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
            sec: 693 * fps,
            value: 0
          }, {
            sec: 720 * fps,
            value: 0
          }];
        }
        function initDesktopCapCentralMorphKeyFrame(fps) {
          return (pFactor, nFactor) => [{
            sec: 0,
            value: 7 * pFactor
          }, {
            sec: 30 * fps,
            value: 7 * pFactor
          }, {
            sec: 60 * fps,
            value: 7 * pFactor
          }, {
            sec: 90 * fps,
            value: 7 * pFactor
          }, {
            sec: 120 * fps,
            value: 7 * pFactor
          }, {
            sec: 150 * fps,
            value: 7 * pFactor
          }, {
            sec: 180 * fps,
            value: 7 * pFactor
          }, {
            sec: 210 * fps,
            value: 7 * pFactor
          }, {
            sec: 220 * fps,
            value: 7 * pFactor
          }, {
            sec: 270 * fps,
            value: 7 * pFactor
          }, {
            sec: 300 * fps,
            value: 7 * pFactor
          }, {
            sec: 330 * fps,
            value: 7 * pFactor
          }, {
            sec: 357 * fps,
            value: 7 * pFactor
          }, {
            sec: 390 * fps,
            value: 0
          }, {
            sec: 420 * fps,
            value: 0
          }, {
            sec: 450 * fps,
            value: 0
          }, {
            sec: 480 * fps,
            value: 0
          }, {
            sec: 510 * fps,
            value: 0
          }, {
            sec: 540 * fps,
            value: 0
          }, {
            sec: 570 * fps,
            value: 0
          }, {
            sec: 572 * fps,
            value: 0
          }, {
            sec: 605 * fps,
            value: 6.125 * nFactor
          }, {
            sec: 630 * fps,
            value: 6.125 * nFactor
          }, {
            sec: 660 * fps,
            value: 6.125 * nFactor
          }, {
            sec: 690 * fps,
            value: 6.125 * nFactor
          }, {
            sec: 720 * fps,
            value: 6.125 * nFactor
          }];
        }
        function initDesktopPlaceYourBetsPositKeyFrame(fps) {
          return [
          // Entry anim, dependent upon elapsedFromStart
          {
            sec: 0,
            value: -2
          },
          // { sec: 45 * fps, value: 0 }, // Place your bets
          // Intermediate anim, dependent upon elapsed
          {
            sec: 60 * fps,
            value: 0
          }, {
            sec: 90 * fps,
            value: 0
          }, {
            sec: 120 * fps,
            value: 0
          }, {
            sec: 150 * fps,
            value: 0
          }, {
            sec: 180 * fps,
            value: 0
          }, {
            sec: 210 * fps,
            value: 0
          }, {
            sec: 215 * fps,
            value: 0
          }, {
            sec: 230 * fps,
            value: 0
          }, {
            sec: 270 * fps,
            value: 0
          }, {
            sec: 300 * fps,
            value: 0
          }, {
            sec: 330 * fps,
            value: 0
          }, {
            sec: 360 * fps,
            value: 0
          },
          // Place your bets
          {
            sec: 378 * fps,
            value: 2
          },
          // 7
          {
            sec: 420 * fps,
            value: 2
          },
          // 6
          {
            sec: 720 * fps,
            value: 2
          }, {
            sec: 750 * fps,
            value: -2
          }, {
            sec: 780 * fps,
            value: -2
          }];
        }
        function initDesktopSevenPositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -2
          }, {
            sec: 45 * fps,
            value: -2
          }, {
            sec: 60 * fps,
            value: -2
          }, {
            sec: 90 * fps,
            value: -2
          }, {
            sec: 120 * fps,
            value: -2
          }, {
            sec: 150 * fps,
            value: -2
          }, {
            sec: 180 * fps,
            value: -2
          }, {
            sec: 210 * fps,
            value: -2
          }, {
            sec: 215 * fps,
            value: -2
          }, {
            sec: 230 * fps,
            value: -2
          }, {
            sec: 270 * fps,
            value: -2
          }, {
            sec: 300 * fps,
            value: -2
          }, {
            sec: 330 * fps,
            value: -2
          }, {
            sec: 372 * fps,
            value: -2
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: 0
          },
          // 7
          {
            sec: 408 * fps,
            value: 2
          },
          // 6
          {
            sec: 450 * fps,
            value: 2
          },
          // 5
          {
            sec: 480 * fps,
            value: 2
          },
          // 4
          {
            sec: 510 * fps,
            value: 2
          },
          // 3
          {
            sec: 540 * fps,
            value: 2
          },
          // 2
          {
            sec: 570 * fps,
            value: 2
          },
          // 1
          {
            sec: 600 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 2
          }, {
            sec: 750 * fps,
            value: -2
          }, {
            sec: 780 * fps,
            value: -2
          }];
        }
        function initDesktopSixPositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -2
          }, {
            sec: 45 * fps,
            value: -2
          }, {
            sec: 60 * fps,
            value: -2
          }, {
            sec: 90 * fps,
            value: -2
          }, {
            sec: 120 * fps,
            value: -2
          }, {
            sec: 150 * fps,
            value: -2
          }, {
            sec: 180 * fps,
            value: -2
          }, {
            sec: 210 * fps,
            value: -2
          }, {
            sec: 215 * fps,
            value: -2
          }, {
            sec: 230 * fps,
            value: -2
          }, {
            sec: 270 * fps,
            value: -2
          }, {
            sec: 300 * fps,
            value: -2
          }, {
            sec: 330 * fps,
            value: -2
          }, {
            sec: 360 * fps,
            value: -2
          },
          // Place your bets
          {
            sec: 402 * fps,
            value: -2
          },
          // 7
          {
            sec: 420 * fps,
            value: 0
          },
          // 6
          {
            sec: 438 * fps,
            value: 2
          },
          // 5
          {
            sec: 480 * fps,
            value: 2
          },
          // 4
          {
            sec: 510 * fps,
            value: 2
          },
          // 3
          {
            sec: 540 * fps,
            value: 2
          },
          // 2
          {
            sec: 570 * fps,
            value: 2
          },
          // 1
          {
            sec: 600 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 2
          }, {
            sec: 750 * fps,
            value: -2
          }, {
            sec: 780 * fps,
            value: -2
          }];
        }
        function initDesktopFivePositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -2
          }, {
            sec: 45 * fps,
            value: -2
          }, {
            sec: 60 * fps,
            value: -2
          }, {
            sec: 90 * fps,
            value: -2
          }, {
            sec: 120 * fps,
            value: -2
          }, {
            sec: 150 * fps,
            value: -2
          }, {
            sec: 180 * fps,
            value: -2
          }, {
            sec: 210 * fps,
            value: -2
          }, {
            sec: 215 * fps,
            value: -2
          }, {
            sec: 230 * fps,
            value: -2
          }, {
            sec: 270 * fps,
            value: -2
          }, {
            sec: 300 * fps,
            value: -2
          }, {
            sec: 330 * fps,
            value: -2
          }, {
            sec: 360 * fps,
            value: -2
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: -2
          },
          // 7
          {
            sec: 432 * fps,
            value: -2
          },
          // 6
          {
            sec: 450 * fps,
            value: 0
          },
          // 5
          {
            sec: 468 * fps,
            value: 2
          },
          // 4
          {
            sec: 510 * fps,
            value: 2
          },
          // 3
          {
            sec: 540 * fps,
            value: 2
          },
          // 2
          {
            sec: 570 * fps,
            value: 2
          },
          // 1
          {
            sec: 600 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 2
          }, {
            sec: 750 * fps,
            value: -2
          }, {
            sec: 780 * fps,
            value: -2
          }];
        }
        function initDesktopFourPositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -2
          }, {
            sec: 45 * fps,
            value: -2
          }, {
            sec: 60 * fps,
            value: -2
          }, {
            sec: 90 * fps,
            value: -2
          }, {
            sec: 120 * fps,
            value: -2
          }, {
            sec: 150 * fps,
            value: -2
          }, {
            sec: 180 * fps,
            value: -2
          }, {
            sec: 210 * fps,
            value: -2
          }, {
            sec: 215 * fps,
            value: -2
          }, {
            sec: 230 * fps,
            value: -2
          }, {
            sec: 270 * fps,
            value: -2
          }, {
            sec: 300 * fps,
            value: -2
          }, {
            sec: 330 * fps,
            value: -2
          }, {
            sec: 360 * fps,
            value: -2
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: -2
          },
          // 7
          {
            sec: 420 * fps,
            value: -2
          },
          // 6
          {
            sec: 462 * fps,
            value: -2
          },
          // 5
          {
            sec: 480 * fps,
            value: 0
          },
          // 4
          {
            sec: 498 * fps,
            value: 2
          },
          // 3
          {
            sec: 540 * fps,
            value: 2
          },
          // 2
          {
            sec: 570 * fps,
            value: 2
          },
          // 1
          {
            sec: 600 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 2
          }, {
            sec: 750 * fps,
            value: -2
          }, {
            sec: 780 * fps,
            value: -2
          }];
        }
        function initDesktopThreePositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -2
          }, {
            sec: 45 * fps,
            value: -2
          }, {
            sec: 60 * fps,
            value: -2
          }, {
            sec: 90 * fps,
            value: -2
          }, {
            sec: 120 * fps,
            value: -2
          }, {
            sec: 150 * fps,
            value: -2
          }, {
            sec: 180 * fps,
            value: -2
          }, {
            sec: 210 * fps,
            value: -2
          }, {
            sec: 215 * fps,
            value: -2
          }, {
            sec: 230 * fps,
            value: -2
          }, {
            sec: 270 * fps,
            value: -2
          }, {
            sec: 300 * fps,
            value: -2
          }, {
            sec: 330 * fps,
            value: -2
          }, {
            sec: 360 * fps,
            value: -2
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: -2
          },
          // 7
          {
            sec: 420 * fps,
            value: -2
          },
          // 6
          {
            sec: 450 * fps,
            value: -2
          },
          // 5
          {
            sec: 492 * fps,
            value: -2
          },
          // 4
          {
            sec: 510 * fps,
            value: 0
          },
          // 3
          {
            sec: 528 * fps,
            value: 2
          },
          // 2
          {
            sec: 570 * fps,
            value: 2
          },
          // 1
          {
            sec: 600 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 2
          }, {
            sec: 750 * fps,
            value: -2
          }, {
            sec: 780 * fps,
            value: -2
          }];
        }
        function initDesktopTwoPositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -2
          }, {
            sec: 45 * fps,
            value: -2
          }, {
            sec: 60 * fps,
            value: -2
          }, {
            sec: 90 * fps,
            value: -2
          }, {
            sec: 120 * fps,
            value: -2
          }, {
            sec: 150 * fps,
            value: -2
          }, {
            sec: 180 * fps,
            value: -2
          }, {
            sec: 210 * fps,
            value: -2
          }, {
            sec: 215 * fps,
            value: -2
          }, {
            sec: 230 * fps,
            value: -2
          }, {
            sec: 270 * fps,
            value: -2
          }, {
            sec: 300 * fps,
            value: -2
          }, {
            sec: 330 * fps,
            value: -2
          }, {
            sec: 360 * fps,
            value: -2
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: -2
          },
          // 7
          {
            sec: 420 * fps,
            value: -2
          },
          // 6
          {
            sec: 450 * fps,
            value: -2
          },
          // 5
          {
            sec: 480 * fps,
            value: -2
          },
          // 4
          {
            sec: 522 * fps,
            value: -2
          },
          // 3
          {
            sec: 540 * fps,
            value: 0
          },
          // 2
          {
            sec: 558 * fps,
            value: 2
          },
          // 1
          {
            sec: 600 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 2
          }, {
            sec: 750 * fps,
            value: -2
          }, {
            sec: 780 * fps,
            value: -2
          }];
        }
        function initDesktopOnePositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -2
          }, {
            sec: 45 * fps,
            value: -2
          }, {
            sec: 60 * fps,
            value: -2
          }, {
            sec: 90 * fps,
            value: -2
          }, {
            sec: 120 * fps,
            value: -2
          }, {
            sec: 150 * fps,
            value: -2
          }, {
            sec: 180 * fps,
            value: -2
          }, {
            sec: 210 * fps,
            value: -2
          }, {
            sec: 215 * fps,
            value: -2
          }, {
            sec: 230 * fps,
            value: -2
          }, {
            sec: 270 * fps,
            value: -2
          }, {
            sec: 300 * fps,
            value: -2
          }, {
            sec: 330 * fps,
            value: -2
          }, {
            sec: 360 * fps,
            value: -2
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: -2
          },
          // 7
          {
            sec: 420 * fps,
            value: -2
          },
          // 6
          {
            sec: 450 * fps,
            value: -2
          },
          // 5
          {
            sec: 480 * fps,
            value: -2
          },
          // 4
          {
            sec: 510 * fps,
            value: -2
          },
          // 3
          {
            sec: 552 * fps,
            value: -2
          },
          // 2
          {
            sec: 570 * fps,
            value: 0
          },
          // 1
          {
            sec: 588 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 2
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 2
          }, {
            sec: 750 * fps,
            value: -2
          }, {
            sec: 780 * fps,
            value: -2
          }];
        }
        function initDesktopNoMoreBetsPositKeyFrame(fps) {
          return [
          // Entry anim, dependent upon elapsedFromStart
          {
            sec: 0,
            value: -2
          }, {
            sec: 45 * fps,
            value: -2
          }, {
            sec: 60 * fps,
            value: -2
          }, {
            sec: 90 * fps,
            value: -2
          }, {
            sec: 120 * fps,
            value: -2
          }, {
            sec: 150 * fps,
            value: -2
          }, {
            sec: 180 * fps,
            value: -2
          }, {
            sec: 210 * fps,
            value: -2
          }, {
            sec: 215 * fps,
            value: -2
          }, {
            sec: 230 * fps,
            value: -2
          }, {
            sec: 270 * fps,
            value: -2
          }, {
            sec: 300 * fps,
            value: -2
          }, {
            sec: 330 * fps,
            value: -2
          }, {
            sec: 360 * fps,
            value: -2
          }, {
            sec: 390 * fps,
            value: -2
          },
          // 7
          {
            sec: 420 * fps,
            value: -2
          },
          // 6
          {
            sec: 450 * fps,
            value: -2
          },
          // 5
          {
            sec: 480 * fps,
            value: -2
          },
          // 4
          {
            sec: 510 * fps,
            value: -2
          },
          // 3
          {
            sec: 540 * fps,
            value: -2
          },
          // 2
          {
            sec: 582 * fps,
            value: -2
          },
          // 1
          {
            sec: 600 * fps,
            value: 0
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 0
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 0
          },
          // No more bets
          {
            sec: 680 * fps,
            value: 2
          }, {
            sec: 720 * fps,
            value: 2
          }, {
            sec: 750 * fps,
            value: -2
          }, {
            sec: 780 * fps,
            value: -2
          }];
        }
        function initMobileCapCentralMorphKeyFrame(fps) {
          return (pFactor, nFactor) => [{
            sec: 0,
            value: 6.25 * pFactor
          }, {
            sec: 30 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 60 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 90 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 120 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 150 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 180 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 210 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 220 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 270 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 300 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 330 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 357 * fps,
            value: 6.25 * pFactor
          }, {
            sec: 390 * fps,
            value: 0
          }, {
            sec: 420 * fps,
            value: 0
          }, {
            sec: 450 * fps,
            value: 0
          }, {
            sec: 480 * fps,
            value: 0
          }, {
            sec: 510 * fps,
            value: 0
          }, {
            sec: 540 * fps,
            value: 0
          }, {
            sec: 572 * fps,
            value: 0
          }, {
            sec: 605 * fps,
            value: 5.813 * nFactor
          }, {
            sec: 600 * fps,
            value: 5.813 * nFactor
          }, {
            sec: 630 * fps,
            value: 5.813 * nFactor
          }, {
            sec: 660 * fps,
            value: 5.813 * nFactor
          }, {
            sec: 690 * fps,
            value: 5.813 * nFactor
          }, {
            sec: 720 * fps,
            value: 5.813 * nFactor
          }];
        }
        function initMobilePlaceYourBetsPositKeyFrame(fps) {
          return [
          // Entry anim, dependent upon elapsedFromStart
          {
            sec: 0,
            value: -1.3
          },
          // { sec: 45 * fps, value: 0 }, // Place your bets
          // Intermediate anim, dependent upon elapsed
          {
            sec: 60 * fps,
            value: 0
          }, {
            sec: 90 * fps,
            value: 0
          }, {
            sec: 120 * fps,
            value: 0
          }, {
            sec: 150 * fps,
            value: 0
          }, {
            sec: 180 * fps,
            value: 0
          }, {
            sec: 210 * fps,
            value: 0
          }, {
            sec: 215 * fps,
            value: 0
          }, {
            sec: 230 * fps,
            value: 0
          }, {
            sec: 270 * fps,
            value: 0
          }, {
            sec: 300 * fps,
            value: 0
          }, {
            sec: 330 * fps,
            value: 0
          }, {
            sec: 360 * fps,
            value: 0
          },
          // Place your bets
          {
            sec: 378 * fps,
            value: 1.3
          },
          // 7
          {
            sec: 420 * fps,
            value: 1.3
          },
          // 6
          {
            sec: 720 * fps,
            value: 1.3
          }, {
            sec: 750 * fps,
            value: -1.3
          }, {
            sec: 780 * fps,
            value: -1.3
          }];
        }
        function initMobileSevenPositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -1.3
          }, {
            sec: 45 * fps,
            value: -1.3
          }, {
            sec: 60 * fps,
            value: -1.3
          }, {
            sec: 90 * fps,
            value: -1.3
          }, {
            sec: 120 * fps,
            value: -1.3
          }, {
            sec: 150 * fps,
            value: -1.3
          }, {
            sec: 180 * fps,
            value: -1.3
          }, {
            sec: 210 * fps,
            value: -1.3
          }, {
            sec: 215 * fps,
            value: -1.3
          }, {
            sec: 230 * fps,
            value: -1.3
          }, {
            sec: 270 * fps,
            value: -1.3
          }, {
            sec: 300 * fps,
            value: -1.3
          }, {
            sec: 330 * fps,
            value: -1.3
          }, {
            sec: 372 * fps,
            value: -1.3
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: 0
          },
          // 7
          {
            sec: 408 * fps,
            value: 1.3
          },
          // 6
          {
            sec: 450 * fps,
            value: 1.3
          },
          // 5
          {
            sec: 480 * fps,
            value: 1.3
          },
          // 4
          {
            sec: 510 * fps,
            value: 1.3
          },
          // 3
          {
            sec: 540 * fps,
            value: 1.3
          },
          // 2
          {
            sec: 570 * fps,
            value: 1.3
          },
          // 1
          {
            sec: 600 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 1.3
          }, {
            sec: 750 * fps,
            value: -1.3
          }, {
            sec: 780 * fps,
            value: -1.3
          }];
        }
        function initMobileSixPositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -1.3
          }, {
            sec: 45 * fps,
            value: -1.3
          }, {
            sec: 60 * fps,
            value: -1.3
          }, {
            sec: 90 * fps,
            value: -1.3
          }, {
            sec: 120 * fps,
            value: -1.3
          }, {
            sec: 150 * fps,
            value: -1.3
          }, {
            sec: 180 * fps,
            value: -1.3
          }, {
            sec: 210 * fps,
            value: -1.3
          }, {
            sec: 215 * fps,
            value: -1.3
          }, {
            sec: 230 * fps,
            value: -1.3
          }, {
            sec: 270 * fps,
            value: -1.3
          }, {
            sec: 300 * fps,
            value: -1.3
          }, {
            sec: 330 * fps,
            value: -1.3
          }, {
            sec: 360 * fps,
            value: -1.3
          },
          // Place your bets
          {
            sec: 402 * fps,
            value: -1.3
          },
          // 7
          {
            sec: 420 * fps,
            value: 0
          },
          // 6
          {
            sec: 438 * fps,
            value: 1.3
          },
          // 5
          {
            sec: 480 * fps,
            value: 1.3
          },
          // 4
          {
            sec: 510 * fps,
            value: 1.3
          },
          // 3
          {
            sec: 540 * fps,
            value: 1.3
          },
          // 2
          {
            sec: 570 * fps,
            value: 1.3
          },
          // 1
          {
            sec: 600 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 1.3
          }, {
            sec: 750 * fps,
            value: -1.3
          }, {
            sec: 780 * fps,
            value: -1.3
          }];
        }
        function initMobileFivePositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -1.3
          }, {
            sec: 45 * fps,
            value: -1.3
          }, {
            sec: 60 * fps,
            value: -1.3
          }, {
            sec: 90 * fps,
            value: -1.3
          }, {
            sec: 120 * fps,
            value: -1.3
          }, {
            sec: 150 * fps,
            value: -1.3
          }, {
            sec: 180 * fps,
            value: -1.3
          }, {
            sec: 210 * fps,
            value: -1.3
          }, {
            sec: 215 * fps,
            value: -1.3
          }, {
            sec: 230 * fps,
            value: -1.3
          }, {
            sec: 270 * fps,
            value: -1.3
          }, {
            sec: 300 * fps,
            value: -1.3
          }, {
            sec: 330 * fps,
            value: -1.3
          }, {
            sec: 360 * fps,
            value: -1.3
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: -1.3
          },
          // 7
          {
            sec: 432 * fps,
            value: -1.3
          },
          // 6
          {
            sec: 450 * fps,
            value: 0
          },
          // 5
          {
            sec: 468 * fps,
            value: 1.3
          },
          // 4
          {
            sec: 510 * fps,
            value: 1.3
          },
          // 3
          {
            sec: 540 * fps,
            value: 1.3
          },
          // 2
          {
            sec: 570 * fps,
            value: 1.3
          },
          // 1
          {
            sec: 600 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 1.3
          }, {
            sec: 750 * fps,
            value: -1.3
          }, {
            sec: 780 * fps,
            value: -1.3
          }];
        }
        function initMobileFourPositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -1.3
          }, {
            sec: 45 * fps,
            value: -1.3
          }, {
            sec: 60 * fps,
            value: -1.3
          }, {
            sec: 90 * fps,
            value: -1.3
          }, {
            sec: 120 * fps,
            value: -1.3
          }, {
            sec: 150 * fps,
            value: -1.3
          }, {
            sec: 180 * fps,
            value: -1.3
          }, {
            sec: 210 * fps,
            value: -1.3
          }, {
            sec: 215 * fps,
            value: -1.3
          }, {
            sec: 230 * fps,
            value: -1.3
          }, {
            sec: 270 * fps,
            value: -1.3
          }, {
            sec: 300 * fps,
            value: -1.3
          }, {
            sec: 330 * fps,
            value: -1.3
          }, {
            sec: 360 * fps,
            value: -1.3
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: -1.3
          },
          // 7
          {
            sec: 420 * fps,
            value: -1.3
          },
          // 6
          {
            sec: 462 * fps,
            value: -1.3
          },
          // 5
          {
            sec: 480 * fps,
            value: 0
          },
          // 4
          {
            sec: 498 * fps,
            value: 1.3
          },
          // 3
          {
            sec: 540 * fps,
            value: 1.3
          },
          // 2
          {
            sec: 570 * fps,
            value: 1.3
          },
          // 1
          {
            sec: 600 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 1.3
          }, {
            sec: 750 * fps,
            value: -1.3
          }, {
            sec: 780 * fps,
            value: -1.3
          }];
        }
        function initMobileThreePositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -1.3
          }, {
            sec: 45 * fps,
            value: -1.3
          }, {
            sec: 60 * fps,
            value: -1.3
          }, {
            sec: 90 * fps,
            value: -1.3
          }, {
            sec: 120 * fps,
            value: -1.3
          }, {
            sec: 150 * fps,
            value: -1.3
          }, {
            sec: 180 * fps,
            value: -1.3
          }, {
            sec: 210 * fps,
            value: -1.3
          }, {
            sec: 215 * fps,
            value: -1.3
          }, {
            sec: 230 * fps,
            value: -1.3
          }, {
            sec: 270 * fps,
            value: -1.3
          }, {
            sec: 300 * fps,
            value: -1.3
          }, {
            sec: 330 * fps,
            value: -1.3
          }, {
            sec: 360 * fps,
            value: -1.3
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: -1.3
          },
          // 7
          {
            sec: 420 * fps,
            value: -1.3
          },
          // 6
          {
            sec: 450 * fps,
            value: -1.3
          },
          // 5
          {
            sec: 492 * fps,
            value: -1.3
          },
          // 4
          {
            sec: 510 * fps,
            value: 0
          },
          // 3
          {
            sec: 528 * fps,
            value: 1.3
          },
          // 2
          {
            sec: 570 * fps,
            value: 1.3
          },
          // 1
          {
            sec: 600 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 1.3
          }, {
            sec: 750 * fps,
            value: -1.3
          }, {
            sec: 780 * fps,
            value: -1.3
          }];
        }
        function initMobileTwoPositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -1.3
          }, {
            sec: 45 * fps,
            value: -1.3
          }, {
            sec: 60 * fps,
            value: -1.3
          }, {
            sec: 90 * fps,
            value: -1.3
          }, {
            sec: 120 * fps,
            value: -1.3
          }, {
            sec: 150 * fps,
            value: -1.3
          }, {
            sec: 180 * fps,
            value: -1.3
          }, {
            sec: 210 * fps,
            value: -1.3
          }, {
            sec: 215 * fps,
            value: -1.3
          }, {
            sec: 230 * fps,
            value: -1.3
          }, {
            sec: 270 * fps,
            value: -1.3
          }, {
            sec: 300 * fps,
            value: -1.3
          }, {
            sec: 330 * fps,
            value: -1.3
          }, {
            sec: 360 * fps,
            value: -1.3
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: -1.3
          },
          // 7
          {
            sec: 420 * fps,
            value: -1.3
          },
          // 6
          {
            sec: 450 * fps,
            value: -1.3
          },
          // 5
          {
            sec: 480 * fps,
            value: -1.3
          },
          // 4
          {
            sec: 522 * fps,
            value: -1.3
          },
          // 3
          {
            sec: 540 * fps,
            value: 0
          },
          // 2
          {
            sec: 558 * fps,
            value: 1.3
          },
          // 1
          {
            sec: 600 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 1.3
          }, {
            sec: 750 * fps,
            value: -1.3
          }, {
            sec: 780 * fps,
            value: -1.3
          }];
        }
        function initMobileOnePositKeyFrame(fps) {
          return [{
            sec: 0,
            value: -1.3
          }, {
            sec: 45 * fps,
            value: -1.3
          }, {
            sec: 60 * fps,
            value: -1.3
          }, {
            sec: 90 * fps,
            value: -1.3
          }, {
            sec: 120 * fps,
            value: -1.3
          }, {
            sec: 150 * fps,
            value: -1.3
          }, {
            sec: 180 * fps,
            value: -1.3
          }, {
            sec: 210 * fps,
            value: -1.3
          }, {
            sec: 215 * fps,
            value: -1.3
          }, {
            sec: 230 * fps,
            value: -1.3
          }, {
            sec: 270 * fps,
            value: -1.3
          }, {
            sec: 300 * fps,
            value: -1.3
          }, {
            sec: 330 * fps,
            value: -1.3
          }, {
            sec: 360 * fps,
            value: -1.3
          },
          // Place your bets
          {
            sec: 390 * fps,
            value: -1.3
          },
          // 7
          {
            sec: 420 * fps,
            value: -1.3
          },
          // 6
          {
            sec: 450 * fps,
            value: -1.3
          },
          // 5
          {
            sec: 480 * fps,
            value: -1.3
          },
          // 4
          {
            sec: 510 * fps,
            value: -1.3
          },
          // 3
          {
            sec: 552 * fps,
            value: -1.3
          },
          // 2
          {
            sec: 570 * fps,
            value: 0
          },
          // 1
          {
            sec: 588 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 1.3
          },
          // No more bets
          {
            sec: 720 * fps,
            value: 1.3
          }, {
            sec: 750 * fps,
            value: -1.3
          }, {
            sec: 780 * fps,
            value: -1.3
          }];
        }
        function initMobileNoMoreBetsPositKeyFrame(fps) {
          return [
          // Entry anim, dependent upon elapsedFromStart
          {
            sec: 0,
            value: -1.3
          }, {
            sec: 45 * fps,
            value: -1.3
          }, {
            sec: 60 * fps,
            value: -1.3
          }, {
            sec: 90 * fps,
            value: -1.3
          }, {
            sec: 120 * fps,
            value: -1.3
          }, {
            sec: 150 * fps,
            value: -1.3
          }, {
            sec: 180 * fps,
            value: -1.3
          }, {
            sec: 210 * fps,
            value: -1.3
          }, {
            sec: 215 * fps,
            value: -1.3
          }, {
            sec: 230 * fps,
            value: -1.3
          }, {
            sec: 270 * fps,
            value: -1.3
          }, {
            sec: 300 * fps,
            value: -1.3
          }, {
            sec: 330 * fps,
            value: -1.3
          }, {
            sec: 360 * fps,
            value: -1.3
          }, {
            sec: 390 * fps,
            value: -1.3
          },
          // 7
          {
            sec: 420 * fps,
            value: -1.3
          },
          // 6
          {
            sec: 450 * fps,
            value: -1.3
          },
          // 5
          {
            sec: 480 * fps,
            value: -1.3
          },
          // 4
          {
            sec: 510 * fps,
            value: -1.3
          },
          // 3
          {
            sec: 540 * fps,
            value: -1.3
          },
          // 2
          {
            sec: 582 * fps,
            value: -1.3
          },
          // 1
          {
            sec: 600 * fps,
            value: 0
          },
          // No more bets
          {
            sec: 630 * fps,
            value: 0
          },
          // No more bets
          {
            sec: 660 * fps,
            value: 0
          },
          // No more bets
          {
            sec: 680 * fps,
            value: 1.3
          }, {
            sec: 720 * fps,
            value: 1.3
          }, {
            sec: 750 * fps,
            value: -1.3
          }, {
            sec: 780 * fps,
            value: -1.3
          }];
        }
        const CAP_CENTRAL_MORPH_KEY_FRAMES = isMobileDevice ? initMobileCapCentralMorphKeyFrame(ONE_FRAME_TIME_SEC) : initDesktopCapCentralMorphKeyFrame(ONE_FRAME_TIME_SEC);
        const CAP_POSITION_KEY_FRAMES = initCapPositionKeyFrame(ONE_FRAME_TIME_SEC);
        const CAP_MORPH_KEY_FRAMES = initCapMorphKeyFrame(ONE_FRAME_TIME_SEC);
        const GREEN_KEY_FRAMES = initGreenKeyFrame(ONE_FRAME_TIME_SEC);
        const YELLOW_KEY_FRAMES = initYellowKeyFrame(ONE_FRAME_TIME_SEC);
        const RED_KEY_FRAMES = initRedKeyFrame(ONE_FRAME_TIME_SEC);
        const assetMap = {
          green: {
            left: isMobileDevice ? mobileCapLeftGreen : desktopCapLeftGreen,
            central: isMobileDevice ? mobileCapCentralGreen : desktopCapCentralGreen,
            right: isMobileDevice ? mobileCapRightGreen : desktopCapRightGreen
          },
          yellow: {
            left: isMobileDevice ? mobileCapLeftYellow : desktopCapLeftYellow,
            central: isMobileDevice ? mobileCapCentralYellow : desktopCapCentralYellow,
            right: isMobileDevice ? mobileCapRightYellow : desktopCapRightYellow
          },
          red: {
            left: isMobileDevice ? mobileCapLeftRed : desktopCapLeftRed,
            central: isMobileDevice ? mobileCapCentralRed : desktopCapCentralRed,
            right: isMobileDevice ? mobileCapRightRed : desktopCapRightRed
          }
        };
        const capMorph$1 = initInterpolationFunc(InterpolationMode.CAP_MORPH);
        const linear$1 = initInterpolationFunc(InterpolationMode.LINEAR);
        function Cap({
          pFactor,
          nFactor
        }) {
          const wrapperRef = reactExports.useRef(null);
          const greenCapRef = reactExports.useRef(null);
          const yellowCapRef = reactExports.useRef(null);
          const redCapRef = reactExports.useRef(null);
          const capLeftRefs = reactExports.useRef({});
          const capCentralRefs = reactExports.useRef({});
          const capRightRefs = reactExports.useRef({});
          const capConfig = {
            colors: ["yellow", "red", "green"],
            positions: ["left", "central", "right"],
            refs: {
              left: capLeftRefs,
              central: capCentralRefs,
              right: capRightRefs
            },
            containerRef: {
              yellow: yellowCapRef,
              red: redCapRef,
              green: greenCapRef
            }
          };
          const renderCap = currentMs => {
            const {
              betEnd,
              betStart
            } = useBettingStore.getState();
            const elapsed = (currentMs - (betEnd - 2e4)) * 1e-3 - COUNT_DOWN_DELAY_SEC;
            const elapsedFromStart = (currentMs - betStart) * 1e-3;
            const isEntry = elapsedFromStart <= 1;
            const wrapper = wrapperRef.current;
            const splitMap = [{
              cap: yellowCapRef,
              keyFrames: YELLOW_KEY_FRAMES,
              color: "yellow"
            }, {
              cap: redCapRef,
              keyFrames: RED_KEY_FRAMES,
              color: "red"
            }, {
              cap: greenCapRef,
              keyFrames: GREEN_KEY_FRAMES,
              color: "green"
            }];
            for (const {
              cap,
              keyFrames,
              color
            } of splitMap) {
              if (!wrapper || !cap.current) continue;
              const singleAlpha = linear$1(elapsed, keyFrames);
              const capCentralMorph = capMorph$1(elapsed, CAP_CENTRAL_MORPH_KEY_FRAMES(pFactor, nFactor));
              const capAllScale = capMorph$1(isEntry ? elapsedFromStart : elapsed, CAP_MORPH_KEY_FRAMES);
              const capAllShift = capMorph$1(isEntry ? elapsedFromStart : elapsed, CAP_POSITION_KEY_FRAMES);
              wrapper.style.opacity = "1";
              wrapper.style.transform = `translateY(${capAllShift}%) scale(${capAllScale})`;
              cap.current.style.opacity = singleAlpha.toString();
              const colorKey = color;
              capCentralRefs.current[colorKey].style.width = `${capCentralMorph}rem`;
            }
          };
          reactExports.useEffect(() => {
            const unSubscribe = useTimerStore.subscribe(state => state.currentMs, currentMs => renderCap(currentMs));
            return () => unSubscribe();
          }, [pFactor, nFactor]);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "Cap",
            ref: wrapperRef,
            children: capConfig.colors.map(color => /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "innerCapWrapper",
              ref: capConfig.containerRef[color],
              children: capConfig.positions.map(position => /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                alt: "",
                className: cn({
                  isMobileDevice,
                  [position]: true,
                  [color]: true
                }),
                src: assetMap[color][position],
                ref: el => {
                  if (el) capConfig.refs[position].current[color] = el;
                }
              }, position))
            }, color))
          });
        }
        const Cap$1 = reactExports.memo(Cap);
        const TEXT_ALPHA_KEY_FRAMES = initTextAlphaKeyframes(ONE_FRAME_TIME_SEC);
        const PLACE_YOUR_BETS_ALPHA_KEY_FRAMES = initPlaceYourBetsAlphaKeyframes(ONE_FRAME_TIME_SEC);
        const VIBRATION_TRIGGERS = [{
          start: 14.75,
          end: 15.75,
          key: "five"
        }, {
          start: 15.75,
          end: 16.75,
          key: "four"
        }, {
          start: 16.75,
          end: 17.75,
          key: "three"
        }, {
          start: 17.75,
          end: 18.75,
          key: "two"
        }, {
          start: 18.75,
          end: 19.75,
          key: "one"
        }];
        const POSITION_FRAME_CONFIGS = {
          "PLACE YOUR BETS": {
            mobile: initMobilePlaceYourBetsPositKeyFrame,
            desktop: initDesktopPlaceYourBetsPositKeyFrame
          },
          "7": {
            mobile: initMobileSevenPositKeyFrame,
            desktop: initDesktopSevenPositKeyFrame
          },
          "6": {
            mobile: initMobileSixPositKeyFrame,
            desktop: initDesktopSixPositKeyFrame
          },
          "5": {
            mobile: initMobileFivePositKeyFrame,
            desktop: initDesktopFivePositKeyFrame
          },
          "4": {
            mobile: initMobileFourPositKeyFrame,
            desktop: initDesktopFourPositKeyFrame
          },
          "3": {
            mobile: initMobileThreePositKeyFrame,
            desktop: initDesktopThreePositKeyFrame
          },
          "2": {
            mobile: initMobileTwoPositKeyFrame,
            desktop: initDesktopTwoPositKeyFrame
          },
          "1": {
            mobile: initMobileOnePositKeyFrame,
            desktop: initDesktopOnePositKeyFrame
          },
          "NO MORE BETS": {
            mobile: initMobileNoMoreBetsPositKeyFrame,
            desktop: initDesktopNoMoreBetsPositKeyFrame
          }
        };
        const numLanding = initInterpolationFunc(InterpolationMode.NUM_LANDING);
        const numDescend = initInterpolationFunc(InterpolationMode.NUM_DESCEND);
        const capMorph = initInterpolationFunc(InterpolationMode.CAP_MORPH);
        const linear = initInterpolationFunc(InterpolationMode.LINEAR);
        const POSITION_KEY_FRAMES = Object.fromEntries(Object.entries(POSITION_FRAME_CONFIGS).map(([key, config]) => [key, isMobileDevice ? config.mobile(ONE_FRAME_TIME_SEC) : config.desktop(ONE_FRAME_TIME_SEC)]));
        function CountDownCap() {
          const {
            t
          } = useTranslation();
          const loadingStage = useLoadingStore(s => s.loadingStage);
          const isLoaded = loadingStage === LoadingStageEnum.PostLoaded4;
          const COUNT_DOWN_ITEMS = [t("COMMON.PLACE_BET"), "7", "6", "5", "4", "3", "2", "1", t("COMMON.NO_MORE_BET")];
          const COUNT_DOWN_ITEMS_REVERSE = COUNT_DOWN_ITEMS.reverse();
          const countdownList = COUNT_DOWN_ITEMS_REVERSE;
          const textWrapperRef = reactExports.useRef(null);
          const placeYourBetsRef = reactExports.useRef(null);
          const noMoreBetsRef = reactExports.useRef(null);
          const sevenRef = reactExports.useRef(null);
          const sixRef = reactExports.useRef(null);
          const fiveRef = reactExports.useRef(null);
          const fourRef = reactExports.useRef(null);
          const threeRef = reactExports.useRef(null);
          const twoRef = reactExports.useRef(null);
          const oneRef = reactExports.useRef(null);
          const vibratedFor = reactExports.useRef({});
          const [pFactor, setPFactor] = reactExports.useState(1);
          const [nFactor, setNFactor] = reactExports.useState(1);
          const refs = [placeYourBetsRef, sevenRef, sixRef, fiveRef, fourRef, threeRef, twoRef, oneRef, noMoreBetsRef];
          const renderCountDown = currentMs => {
            const {
              betEnd,
              betStart,
              betPeriod
            } = useBettingStore.getState();
            const elapsed = (currentMs - (betEnd - 2e4)) * 1e-3 - COUNT_DOWN_DELAY_SEC;
            const elapsedFromStart = (currentMs - betStart) * 1e-3;
            const isEntry = elapsedFromStart <= 2 && betPeriod > 7 && betEnd - currentMs > 0;
            const textWrapper = textWrapperRef.current;
            if (!textWrapper || !placeYourBetsRef.current || !noMoreBetsRef.current || !placeYourBetsRef.current) return;
            const isLand = (element, keyFrames) => {
              const currentY = getCurrentTranslateY(element);
              return currentY >= 0 ? numDescend(elapsed, keyFrames) : numLanding(elapsed, keyFrames);
            };
            const positions = [{
              ref: placeYourBetsRef,
              position: isEntry ? capMorph(elapsedFromStart, POSITION_KEY_FRAMES["PLACE YOUR BETS"]) : isLand(placeYourBetsRef.current, POSITION_KEY_FRAMES["PLACE YOUR BETS"])
            }, {
              ref: sevenRef,
              position: isLand(sevenRef.current, POSITION_KEY_FRAMES["7"])
            }, {
              ref: sixRef,
              position: isLand(sixRef.current, POSITION_KEY_FRAMES["6"])
            }, {
              ref: fiveRef,
              position: isLand(fiveRef.current, POSITION_KEY_FRAMES["5"])
            }, {
              ref: fourRef,
              position: isLand(fourRef.current, POSITION_KEY_FRAMES["4"])
            }, {
              ref: threeRef,
              position: isLand(threeRef.current, POSITION_KEY_FRAMES["3"])
            }, {
              ref: twoRef,
              position: isLand(twoRef.current, POSITION_KEY_FRAMES["2"])
            }, {
              ref: oneRef,
              position: isLand(oneRef.current, POSITION_KEY_FRAMES["1"])
            }, {
              ref: noMoreBetsRef,
              position: isLand(noMoreBetsRef.current, POSITION_KEY_FRAMES["NO MORE BETS"])
            }];
            const placeYourBetsAlpha = linear(elapsed, PLACE_YOUR_BETS_ALPHA_KEY_FRAMES);
            textWrapper.style.opacity = linear(elapsed, TEXT_ALPHA_KEY_FRAMES).toString();
            placeYourBetsRef.current.style.opacity = placeYourBetsAlpha.toString();
            positions.forEach(({
              ref,
              position
            }) => ref.current && (ref.current.style.transform = `translateY(${position}rem)`));
            if (isIOS() || !hasVibrationSupport || !isMobileDevice) return;
            if (elapsed < 14) vibratedFor.current = {};
            for (const trigger of VIBRATION_TRIGGERS) {
              const inRange = elapsed >= trigger.start && elapsed < trigger.end;
              if (inRange && !vibratedFor.current[trigger.key]) {
                vibrate();
                vibratedFor.current[trigger.key] = true;
                break;
              }
            }
          };
          reactExports.useEffect(() => {
            const unSubscribe = useTimerStore.subscribe(state => state.currentMs, currentMs => {
              renderCountDown(currentMs);
            });
            return () => unSubscribe();
          }, []);
          reactExports.useEffect(() => {
            var _textWrapperRef$curre;
            textWrapperRef === null || textWrapperRef === void 0 || (_textWrapperRef$curre = textWrapperRef.current) === null || _textWrapperRef$curre === void 0 || _textWrapperRef$curre.style.setProperty("opacity", "0");
            setPFactor(calcTranslateFactor(placeYourBetsRef, "PLACE YOUR BETS"));
            setNFactor(calcTranslateFactor(noMoreBetsRef, "NO MORE BETS"));
          }, [t, isLoaded]);
          return isLoaded && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "CountDownCap",
            className: cn({
              "mt-[-.09rem] h-[1.25rem]": isMobileDevice,
              "mt-[-.06rem] h-[2rem]": !isMobileDevice
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Cap$1, {
              pFactor,
              nFactor
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "absolute h-full w-full overflow-hidden",
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                ref: textWrapperRef,
                className: "textWrapper",
                children: countdownList.map((text, i) => {
                  const length = countdownList.length;
                  const last = length - 1;
                  const isPlaceYourBets = i === 0;
                  const isNoMoreBets = i === last;
                  return /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: cn("textItem", {
                      isPlaceYourBets,
                      isNoMoreBets,
                      isMobileDevice
                    }),
                    ref: refs[last - i],
                    children: text
                  }, `${text}-${i}`);
                })
              })
            })]
          });
        }
        const CountDownCap$1 = exports("E", reactExports.memo(CountDownCap));
        const getCurrentTranslateY = element => {
          if (!element) return 0;
          const transform = element.style.transform;
          const match = /translateY\(([-\d.]+)rem\)/.exec(transform);
          return match ? parseFloat(match[1]) : 0;
        };
        const calcTranslateFactor = (ref, text) => {
          var _el$textContent;
          const el = ref.current;
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!el || !ctx) return 1;
          ctx.font = getComputedStyle(el).font;
          const actualW = ctx.measureText((_el$textContent = el.textContent) !== null && _el$textContent !== void 0 ? _el$textContent : "").width;
          const idealW = ctx.measureText(text).width;
          const ratio = actualW / idealW;
          return ratio === 1 ? 1 : ratio * 1.1;
        };
        const vibrate = () => {
          try {
            navigator.vibrate(200);
          } catch (error) {
            console.log("Vibration API error:", error);
          }
        };
        const isChipActive = exports("i", chipVal => {
          const selectedChipVal = useCartStore.getState().selectedChipVal;
          return selectedChipVal === chipVal;
        });
        const isChipDisabled = exports("a", chipVal => {
          const remainedBalance = useCartStore.getState().remainedBalance;
          return remainedBalance < chipVal;
        });
        const getChipSrc = exports("I", (val, isDisabled) => {
          const chipList = useCartStore.getState().chipList;
          let idx = 1;
          for (; idx < chipList.length; ++idx) {
            if (val < chipList[idx].amount) break;
          }
          const chipKeyFront = isDisabled ? `c${idx}_disable` : `c${idx}`;
          const chipKeyBack = `c${idx}_back`;
          const front = chipResources[chipKeyFront].url;
          const back = chipResources[chipKeyBack].url;
          return {
            front,
            back
          };
        });
        function ClickableArea(_ref2) {
          let {
              children,
              className,
              wrapClassName,
              id
            } = _ref2,
            props = _objectWithoutProperties(_ref2, _excluded);
          return (
            /**
             * Change center to flex items-center justify-center,
             * to allow for css properties overriding.
             */
            /* @__PURE__ */
            jsxRuntimeExports.jsxs("div", {
              className: cn(`relative flex items-center justify-center`, wrapClassName),
              id,
              children: [children, /* @__PURE__ */jsxRuntimeExports.jsx("div", _objectSpread({
                className: cn("clickableArea absolute cursor-pointer", className)
              }, props))]
            })
          );
        }
        const ClickableArea$1 = exports("c", reactExports.memo(ClickableArea));
        const ChipImg = exports("C", reactExports.memo(_ref3 => {
          let {
              val,
              isDisabled
            } = _ref3,
            props = _objectWithoutProperties(_ref3, _excluded2);
          const {
            front,
            back
          } = getChipSrc(val, isDisabled);
          const alt = `Chip image for value ${val}`;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", _objectSpread(_objectSpread({
            className: cn("chipImg")
          }, props), {}, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
              src: back,
              alt,
              className: "chipImgBack"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              src: front,
              alt,
              className: "chipImgFront"
            })]
          }));
        }));
        ChipImg.displayName = "ChipImg";
        const ChipSelectorChip = exports("b", props => {
          const {
            value,
            className,
            is3D,
            isDisabled,
            chipId,
            pressChipValue,
            chipSkewXDeg
          } = props;
          const isLoadingFinished = useLoadingStore(s => s.isLoadingFinished);
          const gameType = useConfigStore(state => state.GAME_TYPE);
          const isSicbo = isSicboGameType(gameType);
          const numValue = convertLabel(value);
          const isPressed = pressChipValue === value;
          const handleClick = () => {
            if (isDisabled) return;
            useCartStore.getState().setSelectChipVal(value);
            useLayoutStore.setState({
              isOpenSelector: false
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
            className: cn("g-chip", className, {
              isDisabled,
              isPressed,
              isLoadingFinished,
              isSicbo,
              is3D
            }),
            "data-value": value,
            onClick: handleClick,
            "data-drag-chip": chipId,
            style: {
              "--chipSkewXDeg": `${chipSkewXDeg}deg`
            },
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
        });
        function Clock() {
          const currentBySec = useTimerStore(state => state.currentSec);
          if (currentBySec === 0) return "";
          return /* @__PURE__ */jsxRuntimeExports.jsx("span", {
            id: "Clock",
            className: cn({
              isMobileDevice
            }),
            children: new Date(currentBySec * 1e3).toLocaleString("en-US", _objectSpread({
              hour: "2-digit",
              minute: "2-digit",
              hour12: false
            }, isMobileDevice && {
              second: "2-digit"
            }))
          });
        }
        function MainBgImage({
          overlayBg,
          imageClassName,
          className
        }) {
          const gameType = useConfigStore(s => s.GAME_TYPE);
          const isCanStream = useLayoutStore(s => s.isCanStream);
          const isBet = useBettingStore(state => state.isBet);
          const isRoulette = isRouletteGameType(gameType);
          return !isCanStream ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "MainBgImage",
            className: cn("ease-in-outs pointer-events-none absolute top-0 h-full w-full bg-black transition-all duration-700", !isMobileDevice && !isBet && !isRoulette && "translate-y-16 scale-150", className),
            children: !isRoulette && /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              src: overlayBg,
              className: cn("overlayBg", imageClassName)
            })
          }) : null;
        }
        function ToastList() {
          const {
            toastQueue,
            dismissToast
          } = useToastStore(s => ({
            toastQueue: s.toastQueue,
            dismissToast: s.dismissToast
          }));
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "ToastList",
            className: cn("center absolute left-2 right-2 z-[11] flex-col-reverse md:mx-auto md:w-1/2", {
              isDesktop
            }),
            children: /* @__PURE__ */jsxRuntimeExports.jsx(AnimatePresence, {
              children: toastQueue.map(({
                type,
                id,
                msg,
                persistent
              }) => /* @__PURE__ */jsxRuntimeExports.jsxs(motion.div, {
                className: cn("toastBubble center mb-2 overflow-hidden", type),
                layout: "position",
                initial: {
                  opacity: 0,
                  y: -50
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                exit: {
                  opacity: 0
                },
                transition: {
                  duration: 0.3,
                  ease: "linear"
                },
                children: [type === "success" && /* @__PURE__ */jsxRuntimeExports.jsx(Icon.SuccessCircle, {
                  className: "size-6 shrink-0"
                }), type === "error" && /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Error, {
                  className: "size-6 shrink-0"
                }), type === "info" && /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Info, {
                  className: "size-6 shrink-0"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Message, {
                  msg
                }), !persistent && /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea$1, {
                  className: "size-[3.125rem]",
                  onClick: () => dismissToast(id),
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Clear, {
                    className: "iconClear size-6 shrink-0"
                  })
                })]
              }, id))
            })
          });
        }
        function Message({
          msg
        }) {
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "msg mr-auto line-clamp-2",
            children: t(msg)
          });
        }
        const overlayBg = exports("D", "" + new URL('overlay_bg-DIuwO1dd.webp', module.meta.url).href + "");
        const useWinNumberStore$3 = getWinNumberStore();
        const BetResult = exports("B", ({
          className
        }) => {
          const history = useWinNumberStore$3(state => state.history);
          const historyDisplay = history.slice(-16).reverse();
          const [scope, animate] = useAnimate();
          reactExports.useEffect(() => {
            animate(scope.current, {
              x: ["-1.5rem", 0]
            }, {
              duration: 0.4,
              ease: "linear"
            });
          }, [animate, history, scope]);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: cn({
              isDesktop
            }, className),
            id: "BetResult",
            children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              ref: scope,
              className: "resultList",
              children: historyDisplay.map((num, i) => /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: `${getBetColor(num)}`,
                children: num
              }, `${num}-${i}`))
            })
          });
        });
        function usePreventPullToRefresh(ref) {
          reactExports.useEffect(() => {
            const target = ref.current;
            if (isDesktop || !target) return;
            let startX = 0;
            let startY = 0;
            const handleTouchStart = e => {
              startX = e.touches[0].clientX;
              startY = e.touches[0].clientY;
            };
            const handleTouchMove = e => {
              if (!isIOS()) {
                e.stopPropagation();
                return;
              }
              const currentX = e.touches[0].clientX;
              const currentY = e.touches[0].clientY;
              const deltaX = currentX - startX;
              const deltaY = currentY - startY;
              const isHorizontalGesture = Math.abs(deltaX) > Math.abs(deltaY);
              const atTop = target.scrollTop === 0;
              const atBottom = target.scrollHeight - target.scrollTop <= target.clientHeight;
              const shouldPreventDefault = (atTop && deltaY > 0 || atBottom && deltaY < 0) && !isHorizontalGesture;
              if (shouldPreventDefault) {
                e.preventDefault();
              } else {
                e.stopPropagation();
              }
            };
            const handleGlobalTouchMove = e => {
              if (!target.contains(e.target)) {
                e.preventDefault();
              }
            };
            target.addEventListener("touchstart", handleTouchStart, {
              passive: true
            });
            target.addEventListener("touchmove", handleTouchMove, {
              passive: false
            });
            document.addEventListener("touchmove", handleGlobalTouchMove, {
              passive: false
            });
            return () => {
              target.removeEventListener("touchstart", handleTouchStart, {
                passive: true
              });
              target.removeEventListener("touchmove", handleTouchMove, {
                passive: false
              });
              document.removeEventListener("touchmove", handleGlobalTouchMove, {
                passive: false
              });
            };
          }, [ref]);
        }
        const textVariants = {
          hidden: {
            y: 40,
            opacity: 0,
            transition: {
              type: "spring",
              stiffness: 500,
              damping: 30,
              duration: 0.3
            }
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 500,
              damping: 20,
              mass: 1,
              duration: 0.3
            }
          },
          rollUp: {
            y: -40,
            opacity: 0,
            transition: {
              type: "spring",
              stiffness: 500,
              damping: 30,
              duration: 0.3
            }
          }
        };
        function AutoPlayCard({
          idx,
          round,
          selected,
          onClick,
          amount
        }) {
          const PlayIcon = selected ? stopImg : playImg;
          const status = selected ? "selected" : "unSelected";
          const {
            t
          } = useTranslation();
          const currencySymbol = useCartStore(s => s.currencySymbol);
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          return /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
            id: "AutoPlayCard",
            className: cn("h-[7.75rem] w-[3.875rem] flex-shrink-0 cursor-pointer", {
              "h-[8.125rem] w-[4.5625rem]": isMobileDevice,
              "h-[8.125rem] w-[3.82813rem]": isMobileDevice && isSmallDevice
            }, status),
            onClick: () => {
              playSound(["click"]);
              onClick(idx);
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "inner",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "count",
                children: round
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "round",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "uppercase",
                  children: t("COMMON.ROUND", {
                    count: round
                  })
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: cn("center relative mb-[0.38rem] h-3", {
                  "mb-3": isMobileDevice
                }),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
                  className: "left absolute max-w-full overflow-hidden text-ellipsis whitespace-nowrap",
                  initial: false,
                  animate: selected ? "rollUp" : "visible",
                  variants: textVariants,
                  children: `${currencySymbol}${thousandSeparator(amount)}`
                }), /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
                  className: "left absolute",
                  initial: false,
                  animate: selected ? "visible" : "hidden",
                  variants: textVariants,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "uppercase",
                    children: t("COMMON.LEFT")
                  })
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
                className: cn("radioBtn w-[2.875rem]", {
                  "w-[3.5625rem]": isMobileDevice,
                  "w-[2.82813rem]": isMobileDevice && isSmallDevice
                }),
                whileTap: {
                  scale: 0.9
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                  src: PlayIcon,
                  alt: "autoplay stop or play icon",
                  className: "w-5"
                })
              })]
            })
          });
        }
        const autoPlayCount = [5, 10, 25, 100];
        const AutoPlay = exports("A", ({
          requireTitle = true,
          closeOnDesktop
        }) => {
          const closeMenu = useLayoutStore(s => s.closeMenu);
          const roundSelected = useAutoPlayStore(s => s.roundSelected);
          const totalBet = useCartStore(s => s.totalBet);
          const {
            t
          } = useTranslation();
          const gameState = useBettingStore(s => s.gameState);
          const boardHistory = useCartStore(s => s.boardHistory);
          const handleAutoPlay = idx => {
            const isCancel = roundSelected === idx;
            const newSelected = isCancel ? null : idx;
            const autoDeductRound = gameState === BetState.Settlement ? 0 : 1;
            useAutoPlayStore.setState({
              roundLastChosen: newSelected,
              roundSelected: newSelected,
              roundRemaining: autoPlayCount[idx] - autoDeductRound,
              // Deduct 1 for the current round
              isAutoPlay: !isCancel,
              boardSnapshot: isCancel ? null : boardHistory[boardHistory.length - 1]
            });
            setTimeout(() => {
              if (closeOnDesktop) closeOnDesktop();else closeMenu();
            }, 400);
          };
          const subtitle = t("COMMON.AUTOPLAY_PROMPT3");
          const roundRemaining = useAutoPlayStore(state => state.roundRemaining);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn("flex flex-col gap-4 px-[0.875rem] pb-6 pt-3"),
            id: "AutoPlay",
            children: [requireTitle && /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
              children: t("COMMON.AUTOPLAY")
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "subtitle text-center text-[0.75rem] leading-4 tracking-[-0.015rem] text-[#b9b2aa]",
              children: subtitle
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn("center flex gap-2", {
                "gap-3": isMobileDevice
              }),
              children: autoPlayCount.map((val, idx) => /* @__PURE__ */jsxRuntimeExports.jsx(AutoPlayCard, {
                idx,
                round: idx === roundSelected ? roundRemaining : val,
                amount: totalBet * val,
                selected: idx === roundSelected,
                onClick: handleAutoPlay
              }, idx))
            })]
          });
        });
        const RouletteBubbleGameResult = props => {
          var _current$result$roule, _current$result, _current$roundId;
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          const current = props.data.content;
          const result = Number((_current$result$roule = (_current$result = current.result) === null || _current$result === void 0 ? void 0 : _current$result["roulette"]) !== null && _current$result$roule !== void 0 ? _current$result$roule : -1);
          const color = !current.result || result < 0 ? "cancel" : getRouletteNumberColor(result);
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn("g-winNumberFrame relative", color, "my-3 h-[8.5rem]"),
            children: [result >= 0 && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "absolute right-1 top-10 w-[12rem]",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("h3", {
                className: cn(isSmallDevice ? "ml-[3rem]" : "", "text-center"),
                children: [t("COMMON.GAME_RESULT"), ":"]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "h-2"
              }), WinNumber && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn(isSmallDevice ? "absolute -bottom-[1.3rem] -right-[1rem] h-full w-[90%]" : ""),
                children: /* @__PURE__ */jsxRuntimeExports.jsx(WinNumber, {
                  win: result
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "absolute left-4 top-4",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                children: t("COMMON.LIVE_ROULETTE")
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "h-2"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-2 gap-x-10",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("h3", {
                      children: [t("COMMON.GAME_RESOLVED"), ":"]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: current.finishedAt && new Date(current.finishedAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                        timeZone: "UTC"
                      })
                    })]
                  }), result < 0 && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("h3", {
                      children: [t("COMMON.GAME_RESULT"), ":"]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t("COMMON.GAME_CANCELED")
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "h-3"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("h3", {
                    children: [t("COMMON.GAME_NUMBER"), ":"]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: `#${getFormattedRoundId((_current$roundId = current === null || current === void 0 ? void 0 : current.roundId) !== null && _current$roundId !== void 0 ? _current$roundId : "")}`
                  })]
                })]
              })]
            })]
          });
        };
        const BubbleGameResult = props => {
          var _current$result$sicBo, _current$result2, _current$roundId2;
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          const current = props.data.content;
          const result = (_current$result$sicBo = (_current$result2 = current.result) === null || _current$result2 === void 0 ? void 0 : _current$result2["sicBo"]) !== null && _current$result$sicBo !== void 0 ? _current$result$sicBo : [];
          const color = !current.result || result.length === 0 ? "cancel" : getSicBoNumberColor(result);
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn("g-winNumberFrame overflow-visible", color, "my-3 h-[8.5rem]"),
            children: [result.length === 3 && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("absolute top-4 w-[12rem]", isSmallDevice ? "right-[-2rem]" : "right-[-1rem]"),
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("h3", {
                  className: "text-center",
                  children: [t("COMMON.GAME_RESULT"), ":"]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("center absolute bottom-[-0.2rem] flex h-[5rem] w-[5rem] scale-[0.95]", isSmallDevice ? "right-[1.5rem]" : "right-[2.5rem]"),
                children: /* @__PURE__ */jsxRuntimeExports.jsx(WinNumber$1, {
                  win: result
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "absolute left-4 top-4",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                children: t("COMMON.LIVE_SICBO")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "mt-2",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-2 gap-x-10",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("h3", {
                      children: [t("COMMON.GAME_RESOLVED"), ":"]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: current.finishedAt && new Date(current.finishedAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                        timeZone: "UTC"
                      })
                    })]
                  }), (result.length < 3 || !result) && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("h3", {
                      children: [t("COMMON.GAME_RESULT"), ":"]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t("COMMON.GAME_CANCELED")
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "mt-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("h3", {
                    children: [t("COMMON.GAME_NUMBER"), ":"]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: `#${getFormattedRoundId((_current$roundId2 = current === null || current === void 0 ? void 0 : current.roundId) !== null && _current$roundId2 !== void 0 ? _current$roundId2 : "")}`
                  })]
                })]
              })]
            })]
          });
        };
        const formatTime = timestamp => {
          return new Date(timestamp).toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          });
        };
        const MIN_PERIOD_BEFORE_HIDDEN = 3 * 1e3;
        const TTL = 24 * 1e3 - MIN_PERIOD_BEFORE_HIDDEN;
        function ChatBubble({
          data,
          desktopLive,
          isFirstBubble,
          isLastBubbleTimestamp,
          isLastThree,
          isInitialLoadFinish,
          isLayerHover,
          isInputHasText
        }) {
          var _sender$username;
          const {
            timestamp,
            content,
            sender
          } = data;
          const [isHover, setIsHover] = reactExports.useState(false);
          const [isFresh, setIsFresh] = reactExports.useState(true);
          const isAlive = isFresh && isInitialLoadFinish && isLastThree;
          const ttlRef = reactExports.useRef(TTL);
          const displayName = (_sender$username = sender === null || sender === void 0 ? void 0 : sender.username) !== null && _sender$username !== void 0 ? _sender$username : "";
          const messageText = "text" in content ? content.text : "";
          const isCurrentUser = (sender === null || sender === void 0 ? void 0 : sender.actor) === "me";
          reactExports.useEffect(() => {
            let interval = null;
            if (!isInitialLoadFinish || !desktopLive || !isLastThree) return setIsFresh(false);
            if (isLayerHover || isInputHasText) return;
            interval = setInterval(() => {
              ttlRef.current -= 1e3;
              if (ttlRef.current <= 0) {
                setIsFresh(false);
                if (interval) clearInterval(interval);
              }
            }, 1e3);
            return () => {
              if (interval) clearInterval(interval);
            };
          }, [isInitialLoadFinish, isLayerHover, isInputHasText, isLastThree, desktopLive]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(motion.div, {
            className: cn("ChatBubble mb-1", {
              isAlive
            }, {
              isSelf: isCurrentUser
            }),
            layout: "position",
            initial: {
              opacity: 0,
              translateY: "100%",
              scale: 1.1
            },
            animate: {
              opacity: 1,
              translateY: 0,
              scale: 1
            },
            transition: isInitialLoadFinish && desktopLive ? {
              type: "spring",
              stiffness: 100,
              damping: 15,
              mass: 1,
              duration: 0.8
            } : {
              duration: 0
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "msg break-words break-keep",
              onMouseEnter: () => setIsHover(true),
              onMouseLeave: () => setIsHover(false),
              children: [desktopLive && /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
                className: "timer desktopLiveTimer mt-[.125rem] opacity-0",
                animate: {
                  opacity: isHover ? 1 : 0
                },
                transition: {
                  duration: 0.3
                },
                children: formatTime(timestamp)
              }), isFirstBubble && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "name",
                children: displayName
              }), messageText]
            }), isLastBubbleTimestamp && !desktopLive && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "timer mt-[.125rem]",
              children: formatTime(timestamp)
            })]
          });
        }
        function useVirtualKeyboardOpened(inputRef) {
          const preKeyboardHeightRef = reactExports.useRef(null);
          reactExports.useEffect(() => {
            const inputElem = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current;
            if (!isMobileDevice || !window.visualViewport || !inputElem) {
              useLayoutStore.setState({
                isVirtualKeyboardOpened: false,
                visualViewportMargin: 0
              });
              return;
            }
            const vv = window.visualViewport;
            const onFocus = () => {
              preKeyboardHeightRef.current = vv.height;
            };
            const onBlur = () => {
              preKeyboardHeightRef.current = null;
              useLayoutStore.setState({
                isVirtualKeyboardOpened: false,
                visualViewportMargin: 0
              });
            };
            const onResize = () => {
              if (preKeyboardHeightRef.current === null) return;
              const currentHeight = vv.height;
              const preKeyboardHeight = preKeyboardHeightRef.current;
              const isKeyboardOpened = currentHeight < preKeyboardHeight;
              const margin = isKeyboardOpened ? preKeyboardHeight - currentHeight : 0;
              useLayoutStore.setState({
                isVirtualKeyboardOpened: isKeyboardOpened,
                visualViewportMargin: margin
              });
            };
            inputElem.addEventListener("focus", onFocus);
            inputElem.addEventListener("blur", onBlur);
            vv.addEventListener("resize", onResize);
            onResize();
            return () => {
              inputElem.removeEventListener("focus", onFocus);
              inputElem.removeEventListener("blur", onBlur);
              vv.removeEventListener("resize", onResize);
            };
          }, [inputRef]);
        }
        function ChatSendButtonIcon({
          state,
          className
        }) {
          const containerStyles = cn(className);
          const debouncedState = useDebounce(state, 50);
          const effectiveState = reactExports.useMemo(() => {
            const isActiveHoverTransition = (state === "active" || state === "hover") && (debouncedState === "active" || debouncedState === "hover");
            if (isActiveHoverTransition) {
              return debouncedState;
            }
            return state;
          }, [state, debouncedState]);
          const getOpacity = () => {
            switch (effectiveState) {
              case "disabled":
                return 0.25;
              case "default":
              case "inactive":
                return 0.5;
              case "active":
              case "hover":
                return 1;
              default:
                return 1;
            }
          };
          const animationConfig = {
            opacity: getOpacity(),
            transition: {
              duration: 0.15,
              // 150ms
              ease: "easeOut"
            }
          };
          const getBackgroundGradient = () => {
            switch (effectiveState) {
              case "disabled":
                return isMobileDevice ? {
                  stop1: "#393939",
                  stop2: "#242424",
                  stroke1: "#686868",
                  stroke2: "#313131",
                  strokeOffset: 0.42
                } : null;
              case "inactive":
              case "active":
                return {
                  stop1: "#275C3A",
                  stop2: "#173723",
                  stroke1: "#40975F",
                  stroke2: "#1F492E",
                  strokeOffset: 1
                };
              case "hover":
                return {
                  stop1: "#40975F",
                  stop2: "#1F492E",
                  stroke1: "#40975F",
                  stroke2: "#1F492E",
                  strokeOffset: 1
                };
              default:
                return null;
            }
          };
          const getArrowFill = () => {
            switch (effectiveState) {
              case "disabled":
                return "#D8D3C3";
              case "default":
              case "inactive":
              case "active":
              case "hover":
                return "#FEFEFE";
              default:
                return "#FEFEFE";
            }
          };
          const getArrowOpacity = () => {
            switch (effectiveState) {
              case "disabled":
                return 0.25;
              case "default":
                return 0.6;
              default:
                return 1;
            }
          };
          const backgroundGradient = getBackgroundGradient();
          const arrowFill = getArrowFill();
          const arrowOpacity = getArrowOpacity();
          const isDesktopArrow = !isMobileDevice && (state === "default" || state === "disabled");
          const isMobileArrow = isMobileDevice && state === "default";
          const shouldHaveBackground = backgroundGradient && (isDesktopArrow || !isMobileArrow);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(motion.svg, {
            viewBox: "0 0 44 44",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: containerStyles,
            animate: animationConfig,
            children: [shouldHaveBackground && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(motion.path, {
                d: "M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z",
                fill: `url(#bg-gradient-${effectiveState})`,
                animate: {
                  fill: `url(#bg-gradient-${effectiveState})`
                },
                transition: {
                  duration: 0.15,
                  ease: "easeOut"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx(motion.path, {
                d: "M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z",
                stroke: `url(#stroke-gradient-${effectiveState})`,
                animate: {
                  stroke: `url(#stroke-gradient-${effectiveState})`
                },
                transition: {
                  duration: 0.15,
                  ease: "easeOut"
                }
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(motion.path, {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M28.6667 22C28.6667 22.2533 28.5263 22.4843 28.3056 22.5942L17.581 27.9347C17.3454 28.052 17.0645 28.0087 16.8722 27.8255C16.6799 27.6422 16.6153 27.3561 16.7092 27.1038L18.6072 22L16.7092 16.8962C16.6153 16.6439 16.6799 16.3578 16.8722 16.1745C17.0645 15.9913 17.3454 15.948 17.581 16.0653L28.3056 21.4058C28.5263 21.5157 28.6667 21.7467 28.6667 22Z",
              initial: {
                fill: "none",
                fillOpacity: 0
              },
              animate: {
                fill: arrowFill,
                fillOpacity: arrowOpacity
              },
              transition: {
                duration: 0.15,
                ease: "easeOut"
              }
            }), shouldHaveBackground && /* @__PURE__ */jsxRuntimeExports.jsxs("defs", {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: `bg-gradient-${effectiveState}`,
                x1: "22",
                y1: "0",
                x2: "22",
                y2: "44",
                gradientUnits: "userSpaceOnUse",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(motion.stop, {
                  animate: {
                    stopColor: backgroundGradient.stop1
                  },
                  transition: {
                    duration: 0.15,
                    ease: "easeOut"
                  }
                }), /* @__PURE__ */jsxRuntimeExports.jsx(motion.stop, {
                  offset: "1",
                  animate: {
                    stopColor: backgroundGradient.stop2
                  },
                  transition: {
                    duration: 0.15,
                    ease: "easeOut"
                  }
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: `stroke-gradient-${effectiveState}`,
                x1: "22",
                y1: "0",
                x2: "22",
                y2: "44",
                gradientUnits: "userSpaceOnUse",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(motion.stop, {
                  animate: {
                    stopColor: backgroundGradient.stroke1
                  },
                  transition: {
                    duration: 0.15,
                    ease: "easeOut"
                  }
                }), /* @__PURE__ */jsxRuntimeExports.jsx(motion.stop, {
                  offset: backgroundGradient.strokeOffset,
                  animate: {
                    stopColor: backgroundGradient.stroke2
                  },
                  transition: {
                    duration: 0.15,
                    ease: "easeOut"
                  }
                })]
              })]
            })]
          });
        }
        function ChatSendButton({
          hasText,
          isFocus,
          desktopLive,
          onClick
        }) {
          const isTableClosed = useChatStore(state => state.isTableClosed);
          const [isHovered, setIsHovered] = reactExports.useState(false);
          const isDisabled = isTableClosed;
          const isActive = hasText && isFocus && !isDisabled;
          const isInactive = hasText && !isFocus && !isDisabled;
          const isDefault = !hasText && !isDisabled;
          const getIconState = () => {
            if (isDisabled) return "disabled";
            if (isDefault) return "default";
            if (isInactive) return "inactive";
            if (isActive && isHovered) return "hover";
            if (isActive) return "active";
            return "default";
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea$1, {
            className: "aspect-square size-[150%]",
            onPointerDown: e => {
              e.preventDefault();
            },
            onMouseEnter: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false),
            onClick,
            children: /* @__PURE__ */jsxRuntimeExports.jsx("button", {
              className: cn("group relative flex size-11 items-center justify-center rounded-[2.5rem]", isDesktop && (isActive || isInactive) ? "cursor-pointer" : "cursor-default", {
                "size-[2.25rem]": desktopLive
              }),
              disabled: isDisabled,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(ChatSendButtonIcon, {
                state: getIconState(),
                className: cn("absolute", desktopLive ? "size-9" : "size-11")
              })
            })
          });
        }
        const LIVE_CHAT_MAX_LENGTH = 250;
        function ChatInput(props) {
          const {
            t
          } = useTranslation();
          const {
            type,
            setIsInputHover,
            desktopLive,
            setIsInputHasText
          } = props;
          const inputRef = reactExports.useRef(null);
          const [isFocus, setIsFocus] = reactExports.useState(false);
          const [text, setText] = reactExports.useState("");
          const [initialized, setInitialized] = reactExports.useState(false);
          const textLen = text.length;
          const isEmpty = textLen === 0;
          const maxLength = LIVE_CHAT_MAX_LENGTH;
          const isTableClosed = useChatStore(state => state.isTableClosed);
          useVirtualKeyboardOpened(inputRef);
          const onTextChanged = e => {
            const {
              value
            } = e.target;
            const clampedText = value.slice(0, maxLength);
            setText(clampedText);
            setIsInputHasText === null || setIsInputHasText === void 0 || setIsInputHasText(clampedText.length > 0);
          };
          const onKeyDown = e => {
            if (e.key === "Enter" && !e.nativeEvent.isComposing) send();
          };
          const send = () => {
            if (isTableClosed || isEmpty) return;
            if (type === RoomType.Live) {
              connectIns.sendGameChatText(text);
            } else {
              connectIns.sendSupportChatChatText(text);
            }
            playSound(["click"]);
            setText("");
            setIsInputHasText === null || setIsInputHasText === void 0 || setIsInputHasText(false);
          };
          const renderFloatingLabel = () => {
            if (isEmpty && !isFocus) {
              return t("COMMON.YOUR_MESSAGE");
            } else {
              return `${textLen}/${LIVE_CHAT_MAX_LENGTH}`;
            }
          };
          reactExports.useEffect(() => {
            const inputElem = inputRef.current;
            if (!inputElem || isFocus || initialized || desktopLive || isMobileDevice) return;
            setTimeout(() => {
              inputElem.focus();
              setIsFocus(true);
              setInitialized(true);
            }, 200);
          }, [initialized, isFocus, type, desktopLive]);
          reactExports.useEffect(() => {
            return () => {
              setText("");
              setInitialized(false);
            };
          }, [type]);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "ChatInput",
            className: "w-full rounded-[2.75rem] p-[0.0625rem]",
            onMouseEnter: () => {
              if (desktopLive) {
                setIsInputHover === null || setIsInputHover === void 0 || setIsInputHover(true);
              }
            },
            onMouseLeave: () => {
              if (desktopLive) {
                setIsInputHover === null || setIsInputHover === void 0 || setIsInputHover(false);
              }
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: cn("textArea relative", {
                "h-[2.75rem] p-[0rem_0.2rem_0rem_1.125rem]": desktopLive,
                "h-[3.375rem] p-[0.3125rem_0.3125rem_0.3125rem_1.125rem]": !desktopLive,
                focus: isFocus
              }),
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea$1, {
                wrapClassName: "static justify-start",
                className: "h-full w-full -translate-x-[1.125rem] cursor-text",
                onPointerDown: e => e.preventDefault(),
                onClick: () => {
                  var _inputRef$current;
                  return (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                    ref: inputRef,
                    onChange: onTextChanged,
                    onKeyDown,
                    onFocus: () => setIsFocus(true),
                    onBlur: () => setIsFocus(false),
                    maxLength,
                    value: text,
                    className: cn({
                      "pt-[0.7rem]": type === RoomType.Live
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: cn("absolute left-[1.2rem] top-1/2 -translate-y-1/2", {
                      limit: isFocus || !isEmpty
                    }),
                    children: renderFloatingLabel()
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(ChatSendButton, {
                hasText: !isEmpty,
                isFocus,
                desktopLive,
                onClick: send
              })]
            })
          });
        }
        const ChatInput$1 = reactExports.memo(ChatInput);
        const GAME_TABLE = useConfigStore.getState().GAME_TABLE;
        function ChatHeader() {
          const {
            t
          } = useTranslation();
          const dealer = useBettingStore(state => state.dealer);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "chatRoomHeader center absolute left-1/2 top-[1.9rem] -translate-x-1/2 flex-col gap-2",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "tracking-[0.113rem]",
              children: t("COMMON.CHAT")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex gap-[0.125rem] text-xs leading-4 tracking-[0.03rem]",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                children: [t("COMMON.GAME_PRESENTER"), ":"]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "chatTitleName",
                children: dealer.name
              })]
            })]
          });
        }
        function ChatBannedBanner() {
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "box error",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("h1", {
              className: "error",
              children: t("COMMON.BANNED")
            }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
              className: "error",
              children: t("COMMON.BANNED_TIP")
            })]
          });
        }
        function ChatDisabledBanner() {
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "box",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("h1", {
              children: t("COMMON.CHAT_DISABLED")
            }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
              className: "px-10",
              children: t("COMMON.CHAT_DISABLED_TIP")
            })]
          });
        }
        function TableClosedBanner() {
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "box my-3",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("h1", {
              children: t("COMMON.TABLE_CLOSED")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("p", {
                children: t("COMMON.TABLE_CLOSED_TIP1")
              }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                children: t("COMMON.TABLE_CLOSED_TIP2")
              })]
            })]
          });
        }
        function ChatRoom(props) {
          const {
            type,
            desktopLive,
            isLayerHover,
            isInputHasText
          } = props;
          const remainedBalance = useCartStore(state => state.remainedBalance);
          const isBanned = useChatStore(state => state.isBanned);
          const isTableClosed = useChatStore(state => state.isTableClosed);
          const isChatDisabled = remainedBalance === 0;
          const [isInitialLoadFinish, setIsInitialLoadFinish] = reactExports.useState(false);
          const scrollWrapRef = reactExports.useRef(null);
          usePreventPullToRefresh(scrollWrapRef);
          reactExports.useEffect(() => {
            const loadChatHistory = () => {
              try {
                if (type === RoomType.Live) {
                  connectIns.listGameChatHistory(GAME_TABLE);
                } else {
                  connectIns.listSupportChatHistory();
                }
              } catch (error) {
                console.error("Failed to load chat history", error);
              }
            };
            loadChatHistory();
            return () => {
              if (type === RoomType.Support) {
                try {
                  connectIns.send(GameAction.UNSUBSCRIBE_SUPPORT);
                } catch (error) {
                  console.error("Failed to unsubscribe chat support", error);
                }
              }
            };
          }, [type]);
          const queueLive = useChatStore(state => state.queueLive);
          const queueSupport = useChatStore(state => state.queueSupport);
          const isOtherMsgEnabled = useSettingStore(state => state.otherMessagesEnable);
          const filteredQueueLive = isOtherMsgEnabled ? queueLive : queueLive.filter(msg => {
            var _msg$sender;
            return ((_msg$sender = msg.sender) === null || _msg$sender === void 0 ? void 0 : _msg$sender.actor) !== "others";
          });
          const renderType = type === RoomType.Live ? filteredQueueLive : queueSupport;
          const renderList = [...renderType].reverse();
          window.chat = {
            isBanned: (isBanned2 = true) => {
              useChatStore.setState({
                isBanned: isBanned2
              });
            },
            isTableClosed: (isTableClosed2 = true) => {
              useChatStore.setState({
                isTableClosed: isTableClosed2
              });
            }
          };
          reactExports.useEffect(() => {
            if (!renderList.length || isInitialLoadFinish) return;
            setIsInitialLoadFinish(true);
          }, [renderList, type, isInitialLoadFinish]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "ChatRoom",
            className: cn("absolute flex h-full w-full flex-col-reverse gap-3 px-4 pb-4"),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn("shadowHint", {
                isDesktop,
                desktopLive
              })
            }), isChatDisabled ? /* @__PURE__ */jsxRuntimeExports.jsx(ChatDisabledBanner, {}) : isBanned ? /* @__PURE__ */jsxRuntimeExports.jsx(ChatBannedBanner, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(ChatInput$1, _objectSpread({}, props)), isTableClosed && /* @__PURE__ */jsxRuntimeExports.jsx(TableClosedBanner, {}), /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
              ref: scrollWrapRef,
              className: "g-noBar chatRoomContent scrollWrap flex flex-col-reverse pt-4",
              layout: isInitialLoadFinish && desktopLive && "position",
              children: /* @__PURE__ */jsxRuntimeExports.jsx(AnimatePresence, {
                children: renderList.map((data, idx) => {
                  var _data$sender, _renderList$sender, _renderList$sender2, _data$sender2;
                  const {
                    content
                  } = data;
                  const {
                    type: type2
                  } = content;
                  if (type2 !== "text" && "gameType" in content) {
                    const gameType = content.gameType;
                    if (isRouletteGameType(gameType)) return /* @__PURE__ */jsxRuntimeExports.jsx(RouletteBubbleGameResult, {
                      data
                    }, idx);
                    if (isSicboGameType(gameType)) return /* @__PURE__ */jsxRuntimeExports.jsx(BubbleGameResult, {
                      data
                    }, idx);
                  }
                  const userId = (_data$sender = data.sender) === null || _data$sender === void 0 ? void 0 : _data$sender.userId;
                  const isLastBubbleTimestamp = !(idx > 0 && ((_renderList$sender = renderList[idx - 1].sender) === null || _renderList$sender === void 0 ? void 0 : _renderList$sender.userId) === userId) && type2 !== "gameHistory";
                  const isLastThree = idx < 3;
                  const isFirstBubble = !(idx !== renderList.length - 1 && ((_renderList$sender2 = renderList[idx + 1].sender) === null || _renderList$sender2 === void 0 ? void 0 : _renderList$sender2.userId) === userId);
                  return /* @__PURE__ */jsxRuntimeExports.jsx(ChatBubble, {
                    data,
                    desktopLive,
                    isFirstBubble,
                    isLastBubbleTimestamp,
                    isLastThree,
                    isInitialLoadFinish,
                    isLayerHover,
                    isInputHasText
                  }, `chat-${data.timestamp}-${((_data$sender2 = data.sender) === null || _data$sender2 === void 0 ? void 0 : _data$sender2.userId) || idx}`);
                })
              })
            })]
          });
        }
        const ChatRoom$1 = exports("g", reactExports.memo(ChatRoom));
        function GameLimitWrapper({
          children
        }) {
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "GameLimit",
            className: cn("px-4 pt-2", {
              "pt-3": isMobileDevice
            }),
            children
          });
        }
        const GameLimitComponent = reactExports.memo(GameLimitWrapper);
        function GameLimit() {
          const {
            t
          } = useTranslation();
          const currencySymbol = useCartStore(s => s.currencySymbol);
          const tableMaxPayout = useConfigStore(s => s.tableMaxPayout);
          const gameType = useConfigStore(s => s.GAME_TYPE);
          const isSicBo = isSicboGameType(gameType);
          const isRoulette = isRouletteGameType(gameType);
          const payTable = getPayTable(isSicBo ? GameType.AUTO_SIC_BO : isRoulette ? GameType.AUTO_ROULETTE : GameType.BACCARAT);
          const content = /* @__PURE__ */jsxRuntimeExports.jsxs("section", {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("table", {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("thead", {
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("th", {
                    children: t("COMMON.BET_TYPE")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                    children: t("COMMON.BET_LIMITS")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                    children: t("COMMON.PAYOUTS")
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("tbody", {
                children: Object.keys(payTable).map((betType, index) => {
                  var _limits$min;
                  const betTypeEntry = payTable[betType] || {};
                  const className = betTypeEntry.className || "";
                  const limits = betTypeEntry.limits || {};
                  return /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("td", {
                      className: cn(className),
                      children: betTypeEntry.betType || betType
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                      className: cn(className),
                      children: limits.max ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [currencySymbol, ((_limits$min = limits.min) === null || _limits$min === void 0 ? void 0 : _limits$min.toLocaleString()) || "0", " - ", limits.max.toLocaleString()]
                      }) : ""
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                      className: cn(className),
                      children: betTypeEntry.payouts || ""
                    })]
                  }, index);
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn("maxPayout px-2 py-4", {
                "py-3": isMobileDevice
              }),
              children: t("COMMON.MAX_PAYOUT", {
                currencySymbol,
                amount: (tableMaxPayout || 0).toLocaleString()
              })
            })]
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(GameLimitComponent, {
            children: content
          });
        }
        function GameRule({
          titleList
        }) {
          const openDesktopModal = useLayoutStore(state => state.openDesktopModal);
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: cn("list mx-4 mb-4 mt-2 cursor-pointer", {
              "mt-3": isMobileDevice
            }),
            onClick: () => {
              useLayoutStore.setState({
                menuPage: "rules_inner"
              });
              openDesktopModal("rules_inner");
              playSound(["click"]);
            },
            children: titleList.map((item, index) => /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "row",
              onClick: () => useLayoutStore.setState({
                scrollToId: item
              }),
              children: [t(item), /* @__PURE__ */jsxRuntimeExports.jsx(Icon.RightGolden, {
                className: "w-4"
              })]
            }, index))
          });
        }
        const GameRule$1 = exports("e", reactExports.memo(GameRule));
        function GameRuleInfo({
          children
        }) {
          const scrollToId = useLayoutStore(state => state.scrollToId);
          reactExports.useEffect(() => {
            if (!scrollToId) return;
            const animationFrame = scrollWrap({
              modalType: "rules_inner",
              elementId: scrollToId,
              offset: isMobileDevice ? 12 : 8
            });
            return () => cancelAnimationFrame(animationFrame);
          }, [scrollToId]);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "GameRuleInfo",
            className: cn("px-4 pt-2", {
              "pt-3": isMobileDevice
            }),
            children
          });
        }
        const GameRuleInfo$1 = exports("G", reactExports.memo(GameRuleInfo));
        const getTimeString = createdAt => {
          const timeOptions = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "UTC"
          };
          return new Date(createdAt).toLocaleString("en-US", timeOptions);
        };
        const gameTypeStringMap = {
          [GameType.AUTO_ROULETTE]: "Auto Roulette",
          [GameType.ROULETTE]: "Roulette",
          [GameType.AUTO_SIC_BO]: "Auto Sic Bo",
          [GameType.SIC_BO]: "Sic Bo",
          [GameType.BACCARAT]: "Baccarat"
        };
        function GroupItem({
          history,
          collapsed
        }) {
          const {
            roundCreatedAt,
            betTotal,
            winTotal,
            gameType,
            currency,
            status
          } = history;
          const {
            histories,
            next
          } = useHistoryStore(state => state);
          const lastHistory = histories.at(-1);
          const isLastItem = lastHistory && lastHistory.id === history.id;
          const openDesktopModal = useLayoutStore(state => state.openDesktopModal);
          const {
            winMax
          } = history || {};
          const finalUserWin = winMax && winTotal > winMax ? winMax : winTotal;
          const itemRef = reactExports.useRef(null);
          const intersectionObserver = reactExports.useRef(null);
          const isFinished = status === "finished";
          const getMoreHistories = () => {
            var _connectIns;
            if (!next) return;
            (_connectIns = connectIns) === null || _connectIns === void 0 || _connectIns.listBetHistory(DEFAULT_HISTORY_LIMIT, next);
          };
          reactExports.useEffect(() => {
            if (isLastItem && collapsed) {
              getMoreHistories();
            }
          }, [collapsed, isLastItem]);
          reactExports.useEffect(() => {
            if (!itemRef.current || !isLastItem) return;
            if (!intersectionObserver.current) {
              intersectionObserver.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                  getMoreHistories();
                }
              });
            }
            const currentItem = itemRef.current;
            const observer = intersectionObserver.current;
            if (currentItem) {
              if (isLastItem) {
                observer.observe(currentItem);
              } else {
                observer.unobserve(currentItem);
              }
            }
            return () => {
              if (currentItem && observer) {
                observer.unobserve(currentItem);
              }
            };
          }, [isLastItem]);
          return roundCreatedAt && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            ref: itemRef,
            className: "gridRow",
            onClick: () => {
              useHistoryStore.setState({
                currentHistoryContent: history
              });
              if (isMobileDevice) {
                useLayoutStore.setState({
                  menuPage: "history_content"
                });
              } else {
                openDesktopModal("history_content");
              }
              playSound(["click"]);
              scrollWrapToTop("history_content");
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "gridCell",
              children: getTimeString(roundCreatedAt)
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "gridCell overflow-hidden truncate whitespace-nowrap",
              children: gameTypeStringMap[gameType]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "gridCell",
              children: currencyFormat(betTotal, currency)
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "gridCell flex items-center justify-end",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(GameHistoryResult, {
                status,
                result:
                // For cancelled games, show the "0" amount as the result since no win/loss occurred
                isFinished ? finalUserWin - betTotal : 0,
                currency,
                className: "flex-grow overflow-hidden truncate text-right"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Icon.HistoryItemRight, {
                className: "ml-[.5rem] h-3 w-3 flex-shrink-0"
              })]
            })]
          });
        }
        const GroupItem$1 = reactExports.memo(GroupItem);
        function DateGroup(props) {
          var _daySubtotals$date;
          const {
            date
          } = props;
          const {
            histories,
            groupedHistoryId,
            daySubtotals
          } = useHistoryStore(state => state);
          const rootEmFontSize = useLayoutStore(s => s.rootEmFontSize);
          const {
            bet,
            win
          } = (_daySubtotals$date = daySubtotals[date]) !== null && _daySubtotals$date !== void 0 ? _daySubtotals$date : {
            bet: 0,
            win: 0
          };
          const historiesId = groupedHistoryId[date];
          const groupedHistories = histories.filter(({
            id
          }) => historiesId.find(historyId => historyId === id));
          const [expanded, setExpanded] = reactExports.useState(true);
          const groupRef = reactExports.useRef(null);
          const toggleGroup = () => {
            playSound(["click"]);
            setExpanded(prev => {
              const isExpanded = !prev;
              if (groupRef.current) {
                const heightInRem = groupRef.current.scrollHeight / rootEmFontSize;
                groupRef.current.style.height = isExpanded ? `${heightInRem}rem` : "0";
              }
              return isExpanded;
            });
          };
          reactExports.useEffect(() => {
            if (groupRef.current && expanded) {
              const heightInRem = groupRef.current.scrollHeight / rootEmFontSize;
              groupRef.current.style.height = `${heightInRem}rem`;
            }
          }, [expanded, historiesId]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "pb-[0.75rem]",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "groupHeader gridRow cursor-pointer",
              onClick: toggleGroup,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "gridCell col-span-2",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex w-[47%] justify-between",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    children: date
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: `arrowIcon ${expanded ? "expanded" : "collapsed"}`,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.UpArrow, {
                      className: "h-3 w-3"
                    })
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "gridCell",
                children: currencyFormat(bet, histories[0].currency)
              }), /* @__PURE__ */jsxRuntimeExports.jsx(GameHistoryResult, {
                className: "gridCell",
                status: histories[0].status,
                result: win - bet,
                currency: histories[0].currency
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: `groupContent ${expanded ? "expanded" : "collapsed"}`,
              ref: groupRef,
              children: groupedHistories.map((history, idx) => /* @__PURE__ */jsxRuntimeExports.jsx(GroupItem$1, {
                history,
                collapsed: !expanded
              }, idx))
            })]
          });
        }
        const DateGroup$1 = reactExports.memo(DateGroup);
        function EmptyHistory() {
          const {
            closeMenu
          } = useLayoutStore();
          const {
            t
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "EmptyHistory",
            className: "mt-[-.28rem] flex h-full flex-col items-center justify-center",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Icon.HistoryGolden, {
              className: "mt-[-3.5rem] h-[3rem] w-[3rem]"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
              className: "mt-3 pb-1 text-[1rem] font-semibold tracking-[-0.030rem] text-[#EADFD2]",
              children: t("COMMON.HISTORY_EMPTY1")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "w-[16rem] pb-[0.95rem] text-center",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("p", {
                className: "text-[.75rem] leading-[1rem] tracking-[-0.015rem] text-[#B0B0B0]",
                children: t("COMMON.HISTORY_EMPTY2")
              }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                className: "text-[.75rem] leading-[1rem] tracking-[-0.015rem] text-[#B0B0B0]",
                children: t("COMMON.HISTORY_EMPTY3")
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
              id: "EmptyHistoryButton",
              onClick: closeMenu,
              children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                children: t("COMMON.PLACE_A_BET")
              })
            })]
          });
        }
        const EmptyHistory$1 = reactExports.memo(EmptyHistory);
        function GameHistory() {
          const groupedHistoryId = useHistoryStore(state => state.groupedHistoryId);
          const historyKeys = Object.keys(groupedHistoryId);
          const {
            t
          } = useTranslation();
          return historyKeys.length === 0 ? /* @__PURE__ */jsxRuntimeExports.jsx(EmptyHistory$1, {}) : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "GameHistory",
            className: cn("mt-1.5", {
              "mt-2.5": isMobileDevice
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "gridHeader",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "gridRow uppercase",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "gridCell",
                  children: t("COMMON.DATE")
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "gridCell",
                  children: t("COMMON.GAME")
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "gridCell",
                  children: t("COMMON.TOTAL_BET")
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "gridCell",
                  children: t("COMMON.RESULT")
                })]
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              children: historyKeys.map(date => /* @__PURE__ */jsxRuntimeExports.jsx(DateGroup$1, {
                date
              }, date))
            })]
          });
        }
        const GameHistory$1 = exports("k", reactExports.memo(GameHistory));
        const svgContent = {
          mute: type => /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.27305 6.07953L6.39511 8.18648C6.20251 8.32748 5.96446 8.40416 5.71928 8.40416H3.22695V11.5945H5.71928C5.96446 11.5945 6.20251 11.6712 6.39511 11.8122L9.27305 13.9192V6.07953ZM9.0653 4.38559C9.78172 3.86109 10.8333 4.3354 10.8333 5.18303V14.8157C10.8333 15.6633 9.78172 16.1376 9.0653 15.6131L5.55706 13.0447H2.75886C2.15566 13.0447 1.66666 12.5902 1.66666 12.0296V7.9691C1.66666 7.40847 2.15566 6.95398 2.75886 6.95398H5.55706L9.0653 4.38559Z",
              fill: `url(#paint0_linear_13534_17792_mute_${type})`
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M13.5474 7.71536C13.8345 7.42821 14.3001 7.42821 14.5873 7.71536L15.832 8.96014L17.0768 7.71536C17.364 7.42821 17.8295 7.42821 18.1167 7.71536C18.4038 8.00251 18.4038 8.46808 18.1167 8.75523L16.8719 10L18.1167 11.2448C18.4038 11.5319 18.4038 11.9975 18.1167 12.2846C17.8295 12.5718 17.364 12.5718 17.0768 12.2846L15.832 11.0399L14.5873 12.2846C14.3001 12.5718 13.8345 12.5718 13.5474 12.2846C13.2602 11.9975 13.2602 11.5319 13.5474 11.2448L14.7922 10L13.5474 8.75523C13.2602 8.46808 13.2602 8.00251 13.5474 7.71536Z",
              fill: `url(#paint1_linear_10833_327519_mute_${type})`
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("defs", {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: `paint0_linear_13534_17792_mute_${type}`,
                x1: "6.54877",
                y1: "4.16602",
                x2: "3.2474",
                y2: "14.8107",
                gradientUnits: "userSpaceOnUse",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  stopColor: "#C9AE8D"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "1",
                  stopColor: "#A57D4E"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: `paint1_linear_10833_327519_mute_${type}`,
                x1: "15.832",
                y1: "7.5",
                x2: "15.832",
                y2: "12.5",
                gradientUnits: "userSpaceOnUse",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  stopColor: "#C9AE8D"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "1",
                  stopColor: "#A57D4E"
                })]
              })]
            })]
          }),
          low: type => /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.27305 6.07953L6.39511 8.18648C6.20251 8.32748 5.96446 8.40416 5.71928 8.40416H3.22695V11.5945H5.71928C5.96446 11.5945 6.20251 11.6712 6.39511 11.8122L9.27305 13.9192V6.07953ZM9.0653 4.38559C9.78172 3.86109 10.8333 4.3354 10.8333 5.18303V14.8157C10.8333 15.6633 9.78172 16.1376 9.0653 15.6131L5.55706 13.0447H2.75886C2.15566 13.0447 1.66666 12.5902 1.66666 12.0296V7.9691C1.66666 7.40847 2.15566 6.95398 2.75886 6.95398H5.55706L9.0653 4.38559Z",
              fill: `url(#paint0_linear_13534_17792_low_${type})`
            }), /* @__PURE__ */jsxRuntimeExports.jsx("defs", {
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: `paint0_linear_13534_17792_low_${type}`,
                x1: "6.54877",
                y1: "4.16602",
                x2: "3.2474",
                y2: "14.8107",
                gradientUnits: "userSpaceOnUse",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  stopColor: "#C9AE8D"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "1",
                  stopColor: "#A57D4E"
                })]
              })
            })]
          }),
          medium: type => /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.27305 6.07953L6.39511 8.18648C6.20251 8.32748 5.96446 8.40416 5.71928 8.40416H3.22695V11.5945H5.71928C5.96446 11.5945 6.20251 11.6712 6.39511 11.8122L9.27305 13.9192V6.07953ZM9.0653 4.38559C9.78172 3.86109 10.8333 4.3354 10.8333 5.18303V14.8157C10.8333 15.6633 9.78172 16.1376 9.0653 15.6131L5.55706 13.0447H2.75886C2.15566 13.0447 1.66666 12.5902 1.66666 12.0296V7.9691C1.66666 7.40847 2.15566 6.95398 2.75886 6.95398H5.55706L9.0653 4.38559Z",
              fill: `url(#paint0_linear_13534_17792_medium_${type})`
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M13.5328 7.78573C13.8018 7.53721 14.2415 7.53398 14.5148 7.77852C15.1704 8.36495 15.5408 9.16244 15.5408 9.9962C15.5408 10.83 15.1704 11.6274 14.5148 12.2139C14.2415 12.4584 13.8018 12.4552 13.5328 12.2067C13.2638 11.9581 13.2673 11.5584 13.5407 11.3139C13.9334 10.9626 14.1519 10.4884 14.1519 9.9962C14.1519 9.504 13.9334 9.02982 13.5407 8.67852C13.2673 8.43397 13.2638 8.03426 13.5328 7.78573Z",
              fill: `url(#paint2_linear_13534_17792_medium_${type})`
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("defs", {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: `paint0_linear_13534_17792_medium_${type}`,
                x1: "6.54877",
                y1: "4.16602",
                x2: "3.2474",
                y2: "14.8107",
                gradientUnits: "userSpaceOnUse",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  stopColor: "#C9AE8D"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "1",
                  stopColor: "#A57D4E"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: `paint2_linear_13534_17792_medium_${type}`,
                x1: "15.9963",
                y1: "5.83203",
                x2: "13.0905",
                y2: "12.9866",
                gradientUnits: "userSpaceOnUse",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  stopColor: "#C9AE8D"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "1",
                  stopColor: "#A57D4E"
                })]
              })]
            })]
          }),
          high: type => /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.27305 6.07953L6.39511 8.18648C6.20251 8.32748 5.96446 8.40416 5.71928 8.40416H3.22695V11.5945H5.71928C5.96446 11.5945 6.20251 11.6712 6.39511 11.8122L9.27305 13.9192V6.07953ZM9.0653 4.38559C9.78172 3.86109 10.8333 4.3354 10.8333 5.18303V14.8157C10.8333 15.6633 9.78172 16.1376 9.0653 15.6131L5.55706 13.0447H2.75886C2.15566 13.0447 1.66666 12.5902 1.66666 12.0296V7.9691C1.66666 7.40847 2.15566 6.95398 2.75886 6.95398H5.55706L9.0653 4.38559Z",
              fill: `url(#paint0_linear_13534_17792_high_${type})`
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M15.5067 6.02056C15.7757 5.77203 16.2154 5.7688 16.4887 6.01335C17.6685 7.06864 18.3333 8.50196 18.3333 9.9987C18.3333 11.4954 17.6685 12.9288 16.4887 13.984C16.2154 14.2286 15.7757 14.2254 15.5067 13.9768C15.2377 13.7283 15.2412 13.3286 15.5146 13.0841C16.4315 12.2639 16.9444 11.1539 16.9444 9.9987C16.9444 8.84353 16.4315 7.73351 15.5146 6.91334C15.2412 6.6688 15.2377 6.26908 15.5067 6.02056Z",
              fill: `url(#paint1_linear_13534_17792_high_${type})`
            }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
              d: "M13.5328 7.78573C13.8018 7.53721 14.2415 7.53398 14.5148 7.77852C15.1704 8.36495 15.5408 9.16244 15.5408 9.9962C15.5408 10.83 15.1704 11.6274 14.5148 12.2139C14.2415 12.4584 13.8018 12.4552 13.5328 12.2067C13.2638 11.9581 13.2673 11.5584 13.5407 11.3139C13.9334 10.9626 14.1519 10.4884 14.1519 9.9962C14.1519 9.504 13.9334 9.02982 13.5407 8.67852C13.2673 8.43397 13.2638 8.03426 13.5328 7.78573Z",
              fill: `url(#paint2_linear_13534_17792_high_${type})`
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("defs", {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: `paint0_linear_13534_17792_high_${type}`,
                x1: "6.54877",
                y1: "4.16602",
                x2: "3.2474",
                y2: "14.8107",
                gradientUnits: "userSpaceOnUse",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  stopColor: "#C9AE8D"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "1",
                  stopColor: "#A57D4E"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: `paint1_linear_13534_17792_high_${type}`,
                x1: "15.9963",
                y1: "5.83203",
                x2: "13.0905",
                y2: "12.9866",
                gradientUnits: "userSpaceOnUse",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  stopColor: "#C9AE8D"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "1",
                  stopColor: "#A57D4E"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: `paint2_linear_13534_17792_high_${type}`,
                x1: "15.9963",
                y1: "5.83203",
                x2: "13.0905",
                y2: "12.9866",
                gradientUnits: "userSpaceOnUse",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  stopColor: "#C9AE8D"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "1",
                  stopColor: "#A57D4E"
                })]
              })]
            })]
          })
        };
        const getLevel = level => {
          if (level === 0) return "mute";
          if (level < 0.34) return "low";
          if (level < 0.67) return "medium";
          return "high";
        };
        function SoundButton(props) {
          const {
            level,
            onClick,
            type
          } = props;
          const svgLevel = getLevel(level);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "SoundButton",
            className: "center h-8 w-8 cursor-pointer",
            onClick: () => {
              playSound(["click"]);
              if (onClick) onClick();
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              children: svgContent[svgLevel](type)
            })
          });
        }
        const SoundButton$1 = exports("L", reactExports.memo(SoundButton));
        const animationConfig = {
          type: "spring",
          duration: 0.45,
          stiffness: 320,
          damping: 26.67,
          mass: 1
        };
        function Toggle({
          checked
        }) {
          const inputId = reactExports.useId();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("label", {
            id: "Toggle",
            htmlFor: inputId,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
              id: inputId,
              type: "checkbox",
              checked,
              className: "sr-only",
              readOnly: true
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "slider absolute inset-0"
            }), /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
              className: "sliderBar absolute h-full",
              initial: false,
              transition: animationConfig,
              animate: {
                width: checked ? "100%" : "40%"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx(motion.img, {
              src: toggle,
              alt: "Toggle control",
              className: "toggleControl",
              initial: false,
              transition: animationConfig,
              animate: {
                x: checked ? "1rem" : 0,
                y: "-50%",
                rotate: checked ? 45 : 0
              }
            })]
          });
        }
        const Toggle$1 = exports("T", reactExports.memo(Toggle));
        const textClassBase = "text transition-colors duration-300 ease-in-out";
        function SettingToggle(props) {
          const {
            title,
            description,
            className,
            titleClass,
            descClass,
            checked,
            onChange
          } = props;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn("row", className),
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex flex-col items-start justify-center gap-1",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn(textClassBase, "toggleTitle", titleClass, !checked && "text-[#7A7A7A]"),
                children: title
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn(textClassBase, "text-xs", descClass, checked ? "text-[#A57D4E]" : "text-[#644C2F]"),
                style: {
                  letterSpacing: "-0.015rem"
                },
                children: description
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "flex items-center",
              children: /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea$1, {
                className: "size-[3.125rem]",
                onClick: () => {
                  playSound(["click"]);
                  onChange();
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Toggle$1, {
                  checked
                })
              })
            })]
          });
        }
        const SettingToggle$1 = reactExports.memo(SettingToggle);
        const BaseBar = ({
          className
        }) => /* @__PURE__ */jsxRuntimeExports.jsx("div", {
          className: cn("h-[1.125rem] w-[0.1875rem] rounded-[4.375rem] bg-[#A57D4E]", className)
        });
        const sliderIndex = /* @__PURE__ */(() => {
          let index = 1;
          return {
            increment() {
              index = index === 8 ? 1 : index + 1;
            },
            value() {
              return index;
            }
          };
        })();
        function BackgroundRange({
          percent,
          intervalCount = 40
        }) {
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "center w-full gap-[0.1875rem]",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(BaseBar, {}, -2), /* @__PURE__ */jsxRuntimeExports.jsx(BaseBar, {}, -1), Array.from({
              length: intervalCount + 1
            }, (_, i) => i).map((_, idx) => {
              if ((idx + 5) / intervalCount < percent) return /* @__PURE__ */jsxRuntimeExports.jsx(BaseBar, {}, idx);
              if ((idx + 4) / intervalCount < percent) return (
                // Tall bar
                /* @__PURE__ */
                jsxRuntimeExports.jsx(BaseBar, {
                  className: "h-[1rem]"
                }, idx)
              );
              if ((idx + 3) / intervalCount < percent) return (
                // slightly taller bar
                /* @__PURE__ */
                jsxRuntimeExports.jsx(BaseBar, {
                  className: "h-[0.875rem]"
                }, idx)
              );
              return (
                // short bar
                /* @__PURE__ */
                jsxRuntimeExports.jsx(BaseBar, {
                  className: "h-[0.75rem] bg-[#414141]"
                }, idx)
              );
            })]
          });
        }
        function SliderBar(props) {
          const {
            value,
            min = 0,
            max = 1,
            step = 0.01,
            intervalCount,
            onChange
          } = props;
          const percentage = (value - min) / (max - min);
          const sliderBarRef = reactExports.useRef(null);
          usePreventPullToRefresh(sliderBarRef);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "SliderBar",
            ref: sliderBarRef,
            className: "relative w-full",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(BackgroundRange, {
              percent: Number(percentage),
              intervalCount
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "ballRange",
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "absolute h-full",
                style: {
                  left: Math.max(0, percentage * 100) - 0.5 + "%"
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                  src: toggle,
                  className: "absolute left-1/2 top-1/2 w-7 max-w-none -translate-x-1/2 -translate-y-1/2 transform",
                  alt: "Slider control"
                })
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
              className: "absolute left-0 top-0",
              type: "range",
              min,
              max,
              step,
              value,
              onChange: e => {
                playSound([`slider${sliderIndex.value()}`]);
                sliderIndex.increment();
                onChange(+e.target.value);
              }
            })]
          });
        }
        const SliderBar$1 = reactExports.memo(SliderBar);
        function SettingSlider(props) {
          const {
            title,
            value,
            onChange,
            className,
            prefixElement,
            sliderProps,
            intervalCount = 33
          } = props;
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: `row ${className}`,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex w-full flex-col items-start gap-2",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex justify-between self-stretch",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  children: title
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  children: Math.round(value * 100)
                })]
              }), prefixElement ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex w-full items-center justify-between",
                children: [prefixElement, /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "flex-grow pl-[.75rem]",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(SliderBar$1, _objectSpread({
                    value,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange,
                    intervalCount
                  }, sliderProps))
                })]
              }) : /* @__PURE__ */jsxRuntimeExports.jsx(SliderBar$1, {
                value,
                onChange
              })]
            })
          });
        }
        const SettingSlider$1 = exports("K", reactExports.memo(SettingSlider));
        function Audio() {
          const {
            t
          } = useTranslation();
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          const {
            masterVolume,
            studioVolume,
            gameVolume,
            dealerVolume,
            volumeChange,
            toggleAllVolume,
            toggleVolume
          } = useSettingStore();
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(SettingToggle$1, {
              title: t("COMMON.ALL_SOUNDS"),
              description: t("COMMON.TOGGLE_SOUNDS"),
              checked: masterVolume > 0,
              onChange: () => toggleAllVolume()
            }), /* @__PURE__ */jsxRuntimeExports.jsx(SettingSlider$1, {
              title: t("COMMON.STUDIO_SOUNDS"),
              value: studioVolume,
              sliderProps: {
                intervalCount: isSmallDevice ? 30 : 39
              },
              onChange: val => volumeChange("studioVolume", val),
              prefixElement: /* @__PURE__ */jsxRuntimeExports.jsx(SoundButton$1, {
                level: studioVolume,
                onClick: () => toggleVolume("studioVolume"),
                type: "studio"
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(SettingSlider$1, {
              title: t("COMMON.GAME_SOUNDS"),
              value: gameVolume,
              sliderProps: {
                intervalCount: isSmallDevice ? 30 : 39
              },
              onChange: val => volumeChange("gameVolume", val),
              prefixElement: /* @__PURE__ */jsxRuntimeExports.jsx(SoundButton$1, {
                level: gameVolume,
                onClick: () => toggleVolume("gameVolume"),
                type: "game"
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(SettingSlider$1, {
              title: t("COMMON.DEALERS_VOICE"),
              value: dealerVolume,
              sliderProps: {
                intervalCount: isSmallDevice ? 30 : 39
              },
              onChange: val => volumeChange("dealerVolume", val),
              prefixElement: /* @__PURE__ */jsxRuntimeExports.jsx(SoundButton$1, {
                level: dealerVolume,
                onClick: () => toggleVolume("dealerVolume"),
                type: "dealer"
              })
            })]
          });
        }
        const Audio$1 = reactExports.memo(Audio);
        function SettingLink(props) {
          const {
            title,
            value,
            onClick
          } = props;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "row cursor-pointer",
            onClick: () => {
              onClick();
              playSound(["click"]);
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              children: title
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex items-center",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "g-text-golden pr-[0.1rem] pt-[0.1rem] text-xs tracking-[.045rem]",
                children: value
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Icon.RightGolden, {
                className: "w-4"
              })]
            })]
          });
        }
        const SettingLink$1 = reactExports.memo(SettingLink);
        function MultiCheckInput(props) {
          var _inputStatus$status;
          const {
            currentValue,
            placeholder,
            filters,
            onUpdate,
            modalType
          } = props;
          const [value, setValue] = reactExports.useState(currentValue);
          const [inputStatus, setInputStatus] = reactExports.useState();
          const inputRef = reactExports.useRef(null);
          const isVirtualKeyboardOpened = useLayoutStore(state => state.isVirtualKeyboardOpened);
          const rootEmFontSize = useLayoutStore(state => state.rootEmFontSize);
          useVirtualKeyboardOpened(inputRef);
          reactExports.useEffect(() => {
            if (!modalType) return;
            const modalElement = document.querySelector(`[data-modal-type="${modalType}"]`);
            const scrollWrapElement = (modalElement === null || modalElement === void 0 ? void 0 : modalElement.querySelector(".scrollWrap")) || null;
            if (!scrollWrapElement) return;
            if (inputRef.current && isVirtualKeyboardOpened) {
              scrollWrapElement === null || scrollWrapElement === void 0 || scrollWrapElement.scrollTo(0, 7.4 * rootEmFontSize);
            }
            if (!isVirtualKeyboardOpened) {
              scrollWrapElement === null || scrollWrapElement === void 0 || scrollWrapElement.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }
          }, [isVirtualKeyboardOpened, modalType, rootEmFontSize]);
          const filterCheck = reactExports.useCallback(text => {
            if (!filters) return;
            for (const {
              filter,
              errorMessage
            } of filters) {
              const checkPassed = typeof filter === "function" ? filter(text) : filter.test(text);
              if (!checkPassed) {
                return errorMessage;
              }
            }
          }, [filters]);
          const onInputChange = ev => {
            const text = ev.target.value;
            const errorMessage = filterCheck(text);
            if (errorMessage) setInputStatus({
              status: "error",
              message: errorMessage
            });else setInputStatus(void 0);
            setValue(text);
          };
          const updateBtnClick = async () => {
            if (!onUpdate) return;
            const errorMessage = filterCheck(value);
            if (errorMessage) {
              setInputStatus({
                status: "error",
                message: errorMessage
              });
              return;
            }
            const result = isPromise(onUpdate) ? await onUpdate(value) : onUpdate(value);
            const status = result.success ? "success" : "error";
            const message = result.message || "";
            setInputStatus({
              status,
              message
            });
          };
          const hasContent = value.length > 0;
          const hasError = (inputStatus === null || inputStatus === void 0 ? void 0 : inputStatus.status) === "error";
          const isSuccess = (inputStatus === null || inputStatus === void 0 ? void 0 : inputStatus.status) === "success";
          const valueChanged = value !== currentValue;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "MultiCheckInput",
            className: "w-full",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: cn("input-container", hasContent ? "has-content" : "", hasError ? "error-border" : isSuccess ? "success-border" : "default-border"),
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                placeholder: "",
                ref: inputRef,
                className: "bg-transparent",
                value,
                onChange: onInputChange
              }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                className: cn("placeholder", (_inputStatus$status = inputStatus === null || inputStatus === void 0 ? void 0 : inputStatus.status) !== null && _inputStatus$status !== void 0 ? _inputStatus$status : "golden"),
                children: placeholder
              }), valueChanged && !hasError ? /* @__PURE__ */jsxRuntimeExports.jsx(Icon.SuccessCircleButton, {
                className: "absolute right-[0.3rem] w-[2.5rem] cursor-pointer",
                onClick: updateBtnClick
              }) : /* @__PURE__ */jsxRuntimeExports.jsx(Icon.SuccessCircleDisabledButton, {
                className: "absolute right-[0.3rem] w-[2.5rem] cursor-not-allowed"
              })]
            }), inputStatus && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn("message", inputStatus.status),
              children: inputStatus.message
            })]
          });
        }
        const MultiCheckInput$1 = reactExports.memo(MultiCheckInput);
        function isPromise(value) {
          return !!value && typeof value === "object" && typeof value.then === "function";
        }
        function SettingInput() {
          const screenName = useSettingStore(s => s.screenName);
          const {
            t
          } = useTranslation();
          const filters = [{
            // Rules (FND-481):
            // Allowing all characters. No mater what language. (Unicode accepted)
            // Numbers allowed (0-9)
            // Some symbols allowed: underscore (_) and period (.)
            // No spaces allowed
            // Cannot start or end with a period
            // Cannot have consecutive periods
            filter: /^(?!(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*\.\.)(?!(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*\.$)(?!^\.)(?:[\.0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDDB0-\uDDDB\uDDE0-\uDDE9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2-\uDFF6]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79])*$/,
            errorMessage: t("COMMON.ERROR_SYMBOLS")
          }, {
            filter: /^.{3,}$/,
            errorMessage: t("COMMON.ERROR_MIN_3")
          }, {
            filter: /^.{0,20}$/,
            errorMessage: t("COMMON.ERROR_MAX_20")
          }];
          const onUpdate = val => {
            var _connectIns2;
            useSettingStore.setState({
              screenName: val
            });
            (_connectIns2 = connectIns) === null || _connectIns2 === void 0 || _connectIns2.rename(val);
            return {
              success: true,
              message: t("COMMON.SCREEN_NAME_UPDATED")
            };
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "row",
            children: /* @__PURE__ */jsxRuntimeExports.jsx(MultiCheckInput$1, {
              currentValue: screenName,
              placeholder: t("COMMON.SCREEN_NAME"),
              filters,
              onUpdate,
              modalType: "setting"
            })
          });
        }
        const SettingInput$1 = reactExports.memo(SettingInput);
        function TabSwitch(props) {
          const {
            list,
            activeTab,
            onClick
          } = props;
          const {
            wrapperClass,
            tabsBtnContainerClass,
            tabContainerClass,
            textClass
          } = props;
          const [tabPositionX, setTabPositionX] = reactExports.useState(0);
          const [tabWidth, setTabWidth] = reactExports.useState(0);
          const [firstTimeRender, setFirstTimeRender] = reactExports.useState(true);
          const rootEmFontSize = useLayoutStore(s => s.rootEmFontSize);
          reactExports.useLayoutEffect(() => {
            const targetTab = document.getElementById(`qualityTab-${String(activeTab)}`);
            const baseTab = document.getElementById(`qualityTab-${String(list[0].id)}`);
            if (!targetTab || !baseTab) return;
            setTabPositionX(targetTab.getBoundingClientRect().x - baseTab.getBoundingClientRect().x);
            setTabWidth(targetTab.getBoundingClientRect().width);
          }, [activeTab, list, rootEmFontSize]);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: wrapperClass,
            children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn("tabsBtnContainer", tabsBtnContainerClass),
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "tabs p-1",
                children: [list.map(({
                  id,
                  label,
                  disabled
                }) => {
                  const active = activeTab === id;
                  return /* @__PURE__ */jsxRuntimeExports.jsx(ClickableArea$1, {
                    wrapClassName: "w-full h-full",
                    className: "z-[2] h-[125%] w-full",
                    onClick: () => {
                      playSound(["click"]);
                      onClick(id);
                      setFirstTimeRender(false);
                    },
                    id: `qualityTab-${String(id)}`,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: cn("tabContainer", "h-[1.74rem]", tabContainerClass, {
                        active,
                        disabled
                      }),
                      children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: cn("tab", "ml-[0.1rem] mt-[0.1rem] text-[.875rem]", textClass),
                        children: label
                      })
                    })
                  }, String(id));
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: cn("activeTabBackground", {
                    firstTimeRender
                  }),
                  style: {
                    width: `${tabWidth + 1}px`,
                    transform: `translateX(${tabPositionX}px)`
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: cn("container", "h-[1.74rem]", tabContainerClass),
                    children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: cn("background text-[.875rem]")
                    })
                  })
                })]
              })
            })
          });
        }
        const TabSwitch$1 = reactExports.memo(TabSwitch);
        function VideoTabs() {
          const activeTab = useSettingStore(state => state.videoQuality);
          const onTabClick = tab => useSettingStore.setState({
            videoQuality: tab
          });
          const {
            t
          } = useTranslation();
          const tabList = [{
            id: "AUTO",
            label: t("COMMON.VIDEO_AUTO")
          }, {
            id: 0,
            label: t("COMMON.VIDEO_LOW")
          }, {
            id: 1,
            label: t("COMMON.VIDEO_MEDIUM")
          }, {
            id: 2,
            label: t("COMMON.VIDEO_HIGH")
          }, {
            id: 3,
            label: t("COMMON.VIDEO_HD")
          }];
          return /* @__PURE__ */jsxRuntimeExports.jsx(TabSwitch$1, {
            list: tabList,
            activeTab,
            onClick: onTabClick,
            wrapperClass: "pb-4",
            tabContainerClass: "h-[2.25rem]"
          });
        }
        const VideoTabs$1 = reactExports.memo(VideoTabs);
        function Catalog(props) {
          const {
            title,
            item,
            list
          } = props;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "g-subTitle-2 mb-2 ml-2 mt-1",
              children: title
            }), list ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "list mb-6",
              children: item
            }) : item]
          });
        }
        function Setting(props) {
          const {
            gameSpecificsElement
          } = props;
          const {
            otherMessagesEnable,
            toggleOtherMessages
          } = useSettingStore(s => ({
            otherMessagesEnable: s.otherMessagesEnable,
            toggleOtherMessages: s.toggleOtherMessages
          }));
          const openDesktopModal = useLayoutStore(state => state.openDesktopModal);
          const {
            t,
            i18n
          } = useTranslation();
          const selectedLanguageDisplay = reactExports.useMemo(() => {
            var _LANGUAGES$find;
            return ((_LANGUAGES$find = LANGUAGES.find(item => {
              var _i18n$resolvedLanguag;
              return item.code === ((_i18n$resolvedLanguag = i18n.resolvedLanguage) !== null && _i18n$resolvedLanguag !== void 0 ? _i18n$resolvedLanguag : i18n.language);
            })) === null || _LANGUAGES$find === void 0 ? void 0 : _LANGUAGES$find.name) || LANGUAGES[0].name;
          }, [i18n.resolvedLanguage, i18n.language]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "setting",
            className: cn("px-4 pt-2", {
              "mt-[-0.275rem]": !isMobileDevice
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Catalog, {
              title: t("COMMON.VIDEO"),
              item: /* @__PURE__ */jsxRuntimeExports.jsx(VideoTabs$1, {})
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Catalog, {
              list: true,
              title: t("COMMON.GENERAL"),
              item: /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(SettingToggle$1, {
                  title: t("COMMON.PLAYER_MESSAGES"),
                  description: t("COMMON.PLAYER_MESSAGES_TIP"),
                  checked: otherMessagesEnable,
                  onChange: toggleOtherMessages
                }), /* @__PURE__ */jsxRuntimeExports.jsx(SettingInput$1, {}), /* @__PURE__ */jsxRuntimeExports.jsx(SettingLink$1, {
                  title: t("COMMON.LANGUAGE"),
                  value: selectedLanguageDisplay.toUpperCase(),
                  onClick: () => {
                    if (isMobileDevice) {
                      useLayoutStore.setState({
                        menuPage: "language"
                      });
                    } else {
                      openDesktopModal("language");
                    }
                    scrollWrapToTop("language");
                  }
                })]
              })
            }), gameSpecificsElement, isMobileDevice && /* @__PURE__ */jsxRuntimeExports.jsx(Catalog, {
              list: true,
              title: t("COMMON.SOUND"),
              item: /* @__PURE__ */jsxRuntimeExports.jsx(Audio$1, {})
            })]
          });
        }
        const Setting$1 = exports("f", reactExports.memo(Setting));
        function SettingLanguage() {
          const {
            i18n
          } = useTranslation();
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "list selectList mx-4 mb-4 mt-3",
            children: LANGUAGES.map(item => {
              var _i18n$resolvedLanguag2;
              return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: cn({
                  checked: item.code === ((_i18n$resolvedLanguag2 = i18n.resolvedLanguage) !== null && _i18n$resolvedLanguag2 !== void 0 ? _i18n$resolvedLanguag2 : i18n.language)
                }, "row cursor-pointer hover:brightness-125"),
                onClick: () => {
                  playSound(["click"]);
                  changeLanguage(item.code);
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "text",
                  children: item.display
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Icon.CheckMark, {
                  className: "checkMark"
                })]
              }, item.code);
            })
          });
        }
        const SettingLanguage$1 = exports("S", reactExports.memo(SettingLanguage));
        const NotificationHint = exports("N", ({
          className
        }) => {
          const supportChatUnread = useChatStore(s => s.supportChatUnread);
          return supportChatUnread > 0 ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: cn(`notificationHint pointer-events-none ${isMobileDevice ? "border-[#191b1b]" : "border-[#020301]"}`, className),
            children: supportChatUnread > 9 ? "9+" : supportChatUnread
          }) : null;
        });
        const statisticTabs = ["hotCold", "last500", "advanced"];
        const statisticSubTabs = ["grid", "racetrack"];
        const useStatisticStore = exports("l", create()(subscribeWithSelector(persist(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        set => ({
          numberOfRounds: 500,
          activeTab: "last500",
          activeBoard: "grid",
          advancedMap: {
            [BetTypeEnum.STRAIGHT_UP_0]: 0,
            [BetTypeEnum.RED]: 0,
            [BetTypeEnum.BLACK]: 0,
            [BetTypeEnum.ODD]: 0,
            [BetTypeEnum.EVEN]: 0,
            [BetTypeEnum.LOW]: 0,
            [BetTypeEnum.HIGH]: 0,
            [BetTypeEnum.DOZEN_1]: 0,
            [BetTypeEnum.DOZEN_13]: 0,
            [BetTypeEnum.DOZEN_25]: 0,
            [BetTypeEnum.COLUMN_1]: 0,
            [BetTypeEnum.COLUMN_2]: 0,
            [BetTypeEnum.COLUMN_3]: 0,
            [BetTypeEnum.TIER]: 0,
            [BetTypeEnum.ORPH]: 0,
            [BetTypeEnum.VOISINS]: 0,
            [BetTypeEnum.ZERO]: 0
          }
        }), {
          name: "useStatisticStore",
          storage: createJSONStorage(() => localStorage),
          onRehydrateStorage: () => state => {
            if (!state) return;
            const {
              activeTab = "last500",
              activeBoard = "grid"
            } = state;
            if (!statisticTabs.includes(activeTab)) {
              state.activeTab = "last500";
            }
            if (!statisticSubTabs.includes(activeBoard)) {
              state.activeBoard = "grid";
            }
          }
        }))));
        const useWinNumberStore$2 = getWinNumberStore();
        const useStatisticAdvanced = () => {
          reactExports.useEffect(() => {
            const calculateAdvancedMap = () => {
              const {
                numberOfRounds
              } = useStatisticStore.getState();
              const {
                history
              } = useWinNumberStore$2.getState();
              const displayHistory = [...history].slice(-numberOfRounds);
              const sum = {
                [BetTypeEnum.STRAIGHT_UP_0]: 0,
                [BetTypeEnum.RED]: 0,
                [BetTypeEnum.BLACK]: 0,
                [BetTypeEnum.ODD]: 0,
                [BetTypeEnum.EVEN]: 0,
                [BetTypeEnum.LOW]: 0,
                [BetTypeEnum.HIGH]: 0,
                [BetTypeEnum.DOZEN_1]: 0,
                [BetTypeEnum.DOZEN_13]: 0,
                [BetTypeEnum.DOZEN_25]: 0,
                [BetTypeEnum.COLUMN_1]: 0,
                [BetTypeEnum.COLUMN_2]: 0,
                [BetTypeEnum.COLUMN_3]: 0,
                [BetTypeEnum.TIER]: 0,
                [BetTypeEnum.ORPH]: 0,
                [BetTypeEnum.VOISINS]: 0,
                [BetTypeEnum.ZERO]: 0
              };
              displayHistory.forEach(str => {
                const num = Number(str);
                if (num === 0) sum[BetTypeEnum.STRAIGHT_UP_0]++;
                Object.entries(OUTER_GROUP_MAP).forEach(([key, arr]) => {
                  if (arr.includes("straight-" + num)) sum[key]++;
                });
                Object.entries(raceTrackToStraight).forEach(([key, arr]) => {
                  if (arr.includes("straight-" + num)) sum[key]++;
                });
              });
              const entriesList = Object.entries(sum).map(([key, val]) => [key, Math.round(val / numberOfRounds * 100)]);
              useStatisticStore.setState({
                advancedMap: Object.fromEntries(entriesList)
              });
            };
            const unsubRounds = useStatisticStore.subscribe(state => state.numberOfRounds, () => calculateAdvancedMap());
            const unsubHistory = useWinNumberStore$2.subscribe(state => {
              if (state.history) calculateAdvancedMap();
            });
            calculateAdvancedMap();
            return () => {
              unsubRounds();
              unsubHistory();
            };
          }, []);
        };
        const Unit$1 = props => {
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn("unit", props.className),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "title",
              children: props.title
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "num",
              children: [props.num, "%"]
            })]
          });
        };
        function StatisticsGrid(props) {
          const advancedMap = useStatisticStore(s => s.advancedMap);
          return /* @__PURE__ */jsxRuntimeExports.jsx(motion$1.div, {
            className: cn("absolute bottom-0 flex flex-col justify-end", props.className),
            animate: props.active ? "open" : "closed",
            initial: "closed",
            variants: {
              closed: {
                opacity: 0
              },
              open: {
                opacity: 1
              }
            },
            transition: {
              duration: 0.3
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "relative",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                src: Bg,
                alt: "Grid background"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "1st",
                num: advancedMap[BetTypeEnum.DOZEN_1],
                className: "left-[4.37rem] top-[0.3rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "2nd",
                num: advancedMap[BetTypeEnum.DOZEN_13],
                className: "right-[9.05rem] top-[0.3rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "3rd",
                num: advancedMap[BetTypeEnum.DOZEN_25],
                className: "right-[4.35rem] top-[0.3rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "Zero",
                num: advancedMap[BetTypeEnum.STRAIGHT_UP_0],
                className: "left-[0.4rem] top-[5.1rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "Red",
                num: advancedMap[BetTypeEnum.RED],
                className: "xl left-[5.6rem] top-[5.03rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "Black",
                num: advancedMap[BetTypeEnum.BLACK],
                className: "xl right-[5.55rem] top-[5.03rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "1 - 18",
                num: advancedMap[BetTypeEnum.LOW],
                className: "bottom-[0.45rem] left-[3.8rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "19 - 36",
                num: advancedMap[BetTypeEnum.HIGH],
                className: "bottom-[0.45rem] left-[7.3rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "Odd",
                num: advancedMap[BetTypeEnum.ODD],
                className: "bottom-[0.45rem] right-[7.3rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "Even",
                num: advancedMap[BetTypeEnum.EVEN],
                className: "bottom-[0.45rem] right-[3.8rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "3rd",
                num: advancedMap[BetTypeEnum.COLUMN_3],
                className: "right-[0.4rem] top-[2.75rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "2nd",
                num: advancedMap[BetTypeEnum.COLUMN_2],
                className: "right-[0.4rem] top-[5.2rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit$1, {
                title: "1st",
                num: advancedMap[BetTypeEnum.COLUMN_1],
                className: "right-[0.4rem] top-[7.6rem]"
              })]
            })
          });
        }
        const Unit = props => {
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn("unit", props.className),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "title",
              children: props.title
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "num",
              children: [props.num, "%"]
            })]
          });
        };
        function StatisticsRacetrack(props) {
          const advancedMap = useStatisticStore(s => s.advancedMap);
          return /* @__PURE__ */jsxRuntimeExports.jsx(motion$1.div, {
            className: cn("absolute bottom-5", props.className),
            animate: props.active ? "open" : "closed",
            initial: "closed",
            variants: {
              closed: {
                opacity: 0
              },
              open: {
                opacity: 1
              }
            },
            transition: {
              duration: 0.3
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "statisticRacetrack relative",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                src: Bg$1,
                alt: "Race track background"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit, {
                title: "Red",
                num: advancedMap[BetTypeEnum.RED],
                className: "left-[0.27rem] top-[3.95rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit, {
                title: "Odd",
                num: advancedMap[BetTypeEnum.ODD],
                className: "left-[6.7rem] top-[0.3rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit, {
                title: "Even",
                num: advancedMap[BetTypeEnum.EVEN],
                className: "right-[6.45rem] top-[0.3rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit, {
                title: "Black",
                num: advancedMap[BetTypeEnum.BLACK],
                className: "right-[0.24rem] top-[3.95rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit, {
                title: "Tiers",
                num: advancedMap[BetTypeEnum.TIER],
                className: "left-[4.2rem] top-[3.97rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit, {
                title: "Orph",
                num: advancedMap[BetTypeEnum.ORPH],
                className: "left-[7.9rem] top-[3.97rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit, {
                title: "Vois",
                num: advancedMap[BetTypeEnum.VOISINS],
                className: "right-[6.8rem] top-[3.97rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit, {
                title: "Zero",
                num: advancedMap[BetTypeEnum.ZERO],
                className: "right-[3.75rem] top-[3.97rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit, {
                title: "1 - 18",
                num: advancedMap[BetTypeEnum.LOW],
                className: "bottom-[0.25rem] left-[6.65rem]"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Unit, {
                title: "19 - 36",
                num: advancedMap[BetTypeEnum.HIGH],
                className: "bottom-[0.25rem] right-[6.5rem]"
              })]
            })
          });
        }
        const StatisticAdvanced = () => {
          const activeBoard = useStatisticStore(state => state.activeBoard);
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          const {
            t
          } = useTranslation();
          const tabList = [{
            id: "grid",
            label: t("COMMON.BETTING_GRID")
          }, {
            id: "racetrack",
            label: t("COMMON.RACETRACK")
          }];
          useStatisticAdvanced();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "StatisticAdvanced",
            className: cn({
              "center pb-[2.2rem] pl-[0.1rem]": isMobileDevice,
              "mt-10": isSmallDevice
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: cn("relative mt-10 h-[12.25rem] w-[20.56rem]", {
                "mt-[8rem] scale-[.81]": isSmallDevice
              }),
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(StatisticsGrid, {
                active: activeBoard === "grid"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(StatisticsRacetrack, {
                active: activeBoard === "racetrack"
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(TabSwitch$1, {
              list: tabList,
              activeTab: activeBoard,
              onClick: tab => useStatisticStore.setState({
                activeBoard: tab
              }),
              tabsBtnContainerClass: cn("mx-auto mt-[1rem] w-[11.375rem] mb-2", {
                "-mb-1": isMobileDevice,
                "mb-5": isSmallDevice
              }),
              textClass: "text-xs"
            })]
          });
        };
        const centerPos = {
          x: 112.8,
          y: 126.2
        };
        const dotL = {
          x: 104,
          y: 32
        };
        const dotR = {
          x: 120,
          y: 32
        };
        function PolarChart({
          mapping,
          hotArr,
          coldArr
        }) {
          const renderList = mapToNineStep(mapping);
          const colorType = (result, type) => {
            const color = hotArr.includes(result) ? "red" : coldArr.includes(result) ? "blue" : "gray";
            if (type === "inner" && color === "gray") return "#F9F9F930";
            return `url(#PolarChart_${type}_${color})`;
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "absolute top-0 size-full",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
              viewBox: "0 0 226 251",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "size-full",
              children: [renderList.map((ele, index) => {
                return /* @__PURE__ */jsxRuntimeExports.jsxs("g", {
                  style: {
                    transformOrigin: `${centerPos.x}px ${centerPos.y}px`
                  },
                  transform: `rotate(${9.74 * index})`,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("path", {
                    d: convertToPath(ele.step),
                    fill: colorType(ele.result, "inner"),
                    className: "opacity-60"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                    d: convertToPath(ele.step),
                    stroke: colorType(ele.result, "stroke"),
                    strokeWidth: "0.5"
                  })]
                }, index);
              }), /* @__PURE__ */jsxRuntimeExports.jsx(SVGColor, {})]
            })
          });
        }
        function mapToNineStep(mapping) {
          const numArr = mapping.map(([, value]) => value);
          const min = Math.min(...numArr);
          const max = Math.max(...numArr);
          const range = (max - min) / 9;
          return mapping.map(([result, count]) => {
            let step = Math.floor((count - min) / range) + 1;
            if (step > 9) step = 9;
            return {
              result,
              count,
              step
            };
          });
        }
        const convertToPath = result => {
          const percent = result / 9 * 0.6 + 0.3;
          const _dotL = {
            x: centerPos.x + (dotL.x - centerPos.x) * percent,
            y: centerPos.y + (dotL.y - centerPos.y) * percent
          };
          const _dotR = {
            x: centerPos.x + (dotR.x - centerPos.x) * percent,
            y: centerPos.y + (dotR.y - centerPos.y) * percent
          };
          return `M${centerPos.x} ${centerPos.y}L${_dotL.x} ${_dotL.y}L${_dotR.x} ${_dotR.y}Z`;
        };
        const SVGColor = () => /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [/* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
            id: "PolarChart_inner_red",
            gradientUnits: "userSpaceOnUse",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              stopColor: "#B02525"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              offset: "1",
              stopColor: "#D94747"
            })]
          }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
            id: "PolarChart_inner_blue",
            gradientUnits: "userSpaceOnUse",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              stopColor: "#4E6EB4"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              offset: "1",
              stopColor: "#6B86C0"
            })]
          }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
            id: "PolarChart_stroke_red",
            gradientUnits: "userSpaceOnUse",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              stopColor: "#D94747"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              offset: "1",
              stopColor: "#E58484"
            })]
          }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
            id: "PolarChart_stroke_gray",
            gradientUnits: "userSpaceOnUse",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              stopColor: "#555555",
              stopOpacity: "0.2"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              offset: "1",
              stopColor: "#B0B0B0",
              stopOpacity: "0.2"
            })]
          }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
            id: "PolarChart_stroke_blue",
            gradientUnits: "userSpaceOnUse",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              stopColor: "#4E6EB4"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              offset: "1",
              stopColor: "#4E6EB4"
            })]
          })]
        });
        const useWinNumberStore$1 = getWinNumberStore();
        const calcTotal = (history, count) => {
          const mapping = new Map(RACE_ORDER.map(num => [num, 0]));
          history.slice(-count).forEach(str => {
            const num = Number(str);
            mapping.set(num, mapping.get(num) + 1);
          });
          return Array.from(mapping.entries());
        };
        const StatisticHotCold = () => {
          const history = useWinNumberStore$1(state => state.history);
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          const numberOfRounds = useStatisticStore(state => state.numberOfRounds);
          const mapping = calcTotal(history, numberOfRounds);
          const sorted = [...mapping].sort((a, b) => b[1] - a[1]).map(arr => arr[0]);
          const hotArr = sorted.slice(0, 5);
          const coldArr = sorted.slice(-5).reverse();
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "StatisticHotCold",
            className: "center mr-[0.2rem] flex h-full gap-4 pb-[1.9rem] pt-8",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "center resultCol flex-col gap-[0.6rem]",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "center relative h-[1.75rem] w-6",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Hot, {
                  className: "w-5"
                })
              }), hotArr.map((bet, idx) => /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("bet", getBetColor(bet)),
                children: bet
              }, idx))]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "relative h-[13.4rem] w-[13.6rem]",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                src: radial,
                className: cn("mt-[-6%] w-[106%] max-w-none", isSmallDevice && "mt-[6%]"),
                alt: "Radial Background"
              }), history.length > 0 && /* @__PURE__ */jsxRuntimeExports.jsx(PolarChart, {
                mapping,
                hotArr,
                coldArr
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                src: polarCenter,
                className: cn("absolute left-[41.3%] top-[41.3%] w-[2.3rem]", isSmallDevice && "left-[39%]"),
                alt: "Polar Center"
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "center resultCol typeCold flex-col gap-[0.6rem]",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "center relative h-[1.75rem] w-6",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Icon.Cold, {
                  className: "w-5"
                })
              }), coldArr.map((bet, idx) => /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("bet", getBetColor(bet)),
                children: bet
              }, idx))]
            })]
          });
        };
        const useWinNumberStore = getWinNumberStore();
        const StatisticLast500 = () => {
          const history = useWinNumberStore(state => state.history);
          const numberOfRounds = useStatisticStore(state => state.numberOfRounds);
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          const itemsPerRow = isSmallDevice ? 6 : 8;
          const containerWidth = `calc(${itemsPerRow} * 1.875rem + ${itemsPerRow - 1} * 0.75rem)`;
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            id: "StatisticLast500",
            className: cn("center pb-[11.25rem] pt-2", {
              "pt-3": isMobileDevice
            }),
            children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "flex max-w-full flex-wrap gap-3",
              style: {
                width: containerWidth
              },
              children: [...history].reverse().slice(0, numberOfRounds).map((bet, idx) => /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: cn("bet", getBetColor(bet)),
                children: bet
              }, idx))
            })
          });
        };
        const Statistic = exports("m", () => {
          const activeTab = useStatisticStore(state => state.activeTab);
          const scrollWrapRef = reactExports.useRef(null);
          usePreventPullToRefresh(scrollWrapRef);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            ref: scrollWrapRef,
            id: "Statistic",
            className: "scrollWrap mx-auto h-full w-full px-[0.875rem]",
            children: [activeTab === "hotCold" && /* @__PURE__ */jsxRuntimeExports.jsx(StatisticHotCold, {}), activeTab === "last500" && /* @__PURE__ */jsxRuntimeExports.jsx(StatisticLast500, {}), activeTab === "advanced" && /* @__PURE__ */jsxRuntimeExports.jsx(StatisticAdvanced, {})]
          });
        });
        const StatisticFooter = exports("n", () => {
          const {
            t
          } = useTranslation();
          const isSmallDevice = useConfigStore(s => s.IS_SMALL_DEVICE);
          const {
            activeTab,
            numberOfRounds
          } = useStatisticStore(state => state);
          const tabList = [{
            id: "hotCold",
            label: t("COMMON.HOT_COLD")
          }, {
            id: "last500",
            label: t("COMMON.LAST_500")
          }, {
            id: "advanced",
            label: t("COMMON.ADVANCED")
          }];
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn("mt-6 px-4", {
              "mt-2": activeTab === "advanced"
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              id: "NumberOfRounds",
              className: `${isMobileDevice && !isSmallDevice && "px-4"}`,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex h-full flex-col justify-between gap-[0.9rem]",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex justify-between",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t("ROULETTE.NUMBER_OF_ROUNDS")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: numberOfRounds
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "slider",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(SliderBar$1, {
                    value: numberOfRounds,
                    min: 50,
                    max: 500,
                    step: 10,
                    intervalCount: isMobileDevice ? isSmallDevice ? 42 : 46 : 50,
                    onChange: val => {
                      useStatisticStore.setState({
                        numberOfRounds: val
                      });
                    }
                  })
                })]
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(TabSwitch$1, {
              list: tabList,
              activeTab,
              onClick: tab => useStatisticStore.setState({
                activeTab: tab
              }),
              wrapperClass: "pb-4 pt-6",
              tabContainerClass: "h-[2.25rem] pb-[0.2rem] mx-[0.1rem]"
            })]
          });
        });
        const useVisibility = () => {
          const [isVisible, setIsVisible] = reactExports.useState(true);
          const handleVisibilityChange = reactExports.useCallback(() => {
            setIsVisible(!document.hidden);
          }, []);
          reactExports.useEffect(() => {
            document.addEventListener("visibilitychange", handleVisibilityChange, false);
            return () => {
              document.removeEventListener("visibilitychange", handleVisibilityChange, false);
            };
          }, [handleVisibilityChange]);
          return isVisible;
        };
        function RouletteMask({
          isLoading = false,
          virtualBackground
        }) {
          const isVisible = useVisibility();
          const shouldMask = !isLoading && isVisible;
          const maskedBackgroundStyle = {
            backgroundImage: `url(${virtualBackground})`,
            maskImage: `url(${maskBg}), linear-gradient(black, black)`,
            opacity: shouldMask ? 1 : 0
          };
          const fullBackgroundStyle = {
            backgroundImage: `url(${virtualBackground})`,
            opacity: shouldMask ? 0 : 1,
            transition: shouldMask ? "opacity 0.3s ease-in-out" : "none"
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn("rouletteMask", {
                isMobileDevice
              }),
              style: maskedBackgroundStyle
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: cn("rouletteMask rouletteMask--full", {
                isMobileDevice
              }),
              style: fullBackgroundStyle
            })]
          });
        }
        function SpinnerSVG({
          className = ""
        }) {
          const [rotation, setRotation] = reactExports.useState(0);
          const totalTicks = 8;
          reactExports.useEffect(() => {
            const interval = setInterval(() => {
              setRotation(prev => (prev + 2) % totalTicks);
            }, 500);
            return () => clearInterval(interval);
          }, []);
          const getOpacity = index => {
            const relativePosition = (totalTicks + index - rotation) % totalTicks;
            if (relativePosition === 0) return 1;else if (relativePosition === 1) return 0.9;else if (relativePosition === 2) return 0.7;else if (relativePosition === 3) return 0.3;else if (relativePosition === 4) return 0.1;else if (relativePosition === 5) return 0.3;else if (relativePosition === 6) return 0.7;else return 0.9;
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
              id: "Spinner",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 40 40",
              fill: "none",
              className: "h-full w-full",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("g", {
                clipPath: "url(#paint0_angular_17832_33472_clip_path)",
                "data-figma-skip-parse": "true",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("g", {
                  transform: "matrix(7.62072e-10 0.0135 0.0135 -1.10556e-09 20.001 19.9995)",
                  children: reactExports.createElement("foreignObject", {
                    x: "-1555.63",
                    y: "-1555.63",
                    width: "3111.26",
                    height: "3111.26"
                  }, /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    style: {
                      height: "100%",
                      width: "100%",
                      opacity: 1
                    }
                  }))
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.0645 1.93548C18.0645 0.866942 18.9314 0 19.9999 0C21.0685 0 21.9354 0.866942 21.9354 1.93548V7.09677C21.9354 8.16532 21.0685 9.03226 19.9999 9.03226C18.9314 9.03226 18.0645 8.16533 18.0645 7.09677V1.93548Z",
                fill: "#eadfd2",
                style: {
                  opacity: getOpacity(0),
                  transition: "opacity 1s ease-in-out"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M29.123 12.8112C29.6182 12.8112 30.1134 12.6222 30.4914 12.2441L34.1406 8.59494C34.8967 7.83889 34.8967 6.61409 34.1406 5.85805C33.3846 5.10201 32.1598 5.102 31.4037 5.85805L27.7545 9.50725C26.9985 10.2633 26.9985 11.4881 27.7545 12.2441C28.1326 12.6222 28.6278 12.8112 29.123 12.8112Z",
                fill: "#eadfd2",
                style: {
                  opacity: getOpacity(1),
                  transition: "opacity 1s ease-in-out"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32.9023 18.0645H38.0636C39.1321 18.0645 39.9991 18.9314 39.9991 19.9999C39.9991 21.0685 39.1321 21.9354 38.0636 21.9354H32.9023C31.8337 21.9354 30.9668 21.0685 30.9668 19.9999C30.9668 18.9314 31.8337 18.0645 32.9023 18.0645Z",
                fill: "#eadfd2",
                style: {
                  opacity: getOpacity(2),
                  transition: "opacity 1s ease-in-out"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M30.4914 27.756C29.7354 27 28.5106 27 27.7545 27.756C26.9985 28.5121 26.9985 29.7369 27.7545 30.4929L31.4037 34.1421C31.7818 34.5201 32.277 34.7091 32.7722 34.7091C33.2674 34.7091 33.7626 34.5201 34.1406 34.1421C34.8967 33.386 34.8967 32.1612 34.1406 31.4052L30.4914 27.756Z",
                fill: "#eadfd2",
                style: {
                  opacity: getOpacity(3),
                  transition: "opacity 1s ease-in-out"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.0645 32.9037C18.0645 31.8352 18.9314 30.9683 19.9999 30.9683C21.0685 30.9683 21.9354 31.8352 21.9354 32.9037V38.065C21.9354 39.1336 21.0685 40.0005 19.9999 40.0005C18.9314 40.0005 18.0645 39.1336 18.0645 38.065V32.9037Z",
                fill: "#eadfd2",
                style: {
                  opacity: getOpacity(4),
                  transition: "opacity 1s ease-in-out"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.50725 27.756L5.85805 31.4052C5.102 32.1613 5.102 33.3861 5.85805 34.1421C6.23608 34.5201 6.73129 34.7091 7.22651 34.7091C7.72172 34.7091 8.21693 34.5201 8.59496 34.1421L12.2442 30.4929C13.0002 29.7368 13.0002 28.512 12.2442 27.756C11.4881 27 10.2633 26.9999 9.50725 27.756Z",
                fill: "#eadfd2",
                style: {
                  opacity: getOpacity(5),
                  transition: "opacity 1s ease-in-out"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.09677 18.0645C8.16532 18.0645 9.03226 18.9314 9.03226 19.9999C9.03226 21.0685 8.16533 21.9354 7.09677 21.9354H1.93548C0.866942 21.9354 0 21.0685 0 19.9999C0 18.9314 0.866929 18.0645 1.93548 18.0645H7.09677Z",
                fill: "#eadfd2",
                style: {
                  opacity: getOpacity(6),
                  transition: "opacity 1s ease-in-out"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.21756 12.2441C9.59558 12.6222 10.0908 12.8112 10.586 12.8112C11.0812 12.8112 11.5764 12.6222 11.9544 12.2441C12.7105 11.4881 12.7105 10.2633 11.9544 9.50725L8.30524 5.85805C7.54921 5.102 6.32441 5.10201 5.56835 5.85805C4.8123 6.61409 4.8123 7.83889 5.56835 8.59494L9.21756 12.2441Z",
                fill: "#eadfd2",
                style: {
                  opacity: getOpacity(7),
                  transition: "opacity 1s ease-in-out"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx("defs", {
                children: /* @__PURE__ */jsxRuntimeExports.jsx("clipPath", {
                  id: "paint0_angular_17832_33472_clip_path",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.0645 1.93548C18.0645 0.866942 18.9314 0 19.9999 0C21.0685 0 21.9354 0.866942 21.9354 1.93548V7.09677C21.9354 8.16532 21.0685 9.03226 19.9999 9.03226C18.9314 9.03226 18.0645 8.16533 18.0645 7.09677V1.93548ZM7.09677 18.0645C8.16532 18.0645 9.03226 18.9314 9.03226 19.9999C9.03226 21.0685 8.16533 21.9354 7.09677 21.9354H1.93548C0.866942 21.9354 0 21.0685 0 19.9999C0 18.9314 0.866929 18.0645 1.93548 18.0645H7.09677ZM9.50725 27.756L5.85805 31.4052C5.102 32.1613 5.102 33.3861 5.85805 34.1421C6.23608 34.5201 6.73129 34.7091 7.22651 34.7091C7.72172 34.7091 8.21693 34.5201 8.59496 34.1421L12.2442 30.4929C13.0002 29.7368 13.0002 28.512 12.2442 27.756C11.4881 27 10.2633 26.9999 9.50725 27.756ZM18.0645 32.9037C18.0645 31.8352 18.9314 30.9683 19.9999 30.9683C21.0685 30.9683 21.9354 31.8352 21.9354 32.9037V38.065C21.9354 39.1336 21.0685 40.0005 19.9999 40.0005C18.9314 40.0005 18.0645 39.1336 18.0645 38.065V32.9037ZM30.4914 27.756C29.7354 27 28.5106 27 27.7545 27.756C26.9985 28.5121 26.9985 29.7369 27.7545 30.4929L31.4037 34.1421C31.7818 34.5201 32.277 34.7091 32.7722 34.7091C33.2674 34.7091 33.7626 34.5201 34.1406 34.1421C34.8967 33.386 34.8967 32.1612 34.1406 31.4052L30.4914 27.756ZM32.9023 18.0645H38.0636C39.1321 18.0645 39.9991 18.9314 39.9991 19.9999C39.9991 21.0685 39.1321 21.9354 38.0636 21.9354H32.9023C31.8337 21.9354 30.9668 21.0685 30.9668 19.9999C30.9668 18.9314 31.8337 18.0645 32.9023 18.0645ZM29.123 12.8112C29.6182 12.8112 30.1134 12.6222 30.4914 12.2441L34.1406 8.59494C34.8967 7.83889 34.8967 6.61409 34.1406 5.85805C33.3846 5.10201 32.1598 5.102 31.4037 5.85805L27.7545 9.50725C26.9985 10.2633 26.9985 11.4881 27.7545 12.2441C28.1326 12.6222 28.6278 12.8112 29.123 12.8112ZM9.21756 12.2441C9.59558 12.6222 10.0908 12.8112 10.586 12.8112C11.0812 12.8112 11.5764 12.6222 11.9544 12.2441C12.7105 11.4881 12.7105 10.2633 11.9544 9.50725L8.30524 5.85805C7.54921 5.102 6.32441 5.10201 5.56835 5.85805C4.8123 6.61409 4.8123 7.83889 5.56835 8.59494L9.21756 12.2441Z"
                  })
                })
              })]
            })
          });
        }
        const QUALITIES = ["lo", "me", "hi", "hd"];
        const initPlayerInstance = videoEl => {
          const {
            origin,
            pathname
          } = window.location;
          const options = {
            wasmBaseUrl: `${origin}${pathname}libmedia/wasm`,
            container: videoEl,
            isLive: true
          };
          return IKGPlayerFactory.create("libmedia", options);
        };
        var PlayerStatus = /* @__PURE__ */(PlayerStatus2 => {
          PlayerStatus2[PlayerStatus2["STOPPED"] = 0] = "STOPPED";
          PlayerStatus2[PlayerStatus2["DESTROYING"] = 1] = "DESTROYING";
          PlayerStatus2[PlayerStatus2["DESTROYED"] = 2] = "DESTROYED";
          PlayerStatus2[PlayerStatus2["LOADING"] = 3] = "LOADING";
          PlayerStatus2[PlayerStatus2["LOADED"] = 4] = "LOADED";
          PlayerStatus2[PlayerStatus2["PLAYING"] = 5] = "PLAYING";
          PlayerStatus2[PlayerStatus2["PLAYED"] = 6] = "PLAYED";
          PlayerStatus2[PlayerStatus2["PAUSED"] = 7] = "PAUSED";
          PlayerStatus2[PlayerStatus2["CHANGING"] = 9] = "CHANGING";
          PlayerStatus2[PlayerStatus2["SEEKING"] = 8] = "SEEKING";
          return PlayerStatus2;
        })(PlayerStatus || {});
        var PlayerEventType = /* @__PURE__ */(PlayerEventType2 => {
          PlayerEventType2["LOADING"] = "loading";
          PlayerEventType2["LOADED"] = "loaded";
          PlayerEventType2["PLAYING"] = "playing";
          PlayerEventType2["PLAYED"] = "played";
          PlayerEventType2["PAUSED"] = "paused";
          PlayerEventType2["STOPPED"] = "stopped";
          PlayerEventType2["ENDED"] = "ended";
          PlayerEventType2["SEEKING"] = "seeking";
          PlayerEventType2["SEEKED"] = "seeked";
          PlayerEventType2["CHANGING"] = "changing";
          PlayerEventType2["CHANGED"] = "changed";
          PlayerEventType2["TIMEOUT"] = "timeout";
          PlayerEventType2["ERROR"] = "error";
          PlayerEventType2["TIME"] = "time";
          PlayerEventType2["RESUME"] = "resume";
          PlayerEventType2["FIRST_AUDIO_RENDERED"] = "firstAudioRendered";
          PlayerEventType2["FIRST_VIDEO_RENDERED"] = "firstVideoRendered";
          PlayerEventType2["STREAM_UPDATE"] = "streamUpdate";
          PlayerEventType2["PROGRESS"] = "progress";
          PlayerEventType2["VOLUME_CHANGE"] = "volumeChange";
          PlayerEventType2["SUBTITLE_DELAY_CHANGE"] = "subtitleDelayChange";
          return PlayerEventType2;
        })(PlayerEventType || {});
        const useStream = (config = {}) => {
          const {
            playbackSettings = {
              snapshotQuality: 0.1,
              snapshotFormat: "webp",
              volumeMultiplier: 3,
              stopDelay: 1e4,
              retryDelay: 1e4,
              maxRetries: Infinity
            },
            renderMode = 1,
            onPlay,
            onStop,
            onError
          } = config;
          const streams = useConfigStore(s => s.streams);
          const isVisible = useVisibility();
          const {
            settingQuality,
            studioVolume,
            masterVolume
          } = useSettingStore(s => ({
            settingQuality: s.videoQuality,
            studioVolume: s.studioVolume,
            masterVolume: s.masterVolume
          }));
          const {
            isIdleTimeout,
            isExpired,
            isMultiSession
          } = useNetworkStore(state => ({
            isIdleTimeout: state.isIdleTimeout,
            isExpired: state.isExpired,
            isMultiSession: state.isMultiSession
          }));
          const player = reactExports.useRef(null);
          const [videoEl, setVideoEl] = reactExports.useState(null);
          const [snapshot, setSnapshot] = reactExports.useState("");
          const [isLoading, setIsLoading] = reactExports.useState(true);
          const [isInit, setIsInit] = reactExports.useState(false);
          const [streamQuality, setStreamQuality] = reactExports.useState(settingQuality === "AUTO" ? isMobileDevice ? 0 : 3 : settingQuality);
          const isDoDestroyAndPlayRunning = reactExports.useRef(false);
          const stateRefs = reactExports.useRef({
            isVisible,
            isIdleTimeout,
            isMultiSession,
            isExpired,
            streamQuality
          });
          reactExports.useEffect(() => {
            stateRefs.current = {
              isVisible,
              isIdleTimeout,
              isMultiSession,
              isExpired,
              streamQuality
            };
          }, [isVisible, isIdleTimeout, isMultiSession, isExpired, streamQuality]);
          const calculateVolume = reactExports.useCallback(() => studioVolume * masterVolume * playbackSettings.volumeMultiplier, [studioVolume, masterVolume, playbackSettings.volumeMultiplier]);
          const getStreamUrl = () => {
            var _streams$primary$stre, _streams$primary;
            const streamKey = QUALITIES[stateRefs.current.streamQuality];
            return (_streams$primary$stre = streams === null || streams === void 0 || (_streams$primary = streams.primary) === null || _streams$primary === void 0 ? void 0 : _streams$primary[streamKey]) !== null && _streams$primary$stre !== void 0 ? _streams$primary$stre : "";
          };
          const getPlayerStatus = () => {
            var _player$current;
            return (_player$current = player.current) === null || _player$current === void 0 ? void 0 : _player$current.getStatus();
          };
          const isPlaying = () => {
            const status = getPlayerStatus();
            return [PlayerStatus.PLAYING, PlayerStatus.PLAYED].includes(status);
          };
          const getSnapshot = () => {
            if (!player.current) return "";
            try {
              return player.current.snapshot(playbackSettings.snapshotFormat, playbackSettings.snapshotQuality);
            } catch (error) {
              console.warn("Error getting snapshot:", error);
              return "";
            }
          };
          const stopVideoWithSnapshot = async () => {
            setIsLoading(true);
            setSnapshot(getSnapshot());
            if (!player || !isPlaying()) return;
            try {
              console.debug("Destroying player in stopVideoWithSnapshot()");
              await stopAndDestroy(player.current);
              player.current = null;
              onStop === null || onStop === void 0 || onStop();
            } catch (error) {
              console.error("Error stopping video:", error);
            } finally {
              player.current = null;
            }
          };
          const resizePlayer = reactExports.useCallback(() => {
            if (!videoEl || !player.current) return;
            const {
              width,
              height
            } = videoEl.getBoundingClientRect();
            player.current.resize(width, height);
          }, [videoEl]);
          const setRenderMode = mode => {
            if (player.current) player.current.setRenderMode(mode);
          };
          const mutePlayers = () => {
            if (player.current) player.current.setVolume(0);
          };
          const resumeAndSetVolume = async p => {
            if (!p) return;
            await (p === null || p === void 0 ? void 0 : p.resume());
            p.setVolume(calculateVolume());
          };
          const stopAndDestroy = async p => {
            if (!p) return;
            await (p === null || p === void 0 ? void 0 : p.stop());
            await (p === null || p === void 0 ? void 0 : p.destroy());
          };
          const regQualityModeCallback = p => {
            p.on("qualitymode", ev => {
              const isAuto = settingQuality === "AUTO";
              if (!isAuto || !isPlaying()) return;
              const streamQuality2 = stateRefs.current.streamQuality;
              console.debug("qualitymode callback", streamQuality2, ev);
              const {
                type
              } = ev;
              const newQuality = stateRefs.current.streamQuality + (type === "up" ? 1 : -1);
              console.debug("qualitymode callback setting streamQuality to", newQuality);
              setStreamQuality(newQuality);
            });
            p.configQualityMode(stateRefs.current.streamQuality, QUALITIES.length);
            console.debug("Player registered quality mode callback");
          };
          const registerPlayerCallbacks = p => {
            p.on(PlayerEventType.STOPPED, doDestroyAndPlay);
            p.on(PlayerEventType.ENDED, doDestroyAndPlay);
            p.on(PlayerEventType.ERROR, doDestroyAndPlay);
            if (useSettingStore.getState().videoQuality === "AUTO") {
              regQualityModeCallback(p);
            }
          };
          const loadAndPlayVideo = (p, source, timeoutMs = playbackSettings.retryDelay) => {
            return new Promise((resolve, reject) => {
              let timeoutId = null;
              const cleanup = () => {
                if (timeoutId) clearTimeout(timeoutId);
              };
              const onFirstFrame = () => {
                console.debug("First video frame rendered");
                cleanup();
                registerPlayerCallbacks(p);
                resolve();
              };
              const onError2 = error => {
                console.debug("Error in player:", error);
                cleanup();
                reject(error);
              };
              p.on(PlayerEventType.FIRST_VIDEO_RENDERED, onFirstFrame);
              p.on(PlayerEventType.ERROR, onError2);
              timeoutId = setTimeout(() => reject(new Error("First frame timeout")), timeoutMs);
              p === null || p === void 0 || p.load(source).then(() => p === null || p === void 0 ? void 0 : p.play()).catch(error => {
                cleanup();
                reject(error);
              });
            });
          };
          const play = async () => {
            try {
              const url = getStreamUrl();
              useLayoutStore.setState({
                isCanStream: !!url
              });
              console.debug("Playing video with URL:", url);
              if (!url || !videoEl) {
                throw new Error("Player is not initialized");
              }
              player.current = initPlayerInstance(videoEl);
              player.current.setRenderMode(renderMode);
              player.current.setVolume(0);
              player.current.setMaxLatency(3);
              await loadAndPlayVideo(player.current, url);
              await resumeAndSetVolume(player.current);
              onPlay === null || onPlay === void 0 || onPlay();
            } catch (error) {
              console.debug("Error in play():", error);
              onError === null || onError === void 0 || onError(error);
              throw error;
            }
          };
          const doDestroyAndPlay = async (retryCount = 0, maxRetry = playbackSettings.maxRetries) => {
            if (shouldSkipPlay()) return;
            isDoDestroyAndPlayRunning.current = true;
            if (player.current) {
              stopAndDestroy(player.current);
              player.current = null;
              await new Promise(resolve => setTimeout(resolve, 50));
            }
            try {
              console.debug(`Attempting to play video (attempt ${retryCount + 1})`);
              setIsLoading(true);
              await play();
              console.debug("Video successfully playing");
              setIsLoading(false);
              setSnapshot("");
              onPlay === null || onPlay === void 0 || onPlay();
              isDoDestroyAndPlayRunning.current = false;
            } catch (error) {
              if (retryCount >= maxRetry) {
                useLayoutStore.setState({
                  isCanStream: false
                });
                console.debug("Failed to play video after attempts:", error);
                return;
              }
              await new Promise(resolve => setTimeout(resolve, playbackSettings.retryDelay));
              isDoDestroyAndPlayRunning.current = false;
              doDestroyAndPlay(retryCount + 1);
            }
          };
          const shouldSkipPlay = () => {
            const shouldSkip = {
              "No stream URL available": !getStreamUrl(),
              "Player not initialized": !isInit,
              "doDestroyAndPlay already running": isDoDestroyAndPlayRunning.current,
              "Idle timeout active": stateRefs.current.isIdleTimeout,
              "Multi-session detected": stateRefs.current.isMultiSession,
              "Session expired": stateRefs.current.isExpired,
              "Player not visible": !stateRefs.current.isVisible
            };
            for (const [reason, skip] of Object.entries(shouldSkip)) {
              if (skip) {
                console.debug(`${reason}, skipping play attempt`);
                return true;
              }
            }
            return false;
          };
          reactExports.useEffect(() => {
            if (isInit || !videoEl || !streams) return;
            setIsInit(true);
            const setVolume = () => {
              resumeAndSetVolume(player.current);
              document.removeEventListener("touchend", setVolume);
              document.removeEventListener("click", setVolume);
            };
            document.addEventListener("touchend", setVolume);
            document.addEventListener("click", setVolume);
            return () => {
              if (player.current) {
                stopAndDestroy(player.current).then(() => {
                  player.current = null;
                });
              }
            };
          }, [isInit, videoEl, streams]);
          reactExports.useEffect(() => {
            if (isExpired || isIdleTimeout || isMultiSession) {
              stopVideoWithSnapshot();
            } else if (isInit) {
              doDestroyAndPlay();
            }
          }, [isExpired, isIdleTimeout, isMultiSession]);
          reactExports.useEffect(() => {
            if (isVisible) doDestroyAndPlay();else stopAndDestroy(player.current);
          }, [isVisible, isInit]);
          reactExports.useEffect(() => {
            var _player$current2;
            if (player.current) (_player$current2 = player.current) === null || _player$current2 === void 0 || _player$current2.setVolume(calculateVolume());
          }, [studioVolume, masterVolume]);
          reactExports.useEffect(() => {
            if (!videoEl) return;
            if (settingQuality === "AUTO") {
              if (player.current) regQualityModeCallback(player.current);
              console.debug("Video quality set to AUTO");
              return;
            }
            if (settingQuality === streamQuality) return;
            console.debug("Video quality changed by user: ", settingQuality);
            setStreamQuality(settingQuality);
          }, [settingQuality, streamQuality, videoEl]);
          reactExports.useEffect(() => {
            doDestroyAndPlay();
          }, [streamQuality]);
          reactExports.useEffect(() => {
            if (!videoEl) return;
            const observer = new ResizeObserver(resizePlayer);
            observer.observe(videoEl);
            return () => observer.disconnect();
          }, [videoEl]);
          return {
            player,
            isLoading,
            setIsLoading,
            isInit,
            snapshot,
            doDestroyAndPlay,
            stopVideoWithSnapshot,
            getSnapshot,
            isPlaying,
            resizePlayer,
            setRenderMode,
            getPlayerStatus,
            setVideoEl,
            mutePlayers,
            stopAndDestroy,
            resumeAndSetVolume,
            loadAndPlayVideo,
            registerPlayerCallbacks
          };
        };
        function VideoWrapper({
          children,
          repositioningRefs,
          containerChildren,
          wrapperChildren
        }) {
          const isCanStream = useLayoutStore(s => s.isCanStream);
          const isSloped = !useBettingStore(state => state.isBet);
          const defaultContainerRef = reactExports.useRef(null);
          const defaultVideoWrapperRef = reactExports.useRef(null);
          const containerRef = (repositioningRefs === null || repositioningRefs === void 0 ? void 0 : repositioningRefs.containerRef) || defaultContainerRef;
          const videoWrapperRef = (repositioningRefs === null || repositioningRefs === void 0 ? void 0 : repositioningRefs.videoWrapperRef) || defaultVideoWrapperRef;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            id: "VideoWrapper",
            ref: videoWrapperRef,
            className: cn({
              isCanStream,
              isMobileDevice,
              isSloped
            }),
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              ref: containerRef,
              className: "streamContainer",
              children: [children, containerChildren]
            }), wrapperChildren]
          });
        }
        function VideoStream({
          renderMode,
          customTransforms,
          maskComponent,
          streamPlayerChildren,
          containerChildren,
          wrapperChildren,
          repositioningHook,
          customSpinnerPosition
        }) {
          const defaultRenderMode = renderMode !== null && renderMode !== void 0 ? renderMode : isMobileDevice ? 1 : 0;
          const {
            isLoading,
            setVideoEl,
            snapshot
          } = useStream({
            renderMode: defaultRenderMode
          });
          const repositioningRefs = repositioningHook === null || repositioningHook === void 0 ? void 0 : repositioningHook();
          const getSpinnerClasses = () => {
            const commonCN = "absolute left-1/2 h-10 w-10 -translate-x-1/2";
            if (customSpinnerPosition) {
              return cn(commonCN, isMobileDevice ? customSpinnerPosition.mobile : customSpinnerPosition.desktop);
            }
            return cn(commonCN, isMobileDevice ? "top-[38%] w-[1.666rem]" : "top-[37.5%] w-[3rem]");
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(VideoWrapper, {
            repositioningRefs,
            containerChildren,
            wrapperChildren,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              id: "StreamPlayer",
              ref: setVideoEl,
              className: cn("relative h-full w-full bg-transparent transition-all duration-700 ease-in-out", customTransforms),
              children: [streamPlayerChildren, /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "streamOverlay",
                style: {
                  backgroundImage: `url(${snapshot})`
                }
              })]
            }), typeof maskComponent === "function" ? maskComponent(isLoading) : maskComponent, isLoading && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "streamOverlay",
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: getSpinnerClasses(),
                children: /* @__PURE__ */jsxRuntimeExports.jsx(SpinnerSVG, {})
              })
            })]
          });
        }
        function useRouletteRepositioning() {
          const containerRef = reactExports.useRef(null);
          const videoWrapperRef = reactExports.useRef(null);
          reactExports.useEffect(() => {
            const tip = document.querySelector("[data-stream-tip]");
            const boundary = document.querySelector("[data-stream-boundary]");
            const streamPlayer = document.getElementById("StreamPlayer");
            const container = containerRef.current;
            const videoWrapper = videoWrapperRef.current;
            if (!tip || !boundary || !container || !videoWrapper || !isMobileDevice || !streamPlayer) return;
            const reposition = () => {
              const {
                height: vh,
                width: vw,
                top: vt
              } = videoWrapper.getBoundingClientRect();
              const {
                top: tt
              } = tip.getBoundingClientRect();
              const {
                top: bt
              } = boundary.getBoundingClientRect();
              const BREAKPOINT_RATIO_TOP = 1.7;
              const ratio = vh / vw;
              const isCrossTop = ratio < BREAKPOINT_RATIO_TOP;
              const MULTIPLIER_CROSS_TOP = 1;
              const scale = 1.125;
              let transformY;
              let height;
              if (isCrossTop) {
                height = `${(tt - vt) * MULTIPLIER_CROSS_TOP}px`;
                transformY = 0;
              } else {
                height = "unset";
                transformY = (tt - bt) / 2;
              }
              container.style.height = height;
              container.style.transform = `translateY(${transformY}px) scale(${scale})`;
              boundary.style.transform = `translateY(${-transformY}px)`;
            };
            const mutationObserver = new MutationObserver(reposition);
            const resizeObserver = new ResizeObserver(reposition);
            mutationObserver.observe(streamPlayer, {
              childList: true
            });
            resizeObserver.observe(streamPlayer);
            resizeObserver.observe(videoWrapper);
            reposition();
            return () => {
              resizeObserver.disconnect();
              mutationObserver.disconnect();
            };
          }, []);
          return {
            containerRef,
            videoWrapperRef
          };
        }
        function RouletteVideoStream() {
          const renderMode = isMobileDevice ? 1 : 0;
          const repositioningRefs = useRouletteRepositioning();
          const maskComponent = isLoading => /* @__PURE__ */jsxRuntimeExports.jsx(RouletteMask, {
            isLoading,
            virtualBackground
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(VideoStream, {
            renderMode,
            customTransforms: !isMobileDevice ? `-top-[1.875rem] scale-[0.92]` : "",
            maskComponent,
            streamPlayerChildren: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              "data-stream-boundary": true,
              className: "pointer-events-none absolute bottom-[19%] left-0 w-full"
            }),
            repositioningHook: () => repositioningRefs
          });
        }
        function useBoardHighlight(args) {
          const [highlights, setHighlights] = reactExports.useState([]);
          const {
            isMain,
            prefix,
            getInitWinHighlight,
            winHighlightMap
          } = args;
          const isBet = useBettingStore(s => s.isBet);
          const animState = useWinAnimStore(s => s.animState);
          const winResult = useWinAnimStore(s => s.winResult);
          const winNums = winResult === null || winResult === void 0 ? void 0 : winResult.result;
          const isMainBoard = isMain !== null && isMain !== void 0 ? isMain : true;
          reactExports.useEffect(() => {
            const shouldHighlight = animState === "winAnimationStart";
            if (!isMainBoard || !shouldHighlight || !winNums) {
              setHighlights([]);
              return;
            }
            const highlight = getInitWinHighlight ? getInitWinHighlight(winNums, prefix) : [];
            if (winHighlightMap) {
              Object.entries(winHighlightMap).forEach(([k, shouldHighlightFunc]) => {
                const shouldHighlight2 = shouldHighlightFunc(winNums);
                const hasHighlight = highlight.includes(k);
                if (shouldHighlight2 && !hasHighlight) highlight.push(k);
              });
            }
            setHighlights(highlight);
          }, [animState]);
          reactExports.useEffect(() => {
            if (!animState) setHighlights([]);
          }, [animState]);
          reactExports.useEffect(() => {
            if (isBet !== void 0) {
              setHighlights([]);
            }
          }, [isBet]);
          return {
            highlights,
            setHighlights
          };
        }
        const chipVariants = {
          initial: {
            scale: 1,
            opacity: 1,
            filter: "brightness(1) grayscale(0)"
          },
          idle: custom => custom.shouldSkipIdle ? {
            scale: 1
          } : {
            scale: [0.9, 0.9836, 1.0311, 1.0598, 1.0775, 1.0882, 1.0945, 1.0978, 1.0995, 1.1, 1.0979, 1.092, 1.0754, 1.0403, 1.0189, 1.0088, 1.0032, 1.0015, 1],
            transition: {
              duration: 0.58,
              ease: "easeInOut"
            }
          },
          disappear: {
            scale: 0.95,
            opacity: 0,
            filter: "brightness(0.3) grayscale(1)",
            transition: {
              scale: {
                duration: 0.6,
                ease: "easeOut"
              },
              opacity: {
                duration: 0.6,
                ease: "easeOut"
              },
              filter: {
                duration: 0.333,
                ease: "easeOut",
                delay: 0.1667
              }
            }
          },
          increase: {
            scale: [1, 1.14, 1.14, 1, 1],
            opacity: [1, 1, 1, 0, 0],
            transition: {
              duration: 2,
              times: [0, 0.1165, 0.5035, 0.6, 1],
              ease: "easeIn",
              delay: 0.333
            }
          }
        };
        const NormalChip = ({
          isWin,
          chipId,
          is3D,
          value,
          chipRef,
          chipSkewXDeg
        }) => {
          const gameState = useBettingStore(s => s.gameState);
          const animState = useWinAnimStore(s => s.animState);
          const runWinAnimation = !!animState;
          const [skipIdle, setSkipIdle] = reactExports.useState(false);
          const [chipResume, setChipResume] = reactExports.useState(true);
          reactExports.useEffect(() => {
            setSkipIdle(false);
          }, [value]);
          reactExports.useEffect(() => {
            if (animState === "animationStart" && gameState === BetState.Settlement) {
              setChipResume(false);
            }
          }, [animState, gameState]);
          const getAnimation = () => {
            const chipResumeNow = !chipResume && gameState !== BetState.Settlement || chipResume;
            if (!runWinAnimation && animState === null && chipResumeNow) return "idle";
            return isWin ? "increase" : "disappear";
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
            initial: "initial",
            animate: getAnimation(),
            variants: chipVariants,
            ref: chipRef,
            className: "pointer-events-none absolute w-full",
            custom: {
              shouldSkipIdle: skipIdle
            },
            onAnimationStart: e => {
              if (e !== "idle") {
                setSkipIdle(true);
              } else {
                setChipResume(true);
              }
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx(ChipSelectorChip, {
              value,
              isDisabled: false,
              is3D,
              chipId,
              chipSkewXDeg
            })
          }, chipId + value);
        };
        const useChipMovePos = chipRef => {
          const [movePos, setMovePos] = reactExports.useState({
            x: 0,
            y: 0
          });
          const boardHistory = useCartStore(state => state.boardHistory);
          const gameState = useBettingStore(state => state.gameState);
          reactExports.useLayoutEffect(() => {
            const chipTray = document.querySelector(isMobileDevice ? "#ChipBtn" : "#D_ChipTray");
            if (chipTray && chipRef.current) {
              const chipTrayRect = chipTray.getBoundingClientRect();
              const chipRect = chipRef.current.getBoundingClientRect();
              const chipTrayX = chipTrayRect.left + chipTrayRect.width / 2;
              const chipTrayY = chipTrayRect.top + chipTrayRect.height / 2;
              const chipX = chipRect.left + chipRect.width / 2;
              const chipY = chipRect.top + chipRect.height / 2;
              const x = chipTrayX - chipX;
              const y = chipTrayY - chipY;
              setMovePos({
                x,
                y
              });
            }
          }, [boardHistory, gameState]);
          return movePos;
        };
        const WinningChip = ({
          chipRef,
          chipId,
          value,
          is3D,
          chipSkewXDeg
        }) => {
          const chipMovePos = useChipMovePos(chipRef);
          const animState = useWinAnimStore(s => s.animState);
          const movingStart = animState === "winChipsMoving";
          const winChipVariant = {
            initial: {
              opacity: 0,
              scale: 1.14,
              clipPath: "rect(30% 65% 65% 35%)",
              x: 0,
              y: 0,
              skewX: chipSkewXDeg
            },
            default: {
              opacity: 1,
              clipPath: "rect(0% 100% 101% 0%)",
              scale: 1,
              skewX: chipSkewXDeg,
              transition: {
                opacity: {
                  delay: 1.133,
                  duration: 0.4,
                  ease: "easeInOut"
                },
                clipPath: {
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 1.133
                },
                scale: {
                  duration: 0.266,
                  ease: "easeInOut",
                  delay: 1.8
                }
              }
            },
            moveInitial: {
              x: 0,
              y: 0,
              clipPath: "rect(0% 100% 101% 0%)",
              scale: 1,
              opacity: 1,
              skewX: chipSkewXDeg
            },
            move: {
              x: chipMovePos.x,
              y: chipMovePos.y,
              skewX: chipSkewXDeg,
              opacity: 0,
              transition: {
                type: "spring",
                damping: 30,
                duration: 1.25,
                restSpeed: 0.2,
                ease: "linear"
              }
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
            className: "pointer-events-none absolute z-[99999] w-full",
            variants: winChipVariant,
            initial: movingStart ? "moveInitial" : "initial",
            animate: movingStart ? "move" : "default",
            children: /* @__PURE__ */jsxRuntimeExports.jsx(ChipSelectorChip, {
              value,
              isDisabled: false,
              is3D
            })
          }, chipId);
        };
        const WinningChipRim = ({
          chipSkewXDeg
        }) => {
          const animState = useWinAnimStore(s => s.animState);
          const winStart = animState === "winAnimationStart";
          const isRaceTrack = useBettingStore(s => s.isRaceTrack);
          const scale = isRaceTrack ? [0.76, 1.42, 1.42, 1.42] : [0.7, 1.38, 1.38, 1.38];
          const winChipRimVariant = {
            initial: {
              scale: 0.7,
              opacity: 0,
              y: "1%",
              skewX: chipSkewXDeg
            },
            default: {
              opacity: [0, 1, 1, 0],
              skewX: chipSkewXDeg,
              scale,
              y: "1%",
              transition: {
                opacity: {
                  duration: 1.9,
                  times: [0, 0.1165, 0.8835, 1],
                  ease: "easeInOut"
                },
                scaleX: {
                  duration: 1.9,
                  times: [0, 0.1165, 0.8835, 1],
                  ease: "easeInOut"
                },
                scaleY: {
                  duration: 1.9,
                  times: [0, 0.1165, 0.8835, 1],
                  ease: "easeInOut"
                }
              }
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
            variants: winChipRimVariant,
            initial: "initial",
            animate: winStart && "default",
            className: `winChipRim absolute z-10 h-full w-full rounded-full`
          });
        };
        const ChipContainer = exports("s", ({
          chipId,
          showWin = true,
          chipStyle,
          isSlope,
          chipTextSize,
          chipSkewXDeg
        }) => {
          var _winResult$betDetail;
          const chipRef = reactExports.useRef(null);
          const boardHistory = useCartStore(s => s.boardHistory);
          const currBoard = boardHistory[boardHistory.length - 1] || {};
          const betAmount = currBoard[chipId];
          const latestPlaceBet = useCartStore.getState().latestPlaceBet || {};
          const chipSequence = useBettingStore.getState().chipSequence;
          const winResult = useWinAnimStore(s => s.winResult);
          const winChipValue = winResult === null || winResult === void 0 || (_winResult$betDetail = winResult.betDetail) === null || _winResult$betDetail === void 0 ? void 0 : _winResult$betDetail[chipId];
          const {
            payout
          } = winResult || {};
          const winAmount = payout === null || payout === void 0 ? void 0 : payout[chipId];
          const isWin = winAmount !== void 0 && showWin;
          const animState = useWinAnimStore(s => s.animState);
          const runWinAnimation = !!animState;
          const [zIndex, setZIndex] = reactExports.useState(chipSequence);
          const getChipValue = () => {
            if (betAmount > 0) return betAmount;
            if (winChipValue && winChipValue > 0) return winChipValue;
            return null;
          };
          const chipValue = getChipValue();
          reactExports.useEffect(() => {
            if (Object.keys(latestPlaceBet).includes(chipId)) {
              const newZIndex = useBettingStore.getState().chipSequence + 1;
              setZIndex(newZIndex);
              useBettingStore.setState({
                chipSequence: newZIndex
              });
            }
          }, [latestPlaceBet]);
          return chipValue ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: cn("chipContainer pointer-events-none fixed flex items-center justify-center transition-[font-size] duration-300 ease-linear", chipStyle),
            style: {
              zIndex,
              fontSize: chipTextSize
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(NormalChip, {
              chipId,
              value: chipValue,
              isWin,
              chipRef,
              is3D: isSlope,
              chipSkewXDeg
            }), isWin && runWinAnimation && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(WinningChip, {
                chipRef,
                chipId,
                value: winAmount,
                is3D: isSlope,
                chipSkewXDeg
              }), /* @__PURE__ */jsxRuntimeExports.jsx(WinningChipRim, {
                chipSkewXDeg
              })]
            })]
          }) : null;
        });
        function TrackerChip(props) {
          const {
            boardId,
            dragSession,
            draggedChipRef,
            setDragSession,
            resetDragSession
          } = props;
          const {
            isDrag,
            offset,
            prePosit,
            currBetType
          } = dragSession;
          const draggedChip = draggedChipRef === null || draggedChipRef === void 0 ? void 0 : draggedChipRef.current;
          const draggedChipVal = Number(draggedChip === null || draggedChip === void 0 ? void 0 : draggedChip.dataset.value) || 0;
          const draggedChipType = draggedChip === null || draggedChip === void 0 ? void 0 : draggedChip.dataset.dragChip;
          const chipSequence = useBettingStore(s => s.chipSequence);
          const [track, setTrack] = reactExports.useState({
            x: 0,
            y: 0
          });
          const boardRef = reactExports.useRef(null);
          const trackerRef = reactExports.useRef(null);
          reactExports.useEffect(() => {
            boardRef.current = document.getElementById(boardId);
          }, []);
          reactExports.useEffect(() => {
            const board = boardRef.current;
            if (!board || !draggedChip) return;
            const onMove = event => {
              if (!draggedChip || raceTrackGroup.includes(draggedChipType)) return;
              const {
                left,
                top
              } = board.getBoundingClientRect();
              const {
                pageX: x,
                pageY: y
              } = event;
              if (!prePosit.x || !prePosit.y) return;
              if (trackerRef.current) draggedChip === null || draggedChip === void 0 || draggedChip.style.setProperty("opacity", "0");
              const deltaX = Math.abs(x - prePosit.x);
              const deltaY = Math.abs(y - prePosit.y);
              const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
              const isDrag2 = distance >= 1;
              setTrack({
                x: x - left,
                y: y - top
              });
              setDragSession(_objectSpread(_objectSpread({}, dragSession), {}, {
                isDrag: isDrag2
              }));
            };
            const onUp = () => {
              if (!currBetType) return resetDragSession();
            };
            const onTouchMove = e => {
              if (draggedChip) return e.preventDefault();
            };
            const handlers = [{
              type: "pointermove",
              handler: onMove
            }, {
              type: "pointerup",
              handler: onUp
            }, {
              type: "touchmove",
              handler: onTouchMove,
              options: {
                passive: false
              }
            }];
            handlers.forEach(({
              type,
              handler,
              options
            }) => document.addEventListener(type, handler, options));
            return () => {
              handlers.forEach(({
                type,
                handler,
                options
              }) => document.removeEventListener(type, handler, options));
            };
          }, [prePosit.x, prePosit.y, draggedChipType, currBetType]);
          if (!draggedChip) return null;
          const fontSize = parseFloat(getComputedStyle(draggedChip).fontSize);
          const width = draggedChip === null || draggedChip === void 0 ? void 0 : draggedChip.clientWidth;
          if (!isDrag || !fontSize || !width) return null;
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "pointer-events-none absolute top-0 h-full w-full",
            ref: trackerRef,
            style: {
              fontSize,
              width,
              left: `${track.x - offset.x}px`,
              top: `${track.y - offset.y}px`,
              // Sicbo's top board has a z-index of 50
              zIndex: chipSequence + 50
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx(ChipSelectorChip, {
              value: draggedChipVal,
              isDisabled: false
            })
          });
        }
        const TrackerChip$1 = exports("q", reactExports.memo(TrackerChip));
        const DEFAULT_SESSION = {
          preBetType: null,
          currBetType: null,
          isDrag: false,
          prePosit: {
            x: 0,
            y: 0
          },
          offset: {
            x: 0,
            y: 0
          }
        };
        const useChipAction = () => {
          const [payload, setPayload] = reactExports.useState(null);
          const [dragSession, setDragSession] = reactExports.useState(DEFAULT_SESSION);
          const dragSessionRef = reactExports.useRef(dragSession);
          const isBet = useBettingStore(state => state.isBet);
          const draggedChipRef = reactExports.useRef(null);
          const isVisible = useVisibility();
          const boardHistory = useCartStore(s => s.boardHistory);
          const isSlope = useBettingStore(s => !s.isBet);
          const selectedChipVal = useCartStore(s => s.selectedChipVal);
          const getTotalBet = useCartStore(s => s.getTotalBet);
          const walletBalance = useCartStore(s => s.walletBalance);
          const setDragSessionWithRef = reactExports.useCallback(newSession => {
            dragSessionRef.current = newSession;
            setDragSession(newSession);
          }, []);
          const onPress = reactExports.useCallback((e, key, draggedChip) => {
            if (!key) return;
            if (isSlope) return tooltipEventBus.emit("close", {
              position: {
                x: e.pageX,
                y: e.pageY
              },
              mute: true
            });
            const edgeDist = getDraggedChipEdgeDist(e.pageX, e.pageY, draggedChip);
            if (!edgeDist || !draggedChip) {
              setDragSessionWithRef(_objectSpread(_objectSpread({}, dragSessionRef.current), {}, {
                prePosit: {
                  x: 0,
                  y: 0
                },
                preBetType: key
              }));
              return;
            }
            draggedChipRef.current = draggedChip;
            setDragSessionWithRef({
              preBetType: key,
              prePosit: {
                x: e.pageX,
                y: e.pageY
              },
              currBetType: null,
              isDrag: false,
              offset: {
                x: edgeDist.offsetX,
                y: edgeDist.offsetY
              }
            });
          },
          // TODO: Fixing this warning directly may break some functionality. This will require future refactoring.
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [isSlope, setDragSessionWithRef, draggedChipRef, boardHistory]);
          const onRelease = reactExports.useCallback((e, betType, extraBetsGroup) => {
            var _boardHistory$at;
            const {
              preBetType,
              prePosit,
              isDrag
            } = dragSessionRef.current;
            const draggedChip = draggedChipRef === null || draggedChipRef === void 0 ? void 0 : draggedChipRef.current;
            const draggedChipVal = Number(draggedChip === null || draggedChip === void 0 ? void 0 : draggedChip.dataset.value) || 0;
            if (!betType || !preBetType) return resetDragSession();
            const lastBet = (_boardHistory$at = boardHistory.at(-1)) !== null && _boardHistory$at !== void 0 ? _boardHistory$at : {};
            const isSameSpot = preBetType === betType;
            const isExtraBetsGroup = extraBetsGroup.includes(betType);
            setDragSessionWithRef(_objectSpread(_objectSpread({}, dragSessionRef.current), {}, {
              currBetType: betType
            }));
            if (!isDrag && !isSameSpot) return resetDragSession();
            if (isDrag && isSameSpot) return resetDragSession();
            if (isDrag && isExtraBetsGroup) return resetDragSession();
            const isNormalPlaceBet = !prePosit.x || !prePosit.y || !isDrag;
            const lastBetVal = new Decimal(lastBet[betType] || 0);
            const extra = new Decimal(isDrag ? draggedChipVal : selectedChipVal);
            const newBetVal = lastBetVal.plus(extra).toNumber();
            const newBets = {
              [betType]: extra.toNumber()
            };
            if (!isSameSpot && preBetType) delete newBets[preBetType];
            const {
              x,
              y
            } = getCenterPosition(e);
            setPayload({
              betType,
              newBets,
              latestPlaceBet: {
                [betType]: newBetVal
              },
              isNormalPlaceBet,
              position: {
                x,
                y
              }
            });
          },
          // TODO: Fixing this warning directly may break some functionality. This will require future refactoring.
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [setDragSessionWithRef, boardHistory, getTotalBet, selectedChipVal, walletBalance]);
          const resetDragSession = reactExports.useCallback(() => {
            const preChip = draggedChipRef.current;
            setTimeout(() => preChip === null || preChip === void 0 ? void 0 : preChip.style.setProperty("opacity", "1"), 10);
            draggedChipRef.current = null;
            setDragSessionWithRef(DEFAULT_SESSION);
          }, [setDragSessionWithRef]);
          reactExports.useEffect(() => {
            dragSessionRef.current = dragSession;
          }, [dragSession]);
          reactExports.useEffect(() => {
            if (!isVisible) resetDragSession();
          }, [isVisible]);
          reactExports.useEffect(() => {
            if (!isBet) resetDragSession();
          }, [isBet]);
          return {
            payload,
            dragSession,
            draggedChipRef,
            setDragSession: setDragSessionWithRef,
            resetDragSession,
            onPress,
            onRelease
          };
        };
        const useBettingBoard = exports("o", props => {
          const boardHistory = useCartStore(s => s.boardHistory);
          const walletBalance = useCartStore(s => s.walletBalance);
          const jurisdiction = useConfigStore(s => s.JURISDICTION);
          const {
            convertBetMap,
            getAddChipParams,
            boardID,
            extraBetsGroup = []
          } = props;
          const {
            payload,
            dragSession,
            setDragSession,
            resetDragSession,
            onPress,
            onRelease,
            draggedChipRef
          } = useChipAction();
          const draggedChip = draggedChipRef === null || draggedChipRef === void 0 ? void 0 : draggedChipRef.current;
          const draggedChipVal = Number(draggedChip === null || draggedChip === void 0 ? void 0 : draggedChip.dataset.value) || 0;
          const draggedChipType = draggedChip === null || draggedChip === void 0 ? void 0 : draggedChip.dataset.dragChip;
          const {
            tableLimit,
            betTypesLimit,
            GAME_TYPE: gameType
          } = useConfigStore.getState();
          const placeBets = () => {
            var _boardHistory$at2;
            if (!payload) return;
            const diff = convertBetMap(payload.betType, draggedChipVal, dragSession.isDrag, boardID);
            const {
              cleanedBets,
              extraBets
            } = cleanExtraBets((_boardHistory$at2 = boardHistory.at(-1)) !== null && _boardHistory$at2 !== void 0 ? _boardHistory$at2 : {});
            const capBet = capBets({
              gameType,
              newBets: diff.normalBets,
              original: cleanedBets,
              balance: walletBalance,
              dragSourceBetNo: dragSession.isDrag ? draggedChipType : void 0,
              betLimit: {
                tableLimit,
                betTypesLimit
              },
              betOptions: jurisdiction.BET_OPTIONS
            });
            if (capBet.resultBets) {
              const finalBets = _objectSpread(_objectSpread({}, capBet.resultBets), addExtraBets(extraBets, diff.extraBets));
              useCartStore.setState({
                boardHistory: [...boardHistory, finalBets],
                latestPlaceBet: diff.normalBets,
                playChipSound: true
              });
            }
            if (capBet.hints) {
              const {
                isLowBalance,
                isOverBetTypeMax,
                isOverTableMax,
                isOppositeBet
              } = capBet.hints;
              if (isOverBetTypeMax) tooltipEventBus.emit("overLimit", {
                position: payload.position
              });
              if (isLowBalance) tooltipEventBus.emit("lowBalance", {
                position: payload.position
              });
              if (isOverTableMax) tooltipEventBus.emit("overLimit", {
                position: payload.position
              });
              if (isOppositeBet) tooltipEventBus.emit("oppositeBet", {
                position: payload.position
              });
              return resetDragSession();
            }
          };
          reactExports.useEffect(() => {
            if (!payload) return;
            placeBets();
            useBettingStore.setState({
              resetBoard: false
            });
            useWinNumberStore$4.setState({
              lastWinCache: 0
            });
            resetDragSession();
          }, [payload]);
          const handlePointerDown = e => {
            const betType = getAddChipParams(e);
            onPress(e, betType, getDraggedChipRef(betType, boardID));
          };
          const handlePointerUp = e => {
            const betType = getAddChipParams(e);
            onRelease(e, betType, extraBetsGroup);
          };
          return {
            handlePointerDown,
            handlePointerUp,
            dragSession,
            setDragSession,
            resetDragSession,
            draggedChipRef
          };
        });
        const getAddChipParams$1 = exports("r", event => {
          var _target$id;
          const {
            pageX: x,
            pageY: y
          } = event;
          const target = document.elementFromPoint(x, y);
          const isValid = target === null || target === void 0 || (_target$id = target.id) === null || _target$id === void 0 ? void 0 : _target$id.startsWith(betGridPrefix);
          const betType = isValid ? target.id.slice(betGridPrefix.length) : "";
          return betType;
        });
        function AnimateCounter({
          value,
          className = "",
          direction = null,
          reverseDirection = false,
          axis = "y",
          duration = 0.25,
          distance = 28
        }) {
          const variants = {
            enter: direction2 => {
              const actualDirection = reverseDirection && direction2 ? direction2 === "up" ? "down" : "up" : direction2;
              return {
                [axis]: actualDirection === "up" ? -distance : distance,
                opacity: 0
              };
            },
            center: {
              [axis]: 0,
              opacity: 1
            },
            exit: direction2 => {
              const actualDirection = reverseDirection && direction2 ? direction2 === "up" ? "down" : "up" : direction2;
              return {
                [axis]: actualDirection === "up" ? distance : -distance,
                opacity: 0
              };
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(AnimatePresence, {
            mode: "sync",
            custom: direction,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, {
              custom: direction,
              variants,
              initial: "enter",
              animate: "center",
              exit: "exit",
              transition: {
                duration,
                ease: "easeOut"
              },
              className,
              children: value
            }, value)
          });
        }
        function ActiveStateWrapper({
          children,
          duration = 200
        }) {
          const [clicked, setClicked] = reactExports.useState(false);
          const handleClick = () => {
            setClicked(true);
            let timer = 0;
            clearTimeout(timer);
            timer = window.setTimeout(() => {
              setClicked(false);
            }, duration);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            onClick: handleClick,
            className: `${clicked ? "active" : ""}`,
            children
          });
        }
        const svgHighlightDef = exports("w", /* @__PURE__ */jsxRuntimeExports.jsxs("defs", {
          children: [/* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
            id: "backgroundGradient",
            x1: "1",
            y1: "0",
            x2: "0.25",
            y2: "1",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              offset: "0%",
              stopColor: "rgba(223, 207, 187, 0.05)"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              offset: "0.37%",
              stopColor: "rgba(223, 207, 187, 0.2)"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              offset: "100%",
              stopColor: "rgba(223, 207, 187, 0.05)"
            })]
          }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
            id: "borderGradient",
            x1: "0.9",
            y1: "0",
            x2: "0.1",
            y2: "1",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              offset: "9.16%",
              stopColor: "#c9ae8d"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
              offset: "89.58%",
              stopColor: "#a57d4e"
            })]
          }), /* @__PURE__ */jsxRuntimeExports.jsxs("filter", {
            id: "multiShadow",
            x: "-20%",
            y: "-20%",
            width: "140%",
            height: "140%",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("feComponentTransfer", {
              in: "SourceAlpha",
              result: "inset-selection",
              children: /* @__PURE__ */jsxRuntimeExports.jsx("feFuncA", {
                type: "discrete",
                tableValues: "0 1 1 1 1 1"
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feGaussianBlur", {
              in: "SourceAlpha",
              stdDeviation: "3",
              result: "blur1"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feOffset", {
              in: "blur1",
              dx: "0",
              dy: "0",
              result: "offsetBlur1"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feFlood", {
              floodColor: "rgba(142, 108, 67, 0.25)",
              result: "shadowColor1"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feComposite", {
              in: "shadowColor1",
              in2: "offsetBlur1",
              operator: "in",
              result: "shadowBlur1"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feGaussianBlur", {
              in: "SourceAlpha",
              stdDeviation: "3",
              result: "blur2"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feOffset", {
              in: "blur2",
              dx: "0",
              dy: "0",
              result: "offsetBlur2"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feFlood", {
              floodColor: "rgba(223, 207, 187, 0.1)",
              result: "shadowColor2"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feComposite", {
              in: "shadowColor2",
              in2: "offsetBlur2",
              operator: "in",
              result: "shadowBlur2"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feGaussianBlur", {
              in: "SourceAlpha",
              stdDeviation: "3",
              result: "blur2"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feOffset", {
              in: "blur3",
              dx: "0",
              dy: "0",
              result: "offsetBlur3"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feFlood", {
              floodColor: "rgba(255, 255, 255, 0.1)",
              result: "shadowColor3"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feComposite", {
              in: "shadowColor2",
              in2: "offsetBlur3",
              operator: "in",
              result: "shadowBlur3"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feGaussianBlur", {
              in: "SourceAlpha",
              stdDeviation: "3",
              result: "blur4"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feOffset", {
              in: "blur4",
              dx: "0",
              dy: "0",
              result: "offsetBlur4"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feFlood", {
              floodColor: "rgba(223, 207, 187, 0.15)",
              result: "shadowColor4"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feComposite", {
              in: "shadowColor4",
              in2: "offsetBlur4",
              operator: "in",
              result: "shadowBlur4"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feGaussianBlur", {
              in: "SourceAlpha",
              stdDeviation: "3",
              result: "blur5"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feOffset", {
              in: "blur5",
              dx: "0",
              dy: "0",
              result: "offsetBlur5"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feFlood", {
              floodColor: "rgba(142, 108, 67, 0.3)",
              result: "shadowColor5"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("feComposite", {
              in: "shadowColor5",
              in2: "offsetBlur5",
              operator: "in",
              result: "shadowBlur5"
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("feMerge", {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("feMergeNode", {
                in: "shadowBlur1"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("feMergeNode", {}), /* @__PURE__ */jsxRuntimeExports.jsx("feMergeNode", {}), /* @__PURE__ */jsxRuntimeExports.jsx("feMergeNode", {
                in: "shadowBlur4"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("feMergeNode", {
                in: "shadowBlur5"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("feMergeNode", {
                in: "SourceGraphic"
              })]
            })]
          })]
        }));
        const useRaceTrackHighlights = exports("x", ({
          highlights
        }) => {
          const [style, setStyle] = reactExports.useState("");
          reactExports.useEffect(() => {
            const cssRules = `${highlights.map(id => `path[data-v="${id}"], rect[data-v="${id}"]`).join(",")}
      { 
        transition: all 0.4s;
        fill: url('#backgroundGradient');
        stroke: url('#borderGradient');
        stroke-width: 1.5px;
        filter: url('#multiShadow'); 
      }`;
            setStyle(cssRules);
          }, [highlights]);
          return {
            style
          };
        });
        const getAddChipParams = exports("y", event => {
          const {
            pageX: x,
            pageY: y
          } = event;
          const element = document.elementFromPoint(x, y);
          if (!(element instanceof SVGGraphicsElement)) return "";
          const dataV = element.dataset.v;
          if (!dataV) return "";
          const isStraight = !raceTrackGroup$1.includes(dataV);
          const betType = isStraight ? "straight-" + dataV : dataV;
          return betType;
        });

        /*!
        * tabbable 6.2.0
        * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
        */
        // NOTE: separate `:not()` selectors has broader browser support than the newer
        //  `:not([inert], [inert] *)` (Feb 2023)
        // CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
        //  the entire query to fail, resulting in no nodes found, which will break a lot
        //  of things... so we have to rely on JS to identify nodes inside an inert container
        var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
        var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
        var NoElement = typeof Element === 'undefined';
        var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
          var _element$getRootNode;
          return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
        } : function (element) {
          return element === null || element === void 0 ? void 0 : element.ownerDocument;
        };

        /**
         * Determines if a node is inert or in an inert ancestor.
         * @param {Element} [node]
         * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
         *  see if any of them are inert. If false, only `node` itself is considered.
         * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
         *  False if `node` is falsy.
         */
        var isInert = function isInert(node, lookUp) {
          var _node$getAttribute;
          if (lookUp === void 0) {
            lookUp = true;
          }
          // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
          //  JS API property; we have to check the attribute, which can either be empty or 'true';
          //  if it's `null` (not specified) or 'false', it's an active element
          var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
          var inert = inertAtt === '' || inertAtt === 'true';

          // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
          //  if it weren't for `matches()` not being a function on shadow roots; the following
          //  code works for any kind of node
          // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
          //  so it likely would not support `:is([inert] *)` either...
          var result = inert || lookUp && node && isInert(node.parentNode); // recursive

          return result;
        };

        /**
         * Determines if a node's content is editable.
         * @param {Element} [node]
         * @returns True if it's content-editable; false if it's not or `node` is falsy.
         */
        var isContentEditable = function isContentEditable(node) {
          var _node$getAttribute2;
          // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
          //  to use the attribute directly to check for this, which can either be empty or 'true';
          //  if it's `null` (not specified) or 'false', it's a non-editable element
          var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
          return attValue === '' || attValue === 'true';
        };

        /**
         * @param {Element} el container to check in
         * @param {boolean} includeContainer add container to check
         * @param {(node: Element) => boolean} filter filter candidates
         * @returns {Element[]}
         */
        var getCandidates = function getCandidates(el, includeContainer, filter) {
          // even if `includeContainer=false`, we still have to check it for inertness because
          //  if it's inert, all its children are inert
          if (isInert(el)) {
            return [];
          }
          var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
          if (includeContainer && matches.call(el, candidateSelector)) {
            candidates.unshift(el);
          }
          candidates = candidates.filter(filter);
          return candidates;
        };

        /**
         * @callback GetShadowRoot
         * @param {Element} element to check for shadow root
         * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
         */

        /**
         * @callback ShadowRootFilter
         * @param {Element} shadowHostNode the element which contains shadow content
         * @returns {boolean} true if a shadow root could potentially contain valid candidates.
         */

        /**
         * @typedef {Object} CandidateScope
         * @property {Element} scopeParent contains inner candidates
         * @property {Element[]} candidates list of candidates found in the scope parent
         */

        /**
         * @typedef {Object} IterativeOptions
         * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
         *  if a function, implies shadow support is enabled and either returns the shadow root of an element
         *  or a boolean stating if it has an undisclosed shadow root
         * @property {(node: Element) => boolean} filter filter candidates
         * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
         * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
         */

        /**
         * @param {Element[]} elements list of element containers to match candidates from
         * @param {boolean} includeContainer add container list to check
         * @param {IterativeOptions} options
         * @returns {Array.<Element|CandidateScope>}
         */
        var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
          var candidates = [];
          var elementsToCheck = Array.from(elements);
          while (elementsToCheck.length) {
            var element = elementsToCheck.shift();
            if (isInert(element, false)) {
              // no need to look up since we're drilling down
              // anything inside this container will also be inert
              continue;
            }
            if (element.tagName === 'SLOT') {
              // add shadow dom slot scope (slot itself cannot be focusable)
              var assigned = element.assignedElements();
              var content = assigned.length ? assigned : element.children;
              var nestedCandidates = getCandidatesIteratively(content, true, options);
              if (options.flatten) {
                candidates.push.apply(candidates, nestedCandidates);
              } else {
                candidates.push({
                  scopeParent: element,
                  candidates: nestedCandidates
                });
              }
            } else {
              // check candidate element
              var validCandidate = matches.call(element, candidateSelector);
              if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
                candidates.push(element);
              }

              // iterate over shadow content if possible
              var shadowRoot = element.shadowRoot ||
              // check for an undisclosed shadow
              typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

              // no inert look up because we're already drilling down and checking for inertness
              //  on the way down, so all containers to this root node should have already been
              //  vetted as non-inert
              var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
              if (shadowRoot && validShadowRoot) {
                // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
                //  shadow exists, so look at light dom children as fallback BUT create a scope for any
                //  child candidates found because they're likely slotted elements (elements that are
                //  children of the web component element (which has the shadow), in the light dom, but
                //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
                //  _after_ we return from this recursive call
                var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
                if (options.flatten) {
                  candidates.push.apply(candidates, _nestedCandidates);
                } else {
                  candidates.push({
                    scopeParent: element,
                    candidates: _nestedCandidates
                  });
                }
              } else {
                // there's not shadow so just dig into the element's (light dom) children
                //  __without__ giving the element special scope treatment
                elementsToCheck.unshift.apply(elementsToCheck, element.children);
              }
            }
          }
          return candidates;
        };

        /**
         * @private
         * Determines if the node has an explicitly specified `tabindex` attribute.
         * @param {HTMLElement} node
         * @returns {boolean} True if so; false if not.
         */
        var hasTabIndex = function hasTabIndex(node) {
          return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
        };

        /**
         * Determine the tab index of a given node.
         * @param {HTMLElement} node
         * @returns {number} Tab order (negative, 0, or positive number).
         * @throws {Error} If `node` is falsy.
         */
        var getTabIndex = function getTabIndex(node) {
          if (!node) {
            throw new Error('No node provided');
          }
          if (node.tabIndex < 0) {
            // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
            // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
            // yet they are still part of the regular tab order; in FF, they get a default
            // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
            // order, consider their tab index to be 0.
            // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
            // so if they don't have a tabindex attribute specifically set, assume it's 0.
            if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
              return 0;
            }
          }
          return node.tabIndex;
        };

        /**
         * Determine the tab index of a given node __for sort order purposes__.
         * @param {HTMLElement} node
         * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
         *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
         *  inserted into the correct sort position.
         * @returns {number} Tab order (negative, 0, or positive number).
         */
        var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
          var tabIndex = getTabIndex(node);
          if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
            return 0;
          }
          return tabIndex;
        };
        var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
          return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
        };
        var isInput = function isInput(node) {
          return node.tagName === 'INPUT';
        };
        var isHiddenInput = function isHiddenInput(node) {
          return isInput(node) && node.type === 'hidden';
        };
        var isDetailsWithSummary = function isDetailsWithSummary(node) {
          var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
            return child.tagName === 'SUMMARY';
          });
          return r;
        };
        var getCheckedRadio = function getCheckedRadio(nodes, form) {
          for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].checked && nodes[i].form === form) {
              return nodes[i];
            }
          }
        };
        var isTabbableRadio = function isTabbableRadio(node) {
          if (!node.name) {
            return true;
          }
          var radioScope = node.form || getRootNode(node);
          var queryRadios = function queryRadios(name) {
            return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
          };
          var radioSet;
          if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
            radioSet = queryRadios(window.CSS.escape(node.name));
          } else {
            try {
              radioSet = queryRadios(node.name);
            } catch (err) {
              // eslint-disable-next-line no-console
              console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
              return false;
            }
          }
          var checked = getCheckedRadio(radioSet, node.form);
          return !checked || checked === node;
        };
        var isRadio = function isRadio(node) {
          return isInput(node) && node.type === 'radio';
        };
        var isNonTabbableRadio = function isNonTabbableRadio(node) {
          return isRadio(node) && !isTabbableRadio(node);
        };

        // determines if a node is ultimately attached to the window's document
        var isNodeAttached = function isNodeAttached(node) {
          var _nodeRoot;
          // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
          //  (but NOT _the_ document; see second 'If' comment below for more).
          // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
          //  is attached, and the one we need to check if it's in the document or not (because the
          //  shadow, and all nodes it contains, is never considered in the document since shadows
          //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
          //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
          //  visibility, including all the nodes it contains). The host could be any normal node,
          //  or a custom element (i.e. web component). Either way, that's the one that is considered
          //  part of the document, not the shadow root, nor any of its children (i.e. the node being
          //  tested).
          // To further complicate things, we have to look all the way up until we find a shadow HOST
          //  that is attached (or find none) because the node might be in nested shadows...
          // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
          //  document (per the docs) and while it's a Document-type object, that document does not
          //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
          //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
          //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
          //  node is actually detached.
          // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
          //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
          //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
          //  `ownerDocument` will be `null`, hence the optional chaining on it.
          var nodeRoot = node && getRootNode(node);
          var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

          // in some cases, a detached node will return itself as the root instead of a document or
          //  shadow root object, in which case, we shouldn't try to look further up the host chain
          var attached = false;
          if (nodeRoot && nodeRoot !== node) {
            var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
            attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
            while (!attached && nodeRootHost) {
              var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
              // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
              //  which means we need to get the host's host and check if that parent host is contained
              //  in (i.e. attached to) the document
              nodeRoot = getRootNode(nodeRootHost);
              nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
              attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
            }
          }
          return attached;
        };
        var isZeroArea = function isZeroArea(node) {
          var _node$getBoundingClie = node.getBoundingClientRect(),
            width = _node$getBoundingClie.width,
            height = _node$getBoundingClie.height;
          return width === 0 && height === 0;
        };
        var isHidden = function isHidden(node, _ref) {
          var displayCheck = _ref.displayCheck,
            getShadowRoot = _ref.getShadowRoot;
          // NOTE: visibility will be `undefined` if node is detached from the document
          //  (see notes about this further down), which means we will consider it visible
          //  (this is legacy behavior from a very long way back)
          // NOTE: we check this regardless of `displayCheck="none"` because this is a
          //  _visibility_ check, not a _display_ check
          if (getComputedStyle(node).visibility === 'hidden') {
            return true;
          }
          var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
          var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
          if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
            return true;
          }
          if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
            if (typeof getShadowRoot === 'function') {
              // figure out if we should consider the node to be in an undisclosed shadow and use the
              //  'non-zero-area' fallback
              var originalNode = node;
              while (node) {
                var parentElement = node.parentElement;
                var rootNode = getRootNode(node);
                if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
                ) {
                  // node has an undisclosed shadow which means we can only treat it as a black box, so we
                  //  fall back to a non-zero-area test
                  return isZeroArea(node);
                } else if (node.assignedSlot) {
                  // iterate up slot
                  node = node.assignedSlot;
                } else if (!parentElement && rootNode !== node.ownerDocument) {
                  // cross shadow boundary
                  node = rootNode.host;
                } else {
                  // iterate up normal dom
                  node = parentElement;
                }
              }
              node = originalNode;
            }
            // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
            //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
            //  it might be a falsy value, which means shadow DOM support is disabled

            // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
            //  now we can just test to see if it would normally be visible or not, provided it's
            //  attached to the main document.
            // NOTE: We must consider case where node is inside a shadow DOM and given directly to
            //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

            if (isNodeAttached(node)) {
              // this works wherever the node is: if there's at least one client rect, it's
              //  somehow displayed; it also covers the CSS 'display: contents' case where the
              //  node itself is hidden in place of its contents; and there's no need to search
              //  up the hierarchy either
              return !node.getClientRects().length;
            }

            // Else, the node isn't attached to the document, which means the `getClientRects()`
            //  API will __always__ return zero rects (this can happen, for example, if React
            //  is used to render nodes onto a detached tree, as confirmed in this thread:
            //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
            //
            // It also means that even window.getComputedStyle(node).display will return `undefined`
            //  because styles are only computed for nodes that are in the document.
            //
            // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
            //  somehow. Though it was never stated officially, anyone who has ever used tabbable
            //  APIs on nodes in detached containers has actually implicitly used tabbable in what
            //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
            //  considering __everything__ to be visible because of the innability to determine styles.
            //
            // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
            //  nodes as visible with the 'none' fallback.__
            if (displayCheck !== 'legacy-full') {
              return true; // hidden
            }
            // else, fallback to 'none' mode and consider the node visible
          } else if (displayCheck === 'non-zero-area') {
            // NOTE: Even though this tests that the node's client rect is non-zero to determine
            //  whether it's displayed, and that a detached node will __always__ have a zero-area
            //  client rect, we don't special-case for whether the node is attached or not. In
            //  this mode, we do want to consider nodes that have a zero area to be hidden at all
            //  times, and that includes attached or not.
            return isZeroArea(node);
          }

          // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
          //  it's visible
          return false;
        };

        // form fields (nested) inside a disabled fieldset are not focusable/tabbable
        //  unless they are in the _first_ <legend> element of the top-most disabled
        //  fieldset
        var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
          if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
            var parentNode = node.parentElement;
            // check if `node` is contained in a disabled <fieldset>
            while (parentNode) {
              if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
                // look for the first <legend> among the children of the disabled <fieldset>
                for (var i = 0; i < parentNode.children.length; i++) {
                  var child = parentNode.children.item(i);
                  // when the first <legend> (in document order) is found
                  if (child.tagName === 'LEGEND') {
                    // if its parent <fieldset> is not nested in another disabled <fieldset>,
                    // return whether `node` is a descendant of its first <legend>
                    return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
                  }
                }
                // the disabled <fieldset> containing `node` has no <legend>
                return true;
              }
              parentNode = parentNode.parentElement;
            }
          }

          // else, node's tabbable/focusable state should not be affected by a fieldset's
          //  enabled/disabled state
          return false;
        };
        var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
          if (node.disabled ||
          // we must do an inert look up to filter out any elements inside an inert ancestor
          //  because we're limited in the type of selectors we can use in JSDom (see related
          //  note related to `candidateSelectors`)
          isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
          // For a details element with a summary, the summary element gets the focus
          isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
            return false;
          }
          return true;
        };
        var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
          if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
            return false;
          }
          return true;
        };
        var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
          var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
          if (isNaN(tabIndex) || tabIndex >= 0) {
            return true;
          }
          // If a custom element has an explicit negative tabindex,
          // browsers will not allow tab targeting said element's children.
          return false;
        };

        /**
         * @param {Array.<Element|CandidateScope>} candidates
         * @returns Element[]
         */
        var sortByOrder = function sortByOrder(candidates) {
          var regularTabbables = [];
          var orderedTabbables = [];
          candidates.forEach(function (item, i) {
            var isScope = !!item.scopeParent;
            var element = isScope ? item.scopeParent : item;
            var candidateTabindex = getSortOrderTabIndex(element, isScope);
            var elements = isScope ? sortByOrder(item.candidates) : element;
            if (candidateTabindex === 0) {
              isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
            } else {
              orderedTabbables.push({
                documentOrder: i,
                tabIndex: candidateTabindex,
                item: item,
                isScope: isScope,
                content: elements
              });
            }
          });
          return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
            sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
            return acc;
          }, []).concat(regularTabbables);
        };
        var tabbable = function tabbable(container, options) {
          options = options || {};
          var candidates;
          if (options.getShadowRoot) {
            candidates = getCandidatesIteratively([container], options.includeContainer, {
              filter: isNodeMatchingSelectorTabbable.bind(null, options),
              flatten: false,
              getShadowRoot: options.getShadowRoot,
              shadowRootFilter: isValidShadowRootTabbable
            });
          } else {
            candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
          }
          return sortByOrder(candidates);
        };
        function isSafari() {
          return /apple/i.test(navigator.vendor);
        }
        function activeElement(doc) {
          let activeElement2 = doc.activeElement;
          while (((_activeElement = activeElement2) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
            var _activeElement;
            activeElement2 = activeElement2.shadowRoot.activeElement;
          }
          return activeElement2;
        }
        function contains(parent, child) {
          if (!parent || !child) {
            return false;
          }
          const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
          if (parent.contains(child)) {
            return true;
          }
          if (rootNode && isShadowRoot(rootNode)) {
            let next = child;
            while (next) {
              if (parent === next) {
                return true;
              }
              next = next.parentNode || next.host;
            }
          }
          return false;
        }
        function getDocument(node) {
          return (node == null ? void 0 : node.ownerDocument) || document;
        }
        function isMouseLikePointerType(pointerType, strict) {
          const values = ["mouse", "pen"];
          {
            values.push("", void 0);
          }
          return values.includes(pointerType);
        }
        var isClient$1 = typeof document !== "undefined";
        var noop$1 = function noop2() {};
        var index$1 = isClient$1 ? reactExports.useLayoutEffect : noop$1;
        const SafeReact$1 = _objectSpread({}, React);
        function useLatestRef$1(value) {
          const ref = reactExports.useRef(value);
          index$1(() => {
            ref.current = value;
          });
          return ref;
        }
        const useInsertionEffect = SafeReact$1.useInsertionEffect;
        const useSafeInsertionEffect = useInsertionEffect || (fn => fn());
        function useEffectEvent(callback) {
          const ref = reactExports.useRef(() => {});
          useSafeInsertionEffect(() => {
            ref.current = callback;
          });
          return reactExports.useCallback(function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return ref.current == null ? void 0 : ref.current(...args);
          }, []);
        }
        const getTabbableOptions = () => ({
          getShadowRoot: true,
          displayCheck:
          // JSDOM does not support the `tabbable` library. To solve this we can
          // check if `ResizeObserver` is a real function (not polyfilled), which
          // determines if the current environment is JSDOM-like.
          typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
        });
        function getTabbableIn(container, dir) {
          const list = tabbable(container, getTabbableOptions());
          const len = list.length;
          if (len === 0) return;
          const active = activeElement(getDocument(container));
          const index2 = list.indexOf(active);
          const nextIndex = index2 === -1 ? dir === 1 ? 0 : len - 1 : index2 + dir;
          return list[nextIndex];
        }
        function getNextTabbable(referenceElement) {
          return getTabbableIn(getDocument(referenceElement).body, 1) || referenceElement;
        }
        function getPreviousTabbable(referenceElement) {
          return getTabbableIn(getDocument(referenceElement).body, -1) || referenceElement;
        }
        function isOutsideEvent(event, container) {
          const containerElement = container || event.currentTarget;
          const relatedTarget = event.relatedTarget;
          return !relatedTarget || !contains(containerElement, relatedTarget);
        }
        function disableFocusInside(container) {
          const tabbableElements = tabbable(container, getTabbableOptions());
          tabbableElements.forEach(element => {
            element.dataset.tabindex = element.getAttribute("tabindex") || "";
            element.setAttribute("tabindex", "-1");
          });
        }
        function enableFocusInside(container) {
          const elements = container.querySelectorAll("[data-tabindex]");
          elements.forEach(element => {
            const tabindex = element.dataset.tabindex;
            delete element.dataset.tabindex;
            if (tabindex) {
              element.setAttribute("tabindex", tabindex);
            } else {
              element.removeAttribute("tabindex");
            }
          });
        }
        var isClient = typeof document !== 'undefined';
        var noop = function noop() {};
        var index = isClient ? reactExports.useLayoutEffect : noop;

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
          let length;
          let i;
          let keys;
          if (a && b && typeof a === 'object') {
            if (Array.isArray(a)) {
              length = a.length;
              if (length !== b.length) return false;
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
              if (!{}.hasOwnProperty.call(b, keys[i])) {
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
        function getDPR(element) {
          if (typeof window === 'undefined') {
            return 1;
          }
          const win = element.ownerDocument.defaultView || window;
          return win.devicePixelRatio || 1;
        }
        function roundByDPR(element, value) {
          const dpr = getDPR(element);
          return Math.round(value * dpr) / dpr;
        }
        function useLatestRef(value) {
          const ref = reactExports.useRef(value);
          index(() => {
            ref.current = value;
          });
          return ref;
        }

        /**
         * Provides data to position a floating element.
         * @see https://floating-ui.com/docs/useFloating
         */
        function useFloating$1(options) {
          if (options === void 0) {
            options = {};
          }
          const {
            placement = 'bottom',
            strategy = 'absolute',
            middleware = [],
            platform,
            elements: {
              reference: externalReference,
              floating: externalFloating
            } = {},
            transform = true,
            whileElementsMounted,
            open
          } = options;
          const [data, setData] = reactExports.useState({
            x: 0,
            y: 0,
            strategy,
            placement,
            middlewareData: {},
            isPositioned: false
          });
          const [latestMiddleware, setLatestMiddleware] = reactExports.useState(middleware);
          if (!deepEqual(latestMiddleware, middleware)) {
            setLatestMiddleware(middleware);
          }
          const [_reference, _setReference] = reactExports.useState(null);
          const [_floating, _setFloating] = reactExports.useState(null);
          const setReference = reactExports.useCallback(node => {
            if (node !== referenceRef.current) {
              referenceRef.current = node;
              _setReference(node);
            }
          }, []);
          const setFloating = reactExports.useCallback(node => {
            if (node !== floatingRef.current) {
              floatingRef.current = node;
              _setFloating(node);
            }
          }, []);
          const referenceEl = externalReference || _reference;
          const floatingEl = externalFloating || _floating;
          const referenceRef = reactExports.useRef(null);
          const floatingRef = reactExports.useRef(null);
          const dataRef = reactExports.useRef(data);
          const hasWhileElementsMounted = whileElementsMounted != null;
          const whileElementsMountedRef = useLatestRef(whileElementsMounted);
          const platformRef = useLatestRef(platform);
          const openRef = useLatestRef(open);
          const update = reactExports.useCallback(() => {
            if (!referenceRef.current || !floatingRef.current) {
              return;
            }
            const config = {
              placement,
              strategy,
              middleware: latestMiddleware
            };
            if (platformRef.current) {
              config.platform = platformRef.current;
            }
            computePosition(referenceRef.current, floatingRef.current, config).then(data => {
              const fullData = _objectSpread(_objectSpread({}, data), {}, {
                // The floating element's position may be recomputed while it's closed
                // but still mounted (such as when transitioning out). To ensure
                // `isPositioned` will be `false` initially on the next open, avoid
                // setting it to `true` when `open === false` (must be specified).
                isPositioned: openRef.current !== false
              });
              if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
                dataRef.current = fullData;
                reactDomExports.flushSync(() => {
                  setData(fullData);
                });
              }
            });
          }, [latestMiddleware, placement, strategy, platformRef, openRef]);
          index(() => {
            if (open === false && dataRef.current.isPositioned) {
              dataRef.current.isPositioned = false;
              setData(data => _objectSpread(_objectSpread({}, data), {}, {
                isPositioned: false
              }));
            }
          }, [open]);
          const isMountedRef = reactExports.useRef(false);
          index(() => {
            isMountedRef.current = true;
            return () => {
              isMountedRef.current = false;
            };
          }, []);
          index(() => {
            if (referenceEl) referenceRef.current = referenceEl;
            if (floatingEl) floatingRef.current = floatingEl;
            if (referenceEl && floatingEl) {
              if (whileElementsMountedRef.current) {
                return whileElementsMountedRef.current(referenceEl, floatingEl, update);
              }
              update();
            }
          }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
          const refs = reactExports.useMemo(() => ({
            reference: referenceRef,
            floating: floatingRef,
            setReference,
            setFloating
          }), [setReference, setFloating]);
          const elements = reactExports.useMemo(() => ({
            reference: referenceEl,
            floating: floatingEl
          }), [referenceEl, floatingEl]);
          const floatingStyles = reactExports.useMemo(() => {
            const initialStyles = {
              position: strategy,
              left: 0,
              top: 0
            };
            if (!elements.floating) {
              return initialStyles;
            }
            const x = roundByDPR(elements.floating, data.x);
            const y = roundByDPR(elements.floating, data.y);
            if (transform) {
              return _objectSpread(_objectSpread({}, initialStyles), {}, {
                transform: "translate(" + x + "px, " + y + "px)"
              }, getDPR(elements.floating) >= 1.5 && {
                willChange: 'transform'
              });
            }
            return {
              position: strategy,
              left: x,
              top: y
            };
          }, [strategy, transform, elements.floating, data.x, data.y]);
          return reactExports.useMemo(() => _objectSpread(_objectSpread({}, data), {}, {
            update,
            refs,
            elements,
            floatingStyles
          }), [data, update, refs, elements, floatingStyles]);
        }

        /**
         * Modifies the placement by translating the floating element along the
         * specified axes.
         * A number (shorthand for `mainAxis` or distance), or an axes configuration
         * object may be passed.
         * @see https://floating-ui.com/docs/offset
         */
        const offset = (options, deps) => _objectSpread(_objectSpread({}, offset$1(options)), {}, {
          options: [options, deps]
        });

        /**
         * Optimizes the visibility of the floating element by shifting it in order to
         * keep it in view when it will overflow the clipping boundary.
         * @see https://floating-ui.com/docs/shift
         */
        const shift = (options, deps) => _objectSpread(_objectSpread({}, shift$1(options)), {}, {
          options: [options, deps]
        });
        const FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
        const ACTIVE_KEY = "active";
        const SELECTED_KEY = "selected";
        const SafeReact = _objectSpread({}, React);
        let serverHandoffComplete = false;
        let count = 0;
        const genId = () =>
        // Ensure the id is unique with multiple independent versions of Floating UI
        // on <React 18
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++;
        function useFloatingId() {
          const [id, setId] = reactExports.useState(() => serverHandoffComplete ? genId() : void 0);
          index$1(() => {
            if (id == null) {
              setId(genId());
            }
          }, []);
          reactExports.useEffect(() => {
            serverHandoffComplete = true;
          }, []);
          return id;
        }
        const useReactId = SafeReact.useId;
        const useId = useReactId || useFloatingId;
        function createEventEmitter() {
          const map = /* @__PURE__ */new Map();
          return {
            emit(event, data) {
              var _map$get;
              (_map$get = map.get(event)) == null || _map$get.forEach(listener => listener(data));
            },
            on(event, listener) {
              if (!map.has(event)) {
                map.set(event, /* @__PURE__ */new Set());
              }
              map.get(event).add(listener);
            },
            off(event, listener) {
              var _map$get2;
              (_map$get2 = map.get(event)) == null || _map$get2.delete(listener);
            }
          };
        }
        const FloatingNodeContext = /* @__PURE__ */reactExports.createContext(null);
        const FloatingTreeContext = /* @__PURE__ */reactExports.createContext(null);
        const useFloatingParentNodeId = () => {
          var _React$useContext;
          return ((_React$useContext = reactExports.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
        };
        const useFloatingTree = () => reactExports.useContext(FloatingTreeContext);
        function createAttribute(name) {
          return "data-floating-ui-" + name;
        }
        function clearTimeoutIfSet(timeoutRef) {
          if (timeoutRef.current !== -1) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = -1;
          }
        }
        const safePolygonIdentifier = /* @__PURE__ */createAttribute("safe-polygon");
        function getDelay(value, prop, pointerType) {
          if (pointerType && !isMouseLikePointerType(pointerType)) {
            return 0;
          }
          if (typeof value === "number") {
            return value;
          }
          if (typeof value === "function") {
            const result = value();
            if (typeof result === "number") {
              return result;
            }
            return result == null ? void 0 : result[prop];
          }
          return value == null ? void 0 : value[prop];
        }
        function getRestMs(value) {
          if (typeof value === "function") {
            return value();
          }
          return value;
        }
        function useHover(context, props) {
          if (props === void 0) {
            props = {};
          }
          const {
            open,
            onOpenChange,
            dataRef,
            events,
            elements
          } = context;
          const {
            enabled = true,
            delay = 0,
            handleClose = null,
            mouseOnly = false,
            restMs = 0,
            move = true
          } = props;
          const tree = useFloatingTree();
          const parentId = useFloatingParentNodeId();
          const handleCloseRef = useLatestRef$1(handleClose);
          const delayRef = useLatestRef$1(delay);
          const openRef = useLatestRef$1(open);
          const restMsRef = useLatestRef$1(restMs);
          const pointerTypeRef = reactExports.useRef();
          const timeoutRef = reactExports.useRef(-1);
          const handlerRef = reactExports.useRef();
          const restTimeoutRef = reactExports.useRef(-1);
          const blockMouseMoveRef = reactExports.useRef(true);
          const performedPointerEventsMutationRef = reactExports.useRef(false);
          const unbindMouseMoveRef = reactExports.useRef(() => {});
          const restTimeoutPendingRef = reactExports.useRef(false);
          const isHoverOpen = useEffectEvent(() => {
            var _dataRef$current$open;
            const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
            return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
          });
          reactExports.useEffect(() => {
            if (!enabled) return;
            function onOpenChange2(_ref) {
              let {
                open: open2
              } = _ref;
              if (!open2) {
                clearTimeoutIfSet(timeoutRef);
                clearTimeoutIfSet(restTimeoutRef);
                blockMouseMoveRef.current = true;
                restTimeoutPendingRef.current = false;
              }
            }
            events.on("openchange", onOpenChange2);
            return () => {
              events.off("openchange", onOpenChange2);
            };
          }, [enabled, events]);
          reactExports.useEffect(() => {
            if (!enabled) return;
            if (!handleCloseRef.current) return;
            if (!open) return;
            function onLeave(event) {
              if (isHoverOpen()) {
                onOpenChange(false, event, "hover");
              }
            }
            const html = getDocument(elements.floating).documentElement;
            html.addEventListener("mouseleave", onLeave);
            return () => {
              html.removeEventListener("mouseleave", onLeave);
            };
          }, [elements.floating, open, onOpenChange, enabled, handleCloseRef, isHoverOpen]);
          const closeWithDelay = reactExports.useCallback(function (event, runElseBranch, reason) {
            if (runElseBranch === void 0) {
              runElseBranch = true;
            }
            if (reason === void 0) {
              reason = "hover";
            }
            const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
            if (closeDelay && !handlerRef.current) {
              clearTimeoutIfSet(timeoutRef);
              timeoutRef.current = window.setTimeout(() => onOpenChange(false, event, reason), closeDelay);
            } else if (runElseBranch) {
              clearTimeoutIfSet(timeoutRef);
              onOpenChange(false, event, reason);
            }
          }, [delayRef, onOpenChange]);
          const cleanupMouseMoveHandler = useEffectEvent(() => {
            unbindMouseMoveRef.current();
            handlerRef.current = void 0;
          });
          const clearPointerEvents = useEffectEvent(() => {
            if (performedPointerEventsMutationRef.current) {
              const body = getDocument(elements.floating).body;
              body.style.pointerEvents = "";
              body.removeAttribute(safePolygonIdentifier);
              performedPointerEventsMutationRef.current = false;
            }
          });
          const isClickLikeOpenEvent = useEffectEvent(() => {
            return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
          });
          reactExports.useEffect(() => {
            if (!enabled) return;
            function onReferenceMouseEnter(event) {
              clearTimeoutIfSet(timeoutRef);
              blockMouseMoveRef.current = false;
              if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || getRestMs(restMsRef.current) > 0 && !getDelay(delayRef.current, "open")) {
                return;
              }
              const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
              if (openDelay) {
                timeoutRef.current = window.setTimeout(() => {
                  if (!openRef.current) {
                    onOpenChange(true, event, "hover");
                  }
                }, openDelay);
              } else if (!open) {
                onOpenChange(true, event, "hover");
              }
            }
            function onReferenceMouseLeave(event) {
              if (isClickLikeOpenEvent()) {
                clearPointerEvents();
                return;
              }
              unbindMouseMoveRef.current();
              const doc = getDocument(elements.floating);
              clearTimeoutIfSet(restTimeoutRef);
              restTimeoutPendingRef.current = false;
              if (handleCloseRef.current && dataRef.current.floatingContext) {
                if (!open) {
                  clearTimeoutIfSet(timeoutRef);
                }
                handlerRef.current = handleCloseRef.current(_objectSpread(_objectSpread({}, dataRef.current.floatingContext), {}, {
                  tree,
                  x: event.clientX,
                  y: event.clientY,
                  onClose() {
                    clearPointerEvents();
                    cleanupMouseMoveHandler();
                    if (!isClickLikeOpenEvent()) {
                      closeWithDelay(event, true, "safe-polygon");
                    }
                  }
                }));
                const handler = handlerRef.current;
                doc.addEventListener("mousemove", handler);
                unbindMouseMoveRef.current = () => {
                  doc.removeEventListener("mousemove", handler);
                };
                return;
              }
              const shouldClose = pointerTypeRef.current === "touch" ? !contains(elements.floating, event.relatedTarget) : true;
              if (shouldClose) {
                closeWithDelay(event);
              }
            }
            function onScrollMouseLeave(event) {
              if (isClickLikeOpenEvent()) return;
              if (!dataRef.current.floatingContext) return;
              handleCloseRef.current == null || handleCloseRef.current(_objectSpread(_objectSpread({}, dataRef.current.floatingContext), {}, {
                tree,
                x: event.clientX,
                y: event.clientY,
                onClose() {
                  clearPointerEvents();
                  cleanupMouseMoveHandler();
                  if (!isClickLikeOpenEvent()) {
                    closeWithDelay(event);
                  }
                }
              }))(event);
            }
            function onFloatingMouseEnter() {
              clearTimeoutIfSet(timeoutRef);
            }
            function onFloatingMouseLeave(event) {
              if (!isClickLikeOpenEvent()) {
                closeWithDelay(event, false);
              }
            }
            if (isElement(elements.domReference)) {
              const reference2 = elements.domReference;
              const floating = elements.floating;
              if (open) {
                reference2.addEventListener("mouseleave", onScrollMouseLeave);
              }
              if (move) {
                reference2.addEventListener("mousemove", onReferenceMouseEnter, {
                  once: true
                });
              }
              reference2.addEventListener("mouseenter", onReferenceMouseEnter);
              reference2.addEventListener("mouseleave", onReferenceMouseLeave);
              if (floating) {
                floating.addEventListener("mouseleave", onScrollMouseLeave);
                floating.addEventListener("mouseenter", onFloatingMouseEnter);
                floating.addEventListener("mouseleave", onFloatingMouseLeave);
              }
              return () => {
                if (open) {
                  reference2.removeEventListener("mouseleave", onScrollMouseLeave);
                }
                if (move) {
                  reference2.removeEventListener("mousemove", onReferenceMouseEnter);
                }
                reference2.removeEventListener("mouseenter", onReferenceMouseEnter);
                reference2.removeEventListener("mouseleave", onReferenceMouseLeave);
                if (floating) {
                  floating.removeEventListener("mouseleave", onScrollMouseLeave);
                  floating.removeEventListener("mouseenter", onFloatingMouseEnter);
                  floating.removeEventListener("mouseleave", onFloatingMouseLeave);
                }
              };
            }
          }, [elements, enabled, context, mouseOnly, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, openRef, tree, delayRef, handleCloseRef, dataRef, isClickLikeOpenEvent, restMsRef]);
          index$1(() => {
            var _handleCloseRef$curre;
            if (!enabled) return;
            if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && (_handleCloseRef$curre = _handleCloseRef$curre.__options) != null && _handleCloseRef$curre.blockPointerEvents && isHoverOpen()) {
              performedPointerEventsMutationRef.current = true;
              const floatingEl = elements.floating;
              if (isElement(elements.domReference) && floatingEl) {
                var _tree$nodesRef$curren;
                const body = getDocument(elements.floating).body;
                body.setAttribute(safePolygonIdentifier, "");
                const ref = elements.domReference;
                const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find(node => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
                if (parentFloating) {
                  parentFloating.style.pointerEvents = "";
                }
                body.style.pointerEvents = "none";
                ref.style.pointerEvents = "auto";
                floatingEl.style.pointerEvents = "auto";
                return () => {
                  body.style.pointerEvents = "";
                  ref.style.pointerEvents = "";
                  floatingEl.style.pointerEvents = "";
                };
              }
            }
          }, [enabled, open, parentId, elements, tree, handleCloseRef, isHoverOpen]);
          index$1(() => {
            if (!open) {
              pointerTypeRef.current = void 0;
              restTimeoutPendingRef.current = false;
              cleanupMouseMoveHandler();
              clearPointerEvents();
            }
          }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
          reactExports.useEffect(() => {
            return () => {
              cleanupMouseMoveHandler();
              clearTimeoutIfSet(timeoutRef);
              clearTimeoutIfSet(restTimeoutRef);
              clearPointerEvents();
            };
          }, [enabled, elements.domReference, cleanupMouseMoveHandler, clearPointerEvents]);
          const reference = reactExports.useMemo(() => {
            function setPointerRef(event) {
              pointerTypeRef.current = event.pointerType;
            }
            return {
              onPointerDown: setPointerRef,
              onPointerEnter: setPointerRef,
              onMouseMove(event) {
                const {
                  nativeEvent
                } = event;
                function handleMouseMove() {
                  if (!blockMouseMoveRef.current && !openRef.current) {
                    onOpenChange(true, nativeEvent, "hover");
                  }
                }
                if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current)) {
                  return;
                }
                if (open || getRestMs(restMsRef.current) === 0) {
                  return;
                }
                if (restTimeoutPendingRef.current && event.movementX ** 2 + event.movementY ** 2 < 2) {
                  return;
                }
                clearTimeoutIfSet(restTimeoutRef);
                if (pointerTypeRef.current === "touch") {
                  handleMouseMove();
                } else {
                  restTimeoutPendingRef.current = true;
                  restTimeoutRef.current = window.setTimeout(handleMouseMove, getRestMs(restMsRef.current));
                }
              }
            };
          }, [mouseOnly, onOpenChange, open, openRef, restMsRef]);
          return reactExports.useMemo(() => enabled ? {
            reference
          } : {}, [enabled, reference]);
        }
        const HIDDEN_STYLES = {
          border: 0,
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "fixed",
          whiteSpace: "nowrap",
          width: "1px",
          top: 0,
          left: 0
        };
        const FocusGuard = /* @__PURE__ */reactExports.forwardRef(function FocusGuard2(props, ref) {
          const [role, setRole] = reactExports.useState();
          index$1(() => {
            if (isSafari()) {
              setRole("button");
            }
          }, []);
          const restProps = {
            ref,
            tabIndex: 0,
            // Role is only for VoiceOver
            role,
            "aria-hidden": role ? void 0 : true,
            [createAttribute("focus-guard")]: "",
            style: HIDDEN_STYLES
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("span", _objectSpread(_objectSpread({}, props), restProps));
        });
        const PortalContext = /* @__PURE__ */reactExports.createContext(null);
        const attr = /* @__PURE__ */createAttribute("portal");
        function useFloatingPortalNode(props) {
          if (props === void 0) {
            props = {};
          }
          const {
            id,
            root
          } = props;
          const uniqueId = useId();
          const portalContext = usePortalContext();
          const [portalNode, setPortalNode] = reactExports.useState(null);
          const portalNodeRef = reactExports.useRef(null);
          index$1(() => {
            return () => {
              portalNode == null || portalNode.remove();
              queueMicrotask(() => {
                portalNodeRef.current = null;
              });
            };
          }, [portalNode]);
          index$1(() => {
            if (!uniqueId) return;
            if (portalNodeRef.current) return;
            const existingIdRoot = id ? document.getElementById(id) : null;
            if (!existingIdRoot) return;
            const subRoot = document.createElement("div");
            subRoot.id = uniqueId;
            subRoot.setAttribute(attr, "");
            existingIdRoot.appendChild(subRoot);
            portalNodeRef.current = subRoot;
            setPortalNode(subRoot);
          }, [id, uniqueId]);
          index$1(() => {
            if (root === null) return;
            if (!uniqueId) return;
            if (portalNodeRef.current) return;
            let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
            if (container && !isNode(container)) container = container.current;
            container = container || document.body;
            let idWrapper = null;
            if (id) {
              idWrapper = document.createElement("div");
              idWrapper.id = id;
              container.appendChild(idWrapper);
            }
            const subRoot = document.createElement("div");
            subRoot.id = uniqueId;
            subRoot.setAttribute(attr, "");
            container = idWrapper || container;
            container.appendChild(subRoot);
            portalNodeRef.current = subRoot;
            setPortalNode(subRoot);
          }, [id, root, uniqueId, portalContext]);
          return portalNode;
        }
        function FloatingPortal(props) {
          const {
            children,
            id,
            root,
            preserveTabOrder = true
          } = props;
          const portalNode = useFloatingPortalNode({
            id,
            root
          });
          const [focusManagerState, setFocusManagerState] = reactExports.useState(null);
          const beforeOutsideRef = reactExports.useRef(null);
          const afterOutsideRef = reactExports.useRef(null);
          const beforeInsideRef = reactExports.useRef(null);
          const afterInsideRef = reactExports.useRef(null);
          const modal = focusManagerState == null ? void 0 : focusManagerState.modal;
          const open = focusManagerState == null ? void 0 : focusManagerState.open;
          const shouldRenderGuards =
          // The FocusManager and therefore floating element are currently open/
          // rendered.
          !!focusManagerState &&
          // Guards are only for non-modal focus management.
          !focusManagerState.modal &&
          // Don't render if unmount is transitioning.
          focusManagerState.open && preserveTabOrder && !!(root || portalNode);
          reactExports.useEffect(() => {
            if (!portalNode || !preserveTabOrder || modal) {
              return;
            }
            function onFocus(event) {
              if (portalNode && isOutsideEvent(event)) {
                const focusing = event.type === "focusin";
                const manageFocus = focusing ? enableFocusInside : disableFocusInside;
                manageFocus(portalNode);
              }
            }
            portalNode.addEventListener("focusin", onFocus, true);
            portalNode.addEventListener("focusout", onFocus, true);
            return () => {
              portalNode.removeEventListener("focusin", onFocus, true);
              portalNode.removeEventListener("focusout", onFocus, true);
            };
          }, [portalNode, preserveTabOrder, modal]);
          reactExports.useEffect(() => {
            if (!portalNode) return;
            if (open) return;
            enableFocusInside(portalNode);
          }, [open, portalNode]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(PortalContext.Provider, {
            value: reactExports.useMemo(() => ({
              preserveTabOrder,
              beforeOutsideRef,
              afterOutsideRef,
              beforeInsideRef,
              afterInsideRef,
              portalNode,
              setFocusManagerState
            }), [preserveTabOrder, portalNode]),
            children: [shouldRenderGuards && portalNode && /* @__PURE__ */jsxRuntimeExports.jsx(FocusGuard, {
              "data-type": "outside",
              ref: beforeOutsideRef,
              onFocus: event => {
                if (isOutsideEvent(event, portalNode)) {
                  var _beforeInsideRef$curr;
                  (_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
                } else {
                  const domReference = focusManagerState ? focusManagerState.domReference : null;
                  const prevTabbable = getPreviousTabbable(domReference);
                  prevTabbable == null || prevTabbable.focus();
                }
              }
            }), shouldRenderGuards && portalNode && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              "aria-owns": portalNode.id,
              style: HIDDEN_STYLES
            }), portalNode && /* @__PURE__ */reactDomExports.createPortal(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */jsxRuntimeExports.jsx(FocusGuard, {
              "data-type": "outside",
              ref: afterOutsideRef,
              onFocus: event => {
                if (isOutsideEvent(event, portalNode)) {
                  var _afterInsideRef$curre;
                  (_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
                } else {
                  const domReference = focusManagerState ? focusManagerState.domReference : null;
                  const nextTabbable = getNextTabbable(domReference);
                  nextTabbable == null || nextTabbable.focus();
                  (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false, event.nativeEvent, "focus-out"));
                }
              }
            })]
          });
        }
        const usePortalContext = () => reactExports.useContext(PortalContext);
        function useFloatingRootContext(options) {
          const {
            open = false,
            onOpenChange: onOpenChangeProp,
            elements: elementsProp
          } = options;
          const floatingId = useId();
          const dataRef = reactExports.useRef({});
          const [events] = reactExports.useState(() => createEventEmitter());
          const nested = useFloatingParentNodeId() != null;
          const [positionReference, setPositionReference] = reactExports.useState(elementsProp.reference);
          const onOpenChange = useEffectEvent((open2, event, reason) => {
            dataRef.current.openEvent = open2 ? event : void 0;
            events.emit("openchange", {
              open: open2,
              event,
              reason,
              nested
            });
            onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
          });
          const refs = reactExports.useMemo(() => ({
            setPositionReference
          }), []);
          const elements = reactExports.useMemo(() => ({
            reference: positionReference || elementsProp.reference || null,
            floating: elementsProp.floating || null,
            domReference: elementsProp.reference
          }), [positionReference, elementsProp.reference, elementsProp.floating]);
          return reactExports.useMemo(() => ({
            dataRef,
            open,
            onOpenChange,
            elements,
            events,
            floatingId,
            refs
          }), [open, onOpenChange, elements, events, floatingId, refs]);
        }
        function useFloating(options) {
          if (options === void 0) {
            options = {};
          }
          const {
            nodeId
          } = options;
          const internalRootContext = useFloatingRootContext(_objectSpread(_objectSpread({}, options), {}, {
            elements: _objectSpread({
              reference: null,
              floating: null
            }, options.elements)
          }));
          const rootContext = options.rootContext || internalRootContext;
          const computedElements = rootContext.elements;
          const [_domReference, setDomReference] = reactExports.useState(null);
          const [positionReference, _setPositionReference] = reactExports.useState(null);
          const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
          const domReference = optionDomReference || _domReference;
          const domReferenceRef = reactExports.useRef(null);
          const tree = useFloatingTree();
          index$1(() => {
            if (domReference) {
              domReferenceRef.current = domReference;
            }
          }, [domReference]);
          const position = useFloating$1(_objectSpread(_objectSpread({}, options), {}, {
            elements: _objectSpread(_objectSpread({}, computedElements), positionReference && {
              reference: positionReference
            })
          }));
          const setPositionReference = reactExports.useCallback(node => {
            const computedPositionReference = isElement(node) ? {
              getBoundingClientRect: () => node.getBoundingClientRect(),
              getClientRects: () => node.getClientRects(),
              contextElement: node
            } : node;
            _setPositionReference(computedPositionReference);
            position.refs.setReference(computedPositionReference);
          }, [position.refs]);
          const setReference = reactExports.useCallback(node => {
            if (isElement(node) || node === null) {
              domReferenceRef.current = node;
              setDomReference(node);
            }
            if (isElement(position.refs.reference.current) || position.refs.reference.current === null ||
            // Don't allow setting virtual elements using the old technique back to
            // `null` to support `positionReference` + an unstable `reference`
            // callback ref.
            node !== null && !isElement(node)) {
              position.refs.setReference(node);
            }
          }, [position.refs]);
          const refs = reactExports.useMemo(() => _objectSpread(_objectSpread({}, position.refs), {}, {
            setReference,
            setPositionReference,
            domReference: domReferenceRef
          }), [position.refs, setReference, setPositionReference]);
          const elements = reactExports.useMemo(() => _objectSpread(_objectSpread({}, position.elements), {}, {
            domReference
          }), [position.elements, domReference]);
          const context = reactExports.useMemo(() => _objectSpread(_objectSpread(_objectSpread({}, position), rootContext), {}, {
            refs,
            elements,
            nodeId
          }), [position, refs, elements, nodeId, rootContext]);
          index$1(() => {
            rootContext.dataRef.current.floatingContext = context;
            const node = tree == null ? void 0 : tree.nodesRef.current.find(node2 => node2.id === nodeId);
            if (node) {
              node.context = context;
            }
          });
          return reactExports.useMemo(() => _objectSpread(_objectSpread({}, position), {}, {
            context,
            refs,
            elements
          }), [position, refs, elements, context]);
        }
        function mergeProps(userProps, propsList, elementKey) {
          const map = /* @__PURE__ */new Map();
          const isItem = elementKey === "item";
          let domUserProps = userProps;
          if (isItem && userProps) {
            const {
                [ACTIVE_KEY]: _,
                [SELECTED_KEY]: __
              } = userProps,
              validProps = _objectWithoutProperties(userProps, [ACTIVE_KEY, SELECTED_KEY].map(_toPropertyKey));
            domUserProps = validProps;
          }
          return _objectSpread(_objectSpread(_objectSpread({}, elementKey === "floating" && {
            tabIndex: -1,
            [FOCUSABLE_ATTRIBUTE]: ""
          }), domUserProps), propsList.map(value => {
            const propsOrGetProps = value ? value[elementKey] : null;
            if (typeof propsOrGetProps === "function") {
              return userProps ? propsOrGetProps(userProps) : null;
            }
            return propsOrGetProps;
          }).concat(userProps).reduce((acc, props) => {
            if (!props) {
              return acc;
            }
            Object.entries(props).forEach(_ref => {
              let [key, value] = _ref;
              if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
                return;
              }
              if (key.indexOf("on") === 0) {
                if (!map.has(key)) {
                  map.set(key, []);
                }
                if (typeof value === "function") {
                  var _map$get;
                  (_map$get = map.get(key)) == null || _map$get.push(value);
                  acc[key] = function () {
                    var _map$get2;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                      args[_key] = arguments[_key];
                    }
                    return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map(fn => fn(...args)).find(val => val !== void 0);
                  };
                }
              } else {
                acc[key] = value;
              }
            });
            return acc;
          }, {}));
        }
        function useInteractions(propsList) {
          if (propsList === void 0) {
            propsList = [];
          }
          const referenceDeps = propsList.map(key => key == null ? void 0 : key.reference);
          const floatingDeps = propsList.map(key => key == null ? void 0 : key.floating);
          const itemDeps = propsList.map(key => key == null ? void 0 : key.item);
          const getReferenceProps = reactExports.useCallback(userProps => mergeProps(userProps, propsList, "reference"),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          referenceDeps);
          const getFloatingProps = reactExports.useCallback(userProps => mergeProps(userProps, propsList, "floating"),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          floatingDeps);
          const getItemProps = reactExports.useCallback(userProps => mergeProps(userProps, propsList, "item"),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          itemDeps);
          return reactExports.useMemo(() => ({
            getReferenceProps,
            getFloatingProps,
            getItemProps
          }), [getReferenceProps, getFloatingProps, getItemProps]);
        }
        function Tooltip({
          placement,
          content,
          children,
          className,
          selected,
          animation
        }) {
          var _animation$initial, _animation$animate, _animation$exit, _animation$transition;
          const [isOpen, setIsOpen] = reactExports.useState(false);
          const [isVisible, setIsVisible] = reactExports.useState(false);
          const {
            refs,
            context,
            x,
            y,
            floatingStyles
          } = useFloating({
            open: isOpen,
            onOpenChange: setIsOpen,
            placement,
            // Make sure the tooltip stays on the screen
            whileElementsMounted: autoUpdate,
            middleware: [offset(8), shift()]
          });
          const hover = useHover(context, {
            move: false
          });
          const {
            getReferenceProps,
            getFloatingProps
          } = useInteractions([hover]);
          const initExitState = getInitExitState(placement);
          const defaultAnim = {
            initial: initExitState,
            animate: {
              opacity: 1,
              x: 0,
              y: 0
            },
            exit: initExitState,
            transition: {
              duration: 0.2,
              ease: "easeOut"
            }
          };
          const motionProps = {
            initial: (_animation$initial = animation === null || animation === void 0 ? void 0 : animation.initial) !== null && _animation$initial !== void 0 ? _animation$initial : defaultAnim.initial,
            animate: (_animation$animate = animation === null || animation === void 0 ? void 0 : animation.animate) !== null && _animation$animate !== void 0 ? _animation$animate : defaultAnim.animate,
            exit: (_animation$exit = animation === null || animation === void 0 ? void 0 : animation.exit) !== null && _animation$exit !== void 0 ? _animation$exit : defaultAnim.exit,
            transition: (_animation$transition = animation === null || animation === void 0 ? void 0 : animation.transition) !== null && _animation$transition !== void 0 ? _animation$transition : defaultAnim.transition
          };
          reactExports.useEffect(() => {
            if (isOpen && !selected) setIsVisible(true);else setIsVisible(false);
          }, [isOpen, selected]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", _objectSpread(_objectSpread({
              ref: refs.setReference
            }, getReferenceProps()), {}, {
              className: cn(className),
              children
            })), /* @__PURE__ */jsxRuntimeExports.jsx(FloatingPortal, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(AnimatePresence, {
                children: isVisible && /* @__PURE__ */jsxRuntimeExports.jsxs(motion.div, _objectSpread(_objectSpread(_objectSpread({
                  className: cn("tooltipContainer z-20 whitespace-nowrap", className),
                  ref: refs.setFloating,
                  style: _objectSpread(_objectSpread({}, floatingStyles), {}, {
                    top: y,
                    left: x
                  })
                }, getFloatingProps()), motionProps), {}, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "tooltip",
                    children: content
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: `tooltipArrow ${positionConvert[placement]}`
                  })]
                }))
              })
            })]
          });
        }
        const positionConvert = {
          top: "bottom",
          bottom: "top",
          left: "right",
          right: "left",
          "bottom-start": "bottom",
          "bottom-end": "top-end",
          "top-start": "bottom",
          "top-end": "top",
          "right-start": "left",
          "right-end": "right",
          "left-start": "right",
          "left-end": "left"
        };
        const getInitExitState = placement => {
          const baseAnimation = {
            opacity: 0
          };
          const direction = positionConvert[placement];
          const offsetMap = {
            top: {
              y: "-0.5rem"
            },
            bottom: {
              y: "0.5rem"
            },
            left: {
              x: "-0.5rem"
            },
            right: {
              x: "0.5rem"
            },
            "top-end": {
              y: "-0.5rem"
            }
          };
          return _objectSpread(_objectSpread({}, baseAnimation), offsetMap[direction]);
        };
        const SquareButton = exports("z", _ref4 => {
          let {
              id,
              className,
              buttonClassName,
              child,
              isGhost = false,
              tooltipContent = "",
              tooltipPlacement = "bottom",
              selected = false,
              // if you don't need the tooltip just set the selected to true
              onClick
            } = _ref4,
            props = _objectWithoutProperties(_ref4, _excluded3);
          return /* @__PURE__ */jsxRuntimeExports.jsx(ActiveStateWrapper, {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Tooltip, {
              placement: tooltipPlacement,
              content: tooltipContent,
              className,
              selected,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", _objectSpread(_objectSpread({
                id,
                className: cn("SquareButton relative h-full w-full", buttonClassName),
                onClick: () => {
                  if (onClick) {
                    onClick();
                    playSound(["click"]);
                  }
                }
              }, props), {}, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: cn("defaultType", isGhost && "isGhost"),
                  children: child
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "hoverType",
                  children: child
                })]
              }))
            })
          });
        });
      }
    };
  });
})();
//# sourceMappingURL=SquareButton-legacy-DYWXghqP.js.map
