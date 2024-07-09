import React from "react";

const LocationInfo = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-[#2a52be]">
            Pay us a visit!
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Visit us at our headquarters to learn more about our work and how
            you can get involved.
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.5120681837625!2d-122.23306682412878!3d47.36292340477354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549059474b372d37%3A0xa9b393294fcf7974!2s1819%20Central%20Ave%20S%2C%20Kent%2C%20WA%2098032%2C%20USA!5e0!3m2!1sen!2ske!4v1719995082621!5m2!1sen!2ske"
                width="1000"
                height="450"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
