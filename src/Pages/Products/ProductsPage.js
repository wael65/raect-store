import React from "react";
import { Container } from "react-bootstrap";
import AllProduct from "../../Components/Products/AllProduct";
import NavBar from "../../Components/Home/NavBar";
import SubTitle from "../../Components/Uitily/SubTitle";

const ProductsPage = () => {
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
          <SubTitle title={"All Products"} pathTxt={"/"} />
          <AllProduct />
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
