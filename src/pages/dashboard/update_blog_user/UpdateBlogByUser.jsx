import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { GetReactionDashboard } from "../../../components/index";
import { SidebarDashboard } from "../../../components/common/sidebar/SidebarDashboard";
import style from "./style_update_blog_by_user.module.css";

export function UpdateBlogByUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const slug = useParams().slug;

  const infoJWTVerifi = useSelector((state) => state.JWTVerify);
  const infoDetailedUserBlog = useSelector((state) => state.detailedUserBlog);

  const infoCategory = useSelector((state) => state.category);

  const access = JSON.parse(localStorage.getItem("access"));

  const [allVisibility, setAllVisibility] = useState("0");
  const [dataUpdateBlog, setDataUpdateBlog] = useState({});
  const [img, setImg] = useState(undefined);
  const [contentCkeditor, setContentCkeditor] = useState(
    dataUpdateBlog.content
  );
  const [selectCategory, setSelectCategory] = useState("");

  // dom with css
  const [publicSelect, setPublicSelect] = useState("PRIVADO");

  useEffect(() => {
    if (infoJWTVerifi.status === "fulfilled") {
      import("../../../redux/index").then((modules) => {
        dispatch(modules.axiosDetailedUserBlog({ jwt: access, slug: slug }));
      });
    }
  }, [infoJWTVerifi.status]);

  useEffect(() => {
    if (infoDetailedUserBlog.status === "fulfilled") {
      setDataUpdateBlog({
        img: infoDetailedUserBlog.info[0].img,
        title: infoDetailedUserBlog.info[0].title,
        slug: infoDetailedUserBlog.info[0].slug,
        description: infoDetailedUserBlog.info[0].description,
        public: infoDetailedUserBlog.info[0].public,
      });
      setContentCkeditor(infoDetailedUserBlog.info[0].content);
      setSelectCategory(infoDetailedUserBlog.info[0].category.name);
    }

    if (infoDetailedUserBlog.status === "rejected") {
      location.href =
        "https://impact-x.onrender.com/#/dashboard/blogs_user";
    }
  }, [infoJWTVerifi.status, infoDetailedUserBlog.status]);

  useEffect(() => {
    if (infoJWTVerifi.status === "fulfilled" && !infoCategory.info) {
      import("../../../redux/index").then((modules) => {
        dispatch(modules.axiosCategorys());
      });
    }
  }, [infoJWTVerifi.status, infoCategory.info]);

  useEffect(() => {
    if (Object.keys(dataUpdateBlog).length !== 0) {
      if (dataUpdateBlog.public === true) {
        setPublicSelect("PUBLICO");
      } else {
        setPublicSelect("PRIVADO");
      }
    }
  }, [dataUpdateBlog]);

  // ========================================

  setTimeout(function () {
    setAllVisibility("1");
  }, 350);

  function onchangeData(e) {
    if (e.target.checked === true) {
      setPublicSelect("PUBLICO");
    } else {
      setPublicSelect("PRIVADO");
    }

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

  function onChangeUploadImg(e) {
    setImg(e.target.files[0]);
  }

  function leftoverCategoriesToSelect() {
    const filter = infoCategory.info?.filter(
      (index) => index.name !== selectCategory
    );
    return filter?.map((index) => {
      return <option key={index.id}> {index.name} </option>;
    });
  }

  function onSubmitUpdateBlog(e) {
    e.preventDefault();

    function aggregationData() {
      return [dataUpdateBlog]?.map((index) => {
        const data = {
          title: index.title,
          description: index.description,
          public: index.public,
          content: contentCkeditor,
          category: selectCategory,
          img: img,
        };
        return data;
      });
    }

    const data = {
      jwt: access,
      info: aggregationData()[0],
      slug: dataUpdateBlog.slug,
    };

    if (dataUpdateBlog.title && dataUpdateBlog.description) {
      import("../../../redux/index").then((modules) => {
        dispatch(modules.axiosUpdateBlogUser(data));
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
          title: "Blog actualizado",
        });
      }, 4000);
      setTimeout(() => {
        navigate("/dashboard/blogs_user");
      }, 4500);
    }
  }

  // ___________________________________

  return (
    <main className={style.screenSetting}>
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> IMPACT X | Actualizar blog  </title>
      </Helmet>

      <SidebarDashboard />
      <section
        style={{ opacity: allVisibility }}
        className={style.containerCreateBlog}
      >
        <h1 className={style.titleCreateBlog}> ACTUALIZAR BLOG </h1>

        <div className={style.containerLinkAtras}>
          <Link className={style.linkAtras} to={"/dashboard/blogs_user"}>
            Volver atras
          </Link>
        </div>

        <GetReactionDashboard params={slug} />

        {infoJWTVerifi.status === "fulfilled" && access ? (
          <div>
            <article>
              <form
                className={style.inputsInCreatingBlog}
                encType="multipart/form-data"
                onSubmit={onSubmitUpdateBlog}
              >
                {Object.keys(dataUpdateBlog).length !== 0 ? (
                  <div>
                    <div className={style.title}>
                      <label
                        className={style.labelTitlePersonalize}
                        htmlFor="title"
                      >
                        Titulo
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={dataUpdateBlog.title}
                        onChange={onchangeData}
                        required
                      />
                    </div>

                    <div className={style.file}>
                      <label
                        className={style.labelFilePersonalize}
                        htmlFor="file"
                      >
                        Cambiar imagen
                      </label>
                      <input
                        type="file"
                        name="img"
                        id="file"
                        accept="image/*"
                        onChange={onChangeUploadImg}
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
                        value={dataUpdateBlog.description}
                        onChange={onchangeData}
                        required
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
                          checked={dataUpdateBlog.public}
                          onChange={onchangeData}
                        />
                        <label for="pill3"></label>
                      </div>
                    </div>

                    <div className={style.category}>
                      <select
                        onClick={(e) => {
                          setSelectCategory(e.target.value);
                        }}
                      >
                        <option> {selectCategory} </option>
                        {infoCategory.info
                          ? leftoverCategoriesToSelect()
                          : true}
                      </select>
                    </div>

                    <div className={style.content}>
                      <CKEditor
                        editor={ClassicEditor}
                        data={contentCkeditor}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setContentCkeditor(data);
                        }}
                      />
                    </div>

                    <div className={style.containerButtom}>
                      <button className={style.button} type="submit">
                        Actualizar blog
                      </button>
                    </div>
                  </div>
                ) : (
                  <h1> cargando... </h1>
                )}
              </form>
            </article>
            <div>
              {Object.keys(dataUpdateBlog).length !== 0 ? (
                <img
                  style={{ display: "none" }}
                  src={dataUpdateBlog.img_url}
                  alt="img"
                  width={140}
                />
              ) : (
                false
              )}
            </div>
          </div>
        ) : (
          <h1> cargando... </h1>
        )}
      </section>
    </main>
  );
}
