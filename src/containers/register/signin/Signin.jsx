import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import {
  axiosJWTCreate,
  axiosJWTRefresh,
  axiosJWTVerify,
  axiosResetPassword,
  axiosAuthGoogle,
  axiosLoginGoogle,
} from "../../../redux/index";
import { Layout } from "../../../components/index";
import style from "./style_signin.module.css";

export function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infoJWTCreate = useSelector((state) => state.JWTCreate);
  const infoJWTRefresh = useSelector((state) => state.JWTRefresh);
  const infoJWTVerify = useSelector((state) => state.JWTVerify);
  const infoResetPassword = useSelector((state) => state.resetPasword);

  const [dataForm, setDataForm] = useState({});

  const access = JSON.parse(localStorage.getItem("access"));

  // Auth Google
  const infoUrlGoogle = useSelector((state) => state.authGoogle);
  const searchParams = new URLSearchParams(location.search);
  const state = searchParams.get("state");
  const code = searchParams.get("code");

  useEffect(() => {
    if (infoUrlGoogle.url) {
      location.href = infoUrlGoogle.url;
    }

    if (state && code && !infoUrlGoogle.info) {
      const data = {
        state: state,
        code: code,
      };
      dispatch(axiosLoginGoogle(data));
    }
  }, [infoUrlGoogle, state, code]);

  function clickLogin() {
    dispatch(axiosAuthGoogle());
  }

  // Auth normalize
  useEffect(() => {
    if (infoJWTCreate.status === "rejected") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Combinacion de credenciales incorrecta!",
        footer: `<a class=${style.messageError} href="http://localhost:5173/access/signup">Ya te registraste? Crea tu cuenta...</a>`,
      });
    }

    if (
      infoJWTCreate.info &&
      infoJWTCreate.status === "fulfilled" &&
      !infoJWTRefresh.info
    ) {
      dispatch(axiosJWTRefresh({ refresh: infoJWTCreate.info }));
    }

    if (
      infoJWTRefresh.info &&
      (infoJWTVerify.status === "rejected" || !access)
    ) {
      dispatch(axiosJWTVerify({ token: infoJWTRefresh.info.access }));
    }

    if (infoJWTVerify.status === "fulfilled" && access) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Acceso permitido",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  }, [
    infoJWTCreate.status,
    infoJWTCreate.info,
    infoJWTRefresh.info,
    infoJWTVerify.status,
  ]);

  function onChangeData(e) {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitDataForm(e) {
    e.preventDefault();

    if (dataForm.email && dataForm.password) {
      dispatch(axiosJWTCreate(dataForm));
    }
  }

  // Reset Password
  useEffect(() => {
    if (infoResetPassword.status === "fulfilled") {
      Swal.fire({
        icon: "success",
        title: "Proceso completado",
        text: "Se le envio un email a su correo para cambiar su contraseña!",
        footer: `<a class=${style.messageError} href="http://localhost:5173/access/signup">Ya te registraste? Crea tu cuenta...</a>`,
      });
    }
    if (infoResetPassword.status === "rejected") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Esta cuenta existe!",
        footer: `<a class=${style.messageError} href="http://localhost:5173/access/signup">Ya te registraste? Crea tu cuenta...</a>`,
      });
    }
  }, [infoResetPassword.status]);

  function onSubmitResetPassword(e) {
    e.preventDefault();
    const emailResetPassword = e.target.email_reset_password.value;

    if (emailResetPassword) {
      dispatch(axiosResetPassword({ email: emailResetPassword }));
    }
  }

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Iniciar sesion </title>
      </Helmet>

      <Layout>
        <section className={style.containerLogin}>
          <h1> Iniciar sesion </h1>
          <form className={style.containerInputs} onSubmit={onSubmitDataForm}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo"
              onChange={onChangeData}
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              placeholder="Contraseña"
              onChange={onChangeData}
              required
            />
            <button type="submit"> Acceder </button>
            
          </form>
        </section>

        <button onClick={clickLogin}> With google </button>

        <div>
          <form onSubmit={onSubmitResetPassword}>
            <input
              type="email"
              id="email_reset_password"
              name="email_reset_password"
              placeholder="correo"
              required
            />
            <button type="submit"> Enviar </button>
          </form>
        </div>
      </Layout>
    </main>
  );
}
