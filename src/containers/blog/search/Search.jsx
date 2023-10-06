import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosSearchBlogs } from "../../../redux/index";
import { Layout } from "../../../components/index";

export function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const infoSearchBlogs = useSelector((state) => state.searchBlog);

  const [inputValue, setInputValue] = useState(params.slug);
  const [nextBlogPages, setNextBlogPages] = useState({});
  const [allVisibility, setAllVisibility] = useState("0");
  const [allVisibilityPage, setAllVisibilityPage] = useState("0");

  const page = new URLSearchParams(location.search).get("page");

  useEffect(() => {
    dispatch(axiosSearchBlogs(params.slug));
  }, [params.slug]);

  useEffect(() => {
    if (page) {
      const url = `http://127.0.0.1:8000/blog/search_blogs/?page=${page}&slug=${params.slug}`;
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
        return list.map((index) => {
          return (
            <button
              key={index}
              onClick={(e) => {
                setAllVisibilityPage("0");
                navigate(`/blogs/search/${params.slug}?page=${index}`);
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
                navigate(`/blogs/search/${params.slug}?page=${index}`);
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
        <title> Busqueda </title>
      </Helmet>

      <Layout>
        <h1> Blogs encontrados </h1>
        <Link to={`/blogs`}> Volver </Link>

        <form onSubmit={onSubmitSearchBlogs}>
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

        {infoSearchBlogs.status === "fulfilled" && !location.search ? (
          <div style={{ opacity: allVisibility }}>
            {infoSearchBlogs.info.results?.map((data) => {
              return (
                <Link to={`/blogs/blog_detail/${data.slug}`} key={data.id}>
                  <h1> {data.title} </h1>
                  <p> {data.description} </p>
                  <hr />
                  <p> {data.public} </p>
                </Link>
              );
            })}
            {infoSearchBlogs.status === "fulfilled"
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
            {infoSearchBlogs.status === "fulfilled"
              ? buttonsPagination()
              : false}
          </div>
        ) : infoSearchBlogs.status === "rejected" ? (
          <h1> No hay blogs </h1>
        ) : (
          false
        )}
      </Layout>
    </main>
  );
}
