import React from "react";

import img1 from "../assets/images/img1.jpeg";
import imgAbout from "../assets/images/imgAbout.png";

import { motion } from "framer-motion";
import { useNavigate } from "react-router";

// For scrolling to different sections of the page

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <section class="mt-14">
        <div class="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div class=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl font-extrabold font-serif text-[#2a52be] sm:text-4xl">
                About Us
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                <p class="mt-4 text-gray-600 text-xl font-semibold">
                  Firm Outreach is an organization that promotes racial harmony
                  and social cohesion to give hope in order to ensure a better
                  future. Firm Outreach offers a wide variety of programs
                  catering to immigrants, connecting people to people, and
                  people to government. This organization accomplishes this
                  through our grassroot network, community organizations and
                  contributing partners.
                </p>
              </motion.div>

              <div class="mt-8">
                <a
                  onClick={() => navigate("/about-us")}
                  className="cursor-pointer text-[#2a52be] hover:text-blue-600 font-semibold text-lg"
                >
                  Learn more
                  <span class="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <motion.div
              class="mt-12 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <img
                src={imgAbout}
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md "
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
