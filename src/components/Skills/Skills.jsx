import ColorThief from "colorthief";
import React, { useEffect, useState } from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  const [skillColors, setSkillColors] = useState({});

  useEffect(() => {
    const colorThief = new ColorThief();

    skills.forEach((category) => {
      category.skills.forEach((skill) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = getImageUrl(skill.imageSrc);
        img.onload = () => {
          const color = colorThief.getColor(img);
          setSkillColors((prev) => ({
            ...prev,
            [skill.title]: `rgb(${color.join(",")})`,
          }));
        };
      });
    });
  }, []);

  return (
    <section className="my-12" id="skills">
      <div className="">
        <h2 className="text-white text-4xl font-bold tracking-wider uppercase flex justify-center">The TechStack</h2>
        <h6 className="text-white font-Akshar text-2xl flex justify-center my-2">I bring these skills to the table</h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {skills.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-6">
            <h3 className="text-white flex justify-center text-2xl font-semibold mb-4 ml-2">{category.category}</h3>
            <div className="flex flex-wrap justify-center">
              {category.skills.map((skill, id) => (
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={id}
                  className="border-1 rounded-lg w-fit m-1 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 cursor-pointer"
                  style={{ backgroundColor: skillColors[skill.title] || "#4e4394" }}
                >
                  <div className="bg-gray-700 m-2 rounded-lg shadow-md">
                    <img className="size-14 p-2 z-30" src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p className="text-white text-sm flex justify-center font-Kanit pb-1">{skill.title}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
