import React from "react";
import { motion } from "framer-motion";
import mail from "../assets/statics/mail.png";
import linkedin from "../assets/statics/linkedin.png";
import github from "../assets/statics/github.png";
import "../assets/css/Contact.css";
import "../assets/css/style.css";

import dog from "../assets/statics/dog.png";

export default function Contact() {
  const links = [
    {
      src: mail,
      href: "mailto:luciano.mariotti99@gmail.com",
    },
    {
      src: linkedin,
      href: "https://www.linkedin.com/in/luciano-mariotti-b95883210/",
    },
    {
      src: github,
      href: "https://github.com/luchh9/",
    },
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
    <section id="contact" className="contact-section">
      <div className="container ">
        <motion.img
          className="dog"
          src={dog}
          alt=""
          animate={{
            x: [0, 300, 0],
            y: [0, 20, -20, 0],
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 30 }}
        />
        <div className="centrar">
          <motion.h1
            whileInView={{
              opacity: [0, 1],
              y: [200, 0],
            }}
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1.6,
            }}
          >
            Get in touch
          </motion.h1>
          <motion.div
            className="redes"
            variants={list}
            initial="hidden"
            whileInView="show"
          >
            {links.map((item) => (
              <a href={item.href} title="Email me">
                <motion.img
                  src={item.src}
                  className="icon"
                  variants={text}
                  whileHover={{ scale: 0.9, x: -7 }}
                />
              </a>
            ))}
          </motion.div>
          <p className="mail">luciano.mariotti99@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
