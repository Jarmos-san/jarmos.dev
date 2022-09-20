import { AppProps } from "next/app";

import "../styles/reset.css";

function RootApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RootApp;
