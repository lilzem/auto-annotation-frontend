import equal from "fast-deep-equal";
import { Size, typography } from "./typography/typography";
import { buttonSize } from "./buttonSize";
import { DefaultTypography } from "./typography/DefaultTypography";
import { SmallUITestTypography } from "./typography/SmallUITestTypography";
import { DefaultTheme } from "goober";
import { Scrollbar } from "../scrollbar";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
  LIGHT_BLUE = "lightBlue",
  COLORFUL_3D = "colorful3d",
  DARKEN = "darken",
  NEW_LIGHT = "newLight",
}

const white = "#fff";
const whiteTransparent = "#ffffff80";
const secondaryDark = "#1e2635";

const greenRegular = "#00a811";
const greenLight = "#51de9a";
const secondaryBlueDark = "#45608d";

export const media = {
  mobile: 499,
  tablet: 500,
  tabletMid: 769,
  tabletMidMax: 768,
  desktop: 1024,
  desktopMax: 1023,
  widescreen: 1216,
  fullHeaderWidth: 1200,
  hdWidth: 1280,
  blogArticleDesktopMinWidth: 1297,
  hdReadyWidth: 1366,
  quadHD: 1440,
} as const;
type Keys = keyof typeof media;
type Breakpoint = `${(typeof media)[Keys]}px`;

export const breakpoints: Record<Keys, Breakpoint> = Object.keys(media).reduce(
  (p, k) => ({ ...p, [k]: `${media[k as keyof typeof media]}px` }),
  {}
) as Record<Keys, Breakpoint>;

export const themeMediaQueries = {
  phone: `@media screen and (max-width: ${breakpoints.mobile})`,
  tabletMax: `@media screen and (max-width: ${breakpoints.tablet})`,
  tabletMidMax: `@media screen and (max-width: ${breakpoints.tabletMidMax})`,
  tabletMid: `@media screen and (min-width: ${breakpoints.tabletMid})`,
  desktopMax: `@media screen and (max-width: ${breakpoints.desktopMax})`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
  widescreen: `@media screen and (min-width: ${breakpoints.widescreen})`,
  fullHeaderWidth: `@media screen and (min-width: ${breakpoints.fullHeaderWidth})`,
  blogArticleDesktopMinWidth: `@media screen and (min-width: ${breakpoints.blogArticleDesktopMinWidth})`,
  hdReadyWidth: `@media screen and (max-width: ${breakpoints.hdReadyWidth})`,
  quadHD: `@media screen and (min-width: ${breakpoints.quadHD})`,
};

