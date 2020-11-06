import Link from "next/link";
import Style from "./style/PostList.module.sass";
// import showpostsimg from "./ShowPostsImg";
// import Image from "next/image";
// import Debug from "debug";
// const debug = Debug("dev:Post_lists");
const PostLIstWindow = (post) => {
  return (
    <Link
      href={{
        pathname: `/post/${post.post.slug}`, // 投稿したやつのりんく
      }}
    >
      <div
        className={
          Style.PostList + " border-solid border rounded-lg border-gray-300   "
        }
        key={post.post.slug}
      >
        <div>
          <div className="postbtns    flex">
            <div className=" text-gray-700 text-center   ">
              {(() => {
                if (post.post.frontmatter.img) {
                  // return <span>Good morning</span>;
                  return (
                    <div className="max-w-10 max-h-10 items-center   flex-row">
                      <img
                        src={post.post.frontmatter.img}
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
                <h2 className=" md:text-3xl text-left text-2xl font-bold">
                  {post.post.frontmatter.title}
                </h2>
              </a>
              <p className=" text-left pt-1 hover_bulue">
                {post.post.frontmatter.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

function ProjectNPost(post) {
  return (
    <div>
      {/* {JSON.stringify(post.post.frontmatter)} */}
      {(() => {
        if (post.post.frontmatter.proN) {
          return <PostLIstWindow post={post.post} />;
        }
      })()}

      {/* <hr /> */}
    </div>
  );
}
function Studentposts(post) {
  return (
    <div>
      {/* {JSON.stringify(post.post.frontmatter)} */}
      {(() => {
        if (!post.post.frontmatter.proN) {
          return <PostLIstWindow post={post.post} />;
        }
      })()}

      {/* <hr /> */}
    </div>
  );
}
// プロNとか諸々の選択をしたりタイトルを取得したりするところ

export default function PostList({ posts }) {
  if (posts === "undefined") return null;
  return (
    <div>
      {/* プロNのところの投稿のところ */}
      <div>
        <h1 className="text-3xl font-bold my-6 md:text-5xl px-8">ProjectN</h1>
        <p>{/* <pre className="break-all">{JSON.stringify(posts)}</pre> */}</p>
        <hr />
        {!posts && <div>何もありません！</div>}
        <div className={Style.postlistview}>
          {/* <div>{JSON.stringify(posts)}</div> */}
          {posts &&
            posts.map((post) => {
              return (
                <>
                  <ProjectNPost post={post} />
                </>
              );
            })}
        </div>
      </div>
      {/* 各生徒の投稿のところ */}
      <div>
        <h1 className="text-3xl font-bold my-6 md:text-5xl px-8">
          生徒の作品集
        </h1>
        <p>{/* <pre className="break-all">{JSON.stringify(posts)}</pre> */}</p>
        <hr />
        {!posts && <div>何もありません！</div>}
        <div className={Style.postlistview}>
          {/* <div>{JSON.stringify(posts)}</div> */}
          {posts &&
            posts.map((post) => {
              return (
                <>
                  <Studentposts post={post} />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
