import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { AppProvider } from "../contexts/app";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import NavBar from "../styles/components/navbar";
import SEO from "../components/seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO />
      <AppProvider>
        <NavBar>
          <img src="images/brasil.png" alt="Elo Rating Brasil" />
          <p>Elo Rating Brasil</p>
        </NavBar>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
