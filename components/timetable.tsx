import React from "react";
// import Link from "next/link";

// import { User } from "../interfaces";

// type Props = {
//   data: User;
// };

const ListItem = () => (
  <table className="table-auto w-full mx-0 my-8 ">
    <thead>
      <tr>
        <th className="border  px-4 py-2">時間</th>
        <th className="border  px-4 py-2">題目</th>
        <th className="border  px-4 py-2">出演者</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-gray-100">
        <td className="border  px-4 py-2">10:53 ~ 10:55</td>
        <td className="border  px-4 py-2">カラオケ大会</td>
        <td className="border  px-4 py-2">わああああああああ</td>
      </tr>
      <tr>
        <td className="border  px-4 py-2">Adam</td>
        <td className="border  px-4 py-2">ナントカカントカ感とか</td>
        <td className="border  px-4 py-2">112</td>
      </tr>
      <tr className="bg-gray-100">
        <td className="border  px-4 py-2">Chris</td>
        <td className="border  px-4 py-2">Intro to JavaScript</td>
        <td className="border  px-4 py-2">1,280</td>
      </tr>
    </tbody>
  </table>
);

export default ListItem;
