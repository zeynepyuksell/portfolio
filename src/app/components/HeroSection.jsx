"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 px-4">
        <div className="col-span-12 sm:col-span-7 text-center sm:text-left flex flex-col justify-center items-center sm:items-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am {""}
            </span>

            <TypeAnimation
              sequence={[
                "Zeynep Yüksel",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#eff8ff] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a web developer skilled in HTML, CSS, JavaScript, TypeScript,
            React, and React Native. I'm focused on improving mobile development
            and using design tools like Figma to create user-friendly,
            tech-driven solutions.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit text-white rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-gray-200 hover:scale-105">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-state-800 text-white border border-white mt-3 hover:scale-105">
              Download CV
            </button>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-5 flex justify-center items-center">
          <div className="relative">
            <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
              <img
                src="/images/6.png"
                alt="hero-image"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
