import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosBlogDetail } from "../../../redux/index";
import { Layout } from "../../../components/index";
import { LikesBlog, CommentsBlog } from "../../../components/index";
import style from "./style_blog_detail.module.css"


export function BlogDetail() {
  const dispatch = useDispatch();
  const params = useParams();

  const infoBlogDetail = useSelector((state) => state.blogDetail);

  const [allVisibility, setAllVisibility] = useState("0");

  useEffect(
    function () {
      dispatch(axiosBlogDetail(params.slug));
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
        <title> Blog / name </title>
      </Helmet>

      <Layout>
        <section style={{ opacity: allVisibility }}>
          <h1> BlogDetail </h1>
          <LikesBlog params={params.slug} />
          <CommentsBlog params={params.slug} />

          <div>
            {infoBlogDetail.status === "fulfilled" ? (
              infoBlogDetail.info?.map((data) => {
                return (
                  <div key={data.id}>
                    <h1> {data.title} </h1>
                    <img src={`http://localhost:8000${data.img}`} alt="img" width={300}/>
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                  </div>
                );
              })
            ) : infoBlogDetail.status === "pending" ? (
              <h1> Cargando...</h1>
            ) : infoBlogDetail.status === "rejected" ? (
              <h1> Este blog no existe</h1>
            ) : (
              false
            )}
          </div>
        </section>
      </Layout>
    </main>
  );
}
