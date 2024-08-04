import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-6">
      <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            class="inline-flex items-center"
          >
            <img src={logo} />
            {/* <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              The Firm Outreach
            </span> */}
          </a>
          <div class="mt-6 lg:max-w-sm">
            <p class="text-sm text-gray-800">
              To engage, educate, advocate and empower individuals to create a
              successful community, overcoming barriers which prevent growth.
            </p>
          </div>
        </div>
        <div class="space-y-2 text-sm">
          <p class="text-base font-bold tracking-wide text-[#2a52be]">
            Contacts
          </p>
          <div class="flex">
            <p class="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:206-478-5866"
              aria-label="Our phone"
              title="Our phone"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +1 206-478-5866
            </a>
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:thefirmoutreach@gmail.com"
              aria-label="Our email"
              title="Our email"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              thefirmoutreach@gmail.com
            </a>
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              1819 Central Ave S, Kent WA
            </a>
          </div>
        </div>
        <div>
          <span class="text-base font-bold tracking-wide text-[#2a52be]">
            Social
          </span>
          <div
            class="flex items-center mt-1 space-x-3 cursor-pointer"
            onClick={() => navigate("/social-media-coming-soon")}
          >
            <a class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 24 24" className="h-5" fill="currentColor">
                <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
              </svg>
            </a>
            <a class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
              </svg>
            </a>
            <a class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
              </svg>
            </a>
          </div>
          <p class="mt-4 text-sm text-gray-500">
            {/* Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami. */}
            The Firm Outreach
          </p>
        </div>
      </div>
      <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p class="text-sm text-[#2a52be]">
          © Copyright 2024 BLTZ Solutions. All rights reserved.
        </p>
        <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              onClick={() => navigate("/frequently-asked-questions")}
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 cursor-pointer"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/privacy-policy")}
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 cursor-pointer"
            >
              Privacy Policy
            </a>
          </li>
          {/* <li>
            <a
              href="/"
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 cursor-pointer"
            >
              Terms &amp; Conditions
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
