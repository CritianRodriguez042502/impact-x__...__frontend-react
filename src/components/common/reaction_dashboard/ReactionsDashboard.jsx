import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosGetUserBlogReactions } from "../../../redux/index";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import style from "./style_reaction_dashboard.module.css";

export function GetReactionDashboard({ params }) {
  const dispatch = useDispatch();
  const access = JSON.parse(localStorage.getItem("access"));

  const infoGetUserBlogReactions = useSelector(
    (state) => state.getUserBlogReactions
  );
  const [visibilityComments, setVisibilityComments] = useState("none");
  const [visibilityLikes, setVisibilityLikes] = useState("none");

  useEffect(() => {
    dispatch(
      axiosGetUserBlogReactions({
        jwt: access,
        slug: params,
      })
    );
  }, []);

  function likes(e) {
    const selectedLikes = infoGetUserBlogReactions.info.likes?.filter(
      (index) => {
        return index.selected === true;
      }
    );
    return (
      <div>
        {selectedLikes.length !== 0 ? (
          selectedLikes?.map(function (data) {
            return (
              <div style={{ display: "flex" }} key={data.id}>
                <div>
                  {data.user.img === null ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/17/17004.png"
                      alt="img"
                      width={70}
                    />
                  ) : (
                    <img
                      src={`http://localhost:8000${data.user.img}`}
                      alt="img"
                      width={70}
                    />
                  )}
                </div>
                <div>
                  <p> Like {data.user.username}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p> No hay likes</p>
        )}
      </div>
    );
  }

  function visibilityReactionsComments(e) {
    setVisibilityComments("initial");
    setVisibilityLikes("none");
  }

  function whitoutvisibilityComments(e) {
    setVisibilityComments("none");
  }

  function visibilityReactionsLikes(e) {
    setVisibilityLikes("initial");
    setVisibilityComments("none");
  }

  function whitoutvisibilityLikes(e) {
    setVisibilityLikes("none");
  }

  return (
    <main>
      <div className={style.containerButtonReactions}>
        <p
          className={style.buttonReactions}
          onClick={visibilityReactionsComments}
        >
          Likes y comentarios
        </p>
      </div>

      <section
        className={style.containerFixed}
        style={{ display: visibilityComments }}
      >
        <div className={style.bottonWithoutVisibilityComments}>
          <b onClick={whitoutvisibilityComments}>
            <AiOutlineClose />
          </b>
        </div>

        <div className={style.moveToLikes}>
          {infoGetUserBlogReactions.status === "fulfilled" &&
          infoGetUserBlogReactions.info.comments.length === 1 ? (
            <b> 1 Comentario </b>
          ) : infoGetUserBlogReactions.status === "fulfilled" &&
            infoGetUserBlogReactions.info.comments.length >= 1 ? (
            <b> {infoGetUserBlogReactions.info.comments.length} Comentarios </b>
          ) : (
            <b> Sin comentarios </b>
          )}

          <h1
            className={style.buttonToMoveToLikes}
            onClick={visibilityReactionsLikes}
          >
            <AiOutlineDoubleRight />
          </h1>
        </div>

        <div>
          {infoGetUserBlogReactions.status === "fulfilled" &&
          infoGetUserBlogReactions.info.comments.length !== 0 ? (
            infoGetUserBlogReactions.info.comments?.map((data) => {
              return (
                <div className={style.containerComment} key={data.id}>
                  <div className={style.userImage}>
                    <img
                      src={`http://localhost:8000${data.user.img}`}
                      alt="img"
                      width={70}
                    />
                  </div>
                  <div className={style.commentContent}>
                    <div>
                      <h2> {data.user.username} </h2>
                      <div>
                        <p className={style.commentText}> {data.comments} </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : infoGetUserBlogReactions.status === "fulfilled" &&
            infoGetUserBlogReactions.info.comments.length === 0 ? (
            <p> No hay comentarios </p>
          ) : (
            <p> Hubo algún error </p>
          )}
        </div>
      </section>

      <section>
        <div
          style={{ display: visibilityLikes }}
          className={style.containerFixed}
        >
          <div className={style.moveToComents}>
            <div className={style.bottonWithoutVisibilityComments}>
              <b onClick={whitoutvisibilityLikes}>
                <AiOutlineClose />
              </b>
            </div>

            <h1
              className={style.buttonToMoveToComment}
              onClick={visibilityReactionsComments}
            >
              <AiOutlineDoubleLeft />
            </h1>
          </div>

          {infoGetUserBlogReactions.status === "fulfilled" ? likes() : false}
        </div>
      </section>
    </main>
  );
}
