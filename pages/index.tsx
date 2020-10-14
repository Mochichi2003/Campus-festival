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
    <Layout showFotter={false} showHeader={true}></Layout>
    <CountdownTimer />
    <Layout
      title="Home"
      showFotter={false}
      showHeader={false}
      // NotShowHederAndFooter="true"
    >
      {/* <h1
        className={
          style.topicon +
          " text-3xl sm:text-6xl font-sans text-center mt-8 mb-32 font-bold"
        }
      >
        Ykohama campus festival
      </h1> */}
      <div className="my-2 text-lg text-center	">
        <iframe
          width="1206"
          height="678"
          className="text-center m-auto w-full h-full"
          src="https://www.youtube.com/embed/zCLOJ9j1k2Y"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <Link href="./postdatas">
          <a className="text-blue-500 no-underline hover:underline ">
            展示物一覧
          </a>
        </Link>
      </div>
    </Layout>

    <Layout showHeader={false} showFotter={true} useHead={false}></Layout>
    {/* <CountdownTimer /> */}
  </div>
);

export default IndexPage;
