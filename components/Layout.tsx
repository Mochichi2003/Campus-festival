import React, { ReactNode } from "react";
// import Link from "next/link";
import Head from "next/head";
import Header from "./header";
import { Container } from "react-bootstrap";
import styles from "./style/Layout.module.sass";
type Props = {
  children?: ReactNode;
  title?: string;
  NotShowHederAndFooter?: boolean | "true";
};

// class hederAndFooterAndContainer extends React.Component {}

const Layout = ({ children, title, NotShowHederAndFooter }: Props) => (
  <div>
    <Head>
      <title>{title + " - N高横浜キャンパスフェスティバルWebページ"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="No body" />
      <meta property="og:url" content="https://campus-festival.vercel.app/" />
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
      <link rel="icon" href="icon/スクリーンショット 164.png" />
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    </Head>
    {/* <header> */}
    {(() => {
      if (NotShowHederAndFooter === "true") {
        // return <span>Good morning</span>;
        return <span></span>;
      } else {
        return <Header />;
      }
    })()}

    {/* メインの表示する部分 */}
    {(() => {
      if (NotShowHederAndFooter === "true") {
        // return <span>Good morning</span>;
        return <>{children}</>;
      } else {
        return <Container>{children}</Container>;
      }
    })()}

    {(() => {
      if (NotShowHederAndFooter === "true") {
        // return <span>Good morning</span>;
        return <span></span>;
      } else {
        return (
          <footer className={styles.fotter}>
            <hr />
            <Container>
              <small>
                このサイトは&nbsp;
                <span>
                  <a href="https://github.com/Mochichi2003">Mochi</a>
                </span>
                が作りました
              </small>
            </Container>
          </footer>
        );
      }
    })()}
  </div>
);

export default Layout;
