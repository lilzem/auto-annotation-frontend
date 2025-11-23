import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "~/components/utility/theme/ThemeProvider";
import { AuthProvider } from "~/components/utility/AuthContext";

const Toaster = dynamic(() => import("react-hot-toast").then(({ Toaster }) => Toaster), {
  ssr: false,
});

const AppComponent = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <title>Auto Annotation</title>
        <meta property="og:title" content={"Auto Annotation: Auto Annotation Platform"} />
        <meta property="og:description" content="Auto Annotation Platform" />
        <meta property="og:image" content={"/favicon/favicon512x512.png"} />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>
      <ThemeProvider>
        <AuthProvider>
          <Toaster />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default AppComponent;
