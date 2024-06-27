import React from "react";

const Programs = () => {
  return (
    <>
      <p className="text-center text-5xl font-serif my-7">Our Programs</p>
      {/* First */}
      <div className="flex justify-center items-center py-2">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="http://firmoutreach.org/site/wp-content/uploads/2022/10/youthprogrammme.jpg"
            className="h-[300px] md:h-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-semibold">Youth Programs</h1>
            <p className="py-6">
              We aim to promote well-balanced development in youths by enabling
              them to attain personal and academic achievements, acquire values,
              life skills, a sense of belonging, and responsibility through
              being involved in community service.
            </p>
            <button className="btn btn-primary">See more..</button>
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="flex justify-center items-center py-2">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="http://firmoutreach.org/site/wp-content/uploads/2022/10/WhatsApp-Image-2022-09-29-at-6.18.39-PM.jpeg"
            className="h-[300px] md:h-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-semibold">Health Programs</h1>
            <p className="py-6">
              Create a healthy environment where community members have access
              to information about medical services and insurance policies.
            </p>

            <p className="pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              non tristique tellus, vitae lobortis nulla. Vivamus ultricies
              nulla lorem, id bibendum mi eleifend in. Duis ac nisi vitae risus
              cursus pharetra vitae in erat. Vivamus eu tincidunt sem. Cras
              congue at leo in venenatis. Nam tincidunt non diam at rhoncus.
            </p>
            <button className="btn btn-primary">See more..</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
