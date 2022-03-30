import React from "react";
import avatar from "../assets/statics/lm-avatar.png";
import tecnologies from "../assets/statics/tecnologies.png";
import { motion } from "framer-motion";
import git from "../assets/statics/git-logo.png";
import figma from "../assets/statics/figma-logo.png";
import html from "../assets/statics/html-logo.png";
import css from "../assets/statics/css-logo.png";
import js from "../assets/statics/js-logo.png";
import react from "../assets/statics/react-logo.png";

export default function About() {
  const tecnologies_logos = [];

  return (
    <section id="about" className="about-container">
      <div className="container">
        <div className="row">
          <motion.div
            whileInView={{ scale: [0.5, 1], x: [-700, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="col-sm-6"
          >
            <h1>About me</h1>
            <p className="about-text">
              Hello! My name is Luciano but you can call me Mario. <br />
              I'm a student and I like coding things from scratch. My dream is
              to become an excellent professional and I'm working for it.
              <br />I program in React, design small things in Figma and I like
              to be detail-oriented. I have worked with SCRUM technologies and
              have some backend knowledge.
              <br />
              Through team projects I have developed soft skills like
              communication and teamwork, and use of tools such as Jira, Slack,
              Bitbucket/Github, etc.
            </p>
            <h3>Tecnologies</h3>
            <ul className="skill-list">
              <li>- HTML</li>
              <li>- Bootstrap</li>
              <li>- CSS</li>
              <li>- Git/Github</li>
              <li>- Javascript</li>
              <li>- SQL</li>
              <li>- React js</li>
              <li>- npm</li>
            </ul>
          </motion.div>
          <div className="col-md-6 centrado">
            <motion.img
              className="avatar centrar"
              src={avatar}
              alt="avatar"
              whileInView={{ scale: [0, 1], backgroundColor: "#163057" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
        </div>
        {/* <div className="row">
          <div className="tecnologies-images">
            <img src={figma} alt="" />
            <img src={git} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
            <img src="npm" alt="" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
