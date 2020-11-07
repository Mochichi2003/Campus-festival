import Link from "next/link";
import Style from "./style/PostList.module.sass";

// import showpostsimg from "./ShowPostsImg";
// import Image from "next/image";
// import Debug from "debug";
// const debug = Debug("dev:Post_lists");
const PostLIstWindow = (post) => {
  return (
    <Link
      className=""
      href={{
        pathname: `/post/${post.post.slug}`, // 投稿したやつのりんく
      }}
    >
      <div className="w-full sm:w-2/4 px-6 py-6 ">
        {/* かーど transition duration-150 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded */}
        <div
          className="max-w-xs select-none rounded overflow-hidden shadow hover:shadow-xl my-2 duration-300 transition cursor-pointer ease-in-out transform hover:scale-103 h-full"
          style={{ height: "100%" }}
        >
          <img
            width={600}
            height={340}
            className="w-full border-4 postImgs border-gray-700 rounded "
            src={
              post.post.frontmatter.img ||
              "/performer_img/postlist_noimgs_アートボード 1.png"
            }
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 pb-6 ">
            <div className="font-bold text-xl mb-2">
              {post.post.frontmatter.title}
            </div>
            <p className="text-grey-darker text-base">
              {post.post.frontmatter.author}
            </p>
          </div>
        </div>
        <p></p>
      </div>
    </Link>
  );
};

function ProjectNPost(post) {
  return (
    <>
      {/* {JSON.stringify(post.post.frontmatter)} */}
      {(() => {
        if (post.post.frontmatter.proN) {
          return <PostLIstWindow post={post.post} />;
        }
      })()}

      {/* <hr /> */}
    </>
  );
}

function Studentposts(post) {
  return (
    <>
      {/* {JSON.stringify(post.post.frontmatter)} */}
      {(() => {
        if (!post.post.frontmatter.proN) {
          return <PostLIstWindow post={post.post} />;
        }
      })()}

      {/* <hr /> */}
    </>
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
        <div className={Style.postlistview + " postlistContainer"}>
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
        <div className={Style.postlistview + " postlistContainer"}>
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
