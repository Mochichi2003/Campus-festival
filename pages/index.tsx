import Link from "next/link";
import Layout from "../components/Layout";

import React from "react";

const IndexPage = () => (
  <Layout
    title="Home"
    // NotShowHederAndFooter="true"
  >
    <h1>HEY 👋</h1>
    <Link href="./postdatas">展示物一覧</Link>
  </Layout>
);

export default IndexPage;
