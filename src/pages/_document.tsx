import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4421463422364704"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-4421463422364704" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
