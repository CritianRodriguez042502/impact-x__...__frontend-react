import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../../../components/index";

export function DevopWeb() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Desarrollo web </title>
      </Helmet>

      <Layout>
        <h1> Home / DevopWeb </h1>
      </Layout>
    </main>
  );
}
