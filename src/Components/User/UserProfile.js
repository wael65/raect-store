import React from "react";
import { Row, Col } from "react-bootstrap";
import deleteicon from "../../images/delete.png";
import update from "../../images/changes.png";

const UserProfile = () => {
  const dataUser = localStorage.getItem("user");
  const userName = JSON.parse(dataUser)["name"];
  const userEamil = JSON.parse(dataUser)["email"];

  return (
    <div className="admin-profile">
      <div className="admin-content-title">Your Profile</div>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">Name :</div>
            <div className="p-1 item-delete-edit">{userName}</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div className="d-flex mx-2">
              <img
                alt=""
                className="ms-1 mt-2"
                src={update}
                height="22"
                width="22"
              />
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="22"
                width="22"
              />
              {/* <p className="item-delete-edit"> Update </p> */}
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">email :</div>
            <div className="p-1 item-delete-edit">{userEamil}</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="mt-4">
            <div className="admin-content-title2">Change Password</div>
            <input
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="Old Password"
            />
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="New Password"
            />
          </Col>
        </Row>
        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 ">submite</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserProfile;
