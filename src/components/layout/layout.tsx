import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { theme, GlobalStyles } from "../../styles";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <GlobalStyles />
        <h1>Hello</h1>
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
