import React from "react";

import styles from "./style/header.module.sass";
// import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
export default function header() {
  return (
    <>
      {/* <nav className="flex items-center fixed w-screen	 flex-row bg-blue-600 p-2 "> */}
      <nav
        style={{}}
        className={
          styles.header_background +
          " flex items-center fixed w-screen flex-row  p-2 bg-gray-900 bg-opacity-95"
        }
      >
        <div className="text-white  rounded-lg  cursor-pointer duration-300 hover:text-white text-center text-sm md:text-xl px-2  py-0 m-1">
          <Link href="/">
            <p className="font-medium">横浜CPキャンフェス</p>
          </Link>
        </div>
        <div className="text-gray-400  rounded-lg cursor-pointer duration-300 hover:text-white text-center text-sm md:text-lg px-2  py-0 m-1">
          <Link href="/live">
            <p>live</p>
          </Link>
        </div>
        <div className="text-gray-400  rounded-lg cursor-pointer duration-300 hover:text-white text-center text-sm md:text-lg px-2  py-0 m-1">
          <Link href="/postdatas">
            <p>postdatas</p>
          </Link>
        </div>
      </nav>

      <div className={styles.header_margin + " h-64 w-screen"}></div>
    </>
  );
}
