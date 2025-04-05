"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CodeBracketIcon, 
  AcademicCapIcon, 
  TrophyIcon,
  UserIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <CodeBracketIcon className="h-6 w-6" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-800/80 p-6 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-900/10 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
            <span className="bg-purple-500/30 p-2 rounded-lg mr-3">
              <CodeBracketIcon className="h-5 w-5 text-white" />
            </span>
            Frontend
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700/70 transition-colors duration-300">
              <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-lg">React</span>
            </li>
            <li className="flex items-center bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700/70 transition-colors duration-300">
              <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-lg">Javascript</span>
            </li>
            <li className="flex items-center bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700/70 transition-colors duration-300">
              <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-lg">HTML/CSS</span>
            </li>
            <li className="flex items-center bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700/70 transition-colors duration-300">
              <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-lg">TypeScript</span>
            </li>
            <li className="flex items-center bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700/70 transition-colors duration-300">
              <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-lg">Next.js</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800/80 p-6 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-900/10 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
            <span className="bg-purple-500/30 p-2 rounded-lg mr-3">
              <BriefcaseIcon className="h-5 w-5 text-white" />
            </span>
            Backend & Tools
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700/70 transition-colors duration-300">
              <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-lg">Node.js</span>
            </li>
            <li className="flex items-center bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700/70 transition-colors duration-300">
              <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-lg">Tailwind CSS</span>
            </li>
            <li className="flex items-center bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700/70 transition-colors duration-300">
              <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-lg">Git</span>
            </li>
            <li className="flex items-center bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700/70 transition-colors duration-300">
              <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-lg">Figma</span>
            </li>
            <li className="flex items-center bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700/70 transition-colors duration-300">
              <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-3" />
              <span className="text-lg">Bootstrap</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <AcademicCapIcon className="h-6 w-6" />,
    content: (
      <div className="space-y-6">
        <div className="bg-gray-800/80 p-6 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-900/10 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <div className="bg-purple-500/30 p-3 rounded-lg mr-4">
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300">
                  ONLYJS ACADEMY
                </h3>
                <p className="text-gray-300 mt-1">Web Development Bootcamp</p>
              </div>
            </div>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
              2024-Present
            </span>
          </div>
          <p className="mt-4 text-gray-300 pl-16">
            Intensive training in modern web development technologies and best
            practices.
          </p>
        </div>

        <div className="bg-gray-800/80 p-6 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-900/10 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <div className="bg-purple-500/30 p-3 rounded-lg mr-4">
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300">
                  Ufuk University
                </h3>
                <p className="text-gray-300 mt-1">Medical Laboratory Technician</p>
              </div>
            </div>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
              2021-2023
            </span>
          </div>
          <p className="mt-4 text-gray-300 pl-16">
            Studied medical laboratory technician.
          </p>
        </div>

        <div className="bg-gray-800/80 p-6 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-900/10 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <div className="bg-purple-500/30 p-3 rounded-lg mr-4">
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300">
                  Anadolu University
                </h3>
                <p className="text-gray-300 mt-1">Web Design</p>
              </div>
            </div>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
              2024-Present
            </span>
          </div>
          <p className="mt-4 text-gray-300 pl-16">
            Focused on web design and development.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <TrophyIcon className="h-6 w-6" />,
    content: (
      <div className="space-y-6">
        <div className="bg-gray-800/80 p-6 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-900/10 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
          <div className="flex items-start">
            <div className="bg-purple-500/30 p-4 rounded-lg mr-5">
              <TrophyIcon className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-300">
                ONLYJS ACADEMY
              </h3>
              <p className="text-gray-300 mt-1">Full Stack Web Development</p>
              <p className="text-gray-400 text-sm mt-2 bg-gray-700/50 inline-block px-3 py-1 rounded-full">
                2025
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const AboutPage = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-4"
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl border border-purple-500/20">
            <Image
              className="rounded-xl transform hover:scale-105 transition-transform duration-500"
              src="/portfolio/images/desk.avif"
              alt="profile-image"
              width={600}
              height={600}
            />
          </div>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500/30 p-3 rounded-lg mr-4">
                <UserIcon className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                About Me
              </h1>
            </div>
            <p className="text-base lg:text-lg text-gray-300 mb-6 leading-relaxed">
              As a web developer, I am working with technologies such as HTML,
              CSS, Bootstrap, JavaScript, TypeScript, React, and React Native.
              With a passion for creating user-friendly and engaging interfaces,
              I continuously aim for innovation and improvement in my projects.
              I am currently planning to deepen my expertise in mobile
              development. By utilizing design tools like Figma, I aim to
              deliver effective solutions that combine visual design and user
              experience. My goal is to bridge the gap between technology and
              design, producing projects that best meet users&apos; needs.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/projects"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 flex items-center"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Contact Me
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="bg-purple-500/30 p-3 rounded-lg mr-4">
              <RocketLaunchIcon className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              My Background
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center mb-8">
            {TAB_DATA.map((tabItem) => (
              <button
                key={tabItem.id}
                className={`px-6 py-3 text-lg font-medium rounded-xl mr-4 mb-4 md:mb-0 transition-all duration-300 transform hover:scale-105 flex items-center ${
                  tab === tabItem.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => handleTabChange(tabItem.id)}
              >
                <span className="mr-2">{tabItem.icon}</span>
                {tabItem.title}
              </button>
            ))}
          </div>

          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/80 p-8 rounded-xl text-white shadow-xl border border-purple-500/20"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="bg-purple-500/30 p-3 rounded-lg mr-4">
              <RocketLaunchIcon className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              My Journey
            </h2>
          </div>
          <div className="bg-gray-800/80 p-8 rounded-xl text-white shadow-xl border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="bg-purple-500/30 p-3 rounded-lg mr-4">
                <RocketLaunchIcon className="h-6 w-6 text-white" />
              </div>
              <p className="text-lg leading-relaxed">
                My journey in web development began with a curiosity about how
                websites work. I started by learning HTML and CSS, and gradually
                expanded my knowledge to include JavaScript and modern frameworks
                like React.
              </p>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-purple-500/30 p-3 rounded-lg mr-4">
                <RocketLaunchIcon className="h-6 w-6 text-white" />
              </div>
              <p className="text-lg leading-relaxed">
                I&apos;ve worked on various projects ranging from simple static
                websites to complex web applications. Each project has been a
                learning experience, helping me grow as a developer and refine my
                skills.
              </p>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-500/30 p-3 rounded-lg mr-4">
                <RocketLaunchIcon className="h-6 w-6 text-white" />
              </div>
              <p className="text-lg leading-relaxed">
                I&apos;m passionate about creating responsive, accessible, and
                user-friendly web applications. I believe in writing clean,
                maintainable code and staying up-to-date with the latest web
                development trends and technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutPage;
