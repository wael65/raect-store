import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div
      className="footer-background footer d-flex align-items-center"
      style={{ maxHeight: "300px", height: "100px" }}
    >
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="d-flex px-0" xs lg="3"></Col>
          <Col
            className="footer-shroot  d-flex justify-content-center px-0"
            xs
            lg="6"
          >
            <span style={{ paddingRight: "0.7em" }}>Conditions of Use</span>
            <span> Privacy Notice</span>
            <span style={{ paddingLeft: "0.7em" }}> Contact Us</span>
          </Col>

          <Col className="d-flex px-0" xs lg="3"></Col>

          <Col className="footer-brand d-flex justify-content-center px-0">
            ©Wael 2024 , All Right Reserved
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
