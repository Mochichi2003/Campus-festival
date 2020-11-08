// import Link from "next/link";
import Head from "next/head";
import React from "react";

import axios from "axios";
// import matter from "gray-matter";

// import style from "../style/index.module.sass";
// import Postlist from "../components/PostList";
// import CountdownTimer from "../components/Countdowntimer/CountdownTimer";
import Layout from "../components/Layout";
// import { type } from "os";
// import Timeteble from "../components/timetable";
// import Performerintroduction from "../components/Performerintroduction";
// import { type } from "os";
// import Postdatas from "../components/postdatas";
// type Props = { posts: any; title: any; description: any; props: any };

axios
  .get("/api/test")
  .then(function (response) {
    // handle success
    console.log("正常に帰ってきまし");

    console.log(response.data.name);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// type Props = {
//   isToggleOn: boolean;
// };
class GetAppiData extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: false, getaxios_value: "何も取得されてません" };

    this.handleClick = this.handleClick.bind(this);
    this.getaxios = this.getaxios.bind(this);
  }

  async getData() {
    axios
      .get("/api/test")
      .then(
        await function (response) {
          // handle success
          console.log("正常に帰ってきまし");

          console.log(response.data.name);
          // this.getaxios_value = "response.data.name";
          // return <p>response.data.name</p>;
          return "こんちゃあああああああああ";
        }
      )
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  getaxios() {
    // console.log("取得しようとしています");
    // axios
    //   .get("/api/test")
    //   .then(function (response) {
    //     console.log("取得できました" + response.data.name);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   })
    //   .then(function (err) {
    //     console.log(err + " err ");
    //   });
    this.setState((state) => ({
      getaxios_value: {
        function() {
          axios
            .get("/api/test")
            .then(function (response) {
              console.log("取得できました" + response.data.name);
              return JSON.stringify(response.data.name);
            })
            .catch(function (err) {
              console.log(err);
            })
            .then(function (err) {
              console.log(err);
            });
        },
      },
    }));
  }

  handleClick() {
    console.log("クリックしたよ");
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <p>テスト</p>
        <button
          className="bg-blue-400 p-3 m-4 rounded"
          onClick={this.handleClick}
        >
          {" "}
          {this.state.isToggleOn ? "ON" : "OFF"}
          ぼたん
        </button>
        <br />
        <button className="bg-blue-400 p-3 m-4 rounded" onClick={this.getaxios}>
          {" "}
          {/* {this.state.isToggleOn ? "ON" : "OFF"} */}
          {this.state.getaxios_value + " "}
          ぼたん
        </button>
      </div>
    );
  }
}

const IndexPage = () => {
  // const teeeeeeeeeeeeee = () => {};
  // const userName = "reo777";
  const getProfile = async () => {
    axios
      .get("/api/test")
      .then(function (response) {
        // handle success
        console.log("正常に帰ってきまし");

        console.log(response.data.name);
        return <p>response.data.name</p>;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Layout showFotter={false} showHeader={true}></Layout> */}
      {/* <CountdownTimer /> */}
      <Layout
        title="Home"
        showFotter={true}
        showHeader={true}
        HasHeaderMargin={true}
        // NotShowHederAndFooter="true"
      >
        <GetAppiData />
        <button onClick={() => getProfile()}>APIのテスト</button>
        <p></p>
        <p>こんちわああああああああああああああ</p>
      </Layout>

      {/* <Layout showHeader={false} showFotter={true} useHead={false}></Layout> */}
      {/* <CountdownTimer /> */}
    </div>
  );
};

export default IndexPage;
