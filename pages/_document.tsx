// import Document, { Head, Main, NextScript } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";



export default class extends Document {
  render() {
    return (
      <Html lang="ja_JP">
        <Head>{/* Global Site Tag (gtag.js) - Google Analytics */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
