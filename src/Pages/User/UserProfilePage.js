import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserProfile from "../../Components/User/UserProfile";
import UserSideBar from "../../Components/User/UserSideBar";
import NavBar from "../../Components/Home/NavBar";

const UserProfilePage = () => {
  return (
    <>
      <NavBar />

      <Container>
        <Row className="py-3">
          <Col sm="3" xs="3" md="3">
            <UserSideBar />
          </Col>

          <Col sm="9" xs="9" md="19">
            <UserProfile />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfilePage;
