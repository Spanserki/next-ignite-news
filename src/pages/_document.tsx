import {Html, Head, Main, NextScript} from 'next/document'

export default function MyDocument() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

                <link rel='shortcut icon' href='logoReact.png' type='image/png' />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}