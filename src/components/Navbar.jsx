import React from "react";

import logo from "../assets/images/logo.png";

import { useNavigate } from "react-router-dom";

// For scrolling to different sections of the page

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const NavbarMob = () => {
  const navigate = useNavigate();
  return (
    <div className="drawer w-full fixed z-50  text-[#2a52be]">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-[#d3d3d3]">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            {/* Logo */}

            <a href="/" className="text-md md:text-xl font-bold">
              <img src={logo} className="w-16" />
            </a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a
                  onClick={() => navigate("/")}
                  className="cursor-pointer text-lmd font-sans hover:bg-[#2a52be] mx-1 hover:text-[#EBEBEB]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/about-us")}
                  className="cursor-pointer text-md font-sans hover:bg-[#2a52be] mx-1 hover:text-[#EBEBEB]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/programs")}
                  className="cursor-pointer text-md font-sans hover:bg-[#2a52be] mx-1 hover:text-[#EBEBEB]"
                >
                  Our Programs
                </a>
              </li>

              <li>
                <a
                  onClick={() => navigate("/contact-us")}
                  className="cursor-pointer font-semibold text-md text-[#2a52be] hover:bg-[#2a52be] hover:text-white bg-white border-2 border-[#2a52be]"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* vvvvvvvv */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-64 min-h-full bg-[#d3d3d3]">
          {/* Sidebar content here */}

          <li>
            <a
              onClick={() => navigate("/")}
              className="cursor-pointer text-lg font-semibold hover:bg-[#2a52be] hover:text-[#EBEBEB] my-1"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/about-us")}
              className="cursor-pointer text-lg font-semibold hover:bg-[#2a52be] hover:text-[#EBEBEB] my-1"
            >
              About us
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/programs")}
              className="cursor-pointer text-lg font-semibold hover:bg-[#2a52be] hover:text-[#EBEBEB] my-1"
            >
              Programs
            </a>
          </li>
          {/* <li>
            <a
              onClick={() => scrollToSection("aboutus")}
              className="cursor-pointer hover:underline"
            >
              About us
            </a>
          </li> */}
          <li>
            <a
              onClick={() => navigate("/contact-us")}
              className="cursor-pointer font-semibold text-lg my-1 hover:text-[#2a52be] bg-[#2a52be] text-white hover:bg-white border-2 border-[#2a52be]"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMob;
