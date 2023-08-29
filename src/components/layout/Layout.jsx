import React from "react";
import { Navbar } from "../common/navbar/Navbar";
import { Footer } from "../common/footer/Footer";

export function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
