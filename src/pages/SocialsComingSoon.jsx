import React, { useEffect } from "react";
import coming from "../assets/images/coming.png";
import Navbar from "../components/Navbar.jsx";
import Footer from "../sections/Footer.jsx";

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const SocialsComingSoon = () => {
  useEffect(() => {
    scrollToSection("top");
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto pt-20" id="top">
        <p className="text-center text-3xl text-[#2a52be] ">
          Our social media pages are currently under construction—stay tuned for
          updates!
        </p>

        <img src={coming} alt="social media coming soon" />
      </div>
      <Footer />
    </>
  );
};

export default SocialsComingSoon;
