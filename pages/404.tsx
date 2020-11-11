import React from "react";
import Layout from "../components/Layout";
// import Image from "next/image";

export default function Custom404() {
  return (
    <Layout HasHeaderMargin={true}>
      {/* <Image
        src="/404Page/michael-sum-LEpfefQf4rU-unsplash.jpg"
        height={665.4}
        width={998}
        className="w-full "
      ></Image> */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-inter">404 - Page Not Found</h1>
      </div>
    </Layout>
  );
}
