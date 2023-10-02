import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosBlogsByUser, axiosDeleteBlogUser } from "../../../redux/index";
import { LayoutDashboard } from "../../../components/layout_dashboard/LayoutDashboard";
import style from "./style_blogs_user.module.css";

export function BlogsUser() {
  const dispatch = useDispatch();

  const infoBlogsByUser = useSelector((state) => state.blogsByUser);
  const infoCreateBlog = useSelector((state) => state.createBlogUser);
  const infoUpdateBlogUser = useSelector((state) => state.updateBlogUser);
  const infoDeleteBlogUser = useSelector((state) => state.deleteBlogUser);

  const access = JSON.parse(localStorage.getItem("access"));

  const [allVisibility, setAllVisibility] = useState("0");

  // States of create, update and delete blog
  useEffect(() => {
    if (
      infoCreateBlog.status === "fulfilled" ||
      infoUpdateBlogUser.status === "fulfilled" ||
      infoDeleteBlogUser.status === "fulfilled"
    ) {
      dispatch(axiosBlogsByUser(access));
      setAllVisibility("0")
    }
  }, [
    infoDeleteBlogUser.status,
    infoCreateBlog.status,
    infoUpdateBlogUser.status,
  ]);

  setTimeout(function(){
    setAllVisibility("1")
  },350)

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Dashboard </title>
      </Helmet>

      <LayoutDashboard>
        <section className={style.screenSetting}>
          <h1> Blogs del usuario registrado </h1>
          <Link to={"/dashboard"}> Initial </Link>
          <Link to={"/dashboard/create_blog"}> Crear </Link>

          <div style={{opacity : allVisibility}}>
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
                        setAllVisibility("0")
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
          </div>
        </section>
      </LayoutDashboard>
    </main>
  );
}
