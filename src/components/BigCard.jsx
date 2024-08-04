import React from "react";
import distrippes from "../assets/images/distrippes.jpeg";
import img2 from "../assets/images/img2.jpeg";
import usecensus2020 from "../assets/images/usecensus2020.jpeg";
import { useNavigate } from "react-router-dom";

const BigCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <section className="bg-white">
          <div className="max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center lg:h-screen">
            {/* <!-- Starts component --> */}
            <div
              className="grid grid-cols-1 gap-2 mt-12 list-none md:grid-cols-3 lg:mt-24 max-w-5xl mx-auto"
              role="list"
            >
              {/* <!---
            // Loop through the features array to render each feature dynamically.
            //
            // Apply dynamic background color using the bgColor property from the feature object. Also, make the background slightly transparent on hover to
            // reveal the background image more clearly.
            //
            // The title's color changes on hover, using the titleColor property from the feature object. This demonstrates how to dynamically apply Tailwind
            // CSS classNamees based on component state or properties.
            //
            //  {String(index + 1).padStart(2, "0") + "⏤"} Converts the current index (from iterating over the features array) to a string and adds 1 to it,
            // and adds a dash at the end of the number
            --> */}
              <article
                onClick={() => navigate("/about-us")}
                className="mx-auto cursor-pointer shadow-xl bg-cover bg-center min-h-150 relative border-8 border-[#2a52be]  transform duration-500 hover:-translate-y-12   group"
                style={{
                  backgroundImage: `url(${distrippes})`,
                }}
                // `url(${cover1})`
              >
                <div className="bg-[#2a52be] relative h-full  min-h-150  flex flex-wrap flex-col pt-[30rem] bg-opacity-0 transform duration-300">
                  <div className=" bg-[#2a52be] p-8 h-full justify-end flex flex-col">
                    <h1 className="text-white mt-2 text-xl mb-5 transform  translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-orange-500">
                      {" "}
                      01⏤ Our Story{" "}
                    </h1>
                    <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 ">
                      {" "}
                      Get to know what we stand for{" "}
                    </p>
                  </div>
                </div>
              </article>
              <article
                onClick={() => navigate("/programs")}
                className="mx-auto cursor-pointer shadow-xl bg-cover bg-center min-h-150 relative border-8 border-[#2a52be]  transform duration-500 hover:-translate-y-12   group"
                style={{
                  backgroundImage: `url(${img2})`,
                }}
              >
                <div className="bg-[#2a52be] relative h-full  min-h-150  flex flex-wrap flex-col pt-[30rem] bg-opacity-0 transform duration-300">
                  <div className=" bg-[#2a52be] p-8 h-full justify-end flex flex-col">
                    <h1 className="text-white mt-2 text-xl mb-5 transform  translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-indigo-400">
                      {" "}
                      02⏤ Our impact{" "}
                    </h1>
                    <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 ">
                      {" "}
                      See the various projects we have undertaken{" "}
                    </p>
                  </div>
                </div>
              </article>
              <article
                onClick={() => navigate("/contact-us")}
                className="mx-auto cursor-pointer shadow-xl bg-cover bg-center min-h-150 relative border-8 border-[#2a52be]  transform duration-500 hover:-translate-y-12   group"
                style={{
                  backgroundImage: `url(${usecensus2020})`,
                }}
              >
                <div className="bg-[#2a52be] relative h-full  min-h-150  flex flex-wrap flex-col pt-[30rem] bg-opacity-0 transform duration-300">
                  <div className=" bg-[#2a52be] p-8 h-full justify-end flex flex-col">
                    <h1 className="text-white mt-2 text-xl mb-5 transform  translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-cyan-400">
                      {" "}
                      03⏤ Join Us!{" "}
                    </h1>
                    <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 ">
                      {" "}
                      Be part of our mission and future{" "}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BigCard;
