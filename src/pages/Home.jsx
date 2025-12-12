import React from "react";
import { Link } from "react-router-dom";

// Import all your sections
import Hero from "../components/Hero";
import About from "../components/About";
import Facilities from "../components/Facilities";
import Events from "../components/Events";
import Research from "../components/Research";
// import Team from "../components/Team";
// import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />

      {/* Sections below Hero */}
      <About />
      <Facilities />
      <Events />
      <Research />
      {/* <Team /> */}

      {/* Replaced Contact Section with Link */}
    {/* Replaced Contact Section with Animated Card */}
{/* Replaced Contact Section with Animated Card */}
<div className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
  <div
    className="mx-auto max-w-5xl p-10 bg-white/70 backdrop-blur-xl 
    shadow-xl rounded-3xl border border-white/40
    transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
    data-aos="fade-up"
  >
    <h2 className="text-4xl font-extrabold text-blue-700 text-center mb-4">
      Get in Touch
    </h2>
    <p className="text-lg text-gray-600 text-center mb-8">
      Have questions or need assistance?  
      We're here to help — click below to reach our contact page.
    </p>

    <div className="flex justify-center">
      <Link
        to="/contact"
        className="px-8 py-3 rounded-full font-semibold text-white 
        bg-gradient-to-r from-blue-600 to-cyan-500
        shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        Contact Us
      </Link>
    </div>
  </div>
</div>



      {/* <Footer /> */}
    </div>
  );
};

export default Home;
