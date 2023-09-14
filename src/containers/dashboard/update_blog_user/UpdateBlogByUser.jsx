import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import {
  axiosJWTVerify,
  axiosDetailedUserBlog,
  axiosUpdateBlogUser,
} from "../../../redux/index";

export function UpdateBlogByUser() {
  const dispatch = useDispatch();
  const slug = useParams().slug;

  const infoJWTVerifi = useSelector((state) => state.JWTVerify);
  const infoDetailedUserBlog = useSelector((state) => state.detailedUserBlog);
  const infoUpdateBlogUser = useSelector((state) => state.updateBlogUser);
  const access = JSON.parse(localStorage.getItem("access"));

  const [dataUpdateBlog, setDataUpdateBlog] = useState({});

  useEffect(() => {
    dispatch(axiosDetailedUserBlog({ jwt: access, slug: slug }));
  }, []);

  useEffect(() => {
    if (!access) {
      location.href = "http://localhost:5173/access/signin";
    }

    if (!infoJWTVerifi.status) {
      dispatch(axiosJWTVerify({ token: access }));
    }

    if (infoJWTVerifi.status === "rejected") {
      location.href = "http://localhost:5173/access/signin";
    }

    if (infoDetailedUserBlog.status === "fulfilled") {
      setDataUpdateBlog({
        img: infoDetailedUserBlog.info[0].img,
        title: infoDetailedUserBlog.info[0].title,
        description: infoDetailedUserBlog.info[0].description,
        content: infoDetailedUserBlog.info[0].content,
        public: infoDetailedUserBlog.info[0].public,
      });
    }
  }, [infoJWTVerifi.status, infoDetailedUserBlog.status]);

  // Status of update blog
  useEffect(() => {
    if (infoUpdateBlogUser.status === "rejected") {
      alert("Hubo algun error");
    }

    if (infoUpdateBlogUser.status === "fulfilled") {
      location.href = "http://localhost:5173/dashboard/blogs_user";
    }
  }, [infoUpdateBlogUser.status]);

  function onchangeData(e) {
    if (e.target.type === "checkbox") {
      setDataUpdateBlog({
        ...dataUpdateBlog,
        [e.target.name]: e.target.checked,
      });
    } else {
      setDataUpdateBlog({
        ...dataUpdateBlog,
        [e.target.name]: e.target.value,
      });
    }
  }

  function onSubmitUpdateBlog(e) {
    e.preventDefault();

    const data = {
      jwt: access,
      info: dataUpdateBlog,
      slug: infoDetailedUserBlog.info[0].slug,
    };
    if (dataUpdateBlog.title && dataUpdateBlog.description) {
      dispatch(axiosUpdateBlogUser(data));
    }
  }

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Dashboard </title>
      </Helmet>
      <div>
        <h1> ACTUALIZA EL BLOG </h1>
        <form onSubmit={onSubmitUpdateBlog}>
          {Object.keys(dataUpdateBlog).length !== 0 ? (
            <div>
              <input
                type="text"
                name="title"
                value={dataUpdateBlog.title}
                onChange={onchangeData}
                required
              />
              <textarea
                name="description"
                cols="30"
                rows="10"
                value={dataUpdateBlog.description}
                onChange={onchangeData}
                required
              ></textarea>
              <input
                type="checkbox"
                name="public"
                checked={dataUpdateBlog.public}
                onChange={onchangeData}
              />
            </div>
          ) : (
            <h1>cargando...</h1>
          )}
          <button type="submit"> enviar </button>
        </form>
      </div>
    </main>
  );
}
