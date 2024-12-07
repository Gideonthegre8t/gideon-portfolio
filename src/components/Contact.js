import React, { useState } from "react";
import { motion } from "framer-motion";
import spaceMan from "../assets/images/space-man.png";
import spaceShip from "../assets/images/spaceship.png";

function Contact() {
  const [buttonText, setButtonText] = useState("Send it to the moon");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Update button text to indicate sending
    setButtonText("Sending...");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/movawyze", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setButtonText("Sent!");
      } else {
        setButtonText("Send it to the moon");
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      setButtonText("Send it to the moon");
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" style={{ position: "relative", overflow: "hidden" }}>
      {/* Space-themed background animation */}
      <motion.div
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          width: "150%",
          height: "150%",
          background: "radial-gradient(circle, #2a1a5e, #000)",
          zIndex: -1,
          borderRadius: "50%",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 180, // Slow rotation for a cosmic feel
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glowing Moon */}
      <motion.div
        className="moon"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "150px",
          height: "150px",
          backgroundColor: "#fff", // Brighter moon color
          borderRadius: "50%",
          boxShadow:
            "0 0 80px rgba(255, 255, 255, 0.6), 0 0 120px rgba(255, 255, 255, 0.4)", // Stronger glowing effect
          zIndex: -1,
          filter: "blur(15px)", // Softens the glow
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror", // For subtle pulsing
          ease: "easeInOut",
        }}
      />

      {/* Stars */}
      <motion.div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        animate={{
          opacity: [0.5, 1, 0.5], // Twinkling stars effect
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        {/* Star 1 */}
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "90%",
            width: "4px",
            height: "4px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          }}
        />
        {/* Star 2 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            width: "3px",
            height: "3px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          }}
        />

        {/* Star 3 */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "100%",
            width: "4px",
            height: "4px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          }}
        />
        {/* Star 4 */}
        <div
          style={{
            position: "absolute",
            top: "90%",
            left: "100%",
            width: "3px",
            height: "3px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          }}
        />

        {/* Star 5 */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "90%",
            width: "4px",
            height: "4px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* Rotating Stars */}
      <motion.div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        animate={{
          rotate: [0, 360], // Rotating stars for extra dynamic effect
        }}
        transition={{
          duration: 180, // Slow enough for a cosmic feel
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Rotating Stars */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "60%",
            width: "5px",
            height: "5px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "20%",
            width: "3px",
            height: "3px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "10%",
            width: "6px",
            height: "6px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* Contact content */}
      <div className="center contact-wrapper">
        <div className="center contact-top">
          <h2>
            Get in t<span className="text-gradient">ouch</span>
          </h2>
          <p>Reach out and let me bring your ideas to life!</p>
        </div>

        <div className="contact-bottom-wrapper">
          <div className="contact-bottom center">
            {/* Form */}
            <div>
              <div className="contact-bottom-header">
                <h3>Let's connect</h3>
                <p>
                  Reach out and let the magic of collaboration illuminate our
                  skies.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-wrapper">
                  <div className="contact-form-top">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      required
                    />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                  <button className="send" type="submit">
                    {buttonText}
                    <motion.img
                      className="space-ship"
                      src={spaceShip}
                      alt="space-ship"
                      animate={{
                        x: [0, 10, -10, 0], // Smooth horizontal movement
                        y: [0, -5, 5, 0], // Slight vertical floating
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </button>
                </div>
              </form>
            </div>

            {/* Right section with spaceman */}
            <div className="contact-right">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.img
                  className="space-man"
                  src={spaceMan}
                  alt="space-man"
                  animate={{
                    y: [0, -15, 15, 0], // Floating effect
                    rotate: [-2, 2, -2], // Slight rotation for a playful feel
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
          <p className="quote">
            Greatness is for those who persistently pursue their dreams
            everyday.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
