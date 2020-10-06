import React from "react";

import styles from "./style/header.module.sass";
// import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
export default function header() {
  return (
    <>
      {/* <nav className="flex items-center fixed w-screen	 flex-row bg-blue-600 p-2 "> */}
      <nav
        className={
          styles.header_background +
          " flex items-center fixed w-screen flex-row  p-2"
        }>
        <div className="text-white hover:bg-gray-900 rounded-lg  cursor-pointer duration-300 hover:text-white text-center text-2xl px-3 py-0 m-1">
          <Link href="/">
            <p className="font-medium">横浜CPキャンフェス</p>
          </Link>
        </div>
        <div className="text-gray-400 hover:bg-gray-900 rounded-lg cursor-pointer duration-100 hover:text-white text-center text-xl px-3 py-0 m-1">
          <Link href="/live">
            <p>live</p>
          </Link>
        </div>
        <div className="text-gray-400 hover:bg-gray-900 rounded-lg cursor-pointer duration-100 hover:text-white text-center text-xl px-3 py-0 m-1">
          <Link href="/postdatas">
            <p>postdatas</p>
          </Link>
        </div>
      </nav>

      <div className={styles.header_margin}>.</div>
    </>
  );
}
