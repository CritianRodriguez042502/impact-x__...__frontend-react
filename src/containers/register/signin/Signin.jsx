import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import {
  axiosJWTCreate,
  axiosJWTRefresh,
  axiosJWTVerify,
  axiosResetPassword,
  axiosAuthGoogle,
  axiosLoginGoogle,
} from "../../../redux/index";
import { Layout } from "../../../components/index";


export function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Auth Google
  const infoUrlGoogle = useSelector((state) => state.authGoogle);
  const searchParams = new URLSearchParams(location.search);
  const state = searchParams.get("state");
  const code = searchParams.get("code");

  useEffect(() => {
    if (infoUrlGoogle.url) {
      location.href = infoUrlGoogle.url;
    }
    
    if (state && code) {
      console.log(state)
      console.log(code)
      dispatch(axiosLoginGoogle(state,code));
    }
  }, [infoUrlGoogle, state, code]);

  
  function clickLogin() {
    dispatch(axiosAuthGoogle());
  }

  //  dispatch(axiosJWTCreate())
  //  dispatch(axiosJWTRefresh())
  //  dispatch(axiosJWTVerify())
  //  dispatch(axiosResetPassword())

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Iniciar sesion </title>
      </Helmet>

      <Layout>
        <h1> Signin </h1>
        <button onClick={clickLogin}> With google </button>
      </Layout>
    </main>
  );
}
