import React from "react";
import { motion } from "framer-motion";

import youthprogrammme from "../assets/images/youthprogrammme.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img8 from "../assets/images/img8.png";

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
            className="h-[380px] md:h-[512px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-semibold text-[#2a52be]">
              Youth Programs
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="py-6 text-md">
                <b>Empowering Youth for a Brighter Future!</b>
                <br />
                Join us in fostering the growth and success of our youth! Our
                programs are designed to nurture well-rounded development,
                helping young individuals achieve personal and academic
                milestones. Through engaging community service, participants
                gain essential values, life skills, a sense of belonging, and a
                strong sense of responsibility. Together, we can build a
                vibrant, empowered youth community ready to make a positive
                impact on the world.
              </p>
              {/* <button
                className="bg-[#2a52be] rounded-md text-white px-4 py-2"
                onClick={() => scrollToSection("contactus")}
              >
                Learn more
              </button> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="flex justify-center items-center py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img2}
            className="h-[300px] md:h-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-semibold text-[#2a52be]">
              Health Programs
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="py-6 text-md">
                <b>Building a Healthier Community Together!</b>
                <br />
                Join us in our mission to create a healthier and more informed
                community. Our Health Programs provide access to essential
                information about medical services and insurance options,
                empowering you to make the best decisions for your well-being.
                <br />
                We are dedicated to fostering an environment where everyone can
                thrive, offering support and resources to help you stay informed
                and proactive about your health. Together, we can build a future
                where a healthy lifestyle is within everyone's reach.
              </p>

              {/* <button
                className="bg-[#2a52be] rounded-md text-white px-4 py-2"
                onClick={() => scrollToSection("contactus")}
              >
                Learn more
              </button> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* third */}
      <div className="flex justify-center items-center py-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img3}
            className="h-[300px] md:h-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-semibold text-[#2a52be]">
              Community Integration
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="py-6 text-md">
                <b>Welcoming Newcomers, Building Stronger Bonds</b> <br />
                Firm's Grassroots Organizations and Integration initiatives are
                here to help new immigrants settle seamlessly into our
                community. We provide welcoming platforms for newcomers to
                interact, make friends, and form lasting bonds with local
                residents.
                <br />
                Through a variety of engaging integration programs and
                activities, new immigrants have the opportunity to connect with
                their neighbors and build mutual understanding with other
                community members. Our goal is to create an inclusive
                environment where everyone feels at home and valued.
                <br />
                Join us in fostering a sense of belonging and unity. Together,
                we can build a community that celebrates diversity and thrives
                on mutual respect and cooperation.
              </p>
              {/* <button
                className="bg-[#2a52be] rounded-md text-white px-4 py-2"
                onClick={() => scrollToSection("contactus")}
              >
                Learn more
              </button> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* newe item */}
      <div className="flex justify-center items-center py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img8}
            className="h-[300px] md:h-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-semibold text-[#2a52be]">
              Emergency Preparedness
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="py-6 text-md">
                <b>Creating a Safer, More Resilient Community!</b>
                <br />
                At Firm Outreach, we are dedicated to equipping our community
                with the knowledge and skills needed for effective emergency
                preparedness. Our programs are designed to build a safer and
                more resilient community, ready to face any challenge.
                <br /> Through our diverse training sessions, participants not
                only learn critical emergency response techniques but also gain
                a deeper understanding of people from different cultures, races,
                and religions.
                <br /> By fostering mutual respect and cooperation, we aim to
                strengthen community bonds and ensure everyone is prepared to
                support each other in times of need. Join us in our commitment
                to building a connected and prepared community. Together, we can
                create a future where everyone feels safe and supported.
              </p>
              {/* <button
                className="bg-[#2a52be] rounded-md text-white px-4 py-2"
                onClick={() => scrollToSection("contactus")}
              >
                Learn more
              </button> */}
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
        <p className="text-center text-3xl font-bold text-[#2a52be] my-12">
          More programs
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="card bg-base-100 w-96 shadow-xl hover:bg-[#2a52be] hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="card-body">
              <h2 className="text-3xl font-bold">Advocacy</h2>
              <p className="text-md">
                Championing Equity and Social Justice At Firm Outreach. <br />
                At Firm Outreach, we advocate for policies that promote fairness
                and social justice for underrepresented communities. Our mission
                is to amplify voices and drive meaningful change, ensuring equal
                treatment and opportunities for all. Join us in building a more
                inclusive and just society, where equity is at the heart of our
                community.{" "}
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl hover:bg-[#2a52be] hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="card-body">
              <h2 className="text-3xl font-semibold">Seniors</h2>
              <p className="text-md">
                Empowering Active and Meaningful Lives <br />
                Our Seniors Program helps older adults access the support they
                need to lead active, healthy, and fulfilling lives. We assist
                seniors in finding available help and offer courses and
                activities that promote wellness, social connection, and
                lifelong learning. Join us in enhancing the quality of life for
                seniors in our community, creating a supportive and empowering
                environment for all.
              </p>
            </div>
          </div>

          {/* <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl font-semibold text-[#2a52be]">
                Advocacy
              </h2>
              <p className="text-xl">
                ​Firm Outreach advocate policies that promote equity and social
                justice to underrepresented communities.{" "}
              </p>
            </div>
          </div> */}

          <div className="card bg-base-100 w-96 shadow-xl hover:bg-[#2a52be] hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="card-body">
              <h2 className="text-3xl font-semibold">Family</h2>
              <p className="text-md">
                Strengthening Families, Building a Stronger Community <br />
                Our Family Program is dedicated to fostering strong family ties
                and nurturing individuals to create a resilient community. We
                promote community support for strengthening families, making
                marriage and parenthood achievable, enjoyable, and celebrated.{" "}
                <br />
                Join us in our mission to build a supportive environment where
                families can thrive and contribute to a vibrant, connected
                community. Together, we can celebrate and strengthen the bonds
                that make our community strong.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl hover:bg-[#2a52be] hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="card-body">
              <h2 className="text-3xl font-semibold">Farming</h2>
              <p className="text-md">
                Supporting Local Farmers for a Sustainable Future Our Farming
                Program is dedicated to supporting local farmers by providing
                essential resources, education, and community assistance. We aim
                to promote sustainable agriculture and enhance the quality of
                life for farming families. Join us in our mission to create a
                thriving and valued farming community. Together, we can ensure a
                sustainable future for agriculture and strengthen the bonds that
                support our local farmers.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl hover:bg-[#2a52be] hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="card-body">
              <h2 className="text-3xl font-semibold">Housing</h2>
              <p className="text-md">
                Finding Solutions, Creating Homes Our Housing Program is
                committed to helping individuals access resources for affordable
                housing. We collaborate with key community stakeholders to
                develop effective solutions to homelessness and ensure everyone
                has a place to call home. Join us in our mission to create
                sustainable housing solutions and build a community where
                everyone has access to safe and affordable living options.{" "}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Programs;
