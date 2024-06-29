import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Uitily/SubTitle";
import BrandCard from "../Brands/BrandCard";
import baseUrl from "../../Api/baseURL";
import BrandContainer from "../Brands/BrandContainer";

const HomeBrand = ({ numOfBrand, pathTxt }) => {
  const [brand, setBrand] = useState([]);

  const getBrandData = async () => {
    const res = await baseUrl.get("brand");

    setBrand(res.data);
    console.log(brand);
  };

  useEffect(() => {
    getBrandData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <div className="home-container" style={{ alignItems: "center" }}>
        <SubTitle
          title={"Top Brands"}
          btnTxt={"See all Brands"}
          pathTxt={"/brand"}
        />
        <BrandContainer numOfBrand={5} />
      </div>
    </Container>
  );
};

export default HomeBrand;
