import React from "react";

function Navbar() {

  const handleClick = (event, id) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });

  };

  return (
    <div className="navigator">
      <nav className="navbar links">
        <a href="/#" onClick={(e) => handleClick(e, "project")}>
          Projects
        </a>
        <a href="/#" onClick={(e) => handleClick(e, "technology")}>
          Technologies
        </a>
        <a href="/#" onClick={(e) => handleClick(e, "about")}>
          About 
        </a>
      </nav>
     
    </div>
  );
}

export default Navbar;
