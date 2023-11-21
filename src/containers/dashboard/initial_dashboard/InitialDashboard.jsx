import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { SidebarDashboard } from "../../../components/common/sidebar/SidebarDashboard";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import style from "./style_initial_dashboard.module.css";

export function InitialDashboard() {
  const infoDatauser = useSelector((state) => state.userData);

  // dom with css
  const [navegationScrollAppearance, setNavegationScrollAppearance] =
    useState(false);
  const [valueScrollApearence, setValueScrollApearence] = useState(
    <AiOutlineMenu />
  );

  return (
    <main className={style.containerInitialDashboard}>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> IMPACT X | Dashboard </title>
      </Helmet>

      <SidebarDashboard appearance={navegationScrollAppearance} />

      <section>
        <div className={style.bottomNavegationScrollAppearance}>
          <h1
            onClick={() => {
              if (navegationScrollAppearance === false) {
                setNavegationScrollAppearance(true);
                setValueScrollApearence(<AiOutlineClose />);
              } else {
                setNavegationScrollAppearance(false);
                setValueScrollApearence(<AiOutlineMenu />);
              }
            }}
          >
            {valueScrollApearence}
          </h1>
        </div>
      </section>

      <div className={style.circule1}></div>

      <section className={style.staticContainer}>
        {infoDatauser.status === "fulfilled" ? (
          <div>
            <h1>
              // BIENVENIDO // <br /> {infoDatauser.info.username}
            </h1>
            <p>
              En IMPACT X, creemos en el poder de las palabras y las ideas. Te
              damos la bienvenida a un lugar donde la creatividad fluye
              libremente y las voces se unen para formar una comunidad vibrante
              y diversa. ¡Este es tu espacio para inspirar, aprender y
              conectarte!
            </p>
            <aside className={style.containerImg}>
              <div>
                <img
                  className={style.img1}
                  src="https://geeksui.codescandy.com/geeks/assets/images/background/acedamy-img/frame-1.svg"
                  alt="img"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <img
                  className={style.img2}
                  src="https://geeksui.codescandy.com/geeks/assets/images/background/acedamy-img/frame-1.svg"
                  alt="img"
                  width={200}
                  height={200}
                />
              </div>
            </aside>
          </div>
        ) : (
          false
        )}
      </section>
    </main>
  );
}
