import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosSearchBlogs } from "../../../redux/index";
import { Layout } from "../../../components/index";

export function Search() {
//  const dispatch = useDispatch()
//  dispatch(axiosSearchBlogs())

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Busqueda </title>
      </Helmet>

      <Layout>
        <h1> Blogs encontrados </h1>
      </Layout>
    </main>
  );
}
