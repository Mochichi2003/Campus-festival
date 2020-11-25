import React from "react";
import Image from "next/image";
import styles from "./style/header.module.sass";
// import { Navbar, Nav } from "react-bootstrap";

import Link from "next/link";
type Props = {
  HasHeaderMargin?: boolean;
  iswebPresentation?: boolean;
};
export default function header({ HasHeaderMargin, iswebPresentation }: Props) {
  return (
    <>
      <div className="fixed top-0 left-0 z-50">
        {/* <nav className="flex items-center fixed w-screen	 flex-row bg-blue-600 p-2 "> */}
        <nav
          style={{}}
          className={
            styles.header_background +
            " flex items-center   flex-row w-screen p-2  bg-opacity-90 "
          }
        >
          {/* <Link href="/"></Link> */}
          <Link href="/">
            <div className="flex items-center   flex-row       text-white  rounded-lg  cursor-pointer duration-300 hover:text-white text-center  text-xl px-2  py-0 m-0">
              <Image
                src="/icon/yokohama2/android-chrome-512x512.png"
                height={54}
                width={54}
                className="inline-block h-16"
                alt=""
              />
              <svg
                className="fill-current sss:hidden text-white"
                // style={
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <p className="font-bold text-3xl hidden sss:block p-1 ">
                横浜キャンフェス
              </p>
            </div>
          </Link>
          {/* <div className="text-gray-400  rounded-lg cursor-pointer duration-300 hover:text-white text-center  text-lg px-2  py-0 m-1">
            <Link href="/live">
              <p>live</p>
            </Link>
          </div> */}
          <div
            className={
              "  rounded-lg cursor-pointer duration-300  text-center   text-lg px-2  py-0  m-1" +
              (() => {
                if (iswebPresentation) {
                  return " text-white";
                } else {
                  return " text-gray-400 hover:text-white";
                }
              })()
            }
          >
            <Link href="/post">
              <a className="">
                <span className="flex items-center text-2xl  font-semibold flex-row fill-current ">
                  展示
                </span>
              </a>
            </Link>
          </div>
        </nav>

        {/* <div className={styles.header_margin + " h-64 w-screen"}></div> */}
      </div>
      {(() => {
        if (HasHeaderMargin === true) {
          // return <span>Good morning</span>;
          return <div className={" h-header w-screen duration-300"}></div>;
        } else {
          return <></>;
        }
      })()}
    </>
  );
}
