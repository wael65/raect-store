import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotify";

import { createNewUser } from "../../redux/actions/authAction";

export const RegisterHook = () => {
  const [regName, setRegName] = useState("di");
  const [regEmail, setRegEmail] = useState("di@gf.com");
  const [regPassword, setRegPassword] = useState("123456");
  const [regLoading, setRegLoading] = useState(true);

  const dispatch = useDispatch();

  const handleRegName = (e) => {
    setRegName(e.target.value);
    console.log(e.target.value);
  };
  const handleRegEmail = (e) => {
    setRegEmail(e.target.value);
    console.log(e.target.value);
  };
  const handleRegPassword = (e) => {
    setRegPassword(e.target.value);
    console.log(e.target.value);
  };

  // const regValidation = () => {
  //   if (regName === "" || regPassword === "" || regEmail === "") {
  //     notify("Please Fill All Fields", "error");
  //     return;
  //   }
  //   if (regPassword.length <= 5) {
  //     notify("Password Should Be Six Characters at Least", "error");
  //     return;
  //   }
  // };

  const submitRegister = async (e) => {
    e.preventDefault();
    await dispatch(
      createNewUser({
        name: regName,
        email: regEmail,
        password: regPassword,
      })
    );
  };

  const res = useSelector((state) => state.authReducer.createUser);
  console.log(res);

  return [
    regName,
    regEmail,
    regPassword,
    handleRegName,
    handleRegEmail,
    handleRegPassword,
    submitRegister,
  ];
};
