import React, { useRef, useEffect } from "react";
import Rive from "rive-react";
import Ellipseanimated from "../assets/animation/ellipseanim.riv";
import EllipseanimatedSm from "../assets/animation/semisllipseanim.riv";

function EllipseAnim() {
  const lgRef = useRef(null);
  const smRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const lgOffset = scrollY / 3; // Adjust the division value to control the intensity of the parallax effect for the large animation
      const smOffset = scrollY / 3; // Adjust the division value to control the intensity of the parallax effect for the small animation

      lgRef.current.style.transform = `translateY(${lgOffset}px)`;
      smRef.current.style.transform = `translateY(${smOffset}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="header-bottom anim-lg" ref={lgRef}>
        <Rive src={Ellipseanimated} />
      </div>

      <div className="header-bottom anim-sm" ref={smRef}>
        <Rive src={EllipseanimatedSm} />
      </div>
    </div>
  );
}

export default EllipseAnim;
