// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

import React from 'react';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href={'/static/img/4jmlogo.png'} />
                <link rel="icon" href={'/static/img/4jmlogo.png'} sizes="32x32" />
                <link
                    rel="icon"
                    href={'/static/img/4jmlogo.png'}
                    sizes="192x192"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    href={'/static/img/4jmlogo.png'}
                />

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
