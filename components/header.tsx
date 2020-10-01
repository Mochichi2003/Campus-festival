import React from "react";

import styles from "./style/header.module.sass";
import { Navbar, Nav } from "react-bootstrap";

export default function header() {
  return (
    <>
      <Navbar fixed="top" className={styles.header_background} variant="dark">
        <Navbar.Brand className={styles.header_Nav_text} href="/">
          Navbar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/live">LivePage</Nav.Link>
            <Nav.Link href="/postdatas">postdatas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={styles.header_margin}></div>
    </>
  );
}
