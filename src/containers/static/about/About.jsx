import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";

export function About() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Sobre nosotros </title>
      </Helmet>

      <Layout>
        <h1> About </h1>
        <hr/>
      </Layout>
    </main>
  );
}
