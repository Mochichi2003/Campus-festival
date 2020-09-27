import Link from "next/link";
import Layout from "../components/Layout";

import React from "react";

const IndexPage = () => (
  <Layout
    title="Home | Next.js + TypeScript Example"
    // NotShowHederAndFooter="true"
  >
    <h1>HEY 👋</h1>

    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
