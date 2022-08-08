import React from "react";
import { motion } from "framer-motion";

export default function Proyect(props) {
  const { title, description, code, img, tecnologies, demo } = props.item;

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
    <div className="row single-proyect">
      <motion.div className="col-md-6 ">
        <h2>{title}</h2>
        <p>{description}</p>
        <motion.div variants={list} initial="hidden" whileInView="show">
          <ul className="proyect-links">
            <a href={code}>Codigo</a>
            {demo !== "" ? (
              <a href={demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            ) : null}
          </ul>
          <ul className="proyect-tecnologies">
            {tecnologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      <div className="col-md-6 ">
        <motion.img
          className="imagen"
          variants={text}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: true }}
          src={img}
          alt="proyect img"
        />
      </div>
    </div>
  );
}
