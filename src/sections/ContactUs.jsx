import React from "react";
import LocationInfo from "../components/LocationInfo";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";
import { motion } from "framer-motion";

import NewContactForm from "../components/NewContactForm";

const ContactUs = () => {
  return (
    <>
      {/* <ContactForm /> */}
      <div className="pt-16 bg-[#2a52be] mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewContactForm />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <LocationInfo />
      </motion.div>
      {/* <Newsletter /> */}
    </>
  );
};

export default ContactUs;
