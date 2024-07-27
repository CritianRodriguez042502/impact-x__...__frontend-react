import { SideNavbarDashboard } from "../commons/side_navbar/Side_navbar.jsx";

export function LayoutDashboard({ children, apparence }) {
  return (
    <div>
      <SideNavbarDashboard appearance={apparence} />
      {children}
    </div>
  );
}
