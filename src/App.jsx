import React from "react";
import NavbarMob from "./components/Navbar";
import Footer from "./sections/Footer";
import Landing from "./sections/Landing";
import ContactUs from "./sections/ContactUs";
import AboutUs from "./sections/AboutUs";
import Programs from "./sections/Programs";

const App = () => {
  return (
    <div>
      <NavbarMob />
      <div className="pt-16 z-0 relative flex flex-col justify-center">
        <div id="home">
          <Landing />
        </div>
        <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />

        <div id="aboutus">
          <AboutUs />
        </div>

        <div id="programs" className="pt-16">
          <Programs />
        </div>
        <hr class="mt-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />

        {/* <div
          id="donate"
          className="h-screen flex flex-col justify-center items-center"
        >
          <p>Donate</p>
          <p className="text-2xl">To be removed</p>
        </div>
        <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" /> */}

        <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />

        <div id="contactus">
          <ContactUs />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
