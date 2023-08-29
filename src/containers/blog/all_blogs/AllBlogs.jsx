import React from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import { axiosCategorys, axiosAllBlogs } from "../../../redux/index";

export function AllBlogs() {
//  const dispatch = useDispatch();
//  dispatch(axiosCategorys())
//  dispatch(axiosAllBlogs())
  
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Blogs </title>
      </Helmet>

      <Layout>
        <h1> All blogs </h1>
      </Layout>
    </main>
  );
}
