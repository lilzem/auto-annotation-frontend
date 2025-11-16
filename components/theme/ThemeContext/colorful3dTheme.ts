import equal from "fast-deep-equal";
import { defaultTheme, Theme, ThemeType } from "./theme";
import { DefaultTheme } from "goober";

export const colorful3dTheme: ThemeType = {
  ...defaultTheme,
  name: Theme.COLORFUL_3D,
  colors: {
    ...defaultTheme.colors,
    //override colors there
    primaryButtonBg: "linear-gradient(178.21deg, #FD9501 1.51%, #FC6502 98.48%);",
    textPrimary: "#fff",
    circleBarBase: "#191C25",
    circleBarFilling: "url(#orange-gradient)",
    listBackground: "transparent",
    priceDescription: "#080808",
    priceNumber: "#51A4FF",
    faintText: "#6E6E6E",
    primaryButtonText: defaultTheme.colors.black,
  },
};

export const isColorful3dTheme = (theme: DefaultTheme): boolean => {
  return equal(theme, colorful3dTheme);
};
