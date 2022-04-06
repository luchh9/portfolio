import React from "react";
import logo from "../assets/statics/Logo.png";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      className="container"
      animate={{ y: [-600, 0] }}
      transition={{ duration: 1 }}
    >
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
          <img className="logo" src={logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>

          <div
            className="collapse navbar-collapse background-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a href="#about" className="nav-link">
                About me
              </a>
              <a href="#proyects" className="nav-link">
                Proyects
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
