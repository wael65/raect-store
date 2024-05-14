import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import SubTitle from "../Uitily/SubTitle";
import baseUrl from "../../Api/baseURL";

const HomeProduct = ({ title, btnTxt, pathTxt }) => {
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
          title={"Shop Today's Deals"}
          btnTxt={"See more deals"}
          pathTxt={pathTxt}
        />
        <Row className="my-2 d-flex justify-content-start ">
          {prod
            ? prod.slice(0, 4).map((item, index) => {
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

export default HomeProduct;
