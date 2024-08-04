import React from "react";
import youth from "../assets/images/youth.png";
import healthcare from "../assets/images/healthcare.png";
import community2 from "../assets/images/community2.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const PeekProjects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section class="py-24 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="text-center font-extrabold font-serif text-3xl text-[#2a52be] py-4">
            Our Programs
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-center font-semibold text-md mb-5">
              Join us in promoting harmony and cohesion, and see how your
              involvement can create meaningful change. Discover more about our
              initiatives and explore how you can be a part of this inspiring
              journey. Let's make a difference together!
            </p>
          </motion.div>
          <div class="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-[#2a52be] rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div class="flex items-center mb-6">
                <img src={youth} alt="Harsh image" class="rounded-lg" />
              </div>
              <div class="block">
                <h4 class="text-gray-900 font-medium leading-8 mb-3 text-xl text-[#2a52be]">
                  Youth Programs
                </h4>
                <div class="flex items-center justify-between  font-light">
                  <p>
                    Join us in fostering the growth and success of our youth!
                    Our programs are designed to nurture well-rounded
                    development...
                  </p>
                </div>
              </div>
            </div>
            <div class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-[#2a52be] rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div class="flex items-center mb-6">
                <img
                  src={healthcare}
                  alt="Harsh image"
                  class="rounded-lg w-full"
                />
              </div>
              <div class="block">
                <h4 class="text-gray-900 font-medium leading-8 mb-3 text-xl text-[#2a52be]">
                  Health Programs
                </h4>
                <div class="flex items-center justify-between  font-light">
                  <p>
                    Join us in our mission to create a healthier and more
                    informed community. Our Health Programs provide access to
                    essential ...
                  </p>
                </div>
              </div>
            </div>
            <div class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-[#2a52be] rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div class="flex items-center mb-6">
                <img
                  src={community2}
                  alt="Alexa image"
                  class="rounded-lg w-full"
                />
              </div>
              <div class="block">
                <h4 class="text-gray-900 font-medium leading-8 mb-3 text-xl text-[#2a52be]">
                  Community Integration
                </h4>
                <div class="flex items-center justify-between  font-light">
                  <p>
                    Firm's Grassroots Organizations and Integration initiatives
                    are here to help new immigrants settle seamlessly into our
                    community. We provide...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            onClick={() => navigate("/programs")}
            class="cursor-pointer border border-[#2a52be] shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-[#2a52be] hover:text-white"
          >
            View all programs
          </a>
        </div>
      </section>
    </div>
  );
};

export default PeekProjects;
