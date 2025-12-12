import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  // ------------------ Advisory Team ------------------
  const advisoryTeam = [
    {
      name: "MIKE HARKER",
      role: "CHIEF OF PUBLIC AFFAIRS, US EMBASSY, NEPAL",
      linkedin: "https://www.linkedin.com/in/mike-harker?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/mike.jpg",
    },
    {
      name: "TIM GOCHER OBE",
      role: "FOUNDER/CEO, DOLMA IMPACT FUND",
      linkedin: "https://www.linkedin.com/in/timgocher?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/tim.jpg",
    },
    {
      name: "PROF. DR. ACHYUT WAGLE",
      role: "VICE CHANCELLOR, KU",
      linkedin: "https://www.linkedin.com/in/achyut-wagle-a9b1537a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/achyut.jpg",
    },
  ];

  // ------------------ Main Team ------------------
  const mainTeam = [
    {
      name: "PROF. DR. BIM PRASAD SHRESTHA",
      role: "DIRECTOR",
      linkedin: "https://www.linkedin.com/in/bim-shrestha-79150427?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/bim.jpeg",
    },
    {
      name: "DR. SANJIV GUPTA",
      role: "CHIEF OF INNOVATION",
      linkedin: "https://www.linkedin.com/in/drsanjivgupta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/sanjiv.jpg",
    },
    {
      name: "SHREE KRISHNA DHITAL",
      role: "AGRICULTURE INNOVATION OFFICER",
      linkedin: "https://www.linkedin.com/in/shree-krishna-dhital?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/shree.jpg",
    },
    {
      name: "SUMAN",
      role: "WASH INNOVATION OFFICER",
      linkedin: "https://www.linkedin.com/in/sumandhunshrestha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/suman.jpg",
    },
    {
      name: "UJJWAL THAPA",
      role: "PROJECT COORDINATOR",
      linkedin: "#",
      image: "/team/ujjwal.jpg",
    },
    {
      name: "ASISH",
      role: "OPERATION MANAGER",
      linkedin: "#",
      image: "/team/asish.jpg",
    },
    {
      name: "SHREESHA",
      role: "RESEARCHER",
      linkedin: "#",
      image: "/team/shreesha.jpg",
    },
    {
      name: "ANUJA",
      role: "RESEARCHER",
      linkedin: "https://www.linkedin.com/in/anuja-upadhyay-5a9129193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/anuja.jpg",
    },
    {
      name: "YAM",
      role: "RESEARCHER",
      linkedin: "#",
      image: "/team/yamraj.jpg",
    },
    {
      name: "ANUP RAJ PANDEY",
      role: "HACKATHON COORDINATOR",
      linkedin: "#",
      image: "/team/anup.jpg",
    },
  ];

  const renderTeamCard = (member, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      data-aos="fade-up"
      data-aos-delay={index * 100}
       data-aos-duration="2000"
    >
      <div className="p-4 bg-white">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover rounded-xl border-2 border-gray-200 shadow-sm"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{member.name}</h3>
        <p className="text-blue-600 font-semibold mt-2">{member.role}</p>
      <a
  href={member.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 mx-auto flex items-center justify-center"
>
  <img src="/team/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
</a>

      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Advisory Team */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">OUR HONORABLE ADVISORY TEAM</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {advisoryTeam.map(renderTeamCard)}
        </div>

        {/* Main Team */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">OUR TEAM</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {mainTeam.map(renderTeamCard)}
        </div>
      </div>
    </section>
  );
};

export default Team;
