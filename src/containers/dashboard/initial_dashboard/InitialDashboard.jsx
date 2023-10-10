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

  const [dataUser, setDataUser] = useState(null);

  // dom with css
  const [navegationScrollAppearance, setNavegationScrollAppearance] =
    useState(false);
  const [valueScrollApearence, setValueScrollApearence] = useState("///");

  useEffect(() => {
    if (infoDatauser.status === "fulfilled") {
      setDataUser([infoDatauser.info]);
    }
  }, [infoDatauser.status]);

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Dashboard </title>
      </Helmet>

      <SidebarDashboard appearance={navegationScrollAppearance} />

      <section className={style.containerInitialDashboard}>
        <div className={style.bottomNavegationScrollAppearance}>
          <h1
            onClick={(e) => {
              if (valueScrollApearence === "///") {
                setNavegationScrollAppearance(true);
                setValueScrollApearence("XXX");
              } else {
                setNavegationScrollAppearance(false);
                setValueScrollApearence("///");
              }
            }}
          >
            {valueScrollApearence}
          </h1>
        </div>
        <h1> Dashboard </h1>
        <h1> User </h1>
        {infoDatauser.status === "pending" ? (
          <h1> Cargando... </h1>
        ) : infoDatauser.status === "fulfilled" ? (
          dataUser?.map((data) => {
            return (
              <div key={data.id}>
                <h1> {data.email} </h1>
                <h1> {data.username} </h1>
              </div>
            );
          })
        ) : infoDatauser.status === "rejected" ? (
          <h1> Error</h1>
        ) : (
          false
        )}
      </section>
    </main>
  );
}
