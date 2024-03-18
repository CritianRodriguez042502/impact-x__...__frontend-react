import { Navbar } from "../common/navbar/Navbar";

export function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
