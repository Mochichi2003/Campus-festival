import Link from "next/link";
import Style from "./style/PostList.module.sass";
// import showpostsimg from "./ShowPostsImg";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;
  // postsのリストをランダムにsortするところ
  for (let i = posts.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = posts[i];
    posts[i] = posts[j];
    posts[j] = tmp;
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold my-6 md:text-5xl">
        {" "}
        ここはN高横浜キャンパスの生徒が作った作品を展示するところです
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
                    pathname: `/post/${post.slug}`,
                  }}
                >
                  <div>
                    {" "}
                    <div className="  border-solid border rounded border-gray-300  flex">
                      <div className=" text-gray-700 text-center   ">
                        {(() => {
                          if (post.frontmatter.img) {
                            // return <span>Good morning</span>;
                            return (
                              <img
                                src={post.frontmatter.img}
                                alt="アイコン画像"
                                className={
                                  Style.postlisticonimg +
                                  " translate-x-1/2 translate-y-1/2 border-gray-300 border m-2 rounded"
                                }
                                style={{}}
                              />
                            );
                          }
                        })()}
                      </div>
                      <div className="p-3 sm:p-4 px-4 py-2">
                        <a>
                          <h2 className=" md:text-3xl  font-medium">
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
