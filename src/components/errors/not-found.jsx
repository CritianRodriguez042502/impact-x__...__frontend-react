import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styles from "./style_not-found.module.css";

export const NotFound = () => {
  return (
    <main>
      <Helmet>
        <title>IMPACT X | Not found</title>
      </Helmet>
      <aside className={styles.container}>
        <section className={styles.containerMessage}>
          <div>
            <h1 className={styles.text_404}>404</h1>
            <p>Lo siento, la página que estás buscando no se encuentra.</p>
          </div>
          <div className={styles.linkContainer}>
            <Link
              className={styles.link}
              to={"/"}
            >
              Volver a la página de inicio
            </Link>
          </div>
        </section>
      </aside>
    </main>
  );
};
