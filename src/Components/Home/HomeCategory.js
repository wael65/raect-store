import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import SubTitle from "../Uitily/SubTitle";

import baseUrl from "../../Api/baseURL";

const HomeCategory = ({ title, btnTxt, pathTxt }) => {
  const [cat, setCat] = useState([]);

  const getCatData = async () => {
    const res = await baseUrl.get("category");

    setCat(res.data);
    console.log(cat);
  };

  useEffect(() => {
    getCatData();
  }, []);

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
          {cat
            ? cat.slice(0, 5).map((item, index) => {
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

export default HomeCategory;
