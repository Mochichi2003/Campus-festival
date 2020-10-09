import Link from "next/link";
import Layout from "../components/Layout";

import React from "react";

const IndexPage = () => (
  <Layout
    title="Home"
    // NotShowHederAndFooter="true"
  >
    <h1 className="text-3xl sm:text-6xl font-sans text-center	 font-bold">
      🔔🌰
    </h1>
    <div className="my-2 text-lg text-center	">
      <Link href="./postdatas">
        <a className="text-blue-500 no-underline hover:underline ">
          展示物一覧
        </a>
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
