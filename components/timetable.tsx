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
