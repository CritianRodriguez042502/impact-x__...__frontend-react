import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { axiosJWTVerify } from "../../../redux/index";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import style from "./style_navbar.module.css";

export function Navbar() {
  const dispatch = useDispatch();
  const infoJWTVerify = useSelector((state) => state.JWTVerify);

  const access = JSON.parse(localStorage.getItem("access"));

  const [appearance, setAppearance] = useState(false);
  

  // dom with css
  const [navegationScrollAppearance, setNavegationScrollAppearance] =
    useState(false);

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
      <section className={style.parentContainer}>
        <div>
          <h1> 🧩 IMPACT X 🧩 </h1>
        </div>

        <div>
          <h1
            onClick={(e) => {
              setNavegationScrollAppearance(true);
            }}
            className={style.navegationApparButton}
          >
            <AiOutlineMenu />
          </h1>
        </div>

        <div
          style={{ right: navegationScrollAppearance ? 0 : -300 }}
          className={style.navegation}
        >
          <div>
            <p
              onClick={(e) => {
                setNavegationScrollAppearance(false);
              }}
            >
              <AiOutlineClose />
            </p>
          </div>
          <nav>
            <NavLink className={style.navbarLink} to={"/home"}>
              INICIO
            </NavLink>
            <NavLink className={style.navbarLink} to={"/services"}>
              SERVICIOS
            </NavLink>
            <NavLink className={style.navbarLink} to={"/about"}>
              SOBRE NOSOTROS
            </NavLink>
            <NavLink className={style.navbarLink} to={"/contact"}>
              CONTACTOS
            </NavLink>
            <NavLink className={style.navbarLink} to={"/blogs"}>
              BLOG
            </NavLink>
            {appearance === true ? (
              <NavLink className={style.buttonDashboard} to={"/dashboard"}>
                DASHBOARD
              </NavLink>
            ) : appearance === false ? (
              <div>
                <NavLink className={style.buttonLogin} to={"/access"}>
                  UNETE...
                </NavLink>
              </div>
            ) : (
              false
            )}
          </nav>
        </div>
      </section>
    </main>
  );
}
