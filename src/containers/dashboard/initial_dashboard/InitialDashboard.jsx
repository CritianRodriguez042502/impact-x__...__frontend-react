import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosUserData, axiosJWTVerify } from "../../../redux/index";

export function InitialDashboard() {
  const dispatch = useDispatch();
  const naviage = useNavigate();

  const infoJWTVerifi = useSelector((state) => state.JWTVerify);
  const infoDatauser = useSelector((state) => state.userData);

  const [dataUser, setDataUser] = useState(null);

  const access = JSON.parse(localStorage.getItem("access"));

  useEffect(() => {
    if (!access) {
      location.href = "http://localhost:5173/access/signin"
    }

    if (!infoJWTVerifi.status) {
      dispatch(axiosJWTVerify({ token: access }));
    }

    if (infoJWTVerifi.status === "rejected") {
      location.href = "http://localhost:5173/access/signin"
    }

    if (infoJWTVerifi.status === "fulfilled" && !infoDatauser.info && access) {
      dispatch(axiosUserData(access));
    }
  }, [infoJWTVerifi.status]);

  useEffect(() => {
    if (infoDatauser.status === "fulfilled") {
      setDataUser([infoDatauser.info]);
    }

    if (infoDatauser.status === "rejected") {
      location.href = "http://localhost:5173/access/signin"
      localStorage.removeItem("access")
    }
  }, [infoDatauser.status]);

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Dashboard </title>
      </Helmet>

      <div>
        <h1> Dashboard </h1>
        <Link to={"/dashboard/blogs_user"}> Blogs </Link>
        <h1> User </h1>
        {infoDatauser.status === "pending" ? (
          <h1> Cargando... </h1>
        ) : infoDatauser.status === "fulfilled" ? (
          dataUser?.map((data) => {
            return (
              <div key={data.id}>
                <h1> {data.email} </h1>
                <h1> {data.username} </h1>
              </div>
            );
          })
        ) : infoDatauser.status === "rejected" ? (
          <h1> Error</h1>
        ) : (
          false
        )}
      </div>
    </main>
  );
}
