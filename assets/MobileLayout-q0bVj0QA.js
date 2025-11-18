import { j as jsxRuntimeExports, m as motion, A as AnimatePresence, a as motion$1, u as useAnimationControls, b as AnimatePresence$1 } from "./framer-motion-vendor-M-CJJoj5.js";
import { C as ChipImg, i as isChipActive, a as isChipDisabled, b as ChipSelectorChip, c as ClickableArea, d as Clock, u as usePreventPullToRefresh, T as Toggle, N as NotificationHint, G as GameRuleInfo, e as GameRule, A as AutoPlay, S as SettingLanguage, f as Setting, g as ChatRoom, h as ChatHeader, j as GameLimit, k as GameHistory, l as useStatisticStore, m as Statistic, n as StatisticFooter, o as useBettingBoard, p as useBoardHighlight, q as TrackerChip, r as getAddChipParams, s as ChipContainer, t as ActiveStateWrapper, v as AnimateCounter, w as svgHighlightDef, x as useRaceTrackHighlights, y as getAddChipParams$1, z as SquareButton, B as BetResult, M as MainBgImage, D as overlayBg, E as CountDownCap, F as ToastList, R as RouletteVideoStream, H as NetworkStateModal } from "./SquareButton-aOnOtv7Q.js";
import { H as cn, j as useCartStore, c as useLayoutStore, W as convertLabel, v as useConfigStore, X as logoLightImg, Y as Image, Z as Semicircle, _ as useChatStore, p as playSound, $ as useLongPress, h as useBettingStore, t as useTranslation, a0 as thousandSeparator, I as useWinNumberStore, a1 as skipScrollPages, a2 as scrollWrapToTop, a3 as safariHint, g as useSettingStore, a4 as LANGUAGES, L as tooltipEventBus, w as isInIframe, a5 as useDataStore, a6 as GameRules, a7 as RoomType, a8 as GameHistoryContent, a9 as GameHistoryContentHeader, aa as StraightUp, ab as FullComplete, ac as Default, ad as BoardIDEnum, ae as GRID_WIN_HIGHLIGHT_FN, af as getInitWinHighlight, ag as convertRouletteMap, ah as BetTypeEnum, ai as betGridPrefix, aj as gridBoardTiltCompactVariants, ak as gridBoardTiltVariants, al as bettingGrid, am as mobileGridUpperThick, an as mobileGridLowerThick, ao as gridBoardMoveVariants, ap as RACE_TRACK_HIGHLIGHT_FN, aq as raceTrackBoardMoveVariants, ar as raceTrackBoardTiltCompactVariants, as as raceTrackBoardTiltVariants, at as raceTrack, au as mobileRacetrackThick1, av as mobileRacetrackThick2, aw as mobileRacetrackThick3, ax as mobileRacetrackThick4, ay as mobileRacetrackThick5, az as mobileRacetrackThick6, aA as raceTrackGroup, aB as extractLeft, r as useAutoPlayStore, E as useWinAnimStore, aC as buttonMoveVariants, aD as iconColorVariants, aE as logoImg } from "./index-CmJqq2pL.js";
import { r as reactExports, R as React } from "./@sentry-vendor-DIzI_R8p.js";
import { I as Icon } from "./ui-icons-internal-Cv1pemof.js";
import { G as GameType } from "./ikigaians-house-core-CYkxu2p9.js";
import "./ikigaians-connect-core-CK9eHaV7.js";
import "./ikigaians-ikgplayer-core-CxDPJj5x.js";
import "./App-DX8Hmlgm.js";
import "./pixi.js-vendor-By4Tt1Nl.js";
import "./react-dom-vendor-DIvBW9ov.js";
import "./pixi-filters-vendor-urfE99zo.js";
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
const DisplacementContainer = ({
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
  enable = true,
  ...rest
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const [animationEnded, setAnimationEnded] = reactExports.useState(false);
  const defaultInitial = {
    x: (_a = startPosition.x) != null ? _a : defaultPosition.x,
    y: (_b = startPosition.y) != null ? _b : defaultPosition.y,
    z: (_c = startPosition.z) != null ? _c : defaultPosition.z
  };
  const defaultAnimate = isAnimating ? {
    x: (_d = endPosition.x) != null ? _d : defaultPosition.x,
    y: (_e = endPosition.y) != null ? _e : defaultPosition.y
  } : {
    x: (_f = startPosition.x) != null ? _f : defaultPosition.x,
    y: (_g = startPosition.y) != null ? _g : defaultPosition.y
  };
  const handleAnimationComplete = () => {
    setAnimationEnded(true);
    onAnimationComplete == null ? void 0 : onAnimationComplete();
  };
  const motionProps = enable ? {
    initial: initial || defaultInitial,
    animate: animate || defaultAnimate,
    transition: { ...animation },
    onAnimationComplete: handleAnimationComplete
  } : {
    initial: false,
    animate: false
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: {
        ...enable && animationEnded ? {
          zIndex: (_h = endPosition.z) != null ? _h : defaultPosition.z,
          ...styleAfterAnimation
        } : { ...style }
      },
      ...motionProps,
      ...rest,
      children
    }
  );
};
const FooterAnimation = ({ children, type, enable = true, ...rest }) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DisplacementContainer,
    {
      enable,
      startPosition: { x: 0, y: type === "chip" ? "-150%" : "-100%" },
      endPosition: { x: 0, y: "0%", z: 1 },
      animation: { duration, delay, type: "spring", stiffness: 250, damping: 60 },
      ...rest,
      children
    }
  );
};
const chipTrayChips1 = "" + new URL("chips1-bOtshg4c.webp", import.meta.url).href;
const chipTrayChips2 = "" + new URL("chips2-CyQm37fJ.webp", import.meta.url).href;
function ChipActive({ isSquare = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("ChipActive", { isSquare }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "static" })
  ] });
}
function useChipTrayPress() {
  const [pressChipValue, setPressChipValue] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const getPressChipValue = (e) => {
      const touch = e.touches[0];
      const elementUnderFinger = document.elementFromPoint(touch.clientX, touch.clientY);
      if (elementUnderFinger instanceof SVGPathElement) {
        setPressChipValue(Number(elementUnderFinger.getAttribute("data-value")));
      }
    };
    const onTouchEnd = () => {
      if (!pressChipValue) return;
      useCartStore.getState().setSelectChipVal(pressChipValue);
      useLayoutStore.setState({ isOpenSelector: false });
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
const ChipTrayAnimation = ({ children, position, enable = true, ...rest }) => {
  const startPosition = reactExports.useMemo(() => {
    if (position === "left") return { x: 16, y: 0 };
    if (position === "right") return { x: -16, y: 0 };
    if (position === "up") return { x: 0, y: 16 };
    if (position === "down") return { x: 0, y: -16 };
    return { x: 0, y: 0 };
  }, [position]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DisplacementContainer,
    {
      enable,
      startPosition,
      endPosition: { x: 0, y: 0 },
      animation: { duration: 0.6, delay: 1, type: "spring", stiffness: 250, damping: 60 },
      ...rest,
      children
    }
  );
};
function FooterChip({ value, isDisabled }) {
  const numValue = convertLabel(value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      id: "FooterChip",
      className: cn("g-chip", "absolute mb-[0.2rem] ml-[0.1rem] w-[2.625rem] text-[1.25rem]", { isDisabled }),
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
}
const FooterChip$1 = reactExports.memo(FooterChip);
function ShineBorder() {
  const chipList = useCartStore((s) => s.chipList);
  const selectedChipVal = useCartStore((s) => s.selectedChipVal);
  const filteredChipList = chipList.filter((chip) => chip.onTable);
  const IS_SMALL_DEVICE = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const shineDegree = filteredChipList.findIndex((chip) => chip.amount === selectedChipVal);
  let basicDeg;
  let offsetDeg;
  if (IS_SMALL_DEVICE) {
    basicDeg = 52.5;
    offsetDeg = shineDegree * 140 / 7 + shineDegree * 9;
  } else {
    basicDeg = 70;
    offsetDeg = shineDegree * 130 / 7 + shineDegree * 6;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "shine",
      style: {
        backgroundImage: "conic-gradient(\n          from 180deg at 50% 53.11%,\n          rgba(112, 7, 7, 0) ".concat(offsetDeg + basicDeg, "deg,\n          rgba(0, 0, 0, 0.3) ").concat(offsetDeg + basicDeg + 12, "deg,\n          #c3a785 ").concat(offsetDeg + basicDeg + 24, "deg,\n          rgba(112, 7, 7, 0.3) ").concat(offsetDeg + basicDeg + 36, "deg,\n          rgba(112, 7, 7, 0) ").concat(offsetDeg + basicDeg + 48, "deg\n        )")
      }
    }
  );
}
const ShineBorder$1 = reactExports.memo(ShineBorder);
const chipsVariants$1 = {
  closed: {
    opacity: 0,
    x: 0,
    y: 0
  },
  open: (index) => {
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
function ChipTray({ enableAnimation = false }) {
  const isOpen = useLayoutStore((s) => s.isOpenSelector);
  const toggleSelector = useLayoutStore((s) => s.toggleSelector);
  const chipTrayList = useCartStore((s) => s.chipList).filter((chip) => chip.onTable === true);
  const selectedChipVal = useCartStore((s) => s.selectedChipVal);
  const selectedChipIdx = useCartStore((s) => s.selectedChipIdx);
  const isSquare = selectedChipIdx === 11;
  const pressChipValue = useChipTrayPress();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "ChipTray",
      className: cn("contents", { isOpen }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blackBackground" }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mask",
            onClick: () => toggleSelector()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("center absolute bottom-0 z-[1] w-full text-[1.25rem]", !isOpen && "pointer-events-none"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chipWrap z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoLightImg,
                className: "SvgLogo",
                alt: "Crystal Logo Light"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: chipTrayList.map((chip, idx) => {
              const isActive = isChipActive(chip.amount);
              const isDisabled = isChipDisabled(chip.amount);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
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
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChipSelectorChip,
                      {
                        value: chip.amount,
                        isActive,
                        isDisabled,
                        pressChipValue,
                        className: "chipTrayChip"
                      }
                    ),
                    chip.amount === selectedChipVal && /* @__PURE__ */ jsxRuntimeExports.jsx(ChipActive, { isSquare })
                  ]
                },
                idx
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChipTrayPressArea$1, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Image,
            {
              src: Semicircle,
              className: "semicircle opacity-0",
              alt: "Semicircle decoration"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "oval z-[1]",
              animate: isOpen ? "open" : "closed",
              variants: {
                open: { opacity: 1, scale: 1 },
                closed: { opacity: 0, scale: 0.5 }
              },
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 256,
                damping: 24,
                mass: 1
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShineBorder$1, {})
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FooterAnimation,
          {
            type: "chip",
            enable: enableAnimation,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ClickableArea,
              {
                className: "z-[2] h-[3.125rem] w-[5.125rem]",
                onClick: toggleSelector,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    id: "ChipBtn",
                    className: "center relative z-[1] -mb-1 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FooterChip$1,
                        {
                          value: selectedChipVal,
                          isDisabled: isChipDisabled(selectedChipVal)
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ChipTrayAnimation,
                        {
                          position: "left",
                          enable: enableAnimation,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Image,
                            {
                              src: chipTrayChips1,
                              className: "opacity-1 ml-1 h-[2.15rem]",
                              alt: "Chip tray"
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ChipTrayAnimation,
                        {
                          position: "right",
                          enable: enableAnimation,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Image,
                            {
                              src: chipTrayChips2,
                              className: "opacity-1 h-[2.15rem]",
                              alt: "Chip tray"
                            }
                          )
                        }
                      )
                    ]
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
}
const ChipTrayPressArea$1 = () => {
  const chipTrayList = useCartStore((s) => s.chipList).filter((chip) => chip.onTable === true);
  const isOpen = useLayoutStore((s) => s.isOpenSelector);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 329 309",
      fill: "none",
      className: cn("absolute top-[-10.8rem] w-[21rem]", { hidden: !isOpen }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M4.52506 190.489C-1.27792 167.734 -1.50249 144.039 3.86829 121.192L76.4095 136.234C73.4642 148.763 73.5873 161.758 76.7697 174.236L4.52506 190.489Z",
            fill: "#ffffff66",
            "data-value": chipTrayList[0].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M3.85593 121.244C9.21823 98.3949 20.0361 76.9878 35.4933 58.6384L93.7527 101.929C85.276 111.992 79.3434 123.732 76.4027 136.263L3.85593 121.244Z",
            fill: "#ffffff66",
            "data-value": chipTrayList[1].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M35.4577 58.6806C50.908 40.3262 70.5952 25.5073 93.0335 15.3422L125.308 78.1858C113.003 83.7604 102.206 91.887 93.7332 101.953L35.4577 58.6806Z",
            fill: "#ffffff66",
            "data-value": chipTrayList[2].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M92.9821 15.3655C115.417 5.19316 140.018 -0.0606564 164.93 0.000528247L164.736 69.7724C151.074 69.7389 137.583 72.6201 125.28 78.1986L92.9821 15.3655Z",
            fill: "#ffffff66",
            "data-value": chipTrayList[3].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M164.873 0.000397809C186.302 0.046069 207.514 4.02347 227.319 11.7091L198.95 76.1934C188.089 71.9786 176.456 69.7974 164.705 69.7724L164.873 0.000397809Z",
            fill: "#ffffff66",
            "data-value": chipTrayList[4].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M227.319 11.7091C250.343 20.6441 270.906 34.374 287.455 51.8625L231.929 98.2136C222.853 88.6228 211.576 81.0934 198.95 76.1934L227.319 11.7091Z",
            fill: "#ffffff66",
            "data-value": chipTrayList[5].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M287.417 51.8226C306.297 71.7596 319.358 95.949 325.327 122.035L252.698 136.696C249.424 122.391 242.262 109.125 231.908 98.1917L287.417 51.8226Z",
            fill: "#ffffff66",
            "data-value": chipTrayList[6].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M325.315 121.982C330.559 144.856 330.202 168.549 324.272 191.275L252.119 174.667C255.371 162.205 255.567 149.211 252.691 136.667L325.315 121.982Z",
            fill: "#ffffff66",
            "data-value": chipTrayList[7].amount
          }
        )
      ]
    }
  );
};
const chipTrayChips = "" + new URL("vertical_chips-BB5gtvs-.webp", import.meta.url).href;
const chipsVariants = {
  closed: {
    opacity: 0,
    x: 0,
    y: 0
  },
  open: (index) => {
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
function ChipTrayVertical({ enableAnimation = false }) {
  const isOpen = useLayoutStore((s) => s.isOpenSelector);
  const toggleSelector = useLayoutStore((s) => s.toggleSelector);
  const chipList = useCartStore((s) => s.chipList).filter((chip) => chip.onTable === true);
  const selectedChipVal = useCartStore((s) => s.selectedChipVal);
  const selectedChipIdx = useCartStore((s) => s.selectedChipIdx);
  const isSquare = selectedChipIdx === 11;
  const pressChipValue = useChipTrayPress();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "ChipTray",
      className: cn("smallDevice contents", { isOpen }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blackBackground right-0 top-0" }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mask",
            onClick: () => toggleSelector()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "center absolute right-[8rem] top-1/2 z-[1] w-full -translate-y-1/2 rotate-[270deg] text-[1.25rem]",
              !isOpen && "pointer-events-none"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chipWrap z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: logoLightImg,
                    alt: "crystal logo light",
                    className: "SvgLogo -mb-1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: chipList.map((chip, idx) => {
                  const isActive = isChipActive(chip.amount);
                  const isDisabled = isChipDisabled(chip.amount);
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
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
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rotate-[90deg] scale-[0.85]", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChipSelectorChip,
                          {
                            value: chip.amount,
                            isActive,
                            isDisabled,
                            className: "text-[1.48rem]",
                            pressChipValue
                          }
                        ),
                        chip.amount === selectedChipVal && /* @__PURE__ */ jsxRuntimeExports.jsx(ChipActive, { isSquare })
                      ] })
                    },
                    idx
                  );
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChipTrayPressArea, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Image,
                {
                  src: Semicircle,
                  className: "semicircle opacity-0",
                  alt: "Semicircle decoration"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "oval smallDevice",
                  animate: isOpen ? "open" : "closed",
                  variants: {
                    open: { opacity: 1, scale: 1 },
                    closed: { opacity: 0, scale: 0.5 }
                  },
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 256,
                    damping: 24,
                    mass: 1
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShineBorder$1, {})
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClickableArea,
          {
            className: "z-[2] h-[5.125rem] w-[3.125rem]",
            onClick: toggleSelector,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                id: "ChipBtn",
                className: "center relative z-[1] cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FooterChip$1,
                    {
                      value: selectedChipVal,
                      isDisabled: isChipDisabled(selectedChipVal)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Image,
                    {
                      src: chipTrayChips,
                      alt: "Chip tray"
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}
const ChipTrayPressArea = () => {
  const chipList = useCartStore((s) => s.chipList).filter((chip) => chip.onTable === true);
  const isOpen = useLayoutStore((s) => s.isOpenSelector);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 461 318",
      fill: "none",
      className: cn("absolute top-[-8rem] w-[29rem] rotate-90", { hidden: !isOpen }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M230.5 318C205.326 318 180.321 315.155 156.48 309.579L184.198 253.193C199.111 256.681 214.753 258.46 230.5 258.46L230.5 318Z",
            fill: "#ffffff66",
            "data-value": chipList[0].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M156.599 309.606C126.449 302.567 98.7392 291.296 75.216 276.504L133.364 232.503C148.079 241.756 165.412 248.806 184.272 253.21L156.599 309.606Z",
            fill: "#ffffff66",
            "data-value": chipList[1].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M75.3706 276.601C52.6918 262.366 34.3581 245.153 21.4433 225.97L99.7272 200.892C107.806 212.892 119.274 223.66 133.461 232.564L75.3706 276.601Z",
            fill: "#ffffff66",
            "data-value": chipList[2].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M21.5961 226.196C7.27764 205.015 -0.0956906 181.917 0.000937465 158.547L86.3142 158.716C86.2538 173.336 90.8661 187.784 99.8228 201.034L21.5961 226.196Z",
            fill: "#ffffff66",
            "data-value": chipList[3].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M0.00035116 158.722C0.05747 136.15 7.08115 113.845 20.6042 93.2908L99.2023 117.896C90.7432 130.754 86.3496 144.707 86.3138 158.826L0.00035116 158.722Z",
            fill: "#ffffff66",
            "data-value": chipList[4].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M20.5874 93.3164C33.2135 74.1164 51.249 56.8403 73.6445 42.4932L132.381 86.1207C118.372 95.0953 107.09 105.902 99.1918 117.912L20.5874 93.3164Z",
            fill: "#ffffff66",
            "data-value": chipList[5].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M73.5939 42.5257C95.983 28.1741 122.286 17.0373 150.973 9.76326L180.753 65.6468C162.808 70.197 146.355 77.1635 132.349 86.1409L73.5939 42.5257Z",
            fill: "#ffffff66",
            "data-value": chipList[6].amount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0",
            d: "M150.984 9.76044C178.175 2.86683 207.007 -0.429288 235.968 0.0447413L233.92 59.5675C215.804 59.271 197.769 61.3329 180.76 65.6451L150.984 9.76044Z",
            fill: "#ffffff66",
            "data-value": chipList[7].amount
          }
        )
      ]
    }
  );
};
function FooterIcon({ type, disable = false, className, animation = "default", onClick: parentOnClick, ...rest }) {
  const supportChatUnread = useChatStore((s) => s.supportChatUnread);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ClickableArea,
    {
      className: cn("size-[3.125rem]", className),
      onClick: (e) => {
        parentOnClick == null ? void 0 : parentOnClick(e);
        playSound(["click"]);
      },
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            id: "FooterIcon",
            viewBox: "0 0 44 44",
            xmlns: "http://www.w3.org/2000/svg",
            className: cn({ disable }, "h-11 w-[2.85rem]"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "linearGradient",
                {
                  id: "FooterIcon_common",
                  x1: "0%",
                  y1: "0%",
                  x2: "0%",
                  y2: "100%",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "stop",
                      {
                        offset: "28.57%",
                        style: { stopColor: "#efeacf", stopOpacity: 1 }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "stop",
                      {
                        offset: "64.29%",
                        style: { stopColor: "#aaa48f", stopOpacity: 1 }
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "linearGradient",
                {
                  id: "FooterIcon_disable",
                  x1: "0%",
                  y1: "0%",
                  x2: "0%",
                  y2: "100%",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "stop",
                      {
                        offset: "10%",
                        style: { stopColor: "#575757", stopOpacity: 1 }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "stop",
                      {
                        offset: "38.23%",
                        style: { stopColor: "#363535", stopOpacity: 1 }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "stop",
                      {
                        offset: "100%",
                        style: { stopColor: "#1d1d1d", stopOpacity: 1 }
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("g", { clipPath: "url(#FooterIcon-".concat(type, ")"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  width: "44",
                  height: "44",
                  fill: "url(#FooterIcon_".concat(disable ? "disable" : "common", ")")
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("clipPath", { id: "FooterIcon-chat", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    className: cn("chat_dot1", { "no-animation": animation === "none" }),
                    d: "M18.7408 23.6912C19.4243 23.6912 19.9783 23.1372 19.9783 22.4537C19.9783 21.7703 19.4243 21.2162 18.7408 21.2162C18.0574 21.2162 17.5033 21.7703 17.5033 22.4537C17.5033 23.1372 18.0574 23.6912 18.7408 23.6912Z",
                    fill: "currentColor"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    className: cn("chat_dot2", { "no-animation": animation === "none" }),
                    d: "M23.6908 22.4537C23.6908 23.1372 23.1368 23.6912 22.4533 23.6912C21.7699 23.6912 21.2158 23.1372 21.2158 22.4537C21.2158 21.7703 21.7699 21.2162 22.4533 21.2162C23.1368 21.2162 23.6908 21.7703 23.6908 22.4537Z",
                    fill: "currentColor"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    className: cn("chat_dot3", { "no-animation": animation === "none" }),
                    d: "M26.1658 23.6912C26.8493 23.6912 27.4033 23.1372 27.4033 22.4537C27.4033 21.7703 26.8493 21.2162 26.1658 21.2162C25.4824 21.2162 24.9283 21.7703 24.9283 22.4537C24.9283 23.1372 25.4824 23.6912 26.1658 23.6912Z",
                    fill: "currentColor"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.3533 22.4537C32.3533 27.9213 27.921 32.3537 22.4533 32.3537H12.5533V22.4537C12.5533 16.9861 16.9857 12.5537 22.4533 12.5537C27.921 12.5537 32.3533 16.9861 32.3533 22.4537ZM30.3733 22.4537C30.3733 26.8278 26.8274 30.3737 22.4533 30.3737H14.5333V22.4537C14.5333 18.0796 18.0792 14.5337 22.4533 14.5337C26.8274 14.5337 30.3733 18.0796 30.3733 22.4537Z",
                    fill: "currentColor"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("clipPath", { id: "FooterIcon-undo", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    className: cn("undo_arrow", { "no-animation": animation === "none" }),
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M 17.7665 12.4975 C 18.162 12.875 18.1766 13.5017 17.7991 13.8972 L 15.1966 16.6236 L 15.1966 18.6036 L 15.1966 18.6036 L 17.7991 21.3301 C 18.1766 21.7256 18.162 22.3523 17.7665 22.7298 C 17.371 23.1073 16.7443 23.0927 16.3668 22.6972 L 12.1668 18.2972 C 11.8017 17.9146 11.8017 17.3126 12.1669 16.93 L 16.3668 12.5301 C 16.7444 12.1346 17.371 12.12 17.7665 12.4975 Z",
                    fill: "#FEFEFE"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M 15.1966 16.6236 H 26.323 C 29.6962 16.6236 32.353 19.4748 32.353 22.8937 V 23.7737 C 32.353 27.1926 29.6962 30.0436 26.323 30.0436 H 14.563 C 14.0162 30.0436 13.573 29.6004 13.573 29.0536 C 13.573 28.5069 14.0162 28.0636 14.563 28.0636 H 26.323 C 28.5168 28.0636 30.373 26.1868 30.373 23.7737 V 22.8937 C 30.373 20.4805 28.5168 18.6036 26.323 18.6036 H 15.1966 Z",
                    fill: "#FEFEFE"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "FooterIcon-repeat", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  className: cn("repeat_line1", { "no-animation": animation === "none" }),
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.1231 13.874C17.5668 13.874 13.8732 17.5677 13.8732 22.124C13.8732 26.6804 17.5668 30.3741 22.1231 30.3741C26.6795 30.3741 30.3732 26.6804 30.3732 22.124C30.3732 21.5773 30.8164 21.134 31.3632 21.134C31.91 21.134 32.3532 21.5773 32.3532 22.124C32.3532 27.7739 27.773 32.3541 22.1231 32.3541C16.4733 32.3541 11.8932 27.7739 11.8932 22.124C11.8932 16.4742 16.4733 11.894 22.1231 11.894C25.3352 11.894 28.2004 13.3745 30.0752 15.688L30.4166 14.5739C30.5769 14.0512 31.1305 13.7573 31.6533 13.9175C32.1761 14.0777 32.47 14.6314 32.3097 15.1541L31.3456 18.3C31.2181 18.7159 30.834 18.9999 30.399 18.9999H27.5352C26.9884 18.9999 26.5452 18.5566 26.5452 18.0099C26.5452 17.4631 26.9884 17.0199 27.5352 17.0199H28.6054C27.0938 15.1029 24.7514 13.874 22.1231 13.874Z",
                  fill: "#FEFEFE"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("clipPath", { id: "FooterIcon-twice", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    className: cn("twice_line1", { "no-animation": animation === "none" }),
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.9768 17.3621C19.4747 16.068 18.0538 15.005 16.1257 15.0523C13.9946 15.1045 12.3642 16.735 12.2304 18.1412C12.1784 18.6878 11.6896 19.0891 11.1387 19.0374C10.5878 18.9858 10.1834 18.5008 10.2354 17.9542C10.4787 15.3988 13.0866 13.1379 16.0762 13.0646C18.7938 12.998 21.0203 14.5176 21.8469 16.6477C22.6986 18.8426 21.9802 21.4362 19.3457 23.2871C18.5803 23.8248 17.704 24.3156 16.8681 24.7837L16.798 24.823C15.9217 25.3138 15.0845 25.7859 14.3431 26.3073C13.2063 27.1066 12.4212 27.9326 12.1152 28.9492H19.7213C20.0756 28.9492 20.4155 28.8096 20.666 28.561L21.7883 27.4475C22.1796 27.0592 22.814 27.0592 23.2052 27.4475C23.5965 27.8357 23.5965 28.4651 23.2052 28.8534L22.0829 29.9669C21.4566 30.5884 20.6071 30.9375 19.7213 30.9375H9.96875V29.9434C9.96875 27.4725 11.5084 25.8637 13.1843 24.6851C14.0236 24.0949 14.9512 23.5743 15.8129 23.0916L15.8358 23.0788C16.708 22.5902 17.5071 22.1426 18.1877 21.6644C20.1821 20.2633 20.4538 18.5913 19.9768 17.3621Z",
                    fill: "#FEFEFE"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    className: cn("twice_line2", { "no-animation": animation === "none" }),
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M33.9116 22.0992C34.3028 22.4875 34.3028 23.1169 33.9116 23.5051L31.0214 26.3728L33.9116 29.2404C34.3028 29.6286 34.3028 30.2581 33.9116 30.6463C33.5203 31.0346 32.8859 31.0346 32.4946 30.6463L29.6045 27.7787L26.7143 30.6463C26.323 31.0346 25.6886 31.0346 25.2974 30.6463C24.9061 30.2581 24.9061 29.6286 25.2974 29.2404L28.1875 26.3728L25.2974 23.5051C24.9061 23.1169 24.9061 22.4875 25.2974 22.0992C25.6886 21.711 26.323 21.711 26.7143 22.0992L29.6045 24.9669L32.4946 22.0992C32.8859 21.711 33.5203 21.711 33.9116 22.0992Z",
                    fill: "#FEFEFE"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("clipPath", { id: "FooterIcon-hamburger", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.2137 15.335C13.2137 14.7102 13.7091 14.2036 14.3202 14.2036H30.9173C31.5284 14.2036 32.0237 14.7102 32.0237 15.335C32.0237 15.9599 31.5284 16.4665 30.9173 16.4665H14.3202C13.7091 16.4665 13.2137 15.9599 13.2137 15.335ZM13.2137 22.1236C13.2137 21.4987 13.7091 20.9922 14.3202 20.9922H30.9173C31.5284 20.9922 32.0237 21.4987 32.0237 22.1236C32.0237 22.7485 31.5284 23.255 30.9173 23.255H14.3202C13.7091 23.255 13.2137 22.7485 13.2137 22.1236Z",
                    fill: "#FEFEFE"
                  }
                ),
                animation === "default" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M13.2137 28.9122 C 13.2137 28.2873 13.7091 27.7808 14.3202 27.7808 H 22.6187 C 23.2298 27.7808 23.7251 28.2873 23.7251 28.9122 C 23.7251 29.5371 23.2298 30.0436 22.6187 30.0436 H 14.3202 C 13.7091 30.0436 13.2137 29.5371 13.2137 28.9122 Z",
                    fill: "#FEFEFE",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "animate",
                      {
                        attributeName: "d",
                        from: "M13.2137 28.9122 C 13.2137 28.2873 13.7091 27.7808 14.3202 27.7808 H 22.6187 C 23.2298 27.7808 23.7251 28.2873 23.7251 28.9122 C 23.7251 29.5371 23.2298 30.0436 22.6187 30.0436 H 14.3202 C 13.7091 30.0436 13.2137 29.5371 13.2137 28.9122 Z",
                        to: "M13.2137 28.9122C13.2137 28.2873 13.7091 27.7808 14.3202 27.7808H30.9173C31.5284 27.7808 32.0237 28.2873 32.0237 28.9122C32.0237 29.5371 31.5284 30.0436 30.9173 30.0436H14.3202C13.7091 30.0436 13.2137 29.5371 13.2137 28.9122Z",
                        dur: "0.72s",
                        fill: "freeze",
                        begin: "1s",
                        id: "hamburgerLineAnim"
                      }
                    )
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M13.2137 28.9122C13.2137 28.2873 13.7091 27.7808 14.3202 27.7808H30.9173C31.5284 27.7808 32.0237 28.2873 32.0237 28.9122C32.0237 29.5371 31.5284 30.0436 30.9173 30.0436H14.3202C13.7091 30.0436 13.2137 29.5371 13.2137 28.9122Z",
                    fill: "#FEFEFE"
                  }
                )
              ] })
            ]
          }
        ),
        type === "hamburger" && supportChatUnread !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-[54%] right-[22%] h-[0.625rem] w-[0.625rem] rounded-full border-[1.5px] border-[#16150E] bg-[linear-gradient(180deg,_#D94747_0%,_#731818_100%)]"
          }
        )
      ]
    }
  );
}
const FooterIcon$1 = reactExports.memo(FooterIcon);
function Footer({ enableAnimation = false }) {
  const toggleMenu = useLayoutStore((s) => s.toggleMenu);
  const isOpen = useLayoutStore((s) => s.isOpenSelector);
  const boardHistory = useCartStore((s) => s.boardHistory);
  const boardHistoryCache = useCartStore((s) => s.boardHistoryCache);
  const remainedBalance = useCartStore((s) => s.remainedBalance);
  const handleDouble = useCartStore((s) => s.handleDouble);
  const handleRepeat = useCartStore((s) => s.handleRepeat);
  const handleUndo = useCartStore((s) => s.handleUndo);
  const pressAttrs = useLongPress(() => useCartStore.setState({ boardHistory: [], totalBet: 0 }), {
    threshold: 1500
  });
  const cacheSum = boardHistoryCache ? Object.values(boardHistoryCache).reduce((a, b) => a + b, 0) : 0;
  const isRepeatDisable = !boardHistoryCache || remainedBalance - cacheSum < 0;
  const isBet = useBettingStore((s) => s.isBet);
  const isOverLimit = useBettingStore((s) => s.isOverLimit);
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const DeviceContainer2 = reactExports.useMemo(
    () => ({ children, type }) => {
      return isSmallDevice ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterAnimation,
        {
          type,
          enable: enableAnimation,
          children
        }
      );
    },
    [enableAnimation, isSmallDevice]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DisplacementContainer,
    {
      className: "flex flex-col overflow-hidden",
      startPosition: { x: -1e-3, y: 0 },
      endPosition: { x: 0, y: 0 },
      animation: { duration: 1.54, delay: 0 },
      styleAfterAnimation: { overflow: "visible", zIndex: 3 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          id: "Footer",
          className: cn("relative mt-[.275rem] flex h-11 w-full select-none items-center pb-[.4188rem]", isOpen ? "z-[11]" : "z-[3]", {
            isSmallDevice
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DeviceContainer2, { type: "chat", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              FooterIcon$1,
              {
                animation: enableAnimation ? "default" : "none",
                type: "chat",
                onClick: () => {
                  toggleMenu("chat");
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DeviceContainer2, { type: "undo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              FooterIcon$1,
              {
                ...pressAttrs,
                animation: enableAnimation ? "default" : "none",
                id: "MainUndoBtn",
                disable: boardHistory.length === 0 || !isBet,
                type: "undo",
                onClick: handleUndo
              }
            ) }),
            isSmallDevice ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChipTrayVertical, { enableAnimation }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChipTray, { enableAnimation }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DeviceContainer2, { type: "doubleRepeatBtn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "center",
                id: "doubleRepeatBtn",
                children: [
                  boardHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FooterIcon$1,
                    {
                      animation: enableAnimation ? "default" : "none",
                      type: "twice",
                      disable: !isBet || isOverLimit,
                      onClick: handleDouble
                    }
                  ),
                  boardHistory.length <= 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FooterIcon$1,
                    {
                      animation: enableAnimation ? "default" : "none",
                      type: "repeat",
                      disable: !isBet || isRepeatDisable,
                      onClick: handleRepeat
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DeviceContainer2, { type: "hamburger", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              FooterIcon$1,
              {
                animation: enableAnimation ? "default" : "none",
                type: "hamburger",
                className: "h-12 w-[2.9rem]",
                onClick: () => toggleMenu("index")
              }
            ) })
          ]
        }
      )
    }
  );
}
const Footer$1 = reactExports.memo(Footer);
const defaultOpacity = {
  start: 0,
  end: 1
};
const OpacityContainer = ({
  children,
  opacity = defaultOpacity,
  animation = defaultAnimation,
  isAnimating = true,
  initial,
  animate,
  style,
  styleAfterAnimation,
  onAnimationComplete,
  enable = true,
  ...rest
}) => {
  var _a, _b, _c;
  const [animationEnded, setAnimationEnded] = reactExports.useState(false);
  const defaultInitial = { opacity: (_a = opacity.start) != null ? _a : defaultOpacity.start };
  const defaultAnimate = isAnimating ? { opacity: (_b = opacity.end) != null ? _b : defaultOpacity.end } : { opacity: (_c = opacity.start) != null ? _c : defaultOpacity.start };
  const handleAnimationComplete = () => {
    setAnimationEnded(true);
    onAnimationComplete == null ? void 0 : onAnimationComplete();
  };
  if (!enable) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: initial || defaultInitial,
      animate: animate || defaultAnimate,
      transition: { ...animation },
      onAnimationComplete: handleAnimationComplete,
      style: {
        position: "relative",
        ...style,
        ...animationEnded ? styleAfterAnimation : {}
      },
      ...rest,
      children
    }
  );
};
const defaultScale = {
  start: 1,
  end: 1
};
const ScaleContainer = ({
  children,
  scale = defaultScale,
  animation = defaultAnimation,
  isAnimating = true,
  initial,
  animate,
  style,
  styleAfterAnimation,
  onAnimationComplete,
  enable = true,
  ...rest
}) => {
  var _a, _b, _c;
  const [animationEnded, setAnimationEnded] = reactExports.useState(false);
  const defaultInitial = { scale: (_a = scale.start) != null ? _a : defaultScale.start };
  const defaultAnimate = isAnimating ? { scale: (_b = scale.end) != null ? _b : defaultScale.end } : { scale: (_c = scale.start) != null ? _c : defaultScale.start };
  const handleAnimationComplete = () => {
    setAnimationEnded(true);
    onAnimationComplete == null ? void 0 : onAnimationComplete();
  };
  if (!enable) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: initial || defaultInitial,
      animate: animate || defaultAnimate,
      transition: { ...animation },
      onAnimationComplete: handleAnimationComplete,
      style: {
        position: "relative",
        transformOrigin: "center",
        ...style,
        ...animationEnded ? styleAfterAnimation : {}
      },
      ...rest,
      children
    }
  );
};
const HeaderAnimation = ({ children, displacementProps, scaleProps, type, enable = true }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DisplacementContainer,
    {
      enable,
      startPosition: { x: 0, y: type === "clock" ? "100%" : "150%" },
      endPosition: { x: 0, y: 0, z: 1 },
      animation: { duration: 0.75, delay: 1.25, type: "spring", stiffness: 250, damping: 60 },
      className: "z-[-1] overflow-hidden",
      ...displacementProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScaleContainer,
        {
          enable,
          scale: { start: type === "clock" ? 0.75 : 0, end: 1 },
          animation: { duration: 1.06, delay: 0.94, type: "spring", stiffness: 250, damping: 60 },
          ...scaleProps,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            OpacityContainer,
            {
              enable,
              opacity: { start: 0.75, end: 1 },
              animation: { duration: 0.5, delay: 1.5, type: "spring", stiffness: 250, damping: 60 },
              children
            }
          )
        }
      )
    }
  );
};
function useHeaderFontSize(targetRef) {
  const IS_SMALL_DEVICE = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const rootEmFontSize = useLayoutStore((s) => s.rootEmFontSize);
  const { remainedBalance, totalBet } = useCartStore((s) => ({
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
    useLayoutStore.setState({ mobileHeaderFontSize: fontSize });
    const TotalBet2 = document.getElementById("TotalBet");
    const MainBalance = document.getElementById("MainBalance");
    if (!TotalBet2 || !MainBalance) return;
    TotalBet2.style.fontSize = "".concat(fontSize, "rem");
    MainBalance.style.fontSize = "".concat(fontSize, "rem");
  }, [remainedBalance, totalBet, IS_SMALL_DEVICE, targetRef, rootEmFontSize]);
}
const Balance = reactExports.memo(function() {
  const { remainedBalance, currencySymbol } = useCartStore((s) => ({
    remainedBalance: s.remainedBalance,
    currencySymbol: s.currencySymbol
  }));
  const mobileHeaderFontSize = useLayoutStore((s) => s.mobileHeaderFontSize);
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      id: "MainBalance",
      className: "center gap-[0.2rem] whitespace-nowrap text-[0.688rem] text-[#f4EFE8]",
      style: { fontSize: "".concat(mobileHeaderFontSize, "rem") },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pairLabel", children: [
          t("COMMON.BALANCE"),
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pairNumber", children: "".concat(currencySymbol, " ").concat(thousandSeparator(remainedBalance)) })
      ]
    }
  );
});
const TotalBet = reactExports.memo(() => {
  const mobileHeaderFontSize = useLayoutStore((s) => s.mobileHeaderFontSize);
  const totalBet = useCartStore((s) => s.totalBet);
  const lastWinCache = useWinNumberStore((s) => s.lastWinCache);
  const { t } = useTranslation();
  const currencySymbol = useCartStore((s) => s.currencySymbol);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      id: "TotalBet",
      className: "center gap-[.2188rem] whitespace-nowrap text-[0.688rem] text-[#C9AE8D]",
      style: { fontSize: "".concat(mobileHeaderFontSize, "rem") },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pairLabel", children: [
          lastWinCache ? t("COMMON.LAST_WIN") : t("COMMON.TOTAL_BET"),
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pairNumber pr-[.0313rem]", children: "".concat(currencySymbol, " ").concat(lastWinCache ? thousandSeparator(lastWinCache) : thousandSeparator(totalBet)) })
      ]
    }
  );
});
const Clone = reactExports.memo(() => {
  const cloneRef = reactExports.useRef(null);
  const { remainedBalance, currencySymbol } = useCartStore((s) => ({
    remainedBalance: s.remainedBalance,
    currencySymbol: s.currencySymbol
  }));
  const totalBet = useCartStore((s) => s.totalBet);
  const { t } = useTranslation();
  useHeaderFontSize(cloneRef);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      id: "Clone",
      ref: cloneRef,
      className: "center invisible absolute gap-[.2188rem] whitespace-nowrap text-[0.688rem] text-[#f4EFE8]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pairLabel", children: [
          t("COMMON.TOTAL_BET"),
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pairNumber pr-[.0313rem]", children: "".concat(currencySymbol, " ").concat(thousandSeparator(Math.max(remainedBalance, totalBet))) })
      ]
    }
  );
});
const DeviceContainer = reactExports.memo(({ children, type, enableAnimation }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    HeaderAnimation,
    {
      type,
      enable: enableAnimation,
      children
    }
  );
});
function Header({ betResult, enableAnimation = false }) {
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DisplacementContainer,
    {
      id: "Header",
      className: cn("z-[0] flex w-full flex-col px-2", { "fixed top-0 px-0 pr-5": isSmallDevice }),
      startPosition: { x: 0, y: -1e-3 },
      endPosition: { x: 0, y: 0 },
      animation: { duration: 2.2, delay: 0 },
      children: [
        betResult && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mr-[-0.5rem]", children: betResult }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "HeaderBar",
            className: "relative flex w-full items-center justify-between py-[.125rem]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clone, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DeviceContainer,
                {
                  type: "balance",
                  enableAnimation,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Balance, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                DeviceContainer,
                {
                  type: "clock",
                  enableAnimation,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, {})
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DeviceContainer,
                {
                  type: "totalBet",
                  enableAnimation,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(TotalBet, {})
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const Header$1 = reactExports.memo(Header);
const useBrowserLayoutEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : () => {
};
const getViewportSize = () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  if (window.visualViewport) {
    width = window.visualViewport.width;
    height = window.visualViewport.height;
  }
  width = Math.round(width);
  height = Math.round(height);
  return { width, height };
};
const fixScroll = () => scrollTo(0, 0);
const useViewportSize = () => {
  const [viewportSize, setViewportSize] = reactExports.useState(getViewportSize());
  const updateViewportSize = reactExports.useCallback(() => {
    const viewportSize2 = getViewportSize();
    setViewportSize((oldViewportSize) => {
      if (oldViewportSize && oldViewportSize.width === viewportSize2.width && oldViewportSize.height === viewportSize2.height) {
        return oldViewportSize;
      }
      return viewportSize2;
    });
    fixScroll();
  }, []);
  useBrowserLayoutEffect(updateViewportSize, [updateViewportSize]);
  reactExports.useEffect(() => {
    var _a;
    const effectTwice = () => {
      updateViewportSize();
      setTimeout(updateViewportSize, 200);
    };
    window.addEventListener("resize", effectTwice);
    window.addEventListener("orientationchange", effectTwice);
    (_a = window.visualViewport) == null ? void 0 : _a.addEventListener("resize", effectTwice);
    window.addEventListener("scroll", fixScroll);
    return () => {
      var _a2;
      window.removeEventListener("resize", effectTwice);
      window.removeEventListener("orientationchange", effectTwice);
      (_a2 = window.visualViewport) == null ? void 0 : _a2.removeEventListener("resize", effectTwice);
      window.removeEventListener("scroll", fixScroll);
    };
  }, [updateViewportSize]);
  return viewportSize;
};
function useKeyboardMargin() {
  const isSmallDevice = useConfigStore((state) => state.IS_SMALL_DEVICE);
  const OFFSET = isSmallDevice ? 0.5 : 2.75;
  const isVirtualKeyboardOpened = useLayoutStore((state) => state.isVirtualKeyboardOpened);
  const visualViewportMargin = useLayoutStore((state) => state.visualViewportMargin);
  const rootEmFontSize = useLayoutStore((state) => state.rootEmFontSize);
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
  const { header, isHeaderMultiLineText = false, content, footer, hideScrollHint, contentWrapClassName, scrollWrapClassName } = props;
  const { requireContentShadow = false, leftIcon = true } = props;
  const { menuPage, closeMenu, goBackMenu, getIsFullHeight } = useLayoutStore();
  const scrollWrapRef = reactExports.useRef(null);
  usePreventPullToRefresh(scrollWrapRef);
  const isOpenMenu = menuPage !== null;
  const isFull = getIsFullHeight() && isOpenMenu;
  const [isBottom, setIsBottom] = reactExports.useState(false);
  const handleScroll = (e) => {
    const target = e.target;
    const scrollEnd = target.scrollHeight - target.scrollTop === target.clientHeight;
    if (isBottom !== scrollEnd) setIsBottom(scrollEnd);
  };
  const renderLeftIcon = () => {
    if (leftIcon) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Icon.Left,
        {
          className: "size-11 cursor-pointer",
          onClick: () => {
            goBackMenu();
            playSound(["click"]);
          }
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-11" });
  };
  reactExports.useEffect(() => {
    if (!menuPage || skipScrollPages.includes(menuPage)) return;
    scrollWrapToTop();
  }, [menuPage]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        id: "FooterMenu",
        className: cn({ isOpenMenu, isFull }),
        "data-modal-type": menuPage,
        children: [
          header && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn("flex items-center justify-between px-4 pb-[0.0625rem] pt-4", {
                "pb-4": isHeaderMultiLineText
              }),
              children: [
                renderLeftIcon(),
                typeof header === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "goldenHeader ml-[0.1rem] mt-[0.1rem]", children: header }) : header,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon.Close,
                  {
                    className: "size-11 cursor-pointer",
                    onClick: () => {
                      playSound(["click"]);
                      closeMenu();
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("contentWrap", contentWrapClassName), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                ref: scrollWrapRef,
                className: cn("scrollWrap", scrollWrapClassName),
                onScroll: handleScroll,
                children: content
              }
            ),
            requireContentShadow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scrollShadow" }),
            !hideScrollHint && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-[5rem]", "scrollShadow", "transition-opacity", "pointer-events-none", { "opacity-0": isBottom }) })
          ] }),
          footer
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "FooterMenuMask",
        onClick: () => {
          playSound(["click"]);
          closeMenu();
        }
      }
    )
  ] });
}
const Layout = reactExports.memo(FooterLayout);
function SafariHint() {
  const closeMenu = useLayoutStore().closeMenu;
  const { t } = useTranslation();
  reactExports.useEffect(() => {
    localStorage.setItem("safariLaunch", " ");
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "SafariHint",
      className: "flex w-full flex-col items-center px-4 pb-6 pt-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "goldenHeader flex items-center justify-between self-stretch", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("COMMON.SAFARI_HINT1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon.Close,
            {
              onClick: closeMenu,
              className: "w-8 cursor-pointer"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-[1.1875rem] w-[8.9375rem] text-center text-xs leading-4 tracking-[-0.015rem] text-[#B0B0B0]", children: t("COMMON.SAFARI_HINT2") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-[1.1875rem] flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Image,
          {
            className: "ml-[-0.7rem] h-[16.0625rem]",
            src: safariHint,
            alt: "Safari Hint"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "btn cursor-pointer",
            onClick: closeMenu,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inner", children: t("COMMON.SKIP") })
          }
        )
      ]
    }
  );
}
const SafariHint$1 = reactExports.memo(SafariHint);
function MenuBottom({ menus }) {
  const { t, i18n } = useTranslation();
  const masterVolume = useSettingStore((s) => s.masterVolume);
  const toggleAllVolume = useSettingStore((s) => s.toggleAllVolume);
  const exitGame = useConfigStore((s) => s.exitGame);
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
  const muted = masterVolume === 0;
  const menuRenderers = {
    gameSettings: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex h-[3.75rem] items-center justify-between self-stretch border-t-[0.0625rem] border-[#252525]",
        onClick: () => {
          useLayoutStore.setState({ menuPage: "setting" });
          playSound(["click"]);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[0.875rem] font-normal leading-5 tracking-[-0.0262rem] text-[#f9f9f9]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Setting, { className: "w-5" }),
            t("COMMON.GAME_SETTINGS")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.RightGolden, { className: "w-4" })
        ]
      }
    ),
    language: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex h-[3.75rem] justify-between self-stretch border-t-[0.0625rem] border-[#252525]",
        onClick: () => {
          useLayoutStore.setState({ menuPage: "language" });
          playSound(["click"]);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[0.875rem] font-normal leading-5 tracking-[-0.0262rem] text-[#f9f9f9]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Language, { className: "w-5" }),
            t("COMMON.LANGUAGE")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-[0.125rem] pt-[0.08rem]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "g-text-golden overflow-hidden text-ellipsis whitespace-nowrap pt-[0.1rem] text-xs font-normal uppercase leading-4 tracking-[.045rem]", children: selectedLanguageDisplay }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.RightGolden, { className: "w-4" })
          ] })
        ]
      }
    ),
    sound: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[3.75rem] items-center justify-between self-stretch border-t-[0.0625rem] border-[#252525]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[0.875rem] font-normal leading-5 tracking-[-0.0262rem] text-[#f9f9f9]", children: [
        muted ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.SoundOff, { className: "w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Sound, { className: "w-5" }),
        t("COMMON.SOUND")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ClickableArea,
        {
          className: "size-[3.125rem]",
          onClick: () => {
            playSound(["click"]);
            toggleAllVolume();
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: !muted })
        }
      )
    ] }),
    help: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex h-[3.75rem] items-center justify-between self-stretch border-t-[0.0625rem] border-[#252525]",
        onClick: () => {
          useLayoutStore.setState({ menuPage: "rules" });
          playSound(["click"]);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[0.875rem] font-normal leading-5 tracking-[-0.0262rem] text-[#f9f9f9]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Help, { className: "w-[1.3125rem]" }),
            t("COMMON.HELP")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.RightGolden, { className: "w-4" })
        ]
      }
    ),
    exit: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex h-[3.75rem] items-center justify-between self-stretch border-t-[0.0625rem] border-[#252525]",
        onClick: exitGame,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[0.875rem] font-normal leading-5 tracking-[-0.0262rem] text-[#f9f9f9]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Exit, { className: "w-[1.3125rem]" }),
          t("COMMON.EXIT")
        ] })
      }
    )
  };
  return menus.map((menu) => {
    const renderMenu = menuRenderers[menu];
    return renderMenu ? /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: renderMenu() }, menu) : null;
  });
}
function MenuButton(props) {
  const { icon, label, textClassName, menuPage, onClick } = props;
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const masterVolume = useSettingStore((s) => s.masterVolume);
  const isSupport = menuPage === "chat_support";
  const isSound = icon === "Sound";
  const muted = masterVolume === 0;
  const IconComponent = Icon[icon];
  const id = "mobileMenuButton".concat(icon);
  const iconElement = /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-7 w-7" });
  const soundIcon = muted ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.SoundOff, { className: "w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Sound, { className: "w-5" });
  const comingSoon = () => tooltipEventBus.emit("comingSoon", { anchorSelect: "#".concat(id) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id,
      className: "relative flex cursor-pointer flex-col items-center gap-[0.4rem]",
      onClick: onClick ? onClick : comingSoon,
      children: [
        isSound ? soundIcon : iconElement,
        isSupport && /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationHint, { className: "".concat(isSmallDevice ? "right-[1.5rem]" : "right-[2rem]", " top-[-0.75rem]") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal tracking-[-0.015rem] ".concat(textClassName != null ? textClassName : ""), children: label })
      ]
    }
  );
}
const createMenuButton = (icon, translationKey, menuPage) => {
  const ButtonComponent = () => {
    const { t } = useTranslation();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuButton,
      {
        icon,
        label: t(translationKey),
        menuPage,
        onClick: menuPage ? () => {
          useLayoutStore.setState({ menuPage });
          playSound(["click"]);
        } : void 0
      }
    );
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
function MenuTop({ menus }) {
  return menus.map((menu, index) => {
    var _a;
    const ButtonComponent = (_a = buttons[menu]) == null ? void 0 : _a.call(buttons);
    if (!ButtonComponent) return null;
    const shouldShowDivider = index !== 2 && index !== 5;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonComponent, {}),
      shouldShowDivider && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-[0.3125rem] bg-[#323232]" })
    ] }, index);
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
  const JURISDICTION = useConfigStore((s) => s.JURISDICTION);
  const LOBBY_URL = useConfigStore((s) => s.LOBBY_URL);
  const GAME_TYPE = useConfigStore((s) => s.GAME_TYPE);
  const canShowExit = reactExports.useMemo(() => isInIframe() || !!LOBBY_URL, [LOBBY_URL]);
  const { topMenus, bottomMenus } = reactExports.useMemo(() => {
    var _a;
    const menus = (_a = gameVisibilityMenu[GAME_TYPE]) != null ? _a : defaultMenus;
    const availableMenus = menus.filter((item) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-[0.4rem] mt-3 flex w-full flex-col items-center gap-5 px-[1rem] pt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-[1fr_0.0625rem_1fr_0.0625rem_1fr] gap-x-[0.22rem] gap-y-6 self-stretch", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuTop, { menus: topMenus }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start self-stretch px-[.5rem] pt-[0.13rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuBottom, { menus: bottomMenus }) })
  ] });
}
function BaseFooterMenu(props) {
  const { extendedMenu, settingContent } = props;
  const menuPage = useLayoutStore((state) => state.menuPage);
  const titleList = useDataStore((state) => state.titleList);
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const { t } = useTranslation();
  const menuComponents = {
    history: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: t("COMMON.GAME_HISTORY"),
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(GameHistory, {})
      }
    ),
    history_content: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: /* @__PURE__ */ jsxRuntimeExports.jsx(GameHistoryContentHeader, {}),
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(GameHistoryContent, {}),
        scrollWrapClassName: "pb-[3.5rem]"
      }
    ),
    limits: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: t("COMMON.PAYOUTS_LIMITS"),
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(GameLimit, {})
      }
    ),
    chat: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: /* @__PURE__ */ jsxRuntimeExports.jsx(ChatHeader, {}),
        isHeaderMultiLineText: true,
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChatRoom, { type: RoomType.Live })
      }
    ),
    chat_support: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: t("COMMON.SUPPORT"),
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChatRoom, { type: RoomType.Support })
      }
    ),
    setting: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: t("COMMON.SETTINGS"),
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { gameSpecificsElement: settingContent == null ? void 0 : settingContent.gameSpecificsElement }),
        scrollWrapClassName: "pb-[2.5rem]"
      }
    ),
    language: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: t("COMMON.LANGUAGE"),
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(SettingLanguage, {}),
        scrollWrapClassName: "pb-[3rem]"
      }
    ),
    safari_hint: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(SafariHint$1, {}),
        hideScrollHint: true
      }
    ),
    autoplay: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: t("COMMON.AUTOPLAY"),
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoPlay, { requireTitle: false }),
        leftIcon: false
      }
    ),
    rules: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: t("COMMON.HELP_RULES"),
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(GameRule, { titleList }),
        scrollWrapClassName: "pb-[2.6875rem]"
      }
    ),
    rules_inner: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: t("COMMON.GAMES_RULES"),
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(GameRuleInfo, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GameRules, {}) }),
        scrollWrapClassName: "pb-[2.6875rem]"
      }
    ),
    default: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        scrollWrapClassName: cn("max-h-[25.91875rem] pb-[3.6rem]", {
          "max-h-[25.29569rem] pb-[3rem]": isSmallDevice
        }),
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(GameMenu, {})
      }
    ),
    ...extendedMenu
  };
  return menuComponents[menuPage] || menuComponents.default;
}
function MobileBettingMode() {
  const { t } = useTranslation();
  const betMode = useBettingStore((s) => s.betMode);
  const toggleType = (betMode2) => {
    useBettingStore.setState({ betMode: betMode2 });
  };
  const getBettingModeImage = (betMode2) => {
    if (betMode2 === "straight") return StraightUp;
    if (betMode2 === "fullComplete") return FullComplete;
    return Default;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "px-[0.875rem] pb-6",
      id: "BettingMode",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6 mt-[0.7rem] flex px-[0.125rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Image,
          {
            src: getBettingModeImage(betMode),
            alt: "Betting mode"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn("box left-0 w-[34.1%]", { active: betMode === "default" }),
            onClick: () => toggleType("default"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("COMMON.MODE_DEFAULT") })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn("box left-[33%] w-[34%]", { active: betMode === "straight" }),
            onClick: () => toggleType("straight"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("COMMON.MODE_STRAIGHT") })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn("box right-0 w-[33.9%]", { active: betMode === "fullComplete" }),
            onClick: () => toggleType("fullComplete"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("COMMON.MODE_FULL_COMPLETE") })
          }
        )
      ] })
    }
  );
}
function FooterMenu() {
  const { t } = useTranslation();
  const menuPage = useLayoutStore((state) => state.menuPage);
  const activeStatisticTab = useStatisticStore((state) => state.activeTab);
  const requireContentShadow = menuPage === "statistics" && activeStatisticTab === "last500";
  const extendedMenu = {
    betting_mode: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: t("ROULETTE.BETTING_MODE"),
        leftIcon: false,
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileBettingMode, {})
      }
    ),
    statistics: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Layout,
      {
        header: t("COMMON.STATISTICS"),
        footer: /* @__PURE__ */ jsxRuntimeExports.jsx(StatisticFooter, {}),
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(Statistic, {}),
        hideScrollHint: true,
        requireContentShadow
      }
    )
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BaseFooterMenu, { extendedMenu });
}
function useChipTextSize(targetRef, sizeRatio, boardName) {
  const [chipTextSize, setChipTextSize] = reactExports.useState(0);
  const isRaceTrack = useBettingStore((s) => s.isRaceTrack);
  const previousWidthRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const targetEle = targetRef.current;
    if (!targetEle) return;
    let timeoutId;
    const updateTextSize = (width) => {
      const textSize = Number((width * sizeRatio).toFixed(6));
      setChipTextSize(textSize);
      useLayoutStore.setState((prev) => ({ chipTextSize: { ...prev.chipTextSize, [boardName]: textSize } }));
    };
    const processWidth = () => {
      var _a;
      const width = (_a = targetEle.clientWidth) != null ? _a : 0;
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
      Promise.all(anim.map((anim2) => anim2.finished)).then(processWidth).catch(processWidth);
    };
    getWidth();
    const resizeObserver = new ResizeObserver((entries) => {
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
const Lattice = reactExports.memo((props) => {
  var _a;
  const { pos, id, className, children, highlights, chipTextSize } = props;
  const [colStart, colEnd, rowStart, rowEnd] = pos;
  const isHighlighted = (_a = highlights == null ? void 0 : highlights.includes(id)) != null ? _a : false;
  const isRaceTrack = useBettingStore((s) => s.isRaceTrack);
  const isSlope = useBettingStore((s) => !s.isBet);
  const chipSkewXDeg = ((colStart + colEnd) / 2 - BOARD_COL_COUNT_MEDIAN) * -0.8;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      id: "".concat(betGridPrefix).concat(id),
      className: cn("center", className, isHighlighted && "highlighted"),
      style: { gridArea: "".concat(rowStart, " / ").concat(colStart, " / ").concat(rowEnd, " / ").concat(colEnd) },
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChipContainer,
          {
            chipId: id,
            chipStyle: "w-[11%] h-[6.25%]",
            showWin: !isRaceTrack,
            isSlope,
            chipTextSize,
            chipSkewXDeg
          }
        )
      ]
    }
  );
});
const Grids = reactExports.memo(({ highlights, chipTextSize }) => {
  const isSlope = useBettingStore((state) => !state.isBet);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("Grids", isSlope && "isSlope"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "visibleBoard contents", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [1, 3, 3, 9],
          id: BetTypeEnum.LOW,
          className: "ml-[0.0625em] rounded-tl-[0.9em]",
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [1, 3, 9, 15],
          id: BetTypeEnum.EVEN,
          className: "ml-[0.0625em]",
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [1, 3, 15, 21],
          id: BetTypeEnum.RED,
          className: "ml-[0.0625em]",
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [1, 3, 21, 27],
          id: BetTypeEnum.BLACK,
          className: "ml-[0.0625em]",
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [1, 3, 27, 33],
          id: BetTypeEnum.ODD,
          className: "ml-[0.0625em]",
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [1, 3, 33, 39],
          id: BetTypeEnum.HIGH,
          className: "ml-[0.0625em] rounded-bl-[0.9em]",
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [3, 12, 1, 3],
          id: BetTypeEnum.STRAIGHT_UP_0,
          className: "mt-[0.0625em] rounded-t-[0.9em]",
          highlights,
          chipTextSize
        }
      ),
      Array.from({ length: 12 }, (_, i) => i + 1).map((num) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lattice,
          {
            pos: [3, 6, num * 3, num * 3 + 3],
            id: "straight-".concat(String(num * 3 - 2)),
            highlights,
            chipTextSize
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lattice,
          {
            pos: [6, 9, num * 3, num * 3 + 3],
            id: "straight-".concat(String(num * 3 - 1)),
            highlights,
            chipTextSize
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lattice,
          {
            pos: [9, 12, num * 3, num * 3 + 3],
            id: "straight-".concat(String(num * 3)),
            highlights,
            chipTextSize
          }
        )
      ] }, num)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [12, 14, 3, 15],
          id: BetTypeEnum.DOZEN_1,
          className: "mr-[0.0625em] rounded-tr-[0.9em]",
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [12, 14, 15, 27],
          id: BetTypeEnum.DOZEN_13,
          className: "mr-[0.0625em]",
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [12, 14, 27, 39],
          id: BetTypeEnum.DOZEN_25,
          className: "mr-[0.0625em] rounded-br-[0.9em]",
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [3, 6, -3, -1],
          id: BetTypeEnum.COLUMN_1,
          className: "rounded-bl-[0.9em]",
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [6, 9, -3, -1],
          id: BetTypeEnum.COLUMN_2,
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [9, 12, -3, -1],
          id: BetTypeEnum.COLUMN_3,
          className: "rounded-br-[0.9em]",
          highlights,
          chipTextSize
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "invisibleBoard contents", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [2, 4, 2, 4],
          id: BetTypeEnum.CORNER_0_1_2_3,
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [4, 5, 2, 4],
          id: BetTypeEnum.SPLIT_0_1,
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [5, 7, 2, 4],
          id: BetTypeEnum.STREET_0_1_2,
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [7, 8, 2, 4],
          id: BetTypeEnum.SPLIT_0_2,
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [8, 10, 2, 4],
          id: BetTypeEnum.STREET_0_2_3,
          highlights,
          chipTextSize
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [10, 11, 2, 4],
          id: BetTypeEnum.SPLIT_0_3,
          highlights,
          chipTextSize
        }
      ),
      Array.from({ length: 11 }, (_, i) => i * 3).map((num) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lattice,
        {
          pos: [2, 4, num + 5, num + 7],
          id: "line-".concat(num + 1),
          highlights,
          chipTextSize
        },
        num
      )),
      Array.from({ length: 12 }, (_, i) => i * 3 + 4).map((num) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lattice,
          {
            pos: [2, 4, num, num + 1],
            id: "street-".concat(num - 3, "_").concat(num - 2, "_").concat(num - 1),
            highlights,
            chipTextSize
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lattice,
          {
            pos: [5, 7, num, num + 1],
            id: "split-".concat(num - 3, "_").concat(num - 2),
            highlights,
            chipTextSize
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lattice,
          {
            pos: [8, 10, num, num + 1],
            id: "split-".concat(num - 2, "_").concat(num - 1),
            highlights,
            chipTextSize
          }
        )
      ] }, num)),
      Array.from({ length: 11 }, (_, i) => i * 3 + 5).map((num) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lattice,
          {
            pos: [5, 7, num, num + 2],
            id: "corner-".concat(num - 4, "_").concat(num - 3, "_").concat(num - 1, "_").concat(num),
            highlights,
            chipTextSize
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lattice,
          {
            pos: [8, 10, num, num + 2],
            id: "corner-".concat(num - 3, "_").concat(num - 2, "_").concat(num, "_").concat(num + 1),
            highlights,
            chipTextSize
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lattice,
          {
            pos: [4, 5, num, num + 2],
            id: "split-".concat(num - 4, "_").concat(num - 1),
            highlights,
            chipTextSize
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lattice,
          {
            pos: [7, 8, num, num + 2],
            id: "split-".concat(num - 3, "_").concat(num),
            highlights,
            chipTextSize
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lattice,
          {
            pos: [10, 11, num, num + 2],
            id: "split-".concat(num - 2, "_").concat(num + 1),
            highlights,
            chipTextSize
          }
        )
      ] }, num))
    ] })
  ] });
});
function BetGrid() {
  const bettingBoardArgs = { convertBetMap: convertRouletteMap, getAddChipParams, boardID: BoardIDEnum.GRID_MOBILE };
  const { handlePointerDown, handlePointerUp, ...dragProps } = useBettingBoard(bettingBoardArgs);
  const isMain = !useBettingStore((s) => s.isRaceTrack);
  const highlightArgs = { isMain, prefix: "straight-", getInitWinHighlight, winHighlightMap: GRID_WIN_HIGHLIGHT_FN };
  const { highlights } = useBoardHighlight(highlightArgs);
  const chipTextSize = useLayoutStore((s) => s.chipTextSize);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "BetGrid",
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Grids,
          {
            highlights,
            chipTextSize: chipTextSize.gridBoard
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrackerChip,
          {
            ...dragProps,
            boardId: "BetGrid"
          }
        )
      ]
    }
  );
}
const Wrap = (props) => {
  const isRaceTrack = useBettingStore((state) => state.isRaceTrack);
  const targetRef = reactExports.useRef(null);
  const isCompact = useConfigStore((state) => state.IS_SMALL_DEVICE);
  const isSlope = useBettingStore((state) => !state.isBet);
  useChipTextSize(targetRef, 0.0511, "gridBoard");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion$1.div,
    {
      id: "GridBoard",
      initial: "default",
      animate: !isRaceTrack ? "default" : "hide",
      variants: gridBoardMoveVariants,
      ref: targetRef,
      className: cn({ isSlope, isCompact }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "data-stream-tip": true,
            className: "pointer-events-none absolute left-0 top-0 h-full w-full origin-bottom",
            style: {
              transform: (isCompact ? gridBoardTiltCompactVariants : gridBoardTiltVariants).slope.transform.at(-1)
            }
          }
        ),
        props.children
      ]
    }
  );
};
const GridBoard = () => {
  const isSlope = useBettingStore((state) => !state.isBet);
  const isCompact = useConfigStore((state) => state.IS_SMALL_DEVICE);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Wrap, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion$1.div,
      {
        className: "rotateBoard",
        animate: isSlope ? "slope" : "flat",
        initial: false,
        variants: isCompact ? gridBoardTiltCompactVariants : gridBoardTiltVariants,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BetGrid, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Image,
            {
              src: bettingGrid,
              className: "h-full w-full",
              alt: "Betting grid"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: mobileGridUpperThick,
        alt: "grid upper thick",
        className: cn("boardThick upperThick left-1/2 w-[125.8%] -translate-x-1/2", { "w-[120.7%]": isCompact })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: mobileGridLowerThick,
        alt: "grid lower thick",
        className: cn("boardThick lowerThick left-1/2 w-[88.3%] -translate-x-[49.5%]", { "w-[84%]": isCompact })
      }
    )
  ] });
};
const PlusMinusButton = (props) => {
  const [clicked, setClicked] = reactExports.useState(false);
  let timer = 0;
  const handleClick = (event) => {
    props.onClick && props.onClick(event);
    if (props.disabled) {
      setClicked(false);
      return;
    }
    setClicked(true);
    clearTimeout(timer);
    timer = window.setTimeout(() => setClicked(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveStateWrapper, { duration: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(props.className, "plusMinusButton h-9 w-9 cursor-pointer", props.disabled && "disabled", {
        clicked
      }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          viewBox: "0 0 36 36",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          id: "PlusMinusButton",
          onClick: handleClick,
          children: props.type === "plus" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.8572 18.0003C10.8572 17.2113 11.4968 16.5717 12.2857 16.5717H23.7143C24.5033 16.5717 25.1429 17.2113 25.1429 18.0003C25.1429 18.7893 24.5033 19.4289 23.7143 19.4289H12.2857C11.4968 19.4289 10.8572 18.7893 10.8572 18.0003Z",
                fill: "url(#paint0_linear_14570_45501)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 10.8574C18.789 10.8574 19.4286 11.497 19.4286 12.286L19.4286 23.7146C19.4286 24.5035 18.789 25.1431 18 25.1431C17.2111 25.1431 16.5715 24.5035 16.5715 23.7146L16.5715 12.286C16.5715 11.497 17.2111 10.8574 18 10.8574Z",
                fill: "url(#paint0_linear_14570_45501)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "linearGradient",
              {
                id: "paint0_linear_14570_45501",
                x1: "18",
                y1: "10.8574",
                x2: "18",
                y2: "25.1431",
                gradientUnits: "userSpaceOnUse",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#FFFAF5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "stop",
                    {
                      offset: "1",
                      stopColor: "#BAA284"
                    }
                  )
                ]
              }
            ) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.8572 18.0008C10.8572 17.2119 11.4968 16.5723 12.2857 16.5723H23.7143C24.5033 16.5723 25.1429 17.2119 25.1429 18.0008C25.1429 18.7898 24.5033 19.4294 23.7143 19.4294H12.2857C11.4968 19.4294 10.8572 18.7898 10.8572 18.0008Z",
                fill: "url(#paint0_linear_14570_45506)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "linearGradient",
              {
                id: "paint0_linear_14570_45506",
                x1: "18",
                y1: "16.5723",
                x2: "18",
                y2: "19.4294",
                gradientUnits: "userSpaceOnUse",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#FFFAF5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "stop",
                    {
                      offset: "1",
                      stopColor: "#BAA284"
                    }
                  )
                ]
              }
            ) })
          ] })
        }
      )
    }
  ) });
};
const PlusMinusGroup = (props) => {
  const neighborRange = useBettingStore((state) => state.neighborRange);
  const isRaceTrack = useBettingStore((state) => state.isRaceTrack);
  const [neighborRangeStatus, setNeighborRangeStatus] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "PlusMinusGroup",
      className: cn(props.className, "center h-[7.5rem] w-10 rounded-[2.5rem]", { isRaceTrack }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnimateCounter,
          {
            value: neighborRange,
            className: "neighborRange absolute",
            direction: neighborRangeStatus || null
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PlusMinusButton,
          {
            className: "absolute left-[0.1rem] top-[0.1rem]",
            type: "plus",
            disabled: neighborRange === 9,
            isClicked: neighborRangeStatus === "up",
            onClick: () => {
              if (neighborRange === 9) return;
              useBettingStore.setState({ neighborRange: neighborRange + 1 });
              setNeighborRangeStatus("up");
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PlusMinusButton,
          {
            className: "absolute bottom-0 left-[0.1rem]",
            disabled: neighborRange === 0,
            isClicked: neighborRangeStatus === "down",
            onClick: () => {
              if (neighborRange === 0) return;
              useBettingStore.setState({ neighborRange: neighborRange - 1 });
              setNeighborRangeStatus("down");
            }
          }
        )
      ]
    }
  );
};
function RacetrackSVG(props) {
  const [showRacetrackAnim, setShowRacetrackAnim] = reactExports.useState(false);
  const isSlope = useBettingStore((state) => !state.isBet);
  const neighborRange = useBettingStore((state) => state.neighborRange);
  reactExports.useEffect(() => {
    setShowRacetrackAnim(true);
    const timer = setTimeout(() => {
      setShowRacetrackAnim(false);
    }, 2e3);
    return () => clearTimeout(timer);
  }, [neighborRange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        id: "RacetrackSVG",
        viewBox: "0 0 190 504",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        className: cn({ isSlope }),
        children: [
          svgHighlightDef,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.999",
              y: "88.8496",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.999 88.8496)",
              fill: "#00000000",
              "data-v": "16"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.992",
              y: "113.951",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.992 113.951)",
              fill: "#00000000",
              "data-v": "33"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.999",
              y: "139.049",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.999 139.049)",
              fill: "#00000000",
              "data-v": "1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.992",
              y: "164.15",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.992 164.15)",
              fill: "#00000000",
              "data-v": "20"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.999",
              y: "189.25",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.999 189.25)",
              fill: "#00000000",
              "data-v": "14"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.992",
              y: "214.352",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.992 214.352)",
              fill: "#00000000",
              "data-v": "31"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.999",
              y: "239.449",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.999 239.449)",
              fill: "#00000000",
              "data-v": "9"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.992",
              y: "264.551",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.992 264.551)",
              fill: "#00000000",
              "data-v": "22"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.999",
              y: "289.65",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.999 289.65)",
              fill: "#00000000",
              "data-v": "18"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.992",
              y: "314.752",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.992 314.752)",
              fill: "#00000000",
              "data-v": "29"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.999",
              y: "339.85",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.999 339.85)",
              fill: "#00000000",
              "data-v": "7"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.992",
              y: "364.951",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.992 364.951)",
              fill: "#00000000",
              "data-v": "28"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "188.999",
              y: "390.051",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 188.999 390.051)",
              fill: "#00000000",
              "data-v": "12"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2385",
              y: "88.8496",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2385 88.8496)",
              fill: "#00000000",
              "data-v": "11"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2386",
              y: "113.949",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2386 113.949)",
              fill: "#00000000",
              "data-v": "36"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2386",
              y: "139.049",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2386 139.049)",
              fill: "#00000000",
              "data-v": "13"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2388",
              y: "164.148",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2388 164.148)",
              fill: "#00000000",
              "data-v": "27"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2386",
              y: "189.25",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2386 189.25)",
              fill: "#00000000",
              "data-v": "6"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2388",
              y: "214.35",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2388 214.35)",
              fill: "#00000000",
              "data-v": "34"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2386",
              y: "239.449",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2386 239.449)",
              fill: "#00000000",
              "data-v": "17"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2388",
              y: "264.549",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2388 264.549)",
              fill: "#00000000",
              "data-v": "25"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2386",
              y: "289.65",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2386 289.65)",
              fill: "#00000000",
              "data-v": "2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2388",
              y: "314.75",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2388 314.75)",
              fill: "#00000000",
              "data-v": "21"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2386",
              y: "339.85",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2386 339.85)",
              fill: "#00000000",
              "data-v": "4"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2388",
              y: "364.949",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2388 364.949)",
              fill: "#00000000",
              "data-v": "19"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "50.2386",
              y: "390.051",
              width: "25.1009",
              height: "49.2383",
              transform: "rotate(90 50.2386 390.051)",
              fill: "#00000000",
              "data-v": "15"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M13.5938 44.9258C5.34363 58.2806 1.00025 73.4297 1.00024 88.8506L50.2373 88.8506C50.2373 81.5072 52.3056 74.2932 56.2344 67.9336L13.5938 44.9258Z",
              fill: "#00000000",
              "data-v": "30"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M47.993 12.7695C33.7032 20.4799 21.8369 31.5699 13.5867 44.9247L56.2272 67.9325C60.156 61.5729 65.8067 56.2919 72.6115 52.6202L47.993 12.7695Z",
              fill: "#00000000",
              "data-v": "8"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M94.9978 1C78.4974 0.999998 62.2877 5.05919 47.9979 12.7696L72.6165 52.6203C79.4212 48.9486 87.1403 47.0156 94.9978 47.0156L94.9978 1Z",
              fill: "#00000000",
              "data-v": "23"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M141.994 12.7696C127.704 5.0592 111.495 1 94.9941 1L94.9941 47.0156C102.852 47.0156 110.571 48.9486 117.375 52.6203L141.994 12.7696Z",
              fill: "#00000000",
              "data-v": "10"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M176.406 44.9247C168.156 31.5699 156.289 20.4799 142 12.7695L117.381 52.6202C124.186 56.2919 129.837 61.5729 133.765 67.9325L176.406 44.9247Z",
              fill: "#00000000",
              "data-v": "5"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M188.992 88.8506C188.992 73.4297 184.649 58.2806 176.399 44.9258L133.758 67.9336C137.687 74.2931 139.755 81.5072 139.755 88.8506L188.992 88.8506Z",
              fill: "#00000000",
              "data-v": "24"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M188.999 415.15C188.999 433.702 182.715 451.778 171.047 466.787L131.214 439.74C136.77 432.593 139.762 423.985 139.762 415.15L188.999 415.15Z",
              fill: "#00000000",
              "data-v": "35"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M171.062 466.77C159.398 481.782 142.949 492.957 124.071 498.695L108.844 454.935C117.833 452.203 125.667 446.881 131.221 439.732L171.062 466.77Z",
              fill: "#00000000",
              "data-v": "3"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M124.063 498.694C105.184 504.431 84.8478 504.434 65.9675 498.704L81.1743 454.938C90.1651 457.667 99.8493 457.665 108.839 454.934L124.063 498.694Z",
              fill: "#00000000",
              "data-v": "26"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M18.9678 466.768C30.6316 481.78 47.0811 492.955 65.9587 498.693L81.186 454.933C72.1965 452.201 64.3633 446.879 58.809 439.73L18.9678 466.768Z",
              fill: "#00000000",
              "data-v": "0"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M18.9541 466.79C7.28093 451.776 0.995636 433.692 0.999758 415.133L50.2368 415.142C50.2348 423.98 53.2279 432.592 58.7866 439.742L18.9541 466.79Z",
              fill: "#00000000",
              "data-v": "32"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M132.208 137.471L132.208 89.921L132.194 89.921C131.647 70.0627 115.204 54.1309 95 54.1309C74.796 54.1309 58.3531 70.0627 57.8057 89.921L57.7916 89.921L57.7916 90.9094C57.7916 90.9208 57.7916 90.9322 57.7916 90.9436C57.7916 90.955 57.7916 90.9665 57.7916 90.9779L57.7916 186.043L132.208 137.471Z",
              fill: "#00000000",
              "data-v": "TIER"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M57.7916 261.16L57.7916 191.35L132.208 142.072L132.208 261.16L57.7916 261.16Z",
              fill: "#00000000",
              "data-v": "ORPH"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M57.7916 385.744C63.8728 371.458 78.2422 361.419 95 361.419C111.758 361.419 126.127 371.458 132.208 385.744L132.208 266.656L57.7916 266.656L57.7916 385.744Z",
              fill: "#00000000",
              "data-v": "VOISINS"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M57.7916 403.714C57.7916 383.165 74.4504 366.506 95 366.506C115.55 366.506 132.208 383.165 132.208 403.714V412.659C132.208 433.208 115.55 449.867 95 449.867C74.4504 449.867 57.7916 433.208 57.7916 412.659V403.714Z",
              fill: "#00000000",
              "data-v": "ZERO"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("absolute h-full w-full", { "opacity-0 transition-opacity duration-300 ease-out": !showRacetrackAnim }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CellsAnimation, { neighborRange }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhiteLineAnimation, { neighborRange })
    ] })
  ] });
}
function CellsAnimation({ neighborRange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 189 502",
      fill: "none",
      className: "absolute overflow-visible",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M170 465.992C158.315 480.171 143.648 490.802 123.698 497.451L109.125 454.574C117.583 451.802 124.993 446.766 130.926 439.678L170 465.992Z",
            fill: "url(#myGradientFill)",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out", {
              "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 8,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 8
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M170 465.992C158.315 480.171 143.648 490.802 123.698 497.451L109.125 454.574C117.583 451.802 124.993 446.766 130.926 439.678L170 465.992Z",
            stroke: "url(#universal-rect-stroke)",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out", {
              "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 8,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 8
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M122.273 498.035C103.7 503.317 84.33 504.32 66.2546 498.044L80.8064 455.165C89.4157 457.591 98.5983 457.589 108.207 455.16L122.273 498.035Z",
            fill: "url(#myGradientFill)",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out", {
              "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 9,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 9
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M122.273 498.035C103.7 503.317 84.33 504.32 66.2546 498.044L80.8064 455.165C89.4157 457.591 98.5983 457.589 108.207 455.16L122.273 498.035Z",
            stroke: "url(#universal-rect-stroke)",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out", {
              "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 9,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 9
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M187.992 415.15C187.774 432.819 182.79 450.012 171.128 464.93L131.645 438.503C136.719 431.63 139.54 423.513 139.748 415.15L186.992 415.15Z",
            fill: "url(#myGradientFill)",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out", {
              "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 7,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 7
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M187.992 415.15C187.774 432.819 182.79 450.012 171.128 464.93L131.645 438.503C136.719 431.63 139.54 423.513 139.748 415.15L186.992 415.15Z",
            stroke: "url(#universal-rect-stroke)",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out", {
              "translate-y-[20%] scale-[1.2] opacity-0": neighborRange < 7,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 7
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M176.043 45.2559C183.704 57.9675 187.811 72.2715 187.991 87.8496L139.947 87.8496C139.576 80.0108 137.658 73.3132 134.158 67.3154L175.043 45.2559Z",
            fill: "url(#myGradientFill)",
            filter: "url(#myShadowFilter)",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
              "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 7,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 7
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M176.043 45.2559C183.704 57.9675 187.811 72.2715 187.991 87.8496L139.947 87.8496C139.576 80.0108 137.658 73.3132 134.158 67.3154L175.043 45.2559Z",
            stroke: "url(#universal-rect-stroke)",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
              "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 7,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 7
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M94.998 1.00684C110.631 1.16378 125.965 4.99915 140.187 12.5533L116.619 51.4008C109.565 47.9853 102.354 46.1768 94.998 46.0264L94.998 1.00684Z",
            fill: "url(#myGradientFill)",
            filter: "url(#myShadowFilter)",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
              "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 9,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 9
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M94.998 1.00684C110.631 1.16378 125.965 4.99915 140.187 12.5533L116.619 51.4008C109.565 47.9853 102.354 46.1768 94.998 46.0264L94.998 1.00684Z",
            stroke: "url(#universal-rect-stroke)",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
              "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 9,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 9
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M141.357 13.1035C155.809 20.5352 166.431 31.0094 174.997 43.8527L133.316 66.6104C129.306 59.74 124.047 54.8187 117.787 52.2549L141.357 13.1035Z",
            fill: "url(#myGradientFill)",
            filter: "url(#myShadowFilter)",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
              "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 8,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 8
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M141.357 13.1035C155.809 20.5352 166.431 31.0094 174.997 43.8527L133.316 66.6104C129.306 59.74 124.047 54.8187 117.787 52.2549L141.357 13.1035Z",
            stroke: "url(#universal-rect-stroke)",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out", {
              "translate-y-[-20%] scale-[1.2] opacity-0": neighborRange < 8,
              "translate-y-0 scale-100 opacity-100": neighborRange >= 8
            }),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
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
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "myGradientFill",
              gradientTransform: "rotate(131)",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "0%",
                    stopColor: "#DFCFBB",
                    stopOpacity: "0.15"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "49.5%",
                    stopColor: "#DFCFBB",
                    stopOpacity: "0.30"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: "#DFCFBB",
                    stopOpacity: "0.15"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "linearGradient",
            {
              id: "universal-rect-stroke",
              gradientUnits: "objectBoundingBox",
              gradientTransform: "rotate(104)",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "0.0916",
                    stopColor: "#C9AE8D"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "0.8958",
                    stopColor: "#A57D4E"
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
function WhiteLineAnimation({ neighborRange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 189 502",
      fill: "none",
      className: "absolute z-[-1] overflow-visible",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M172.112 466.392C157.815 483.571 141.648 494.502 123.698 498.951L108.125 453.274C117.583 450.802 124.993 444.766 129.626 438.708L172.112 466.392Z",
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            clipPath: "url(#bottom-part-clip-3)",
            className: cn("origin-top transition-all duration-[250ms] ease-out"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M122.373 499.335C103.7 504.817 84.33 505.32 65.8546 499.044L81.064 453.565C89.4157 456.591 98.5983 455.589 107.207 453.56L122.373 499.335Z",
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            clipPath: "url(#bottom-part-clip-26)",
            className: cn("origin-top transition-all duration-[250ms] ease-out"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M189.452 415.15C189.874 432.819 183.79 450.012 172.828 465.43L130.445 437.503C134.919 431.63 138.84 423.513 138.748 415.15L189.452 415.15Z",
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out"),
            clipPath: "url(#bottom-part-clip)",
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M177.043 44.0559C185.204 57.9675 189.811 72.2715 189.331 87.8496L138.731 87.5496C138.576 80.0108 136.658 73.3132 132.658 67.3154L177.043 44.0559Z",
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out"),
            clipPath: "url(#top-part-clip-24)",
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M94.998 0.00684C110.631 0.16378 125.965 2.99915 141.587 11.4533L115.819 52.9008C109.565 49.3853 102.354 47.6768 94.998 47.5264L94.998 0.00684Z",
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            clipPath: "url(#top-part-clip-10)",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M142.357 11.9035C153.809 17.5352 168.431 30.0094 176.497 43.1527L132.216 66.8104C127.306 60.34 123.047 56.8187 116.987 53.5549L141.357 13.1035Z",
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            clipPath: "url(#top-part-clip-5)",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "138.8",
            y: neighborRange >= 6 ? 88.8496 : 112.8496,
            width: "50.6",
            height: neighborRange >= 6 ? 24 : 0,
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "138.8",
            y: neighborRange >= 5 ? 113.949 : 137.949,
            width: "50.6",
            height: neighborRange >= 5 ? 24 : 0,
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "138.8",
            y: neighborRange >= 4 ? 139.05 : 163.05,
            width: "50.6",
            height: neighborRange >= 4 ? 24 : 0,
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "138.8",
            y: neighborRange >= 3 ? 164.149 : 188.149,
            width: "50.6",
            height: neighborRange >= 3 ? 24 : 0,
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "138.8",
            y: neighborRange >= 2 ? 189.25 : 213.25,
            width: "50.6",
            height: neighborRange >= 2 ? 24 : 0,
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-bottom transition-all duration-[250ms] ease-out will-change-transform"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "138.8",
            y: neighborRange >= 1 ? 213.949 : 251.449,
            width: "50.6",
            height: neighborRange >= 1 ? 75 : 0,
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-center transition-all duration-[250ms] ease-out will-change-transform"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "138.8",
            y: "289.649",
            width: "50.6",
            height: neighborRange >= 2 ? 24 : 0,
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "138.8",
            y: "314.75",
            width: "50.6",
            height: neighborRange >= 3 ? 24 : 0,
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "138.8",
            y: "339.85",
            width: "50.6",
            height: neighborRange >= 4 ? 24 : 0,
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "138.8",
            y: "364.949",
            width: "50.6",
            height: neighborRange >= 5 ? 24 : 0,
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "138.8",
            y: "390.05",
            width: "50.6",
            height: neighborRange >= 6 ? 24 : 0,
            stroke: "#FFFAF5",
            strokeWidth: "1.5",
            shapeRendering: "crispEdges",
            className: cn("origin-top transition-all duration-[250ms] ease-out will-change-transform"),
            style: { transformBox: "fill-box" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "bottom-part-clip", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "125",
              y: "400.15",
              width: "80",
              height: neighborRange >= 7 ? 60 : 0,
              className: "rotate-[10deg] transition-all duration-[250ms] ease-out",
              style: { transformBox: "fill-box" }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "bottom-part-clip-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: neighborRange >= 8 ? 133 : 146,
              y: neighborRange >= 8 ? 420 : 377,
              width: "80",
              height: "60",
              className: cn("rotate-[33deg] transition-all duration-[250ms] ease-out", { "rotate-[49deg]": neighborRange >= 8 }),
              style: { transformBox: "fill-box" }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "bottom-part-clip-26", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: neighborRange >= 9 ? 130 : 169,
              y: neighborRange >= 9 ? 437 : 413,
              width: "80",
              height: "70",
              className: cn("rotate-[72deg] transition-all duration-[250ms] ease-out", { "rotate-[90deg]": neighborRange >= 9 }),
              style: { transformBox: "fill-box" }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "top-part-clip-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: neighborRange >= 8 ? 100 : 120,
              y: neighborRange >= 8 ? 44 : 74,
              width: "80",
              height: "60",
              className: cn("rotate-[-10deg] transition-all duration-[250ms] ease-out", { "rotate-[-42deg]": neighborRange >= 8 }),
              style: { transformBox: "fill-box" }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "top-part-clip-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "120",
              y: neighborRange >= 7 ? 45 : 105,
              width: "80",
              height: "60",
              className: "rotate-[-10deg] transition-all duration-[250ms] ease-out",
              style: { transformBox: "fill-box" }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "top-part-clip-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: neighborRange >= 9 ? 70 : 113,
              y: neighborRange >= 9 ? 50 : 65,
              width: "80",
              height: "60",
              className: cn("rotate-[-60deg] transition-all duration-[250ms] ease-out", { "rotate-[-70deg]": neighborRange >= 9 }),
              style: { transformBox: "fill-box" }
            }
          ) })
        ] })
      ]
    }
  );
}
const RacetrackSVG$1 = reactExports.memo(RacetrackSVG);
function RacetrackBoard() {
  const bettingBoardArgs = {
    convertBetMap: convertRouletteMap,
    getAddChipParams: getAddChipParams$1,
    boardID: BoardIDEnum.RACETRACK,
    extraBetsGroup: raceTrackGroup
  };
  const { handlePointerDown, handlePointerUp, ...dragProps } = useBettingBoard(bettingBoardArgs);
  const isBet = useBettingStore((s) => s.isBet);
  const isRaceTrack = useBettingStore((state) => state.isRaceTrack);
  const isCompact = useConfigStore((state) => state.IS_SMALL_DEVICE);
  const highlightArgs = { getInitWinHighlight, winHighlightMap: RACE_TRACK_HIGHLIGHT_FN };
  const { highlights } = useBoardHighlight(highlightArgs);
  const chipTextSize = useLayoutStore((s) => s.chipTextSize);
  const fakeRotateBoardRef = reactExports.useRef(null);
  const [rotateBoardStyle, setRotateBoardStyle] = reactExports.useState({ height: 0, width: 0, bottom: 0 });
  const { style } = useRaceTrackHighlights({ highlights });
  const targetRef = reactExports.useRef(null);
  useChipTextSize(targetRef, 0.0557, "racetrack");
  reactExports.useEffect(() => {
    const racetrackBoard = targetRef.current;
    const fakeRotateBoard = fakeRotateBoardRef.current;
    if (!fakeRotateBoard || !racetrackBoard) return;
    const resizeObserver = new ResizeObserver((entries) => {
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
      setRotateBoardStyle({ height: newHeight, width: newWidth, bottom: newBottom });
    });
    resizeObserver.observe(fakeRotateBoard);
    return () => {
      resizeObserver.unobserve(fakeRotateBoard);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion$1.div,
    {
      id: "RacetrackBoard",
      initial: "hide",
      animate: isRaceTrack ? "default" : "hide",
      variants: raceTrackBoardMoveVariants,
      ref: targetRef,
      className: cn({ isSlope: !isBet, isSmallDevice: isCompact }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion$1.div,
          {
            animate: isBet ? "flat" : "slope",
            variants: isCompact ? raceTrackBoardTiltCompactVariants : raceTrackBoardTiltVariants,
            initial: false,
            className: "rotateBoard",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RacetrackSVG$1,
                {
                  onPointerDown: handlePointerDown,
                  onPointerUp: handlePointerUp
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Image,
                {
                  src: raceTrack,
                  className: "h-full w-full",
                  alt: "Race track"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: style }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RaceTrackBoardChips, { chipTextSize: chipTextSize.racetrack }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TrackerChip,
                {
                  ...dragProps,
                  boardId: "RacetrackBoard"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none invisible absolute bottom-0 h-full w-full origin-bottom",
            style: {
              transform: isCompact ? "translateY(-3.5%) perspective(8rem) rotateX(10.1deg) scale(1.09, 0.97)" : "translateY(-2.5%) perspective(8rem) rotateX(6.4deg) scale(1.135, 0.933)"
            },
            id: "FakeRotateBoard",
            ref: fakeRotateBoardRef
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn("pointer-events-none absolute left-1/2 w-full", {
              "-translate-x-[49.8%]": isCompact,
              "-translate-x-1/2": !isCompact
            }),
            id: "ThickWrapper",
            style: { height: "".concat(rotateBoardStyle.height, "px"), width: "".concat(rotateBoardStyle.width, "px"), bottom: "".concat(rotateBoardStyle.bottom, "px") },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: mobileRacetrackThick1,
                  alt: "mobile racetrack thick 1",
                  className: "boardThick vector1 -translate-x-[49.8%]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: mobileRacetrackThick2,
                  alt: "mobile racetrack thick 2",
                  className: "boardThick rect1 -translate-x-[50%]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: mobileRacetrackThick3,
                  alt: "mobile racetrack thick 3",
                  className: "boardThick rect2 -translate-x-[50%]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: mobileRacetrackThick4,
                  alt: "mobile racetrack thick 4",
                  className: "boardThick vector2 -translate-x-[49.6%]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: mobileRacetrackThick5,
                  alt: "mobile racetrack thick 5",
                  className: "boardThick vector3 -translate-x-[49.6%]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: mobileRacetrackThick6,
                  alt: "mobile racetrack thick 6",
                  className: "boardThick vector4 -translate-x-[49.8%]"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const BOARD_LENGTH_MEDIAN = 50;
const CHIP_OFFSET = 5.8;
const RaceTrackBoardChips = reactExports.memo(({ chipTextSize }) => {
  const isRaceTrack = useBettingStore((s) => s.isRaceTrack);
  const isSlope = useBettingStore((s) => !s.isBet) && isRaceTrack;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: raceChips.map(([id, posit]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    ChipContainer,
    {
      chipId: id,
      chipStyle: "w-[12%] h-[4.5%] ".concat(posit),
      showWin: isRaceTrack,
      isSlope,
      chipTextSize,
      chipSkewXDeg: (extractLeft(posit) - BOARD_LENGTH_MEDIAN + CHIP_OFFSET) * -0.1
    },
    id
  )) });
});
const RacetrackBoard$1 = reactExports.memo(RacetrackBoard);
const MobileSquareButton = () => {
  const isRaceTrack = useBettingStore((s) => s.isRaceTrack);
  const isAutoPlay = useAutoPlayStore((s) => s.isAutoPlay);
  const roundRemaining = useAutoPlayStore((s) => s.roundRemaining);
  const betMode = useBettingStore((s) => s.betMode);
  const noBet = useCartStore((s) => s.boardHistory.length === 0);
  const isHaveBets = useAutoPlayStore((s) => s.isHaveBets);
  const AUTOPLAY_ALLOWED = useConfigStore((s) => s.JURISDICTION.AUTOPLAY_ALLOWED);
  const animState = useWinAnimStore((s) => s.animState);
  const control = useAnimationControls();
  const [firstTimeRender, setFirstTimeRender] = reactExports.useState(true);
  reactExports.useEffect(() => {
    setFirstTimeRender(false);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion$1.div,
      {
        initial: "buttonDefault",
        animate: control,
        variants: buttonMoveVariants,
        onClick: () => {
          control.start("button");
        },
        className: "absolute bottom-[1.1rem] left-4 h-8 w-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SquareButton,
          {
            child: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence$1, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mask absolute z-[1] flex h-8 w-8 items-center justify-center" }),
              isRaceTrack ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion$1.div,
                {
                  initial: firstTimeRender ? "default" : "gridMove",
                  animate: "default",
                  variants: buttonMoveVariants,
                  exit: "gridMove",
                  className: "absolute h-7 w-7",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion$1.svg,
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 28 28",
                      fill: "url(#paint0_linear_14473_45669)",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.2878 2.33398C9.46774 2.33398 8.80295 2.95426 8.80295 3.7194V5.10482H7.3181C6.49804 5.10482 5.83325 5.72509 5.83325 6.49023V20.3444C5.83325 21.1095 6.49804 21.7298 7.3181 21.7298H8.80295V23.1152C8.80295 23.8804 9.46774 24.5007 10.2878 24.5007H17.712C18.5321 24.5007 19.1969 23.8804 19.1969 23.1152V21.7298H20.6817C21.5018 21.7298 22.1666 21.1095 22.1666 20.3444V6.49023C22.1666 5.72509 21.5018 5.10482 20.6817 5.10482H19.1969V3.7194C19.1969 2.95426 18.5321 2.33398 17.712 2.33398H10.2878ZM7.3181 20.3444V6.49023H10.2878V20.3444H7.3181ZM17.712 20.3444H10.2878V23.1152H17.712V20.3444ZM17.712 6.49023V20.3444H20.6817V6.49023H17.712ZM17.712 6.49023V3.7194H10.2878V6.49023H17.712Z"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion$1.linearGradient,
                          {
                            id: "paint0_linear_14473_45669",
                            x1: "13.9999",
                            y1: "2.33398",
                            x2: "13.9999",
                            y2: "24.5007",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                motion$1.stop,
                                {
                                  offset: "0%",
                                  initial: "default",
                                  animate: "changeColor1",
                                  exit: "changeColor1",
                                  variants: iconColorVariants
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                motion$1.stop,
                                {
                                  offset: "100%",
                                  initial: "default",
                                  animate: "changeColor2",
                                  exit: "changeColor2",
                                  variants: iconColorVariants
                                }
                              )
                            ]
                          }
                        ) })
                      ]
                    }
                  )
                },
                "standard"
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion$1.div,
                {
                  initial: "raceTrackMove",
                  animate: "default",
                  variants: buttonMoveVariants,
                  exit: "raceTrackMove",
                  className: "absolute h-7 w-7",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 28 28",
                      fill: "none",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M14 5.76536C12.067 5.76536 10.5 7.30163 10.5 9.19673V18.8046C10.5 20.6997 12.067 22.2359 14 22.2359C15.933 22.2359 17.5 20.6997 17.5 18.8046V9.19673C17.5 7.30163 15.933 5.76536 14 5.76536Z",
                            fill: "url(#paint0_linear_14473_99358)"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 2.33398C10.134 2.33398 7 5.40654 7 9.19673V18.8046C7 22.5948 10.134 25.6673 14 25.6673C17.866 25.6673 21 22.5948 21 18.8046V9.19673C21 5.40654 17.866 2.33398 14 2.33398ZM8.4 9.19673C8.4 6.16458 10.9072 3.70653 14 3.70653C17.0928 3.70653 19.6 6.16458 19.6 9.19673V18.8046C19.6 21.8367 17.0928 24.2948 14 24.2948C10.9072 24.2948 8.4 21.8367 8.4 18.8046V9.19673Z",
                            fill: "url(#paint0_linear_14473_99358)"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion$1.linearGradient,
                          {
                            id: "paint0_linear_14473_99358",
                            x1: "14",
                            y1: "2.33398",
                            x2: "14",
                            y2: "25.6673",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                motion$1.stop,
                                {
                                  offset: "0%",
                                  initial: "default",
                                  animate: "changeColor1",
                                  exit: "changeColor1",
                                  variants: iconColorVariants
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                motion$1.stop,
                                {
                                  offset: "100%",
                                  initial: "default",
                                  animate: "changeColor2",
                                  exit: "changeColor2",
                                  variants: iconColorVariants
                                }
                              )
                            ]
                          }
                        ) })
                      ]
                    }
                  )
                },
                "raceTrack"
              )
            ] }),
            selected: true,
            className: "inactive h-8 w-8 ".concat(animState && "opacity-50"),
            buttonClassName: "rounded-[0.5rem]",
            onClick: () => {
              if (animState) {
                playSound(["disabledAction"]);
                return;
              }
              useBettingStore.setState({ isRaceTrack: !isRaceTrack });
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SquareButton,
      {
        child: betMode === "default" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.BettingDefault, {}) : betMode === "straight" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.BettingStraightUp, {}) : betMode === "fullComplete" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.BettingFullComplete, {}) : null,
        selected: true,
        className: "absolute bottom-[1.1rem] right-4 h-8 w-8",
        buttonClassName: "rounded-[0.5rem] h-8 w-8",
        onClick: () => {
          useLayoutStore.setState({ menuPage: "betting_mode" });
        }
      }
    ),
    AUTOPLAY_ALLOWED && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SquareButton,
      {
        child: isAutoPlay ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.AutoPlayRoundMobile, { className: "h-8 w-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "roundRemaining absolute left-[0.5rem] top-[0.6rem] w-4 text-center text-[0.6rem] font-[500] text-[#f3f1d5]", children: roundRemaining })
        ] }) : noBet ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.AutoplayDisabled, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.Autoplay, {}),
        selected: true,
        className: cn("absolute left-4 top-4 h-8 w-8", isAutoPlay && "autoPlayActive", noBet && "inactive"),
        buttonClassName: "rounded-[0.5rem]",
        id: "AutoPlayBtn",
        onClick: () => {
          if (!isHaveBets()) {
            tooltipEventBus.emit("noBet", { anchorSelect: "#AutoPlayBtn" });
            return;
          }
          useLayoutStore.setState({ menuPage: "autoplay" });
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SquareButton,
      {
        child: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon.StatisticSolid, {}),
        selected: true,
        className: "absolute right-4 top-4 h-8 w-8",
        buttonClassName: "rounded-[0.5rem]",
        onClick: () => {
          useLayoutStore.setState({ menuPage: "statistics" });
        }
      }
    )
  ] });
};
const GameContent = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GridBoard, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RacetrackBoard$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: logoImg,
        alt: "Logo",
        className: "absolute bottom-[0.65rem] ml-[0.4rem] w-[3.8125rem]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileSquareButton, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PlusMinusGroup, { className: "absolute bottom-[6.35rem] right-[0.7rem]" })
  ] });
};
const MobileLayout = () => {
  const mainBoardMb = useKeyboardMargin();
  const isSmallDevice = useConfigStore((s) => s.IS_SMALL_DEVICE);
  const marginBottom = isSmallDevice ? "calc(0.35rem + ".concat(mainBoardMb, "px)") : "".concat(mainBoardMb, "px");
  const IS_CLOSE_SERVER = useConfigStore((s) => s.IS_CLOSE_SERVER);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "MobileLayout",
      className: cn({ isSmallDevice }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, { betResult: /* @__PURE__ */ jsxRuntimeExports.jsx(BetResult, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "MainBoard",
            className: cn("mx-auto mt-[.0625rem] flex-1 rounded-[2rem] pb-[1.95rem]", {
              "mt-[2.1rem] rounded-[1.5rem]": isSmallDevice
            }),
            style: { marginBottom },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                MainBgImage,
                {
                  overlayBg,
                  imageClassName: "mt-9"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CountDownCap, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToastList, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RouletteVideoStream, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GameContent, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FooterMenu, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(NetworkStateModal, { isCloseServer: IS_CLOSE_SERVER })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer$1, {})
      ]
    }
  );
};
export {
  MobileLayout as default
};
//# sourceMappingURL=MobileLayout-q0bVj0QA.js.map
