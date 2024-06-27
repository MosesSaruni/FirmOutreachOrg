import React from "react";
import ContactInfo from "../components/ContactInfo";
import LocationInfo from "../components/LocationInfo";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";

const ContactUs = () => {
  return (
    <>
      <ContactForm />
      <LocationInfo />
      <Newsletter />
    </>
  );
};

export default ContactUs;
