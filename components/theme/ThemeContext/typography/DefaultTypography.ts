import { ThemeTypography } from "./ThemeTypography";
import { TypographyToken } from "./TypographyToken";

export class DefaultTypography implements ThemeTypography {
  protected textFontType = '"Hind Siliguri", sans-serif';
  protected codeFontType = "Monaco, Ubuntu Mono, sans-serif";
  protected titleFontType = "Play, sans-serif";

  constructor() {}

  body(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.textFontType,
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "27px",
      letterSpacing: "normal",
    }).withMobile({
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.25pt",
    });
  }

  bodyS(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.textFontType,
      letterSpacing: "normal",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
    }).withMobile({
      fontSize: "14px",
    });
  }

  code(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.codeFontType,
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
    }).withHdReady({
      fontSize: "16px",
      lineHeight: "21px",
    });
  }

  contentCode(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.codeFontType,
      fontSize: "16px",
      letterSpacing: "normal",
    }).withMobile({
      fontFamily: this.codeFontType,
      fontSize: "14px",
      letterSpacing: "normal",
    });
  }

  contentH1(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.textFontType,
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "32px",
    }).withMobile({
      fontSize: "28px",
      lineHeight: "32px",
    });
  }
  contentH2(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.textFontType,
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "30px",
    }).withMobile({
      fontSize: "24px",
      lineHeight: "30px",
    });
  }
  contentH3(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.textFontType,
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
    }).withMobile({
      fontSize: "20px",
      lineHeight: "28px",
    });
  }
  contentH4(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.textFontType,
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24px",
    }).withMobile({
      fontSize: "18px",
      lineHeight: "24px",
    });
  }

  labelS(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.textFontType,
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 400,
      letterSpacing: "0",
    }).withMobile({
      fontWeight: 600,
    });
  }

  labelM(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.textFontType,
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: 400,
      letterSpacing: "0.2pt",
    }).withMobile({
      fontWeight: 600,
    });
  }

  headlineS(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.titleFontType,
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24px",
    }).withMobile({
      fontSize: "18px",
      lineHeight: "24px",
    });
  }

  headlineM(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.titleFontType,
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
    }).withMobile({
      fontSize: "20px",
      lineHeight: "28px",
    });
  }

  headlineL(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.titleFontType,
      fontSize: "22px",
      lineHeight: "25px",
      fontWeight: 700,
    }).withMobile({
      fontSize: "24px",
      lineHeight: "32px",
    });
  }

  courseHeadline(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.titleFontType,
      fontSize: "38px",
      lineHeight: "50px",
      fontWeight: 400,
    }).withMobile({
      fontSize: "28px",
      lineHeight: "34px",
    });
  }

  titleS(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.textFontType,
      letterSpacing: "normal",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "22px",
    }).withMobile({
      fontSize: "14px",
    });
  }

  titleM(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.textFontType,
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24px",
    }).withMobile({
      fontSize: "16px",
      lineHeight: "24px",
    });
  }

  titleL(): TypographyToken {
    return TypographyToken.forDefault({
      fontFamily: this.textFontType,
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "24px",
    }).withMobile({});
  }
}
