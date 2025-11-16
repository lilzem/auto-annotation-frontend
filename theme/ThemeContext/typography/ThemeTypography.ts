import { TypographyToken } from "./TypographyToken";

export interface ThemeTypography {
  body(): TypographyToken;
  bodyS(): TypographyToken;

  contentCode(): TypographyToken;
  code(): TypographyToken;

  headlineL(): TypographyToken;
  headlineM(): TypographyToken;
  headlineS(): TypographyToken;
  courseHeadline(): TypographyToken;

  labelS(): TypographyToken;
  labelM(): TypographyToken;

  titleS(): TypographyToken;
  titleM(): TypographyToken;
  titleL(): TypographyToken;

  contentH1(): TypographyToken;
  contentH2(): TypographyToken;
  contentH3(): TypographyToken;
  contentH4(): TypographyToken;
}
