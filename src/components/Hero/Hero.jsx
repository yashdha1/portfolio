import React from "react";

import { getImageUrl } from "../../utils";
import MagicButton from "./button";
import TypingText from "./typingText";

export const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 mx-5 md:mx-0 z-10">
      <div className="flex flex-col items-start text-text z-10 select-none">
        <h1 className=" text-white text-5xl md:text-7xl font-bold mb-2 font-tech">
          Hi, I'm Yash Dhadod
        </h1>

        <TypingText />
        <p className=" text-white text-lg md:text-xl font-medium mb-8 font-tech">
          I'm a programming fanatic with a burning desire to Code and Grow.
        </p>

        <MagicButton />
      </div>
      <img
        src={getImageUrl("hero/yashpic.jpg")}
        alt="Hero image"
        className="w-64 h-64 md:w-96 md:h-96 rounded-3xl z-10 -ml-4 object-cover"
        loading="lazy"
      />
    </section>
  );
};
