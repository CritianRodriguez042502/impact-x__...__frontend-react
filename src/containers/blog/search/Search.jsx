import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosSearchBlogs } from "../../../redux/index";
import { Layout } from "../../../components/index";

export function Search() {
  const dispatch = useDispatch();
  const params = useParams();
  const infoSearchBlogs = useSelector((state) => state.searchBlog);

  const [inputValue, setInputValue] = useState(params.slug);

  useEffect(() => {
    dispatch(axiosSearchBlogs(params.slug));
  }, [params.slug]);

  function onChangeSearch(e) {
    const searchBlogs = e.target.value;
    setInputValue(searchBlogs);
    dispatch(axiosSearchBlogs(searchBlogs));
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

        <input
          value={inputValue}
          type="text"
          name="search"
          id="search"
          placeholder="Buscar blogs"
          onChange={onChangeSearch}
          required
        />

        {infoSearchBlogs.status === "fulfilled" ? (
          infoSearchBlogs.info.results?.map((data) => {
            return (
              <Link to={`/blogs/blog_detail/${data.slug}`} key={data.id}>
                <h1> {data.title} </h1>
                <p> {data.description} </p>
                <hr />
                <p> {data.public} </p>
              </Link>
            );
          })
        ) : infoSearchBlogs.status === "pending" ? (
          <h1>Cargando...</h1>
        ) : infoSearchBlogs.status === "rejected" ? (
          <h1> No hay blogs </h1>
        ) : (
          false
        )}
      </Layout>
    </main>
  );
}
