import React, { ReactNode } from "react";
// import Link from "next/link";
import Head from "next/head";
// import Image from "next/image";
import Header from "./header";
// import { Container } from "react-bootstrap";
import styles from "./style/Layout.module.sass";
type Props = {
  children?: ReactNode;
  iswebPresentation?: boolean;
  title?: string;
  NotShowHederAndFooter?: boolean | "true";
  showHeader?: boolean;
  showFotter?: boolean;
  HasHeaderMargin?: boolean;
  useHead?: boolean; // Titleテキストを使うか使わないか
};

// class hederAndFooterAndContainer extends React.Component {}

const Layout = ({
  iswebPresentation,
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
              {/* {() => {
                if (title) {
                  return title + " | N高横浜キャンパスフェスティバル";
                } else {
                  return "N高横浜キャンパスフェスティバル";
                }sssssssssssssssssssssssssssssss
              }} */}
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
            <meta name="description" content="N高横浜キャンパスフェス" />
            <meta
              property="og:url"
              content="https://campus-festival.vercel.app/"
            />
            <meta
              property="og:title"
              content={title + " | N高横浜キャンパスフェスティバルWebページ"}
              // content="No title"
            />
            {/* <meta name="twitter:description" content="No body" /> */}
            <meta
              property="og:image"
              content="https://campus-festival.vercel.app/backgrondimg/10のコピー2.jpg"
              // public/backgrondimg/10のコピー2.jpg
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mochi_749" />
            {/* <meta property="og:site_name" content="No title" /> */}
            <meta property="og:locale" content="ja_JP" />
            {/* <link rel="icon" href="//icon/icon.png" /> */}
            {/* faviconにかんして書いているところ 始まり */}
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/icon/yokohama2/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/icon/yokohama2/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/icon/yokohama2/favicon-16x16.png"
            />
            <link rel="manifest" href="/icon/yokohama2/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/icon/yokohama2/safari-pinned-tab.svg"
              color="#505050"
            />
            <link rel="shortcut icon" href="/icon/yokohama2/favicon.ico" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta
              name="msapplication-config"
              content="/icon/yokohama2/browserconfig.xml"
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
        return (
          <Header
            HasHeaderMargin={HasHeaderMargin}
            iswebPresentation={iswebPresentation}
          />
        );
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
              styles.main_contents + " max-w-screen-xl  m-auto	 justify-center"
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
            <footer className={styles.fotter + " "}>
              <div>
                このサイトは&nbsp;
                <span className="text-cornflowerblue-400">
                  <a href="https://github.com/Mochichi2003">須藤 萌</a>
                </span>
                が作りました
              </div>
            </footer>
          </div>
        );
      }
    })()}
  </div>
);

export default Layout;
