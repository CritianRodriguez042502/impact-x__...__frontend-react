import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import style from "./style_all_blogs.module.css";

export function AllBlogs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationReact = useLocation();

  const infoCategorys = useSelector((state) => state.category);
  const infoBlogs = useSelector((state) => state.allBlogs);

  const [overlay, setOverlay] = useState("initial");

  const [allVisibility, setAllVisibility] = useState("0");
  const [allVisibilityPage, setAllVisibilityPage] = useState("0");
  const [nextBlogPages, setNextBlogPages] = useState({});

  const page = locationReact.search;

  useEffect(() => {
    if (!infoCategorys.info) {
      import("../../../redux/index").then((modules) => {
        dispatch(modules.axiosCategorys());
      });
    }

    if (infoCategorys.info && infoBlogs.info) {
      setOverlay("none");
    }
  }, [infoBlogs.info, infoCategorys.info]);

  useEffect(() => {
    import("../../../redux/index").then((modules) => {
      dispatch(modules.axiosAllBlogs());
    });
  }, []);

  useEffect(() => {
    if (page) {
      const url = `https://server-agency-1203.onrender.com/blog/all_blog/?page=${
        page.split("=")[1]
      }`;
      fetch(url, {
        method: "GET",
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
        });
    }
  }, [page]);

  setTimeout(() => {
    setAllVisibility("1");
  }, 350);

  function onSubmitSearch(e) {
    e.preventDefault();

    const searchBlogs = e.target.search.value;
    if (searchBlogs) {
      navigate(`/blogs/search/${searchBlogs}`);
    } else {
      alert("Estas tratando de enviar datos vacios");
    }
  }

  function buttonsPagination() {
    const countBlogsPaginate = infoBlogs.info.count / 5;
    const paginateCheck = countBlogsPaginate.toString().split(".");
    if (paginateCheck.length === 1) {
      const list = [];
      for (let i = 1; i <= Number(paginateCheck[0]); i++) {
        list.push(i);
      }
      if (list.length > 1) {
        return (
          <div className={style.pagination}>
            {list.map((index) => (
              <button
                key={index}
                onClick={(e) => {
                  navigate(`/blogs?page=${index}`);
                  setAllVisibilityPage("0");
                }}
                className={style.pageButton}
              >
                {index}
              </button>
            ))}
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
            {list.map((index) => (
              <button
                key={index}
                onClick={(e) => {
                  navigate(`/blogs?page=${index}`);
                  setAllVisibilityPage("0");
                }}
                className={style.pageButton}
              >
                {index}
              </button>
            ))}
          </div>
        );
      }
    }
  }

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Blogs </title>
      </Helmet>

      <Layout>
        <article style={{ position: "relative" }}>
          <div style={{ display: overlay }} class={style.overlay}>
            <div class={style.loaderContainer}>
              <span class={style.loader}></span>
            </div>
          </div>

          <section className={style.containerAllBlogs1}>
            <nav className={style.categories}>
              {locationReact.pathname == "/blogs" ? (
                <Link
                  style={{ textDecoration: "underline", background : "green" }}
                  className={style.link}
                  to={"/blogs"}
                >
                  Todos
                </Link>
              ) : (
                <Link className={style.link} to={"/blogs"}>
                  Todos
                </Link>
              )}

              {infoCategorys.status === "fulfilled"
                ? infoCategorys.info?.map((data) => {
                    return (
                      <Link
                        className={style.link}
                        to={`/blogs/category/${data.slug}`}
                        key={data.id}
                      >
                        {data.name}
                      </Link>
                    );
                  })
                : infoCategorys.status === "pending"
                ? false
                : false}
            </nav>

            <form onSubmit={onSubmitSearch} className={style.searchForm}>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Buscar"
                required
              />
              <button type="submit">Buscar</button>
            </form>
            
          </section>

          <section
            className={style.containerAllBlogs2}
            style={{ opacity: allVisibility }}
          >
            {infoBlogs.status === "fulfilled" && !locationReact.search ? (
              <article>
                {infoBlogs.info.results?.map((data) => {
                  return (
                    <div
                      key={data.id}
                      onClick={(e) => {
                        navigate(`/blogs/blog_detail/${data.slug}`);
                      }}
                    >
                      <aside className={style.blogContentContainer}>
                        <div className={style.containerImg}>
                          <img
                            src={data.img_url}
                            alt="img"
                          />
                        </div>

                        <div className={style.blogInfo}>
                          <h1 className={style.title}> {data.title} </h1>
                          <p className={style.description}>
                            {data.description}
                          </p>
                          <p className={style.creation}> {data.creation} </p>
                        </div>
                      </aside>
                    </div>
                  );
                })}

                {infoBlogs.status === "fulfilled" ? buttonsPagination() : false}
              </article>
            ) : Object.keys(nextBlogPages).length !== 0 ? (
              <section
                className={style.containerAllBlogs2}
                style={{ opacity: allVisibilityPage }}
              >
                <article>
                  {nextBlogPages.results?.map((data) => {
                    return (
                      <div
                        key={data.id}
                        onClick={(e) => {
                          navigate(`/blogs/blog_detail/${data.slug}`);
                        }}
                      >
                        <aside className={style.blogContentContainer}>
                          <div className={style.containerImg}>
                            <img
                              src={data.img_url}
                              alt="img"
                            />
                          </div>

                          <div className={style.blogInfo}>
                            <h1 className={style.title}> {data.title} </h1>
                            <p className={style.description}>
                              {data.description}
                            </p>
                            <p className={style.creation}> {data.creation} </p>
                          </div>
                        </aside>
                      </div>
                    );
                  })}

                  {infoBlogs.status === "fulfilled"
                    ? buttonsPagination()
                    : false}
                </article>
              </section>
            ) : infoBlogs.status === "rejected" ? (
              <h1> No hay blogs </h1>
            ) : (
              false
            )}
          </section>
        </article>
      </Layout>
    </main>
  );
}
