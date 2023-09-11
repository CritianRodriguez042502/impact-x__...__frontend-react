import React from "react";
import { useState, useEffect } from "react";
import {useParams, Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosActivationUser } from "../../../redux/index";

export function Activation() {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const infoActivation = useSelector(state => state.activate)
    

  const [loader,setLoader] = useState("none")
  const [message, setMessage] = useState("none")


  useEffect(() => {
    dispatch(axiosActivationUser({
      "uid" : params.uid,
      "token" : params.token
    }))
  },[])

  useEffect(() => {
    if (infoActivation.status === "pending") {
      setLoader("initial")
    }
    if (infoActivation.status === "fulfilled") {
      setLoader("none")
      setMessage("initial")
    }
    if (infoActivation.status === "rejected") {
      alert("Parece que algo salio mal")
      navigate("/access/signup")
    }

  },[infoActivation.status])
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Activacion </title>
      </Helmet>

      <div>

        <h1> Activation </h1>

        <div style={{display : loader}}>
          <h1> Cargando... </h1>
        </div>

        <div style={{display : message}}>
          <h1> Tu cuenta se ha activado</h1>
          <Link to={"/access/signin"}> Ingresar </Link>
        </div>

      </div>
    </main>
  );
}
