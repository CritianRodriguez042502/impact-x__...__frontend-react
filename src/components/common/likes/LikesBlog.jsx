import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { axiosLikeBlog, axiosGetLikesBlog } from "../../../redux/index";

export function LikesBlog({ params }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infoJWTVerify = useSelector((state) => state.JWTVerify);
  const infoGetLikeBlog = useSelector((state) => state.getLikesBlog);
  const Infolike = useSelector((state) => state.likeBlog);

  const [selectLikeUser, setSelectLikeUser] = useState(false);

  const access = JSON.parse(localStorage.getItem("access"));
  const username = JSON.parse(localStorage.getItem("username"));

  useEffect(() => {
    dispatch(axiosGetLikesBlog(params));
  }, [Infolike.info]);

  useEffect(() => {
    if (infoGetLikeBlog.status == "fulfilled") {
      const like_registered = infoGetLikeBlog.info.data.likes_details?.filter(
        (data) => {
          return data.user.username === username;
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
    if (Infolike.status !== "pending") {
      if (
        e.target.type === "checkbox" &&
        infoJWTVerify.status === "fulfilled" &&
        access &&
        username
      ) {
        const updatedLike = {
          like: !selectLikeUser,
          slug: params,
          jwt: access,
        };
        dispatch(axiosLikeBlog(updatedLike));
        setSelectLikeUser(!selectLikeUser);
      } else if (infoJWTVerify.status === "fulfilled" && access && username) {
        const updatedLike = {
          like: false,
          slug: params,
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
    } else {
      false;
    }
  }

  return (
    <main>
      <div>
        <input
          type="checkbox"
          name="like"
          checked={selectLikeUser}
          onChange={onChangeLike}
        />

        {infoGetLikeBlog.status === "fulfilled" ? (
          <b> {infoGetLikeBlog.info.data.all_likes} </b>
        ) : (
          false
        )}
      </div>
    </main>
  );
}
