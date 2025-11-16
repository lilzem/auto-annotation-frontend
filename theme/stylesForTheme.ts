import { DefaultTheme } from "goober";
import { Theme } from "./ThemeContext/theme";

export type ThemeName = `${Theme}`;

type Styles = {
  [key in Theme]?: string;
};

export const stylesForTheme = (
  theme: ThemeName | DefaultTheme,
  styles: Styles,
  defaultTheme: ThemeName = Theme.DARK,
  withDefaultFallback = true
): string => {
  const themeName: ThemeName = typeof theme === "object" ? theme.name : theme;
  if (withDefaultFallback) {
    return styles[themeName] ?? styles[defaultTheme] ?? "";
  }
  return styles[themeName] ?? "";
};

export const themeStyles = (
  styles: Styles,
  withDefaultFallback = true
): ((props: { theme: DefaultTheme }) => string) => {
  return (props) => {
    return stylesForTheme(props.theme.name, styles, undefined, withDefaultFallback);
  };
};
