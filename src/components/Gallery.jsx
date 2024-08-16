import React, { useState } from "react";

// MEDIA IMPORTS
import img4 from "../assets/images/img4.jpeg";
import img10 from "../assets/images/img10.jpeg";
import img6 from "../assets/images/img6.jpeg";
import commLeaders from "../assets/images/commLeaders.jpeg";
import img11 from "../assets/images/img11.jpeg";
import example from "../assets/images/example.jpg";

import { motion } from "framer-motion";

// Add or remove Gallery images here
const images = [commLeaders, img11, img6, img10, img4];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto mt-11">
          <p className="text-xl font-extrabold text-[#2a52be] sm:text-2xl text-center mb-5">
            Explore the highlights of our impactful journey through these
            snapshots of our past activities and events.
          </p>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            {/* Carousel wrapper */}
            <div className="relative h-96 md:h-96">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image}
                    className="object-cover w-full h-full"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            {/* Slider indicators */}
            <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-gray-400" : "bg-gray-300"
                  } hover:bg-gray-400 focus:outline-none transition`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full bg-gray-300 focus:outline-none transition"
              onClick={prevImage}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full bg-gray-300 focus:outline-none transition"
              onClick={nextImage}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          {/* <p className="mt-5 text-center text-gray-700 dark:text-gray-300">
            Explore the highlights of our impactful journey through these
            snapshots of our past activities and events.
          </p> */}
        </div>
      </motion.div>
    </>
  );
};

export default Gallery;
