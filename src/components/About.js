import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  // Set up in-view hooks for the different sections
  const { ref: aboutRef, inView: inViewAbout } = useInView({
    triggerOnce: true, // Trigger the animation only once when it enters the view
    threshold: 0.3, // Trigger when 30% of the element is in view
  });

  const { ref: textRef, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section>
      <div id="about" className="about-container">
        <div
          className="about-header"
          ref={aboutRef}
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: inViewAbout ? 1 : 0,
              y: inViewAbout ? 0 : -50,
            }}
            transition={{ duration: 1 }}
          >
            About me
          </motion.h2>
        </div>

        <div className="about-card">
          <div className="about-text" ref={textRef}>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: inViewText ? 1 : 0,
                x: inViewText ? 0 : -50,
              }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              A Sofware Engineering with a knack for infusing websites with captivating animations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: inViewText ? 1 : 0,
                x: inViewText ? 0 : -50,
              }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              I ensure that every user, regardless of their device, enjoys a seamless and intuitive browsing experience, constantly exploring new technologies and techniques to deliver innovative solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: inViewText ? 1 : 0,
                x: inViewText ? 0 : -50,
              }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              I pay meticulous attention to every aspect of the development process, ensuring the highest standards of quality and precision while meeting appointed deadlines.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
