import React from "react";
import { motion } from "framer-motion";

export default function Proyect(props) {
  const { title, description, code, img, tecnologies, demo } = props.item;
  console.log(window.location.href);

  return (
    <div className="row single-proyect">
      <motion.div
        whileInView={{ scale: [0.5, 1], y: [700, 0], opacity: [0.5, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="col-md-6 "
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <motion.div
          whileInView={{ scale: [0.5, 1], y: [700, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ul className="proyect-links">
            <a href={code}>Source code</a>
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
          whileHover={{ scale: 0.9 }}
          src={img}
          alt="proyect img"
        />
      </div>
    </div>
  );
}
