import React, { useEffect } from "react";
import NavbarMob from "./components/Navbar";
import Footer from "./sections/Footer";
import Landing from "./sections/Landing";
import ContactUs from "./sections/ContactUs";
import AboutUs from "./sections/AboutUs";
import Programs from "./sections/Programs";
import Gallery from "./components/Gallery";
import Divider from "./components/Divider";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

import programs from "../src/assets/images/programs.png";
import NewContactForm from "./components/NewContactForm";
import BigCard from "./components/BigCard";
import PeekProjects from "./components/PeekProjects";

// For scrolling to different sections of the page

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const App = () => {
  useEffect(() => {
    scrollToSection("top");
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <NavbarMob />
      <div>
        <div className="pt-16 z-0 relative flex flex-col justify-center">
          <div id="top">
            <Landing />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
          >
            <BigCard />
          </motion.div>

          <div id="aboutus">
            <AboutUs />
          </div>

          <div
            id="programs"
            className="pt-16 max-w-7xl mx-auto px-2 flex justify-center flex-col items-center space-y-4"
          >
            <PeekProjects />
          </div>

          <div id="contactus" className="pt-16 bg-[#2a52be] mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: false }}
            >
              <p className="text-center font-extrabold text-3xl text-white py-2 font-serif">
                Contact us!
              </p>
              <p className="mt-3 text-lg font-semibold dark:text-slate-400 px-2 text-center max-w-6xl mx-auto text-white">
                Your feedback and questions are incredibly important to us.
                Whether you have inquiries about our programs, want to get
                involved, or have suggestions for how we can improve, we want to
                hear from you. Our dedicated team is committed to responding
                promptly to ensure your voice is heard and valued. Thank you for
                reaching out and supporting our mission!
              </p>
              <div className="max-w-5xl mx-auto px-2 pt-4">
                <NewContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-[#d3d3d3]">
        <Footer />
      </div>
    </>
  );
};

export default App;
