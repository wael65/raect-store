import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

// import baseUrl from "../../Api/baseURL";

import storeLogo from "../../images/white-store-logo.png";
import { RegisterHook } from "../../hooks/Auth/AuthHook";

function AuthPage() {
  const [
    regName,
    regEmail,
    regPassword,
    handleRegName,
    handleRegEmail,
    handleRegPassword,
    submitRegister,
  ] = RegisterHook();

  // const [regName, setRegName] = useState("");
  // const [regEmail, setRegEmail] = useState("");
  // const [regPassword, setRegPassword] = useState("");

  // const handleRegName = (e) => {
  //   setRegName(e.target.value);
  //   console.log(e.target.value);
  // };
  // const handleRegEmail = (e) => {
  //   setRegEmail(e.target.value);
  //   console.log(e.target.value);
  // };
  // const handleRegPassword = (e) => {
  //   setRegPassword(e.target.value);
  //   console.log(e.target.value);
  // };

  // const submitRegister = async (e) => {
  //   e.preventDefault();

  //   baseUrl
  //     .post("auth/register", {
  //       name: regName,
  //       email: regEmail,
  //       password: regPassword,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  // };

  let [authMode, setAuthMode] = useState("signup");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container flex d-flex flex-column">
        <div className="auth-brand">
          <a href="/">
            <img
              className="dicount-img"
              src={storeLogo}
              width="210"
              height="60"
              alt="disc"
            />
          </a>
        </div>
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="redirect link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                // value={email}
                // onChange={handleEmail}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container flex d-flex flex-column">
      <div className="auth-brand">
        <a href="/">
          <img
            className="dicount-img"
            src={storeLogo}
            width="210"
            height="60"
            alt="disc"
          />
        </a>
      </div>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="redirect link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              value={regName}
              onChange={handleRegName}
              type="text"
              className="form-control mt-1"
              placeholder="e.g Mo Salah"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              value={regEmail}
              onChange={handleRegEmail}
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              value={regPassword}
              onChange={handleRegPassword}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              onClick={submitRegister}
              className="btn btn-dark"
            >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AuthPage;
