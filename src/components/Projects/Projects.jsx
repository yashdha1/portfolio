"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import projectsData from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl font-bold tracking-wider uppercase w-full text-center mb-12">Selected Projects</h2>
        <div className="relative min-h-[500px] md:h-[70vh] w-full overflow-hidden rounded-xl">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
              }`}
              style={{ zIndex: index === activeIndex ? 20 : 10 }}
            >
              <div className="relative w-full h-full">
                <img
                  src={getImageUrl(project.imageSrc)}
                  alt={`Project: ${project.title}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-30">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg mb-6">{project.description}</p>
                  <div className="flex space-x-4">
                   
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-md text-white"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2 text-white z-50"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2 text-white z-50"
            onClick={nextSlide}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-8 flex justify-center space-x-2">
          {projectsData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-600" : "bg-gray-600"}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
