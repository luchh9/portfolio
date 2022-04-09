import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import planet from "../assets/statics/Astronaut.png";
export default function Header() {
  const x = useMotionValue(0);
  const input = [-200, 0, 200];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);
  const input2 = [-100, 0, 100]; //rango entre tal y tal
  const output2 = [0, 1, 0]; // como se transformara, 40 para un lado y 100 de borderRadius para el otro
  const scale = useTransform(x, input2, output2);

  return (
    <section>
      <div className="container">
        <motion.div className="box">
          <motion.img
            style={{ cursor: "grab", width: "200px" }}
            src={planet}
            alt=""
            dragConstraints={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            drag
            whileTap={{
              opacity: 0.8,
              scale: 1.05,
            }}
            whileDrag={{ scale: 1.2 }}
            transition={{ duration: 2 }}
            animate={{ x: [50, 0], opacity: [0.7, 1] }}
          />
        </motion.div>
        <div className="row header header-text">
          <motion.div
            className="col-sm-10 name"
            animate={{ x: [-700, 0] }}
            transition={{ type: "spring" }}
          >
            <h1>Luciano Mariotti.</h1>
          </motion.div>
          <motion.div
            className="col-sm-10 subname"
            animate={{ x: [-1200, 0] }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <h1>I design &amp; build things for the web.</h1>
          </motion.div>
          <motion.div
            className="col-sm-6 description"
            animate={{ scale: [0.5, 1], opacity: [0.5, 1], x: [-1200, 0] }}
            transition={{ type: "spring", duration: 1.7 }}
          >
            <p className="">
              I&apos;m a Front-end developer.
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
