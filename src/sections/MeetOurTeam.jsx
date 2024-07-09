import React from "react";

const MeetOurTeam = () => {
  return (
    <>
      <section id="our-team" class="bg-gray-100 py-32">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8 text-primary">
            Meet Our Team
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img
                src="https://spacema-dev.com/elevate/assets/images/team/1.jpg"
                alt="Team Member 1"
                class="w-full rounded-full mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">John Doe</h3>
              <p class="text-gray-700">Role: Software Engineer</p>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img
                src="https://spacema-dev.com/elevate/assets/images/team/4.jpg"
                alt="Team Member 2"
                class="w-full rounded-full mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Jane Smith</h3>
              <p class="text-gray-700">Role: Graphic Designer</p>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img
                src="https://spacema-dev.com/elevate/assets/images/team/3.jpg"
                alt="Team Member 3"
                class="w-full rounded-full mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Alex Johnson</h3>
              <p class="text-gray-700">Role: Marketing Manager</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurTeam;
