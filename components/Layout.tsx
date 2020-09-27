import React, { ReactNode } from "react";
// import Link from "next/link";
import Head from "next/head";
import Header from "./header";
import { Container } from "react-bootstrap";
type Props = {
  children?: ReactNode;
  title?: string;
  NotShowHederAndFooter?: boolean | "true";
};

// class hederAndFooterAndContainer extends React.Component {}

const Layout = ({ children, title, NotShowHederAndFooter }: Props) => (
  <div>
    <Head>
      <title>{title + " | N高横浜キャンパスフェスティバル"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="icon/スクリーンショット 164.png" />
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
          <footer>
            <hr />
            <Container>
              <p>
                made by&nbsp;
                <span>
                  <a href="https://github.com/Mochichi2003">Mochi</a>
                </span>
              </p>
            </Container>
          </footer>
        );
      }
    })()}
  </div>
);

export default Layout;
