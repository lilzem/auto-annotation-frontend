import { DefaultTypography } from "./DefaultTypography";
import { ThemeTypography } from "./ThemeTypography";
import { TypographyToken } from "./TypographyToken";

export class SmallUITestTypography extends DefaultTypography implements ThemeTypography {
  override body(): TypographyToken {
    return super
      .body()
      .overrideDefault({
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "normal",
      })
      .withHdReady({
        fontSize: "14px",
        lineHeight: "22px",
        letterSpacing: "0.2pt",
      });
  }

  override contentCode(): TypographyToken {
    return super
      .contentCode()
      .overrideDefault({
        fontSize: "14px",
      })
      .withHdReady({
        fontSize: "12px",
      });
  }

  override contentH1(): TypographyToken {
    return super.contentH1().overrideDefault({
      fontSize: "24px",
      lineHeight: "30px",
    });
  }

  override contentH2(): TypographyToken {
    return super.contentH2().overrideDefault({
      fontSize: "20px",
      lineHeight: "28px",
    });
  }

  override contentH3(): TypographyToken {
    return super.contentH3().overrideDefault({
      fontSize: "18px",
      lineHeight: "24px",
    });
  }

  override contentH4(): TypographyToken {
    return super
      .contentH4()
      .overrideDefault({
        fontSize: "18px",
        lineHeight: "24px",
      })
      .withHdReady({
        fontSize: "16px",
      });
  }

  override bodyS(): TypographyToken {
    return super.bodyS().overrideDefault({
      lineHeight: "21px",
      letterSpacing: "0.2pt",
      fontSize: "14px",
    });
  }

  override headlineL(): TypographyToken {
    return super.headlineL().overrideDefault({
      fontSize: "20px",
      lineHeight: "23px",
    });
  }

  override headlineM(): TypographyToken {
    return super.headlineM().overrideDefault({
      fontSize: "18px",
      lineHeight: "24px",
    });
  }

  override headlineS(): TypographyToken {
    return super
      .headlineS()
      .overrideDefault({
        fontSize: "18px",
        lineHeight: "24px",
      })
      .withHdReady({
        fontSize: "16px",
      });
  }

  override titleL(): TypographyToken {
    return super.titleL().overrideDefault({
      fontSize: "18px",
    });
  }

  override titleM(): TypographyToken {
    return super.titleM().overrideDefault({
      fontSize: "16px",
      lineHeight: "24px",
    });
  }

  override titleS(): TypographyToken {
    return super.titleS().overrideDefault({
      lineHeight: "21px",
      letterSpacing: "0.2pt",
      fontSize: "14px",
    });
  }
}
