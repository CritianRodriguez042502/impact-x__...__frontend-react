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
            <h1>Quieres hacer un proyecto?</h1>
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
                rows="3"
                required
              ></textarea>

              <div className={style.containerButton}>
                <button type="submit"> Enviar </button>
              </div>
            </form>
          </aside>

          <aside className={style.containerImg}>
            <img
              src="https://cdn.icon-icons.com/icons2/1603/PNG/512/message-mail-envelope-email-personal-user_108507.png"
              alt="img"
            />
          </aside>
        </section>
      </Layout>
    </main>
  );
}
