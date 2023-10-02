import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import { axiosCategorys, axiosAllBlogs } from "../../../redux/index";

export function AllBlogs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoCategorys = useSelector((state) => state.category);
  const infoBlogs = useSelector((state) => state.allBlogs);

  const [allVisibility, setAllVisibility] = useState("0")


  useEffect(() => {
    if (!infoBlogs.info && !infoBlogs.info) {
      dispatch(axiosCategorys());
      dispatch(axiosAllBlogs());
    }
  }, [infoBlogs.info, infoBlogs.info]);

  setTimeout(() => {
    setAllVisibility("1")
  },350)
  

  function onSubmitSearch(e) {
    e.preventDefault();

    const searchBlogs = e.target.search.value;
    if (searchBlogs) {
      navigate(`/blogs/search/${searchBlogs}`);
    } else {
      alert("Estas tratando de enviar datos vacios");
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
        <h1> All blogs </h1>
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
          <span> Cargando... </span>
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
            placeholder="Buscar"
            required
          />
          <button type="submit"> buscar </button>
        </form>

        <hr />

        <div style={{opacity : allVisibility}}>
          {infoBlogs.status === "fulfilled" ? (
            infoBlogs.info.results?.map((data) => {
              return (
                <Link to={`/blogs/blog_detail/${data.slug}`} key={data.id}>
                  <h1> {data.title} </h1>
                  <p> {data.description} </p>
                  <hr />
                  <p> {data.public} </p>
                </Link>
              );
            })
          ) : infoBlogs.status === "pending" ? (
            false
          ) : infoBlogs.status === "rejected" ? (
            <h1> No hay blogs </h1>
          ) : (
            false
          )}
        </div>
      </Layout>
    </main>
  );
}
