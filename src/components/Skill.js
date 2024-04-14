import React from "react";

function Skill() {
  return (
    <section>
      <div className="skill-container">
        <div className="skill-header">
          <h2>Additional tecnhnologies and skills</h2>
        </div>

        <div className="skills">
          {" "}
          <div className="skill-list">
            <div className="skill-dot"></div>
            <h3>Git</h3>
          </div>
          <div className="skill-list">
            <div className="skill-dot"></div>
            <h3>Teamwork</h3>
          </div>
          <div className="skill-list">
            <div className="skill-dot"></div>
            <h3>UI/3D animation</h3>
          </div>
          <div className="skill-list">
            <div className="skill-dot"></div>
            <h3>Quick learning</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
