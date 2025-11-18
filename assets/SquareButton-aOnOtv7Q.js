import { j as jsxRuntimeExports, A as AnimatePresence, m as motion, c as useAnimate, a as motion$1 } from "./framer-motion-vendor-M-CJJoj5.js";
import { t as useTranslation, c as useLayoutStore, e as useNetworkStore, d as useTimerStore, Y as Image, a$ as mobileCapRightRed, b0 as desktopCapRightRed, b1 as mobileCapCentralRed, b2 as desktopCapCentralRed, b3 as mobileCapLeftRed, b4 as desktopCapLeftRed, b5 as mobileCapRightYellow, b6 as desktopCapRightYellow, b7 as mobileCapCentralYellow, b8 as desktopCapCentralYellow, b9 as mobileCapLeftYellow, ba as desktopCapLeftYellow, bb as mobileCapRightGreen, bc as desktopCapRightGreen, bd as mobileCapCentralGreen, be as desktopCapCentralGreen, bf as mobileCapLeftGreen, bg as desktopCapLeftGreen, H as cn, i as isMobileDevice, h as useBettingStore, N as initInterpolationFunc, P as InterpolationMode, O as COUNT_DOWN_DELAY_SEC, T as ONE_FRAME_TIME_SEC, a as useLoadingStore, M as LoadingStageEnum, bh as isIOS, bi as hasVibrationSupport, j as useCartStore, bj as chipResources, v as useConfigStore, W as convertLabel, aK as isSicboGameType, bk as isRouletteGameType, J as useToastStore, S as isDesktop, a_ as getWinNumberStore, bl as getBetColor, a0 as thousandSeparator, bm as stopImg, bn as playImg, p as playSound, r as useAutoPlayStore, B as BetState, bo as getRouletteNumberColor, bp as WinNumber, aI as getFormattedRoundId, bq as getSicBoNumberColor, br as WinNumber$1, bs as useDebounce, _ as useChatStore, a7 as RoomType, y as connectIns, g as useSettingStore, bt as getPayTable, bu as scrollWrap, bv as useHistoryStore, bw as currencyFormat, bx as GameHistoryResult, a2 as scrollWrapToTop, by as DEFAULT_HISTORY_LIMIT, bz as toggle, a4 as LANGUAGES, bA as changeLanguage, bB as create, bC as subscribeWithSelector, bD as persist, bE as createJSONStorage, ah as BetTypeEnum, bF as OUTER_GROUP_MAP, bG as raceTrackToStraight, bH as Bg, bI as Bg$1, bJ as radial, bK as polarCenter, bL as RACE_ORDER, bM as maskBg, bN as virtualBackground, E as useWinAnimStore, bO as raceTrackGroup, L as tooltipEventBus, bP as getDraggedChipEdgeDist, bQ as getCenterPosition, I as useWinNumberStore$4, bR as cleanExtraBets, bS as addExtraBets, bT as getDraggedChipRef, ai as betGridPrefix, aA as raceTrackGroup$1 } from "./index-CmJqq2pL.js";
import { r as reactExports, b as React } from "./@sentry-vendor-DIzI_R8p.js";
import { I as Icon } from "./ui-icons-internal-Cv1pemof.js";
import { G as GameType, D as Decimal, j as capBets } from "./ikigaians-house-core-CYkxu2p9.js";
import { a as GameAction } from "./ikigaians-connect-core-CK9eHaV7.js";
import { I as IKGPlayerFactory } from "./ikigaians-ikgplayer-core-CxDPJj5x.js";
import { i as isShadowRoot, o as offset$1, s as shift$1, c as computePosition, a as isElement, b as isNode, d as autoUpdate } from "./App-DX8Hmlgm.js";
import { r as reactDomExports } from "./react-dom-vendor-DIvBW9ov.js";
const ConnectionIcon = () => {
  const [counter, setCounter] = reactExports.useState(1);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
      if (counter >= 4) setCounter(0);
    }, 300);
    return () => clearInterval(interval);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-12 w-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M2.74256 16.2868C14.4583 4.57107 33.4532 4.57107 45.169 16.2868C45.7547 16.8726 45.7548 17.8223 45.169 18.4081L44.1084 19.4688C43.827 19.7501 43.4455 19.9082 43.0477 19.9082C42.6498 19.9082 42.2683 19.7502 41.987 19.4689C32.0286 9.5105 15.8829 9.5105 5.92454 19.4689C5.64323 19.7502 5.26169 19.9082 4.86385 19.9082C4.46602 19.9082 4.08448 19.7501 3.80318 19.4688L2.74252 18.4081C2.15677 17.8223 2.15679 16.8726 2.74256 16.2868ZM9.10652 22.6509C17.3075 14.4499 30.604 14.4499 38.805 22.6509C39.3908 23.2366 39.3908 24.1864 38.805 24.7722L37.7444 25.8328C37.4631 26.1141 37.0816 26.2722 36.6838 26.2722C36.2859 26.2722 35.9044 26.1142 35.6231 25.8328C29.1794 19.3892 18.7322 19.3892 12.2885 25.8328C11.7028 26.4186 10.753 26.4186 10.1672 25.8329L9.10654 24.7722C8.82523 24.4909 8.66719 24.1094 8.66718 23.7115C8.66718 23.3137 8.82522 22.9322 9.10652 22.6509ZM15.5147 29.0147C20.2009 24.3284 27.7989 24.3284 32.4852 29.0147C33.071 29.6005 33.071 30.5503 32.4852 31.136L31.4246 32.1967C31.1433 32.478 30.7617 32.636 30.3639 32.636C29.9661 32.636 29.5845 32.478 29.3032 32.1967C26.3743 29.2678 21.6256 29.2678 18.6966 32.1967C18.1109 32.7825 17.1611 32.7825 16.5753 32.1967L15.5147 31.136C14.9289 30.5503 14.9289 29.6005 15.5147 29.0147ZM21.8786 35.3787C23.0502 34.2071 24.9497 34.2071 26.1213 35.3787C26.707 35.9645 26.7071 36.9142 26.1213 37.5L25.0606 38.5607C24.7793 38.842 24.3978 39 23.9999 39C23.6021 39 23.2206 38.842 22.9393 38.5607L21.8786 37.5C21.2928 36.9142 21.2928 35.9645 21.8786 35.3787Z",
            fill: counter < 4 ? "#434343" : "#EADFD2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M8.93934 22.6508C17.1404 14.4497 30.4368 14.4497 38.6378 22.6508C39.2236 23.2365 39.2236 24.1863 38.6378 24.7721L37.5772 25.8327C37.2959 26.114 36.9144 26.2721 36.5166 26.2721C36.1187 26.2721 35.7372 26.114 35.4559 25.8327C29.0122 19.3891 18.565 19.3891 12.1214 25.8327C11.5356 26.4185 10.5859 26.4185 10.0001 25.8328L8.93936 24.7721C8.65805 24.4908 8.5 24.1093 8.5 23.7114C8.5 23.3136 8.65803 22.9321 8.93934 22.6508Z",
            fill: counter < 3 ? "#434343" : "#EADFD2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M15.4393 29.0147C20.1256 24.3284 27.7236 24.3284 32.4099 29.0147C32.9957 29.6005 32.9957 30.5503 32.4099 31.136L31.3492 32.1967C31.0679 32.478 30.6864 32.636 30.2886 32.636C29.8908 32.636 29.5092 32.478 29.2279 32.1967C26.299 29.2678 21.5503 29.2678 18.6213 32.1967C18.0355 32.7825 17.0858 32.7825 16.5 32.1967L15.4393 31.136C14.8536 30.5503 14.8536 29.6005 15.4393 29.0147Z",
            fill: counter < 2 ? "#434343" : "#EADFD2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M21.9393 35.3787C23.1109 34.2071 25.0104 34.2071 26.182 35.3787C26.7678 35.9645 26.7678 36.9142 26.182 37.5L25.1213 38.5607C24.84 38.842 24.4585 39 24.0607 39C23.6628 39 23.2813 38.842 23 38.5607L21.9393 37.5C21.3536 36.9142 21.3536 35.9645 21.9393 35.3787Z",
            fill: counter < 1 ? "#434343" : "#EADFD2"
          }
        )
      ]
    }
  );
};
function NetworkStateModal(props) {
  const { isCloseServer } = props;
  const { t } = useTranslation();
  const isPixiLoading = useLayoutStore((s) => s.isPixiLoading);
  const isConnected = useNetworkStore((state) => state.isConnected);
  if (isCloseServer) return null;
  if (isConnected && !isPixiLoading) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "NetworkStateModal",
      className: "absolute left-0 top-0 z-[100] size-full",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrap center size-full flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectionIcon, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info", children: t("COMMON.RECONNECTING") })
      ] })
    }
  );
}
const NetworkStateModal$1 = reactExports.memo(NetworkStateModal);
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
    { sec: 540 * fps, value: 0.3 },
    // { sec: 585 * fps, value: 0.6 },
    { sec: 600 * fps, value: 1 },
    { sec: 630 * fps, value: 1 },
    { sec: 660 * fps, value: 1 },
    { sec: 690 * fps, value: 0 }
  ];
}
function initTextAlphaKeyframes(fps) {
  return [
    { sec: 0, value: 1 },
    { sec: 30 * fps, value: 1 },
    { sec: 60 * fps, value: 1 },
    { sec: 90 * fps, value: 1 },
    { sec: 120 * fps, value: 1 },
    { sec: 150 * fps, value: 1 },
    { sec: 180 * fps, value: 1 },
    { sec: 210 * fps, value: 1 },
    { sec: 240 * fps, value: 1 },
    { sec: 270 * fps, value: 1 },
    { sec: 300 * fps, value: 1 },
    { sec: 330 * fps, value: 1 },
    { sec: 360 * fps, value: 1 },
    { sec: 390 * fps, value: 1 },
    { sec: 420 * fps, value: 1 },
    { sec: 450 * fps, value: 1 },
    { sec: 480 * fps, value: 1 },
    { sec: 510 * fps, value: 1 },
    { sec: 540 * fps, value: 1 },
    { sec: 570 * fps, value: 1 },
    { sec: 600 * fps, value: 1 },
    { sec: 630 * fps, value: 1 },
    { sec: 660 * fps, value: 1 },
    { sec: 675 * fps, value: 0 },
    { sec: 690 * fps, value: 0 },
    { sec: 720 * fps, value: 0 }
  ];
}
function initPlaceYourBetsAlphaKeyframes(fps) {
  return [
    { sec: 0, value: 1 },
    { sec: 30 * fps, value: 1 },
    { sec: 60 * fps, value: 1 },
    { sec: 90 * fps, value: 1 },
    { sec: 120 * fps, value: 1 },
    { sec: 150 * fps, value: 1 },
    { sec: 180 * fps, value: 1 },
    { sec: 210 * fps, value: 1 },
    { sec: 240 * fps, value: 1 },
    { sec: 270 * fps, value: 1 },
    { sec: 300 * fps, value: 1 },
    { sec: 330 * fps, value: 1 },
    { sec: 360 * fps, value: 1 },
    { sec: 370 * fps, value: 0 },
    { sec: 390 * fps, value: 0 },
    { sec: 420 * fps, value: 0 },
    { sec: 450 * fps, value: 0 },
    { sec: 480 * fps, value: 0 },
    { sec: 510 * fps, value: 0 },
    { sec: 540 * fps, value: 0 },
    { sec: 570 * fps, value: 1 },
    { sec: 600 * fps, value: 1 },
    { sec: 630 * fps, value: 1 },
    { sec: 660 * fps, value: 1 },
    { sec: 663 * fps, value: 0 },
    { sec: 720 * fps, value: 1 }
  ];
}
function initCapPositionKeyFrame(fps) {
  return [
    // Entry anim, dependent upon elapsedFromStart
    { sec: 0, value: -100 },
    { sec: 30 * fps, value: 0 },
    // Intermediate anim, dependent upon elapsed
    { sec: 90 * fps, value: 0 },
    { sec: 120 * fps, value: 0 },
    { sec: 150 * fps, value: 0 },
    { sec: 180 * fps, value: 0 },
    { sec: 210 * fps, value: 0 },
    { sec: 270 * fps, value: 0 },
    { sec: 300 * fps, value: 0 },
    { sec: 330 * fps, value: 0 },
    { sec: 360 * fps, value: 0 },
    { sec: 390 * fps, value: 0 },
    { sec: 420 * fps, value: 0 },
    { sec: 450 * fps, value: 0 },
    { sec: 480 * fps, value: 0 },
    { sec: 510 * fps, value: 0 },
    { sec: 540 * fps, value: 0 },
    { sec: 570 * fps, value: 0 },
    { sec: 600 * fps, value: 0 },
    { sec: 630 * fps, value: 0 },
    { sec: 660 * fps, value: 0 },
    { sec: 690 * fps, value: 0 },
    { sec: 720 * fps, value: -100 }
  ];
}
function initCapMorphKeyFrame(fps) {
  return [
    // Entry anim, dependent upon elapsedFromStart
    { sec: 0, value: 0 },
    { sec: 33 * fps, value: 1 },
    // Intermediate anim, dependent upon elapsed
    { sec: 60 * fps, value: 1 },
    { sec: 90 * fps, value: 1 },
    { sec: 120 * fps, value: 1 },
    { sec: 150 * fps, value: 1 },
    { sec: 180 * fps, value: 1 },
    { sec: 210 * fps, value: 1 },
    { sec: 240 * fps, value: 1 },
    { sec: 270 * fps, value: 1 },
    { sec: 300 * fps, value: 1 },
    { sec: 330 * fps, value: 1 },
    { sec: 360 * fps, value: 1 },
    { sec: 390 * fps, value: 1 },
    { sec: 420 * fps, value: 1 },
    { sec: 450 * fps, value: 1 },
    { sec: 480 * fps, value: 1 },
    { sec: 510 * fps, value: 1 },
    { sec: 540 * fps, value: 1 },
    { sec: 570 * fps, value: 1 },
    { sec: 600 * fps, value: 1 },
    { sec: 630 * fps, value: 1 },
    { sec: 660 * fps, value: 1 },
    { sec: 693 * fps, value: 0 },
    { sec: 720 * fps, value: 0 }
  ];
}
function initDesktopCapCentralMorphKeyFrame(fps) {
  return (pFactor, nFactor) => [
    { sec: 0, value: 7 * pFactor },
    { sec: 30 * fps, value: 7 * pFactor },
    { sec: 60 * fps, value: 7 * pFactor },
    { sec: 90 * fps, value: 7 * pFactor },
    { sec: 120 * fps, value: 7 * pFactor },
    { sec: 150 * fps, value: 7 * pFactor },
    { sec: 180 * fps, value: 7 * pFactor },
    { sec: 210 * fps, value: 7 * pFactor },
    { sec: 220 * fps, value: 7 * pFactor },
    { sec: 270 * fps, value: 7 * pFactor },
    { sec: 300 * fps, value: 7 * pFactor },
    { sec: 330 * fps, value: 7 * pFactor },
    { sec: 357 * fps, value: 7 * pFactor },
    { sec: 390 * fps, value: 0 },
    { sec: 420 * fps, value: 0 },
    { sec: 450 * fps, value: 0 },
    { sec: 480 * fps, value: 0 },
    { sec: 510 * fps, value: 0 },
    { sec: 540 * fps, value: 0 },
    { sec: 570 * fps, value: 0 },
    { sec: 572 * fps, value: 0 },
    { sec: 605 * fps, value: 6.125 * nFactor },
    { sec: 630 * fps, value: 6.125 * nFactor },
    { sec: 660 * fps, value: 6.125 * nFactor },
    { sec: 690 * fps, value: 6.125 * nFactor },
    { sec: 720 * fps, value: 6.125 * nFactor }
  ];
}
function initDesktopPlaceYourBetsPositKeyFrame(fps) {
  return [
    // Entry anim, dependent upon elapsedFromStart
    { sec: 0, value: -2 },
    // { sec: 45 * fps, value: 0 }, // Place your bets
    // Intermediate anim, dependent upon elapsed
    { sec: 60 * fps, value: 0 },
    { sec: 90 * fps, value: 0 },
    { sec: 120 * fps, value: 0 },
    { sec: 150 * fps, value: 0 },
    { sec: 180 * fps, value: 0 },
    { sec: 210 * fps, value: 0 },
    { sec: 215 * fps, value: 0 },
    { sec: 230 * fps, value: 0 },
    { sec: 270 * fps, value: 0 },
    { sec: 300 * fps, value: 0 },
    { sec: 330 * fps, value: 0 },
    { sec: 360 * fps, value: 0 },
    // Place your bets
    { sec: 378 * fps, value: 2 },
    // 7
    { sec: 420 * fps, value: 2 },
    // 6
    { sec: 720 * fps, value: 2 },
    { sec: 750 * fps, value: -2 },
    { sec: 780 * fps, value: -2 }
  ];
}
function initDesktopSevenPositKeyFrame(fps) {
  return [
    { sec: 0, value: -2 },
    { sec: 45 * fps, value: -2 },
    { sec: 60 * fps, value: -2 },
    { sec: 90 * fps, value: -2 },
    { sec: 120 * fps, value: -2 },
    { sec: 150 * fps, value: -2 },
    { sec: 180 * fps, value: -2 },
    { sec: 210 * fps, value: -2 },
    { sec: 215 * fps, value: -2 },
    { sec: 230 * fps, value: -2 },
    { sec: 270 * fps, value: -2 },
    { sec: 300 * fps, value: -2 },
    { sec: 330 * fps, value: -2 },
    { sec: 372 * fps, value: -2 },
    // Place your bets
    { sec: 390 * fps, value: 0 },
    // 7
    { sec: 408 * fps, value: 2 },
    // 6
    { sec: 450 * fps, value: 2 },
    // 5
    { sec: 480 * fps, value: 2 },
    // 4
    { sec: 510 * fps, value: 2 },
    // 3
    { sec: 540 * fps, value: 2 },
    // 2
    { sec: 570 * fps, value: 2 },
    // 1
    { sec: 600 * fps, value: 2 },
    // No more bets
    { sec: 630 * fps, value: 2 },
    // No more bets
    { sec: 660 * fps, value: 2 },
    // No more bets
    { sec: 720 * fps, value: 2 },
    { sec: 750 * fps, value: -2 },
    { sec: 780 * fps, value: -2 }
  ];
}
function initDesktopSixPositKeyFrame(fps) {
  return [
    { sec: 0, value: -2 },
    { sec: 45 * fps, value: -2 },
    { sec: 60 * fps, value: -2 },
    { sec: 90 * fps, value: -2 },
    { sec: 120 * fps, value: -2 },
    { sec: 150 * fps, value: -2 },
    { sec: 180 * fps, value: -2 },
    { sec: 210 * fps, value: -2 },
    { sec: 215 * fps, value: -2 },
    { sec: 230 * fps, value: -2 },
    { sec: 270 * fps, value: -2 },
    { sec: 300 * fps, value: -2 },
    { sec: 330 * fps, value: -2 },
    { sec: 360 * fps, value: -2 },
    // Place your bets
    { sec: 402 * fps, value: -2 },
    // 7
    { sec: 420 * fps, value: 0 },
    // 6
    { sec: 438 * fps, value: 2 },
    // 5
    { sec: 480 * fps, value: 2 },
    // 4
    { sec: 510 * fps, value: 2 },
    // 3
    { sec: 540 * fps, value: 2 },
    // 2
    { sec: 570 * fps, value: 2 },
    // 1
    { sec: 600 * fps, value: 2 },
    // No more bets
    { sec: 630 * fps, value: 2 },
    // No more bets
    { sec: 660 * fps, value: 2 },
    // No more bets
    { sec: 720 * fps, value: 2 },
    { sec: 750 * fps, value: -2 },
    { sec: 780 * fps, value: -2 }
  ];
}
function initDesktopFivePositKeyFrame(fps) {
  return [
    { sec: 0, value: -2 },
    { sec: 45 * fps, value: -2 },
    { sec: 60 * fps, value: -2 },
    { sec: 90 * fps, value: -2 },
    { sec: 120 * fps, value: -2 },
    { sec: 150 * fps, value: -2 },
    { sec: 180 * fps, value: -2 },
    { sec: 210 * fps, value: -2 },
    { sec: 215 * fps, value: -2 },
    { sec: 230 * fps, value: -2 },
    { sec: 270 * fps, value: -2 },
    { sec: 300 * fps, value: -2 },
    { sec: 330 * fps, value: -2 },
    { sec: 360 * fps, value: -2 },
    // Place your bets
    { sec: 390 * fps, value: -2 },
    // 7
    { sec: 432 * fps, value: -2 },
    // 6
    { sec: 450 * fps, value: 0 },
    // 5
    { sec: 468 * fps, value: 2 },
    // 4
    { sec: 510 * fps, value: 2 },
    // 3
    { sec: 540 * fps, value: 2 },
    // 2
    { sec: 570 * fps, value: 2 },
    // 1
    { sec: 600 * fps, value: 2 },
    // No more bets
    { sec: 630 * fps, value: 2 },
    // No more bets
    { sec: 660 * fps, value: 2 },
    // No more bets
    { sec: 720 * fps, value: 2 },
    { sec: 750 * fps, value: -2 },
    { sec: 780 * fps, value: -2 }
  ];
}
function initDesktopFourPositKeyFrame(fps) {
  return [
    { sec: 0, value: -2 },
    { sec: 45 * fps, value: -2 },
    { sec: 60 * fps, value: -2 },
    { sec: 90 * fps, value: -2 },
    { sec: 120 * fps, value: -2 },
    { sec: 150 * fps, value: -2 },
    { sec: 180 * fps, value: -2 },
    { sec: 210 * fps, value: -2 },
    { sec: 215 * fps, value: -2 },
    { sec: 230 * fps, value: -2 },
    { sec: 270 * fps, value: -2 },
    { sec: 300 * fps, value: -2 },
    { sec: 330 * fps, value: -2 },
    { sec: 360 * fps, value: -2 },
    // Place your bets
    { sec: 390 * fps, value: -2 },
    // 7
    { sec: 420 * fps, value: -2 },
    // 6
    { sec: 462 * fps, value: -2 },
    // 5
    { sec: 480 * fps, value: 0 },
    // 4
    { sec: 498 * fps, value: 2 },
    // 3
    { sec: 540 * fps, value: 2 },
    // 2
    { sec: 570 * fps, value: 2 },
    // 1
    { sec: 600 * fps, value: 2 },
    // No more bets
    { sec: 630 * fps, value: 2 },
    // No more bets
    { sec: 660 * fps, value: 2 },
    // No more bets
    { sec: 720 * fps, value: 2 },
    { sec: 750 * fps, value: -2 },
    { sec: 780 * fps, value: -2 }
  ];
}
function initDesktopThreePositKeyFrame(fps) {
  return [
    { sec: 0, value: -2 },
    { sec: 45 * fps, value: -2 },
    { sec: 60 * fps, value: -2 },
    { sec: 90 * fps, value: -2 },
    { sec: 120 * fps, value: -2 },
    { sec: 150 * fps, value: -2 },
    { sec: 180 * fps, value: -2 },
    { sec: 210 * fps, value: -2 },
    { sec: 215 * fps, value: -2 },
    { sec: 230 * fps, value: -2 },
    { sec: 270 * fps, value: -2 },
    { sec: 300 * fps, value: -2 },
    { sec: 330 * fps, value: -2 },
    { sec: 360 * fps, value: -2 },
    // Place your bets
    { sec: 390 * fps, value: -2 },
    // 7
    { sec: 420 * fps, value: -2 },
    // 6
    { sec: 450 * fps, value: -2 },
    // 5
    { sec: 492 * fps, value: -2 },
    // 4
    { sec: 510 * fps, value: 0 },
    // 3
    { sec: 528 * fps, value: 2 },
    // 2
    { sec: 570 * fps, value: 2 },
    // 1
    { sec: 600 * fps, value: 2 },
    // No more bets
    { sec: 630 * fps, value: 2 },
    // No more bets
    { sec: 660 * fps, value: 2 },
    // No more bets
    { sec: 720 * fps, value: 2 },
    { sec: 750 * fps, value: -2 },
    { sec: 780 * fps, value: -2 }
  ];
}
function initDesktopTwoPositKeyFrame(fps) {
  return [
    { sec: 0, value: -2 },
    { sec: 45 * fps, value: -2 },
    { sec: 60 * fps, value: -2 },
    { sec: 90 * fps, value: -2 },
    { sec: 120 * fps, value: -2 },
    { sec: 150 * fps, value: -2 },
    { sec: 180 * fps, value: -2 },
    { sec: 210 * fps, value: -2 },
    { sec: 215 * fps, value: -2 },
    { sec: 230 * fps, value: -2 },
    { sec: 270 * fps, value: -2 },
    { sec: 300 * fps, value: -2 },
    { sec: 330 * fps, value: -2 },
    { sec: 360 * fps, value: -2 },
    // Place your bets
    { sec: 390 * fps, value: -2 },
    // 7
    { sec: 420 * fps, value: -2 },
    // 6
    { sec: 450 * fps, value: -2 },
    // 5
    { sec: 480 * fps, value: -2 },
    // 4
    { sec: 522 * fps, value: -2 },
    // 3
    { sec: 540 * fps, value: 0 },
    // 2
    { sec: 558 * fps, value: 2 },
    // 1
    { sec: 600 * fps, value: 2 },
    // No more bets
    { sec: 630 * fps, value: 2 },
    // No more bets
    { sec: 660 * fps, value: 2 },
    // No more bets
    { sec: 720 * fps, value: 2 },
    { sec: 750 * fps, value: -2 },
    { sec: 780 * fps, value: -2 }
  ];
}
function initDesktopOnePositKeyFrame(fps) {
  return [
    { sec: 0, value: -2 },
    { sec: 45 * fps, value: -2 },
    { sec: 60 * fps, value: -2 },
    { sec: 90 * fps, value: -2 },
    { sec: 120 * fps, value: -2 },
    { sec: 150 * fps, value: -2 },
    { sec: 180 * fps, value: -2 },
    { sec: 210 * fps, value: -2 },
    { sec: 215 * fps, value: -2 },
    { sec: 230 * fps, value: -2 },
    { sec: 270 * fps, value: -2 },
    { sec: 300 * fps, value: -2 },
    { sec: 330 * fps, value: -2 },
    { sec: 360 * fps, value: -2 },
    // Place your bets
    { sec: 390 * fps, value: -2 },
    // 7
    { sec: 420 * fps, value: -2 },
    // 6
    { sec: 450 * fps, value: -2 },
    // 5
    { sec: 480 * fps, value: -2 },
    // 4
    { sec: 510 * fps, value: -2 },
    // 3
    { sec: 552 * fps, value: -2 },
    // 2
    { sec: 570 * fps, value: 0 },
    // 1
    { sec: 588 * fps, value: 2 },
    // No more bets
    { sec: 630 * fps, value: 2 },
    // No more bets
    { sec: 660 * fps, value: 2 },
    // No more bets
    { sec: 720 * fps, value: 2 },
    { sec: 750 * fps, value: -2 },
    { sec: 780 * fps, value: -2 }
  ];
}
function initDesktopNoMoreBetsPositKeyFrame(fps) {
  return [
    // Entry anim, dependent upon elapsedFromStart
    { sec: 0, value: -2 },
    { sec: 45 * fps, value: -2 },
    { sec: 60 * fps, value: -2 },
    { sec: 90 * fps, value: -2 },
    { sec: 120 * fps, value: -2 },
    { sec: 150 * fps, value: -2 },
    { sec: 180 * fps, value: -2 },
    { sec: 210 * fps, value: -2 },
    { sec: 215 * fps, value: -2 },
    { sec: 230 * fps, value: -2 },
    { sec: 270 * fps, value: -2 },
    { sec: 300 * fps, value: -2 },
    { sec: 330 * fps, value: -2 },
    { sec: 360 * fps, value: -2 },
    { sec: 390 * fps, value: -2 },
    // 7
    { sec: 420 * fps, value: -2 },
    // 6
    { sec: 450 * fps, value: -2 },
    // 5
    { sec: 480 * fps, value: -2 },
    // 4
    { sec: 510 * fps, value: -2 },
    // 3
    { sec: 540 * fps, value: -2 },
    // 2
    { sec: 582 * fps, value: -2 },
    // 1
    { sec: 600 * fps, value: 0 },
    // No more bets
    { sec: 630 * fps, value: 0 },
    // No more bets
    { sec: 660 * fps, value: 0 },
    // No more bets
    { sec: 680 * fps, value: 2 },
    { sec: 720 * fps, value: 2 },
    { sec: 750 * fps, value: -2 },
    { sec: 780 * fps, value: -2 }
  ];
}
function initMobileCapCentralMorphKeyFrame(fps) {
  return (pFactor, nFactor) => [
    { sec: 0, value: 6.25 * pFactor },
    { sec: 30 * fps, value: 6.25 * pFactor },
    { sec: 60 * fps, value: 6.25 * pFactor },
    { sec: 90 * fps, value: 6.25 * pFactor },
    { sec: 120 * fps, value: 6.25 * pFactor },
    { sec: 150 * fps, value: 6.25 * pFactor },
    { sec: 180 * fps, value: 6.25 * pFactor },
    { sec: 210 * fps, value: 6.25 * pFactor },
    { sec: 220 * fps, value: 6.25 * pFactor },
    { sec: 270 * fps, value: 6.25 * pFactor },
    { sec: 300 * fps, value: 6.25 * pFactor },
    { sec: 330 * fps, value: 6.25 * pFactor },
    { sec: 357 * fps, value: 6.25 * pFactor },
    { sec: 390 * fps, value: 0 },
    { sec: 420 * fps, value: 0 },
    { sec: 450 * fps, value: 0 },
    { sec: 480 * fps, value: 0 },
    { sec: 510 * fps, value: 0 },
    { sec: 540 * fps, value: 0 },
    { sec: 572 * fps, value: 0 },
    { sec: 605 * fps, value: 5.813 * nFactor },
    { sec: 600 * fps, value: 5.813 * nFactor },
    { sec: 630 * fps, value: 5.813 * nFactor },
    { sec: 660 * fps, value: 5.813 * nFactor },
    { sec: 690 * fps, value: 5.813 * nFactor },
    { sec: 720 * fps, value: 5.813 * nFactor }
  ];
}
function initMobilePlaceYourBetsPositKeyFrame(fps) {
  return [
    // Entry anim, dependent upon elapsedFromStart
    { sec: 0, value: -1.3 },
    // { sec: 45 * fps, value: 0 }, // Place your bets
    // Intermediate anim, dependent upon elapsed
    { sec: 60 * fps, value: 0 },
    { sec: 90 * fps, value: 0 },
    { sec: 120 * fps, value: 0 },
    { sec: 150 * fps, value: 0 },
    { sec: 180 * fps, value: 0 },
    { sec: 210 * fps, value: 0 },
    { sec: 215 * fps, value: 0 },
    { sec: 230 * fps, value: 0 },
    { sec: 270 * fps, value: 0 },
    { sec: 300 * fps, value: 0 },
    { sec: 330 * fps, value: 0 },
    { sec: 360 * fps, value: 0 },
    // Place your bets
    { sec: 378 * fps, value: 1.3 },
    // 7
    { sec: 420 * fps, value: 1.3 },
    // 6
    { sec: 720 * fps, value: 1.3 },
    { sec: 750 * fps, value: -1.3 },
    { sec: 780 * fps, value: -1.3 }
  ];
}
function initMobileSevenPositKeyFrame(fps) {
  return [
    { sec: 0, value: -1.3 },
    { sec: 45 * fps, value: -1.3 },
    { sec: 60 * fps, value: -1.3 },
    { sec: 90 * fps, value: -1.3 },
    { sec: 120 * fps, value: -1.3 },
    { sec: 150 * fps, value: -1.3 },
    { sec: 180 * fps, value: -1.3 },
    { sec: 210 * fps, value: -1.3 },
    { sec: 215 * fps, value: -1.3 },
    { sec: 230 * fps, value: -1.3 },
    { sec: 270 * fps, value: -1.3 },
    { sec: 300 * fps, value: -1.3 },
    { sec: 330 * fps, value: -1.3 },
    { sec: 372 * fps, value: -1.3 },
    // Place your bets
    { sec: 390 * fps, value: 0 },
    // 7
    { sec: 408 * fps, value: 1.3 },
    // 6
    { sec: 450 * fps, value: 1.3 },
    // 5
    { sec: 480 * fps, value: 1.3 },
    // 4
    { sec: 510 * fps, value: 1.3 },
    // 3
    { sec: 540 * fps, value: 1.3 },
    // 2
    { sec: 570 * fps, value: 1.3 },
    // 1
    { sec: 600 * fps, value: 1.3 },
    // No more bets
    { sec: 630 * fps, value: 1.3 },
    // No more bets
    { sec: 660 * fps, value: 1.3 },
    // No more bets
    { sec: 720 * fps, value: 1.3 },
    { sec: 750 * fps, value: -1.3 },
    { sec: 780 * fps, value: -1.3 }
  ];
}
function initMobileSixPositKeyFrame(fps) {
  return [
    { sec: 0, value: -1.3 },
    { sec: 45 * fps, value: -1.3 },
    { sec: 60 * fps, value: -1.3 },
    { sec: 90 * fps, value: -1.3 },
    { sec: 120 * fps, value: -1.3 },
    { sec: 150 * fps, value: -1.3 },
    { sec: 180 * fps, value: -1.3 },
    { sec: 210 * fps, value: -1.3 },
    { sec: 215 * fps, value: -1.3 },
    { sec: 230 * fps, value: -1.3 },
    { sec: 270 * fps, value: -1.3 },
    { sec: 300 * fps, value: -1.3 },
    { sec: 330 * fps, value: -1.3 },
    { sec: 360 * fps, value: -1.3 },
    // Place your bets
    { sec: 402 * fps, value: -1.3 },
    // 7
    { sec: 420 * fps, value: 0 },
    // 6
    { sec: 438 * fps, value: 1.3 },
    // 5
    { sec: 480 * fps, value: 1.3 },
    // 4
    { sec: 510 * fps, value: 1.3 },
    // 3
    { sec: 540 * fps, value: 1.3 },
    // 2
    { sec: 570 * fps, value: 1.3 },
    // 1
    { sec: 600 * fps, value: 1.3 },
    // No more bets
    { sec: 630 * fps, value: 1.3 },
    // No more bets
    { sec: 660 * fps, value: 1.3 },
    // No more bets
    { sec: 720 * fps, value: 1.3 },
    { sec: 750 * fps, value: -1.3 },
    { sec: 780 * fps, value: -1.3 }
  ];
}
function initMobileFivePositKeyFrame(fps) {
  return [
    { sec: 0, value: -1.3 },
    { sec: 45 * fps, value: -1.3 },
    { sec: 60 * fps, value: -1.3 },
    { sec: 90 * fps, value: -1.3 },
    { sec: 120 * fps, value: -1.3 },
    { sec: 150 * fps, value: -1.3 },
    { sec: 180 * fps, value: -1.3 },
    { sec: 210 * fps, value: -1.3 },
    { sec: 215 * fps, value: -1.3 },
    { sec: 230 * fps, value: -1.3 },
    { sec: 270 * fps, value: -1.3 },
    { sec: 300 * fps, value: -1.3 },
    { sec: 330 * fps, value: -1.3 },
    { sec: 360 * fps, value: -1.3 },
    // Place your bets
    { sec: 390 * fps, value: -1.3 },
    // 7
    { sec: 432 * fps, value: -1.3 },
    // 6
    { sec: 450 * fps, value: 0 },
    // 5
    { sec: 468 * fps, value: 1.3 },
    // 4
    { sec: 510 * fps, value: 1.3 },
    // 3
    { sec: 540 * fps, value: 1.3 },
    // 2
    { sec: 570 * fps, value: 1.3 },
    // 1
    { sec: 600 * fps, value: 1.3 },
    // No more bets
    { sec: 630 * fps, value: 1.3 },
    // No more bets
    { sec: 660 * fps, value: 1.3 },
    // No more bets
    { sec: 720 * fps, value: 1.3 },
    { sec: 750 * fps, value: -1.3 },
    { sec: 780 * fps, value: -1.3 }
  ];
}
function initMobileFourPositKeyFrame(fps) {
  return [
    { sec: 0, value: -1.3 },
    { sec: 45 * fps, value: -1.3 },
    { sec: 60 * fps, value: -1.3 },
    { sec: 90 * fps, value: -1.3 },
    { sec: 120 * fps, value: -1.3 },
    { sec: 150 * fps, value: -1.3 },
    { sec: 180 * fps, value: -1.3 },
    { sec: 210 * fps, value: -1.3 },
    { sec: 215 * fps, value: -1.3 },
    { sec: 230 * fps, value: -1.3 },
    { sec: 270 * fps, value: -1.3 },
    { sec: 300 * fps, value: -1.3 },
    { sec: 330 * fps, value: -1.3 },
    { sec: 360 * fps, value: -1.3 },
    // Place your bets
    { sec: 390 * fps, value: -1.3 },
    // 7
    { sec: 420 * fps, value: -1.3 },
    // 6
    { sec: 462 * fps, value: -1.3 },
    // 5
    { sec: 480 * fps, value: 0 },
    // 4
    { sec: 498 * fps, value: 1.3 },
    // 3
    { sec: 540 * fps, value: 1.3 },
    // 2
    { sec: 570 * fps, value: 1.3 },
    // 1
    { sec: 600 * fps, value: 1.3 },
    // No more bets
    { sec: 630 * fps, value: 1.3 },
    // No more bets
    { sec: 660 * fps, value: 1.3 },
    // No more bets
    { sec: 720 * fps, value: 1.3 },
    { sec: 750 * fps, value: -1.3 },
    { sec: 780 * fps, value: -1.3 }
  ];
}
function initMobileThreePositKeyFrame(fps) {
  return [
    { sec: 0, value: -1.3 },
    { sec: 45 * fps, value: -1.3 },
    { sec: 60 * fps, value: -1.3 },
    { sec: 90 * fps, value: -1.3 },
    { sec: 120 * fps, value: -1.3 },
    { sec: 150 * fps, value: -1.3 },
    { sec: 180 * fps, value: -1.3 },
    { sec: 210 * fps, value: -1.3 },
    { sec: 215 * fps, value: -1.3 },
    { sec: 230 * fps, value: -1.3 },
    { sec: 270 * fps, value: -1.3 },
    { sec: 300 * fps, value: -1.3 },
    { sec: 330 * fps, value: -1.3 },
    { sec: 360 * fps, value: -1.3 },
    // Place your bets
    { sec: 390 * fps, value: -1.3 },
    // 7
    { sec: 420 * fps, value: -1.3 },
    // 6
    { sec: 450 * fps, value: -1.3 },
    // 5
    { sec: 492 * fps, value: -1.3 },
    // 4
    { sec: 510 * fps, value: 0 },
    // 3
    { sec: 528 * fps, value: 1.3 },
    // 2
    { sec: 570 * fps, value: 1.3 },
    // 1
    { sec: 600 * fps, value: 1.3 },
    // No more bets
    { sec: 630 * fps, value: 1.3 },
    // No more bets
    { sec: 660 * fps, value: 1.3 },
    // No more bets
    { sec: 720 * fps, value: 1.3 },
    { sec: 750 * fps, value: -1.3 },
    { sec: 780 * fps, value: -1.3 }
  ];
}
function initMobileTwoPositKeyFrame(fps) {
  return [
    { sec: 0, value: -1.3 },
    { sec: 45 * fps, value: -1.3 },
    { sec: 60 * fps, value: -1.3 },
    { sec: 90 * fps, value: -1.3 },
    { sec: 120 * fps, value: -1.3 },
    { sec: 150 * fps, value: -1.3 },
    { sec: 180 * fps, value: -1.3 },
    { sec: 210 * fps, value: -1.3 },
    { sec: 215 * fps, value: -1.3 },
    { sec: 230 * fps, value: -1.3 },
    { sec: 270 * fps, value: -1.3 },
    { sec: 300 * fps, value: -1.3 },
    { sec: 330 * fps, value: -1.3 },
    { sec: 360 * fps, value: -1.3 },
    // Place your bets
    { sec: 390 * fps, value: -1.3 },
    // 7
    { sec: 420 * fps, value: -1.3 },
    // 6
    { sec: 450 * fps, value: -1.3 },
    // 5
    { sec: 480 * fps, value: -1.3 },
    // 4
    { sec: 522 * fps, value: -1.3 },
    // 3
    { sec: 540 * fps, value: 0 },
    // 2
    { sec: 558 * fps, value: 1.3 },
    // 1
    { sec: 600 * fps, value: 1.3 },
    // No more bets
    { sec: 630 * fps, value: 1.3 },
    // No more bets
    { sec: 660 * fps, value: 1.3 },
    // No more bets
    { sec: 720 * fps, value: 1.3 },
    { sec: 750 * fps, value: -1.3 },
    { sec: 780 * fps, value: -1.3 }
  ];
}
function initMobileOnePositKeyFrame(fps) {
  return [
    { sec: 0, value: -1.3 },
    { sec: 45 * fps, value: -1.3 },
    { sec: 60 * fps, value: -1.3 },
    { sec: 90 * fps, value: -1.3 },
    { sec: 120 * fps, value: -1.3 },
    { sec: 150 * fps, value: -1.3 },
    { sec: 180 * fps, value: -1.3 },
    { sec: 210 * fps, value: -1.3 },
    { sec: 215 * fps, value: -1.3 },
    { sec: 230 * fps, value: -1.3 },
    { sec: 270 * fps, value: -1.3 },
    { sec: 300 * fps, value: -1.3 },
    { sec: 330 * fps, value: -1.3 },
    { sec: 360 * fps, value: -1.3 },
    // Place your bets
    { sec: 390 * fps, value: -1.3 },
    // 7
    { sec: 420 * fps, value: -1.3 },
    // 6
    { sec: 450 * fps, value: -1.3 },
    // 5
    { sec: 480 * fps, value: -1.3 },
    // 4
    { sec: 510 * fps, value: -1.3 },
    // 3
    { sec: 552 * fps, value: -1.3 },
    // 2
    { sec: 570 * fps, value: 0 },
    // 1
    { sec: 588 * fps, value: 1.3 },
    // No more bets
    { sec: 630 * fps, value: 1.3 },
    // No more bets
    { sec: 660 * fps, value: 1.3 },
    // No more bets
    { sec: 720 * fps, value: 1.3 },
    { sec: 750 * fps, value: -1.3 },
    { sec: 780 * fps, value: -1.3 }
  ];
}
function initMobileNoMoreBetsPositKeyFrame(fps) {
  return [
    // Entry anim, dependent upon elapsedFromStart
    { sec: 0, value: -1.3 },
    { sec: 45 * fps, value: -1.3 },
    { sec: 60 * fps, value: -1.3 },
    { sec: 90 * fps, value: -1.3 },
    { sec: 120 * fps, value: -1.3 },
    { sec: 150 * fps, value: -1.3 },
    { sec: 180 * fps, value: -1.3 },
    { sec: 210 * fps, value: -1.3 },
    { sec: 215 * fps, value: -1.3 },
    { sec: 230 * fps, value: -1.3 },
    { sec: 270 * fps, value: -1.3 },
    { sec: 300 * fps, value: -1.3 },
    { sec: 330 * fps, value: -1.3 },
    { sec: 360 * fps, value: -1.3 },
    { sec: 390 * fps, value: -1.3 },
    // 7
    { sec: 420 * fps, value: -1.3 },
    // 6
    { sec: 450 * fps, value: -1.3 },
    // 5
    { sec: 480 * fps, value: -1.3 },
    // 4
    { sec: 510 * fps, value: -1.3 },
    // 3
    { sec: 540 * fps, value: -1.3 },
    // 2
    { sec: 582 * fps, value: -1.3 },
    // 1
    { sec: 600 * fps, value: 0 },
    // No more bets
    { sec: 630 * fps, value: 0 },
    // No more bets
    { sec: 660 * fps, value: 0 },
    // No more bets
    { sec: 680 * fps, value: 1.3 },
    { sec: 720 * fps, value: 1.3 },
    { sec: 750 * fps, value: -1.3 },
    { sec: 780 * fps, value: -1.3 }
  ];
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
function Cap({ pFactor, nFactor }) {
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
    refs: { left: capLeftRefs, central: capCentralRefs, right: capRightRefs },
    containerRef: { yellow: yellowCapRef, red: redCapRef, green: greenCapRef }
  };
  const renderCap = (currentMs) => {
    const { betEnd, betStart } = useBettingStore.getState();
    const elapsed = (currentMs - (betEnd - 2e4)) * 1e-3 - COUNT_DOWN_DELAY_SEC;
    const elapsedFromStart = (currentMs - betStart) * 1e-3;
    const isEntry = elapsedFromStart <= 1;
    const wrapper = wrapperRef.current;
    const splitMap = [
      { cap: yellowCapRef, keyFrames: YELLOW_KEY_FRAMES, color: "yellow" },
      { cap: redCapRef, keyFrames: RED_KEY_FRAMES, color: "red" },
      { cap: greenCapRef, keyFrames: GREEN_KEY_FRAMES, color: "green" }
    ];
    for (const { cap, keyFrames, color } of splitMap) {
      if (!wrapper || !cap.current) continue;
      const singleAlpha = linear$1(elapsed, keyFrames);
      const capCentralMorph = capMorph$1(elapsed, CAP_CENTRAL_MORPH_KEY_FRAMES(pFactor, nFactor));
      const capAllScale = capMorph$1(isEntry ? elapsedFromStart : elapsed, CAP_MORPH_KEY_FRAMES);
      const capAllShift = capMorph$1(isEntry ? elapsedFromStart : elapsed, CAP_POSITION_KEY_FRAMES);
      wrapper.style.opacity = "1";
      wrapper.style.transform = "translateY(".concat(capAllShift, "%) scale(").concat(capAllScale, ")");
      cap.current.style.opacity = singleAlpha.toString();
      const colorKey = color;
      capCentralRefs.current[colorKey].style.width = "".concat(capCentralMorph, "rem");
    }
  };
  reactExports.useEffect(() => {
    const unSubscribe = useTimerStore.subscribe(
      (state) => state.currentMs,
      (currentMs) => renderCap(currentMs)
    );
    return () => unSubscribe();
  }, [pFactor, nFactor]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "Cap",
      ref: wrapperRef,
      children: capConfig.colors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "innerCapWrapper",
          ref: capConfig.containerRef[color],
          children: capConfig.positions.map((position) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Image,
            {
              alt: "",
              className: cn({ isMobileDevice, [position]: true, [color]: true }),
              src: assetMap[color][position],
              ref: (el) => {
                if (el) capConfig.refs[position].current[color] = el;
              }
            },
            position
          ))
        },
        color
      ))
    }
  );
}
const Cap$1 = reactExports.memo(Cap);
const TEXT_ALPHA_KEY_FRAMES = initTextAlphaKeyframes(ONE_FRAME_TIME_SEC);
const PLACE_YOUR_BETS_ALPHA_KEY_FRAMES = initPlaceYourBetsAlphaKeyframes(ONE_FRAME_TIME_SEC);
const VIBRATION_TRIGGERS = [
  { start: 14.75, end: 15.75, key: "five" },
  { start: 15.75, end: 16.75, key: "four" },
  { start: 16.75, end: 17.75, key: "three" },
  { start: 17.75, end: 18.75, key: "two" },
  { start: 18.75, end: 19.75, key: "one" }
];
const POSITION_FRAME_CONFIGS = {
  "PLACE YOUR BETS": { mobile: initMobilePlaceYourBetsPositKeyFrame, desktop: initDesktopPlaceYourBetsPositKeyFrame },
  "7": { mobile: initMobileSevenPositKeyFrame, desktop: initDesktopSevenPositKeyFrame },
  "6": { mobile: initMobileSixPositKeyFrame, desktop: initDesktopSixPositKeyFrame },
  "5": { mobile: initMobileFivePositKeyFrame, desktop: initDesktopFivePositKeyFrame },
  "4": { mobile: initMobileFourPositKeyFrame, desktop: initDesktopFourPositKeyFrame },
  "3": { mobile: initMobileThreePositKeyFrame, desktop: initDesktopThreePositKeyFrame },
  "2": { mobile: initMobileTwoPositKeyFrame, desktop: initDesktopTwoPositKeyFrame },
  "1": { mobile: initMobileOnePositKeyFrame, desktop: initDesktopOnePositKeyFrame },
  "NO MORE BETS": { mobile: initMobileNoMoreBetsPositKeyFrame, desktop: initDesktopNoMoreBetsPositKeyFrame }
};
const numLanding = initInterpolationFunc(InterpolationMode.NUM_LANDING);
const numDescend = initInterpolationFunc(InterpolationMode.NUM_DESCEND);
const capMorph = initInterpolationFunc(InterpolationMode.CAP_MORPH);
const linear = initInterpolationFunc(InterpolationMode.LINEAR);
const POSITION_KEY_FRAMES = Object.fromEntries(
  Object.entries(POSITION_FRAME_CONFIGS).map(([key, config]) => [
    key,
    isMobileDevice ? config.mobile(ONE_FRAME_TIME_SEC) : config.desktop(ONE_FRAME_TIME_SEC)
  ])
);
function CountDownCap() {
  const { t } = useTranslation();
  const loadingStage = useLoadingStore((s) => s.loadingStage);
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
  const renderCountDown = (currentMs) => {
    const { betEnd, betStart, betPeriod } = useBettingStore.getState();
    const elapsed = (currentMs - (betEnd - 2e4)) * 1e-3 - COUNT_DOWN_DELAY_SEC;
    const elapsedFromStart = (currentMs - betStart) * 1e-3;
    const isEntry = elapsedFromStart <= 2 && betPeriod > 7 && betEnd - currentMs > 0;
    const textWrapper = textWrapperRef.current;
    if (!textWrapper || !placeYourBetsRef.current || !noMoreBetsRef.current || !placeYourBetsRef.current) return;
    const isLand = (element, keyFrames) => {
      const currentY = getCurrentTranslateY(element);
      return currentY >= 0 ? numDescend(elapsed, keyFrames) : numLanding(elapsed, keyFrames);
    };
    const positions = [
      {
        ref: placeYourBetsRef,
        position: isEntry ? capMorph(elapsedFromStart, POSITION_KEY_FRAMES["PLACE YOUR BETS"]) : isLand(placeYourBetsRef.current, POSITION_KEY_FRAMES["PLACE YOUR BETS"])
      },
      { ref: sevenRef, position: isLand(sevenRef.current, POSITION_KEY_FRAMES["7"]) },
      { ref: sixRef, position: isLand(sixRef.current, POSITION_KEY_FRAMES["6"]) },
      { ref: fiveRef, position: isLand(fiveRef.current, POSITION_KEY_FRAMES["5"]) },
      { ref: fourRef, position: isLand(fourRef.current, POSITION_KEY_FRAMES["4"]) },
      { ref: threeRef, position: isLand(threeRef.current, POSITION_KEY_FRAMES["3"]) },
      { ref: twoRef, position: isLand(twoRef.current, POSITION_KEY_FRAMES["2"]) },
      { ref: oneRef, position: isLand(oneRef.current, POSITION_KEY_FRAMES["1"]) },
      { ref: noMoreBetsRef, position: isLand(noMoreBetsRef.current, POSITION_KEY_FRAMES["NO MORE BETS"]) }
    ];
    const placeYourBetsAlpha = linear(elapsed, PLACE_YOUR_BETS_ALPHA_KEY_FRAMES);
    textWrapper.style.opacity = linear(elapsed, TEXT_ALPHA_KEY_FRAMES).toString();
    placeYourBetsRef.current.style.opacity = placeYourBetsAlpha.toString();
    positions.forEach(({ ref, position }) => ref.current && (ref.current.style.transform = "translateY(".concat(position, "rem)")));
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
    const unSubscribe = useTimerStore.subscribe(
      (state) => state.currentMs,
      (currentMs) => {
        renderCountDown(currentMs);
      }
    );
    return () => unSubscribe();
  }, []);
  reactExports.useEffect(() => {
    var _a;
    (_a = textWrapperRef == null ? void 0 : textWrapperRef.current) == null ? void 0 : _a.style.setProperty("opacity", "0");
    setPFactor(calcTranslateFactor(placeYourBetsRef, "PLACE YOUR BETS"));
    setNFactor(calcTranslateFactor(noMoreBetsRef, "NO MORE BETS"));
  }, [t, isLoaded]);
  return isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "CountDownCap",
      className: cn({
        "mt-[-.09rem] h-[1.25rem]": isMobileDevice,
        "mt-[-.06rem] h-[2rem]": !isMobileDevice
      }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Cap$1,
          {
            pFactor,
            nFactor
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-full w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: textWrapperRef,
            className: "textWrapper",
            children: countdownList.map((text, i) => {
              const length = countdownList.length;
              const last = length - 1;
              const isPlaceYourBets = i === 0;
              const isNoMoreBets = i === last;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn("textItem", { isPlaceYourBets, isNoMoreBets, isMobileDevice }),
                  ref: refs[last - i],
                  children: text
                },
                "".concat(text, "-").concat(i)
              );
            })
          }
        ) })
      ]
    }
  );
}
const CountDownCap$1 = reactExports.memo(CountDownCap);
const getCurrentTranslateY = (element) => {
  if (!element) return 0;
  const transform = element.style.transform;
  const match = /translateY\(([-\d.]+)rem\)/.exec(transform);
  return match ? parseFloat(match[1]) : 0;
};
const calcTranslateFactor = (ref, text) => {
  var _a;
  const el = ref.current;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!el || !ctx) return 1;
  ctx.font = getComputedStyle(el).font;
  const actualW = ctx.measureText((_a = el.textContent) != null ? _a : "").width;
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
const isChipActive = (chipVal) => {
  const selectedChipVal = useCartStore.getState().selectedChipVal;
  return selectedChipVal === chipVal;
};
const isChipDisabled = (chipVal) => {
  const remainedBalance = useCartStore.getState().remainedBalance;
  return remainedBalance < chipVal;
};
const getChipSrc = (val, isDisabled) => {
  const chipList = useCartStore.getState().chipList;
  let idx = 1;
  for (; idx < chipList.length; ++idx) {
    if (val < chipList[idx].amount) break;
  }
  const chipKeyFront = isDisabled ? "c".concat(idx, "_disable") : "c".concat(idx);
  const chipKeyBack = "c".concat(idx, "_back");
  const front = chipResources[chipKeyFront].url;
  const back = chipResources[chipKeyBack].url;
  return { front, back };
};
function ClickableArea({ children, className, wrapClassName, id, ...props }) {
  return (
    /**
     * Change center to flex items-center justify-center,
     * to allow for css properties overriding.
     */
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn("relative flex items-center justify-center", wrapClassName),
        id,
        children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn("clickableArea absolute cursor-pointer", className),
              ...props
            }
          )
        ]
      }
    )
  );
}
const ClickableArea$1 = reactExports.memo(ClickableArea);
const ChipImg = reactExports.memo(({ val, isDisabled, ...props }) => {
  const { front, back } = getChipSrc(val, isDisabled);
  const alt = "Chip image for value ".concat(val);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn("chipImg"),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: back,
            alt,
            className: "chipImgBack"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: front,
            alt,
            className: "chipImgFront"
          }
        )
      ]
    }
  );
});
ChipImg.displayName = "ChipImg";
const ChipSelectorChip = (props) => {
  const { value, className, is3D, isDisabled, chipId, pressChipValue, chipSkewXDeg } = props;
  const isLoadingFinished = useLoadingStore((s) => s.isLoadingFinished);
  const gameType = useConfigStore((state) => state.GAME_TYPE);
  const isSicbo = isSicboGameType(gameType);
  const numValue = convertLabel(value);
  const isPressed = pressChipValue === value;
  const handleClick = () => {
    if (isDisabled) return;
    useCartStore.getState().setSelectChipVal(value);
    useLayoutStore.setState({ isOpenSelector: false });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: cn("g-chip", className, { isDisabled, isPressed, isLoadingFinished, isSicbo, is3D }),
      "data-value": value,
      onClick: handleClick,
      "data-drag-chip": chipId,
      style: { "--chipSkewXDeg": "".concat(chipSkewXDeg, "deg") },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChipImg,
          {
            val: value,
            isDisabled
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stroke", children: numValue }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text", children: numValue })
      ]
    }
  );
};
function Clock() {
  const currentBySec = useTimerStore((state) => state.currentSec);
  if (currentBySec === 0) return "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      id: "Clock",
      className: cn({ isMobileDevice }),
      children: new Date(currentBySec * 1e3).toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        ...isMobileDevice && { second: "2-digit" }
      })
    }
  );
}
function MainBgImage({ overlayBg: overlayBg2, imageClassName, className }) {
  const gameType = useConfigStore((s) => s.GAME_TYPE);
  const isCanStream = useLayoutStore((s) => s.isCanStream);
  const isBet = useBettingStore((state) => state.isBet);
  const isRoulette = isRouletteGameType(gameType);
  return !isCanStream ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "MainBgImage",
      className: cn(
        "ease-in-outs pointer-events-none absolute top-0 h-full w-full bg-black transition-all duration-700",
        !isMobileDevice && !isBet && !isRoulette && "translate-y-16 scale-150",
        className
      ),
      children: !isRoulette && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: overlayBg2,
          className: cn("overlayBg", imageClassName)
        }
      )
    }
  ) : null;
}
function ToastList() {
  const { toastQueue, dismissToast } = useToastStore((s) => ({ toastQueue: s.toastQueue, dismissToast: s.dismissToast }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "ToastList",
      className: cn("center absolute left-2 right-2 z-[11] flex-col-reverse md:mx-auto md:w-1/2", { isDesktop }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: toastQueue.map(({ type, id, msg, persistent }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: cn("toastBubble center mb-2 overflow-hidden", type),
          layout: "position",
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          transition: { duration: 0.3, ease: "linear" },
          children: [
            type === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.SuccessCircle, { className: "size-6 shrink-0" }),
            type === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Error, { className: "size-6 shrink-0" }),
            type === "info" && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Info, { className: "size-6 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Message, { msg }),
            !persistent && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ClickableArea$1,
              {
                className: "size-[3.125rem]",
                onClick: () => dismissToast(id),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Clear, { className: "iconClear size-6 shrink-0" })
              }
            )
          ]
        },
        id
      )) })
    }
  );
}
function Message({ msg }) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "msg mr-auto line-clamp-2", children: t(msg) });
}
const overlayBg = "" + new URL("overlay_bg-DIuwO1dd.webp", import.meta.url).href;
const useWinNumberStore$3 = getWinNumberStore();
const BetResult = ({ className }) => {
  const history = useWinNumberStore$3((state) => state.history);
  const historyDisplay = history.slice(-16).reverse();
  const [scope, animate] = useAnimate();
  reactExports.useEffect(() => {
    animate(scope.current, { x: ["-1.5rem", 0] }, { duration: 0.4, ease: "linear" });
  }, [animate, history, scope]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn({ isDesktop }, className),
      id: "BetResult",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: scope,
          className: "resultList",
          children: historyDisplay.map((num, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "".concat(getBetColor(num)),
              children: num
            },
            "".concat(num, "-").concat(i)
          ))
        }
      )
    }
  );
};
function usePreventPullToRefresh(ref) {
  reactExports.useEffect(() => {
    const target = ref.current;
    if (isDesktop || !target) return;
    let startX = 0;
    let startY = 0;
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
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
    const handleGlobalTouchMove = (e) => {
      if (!target.contains(e.target)) {
        e.preventDefault();
      }
    };
    target.addEventListener("touchstart", handleTouchStart, { passive: true });
    target.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchmove", handleGlobalTouchMove, { passive: false });
    return () => {
      target.removeEventListener("touchstart", handleTouchStart, { passive: true });
      target.removeEventListener("touchmove", handleTouchMove, { passive: false });
      document.removeEventListener("touchmove", handleGlobalTouchMove, { passive: false });
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
function AutoPlayCard({ idx, round, selected, onClick, amount }) {
  const PlayIcon = selected ? stopImg : playImg;
  const status = selected ? "selected" : "unSelected";
  const { t } = useTranslation();
  const currencySymbol = useCartStore((s) => s.currencySymbol);
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      id: "AutoPlayCard",
      className: cn(
        "h-[7.75rem] w-[3.875rem] flex-shrink-0 cursor-pointer",
        {
          "h-[8.125rem] w-[4.5625rem]": isMobileDevice,
          "h-[8.125rem] w-[3.82813rem]": isMobileDevice && isSmallDevice
        },
        status
      ),
      onClick: () => {
        playSound(["click"]);
        onClick(idx);
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "count", children: round }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase", children: t("COMMON.ROUND", { count: round }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn("center relative mb-[0.38rem] h-3", {
              "mb-3": isMobileDevice
            }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "left absolute max-w-full overflow-hidden text-ellipsis whitespace-nowrap",
                  initial: false,
                  animate: selected ? "rollUp" : "visible",
                  variants: textVariants,
                  children: "".concat(currencySymbol).concat(thousandSeparator(amount))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "left absolute",
                  initial: false,
                  animate: selected ? "visible" : "hidden",
                  variants: textVariants,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase", children: t("COMMON.LEFT") })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: cn("radioBtn w-[2.875rem]", {
              "w-[3.5625rem]": isMobileDevice,
              "w-[2.82813rem]": isMobileDevice && isSmallDevice
            }),
            whileTap: { scale: 0.9 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: PlayIcon,
                alt: "autoplay stop or play icon",
                className: "w-5"
              }
            )
          }
        )
      ] })
    }
  );
}
const autoPlayCount = [5, 10, 25, 100];
const AutoPlay = ({ requireTitle = true, closeOnDesktop }) => {
  const closeMenu = useLayoutStore((s) => s.closeMenu);
  const roundSelected = useAutoPlayStore((s) => s.roundSelected);
  const totalBet = useCartStore((s) => s.totalBet);
  const { t } = useTranslation();
  const gameState = useBettingStore((s) => s.gameState);
  const boardHistory = useCartStore((s) => s.boardHistory);
  const handleAutoPlay = (idx) => {
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
      if (closeOnDesktop) closeOnDesktop();
      else closeMenu();
    }, 400);
  };
  const subtitle = t("COMMON.AUTOPLAY_PROMPT3");
  const roundRemaining = useAutoPlayStore((state) => state.roundRemaining);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn("flex flex-col gap-4 px-[0.875rem] pb-6 pt-3"),
      id: "AutoPlay",
      children: [
        requireTitle && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("COMMON.AUTOPLAY") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "subtitle text-center text-[0.75rem] leading-4 tracking-[-0.015rem] text-[#b9b2aa]", children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn("center flex gap-2", {
              "gap-3": isMobileDevice
            }),
            children: autoPlayCount.map((val, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              AutoPlayCard,
              {
                idx,
                round: idx === roundSelected ? roundRemaining : val,
                amount: totalBet * val,
                selected: idx === roundSelected,
                onClick: handleAutoPlay
              },
              idx
            ))
          }
        )
      ]
    }
  );
};
const RouletteBubbleGameResult = (props) => {
  var _a, _b, _c;
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const current = props.data.content;
  const result = Number((_b = (_a = current.result) == null ? void 0 : _a["roulette"]) != null ? _b : -1);
  const color = !current.result || result < 0 ? "cancel" : getRouletteNumberColor(result);
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("g-winNumberFrame relative", color, "my-3 h-[8.5rem]"), children: [
    result >= 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-1 top-10 w-[12rem]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: cn(isSmallDevice ? "ml-[3rem]" : "", "text-center"), children: [
        t("COMMON.GAME_RESULT"),
        ":"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2" }),
      WinNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(isSmallDevice ? "absolute -bottom-[1.3rem] -right-[1rem] h-full w-[90%]" : ""), children: /* @__PURE__ */ jsxRuntimeExports.jsx(WinNumber, { win: result }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t("COMMON.LIVE_ROULETTE") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
              t("COMMON.GAME_RESOLVED"),
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: current.finishedAt && new Date(current.finishedAt).toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
              timeZone: "UTC"
            }) })
          ] }),
          result < 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
              t("COMMON.GAME_RESULT"),
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("COMMON.GAME_CANCELED") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
            t("COMMON.GAME_NUMBER"),
            ":"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "#".concat(getFormattedRoundId((_c = current == null ? void 0 : current.roundId) != null ? _c : "")) })
        ] })
      ] })
    ] })
  ] });
};
const BubbleGameResult = (props) => {
  var _a, _b, _c;
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const current = props.data.content;
  const result = (_b = (_a = current.result) == null ? void 0 : _a["sicBo"]) != null ? _b : [];
  const color = !current.result || result.length === 0 ? "cancel" : getSicBoNumberColor(result);
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("g-winNumberFrame overflow-visible", color, "my-3 h-[8.5rem]"), children: [
    result.length === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("absolute top-4 w-[12rem]", isSmallDevice ? "right-[-2rem]" : "right-[-1rem]"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-center", children: [
        t("COMMON.GAME_RESULT"),
        ":"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "center absolute bottom-[-0.2rem] flex h-[5rem] w-[5rem] scale-[0.95]",
            isSmallDevice ? "right-[1.5rem]" : "right-[2.5rem]"
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(WinNumber$1, { win: result })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t("COMMON.LIVE_SICBO") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
              t("COMMON.GAME_RESOLVED"),
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: current.finishedAt && new Date(current.finishedAt).toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
              timeZone: "UTC"
            }) })
          ] }),
          (result.length < 3 || !result) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
              t("COMMON.GAME_RESULT"),
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("COMMON.GAME_CANCELED") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
            t("COMMON.GAME_NUMBER"),
            ":"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "#".concat(getFormattedRoundId((_c = current == null ? void 0 : current.roundId) != null ? _c : "")) })
        ] })
      ] })
    ] })
  ] });
};
const formatTime = (timestamp) => {
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
  var _a;
  const { timestamp, content, sender } = data;
  const [isHover, setIsHover] = reactExports.useState(false);
  const [isFresh, setIsFresh] = reactExports.useState(true);
  const isAlive = isFresh && isInitialLoadFinish && isLastThree;
  const ttlRef = reactExports.useRef(TTL);
  const displayName = (_a = sender == null ? void 0 : sender.username) != null ? _a : "";
  const messageText = "text" in content ? content.text : "";
  const isCurrentUser = (sender == null ? void 0 : sender.actor) === "me";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: cn("ChatBubble mb-1", { isAlive }, { isSelf: isCurrentUser }),
      layout: "position",
      initial: { opacity: 0, translateY: "100%", scale: 1.1 },
      animate: { opacity: 1, translateY: 0, scale: 1 },
      transition: isInitialLoadFinish && desktopLive ? { type: "spring", stiffness: 100, damping: 15, mass: 1, duration: 0.8 } : { duration: 0 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "msg break-words break-keep",
            onMouseEnter: () => setIsHover(true),
            onMouseLeave: () => setIsHover(false),
            children: [
              desktopLive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "timer desktopLiveTimer mt-[.125rem] opacity-0",
                  animate: { opacity: isHover ? 1 : 0 },
                  transition: { duration: 0.3 },
                  children: formatTime(timestamp)
                }
              ),
              isFirstBubble && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "name", children: displayName }),
              messageText
            ]
          }
        ),
        isLastBubbleTimestamp && !desktopLive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timer mt-[.125rem]", children: formatTime(timestamp) })
      ]
    }
  );
}
function useVirtualKeyboardOpened(inputRef) {
  const preKeyboardHeightRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const inputElem = inputRef == null ? void 0 : inputRef.current;
    if (!isMobileDevice || !window.visualViewport || !inputElem) {
      useLayoutStore.setState({ isVirtualKeyboardOpened: false, visualViewportMargin: 0 });
      return;
    }
    const vv = window.visualViewport;
    const onFocus = () => {
      preKeyboardHeightRef.current = vv.height;
    };
    const onBlur = () => {
      preKeyboardHeightRef.current = null;
      useLayoutStore.setState({ isVirtualKeyboardOpened: false, visualViewportMargin: 0 });
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
function ChatSendButtonIcon({ state, className }) {
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
  const animationConfig2 = {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.svg,
    {
      viewBox: "0 0 44 44",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: containerStyles,
      animate: animationConfig2,
      children: [
        shouldHaveBackground && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: "M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z",
              fill: "url(#bg-gradient-".concat(effectiveState, ")"),
              animate: { fill: "url(#bg-gradient-".concat(effectiveState, ")") },
              transition: { duration: 0.15, ease: "easeOut" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: "M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z",
              stroke: "url(#stroke-gradient-".concat(effectiveState, ")"),
              animate: { stroke: "url(#stroke-gradient-".concat(effectiveState, ")") },
              transition: { duration: 0.15, ease: "easeOut" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.path,
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M28.6667 22C28.6667 22.2533 28.5263 22.4843 28.3056 22.5942L17.581 27.9347C17.3454 28.052 17.0645 28.0087 16.8722 27.8255C16.6799 27.6422 16.6153 27.3561 16.7092 27.1038L18.6072 22L16.7092 16.8962C16.6153 16.6439 16.6799 16.3578 16.8722 16.1745C17.0645 15.9913 17.3454 15.948 17.581 16.0653L28.3056 21.4058C28.5263 21.5157 28.6667 21.7467 28.6667 22Z",
            initial: { fill: "none", fillOpacity: 0 },
            animate: {
              fill: arrowFill,
              fillOpacity: arrowOpacity
            },
            transition: { duration: 0.15, ease: "easeOut" }
          }
        ),
        shouldHaveBackground && /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "bg-gradient-".concat(effectiveState),
              x1: "22",
              y1: "0",
              x2: "22",
              y2: "44",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.stop,
                  {
                    animate: { stopColor: backgroundGradient.stop1 },
                    transition: { duration: 0.15, ease: "easeOut" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.stop,
                  {
                    offset: "1",
                    animate: { stopColor: backgroundGradient.stop2 },
                    transition: { duration: 0.15, ease: "easeOut" }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "stroke-gradient-".concat(effectiveState),
              x1: "22",
              y1: "0",
              x2: "22",
              y2: "44",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.stop,
                  {
                    animate: { stopColor: backgroundGradient.stroke1 },
                    transition: { duration: 0.15, ease: "easeOut" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.stop,
                  {
                    offset: backgroundGradient.strokeOffset,
                    animate: { stopColor: backgroundGradient.stroke2 },
                    transition: { duration: 0.15, ease: "easeOut" }
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ChatSendButton({ hasText, isFocus, desktopLive, onClick }) {
  const isTableClosed = useChatStore((state) => state.isTableClosed);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ClickableArea$1,
    {
      className: "aspect-square size-[150%]",
      onPointerDown: (e) => {
        e.preventDefault();
      },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onClick,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: cn(
            "group relative flex size-11 items-center justify-center rounded-[2.5rem]",
            isDesktop && (isActive || isInactive) ? "cursor-pointer" : "cursor-default",
            { "size-[2.25rem]": desktopLive }
          ),
          disabled: isDisabled,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChatSendButtonIcon,
            {
              state: getIconState(),
              className: cn("absolute", desktopLive ? "size-9" : "size-11")
            }
          )
        }
      )
    }
  );
}
const LIVE_CHAT_MAX_LENGTH = 250;
function ChatInput(props) {
  const { t } = useTranslation();
  const { type, setIsInputHover, desktopLive, setIsInputHasText } = props;
  const inputRef = reactExports.useRef(null);
  const [isFocus, setIsFocus] = reactExports.useState(false);
  const [text, setText] = reactExports.useState("");
  const [initialized, setInitialized] = reactExports.useState(false);
  const textLen = text.length;
  const isEmpty = textLen === 0;
  const maxLength = LIVE_CHAT_MAX_LENGTH;
  const isTableClosed = useChatStore((state) => state.isTableClosed);
  useVirtualKeyboardOpened(inputRef);
  const onTextChanged = (e) => {
    const { value } = e.target;
    const clampedText = value.slice(0, maxLength);
    setText(clampedText);
    setIsInputHasText == null ? void 0 : setIsInputHasText(clampedText.length > 0);
  };
  const onKeyDown = (e) => {
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
    setIsInputHasText == null ? void 0 : setIsInputHasText(false);
  };
  const renderFloatingLabel = () => {
    if (isEmpty && !isFocus) {
      return t("COMMON.YOUR_MESSAGE");
    } else {
      return "".concat(textLen, "/").concat(LIVE_CHAT_MAX_LENGTH);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "ChatInput",
      className: "w-full rounded-[2.75rem] p-[0.0625rem]",
      onMouseEnter: () => {
        if (desktopLive) {
          setIsInputHover == null ? void 0 : setIsInputHover(true);
        }
      },
      onMouseLeave: () => {
        if (desktopLive) {
          setIsInputHover == null ? void 0 : setIsInputHover(false);
        }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn("textArea relative", {
            "h-[2.75rem] p-[0rem_0.2rem_0rem_1.125rem]": desktopLive,
            "h-[3.375rem] p-[0.3125rem_0.3125rem_0.3125rem_1.125rem]": !desktopLive,
            focus: isFocus
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ClickableArea$1,
              {
                wrapClassName: "static justify-start",
                className: "h-full w-full -translate-x-[1.125rem] cursor-text",
                onPointerDown: (e) => e.preventDefault(),
                onClick: () => {
                  var _a;
                  return (_a = inputRef.current) == null ? void 0 : _a.focus();
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      ref: inputRef,
                      onChange: onTextChanged,
                      onKeyDown,
                      onFocus: () => setIsFocus(true),
                      onBlur: () => setIsFocus(false),
                      maxLength,
                      value: text,
                      className: cn({ "pt-[0.7rem]": type === RoomType.Live })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("absolute left-[1.2rem] top-1/2 -translate-y-1/2", { limit: isFocus || !isEmpty }), children: renderFloatingLabel() })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChatSendButton,
              {
                hasText: !isEmpty,
                isFocus,
                desktopLive,
                onClick: send
              }
            )
          ]
        }
      )
    }
  );
}
const ChatInput$1 = reactExports.memo(ChatInput);
const GAME_TABLE = useConfigStore.getState().GAME_TABLE;
function ChatHeader() {
  const { t } = useTranslation();
  const dealer = useBettingStore((state) => state.dealer);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chatRoomHeader center absolute left-1/2 top-[1.9rem] -translate-x-1/2 flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tracking-[0.113rem]", children: t("COMMON.CHAT") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-[0.125rem] text-xs leading-4 tracking-[0.03rem]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        t("COMMON.GAME_PRESENTER"),
        ":"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chatTitleName", children: dealer.name })
    ] })
  ] });
}
function ChatBannedBanner() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "box error", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "error", children: t("COMMON.BANNED") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "error", children: t("COMMON.BANNED_TIP") })
  ] });
}
function ChatDisabledBanner() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "box", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t("COMMON.CHAT_DISABLED") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-10", children: t("COMMON.CHAT_DISABLED_TIP") })
  ] });
}
function TableClosedBanner() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "box my-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t("COMMON.TABLE_CLOSED") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("COMMON.TABLE_CLOSED_TIP1") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("COMMON.TABLE_CLOSED_TIP2") })
    ] })
  ] });
}
function ChatRoom(props) {
  const { type, desktopLive, isLayerHover, isInputHasText } = props;
  const remainedBalance = useCartStore((state) => state.remainedBalance);
  const isBanned = useChatStore((state) => state.isBanned);
  const isTableClosed = useChatStore((state) => state.isTableClosed);
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
  const queueLive = useChatStore((state) => state.queueLive);
  const queueSupport = useChatStore((state) => state.queueSupport);
  const isOtherMsgEnabled = useSettingStore((state) => state.otherMessagesEnable);
  const filteredQueueLive = isOtherMsgEnabled ? queueLive : queueLive.filter((msg) => {
    var _a;
    return ((_a = msg.sender) == null ? void 0 : _a.actor) !== "others";
  });
  const renderType = type === RoomType.Live ? filteredQueueLive : queueSupport;
  const renderList = [...renderType].reverse();
  window.chat = {
    isBanned: (isBanned2 = true) => {
      useChatStore.setState({ isBanned: isBanned2 });
    },
    isTableClosed: (isTableClosed2 = true) => {
      useChatStore.setState({ isTableClosed: isTableClosed2 });
    }
  };
  reactExports.useEffect(() => {
    if (!renderList.length || isInitialLoadFinish) return;
    setIsInitialLoadFinish(true);
  }, [renderList, type, isInitialLoadFinish]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "ChatRoom",
      className: cn("absolute flex h-full w-full flex-col-reverse gap-3 px-4 pb-4"),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("shadowHint", { isDesktop, desktopLive }) }),
        isChatDisabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChatDisabledBanner, {}) : isBanned ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChatBannedBanner, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChatInput$1, { ...props }),
        isTableClosed && /* @__PURE__ */ jsxRuntimeExports.jsx(TableClosedBanner, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            ref: scrollWrapRef,
            className: "g-noBar chatRoomContent scrollWrap flex flex-col-reverse pt-4",
            layout: isInitialLoadFinish && desktopLive && "position",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: renderList.map((data, idx) => {
              var _a, _b, _c, _d;
              const { content } = data;
              const { type: type2 } = content;
              if (type2 !== "text" && "gameType" in content) {
                const gameType = content.gameType;
                if (isRouletteGameType(gameType))
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    RouletteBubbleGameResult,
                    {
                      data
                    },
                    idx
                  );
                if (isSicboGameType(gameType))
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    BubbleGameResult,
                    {
                      data
                    },
                    idx
                  );
              }
              const userId = (_a = data.sender) == null ? void 0 : _a.userId;
              const isLastBubbleTimestamp = !(idx > 0 && ((_b = renderList[idx - 1].sender) == null ? void 0 : _b.userId) === userId) && type2 !== "gameHistory";
              const isLastThree = idx < 3;
              const isFirstBubble = !(idx !== renderList.length - 1 && ((_c = renderList[idx + 1].sender) == null ? void 0 : _c.userId) === userId);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChatBubble,
                {
                  data,
                  desktopLive,
                  isFirstBubble,
                  isLastBubbleTimestamp,
                  isLastThree,
                  isInitialLoadFinish,
                  isLayerHover,
                  isInputHasText
                },
                "chat-".concat(data.timestamp, "-").concat(((_d = data.sender) == null ? void 0 : _d.userId) || idx)
              );
            }) })
          }
        )
      ]
    }
  );
}
const ChatRoom$1 = reactExports.memo(ChatRoom);
function GameLimitWrapper({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "GameLimit",
      className: cn("px-4 pt-2", {
        "pt-3": isMobileDevice
      }),
      children
    }
  );
}
const GameLimitComponent = reactExports.memo(GameLimitWrapper);
function GameLimit() {
  const { t } = useTranslation();
  const currencySymbol = useCartStore((s) => s.currencySymbol);
  const tableMaxPayout = useConfigStore((s) => s.tableMaxPayout);
  const gameType = useConfigStore((s) => s.GAME_TYPE);
  const isSicBo = isSicboGameType(gameType);
  const isRoulette = isRouletteGameType(gameType);
  const payTable = getPayTable(isSicBo ? GameType.AUTO_SIC_BO : isRoulette ? GameType.AUTO_ROULETTE : GameType.BACCARAT);
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: t("COMMON.BET_TYPE") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: t("COMMON.BET_LIMITS") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: t("COMMON.PAYOUTS") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Object.keys(payTable).map((betType, index2) => {
        var _a;
        const betTypeEntry = payTable[betType] || {};
        const className = betTypeEntry.className || "";
        const limits = betTypeEntry.limits || {};
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cn(className), children: betTypeEntry.betType || betType }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cn(className), children: limits.max ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            currencySymbol,
            ((_a = limits.min) == null ? void 0 : _a.toLocaleString()) || "0",
            " - ",
            limits.max.toLocaleString()
          ] }) : "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cn(className), children: betTypeEntry.payouts || "" })
        ] }, index2);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn("maxPayout px-2 py-4", {
          "py-3": isMobileDevice
        }),
        children: t("COMMON.MAX_PAYOUT", {
          currencySymbol,
          amount: (tableMaxPayout || 0).toLocaleString()
        })
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GameLimitComponent, { children: content });
}
function GameRule({ titleList }) {
  const openDesktopModal = useLayoutStore((state) => state.openDesktopModal);
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("list mx-4 mb-4 mt-2 cursor-pointer", {
        "mt-3": isMobileDevice
      }),
      onClick: () => {
        useLayoutStore.setState({ menuPage: "rules_inner" });
        openDesktopModal("rules_inner");
        playSound(["click"]);
      },
      children: titleList.map((item, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "row",
          onClick: () => useLayoutStore.setState({ scrollToId: item }),
          children: [
            t(item),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.RightGolden, { className: "w-4" })
          ]
        },
        index2
      ))
    }
  );
}
const GameRule$1 = reactExports.memo(GameRule);
function GameRuleInfo({ children }) {
  const scrollToId = useLayoutStore((state) => state.scrollToId);
  reactExports.useEffect(() => {
    if (!scrollToId) return;
    const animationFrame = scrollWrap({ modalType: "rules_inner", elementId: scrollToId, offset: isMobileDevice ? 12 : 8 });
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollToId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "GameRuleInfo",
      className: cn("px-4 pt-2", {
        "pt-3": isMobileDevice
      }),
      children
    }
  );
}
const GameRuleInfo$1 = reactExports.memo(GameRuleInfo);
const getTimeString = (createdAt) => {
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
function GroupItem({ history, collapsed }) {
  const { roundCreatedAt, betTotal, winTotal, gameType, currency, status } = history;
  const { histories, next } = useHistoryStore((state) => state);
  const lastHistory = histories.at(-1);
  const isLastItem = lastHistory && lastHistory.id === history.id;
  const openDesktopModal = useLayoutStore((state) => state.openDesktopModal);
  const { winMax } = history || {};
  const finalUserWin = winMax && winTotal > winMax ? winMax : winTotal;
  const itemRef = reactExports.useRef(null);
  const intersectionObserver = reactExports.useRef(null);
  const isFinished = status === "finished";
  const getMoreHistories = () => {
    var _a;
    if (!next) return;
    (_a = connectIns) == null ? void 0 : _a.listBetHistory(DEFAULT_HISTORY_LIMIT, next);
  };
  reactExports.useEffect(() => {
    if (isLastItem && collapsed) {
      getMoreHistories();
    }
  }, [collapsed, isLastItem]);
  reactExports.useEffect(() => {
    if (!itemRef.current || !isLastItem) return;
    if (!intersectionObserver.current) {
      intersectionObserver.current = new IntersectionObserver((entries) => {
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
  return roundCreatedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: itemRef,
      className: "gridRow",
      onClick: () => {
        useHistoryStore.setState({ currentHistoryContent: history });
        if (isMobileDevice) {
          useLayoutStore.setState({ menuPage: "history_content" });
        } else {
          openDesktopModal("history_content");
        }
        playSound(["click"]);
        scrollWrapToTop("history_content");
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gridCell", children: getTimeString(roundCreatedAt) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gridCell overflow-hidden truncate whitespace-nowrap", children: gameTypeStringMap[gameType] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gridCell", children: currencyFormat(betTotal, currency) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gridCell flex items-center justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GameHistoryResult,
            {
              status,
              result: (
                // For cancelled games, show the "0" amount as the result since no win/loss occurred
                isFinished ? finalUserWin - betTotal : 0
              ),
              currency,
              className: "flex-grow overflow-hidden truncate text-right"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.HistoryItemRight, { className: "ml-[.5rem] h-3 w-3 flex-shrink-0" })
        ] })
      ]
    }
  );
}
const GroupItem$1 = reactExports.memo(GroupItem);
function DateGroup(props) {
  var _a;
  const { date } = props;
  const { histories, groupedHistoryId, daySubtotals } = useHistoryStore((state) => state);
  const rootEmFontSize = useLayoutStore((s) => s.rootEmFontSize);
  const { bet, win } = (_a = daySubtotals[date]) != null ? _a : { bet: 0, win: 0 };
  const historiesId = groupedHistoryId[date];
  const groupedHistories = histories.filter(({ id }) => historiesId.find((historyId) => historyId === id));
  const [expanded, setExpanded] = reactExports.useState(true);
  const groupRef = reactExports.useRef(null);
  const toggleGroup = () => {
    playSound(["click"]);
    setExpanded((prev) => {
      const isExpanded = !prev;
      if (groupRef.current) {
        const heightInRem = groupRef.current.scrollHeight / rootEmFontSize;
        groupRef.current.style.height = isExpanded ? "".concat(heightInRem, "rem") : "0";
      }
      return isExpanded;
    });
  };
  reactExports.useEffect(() => {
    if (groupRef.current && expanded) {
      const heightInRem = groupRef.current.scrollHeight / rootEmFontSize;
      groupRef.current.style.height = "".concat(heightInRem, "rem");
    }
  }, [expanded, historiesId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-[0.75rem]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "groupHeader gridRow cursor-pointer",
        onClick: toggleGroup,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gridCell col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-[47%] justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arrowIcon ".concat(expanded ? "expanded" : "collapsed"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.UpArrow, { className: "h-3 w-3" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gridCell", children: currencyFormat(bet, histories[0].currency) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GameHistoryResult,
            {
              className: "gridCell",
              status: histories[0].status,
              result: win - bet,
              currency: histories[0].currency
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "groupContent ".concat(expanded ? "expanded" : "collapsed"),
        ref: groupRef,
        children: groupedHistories.map((history, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          GroupItem$1,
          {
            history,
            collapsed: !expanded
          },
          idx
        ))
      }
    )
  ] });
}
const DateGroup$1 = reactExports.memo(DateGroup);
function EmptyHistory() {
  const { closeMenu } = useLayoutStore();
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "EmptyHistory",
      className: "mt-[-.28rem] flex h-full flex-col items-center justify-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.HistoryGolden, { className: "mt-[-3.5rem] h-[3rem] w-[3rem]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 pb-1 text-[1rem] font-semibold tracking-[-0.030rem] text-[#EADFD2]", children: t("COMMON.HISTORY_EMPTY1") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[16rem] pb-[0.95rem] text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[.75rem] leading-[1rem] tracking-[-0.015rem] text-[#B0B0B0]", children: t("COMMON.HISTORY_EMPTY2") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[.75rem] leading-[1rem] tracking-[-0.015rem] text-[#B0B0B0]", children: t("COMMON.HISTORY_EMPTY3") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            id: "EmptyHistoryButton",
            onClick: closeMenu,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("COMMON.PLACE_A_BET") })
          }
        )
      ]
    }
  );
}
const EmptyHistory$1 = reactExports.memo(EmptyHistory);
function GameHistory() {
  const groupedHistoryId = useHistoryStore((state) => state.groupedHistoryId);
  const historyKeys = Object.keys(groupedHistoryId);
  const { t } = useTranslation();
  return historyKeys.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyHistory$1, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "GameHistory",
      className: cn("mt-1.5", {
        "mt-2.5": isMobileDevice
      }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gridHeader", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gridRow uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gridCell", children: t("COMMON.DATE") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gridCell", children: t("COMMON.GAME") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gridCell", children: t("COMMON.TOTAL_BET") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gridCell", children: t("COMMON.RESULT") })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: historyKeys.map((date) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          DateGroup$1,
          {
            date
          },
          date
        )) })
      ]
    }
  );
}
const GameHistory$1 = reactExports.memo(GameHistory);
const svgContent = {
  mute: (type) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.27305 6.07953L6.39511 8.18648C6.20251 8.32748 5.96446 8.40416 5.71928 8.40416H3.22695V11.5945H5.71928C5.96446 11.5945 6.20251 11.6712 6.39511 11.8122L9.27305 13.9192V6.07953ZM9.0653 4.38559C9.78172 3.86109 10.8333 4.3354 10.8333 5.18303V14.8157C10.8333 15.6633 9.78172 16.1376 9.0653 15.6131L5.55706 13.0447H2.75886C2.15566 13.0447 1.66666 12.5902 1.66666 12.0296V7.9691C1.66666 7.40847 2.15566 6.95398 2.75886 6.95398H5.55706L9.0653 4.38559Z",
        fill: "url(#paint0_linear_13534_17792_mute_".concat(type, ")")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M13.5474 7.71536C13.8345 7.42821 14.3001 7.42821 14.5873 7.71536L15.832 8.96014L17.0768 7.71536C17.364 7.42821 17.8295 7.42821 18.1167 7.71536C18.4038 8.00251 18.4038 8.46808 18.1167 8.75523L16.8719 10L18.1167 11.2448C18.4038 11.5319 18.4038 11.9975 18.1167 12.2846C17.8295 12.5718 17.364 12.5718 17.0768 12.2846L15.832 11.0399L14.5873 12.2846C14.3001 12.5718 13.8345 12.5718 13.5474 12.2846C13.2602 11.9975 13.2602 11.5319 13.5474 11.2448L14.7922 10L13.5474 8.75523C13.2602 8.46808 13.2602 8.00251 13.5474 7.71536Z",
        fill: "url(#paint1_linear_10833_327519_mute_".concat(type, ")")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "linearGradient",
        {
          id: "paint0_linear_13534_17792_mute_".concat(type),
          x1: "6.54877",
          y1: "4.16602",
          x2: "3.2474",
          y2: "14.8107",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#C9AE8D" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "1",
                stopColor: "#A57D4E"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "linearGradient",
        {
          id: "paint1_linear_10833_327519_mute_".concat(type),
          x1: "15.832",
          y1: "7.5",
          x2: "15.832",
          y2: "12.5",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#C9AE8D" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "1",
                stopColor: "#A57D4E"
              }
            )
          ]
        }
      )
    ] })
  ] }),
  low: (type) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.27305 6.07953L6.39511 8.18648C6.20251 8.32748 5.96446 8.40416 5.71928 8.40416H3.22695V11.5945H5.71928C5.96446 11.5945 6.20251 11.6712 6.39511 11.8122L9.27305 13.9192V6.07953ZM9.0653 4.38559C9.78172 3.86109 10.8333 4.3354 10.8333 5.18303V14.8157C10.8333 15.6633 9.78172 16.1376 9.0653 15.6131L5.55706 13.0447H2.75886C2.15566 13.0447 1.66666 12.5902 1.66666 12.0296V7.9691C1.66666 7.40847 2.15566 6.95398 2.75886 6.95398H5.55706L9.0653 4.38559Z",
        fill: "url(#paint0_linear_13534_17792_low_".concat(type, ")")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "linearGradient",
      {
        id: "paint0_linear_13534_17792_low_".concat(type),
        x1: "6.54877",
        y1: "4.16602",
        x2: "3.2474",
        y2: "14.8107",
        gradientUnits: "userSpaceOnUse",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#C9AE8D" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "stop",
            {
              offset: "1",
              stopColor: "#A57D4E"
            }
          )
        ]
      }
    ) })
  ] }),
  medium: (type) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.27305 6.07953L6.39511 8.18648C6.20251 8.32748 5.96446 8.40416 5.71928 8.40416H3.22695V11.5945H5.71928C5.96446 11.5945 6.20251 11.6712 6.39511 11.8122L9.27305 13.9192V6.07953ZM9.0653 4.38559C9.78172 3.86109 10.8333 4.3354 10.8333 5.18303V14.8157C10.8333 15.6633 9.78172 16.1376 9.0653 15.6131L5.55706 13.0447H2.75886C2.15566 13.0447 1.66666 12.5902 1.66666 12.0296V7.9691C1.66666 7.40847 2.15566 6.95398 2.75886 6.95398H5.55706L9.0653 4.38559Z",
        fill: "url(#paint0_linear_13534_17792_medium_".concat(type, ")")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M13.5328 7.78573C13.8018 7.53721 14.2415 7.53398 14.5148 7.77852C15.1704 8.36495 15.5408 9.16244 15.5408 9.9962C15.5408 10.83 15.1704 11.6274 14.5148 12.2139C14.2415 12.4584 13.8018 12.4552 13.5328 12.2067C13.2638 11.9581 13.2673 11.5584 13.5407 11.3139C13.9334 10.9626 14.1519 10.4884 14.1519 9.9962C14.1519 9.504 13.9334 9.02982 13.5407 8.67852C13.2673 8.43397 13.2638 8.03426 13.5328 7.78573Z",
        fill: "url(#paint2_linear_13534_17792_medium_".concat(type, ")")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "linearGradient",
        {
          id: "paint0_linear_13534_17792_medium_".concat(type),
          x1: "6.54877",
          y1: "4.16602",
          x2: "3.2474",
          y2: "14.8107",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#C9AE8D" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "1",
                stopColor: "#A57D4E"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "linearGradient",
        {
          id: "paint2_linear_13534_17792_medium_".concat(type),
          x1: "15.9963",
          y1: "5.83203",
          x2: "13.0905",
          y2: "12.9866",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#C9AE8D" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "1",
                stopColor: "#A57D4E"
              }
            )
          ]
        }
      )
    ] })
  ] }),
  high: (type) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.27305 6.07953L6.39511 8.18648C6.20251 8.32748 5.96446 8.40416 5.71928 8.40416H3.22695V11.5945H5.71928C5.96446 11.5945 6.20251 11.6712 6.39511 11.8122L9.27305 13.9192V6.07953ZM9.0653 4.38559C9.78172 3.86109 10.8333 4.3354 10.8333 5.18303V14.8157C10.8333 15.6633 9.78172 16.1376 9.0653 15.6131L5.55706 13.0447H2.75886C2.15566 13.0447 1.66666 12.5902 1.66666 12.0296V7.9691C1.66666 7.40847 2.15566 6.95398 2.75886 6.95398H5.55706L9.0653 4.38559Z",
        fill: "url(#paint0_linear_13534_17792_high_".concat(type, ")")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M15.5067 6.02056C15.7757 5.77203 16.2154 5.7688 16.4887 6.01335C17.6685 7.06864 18.3333 8.50196 18.3333 9.9987C18.3333 11.4954 17.6685 12.9288 16.4887 13.984C16.2154 14.2286 15.7757 14.2254 15.5067 13.9768C15.2377 13.7283 15.2412 13.3286 15.5146 13.0841C16.4315 12.2639 16.9444 11.1539 16.9444 9.9987C16.9444 8.84353 16.4315 7.73351 15.5146 6.91334C15.2412 6.6688 15.2377 6.26908 15.5067 6.02056Z",
        fill: "url(#paint1_linear_13534_17792_high_".concat(type, ")")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M13.5328 7.78573C13.8018 7.53721 14.2415 7.53398 14.5148 7.77852C15.1704 8.36495 15.5408 9.16244 15.5408 9.9962C15.5408 10.83 15.1704 11.6274 14.5148 12.2139C14.2415 12.4584 13.8018 12.4552 13.5328 12.2067C13.2638 11.9581 13.2673 11.5584 13.5407 11.3139C13.9334 10.9626 14.1519 10.4884 14.1519 9.9962C14.1519 9.504 13.9334 9.02982 13.5407 8.67852C13.2673 8.43397 13.2638 8.03426 13.5328 7.78573Z",
        fill: "url(#paint2_linear_13534_17792_high_".concat(type, ")")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "linearGradient",
        {
          id: "paint0_linear_13534_17792_high_".concat(type),
          x1: "6.54877",
          y1: "4.16602",
          x2: "3.2474",
          y2: "14.8107",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#C9AE8D" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "1",
                stopColor: "#A57D4E"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "linearGradient",
        {
          id: "paint1_linear_13534_17792_high_".concat(type),
          x1: "15.9963",
          y1: "5.83203",
          x2: "13.0905",
          y2: "12.9866",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#C9AE8D" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "1",
                stopColor: "#A57D4E"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "linearGradient",
        {
          id: "paint2_linear_13534_17792_high_".concat(type),
          x1: "15.9963",
          y1: "5.83203",
          x2: "13.0905",
          y2: "12.9866",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#C9AE8D" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "1",
                stopColor: "#A57D4E"
              }
            )
          ]
        }
      )
    ] })
  ] })
};
const getLevel = (level) => {
  if (level === 0) return "mute";
  if (level < 0.34) return "low";
  if (level < 0.67) return "medium";
  return "high";
};
function SoundButton(props) {
  const { level, onClick, type } = props;
  const svgLevel = getLevel(level);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "SoundButton",
      className: "center h-8 w-8 cursor-pointer",
      onClick: () => {
        playSound(["click"]);
        if (onClick) onClick();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5",
          children: svgContent[svgLevel](type)
        }
      )
    }
  );
}
const SoundButton$1 = reactExports.memo(SoundButton);
const animationConfig = {
  type: "spring",
  duration: 0.45,
  stiffness: 320,
  damping: 26.67,
  mass: 1
};
function Toggle({ checked }) {
  const inputId = reactExports.useId();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "label",
    {
      id: "Toggle",
      htmlFor: inputId,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: inputId,
            type: "checkbox",
            checked,
            className: "sr-only",
            readOnly: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slider absolute inset-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "sliderBar absolute h-full",
            initial: false,
            transition: animationConfig,
            animate: {
              width: checked ? "100%" : "40%"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
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
          }
        )
      ]
    }
  );
}
const Toggle$1 = reactExports.memo(Toggle);
const textClassBase = "text transition-colors duration-300 ease-in-out";
function SettingToggle(props) {
  const { title, description, className, titleClass, descClass, checked, onChange } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("row", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(textClassBase, "toggleTitle", titleClass, !checked && "text-[#7A7A7A]"), children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(textClassBase, "text-xs", descClass, checked ? "text-[#A57D4E]" : "text-[#644C2F]"),
          style: { letterSpacing: "-0.015rem" },
          children: description
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ClickableArea$1,
      {
        className: "size-[3.125rem]",
        onClick: () => {
          playSound(["click"]);
          onChange();
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle$1, { checked })
      }
    ) })
  ] });
}
const SettingToggle$1 = reactExports.memo(SettingToggle);
const BaseBar = ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-[1.125rem] w-[0.1875rem] rounded-[4.375rem] bg-[#A57D4E]", className) });
const sliderIndex = /* @__PURE__ */ (() => {
  let index2 = 1;
  return {
    increment() {
      index2 = index2 === 8 ? 1 : index2 + 1;
    },
    value() {
      return index2;
    }
  };
})();
function BackgroundRange({ percent, intervalCount = 40 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center w-full gap-[0.1875rem]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BaseBar, {}, -2),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BaseBar, {}, -1),
    Array.from({ length: intervalCount + 1 }, (_, i) => i).map((_, idx) => {
      if ((idx + 5) / intervalCount < percent) return /* @__PURE__ */ jsxRuntimeExports.jsx(BaseBar, {}, idx);
      if ((idx + 4) / intervalCount < percent)
        return (
          // Tall bar
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            BaseBar,
            {
              className: "h-[1rem]"
            },
            idx
          )
        );
      if ((idx + 3) / intervalCount < percent)
        return (
          // slightly taller bar
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            BaseBar,
            {
              className: "h-[0.875rem]"
            },
            idx
          )
        );
      return (
        // short bar
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BaseBar,
          {
            className: "h-[0.75rem] bg-[#414141]"
          },
          idx
        )
      );
    })
  ] });
}
function SliderBar(props) {
  const { value, min = 0, max = 1, step = 0.01, intervalCount, onChange } = props;
  const percentage = (value - min) / (max - min);
  const sliderBarRef = reactExports.useRef(null);
  usePreventPullToRefresh(sliderBarRef);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "SliderBar",
      ref: sliderBarRef,
      className: "relative w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BackgroundRange,
          {
            percent: Number(percentage),
            intervalCount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ballRange", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute h-full",
            style: { left: Math.max(0, percentage * 100) - 0.5 + "%" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Image,
              {
                src: toggle,
                className: "absolute left-1/2 top-1/2 w-7 max-w-none -translate-x-1/2 -translate-y-1/2 transform",
                alt: "Slider control"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "absolute left-0 top-0",
            type: "range",
            min,
            max,
            step,
            value,
            onChange: (e) => {
              playSound(["slider".concat(sliderIndex.value())]);
              sliderIndex.increment();
              onChange(+e.target.value);
            }
          }
        )
      ]
    }
  );
}
const SliderBar$1 = reactExports.memo(SliderBar);
function SettingSlider(props) {
  const { title, value, onChange, className, prefixElement, sliderProps, intervalCount = 33 } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row ".concat(className), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-start gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between self-stretch", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: Math.round(value * 100) })
    ] }),
    prefixElement ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-between", children: [
      prefixElement,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-grow pl-[.75rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SliderBar$1,
        {
          value,
          min: 0,
          max: 1,
          step: 0.01,
          onChange,
          intervalCount,
          ...sliderProps
        }
      ) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderBar$1,
      {
        value,
        onChange
      }
    )
  ] }) });
}
const SettingSlider$1 = reactExports.memo(SettingSlider);
function Audio() {
  const { t } = useTranslation();
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const { masterVolume, studioVolume, gameVolume, dealerVolume, volumeChange, toggleAllVolume, toggleVolume } = useSettingStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingToggle$1,
      {
        title: t("COMMON.ALL_SOUNDS"),
        description: t("COMMON.TOGGLE_SOUNDS"),
        checked: masterVolume > 0,
        onChange: () => toggleAllVolume()
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingSlider$1,
      {
        title: t("COMMON.STUDIO_SOUNDS"),
        value: studioVolume,
        sliderProps: {
          intervalCount: isSmallDevice ? 30 : 39
        },
        onChange: (val) => volumeChange("studioVolume", val),
        prefixElement: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SoundButton$1,
          {
            level: studioVolume,
            onClick: () => toggleVolume("studioVolume"),
            type: "studio"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingSlider$1,
      {
        title: t("COMMON.GAME_SOUNDS"),
        value: gameVolume,
        sliderProps: { intervalCount: isSmallDevice ? 30 : 39 },
        onChange: (val) => volumeChange("gameVolume", val),
        prefixElement: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SoundButton$1,
          {
            level: gameVolume,
            onClick: () => toggleVolume("gameVolume"),
            type: "game"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingSlider$1,
      {
        title: t("COMMON.DEALERS_VOICE"),
        value: dealerVolume,
        sliderProps: { intervalCount: isSmallDevice ? 30 : 39 },
        onChange: (val) => volumeChange("dealerVolume", val),
        prefixElement: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SoundButton$1,
          {
            level: dealerVolume,
            onClick: () => toggleVolume("dealerVolume"),
            type: "dealer"
          }
        )
      }
    )
  ] });
}
const Audio$1 = reactExports.memo(Audio);
function SettingLink(props) {
  const { title, value, onClick } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "row cursor-pointer",
      onClick: () => {
        onClick();
        playSound(["click"]);
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "g-text-golden pr-[0.1rem] pt-[0.1rem] text-xs tracking-[.045rem]", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.RightGolden, { className: "w-4" })
        ] })
      ]
    }
  );
}
const SettingLink$1 = reactExports.memo(SettingLink);
function MultiCheckInput(props) {
  var _a;
  const { currentValue, placeholder, filters, onUpdate, modalType } = props;
  const [value, setValue] = reactExports.useState(currentValue);
  const [inputStatus, setInputStatus] = reactExports.useState();
  const inputRef = reactExports.useRef(null);
  const isVirtualKeyboardOpened = useLayoutStore((state) => state.isVirtualKeyboardOpened);
  const rootEmFontSize = useLayoutStore((state) => state.rootEmFontSize);
  useVirtualKeyboardOpened(inputRef);
  reactExports.useEffect(() => {
    if (!modalType) return;
    const modalElement = document.querySelector('[data-modal-type="'.concat(modalType, '"]'));
    const scrollWrapElement = (modalElement == null ? void 0 : modalElement.querySelector(".scrollWrap")) || null;
    if (!scrollWrapElement) return;
    if (inputRef.current && isVirtualKeyboardOpened) {
      scrollWrapElement == null ? void 0 : scrollWrapElement.scrollTo(0, 7.4 * rootEmFontSize);
    }
    if (!isVirtualKeyboardOpened) {
      scrollWrapElement == null ? void 0 : scrollWrapElement.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isVirtualKeyboardOpened, modalType, rootEmFontSize]);
  const filterCheck = reactExports.useCallback(
    (text) => {
      if (!filters) return;
      for (const { filter, errorMessage } of filters) {
        const checkPassed = typeof filter === "function" ? filter(text) : filter.test(text);
        if (!checkPassed) {
          return errorMessage;
        }
      }
    },
    [filters]
  );
  const onInputChange = (ev) => {
    const text = ev.target.value;
    const errorMessage = filterCheck(text);
    if (errorMessage) setInputStatus({ status: "error", message: errorMessage });
    else setInputStatus(void 0);
    setValue(text);
  };
  const updateBtnClick = async () => {
    if (!onUpdate) return;
    const errorMessage = filterCheck(value);
    if (errorMessage) {
      setInputStatus({ status: "error", message: errorMessage });
      return;
    }
    const result = isPromise(onUpdate) ? await onUpdate(value) : onUpdate(value);
    const status = result.success ? "success" : "error";
    const message = result.message || "";
    setInputStatus({ status, message });
  };
  const hasContent = value.length > 0;
  const hasError = (inputStatus == null ? void 0 : inputStatus.status) === "error";
  const isSuccess = (inputStatus == null ? void 0 : inputStatus.status) === "success";
  const valueChanged = value !== currentValue;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "MultiCheckInput",
      className: "w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "input-container",
              hasContent ? "has-content" : "",
              hasError ? "error-border" : isSuccess ? "success-border" : "default-border"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "",
                  ref: inputRef,
                  className: "bg-transparent",
                  value,
                  onChange: onInputChange
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("placeholder", (_a = inputStatus == null ? void 0 : inputStatus.status) != null ? _a : "golden"), children: placeholder }),
              valueChanged && !hasError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Icon.SuccessCircleButton,
                {
                  className: "absolute right-[0.3rem] w-[2.5rem] cursor-pointer",
                  onClick: updateBtnClick
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.SuccessCircleDisabledButton, { className: "absolute right-[0.3rem] w-[2.5rem] cursor-not-allowed" })
            ]
          }
        ),
        inputStatus && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("message", inputStatus.status), children: inputStatus.message })
      ]
    }
  );
}
const MultiCheckInput$1 = reactExports.memo(MultiCheckInput);
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}
function SettingInput() {
  const screenName = useSettingStore((s) => s.screenName);
  const { t } = useTranslation();
  const filters = [
    {
      // Rules (FND-481):
      // Allowing all characters. No mater what language. (Unicode accepted)
      // Numbers allowed (0-9)
      // Some symbols allowed: underscore (_) and period (.)
      // No spaces allowed
      // Cannot start or end with a period
      // Cannot have consecutive periods
      filter: /^(?!.*\.\.)(?!.*\.$)(?!^\.)[\p{L}\p{N}_.]*$/u,
      errorMessage: t("COMMON.ERROR_SYMBOLS")
    },
    { filter: /^.{3,}$/, errorMessage: t("COMMON.ERROR_MIN_3") },
    { filter: /^.{0,20}$/, errorMessage: t("COMMON.ERROR_MAX_20") }
  ];
  const onUpdate = (val) => {
    var _a;
    useSettingStore.setState({ screenName: val });
    (_a = connectIns) == null ? void 0 : _a.rename(val);
    return { success: true, message: t("COMMON.SCREEN_NAME_UPDATED") };
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    MultiCheckInput$1,
    {
      currentValue: screenName,
      placeholder: t("COMMON.SCREEN_NAME"),
      filters,
      onUpdate,
      modalType: "setting"
    }
  ) });
}
const SettingInput$1 = reactExports.memo(SettingInput);
function TabSwitch(props) {
  const { list, activeTab, onClick } = props;
  const { wrapperClass, tabsBtnContainerClass, tabContainerClass, textClass } = props;
  const [tabPositionX, setTabPositionX] = reactExports.useState(0);
  const [tabWidth, setTabWidth] = reactExports.useState(0);
  const [firstTimeRender, setFirstTimeRender] = reactExports.useState(true);
  const rootEmFontSize = useLayoutStore((s) => s.rootEmFontSize);
  reactExports.useLayoutEffect(() => {
    const targetTab = document.getElementById("qualityTab-".concat(String(activeTab)));
    const baseTab = document.getElementById("qualityTab-".concat(String(list[0].id)));
    if (!targetTab || !baseTab) return;
    setTabPositionX(targetTab.getBoundingClientRect().x - baseTab.getBoundingClientRect().x);
    setTabWidth(targetTab.getBoundingClientRect().width);
  }, [activeTab, list, rootEmFontSize]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: wrapperClass, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tabsBtnContainer", tabsBtnContainerClass), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tabs p-1", children: [
    list.map(({ id, label, disabled }) => {
      const active = activeTab === id;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ClickableArea$1,
        {
          wrapClassName: "w-full h-full",
          className: "z-[2] h-[125%] w-full",
          onClick: () => {
            playSound(["click"]);
            onClick(id);
            setFirstTimeRender(false);
          },
          id: "qualityTab-".concat(String(id)),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tabContainer", "h-[1.74rem]", tabContainerClass, { active, disabled }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("tab", "ml-[0.1rem] mt-[0.1rem] text-[.875rem]", textClass), children: label }) })
        },
        String(id)
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn("activeTabBackground", { firstTimeRender }),
        style: { width: "".concat(tabWidth + 1, "px"), transform: "translateX(".concat(tabPositionX, "px)") },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("container", "h-[1.74rem]", tabContainerClass), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("background text-[.875rem]") }) })
      }
    )
  ] }) }) });
}
const TabSwitch$1 = reactExports.memo(TabSwitch);
function VideoTabs() {
  const activeTab = useSettingStore((state) => state.videoQuality);
  const onTabClick = (tab) => useSettingStore.setState({ videoQuality: tab });
  const { t } = useTranslation();
  const tabList = [
    { id: "AUTO", label: t("COMMON.VIDEO_AUTO") },
    { id: 0, label: t("COMMON.VIDEO_LOW") },
    { id: 1, label: t("COMMON.VIDEO_MEDIUM") },
    { id: 2, label: t("COMMON.VIDEO_HIGH") },
    { id: 3, label: t("COMMON.VIDEO_HD") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TabSwitch$1,
    {
      list: tabList,
      activeTab,
      onClick: onTabClick,
      wrapperClass: "pb-4",
      tabContainerClass: "h-[2.25rem]"
    }
  );
}
const VideoTabs$1 = reactExports.memo(VideoTabs);
function Catalog(props) {
  const { title, item, list } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "g-subTitle-2 mb-2 ml-2 mt-1", children: title }),
    list ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list mb-6", children: item }) : item
  ] });
}
function Setting(props) {
  const { gameSpecificsElement } = props;
  const { otherMessagesEnable, toggleOtherMessages } = useSettingStore((s) => ({
    otherMessagesEnable: s.otherMessagesEnable,
    toggleOtherMessages: s.toggleOtherMessages
  }));
  const openDesktopModal = useLayoutStore((state) => state.openDesktopModal);
  const { t, i18n } = useTranslation();
  const selectedLanguageDisplay = reactExports.useMemo(
    () => {
      var _a;
      return ((_a = LANGUAGES.find((item) => {
        var _a2;
        return item.code === ((_a2 = i18n.resolvedLanguage) != null ? _a2 : i18n.language);
      })) == null ? void 0 : _a.name) || LANGUAGES[0].name;
    },
    [i18n.resolvedLanguage, i18n.language]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "setting",
      className: cn("px-4 pt-2", {
        "mt-[-0.275rem]": !isMobileDevice
      }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Catalog,
          {
            title: t("COMMON.VIDEO"),
            item: /* @__PURE__ */ jsxRuntimeExports.jsx(VideoTabs$1, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Catalog,
          {
            list: true,
            title: t("COMMON.GENERAL"),
            item: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SettingToggle$1,
                {
                  title: t("COMMON.PLAYER_MESSAGES"),
                  description: t("COMMON.PLAYER_MESSAGES_TIP"),
                  checked: otherMessagesEnable,
                  onChange: toggleOtherMessages
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SettingInput$1, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SettingLink$1,
                {
                  title: t("COMMON.LANGUAGE"),
                  value: selectedLanguageDisplay.toUpperCase(),
                  onClick: () => {
                    if (isMobileDevice) {
                      useLayoutStore.setState({ menuPage: "language" });
                    } else {
                      openDesktopModal("language");
                    }
                    scrollWrapToTop("language");
                  }
                }
              )
            ] })
          }
        ),
        gameSpecificsElement,
        isMobileDevice && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Catalog,
          {
            list: true,
            title: t("COMMON.SOUND"),
            item: /* @__PURE__ */ jsxRuntimeExports.jsx(Audio$1, {})
          }
        )
      ]
    }
  );
}
const Setting$1 = reactExports.memo(Setting);
function SettingLanguage() {
  const { i18n } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list selectList mx-4 mb-4 mt-3", children: LANGUAGES.map((item) => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn({ checked: item.code === ((_a = i18n.resolvedLanguage) != null ? _a : i18n.language) }, "row cursor-pointer hover:brightness-125"),
        onClick: () => {
          playSound(["click"]);
          changeLanguage(item.code);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text", children: item.display }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.CheckMark, { className: "checkMark" })
        ]
      },
      item.code
    );
  }) });
}
const SettingLanguage$1 = reactExports.memo(SettingLanguage);
const NotificationHint = ({ className }) => {
  const supportChatUnread = useChatStore((s) => s.supportChatUnread);
  return supportChatUnread > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("notificationHint pointer-events-none ".concat(isMobileDevice ? "border-[#191b1b]" : "border-[#020301]"), className), children: supportChatUnread > 9 ? "9+" : supportChatUnread }) : null;
};
const statisticTabs = ["hotCold", "last500", "advanced"];
const statisticSubTabs = ["grid", "racetrack"];
const useStatisticStore = create()(
  subscribeWithSelector(
    persist(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (set) => ({
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
      }),
      {
        name: "useStatisticStore",
        storage: createJSONStorage(() => localStorage),
        onRehydrateStorage: () => (state) => {
          if (!state) return;
          const { activeTab = "last500", activeBoard = "grid" } = state;
          if (!statisticTabs.includes(activeTab)) {
            state.activeTab = "last500";
          }
          if (!statisticSubTabs.includes(activeBoard)) {
            state.activeBoard = "grid";
          }
        }
      }
    )
  )
);
const useWinNumberStore$2 = getWinNumberStore();
const useStatisticAdvanced = () => {
  reactExports.useEffect(() => {
    const calculateAdvancedMap = () => {
      const { numberOfRounds } = useStatisticStore.getState();
      const { history } = useWinNumberStore$2.getState();
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
      displayHistory.forEach((str) => {
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
    const unsubRounds = useStatisticStore.subscribe(
      (state) => state.numberOfRounds,
      () => calculateAdvancedMap()
    );
    const unsubHistory = useWinNumberStore$2.subscribe((state) => {
      if (state.history) calculateAdvancedMap();
    });
    calculateAdvancedMap();
    return () => {
      unsubRounds();
      unsubHistory();
    };
  }, []);
};
const Unit$1 = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("unit", props.className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: props.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "num", children: [
      props.num,
      "%"
    ] })
  ] });
};
function StatisticsGrid(props) {
  const advancedMap = useStatisticStore((s) => s.advancedMap);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion$1.div,
    {
      className: cn("absolute bottom-0 flex flex-col justify-end", props.className),
      animate: props.active ? "open" : "closed",
      initial: "closed",
      variants: {
        closed: { opacity: 0 },
        open: { opacity: 1 }
      },
      transition: { duration: 0.3 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Image,
          {
            src: Bg,
            alt: "Grid background"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "1st",
            num: advancedMap[BetTypeEnum.DOZEN_1],
            className: "left-[4.37rem] top-[0.3rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "2nd",
            num: advancedMap[BetTypeEnum.DOZEN_13],
            className: "right-[9.05rem] top-[0.3rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "3rd",
            num: advancedMap[BetTypeEnum.DOZEN_25],
            className: "right-[4.35rem] top-[0.3rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "Zero",
            num: advancedMap[BetTypeEnum.STRAIGHT_UP_0],
            className: "left-[0.4rem] top-[5.1rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "Red",
            num: advancedMap[BetTypeEnum.RED],
            className: "xl left-[5.6rem] top-[5.03rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "Black",
            num: advancedMap[BetTypeEnum.BLACK],
            className: "xl right-[5.55rem] top-[5.03rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "1 - 18",
            num: advancedMap[BetTypeEnum.LOW],
            className: "bottom-[0.45rem] left-[3.8rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "19 - 36",
            num: advancedMap[BetTypeEnum.HIGH],
            className: "bottom-[0.45rem] left-[7.3rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "Odd",
            num: advancedMap[BetTypeEnum.ODD],
            className: "bottom-[0.45rem] right-[7.3rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "Even",
            num: advancedMap[BetTypeEnum.EVEN],
            className: "bottom-[0.45rem] right-[3.8rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "3rd",
            num: advancedMap[BetTypeEnum.COLUMN_3],
            className: "right-[0.4rem] top-[2.75rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "2nd",
            num: advancedMap[BetTypeEnum.COLUMN_2],
            className: "right-[0.4rem] top-[5.2rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit$1,
          {
            title: "1st",
            num: advancedMap[BetTypeEnum.COLUMN_1],
            className: "right-[0.4rem] top-[7.6rem]"
          }
        )
      ] })
    }
  );
}
const Unit = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("unit", props.className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: props.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "num", children: [
      props.num,
      "%"
    ] })
  ] });
};
function StatisticsRacetrack(props) {
  const advancedMap = useStatisticStore((s) => s.advancedMap);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion$1.div,
    {
      className: cn("absolute bottom-5", props.className),
      animate: props.active ? "open" : "closed",
      initial: "closed",
      variants: {
        closed: { opacity: 0 },
        open: { opacity: 1 }
      },
      transition: { duration: 0.3 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "statisticRacetrack relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Image,
          {
            src: Bg$1,
            alt: "Race track background"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit,
          {
            title: "Red",
            num: advancedMap[BetTypeEnum.RED],
            className: "left-[0.27rem] top-[3.95rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit,
          {
            title: "Odd",
            num: advancedMap[BetTypeEnum.ODD],
            className: "left-[6.7rem] top-[0.3rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit,
          {
            title: "Even",
            num: advancedMap[BetTypeEnum.EVEN],
            className: "right-[6.45rem] top-[0.3rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit,
          {
            title: "Black",
            num: advancedMap[BetTypeEnum.BLACK],
            className: "right-[0.24rem] top-[3.95rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit,
          {
            title: "Tiers",
            num: advancedMap[BetTypeEnum.TIER],
            className: "left-[4.2rem] top-[3.97rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit,
          {
            title: "Orph",
            num: advancedMap[BetTypeEnum.ORPH],
            className: "left-[7.9rem] top-[3.97rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit,
          {
            title: "Vois",
            num: advancedMap[BetTypeEnum.VOISINS],
            className: "right-[6.8rem] top-[3.97rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit,
          {
            title: "Zero",
            num: advancedMap[BetTypeEnum.ZERO],
            className: "right-[3.75rem] top-[3.97rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit,
          {
            title: "1 - 18",
            num: advancedMap[BetTypeEnum.LOW],
            className: "bottom-[0.25rem] left-[6.65rem]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Unit,
          {
            title: "19 - 36",
            num: advancedMap[BetTypeEnum.HIGH],
            className: "bottom-[0.25rem] right-[6.5rem]"
          }
        )
      ] })
    }
  );
}
const StatisticAdvanced = () => {
  const activeBoard = useStatisticStore((state) => state.activeBoard);
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const { t } = useTranslation();
  const tabList = [
    { id: "grid", label: t("COMMON.BETTING_GRID") },
    { id: "racetrack", label: t("COMMON.RACETRACK") }
  ];
  useStatisticAdvanced();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "StatisticAdvanced",
      className: cn({
        "center pb-[2.2rem] pl-[0.1rem]": isMobileDevice,
        "mt-10": isSmallDevice
      }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn("relative mt-10 h-[12.25rem] w-[20.56rem]", {
              "mt-[8rem] scale-[.81]": isSmallDevice
            }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatisticsGrid, { active: activeBoard === "grid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatisticsRacetrack, { active: activeBoard === "racetrack" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabSwitch$1,
          {
            list: tabList,
            activeTab: activeBoard,
            onClick: (tab) => useStatisticStore.setState({ activeBoard: tab }),
            tabsBtnContainerClass: cn("mx-auto mt-[1rem] w-[11.375rem] mb-2", {
              "-mb-1": isMobileDevice,
              "mb-5": isSmallDevice
            }),
            textClass: "text-xs"
          }
        )
      ]
    }
  );
};
const centerPos = { x: 112.8, y: 126.2 };
const dotL = { x: 104, y: 32 };
const dotR = { x: 120, y: 32 };
function PolarChart({ mapping, hotArr, coldArr }) {
  const renderList = mapToNineStep(mapping);
  const colorType = (result, type) => {
    const color = hotArr.includes(result) ? "red" : coldArr.includes(result) ? "blue" : "gray";
    if (type === "inner" && color === "gray") return "#F9F9F930";
    return "url(#PolarChart_".concat(type, "_").concat(color, ")");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 size-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 226 251",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "size-full",
      children: [
        renderList.map((ele, index2) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "g",
            {
              style: { transformOrigin: "".concat(centerPos.x, "px ").concat(centerPos.y, "px") },
              transform: "rotate(".concat(9.74 * index2, ")"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: convertToPath(ele.step),
                    fill: colorType(ele.result, "inner"),
                    className: "opacity-60"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: convertToPath(ele.step),
                    stroke: colorType(ele.result, "stroke"),
                    strokeWidth: "0.5"
                  }
                )
              ]
            },
            index2
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SVGColor, {})
      ]
    }
  ) });
}
function mapToNineStep(mapping) {
  const numArr = mapping.map(([, value]) => value);
  const min = Math.min(...numArr);
  const max = Math.max(...numArr);
  const range = (max - min) / 9;
  return mapping.map(([result, count2]) => {
    let step = Math.floor((count2 - min) / range) + 1;
    if (step > 9) step = 9;
    return { result, count: count2, step };
  });
}
const convertToPath = (result) => {
  const percent = result / 9 * 0.6 + 0.3;
  const _dotL = {
    x: centerPos.x + (dotL.x - centerPos.x) * percent,
    y: centerPos.y + (dotL.y - centerPos.y) * percent
  };
  const _dotR = {
    x: centerPos.x + (dotR.x - centerPos.x) * percent,
    y: centerPos.y + (dotR.y - centerPos.y) * percent
  };
  return "M".concat(centerPos.x, " ").concat(centerPos.y, "L").concat(_dotL.x, " ").concat(_dotL.y, "L").concat(_dotR.x, " ").concat(_dotR.y, "Z");
};
const SVGColor = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "linearGradient",
    {
      id: "PolarChart_inner_red",
      gradientUnits: "userSpaceOnUse",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#B02525" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "stop",
          {
            offset: "1",
            stopColor: "#D94747"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "linearGradient",
    {
      id: "PolarChart_inner_blue",
      gradientUnits: "userSpaceOnUse",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#4E6EB4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "stop",
          {
            offset: "1",
            stopColor: "#6B86C0"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "linearGradient",
    {
      id: "PolarChart_stroke_red",
      gradientUnits: "userSpaceOnUse",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#D94747" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "stop",
          {
            offset: "1",
            stopColor: "#E58484"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "linearGradient",
    {
      id: "PolarChart_stroke_gray",
      gradientUnits: "userSpaceOnUse",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "stop",
          {
            stopColor: "#555555",
            stopOpacity: "0.2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "stop",
          {
            offset: "1",
            stopColor: "#B0B0B0",
            stopOpacity: "0.2"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "linearGradient",
    {
      id: "PolarChart_stroke_blue",
      gradientUnits: "userSpaceOnUse",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#4E6EB4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "stop",
          {
            offset: "1",
            stopColor: "#4E6EB4"
          }
        )
      ]
    }
  )
] });
const useWinNumberStore$1 = getWinNumberStore();
const calcTotal = (history, count2) => {
  const mapping = new Map(RACE_ORDER.map((num) => [num, 0]));
  history.slice(-count2).forEach((str) => {
    const num = Number(str);
    mapping.set(num, mapping.get(num) + 1);
  });
  return Array.from(mapping.entries());
};
const StatisticHotCold = () => {
  const history = useWinNumberStore$1((state) => state.history);
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const numberOfRounds = useStatisticStore((state) => state.numberOfRounds);
  const mapping = calcTotal(history, numberOfRounds);
  const sorted = [...mapping].sort((a, b) => b[1] - a[1]).map((arr) => arr[0]);
  const hotArr = sorted.slice(0, 5);
  const coldArr = sorted.slice(-5).reverse();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "StatisticHotCold",
      className: "center mr-[0.2rem] flex h-full gap-4 pb-[1.9rem] pt-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center resultCol flex-col gap-[0.6rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "center relative h-[1.75rem] w-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Hot, { className: "w-5" }) }),
          hotArr.map((bet, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn("bet", getBetColor(bet)),
              children: bet
            },
            idx
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[13.4rem] w-[13.6rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Image,
            {
              src: radial,
              className: cn("mt-[-6%] w-[106%] max-w-none", isSmallDevice && "mt-[6%]"),
              alt: "Radial Background"
            }
          ),
          history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            PolarChart,
            {
              mapping,
              hotArr,
              coldArr
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Image,
            {
              src: polarCenter,
              className: cn("absolute left-[41.3%] top-[41.3%] w-[2.3rem]", isSmallDevice && "left-[39%]"),
              alt: "Polar Center"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center resultCol typeCold flex-col gap-[0.6rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "center relative h-[1.75rem] w-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Cold, { className: "w-5" }) }),
          coldArr.map((bet, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn("bet", getBetColor(bet)),
              children: bet
            },
            idx
          ))
        ] })
      ]
    }
  );
};
const useWinNumberStore = getWinNumberStore();
const StatisticLast500 = () => {
  const history = useWinNumberStore((state) => state.history);
  const numberOfRounds = useStatisticStore((state) => state.numberOfRounds);
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const itemsPerRow = isSmallDevice ? 6 : 8;
  const containerWidth = "calc(".concat(itemsPerRow, " * 1.875rem + ").concat(itemsPerRow - 1, " * 0.75rem)");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "StatisticLast500",
      className: cn("center pb-[11.25rem] pt-2", {
        "pt-3": isMobileDevice
      }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex max-w-full flex-wrap gap-3",
          style: { width: containerWidth },
          children: [...history].reverse().slice(0, numberOfRounds).map((bet, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn("bet", getBetColor(bet)),
              children: bet
            },
            idx
          ))
        }
      )
    }
  );
};
const Statistic = () => {
  const activeTab = useStatisticStore((state) => state.activeTab);
  const scrollWrapRef = reactExports.useRef(null);
  usePreventPullToRefresh(scrollWrapRef);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: scrollWrapRef,
      id: "Statistic",
      className: "scrollWrap mx-auto h-full w-full px-[0.875rem]",
      children: [
        activeTab === "hotCold" && /* @__PURE__ */ jsxRuntimeExports.jsx(StatisticHotCold, {}),
        activeTab === "last500" && /* @__PURE__ */ jsxRuntimeExports.jsx(StatisticLast500, {}),
        activeTab === "advanced" && /* @__PURE__ */ jsxRuntimeExports.jsx(StatisticAdvanced, {})
      ]
    }
  );
};
const StatisticFooter = () => {
  const { t } = useTranslation();
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const { activeTab, numberOfRounds } = useStatisticStore((state) => state);
  const tabList = [
    { id: "hotCold", label: t("COMMON.HOT_COLD") },
    { id: "last500", label: t("COMMON.LAST_500") },
    { id: "advanced", label: t("COMMON.ADVANCED") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn("mt-6 px-4", {
        "mt-2": activeTab === "advanced"
      }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "NumberOfRounds",
            className: "".concat(isMobileDevice && !isSmallDevice && "px-4"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col justify-between gap-[0.9rem]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("ROULETTE.NUMBER_OF_ROUNDS") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: numberOfRounds })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slider", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SliderBar$1,
                {
                  value: numberOfRounds,
                  min: 50,
                  max: 500,
                  step: 10,
                  intervalCount: isMobileDevice ? isSmallDevice ? 42 : 46 : 50,
                  onChange: (val) => {
                    useStatisticStore.setState({ numberOfRounds: val });
                  }
                }
              ) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabSwitch$1,
          {
            list: tabList,
            activeTab,
            onClick: (tab) => useStatisticStore.setState({ activeTab: tab }),
            wrapperClass: "pb-4 pt-6",
            tabContainerClass: "h-[2.25rem] pb-[0.2rem] mx-[0.1rem]"
          }
        )
      ]
    }
  );
};
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
function RouletteMask({ isLoading = false, virtualBackground: virtualBackground2 }) {
  const isVisible = useVisibility();
  const shouldMask = !isLoading && isVisible;
  const maskedBackgroundStyle = {
    backgroundImage: "url(".concat(virtualBackground2, ")"),
    maskImage: "url(".concat(maskBg, "), linear-gradient(black, black)"),
    opacity: shouldMask ? 1 : 0
  };
  const fullBackgroundStyle = {
    backgroundImage: "url(".concat(virtualBackground2, ")"),
    opacity: shouldMask ? 0 : 1,
    transition: shouldMask ? "opacity 0.3s ease-in-out" : "none"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn("rouletteMask", { isMobileDevice }),
        style: maskedBackgroundStyle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn("rouletteMask rouletteMask--full", { isMobileDevice }),
        style: fullBackgroundStyle
      }
    )
  ] });
}
function SpinnerSVG({ className = "" }) {
  const [rotation, setRotation] = reactExports.useState(0);
  const totalTicks = 8;
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 2) % totalTicks);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  const getOpacity = (index2) => {
    const relativePosition = (totalTicks + index2 - rotation) % totalTicks;
    if (relativePosition === 0)
      return 1;
    else if (relativePosition === 1) return 0.9;
    else if (relativePosition === 2) return 0.7;
    else if (relativePosition === 3) return 0.3;
    else if (relativePosition === 4) return 0.1;
    else if (relativePosition === 5) return 0.3;
    else if (relativePosition === 6) return 0.7;
    else return 0.9;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      id: "Spinner",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 40 40",
      fill: "none",
      className: "h-full w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "g",
          {
            clipPath: "url(#paint0_angular_17832_33472_clip_path)",
            "data-figma-skip-parse": "true",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "matrix(7.62072e-10 0.0135 0.0135 -1.10556e-09 20.001 19.9995)", children: reactExports.createElement(
              "foreignObject",
              { x: "-1555.63", y: "-1555.63", width: "3111.26", height: "3111.26" },
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    height: "100%",
                    width: "100%",
                    opacity: 1
                  }
                }
              )
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.0645 1.93548C18.0645 0.866942 18.9314 0 19.9999 0C21.0685 0 21.9354 0.866942 21.9354 1.93548V7.09677C21.9354 8.16532 21.0685 9.03226 19.9999 9.03226C18.9314 9.03226 18.0645 8.16533 18.0645 7.09677V1.93548Z",
            fill: "#eadfd2",
            style: {
              opacity: getOpacity(0),
              transition: "opacity 1s ease-in-out"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M29.123 12.8112C29.6182 12.8112 30.1134 12.6222 30.4914 12.2441L34.1406 8.59494C34.8967 7.83889 34.8967 6.61409 34.1406 5.85805C33.3846 5.10201 32.1598 5.102 31.4037 5.85805L27.7545 9.50725C26.9985 10.2633 26.9985 11.4881 27.7545 12.2441C28.1326 12.6222 28.6278 12.8112 29.123 12.8112Z",
            fill: "#eadfd2",
            style: {
              opacity: getOpacity(1),
              transition: "opacity 1s ease-in-out"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M32.9023 18.0645H38.0636C39.1321 18.0645 39.9991 18.9314 39.9991 19.9999C39.9991 21.0685 39.1321 21.9354 38.0636 21.9354H32.9023C31.8337 21.9354 30.9668 21.0685 30.9668 19.9999C30.9668 18.9314 31.8337 18.0645 32.9023 18.0645Z",
            fill: "#eadfd2",
            style: {
              opacity: getOpacity(2),
              transition: "opacity 1s ease-in-out"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M30.4914 27.756C29.7354 27 28.5106 27 27.7545 27.756C26.9985 28.5121 26.9985 29.7369 27.7545 30.4929L31.4037 34.1421C31.7818 34.5201 32.277 34.7091 32.7722 34.7091C33.2674 34.7091 33.7626 34.5201 34.1406 34.1421C34.8967 33.386 34.8967 32.1612 34.1406 31.4052L30.4914 27.756Z",
            fill: "#eadfd2",
            style: {
              opacity: getOpacity(3),
              transition: "opacity 1s ease-in-out"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.0645 32.9037C18.0645 31.8352 18.9314 30.9683 19.9999 30.9683C21.0685 30.9683 21.9354 31.8352 21.9354 32.9037V38.065C21.9354 39.1336 21.0685 40.0005 19.9999 40.0005C18.9314 40.0005 18.0645 39.1336 18.0645 38.065V32.9037Z",
            fill: "#eadfd2",
            style: {
              opacity: getOpacity(4),
              transition: "opacity 1s ease-in-out"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.50725 27.756L5.85805 31.4052C5.102 32.1613 5.102 33.3861 5.85805 34.1421C6.23608 34.5201 6.73129 34.7091 7.22651 34.7091C7.72172 34.7091 8.21693 34.5201 8.59496 34.1421L12.2442 30.4929C13.0002 29.7368 13.0002 28.512 12.2442 27.756C11.4881 27 10.2633 26.9999 9.50725 27.756Z",
            fill: "#eadfd2",
            style: {
              opacity: getOpacity(5),
              transition: "opacity 1s ease-in-out"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.09677 18.0645C8.16532 18.0645 9.03226 18.9314 9.03226 19.9999C9.03226 21.0685 8.16533 21.9354 7.09677 21.9354H1.93548C0.866942 21.9354 0 21.0685 0 19.9999C0 18.9314 0.866929 18.0645 1.93548 18.0645H7.09677Z",
            fill: "#eadfd2",
            style: {
              opacity: getOpacity(6),
              transition: "opacity 1s ease-in-out"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.21756 12.2441C9.59558 12.6222 10.0908 12.8112 10.586 12.8112C11.0812 12.8112 11.5764 12.6222 11.9544 12.2441C12.7105 11.4881 12.7105 10.2633 11.9544 9.50725L8.30524 5.85805C7.54921 5.102 6.32441 5.10201 5.56835 5.85805C4.8123 6.61409 4.8123 7.83889 5.56835 8.59494L9.21756 12.2441Z",
            fill: "#eadfd2",
            style: {
              opacity: getOpacity(7),
              transition: "opacity 1s ease-in-out"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "paint0_angular_17832_33472_clip_path", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.0645 1.93548C18.0645 0.866942 18.9314 0 19.9999 0C21.0685 0 21.9354 0.866942 21.9354 1.93548V7.09677C21.9354 8.16532 21.0685 9.03226 19.9999 9.03226C18.9314 9.03226 18.0645 8.16533 18.0645 7.09677V1.93548ZM7.09677 18.0645C8.16532 18.0645 9.03226 18.9314 9.03226 19.9999C9.03226 21.0685 8.16533 21.9354 7.09677 21.9354H1.93548C0.866942 21.9354 0 21.0685 0 19.9999C0 18.9314 0.866929 18.0645 1.93548 18.0645H7.09677ZM9.50725 27.756L5.85805 31.4052C5.102 32.1613 5.102 33.3861 5.85805 34.1421C6.23608 34.5201 6.73129 34.7091 7.22651 34.7091C7.72172 34.7091 8.21693 34.5201 8.59496 34.1421L12.2442 30.4929C13.0002 29.7368 13.0002 28.512 12.2442 27.756C11.4881 27 10.2633 26.9999 9.50725 27.756ZM18.0645 32.9037C18.0645 31.8352 18.9314 30.9683 19.9999 30.9683C21.0685 30.9683 21.9354 31.8352 21.9354 32.9037V38.065C21.9354 39.1336 21.0685 40.0005 19.9999 40.0005C18.9314 40.0005 18.0645 39.1336 18.0645 38.065V32.9037ZM30.4914 27.756C29.7354 27 28.5106 27 27.7545 27.756C26.9985 28.5121 26.9985 29.7369 27.7545 30.4929L31.4037 34.1421C31.7818 34.5201 32.277 34.7091 32.7722 34.7091C33.2674 34.7091 33.7626 34.5201 34.1406 34.1421C34.8967 33.386 34.8967 32.1612 34.1406 31.4052L30.4914 27.756ZM32.9023 18.0645H38.0636C39.1321 18.0645 39.9991 18.9314 39.9991 19.9999C39.9991 21.0685 39.1321 21.9354 38.0636 21.9354H32.9023C31.8337 21.9354 30.9668 21.0685 30.9668 19.9999C30.9668 18.9314 31.8337 18.0645 32.9023 18.0645ZM29.123 12.8112C29.6182 12.8112 30.1134 12.6222 30.4914 12.2441L34.1406 8.59494C34.8967 7.83889 34.8967 6.61409 34.1406 5.85805C33.3846 5.10201 32.1598 5.102 31.4037 5.85805L27.7545 9.50725C26.9985 10.2633 26.9985 11.4881 27.7545 12.2441C28.1326 12.6222 28.6278 12.8112 29.123 12.8112ZM9.21756 12.2441C9.59558 12.6222 10.0908 12.8112 10.586 12.8112C11.0812 12.8112 11.5764 12.6222 11.9544 12.2441C12.7105 11.4881 12.7105 10.2633 11.9544 9.50725L8.30524 5.85805C7.54921 5.102 6.32441 5.10201 5.56835 5.85805C4.8123 6.61409 4.8123 7.83889 5.56835 8.59494L9.21756 12.2441Z"
          }
        ) }) })
      ]
    }
  ) });
}
const QUALITIES = ["lo", "me", "hi", "hd"];
const initPlayerInstance = (videoEl) => {
  const { origin, pathname } = window.location;
  const options = {
    wasmBaseUrl: "".concat(origin).concat(pathname, "libmedia/wasm"),
    container: videoEl,
    isLive: true
  };
  return IKGPlayerFactory.create("libmedia", options);
};
var PlayerStatus = /* @__PURE__ */ ((PlayerStatus2) => {
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
var PlayerEventType = /* @__PURE__ */ ((PlayerEventType2) => {
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
  const streams = useConfigStore((s) => s.streams);
  const isVisible = useVisibility();
  const { settingQuality, studioVolume, masterVolume } = useSettingStore((s) => ({
    settingQuality: s.videoQuality,
    studioVolume: s.studioVolume,
    masterVolume: s.masterVolume
  }));
  const { isIdleTimeout, isExpired, isMultiSession } = useNetworkStore((state) => ({
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
  const stateRefs = reactExports.useRef({ isVisible, isIdleTimeout, isMultiSession, isExpired, streamQuality });
  reactExports.useEffect(() => {
    stateRefs.current = { isVisible, isIdleTimeout, isMultiSession, isExpired, streamQuality };
  }, [isVisible, isIdleTimeout, isMultiSession, isExpired, streamQuality]);
  const calculateVolume = reactExports.useCallback(
    () => studioVolume * masterVolume * playbackSettings.volumeMultiplier,
    [studioVolume, masterVolume, playbackSettings.volumeMultiplier]
  );
  const getStreamUrl = () => {
    var _a, _b;
    const streamKey = QUALITIES[stateRefs.current.streamQuality];
    return (_b = (_a = streams == null ? void 0 : streams.primary) == null ? void 0 : _a[streamKey]) != null ? _b : "";
  };
  const getPlayerStatus = () => {
    var _a;
    return (_a = player.current) == null ? void 0 : _a.getStatus();
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
      onStop == null ? void 0 : onStop();
    } catch (error) {
      console.error("Error stopping video:", error);
    } finally {
      player.current = null;
    }
  };
  const resizePlayer = reactExports.useCallback(() => {
    if (!videoEl || !player.current) return;
    const { width, height } = videoEl.getBoundingClientRect();
    player.current.resize(width, height);
  }, [videoEl]);
  const setRenderMode = (mode) => {
    if (player.current) player.current.setRenderMode(mode);
  };
  const mutePlayers = () => {
    if (player.current) player.current.setVolume(0);
  };
  const resumeAndSetVolume = async (p) => {
    if (!p) return;
    await (p == null ? void 0 : p.resume());
    p.setVolume(calculateVolume());
  };
  const stopAndDestroy = async (p) => {
    if (!p) return;
    await (p == null ? void 0 : p.stop());
    await (p == null ? void 0 : p.destroy());
  };
  const regQualityModeCallback = (p) => {
    p.on("qualitymode", (ev) => {
      const isAuto = settingQuality === "AUTO";
      if (!isAuto || !isPlaying()) return;
      const streamQuality2 = stateRefs.current.streamQuality;
      console.debug("qualitymode callback", streamQuality2, ev);
      const { type } = ev;
      const newQuality = stateRefs.current.streamQuality + (type === "up" ? 1 : -1);
      console.debug("qualitymode callback setting streamQuality to", newQuality);
      setStreamQuality(newQuality);
    });
    p.configQualityMode(stateRefs.current.streamQuality, QUALITIES.length);
    console.debug("Player registered quality mode callback");
  };
  const registerPlayerCallbacks = (p) => {
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
      const onError2 = (error) => {
        console.debug("Error in player:", error);
        cleanup();
        reject(error);
      };
      p.on(PlayerEventType.FIRST_VIDEO_RENDERED, onFirstFrame);
      p.on(PlayerEventType.ERROR, onError2);
      timeoutId = setTimeout(() => reject(new Error("First frame timeout")), timeoutMs);
      p == null ? void 0 : p.load(source).then(() => p == null ? void 0 : p.play()).catch((error) => {
        cleanup();
        reject(error);
      });
    });
  };
  const play = async () => {
    try {
      const url = getStreamUrl();
      useLayoutStore.setState({ isCanStream: !!url });
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
      onPlay == null ? void 0 : onPlay();
    } catch (error) {
      console.debug("Error in play():", error);
      onError == null ? void 0 : onError(error);
      throw error;
    }
  };
  const doDestroyAndPlay = async (retryCount = 0, maxRetry = playbackSettings.maxRetries) => {
    if (shouldSkipPlay()) return;
    isDoDestroyAndPlayRunning.current = true;
    if (player.current) {
      stopAndDestroy(player.current);
      player.current = null;
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    try {
      console.debug("Attempting to play video (attempt ".concat(retryCount + 1, ")"));
      setIsLoading(true);
      await play();
      console.debug("Video successfully playing");
      setIsLoading(false);
      setSnapshot("");
      onPlay == null ? void 0 : onPlay();
      isDoDestroyAndPlayRunning.current = false;
    } catch (error) {
      if (retryCount >= maxRetry) {
        useLayoutStore.setState({ isCanStream: false });
        console.debug("Failed to play video after attempts:", error);
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, playbackSettings.retryDelay));
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
        console.debug("".concat(reason, ", skipping play attempt"));
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
    if (isVisible) doDestroyAndPlay();
    else stopAndDestroy(player.current);
  }, [isVisible, isInit]);
  reactExports.useEffect(() => {
    var _a;
    if (player.current) (_a = player.current) == null ? void 0 : _a.setVolume(calculateVolume());
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
function VideoWrapper({ children, repositioningRefs, containerChildren, wrapperChildren }) {
  const isCanStream = useLayoutStore((s) => s.isCanStream);
  const isSloped = !useBettingStore((state) => state.isBet);
  const defaultContainerRef = reactExports.useRef(null);
  const defaultVideoWrapperRef = reactExports.useRef(null);
  const containerRef = (repositioningRefs == null ? void 0 : repositioningRefs.containerRef) || defaultContainerRef;
  const videoWrapperRef = (repositioningRefs == null ? void 0 : repositioningRefs.videoWrapperRef) || defaultVideoWrapperRef;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "VideoWrapper",
      ref: videoWrapperRef,
      className: cn({ isCanStream, isMobileDevice, isSloped }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: containerRef,
            className: "streamContainer",
            children: [
              children,
              containerChildren
            ]
          }
        ),
        wrapperChildren
      ]
    }
  );
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
  const defaultRenderMode = renderMode != null ? renderMode : isMobileDevice ? 1 : 0;
  const { isLoading, setVideoEl, snapshot } = useStream({ renderMode: defaultRenderMode });
  const repositioningRefs = repositioningHook == null ? void 0 : repositioningHook();
  const getSpinnerClasses = () => {
    const commonCN = "absolute left-1/2 h-10 w-10 -translate-x-1/2";
    if (customSpinnerPosition) {
      return cn(commonCN, isMobileDevice ? customSpinnerPosition.mobile : customSpinnerPosition.desktop);
    }
    return cn(commonCN, isMobileDevice ? "top-[38%] w-[1.666rem]" : "top-[37.5%] w-[3rem]");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    VideoWrapper,
    {
      repositioningRefs,
      containerChildren,
      wrapperChildren,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "StreamPlayer",
            ref: setVideoEl,
            className: cn("relative h-full w-full bg-transparent transition-all duration-700 ease-in-out", customTransforms),
            children: [
              streamPlayerChildren,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "streamOverlay",
                  style: { backgroundImage: "url(".concat(snapshot, ")") }
                }
              )
            ]
          }
        ),
        typeof maskComponent === "function" ? maskComponent(isLoading) : maskComponent,
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "streamOverlay", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getSpinnerClasses(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpinnerSVG, {}) }) })
      ]
    }
  );
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
      const { height: vh, width: vw, top: vt } = videoWrapper.getBoundingClientRect();
      const { top: tt } = tip.getBoundingClientRect();
      const { top: bt } = boundary.getBoundingClientRect();
      const BREAKPOINT_RATIO_TOP = 1.7;
      const ratio = vh / vw;
      const isCrossTop = ratio < BREAKPOINT_RATIO_TOP;
      const MULTIPLIER_CROSS_TOP = 1;
      const scale = 1.125;
      let transformY;
      let height;
      if (isCrossTop) {
        height = "".concat((tt - vt) * MULTIPLIER_CROSS_TOP, "px");
        transformY = 0;
      } else {
        height = "unset";
        transformY = (tt - bt) / 2;
      }
      container.style.height = height;
      container.style.transform = "translateY(".concat(transformY, "px) scale(").concat(scale, ")");
      boundary.style.transform = "translateY(".concat(-transformY, "px)");
    };
    const mutationObserver = new MutationObserver(reposition);
    const resizeObserver = new ResizeObserver(reposition);
    mutationObserver.observe(streamPlayer, { childList: true });
    resizeObserver.observe(streamPlayer);
    resizeObserver.observe(videoWrapper);
    reposition();
    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
  return { containerRef, videoWrapperRef };
}
function RouletteVideoStream() {
  const renderMode = isMobileDevice ? 1 : 0;
  const repositioningRefs = useRouletteRepositioning();
  const maskComponent = (isLoading) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    RouletteMask,
    {
      isLoading,
      virtualBackground
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    VideoStream,
    {
      renderMode,
      customTransforms: !isMobileDevice ? "-top-[1.875rem] scale-[0.92]" : "",
      maskComponent,
      streamPlayerChildren: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          "data-stream-boundary": true,
          className: "pointer-events-none absolute bottom-[19%] left-0 w-full"
        }
      ),
      repositioningHook: () => repositioningRefs
    }
  );
}
function useBoardHighlight(args) {
  const [highlights, setHighlights] = reactExports.useState([]);
  const { isMain, prefix, getInitWinHighlight, winHighlightMap } = args;
  const isBet = useBettingStore((s) => s.isBet);
  const animState = useWinAnimStore((s) => s.animState);
  const winResult = useWinAnimStore((s) => s.winResult);
  const winNums = winResult == null ? void 0 : winResult.result;
  const isMainBoard = isMain != null ? isMain : true;
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
  return { highlights, setHighlights };
}
const chipVariants = {
  initial: { scale: 1, opacity: 1, filter: "brightness(1) grayscale(0)" },
  idle: (custom) => custom.shouldSkipIdle ? {
    scale: 1
  } : {
    scale: [
      0.9,
      0.9836,
      1.0311,
      1.0598,
      1.0775,
      1.0882,
      1.0945,
      1.0978,
      1.0995,
      1.1,
      1.0979,
      1.092,
      1.0754,
      1.0403,
      1.0189,
      1.0088,
      1.0032,
      1.0015,
      1
    ],
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
      scale: { duration: 0.6, ease: "easeOut" },
      opacity: { duration: 0.6, ease: "easeOut" },
      filter: { duration: 0.333, ease: "easeOut", delay: 0.1667 }
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
const NormalChip = ({ isWin, chipId, is3D, value, chipRef, chipSkewXDeg }) => {
  const gameState = useBettingStore((s) => s.gameState);
  const animState = useWinAnimStore((s) => s.animState);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: "initial",
      animate: getAnimation(),
      variants: chipVariants,
      ref: chipRef,
      className: "pointer-events-none absolute w-full",
      custom: { shouldSkipIdle: skipIdle },
      onAnimationStart: (e) => {
        if (e !== "idle") {
          setSkipIdle(true);
        } else {
          setChipResume(true);
        }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChipSelectorChip,
        {
          value,
          isDisabled: false,
          is3D,
          chipId,
          chipSkewXDeg
        }
      )
    },
    chipId + value
  );
};
const useChipMovePos = (chipRef) => {
  const [movePos, setMovePos] = reactExports.useState({ x: 0, y: 0 });
  const boardHistory = useCartStore((state) => state.boardHistory);
  const gameState = useBettingStore((state) => state.gameState);
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
      setMovePos({ x, y });
    }
  }, [boardHistory, gameState]);
  return movePos;
};
const WinningChip = ({ chipRef, chipId, value, is3D, chipSkewXDeg }) => {
  const chipMovePos = useChipMovePos(chipRef);
  const animState = useWinAnimStore((s) => s.animState);
  const movingStart = animState === "winChipsMoving";
  const winChipVariant = {
    initial: { opacity: 0, scale: 1.14, clipPath: "rect(30% 65% 65% 35%)", x: 0, y: 0, skewX: chipSkewXDeg },
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "pointer-events-none absolute z-[99999] w-full",
      variants: winChipVariant,
      initial: movingStart ? "moveInitial" : "initial",
      animate: movingStart ? "move" : "default",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChipSelectorChip,
        {
          value,
          isDisabled: false,
          is3D
        }
      )
    },
    chipId
  );
};
const WinningChipRim = ({ chipSkewXDeg }) => {
  const animState = useWinAnimStore((s) => s.animState);
  const winStart = animState === "winAnimationStart";
  const isRaceTrack = useBettingStore((s) => s.isRaceTrack);
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
        opacity: { duration: 1.9, times: [0, 0.1165, 0.8835, 1], ease: "easeInOut" },
        scaleX: { duration: 1.9, times: [0, 0.1165, 0.8835, 1], ease: "easeInOut" },
        scaleY: { duration: 1.9, times: [0, 0.1165, 0.8835, 1], ease: "easeInOut" }
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      variants: winChipRimVariant,
      initial: "initial",
      animate: winStart && "default",
      className: "winChipRim absolute z-10 h-full w-full rounded-full"
    }
  );
};
const ChipContainer = ({ chipId, showWin = true, chipStyle, isSlope, chipTextSize, chipSkewXDeg }) => {
  var _a;
  const chipRef = reactExports.useRef(null);
  const boardHistory = useCartStore((s) => s.boardHistory);
  const currBoard = boardHistory[boardHistory.length - 1] || {};
  const betAmount = currBoard[chipId];
  const latestPlaceBet = useCartStore.getState().latestPlaceBet || {};
  const chipSequence = useBettingStore.getState().chipSequence;
  const winResult = useWinAnimStore((s) => s.winResult);
  const winChipValue = (_a = winResult == null ? void 0 : winResult.betDetail) == null ? void 0 : _a[chipId];
  const { payout } = winResult || {};
  const winAmount = payout == null ? void 0 : payout[chipId];
  const isWin = winAmount !== void 0 && showWin;
  const animState = useWinAnimStore((s) => s.animState);
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
  return chipValue ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "chipContainer pointer-events-none fixed flex items-center justify-center transition-[font-size] duration-300 ease-linear",
        chipStyle
      ),
      style: { zIndex, fontSize: chipTextSize },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NormalChip,
          {
            chipId,
            value: chipValue,
            isWin,
            chipRef,
            is3D: isSlope,
            chipSkewXDeg
          }
        ),
        isWin && runWinAnimation && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            WinningChip,
            {
              chipRef,
              chipId,
              value: winAmount,
              is3D: isSlope,
              chipSkewXDeg
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WinningChipRim, { chipSkewXDeg })
        ] })
      ]
    }
  ) : null;
};
function TrackerChip(props) {
  const { boardId, dragSession, draggedChipRef, setDragSession, resetDragSession } = props;
  const { isDrag, offset: offset2, prePosit, currBetType } = dragSession;
  const draggedChip = draggedChipRef == null ? void 0 : draggedChipRef.current;
  const draggedChipVal = Number(draggedChip == null ? void 0 : draggedChip.dataset.value) || 0;
  const draggedChipType = draggedChip == null ? void 0 : draggedChip.dataset.dragChip;
  const chipSequence = useBettingStore((s) => s.chipSequence);
  const [track, setTrack] = reactExports.useState({ x: 0, y: 0 });
  const boardRef = reactExports.useRef(null);
  const trackerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    boardRef.current = document.getElementById(boardId);
  }, []);
  reactExports.useEffect(() => {
    const board = boardRef.current;
    if (!board || !draggedChip) return;
    const onMove = (event) => {
      if (!draggedChip || raceTrackGroup.includes(draggedChipType)) return;
      const { left, top } = board.getBoundingClientRect();
      const { pageX: x, pageY: y } = event;
      if (!prePosit.x || !prePosit.y) return;
      if (trackerRef.current) draggedChip == null ? void 0 : draggedChip.style.setProperty("opacity", "0");
      const deltaX = Math.abs(x - prePosit.x);
      const deltaY = Math.abs(y - prePosit.y);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const isDrag2 = distance >= 1;
      setTrack({ x: x - left, y: y - top });
      setDragSession({ ...dragSession, isDrag: isDrag2 });
    };
    const onUp = () => {
      if (!currBetType) return resetDragSession();
    };
    const onTouchMove = (e) => {
      if (draggedChip) return e.preventDefault();
    };
    const handlers = [
      { type: "pointermove", handler: onMove },
      { type: "pointerup", handler: onUp },
      { type: "touchmove", handler: onTouchMove, options: { passive: false } }
    ];
    handlers.forEach(
      ({ type, handler, options }) => document.addEventListener(type, handler, options)
    );
    return () => {
      handlers.forEach(
        ({ type, handler, options }) => document.removeEventListener(type, handler, options)
      );
    };
  }, [prePosit.x, prePosit.y, draggedChipType, currBetType]);
  if (!draggedChip) return null;
  const fontSize = parseFloat(getComputedStyle(draggedChip).fontSize);
  const width = draggedChip == null ? void 0 : draggedChip.clientWidth;
  if (!isDrag || !fontSize || !width) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "pointer-events-none absolute top-0 h-full w-full",
      ref: trackerRef,
      style: {
        fontSize,
        width,
        left: "".concat(track.x - offset2.x, "px"),
        top: "".concat(track.y - offset2.y, "px"),
        // Sicbo's top board has a z-index of 50
        zIndex: chipSequence + 50
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChipSelectorChip,
        {
          value: draggedChipVal,
          isDisabled: false
        }
      )
    }
  );
}
const TrackerChip$1 = reactExports.memo(TrackerChip);
const DEFAULT_SESSION = {
  preBetType: null,
  currBetType: null,
  isDrag: false,
  prePosit: { x: 0, y: 0 },
  offset: { x: 0, y: 0 }
};
const useChipAction = () => {
  const [payload, setPayload] = reactExports.useState(null);
  const [dragSession, setDragSession] = reactExports.useState(DEFAULT_SESSION);
  const dragSessionRef = reactExports.useRef(dragSession);
  const isBet = useBettingStore((state) => state.isBet);
  const draggedChipRef = reactExports.useRef(null);
  const isVisible = useVisibility();
  const boardHistory = useCartStore((s) => s.boardHistory);
  const isSlope = useBettingStore((s) => !s.isBet);
  const selectedChipVal = useCartStore((s) => s.selectedChipVal);
  const getTotalBet = useCartStore((s) => s.getTotalBet);
  const walletBalance = useCartStore((s) => s.walletBalance);
  const setDragSessionWithRef = reactExports.useCallback((newSession) => {
    dragSessionRef.current = newSession;
    setDragSession(newSession);
  }, []);
  const onPress = reactExports.useCallback(
    (e, key, draggedChip) => {
      if (!key) return;
      if (isSlope) return tooltipEventBus.emit("close", { position: { x: e.pageX, y: e.pageY }, mute: true });
      const edgeDist = getDraggedChipEdgeDist(e.pageX, e.pageY, draggedChip);
      if (!edgeDist || !draggedChip) {
        setDragSessionWithRef({ ...dragSessionRef.current, prePosit: { x: 0, y: 0 }, preBetType: key });
        return;
      }
      draggedChipRef.current = draggedChip;
      setDragSessionWithRef({
        preBetType: key,
        prePosit: { x: e.pageX, y: e.pageY },
        currBetType: null,
        isDrag: false,
        offset: { x: edgeDist.offsetX, y: edgeDist.offsetY }
      });
    },
    // TODO: Fixing this warning directly may break some functionality. This will require future refactoring.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSlope, setDragSessionWithRef, draggedChipRef, boardHistory]
  );
  const onRelease = reactExports.useCallback(
    (e, betType, extraBetsGroup) => {
      var _a;
      const { preBetType, prePosit, isDrag } = dragSessionRef.current;
      const draggedChip = draggedChipRef == null ? void 0 : draggedChipRef.current;
      const draggedChipVal = Number(draggedChip == null ? void 0 : draggedChip.dataset.value) || 0;
      if (!betType || !preBetType) return resetDragSession();
      const lastBet = (_a = boardHistory.at(-1)) != null ? _a : {};
      const isSameSpot = preBetType === betType;
      const isExtraBetsGroup = extraBetsGroup.includes(betType);
      setDragSessionWithRef({ ...dragSessionRef.current, currBetType: betType });
      if (!isDrag && !isSameSpot) return resetDragSession();
      if (isDrag && isSameSpot) return resetDragSession();
      if (isDrag && isExtraBetsGroup) return resetDragSession();
      const isNormalPlaceBet = !prePosit.x || !prePosit.y || !isDrag;
      const lastBetVal = new Decimal(lastBet[betType] || 0);
      const extra = new Decimal(isDrag ? draggedChipVal : selectedChipVal);
      const newBetVal = lastBetVal.plus(extra).toNumber();
      const newBets = { [betType]: extra.toNumber() };
      if (!isSameSpot && preBetType) delete newBets[preBetType];
      const { x, y } = getCenterPosition(e);
      setPayload({
        betType,
        newBets,
        latestPlaceBet: { [betType]: newBetVal },
        isNormalPlaceBet,
        position: { x, y }
      });
    },
    // TODO: Fixing this warning directly may break some functionality. This will require future refactoring.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setDragSessionWithRef, boardHistory, getTotalBet, selectedChipVal, walletBalance]
  );
  const resetDragSession = reactExports.useCallback(() => {
    const preChip = draggedChipRef.current;
    setTimeout(() => preChip == null ? void 0 : preChip.style.setProperty("opacity", "1"), 10);
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
  return { payload, dragSession, draggedChipRef, setDragSession: setDragSessionWithRef, resetDragSession, onPress, onRelease };
};
const useBettingBoard = (props) => {
  const boardHistory = useCartStore((s) => s.boardHistory);
  const walletBalance = useCartStore((s) => s.walletBalance);
  const jurisdiction = useConfigStore((s) => s.JURISDICTION);
  const { convertBetMap, getAddChipParams: getAddChipParams2, boardID, extraBetsGroup = [] } = props;
  const { payload, dragSession, setDragSession, resetDragSession, onPress, onRelease, draggedChipRef } = useChipAction();
  const draggedChip = draggedChipRef == null ? void 0 : draggedChipRef.current;
  const draggedChipVal = Number(draggedChip == null ? void 0 : draggedChip.dataset.value) || 0;
  const draggedChipType = draggedChip == null ? void 0 : draggedChip.dataset.dragChip;
  const { tableLimit, betTypesLimit, GAME_TYPE: gameType } = useConfigStore.getState();
  const placeBets = () => {
    var _a;
    if (!payload) return;
    const diff = convertBetMap(payload.betType, draggedChipVal, dragSession.isDrag, boardID);
    const { cleanedBets, extraBets } = cleanExtraBets((_a = boardHistory.at(-1)) != null ? _a : {});
    const capBet = capBets({
      gameType,
      newBets: diff.normalBets,
      original: cleanedBets,
      balance: walletBalance,
      dragSourceBetNo: dragSession.isDrag ? draggedChipType : void 0,
      betLimit: { tableLimit, betTypesLimit },
      betOptions: jurisdiction.BET_OPTIONS
    });
    if (capBet.resultBets) {
      const finalBets = { ...capBet.resultBets, ...addExtraBets(extraBets, diff.extraBets) };
      useCartStore.setState({
        boardHistory: [...boardHistory, finalBets],
        latestPlaceBet: diff.normalBets,
        playChipSound: true
      });
    }
    if (capBet.hints) {
      const { isLowBalance, isOverBetTypeMax, isOverTableMax, isOppositeBet } = capBet.hints;
      if (isOverBetTypeMax) tooltipEventBus.emit("overLimit", { position: payload.position });
      if (isLowBalance) tooltipEventBus.emit("lowBalance", { position: payload.position });
      if (isOverTableMax) tooltipEventBus.emit("overLimit", { position: payload.position });
      if (isOppositeBet) tooltipEventBus.emit("oppositeBet", { position: payload.position });
      return resetDragSession();
    }
  };
  reactExports.useEffect(() => {
    if (!payload) return;
    placeBets();
    useBettingStore.setState({ resetBoard: false });
    useWinNumberStore$4.setState({ lastWinCache: 0 });
    resetDragSession();
  }, [payload]);
  const handlePointerDown = (e) => {
    const betType = getAddChipParams2(e);
    onPress(e, betType, getDraggedChipRef(betType, boardID));
  };
  const handlePointerUp = (e) => {
    const betType = getAddChipParams2(e);
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
};
const getAddChipParams$1 = (event) => {
  var _a;
  const { pageX: x, pageY: y } = event;
  const target = document.elementFromPoint(x, y);
  const isValid = (_a = target == null ? void 0 : target.id) == null ? void 0 : _a.startsWith(betGridPrefix);
  const betType = isValid ? target.id.slice(betGridPrefix.length) : "";
  return betType;
};
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
    enter: (direction2) => {
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
    exit: (direction2) => {
      const actualDirection = reverseDirection && direction2 ? direction2 === "up" ? "down" : "up" : direction2;
      return {
        [axis]: actualDirection === "up" ? distance : -distance,
        opacity: 0
      };
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AnimatePresence,
    {
      mode: "sync",
      custom: direction,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
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
        },
        value
      )
    }
  );
}
function ActiveStateWrapper({ children, duration = 200 }) {
  const [clicked, setClicked] = reactExports.useState(false);
  const handleClick = () => {
    setClicked(true);
    let timer = 0;
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      setClicked(false);
    }, duration);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      onClick: handleClick,
      className: "".concat(clicked ? "active" : ""),
      children
    }
  );
}
const svgHighlightDef = /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "linearGradient",
    {
      id: "backgroundGradient",
      x1: "1",
      y1: "0",
      x2: "0.25",
      y2: "1",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "stop",
          {
            offset: "0%",
            stopColor: "rgba(223, 207, 187, 0.05)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "stop",
          {
            offset: "0.37%",
            stopColor: "rgba(223, 207, 187, 0.2)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "stop",
          {
            offset: "100%",
            stopColor: "rgba(223, 207, 187, 0.05)"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "linearGradient",
    {
      id: "borderGradient",
      x1: "0.9",
      y1: "0",
      x2: "0.1",
      y2: "1",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "stop",
          {
            offset: "9.16%",
            stopColor: "#c9ae8d"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "stop",
          {
            offset: "89.58%",
            stopColor: "#a57d4e"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "filter",
    {
      id: "multiShadow",
      x: "-20%",
      y: "-20%",
      width: "140%",
      height: "140%",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feComponentTransfer",
          {
            in: "SourceAlpha",
            result: "inset-selection",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "feFuncA",
              {
                type: "discrete",
                tableValues: "0 1 1 1 1 1"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feGaussianBlur",
          {
            in: "SourceAlpha",
            stdDeviation: "3",
            result: "blur1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feOffset",
          {
            in: "blur1",
            dx: "0",
            dy: "0",
            result: "offsetBlur1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feFlood",
          {
            floodColor: "rgba(142, 108, 67, 0.25)",
            result: "shadowColor1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feComposite",
          {
            in: "shadowColor1",
            in2: "offsetBlur1",
            operator: "in",
            result: "shadowBlur1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feGaussianBlur",
          {
            in: "SourceAlpha",
            stdDeviation: "3",
            result: "blur2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feOffset",
          {
            in: "blur2",
            dx: "0",
            dy: "0",
            result: "offsetBlur2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feFlood",
          {
            floodColor: "rgba(223, 207, 187, 0.1)",
            result: "shadowColor2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feComposite",
          {
            in: "shadowColor2",
            in2: "offsetBlur2",
            operator: "in",
            result: "shadowBlur2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feGaussianBlur",
          {
            in: "SourceAlpha",
            stdDeviation: "3",
            result: "blur2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feOffset",
          {
            in: "blur3",
            dx: "0",
            dy: "0",
            result: "offsetBlur3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feFlood",
          {
            floodColor: "rgba(255, 255, 255, 0.1)",
            result: "shadowColor3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feComposite",
          {
            in: "shadowColor2",
            in2: "offsetBlur3",
            operator: "in",
            result: "shadowBlur3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feGaussianBlur",
          {
            in: "SourceAlpha",
            stdDeviation: "3",
            result: "blur4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feOffset",
          {
            in: "blur4",
            dx: "0",
            dy: "0",
            result: "offsetBlur4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feFlood",
          {
            floodColor: "rgba(223, 207, 187, 0.15)",
            result: "shadowColor4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feComposite",
          {
            in: "shadowColor4",
            in2: "offsetBlur4",
            operator: "in",
            result: "shadowBlur4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feGaussianBlur",
          {
            in: "SourceAlpha",
            stdDeviation: "3",
            result: "blur5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feOffset",
          {
            in: "blur5",
            dx: "0",
            dy: "0",
            result: "offsetBlur5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feFlood",
          {
            floodColor: "rgba(142, 108, 67, 0.3)",
            result: "shadowColor5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "feComposite",
          {
            in: "shadowColor5",
            in2: "offsetBlur5",
            operator: "in",
            result: "shadowBlur5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("feMerge", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "shadowBlur1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "shadowBlur4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "shadowBlur5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "SourceGraphic" })
        ] })
      ]
    }
  )
] });
const useRaceTrackHighlights = ({ highlights }) => {
  const [style, setStyle] = reactExports.useState("");
  reactExports.useEffect(() => {
    const cssRules = "".concat(highlights.map((id) => 'path[data-v="'.concat(id, '"], rect[data-v="').concat(id, '"]')).join(","), "\n      { \n        transition: all 0.4s;\n        fill: url('#backgroundGradient');\n        stroke: url('#borderGradient');\n        stroke-width: 1.5px;\n        filter: url('#multiShadow'); \n      }");
    setStyle(cssRules);
  }, [highlights]);
  return { style };
};
const getAddChipParams = (event) => {
  const { pageX: x, pageY: y } = event;
  const element = document.elementFromPoint(x, y);
  if (!(element instanceof SVGGraphicsElement)) return "";
  const dataV = element.dataset.v;
  if (!dataV) return "";
  const isStraight = !raceTrackGroup$1.includes(dataV);
  const betType = isStraight ? "straight-" + dataV : dataV;
  return betType;
};
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var isInert = function isInert2(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && isInert2(node.parentNode);
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
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
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      continue;
    }
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
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
var noop$1 = function noop2() {
};
var index$1 = isClient$1 ? reactExports.useLayoutEffect : noop$1;
const SafeReact$1 = {
  ...React
};
function useLatestRef$1(value) {
  const ref = reactExports.useRef(value);
  index$1(() => {
    ref.current = value;
  });
  return ref;
}
const useInsertionEffect = SafeReact$1.useInsertionEffect;
const useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = reactExports.useRef(() => {
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return reactExports.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
const getTabbableOptions = () => ({
  getShadowRoot: true,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
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
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = container.querySelectorAll("[data-tabindex]");
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}
var isClient = typeof document !== "undefined";
var noop = function noop3() {
};
var index = isClient ? reactExports.useLayoutEffect : noop;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
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
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
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
  if (typeof window === "undefined") {
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
function useFloating$1(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
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
  const setReference = reactExports.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = reactExports.useCallback((node) => {
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
    computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
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
      setData((data2) => ({
        ...data2,
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
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return reactExports.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
const offset = (options, deps) => ({
  ...offset$1(options),
  options: [options, deps]
});
const shift = (options, deps) => ({
  ...shift$1(options),
  options: [options, deps]
});
const FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
const ACTIVE_KEY = "active";
const SELECTED_KEY = "selected";
const SafeReact = {
  ...React
};
let serverHandoffComplete = false;
let count = 0;
const genId = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
);
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
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((listener) => listener(data));
    },
    on(event, listener) {
      if (!map.has(event)) {
        map.set(event, /* @__PURE__ */ new Set());
      }
      map.get(event).add(listener);
    },
    off(event, listener) {
      var _map$get2;
      (_map$get2 = map.get(event)) == null || _map$get2.delete(listener);
    }
  };
}
const FloatingNodeContext = /* @__PURE__ */ reactExports.createContext(null);
const FloatingTreeContext = /* @__PURE__ */ reactExports.createContext(null);
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
const safePolygonIdentifier = /* @__PURE__ */ createAttribute("safe-polygon");
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
  const unbindMouseMoveRef = reactExports.useRef(() => {
  });
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
  const closeWithDelay = reactExports.useCallback(function(event, runElseBranch, reason) {
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
        handlerRef.current = handleCloseRef.current({
          ...dataRef.current.floatingContext,
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
        });
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
      handleCloseRef.current == null || handleCloseRef.current({
        ...dataRef.current.floatingContext,
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
      })(event);
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
        const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
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
const FocusGuard = /* @__PURE__ */ reactExports.forwardRef(function FocusGuard2(props, ref) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    ...props,
    ...restProps
  });
});
const PortalContext = /* @__PURE__ */ reactExports.createContext(null);
const attr = /* @__PURE__ */ createAttribute("portal");
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
  const shouldRenderGuards = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!focusManagerState && // Guards are only for non-modal focus management.
    !focusManagerState.modal && // Don't render if unmount is transitioning.
    focusManagerState.open && preserveTabOrder && !!(root || portalNode)
  );
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalContext.Provider, {
    value: reactExports.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode]),
    children: [shouldRenderGuards && portalNode && /* @__PURE__ */ jsxRuntimeExports.jsx(FocusGuard, {
      "data-type": "outside",
      ref: beforeOutsideRef,
      onFocus: (event) => {
        if (isOutsideEvent(event, portalNode)) {
          var _beforeInsideRef$curr;
          (_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
        } else {
          const domReference = focusManagerState ? focusManagerState.domReference : null;
          const prevTabbable = getPreviousTabbable(domReference);
          prevTabbable == null || prevTabbable.focus();
        }
      }
    }), shouldRenderGuards && portalNode && /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      "aria-owns": portalNode.id,
      style: HIDDEN_STYLES
    }), portalNode && /* @__PURE__ */ reactDomExports.createPortal(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ jsxRuntimeExports.jsx(FocusGuard, {
      "data-type": "outside",
      ref: afterOutsideRef,
      onFocus: (event) => {
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
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
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
  const position = useFloating$1({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = reactExports.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      getClientRects: () => node.getClientRects(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = reactExports.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = reactExports.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = reactExports.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = reactExports.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index$1(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return reactExports.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE]: ""
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
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
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
  const getReferenceProps = reactExports.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps
  );
  const getFloatingProps = reactExports.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps
  );
  const getItemProps = reactExports.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps
  );
  return reactExports.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
function Tooltip({ placement, content, children, className, selected, animation }) {
  var _a, _b, _c, _d;
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const { refs, context, x, y, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), shift()]
  });
  const hover = useHover(context, { move: false });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  const initExitState = getInitExitState(placement);
  const defaultAnim = {
    initial: initExitState,
    animate: { opacity: 1, x: 0, y: 0 },
    exit: initExitState,
    transition: { duration: 0.2, ease: "easeOut" }
  };
  const motionProps = {
    initial: (_a = animation == null ? void 0 : animation.initial) != null ? _a : defaultAnim.initial,
    animate: (_b = animation == null ? void 0 : animation.animate) != null ? _b : defaultAnim.animate,
    exit: (_c = animation == null ? void 0 : animation.exit) != null ? _c : defaultAnim.exit,
    transition: (_d = animation == null ? void 0 : animation.transition) != null ? _d : defaultAnim.transition
  };
  reactExports.useEffect(() => {
    if (isOpen && !selected) setIsVisible(true);
    else setIsVisible(false);
  }, [isOpen, selected]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: refs.setReference,
        ...getReferenceProps(),
        className: cn(className),
        children
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: cn("tooltipContainer z-20 whitespace-nowrap", className),
        ref: refs.setFloating,
        style: { ...floatingStyles, top: y, left: x },
        ...getFloatingProps(),
        ...motionProps,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip", children: content }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltipArrow ".concat(positionConvert[placement]) })
        ]
      }
    ) }) })
  ] });
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
const getInitExitState = (placement) => {
  const baseAnimation = { opacity: 0 };
  const direction = positionConvert[placement];
  const offsetMap = {
    top: { y: "-0.5rem" },
    bottom: { y: "0.5rem" },
    left: { x: "-0.5rem" },
    right: { x: "0.5rem" },
    "top-end": { y: "-0.5rem" }
  };
  return { ...baseAnimation, ...offsetMap[direction] };
};
const SquareButton = ({
  id,
  className,
  buttonClassName,
  child,
  isGhost = false,
  tooltipContent = "",
  tooltipPlacement = "bottom",
  selected = false,
  // if you don't need the tooltip just set the selected to true
  onClick,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveStateWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tooltip,
    {
      placement: tooltipPlacement,
      content: tooltipContent,
      className,
      selected,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          id,
          className: cn("SquareButton relative h-full w-full", buttonClassName),
          onClick: () => {
            if (onClick) {
              onClick();
              playSound(["click"]);
            }
          },
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("defaultType", isGhost && "isGhost"), children: child }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hoverType", children: child })
          ]
        }
      )
    }
  ) });
};
export {
  AutoPlay as A,
  BetResult as B,
  ChipImg as C,
  overlayBg as D,
  CountDownCap$1 as E,
  ToastList as F,
  GameRuleInfo$1 as G,
  NetworkStateModal$1 as H,
  getChipSrc as I,
  Tooltip as J,
  SettingSlider$1 as K,
  SoundButton$1 as L,
  MainBgImage as M,
  NotificationHint as N,
  RouletteVideoStream as R,
  SettingLanguage$1 as S,
  Toggle$1 as T,
  isChipDisabled as a,
  ChipSelectorChip as b,
  ClickableArea$1 as c,
  Clock as d,
  GameRule$1 as e,
  Setting$1 as f,
  ChatRoom$1 as g,
  ChatHeader as h,
  isChipActive as i,
  GameLimit as j,
  GameHistory$1 as k,
  useStatisticStore as l,
  Statistic as m,
  StatisticFooter as n,
  useBettingBoard as o,
  useBoardHighlight as p,
  TrackerChip$1 as q,
  getAddChipParams$1 as r,
  ChipContainer as s,
  ActiveStateWrapper as t,
  usePreventPullToRefresh as u,
  AnimateCounter as v,
  svgHighlightDef as w,
  useRaceTrackHighlights as x,
  getAddChipParams as y,
  SquareButton as z
};
//# sourceMappingURL=SquareButton-aOnOtv7Q.js.map
