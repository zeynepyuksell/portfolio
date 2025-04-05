"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Earthquake Helper",
      description:
        "Developed a earthquake platform with real-time analytics and predictive modeling capabilities.",
      imageUrl: "/portfolio/images/quakePath.png",
      projectUrl: "#",
      category: "web",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "E-Commerce Solution",
      description:
        "Built a scalable e-commerce platform with integrated payment processing and inventory management.",
      imageUrl: "/portfolio/images/expatCars.png",
      projectUrl: "#",
      category: "web",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Mobile App Promotion",
      description: "Created a promotion website for the OnyxCode mobile app",
      imageUrl: "/portfolio/images/onyx.png",
      projectUrl: "#",
      category: "mobile",
      technologies: ["React", "Framer Motion"],
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] pt-24">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl leading-relaxed">
            Explore my portfolio of innovative solutions and cutting-edge
            applications that showcase my skills and expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/80 p-10 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm mb-20"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * project.id }}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-900/40 transition-all duration-300 transform hover:-translate-y-2 relative h-full flex flex-col"
              >
                <div className="relative overflow-hidden flex-shrink-0">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex-1 mt-4 flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex justify-between items-center">
                    <a
                      href={project.projectUrl}
                      className="inline-flex items-center space-x-2 border-white text-white bg-purple-600/20 hover:bg-purple-600/30 hover:text-purple-300 px-4 py-2 rounded-lg transition-all duration-300 border hover:border-purple-600/50"
                    >
                      <span>View Project</span>
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                    <div className="flex space-x-3">
                      <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                        <CodeBracketIcon className="h-6 w-6" />
                      </button>
                      <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                        <CursorArrowRaysIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectsPage;
