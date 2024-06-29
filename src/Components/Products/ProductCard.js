import React from "react";
import { Card, Col } from "react-bootstrap";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";

const ProductCard = ({ title, img, description, price }) => {
  return (
    <>
      <Col xs="2" sm="2" className="d-md-none d-lg-none"></Col>
      <Col xs="8" sm="8" md="4" lg="3" className=" d-flex ">
        <Card
          className="my-2 "
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#f6f6f6",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
          }}
        >
          <Link to="/product/:id" style={{ textDecoration: "none" }}>
            <Card.Img style={{ height: "228px", width: "100%" }} src={img} />
          </Link>
          <div className="d-flex justify-content-start mx-3 ">
            <img
              src={favoff}
              alt=""
              className="text-center"
              style={{
                height: "24px",
                width: "26px",
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>
              <div className="card-title">{title}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between ">
                <div className="d-flex">
                  <div className="card-price">{price}</div>
                  <div className="card-currency mx-1">جنيه</div>
                </div>
                <div className="d-flex">
                  <img
                    className=""
                    src={rate}
                    alt=""
                    height="16px"
                    width="16px"
                  />
                  <div className="card-rate mx-2">4.5</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="2" sm="2" className="d-md-none d-lg-none"></Col>
    </>
  );
};

export default ProductCard;
