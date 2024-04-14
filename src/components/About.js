import React from "react";
// import dot from "../assets/images/dot.png";
function About() {
  return <section>
    <div id="about" className="about-container">
        <div className="about-header">
            <h2>About me</h2>
        </div>

        <div className="about-card">
            <div className="about-text">
            <h3>2024</h3>    
            <p>Finished my Dev Career Frontend Tech Program and started building my portfolio websites kick starting my Devloper career in Full Stack development</p>
            </div>

            <div className="about-text">
            <h3>2023</h3>    
            <p>Started my Dev Career Frontend Tech Program, studying frontend resources, while building demo projects and transforming UI figma designs to code   </p>
            </div>

            <div className="about-text">
            <h3>2022</h3>    
            <p>Became a professional in 3D animation, taking on my persoanl projects, like creating animations that promtes sports and fitness which became overall inspiration for learning web and app development (Full Stack)</p>
            </div>

            <div className="about-text">
            <h3>2018-2021</h3>    
            <p>Finished my college degree in Computer Engineering in 2018 and began internship for 3D aniamtion studio in 2019 and finished in 2020, where I got employed at a Cerebral Hub as a 3D animator</p>
            </div>

        </div>
{/* 
        <div className="about-line">
        <div className="about-dot dot1"><img src={dot} alt="dot" /></div>
        <div className="about-dot dot2"><img src={dot} alt="dot" /></div>
        <div className="about-dot dot3"><img src={dot} alt="dot" /></div>
        <div className="about-dot dot4"><img src={dot} alt="dot" /></div>

        <div className="line"></div>
        </div> */}
    </div>
  </section>
}

export default About;
