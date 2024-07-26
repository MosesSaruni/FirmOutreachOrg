import React from "react";
import LocationInfo from "../components/LocationInfo";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";

import NewContactForm from "../components/NewContactForm";

const ContactUs = () => {
  return (
    <>
      {/* <ContactForm /> */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewContactForm />
      </div>

      <LocationInfo />
      {/* <Newsletter /> */}
    </>
  );
};

export default ContactUs;
