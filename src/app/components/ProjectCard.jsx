import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-900/40 transition-all duration-300 transform hover:-translate-y-2 relative h-full flex flex-col">
      <div className="relative overflow-hidden flex-shrink-0">
        <img
          src={project.imageUrl}
          alt={project.title}
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
        <div className="mt-auto">
          <a
            href={project.projectUrl}
            className="inline-flex items-center space-x-2 border-white text-white bg-purple-600/20 hover:bg-purple-600/30 hover:text-purple-300 px-4 py-2 rounded-lg transition-all duration-300 border hover:border-purple-600/50"
          >
            <span>View Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;