import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";
import { Link } from "react-router-dom";

export function Access() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Accede al blog </title>
      </Helmet>

      <Layout>
        <h1> Accede a nuestro blog </h1>
        <div> <Link to={"/access/signup"}> registrarse </Link> </div>
        <div> <Link to={"/access/signin"}> Ingresar </Link>  </div>
      </Layout>
    </main>
  );
}
