import Link from "next/link";
import Head from "next/head";
import React from "react";
import matter from "gray-matter";

// import style from "../style/index.module.sass";
import Postlist from "../components/PostList";
import CountdownTimer from "../components/Countdowntimer/CountdownTimer";
import Layout from "../components/Layout";
import Timeteble from "../components/timetable";
// import Postdatas from "../components/postdatas";

const IndexPage = ({ posts, title, description, ...props }) => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Layout showFotter={false} showHeader={false}></Layout>
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
          {/* <Link href="./postdatas">
            <a className="text-white no-underline hover:no-underline text-2xl  font-semibold bg-blue-500 py-4 rounded px-12 hover:bg-blue-400 duration-300 hover:scale-105">
            展示物一覧
            </a>
          </Link> */}
          <Postlist posts={posts} />
        </div>
        <div>
          <Timeteble />
        </div>
        {/* <Postdatas /> */}
      </div>
    </Layout>

    <Layout showHeader={false} showFotter={true} useHead={false}></Layout>
    {/* <CountdownTimer /> */}
  </div>
);

export default IndexPage;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
