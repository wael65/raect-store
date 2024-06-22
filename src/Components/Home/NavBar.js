import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  Form,
  Nav,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "de3y9ajne",
  },
});

const login = cld.image("store/login_frkqfd");
const cart = cld.image("store/cart_mmueen");
const storeLogo = cld.image("store/white-store-logo_vx1u6x.png");

const NavBar = () => {
  const dataUser = localStorage.getItem("user");
  let logName;
  if (dataUser) {
    logName = JSON.parse(dataUser)["name"];
    console.log(logName);
    console.log(dataUser);
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="mx-3">
          <a href="/">
            <AdvancedImage
              className="dicount-img"
              cldImg={storeLogo}
              width="170"
              height="50"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarscroll" />
        <Navbar.Collapse id="navbarscroll">
          <Form
            className=" serch-form d-flex form-control bg-transparent border-0"
            navbarscroll="true"
          >
            <Form.Control
              type="search"
              placeholder="Search..."
              className="text-center"
              aria-label="Search"
            />

            <Button
              variant="outline-light"
              className=" d-flex justify-content-center "
              style={{ marginLeft: "0.5em" }}
            >
              Search
            </Button>
          </Form>

          <Nav
            className="d-flex flex-row justify-content-center "
            style={{
              maxHeight: "100px",
              marginRight: "1em",
              marginLeft: "1.5em",
            }}
            navbarScroll
          >
            {logName ? (
              <div className="d-flex align-items-center">
                {/* <AdvancedImage className="login-img" cldImg={login} /> */}
                <NavDropdown
                  // title={logName}
                  id="nav-dropdown"
                  drop="down"
                  menuVariant="dark"
                  className=" d-flex mt-3 justify-content-center"
                  style={{
                    color: "white",
                    // paddingLeft: "0.7em",
                    paddingRi: "0",
                    fontSize: "1.2em",
                    fontWeight: "normal",
                  }}
                >
                  <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
                </NavDropdown>
                <p
                  style={{
                    color: "white",
                    paddingRight: "1em",
                    // paddingLeft: "0.4em",
                    paddingLeft: "0",
                    fontSize: "1.2em",
                    fontWeight: "normal",
                    marginBottom: 0,
                  }}
                >
                  {logName}
                </p>
              </div>
            ) : (
              <Nav.Link
                href="/auth"
                className="nav-text d-flex mt-3 justify-content-center"
                style={{
                  marginLeft: "0em",
                }}
              >
                <AdvancedImage className="login-img" cldImg={login} />

                {/* <img src={login} className="login-img" alt="sfvs" /> */}

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
            )}

            <Nav.Link
              href="/"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{
                color: "white",
                marginLeft: "0.5em",
                // marginRight: "2em",
              }}
            >
              {/* <img src={cart} className="login-img" alt="sfvs" /> */}
              <AdvancedImage className="login-img" cldImg={cart} />
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
  );
};

export default NavBar;
