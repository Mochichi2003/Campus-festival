import React, { ReactNode } from "react";
// import Link from "next/link";
import Head from "next/head";
import Header from "./header";
import { Container } from "react-bootstrap";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="icon/スクリーンショット 164.png" />
    </Head>
    {/* <header> */}
    <Header />
    {/* </header> */}
    <Container>{children}</Container>

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
  </div>
);

export default Layout;
