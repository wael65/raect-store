import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Uitily/SubTitle";

const AllProduct = ({ title, btnTxt, pathTxt }) => {
  return (
    <Container
    // style={{ borderStyle: "solid", borderColor: "red", borderWidth: "5px" }}
    >
      <div
        className="home-container "
        // style={{ borderStyle: "solid", borderColor: "red", borderWidth: "5px" }}
      >
        <SubTitle title={"All Producta"} btnTxt={""} pathTxt={pathTxt} />
        <Row
          className="my-2 d-flex justify-content-between "
          // style={{
          //   borderStyle: "solid",
          //   borderColor: "red",
          //   borderWidth: "5px",
          // }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </div>
    </Container>
  );
};

export default AllProduct;
