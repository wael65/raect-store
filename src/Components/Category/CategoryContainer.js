import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import CategoryContainerHook from "../../hooks/category/CategoryContainerHook";

const CategoryContainer = ({ numOfCat }) => {
  const [allCategory] = CategoryContainerHook();

  return (
    <Container>
      <div
        className="home-container "
        style={{ alignItems: "center", flexWrap: "wrap", overflow: "auto" }}
      >
        <Row className="my-3 d-flex justify-content-between">
          {allCategory
            ? allCategory.slice(0, numOfCat).map((item, index) => {
                return (
                  <CategoryCard
                    key={index}
                    title={item.name}
                    img={item.avatar}
                  />
                );
              })
            : null}
        </Row>
      </div>
    </Container>
  );
};

export default CategoryContainer;
