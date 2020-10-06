import Link from "next/link";
import Style from "./style/PostList.module.sass";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div>
      <h1> ここはN高横浜キャンパスの生徒が作った作品を展示するところです</h1>
      {!posts && <div>何もありません！</div>}
      <ul className={Style.postlistview}>
        {posts &&
          posts.map((post) => {
            return (
              <div
                className={
                  Style.PostList + " border-solid border-2 border-gray-300 "
                }
                key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <div>
                    <a>
                      <h2 className=" md:text-3xl font-semibold">
                        {post.frontmatter.title}
                      </h2>
                    </a>
                    <p className="text-gray-500">
                      {post.frontmatter.author}が書きました
                    </p>
                  </div>
                </Link>
                {/* <hr /> */}
              </div>
            );
          })}
      </ul>
    </div>
  );
}
