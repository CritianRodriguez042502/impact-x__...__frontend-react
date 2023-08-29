import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosActivationUser } from "../../../redux/index";

export function Activation() {
  //  const dispatch = useDispatch()
  //  dispatch(axiosActivationUser())
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Activacion </title>
      </Helmet>

      <div>
        <h1> Activation </h1>
      </div>
    </main>
  );
}
