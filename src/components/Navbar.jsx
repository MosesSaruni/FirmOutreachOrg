import React from "react";

import logo from "../assets/images/logo.png";

// For scrolling to different sections of the page

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const NavbarMob = () => {
  return (
    <div className="drawer w-full fixed z-50  text-white">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-black">
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
              <img src={logo} />
            </a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a
                  onClick={() => scrollToSection("home")}
                  className="cursor-pointer hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("aboutus")}
                  className="cursor-pointer hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("programs")}
                  className="cursor-pointer hover:underline"
                >
                  Programs
                </a>
              </li>
              {/* <li>
                <a
                  onClick={() => scrollToSection("aboutus")}
                  className="cursor-pointer hover:underline"
                >
                  Donate
                </a>
              </li> */}
              <li>
                <a
                  onClick={() => scrollToSection("contactus")}
                  className="cursor-pointer hover:underline hover:text-black hover:bg-white border-2"
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

        <ul className="menu p-4 w-64 min-h-full bg-black">
          {/* Sidebar content here */}

          <li>
            <a
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("aboutus")}
              className="cursor-pointer hover:underline"
            >
              About us
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("programs")}
              className="cursor-pointer hover:underline"
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
              onClick={() => scrollToSection("contactus")}
              className="cursor-pointer hover:underline hover:text-black hover:bg-white border-2"
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
