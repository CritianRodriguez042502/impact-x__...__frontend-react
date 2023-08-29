import React from "react";
import {useState,useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { Helmet } from "react-helmet";
import {axiosJWTCreate,axiosJWTRefresh} from "../../../redux/index"
import { Layout } from "../../../components/index";


export function Signin() {
  const dispatch = useDispatch()
//  dispatch(axiosJWTCreate())
  dispatch(axiosJWTRefresh({
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MzM0MTc5MiwiaWF0IjoxNjkzMjU1MzkyLCJqdGkiOiJjYzk2MmYyMTFiNmI0ZjVhODIzNjRmMzkxZjY1YTEyYiIsInVzZXJfaWQiOjEzfQ.avg-6EYDh1r4Ip-nN1KMw4JCRC3h3suyVX557Iy7WNI"
  }))

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Iniciar sesion </title>
      </Helmet>

      <Layout>
        <h1> Signin </h1>
      </Layout>
    </main>
  );
}
