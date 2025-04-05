// ProjectsSection.js
"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Earthquake Helper",
      description:
        "Developed a earthquake platform with real-time analytics and predictive modeling capabilities.",
      imageUrl: "/portfolio/images/quakePath.png",
      projectUrl: "#",
    },
    {
      id: 2,
      title: "E-Commerce Solution",
      description:
        "Built a scalable e-commerce platform with integrated payment processing and inventory management.",
      imageUrl: "/portfolio/images/expatCars.png",
      projectUrl: "#",
    },
    {
      id: 3,
      title: "Mobile App Promotion",
      description: "Created a promotion website for the OnyxCode mobile app",
      imageUrl: "/portfolio/images/onyx.png",
      projectUrl: "#",
    },
  ];

  return (
    <section className="bg-gray-900/80 border border-purple-500/20 rounded-4xl py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-2xl shadow-purple-900/20">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Explore my portfolio of innovative solutions and cutting-edge
            applications
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
