import React from "react";
import linkedin from "../assets/statics/linkedin.png";
import github from "../assets/statics/github.png";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container ">
        <div className="centrar">
          <h1>Get in touch</h1>
          <div className="mail-conatiner">
            <a
              className="mail"
              href="mailto:luciano.mariotti99@gmail.com"
              title="Email me"
              rel="me"
              target="_blank"
            >
              luciano.mariotti99@gmail.com
            </a>
          </div>
          <div>
            <button className="get-cv-button">Download CV</button>
          </div>
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
