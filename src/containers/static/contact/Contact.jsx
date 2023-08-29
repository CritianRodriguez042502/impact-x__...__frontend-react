import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";

export function Contact() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Contactos </title>
      </Helmet>

      <Layout>
        <h1> Contact </h1>
      </Layout>
    </main>
  );
}
