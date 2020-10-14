// import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import Layout from "../../components/Layout";
import MarkdownStyle from "../../style/markdown.module.css";
import styles from "../../style/posts/[postname].module.sass";
// import { Button } from "react-bootstrap";
import prism from "prismjs";

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <Layout title={`${frontmatter.title || "No title"} `}>
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
            <a href={frontmatter.url}>{frontmatter.author}</a>
          </span>
          さんが書きました
        </p>
        <hr className={styles.hr} />
        <div className={MarkdownStyle.markdown_body}>
          <ReactMarkdown source={markdownBody} />
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
