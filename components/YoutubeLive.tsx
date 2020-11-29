import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import "dayjs/locale/ja";

// import Debug from "debug";
// import Image from "next/image";
// import Link from "next/link";
// const debug = Debug("dev:time");

class RemainingTime extends React.Component {
  //  - []TODO  カウントダウンを表示するようにする
  eventDate: any;
  timerID: any;
  time: any;
  state: any;

  nowtime(): any {
    // 上は本番用
    this.eventDate = dayjs(
      "2020-11-29 9:00:00.000", // キャンフェスが始まる1時間前にしてYoutubeLiveが早めに表示サれる様にした
      "YYYY-MM-DD HH:mm:ss.SSS"
    );
    // 下はテスト用
    // this.eventDate = dayjs(
    //   "2020-10-16 11:00:00.000",
    //   "YYYY-MM-DD HH:mm:ss.SSS"
    // );

    // debug(dayjs().format("残り DD日 hh時間mm分ss秒"));
    if (this.eventDate.diff(dayjs()) < 100000000000000 * 60 * 60 * 1000 * -1) {
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
        <>
          <div className="  bg-black relative   py-16">
            <a
              href="https://forms.gle/Xi2CtCywdyrFGhZbA"
              className="text-blue-500 underline my-16"
            >
              ここのリンクのフォームに答えて参加して下さい
            </a>
            {/* aaaaaaa
             */}
            <div className="text-white ">
              <p className="py-8 text-white  text-3xl font-medium">
                Youtube LIVE が始まりました事前に配布されているURLで御覧ください
              </p>
            </div>
          </div>
          {/* <div className="movie-wrap bg-black relative ">


            <svg
              height="128"
              viewBox="0 -77 512.00213 512"
              className="m-auto"
              width="128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
                fill="#f00"
              />
              <path
                d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
                fill="#fff"
              />
            </svg>
            <p className="text-center text-white">始まりました</p>
          </div>
          <div className={styles.arrows}></div> */}
        </>
      );
    } else if (this.nowtime().end) {
      return (
        <div className="movie-wrap bg-black relative ">
          <div className="  bg-black relative   ">
            <div className="m-auto " style={{ maxWidth: "512px" }}>
              <a
                href="https://forms.gle/Xi2CtCywdyrFGhZbA"
                className="text-blue-500"
              >
                こちらから御覧ください
              </a>
            </div>

            <div className="text-white ">
              <p className="py-8  text-3xl font-medium">
                Youtube LIVE が始まりました事前に配布されているURLで御覧ください
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="  bg-black relative   ">
            <div className="items-center text-center w-full">
              <div className="m-auto " style={{ maxWidth: "512px" }}>
                <Image
                  // unsized={true}
                  src="/icon/logo.png"
                  // style={{
                  //   maxHeight: "512px",
                  // }}
                  height={512}
                  width={512}
                  className=" "
                  alt=""
                />
              </div>
            </div>

            <div className="text-white ">
              <p className="py-8 font-inter text-5xl font-bold">Coming soon</p>
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
    this.timerID = setInterval(() => this.tick(), 1000);
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
