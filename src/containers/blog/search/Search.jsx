import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import style from "./style_search.module.css";

export function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const locationReact = useLocation();

  const infoSearchBlogs = useSelector((state) => state.searchBlog);

  const [inputValue, setInputValue] = useState(params.slug);
  const [nextBlogPages, setNextBlogPages] = useState({});
  const [allVisibility, setAllVisibility] = useState("0");
  const [allVisibilityPage, setAllVisibilityPage] = useState("0");

  const page = locationReact.search;

  useEffect(() => {
    import("../../../redux/index").then((modules) => {
      dispatch(modules.axiosSearchBlogs(params.slug));
    });
  }, [params.slug]);

  useEffect(() => {
    if (page) {
      const url = `https://server-agency-1203.onrender.com/blog/search_blogs/?page=${
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

  function onChangeSearch(e) {
    setInputValue(e.target.value);
  }

  function onSubmitSearchBlogs(e) {
    e.preventDefault();

    if (inputValue) {
      navigate(`/blogs/search/${inputValue}`);
    } else {
      alert("No puedes enviar datos vacios");
    }
  }

  setTimeout(() => {
    setAllVisibility("1");
  }, 350);

  function buttonsPagination() {
    const countBlogsPaginate = infoSearchBlogs.info.count / 8;
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
                  setAllVisibilityPage("0");
                  navigate(`/blogs/search/${params.slug}?page=${index}`);
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
                  setAllVisibilityPage("0");
                  navigate(`/blogs/search/${params.slug}?page=${index}`);
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
        <title> IMPACT X | Blogs: {params.slug} </title>
      </Helmet>

      <Layout>
        <section className={style.containerAllBlogs1}>
          <Link className={style.link} to={`/blogs`}>
            Volver
          </Link>

          <form className={style.searchForm} onSubmit={onSubmitSearchBlogs}>
            <input
              type="text"
              name="search"
              value={inputValue}
              id="search"
              placeholder="Buscar blogs"
              onChange={onChangeSearch}
              required
            />
            <button type="submit"> Buscar </button>
          </form>
        </section>

        <section
          className={style.containerAllBlogs2}
          style={{ opacity: allVisibility }}
        >
          {infoSearchBlogs.status === "fulfilled" && !locationReact.search ? (
            <article style={{ opacity: allVisibility }}>
              {infoSearchBlogs.info.results?.map((data) => {
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
              {infoSearchBlogs.status === "fulfilled"
                ? buttonsPagination()
                : false}
            </article>
          ) : Object.keys(nextBlogPages).length !== 0 ? (
            <section
              className={style.containerAllBlogs2}
              style={{ opacity: allVisibilityPage }}
            >
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
              {infoSearchBlogs.status === "fulfilled"
                ? buttonsPagination()
                : false}
            </section>
          ) : infoSearchBlogs.status === "rejected" ? (
            <h1> No hay blogs </h1>
          ) : (
            false
          )}
        </section>
      </Layout>
    </main>
  );
}
