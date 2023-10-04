import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./style_sidebar_dashboard.module.css";
import {
  axiosJWTVerify,
  axiosUserData,
  axiosAllUsernames,
  axiosBlogsByUser,
} from "../../../redux/index";

export function SidebarDashboard() {
  const dispatch = useDispatch();

  const infoJWTVerifi = useSelector((state) => state.JWTVerify);
  const infoDatauser = useSelector((state) => state.userData);
  const infoAllUsernames = useSelector((state) => state.allUsernames);
  const infoBlogsByUser = useSelector((state) => state.blogsByUser);

  const [updateDataUser, setUpdateDataUser] = useState({});
  const [img, setImg] = useState(undefined);
  const [containerImg, setContainerImg] = useState(undefined);
  const [allUsernames, setAllUsernames] = useState([]);
  const [visibility, setVisibility] = useState("none");

  const access = JSON.parse(localStorage.getItem("access"));
  const username = JSON.parse(localStorage.getItem("username"));

  useEffect(() => {
    if (!access) {
      localStorage.clear();
      location.href = "http://localhost:5173/access/signin";
    }

    if (!infoJWTVerifi.status) {
      dispatch(axiosJWTVerify({ token: access }));
    }

    if (infoJWTVerifi.status === "rejected") {
      location.href = "http://localhost:5173/access/signin";
    }
  }, [infoJWTVerifi.status, username]);

  useEffect(() => {
    if (
      infoDatauser.status === "rejected" &&
      (infoJWTVerifi.status === "rejected" || !access)
    ) {
      location.href = "http://localhost:5173/access/signin";
      localStorage.clear();
    }
  }, [infoDatauser.status, username]);

  useEffect(() => {
    if (
      infoJWTVerifi.status === "fulfilled" &&
      access &&
      !infoAllUsernames.info
    ) {
      dispatch(axiosAllUsernames({ jwt: access }));
    }
    if (
      (infoJWTVerifi.status === "fulfilled" && !infoDatauser.info && access) ||
      !username
    ) {
      dispatch(axiosUserData({ method: "get", jwt: access }));
    }

    if (
      infoJWTVerifi.status === "fulfilled" &&
      !infoBlogsByUser.info &&
      access &&
      username
    ) {
      dispatch(axiosBlogsByUser(access));
    }
  }, [infoJWTVerifi.status, username]);

  useEffect(() => {
    if (infoDatauser.status === "fulfilled") {
      setUpdateDataUser({
        first_name: infoDatauser.info.first_name,
        last_name: infoDatauser.info.last_name,
        username: infoDatauser.info.username,
      });
      setContainerImg(infoDatauser.info.img);
    }
    if (infoAllUsernames.status === "fulfilled") {
      setAllUsernames(infoAllUsernames.info.data);
    }
  }, [infoDatauser.info, infoAllUsernames.info]);

  function onClickLogout(e) {
    localStorage.clear();
    location.href = "http://localhost:5173/access/signin";
  }

  function onChangeUpdateDataUser(e) {
    setUpdateDataUser({
      ...updateDataUser,
      [e.target.name]: e.target.value,
    });
  }

  function onChangeUploadImg(e) {
    setImg(e.target.files[0]);
  }

  async function uploadImg(image) {
    const headers = {
      Authorization: `JWT ${access}`,
    };
    const url = "http://127.0.0.1:8000/user_system/upload_img_user/";
    const formData = new FormData();
    formData.append("file", image);
    fetch(url, {
      method: "POST",
      headers,
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          setTimeout(() => {dispatch(axiosUserData({ method: "get", jwt: access }));},300)
        } else {
          throw new Error("Hubo algun error al tratar de hacer la solicitud");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onSubmitUpdateDataUser(e) {
    e.preventDefault();

    if (
      updateDataUser.first_name &&
      updateDataUser.last_name &&
      updateDataUser.username
    ) {
      const nonRepeatedUsername = allUsernames.filter((index) => {
        return index !== infoDatauser.info.username;
      });
      const verifyName = [];
      for (let i = 0; i < nonRepeatedUsername.length; i++) {
        if (nonRepeatedUsername[i] === updateDataUser.username) {
          verifyName.unshift(nonRepeatedUsername[i]);
        }
      }
      if (verifyName.length === 0) {
        if (img !== undefined) {
          dispatch(
            axiosUserData({
              method: "put",
              jwt: access,
              info: updateDataUser,
            })
          );
          setTimeout(() => {
            uploadImg(img);
          },100)
          setVisibility("none");
        } else {
          dispatch(
            axiosUserData({
              method: "put",
              jwt: access,
              info: updateDataUser,
            })
          );
          setVisibility("none");
        }
      } else {
        alert("Este nombre de usuario ya existe");
      }
    } else {
      alert("Estas tratando de enviar datos vacios");
    }
  }

  function visibilityOptions() {
    setVisibility("initial");
  }

  function withoutVisibilityOptions() {
    setVisibility("none");
  }

  return (
    <main className={style.containerLayout}>
      <nav className={style.containerLiks}>
        <Link to={"/home"}> Impact x </Link>
        <Link to={"/dashboard"}> Inicio </Link>
        <Link to={"/dashboard/blogs_user"}> Blogs </Link>
        <p onClick={visibilityOptions}> Ajustes </p>
        <p onClick={onClickLogout}> Logout </p>
        {containerImg !== undefined ? (
          <img src={containerImg} alt="img" width={60} />
        ) : (
          false
        )}
      </nav>

      <div className={style.containerFixed} style={{ display: visibility }}>
        <p onClick={withoutVisibilityOptions}> Xd </p>
        <p> Modificar datos de usuario </p>
        <form onSubmit={onSubmitUpdateDataUser}>
          {Object.keys(updateDataUser).length !== 0 ? (
            <div>
              <label htmlFor="image"> Imagen de perfil </label>
              <input
                type="file"
                name="file"
                id="file"
                accept="image/*"
                onChange={onChangeUploadImg}
              />
              <label htmlFor="first_name"> Primer nombre </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={updateDataUser.first_name}
                onChange={onChangeUpdateDataUser}
                required
              />
              <label htmlFor="last_name"> Segundo nombre</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={updateDataUser.last_name}
                onChange={onChangeUpdateDataUser}
                required
              />
              <label htmlFor="username"> nombre de usuario </label>
              <input
                type="text"
                name="username"
                id="username"
                value={updateDataUser.username}
                onChange={onChangeUpdateDataUser}
                required
              />
              <button type="submit"> Actualizar </button>
            </div>
          ) : (
            <p> Error </p>
          )}
        </form>
      </div>
    </main>
  );
}
