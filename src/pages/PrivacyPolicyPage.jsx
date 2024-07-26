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

const PrivacyPolicyPage = () => {
  useEffect(() => {
    scrollToSection("top");
  }, []);
  return (
    <>
      <NavbarMob />

      {/* Privacy policy page content here */}
      <div className="max-w-5xl mx-auto p-2 pt-24 " id="top">
        <h1 className="font-extrabold text-4xl text-[#2a52be] text-center">
          Privacy Policy
        </h1>
        <br />
        <p className="text-lg text-[#2a52be] font-medium">
          Last updated 20th July 2024
        </p>
        <br />
        <p className="text-lg font-medium">
          Welcome to the privacy policy page of Firm Outreach. We are dedicated
          to promoting racial harmony and social cohesion to give hope for a
          better future. This Privacy Policy outlines how we collect, use, and
          protect your personal information when you interact with our
          organization, website, and services.
        </p>
        <br />
        <h2 className="font-extrabold text-2xl text-[#2a52be]">
          1.Information Collection
        </h2>
        <br />
        <h3 className="text-lg font-medium">Personal Information:</h3>
        <p>
          <ul>
            <li className="list-disc">
              When you participate in our programs, register on our website, or
              contact us, we may collect personal details such as your name,
              email address, phone number, and demographic information.
            </li>
          </ul>
        </p>
        <br />
        <h2 className="font-extrabold text-2xl text-[#2a52be]">
          2.How we use your information
        </h2>
        <br />
        <h3 className="text-lg font-medium">Program participation:</h3>
        <p>
          <ul>
            <li className="list-disc">
              To facilitate and manage your participation in our programs and
              services.
            </li>
          </ul>
        </p>
        <br />
        <h3 className="text-lg font-medium">Communication:</h3>
        <p>
          <ul>
            <li className="list-disc">
              To send you updates, newsletters, and other relevant information
              about our activities and events.
            </li>
          </ul>
        </p>
        <br />
        <h3 className="text-lg font-medium">Improvement of services:</h3>
        <p>
          <ul>
            <li className="list-disc">
              To enhance and personalize your experience with our organization
              and improve our website and services.
            </li>
          </ul>
        </p>
        <br />
        <h2 className="font-extrabold text-2xl text-[#2a52be]">
          3.Information Sharing and Disclosure
        </h2>
        <br />
        <h3 className="text-lg font-medium">Third-Party Partners:</h3>
        <p>
          <ul>
            <li className="list-disc">
              We may share your information with trusted third-party partners
              and community organizations who assist us in delivering our
              programs and services.
            </li>
          </ul>
        </p>
        <br />
        <h3 className="text-lg font-medium">Legal Requirements:</h3>
        <p>
          <ul>
            <li className="list-disc">
              We may disclose your information if required by law or in response
              to legal processes.
            </li>
          </ul>
        </p>
        <br />
        <h2 className="font-extrabold text-2xl text-[#2a52be]">
          4.Data Security
        </h2>
        <br />
        <h3 className="text-lg font-medium">Third-Party Partners:</h3>
        <p>
          We are committed to protecting your personal information. We implement
          appropriate technical and organizational measures to safeguard your
          data against unauthorized access, alteration, disclosure, or
          destruction.
        </p>
        <br />
        <h2 className="font-extrabold text-2xl text-[#2a52be]">
          5.Your Rights
        </h2>
        <br />
        <h3 className="text-lg font-medium">Access and Correction:</h3>
        <p>
          <ul>
            <li className="list-disc">
              You have the right to access and update your personal information
              held by us.
            </li>
          </ul>
        </p>
        <h3>Opt-Out:</h3>
        <p>
          <ul>
            <li className="list-disc">
              You can opt-out of receiving communications from us at any time by
              following the unsubscribe link in our emails or contacting us
              directly
            </li>
          </ul>
        </p>
        <br />
        <h2 className="font-extrabold text-2xl text-[#2a52be]">
          6.Changes to This Privacy Policy
        </h2>
        <br />
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on our website.
          Your continued use of our services after any modifications indicates
          your acceptance of the updated policy.
        </p>
        <br />
        <h2 className="font-extrabold text-2xl text-[#2a52be]">7.Contact Us</h2>
        <br />
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>{" "}
        <br />
        <div className="text-lg font-medium">
          <p>Firm Outreach</p>
          <p>Email: thefirmoutreach@gmail.com</p>
          <p>Phone: +1 206-478-5866</p>
          <p>Address: 1819 Central Ave S, Kent WA</p>
        </div>
        <br />
        <p>
          Thank you for trusting Firm Outreach. Your privacy and security are
          important to us.
        </p>
      </div>
      <div className="bg-[#d3d3d3]">
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
