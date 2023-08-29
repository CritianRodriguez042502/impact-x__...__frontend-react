import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosBlogTypeCategory } from "../../../redux/index";
import { Layout } from "../../../components/index";

export function Categorys() {
//  const dispatch = useDispatch();
//  dispatch(axiosBlogTypeCategory())
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Blogs / categorya </title>
      </Helmet>

      <Layout>
        <h1> Blog / category </h1>
      </Layout>
    </main>
  );
}
