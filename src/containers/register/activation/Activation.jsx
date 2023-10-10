import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { axiosActivationUser } from "../../../redux/index";

export function Activation() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const infoActivation = useSelector((state) => state.activate);

  const [loader, setLoader] = useState("none");

  useEffect(() => {
    dispatch(
      axiosActivationUser({
        uid: params.uid,
        token: params.token,
      })
    );
  }, []);

  useEffect(() => {
    if (infoActivation.status === "pending") {
      setLoader("initial");
    }
    if (infoActivation.status === "fulfilled") {
      setLoader("none");
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
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Activacion </title>
      </Helmet>

      <div>
        <h1> Activation </h1>

        <div style={{ display: loader }}>
          <h1> Cargando... </h1>
        </div>
      </div>
    </main>
  );
}
