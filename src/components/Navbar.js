import React from "react";
import { motion } from "framer-motion";
import "../assets/css/Navbar.css";

export default function Navbar() {
  const isSmallAnimation = window.matchMedia("(max-width: 600px)");

  const svgVariants = isSmallAnimation.matches
    ? {
        hidden: {
          scale: 2.5,
          y: 200,
          x: 100,
        },
        visible: {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          transition: { duration: 5, delay: 5, type: "spring" },
        },
      }
    : {
        hidden: {
          scale: 3,
          y: 260,
          x: 140,
        },
        visible: {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          transition: { duration: 5, delay: 5, type: "spring" },
        },
      };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ y: [-600, 0], opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="131"
            height="27"
            viewBox="0 0 131 27"
            fill="none"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.5328 2L31.3682 26H41.9896L43.9344 22.1212H45.2808L47.3003 26H57.6973L44.5328 2ZM43.4108 18.4848L41.7652 21.3939L41.466 18L42.8124 15.6566V13.2323L44.5328 10.0808L46.2532 13.2323V15.6566L47.7491 18L47.3003 21.3939L45.8044 18.4848H43.4108Z"
              stroke="white"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60.9137 2H73.6295C80.5857 2 85.672 11.8868 76.397 16.2642C77.7434 16.7925 79.374 18.8151 83.2037 26H76.397L72.7319 19.1321C71.6099 17.0943 70.7871 17.0943 67.5708 17.0943V26H60.9137V14V2ZM71.8343 12.2642C76.397 12.2642 76.397 6.5283 71.8343 6.5283H67.5708V12.2642H71.8343Z"
              stroke="white"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M26.9551 26V2H21.7192L14.015 15.6566L6.98389 2H1V26H6.98389V13.2323L12.2946 22.6792H15.8101L21.2704 12.8679V26H26.9551Z"
              stroke="white"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M85.672 2V26H92.1795V2H85.672Z"
              stroke="white"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M114.143 2C107.876 2 102.795 7.37258 102.795 14C102.795 14.716 102.855 15.4174 102.968 16.099M114.143 2C119.874 2 124.613 6.49329 125.381 12.3304M114.143 2C118.63 2 122.509 4.75478 124.35 8.75246M125.381 12.3304C128 11 127.5 10 124.844 10M125.381 12.3304C125.254 11.3625 125.177 10.8797 124.844 10M125.381 12.3304C123.592 13.276 119.594 14.9595 114.5 16.5C111.311 17.4642 107.779 18.3725 103.828 19.0087M124.35 8.75246C127.849 8.61333 134.855 8.63652 125.469 14.7304C120.521 17.7434 111.501 20.3466 104.976 21.0745C97.5 21.9085 95.4998 19.5 102.968 16.0976L102.968 16.099M124.35 8.75246C124.645 9.44635 124.721 9.68672 124.844 10M103.828 19.0087C102.5 19.2226 99.4998 19.5 103.285 17.5M103.828 19.0087C103.43 18.0949 103.138 17.1191 102.968 16.099M103.828 19.0087C103.616 18.5224 103.435 18.0187 103.285 17.5M103.285 17.5C103.154 17.0439 103.048 16.5763 102.968 16.099M103.285 17.5C103.18 17.0946 103.153 17.0001 102.968 16.099M113.915 25.7792C111.504 25.7792 109.269 24.9841 107.431 23.6283C110.504 23.6316 118.191 22.6106 124.351 18.5C122.617 22.7804 118.597 25.7792 113.915 25.7792Z"
              stroke="white"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>

          <div
            className="collapse navbar-collapse background-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a href="#about" className="nav-link">
                Sobre mí
              </a>
              <a href="#proyects" className="nav-link">
                Proyectos
              </a>
              <a href="#contact" className="nav-link">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
