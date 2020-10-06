import Link from "next/link";
import Layout from "../components/Layout";

import React from "react";

const IndexPage = () => (
  <Layout
    title="Home"
    // NotShowHederAndFooter="true"
  >
    <h1 className="text-6xl font-sans font-bold">HEY here is Top page👋</h1>
    <Link href="./postdatas">
      <a className="text-blue-500">展示物一覧</a>
    </Link>
  </Layout>
);

export default IndexPage;
