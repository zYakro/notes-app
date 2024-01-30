import { theme } from "@/styles/Themes/theme";
import { base } from "@/styles/Themes/base";

type CustomTheme = typeof theme & typeof base;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}