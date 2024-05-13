import React from "react";
import { Card, Col } from "react-bootstrap";

import { NavLink } from "react-router-dom";

import { AdvancedImage } from "@cloudinary/react";

const BrandCard = ({ img }) => {
  return (
    <Col
      className="mx-5 my-3 d-flex justify-content-center "
      style={{
        width: "100%",
        height: "auto",
        border: "none",
        marginTop: "1em",
      }}
    >
      <NavLink
        to="/brands/:id"
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <div className="allCard d-flex justify-content-center">
          {/* <Card.Img className="brand-card-img" src={img} /> */}
          <AdvancedImage className="brand-card-img" cldImg={img} />
        </div>
      </NavLink>
    </Col>
  );
};

export default BrandCard;
