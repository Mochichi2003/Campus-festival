import React from "react";
import styles from "./style/timetable.module.scss";
// import Link from "next/link";

// import { User } from "../interfaces";

// type Props = {
// data: User;
// };

const ListItem = () => (
  <div>
    <h3 className="text-5xl font-bold my-8">タイムテーブル</h3>
    <div>
      {/* <table className="table-auto w-full mx-0 my-8 text-left">
      <thead>
        <tr>
          <th className=" px-4  border-gray-400 py-3">時間</th>
          <th className=" px-4  border-gray-400 py-3">内容</th>
          <th className=" px-4 py-3">出演者</th>
        </tr>
      </thead>
      <tbody>
        <tr className={"bg-gray-100  duration-300 " + styles.testtt}>
          <td className="  px-4 py-3">10:53 〜 10:55</td>
          <td className="  px-4 py-3">カラオケ大会</td>
          <td className=" hover: border-b hover:border-b-4 border-gray-400 px-4 py-3">
            わああああああああ
          </td>
        </tr>
        <tr>
          <td className=" hover: border-b hover:border-b-4   border-gray-400 px-4 py-3">Adam</td>
          <td className="  px-4 py-3">
            ナントカカントカ感とか
          </td>
          <td className=" hover: border-b hover:border-b-4 border-gray-400 px-4 py-3">112</td>
        </tr>
        <tr className={"bg-gray-100  duration-300 " + styles.testtt}>
          <td className="  px-4 py-3">Chris</td>
          <td className="  px-4 py-3">
            Intro to JavaScript
          </td>
          <td className=" hover: border-b hover:border-b-4 border-gray-400 px-4 py-3">1,280</td>
        </tr>
      </tbody>
      </table> */}
    </div>

    {/* 使う方 */}
    <table className="table-auto w-full mx-0 my-8 text-left bg-white ">
      <thead>
        <tr
          className={
            "bg-white hover: border-b hover:border-b-4 duration-300 " +
            styles.testtt
          }
        >
          <th className=" px-4  border-gray-400 py-3">時間 </th>
          <th className=" px-4  border-gray-400 py-3">題目</th>
        </tr>
      </thead>
      <tbody>
        <tr
          className={
            "bg-gray-100 hover: border-b hover:border-b-4  border-gray-400  duration-300 " +
            styles.testtt
          }
        >
          <td className="  px-4 py-3" valign="bottom">
            {/* 13:00〜13:02 */}
            13:00〜
          </td>
          <td className="  px-4 py-3" valign="bottom">
            オープニング
          </td>
        </tr>

        <tr
          className={
            "bg-white hover: border-b hover:border-b-4  border-gray-400  duration-300 " +
            styles.testtt
          }
        >
          <td className="  px-4 py-3" valign="bottom">
            {/* 13:07〜13:27 */}
            13:07〜
          </td>
          <td className="  px-4 py-3" valign="bottom">
            バンド①
          </td>
        </tr>

        <tr
          className={
            "bg-gray-100  border-b hover:border-b-4  border-gray-400  duration-300 " +
            styles.testtt
          }
        >
          <td className="  px-4 py-3" valign="bottom">
            {/* 13:32〜13:52 */}
            13:32〜
          </td>
          <td className="  px-4 py-3" valign="bottom">
            バンド②
          </td>
        </tr>

        <tr
          className={
            "bg-white hover: border-b hover:border-b-4  border-gray-400  duration-300 " +
            styles.testtt
          }
        >
          <td className="  px-4 py-3" valign="bottom">
            {/* 14:02〜14:12 */}
            14:02〜
          </td>
          <td className="  px-4 py-3" valign="bottom">
            ダンス
          </td>
        </tr>

        <tr
          className={
            "bg-gray-100 hover: border-b hover:border-b-4  border-gray-400  duration-300 " +
            styles.testtt
          }
        >
          <td className="  px-4 py-3" valign="bottom">
            {/* 14:17〜14:47 */}
            14:17〜
          </td>
          <td className="  px-4 py-3" valign="bottom">
            ミス・ミスターコンテスト
          </td>
        </tr>

        <tr
          className={
            "bg-white hover: border-b hover:border-b-4  border-gray-400  duration-300 " +
            styles.testtt
          }
        >
          <td className="  px-4 py-3" valign="bottom">
            {/* 14:52〜15:17 */}
            14:52〜
          </td>
          <td className="  px-4 py-3" valign="bottom">
            スプラトゥーン決勝戦
          </td>
        </tr>

        <tr
          className={
            "bg-gray-100 hover: border-b hover:border-b-4  border-gray-400  duration-300 " +
            styles.testtt
          }
        >
          <td className="  px-4 py-3" valign="bottom">
            {/* 14:22〜15:37 */}
            14:22〜
          </td>
          <td className="  px-4 py-3" valign="bottom">
            のど自慢
          </td>
        </tr>

        <tr
          className={
            "bg-white hover: border-b hover:border-b-4  border-gray-400  duration-300 " +
            styles.testtt
          }
        >
          <td className="  px-4 py-3" valign="bottom">
            {/* 15:42〜15:44 */}
            15:42〜
          </td>
          <td className="  px-4 py-3" valign="bottom">
            エンディング
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ListItem;
