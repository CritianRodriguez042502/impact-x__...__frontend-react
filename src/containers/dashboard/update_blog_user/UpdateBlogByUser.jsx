import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  axiosJWTVerify,
  axiosCategorys,
  axiosDetailedUserBlog,
  axiosUpdateBlogUser,
} from "../../../redux/index";

export function UpdateBlogByUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const slug = useParams().slug;

  const infoJWTVerifi = useSelector((state) => state.JWTVerify);
  const infoDetailedUserBlog = useSelector((state) => state.detailedUserBlog);
  const infoCategory = useSelector((state) => state.category);

  const access = JSON.parse(localStorage.getItem("access"));

  const [dataUpdateBlog, setDataUpdateBlog] = useState({});
  const [contentCkeditor, setContentCkeditor] = useState(
    dataUpdateBlog.content
  );
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    if (infoJWTVerifi.status === "fulfilled") {
      dispatch(axiosDetailedUserBlog({ jwt: access, slug: slug }));
    }
  }, [infoJWTVerifi.status]);

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
        slug: infoDetailedUserBlog.info[0].slug,
        description: infoDetailedUserBlog.info[0].description,
        public: infoDetailedUserBlog.info[0].public,
      });
      setContentCkeditor(infoDetailedUserBlog.info[0].content);
      setSelectCategory(infoDetailedUserBlog.info[0].category.name);
    }

    if (infoDetailedUserBlog.status === "rejected") {
      location.href = "http://localhost:5173/dashboard/blogs_user";
    }
  }, [infoJWTVerifi.status, infoDetailedUserBlog.status]);

  useEffect(() => {
    if (infoJWTVerifi.status === "fulfilled" && !infoCategory.info) {
      dispatch(axiosCategorys());
    }
  }, [infoJWTVerifi.status, infoCategory.info]);

  // ========================================

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
      dispatch(axiosUpdateBlogUser(data));
      navigate("/dashboard/blogs_user");
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

      <section>
        <h1> ACTUALIZA EL BLOG </h1>
        {infoJWTVerifi.status === "fulfilled" && access ? (
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
                <select
                  onClick={(e) => {
                    setSelectCategory(e.target.value);
                  }}
                >
                  <option> {selectCategory} </option>
                  {infoCategory.info ? leftoverCategoriesToSelect() : true}
                </select>

                <CKEditor
                  editor={ClassicEditor}
                  data={contentCkeditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setContentCkeditor(data);
                  }}
                />
                <button type="submit"> enviar </button>
              </div>
            ) : (
              <h1> cargando... </h1>
            )}
          </form>
        ) : (
          <h1> cargando... </h1>
        )}
      </section>
    </main>
  );
}
