import { Colors, DefaultTheme } from "goober";
import { themeMediaQueries } from "~/components/theme/ThemeContext/theme";

type ThemeProps = {
  theme: DefaultTheme;
};

export const color =
  (color: keyof Colors) =>
  ({ theme }: ThemeProps): string =>
    theme.colors[color];

export const mediaQuery =
  (query: keyof typeof themeMediaQueries) =>
  ({ theme }: ThemeProps): string =>
    theme.media[query];
