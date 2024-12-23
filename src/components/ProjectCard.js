import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function ProjectCard({ project }) {
  const { title, image, liveLink, githubLink, description } = project;

  const handleLivePreview = () => {
    window.open(liveLink, "_blank");
  };

  const handleGithub = () => {
    window.open(githubLink, "_blank");
  };

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      boxShadow: "0 0 20px 4px rgba(0, 191, 255, 0.8)",
      borderColor: "#00bfff",
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      boxShadow: "none",
      borderColor: "transparent",
      duration: 0.3,
    });
  };

  return (
    <motion.div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      style={{
        border: "2px solid transparent",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "transform 0.3s ease",
      }}
    >
      <div className="project-top" style={{ position: "relative" }}>
        <motion.img
          className="project-image"
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="project-text" style={{ padding: "16px" }}>
          <h3 className="project-title" style={{ fontSize: "1.25rem" }}>
            {title}
          </h3>
          <p style={{ color: "#666" }}>{description}</p>
        </div>
      </div>
      <div className="project-links">
        <button onClick={handleLivePreview} className="preview-button">
          Live Preview
        </button>
        <button onClick={handleGithub} className="git-button">
          GitHub
        </button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
