import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class RootDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default RootDocument;
