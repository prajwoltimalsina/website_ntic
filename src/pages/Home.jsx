import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: "ease-in-out", // easing for animations
      once: true, // whether animation should happen only once
      mirror: false, // whether elements should animate out while scrolling past
    });
  }, []);

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
