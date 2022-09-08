import { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default RootApp;
