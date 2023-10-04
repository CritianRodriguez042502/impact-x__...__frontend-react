import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  axiosCategorys,
  axiosDetailedUserBlog,
  axiosUpdateBlogUser,
} from "../../../redux/index";
import { GetReactionDashboard } from "../../../components/index";
import { LayoutDashboard } from "../../../components/layout_dashboard/LayoutDashboard";
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

  useEffect(() => {
    if (infoJWTVerifi.status === "fulfilled") {
      dispatch(axiosDetailedUserBlog({ jwt: access, slug: slug }));
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
      location.href = "http://localhost:5173/dashboard/blogs_user";
    }
  }, [infoJWTVerifi.status, infoDetailedUserBlog.status]);

  useEffect(() => {
    if (infoJWTVerifi.status === "fulfilled" && !infoCategory.info) {
      dispatch(axiosCategorys());
    }
  }, [infoJWTVerifi.status, infoCategory.info]);

  // ========================================

  setTimeout(function () {
    setAllVisibility("1");
  }, 350);

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
      dispatch(axiosUpdateBlogUser(data));
      navigate("/dashboard/blogs_user");
    }
  }

  return (
    <main className={style.screenSetting}>
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Dashboard </title>
      </Helmet>

      <LayoutDashboard>
        <section>
          <h1> ACTUALIZA EL BLOG </h1>
          {infoJWTVerifi.status === "fulfilled" && access ? (
            <div style={{ opacity: allVisibility }}>
              <GetReactionDashboard params={slug} />
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

                    <input
                      type="file"
                      name="img"
                      id="img"
                      accept="image/*"
                      onChange={onChangeUploadImg}
                    />

                    <div>
                      <CKEditor
                        editor={ClassicEditor}
                        data={contentCkeditor}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setContentCkeditor(data);
                        }}
                      />
                    </div>

                    <button type="submit"> enviar </button>
                  </div>
                ) : (
                  <h1> cargando... </h1>
                )}
              </form>
              <div>
                {Object.keys(dataUpdateBlog).length !== 0 ? (
                  <img
                    src={`http://localhost:8000${dataUpdateBlog.img}`}
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
      </LayoutDashboard>
    </main>
  );
}
