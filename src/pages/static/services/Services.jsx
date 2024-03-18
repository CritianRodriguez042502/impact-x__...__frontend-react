import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import { BiAnalyse } from "react-icons/bi";
import { BiAtom } from "react-icons/bi";
import { BiBugAlt } from "react-icons/bi";
//_________________________________
// Icons of clients
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaTwitch } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiTinder } from "react-icons/si";

import style from "./style_services.module.css";

export function Services() {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);

  useEffect(() => {
    if (counter1 <= 5630) {
      setTimeout(() => {
        setCounter1(counter1 + 140);
      }, 20);
    }

    if (counter2 <= 2300) {
      setTimeout(() => {
        setCounter2(counter2 + 94);
      }, 20);
    }

    if (counter3 <= 3500) {
      setTimeout(() => {
        setCounter3(counter3 + 94);
      }, 20);
    }
  }, [counter1, counter2, counter3]);

  function configurationCategorys() {
    const url = "https://server-agency-1203.onrender.com/blog/create/";
    const info1 = { name: "Software" };
    const info2 = { name: "Marketing" };
    const info3 = { name: "Robotica" };
    const info4 = { name: "Videojuegos" };
    const info5 = { name: "Ciberseguridad" };

    setTimeout(() => {
      axios
        .post(url, info1)
        .then((res) => {
          if (res.status == 200) {
            console.log(".");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);

    setTimeout(() => {
      axios
        .post(url, info2)
        .then((res) => {
          if (res.status == 200) {
            console.log(".");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);

    setTimeout(() => {
      axios
        .post(url, info3)
        .then((res) => {
          if (res.status == 200) {
            console.log(".");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);

    setTimeout(() => {
      axios
        .post(url, info4)
        .then((res) => {
          if (res.status == 200) {
            console.log(".");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 4000);

    setTimeout(() => {
      axios
        .post(url, info5)
        .then((res) => {
          if (res.status == 200) {
            console.log(".");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 5000);
  }

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> IMPACT X | Servicios </title>
      </Helmet>

      <Layout>
        <section className={style.containerServices1}>
          <aside className={style.servicesContent1}>
            <h1> PROGRAMACION DE SOFTWARE </h1>
            <p>
              Nos fascina transformar los modelos de pensamiento convencionales
              y generar lo que nunca antes se había ensayado. Tomamos ideas
              iniciales y desarrollamos entornos exuberantes.
            </p>
            <div>
              <h3>
                {counter1} <span> + </span>
              </h3>
              <h3>
                {counter2} <span> + </span>
              </h3>
              <h3>
                {counter3} <span> + </span>
              </h3>
            </div>
          </aside>

          <aside className={style.containerImg}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/8415/8415599.png"
              alt="img"
            />
          </aside>
        </section>

        <section className={style.containerServices2}>
          <h1> PRODUCTOS DE DESARROLLO DE SOFTWARE</h1>
          <aside className={style.servicesContent2}>
            <div>
              <h4 className={style.icon}>
                <BiAnalyse />
              </h4>
              <h1> Equipo de programacion de software </h1>
              <p>
                Los productos digitales se trabajan con metodologiias agiles por
                lo tanto podemos garantizar un desarrollo fluido y eficiente
              </p>
            </div>
            <div>
              <h4 className={style.icon}>
                <BiAtom />
              </h4>
              <h1> Equipo de programacion de software </h1>
              <p>
                Los productos digitales se trabajan con metodologiias agiles por
                lo tanto podemos garantizar un desarrollo fluido y eficiente
              </p>
            </div>
            <div>
              <h4 className={style.icon}>
                <BiBugAlt />
              </h4>
              <h1> Equipo de programacion de software </h1>
              <p>
                Los productos digitales se trabajan con metodologiias agiles por
                lo tanto podemos garantizar un desarrollo fluido y eficiente
              </p>
            </div>
          </aside>
        </section>

        <section className={style.containerServices3}>
          <aside>
            <h1> NUESTROS CLIENTES </h1>
            <p className={style.textClients}>
              Pensamos que las marcas son el vínculo cultural entre las
              compañías y sus comunidades.
            </p>
            <div>
              <p>
                <FaGoogle />
              </p>
              <p>
                <FaFacebookF />
              </p>
              <p>
                <MdOutlineWhatsapp />
              </p>
              <p>
                <FaTwitch />
              </p>
              <p>
                <FaTwitter />
              </p>
              <p onClick={configurationCategorys}>
                <SiTinder />
              </p>
            </div>
          </aside>
        </section>
      </Layout>
    </main>
  );
}
