import React from "react";
import Investment from "../assets/images/Investment.png";
import Financial from "../assets/images/Financial.png";
import Portfolio from "../assets/images/Portfolio.png";

function Project() {
  // Handle OnClick for project
  const handleProjectInvestment = () => {
    window.open("https://gideonthegre8t.github.io/portfolio-website-2/", "_blank");
  };

  const handleProjectFinancial = () => {
    window.open("https://gideonthegre8t.github.io/portfolio-website-1/", "_blank");
  };

  const handleProjectPortfolio = () => {
    window.open("https://Gideonthegre8t.github.io/GideonJohnsonPortfolio", "_blank");
  };

  // Handle OnClick for Github
  const handleInvesmentGithub = () => {
    window.open("https://github.com/Gideonthegre8t/portfolio-website-2", "_blank");
  };

  const handleFinancialGithub = () => {
    window.open("https://github.com/Gideonthegre8t/portfolio-website-1", "_blank");
  };

  const handlePortfolioGithub = () => {
    window.open("https://github.com/Gideonthegre8t/GideonJohnsonPortfolio", "_blank");
  };

  return (
    <section>
      <div id="project" className="project-container">
        <div>
          <h2 className="project-header">Projects</h2>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="project-top">
              <img className="financial" src={Investment} alt="financial-pic" />
              <div className="project-text">
                <h3 className="project-title">Investment Website</h3>
                <p>Responsive and functional React website</p>
              </div>
            </div>
            <div className="project-links">
              <button onClick={handleProjectInvestment} className="preview-button">
                Live Preview
              </button>
              <button onClick={handleInvesmentGithub} className="git-button">
                GitHub
              </button>
            </div>
          </div>
          <div className="card">
            <div className="project-top">
              <img className="financial" src={Financial} alt="financial-pic" />
              <div className="project-text">
                <h3 className="project-title">Financial Advisers Website</h3>
                <p>Responsive and functional React website</p>
              </div>
            </div>
            <div className="project-links">
              <button onClick={handleProjectFinancial} className="preview-button">
                Live Preview
              </button>
              <button onClick={handleFinancialGithub} className="git-button">
                GitHub
              </button>
            </div>
          </div>
          <div className="project-container2">
            <div className="card">
              <div className="project-top">
                <img className="financial" src={Portfolio} alt="portfolio-pic" />
                <div className="project-text">
                  <h3 className="project-title">Portfolio Website</h3>
                  <p>Responsive and functional React website</p>
                </div>
              </div>
              <div className="project-links">
                <button onClick={handleProjectPortfolio} className="preview-button">
                  Live Preview
                </button>
                <button onClick={handlePortfolioGithub} className="git-button">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
