import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import ProductCardContinerHook from "../../hooks/product/ProductCardContinerHook";
import SubTitle from "../Uitily/SubTitle";

const ProductSimilarContiner = () => {
  const [similarProducts] = ProductCardContinerHook();
  return (
    <Row className="my-2 d-flex justify-content-start ">
      <SubTitle title={"Similar Products"} />

      {similarProducts
        ? similarProducts.slice(0, 4).map((item, index) => {
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
  );
};

export default ProductSimilarContiner;
