import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import {
  axiosJWTVerify,
  axiosBlogsByUser,
  axiosDeleteBlogUser,
} from "../../../redux/index";

export function BlogsUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infoJWTVerifi = useSelector((state) => state.JWTVerify);
  const infoBlogsByUser = useSelector((state) => state.blogsByUser);
  const infoCreateBlog = useSelector((state) => state.createBlogUser);
  const infoUpdateBlogUser = useSelector((state) => state.updateBlogUser);
  const infoDeleteBlogUser = useSelector((state) => state.deleteBlogUser);

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
      location.href = "http://localhost:5173/access/signin";
    }
  }, [infoJWTVerifi.status]);

  // States of create, update and delete blog
  useEffect(() => {
    if (
      infoCreateBlog.status === "fulfilled" ||
      infoUpdateBlogUser.status === "fulfilled" ||
      infoDeleteBlogUser.status === "fulfilled"
    ) {
      dispatch(axiosBlogsByUser(access));
    }
  }, [
    infoDeleteBlogUser.status,
    infoCreateBlog.status,
    infoUpdateBlogUser.status,
  ]);

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Dashboard </title>
      </Helmet>

      <section>
        <h1> Blogs del usuario registrado </h1>
        <Link to={"/dashboard"}> Initial </Link>
        <Link to={"/dashboard/create_blog"}> Crear </Link>

        {infoBlogsByUser.status === "pending" ? (
          <h1> Cargando... </h1>
        ) : infoBlogsByUser.status === "fulfilled" ? (
          infoBlogsByUser.info.results?.map((data) => {
            return (
              <div key={data.id}>
                <Link to={`/dashboard/blog_user_detail/${data.slug}`}>
                  <h1> {data.title} </h1>
                  <p> {data.description} </p>
                  <hr />
                  <p> {data.creation} </p>
                </Link>

                <button
                  onClick={() => {
                    const info = {
                      jwt: access,
                      slug: `${data.slug}`,
                    };
                    dispatch(axiosDeleteBlogUser(info));
                  }}
                >
                  Eliminar
                </button>
              </div>
            );
          })
        ) : infoBlogsByUser.status === "rejected" ? (
          <h1> No hay blogs disponibles </h1>
        ) : (
          false
        )}
      </section>
    </main>
  );
}
