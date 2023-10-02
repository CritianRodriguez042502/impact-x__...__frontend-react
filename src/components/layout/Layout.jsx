import React from "react";
import { Navbar } from "../common/navbar/Navbar";
import { Footer } from "../common/footer/Footer";

// Footer descontinuado
// <Footer />
export function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      
    </div>
  );
}
