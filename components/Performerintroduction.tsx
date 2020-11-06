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
    <div className="sm:w-2/4 px-6 py-2 ">
      {/* かーど transition duration-150 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded */}
      <div className="max-w-xs select-none rounded overflow-hidden shadow hover:shadow-xl my-2 duration-300 transition  ease-in-out transform hover:scale-103">
        <img
          className="w-full border-4 border-gray-700 rounded"
          src={img}
          alt="Sunset in the mountains"
        />
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
      <h2 className="text-5xl font-semibold mb-8 mt-4">出演者紹介</h2>
      <div className=" sm:flex flex-row flex-wrap justify-start">
        <Cards
          titel="タイトルです1"
          body="それぞれの出演者の紹介文ですよそれぞれの出演者の紹介文ですよ\n\nカキクケコ"
          img="/performer_img/postlist_noimgs_アートボード 1.png"
        />
        <Cards
          titel="タイトルです2"
          body="それぞれの出演者の紹介文ですよそれぞれの出演者の紹介文ですよ"
          img="/performer_img/postlist_noimgs_アートボード 1.png"
        />
        <Cards
          titel="タイトルです3"
          body="それぞれの出演者の紹介文ですよそれぞれの出演者の紹介文ですよ"
          img="/performer_img/postlist_noimgs_アートボード 1.png"
        />
        <Cards
          titel="タイトルです4"
          body="それぞれの出演者の紹介文ですよそれぞれの出演者の紹介文ですよ"
          img="/performer_img/postlist_noimgs_アートボード 1.png"
        />
        <Cards
          titel="タイトルです5"
          body="それぞれの出演者の紹介文ですよそれぞれの出演者の紹介文ですよ"
          img="/performer_img/postlist_noimgs_アートボード 1.png"
        />
        <Cards
          titel="タイトルです6"
          body="それぞれの出演者の紹介文ですよそれぞれの出演者の紹介文ですよ"
          img="/performer_img/postlist_noimgs_アートボード 1.png"
        />
        <Cards
          titel="タイトルです7"
          body="それぞれの出演者の紹介文ですよそれぞれの出演者の紹介文ですよ"
          img="/performer_img/postlist_noimgs_アートボード 1.png"
        />
        <Cards
          titel="タイトルです8"
          body="それぞれの出演者の紹介文ですよそれぞれの出演者の紹介文ですよ"
          img="/performer_img/postlist_noimgs_アートボード 1.png"
        />
        <Cards
          titel="タイトルです9"
          body="それぞれの出演者の紹介文ですよそれぞれの出演者の紹介文ですよ"
          img="/performer_img/postlist_noimgs_アートボード 1.png"
        />
      </div>
    </div>
  );
};

export default PerformerIntroduction;
