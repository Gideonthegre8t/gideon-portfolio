import React from "react";
import Navbar from "./Navbar";
// import ellipse1 from "../assets/images/Ellipse 1.png";
// import ellipse2 from "../assets/images/Ellipse 2.png";
// import ellipse from "../assets/images/full-ellipse.png";
import EllipseAnim from "./EllipseAnimation";
import BackToTopText from "./BackToTopText";

function Header() {
  //   //Handle CV download

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1Y6iVhNAy_CXprdlU-1X3sJn-3ZuH-6cT/view?usp=drive_link,",
      "_blank"
    );
  };

  return (
    <header>
      <div className="header-top">
        <div><h1 className="init-logo"> G.J. portfilio</h1></div>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="header-content-flex">
        <div className="header-content">
          <h2>
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
          {/* <img className="ellipse1" src={ellipse1} alt="ellipse-semi-circle" />
          <img className="full-ellipse" src={ellipse} alt="ellipse1" />
          <img className="ellipse2" src={ellipse2} alt="ellipse2" /> */}
        </div>
      </div>
      <BackToTopText />
    </header>
  );
}

export default Header;