import React from "react";
import ProjectCard from "./ProjectCard";
import investment from "../assets/images/Investment.png";
import financial from "../assets/images/Financial.png";
import portfolio from "../assets/images/Portfolio.png";
import flowerDrink from "../assets/images/flower-drink.png";

function Project() {
  const projects = [
    {
      key:1,
      title: "Flower Drink App",
      image: flowerDrink,
      liveLink: "https://flower-drink.vercel.app/",
      githubLink: "https://github.com/Gideonthegre8t/flower-drink",
      description: "Responsive and functional React app",
    },
    {
      key:2,
      title: "Financial Website",
      image: financial,
      liveLink: "https://gideonthegre8t.github.io/portfolio-website-1/",
      githubLink: "https://github.com/Gideonthegre8t/portfolio-website-1",
      description: "Responsive and functional React website",
    },
    {
      key:3,
      title: "Investment Website",
      image: investment,
      liveLink: "https://gideonthegre8t.github.io/portfolio-website-2/",
      githubLink: "https://github.com/Gideonthegre8t/portfolio-website-2",
      description: "Responsive and functional React website",
    },
    {
      key:4,
      title: "Portfolio Website",
      image: portfolio,
      liveLink: "https://gideon-portfolio-theta.vercel.app/",
      githubLink: "https://github.com/Gideonthegre8t/gideon-portfolio",
      description: "Responsive and functional React website",
    },
  ];

  return (
    <section>
      <div id="project" className="project-container">
        <div>
          <h2 className="project-header">Projects</h2>
        </div>
        <div className="card-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
