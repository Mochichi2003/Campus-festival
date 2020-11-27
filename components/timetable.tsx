import React from "react";
// import styles from "./style/timetable.module.scss";
// import Link from "next/link";
import Image from "next/image";
// import { User } from "../interfaces";

// type Props = {
// data: User;
// };

const ListItem = () => (
  <div className="border-t">
    <h3 className="text-4xl  font-bold my-8">タイムテーブル</h3>
    <div>
      {/* <table className="table-auto w-full mx-0 my-8 text-left">
      <thead>
        <tr>
          <th className=" px-4  ring-gray-400 py-3">時間</th>
          <th className=" px-4  ring-gray-400 py-3">内容</th>
          <th className=" px-4 py-3">出演者</th>
        </tr>
      </thead>
      <tbody>
        <tr className={"bg-gray-200  duration-300 " + styles.testtt}>
          <td className="  px-4 py-3">10:53 〜 10:55</td>
          <td className="  px-4 py-3">カラオケ大会</td>
          <td className=" hover: ring-b hover:ring-b-4 ring-gray-400 px-4 py-3">
            わああああああああ
          </td>
        </tr>
        <tr>
          <td className=" hover: ring-b hover:ring-b-4   ring-gray-400 px-4 py-3">Adam</td>
          <td className="  px-4 py-3">
            ナントカカントカ感とか
          </td>
          <td className=" hover: ring-b hover:ring-b-4 ring-gray-400 px-4 py-3">112</td>
        </tr>
        <tr className={"bg-gray-200  duration-300 " + styles.testtt}>
          <td className="  px-4 py-3">Chris</td>
          <td className="  px-4 py-3">
            Intro to JavaScript
          </td>
          <td className=" hover: ring-b hover:ring-b-4 ring-gray-400 px-4 py-3">1,280</td>
        </tr>
      </tbody>
      </table> */}
    </div>

    {/* 使う方 */}
    <div className="text-center my-4">
      <Image
        src="/timetable/timetable_complete.png"
        alt="タイムテーブル"
        loading="lazy"
        className="max-h-85vh  sss:shadow my-8 m-auto"
        unsized={true}
      />
      <Image
        className="max-h-85vh max-w-full  sss:shadow my-8 m-auto"
        src="/poster/キャンフェスポスター.jpg"
        unsized={true}
        alt="ポスター"
        loading="lazy"
        // width={2897}
        // height={4096}
      />
    </div>
  </div>
);

export default ListItem;
