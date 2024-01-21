import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

function Document() {
  return (
    <Html>
      <Head />

      <body>
        <Main />
        <NextScript />

        <Script
          // id="cookieyes"
          // type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/caa2947e3772efe9ec2de27d/script.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}

export default Document;
