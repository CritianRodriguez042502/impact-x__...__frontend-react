import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosJWTVerify, axiosBlogsByUser } from "../../../redux/index";

export function BlogsUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoJWTVerifi = useSelector((state) => state.JWTVerify);
  const infoBlogsByUser = useSelector((state) => state.blogsByUser);
  const access = JSON.parse(localStorage.getItem("access"));

  useEffect(() => {
    if (!access) {
      location.href = "http://localhost:5173/access/signin";
    }

    if (!infoJWTVerifi.status) {
      dispatch(axiosJWTVerify({ token: access }));
    }

    if (
      access &&
      infoJWTVerifi.status === "fulfilled" &&
      !infoBlogsByUser.info
    ) {
      dispatch(axiosBlogsByUser(access));
    }

    if (infoJWTVerifi.status === "rejected") {
      location.href = "http://localhost:5173/access/signin"
    }
  }, [infoJWTVerifi.status]);

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Dashboard </title>
      </Helmet>

      <div>
        <h1> Blogs del usuario registrado </h1>
        <Link to={"/dashboard"}> Initial </Link>

        {infoBlogsByUser.status === "pending" ? (
          <h1> Cargando... </h1>
        ) : infoBlogsByUser.status === "fulfilled" ? (
          infoBlogsByUser.info.results?.map((data) => {
            return (
              <Link
                to={`/dashboard/blog_user_detail/${data.slug}`}
                key={data.id}
              >
                <h1> {data.title} </h1>
                <p> {data.description} </p>
                <hr />
                <p> {data.creation} </p>
              </Link>
            );
          })
        ) : infoBlogsByUser.status === "rejected" ? (
          <h1> Error </h1>
        ) : (
          false
        )}
      </div>
    </main>
  );
}
