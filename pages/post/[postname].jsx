// import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "../../style/posts/[postname].module.scss";
// const ReactMarkdownWithHtml = require("react-markdown/with-html");
import ReactMarkdownWithHtml from "react-markdown/with-html";
// import { Button } from "react-bootstrap";
// import prism from "prismjs";
// import "../../style/posts/postname.scss";
// import MarkdownStyle from "../../components/MadkdownPreviewCss";
// import MarkdownStyle from "../../style/markdown.module.css";

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <Layout
      title={`${frontmatter.title || "No title"} `}
      HasHeaderMargin={true}
    >
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css"
        /> */}
      </Head>

      <article className={styles.content + " mb-5"}>
        {/* Markdownのかいたやつのタイトルが入るところ */}
        <h1 className={styles.title + " text-4xl"}>{frontmatter.title}</h1>
        <p className={styles.postname + " my-2"}>
          <span>
            {/* Markdownのかいたやつの本文が入るところ */}

            {(() => {
              if (frontmatter.url) {
                // return <span>Good morning</span>;
                return (
                  <>
                    {/* {frontmatter.url}{" "} */}
                    <a className="text-blue-400" href={frontmatter.url}>
                      {frontmatter.author}
                    </a>
                    さんが書きました
                    <br />
                    <a
                      href={frontmatter.url}
                      className="transition duration-500 ease-in-out h-4 cursor-pointer bg-blue-300 py-1 px-2 rounded w-auto inline-block mt-1 hover:bg-blue-200 transform  hover:scale-110"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex">
                        <img
                          src="/icon/icons8-web.png"
                          className="w-8 h-8 items-center"
                          alt="アイコン"
                          style={{
                            height: "32px",
                          }}
                        />
                        <p className="flex h-8 items-center mx-2">Web</p>
                      </div>
                    </a>
                  </>
                );
              } else {
                return (
                  <div
                    className={styles.main_contents + " m-auto	 justify-center"}
                  >
                    {frontmatter.author}
                    さんが書きました
                  </div>
                );
              }
            })()}

            {/* <a href={frontmatter.url}>{frontmatter.author}</a> */}
          </span>
        </p>
        <hr className={styles.hr} />
        <div className={styles.markdownBody + " "}>
          <div className="markdownBody">
            <ReactMarkdown allowDangerousHtml={true} source={markdownBody} />
            {/* <ReactMarkdownWithHtml  /> */}
          </div>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
