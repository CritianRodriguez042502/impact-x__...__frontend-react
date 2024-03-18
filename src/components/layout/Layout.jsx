import { Navbar } from "../commons/navbar/Navbar";

export function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
