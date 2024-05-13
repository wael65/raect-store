import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import SubTitle from "../Uitily/SubTitle";

import item from "../../images/item.png";

const HomeCategory = ({ title, btnTxt, pathTxt }) => {
  return (
    <Container>
      <div
        className="home-container "
        style={{ alignItems: "center", flexWrap: "wrap", overflow: "auto" }}
      >
        <SubTitle
          title={"Top Categories"}
          btnTxt={"See all categories"}
          pathTxt={pathTxt}
        />
        <Row className="my-3 d-flex justify-content-between ">
          <CategoryCard title="Electronics " img={item} />
          <CategoryCard title=" Kitchin" img={item} />
          <CategoryCard title=" Kids" img={item} />
          <CategoryCard title=" Cosmatics" img={item} />
          <CategoryCard title=" Fashion" img={item} />
        </Row>
      </div>
    </Container>
  );
};

export default HomeCategory;
