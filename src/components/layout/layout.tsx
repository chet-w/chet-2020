import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../../styles";
import { Header } from "../Header";
import { Container } from "../Container";

const Layout: React.FC = () => (
  <ThemeProvider theme={theme()}>
    <Header />
    <Container>
      <GlobalStyles />
    </Container>
  </ThemeProvider>
);

export { Layout };
