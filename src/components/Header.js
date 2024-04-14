import React from "react";
import Navbar from "./Navbar";
import ellipse1 from "../assets/images/Ellipse 1.png";
import ellipse2 from "../assets/images/Ellipse 2.png";
import ellipse from "../assets/images/full-ellipse.png";
import profilePhoto from "../assets/images/GIDEON.png";

function Header() {
  //   //Handle CV download
  // const handleDownload = () => {
  // const cvUrl = process.env.PUBLIC_URL + 'https://drive.google.com/file/d/1H-5dAuNiFs3iw-iz_82zkzcfzRaSwBQ9/view?usp=drive_link';
  // window.open(cvUrl, '_blank')
  // }

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1H-5dAuNiFs3iw-iz_82zkzcfzRaSwBQ9/view?usp=drive_link,",
      "_blank"
    );
  };

  return (
    <header>
      <div className="header-top">
        <h1> G.J. portfilio</h1>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="header-content-flex">
        <div className="header-content">
          <h2>
            <span>Hello, I'm Gideon,</span> frontend developer
          </h2>
          <p>
            UI/3D Animator seeking to apply competent development skills with
            focus and collaboration , communitcation and passion
          </p>
          <button onClick={handleDownloadCV} className="cv-button">
            Download CV
          </button>
        </div>
        <div className="header-bottom shrink">
          <img className="ellipse1" src={ellipse1} alt="ellipse-semi-circle" />
          <img className="full-ellipse" src={ellipse} alt="ellipse1" />
          <img className="photo" src={profilePhoto} alt="profile-pic" />
          <img className="ellipse2" src={ellipse2} alt="ellipse2" />
        </div>
      </div>
    </header>
  );
}

export default Header;
