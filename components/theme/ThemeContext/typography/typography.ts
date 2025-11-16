export type Typography = {
  [key in Size]: Record<TextElement, TypographyStyle>;
};

type TextElement = "body" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "quote" | "label";
export type Size = "small" | "medium";

type TypographyStyle = {
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: string;
  letterSpacing?: string;
};

const fontFamily1 = `"Hind Siliguri", sans-serif`;

/**
 * @deprecated use theme.fonts()
 */
export const typography: Typography = {
  small: {
    body: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0.2pt",
    },

    h1: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "30px",
    },

    h2: {
      fontFamily: fontFamily1,
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "28px",
    },

    h3: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24px",
    },

    h4: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
    },

    h5: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
    },

    h6: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
    },
    quote: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
    },
    label: {
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "16px",
    },
  },

  medium: {
    body: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "27px",
      letterSpacing: "normal",
    },
    h1: {
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "32px",
    },
    h2: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "30px",
    },
    h3: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
    },
    h4: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    h5: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    h6: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    quote: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "27px",
    },
    label: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
    },
  },
};
