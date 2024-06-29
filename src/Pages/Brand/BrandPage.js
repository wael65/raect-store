import React from "react";
import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import NavBar from "../../Components/Home/NavBar";
import SubTitle from "../../Components/Uitily/SubTitle";
import BrandContainer from "../../Components/Brands/BrandContainer";

const BrandPage = ({ numOfBrand }) => {
  return (
    <div className="home d-flex flex-column align-content-start">
      <NavBar />

      <Container>
        <div
          className="home-container "
          style={{
            alignItems: "center",
            flexWrap: "wrap",
            overflow: "auto",
            minHeight: "670px",
          }}
        >
          <SubTitle title={"All Brands"} pathTxt={"/"} />
          <BrandContainer />
        </div>
      </Container>
    </div>
  );
};

export default BrandPage;
