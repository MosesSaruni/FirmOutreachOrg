import React, { useEffect } from "react";
import soon from "../assets/images/soon.png";
import Navbar from "../components/Navbar.jsx";
import Footer from "../sections/Footer.jsx";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const SocialsComingSoon = () => {
  const navigate = useNavigate();
  useEffect(() => {
    scrollToSection("top");
  }, []);
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
      >
        <div className="max-w-4xl mx-auto pt-48 h-screen px-2" id="top">
          <p className="text-center text-3xl text-[#2a52be] sm:text-md py-4 font-serif font-extrabold">
            Our social media pages are currently under construction—stay tuned
            for updates!
          </p>
          <div className="flex justify-center">
            <img
              src={soon}
              alt="social media coming soon"
              className="h-[200px] w-auto"
            />
          </div>

          <p className="text-center text-2xl sm:text-md py-4 mx-auto flex flex-row justify-center space-x-2">
            Return{" "}
            <p
              className="text-[#2a52be] px-2 cursor-pointer "
              onClick={() => {
                navigate("/");
              }}
            >
              home
            </p>
          </p>
        </div>
      </motion.div>
      <div className="bg-[#d3d3d3]">
        <Footer />
      </div>
    </>
  );
};

export default SocialsComingSoon;
