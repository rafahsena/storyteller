import Head from "next/head";
import { Global, ThemeProvider } from "@emotion/react";
import xw from "xwind";
import React from "react";
import { AppProps } from "./_app.type";
import IntlProvider from "../providers/IntlProvider";

import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <IntlProvider>
            <Head>
              <title>Storyteller - Create your own RPG</title>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
              />
            </Head>
            <Global
              //tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
              styles={xw`XWIND_BASE XWIND_GLOBAL`}
            />
            <PageContainer>
              <Component {...pageProps} />
            </PageContainer>
          </IntlProvider>
        </ThemeProvider>
      </ChakraProvider>
    </div>
  );
};

export default App;
