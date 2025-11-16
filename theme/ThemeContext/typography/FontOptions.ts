type TypographyStyle = {
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: number | null;
  lineHeight?: string;
  letterSpacing?: string;
};

export class FontOptions {
  constructor(private styles: TypographyStyle = {}) {}

  withWeight(weight: number): FontOptions {
    return new FontOptions({ ...this.styles, fontWeight: weight });
  }

  withSize(size: string): FontOptions {
    return new FontOptions({ ...this.styles, fontSize: size });
  }

  withLineHeight(lineHeight: string): FontOptions {
    return new FontOptions({ ...this.styles, lineHeight });
  }

  getStyles(): TypographyStyle {
    return this.styles;
  }
}
