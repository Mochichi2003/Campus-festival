// import Link from "next/link";
// import Layout from "../components/Layout";

import React from "react";
// import styles from "../style/live.module.sass";
import CountdownTimer from "../components/Countdowntimer/CountdownTimer";
import Layout from "../components/Layout";

const Live = () => (
  <Layout title="ライブページ" NotShowHederAndFooter="true">
    <CountdownTimer />
  </Layout>
);

export default Live;
