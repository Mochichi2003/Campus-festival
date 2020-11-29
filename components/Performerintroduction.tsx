import React from "react";

import Cards from "./Cards";
// type PerformerIntroductionType = {
//   children?: string;
//   img: string;
//   title: string;
//   body: string;
// };

const PerformerIntroduction = () => {
  return (
    <div id="performerintroduction">
      <h2 className="text-5xl font-semibold mb-8 mt-4">出演者紹介</h2>
      <div className=" sm:flex flex-row flex-wrap justify-start">
        <Cards
          titel="KasyU(のど自慢)"
          body="七色の歌声でアツくなろう！"
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (20).jpg"
          height={756}
          width={1008}
        />
        <Cards
          titel="ダンス"
          body="1年生が魅せる本気のダンス"
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (15).jpg"
          height={756}
          width={1008}
        />
        <Cards
          titel="アントラーズ(バンド)"
          body="バンド演奏とダンスのコラボに注目！！特別ゲストも登場！？！？"
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (14).jpg"
          height={756}
          width={1008}
        />
        <Cards
          titel="女装男装"
          body="七人の見事な変化ご覧あれ"
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (22).jpg"
          height={756}
          width={1008}
        />
        <Cards
          titel="スプラトゥーン大会"
          body="予選を勝ち抜いた者たちのアツい決勝戦！"
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (16).jpg"
          height={756}
          width={1008}
        />
        <Cards
          titel="セカンドペンギン(バンド)"
          body="三年生が奏でるラストライブ"
          img="/Introduction/選択項目から作成したフォルダ 2/iOS の画像 (13).jpg"
          height={756}
          width={1008}
        />
      </div>
      <div id="performerintroduction_iin">
        <h2 className="text-5xl font-semibold mb-8 mt-4">
          キャンフェス実行委員会紹介
        </h2>
        <div className="sm:flex flex-row flex-wrap justify-start">
          <Cards
            titel="実行委員長"
            body="横浜キャンフェス 2020 実行委員長の赤羽です！委員長として『心をひとつに』をモットーに運営・出演者・視聴者の全員が楽しめるキャンフェスをお届けします！"
            img="/Introduction/選択項目から作成したフォルダ 2/紹介するところ/iOS の画像 (16).jpg"
            height={756}
            width={1008}
          />
          <Cards
            titel="副実行委員長"
            body="副実行委員長の竹内宇泉です。今年のキャンパスフェスティバルは、新型コロナウイルスの影響で予定通りにいかないことが多く、準備がとても大変でした。しかし、出演者、見てくださる生徒、保護者の皆様のおかげで、このように無事開催できることを、運営一同とても嬉しく思っております。横浜キャンパス全員で、作り上げるキャンパスフェスティバル、ぜひ楽しんでください！"
            img="/Introduction/選択項目から作成したフォルダ 2/紹介するところ/iOS の画像 (15).jpg"
            height={756}
            width={1008}
          />
          <Cards
            titel="ステージ班リーダー"
            body="ステージ班リーダーの本間陸人です。コロナ禍という逆境の中だからこその、前例のない企画に携わることができて光栄に思っています。今年しかない、空前絶後の特別なキャンパスフェスティバルをお届けします！"
            img="/Introduction/選択項目から作成したフォルダ 2/紹介するところ/iOS の画像 (14).jpg"
            height={756}
            width={1008}
          />
          <Cards
            titel="web・装飾班リーダー"
            body="装飾班リーダーの髙橋優太です。行事が次々に中止になっていくご時世で、N 高ならではのイベントを支えていく一翼として今年の大きな注目点であるキャンフェスを委員一同と協力し、楽しく飾って行きます！"
            img="/Introduction/選択項目から作成したフォルダ 2/紹介するところ/iOS の画像 (13).jpg"
            height={756}
            width={1008}
          />
          <Cards
            titel="配信担当班リーダー"
            body="配信担当班リーダーの小島壮です。オンラインキャンフェスにおいて配信は最も重要な柱、失敗が許されない部門ということで責任を持って準備をしてきました。現地にいない方にも楽しんでいただけるような、オンラインの壁をも感じさせない一体感のあるキャンフェスを目指します！"
            img="/Introduction/選択項目から作成したフォルダ 2/紹介するところ/IMG_0429.jpeg"
            height={756}
            width={1008}
          />
        </div>
      </div>
    </div>
  );
};

export default PerformerIntroduction;
