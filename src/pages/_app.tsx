import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { AppProvider } from "../contexts/AppContext";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import NavBar from "../styles/components/navbar";
import AppHead from "../components/AppHead";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppHead />
      <NavBar>
        <img src="images/brasil.png" alt="Elo Rating Brasil" />
        <p>Elo Rating Brasil</p>
      </NavBar>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
