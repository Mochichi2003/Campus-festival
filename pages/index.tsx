import Link from "next/link";
import Head from "next/head";
import React from "react";

// import style from "../style/index.module.sass";
import CountdownTimer from "../components/Countdowntimer/CountdownTimer";
import Layout from "../components/Layout";
import Timeteble from "../components/timetable";

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
        <div>ここにタイムテーブルを入れる</div>
        <Timeteble />
        <div className="border">Youtubeが入るところ</div>
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
