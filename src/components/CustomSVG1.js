import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const VerticalWaveSVG = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;

    // Morph the wave dynamically
    gsap.to(path, {
      attr: {
        d: "M100 0 C150 200, 50 400, 100 600 T100 1200",
      },
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power1.inOut",
    });

    // Scroll effect: Animate stroke dash offset on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const strokeOffset = scrollPosition % 1000;
      path.style.strokeDashoffset = `${1000 - strokeOffset}`;
    };

    // Set up the event listener for scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <svg
      className="customSVG1"
      viewBox="0 0 300 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <path
        ref={pathRef}
        d="M100 0 C200 100, 0 300, 100 600 T100 1200"
        stroke="url(#verticalWaveGradient)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ strokeDasharray: "1000", strokeDashoffset: "1000" }}  
      />
      <defs>
        <linearGradient
          id="verticalWaveGradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#4A90E2" />
          <stop offset="50%" stopColor="#50E3C2" />
          <stop offset="100%" stopColor="#B8E986" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VerticalWaveSVG;
