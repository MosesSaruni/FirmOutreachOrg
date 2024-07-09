import React from "react";
import "../App.css";
import { motion } from "framer-motion";

import cover1 from "../assets/images/cover1.jpg";

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
        backgroundImage: `url(${cover1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
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
              className="border-2 hover:bg-white hover:text-[#2a52be] px-4 py-2 rounded-md bg-[#2a52be] text-white transition-all duration-300 ease-in-out"
              onClick={() => scrollToSection("contactus")}
            >
              <p className="text-xl">Get in touch!</p>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
