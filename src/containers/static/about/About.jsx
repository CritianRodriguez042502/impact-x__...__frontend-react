import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import { FcDebt } from "react-icons/fc";
import { FcBiohazard } from "react-icons/fc";
import { BiCrown } from "react-icons/bi";
import style from "./style_about.module.css";

export function About() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Sobre nosotros </title>
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
          </aside>
          <div className={style.iconContainer}>
            <h1 className={style.icon}>
              <FcBiohazard />
            </h1>
            <h1 className={style.icon}>
              <FcDebt />
            </h1>
            <h1 className={style.icon}>
              <FcBiohazard />
            </h1>
          </div>
        </section>

        <section className={style.containerAbout2}>
          <aside className={style.manager}>
            <h1> GERENTE </h1>
            <h1 className={style.iconManager}>
              {" "}
              <BiCrown />{" "}
            </h1>
          </aside>
          <aside className={style.photoManager}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995446.png"
              alt="img"
            />
          </aside>
        </section>

        <section className={style.containerAbout3}>
          <p className={style.description}>
            Contamos con un equipo altamente capacitado en diseño y desarrollo
            en JavaScript. Creamos soluciones digitales a medida para empresas y
            startups innovadoras. Nuestra sede central se encuentra en Colombia,
            en el distrito de Bogotá.
          </p>
          <div className={style.containerImagesLaptops}>
            <img
              src="https://img.freepik.com/fotos-premium/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010151.jpg"
              alt="Imagen de desarrollador programando en una computadora"
            />
            <img
              src="https://hireline.io/blog/wp-content/uploads/2019/12/Aprender-a-programar-Java.jpg"
              alt="Imagen de un teclado y código Java"
            />
          </div>
        </section>

        <section className={style.containerAbout4}>
          <div className={style.containerContentAbout4}>
            <h1 className={style.title}>NUESTROS ENFOQUES</h1>
            <p className={style.paragraph}>
              Creemos firmemente que emprender el desarrollo de un producto sin
              una investigación exhaustiva del negocio y la audiencia objetivo
              es como disparar al azar en la oscuridad mientras cruzamos los
              dedos. Nuestro competente equipo utiliza un enfoque metódico para
              crear experiencias digitales que conducen paso a paso a los
              negocios hacia resultados exitosos.
            </p>
            <p className={style.paragraph}>
              Creemos que la usabilidad del producto es como el amor. Debes
              preocuparte, escuchar y tienes que estar dispuesto a cambiar y
              arreglar tus infelicidades. Por lo tanto, prestamos especial
              atención a las pruebas de los usuarios y nuestro objetivo es
              ofrecer mejores productos que sean rápidamente apreciados por las
              personas.
            </p>
          </div>
          <div className={style.containerImageTeam}>
            <img
              src="https://2.bp.blogspot.com/-KwRFJBvUo38/XIJu0Vn82tI/AAAAAAAA9AA/MW5Ej9UIt2YS8zfqXlISB1bpC0FqeDzRgCLcBGAs/s1600/workteam.jpg"
              alt="Imagen de un equipo de trabajo"
            />
          </div>
        </section>
      </Layout>
    </main>
  );
}
