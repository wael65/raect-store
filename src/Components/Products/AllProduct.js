import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Uitily/SubTitle";
import baseUrl from "../../Api/baseURL";

const AllProduct = ({ title, btnTxt, pathTxt }) => {
  const [prod, setProd] = useState([]);

  const getProdData = async () => {
    const res = await baseUrl.get("product");

    setProd(res.data);
    console.log(prod);
  };

  useEffect(() => {
    getProdData();
  }, []);
  return (
    <Container>
      <div
        className="home-container "
        // style={{ borderStyle: "solid", borderColor: "red", borderWidth: "5px" }}
      >
        <SubTitle
          title={"All Product"}
          // btnTxt={"See more deals"}
          pathTxt={pathTxt}
        />
        <Row className="my-2 d-flex justify-content-start ">
          {prod
            ? prod.map((item, index) => {
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

export default AllProduct;
