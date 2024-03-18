import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Layout } from "../../../components/index";
import style from "./style_signup.module.css";

export function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const infoAuthGoogle = useSelector((state) => state.authGoogle);
  const infoCreateUser = useSelector((data) => data.createUser);
  const infoResendEmail = useSelector((data) => data.resendEmail);

  const [dataUser, setDataUser] = useState({});
  const [sendEmail, setSendEmail] = useState("none");

  const [dataEmail, setDataEmail] = useState("");

  const infoJWTVerify = useSelector((state) => state.JWTVerify);
  const access = JSON.parse(localStorage.getItem("access"));

  // Auth with google -------
  useEffect(() => {
    if (infoAuthGoogle.url) {
      location.href = infoAuthGoogle.url;
    }
  }, [infoAuthGoogle.url]);

  function authGoogle() {
    import("../../../redux/index").then((modules) => {
      dispatch(modules.axiosAuthGoogle());
    });
  }

  // Auth normalize -------
  useEffect(() => {
    if (infoJWTVerify.status === "fulfilled" && access) {
      navigate("/dashboard");
    }

    if (infoCreateUser.status === "fulfilled") {
      setSendEmail("initial");
      Swal.fire({
        icon: "success",
        title: "Registro completado!",
        text: "Se le a enviado un email a su correo para la activacion de su cuenta",
      });
    }

    if (infoCreateUser.status === "rejected") {
      const listMessages = [];
      const faults = Object.values(infoCreateUser.info);
      for (let i = 0; i < faults.length; i++) {
        listMessages.push(faults[i]);
      }
      Swal.fire("Opss?", `${listMessages[0]}`, "warning");
    }
  }, [infoCreateUser.status, infoJWTVerify.status]);

  // Send email -------
  useEffect(() => {
    if (infoResendEmail.status === "fulfilled") {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Correo reenviado",
        showConfirmButton: false,
        timer: 2000,
      });
    }

    if (infoResendEmail.status === "rejected") {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Su cuenta ya se encuentra activa",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [infoResendEmail.status]);

  function OnchangeData(e) {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitDataUser(e) {
    e.preventDefault();

    const firstName = e.target.first_name.value;
    const lastName = e.target.last_name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const rePassword = e.target.re_password.value;

    setDataEmail(email);

    if (firstName && lastName && username && email && password && rePassword) {
      if (password === rePassword) {
        if (password.length >= 8) {
          Swal.showLoading();
          import("../../../redux/index").then((modules) => {
            dispatch(modules.axiosCreateUser(dataUser));
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Contraseña demasiado corta",
          });
        }
      } else {
        Swal.fire({
          icon: "info",
          title: "Oops...",
          text: "Las contraseñas no coinciden",
        });
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "Estas tratando de enviar datos vacios",
      });
    }
  }

  function onClickSendEmail() {
    Swal.showLoading()
    import("../../../redux/index").then((modules) => {
      dispatch(modules.axiosResendEmail({ email: dataEmail }));
    });
  }

  // Activation of google deactivate
  // <button onClick={authGoogle}> Acceder con google </button>

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> IMPACT X | Registro </title>
      </Helmet>

      <Layout>
        <section style={{ display: sendEmail }}>
          <div className={style.containerResendEmail}>
            <p className={style.text}> Volver a enviar correo </p>
            <button onClick={onClickSendEmail}>Reenviar correo</button>
          </div>
        </section>

        <section className={style.container}>
          <h1> Registro </h1>
          <form className={style.containerInputs} onSubmit={onSubmitDataUser}>
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
        </section>
      </Layout>
    </main>
  );
}
