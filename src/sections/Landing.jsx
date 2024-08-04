import React from "react";
import "../App.css";
import { motion } from "framer-motion";

import cover1 from "../assets/images/cover1.jpg";
import { TypeAnimation } from "react-type-animation";

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
      <div className="hero-overlay bg-opacity-35"></div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="hero-content text-center text-neutral-content bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30"
        >
          <div className="max-w-md fade-in-vertical">
            <h1 className="mb-5 text-5xl font-bold font-serif">
              The Firm Outreach
            </h1>

            <p className="mb-2 text-md">
              To engage, educate, advocate and empower individuals to create a
              successful community, overcoming barriers which prevent growth.
            </p>

            <div className="font-serif mb-2">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Together we stand,",
                  1750,
                  "Together we win!",
                  2000,
                ]}
                speed={10}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
            </div>

            <div class="relative inline-flex  group">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#2a52be] via-[#44BCFF] to-[#2a52be] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt border-2 border-white"></div>
              <a
                onClick={() => scrollToSection("contactus")}
                title="Get in touch!"
                class="relative bg-[#2a52be] inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Get in touch!
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
