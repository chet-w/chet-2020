import { createGlobalStyle } from "styled-components";
import { ITheme } from "../@types/theme";

interface IGlobalStyles {
  theme: ITheme
}

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props: IGlobalStyles) => props.theme.colors.light.neutrals.lighter};
    color: ${(props: IGlobalStyles) => props.theme.colors.light.neutrals.darker};
  }
  html {
    font-family:  "SF Pro",
                  -apple-system,
                  system-ui,
                  BlinkMacSystemFont,
                  "Segoe UI",
                  Roboto,
                  "Helvetica Neue",
                  Arial,
                  sans-serif;
  }
`;

export { GlobalStyles };
