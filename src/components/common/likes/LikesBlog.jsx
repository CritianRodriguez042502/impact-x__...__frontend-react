// Import React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

// Import icons of React-icons
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
//---------------------------------------------------
import style from "./style_likes.module.css";

export function LikesBlog({ params }) {
  const dispatch = useDispatch();

  const infoJWTVerify = useSelector((state) => state.JWTVerify);
  const infoGetLikeBlog = useSelector((state) => state.getLikesBlog);
  const Infolike = useSelector((state) => state.likeBlog);

  const [selectLikeUser, setSelectLikeUser] = useState({
    icon: <BiLike />,
    selected: false,
  });

  // Style loader like
  const [overlay, setOverlay] = useState("none");
  const [visiblityLike, setVisibilityLike] = useState("initial");

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
      if (!like_registered.length) {
        setSelectLikeUser({
          icon: <BiLike />,
          selected: false,
        });
      } else {
        if (like_registered[0].selected === true) {
          setSelectLikeUser({
            icon: <BiSolidLike />,
            selected: true,
          });
        } else {
          setSelectLikeUser({
            icon: <BiLike />,
            selected: false,
          });
        }
      }
    }
  }, [infoGetLikeBlog.info]);

  useEffect(() => {
    setTimeout(() => {
      setOverlay("none");
      setVisibilityLike("initial");
    }, 3000);
  }, [overlay]);

  // Function like of dislike
  function onChangeLike() {
    // if user have register
    if (infoJWTVerify.status === "fulfilled" && access && username) {
      if (!selectLikeUser.selected) {
        import("../../../redux/index").then((modules) => {
          dispatch(
            modules.axiosLikeBlog({
              like: true,
              slug: params,
              jwt: access,
            })
          );
          setOverlay("inline-block");
          setVisibilityLike("none");
          setSelectLikeUser({
            icon: <BiSolidLike />,
            selected: true,
          });
        });
      } else {
        import("../../../redux/index").then((modules) => {
          setOverlay("inline-block");
          setVisibilityLike("none");
          dispatch(
            modules.axiosLikeBlog({
              like: false,
              slug: params,
              jwt: access,
            })
          );
        });
        setSelectLikeUser({
          icon: <BiLike />,
          selected: false,
        });
      }
    // If not
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Tienes que estar registrado!",
        footer: `<a class=${style.messageError} href="https://impact-x.onrender.com/#/access/signin"> Ingresa a tu cuenta </a>`,
      });
    }
  }

  return (
    <main>
      <div>
        <span style={{ display: overlay }} className={style.loader}></span>
        {infoGetLikeBlog.status === "fulfilled" ? (
          <span>
            <span
              style={{ display: visiblityLike }}
              className={style.mainButton}
              onClick={onChangeLike}
            >
              {selectLikeUser.icon}
            </span>
            <span className={style.counter}>
              {infoGetLikeBlog.info.data.all_likes}
            </span>
          </span>
        ) : (
          false
        )}
      </div>
    </main>
  );
}
