import { createContext, useContext } from "react";
import { defaultTheme, ThemeType } from "~/components/theme/ThemeContext/theme";

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ThemeContext.Provider;
export const useTheme = (): ThemeType => useContext(ThemeContext);
