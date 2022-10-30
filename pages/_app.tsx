import { AppProps } from "next/app";

import "../styles/main.scss";

function RootApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default RootApp;
