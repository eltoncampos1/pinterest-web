/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable prettier/prettier */
import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType { }
}
