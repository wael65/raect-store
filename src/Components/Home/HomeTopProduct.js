import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import SubTitle from "../Uitily/SubTitle";
import ProductCardContinerHook from "../../hooks/product/ProductCardContinerHook";

const HomeTopProduct = ({ title, btnTxt, pathTxt }) => {
  const [topProducts] = ProductCardContinerHook();

  return (
    <Container>
      <div className="home-container">
        <SubTitle
          title={"Top selling products"}
          btnTxt={"See more Products"}
          pathTxt={"/product"}
        />
        <Row className="my-3 d-flex justify-content-start">
          {topProducts
            ? topProducts.slice(0, 4).map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    title={item.name}
                    img={item.avatar}
                    description={item.description}
                    price={item.price}
                  />
                );
              })
            : null}
        </Row>
      </div>
    </Container>
  );
};

export default HomeTopProduct;
