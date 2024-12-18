import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Project from "./components/Project";
import Technology from "./components/Technology";
import Skill from "./components/Skill";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Gideon Johnson | Frontend Developer</title>
        <meta
          name="description"
          content="Welcome to Gideon Johnson's portfolio. Explore projects, skills, and experience in modern frontend development using HTML, CSS, JavaScript, React, Next JS."
        />
        <meta
          name="keywords"
          content="Gideon Johnson, Frontend Developer, React, Animation, Tailwind CSS, Web Development, Portfolio"
        />
        <meta name="author" content="Gideon Johnson" />
        <link rel="canonical" href="https://gideon-portfolio-theta.vercel.app/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Gideon Johnson | Frontend Developer" />
        <meta
          property="og:description"
          content="Explore Gideon Johnson's portfolio to see expertise in modern web development, React, and Tailwind CSS."
        />
        <meta property="og:url" content="https://gideon-portfolio-theta.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gideon Johnson | Frontend Developer" />
        <meta
          name="twitter:description"
          content="Explore Gideon Johnson's portfolio to see expertise in modern web development, HTML, CSS, JavaScript, React, Next JS.."
        />
      </Helmet>

      <Header />
      <Project />
      <Technology />
      <Skill />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;
