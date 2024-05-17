import React, { useState, useEffect } from "react";
import { Container, Row, Navbar, Form, Nav } from "react-bootstrap";

import ProductCard from "../../Components/Products/ProductCard";
import baseUrl from "../../Api/baseURL";
import next from "../../images/next.png";
import previous from "../../images/previous.png";

import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import HomeProduct from "../../Components/Home/HomeProduct";
import OfferBanner from "../../Components/Home/OfferBanner";
import AllProduct from "../../Components/Products/AllProduct";
import HomeBrand from "../../Components/Home/HomeBrand";

import storeLogo from "../../images/white-store-logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";

const NavPage = () => {
  const [hide, setHide] = useState("show-sections");
  const [show, setShow] = useState("hide-sections");

  const [searchWord, setSearchWord] = useState("");

  const [prod, setProd] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProdData = async (page, word) => {
    const res = await baseUrl.get(`product?name=${word}&page=${page}&limit=8`);

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
    getProdData(currentPage, searchWord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchWord]);

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

  const handleChange = (e) => {
    setHide("hide-sections");
    setShow("show-sections");
    setSearchWord(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="home d-flex flex-column align-content-start">
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand className="mx-3">
              <a href="/">
                <img
                  className="dicount-img"
                  src={storeLogo}
                  width="170"
                  height="50"
                  alt="disc"
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarscroll" />
            <Navbar.Collapse id="navbarscroll">
              <Form
                className="search-form d-flex form-control bg-transparent border-0 "
                navbarscroll="true"
              >
                <Form.Control
                  value={searchWord}
                  onChange={handleChange}
                  type="search"
                  placeholder="Search..."
                  className="text-center"
                  aria-label="Search"
                />
              </Form>

              <Nav
                className="d-flex flex-row justify-content-center "
                style={{
                  maxHeight: "100px",
                  marginRight: "1em",
                  marginLeft: "1.5em",
                  paddingLeft: "0em",
                }}
                navbarScroll
              >
                <Nav.Link
                  href="/"
                  className="nav-text d-flex mt-3 justify-content-center"
                  style={{
                    marginLeft: "0em",
                  }}
                >
                  <img className="login-img" src={login} alt="sfvs" />

                  <p
                    className="login-txt"
                    style={{
                      color: "white",
                      paddingLeft: "0.4em",
                      fontSize: "1.1em",
                      fontWeight: "normal",
                    }}
                  >
                    login
                  </p>
                </Nav.Link>
                <Nav.Link
                  href="/"
                  className="nav-text d-flex mt-3 justify-content-center"
                  style={{
                    color: "white",
                    marginLeft: "0.5em",
                    // marginRight: "2em",
                  }}
                >
                  <img className="login-img" src={cart} alt="sfvs" />
                  <p
                    style={{
                      color: "white",
                      paddingLeft: "0.2em",
                      fontSize: "1.1em",
                      fontWeight: "normal",
                    }}
                  >
                    cart
                  </p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className={show}>
        <div className="home-container ">
          <div className="subtile-txt">
            All Product{" "}
            <span
              className=" align-content-center search-subtitle "
              onClick={() => {
                window.location.reload();
              }}
            >
              Back to Home Page
            </span>
          </div>

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
      </div>
      <div className={hide}>
        <Slider />
        <HomeCategory />
        <HomeProduct />
        <OfferBanner />
        <AllProduct />
      </div>

      <HomeBrand />
    </div>
  );
};

export default NavPage;
