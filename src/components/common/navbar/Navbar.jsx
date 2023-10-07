import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { axiosJWTVerify } from "../../../redux/index";
import style from "./style_navbar.module.css";

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
    <main>
      <section>
        <div>
          <h1> IMPACT X </h1>
        </div>
        <nav>
          <NavLink className={style.navbarLink} to={"/home"}>
            Inicio
          </NavLink>
          <NavLink className={style.navbarLink} to={"/services"}> Servicios </NavLink>
          <NavLink className={style.navbarLink} to={"/about"}> Sobre nosotros </NavLink>
          <NavLink className={style.navbarLink} to={"/contact"}> Contactos </NavLink>
          <NavLink className={style.navbarLink} to={"/blogs"}> Blog </NavLink>
          {appearance === true ? (
            <NavLink className={style.buttonDashboard} to={"/dashboard"}> Dashboard </NavLink>
          ) : appearance === false ? (
            <div>
              <NavLink className={style.buttonLogin} to={"/access"}> Unete... </NavLink>
            </div>
          ) : (
            false
          )}
        </nav>
      </section>
    </main>
  );
}
