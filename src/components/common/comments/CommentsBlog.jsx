import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { axiosGetCommentsBlog, axiosCommentsBlog, axiosDetailedCommentsBlog } from "../../../redux/index";
import style from "./style_comments.module.css";

export function CommentsBlog({ params }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paramsUrl = useParams()

  const infoGetComments = useSelector((state) => state.getComments);
  const infoComments = useSelector((state) => state.commentsBlog);
  const infoDetailedComment = useSelector(state => state.detailedCommentBlog)

  let [newComment, setNewComment] = useState("");
  const [commentDetail, setCommentDetail] = useState("");

  const [visibility, setVisibility] = useState("none");
  const [commentUpdateVisibility, setCommentUpdateVisibility] =
    useState("none");

  const access = JSON.parse(localStorage.getItem("access"));
  const username = JSON.parse(localStorage.getItem("username"));

  const unique_brand = new URLSearchParams(location.search).get("unique_brand");

  // useEffect get all comments
  useEffect(() => {
    dispatch(axiosGetCommentsBlog(params));
  }, [params, infoComments.info]);

  // useEffect to get the detailed comment of the user state
  useEffect(() => {
    if (unique_brand) {
      dispatch(
        axiosDetailedCommentsBlog({
          method: "get",
          jwt: access,
          unique_brand: unique_brand,
        })
      );
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
      dispatch(axiosCommentsBlog({
        method : "post",
        jwt : access,
        slug : paramsUrl.slug,
        content : newComment 
      }))
      setNewComment("")
    } else {
      alert("No puedes enviar datos vacios")
    }
  }

  // functions of update comment
  function onChangeUpdateComment(e) {
    setCommentDetail(e.target.value);
  }

  function onSubmitUpdateComment(e) {
    e.preventDefault();
    
    if (commentDetail) {
      dispatch(axiosCommentsBlog({
        method : "patch",
        jwt : access,
        unique_key : unique_brand,
        content : commentDetail
      }))
      setCommentUpdateVisibility("none");
      navigate(
        `/blogs/blog_detail/${paramsUrl.slug}`
      );
    } else {
      alert("No puedes enviar datos vacios")
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
            <div key={data.id}>
              <li> {data.comments} </li>
              <button
                onClick={(e) => {
                  dispatch(axiosCommentsBlog({
                    method : "delete",
                    jwt : access,
                    unique_key : data.unique_brand
                  }))
                }}
              >
                Eliminar
              </button>

              <button
                onClick={(e) => {
                  setCommentUpdateVisibility("initial");
                  navigate(
                    `/blogs/blog_detail/doctoraslugnaruto?unique_brand=${data.unique_brand}`
                  );
                }}
              >
                Modificar
              </button>
            </div>
          );
        })}

        {otherComments?.map(function (data) {
          return <li key={data.id}> {data.comments} </li>;
        })}
      </div>
    );
  }

  return (
    <main>
      <div>
        <b onClick={onClickVisibility}> Comentarios </b>
      </div>

      <article
        style={{ display: visibility }}
        className={style.containerComments}
      >
        <section className={style.topSection}>
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
          <div>
            <p onClick={onClickWithoutVisibility}> Xd </p>
          </div>
        </section>

        <section className={style.createComment}>
          <form onSubmit={onSubmitNewComment}>
            <input
              type="text"
              name="new_comment"
              id="new_comment"
              value={newComment}
              onChange={onChangeNewComment}
              placeholder="nuevo comentario"
              required
            />
            <button type="sumbit"> Enviar </button>
          </form>
        </section>

        <section>
          {infoGetComments.status === "fulfilled" ? (
            filterComments()
          ) : (
            false
          )}
        </section>

        <section
          style={{ display: commentUpdateVisibility }}
          className={style.commentsUpdateVisibility}
        >
          <button onClick={onClickWithoutCommentUpdateVisibilit}> Cerrar </button>
          <div className={style.inputUpdateComment}>
            <form onSubmit={onSubmitUpdateComment}>
            <div>
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
                  <button type="submit"> Actualizar </button>
                </div>

            </form>
          </div>
        </section>
      </article>
    </main>
  );
}
