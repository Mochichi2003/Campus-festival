import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import Layout from "../../components/Layout";
// import "github-markdown-css";

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <Layout title={`${siteTitle} | ${frontmatter.title}`}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css"
        />
      </Head>
      <Link href="/postdatas">
        <a>Back to post list</a>
      </Link>
      <article>
        <h1>{frontmatter.title}</h1>
        <p>By {frontmatter.author}</p>
        <div>
          <ReactMarkdown className="markdown-body" source={markdownBody} />
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
