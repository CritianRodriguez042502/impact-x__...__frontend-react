import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { axiosJWTVerify } from "../../../redux/index";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import style from "./style_navbar.module.css";

export function Navbar() {
  const dispatch = useDispatch();
  const locationReact = useLocation().pathname;
  const access = JSON.parse(localStorage.getItem("access"));

  const infoJWTVerify = useSelector((state) => state.JWTVerify);

  const [appearance, setAppearance] = useState(false);

  const navbarOptions = [
    { name: "INICIO", path: "/" },
    { name: "SERVICIOS", path: "/services" },
    { name: "SOBRE NOSOTROS", path: "/about" },
    { name: "CONTACTO", path: "/contact" },
    { name: "BLOG", path: "/blogs" },
  ];

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

  useEffect(() => {
    dispatch(axiosJWTVerify({ token: access }));
  }, []);

  return (
    <main>
      <section className={style.parentContainer}>
        <div>
          <h1 className={style.titleIMPACTX}>
            🧩 <span style={{ color: "green" }}>I</span>MPACT X 🧩
          </h1>
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
            {navbarOptions.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  style={
                    locationReact === item.path
                      ? { color: "green" }
                      : { color: "#333" }
                  }
                  className={style.navbarLink}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              );
            })}

            {appearance ? (
              <NavLink className={style.buttonDashboard} to={"/dashboard"}>
                DASHBOARD
              </NavLink>
            ) : (
              <div>
                <NavLink className={style.buttonLogin} to={"/access"}>
                  UNETE...
                </NavLink>
              </div>
            )}
          </nav>
        </div>
      </section>
    </main>
  );
}
