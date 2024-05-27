import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotify";

import { loginUser } from "../../redux/actions/authAction";

const LoginHook = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(true);

  const dispatch = useDispatch();

  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
    console.log(e.target.value);
  };
  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
    console.log(e.target.value);
  };

  console.log(loginEmail);

  const submitLogin = async (e) => {
    e.preventDefault();
    // setTimeout(() => {}, "5000");
    setLoginLoading(true);
    await dispatch(
      loginUser({
        email: loginEmail,
        password: loginPassword,
      })
    );

    setLoginLoading(false);
  };

  const res = useSelector((state) => state.authReducer.loginUser);

  useEffect(() => {
    if (loginLoading === false) {
      if (res) {
        console.log(res);
        if (res.data.accessToken) {
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("user", JSON.stringify(res.data));

          notify("تم تسجيل الدخول بنجاح", "success");
          loginEmail("");
          loginPassword("");
          //   setTimeout(() => {
          //     window.location.href = "/";
          //   }, 1500);
        }
        //      else {
        //       localStorage.removeItem("token");
        //       localStorage.removeItem("user");
        //     }

        //     if (res.data.message === "Incorrect email or password") {
        //       localStorage.removeItem("token");
        //       localStorage.removeItem("user");
        //       notify("كلمة السر او الايميل خطا", "error");
        //     }
        //     setLoginLoading(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginLoading]);

  return [
    loginEmail,
    loginPassword,
    handleLoginEmail,
    handleLoginPassword,
    submitLogin,
  ];
};

export default LoginHook;
