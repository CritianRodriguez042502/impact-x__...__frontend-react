import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import style from "./style_likes.module.css";

export function LikesBlog({ params }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infoJWTVerify = useSelector((state) => state.JWTVerify);
  const infoGetLikeBlog = useSelector((state) => state.getLikesBlog);
  const Infolike = useSelector((state) => state.likeBlog);
 
  const [selectLikeUser, setSelectLikeUser] = useState(false);

  // Style loader like
  const [overlay, setOverlay] = useState("none")
  const [visiblityLike, setVisibilityLike] = useState("initial")

  const access = JSON.parse(localStorage.getItem("access"));
  const username = JSON.parse(localStorage.getItem("username"));

  useEffect(() => {
    import("../../../redux/index").then((modules) => {
      dispatch(modules.axiosGetLikesBlog(params));
    });
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

  useEffect(() => {
    setTimeout(() => {
      setOverlay("none")
      setVisibilityLike("initial")
    },3000)
  },[overlay])

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
        import("../../../redux/index").then((modules) => {
          dispatch(modules.axiosLikeBlog(updatedLike));
          setOverlay("inline-block")
          setVisibilityLike("none")
        });
        setSelectLikeUser(!selectLikeUser);
      } else if (infoJWTVerify.status === "fulfilled" && access && username) {
        const updatedLike = {
          like: false,
          slug: params,
          jwt: access,
        };
        import("../../../redux/index").then((modules) => {
          setOverlay("inline-block")
          setVisibilityLike("none")
          dispatch(modules.axiosLikeBlog(updatedLike));
        });
        setSelectLikeUser(false);
      } else {
        if (infoJWTVerify.status === "fulfilled" && access) {
          e.target.checked = false;
          navigate("/dashboard");
        } else {
          e.target.checked = false;
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Tienes que estar registrado!",
            footer: `<a class=${style.messageError} href="https://impact-x.onrender.com/#/access/signin"> Ingresa a tu cuenta </a>`,
          });
        }
      }
    }
  }

  return (
    <main>
      <div>
        <span style={{display : overlay}} className={style.loader}></span>
        <input style={{display : visiblityLike}}
          className={style.mainButton}
          type="checkbox"
          name="like"
          checked={selectLikeUser}
          onChange={onChangeLike}
        />

        {infoGetLikeBlog.status === "fulfilled" ? (
          <b className={style.counter}>{infoGetLikeBlog.info.data.all_likes}</b>
        ) : (
          false
        )}
      </div>
    </main>
  );
}
