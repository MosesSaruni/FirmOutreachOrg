import React from "react";

const AboutUs = () => {
  return (
    <>
      <section class="bg-gray-100">
        <div class="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
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
                  href="#"
                  class="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span class="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                src="http://firmoutreach.org/site/wp-content/uploads/2023/01/WhatsApp-Image-2022-09-29-at-6.19.28-PM.jpeg"
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
