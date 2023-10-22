import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import { useNavigate } from "react-router-dom";
import style from "./style_access.module.css";

export function Access() {
  const navigate = useNavigate();

  const infoJWTVerify = useSelector((state) => state.JWTVerify);

  const access = JSON.parse(localStorage.getItem("access"));

  useEffect(() => {
    if (infoJWTVerify.status === "fulfilled" && access) {
      navigate("/dashboard");
    }
  }, [infoJWTVerify.status]);

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Accede al blog ... </title>
      </Helmet>

      <Layout>
        <section className={style.containerAccess}>
          <aside className={style.containerContent}>
            <h1>
              <span style={{ color: "green", fontSize: "30px" }}>A</span>ccede a
              nuestro blog
            </h1>
            <p>
              Explora nuestro blog y desbloquea una experiencia enriquecedora al
              registrarte. Únete a nuestra comunidad y comparte tus pasiones a
              través de publicaciones que te permitirán expresarte en temas que
              realmente te interesan. ¡Regístrate ahora para comenzar a ser
              parte de la conversación y aprovechar al máximo tu membresía!
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
          <aside className={style.containerImg}>
            <img src="https://cdn-icons-png.flaticon.com/512/993/993686.png" alt="img" />
          </aside>
        </section>
      </Layout>
    </main>
  );
}
