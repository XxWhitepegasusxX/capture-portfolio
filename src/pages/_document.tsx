/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document{
    render(): JSX.Element {
        return(
            <Html>
                <Head>
                    <title>Capture Portfólio</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lobster&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>

        )
    }
}