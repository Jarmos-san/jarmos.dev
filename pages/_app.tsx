import { AppProps } from "next/app";

import Layout from "../components/layout";
import "../styles/main.scss";

function RootApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default RootApp;
