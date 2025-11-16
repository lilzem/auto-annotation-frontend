import { setup } from "goober";
import { createGlobalStyles } from "goober/global";
import { shouldForwardProp } from "goober/should-forward-prop";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "~/theme/ThemeContext/ThemeContext";

// Setup goober
setup(
  React.createElement,
  undefined,
  useTheme,
  shouldForwardProp((prop) => prop["0"] !== "$")
);

const Toaster = dynamic(() => import("react-hot-toast").then(({ Toaster }) => Toaster), {
  ssr: false,
});

type Props = AppProps<{ token: string | null }>;

const GlobalStyles = createGlobalStyles`
  * {
    font-size: 18px;
    font-weight: 400;
  }   
  font {
    font-size: inherit;
    font-weight: inherit;
  }
  body {
    background-color: #181e2a;
  }
  
  p {
    font-family: "Hind Siliguri", sans-serif;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }
  picture img {
    width: 100%;
  }
` as React.FC;

const AppComponent = ({ Component, pageProps }: Props): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Auto Annotation</title>
        <meta property="og:title" content={"Auto Annotation: Auto Annotation Platform"} />
        <meta property="og:description" content="Auto Annotation Platform" />
        <meta property="og:image" content={"/favicon/favicon512x512.png"} />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>
      <>
        <Toaster />
        <Component {...pageProps} />
      </>
    </>
  );
};

AppComponent.getInitialProps = async (ctx: AppContext) => {
  return {
    ...(await App.getInitialProps(ctx)),
  };
};

export default AppComponent;
