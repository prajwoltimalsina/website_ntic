import React from "react";

// Import all your sections
import Hero from "../components/Hero";
import About from "../components/About";
import Facilities from "../components/Facilities";
import Events from "../components/Events";
import Research from "../components/Research";
import Team from "../components/Team";
import Contact from "../components/Contact";
// import Footer from "../components/Footer";

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
      <Contact />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
