import React, { useEffect } from "react";
import NavbarMob from "../components/Navbar";
import Footer from "../sections/Footer";
import { motion } from "framer-motion";
import imgFood from "../assets/images/imgFood.png";
import Gallery from "../components/Gallery";
import MiscGallery from "../components/MiscGallery";
import community from "../assets/images/community.png";
import govt from "../assets/images/govt.png";
import immg from "../assets/images/immg.png";
import outreach from "../assets/images/outreach.png";
import { useNavigate } from "react-router";

// For scrolling to different sections of the page

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const AboutPage = () => {
  const navigate = useNavigate();
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
            <h2 class="text-3xl font-extrabold font-serif text-[#2a52be] sm:text-4xl">
              Welcome to Firm Outreach
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <p class="mt-4 text-gray-600 text-xl font-semibold">
                We are passionately dedicated to bridging divides and fostering
                connections. Understanding the unique challenges faced by
                immigrants, we focus on creating strong, supportive networks.
                Our goal is to ensure that every individual, regardless of their
                background, has the opportunity to thrive and make meaningful
                contributions to society.
              </p>
              <br />
              <a
                onClick={() => navigate("/frequently-asked-questions")}
                className="cursor-pointer text-[#2a52be] hover:text-blue-600 font-semibold text-lg"
              >
                Frequently asked questions
                <span class="ml-2">&#8594;</span>
              </a>
            </motion.div>
          </div>
          <motion.div
            class="mt-12 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
          >
            <img
              src={outreach}
              alt="About Us Image"
              class="object-cover rounded-lg "
            />
          </motion.div>
        </div>
        {/* end of Introduction Hero */}

        {/* What We do section */}
        <div className="pt-24 max-w-5xl mx-auto">
          <p className="text-3xl font-extrabold font-serif text-[#2a52be] sm:text-4xl text-center pb-6">
            What We Do
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            {/* new format */}
            <div class="mt-10">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src={immg} />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-[#2a52be]">
                      Empowering Immigrants:
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    We understand the unique challenges faced by immigrants. Our
                    programs provide comprehensive support, including language
                    classes, job training, cultural orientation, and legal
                    assistance. By offering these resources, we help immigrants
                    build a solid foundation for their new lives and become
                    active, contributing members of society.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src={community} />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 text-[#2a52be]">
                      Connecting Communities:
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Building bridges between different cultural groups is at the
                    heart of what we do. We organize community events, cultural
                    exchanges, and dialogue sessions to promote understanding
                    and cooperation. Our initiatives, such as community
                    potlucks, cultural festivals, and interfaith dialogues,
                    create opportunities for people to learn from one another
                    and form lasting relationships.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src={govt} />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-[#2a52be]">
                      Bridging the Gap with Government:
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Navigating government systems can be daunting, especially
                    for newcomers. We provide guidance and support to help
                    individuals access essential services such as healthcare,
                    education, and social services. Additionally, we advocate on
                    behalf of our communities, ensuring their needs and voices
                    are represented in policy discussions and decision-making
                    processes.
                  </dd>
                </div>
              </dl>
            </div>
            {/* ------------- */}
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
          <p className="text-3xl font-serif font-extrabold text-[#2a52be] sm:text-4xl text-center pb-6">
            Our Approach
          </p>

          <p className="text-lg font-medium text-gray-600 text-center">
            Our success lies in our grassroot network. We collaborate closely
            with local community organizations and dedicated partners who share
            our vision. This collaborative approach allows us to reach more
            people and create meaningful, lasting impact. We believe in the
            power of local solutions and work to empower community leaders to
            drive change from within.
          </p>

          {/* checklist of approaches */}
          <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <div className="p-3 rounded-md transform hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-[#2a52be] my-8">
                <li class="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="text-xl font-semibold text-[#2a52be]  pb-1">
                    Community Engagement
                  </span>
                  <br />
                </li>

                <p className="font-medium text-gray-600">
                  We actively involve community members in our programs and
                  decision-making processes. By listening to their needs and
                  feedback, we ensure our initiatives are relevant and
                  effective. Our volunteer network is a vital part of our
                  operations, bringing diverse perspectives and skills to our
                  work.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <div className="p-3 rounded-md transform hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-[#2a52be] my-8">
                <li class="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="text-xl font-semibold text-[#2a52be]  pb-1">
                    Partnerships
                  </span>
                  <br />
                </li>

                <p className="font-medium text-gray-600">
                  Our partnerships with other organizations, businesses, and
                  government agencies enhance our ability to serve our
                  communities. Through these alliances, we can offer a wider
                  range of services and create more opportunities for
                  collaboration and innovation.
                </p>
              </div>
            </motion.div>
          </ul>
          {/* ------------------------- */}
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
