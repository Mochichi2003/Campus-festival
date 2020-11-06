import React from "react";

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
    <div className="w-2/4 px-8 py-4 ">
      {/* かーど */}
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <img className="w-full" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4 pb-6 ">
          <div className="font-bold text-xl mb-2">{titel}</div>
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
      <h2 className="text-5xl font-semibold">出演者紹介</h2>
      <div className=" flex flex-row flex-wrap justify-around">
        <Cards
          titel="タイトルです1"
          body="それぞれの出演者の紹介文ですよ\n\nカキクケコ"
          img="/performer_img/noimage.png"
        />
        <Cards
          titel="タイトルです2"
          body="それぞれの出演者の紹介文ですよ"
          img="/performer_img/noimage.png"
        />
        <Cards
          titel="タイトルです3"
          body="それぞれの出演者の紹介文ですよ"
          img="/performer_img/noimage.png"
        />
        <Cards
          titel="タイトルです4"
          body="それぞれの出演者の紹介文ですよ"
          img="/performer_img/noimage.png"
        />
        <Cards
          titel="タイトルです5"
          body="それぞれの出演者の紹介文ですよ"
          img="/performer_img/noimage.png"
        />
        <Cards
          titel="タイトルです6"
          body="それぞれの出演者の紹介文ですよ"
          img="/performer_img/noimage.png"
        />
        <Cards
          titel="タイトルです7"
          body="それぞれの出演者の紹介文ですよ"
          img="/performer_img/noimage.png"
        />
        <Cards
          titel="タイトルです8"
          body="それぞれの出演者の紹介文ですよ"
          img="/performer_img/noimage.png"
        />
        <Cards
          titel="タイトルです9"
          body="それぞれの出演者の紹介文ですよ"
          img="/performer_img/noimage.png"
        />
      </div>
    </div>
  );
};

export default PerformerIntroduction;
