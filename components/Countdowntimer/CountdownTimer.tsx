import React from "react";

import styles from "./CountdownTimer.module.sass";
// import moment from "moment";
import dayjs from "dayjs";
import "dayjs/locale/ja";

import Debug from "debug";
const debug = Debug("dev:time");

dayjs.locale("ja");
// moment().locale("ja");
class RemainingTime extends React.Component {
  // TODO  カウントダウンを表示するようにする
  nowtime(): string {
    this.eventDate = dayjs(
      "2020-11-29 00:00:00.000",
      "YYYY-MM-DD HH:mm:ss.SSS"
    );

    debug(dayjs().format("残り DD日 hh時間mm分ss秒"));
    return (
      Math.floor(this.eventDate.diff(dayjs()) / 1000 / 60 / 60 / 24) +
      "日" +
      Math.floor((this.eventDate.diff(dayjs()) / 1000 / 60 / 60) % 24) +
      "時間" +
      Math.floor((this.eventDate.diff(dayjs()) / 1000 / 60) % 60) +
      "分" +
      Math.floor((this.eventDate.diff(dayjs()) / 1000) % 60) +
      "秒後"
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
export default function header() {
  return (
    <div className={styles.main}>
      <div className={styles.mainText}>
        <h1>幕が上がります</h1>
        <h2>
          <RemainingTime />
        </h2>
      </div>
    </div>
  );
}
