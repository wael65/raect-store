import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import BrandContainerHook from "../../hooks/Brand/BrandContainerHook";
import BrandCard from "./BrandCard";

const BrandContainer = ({ numOfBrand }) => {
  const [allBrand] = BrandContainerHook();

  return (
    <Container>
      <div
        className="home-container "
        style={{ alignItems: "center", flexWrap: "wrap", overflow: "auto" }}
      >
        <Row className="my-3 d-flex justify-content-between">
          {allBrand
            ? allBrand.slice(0, numOfBrand).map((item, index) => {
                return (
                  <BrandCard key={index} title={item.name} img={item.avatar} />
                );
              })
            : null}
        </Row>
      </div>
    </Container>
  );
};

export default BrandContainer;
