import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SidebarDashboard } from "../../../components/common/sidebar/SidebarDashboard";
import style from "./style_create_blog_user.module.css";

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

  // dom with css
  const [publicSelect, setPublicSelect] = useState("PRIVADO");

  useEffect(() => {
    if (infoJWTVerifi.status === "fulfilled" && !infoCategory.info) {
      import("../../../redux/index").then((modules) => {
        dispatch(modules.axiosCategorys());
      });
    }
  }, [infoJWTVerifi.status]);

  function onChangeCreateBlog(e) {
    if (e.target.checked === true) {
      setPublicSelect("PUBLICO");
    } else {
      setPublicSelect("PRIVADO");
    }
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
          import("../../../redux/index").then((modules) => {
            dispatch(modules.axiosCreateBlogUser(data));
          });
          Swal.showLoading();
          setTimeout(() => {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: "Blog creado",
            });
          }, 4000);

          setTimeout(() => {
            navigate("/dashboard/blogs_user");
          },4500)
        } else {
          Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "El contenido del blog no debe estar vacio",
          });
        }
      } else {
        Swal.fire({
          icon: "info",
          title: "Oops...",
          text: "Debes seleccionar una categoria",
        });
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
        <title> IMPACT X | Crear Blog </title>
      </Helmet>

      <SidebarDashboard />
      <section className={style.containerCreateBlog}>
        <h1 className={style.titleCreateBlog}> CREAR UN BLOG </h1>

        <div className={style.containerLinkAtras}>
          <Link className={style.linkAtras} to={"/dashboard/blogs_user"}>
            Volver atras
          </Link>
        </div>

        <article>
          {infoJWTVerifi.status === "fulfilled" && access ? (
            <form
              className={style.inputsInCreatingBlog}
              encType="multipart/form-data"
              onSubmit={onSubmitCreateBlog}
            >
              <div className={style.title}>
                <label htmlFor="title">Titulo</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={onChangeCreateBlog}
                />
              </div>

              <div className={style.file}>
                <label htmlFor="image"> Imagen </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={onChangeUploadImg}
                  accept="image/*"
                  required
                />
              </div>

              <div className={style.description}>
                <label
                  className={style.labelDescriptionPersonalize}
                  htmlFor="description"
                >
                  Descripcion
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  onChange={onChangeCreateBlog}
                ></textarea>
              </div>

              <div className={style.public}>
                <b
                  style={
                    publicSelect === "PRIVADO"
                      ? { color: "rgb(187, 69, 69)" }
                      : { color: "rgb(69, 142, 69)" }
                  }
                >
                  {publicSelect}
                </b>
                <div class={style.check}>
                  <input
                    type="checkbox"
                    id="pill3"
                    name="public"
                    onChange={onChangeCreateBlog}
                  />
                  <label for="pill3"></label>
                </div>
              </div>

              <div className={style.category}>
                <select onClick={onClickSelectCategory}>
                  <option>Seleccionar categoria</option>
                  {infoCategory.status === "fulfilled" && infoCategory.info
                    ? infoCategory.info?.map(function (data) {
                        return <option key={data.id}> {data.name} </option>;
                      })
                    : false}
                </select>
              </div>

              <div className={style.content}>
                <label htmlFor=""> Contenido </label>
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setContentCkeditor(data);
                  }}
                />
              </div>
              <div className={style.containerButtom}>
                <button className={style.button} type="submit">
                  Crear blog
                </button>
              </div>
            </form>
          ) : (
            <h1> Cargando... </h1>
          )}
        </article>
      </section>
    </main>
  );
}
