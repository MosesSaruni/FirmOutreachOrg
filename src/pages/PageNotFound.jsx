import React from "react";
import NavbarMob from "../components/Navbar";
import Footer from "../sections/Footer";

const PageNotFound = () => {
  return (
    <>
      <NavbarMob />

      {/* Page not found */}
      <div className="flex items-center justify-center h-screen">
        <div class="text-center">
          <h1 class="mb-4 text-6xl font-semibold text-red-500">404</h1>
          <p class="mb-4 text-lg text-gray-600">
            Oops! Looks like you're lost.
          </p>
          <div class="animate-bounce">
            <svg
              class="mx-auto h-16 w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="red"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          <p class="mt-4 text-gray-600">
            Let's get you back{" "}
            <a href="/" class="text-blue-500">
              home
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PageNotFound;
