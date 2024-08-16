import React from "react";
import ProjectCard from "./ProjectCard";
import investment from "../assets/images/Investment.png";
import financial from "../assets/images/Financial.png";
import portfolio from "../assets/images/Portfolio.png";
import flowerDrink from "../assets/images/flower-drink.png";
import lms from "../assets/images/learning-management.png";
import catering from "../assets/images/catering.png";

function Project() {
  const projects = [
    {
      key:1,
      title: "Catering Website",
      image: catering,
      liveLink: "https://madame-kemmie-special.vercel.app/",
      githubLink: "https://github.com/Gideonthegre8t/madame-kemmie-special",
      description: "Responsive and Functional Catering App",
    },
    {
      key:2,
      title: "Learning Management System",
      image: lms,
      liveLink: "https://baselink-academy.vercel.app/",
      githubLink: "https://github.com/Gideonthegre8t/baselink-academy",
      description: "Responsive and functional Learning Management System",
    },
    {
      key:3,
      title: "Flower Drink App",
      image: flowerDrink,
      liveLink: "https://flower-drink.vercel.app/",
      githubLink: "https://github.com/Gideonthegre8t/flower-drink",
      description: "Responsive and functional React app",
    },
    {
      key:4,
      title: "Financial Website",
      image: financial,
      liveLink: "https://gideonthegre8t.github.io/portfolio-website-1/",
      githubLink: "https://github.com/Gideonthegre8t/portfolio-website-1",
      description: "Responsive and functional React website",
    },
    {
      key:5,
      title: "Investment Website",
      image: investment,
      liveLink: "https://gideonthegre8t.github.io/portfolio-website-2/",
      githubLink: "https://github.com/Gideonthegre8t/portfolio-website-2",
      description: "Responsive and functional React website",
    },
    {
      key:6,
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
