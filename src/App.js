import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Technology from "./components/Technology";
import Skill from "./components/Skill";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Technology />
      <Skill />
      <About />
      <Footer />
    </div>
  );
}

export default App;
