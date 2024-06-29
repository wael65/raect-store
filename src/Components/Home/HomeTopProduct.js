import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import SubTitle from "../Uitily/SubTitle";
import baseUrl from "../../Api/baseURL";

const HomeTopProduct = ({ title, btnTxt, pathTxt }) => {
  const [prod, setProd] = useState([]);

  const getProdData = async () => {
    const res = await baseUrl.get(`product?page=1&limit=4`);

    setProd(res.data.product);
    console.log(prod);
  };

  useEffect(() => {
    getProdData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <div className="home-container">
        <SubTitle
          title={"Top selling products"}
          btnTxt={"See more Products"}
          pathTxt={"/product"}
        />
        <Row className="my-3 d-flex justify-content-start">
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

export default HomeTopProduct;
