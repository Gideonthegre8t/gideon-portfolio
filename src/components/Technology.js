import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50% 0px" }); // Trigger only once
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1 } },
  };

  if (isInView && !hasAnimated) {
    setHasAnimated(true); // Set state to ensure animation only triggers on first scroll down
  }

  return (
    <section ref={ref}>
      <motion.div
        id="technology"
        className="tech-container"
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"} // Animate only if it's the first view
        variants={containerVariants}
      >
        <div>
          <motion.h2
            className="tech-header"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Technologies
          </motion.h2>
        </div>

        <motion.div className="stack" variants={containerVariants}>
          {[
            { name: "Html", level: "Expert", class: "html" },
            { name: "CSS", level: "Expert", class: "css" },
            { name: "JavaScript", level: "Professional", class: "java" },
            { name: "React.js", level: "Professional", class: "react" },
            { name: "Next.js", level: "Professional", class: "react" },
            
          ].map((tech, index) => (
            <motion.div
              className="tech-card"
              key={index}
              variants={cardVariants}
            >
              <div className="skill-level">
                <h4>{tech.name}</h4>
                <h4 className="tiny">{tech.level}</h4>
              </div>
              <div className="meter">
                <div className={`${tech.class}-outside outside`}>
                  <motion.div
                    className={`${tech.class}-inside inside`}
                    variants={progressVariants}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Technology;
