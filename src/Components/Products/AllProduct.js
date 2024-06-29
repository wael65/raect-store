import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Uitily/SubTitle";
import baseUrl from "../../Api/baseURL";
import next from "../../images/next.png";
import previous from "../../images/previous.png";

const AllProduct = ({ title, btnTxt, pathTxt }) => {
  const [prod, setProd] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProdData = async (page) => {
    const res = await baseUrl.get(`product?page=${page}&limit=8`);

    const { product, totalPages } = res.data;
    setProd(product);
    setTotalPages(totalPages);

    console.log(totalPages);
    console.log(prod);
  };

  useEffect(() => {
    getProdData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getProdData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <div className="home-container ">
        {/* <SubTitle title={"All Product"} pathTxt={pathTxt} /> */}
        <Row className="my-2 d-flex justify-content-start ">
          {prod
            ? prod.map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    title={item.name}
                    img={item.avatar}
                    description={item.description}
                    price={item.price}
                  />
                );
              })
            : null}
        </Row>
        <div className="my-2 d-flex justify-content-center ">
          <span>
            <img
              className="next-img"
              onClick={handlePrevPage}
              src={previous}
              disabled={currentPage === 1}
              alt="previous"
            />{" "}
          </span>
          <span>
            {" "}
            <img
              className="next-img"
              onClick={handleNextPage}
              src={next}
              disabled={currentPage === 1}
              alt="next"
            />
          </span>
        </div>
      </div>
    </Container>
  );
};

export default AllProduct;
