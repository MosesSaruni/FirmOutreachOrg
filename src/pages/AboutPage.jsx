import React, { useEffect } from "react";
import NavbarMob from "../components/Navbar";
import Footer from "../sections/Footer";
import { motion } from "framer-motion";
import imgFood from "../assets/images/imgFood.png";
import Gallery from "../components/Gallery";
import MiscGallery from "../components/MiscGallery";

// For scrolling to different sections of the page

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const AboutPage = () => {
  useEffect(() => {
    scrollToSection("top");
  }, []);
  return (
    <>
      <NavbarMob />
      <div className="pt-24 max-w-5xl mx-auto px-2" id="top">
        {/* Introduction Hero*/}
        <div class=" max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-auto">
          <div class="max-w-lg">
            <h2 class="text-3xl font-extrabold text-[#2a52be] sm:text-4xl">
              Welcome to Firm Outreach
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <p class="mt-4 text-gray-600 text-xl font-semibold">
                Firm Outreach is an organization deeply committed to bridging
                divides and building connections. We understand the challenges
                faced by immigrants and the importance of creating strong,
                supportive networks. Our goal is to ensure that every
                individual, regardless of their background, has the opportunity
                to succeed and contribute to society.
              </p>
            </motion.div>
          </div>
          <motion.div
            class="mt-12 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <img
              src={imgFood}
              alt="About Us Image"
              class="object-cover rounded-lg shadow-md "
            />
          </motion.div>
        </div>
        {/* end of Introduction Hero */}

        {/* What We do section */}
        <div className="pt-24 max-w-5xl mx-auto">
          <p className="text-3xl font-extrabold text-[#2a52be] sm:text-4xl text-center pb-6">
            What We Do
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className=" p-3 rounded-md transform hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-[#2a52be] my-8">
              <p className="text-2xl font-semibold text-[#2a52be] sm:text-3xl pb-4    ">
                Empowering Immigrants:
              </p>
              <p className="text-xl font-medium text-gray-600">
                We understand the unique challenges faced by immigrants. Our
                programs provide comprehensive support, including language
                classes, job training, cultural orientation, and legal
                assistance. By offering these resources, we help immigrants
                build a solid foundation for their new lives and become active,
                contributing members of society.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className=" p-3 rounded-md transform hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-[#2a52be] my-8">
              <p className="text-2xl font-semibold text-[#2a52be] sm:text-3xl pb-4    ">
                Connecting Communities:
              </p>
              <p className="text-xl font-medium text-gray-600">
                Building bridges between different cultural groups is at the
                heart of what we do. We organize community events, cultural
                exchanges, and dialogue sessions to promote understanding and
                cooperation. Our initiatives, such as community potlucks,
                cultural festivals, and interfaith dialogues, create
                opportunities for people to learn from one another and form
                lasting relationships.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className=" p-3 rounded-md transform hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-[#2a52be] my-8">
              <p className="text-2xl font-semibold text-[#2a52be] sm:text-3xl pb-4    ">
                Bridging the Gap with Government:
              </p>
              <p className="text-xl font-medium text-gray-600">
                Navigating government systems can be daunting, especially for
                newcomers. We provide guidance and support to help individuals
                access essential services such as healthcare, education, and
                social services. Additionally, we advocate on behalf of our
                communities, ensuring their needs and voices are represented in
                policy discussions and decision-making processes.
              </p>
            </div>
          </motion.div>
        </div>
        {/* end of What We do section */}

        {/* Gallery section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <Gallery />
        </motion.div>
        {/* end of Gallery section */}

        {/* Our approach section */}
        <div className="pt-24 max-w-5xl mx-auto">
          <p className="text-3xl font-extrabold text-[#2a52be] sm:text-4xl text-center pb-6">
            Our Approach
          </p>

          <p className="text-xl font-medium text-gray-600 text-center">
            Our success lies in our grassroot network. We collaborate closely
            with local community organizations and dedicated partners who share
            our vision. This collaborative approach allows us to reach more
            people and create meaningful, lasting impact. We believe in the
            power of local solutions and work to empower community leaders to
            drive change from within.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className=" p-3 rounded-md transform hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-[#2a52be] my-8">
              <p className="text-2xl font-semibold text-[#2a52be] sm:text-3xl pb-4    ">
                Community Engagement:
              </p>
              <p className="text-xl font-medium text-gray-600">
                We actively involve community members in our programs and
                decision-making processes. By listening to their needs and
                feedback, we ensure our initiatives are relevant and effective.
                Our volunteer network is a vital part of our operations,
                bringing diverse perspectives and skills to our work.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className=" p-3 rounded-md transform hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-[#2a52be] my-8">
              <p className="text-2xl font-semibold text-[#2a52be] sm:text-3xl pb-4    ">
                Partnerships:
              </p>
              <p className="text-xl font-medium text-gray-600">
                Our partnerships with other organizations, businesses, and
                government agencies enhance our ability to serve our
                communities. Through these alliances, we can offer a wider range
                of services and create more opportunities for collaboration and
                innovation.
              </p>
            </div>
          </motion.div>
        </div>
        {/* end of Our approach section */}

        {/* Second Gallery section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <MiscGallery />
        </motion.div>
        {/* end of Second Gallery section */}
      </div>
      <div className="bg-[#d3d3d3]">
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
