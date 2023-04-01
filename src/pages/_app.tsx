import { AppProps } from "next/app";

import "@styles/globals.css";

function RootApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RootApp;
