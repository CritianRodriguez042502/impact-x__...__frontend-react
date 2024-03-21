import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SideNavbarDashboard } from "../commons/side_navbar/Side_navbar.jsx";
import { axiosActivateServer } from "../../redux/index.js";

export function LayoutDashboard({ children, apparence }) {
  const dispatch = useDispatch();
  const activationServerState = useSelector((state) => state.activationServer);

  useEffect(() => {
    if (!activationServerState.status) {
      dispatch(axiosActivateServer());
    }
  }, [activationServerState]);

  return (
    <div>
      <SideNavbarDashboard appearance={apparence} />
      {children}
    </div>
  );
}
