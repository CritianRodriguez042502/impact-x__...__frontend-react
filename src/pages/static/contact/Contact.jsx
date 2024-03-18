import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import Swal from "sweetalert2";
import style from "./style_contact.module.css";

export function Contact() {
  
  const sendEmailImpactX = (e) => {
    e.preventDefault();

    Swal.showLoading();

    setTimeout(() => {
      Swal.fire(
        "Proceso completado",
        "El correo ha sido enviado satisfactoriamente. Pronto, recibirá una respuesta por parte del equipo.",
        "success"
      );
    }, 3000);
  };

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> IMPACT X | Contacto </title>
      </Helmet>

      <Layout>
        <section className={style.containerContact}>
          <aside className={style.containerContent}>
            <h1>Quieres hacer un proyecto?</h1>
            <p>
              Solo cuéntanos que tienes en mente, cuáles son tus objetivos y
              comencemos
            </p>

            <form onSubmit={sendEmailImpactX} className={style.containerInputs}>
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
