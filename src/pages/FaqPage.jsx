import React, { useEffect } from "react";
import NavbarMob from "../components/Navbar";
import Footer from "../sections/Footer";

// For scrolling to different sections of the page

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const FaqPage = () => {
  useEffect(() => {
    scrollToSection("top");
  }, []);

  return (
    <>
      <NavbarMob />
      <div className="pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" id="top">
        <h1 className="text-4xl font-bold text-center">
          Frequently asked questions
        </h1>
        <p className="text-lg mt-4">
          Welcome to the Firm Outreach FAQ page! Below, you'll find answers to
          some of the most common questions we receive about our organization,
          programs, and initiatives. If you have any further questions, please
          feel free to contact us
        </p>
        <h2 className="text-3xl font-bold mt-8 text-center text-[#2a52be]">
          About Firm Outreach
        </h2>
        {/* questions section */}
        <ul class="max-w-3xl mx-auto mt-10 space-y-4 divide-y  shadow shadow-blue-600 rounded-xl">
          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-semibold marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  What is the mission of Firm Outreach?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Firm Outreach is dedicated to promoting racial harmony and
                  social cohesion. Our mission is to provide hope and ensure a
                  better future by offering a variety of programs for
                  immigrants, facilitating connections between people, and
                  bridging the gap between people and the government.{" "}
                </p>
              </article>
            </details>
          </li>

          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  How does Firm Outreach promote racial harmony and social
                  cohesion?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  We promote racial harmony and social cohesion through our
                  grassroots network, community organizations, and contributing
                  partners. Our initiatives focus on building understanding and
                  connections among diverse groups within the community.{" "}
                </p>
              </article>
            </details>
          </li>
        </ul>
        {/* <<<<<-------------------->>>>> */}

        <h2 className="text-3xl font-bold mt-8 text-center text-[#2a52be]">
          Programs and Services
        </h2>
        {/* questions section */}
        <ul class="max-w-3xl mx-auto mt-10 space-y-4 divide-y  shadow shadow-blue-600 rounded-xl">
          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-semibold marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  What specific programs does Firm Outreach offer to support
                  immigrants?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  We offer cultural orientation sessions, employment assistance,
                  legal aid, and mentorship programs. These initiatives help
                  immigrants integrate into the community and achieve their
                  personal and professional goals.{" "}
                </p>
              </article>
            </details>
          </li>

          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  How do your programs help in connecting people from different
                  racial and ethnic backgrounds?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Our programs include community events, intercultural
                  workshops, and collaborative projects that encourage
                  interaction and understanding between people of different
                  racial and ethnic backgrounds. These activities aim to build
                  mutual respect and appreciation.{" "}
                </p>
              </article>
            </details>
          </li>

          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  What support does Firm Outreach provide to help immigrants
                  navigate governmental processes?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  We offer informational workshops, advocacy services, and
                  direct assistance to help immigrants understand and access
                  government services. Our goal is to empower individuals by
                  making governmental processes more accessible and
                  comprehensible.{" "}
                </p>
              </article>
            </details>
          </li>
        </ul>
        {/* <<<<<-------------------->>>>> */}

        <h2 className="text-3xl font-bold mt-8 text-center text-[#2a52be]">
          Community Engagement
        </h2>
        {/* questions section */}
        <ul class="max-w-3xl mx-auto mt-10 space-y-4 divide-y  shadow shadow-blue-600 rounded-xl">
          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-semibold marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  How does Firm Outreach facilitate connections between the
                  community and the government?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  We organize forums, meetings, and informational sessions where
                  community members can interact with government
                  representatives. We also provide support in accessing
                  government resources and services, ensuring that community
                  voices are heard.{" "}
                </p>
              </article>
            </details>
          </li>

          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  Can community members participate in your initiatives to
                  promote racial harmony?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Yes, we encourage all community members to participate in our
                  initiatives. Whether through volunteering, attending events,
                  or joining our programs, everyone can contribute to our
                  mission of promoting racial harmony and social cohesion.{" "}
                </p>
              </article>
            </details>
          </li>

          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  How can local organizations collaborate with Firm Outreach?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Local organizations can collaborate with us by partnering on
                  projects, co-hosting events, or providing resources and
                  expertise. We value partnerships that enhance our ability to
                  serve the community and achieve our goals.{" "}
                </p>
              </article>
            </details>
          </li>
        </ul>
        {/* <<<<<-------------------->>>>> */}

        <h2 className="text-3xl font-bold mt-8 text-center text-[#2a52be]">
          Supporting Firm Outreach
        </h2>
        {/* questions section */}
        <ul class="max-w-3xl mx-auto mt-10 space-y-4 divide-y  shadow shadow-blue-600 rounded-xl">
          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-semibold marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  How can individuals support the mission of Firm Outreach?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Individuals can support our mission by volunteering their
                  time, making donations, and participating in our events and
                  programs. Every contribution helps us further our efforts to
                  promote racial harmony and social cohesion.{" "}
                </p>
              </article>
            </details>
          </li>

          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  What opportunities are available for volunteers at Firm
                  Outreach?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  We offer a variety of volunteer opportunities, including
                  mentoring, event planning, administrative support, and
                  community outreach. Volunteers play a crucial role in the
                  success of our programs and initiatives.{" "}
                </p>
              </article>
            </details>
          </li>
        </ul>
        {/* <<<<<-------------------->>>>> */}

        <h2 className="text-3xl font-bold mt-8 text-center text-[#2a52be]">
          Contact Information
        </h2>
        {/* questions section */}
        <ul class="max-w-3xl mx-auto mt-10 space-y-4 divide-y  shadow shadow-blue-600 rounded-xl">
          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-semibold marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  How can I get in touch with Firm Outreach for more
                  information?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  You can contact us through the following methods:
                  <ul>
                    <li>
                      <b>Email</b>: thefirmoutreach@gmail.com
                    </li>
                    <li>
                      <b>Phone</b>: +1 206-478-5866
                    </li>
                    <li>
                      <b>Address</b>: 1819 Central Ave S, Kent WA
                    </li>
                  </ul>{" "}
                </p>
              </article>
            </details>
          </li>

          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">
                  Where can I find updates and news about Firm Outreach?
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  For updates and news, please explore our website and follow us
                  on social media. We regularly post information about our
                  programs, events, and initiatives.{" "}
                </p>
              </article>
            </details>
          </li>
        </ul>
        {/* <<<<<-------------------->>>>> */}
      </div>
      <Footer />
    </>
  );
};

export default FaqPage;
