// import Link from "next/link";
import Head from "next/head";
import React from "react";
// import matter from "gray-matter";
import Link from "next/link";
// import style from "../style/index.module.sass";
// import Postlist from "../components/PostList";
import CountdownTimer from "../components/Countdowntimer/CountdownTimer";
import Layout from "../components/Layout";
import Timeteble from "../components/timetable";
import Performerintroduction from "../components/Performerintroduction";
// import Posetest from "../components/posetest";
// import { type } from "os";
// import Postdatas from "../components/postdatas";
// type Props = { posts: any; title: any; description: any; props: any };
const IndexPage = ({ posts, title, description }) => (
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
      showFotter={true}
      showHeader={false}
      // NotShowHederAndFooter="true"
    >
      <div>
        {/* <div>
          <a
            href="/post"
            className=""
          >
            web展示を見る
          </a>
        </div> */}
      </div>
      <div className="  m-12 text-center">
        <div className="senni_Button">
          <Link href="/post">
            <button
              href="/post"
              className="senni_Button_css bg-blue-500 hover:bg-blue-400 duration-300"
            >
              展示を見る
            </button>
          </Link>
          <Link href="/#performerintroduction">
            <button className="bg-blue-500 hover:bg-blue-400 duration-300 ">
              出演者紹介
            </button>
          </Link>
          <Link href="/#performerintroduction_iin">
            <button className="bg-blue-500 hover:bg-blue-400 duration-300">
              キャンフェス実行委員紹介
            </button>
          </Link>
        </div>
      </div>
      {/* <h1
        className={
          style.topicon +
          " text-3xl sm:text-6xl font-sans text-center mt-8 mb-32 font-bold"
        }
      >
        Ykohama campus festival
      </h1> */}
      <div className="my-2 text-lg text-center	">
        <Timeteble />
        <div className="movie-wrap">
          <iframe
            className=""
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/5qap5aO4i9A"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          {/* <h3>ここに出演者の紹介文とかを乗せる</h3> */}
          {/* <Posetest /> */}
          <Performerintroduction>
            {/* <h3>チルドレンのやつうううううううううう</h3> */}
          </Performerintroduction>
        </div>
        {/* <div>ここにタイムテーブルを入れる</div> */}

        <div className="my-8"></div>

        {/* <Postdatas /> */}
      </div>
    </Layout>

    {/* <Layout showHeader={false} showFotter={true} useHead={false}></Layout> */}
    {/* <CountdownTimer /> */}
  </div>
);

export default IndexPage;

// export async function getStaticProps() {
//   const configData = await import(`../siteconfig.json`);

//   const posts = ((context) => {
//     const keys = context.keys();
//     const values = keys.map(context);

//     const data = keys.map((key, index) => {
//       const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
//       const value = values[index];
//       const document = matter(value.default);
//       return {
//         frontmatter: document.data,
//         markdownBody: document.content,
//         slug,
//       };
//     });
//     return data;
//   })(require.context("../posts", true, /\.md$/));

//   return {
//     props: {
//       posts,
//       title: configData.default.title,
//       description: configData.default.description,
//     },
//   };
// }
