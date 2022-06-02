import React from "react";
import "../assets/css/About.css";

import avatar from "../assets/statics/lm-avatar.png";
import { motion } from "framer-motion";
import git from "../assets/statics/git-logo.png";
import figma from "../assets/statics/figma-logo.png";
import html from "../assets/statics/html-logo.png";
import css from "../assets/statics/css-logo.png";
import js from "../assets/statics/js-logo.png";
import react from "../assets/statics/react-logo.png";
import npm from "../assets/statics/npm-logo.png";
import sql from "../assets/statics/sql.png";

export default function About() {
  const tecnologies = [html, css, js, react, git, figma, sql, npm];

  const list = {
    hidden: { opacity: 0.1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const text = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
    },
  };

  return (
    <section id="about" className="about-container">
      <div className="container">
        <div className="row">
          <motion.div
            variants={text}
            initial="hidden"
            whileInView="show"
            exit="exit"
            className="col-sm-6"
            viewport={{ once: true }}
          >
            <h1>About me</h1>
            <p className="about-text">
              Hello! My name is Luciano Mariotti but you can call me Mario.
              <br />
              I'm a developer who likes to create things from scratch and is
              fascinated by the world of web development.
              <br />I program in React, design small things in Figma and I like
              to be detail-oriented. I have worked with SCRUM technologies and
              have some backend knowledge.
              <br />
              Through team projects I have developed soft skills like
              communication and teamwork, and use of tools such as Jira, Slack,
              Bitbucket/Github, etc.
            </p>
          </motion.div>
          <div className="col-md-6 centrado">
            <motion.img
              className="avatar centrar"
              src={avatar}
              alt="avatar"
              animate={{ y: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            ></motion.img>
          </div>
        </div>
        <div className="row tecnologies">
          <motion.h3
            variants={text}
            whileInView="show"
            initial="hidden"
            viewport={{ once: true }}
          >
            Tecnologies
          </motion.h3>

          <motion.ul
            className="skill-list2"
            variants={list}
            initial="hidden"
            whileInView="show"
          >
            {tecnologies.map((i) => {
              return (
                <motion.li variants={text} key={i}>
                  <img src={i} alt="tecnologies" />
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
