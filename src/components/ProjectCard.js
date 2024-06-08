import React from "react";

function ProjectCard({ project }) {
  const { title, image, liveLink, githubLink, description } = project;

  const handleLivePreview = () => {
    window.open(liveLink, "_blank");
  };

  const handleGithub = () => {
    window.open(githubLink, "_blank");
  };

  return (
    <div className="card">
      <div className="project-top">
        <img className="project-image" src={image} alt={title} />
        <div className="project-text">
          <h3 className="project-title">{title}</h3>
          <p>{description}</p>
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
    </div>
  );
}

export default ProjectCard;
