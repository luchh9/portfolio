import React from "react";
import { motion } from "framer-motion";
import planet from "../assets/statics/Astronaut.png";
import "../assets/css/Header.css";

export default function Header() {
  return (
    <section>
      <div className="container">
        <div className="row header header-text">
          <motion.div
            className="col-xl-8 subname"
            animate={{ x: [-1200, 0] }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <h1>Luciano Mariotti.</h1>
            <h1>I design &amp; build things for the web.</h1>

            <motion.div
              className="col-xl-6 description"
              animate={{ scale: [0.5, 1], opacity: [0.5, 1], x: [-1200, 0] }}
              transition={{ type: "spring", duration: 1.7 }}
            >
              <p>
                I&apos;m a Front-end developer.
                <br></br>
                Currently I focus on creating projects and learning.
              </p>
            </motion.div>
          </motion.div>

          <div className="col-xl-4 astronaut">
            <motion.img
              src={planet}
              alt=""
              transition={{ duration: 2, type: "ease" }}
              animate={{ x: [50, 0], opacity: [0.7, 1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
