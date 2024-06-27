import React from "react";
import "../App.css";
import img from "../assets/images/FO-img1.jpeg";
// const image = require("../assets/images/FO-img1.jpeg");

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Landing = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          // "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          "url(http://firmoutreach.org/site/wp-content/uploads/2022/10/WhatsApp-Image-2022-09-30-at-5.42.06-PM.jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md fade-in-vertical">
          <h1 className="mb-5 text-5xl font-bold ">The Firm Outreach</h1>
          <p className="mb-5 font-serif ">
            "Together we stand, together we win"
          </p>
          <p className="mb-5 ">
            To engage, educate, advocate and empower individuals to create a
            successful community, overcoming barriers which prevent growth.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("contactus")}
          >
            Get in touch!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
