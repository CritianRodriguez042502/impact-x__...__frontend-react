import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosResetPasswordConfirm } from "../../../redux/index";

export function ResetPassword() {
//  const dispatch = useDispatch();
//  dispatch(axiosResetPasswordConfirm())
  
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Cambiar contraseña </title>
      </Helmet>

      <div>
        <h1> Cambiar contraseña</h1>
      </div>
    </main>
  );
}
