import React, { useState } from "react";
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
    <section id="contact">
      <div className="center contact-wrapper">
        <div className="center contact-top">
          <h2>
            Get in t<span>ouch</span>
          </h2>
          <p>Reach out and let me bring your ideas to life!</p>
        </div>

        <div>
          <div className="contact-bottom center">
            <div>
              <div className="contact-bottom-header ">
                <h3 >Let's connect</h3>
                <p >
Reach out and let the magic of
                  collaboration illuminate our skies.
                </p>
              </div>

              {/* Formspree form */}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-wrapper">
                  <div className="contact-form-top">
                    <div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <button className="send" type="submit">
                    {buttonText}{" "}
                    <img
                      className="space-ship"
                      src={spaceShip}
                      alt="space-ship"
                    />
                  </button>
                </div>
              </form>
            </div>

            <div className="contact-right">
              <div >
                <img className="space-man" src={spaceMan} alt="space-man" />
              </div>
              <p className="quote">
                Greatness is for those who persistently pursue their dreams
                everyday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
