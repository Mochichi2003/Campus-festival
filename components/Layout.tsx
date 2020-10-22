import React, { ReactNode } from "react";
// import Link from "next/link";
import Head from "next/head";
import Header from "./header";
// import { Container } from "react-bootstrap";
import styles from "./style/Layout.module.sass";
type Props = {
  children?: ReactNode;
  title?: string;
  NotShowHederAndFooter?: boolean | "true";
  showHeader?: boolean;
  showFotter?: boolean;
  HasHeaderMargin?: boolean;
  useHead?: boolean; // Titleテキストを使うか使わないか
};

// class hederAndFooterAndContainer extends React.Component {}

const Layout = ({
  children,
  title,
  useHead,
  NotShowHederAndFooter,
  showHeader,
  showFotter,
  HasHeaderMargin,
}: Props) => (
  <div>
    {(() => {
      if (useHead === false) {
        // return <span>Good morning</span>;
        return <></>;
      } else {
        return (
          <Head>
            <title>
              {title + " | N高横浜キャンパスフェスティバルWebページ"}
            </title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
            <meta name="description" content="No body" />
            <meta
              property="og:url"
              content="https://campus-festival.vercel.app/"
            />
            <meta
              property="og:title"
              // content={title + "| N高横浜キャンパスフェスティバルWebページ"}
              content="No title"
            />
            <meta name="twitter:description" content="No body" />
            <meta
              property="og:image"
              content="https://campus-festival.vercel.app/ogp/OGP-Notitle.png"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mochi_749" />
            <meta property="og:site_name" content="No title" />
            <meta property="og:locale" content="ja_JP" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
            {/* <link rel="icon" href="/icon/icon.png" /> */}
            {/* faviconにかんして書いているところ 始まり */}
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/favicons/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicons/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/favicons/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <link rel="shortcut icon" href="/favicons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta
              name="msapplication-config"
              content="/favicons/browserconfig.xml"
            />
            <meta name="theme-color" content="#ffffff" />
            {/* faviconにかんして書いているところ 終わり */}
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          </Head>
        );
      }
    })()}

    {/* <header> */}
    {(() => {
      if (showHeader === false) {
        // return <span>Good morning</span>;
        return <span></span>;
      } else {
        return <Header HasHeaderMargin={HasHeaderMargin} />;
      }
    })()}

    {/* メインの表示する部分 */}
    {(() => {
      if (NotShowHederAndFooter === "true") {
        // return <span>Good morning</span>;
        return <>{children}</>;
      } else {
        return (
          <div
            className={
              styles.main_contents + " max-w-screen-lg m-auto	 justify-center"
            }
          >
            {children}
          </div>
        );
      }
    })()}

    {(() => {
      if (showFotter === false) {
        // return <span>Good morning</span>;
        return <span></span>;
      } else {
        return (
          <div>
            <hr />
            <footer className={styles.fotter}>
              <small>
                このサイトは&nbsp;
                <span className="text-blue-700">
                  <a href="https://github.com/Mochichi2003">Mochi</a>
                </span>
                が作りました
              </small>
            </footer>
          </div>
        );
      }
    })()}
  </div>
);

export default Layout;
