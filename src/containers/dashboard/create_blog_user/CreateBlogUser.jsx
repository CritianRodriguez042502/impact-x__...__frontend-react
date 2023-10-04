import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { axiosCreateBlogUser, axiosCategorys } from "../../../redux/index";
import { LayoutDashboard } from "../../../components/layout_dashboard/LayoutDashboard";
import style from "./style_create_blog_user.module.css";
import axios from "axios";

export function CreateBlogUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoJWTVerifi = useSelector((state) => state.JWTVerify);
  const infoCategory = useSelector((state) => state.category);

  const access = JSON.parse(localStorage.getItem("access"));

  const [dataCreate, setDataCreate] = useState({});
  const [img, setImg] = useState("");
  const [contentCkeditor, setContentCkeditor] = useState("");
  const [selectCategory, setSelectCategory] = useState("Seleccionar categoria");

  useEffect(() => {
    if (infoJWTVerifi.status === "fulfilled" && !infoCategory.info) {
      dispatch(axiosCategorys());
    }
  }, [infoJWTVerifi.status]);

  function onChangeCreateBlog(e) {
    if (e.target.type === "checkbox") {
      setDataCreate({
        ...dataCreate,
        [e.target.name]: e.target.checked,
      });
    } else {
      setDataCreate({
        ...dataCreate,
        [e.target.name]: e.target.value,
        public: false,
      });
    }
  }

  function onClickSelectCategory(e) {
    setSelectCategory(e.target.value);
  }

  function onChangeUploadImg(e) {
    setImg(e.target.files[0]);
  }

  function onSubmitCreateBlog(e) {
    e.preventDefault();

    function aggregationData() {
      return [dataCreate]?.map((index) => {
        const datos = {
          title: index.title,
          description: index.description,
          public: index.public,
          content: contentCkeditor,
          img: img,
          category: selectCategory,
        };
        return datos;
      });
    }

    const data = {
      jwt: access,
      info: aggregationData()[0],
    };

    if (dataCreate.title && dataCreate.description) {
      if (data.info.category !== "Seleccionar categoria") {
        if (data.info.content) {
          dispatch(axiosCreateBlogUser(data));
          navigate("/dashboard/blogs_user");
        } else {
          alert("Es necesario el apartado de blog");
        }
      } else {
        alert("Debes seleccionar una categoria");
      }
    } else {
      alert("Esta tratando de enviar datos vacios");
    }
  }

  return (
    <main className={style.screenSetting}>
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Crear blog </title>
      </Helmet>

      <LayoutDashboard>
        <section>
          <h1> Crea tu blog </h1>

          {infoJWTVerifi.status === "fulfilled" && access ? (
            <form
              encType="multipart/form-data"
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={onSubmitCreateBlog}
            >
              <input
                type="text"
                name="title"
                id="title"
                onChange={onChangeCreateBlog}
              />

              <input
                type="file"
                name="image"
                id="image"
                onChange={onChangeUploadImg}
                required
              />

              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                onChange={onChangeCreateBlog}
              ></textarea>

              <input
                type="checkbox"
                name="public"
                id="public"
                onChange={onChangeCreateBlog}
              />

              <select onClick={onClickSelectCategory}>
                <option>Seleccionar categoria</option>
                {infoCategory.status === "fulfilled" && infoCategory.info
                  ? infoCategory.info?.map(function (data) {
                      return <option key={data.id}> {data.name} </option>;
                    })
                  : false}
              </select>

              <CKEditor
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContentCkeditor(data);
                }}
              />
              <button type="submit"> Enviar </button>
            </form>
          ) : (
            <h1> Cargando... </h1>
          )}
        </section>
      </LayoutDashboard>
    </main>
  );
}
