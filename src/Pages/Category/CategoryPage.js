import React from "react";
import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import NavBar from "../../Components/Home/NavBar";
import SubTitle from "../../Components/Uitily/SubTitle";

const CategoryPage = ({ numOfCat }) => {
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
          <SubTitle title={"All Categories"} pathTxt={"/"} />
          <CategoryContainer />
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
