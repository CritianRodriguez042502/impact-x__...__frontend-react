import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import { FcDebt } from "react-icons/fc";
import { FcBiohazard } from "react-icons/fc";
import { BiCrown } from "react-icons/bi";
import world from "../../../assets/static/about/imagen-world.png"
import manage from "../../../assets/static/about/imagen-gerente.png"
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
            <div className={style.circule}> </div>
          </aside>
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
          <img className={style.world} src={world} alt="img" />
          
        </section>

        <section className={style.containerAbout2}>
          <aside className={style.manager}>
            <h1> GERENTE </h1>
            <h4 className={style.iconManager}>
              <BiCrown />
            </h4>
          </aside>
          <aside className={style.photoManager}>
            <img
              src={manage}
              alt="img"
            />
          </aside>
        </section>

        <section className={style.containerAbout3}>
          <p className={style.description}>
            Nuestro equipo altamente capacitado en diseño y desarrollo en
            JavaScript está comprometido en ofrecer soluciones digitales
            excepcionales para empresas y startups innovadoras en todo el mundo.
            Más allá de nuestra sede central en Colombia, en el distrito de
            Bogotá, tenemos una presencia global que nos permite brindar
            servicios personalizados y de calidad a clientes en diversos
            continentes
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
              - Creemos firmemente que emprender el desarrollo de un producto
              sin una investigación exhaustiva del negocio y la audiencia
              objetivo es como disparar al azar en la oscuridad mientras
              cruzamos los dedos. Nuestro competente equipo utiliza un enfoque
              metódico para crear experiencias digitales que conducen paso a
              paso a los negocios hacia resultados exitosos.
            </p>
            <p className={style.paragraph}>
              - Pensamos que la usabilidad del producto es como el amor. Debes
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
