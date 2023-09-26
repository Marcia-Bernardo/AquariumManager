import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const NavWrapper = () => {
  return (
    <>
      <NavBar />

      <div className="container" style={{ marginBottom: "6rem" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default NavWrapper;
