import { AppProps } from "next/app";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/global.css";
import Router from "next/router";
import "prismjs/themes/prism-okaidia.css";

import "../style/tailwind.css";

import * as gtag from "../lib/gtag";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
