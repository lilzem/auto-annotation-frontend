import { themeMediaQueries } from "../theme";
import { FontOptions } from "./FontOptions";

type TypographyStyle = {
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: number | null;
  lineHeight?: string;
  letterSpacing?: string;
};

export class TypographyToken {
  static forDefault(opts: TypographyStyle): TypographyToken {
    return new TypographyToken(opts);
  }

  constructor(
    private opts: TypographyStyle,
    private mobileOpts?: TypographyStyle,
    private hdReadyOpts?: TypographyStyle
  ) {}

  getValues<K extends keyof TypographyStyle>(
    property: K
  ): Record<"default" | "mobile" | "hdReady", TypographyStyle[K] | undefined> {
    return {
      default: this.opts?.[property],
      mobile: this.mobileOpts?.[property] ?? this.opts?.[property],
      hdReady: this.hdReadyOpts?.[property] ?? this.opts?.[property],
    };
  }

  onlyDefaultCss(important?: boolean): string {
    return this.optsToCss(this.opts, important);
  }

  css(important?: boolean): string {
    return `
${this.optsToCss(this.opts, important)}
${this.mobileCss(important)}
${this.hdReadyCss(important)}
    `;
  }

  private mobileCss(important?: boolean): string {
    const mobileStyles = this.mobileOpts
      ? `
      ${themeMediaQueries.phone} {
        ${this.optsToCss({ ...this.opts, ...this.mobileOpts }, important)}
      }
    `
      : "";
    return mobileStyles;
  }

  private hdReadyCss(important?: boolean): string {
    const hdReadyStyles = this.hdReadyOpts
      ? `
      ${themeMediaQueries.hdReadyWidth} {
        ${this.optsToCss({ ...this.opts, ...this.hdReadyOpts }, important)}
      }
    `
      : "";
    return hdReadyStyles;
  }

  private optsToCss(opts: TypographyStyle, important?: boolean): string {
    const cssName = new Map([
      ["fontSize", "font-size"],
      ["fontFamily", "font-family"],
      ["fontWeight", "font-weight"],
      ["lineHeight", "line-height"],
      ["letterSpacing", "letter-spacing"],
    ]);
    const css = Object.entries(opts)
      .filter(([_, v]) => !!v)
      .map(([key, value]) => {
        return `${cssName.get(key)}: ${value} ${important ? "!important" : ""};`;
      });
    return css.join("\n");
  }

  withMobile(mobileOpts: TypographyStyle): TypographyToken {
    return new TypographyToken(this.opts, mobileOpts, this.hdReadyOpts);
  }
  withHdReady(hdReadyOpts: TypographyStyle): TypographyToken {
    return new TypographyToken(this.opts, undefined, hdReadyOpts);
  }
  overrideMobile(override: TypographyStyle): TypographyToken {
    return new TypographyToken(this.opts, { ...this.mobileOpts, ...override }, this.hdReadyOpts);
  }
  overrideAll(override: TypographyStyle): TypographyToken {
    return new TypographyToken(
      { ...this.opts, ...override },
      { ...this.mobileOpts, ...override },
      { ...this.hdReadyOpts, ...override }
    );
  }
  overrideDefault(override: TypographyStyle): TypographyToken {
    return new TypographyToken({ ...this.opts, ...override }, this.mobileOpts, this.hdReadyOpts);
  }
  overrideHdReady(override: TypographyStyle): TypographyToken {
    return new TypographyToken(this.opts, this.mobileOpts, { ...this.hdReadyOpts, ...override });
  }
  overrideMobileOptions(f: (font: FontOptions) => FontOptions): TypographyToken {
    const updatedMobileOpts = f(new FontOptions(this.mobileOpts)).getStyles();
    return new TypographyToken(this.opts, updatedMobileOpts, this.hdReadyOpts);
  }
  overrideDefaultOptions(f: (font: FontOptions) => FontOptions): TypographyToken {
    const updatedOpts = f(new FontOptions(this.opts)).getStyles();
    return new TypographyToken(updatedOpts, this.mobileOpts, this.hdReadyOpts);
  }
}
