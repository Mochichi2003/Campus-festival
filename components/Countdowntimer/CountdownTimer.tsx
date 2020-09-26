import React from "react";

import styles from "./CountdownTimer.module.sass";
import moment from "moment";
moment().locale("ja");
class RemainingTime extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      timer: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
  }

  // date: string = moment().format("YYYY-MM-DD");
  render() {
    return (
      <>
        <p>残り20日23時間23分12秒</p>
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
