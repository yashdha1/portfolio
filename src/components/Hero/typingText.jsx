"use client";
import React, { useEffect, useState } from "react";

const TypingText = () => {
  const words = ["Freelancer", "Developer", "Designer", "ML Developer"];
  const TYPING_INTERVAL = 150;
  const WORD_DISPLAY_TIME = 2000;

  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    const animateText = () => {
      const fullWord = words[currentIndex];

      if (!isDeleting && currentWord === fullWord) {
        timer = setTimeout(() => setIsDeleting(true), WORD_DISPLAY_TIME);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      } else {
        setCurrentWord((prev) => (isDeleting ? prev.slice(0, -1) : fullWord.slice(0, prev.length + 1)));
      }
    };

    timer = setTimeout(animateText, isDeleting ? TYPING_INTERVAL / 2 : TYPING_INTERVAL);

    return () => clearTimeout(timer);
  }, [currentWord, currentIndex, isDeleting]);

  return (
    <div className="my-2 flex items-center justify-center bg-[#010718]">
      <div className="overflow-hidden">
        <span className="text-3xl font-semibold text-white mr-2">I'm a</span>
        <span
          className="
            relative 
            text-3xl 
            font-semibold 
            text-[#ffb039] 
            before:absolute 
            before:top-0 
            before:right-0 
            before:h-full 
            before:w-[2px] 
            before:bg-[#4070F4] 
            before:animate-blink
          "
        >
          {currentWord}
        </span>
      </div>
    </div>
  );
};

export default TypingText;
