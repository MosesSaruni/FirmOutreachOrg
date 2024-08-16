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
      <div className=" mx-auto px-2 pt-24" id="top">
        {/* Contains IMAGE_16, IMAGE_17, IMAGE_18, IMAGE_19, IMAGE_20 */}
        <Programs />
      </div>

      <div className="bg-[#d3d3d3]">
        <Footer />
      </div>
    </>
  );
};

export default ProgramsPage;
