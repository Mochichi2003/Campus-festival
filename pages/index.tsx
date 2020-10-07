import Link from "next/link";
import Layout from "../components/Layout";

import React from "react";

const IndexPage = () => (
  <Layout
    title="Home"
    // NotShowHederAndFooter="true"
  >
    <h1 className="text-3xl md:text-6xl font-sans text-center	 font-bold">
      HEY here is Top page🔔
    </h1>
    <div className="my-4 text-lg text-center	">
      <Link href="./postdatas">
        <a className="text-blue-500 ">展示物一覧</a>
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
