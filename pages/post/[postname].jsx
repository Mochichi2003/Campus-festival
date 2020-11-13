// import Link from "next/link";
import matter from "gray-matter";
// import ReactMarkdown from "react-markdown";
import marked from "marked";

import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "../../style/posts/[postname].module.scss";

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
                        <svg
                          width="24px"
                          height="24px"
                          id="レイヤー_1"
                          data-name="レイヤー 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 737.18051 737.21209"
                          className="m-1"
                        >
                          <path
                            d="M591.145,454.98581H705.91425V696.03253H591.145Z"
                            transform="translate(-136.51184 -126.28085)"
                          />
                          <path
                            d="M302.26744,531.754V457.08751H502.338V531.754Z"
                            transform="translate(-136.51184 -126.28085)"
                          />
                          <path
                            d="M504.2391,620.63127v75.11567H303.98372V620.63127Z"
                            transform="translate(-136.51184 -126.28085)"
                          />
                          <path
                            d="M873.49063,500.013c.00053-92.07593.53649-184.156-.17851-276.22642-.51965-66.92931-30.16581-96.87767-96.96349-97.08591q-271.10974-.84492-542.22389-.00607c-67.05666.20332-96.97478,29.94617-97.18647,96.76q-.85935,271.10974-.00669,542.22378c.205,66.72987,30.42259,97.1622,96.87181,97.378q271.10974.88071,542.22379.00838c66.5728-.20845,96.72134-30.5535,97.27918-97.057C874.05,677.34843,873.49011,588.67835,873.49063,500.013ZM402.31544,198.74783a50.81152,50.81152,0,1,1-50.81151,50.81151A50.81151,50.81151,0,0,1,402.31544,198.74783Zm-122.11637,0a50.81152,50.81152,0,1,1-50.81162,50.81151A50.81151,50.81151,0,0,1,280.19907,198.74783Zm508.63832,578.5365H222.29909V374.27154h566.5383ZM789.0878,286.463H508.6385v-75.7728H789.0878Z"
                            transform="translate(-136.51184 -126.28085)"
                          />
                        </svg>
                        {/* <img
                          src="/icon/icons8-web.png"
                          className="w-8 h-8 items-center"
                          alt="アイコン"
                          style={{
                            height: "32px",
                          }}
                        /> */}
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
          {/* <div className="markdownBody">
            <ReactMarkdown source={markdownBody} />
          </div> */}
          <div className="markdownBody">
            <div
              style={{
                width: "100%",
              }}
              dangerouslySetInnerHTML={{
                __html: marked(markdownBody),
              }}
            />
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
