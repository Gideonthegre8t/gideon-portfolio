import React, { useEffect } from "react";
import Rive from "rive-react";
import { gsap } from "gsap";
import Ellipseanimated from "../assets/animation/ellipseanim.riv";
import EllipseanimatedSm from "../assets/animation/semisllipseanim.riv";

function EllipseAnim() {
  useEffect(() => {
    // Parallax effect for larger screens
    const parallaxAnimation = () => {
      const scrollY = window.scrollY;

      gsap.to(".anim-lg", {
        y: scrollY * 0.5, // Adjust the speed for parallax effect
        ease: "none",
      });

      gsap.to(".anim-sm", {
        y: scrollY * 0.2, // Slower effect for smaller elements
        ease: "none",
      });
    };

    // Add event listener for scroll
    window.addEventListener("scroll", parallaxAnimation);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", parallaxAnimation);
    };
  }, []);

  return (
    <div>
      <div className="header-bottom anim-lg">
        <Rive src={Ellipseanimated} />
      </div>

      <div className="header-bottom anim-sm">
        <Rive src={EllipseanimatedSm} />
      </div>
    </div>
  );
}

export default EllipseAnim;
