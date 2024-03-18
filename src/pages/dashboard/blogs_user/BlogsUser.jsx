import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { SidebarDashboard } from "../../../components/common/sidebar/SidebarDashboard";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import style from "./style_blogs_user.module.css";

export function BlogsUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationReact = useLocation();

  const infoBlogsByUser = useSelector((state) => state.blogsByUser);
  const infoCreateBlog = useSelector((state) => state.createBlogUser);
  const infoUpdateBlogUser = useSelector((state) => state.updateBlogUser);
  const infoDeleteBlogUser = useSelector((state) => state.deleteBlogUser);

  const access = JSON.parse(localStorage.getItem("access"));

  const [allVisibility, setAllVisibility] = useState("0");
  const [allVisibilityPage, setAllVisibilityPage] = useState("0");
  const [nextBlogPages, setNextBlogPages] = useState({});

  const page = locationReact.search;

  // dom with css
  const [navegationScrollAppearance, setNavegationScrollAppearance] =
    useState(false);
  const [valueScrollApearence, setValueScrollApearence] = useState(
    <AiOutlineMenu />
  );

  // States of create, update and delete blog
  useEffect(() => {
    if (
      infoCreateBlog.status === "fulfilled" ||
      infoUpdateBlogUser.status === "fulfilled" ||
      infoDeleteBlogUser.status === "fulfilled"
    ) {
      import("../../../redux/index").then((modules) => {
        dispatch(modules.axiosBlogsByUser(access));
      });

      setAllVisibility("0");
    }
  }, [
    infoDeleteBlogUser.status,
    infoCreateBlog.status,
    infoUpdateBlogUser.status,
  ]);

  // UseEffect Pagination
  useEffect(() => {
    if (page) {
      const headers = {
        Authorization: `JWT ${access}`,
      };
      const url = `https://server-agency-1203.onrender.com/dashboard/blog_by_user/?page=${
        page.split("=")[1]
      }`;
      fetch(url, {
        method: "GET",
        headers,
      })
        .then((res) => {
          if (!res.ok) {
            if (page > 1) {
              navigate(`/dashboard/blogs_user?page=${page - 1}`);
            } else {
              navigate(`/dashboard/blogs_user`);
            }
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

  // Refresh pagination
  function refreshBloByUserPagination() {
    setTimeout(() => {
      const headers = {
        Authorization: `JWT ${access}`,
      };
      const url = `https://server-agency-1203.onrender.com/dashboard/blog_by_user/?page=${page}`;
      fetch(url, {
        method: "GET",
        headers,
      })
        .then((res) => {
          if (!res.ok) {
            if (page > 1) {
              navigate(`/dashboard/blogs_user?page=${page - 1}`);
            } else {
              navigate(`/dashboard/blogs_user`);
            }
          }
          return res.json();
        })
        .then((data) => setNextBlogPages(data));
    }, 200);
  }

  // Button of pagination
  function buttonsPagination() {
    const countBlogsPaginate = infoBlogsByUser.info.count / 5;
    const paginateCheck = countBlogsPaginate.toString().split(".");
    if (paginateCheck.length === 1) {
      const list = [];
      for (let i = 1; i <= Number(paginateCheck[0]); i++) {
        list.push(i);
      }
      if (list.length > 1) {
        return (
          <div className={style.pagination}>
            {list.map((index) => {
              return (
                <button
                  className={style.pageButton}
                  key={index}
                  onClick={(e) => {
                    setAllVisibilityPage("0");
                    navigate(`/dashboard/blogs_user?page=${index}`);
                  }}
                >
                  {index}
                </button>
              );
            })}
          </div>
        );
      }
    } else {
      const list = [];
      for (let i = 1; i <= Number(paginateCheck[0]) + 1; i++) {
        list.push(i);
      }
      if (list.length > 1) {
        return (
          <div className={style.pagination}>
            {list.map((index) => {
              return (
                <button
                  className={style.pageButton}
                  key={index}
                  onClick={(e) => {
                    setAllVisibilityPage("0");
                    navigate(`/dashboard/blogs_user?page=${index}`);
                  }}
                >
                  {index}
                </button>
              );
            })}
          </div>
        );
      }
    }
  }

  // Button Delete Blog
  function deleteBlogByUser(data) {
    Swal.fire({
      title: "Eliminar",
      text: "Estas seguro que deseas eliminar este blog?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (page) {
          import("../../../redux/index").then((modules) => {
            dispatch(modules.axiosDeleteBlogUser(data));
          });

          setAllVisibility("0");
          refreshBloByUserPagination();
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
            icon: "error",
            title: "Blog eliminado",
          });
        } else {
          import("../../../redux/index").then((modules) => {
            dispatch(modules.axiosDeleteBlogUser(data));
          });

          setAllVisibility("0");
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
            icon: "error",
            title: "Blog eliminado",
          });
        }
      }
    });
  }

  // function to trim description
  function toTrimDescription(description) {
    let list_description = description.split("");

    if (list_description.length > 115) {
      let new_list_description = [];
      let first_counter = 0;
      while (new_list_description.length < 110) {
        new_list_description.push(list_description[first_counter]);
        first_counter++;
      }
      let final_text_description = "";
      let second_counter = 0;
      while (second_counter < new_list_description.length) {
        final_text_description += new_list_description[second_counter];
        second_counter++;
      }
      return `${final_text_description} ...`;
    } else {
      return description;
    }
  }

  return (
    <main className={style.viewInitalBlogByUser}>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> IMPACT X | Blogs usuario </title>
      </Helmet>

      <SidebarDashboard appearance={navegationScrollAppearance} />

      <article className={style.containerBlogsUser}>
        <nav>
          <Link className={style.linkNavbar} to={"/dashboard/create_blog"}>
            Crear blog
          </Link>
        </nav>

        <h1 className={style.titleMajor}> Blogs registrados </h1>
        <div className={style.bottomNavegationScrollAppearance}>
          <h1
            onClick={(e) => {
              if (navegationScrollAppearance === false) {
                setNavegationScrollAppearance(true);
                setValueScrollApearence(<AiOutlineClose />);
              } else {
                setNavegationScrollAppearance(false);
                setValueScrollApearence(<AiOutlineMenu />);
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
            ) : infoBlogsByUser.status === "fulfilled" &&
              !locationReact.search ? (
              <div>
                {infoBlogsByUser.info.results?.map((data) => {
                  return (
                    <aside
                      className={style.separateBlogContainer}
                      key={data.id}
                    >
                      <div className={style.containerImg}>
                        <img src={data.img_url} alt="img" />
                      </div>
                      <div className={style.containerContent}>
                        <div className={style.containerTitleAndPublic}>
                          <h1> {data.title} </h1>
                          {data.public === true ? (
                            <b className={style.publicCase}> Publico </b>
                          ) : (
                            <b className={style.privateCase}> Privado </b>
                          )}
                        </div>
                        <div>
                          <p>{toTrimDescription(data.description)}</p>
                        </div>

                        <hr style={{ border: "2px solid gray" }} />

                        <div className={style.containerButtonsAndDate}>
                          <div className={style.containerButtons}>
                            <button
                              className={style.buttonDelete}
                              onClick={() => {
                                const info = {
                                  jwt: access,
                                  slug: `${data.slug}`,
                                };
                                deleteBlogByUser(info);
                              }}
                            >
                              Eliminar
                            </button>
                            <button
                              className={style.buttonUpdate}
                              onClick={(e) => {
                                navigate(
                                  `/dashboard/blog_user_detail/${data.slug}`
                                );
                              }}
                            >
                              Detalles
                            </button>
                          </div>
                          <b> {data.creation} </b>
                        </div>
                      </div>
                    </aside>
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
                    <aside
                      className={style.separateBlogContainer}
                      key={data.id}
                    >
                      <div className={style.containerImg}>
                        <img src={data.img_url} alt="img" />
                      </div>
                      <div className={style.containerContent}>
                        <div className={style.containerTitleAndPublic}>
                          <h1> {data.title} </h1>
                          {data.public === true ? (
                            <b className={style.publicCase}> Publico </b>
                          ) : (
                            <b className={style.privateCase}> Privado </b>
                          )}
                        </div>
                        <div>
                          <p> {toTrimDescription(data.description)} </p>
                        </div>

                        <hr style={{ border: "2px solid gray" }} />

                        <div className={style.containerButtonsAndDate}>
                          <div className={style.containerButtons}>
                            <button
                              className={style.buttonDelete}
                              onClick={() => {
                                const info = {
                                  jwt: access,
                                  slug: `${data.slug}`,
                                };
                                deleteBlogByUser(info);
                              }}
                            >
                              Eliminar
                            </button>
                            <button
                              className={style.buttonUpdate}
                              onClick={(e) => {
                                navigate(
                                  `/dashboard/blog_user_detail/${data.slug}`
                                );
                              }}
                            >
                              Detalles
                            </button>
                          </div>
                          <b> {data.creation} </b>
                        </div>
                      </div>
                    </aside>
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
      </article>
    </main>
  );
}
