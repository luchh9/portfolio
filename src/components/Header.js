import React from "react";
import { motion } from "framer-motion";
import planet from "../assets/statics/Astronaut.png";
import "../assets/css/Header.css";

const svgVariants = {
  hidden: { rotate: 360 },
  visible: {
    rotate: [0, 0, 360, 0],
    y: [0, 20, 0],
    transition: { duration: 5, repeat: Infinity },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: [1, 0.7, 1, 0, 5, 1],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function Header() {
  return (
    <section>
      <div className="container">
        <div className="row header header-text">
          <motion.div
            className="col-xl-8 subname"
            animate={{ x: [-1200, 0] }}
            transition={{ duration: 1.5, type: "spring", delay: 5 }}
          >
            <h1>Luciano Mariotti.</h1>
            <h2>Disfruto de diseñar y plasmar ideas en la web.</h2>

            <motion.div
              className="col-xl-6 description"
              animate={{ scale: [0.5, 1], opacity: [0.5, 1], x: [-1200, 0] }}
              transition={{ type: "spring", duration: 1.7 }}
            >
              <p>Desarrollador front-end.</p>
            </motion.div>
          </motion.div>

          <div className="col-xl-4 astronaut">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="46"
              viewBox="0 0 44 46"
              fill="none"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.ellipse
                rx="8.70778"
                ry="18.9562"
                transform="matrix(-0.921534 0.403404 0.395993 0.911694 21.7208 23.1758)"
                stroke="#1ABCFE"
                strokeWidth="2"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.ellipse
                rx="8.69658"
                ry="18.9348"
                transform="matrix(0.127853 -0.991693 -0.992255 -0.12396 21.6448 23.2423)"
                stroke="#1ABCFE"
                strokeWidth="2"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.ellipse
                rx="8.53262"
                ry="18.8082"
                transform="matrix(-0.787704 -0.606351 -0.617234 0.794265 21.7801 23.332)"
                stroke="#1ABCFE"
                strokeWidth="2"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.ellipse
                rx="2.47186"
                ry="2.44242"
                transform="matrix(-0.991908 -0.126443 -0.130141 0.991427 21.5266 23.3154)"
                fill="#1ABCFE"
                stroke="#1ABCFE"
                strokeWidth="2"
              />
            </motion.svg>
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
