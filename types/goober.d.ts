import "goober";
import { ButtonSize } from "~/components/theme/ThemeContext/buttonSize";
import { Theme } from "~/components/theme/ThemeContext/theme";
import { ThemeTypography } from "~/components/theme/ThemeContext/typography/ThemeTypography";
import { Size, Typography } from "~/components/theme/ThemeContext/typography/typography";

declare module "goober" {
  export interface Colors {
    newWhite: string;
    newWhite20p: string;
    newWhite30p: string;
    newWhite50p: string;
    blueFreeze: string;
    primary: string;
    primaryDark: string;
    primaryLight: string;
    primaryVeryLight: string;
    primaryDisabled: string;
    secondary: string;
    secondaryLight: string;
    whiteTransparent: string;
    regularText: string;
    transparentText: string;
    pageBackground: string;
    secondaryDark: string;
    secondaryVeryLight: string;
    blueLight: string;
    secondBlue: string;
    gulfBlue: string;
    lightBackground: string;
    mainBackground: string;
    highlightedText: string;
    black: string;
    textSecondary: string;
    textPrimary: string;
    backgroundSecondary: string;
    sidebarBackground: string;
    progressRadarBorder: stirng;
    progressRadarBackground: string;
    backgroundLight: string;
    backgroundLightDarker: string;
    secondaryBlueDark: string;
    backgroundSecondaryDark: string;
    backgroundDark: string;
    backgroundDarker: string;
    secondaryDisabled: string;
    greenRegular: string;
    greenLight: string;
    green: string;
    greenHint: string;
    addedCodeBg: string;
    addedCodeFg: string;
    red: string;
    redLight: string;
    redDark: string;
    redHint: string;
    deletedCodeBg: string;
    deletedCodeFg: string;
    grey: string;
    darkWhite: string;
    greyLight: string;
    greyDisable: string;
    greyVeryLight: string;
    greyBorder: string;
    greyDark: string;
    codeGrey: string;
    descGrey: string;
    hover: string;

    beginnerLevelText: string;
    beginnerLevelBg: string;
    intermediateLevelText: string;
    intermediateLevelBg: string;
    advancedLevelText: string;
    advancedLevelBg: string;

    greenChanges: string;
    redChanges: string;

    //
    circleBarBase: string;
    circleBarFilling: string;
    subtitle: string;
    listBackground: string;
    faintText: string;
    primaryButtonText: string;
    primaryButtonBg: string;

    priceDescription: string;
    priceNumber: string;
    discount: string;

    inputBackground: string;
    inputBorder: string;

    searchBorder: string;
    searchBorderLight: string;
    searchBgHover: string;
    searchButtonBgHover: string;

    modalBackground: string;

    blueVeryLight: string;
    blueBright: string;
    greenBright: string;
    selectionColor: string;
    blueOutline: string;

    secondaryBgVeryLight: string;
    secondaryBgLight: string;
    secondaryBgLighter: string;
    secondaryBgDark: string;
    secondaryBgVeryDark: string;
    secondaryBorderLight: string;
    secondaryBorderDark: string;
    greyText: string;

    everythingWasClearText: string;
    everythingWasClearBorder: string;
    everythingWasClearActiveBorder: string;
    everythingWasClearBg: string;
    everythingWasClearBtnBgHover: string;
    everythingWasClearTextAreaBg: string;
    everythingWasClearPlaceholder: string;
    everythingWasClearTextAreaActiveBorder: string;
    everythingWasClearTextAreaBS: string;

    aiAssistant: string;
  }

  export interface Media {
    phone: string;
    tablet: string;
    tabletMid: string;
    tabletMidMax: string;
    tabletMax: string;
    desktopMax: string;
    desktop: string;
    widescreen: string;
    fullHeaderWidth: string;
    blogArticleDesktopMinWidth: string;
    quadHD: string;
    hdReadyWidth: string;
  }

  export interface DefaultTheme {
    fonts: () => ThemeTypography;
    scrollBar: () => ThemeScrollbar;
    name: Theme;
    colors: Colors;
    media: Media;
    size: Size;
    /**
     * @deprecated use theme.fonts()
     */
    typography: Typography;
    buttonSize: ButtonSize;
  }
}
