import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section>
      <div className="container">
        <div className="row header header-text">
          <motion.div
            className="col-sm-10 name"
            animate={{ x: [-700, 0] }}
            transition={{ type: "spring" }}
          >
            <h1>
              Luciano <span>Mario</span> tti.
            </h1>
          </motion.div>
          <motion.div
            className="col-sm-10 "
            animate={{ x: [-1200, 0] }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <h1>I design &amp; build things for the web.</h1>
          </motion.div>
          <motion.div
            className="col-sm-6"
            animate={{ scale: [0.5, 1], opacity: [0.5, 1], x: [-1200, 0] }}
            transition={{ type: "spring", duration: 1.7 }}
          >
            <p className="description">
              I&apos;m a Front-end developer who likes to create and design.
              <br></br>
              Currently I focus on creating projects and learning new
              technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
