import React from "react";

import Cards from "./Cards";
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

const PerformerIntroduction = () => {
  return (
    <div>
      <h2 className="text-5xl font-semibold mb-8 mt-4">出演者紹介</h2>
      <div className=" sm:flex flex-row flex-wrap justify-start">
        <Cards
          titel="のど自慢"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (20).jpg"
          height={756}
          width={1008}
        />
        <Cards
          titel="ダンス"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (15).jpg"
          height={756}
          width={1008}
        />
        <Cards
          titel="アントラーズ"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (14).jpg"
          height={756}
          width={1008}
        />
        <Cards
          titel="女装男装"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (22).jpg"
          height={756}
          width={1008}
        />
        <Cards
          titel="スプラトゥーン大会"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (16).jpg"
          height={756}
          width={1008}
        />
        <Cards
          titel="セカンドペンギン"
          body=""
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (13).jpg"
          height={756}
          width={1008}
        />
      </div>
    </div>
  );
};

export default PerformerIntroduction;
