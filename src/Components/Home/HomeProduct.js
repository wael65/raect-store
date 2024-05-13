import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import SubTitle from "../Uitily/SubTitle";

const HomeProduct = ({ title, btnTxt, pathTxt }) => {
  return (
    <Container>
      <div
        className="home-container "
        // style={{ borderStyle: "solid", borderColor: "red", borderWidth: "5px" }}
      >
        <SubTitle
          title={"Shop Today's Deals"}
          btnTxt={"See more deals"}
          pathTxt={pathTxt}
        />
        <Row className="my-2 d-flex justify-content-start ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </div>
    </Container>
  );
};

export default HomeProduct;
