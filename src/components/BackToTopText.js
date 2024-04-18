import React, { useEffect, useState } from "react";
import topArrow  from "../assets/images/back-to-top.png"

function BackToTopText() {
  //handle BacKToTopText State
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showBackToTop && (
        <button className="back-to-top">
          <img onClick={scrollUp} className="top-arrow" src= {topArrow} alt="arrow-top"/>
        </button>
      )}
    </div>
  );
}

export default BackToTopText;
