import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { axiosJWTVerify } from "../../../redux/index";
import "./style_navbar.module.css";

export function Navbar() {
  const dispatch = useDispatch();
  const infoJWTVerify = useSelector((state) => state.JWTVerify);

  const access = JSON.parse(localStorage.getItem("access"));

  const [appearance, setAppearance] = useState(false);

  useEffect(() => {
    if (!access) {
      setAppearance(false);
      localStorage.clear();
    }

    if (!infoJWTVerify.status) {
      dispatch(axiosJWTVerify({ token: access }));
    }
    if (infoJWTVerify.status === "fulfilled" && access) {
      setAppearance(true);
    }

    if (infoJWTVerify.status === "rejected") {
      localStorage.clear();
      setAppearance(false);
    }
  }, [infoJWTVerify.status]);

  return (
    <nav>
      <NavLink to={"/home"}> Inicio </NavLink>
      <NavLink to={"/services"}> Servicios </NavLink>
      <NavLink to={"/about"}> Sobre nosotros </NavLink>
      <NavLink to={"/contact"}> Contactos </NavLink>
      <NavLink to={"/blogs"}> Blog </NavLink>
      {appearance === true ? (
        <NavLink to={"/dashboard"}> Dashboard </NavLink>
      ) : appearance === false ? (
        <NavLink to={"/access"}> Unete </NavLink>
      ) : (
        false
      )}
    </nav>
  );
}
