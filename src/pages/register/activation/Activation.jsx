import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import style from "./style_activation.module.css";

export function Activation() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const infoActivation = useSelector((state) => state.activate);

  const [showLoadingAnimation, setShowLoadingAnimation] = useState("none");

  useEffect(() => {
    import("../../../redux/index").then((modules) => {
      dispatch(
        modules.axiosActivationUser({ uid: params.uid, token: params.token })
      );
    });
  }, []);

  useEffect(() => {
    if (infoActivation.status === "pending") {
      setShowLoadingAnimation("initial");
    }
    if (infoActivation.status === "fulfilled") {
      setShowLoadingAnimation("none");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Proceso completa",
        text: "Su cuenta a sido activada correctamente",
        showConfirmButton: false,
        timer: 3000,
      });
      setTimeout(() => {
        navigate("/access/signin");
      }, 4000);
    }
    if (infoActivation.status === "rejected") {
      setShowLoadingAnimation("none");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Opss...",
        text: "Parece que algo salio mal",
        showConfirmButton: false,
        timer: 3000,
      });

      setTimeout(() => {
        navigate("/access/signup");
      }, 4000);
    }
  }, [infoActivation.status]);

  return (
    <main className={style.container}>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> IMPACT X | Activacion de cuenta </title>
      </Helmet>

      <section className={style.containerActivation}>
        <h1> Activacion de cuenta </h1>

        <div style={{ display: showLoadingAnimation }}>
          <span className={style.loader}> </span>
        </div>
      </section>
    </main>
  );
}
