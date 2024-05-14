import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Uitily/SubTitle";
import BrandCard from "../Brands/BrandCard";
import baseUrl from "../../Api/baseURL";

const HomeBrand = ({ pathTxt }) => {
  const [brand, setBrand] = useState([]);

  const getBrandData = async () => {
    const res = await baseUrl.get("brand");

    setBrand(res.data);
    console.log(brand);
  };

  useEffect(() => {
    getBrandData();
  }, []);
  return (
    <Container>
      <div className="home-container" style={{ alignItems: "center" }}>
        <SubTitle
          title={"Top Brands"}
          btnTxt={"See all Brands"}
          pathTxt={pathTxt}
        />
        <Row className="my-2 d-flex justify-content-between">
          {brand
            ? brand.slice(0, 5).map((item, index) => {
                return <BrandCard key={index} img={item.avatar} />;
              })
            : null}
        </Row>
      </div>
    </Container>
  );
};

export default HomeBrand;
