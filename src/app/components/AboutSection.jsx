"use client";
import React, { useState, useTransition } from "react"; 
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>Html</li>
        <li>Css</li>
        <li>TypeScript</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>ONLYJS ACADEMY</li>
        <li>Ufuk University</li>
        <li>Anadolu University</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>ONLYJS ACADEMY</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="flex flex-col md:flex-row md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-4">
        <Image
          className="rounded-xl"
          src="/portfolio/images/desk.avif"
          alt="hero-image"
          width={600}
          height={600}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a web developer, I am working with technologies such as HTML,
            CSS, Bootstrap, JavaScript, TypeScript, React, and React Native.
            With a passion for creating user-friendly and engaging interfaces, I
            continuously aim for innovation and improvement in my projects. I am
            currently planning to deepen my expertise in mobile development. By
            utilizing design tools like Figma, I aim to deliver effective
            solutions that combine visual design and user experience. My goal is
            to bridge the gap between technology and design, producing projects
            that best meet users' needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
