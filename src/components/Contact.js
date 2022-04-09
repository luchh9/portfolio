import React from "react";
import mail from "../assets/statics/Planet-mail.png";
import { motion } from "framer-motion";
import linkedin from "../assets/statics/linkedin.png";
import github from "../assets/statics/github.png";
import "../assets/css/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container ">
        <div className="centrar">
          <h1>Get in touch</h1>
          <div className="mail-container">
            <a
              className="mail"
              href="mailto:luciano.mariotti99@gmail.com"
              title="Email me"
              rel="me"
              target="_blank"
            >
              <img src={mail}></img>
            </a>
          </div>
          {/* CON TIMES CAMBIAR EL ZINDEX Y HACER QUE UN PLANETA GIRE ALREDOR DEL SOL  */}
          <motion.button
            className="get-cv-button"
            whileInView={{ scale: [0.8, 1], opacity: [0, 1], y: [40, 0] }}
            transition={{ type: "spring" }}
          >
            Download CV
          </motion.button>
          <div className="redes">
            <a href="https://www.linkedin.com/in/luciano-mariotti-b95883210/">
              <img className="icon" src={linkedin} alt="" />
            </a>
            <a href="https://github.com/luchh9/">
              <img className="icon" src={github} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
