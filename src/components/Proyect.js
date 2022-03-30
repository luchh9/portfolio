import React from "react";
import { motion } from "framer-motion";

export default function Proyect(props) {
  const { title, description, code, img, tecnologies } = props.item;

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
            <a href={code}>source code</a>
          </ul>
          <ul className="proyect-tecnologies">
            {tecnologies.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      <div className="col-md-6">
        <motion.img
          whileInView={{ scale: [0.5, 1], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src={img}
          alt="proyect img"
        />
      </div>
    </div>
  );
}
