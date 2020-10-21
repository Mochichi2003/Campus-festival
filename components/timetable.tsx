import React from "react";
// import Link from "next/link";

// import { User } from "../interfaces";

// type Props = {
// data: User;
// };

const ListItem = () => (
  <div>
    <h3 className="text-5xl font-bold my-8">タイムテーブル</h3>
    {/* <table className="table-auto w-full mx-0 my-8 text-left">
      <thead>
        <tr>
          <th className=" px-4  border-gray-400 py-3">時間</th>
          <th className=" px-4  border-gray-400 py-3">内容</th>
          <th className=" px-4 py-3">出演者</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100">
          <td className="border-t  border-gray-400 px-4 py-3">10:53 〜 10:55</td>
          <td className="border-t  border-gray-400 px-4 py-3">カラオケ大会</td>
          <td className="border-t border-gray-400 px-4 py-3">
            わああああああああ
          </td>
        </tr>
        <tr>
          <td className="border-t   border-gray-400 px-4 py-3">Adam</td>
          <td className="border-t  border-gray-400 px-4 py-3">
            ナントカカントカ感とか
          </td>
          <td className="border-t border-gray-400 px-4 py-3">112</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border-t  border-gray-400 px-4 py-3">Chris</td>
          <td className="border-t  border-gray-400 px-4 py-3">
            Intro to JavaScript
          </td>
          <td className="border-t border-gray-400 px-4 py-3">1,280</td>
        </tr>
      </tbody>
    </table> */}

    {/* 使う方 */}
    <table className="table-auto w-full mx-0 my-8 text-left">
      <thead>
        <tr>
          <th className=" px-4  border-gray-400 py-3">時間 </th>
          <th className=" px-4  border-gray-400 py-3">題目</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100">
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            {/* 13:00〜13:02 */}
            13:00〜
          </td>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            オープニング
          </td>
        </tr>
        {/* <tr>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            13:02〜13:07
          </td>
          <td
            className="border-t  border-gray-400 px-4 py-3"
            valign="bottom"
          ></td>
        </tr> */}
        <tr>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            {/* 13:07〜13:27 */}
            13:07〜
          </td>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            バンド①
          </td>
        </tr>
        {/* <tr>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            13:27〜13:32
          </td>
          <td
            className="border-t  border-gray-400 px-4 py-3"
            valign="bottom"
          ></td>
        </tr> */}
        <tr className="bg-gray-100">
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            {/* 13:32〜13:52 */}
            13:32〜
          </td>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            バンド②
          </td>
        </tr>
        {/* <tr>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            13:52〜14:02
          </td>
          <td
            className="border-t  border-gray-400 px-4 py-3"
            valign="bottom"
          ></td>
        </tr> */}
        <tr>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            {/* 14:02〜14:12 */}
            14:02〜
          </td>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            ダンス
          </td>
        </tr>
        {/* <tr>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            14:12〜14:17
          </td>
          <td
            className="border-t  border-gray-400 px-4 py-3"
            valign="bottom"
          ></td>
        </tr> */}
        <tr className="bg-gray-100">
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            {/* 14:17〜14:47 */}
            14:17〜
          </td>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            ミス・ミスターコンテスト
          </td>
        </tr>
        {/* <tr>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            14:47〜14:52
          </td>
          <td
            className="border-t  border-gray-400 px-4 py-3"
            valign="bottom"
          ></td>
        </tr> */}
        <tr>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            {/* 14:52〜15:17 */}
            14:52〜
          </td>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            スプラトゥーン決勝戦
          </td>
        </tr>
        {/* <tr>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            14:17〜15:22
          </td>
          <td
            className="border-t  border-gray-400 px-4 py-3"
            valign="bottom"
          ></td>
        </tr> */}
        <tr className="bg-gray-100">
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            {/* 14:22〜15:37 */}
            14:22〜
          </td>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            のど自慢
          </td>
        </tr>
        {/* <tr>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            14:37〜15:42
          </td>
          <td
            className="border-t  border-gray-400 px-4 py-3"
            valign="bottom"
          ></td>
        </tr> */}
        <tr>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            {/* 15:42〜15:44 */}
            15:42〜
          </td>
          <td className="border-t  border-gray-400 px-4 py-3" valign="bottom">
            エンディング
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ListItem;
