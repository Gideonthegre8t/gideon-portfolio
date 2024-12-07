import React from "react";
import { motion } from "framer-motion";

function Skill() {
  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.9,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <section>
      <div className="skill-container">
        <div className="skill-header">
          <h2>Additional technologies and skills</h2>
        </div>

        <div className="skills">
          {["Git", "Tailwind CSS", "UI/3D animation", "SEO Management"].map(
            (skill, index) => (
              <div className="skill-list" key={index}>
                <motion.div
                  className="skill-dot"
                  variants={bounceVariants}
                  initial="initial"
                  animate="animate"
                ></motion.div>
                <h3>{skill}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Skill;
