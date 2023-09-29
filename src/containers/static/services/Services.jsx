import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/index";

export function Services() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Servicios </title>
      </Helmet>

      <Layout>
        <h1> Services </h1>
      </Layout>
    </main>
  );
}
