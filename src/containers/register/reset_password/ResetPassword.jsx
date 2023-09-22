import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosResetPasswordConfirm } from "../../../redux/index";

export function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const infoResetPassword = useSelector((state) => state.resetPasswordConfirm);

  const [passwords, setPasswords] = useState({});

  useEffect(() => {
    if (infoResetPassword.status === "fulfilled") {
      alert("Contraseña cambiada correctamente");
      navigate("/access/signin");
    }
    if (infoResetPassword.status === "rejected") {
      const infoError = infoResetPassword.info.new_password
      for (let i = 0; i < infoError.length; i++){
        alert(infoError[i])
      }
    }
  }, [infoResetPassword.status]);


  function onChangeResetPassword(e) {
    setPasswords({
      uid: params.uid,
      token: params.token,
      ...passwords,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitResetPassword(e) {
    e.preventDefault();

    if (passwords.new_password && passwords.re_new_password) {
      if (passwords.new_password === passwords.re_new_password) {
        dispatch(axiosResetPasswordConfirm(passwords));
      } else {
        alert("Las contraseñas no coinciden");
      }
    } else {
      alert("Estas tratando de enviar datos vacios");
    }
  }

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Cambiar contraseña </title>
      </Helmet>

      <div>
        <h1> Cambiar contraseña</h1>
        <form onSubmit={onSubmitResetPassword}>
          <input
            type="password"
            id="new_password"
            name="new_password"
            placeholder="Nueva contraseña"
            onChange={onChangeResetPassword}
            required
          />
          <input
            type="password"
            id="re_new_password"
            name="re_new_password"
            placeholder="Repetir contraseña"
            onChange={onChangeResetPassword}
            required
          />
          <button type="submit"> Enviar </button>
        </form>
      </div>
    </main>
  );
}
