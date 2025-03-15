// ProjectsSection.js
import React from "react";
import ProjectCard from "./ProjectCard";

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
      description:
        "Created a promotion website for the OnyxCode mobile app",
      imageUrl: "/portfolio/images/onyx.png",
      projectUrl: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-b rounded-4xl from-black to-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-xl text-white mb-4 max-w-2xl mx-auto">
            Explore my portfolio of innovative solutions and cutting-edge
            applications
          </p>
        </div>

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
