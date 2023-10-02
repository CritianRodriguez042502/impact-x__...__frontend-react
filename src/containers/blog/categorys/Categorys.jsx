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
          {infoblogTypeCategory.status === "fulfilled" ? (
            infoblogTypeCategory.info.results?.map((data) => {
              return (
                <Link to={`/blogs/blog_detail/${data.slug}`} key={data.id}>
                  <h1> {data.title} </h1>
                  <p> {data.description} </p>
                  <hr />
                  <p> {data.public} </p>
                </Link>
              );
            })
          ) : infoblogTypeCategory.status === "pending" ? (
            false
          ) : infoblogTypeCategory.status === "rejected" ? (
            <h1> No hay blogs </h1>
          ) : (
            false
          )}
        </div>
      </Layout>
    </main>
  );
}
