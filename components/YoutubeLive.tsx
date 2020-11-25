import React from "react";
import dayjs from "dayjs";

import "dayjs/locale/ja";

import Debug from "debug";
import Image from "next/image";
// import Link from "next/link";
const debug = Debug("dev:time");

class RemainingTime extends React.Component {
  //  - []TODO  カウントダウンを表示するようにする
  eventDate: any;
  timerID: any;
  time: any;
  state: any;

  nowtime(): any {
    // 上は本番用
    this.eventDate = dayjs(
      "2020-11-29 12:00:00.000", // キャンフェスが始まる1時間前にしてYoutubeLiveが早めに表示サれる様にした
      "YYYY-MM-DD HH:mm:ss.SSS"
    );
    // 下はテスト用
    // this.eventDate = dayjs(
    //   "2020-10-16 11:00:00.000",
    //   "YYYY-MM-DD HH:mm:ss.SSS"
    // );

    debug(dayjs().format("残り DD日 hh時間mm分ss秒"));
    if (this.eventDate.diff(dayjs()) < 4 * 60 * 60 * 1000 * -1) {
      // キャンフェスが終わってから1時間が立ってからYoutubeLIVEを消す
      // console.log("0秒以下になりました");
      // console.log(this.eventDate.diff(dayjs()));
      return {
        end: true,
      }; // 終了したときはendがtrueになる
    } else if (this.eventDate.diff(dayjs()) < 0) {
      // console.log("0秒以下になりました");
      // console.log(this.eventDate.diff(dayjs()));
      return {
        end: false,
        helding: true,
      };
    } else {
      return {
        show: true,
      };
    }
  }

  nowsession() {
    if (this.nowtime().helding) {
      return (
        <div>
          <div className="movie-wrap bg-black relative ">
            <iframe
              className=""
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/5qap5aO4i9A"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* <div className={styles.arrows}></div> */}
        </div>
      );
    } else if (this.nowtime().end) {
      return (
        <div className="movie-wrap bg-black relative ">
          {/* <iframe
        className=""
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/5qap5aO4i9A"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
          <div className="text-white text-4xl font-inter m-auto position-absolute h-4">
            <p>YoutubeLiveは終了しました</p>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className=" movie-wrap bg-black relative  border border-gray-700 ">
            {/* <iframe
        className=""
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/5qap5aO4i9A"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
            <div className="items-center text-center w-full">
              <img
                src="/icon/yokohama2/android-chrome-512x512.png"
                height={512}
                width={512}
                className=" m-auto         sfdfaaaaaaaaaaaaaaaaaaaa"
                alt=""
              />
            </div>

            <div className="text-white ">
              <p className="py-8">Coming soon</p>
            </div>
          </div>
        </>
      );
    }
  }

  constructor(props: any) {
    super(props);
    this.state = {
      time: this.nowtime().times,
      insession: this.nowsession(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.nowtime().times,
      insession: this.nowsession(),
    });
  }

  // date: string = moment().format("YYYY-MM-DD");
  render() {
    return (
      <>
        <h2 className="sm:text-5xl  backdrop-filter-30 bg-white text-3xl font-semibold ">
          {/* まもなく始まります */}
          {this.state.insession}
        </h2>
      </>
    );
  }
}

const Index = () => {
  return (
    <div>
      <RemainingTime />
    </div>
  );
};
export default Index;
