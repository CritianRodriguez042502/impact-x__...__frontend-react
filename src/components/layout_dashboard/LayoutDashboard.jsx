import React from "react";
import { SidebarDashboard } from "../common/sidebar/SidebarDashboard";



export function LayoutDashboard ({ children }) {
  return (
    <div>
      <SidebarDashboard/>
      {children}
    </div>
  );
}
