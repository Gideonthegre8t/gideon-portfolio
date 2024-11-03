import React, { useEffect, useRef } from "react";

function Technology() {
  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const javaRef = useRef(null);
  const reactRef = useRef(null);
  const nextRef  = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollY;
      if (window.innerWidth < 600) {
        // Adjust scroll offset for smaller screens
        scrollY = window.scrollY / 80; // Adjust the division value to control the intensity of the parallax effect on smaller screens
      } else {
        scrollY = window.scrollY / 30; // Adjust the division value to control the intensity of the parallax effect on larger screens
      }

      const htmlOffset = scrollY 
      const cssOffset = scrollY;
      const javaOffset = scrollY;
      const reactOffset = scrollY;
      const nextOffset  = scrollY;

      htmlRef.current.style.transform = `translateY(${htmlOffset}px)`;
      cssRef.current.style.transform = `translateY(${cssOffset}px)`;
      javaRef.current.style.transform = `translateY(${javaOffset}px)`;
      reactRef.current.style.transform = `translateY(${reactOffset}px)`;
      nextRef.current.style.transform = `translateY(${nextOffset}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div
        id="technology"
        className="tech-container"
      >
        <div>
          <h2 className="tech-header">Technologies</h2>
        </div>

        <div className="stack">
        <div className="tech-card" ref={htmlRef}>
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

        <div className="tech-card" ref={cssRef}>
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

        <div className="tech-card" ref={javaRef}>
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

        <div className="tech-card" ref={reactRef}>
          <div className="skill-level">
            <h4>React.js</h4>
            <h4 className="tiny">Intermediate</h4>
          </div>

          <div className="meter">
            <div className="react-outside outside">
              {" "}
              <div className="react-inside inside"></div>
            </div>
          </div>
        </div>

        <div className="tech-card" ref={nextRef}>
          <div className="skill-level">
            <h4>Next.js</h4>
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
      </div>
    </section>
  );
}

export default Technology;
