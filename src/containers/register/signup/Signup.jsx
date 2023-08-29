import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosCreateUser, axiosResendEmail } from "../../../redux/index";
import { Layout } from "../../../components/index";

export function Signup() {
  //  const dispathc = useDispatch()
  //  dispathc(axiosCreateUser())
  //  dispathc(axiosResendEmail())

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Registrarse </title>
      </Helmet>

      <Layout>
        <h1> Signup </h1>
      </Layout>
    </main>
  );
}
