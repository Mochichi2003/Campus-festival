import React from "react";

import styles from "./CountdownTimer.module.sass";
// import moment from "moment";
import dayjs from "dayjs";
import 'dayjs/locale/ja';

dayjs.locale('ja');
// moment().locale("ja");
class RemainingTime extends React.Component {
  // TODO  カウントダウンを表示するようにする
  nowtime(): string {
    return dayjs().format("残り DD日 hh時間mm分ss秒");
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
        <h1>まもなく始まります</h1>
        <h2>
          <RemainingTime />
        </h2>
      </div>
    </div>
  );
}
