import React from "react";
import Navbar from "./Navbar";
import EllipseAnim from "./EllipseAnimation";
import BackToTopText from "./BackToTopText";
import { motion } from "framer-motion";


function Header() {
  //Handle CV download

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1hUh10S2Z-fDsH6n5SFPkqy95RJj02bJz/view?usp=sharing,",
      "_blank"
    );
  };

  const logo = "G.J Portfolio";

  return (
    <header className="header animation-layer parallax" id="header-anim">
      <div className="header-top">
        <div>
          <h2 className="init-logo text-gradient">
            {logo.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h2>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="header-content-flex ">
        <motion.div
          className="header-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hello,
            <motion.span
              className="text-gradient"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {" "}
              I'm Gideon,
            </motion.span>{" "}
            Frontend developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I specialize in creating dynamic web experiences. Each project
            demonstrates my ability to design responsive and visually appealing
            interfaces.
          </motion.p>
          <motion.button
            onClick={handleDownloadCV}
            className="cv-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Download CV
          </motion.button>
        </motion.div>
        <svg
          width="10"
          height="10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="menu-item__line js-line"
          overflow="visible"
          preserveAspectRatio="none"
          style={{ width: "25px", height: "25px" }}
        >
          <path d="M0,0 Q0,0 0,0" className="menu-item__path"></path>
          <path d="M0,0 Q0,0 0,0" className="menu-item__path"></path>
        </svg>

        <div className="header-bottom shrink rive-anim">
          <EllipseAnim />
        </div>
      </div>
      <BackToTopText />
    </header>
  );
}

export default Header;
