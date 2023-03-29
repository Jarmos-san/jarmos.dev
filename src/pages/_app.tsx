import { AppProps } from "next/app";

import Layout from "@components/layout";
import "@styles/main.scss";

// import '@styles/globals.css'

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default RootApp;
