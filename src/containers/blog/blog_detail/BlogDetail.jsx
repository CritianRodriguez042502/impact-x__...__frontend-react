import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosBlogDetail } from "../../../redux/index";
import { Layout } from "../../../components/index";

export function BlogDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const infoBlogDetail = useSelector((state) => state.blogDetail);

  useEffect(function () {
    dispatch(axiosBlogDetail(params.slug));
  }, [params.slug]);

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Blog / name </title>
      </Helmet>

      <Layout>
        <h1> BlogDetail </h1>

        {infoBlogDetail.status === "fulfilled" ? (
          infoBlogDetail.info?.map((data) => {
            return (
              <div key={data.id}>
                <h1> {data.title} </h1>
                <p> {data.description} </p>
                <hr />
                <p> {data.creatio} </p>
                <p> {data.update} </p>
              </div>
            );
          })
        ) : infoBlogDetail.status === "pending" ? (
          <h1> Cargando...</h1>
        ) : infoBlogDetail.status === "rejected" ? (
          <h1> Este blog no existe</h1>
        ) : (
          false
        )}
      </Layout>
    </main>
  );
}
