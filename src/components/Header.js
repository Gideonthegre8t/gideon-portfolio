import React from "react";
import Navbar from "./Navbar";
import EllipseAnim from "./EllipseAnimation";
import BackToTopText from "./BackToTopText";

function Header() {
//Handle CV download

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/drive/folders/1b973Cdza-S8Hyf9d_70RkTVOkc-eTZO6?usp=sharing,",
      "_blank"
    );
  };

  return (
    <header className="header animation-layer parallax" id="header-anim">
      <div className="header-top">
        <div>
          <h1 className="init-logo"> G.J. portfolio</h1>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="header-content-flex ">
        <div className="header-content">
          <h2 className="title">
            <span>Hello, I'm Gideon,</span> Frontend developer
          </h2>
          <p>
            I specialize in creating dynamic web experiences. Each project
            demonstrates my abiity to design responsive and visually appealing
            interfaces.
          </p>
          <button onClick={handleDownloadCV} className="cv-button">
            Download CV
          </button>
        </div>
        <div className="header-bottom shrink rive-anim">
          <EllipseAnim />
        </div>
      </div>
      <BackToTopText />
    </header>
  );
}

export default Header;
