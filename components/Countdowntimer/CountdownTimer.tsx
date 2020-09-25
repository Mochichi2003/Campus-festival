import React from "react";

import styles from "./CountdownTimer.module.sass";
import moment from "moment";
moment().locale("ja");

class Clock extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = { date: moment().format("D日 HH時間 M分 s秒") };
  }

  render() {
    return <>{this.state.date}</>;
  }
}

export default function header() {
  return (
    <div className={styles.main}>
      <div className={styles.mainText}>
        <h1>まもなく始まります</h1>
        <h2>
          残り
          <Clock />
        </h2>
      </div>
    </div>
  );
}
