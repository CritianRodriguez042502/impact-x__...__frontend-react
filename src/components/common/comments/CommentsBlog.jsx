import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { axiosGetCommentsBlog, axiosCommentsBlog } from "../../../redux/index";
import style from "./style_comments.module.css";

export function CommentsBlog({ params }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infoGetComments = useSelector((state) => state.getComments);

  const [newComment, setNewComment] = useState("");
  const [visibility, setVisibility] = useState("none");
  const [commentUpdateVisibility, setCommentUpdateVisibility] =
    useState("none");

  const access = JSON.parse(localStorage.getItem("access"));
  const username = JSON.parse(localStorage.getItem("username"));

  useEffect(() => {
    dispatch(axiosGetCommentsBlog(params));
  }, [params]);

  function onChangeNewComment(e) {
    setNewComment(e.target.value);
  }

  function onSubmitNewComment(e) {
    e.preventDefault();
    console.log(newComment);
  }

  function onClickVisibility(e) {
    setVisibility("initial");
  }

  function onClickWithoutVisibility(e) {
    setVisibility("none");
  }

  function onClickWithoutCommentUpdateVisibilit(e) {
    setCommentUpdateVisibility("none");
    navigate(`/blogs/blog_detail/doctoraslugnaruto`);
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
                  console.log("hola");
                }}
              >
                Eliminar
              </button>
              <button
                onClick={(e) => {
                  setCommentUpdateVisibility("initial");
                  dispatch(axiosCommentsBlog({
                    jwt : access,
                    unique_key : "doctoraquien-es-ustedpkattfcfsaozgjzmbviwyjitakabkzbsmvd50"
                  }));
                  navigate(
                    `/blogs/blog_detail/doctoraslugnaruto?slug=${data.unique_brand}`
                  );
                }}
              >
                Actualizar
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
            <p> Error </p>
          )}
        </section>

        <section
          style={{ display: commentUpdateVisibility }}
          className={style.commentsUpdateVisibility}
        >
          <button onClick={onClickWithoutCommentUpdateVisibilit}>Cerrar</button>
          <div className={style.inputUpdateComment}>
            <textarea
              className={style.textTarea}
              name="updateComment"
              id="updateComment"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </section>
      </article>
    </main>
  );
}
