import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import style from "./style_contact.module.css";

export function Contact() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Contactos </title>
      </Helmet>

      <Layout>
        <section className={style.containerContact}>
          <aside className={style.containerContent}>
            <h1>
              <span style={{color : "green", fontSize : "30px"}}> Q</span>uieres hacer un <br />
              proyecto?
            </h1>
            <p>
              Solo cuéntanos que tienes en mente, cuáles son tus objetivos y
              comencemos
            </p>

            <form className={style.containerInputs}>
              <label htmlFor="first_name"> Nombre y apellido </label>
              <input type="text" id="first_name" name="first_name" required />
              <label htmlFor="last_name"> Correo </label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="content"> Mensaje </label>
              <textarea
                name="content"
                id="content"
                cols="30"
                rows="10"
                required
              ></textarea>

              <div className={style.containerButton}>
                <button type="submit"> Enviar </button>
              </div>
            </form>
          </aside>

          <aside className={style.containerImg}>
            <img
              src="https://us.123rf.com/450wm/theerakit/theerakit1711/theerakit171100005/90426044-icono-de-correo-electr%C3%B3nico-sobre-fondo-blanco-signo-de-correo-electr%C3%B3nico-estilo-plano-s%C3%ADmbolo-de.jpg"
              alt="img"
            />
          </aside>
        </section>
      </Layout>
    </main>
  );
}
