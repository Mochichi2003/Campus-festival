import Layout from "../components/Layout";
import PostList from "../components/PostList";
import matter from "gray-matter";
import Link from "next/link";
// import Layout from "../components/Layout";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout
      title={"生徒の作品集"}
      HasHeaderMargin={true}
      iswebPresentation={true}
    >
      <h1 className="title">
        {/* ここはN高横浜キャンパスの生徒が作った作品を展示するところです */}
      </h1>
      {/* <p className="description">{description}</p> */}
      <main>
        <div>
          <Link href="/post#Post_lists_1">
            <button className="p-2 mt-8 text-white rounded  bg-blue-500 hover:bg-blue-400 duration-300  ml-8">
              生徒の作品集
            </button>
          </Link>
        </div>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export default Index;

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
