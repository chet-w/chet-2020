import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../../styles";
import { Header } from "../Header";
import { Container } from "../Container";

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme()}>
    <GlobalStyles />
    <Header />
    <main>
      <Container>
        { children }
      </Container>
    </main>
  </ThemeProvider>
);

export { Layout };
