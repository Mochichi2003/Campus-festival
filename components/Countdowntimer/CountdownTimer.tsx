import React from "react";

import styles from "./CountdownTimer.module.sass";
// import moment from "moment";
import dayjs from "dayjs";
import "dayjs/locale/ja";

import Debug from "debug";
import Link from "next/link";
const debug = Debug("dev:time");

dayjs.locale("ja");
// moment().locale("ja");
class RemainingTime extends React.Component {
  //  TODO  カウントダウンを表示するようにする
  eventDate: any;
  timerID: any;
  time: any;
  state: any;

  nowtime(): any {
    this.eventDate = dayjs(
      "2020-11-29 13:00:00.000",
      "YYYY-MM-DD HH:mm:ss.SSS"
    );

    debug(dayjs().format("残り DD日 hh時間mm分ss秒"));
    return (
      "残り" +
      Math.floor(this.eventDate.diff(dayjs()) / 1000 / 60 / 60 / 24) +
      "日" +
      Math.floor((this.eventDate.diff(dayjs()) / 1000 / 60 / 60) % 24) +
      "時間" +
      Math.floor((this.eventDate.diff(dayjs()) / 1000 / 60) % 60) +
      "分" +
      Math.floor((this.eventDate.diff(dayjs()) / 1000) % 60) +
      "秒"
    );
  }

  constructor(props: any) {
    super(props);
    this.state = { time: this.nowtime() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.nowtime(),
    });
  }

  // date: string = moment().format("YYYY-MM-DD");
  render() {
    return (
      <>
        <p>{this.state.time}</p>
      </>
    );
  }
}
export default function countdowntimer() {
  return (
    <div className={styles.main}>
      <div className="text-lg p-3">
        <Link href="/">
          <a className=" duration-150 text-gray-200">戻る</a>
        </Link>
      </div>
      <div className={styles.mainText}>
        <h1
          className={
            styles.topicon + " text-3xl sm:text-6xl font-sans  mt-0  font-bold"
          }
        >
          Yokohama campus festival
        </h1>
        <h1 className="sm:text-5xl  text-3xl font-semibold ">
          まもなく始まります
        </h1>
        <h2 className="sm:text-4xl text-2xl font-semibold ">
          <RemainingTime />
        </h2>
      </div>
    </div>
  );
}
