import { defaultTheme, Theme, ThemeType } from "./theme";

export const darkenTheme: ThemeType = {
  ...defaultTheme,
  name: Theme.DARKEN,
  colors: {
    ...defaultTheme.colors,
    //override colors there
    primaryButtonText: "#FFFFFF",
    primaryButtonBg: "#9747FF",
    textPrimary: "#FFFFFF",
    highlightedText: "rgba(151, 71, 255, 0.75)",
    mainBackground: "#090312",
    backgroundSecondary: "#130329",
    primary: "#9747FF",
    backgroundLight: "#180831",
  },
};
