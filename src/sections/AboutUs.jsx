import React from "react";

import img1 from "../assets/images/img1.jpeg";
// For scrolling to different sections of the page

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const AboutUs = () => {
  return (
    <>
      <section class="bg-gray-100 mt-14">
        <div class="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl font-extrabold text-[#2a52be] sm:text-4xl">
                About Us
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                Firm Outreach is an organization that promotes racial harmony
                and social cohesion to give hope in order to ensure a better
                future. Firm Outreach offers a wide variety of programs catering
                to immigrants, connecting people to people, and people to
                government. This organization accomplishes this through our
                grassroot network, community organizations and contributing
                partners.
              </p>

              <div class="mt-8">
                <a
                  onClick={() => scrollToSection("contactus")}
                  className="cursor-pointer text-[#2a52be] hover:text-blue-600 font-medium"
                >
                  Contact us to learn more
                  <span class="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                src={img1}
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
