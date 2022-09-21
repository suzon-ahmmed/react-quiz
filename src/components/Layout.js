import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}
