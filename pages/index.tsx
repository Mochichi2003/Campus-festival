import Link from "next/link";
import Layout from "../components/Layout";

import style from "../style/index.module.sass";
import React from "react";
import CountdownTimer from "../components/Countdowntimer/CountdownTimer";
import Head from "next/head";

const IndexPage = () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
        rel="stylesheet"
      />
    </Head>
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
        Ykohama campus festival
      </h1>
      <div className="my-2 text-lg text-center	">
        <Link href="./postdatas">
          <a className="text-blue-500 no-underline hover:underline ">
            展示物一覧
          </a>
        </Link>
      </div>
    </Layout>
    {/* <CountdownTimer /> */}
  </div>
);

export default IndexPage;
