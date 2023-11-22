import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import Swal from "sweetalert2";
import personDefault from "../../../assets/dashboard/img_person_default.png";
import style from "./style_comments.module.css";

export function CommentsBlog({ params }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paramsUrl = useParams();
  const locationReact = useLocation();

  const infoJWTVerify = useSelector((state) => state.JWTVerify);
  const infoGetComments = useSelector((state) => state.getComments);
  const infoComments = useSelector((state) => state.commentsBlog);
  const infoDetailedComment = useSelector((state) => state.detailedCommentBlog);

  const [newComment, setNewComment] = useState("");
  const [commentDetail, setCommentDetail] = useState("");

  const [visibility, setVisibility] = useState("none");
  const [commentUpdateVisibility, setCommentUpdateVisibility] =
    useState("none");
  const [blogModificationVisibility, setBlogModificationVisibility] =
    useState("1");

  const access = JSON.parse(localStorage.getItem("access"));
  const username = JSON.parse(localStorage.getItem("username"));

  const unique_brand = locationReact.search;

  const [comentUpdateOpacity, setCommentUpdateOpacity] = useState("0");

  // useEffect get all comments
  useEffect(() => {
    import("../../../redux/index").then((modules) => {
      dispatch(modules.axiosGetCommentsBlog(params));
    });
  }, [params, infoComments.info]);

  // useEffect to get the detailed comment of the user state
  useEffect(() => {
    if (unique_brand) {
      import("../../../redux/index").then((modules) => {
        dispatch(
          modules.axiosDetailedCommentsBlog({
            method: "get",
            jwt: access,
            unique_brand: unique_brand.split("=")[1],
          })
        );
      });
    }
  }, [unique_brand]);

  // useEffect to store the detailed comment in a local state
  useEffect(() => {
    if (infoDetailedComment.info) {
      setCommentDetail(infoDetailedComment.info.comment);
    }
  }, [infoDetailedComment.info]);

  // functions of new comment
  function onChangeNewComment(e) {
    setNewComment(e.target.value);
  }

  function onSubmitNewComment(e) {
    e.preventDefault();

    if (newComment) {
      if (infoJWTVerify.status === "fulfilled" && access && username) {
        setBlogModificationVisibility("0");
        import("../../../redux/index").then((modules) => {
          dispatch(
            modules.axiosCommentsBlog({
              method: "post",
              jwt: access,
              slug: paramsUrl.slug,
              content: newComment,
            })
          );
        });
        setNewComment("");
      } else {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Tienes que estar registrado!",
          footer: `<a class=${style.messageError} href="https://impact-x.onrender.com/#/access/signin"> Ingresa a tu cuenta </a>`,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No puedes enviar datos vacios!",
      });
    }
  }

  function blogAppearanceAfterChange() {
    setTimeout(() => {
      setBlogModificationVisibility("1");
    }, 350);
  }

  // functions of update comment
  setTimeout(() => {
    setCommentUpdateOpacity("1");
  }, 350);

  function onChangeUpdateComment(e) {
    setCommentDetail(e.target.value);
  }

  function onSubmitUpdateComment(e) {
    e.preventDefault();

    if (commentDetail) {
      setBlogModificationVisibility("0");
      import("../../../redux/index").then((modules) => {
        dispatch(
          modules.axiosCommentsBlog({
            method: "patch",
            jwt: access,
            unique_key: unique_brand.split("=")[1],
            content: commentDetail,
          })
        );
      });
      setCommentUpdateVisibility("none");
      navigate(`/blogs/blog_detail/${paramsUrl.slug}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No puedes enviar datos vacios!",
      });
    }
  }

  // functions of effects
  function onClickVisibility(e) {
    setVisibility("initial");
  }

  function onClickWithoutVisibility(e) {
    setVisibility("none");
  }

  function onClickWithoutCommentUpdateVisibilit(e) {
    setCommentUpdateVisibility("none");
  }

  // Filter comments blogs by user
  function filterComments() {
    blogAppearanceAfterChange();
    const userComments = infoGetComments.info.results.data?.filter((index) => {
      return index.user.username === username;
    });
    const otherComments = infoGetComments.info.results.data?.filter((index) => {
      return index.user.username !== username;
    });

    return (
      <div>
        {userComments?.map(function (data) {
          return (
            <div className={style.containerComment} key={data.id}>
              <div className={style.userImage}>
                {!data.user.img_url ? (
                  <img src={personDefault} alt="img" />
                ) : (
                  <img src={data.user.img_url} alt="img" />
                )}
              </div>

              <div className={style.commentContent}>
                <h2 className={style.commentUsername}>{data.user.username}</h2>
                <p className={style.commentText}> {data.comments} </p>
                <hr style={{ border: "2px solid gray" }} />
                <div className={style.updateAndDeleteButtonContainer}>
                  <aside>
                    <button
                      className={style.buttonUpdate}
                      onClick={(e) => {
                        setCommentUpdateVisibility("initial");
                        navigate(
                          `/blogs/blog_detail/${paramsUrl.slug}?unique_brand=${data.unique_brand}`
                        );
                        setCommentUpdateOpacity("0");
                      }}
                    >
                      Modificar
                    </button>
                    <button
                      className={style.buttonDelete}
                      onClick={(e) => {
                        setBlogModificationVisibility("0");
                        import("../../../redux/index").then((modules) => {
                          dispatch(
                            modules.axiosCommentsBlog({
                              method: "delete",
                              jwt: access,
                              unique_key: data.unique_brand,
                            })
                          );
                        });
                      }}
                    >
                      Eliminar
                    </button>
                  </aside>

                  <aside>
                    <b className={style.commentDate}> {data.creation} </b>
                  </aside>
                </div>
              </div>
            </div>
          );
        })}

        {otherComments?.map(function (data) {
          return (
            <div className={style.containerComment} key={data.id}>
              <div className={style.userImage}>
                {!data.user.img_url ? (
                  <img src={personDefault} alt="img" />
                ) : (
                  <img src={data.user.img_url} alt="img" />
                )}
              </div>
              <div className={style.commentContent}>
                <h2 className={style.commentUsername}>{data.user.username}</h2>
                <p className={style.commentText}> {data.comments} </p>
                <hr style={{ border: "2px solid gray" }} />
                <b className={style.commentDate}> {data.creation} </b>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  // ---------------------------------------------------

  return (
    <main>
      <div>
        <b className={style.mainButton} onClick={onClickVisibility}>
          Comentarios
        </b>
      </div>

      <article style={{ display: visibility }} className={style.containerFixed}>
        <section>
          <div className={style.topSection}>
            {infoGetComments.status === "fulfilled" ? (
              <div>
                {infoGetComments.info.results.all === 1 ? (
                  <p> 1 comentario </p>
                ) : infoGetComments.info.results.all === 0 ? (
                  <p> No hay comentarios </p>
                ) : (
                  <p> {infoGetComments.info.results.all} comentarios </p>
                )}
              </div>
            ) : (
              false
            )}
            <h1 onClick={onClickWithoutVisibility}>
              <AiOutlineClose />
            </h1>
          </div>
        </section>

        <section>
          <form
            className={style.containerInputCreateComment}
            onSubmit={onSubmitNewComment}
          >
            <input
              type="text"
              name="new_comment"
              id="new_comment"
              value={newComment}
              onChange={onChangeNewComment}
              placeholder="nuevo comentario"
              required
            />
            <button className={style.buttonCreateNewComment} type="sumbit">
              Crear
            </button>
          </form>
        </section>

        <section style={{ opacity: blogModificationVisibility }}>
          {infoGetComments.status === "fulfilled" ? filterComments() : false}
        </section>

        <section
          style={{ display: commentUpdateVisibility }}
          className={style.commentsUpdateVisibility}
        >
          <aside
            style={{ opacity: comentUpdateOpacity }}
            className={style.containerUpdateComment}
          >
            <form className={style.containerFormUpdateComment} onSubmit={onSubmitUpdateComment}>
              <textarea
                onChange={onChangeUpdateComment}
                value={commentDetail}
                className={style.textTarea}
                name="updateComment"
                id="updateComment"
                cols="30"
                rows="10"
                required
              ></textarea>
              <hr />

              <div className={style.containerFormButtonsUpdateComments}>
                <button className={style.buttonFormUpdate} type="submit">
                  Actualizar
                </button>
                <button
                  onClick={onClickWithoutCommentUpdateVisibilit}
                  className={style.buttonFormDiscard}
                  type="button"
                >
                  Descartar
                </button>
              </div>
            </form>
          </aside>
        </section>
      </article>
    </main>
  );
}
