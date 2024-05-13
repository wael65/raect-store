import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Uitily/SubTitle";
import BrandCard from "../Brands/BrandCard";
import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "de3y9ajne",
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'cld-sample-5'.
const brandImg1 = cld.image("store/brand1_dcjn3b");
const brandImg2 = cld.image("store/brand2_vokiko");
const brandImg3 = cld.image("store/brand3_tgpqoa");

const HomeBrand = ({ pathTxt }) => {
  return (
    <Container>
      <div className="home-container" style={{ alignItems: "center" }}>
        <SubTitle
          title={"Top Brands"}
          btnTxt={"See all Brands"}
          pathTxt={pathTxt}
        />
        <Row className="my-2 d-flex justify-content-between">
          <BrandCard img={brandImg1} />
          <BrandCard img={brandImg2} />
          <BrandCard img={brandImg3} />
          <BrandCard img={brandImg1} />
          <BrandCard img={brandImg2} />
          <BrandCard img={brandImg3} />
        </Row>
      </div>
    </Container>
  );
};

export default HomeBrand;
