import { AppProps } from "next/app";

// import { resetCSS } from "../stitches.config";
import "../styles/globals.scss";

function RootApp({ Component, pageProps }: AppProps) {
    // resetCSS();
    return <Component {...pageProps} />;
}

export default RootApp;
