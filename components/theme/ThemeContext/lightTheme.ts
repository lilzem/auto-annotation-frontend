import equal from "fast-deep-equal";
import { defaultTheme, Theme, ThemeType } from "./theme";
import { DefaultTheme } from "goober";

export const lightTheme: ThemeType = {
  ...defaultTheme,
  name: Theme.LIGHT,
  colors: {
    ...defaultTheme.colors,
    //override colors there
    textPrimary: "#0E0F13",
    regularText: "#080808",
    transparentText: "#0E0F13B2",
    backgroundLight: "transparent",

    secondary: "#F7F7F8",

    //
    circleBarBase: "#dfdfdf",
    subtitle: "#FF8A00",
    listBackground: "#f4f4f4",
    faintText: "#0E0F13",
    primaryButtonText: "#080808",

    priceDescription: "#8C8C8C",
    priceNumber: "#FF8A00",
    discount: "#FF8A00",
    inputBackground: "transparent",
    inputBorder: "#DFDFDF",

    modalBackground: "#FFFFFF",

    everythingWasClearText: "#080808",
    everythingWasClearBorder: "#BFC7D4",
    everythingWasClearActiveBorder: "#00000060",
    everythingWasClearBg: "#EDF1FA",
    everythingWasClearBtnBgHover: "#0000001a",
    everythingWasClearTextAreaBg: "#fff",
  },
};

export const isLightTheme = (theme?: DefaultTheme): boolean => equal(theme, lightTheme);
