import React from "react";

import styles from "./CountdownTimer.module.sass";
// import moment from "moment";
import dayjs from "dayjs";
import "dayjs/locale/ja";

import Debug from "debug";
// import Link from "next/link";
const debug = Debug("dev:time");

dayjs.locale("ja");
// moment().locale("ja");
class RemainingTime extends React.Component {
  //  - []TODO  カウントダウンを表示するようにする
  eventDate: any;
  timerID: any;
  time: any;
  state: any;

  nowtime(): any {
    // 上は本番用
    this.eventDate = dayjs(
      "2020-11-29 13:00:00.000",
      "YYYY-MM-DD HH:mm:ss.SSS"
    );
    // 下はテスト用
    // this.eventDate = dayjs(
    //   "2020-10-16 11:00:00.000",
    //   "YYYY-MM-DD HH:mm:ss.SSS"
    // );

    debug(dayjs().format("残り DD日 hh時間mm分ss秒"));
    if (this.eventDate.diff(dayjs()) < 3 * 60 * 60 * 1000 * -1) {
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
        times:
          "" +
          Math.floor(this.eventDate.diff(dayjs()) / 1000 / 60 / 60 / 24) +
          "日と" +
          Math.floor((this.eventDate.diff(dayjs()) / 1000 / 60 / 60) % 24) +
          "時間" +
          Math.floor((this.eventDate.diff(dayjs()) / 1000 / 60) % 60) +
          "分" +
          Math.floor((this.eventDate.diff(dayjs()) / 1000) % 60) +
          "秒後スタート",
        show: true,
      };
    }
  }

  nowsession() {
    if (this.nowtime().helding) {
      return (
        <>
          開催中
          {/* <div className={styles.arrows}></div> */}
        </>
      );
    } else if (this.nowtime().end) {
      return <span>終了しました</span>;
    } else {
      return "";
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
          {/* {this.state.insession} */}
        </h2>
        <p>
          <span className="text-black  backdrop-filter-30 bg-white tabular-nums">
            「濱の呼吸 壱ノ型 情意投合」
            <br />
            {this.state.time || this.state.insession}
          </span>
        </p>
        <div className="text-center">
          <svg
            className="animate-bounce w-12 rounded-full  backdrop-filter-30 bg-white h-12 m-auto text-black mt-6 p-3  "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>

        {/* <p>
          <svg
            className="animate-bounce  w-6 h-6 white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </p> */}
      </>
    );
  }
}

export default function countdowntimer() {
  return (
    <div
      className={styles.main + " "}
      // style={{ backgroundImage: 'url("/backgrondimg/10のコピー2.jpg")' }}
    >
      <div className="text-lg p-3">
        {/* <Link href="/">
          <a className=" duration-150 text-gray-200">戻る</a>
        </Link> */}
      </div>
      <div className={styles.mainText}>
        {/* <h1
          className={
            styles.topicon + " text-3xl sm:text-6xl font-sans  mt-0  font-bold"
          }
        >
          Yokohama campus festival
        </h1> */}

        <h2 className="sm:text-4xl text-2xl font-semibold ">
          <RemainingTime />
        </h2>
        <h2></h2>
      </div>
    </div>
  );
}
