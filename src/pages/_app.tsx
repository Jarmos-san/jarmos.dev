import { AppProps } from "next/app";

import LayoutComponent from "@components/layout";
import "@styles/globals.css";

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default RootApp;
