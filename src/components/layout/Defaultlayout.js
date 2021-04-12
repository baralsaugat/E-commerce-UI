import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import "./defaultlayout.style.css";
import SideBarNav from "../sidebar/SideBarNav";

const Defaultlayout = ({ children }) => {
  return (
    <div className="default-layout">
      <div className="left-bar">
        <div className="admin-log p-2 mb-5">Admin Panel</div>
        <hr className="divider" />
        <SideBarNav />
      </div>

      <div>
        <Header />
        <Jumbotron>{children}</Jumbotron>
        <Footer />
      </div>
    </div>
  );
};

export default Defaultlayout;
