import Link from "next/link";
import Style from "./style/PostList.module.sass";
// import showpostsimg from "./ShowPostsImg";
import Image from "next/image";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;
  // postsのリストをランダムにsortするところ;
  for (let i = posts.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = posts[i];
    posts[i] = posts[j];
    posts[j] = tmp;
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold my-6 md:text-5xl">
        横浜キャンパスの生徒が作った作品集
      </h1>
      <hr />
      {!posts && <div>何もありません！</div>}
      <ul className={Style.postlistview}>
        {/* <div>{JSON.stringify(posts)}</div> */}
        {posts &&
          posts.map((post) => {
            return (
              <div className={Style.PostList + "    "} key={post.slug}>
                <Link
                  href={{
                    pathname: `/post/${post.slug}`, // 投稿したやつのりんく
                  }}
                >
                  <div>
                    <div className="  border-solid border rounded-lg border-gray-300  flex">
                      <div className=" text-gray-700 text-center   ">
                        {(() => {
                          if (post.frontmatter.img) {
                            // return <span>Good morning</span>;
                            return (
                              <div className="max-w-10 max-h-10 items-center   flex-row">
                                <img
                                  src={post.frontmatter.img}
                                  alt="アイコン画像"
                                  className={
                                    Style.postlisticonimg +
                                    "  border-gray-300 border m-2 rounded"
                                  }
                                  style={{}}
                                />
                              </div>
                            );
                          }
                        })()}
                      </div>
                      <div className="p-3 sm:p-4 px-4 py-2">
                        <a>
                          <h2 className=" md:text-3xl text-2xl font-bold">
                            {post.frontmatter.title}
                          </h2>
                        </a>
                        <p className="text-gray-900 pt-1">
                          {post.frontmatter.author}
                          が書きました
                        </p>
                      </div>
                    </div>
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
