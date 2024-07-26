import React, { useEffect } from "react";
import NewContactForm from "../components/NewContactForm.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../sections/Footer.jsx";

// For scrolling to different sections of the page

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const ContactPage = () => {
  useEffect(() => {
    scrollToSection("top");
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-16 px-2" id="top">
        <p className="text-4xl font-extrabold tracking-wide text-[#2a52be] text-center mt-10">
          Contact Us
        </p>

        <p className="mt-3 mb-12 text-lg font-semibold dark:text-slate-400 px-2 text-center">
          Your feedback and questions are incredibly important to us. Whether
          you have inquiries about our programs, want to get involved, or have
          suggestions for how we can improve, we want to hear from you. Our
          dedicated team is committed to responding promptly to ensure your
          voice is heard and valued. Thank you for reaching out and supporting
          our mission!
        </p>
        <NewContactForm />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
