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
import sql from "../assets/statics/sql.png";
import next from "../assets/statics/nextjs-logo.png";
import bootstrap from "../assets/statics/bootstrap-logo.png";
import firebase from "../assets/statics/firebase-logo.png";

export default function About() {
  const tecnologies = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "Bootstrap", img: bootstrap },
    { name: "Javascript", img: js },
    { name: "React.js", img: react },
    { name: "Next.js", img: next },
    { name: "Firebase", img: firebase },
    { name: "Figma", img: figma },
    { name: "Git", img: git },
    { name: "SQL", img: sql },
    // { name: "Styled Components", img: figma },
  ];

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
              Hola! Me llamo Luciano Mariotti, pero me podés decir Mario!
              <br />
              Soy un programador web con gran afán por el diseño, resolver cosas
              interesantes, planear y concebir ideas creativas en el código.
              <br />
              Actualmente, desarrollo en React, diseño pequeñas cosas en Figma y
              estoy continuamente aprendiendo nuevas tecnologías. Aunque estoy
              interesado en el frontend, poseo algunos conocimientos en backend
              y no descarto la posibilidad de aprender más sobre ese mundo en el
              futuro.
              <br />
              Apunto a ser un gran programador motivado por solucionar problemas
              a través del poder de crear.
            </p>
          </motion.div>
          <div className="col-md-6 centrado">
            <motion.img
              className="avatar centrar"
              src={avatar}
              alt="avatar"
              animate={{ y: [0, 15, 0] }}
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
            Tecnologías
          </motion.h3>

          <motion.ul
            className="skill-list"
            variants={list}
            initial="hidden"
            whileInView="show"
          >
            {tecnologies.map((i) => {
              return (
                <motion.li variants={text} key={i}>
                  <img src={i.img} alt="tecnologies" />
                  <p>{i.name}</p>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
