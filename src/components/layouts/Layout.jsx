import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../commons/navbar/Navbar";
import { axiosActivateServer } from "../../redux/index.js";

export function Layout({ children }) {
  const dispatch = useDispatch();
  const activationServerState = useSelector((state) => state.activationServer);

  useEffect(() => {
    if (!activationServerState.status) {
      dispatch(axiosActivateServer());
    }
  }, [activationServerState]);

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
