import React from "react";

function Technology() {
  return (
    <section>
      <div id="technology"
        className="
    tech-container"
      >
        <div>
          <h2 className="tech-header">Technologies</h2>
        </div>

        <div className="tech-card">
          <div className="skill-level">
            <h4>Html</h4>
            <h4 className="tiny">Expert</h4>
          </div>

          <div className="meter">
            <div className="html-outside outside">
              {" "}
              <div className="html-inside inside"></div>
            </div>
          </div>
        </div>

        <div className="tech-card">
          <div className="skill-level">
            <h4>CSS</h4>
            <h4 className="tiny">Expert</h4>
          </div>

          <div className="meter">
            <div className="css-outside outside">
              {" "}
              <div className="css-inside inside"></div>
            </div>
          </div>
        </div>


        <div className="tech-card">
          <div className="skill-level">
            <h4>JavaScript</h4>
            <h4 className="tiny">Advanced</h4>
          </div>

          <div className="meter">
            <div className="java-outside outside">
              {" "}
              <div className="java-inside inside"></div>
            </div>
          </div>
        </div>

        <div className="tech-card">
          <div className="skill-level">
            <h4>React</h4>
            <h4 className="tiny">Intermediate</h4>
          </div>

          <div className="meter">
            <div className="react-outside outside">
              {" "}
              <div className="react-inside inside"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Technology;
