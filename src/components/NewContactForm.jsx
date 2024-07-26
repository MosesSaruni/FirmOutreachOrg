import React, { useEffect, useState } from "react";

import emailjs from "@emailjs/browser";

const NewContactForm = () => {
  useEffect(() => {
    emailjs.init("Ge0B8wmAX4b2rob1V");
  }, []);

  const sendEmail = async () => {
    const serviceId = "service_y3d7evl";
    const templateId = "template_gosrsae";

    try {
      await emailjs.send(serviceId, templateId, {
        name: value.name,
        message: value.message,
        email: value.email,
      });
    } catch (error) {
      console.log(error);
    }
    setValue({
      name: "",
      email: "",
      message: "",
    });
    alert(
      "Message sent successfully! Our team will get back to you as soon as possible."
    );
  };

  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <>
      <section class="mb-12">
        <div class="flex justify-center">
          {/* <div class="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="text-4xl font-extrabold tracking-wide text-[#2a52be]">
              Contact us
            </h2>
          </div> */}
        </div>

        <div class="flex flex-wrap">
          <form
            class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
            onSubmit={() => sendEmail}
          >
            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[2px] text-teal-700"
                htmlFor="exampleInput90"
              >
                Name
              </label>
              <input
                type="text"
                class="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Name"
                value={value.name}
                required
                onChange={(e) => setValue({ ...value, name: e.target.value })}
              />
            </div>

            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[2px] text-teal-700"
                htmlFor="exampleInput90"
              >
                Email
              </label>
              <input
                type="email"
                class="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Enter your email address"
                required
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
            </div>

            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[2px] text-teal-700"
                htmlFor="exampleInput90"
              >
                Message
              </label>
              <textarea
                class="px-2 py-2 border rounded-[5px] w-full outline-none"
                name=""
                id=""
                placeholder="Leave us a message..."
                required
                value={value.message}
                onChange={(e) =>
                  setValue({ ...value, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              class="mb-6 inline-block w-full rounded bg-[#2a52be] px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
            >
              Send
            </button>
          </form>

          <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12 bg-[#2a52be] text-white font-serif p-4 rounded-md">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold">Our Address</p>
                    <p class="text-white ">1819 Central Ave S</p>
                    <p class="text-white ">Kent , WA</p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold ">Contacts</p>
                    <p class="text-white ">Mobile: +1 206-478-5866</p>
                    <p class="text-white ">Email: thefirmoutreach@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        class="h-6 w-6"
                        stroke="white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold ">Social media</p>
                    <p class="text-white ">Coming Soon!</p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold">Working hours</p>
                    <p class="text-white ">Monday - Friday: 08:00 - 17:00</p>
                    <p class="text-white">
                      Saturday &amp; Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewContactForm;
