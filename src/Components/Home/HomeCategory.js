import React from "react";
import { Container } from "react-bootstrap";
import SubTitle from "../Uitily/SubTitle";
import CategoryContainer from "../../Components/Category/CategoryContainer";

const HomeCategory = ({ title, btnTxt, pathTxt, numOfCat }) => {
  return (
    <Container>
      <div
        className="home-container "
        style={{ alignItems: "center", flexWrap: "wrap", overflow: "auto" }}
      >
        <SubTitle
          title={"Top Categories"}
          btnTxt={"See all categories"}
          pathTxt={"/category"}
        />
        <CategoryContainer numOfCat={5} />
      </div>
    </Container>
  );
};

export default HomeCategory;
