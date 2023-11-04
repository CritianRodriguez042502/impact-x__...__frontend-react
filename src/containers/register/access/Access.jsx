import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import { useNavigate } from "react-router-dom";
import style from "./style_access.module.css";

export function Access() {
  const navigate = useNavigate();

  const infoJWTVerify = useSelector((state) => state.JWTVerify);
  const infoCategorys = useSelector((state) => state.category);

  const access = JSON.parse(localStorage.getItem("access"));

  const [overlay, setOverlay] = useState("initial");
  const [visibilityContent, setVisibilityContent] = useState("none")

  useEffect(() => {
    if (infoJWTVerify.status === "fulfilled" && access) {
      navigate("/dashboard");
    }
  }, [infoJWTVerify.status]);

  useEffect(() => {
    if(infoCategorys.status === "fulfilled") {
      setOverlay("none")
      setVisibilityContent("initial")
    }

    if (infoCategorys.status !== "fulfilled") {
      setOverlay("initial")
      setVisibilityContent("none")
    }
  },[infoCategorys.status])

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> IMPACT X | Acceder </title>
      </Helmet>

      <Layout>
        <article style={{position : "relative"}}>
      
          <div style={{ display: overlay }} class={style.overlay}>
            <div class={style.loaderContainer}>
              <span class={style.loader}></span>
            </div>
          </div>

          <section style={{display : visibilityContent}} className={style.containerAccess}>
            <aside className={style.containerContent}>
              <h1>
                <span style={{ color: "green", fontSize: "30px" }}>A</span>ccede
                a nuestro blog
              </h1>
              <p>
                Explora nuestro blog y desbloquea una experiencia enriquecedora
                al registrarte. Únete a nuestra comunidad y comparte tus
                pasiones a través de publicaciones que te permitirán expresarte
                en temas que realmente te interesan. ¡Regístrate ahora para
                comenzar a ser parte de la conversación y aprovechar al máximo
                tu membresía!
              </p>
              <div className={style.containerButtons}>
                <button
                  onClick={(e) => {
                    navigate("/access/signup");
                  }}
                  type="button"
                >
                  Registrarse
                </button>
                <button
                  onClick={(e) => {
                    navigate("/access/signin");
                  }}
                  type="button"
                >
                  Ingresar
                </button>
              </div>
            </aside>
            
          </section>

        </article>
      </Layout>
    </main>
  );
}
