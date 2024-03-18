import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AiOutlineClose } from "react-icons/ai";
import personDefault from "../../../assets/dashboard/img_person_default.png";
import style from "./style_sidebar_dashboard.module.css";

export function SidebarDashboard({ appearance }) {
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

  let widthDisplay = window.innerWidth;

  // dom with css

  useEffect(() => {
    if (!access) {
      localStorage.clear();
      location.href =
        "https://impact-x.onrender.com/#/access/signin";
    }

    if (!infoJWTVerifi.status) {
      import("../../../redux/index").then((modules) => {
        dispatch(modules.axiosJWTVerify({ token: access }));
      });
    }

    if (infoJWTVerifi.status === "rejected") {
      location.href =
        "https://impact-x.onrender.com/#/access/signin";
    }
  }, [infoJWTVerifi.status, username]);

  useEffect(() => {
    if (
      infoDatauser.status === "rejected" &&
      (infoJWTVerifi.status === "rejected" || !access)
    ) {
      location.href =
        "https://impact-x.onrender.com/#/access/signin";
      localStorage.clear();
    }
  }, [infoDatauser.status, username]);

  useEffect(() => {
    if (
      infoJWTVerifi.status === "fulfilled" &&
      access &&
      !infoAllUsernames.info
    ) {
      import("../../../redux/index").then((modules) => {
        dispatch(modules.axiosAllUsernames({ jwt: access }));
      });
    }
    if (
      (infoJWTVerifi.status === "fulfilled" && !infoDatauser.info && access) ||
      !username
    ) {
      import("../../../redux/index").then((modules) => {
        dispatch(modules.axiosUserData({ method: "get", jwt: access }));
      });
    }

    if (
      infoJWTVerifi.status === "fulfilled" &&
      !infoBlogsByUser.info &&
      access &&
      username
    ) {
      import("../../../redux/index").then((modules) => {
        dispatch(modules.axiosBlogsByUser(access));
      });
    }
  }, [infoJWTVerifi.status, username]);

  useEffect(() => {
    if (infoDatauser.status === "fulfilled") {
      setUpdateDataUser({
        first_name: infoDatauser.info.first_name,
        last_name: infoDatauser.info.last_name,
        username: infoDatauser.info.username,
      });
      setContainerImg(infoDatauser.info.img_url);
    }
    if (infoAllUsernames.status === "fulfilled") {
      setAllUsernames(infoAllUsernames.info.data);
    }
  }, [infoDatauser.info, infoAllUsernames.info]);

  function onClickLogout(e) {
    Swal.fire({
      text: "Estas seguro que deseas cerrar sesion?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        setTimeout(() => {
          location.href =
            "https://impact-x.onrender.com/#/access/signin";
        }, 300);
      }
    });
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

  function uploadImg(image) {
    const headers = {
      Authorization: `JWT ${access}`,
    };
    const url =
      "https://server-agency-1203.onrender.com/user_system/upload_img_user/";
    const formData = new FormData();
    formData.append("file", image);
    Swal.showLoading();
    fetch(url, {
      method: "POST",
      headers,
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "imagen cargada correctamente",
          });
          setTimeout(() => {
            import("../../../redux/index").then((modules) => {
              dispatch(modules.axiosUserData({ method: "get", jwt: access }));
            });
          }, 200);
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
          import("../../../redux/index").then((modules) => {
            dispatch(
              modules.axiosUserData({
                method: "put",
                jwt: access,
                info: updateDataUser,
              })
            );
          });

          setTimeout(() => {
            uploadImg(img);
          }, 100);
          setVisibility("none");
        } else {
          import("../../../redux/index").then((modules) => {
            dispatch(
              modules.axiosUserData({
                method: "put",
                jwt: access,
                info: updateDataUser,
              })
            );
          });

          setVisibility("none");
        }
      } else {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Este nombre de usuario ya existe",
        });
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "Estas tratando de enviar datos vacios",
      });
    }
  }

  function visibilityOptions() {
    setVisibility("initial");
  }

  function withoutVisibilityOptions() {
    setVisibility("none");
  }

  return (
    <main
      className={style.parentContainer}
      style={
        appearance === true || widthDisplay >= 750
          ? { left: "0px" }
          : { left: "-300px" }
      }
    >
      <section className={style.sidebarNavegation}>
        <nav>
          <Link className={style.navbarLink} to={"/home"}>
            IMPACT X
          </Link>
          <Link className={style.navbarLink} to={"/dashboard"}>
            INICIO
          </Link>
          <Link className={style.navbarLink} to={"/dashboard/blogs_user"}>
            BLOGS
          </Link>
          <p className={style.navbarLink} onClick={visibilityOptions}>
            AJUSTES
          </p>
          <p className={style.navbarLink} onClick={onClickLogout}>
            CERRAR SESION
          </p>
        </nav>

        <article>
          {!containerImg ? (
            <div>
              <img src={personDefault} alt="img" width={140} />
            </div>
          ) : (
            <div>
              <img src={containerImg} alt="img" width={140} />
            </div>
          )}
        </article>
      </section>

      <section>
        <div
          className={style.fixedSettingsContainer}
          style={{ display: visibility }}
        >
          <h1 onClick={withoutVisibilityOptions}>
            <AiOutlineClose />
          </h1>
          {containerImg === undefined || containerImg === null ? (
            <h3> Modificar datos y agregar imagen de perfil </h3>
          ) : (
            <h3> Modificar datos de usuario o cambiar imagen de perfil </h3>
          )}
          <form
            className={style.formUpdateDataUser}
            onSubmit={onSubmitUpdateDataUser}
          >
            {Object.keys(updateDataUser).length !== 0 ? (
              <div>
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
                <label htmlFor="image"> Imagen de perfil </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  onChange={onChangeUploadImg}
                />
                <button type="submit"> Actualizar </button>
              </div>
            ) : (
              <p> Error </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
