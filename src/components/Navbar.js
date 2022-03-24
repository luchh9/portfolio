import React from "react";
import logo from "../assets/statics/Logo.png";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
          <img className="logo" src={logo} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
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
    </div>
  );
}
