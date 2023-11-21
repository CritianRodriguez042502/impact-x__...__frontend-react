// Import React
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

// Import out of react
import { Layout } from "../../../components/index";
import { LikesBlog, CommentsBlog } from "../../../components/index";
import style from "./style_blog_detail.module.css";

export function BlogDetail() {
  const dispatch = useDispatch();
  const params = useParams();

  const infoBlogDetail = useSelector((state) => state.blogDetail);

  const [allVisibility, setAllVisibility] = useState("0");

  useEffect(
    function () {
      import("../../../redux/index").then(modules => {
        dispatch(modules.axiosBlogDetail(params.slug))
      })
    },
    [params.slug]
  );

  setTimeout(() => {
    setAllVisibility("1");
  }, 350);

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> IMPACT X | Blog detallado: {params.slug} </title>
      </Helmet>

      <Layout>
        <section
          className={style.containerBlogDetail}
          style={{ opacity: allVisibility }}
        >
          {infoBlogDetail.status === "fulfilled" ? (
            infoBlogDetail.info?.map((data) => {
              return (
                <aside key={data.id} className={style.blogDetailContainer}>
                  <h1 className={style.title}> {data.title} </h1>

                  <div className={style.infoBar}>
                    <div className={style.info}>
                      <p className={style.infoLabel}>Likes:</p>
                      <LikesBlog params={params.slug} />
                    </div>
                    <div className={style.info}>
                      <p className={style.infoLabel}>Comentarios:</p>
                      <CommentsBlog params={params.slug} />
                    </div>
                    <div className={style.info}>
                      <p className={style.infoLabel}>Categoría:</p>
                      <p className={style.infoDato}>{data.category.name}</p>
                    </div>
                    <div className={style.info}>
                      <p className={style.infoLabel}>Fecha:</p>
                      <p className={style.infoDato}> {data.creation}</p>
                    </div>
                    <div className={style.info}>
                      <p className={style.infoLabel}>Autor:</p>
                      <p className={style.infoDato}> {data.user.username} </p>
                    </div>
                  </div>

                  <article
                    className={style.content}
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  />
                </aside>
              );
            })
          ) : infoBlogDetail.status === "pending" ? (
            false
          ) : infoBlogDetail.status === "rejected" ? (
            <h1> Este blog no existe</h1>
          ) : (
            false
          )}
        </section>
      </Layout>
    </main>
  );
}
