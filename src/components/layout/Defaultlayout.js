import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import "./defaultlayout.style.css";

const Defaultlayout = ({ children }) => {
  return (
    <div>
      <Row>
        <Col xs={4}>
          <div className="left-bar"> I am from the left menu</div>
        </Col>
        <Col xs={8}>
          <div className="main">
            <Header />
            {children}
            <Footer />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Defaultlayout;
