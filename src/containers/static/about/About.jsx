import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import { FcDebt } from "react-icons/fc";
import { FcBiohazard } from "react-icons/fc";
import { BiCrown } from "react-icons/bi";
import world from "../../../assets/static/about/imagen-world.png";
import manager from "../../../assets/static/about/imagen-gerente.png";
import style from "./style_about.module.css";

export function About() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> IMPACT X | Sobre nosotros </title>
      </Helmet>

      <Layout>
        <section className={style.containerAbout1}>
          <aside className={style.containerTitleAndText}>
            <h1 className={style.title}>SOBRE NOSOTROS</h1>
            <p className={style.text}>
              Los productos digitales se han convertido en una parte fundamental
              de nuestro mundo actual, y su desarrollo ha evolucionado
              significativamente en los últimos años. Para afrontar los desafíos
              de este entorno dinámico y competitivo, es esencial adoptar
              metodologías ágiles.
            </p>
            <div className={style.iconContainer}>
              <h4 className={style.icon}>
                <FcBiohazard />
              </h4>
              <h4 className={style.icon}>
                <FcDebt />
              </h4>
              <h4 className={style.icon}>
                <FcBiohazard />
              </h4>
            </div>
          </aside>

          <img className={style.world} src={world} alt="img" />
        </section>

        <section className={style.containerAbout2}>
          <aside className={style.containerManager}>
            <h1 className={style.titleManager}> GERENTE </h1>
            <img className={style.phothoManager} src={manager} alt="img" />
          </aside>
          <aside className={style.containerFocuses}>
            <h1 className={style.focusesTitle}>NUESTROS ENFOQUES</h1>
            <p className={style.parrafo}>
              - Creemos firmemente que emprender el desarrollo de un producto
              sin una investigación exhaustiva del negocio y la audiencia
              objetivo es como disparar al azar en la oscuridad mientras
              cruzamos los dedos. Nuestro competente equipo utiliza un enfoque
              metódico para crear experiencias digitales que conducen paso a
              paso a los negocios hacia resultados exitosos.
            </p>
            <p className={style.parrafo}>
              - Pensamos que la usabilidad del producto es como el amor. Debes
              preocuparte, escuchar y tienes que estar dispuesto a cambiar y
              arreglar tus infelicidades. Por lo tanto, prestamos especial
              atención a las pruebas de los usuarios y nuestro objetivo es
              ofrecer mejores productos que sean rápidamente apreciados por las
              personas.
            </p>
          </aside>
        </section>
      </Layout>
    </main>
  );
}
