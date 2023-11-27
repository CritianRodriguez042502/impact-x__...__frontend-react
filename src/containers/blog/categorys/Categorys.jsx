import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import style from "./style_categorys.module.css";

export function Categorys() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const locationReact = useLocation();

  const infoblogTypeCategory = useSelector((state) => state.blogTypeCategory);
  const infoCategorys = useSelector((state) => state.category);

  const [allVisibility, setAllVisibility] = useState("0");
  const [allVisibilityPage, setAllVisibilityPage] = useState("0");
  const [nextBlogPages, setNextBlogPages] = useState({});

  const page = locationReact.search;

  useEffect(
    function () {
      if (!infoCategorys.info) {
        import("../../../redux/index").then((modules) => {
          dispatch(modules.axiosCategorys());
        });
      }
      import("../../../redux/index").then((modules) => {
        dispatch(modules.axiosBlogTypeCategory(params.slug));
      });
    },
    [params.slug]
  );

  useEffect(() => {
    setAllVisibility("0");
  }, [params.slug]);

  useEffect(() => {
    if (page) {
      const url = `https://server-agency-1203.onrender.com/blog/blog_by_category/?page=${
        page.split("=")[1]
      }&slug=${params.slug}`;
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

  setTimeout(function () {
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
    const countBlogsPaginate = infoblogTypeCategory.info.count / 5;
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
                className={style.pageButton}
                style={
                  locationReact.search &&
                  locationReact.search.split("=")[1] == index
                    ? { background: "#0e9131" }
                    : { background: "#4ec776" }
                }
                key={index}
                onClick={(e) => {
                  navigate(`/blogs/category/${params.slug}?page=${index}`);
                  setAllVisibilityPage("0");
                }}
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
                className={style.pageButton}
                style={
                  locationReact.search &&
                  locationReact.search.split("=")[1] == index
                    ? { background: "#0e9131" }
                    : { background: "#4ec776" }
                }
                key={index}
                onClick={(e) => {
                  navigate(`/blogs/category/${params.slug}?page=${index}`);
                  setAllVisibilityPage("0");
                }}
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
        <title> IMPACT X | Blogs: {params.slug} </title>
      </Helmet>

      <Layout>
        <section className={style.containerAllBlogs1}>
          <nav className={style.categories}>
            <Link className={style.link} to={"/blogs"}>
              Todos
            </Link>
            {infoCategorys.status === "fulfilled"
              ? infoCategorys.info?.map((data) => {
                  return (
                    <Link
                      style={
                        params.slug === data.slug
                          ? { background: "green", textDecoration: "underline" }
                          : { textDecoration: "none" }
                      }
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
          {infoblogTypeCategory.status === "fulfilled" &&
          !locationReact.search ? (
            <article>
              {infoblogTypeCategory.info.results?.map((data) => {
                return (
                  <div
                    key={data.id}
                    onClick={() => {
                      navigate(`/blogs/blog_detail/${data.slug}`);
                    }}
                  >
                    <aside className={style.blogContentContainer}>
                      <div className={style.containerImg}>
                        <img src={data.img_url} alt="img" />
                      </div>

                      <div className={style.blogInfo}>
                        <h1 className={style.title}> {data.title} </h1>
                        <p className={style.description}>{data.description}</p>
                        <p className={style.creation}> {data.creation} </p>
                      </div>
                    </aside>
                  </div>
                );
              })}

              {infoblogTypeCategory.status === "fulfilled"
                ? buttonsPagination()
                : false}
            </article>
          ) : Object.keys(nextBlogPages).length !== 0 ? (
            <div style={{ opacity: allVisibilityPage }}>
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
                        <img src={data.img_url} alt="img" />
                      </div>

                      <div className={style.blogInfo}>
                        <h1 className={style.title}> {data.title} </h1>
                        <p className={style.description}>{data.description}</p>
                        <p className={style.creation}> {data.creation} </p>
                      </div>
                    </aside>
                  </div>
                );
              })}

              {infoblogTypeCategory.status === "fulfilled"
                ? buttonsPagination()
                : false}
            </div>
          ) : infoblogTypeCategory.status === "rejected" ? (
            <h1> No hay blogs </h1>
          ) : (
            false
          )}
        </section>
      </Layout>
    </main>
  );
}
