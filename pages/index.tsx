import Link from "next/link";
import Layout from "../components/Layout";

import style from "../style/index.module.sass";
import React from "react";

const IndexPage = () => (
  <Layout
    title="Home"
    // NotShowHederAndFooter="true"
  >
    <h1
      className={
        style.topicon +
        " text-3xl sm:text-6xl font-sans text-center mt-8 mb-32 font-bold"
      }
    >
      <pre>
        <code>🔥( ᐛ)&lt;トップページ🔥</code>
      </pre>
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
