import React from "react";
// import styles from "./style/timetable.module.scss";
// import Link from "next/link";

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
          <th className=" px-4  border-gray-400 py-3">時間</th>
          <th className=" px-4  border-gray-400 py-3">内容</th>
          <th className=" px-4 py-3">出演者</th>
        </tr>
      </thead>
      <tbody>
        <tr className={"bg-gray-200  duration-300 " + styles.testtt}>
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
        <tr className={"bg-gray-200  duration-300 " + styles.testtt}>
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
    <div className="text-center my-4">
      <img
        src="/timetable/タイムテーブル3.jpg"
        alt="タイムテーブル"
        className="max-h-85vh border m-auto"
      />
    </div>
  </div>
);

export default ListItem;
