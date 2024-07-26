import React, { useEffect } from "react";
import NavbarMob from "../components/Navbar";
import Programs from "../sections/Programs";
import Footer from "../sections/Footer";

// For scrolling to different sections of the page

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const ProgramsPage = () => {
  useEffect(() => {
    scrollToSection("top");
  }, []);
  return (
    <>
      <NavbarMob />
      <div className="max-w-6xl mx-auto px-1 pt-24" id="top">
        <Programs />
      </div>
      <div className="bg-[#d3d3d3]">
        <Footer />
      </div>
    </>
  );
};

export default ProgramsPage;
