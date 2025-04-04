"use client";

import { BarChart3, Code2 } from "lucide-react";
import { useRef, useState } from "react";

const experiences = [
  {
    icon: "developer",
    title: "API Development",
    company: "Backend Skill",
    description: "Design and implementation of RESTful APIs, with focus on scalability and security",
    link: "#",
  },
  {
    icon: "chart",
    title: "Full-Stack Development",
    company: "MERN Stack",
    description:
      "End-to-end application development using modern frameworks and best practices for both frontend and backend",
    link: "#",
  },
  {
    icon: "developer",
    title: "AIML",
    company: "AI/ML Skill",
    description: "Optimization of large language models through model compression and quantization techniques",
    link: "#",
  },
  {
    icon: "analyctics",
    title: "Data Analysis",
    company: "data analytics",
    description: "Data Analystics using Python and R, with a focus on data visualization and interpretation with help of PowerBI.",
    link: "#",
  },
];

export function PracticalSkills() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const container = containerRef.current;
    container.style.cursor = "grabbing";
    container.style.userSelect = "none";
    container.style.animationPlayState = "paused";

    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const container = containerRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const container = containerRef.current;
    container.style.cursor = "grab";
    container.style.removeProperty("user-select");
    container.style.animationPlayState = "running";
  };

  return (
    <div className="py-2 overflow-hidden">
      <div className="relative w-full">
        <div className="relative">
          <div
            className="flex gap-8 w-[200%] cursor-grab animate-scroll"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {[...experiences, ...experiences].map((experience, index) => (
              <div key={index} className="flex-shrink-0 w-[600px] h-[320px] px-2 py-12">
                <div className="max-w-3xl mx-auto h-full">
                  <div className="relative p-8 h-full rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-colors">
                    <div className="absolute top-0 left-0 -translate-x-3 -translate-y-3">
                      <div
                        className={`w-16 h-16 rounded-2xl ${
                          experience.icon === "developer"
                            ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                            : "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                        } p-4 flex items-center justify-center backdrop-blur-sm`}
                      >
                        {experience.icon === "developer" ? (
                          <Code2 className="w-8 h-8 text-white/70" />
                        ) : (
                          <BarChart3 className="w-8 h-8 text-white/70" />
                        )}
                      </div>
                    </div>
                    <div className="ml-16">
                      <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                      <p className="text-purple-300 text-sm mb-4 font-medium">{experience.company}</p>
                      <p className="text-gray-300 leading-relaxed">{experience.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Add these keyframes in a global CSS file or inside a <style> tag:
// @keyframes scrolling {
//   0% {
//     transform: translateX(0%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// }
