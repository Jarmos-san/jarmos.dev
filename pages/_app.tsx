import { AppProps } from "next/app";

import { resetCSS } from "../stitches.config";

function RootApp({ Component, pageProps }: AppProps) {
  resetCSS();
  return <Component {...pageProps} />;
}

export default RootApp;
