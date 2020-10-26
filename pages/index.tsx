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
        {/* <div>ここにタイムテーブルを入れる</div> */}
        <div>
          <Timeteble />
        </div>

        {/* <div className="border">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nRJpbbRe-70"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full m-10"
          ></iframe>
        </div> */}
        <div className="my-8">
          <Link href="./postdatas">
            <a className="text-white no-underline hover:no-underline text-4xl  font-semibold bg-blue-500 py-4 rounded-lg px-8 hover:bg-blue-400 duration-300 hover:scale-105">
              展示物一覧
            </a>
          </Link>
        </div>
      </div>
    </Layout>

    <Layout showHeader={false} showFotter={true} useHead={false}></Layout>
    {/* <CountdownTimer /> */}
  </div>
);

export default IndexPage;
