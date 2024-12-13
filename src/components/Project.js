import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import investment from "../assets/images/Investment.png";
import financial from "../assets/images/Financial.png";
import portfolio from "../assets/images/Portfolio.png";
import flowerDrink from "../assets/images/flower-drink.png";
import lms from "../assets/images/learning-management.png";
import catering from "../assets/images/catering.png";
import invigilator from "../assets/images/the-invigilator.png"
import coinkove from "../assets/images/coin-trading-platform.png"


gsap.registerPlugin(ScrollTrigger);

function Project() {
  const projects = [

    {
      key: 1,
      title: "Coin Trading Platform",
      image: coinkove,
      liveLink: "https://gideon-portfolio-theta.vercel.app/",
      githubLink: "https://gideon-portfolio-theta.vercel.app/",
      description: "Still in production",
    },

    {
      key: 2,
      title: "The Invigilator",
      image: invigilator,
      liveLink: "https://object-detection-app-psi.vercel.app/",
      githubLink: "https://github.com/Gideonthegre8t/object-detection-app",
      description: "Face Detection Exam App",
    },

    {
      key: 3,
      title: "Catering Website",
      image: catering,
      liveLink: "https://madame-kemmie-special.vercel.app/",
      githubLink: "https://github.com/Gideonthegre8t/madame-kemmie-special",
      description: "Responsive and Functional Catering App",
    },
    {
      key: 4,
      title: "Learning Management",
      image: lms,
      liveLink: "https://baselink-academy.vercel.app/",
      githubLink: "https://github.com/Gideonthegre8t/baselink-academy",
      description: "Responsive and functional Learning Management System",
    },
    {
      key: 5,
      title: "Flower Drink App",
      image: flowerDrink,
      liveLink: "https://flower-drink.vercel.app/",
      githubLink: "https://github.com/Gideonthegre8t/flower-drink",
      description: "Responsive and functional React app",
    },
    {
      key: 6,
      title: "Financial Website",
      image: financial,
      liveLink: "https://gideonthegre8t.github.io/portfolio-website-1/",
      githubLink: "https://github.com/Gideonthegre8t/portfolio-website-1",
      description: "Responsive and functional React website",
    },
    {
      key: 7,
      title: "Investment Website",
      image: investment,
      liveLink: "https://gideonthegre8t.github.io/portfolio-website-2/",
      githubLink: "https://github.com/Gideonthegre8t/portfolio-website-2",
      description: "Responsive and functional React website",
    },
    {
      key: 8,
      title: "Portfolio Website",
      image: portfolio,
      liveLink: "https://gideon-portfolio-theta.vercel.app/",
      githubLink: "https://github.com/Gideonthegre8t/gideon-portfolio",
      description: "Responsive and functional React website",
    },
  ];

  useEffect(() => {
    const projectContainer = document.querySelector(".project-container");

    // Apply parallax effect to the container
    gsap.to(projectContainer, {
      yPercent: -10, // Adjust the parallax intensity
      ease: "none",
      scrollTrigger: {
        trigger: projectContainer,
        start: "top bottom", // Trigger when the top of the container is in view
        end: "bottom top", // End when the bottom of the container leaves the viewport
        scrub: true, // Smooth scrubbing effect
      },
    });

    // Apply parallax effect to individual cards
    gsap.utils.toArray(".card-container > *").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

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
