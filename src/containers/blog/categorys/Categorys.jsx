import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { axiosBlogTypeCategory, axiosCategorys } from "../../../redux/index";
import { Layout } from "../../../components/index";

export function Categorys() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const infoblogTypeCategory = useSelector((state) => state.blogTypeCategory);
  const infoCategorys = useSelector((state) => state.category);

  const [allVisibility, setAllVisibility] = useState("0");
  const [allVisibilityPage, setAllVisibilityPage] = useState("0");
  const [nextBlogPages, setNextBlogPages] = useState({});

  const page = new URLSearchParams(location.search).get("page");

  useEffect(
    function () {
      if (!infoCategorys) {
        dispatch(axiosCategorys());
      }
      dispatch(axiosBlogTypeCategory(params.slug));
    },
    [params.slug]
  );

  useEffect(() => {
    setAllVisibility("0");
  }, [params.slug]);

  useEffect(() => {
    if (page) {
      const url = `http://127.0.0.1:8000/blog/blog_by_category/?page=${page}&slug=${params.slug}`;
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
        return list.map((index) => {
          return (
            <button
              key={index}
              onClick={(e) => {
                navigate(`/blogs/category/${params.slug}?page=${index}`);
                setAllVisibilityPage("0");
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
                navigate(`/blogs/category/${params.slug}?page=${index}`);
                setAllVisibilityPage("0");
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
        <title> Blogs / categorya </title>
      </Helmet>

      <Layout>
        <h1> Blog / category </h1>

        <Link to={"/blogs"}> Todos </Link>
        {infoCategorys.status === "fulfilled" ? (
          infoCategorys.info?.map((data) => {
            return (
              <Link to={`/blogs/category/${data.slug}`} key={data.id}>
                {data.name}
              </Link>
            );
          })
        ) : infoCategorys.status === "pending" ? (
          false
        ) : infoCategorys.status === "rejected" ? (
          <h3> No hay categorias</h3>
        ) : (
          false
        )}

        <form onSubmit={onSubmitSearch}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Buscar blog"
            required
          />
          <button type="submit"> Enviar </button>
        </form>

        <hr />

        <div style={{ opacity: allVisibility }}>
          <div>
            {infoblogTypeCategory.status === "fulfilled" && !location.search ? (
              <div>
                {infoblogTypeCategory.info.results?.map((data) => {
                  return (
                    <Link to={`/blogs/blog_detail/${data.slug}`} key={data.id}>
                      <h1> {data.title} </h1>
                      <p> {data.description} </p>
                      <hr />
                      <p> {data.public} </p>
                    </Link>
                  );
                })}
                {infoblogTypeCategory.status === "fulfilled"
                  ? buttonsPagination()
                  : false}
              </div>
            ) : Object.keys(nextBlogPages).length !== 0 ? (
              <div style={{ opacity: allVisibilityPage }}>
                {nextBlogPages.results?.map((data) => {
                  return (
                    <Link to={`/blogs/blog_detail/${data.slug}`} key={data.id}>
                      <h1> {data.title} </h1>
                      <p> {data.description} </p>
                      <hr />
                      <p> {data.public} </p>
                    </Link>
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
          </div>
        </div>
      </Layout>
    </main>
  );
}
