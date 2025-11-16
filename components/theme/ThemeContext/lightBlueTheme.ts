import equal from "fast-deep-equal";
import { defaultTheme, Theme, ThemeType } from "./theme";
import { DefaultTheme } from "goober";

export const lightBlueTheme: ThemeType = {
  ...defaultTheme,
  name: Theme.LIGHT_BLUE,
  colors: {
    ...defaultTheme.colors,
    //override colors there
    primary: "#51A4FF",
    primaryVeryLight: "#F7FCFF",
    regularText: defaultTheme.colors.black,
    primaryButtonBg: "#13BF75",
    textPrimary: "#0E0F13",
    circleBarBase: "#E9F2FF",
    listBackground: "#FFFFFF",
    priceDescription: "#080808",
    priceNumber: "#51A4FF",
    faintText: "#6E6E6E",

    primaryButtonText: defaultTheme.colors.regularText,
  },
};

export const isLightBlueTheme = (theme: DefaultTheme): boolean => {
  return equal(theme, lightBlueTheme);
};
