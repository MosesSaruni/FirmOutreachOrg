import React, { useState, useEffect } from "react";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
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
      "Message sent successfully! Our team will get back to you as soon as possible!"
    );
  };

  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section class="my-12" id="contact">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-4 lg:py-100">
        <div class="mb-4">
          <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p class="text-4xl font-extrabold tracking-wide text-[#2a52be]">
              Get in Touch
            </p>
            <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 font-bold">
              We'd love to hear from you!
            </p>
          </div>
        </div>
        <div class="flex items-stretch justify-center ">
          <div class="grid md:grid-cols-2">
            <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 class="mb-4 text-2xl font-bold text-black">
                Leave us a message
              </h2>
              <div id="contactForm">
                <div class="mb-6">
                  <div class="mx-0 mb-1 sm:mb-4">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="name"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autocomplete="given-name"
                        placeholder="Your name"
                        class="mb-2 w-full rounded-md border border-[#2a52be] py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                        value={value.name}
                        required
                        onChange={(e) =>
                          setValue({ ...value, name: e.target.value })
                        }
                      />
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="email"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autocomplete="email"
                        placeholder="Your email address"
                        class="mb-2 w-full rounded-md border border-[#2a52be] py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                        required
                        value={value.email}
                        onChange={(e) =>
                          setValue({ ...value, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label
                      for="textarea"
                      class="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      required
                      placeholder="Write your message..."
                      class="mb-2 w-full rounded-md border border-[#2a52be] py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      value={value.message}
                      onChange={(e) =>
                        setValue({ ...value, message: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>
                <div class="text-center">
                  <button
                    // type="submit"
                    onClick={() => sendEmail()}
                    class="w-full bg-[#2a52be] text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            <div class="h-full pr-6">
              <p class="mt-3 mb-12 text-lg font-semibold dark:text-slate-400 px-2">
                Your feedback and questions are incredibly important to us.
                Whether you have inquiries about our programs, want to get
                involved, or have suggestions for how we can improve, we want to
                hear from you. Our dedicated team is committed to responding
                promptly to ensure your voice is heard and valued. Thank you for
                reaching out and supporting our mission!
              </p>
              <ul class="mb-6 md:mb-0">
                <li class="flex">
                  <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
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
                  <div class="ml-4 mb-4">
                    <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Our Address
                    </h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      1819 Central Ave S
                    </p>
                    <p class="text-gray-600 dark:text-slate-400">Kent , WA</p>
                  </div>
                </li>
                <li class="flex">
                  <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
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
                  <div class="ml-4 mb-4">
                    <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Contact
                    </h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      Mobile: +1 206-478-5866
                    </p>
                    <p class="text-gray-600 dark:text-slate-400">
                      Mail: thefirmoutreach@gmail.com
                    </p>
                  </div>
                </li>
                <li class="flex">
                  <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
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
                  <div class="ml-4 mb-4">
                    <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Working hours
                    </h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p class="text-gray-600 dark:text-slate-400">
                      Saturday &amp; Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
