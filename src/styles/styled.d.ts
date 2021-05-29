import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      alternative: string;
      background: string;
      white: string;
      black: string;
    };
    breakpoints: {
      sm: string;
      lg: string;
    };
  }
}
