import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-auto py-1 bg-dark fixed-bottom">
        <div className="container">
          <ul className="d-flex justify-content-center  ">
            <li className="me-5">
              <FaFacebook />
            </li>
            <li className="me-5">
              <FaInstagram />
            </li>
            <li className="me-5">
              <FaLinkedin />
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <p>
              <span>Management</span> &copy; 2023
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
