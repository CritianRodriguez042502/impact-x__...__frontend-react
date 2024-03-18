import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import personDefault from "../../../assets/dashboard/img_person_default.png"
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
    import("../../../redux/index").then((modules) => {
      dispatch(
        modules.axiosGetUserBlogReactions({
          jwt: access,
          slug: params,
        })
      );
    });
  }, []);

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
          <span style={{ margin: "5px" }}>
            <BsFillChatSquareTextFill />
          </span>
          Likes y comentarios
          <span style={{ margin: "5px" }}>
            <BsFillChatSquareTextFill />
          </span>
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
          <div>
            {infoGetUserBlogReactions.status === "fulfilled" &&
            infoGetUserBlogReactions.info.comments.length === 1 ? (
              <b> 1 Comentario </b>
            ) : infoGetUserBlogReactions.status === "fulfilled" &&
              infoGetUserBlogReactions.info.comments.length >= 1 ? (
              <b>{infoGetUserBlogReactions.info.comments.length} Comentarios</b>
            ) : (
              <b> Sin comentarios </b>
            )}
          </div>

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
                    {!data.user.img_url ? (
                      <img
                        src={personDefault}
                        alt="img"
                       
                      />
                    ) : (
                      <img
                        src={data.user.img_url}
                        alt="img"
                        
                      />
                    )}
                  </div>

                  <div className={style.commentContent}>
                    <h2 className={style.commentUsername}>
                      {data.user.username}
                    </h2>
                    <p className={style.commentText}> {data.comments} </p>
                    <hr style={{ border: "2px solid gray" }} />
                    <b className={style.commentDate}> {data.creation} </b>
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

      <section
        style={{ display: visibilityLikes }}
        className={style.containerFixed}
      >
        <div className={style.bottonWithoutVisibilityComments}>
          <b onClick={whitoutvisibilityLikes}>
            <AiOutlineClose />
          </b>
        </div>

        <div className={style.moveToComents}>
          <div>
            {infoGetUserBlogReactions.status === "fulfilled" &&
            infoGetUserBlogReactions.info.likes.length === 1 ? (
              <b> 1 like </b>
            ) : infoGetUserBlogReactions.status === "fulfilled" &&
              infoGetUserBlogReactions.info.likes.length >= 1 ? (
              <b> {infoGetUserBlogReactions.info.likes.length} likes </b>
            ) : (
              <b> Sin Likes </b>
            )}
          </div>

          <h1
            className={style.buttonToMoveToComment}
            onClick={visibilityReactionsComments}
          >
            <AiOutlineDoubleLeft />
          </h1>
        </div>

        <div className={style.likesContainer}>
          {infoGetUserBlogReactions.status === "fulfilled" &&
          infoGetUserBlogReactions.info.likes.length > 0 ? (
            <div>
              <ul className={style.likesList}>
                {infoGetUserBlogReactions.info.likes.map((like) => (
                  <li key={like.id} className={style.likeItem}>
                    <div className={style.likeUser}>
                      {!like.user.img_url ? (
                        <img
                          src={personDefault}
                          alt="img"
                          width={70}
                        />
                      ) : (
                        <img
                          src={like.user.img_url}
                          alt="img"
                          width={70}
                        />
                      )}
                      <h2>{like.user.username}</h2>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No hay likes.</p>
          )}
        </div>
      </section>
    </main>
  );
}
