import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  axiosCreateUser,
  axiosResendEmail,
  axiosAuthGoogle,
} from "../../../redux/index";
import { Layout } from "../../../components/index";


// Falta mirar como puedo traer los mensajes de error que envia djoser

export function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const infoAuthGoogle = useSelector((state) => state.authGoogle);
  const infoCreateUser = useSelector((data) => data.createUser);
  const infoResendEmail = useSelector((data) => data.resendEmail);

  const [loader, setLoader] = useState("none");
  const [dataUser, setDataUser] = useState({});
  const [sendEmail, setSendEmail] = useState("none");

  // Auth with google
  useEffect(() => {
    if (infoAuthGoogle.url) {
      location.href = infoAuthGoogle.url;
    }
  }, [infoAuthGoogle.url]);

  // Auth normalize
  useEffect(() => {
    if (infoCreateUser.status === "pending") {
      setLoader("initial");
    }

    if (infoResendEmail.status === "pending") {
      setLoader("initial");
    }

    if (infoCreateUser.status === "fulfilled") {
      setLoader("none");
      setSendEmail("initial");
    } if (infoCreateUser.status === "rejected") {
      setLoader("none");
      alert(" Hubo algun error al intentar crear el usuario");
    }

    if (infoResendEmail.status === "fulfilled") {
      setLoader("none");
      alert("Correo reenviado");
    } if (infoResendEmail.status === "rejected") {
      setLoader("none");
      alert("Ya su cuenta se encuentra activa");
    }

  }, [infoCreateUser.status, infoResendEmail.status]);

  function OnchangeData(e) {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitDataUser(e) {
    e.preventDefault();

    const firstNme = e.target.first_name.value;
    const lastName = e.target.last_name.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const rePassword = e.target.re_password.value;

    if (firstNme && lastName && username && password && rePassword) {
      if (password === rePassword) {
        if (password.length >= 8) {
          dispatch(axiosCreateUser(dataUser));
        } else {
          alert("Contraseña demasiado corta");
        }
      } else {
        alert("Contraseñas no coinciden");
      }
    } else {
      alert("Esta tratando de enviar un dato vacio");
    }
  }


  function onClickSendEmail (e) {
    console.log(e)
  }

  // Falta la parte de poder reenviar correos

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Registrarse </title>
      </Helmet>

      <Layout>
        <h1> Signup </h1>
        <form onSubmit={onSubmitDataUser}>
          <input
            type="text"
            id="first_name"
            name="first_name"
            onChange={OnchangeData}
            placeholder="Nombre"
            required
          />

          <input
            type="text"
            id="last_name"
            name="last_name"
            onChange={OnchangeData}
            placeholder="Apellido"
            required
          />

          <input
            type="text"
            id="username"
            name="username"
            onChange={OnchangeData}
            placeholder="Nombre de usuario"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            onChange={OnchangeData}
            placeholder="Correo"
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            onChange={OnchangeData}
            placeholder="Contraseña"
            required
          />

          <input
            type="password"
            id="re_password"
            name="re_password"
            onChange={OnchangeData}
            placeholder="Repetir contraseña"
            required
          />

          <button type="submit"> Registrarse </button>
        </form>

        <div style={{ display: sendEmail }}>
          <p> Volver a enviar correo </p>
          <button onClick={onClickSendEmail}> Reenviar correo </button>
        </div>

        <div style={{ display: loader }}>
          <h1> Cargando... </h1>
        </div>
      </Layout>
    </main>
  );
}
