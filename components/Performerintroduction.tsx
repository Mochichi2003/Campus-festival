import React from "react";
import Image from "next/image";
// type PerformerIntroductionType = {
//   children?: string;
//   img: string;
//   title: string;
//   body: string;
// };
type CardProps = {
  titel: string;
  body: string;
  img: string;
};

const Cards = ({ titel, body, img }: CardProps) => {
  return (
    <div className="w-full sm:w-2/4 md:w-1/3 h-full px-6 py-2 ">
      {/* かーど transition duration-150 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded */}
      <div
        style={{
          height: "100%",
        }}
        className=" select-none rounded overflow-hidden h-full shadow hover:shadow-xl my-2 duration-300 transition  ease-in-out transform hover:scale-103"
      >
        <Image
          height={756}
          width={1008}
          className="w-full  border-gray-700 "
          src={img}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 pb-6 ">
          <div className="font-bold text-3xl mb-2">{titel}</div>
          <p className="text-grey-darker text-base">{body}</p>
        </div>
      </div>
      <p></p>
    </div>
  );
};

const PerformerIntroduction = () => {
  return (
    <div>
      <h2 className="text-5xl font-semibold mb-8 mt-4">出演者紹介</h2>
      <div className=" sm:flex flex-row flex-wrap justify-start">
        <Cards
          titel="のど自慢"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (20).jpg"
        />
        <Cards
          titel="ダンス"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (15).jpg"
        />
        <Cards
          titel="アントラーズ"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (14).jpg"
        />
        <Cards
          titel="女装男装"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (22).jpg"
        />
        <Cards
          titel="スプラトゥーン大会"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (16).jpg"
        />
        <Cards
          titel="セカンドペンギン"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (13).jpg"
        />
      </div>
    </div>
  );
};

export default PerformerIntroduction;