export const defaultTheme = {
  name: Theme.DARK,
  colors: {
    primary: "#ff8a00",
    primaryDark: "rgba(229, 124, 0, 1)",
    primaryLight: "#ff951a",
    primaryVeryLight: "#ffa63d",
    primaryDisabled: "rgba(255, 138, 0, 0.3)",
    newWhite: "rgba(255, 255, 255, 0.1)",
    newWhite20p: "rgba(255, 255, 255, 0.2)",
    newWhite30p: "rgba(255, 255, 255, 0.3)",
    newWhite50p: "rgba(255, 255, 255, 0.5)",
    secondary: "#273246",
    secondaryLight: "#36445c",
    whiteTransparent: "#ffffff80",
    regularText: white,
    transparentText: whiteTransparent,
    secondaryDark,
    secondaryVeryLight: "#4f5e77",
    blueLight: "#9bbaee",
    secondBlue: "#4e6793",
    gulfBlue: "#33435b",
    lightBackground: white,
    mainBackground: "#f5f5fd",
    highlightedText: greenLight,
    hover: "#a8c6fb2b",
    //
    black: "#080808",
    textSecondary: "#e57c00",
    textPrimary: "#fff",
    backgroundSecondary: "#1e2635",
    backgroundLight: "#36445c",
    backgroundLightDarker: "#263859",
    secondaryBlueDark,
    backgroundSecondaryDark: secondaryBlueDark,
    backgroundDark: "#0d1125",
    backgroundDarker: "#000218",

    secondaryDisabled: "rgba(39, 50, 70, 0.3)",
    greenRegular,
    greenLight: "#51de9a",
    greenHint: "#4AB077",
    greenChanges: "#2C6846",
    addedCodeBg: "#24833538",
    addedCodeFg: "#256531",

    green: "#05c38a",
    red: "#fa4848",
    yellow: "#fcf44c",
    redLight: "#ff6f6f",
    redDark: "#b50707",
    redHint: "#C03B3B",
    redChanges: "#773B3B",
    deletedCodeBg: "#84343180",
    deletedCodeFg: "#f8514966",
    grey: "#f4f4f4",
    darkWhite: "#e5e5e5",
    greyLight: "#6e6e6e",
    greyDisable: "#dfdfdf",
    greyVeryLight: "#b8b8b8",
    greyBorder: "#36445C",
    greyDark: "#383a3e",
    codeGrey: "#a0a1a7",
    descGrey: "#B9C0D4",

    purpleLight: "#e2d6ff",
    purple: "#d1c3f8",
    purpleDark: "#b7a3ee",

    //
    beginnerLevelText: "#6DFFB8",
    beginnerLevelBg: "rgba(55, 194, 127, 0.34)",
    intermediateLevelText: "#C7EBFF",
    intermediateLevelBg: "#2E5694",
    advancedLevelText: "#5D3405",
    advancedLevelBg: "rgba(252, 187, 110, 0.88)",

    //
    primaryButtonText: white,
    primaryButtonBg: "#ff8a00",
    circleBarBase: "#516994",
    circleBarFilling: "#fd6a03",
    subtitle: "#fff",
    listBackground: "#273246",
    faintText: "#ffffff80",

    priceDescription: "#ffffff80",
    priceNumber: "#51de9a",
    discount: "#9bbaee",

    searchBorder: "#8192af",
    searchBorderLight: "#4e5a6d",
    searchBgHover: "#384255",
    searchButtonBgHover: "#343c4a",

    inputBackground: secondaryDark,
    inputBorder: "#4f5e77",

    modalBackground: "#4f5e77",
    sidebarBackground: "rgba(54, 68, 92, 1)",
    progressRadarBorder: "transparent",
    progressRadarBackground: "rgba(43, 56, 79, 1)",

    pageBackground: "#273246",

    blueVeryLight: "#f7fcff",
    blueBright: "#3c89ff",
    greenBright: "#13bf75",
    blueFreeze: "#49deff",
    selectionColor: "#08a6ff",
    blueOutline: "#186ade",

    secondaryBgVeryLight: "#303b4f",
    secondaryBgLight: "#242e40",
    secondaryBgLighter: "#232f45",
    secondaryBgDark: "#1c2233",
    secondaryBgVeryDark: "#182336",
    secondaryBorderLight: "#4f5e77",
    secondaryBorderDark: "#3a4965",
    greyText: "#b6bfd7",

    everythingWasClearText: "#fff",
    everythingWasClearBorder: "#4f5e77",
    everythingWasClearActiveBorder: "#ffffff80",
    everythingWasClearBg: "#36445c",
    everythingWasClearBtnBgHover: "#ffffff1a",
    everythingWasClearTextAreaBg: "#1e2635",
    everythingWasClearPlaceholder: "#b8b8b8",
    everythingWasClearTextAreaActiveBorder: "#61c6ff",
    everythingWasClearTextAreaBS: "#61c6ff3d",

    aiAssistant: "#936aff",
  },
  media: themeMediaQueries,
  size: "medium" as Size,
  typography,
  buttonSize,
  fonts: () => new DefaultTypography(),
  scrollBar: () => new Scrollbar(),
};

export const makeSizeTestTheme = (size: Size): ThemeType => ({
  ...defaultTheme,
  size,
  fonts: () => (size === "small" ? new SmallUITestTypography() : new DefaultTypography()),
});

export type ThemeType = typeof defaultTheme;

export const isDarkTheme = (theme: DefaultTheme): boolean => equal(theme, defaultTheme);
