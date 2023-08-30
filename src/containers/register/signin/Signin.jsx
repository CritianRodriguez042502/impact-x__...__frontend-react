import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import {
  axiosJWTCreate,
  axiosJWTRefresh,
  axiosJWTVerify,
  axiosResetPassword,
} from "../../../redux/index";
import { Layout } from "../../../components/index";

export function Signin() {
//    const dispatch = useDispatch()
  //  dispatch(axiosJWTCreate())
  //  dispatch(axiosJWTRefresh())
  //  dispatch(axiosJWTVerify())
//    dispatch(axiosResetPassword())

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Iniciar sesion </title>
      </Helmet>

      <Layout>
        <h1> Signin </h1>
      </Layout>
    </main>
  );
}
