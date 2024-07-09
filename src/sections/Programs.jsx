import React from "react";
import { motion } from "framer-motion";

import youthprogrammme from "../assets/images/youthprogrammme.jpg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img8 from "../assets/images/img8.jpeg";

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Programs = () => {
  return (
    <>
      <p className="text-center text-3xl font-extrabold text-[#2a52be] sm:text-4xl">
        Our Programs
      </p>
      {/* First */}
      <div className="flex justify-center items-center py-2">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={youthprogrammme}
            className="h-[300px] md:h-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-semibold">Youth Programs</h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="py-6">
                We aim to promote well-balanced development in youths by
                enabling them to attain personal and academic achievements,
                acquire values, life skills, a sense of belonging, and
                responsibility through being involved in community service.
              </p>
              <button
                className="bg-[#2a52be] rounded-md text-white px-4 py-2"
                onClick={() => scrollToSection("contactus")}
              >
                Learn more
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="flex justify-center items-center pt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img2}
            className="h-[300px] md:h-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-semibold">Health Programs</h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="py-6 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-[#2a52be] ">
                Creating a healthy environment where community members have
                access to information about medical services and insurance
                policies.
              </p>

              <button
                className="bg-[#2a52be] rounded-md text-white px-4 py-2"
                onClick={() => scrollToSection("contactus")}
              >
                Learn more
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* third */}
      <div className="flex justify-center items-center pt-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img3}
            className="h-[300px] md:h-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-semibold">Community Integration</h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="py-6">
                ​Firm`s Grassroots Organizations and Integration help new
                immigrants settle in the community, providing platforms for them
                to interact and make friends and bond with the local residents.
                Through their participation in various integration
                program/activities, the new immigrants develop mutual
                understanding with their neighbors and other residents in the
                community.
              </p>
              <button
                className="bg-[#2a52be] rounded-md text-white px-4 py-2"
                onClick={() => scrollToSection("contactus")}
              >
                Learn more
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* newe item */}
      <div className="flex justify-center items-center pt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img8}
            className="h-[300px] md:h-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-semibold">Emergency Preparedness</h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="py-6 max-w-2xl mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl text-[#2a52be] ">
                Firm Outreach seeks to impart emergency preparedness knowledge
                and skills to make a safer and more resilient community.
                Communities learn diverse skills to help them understand people
                of different culture, races and religions.
              </p>
              <button
                className="bg-[#2a52be] rounded-md text-white px-4 py-2"
                onClick={() => scrollToSection("contactus")}
              >
                Learn more
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-center text-3xl font-bold text-[#2a52be] mt-5">
          More programs
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl font-semibold text-[#2a52be]">
                Advocacy
              </h2>
              <p>
                ​Firm Outreach advocate policies that promote equity and social
                justice to underrepresented communities.{" "}
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl font-semibold text-[#2a52be]">Seniors</h2>
              <p>
                Through this program seniors are assisted in accessing systems
                to find available help. Seniors participate in courses and
                engage in activities that empower and enable them to lead
                active, healthy and meaningful lives in the community.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl font-semibold text-[#2a52be]">
                Advocacy
              </h2>
              <p>
                ​Firm Outreach advocate policies that promote equity and social
                justice to underrepresented communities.{" "}
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl font-semibold text-[#2a52be]">Family</h2>
              <p>
                ​The family program promotes community support for strengthening
                family building strong families ties and nurturing individuals
                to create a strong community where marriage and parenthood are
                achievable, enjoyable and celebrated.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl font-semibold text-[#2a52be]">Farming</h2>
              <p>
                The farming program supports local farmers by providing
                resources, education, and community assistance. Our goal is to
                promote sustainable agriculture and improve the quality of life
                for farming families, creating a thriving and valued farming
                community.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl font-semibold text-[#2a52be]">Housing</h2>
              <p>
                This program aims to help individuals access resources to find
                affordable housing, incorporating collaboration among key
                community stakeholders to achieve effective solutions to
                homelessness.{" "}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Programs;
