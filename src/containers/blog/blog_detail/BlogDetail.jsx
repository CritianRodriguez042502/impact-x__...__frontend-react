import React from "react";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import {
  axiosBlogDetail,
  axiosLikeBlog,
  axiosGetLikesBlog,
} from "../../../redux/index";
import { Layout } from "../../../components/index";

export function BlogDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const params = useParams();

  const infoJWTVerify = useSelector((state) => state.JWTVerify);
  const infoBlogDetail = useSelector((state) => state.blogDetail);
  const infoGetLikeBlog = useSelector((state) => state.getLikesBlog);
  const Infolike = useSelector((state) => state.likeBlog);

  const access = JSON.parse(localStorage.getItem("access"));
  const username = JSON.parse(localStorage.getItem("username"));

  const [selectLikeUser, setSelectLikeUser] = useState(false);

  useEffect(
    function () {
      dispatch(axiosBlogDetail(params.slug));
      dispatch(axiosGetLikesBlog(params.slug));
    },
    [params.slug, Infolike.info]
  );

  useEffect(() => {
    if (infoGetLikeBlog.status == "fulfilled") {
      const like_registered = infoGetLikeBlog.info.data.likes_details?.filter(
        (data) => {
          return data.user.username == username;
        }
      );
      if (like_registered.length == 0) {
        setSelectLikeUser(false);
      } else {
        if (like_registered[0].selected == true) {
          setSelectLikeUser(true);
        } else {
          setSelectLikeUser(false);
        }
      }
    }
  }, [infoGetLikeBlog.info]);

  function onChangeLike(e) {
    if (
      e.target.type === "checkbox" &&
      infoJWTVerify.status === "fulfilled" &&
      access &&
      username
    ) {
      const updatedLike = {
        like: !selectLikeUser,
        slug: params.slug,
        jwt: access,
      };
      dispatch(axiosLikeBlog(updatedLike));
      setSelectLikeUser(!selectLikeUser);
    } else if (infoJWTVerify.status === "fulfilled" && access && username) {
      const updatedLike = {
        like: false,
        slug: params.slug,
        jwt: access,
      };
      dispatch(axiosLikeBlog(updatedLike));
      setSelectLikeUser(false);
    } else {
     if (infoJWTVerify.status === "fulfilled" && access) {
      e.target.checked = false; 
      alert("Parece que algo salio mal");
      navigate("/dashboard");
     } else {
      e.target.checked = false; 
      alert("Tienes que estar registrado para acceder");
     }
    }
  }

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Blog / name </title>
      </Helmet>

      <Layout>
        <h1> BlogDetail </h1>

        <input
          type="checkbox"
          name="like"
          checked={selectLikeUser}
          onChange={onChangeLike}
        />

        {infoGetLikeBlog.status === "fulfilled" ? (
          <b> {infoGetLikeBlog.info.data.all_likes} </b>
        ) : (
          <p> Cargando </p>
        )}

        {infoBlogDetail.status === "fulfilled" ? (
          infoBlogDetail.info?.map((data) => {
            return (
              <div key={data.id}>
                <h1> {data.title} </h1>
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
      </Layout>
    </main>
  );
}
