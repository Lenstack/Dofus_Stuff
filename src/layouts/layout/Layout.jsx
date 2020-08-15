import React from "react";
import "./Layout.scss";

import Container from "../../components/container/Container";
import Blur from "../../components/blur/Blur";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <Container styles="theme_dark">
      <Blur>
        <main>{children}</main>
        <footer>
          <Navbar>
            <Link className="navbar_item" to="/about">
              About
            </Link>
            <Link className="navbar_item" to="/report">
              Report Bug
            </Link>
          </Navbar>
        </footer>
      </Blur>
    </Container>
  );
}
