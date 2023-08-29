import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosBlogDetail } from "../../../redux/index";
import { Layout } from "../../../components/index";

export function BlogDetail() {
  //  const dispatch = useDispatch();
  //  dispatch(axiosBlogDetail())

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Blog / name </title>
      </Helmet>

      <Layout>
        <h1> BlogDetail </h1>
      </Layout>
    </main>
  );
}
