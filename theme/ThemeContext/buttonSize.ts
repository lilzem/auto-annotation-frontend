import { Size } from "./typography/typography";

type Variants = "variant1" | "variant2";

export type ButtonSize = {
  [key in Size]: {
    padding?: {
      [key in Variants]: string;
    };
    fontSize?: string;
    lineHeight?: string;
    fontWeight?: number;
    fontFamily?: string;
  };
};

export const buttonSize: ButtonSize = {
  small: {
    padding: {
      variant1: "5px 16px",
      variant2: "5px 16px",
    },
    fontSize: "14px",
    lineHeight: "22px",
    fontFamily: "Play, sans-serif",
  },
  medium: {
    padding: {
      variant1: "10px 20px",
      variant2: "4px 20px",
    },
    fontSize: "18px",
    fontFamily: "Play, sans-serif",
    lineHeight: "26px",
  },
};
