import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../../styles";
import { Header } from "../Header";
import { Container } from "../Container";
import { SEO } from "../seo";

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme()}>
    <SEO title="Chet | Front-end Developer" />
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
