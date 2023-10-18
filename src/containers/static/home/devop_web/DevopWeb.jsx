import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../../../components/index";
import axios from "axios";

export function DevopWeb() {

  function save() {
    const url = "http://127.0.0.1:8000/blog/create/";
    const info1 = { name: "Tecnologia" };
    const info2 = { name: "Marketing" };
    const info3 = { name: "Robotica" };

    setTimeout(() => {
      axios.post(url, info1).then((res) => {
        if (res.status == 200) {
          console.log("bien");
        }
      }).catch(err => {console.log(err)});
    }, 2000);

    setTimeout(() => {
      axios.post(url, info2).then((res) => {
        if (res.status == 200) {
          console.log("bien");
        }
      }).catch(err => {console.log(err)});
    }, 4000);

    setTimeout(() => {
      axios.post(url, info3).then((res) => {
        if (res.status == 200) {
          console.log("bien");
        }
      }).catch(err => {console.log(err)});
    }, 6000);

  }

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> --CD.SSD-- </title>
      </Helmet>

      <Layout>
        <h1> Shell </h1>
        <button onClick={save}> --s--s--d </button>
      </Layout>
    </main>
  );
}
