import React from "react";

import styles from "./style/header.module.sass";
// import { Navbar, Nav } from "react-bootstrap";

import Link from "next/link";
type Props = {
  HasHeaderMargin?: boolean;
};
export default function header({ HasHeaderMargin }: Props) {
  return (
    <>
      <div className="fixed top-0 left-0 z-50">
        {/* <nav className="flex items-center fixed w-screen	 flex-row bg-blue-600 p-2 "> */}
        <nav
          style={{}}
          className={
            styles.header_background +
            " flex items-center  w-screen flex-row  p-2 bg-gray-900 bg-opacity-95"
          }
        >
          <div className="text-white  rounded-lg  cursor-pointer duration-300 hover:text-white text-center  text-xl px-2  py-0 m-1">
            <Link href="/">
              <p className="font-medium">横浜CPキャンフェス</p>
            </Link>
          </div>
          {/* <div className="text-gray-400  rounded-lg cursor-pointer duration-300 hover:text-white text-center  text-lg px-2  py-0 m-1">
            <Link href="/live">
              <p>live</p>
            </Link>
          </div> */}
          <div className="text-gray-400  rounded-lg cursor-pointer duration-300 hover:text-white text-center  text-lg px-2  py-0 m-1">
            <Link href="/postdatas">
              <p>postdatas</p>
            </Link>
          </div>
        </nav>

        {/* <div className={styles.header_margin + " h-64 w-screen"}></div> */}
      </div>
      {(() => {
        if (HasHeaderMargin === true) {
          // return <span>Good morning</span>;
          return <div className={" h-header w-screen"}></div>;
        } else {
          return <></>;
        }
      })()}
    </>
  );
}
