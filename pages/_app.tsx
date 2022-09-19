import { AppProps } from "next/app";

function RootApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RootApp;
