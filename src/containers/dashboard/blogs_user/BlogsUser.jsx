import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosBlogsByUser, axiosDeleteBlogUser } from "../../../redux/index";
import { SidebarDashboard } from "../../../components/common/sidebar/SidebarDashboard";
import style from "./style_blogs_user.module.css";

export function BlogsUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infoBlogsByUser = useSelector((state) => state.blogsByUser);
  const infoCreateBlog = useSelector((state) => state.createBlogUser);
  const infoUpdateBlogUser = useSelector((state) => state.updateBlogUser);
  const infoDeleteBlogUser = useSelector((state) => state.deleteBlogUser);

  const access = JSON.parse(localStorage.getItem("access"));

  const [allVisibility, setAllVisibility] = useState("0");
  const [allVisibilityPage, setAllVisibilityPage] = useState("0");
  const [nextBlogPages, setNextBlogPages] = useState({});

  const page = new URLSearchParams(location.search).get("page");

  // dom with css
  const [navegationScrollAppearance, setNavegationScrollAppearance] =
    useState(false);
  const [valueScrollApearence, setValueScrollApearence] = useState("///");

  // States of create, update and delete blog
  useEffect(() => {
    if (
      infoCreateBlog.status === "fulfilled" ||
      infoUpdateBlogUser.status === "fulfilled" ||
      infoDeleteBlogUser.status === "fulfilled"
    ) {
      dispatch(axiosBlogsByUser(access));
      setAllVisibility("0");
    }
  }, [
    infoDeleteBlogUser.status,
    infoCreateBlog.status,
    infoUpdateBlogUser.status,
  ]);

  useEffect(() => {
    if (page) {
      const headers = {
        Authorization: `JWT ${access}`,
      };
      const url = `http://127.0.0.1:8000/dashboard/blog_by_user/?page=${page}`;
      fetch(url, {
        method: "GET",
        headers,
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Hubo algun error");
          }
          return res.json();
        })
        .then((data) => {
          setNextBlogPages(data);
          setTimeout(() => {
            setAllVisibilityPage("1");
          }, 350);
        })
        .catch((err) => console.log(err));
    }
  }, [page]);

  setTimeout(function () {
    setAllVisibility("1");
  }, 350);

  function refreshBloByUserPagination() {
    setTimeout(() => {
      const headers = {
        Authorization: `JWT ${access}`,
      };
      const url = `http://127.0.0.1:8000/dashboard/blog_by_user/?page=${page}`;
      fetch(url, {
        method: "GET",
        headers,
      })
        .then((res) => {
          if (!res.ok) {
            navigate(`/dashboard/blogs_user?page=${page - 1}`);
          }
          return res.json();
        })
        .then((data) => setNextBlogPages(data));
    }, 200);
  }

  function buttonsPagination() {
    const countBlogsPaginate = infoBlogsByUser.info.count / 5;
    const paginateCheck = countBlogsPaginate.toString().split(".");
    if (paginateCheck.length === 1) {
      const list = [];
      for (let i = 1; i <= Number(paginateCheck[0]); i++) {
        list.push(i);
      }
      if (list.length > 1) {
        return list.map((index) => {
          return (
            <button
              key={index}
              onClick={(e) => {
                setAllVisibilityPage("0");
                navigate(`/dashboard/blogs_user?page=${index}`);
              }}
            >
              {index}
            </button>
          );
        });
      }
    } else {
      const list = [];
      for (let i = 1; i <= Number(paginateCheck[0]) + 1; i++) {
        list.push(i);
      }
      if (list.length > 1) {
        return list.map((index) => {
          return (
            <button
              key={index}
              onClick={(e) => {
                setAllVisibilityPage("0");
                navigate(`/dashboard/blogs_user?page=${index}`);
              }}
            >
              {index}
            </button>
          );
        });
      }
    }
  }

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Dashboard </title>
      </Helmet>

      <SidebarDashboard appearance={navegationScrollAppearance}/>

      <section className={style.containerBlogsUser}>
        <h1> Blogs del usuario registrado </h1>
        <div className={style.bottomNavegationScrollAppearance}>
          <h1
            onClick={(e) => {
              if (valueScrollApearence === "///") {
                setNavegationScrollAppearance(true);
                setValueScrollApearence("XXX");
              } else {
                setNavegationScrollAppearance(false);
                setValueScrollApearence("///");
              }
            }}
          >
            {valueScrollApearence}
          </h1>
        </div>

        <div style={{ opacity: allVisibility }}>
          <div>
            {infoBlogsByUser.status === "pending" ? (
              <h1> Cargando... </h1>
            ) : infoBlogsByUser.status === "fulfilled" && !location.search ? (
              <div>
                {infoBlogsByUser.info.results?.map((data) => {
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
                          setAllVisibility("0");
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  );
                })}
                <div>
                  {infoBlogsByUser.status === "fulfilled"
                    ? buttonsPagination()
                    : false}
                </div>
              </div>
            ) : Object.keys(nextBlogPages).length !== 0 ? (
              <div style={{ opacity: allVisibilityPage }}>
                {nextBlogPages.results?.map((data) => {
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
                          setAllVisibility("0");
                          refreshBloByUserPagination();
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  );
                })}
                <div>
                  {infoBlogsByUser.status === "fulfilled"
                    ? buttonsPagination()
                    : false}
                </div>
              </div>
            ) : infoBlogsByUser.status === "rejected" ? (
              <p> No hay blogs</p>
            ) : (
              false
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
