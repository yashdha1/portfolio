import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section
      className="backdrop:blur-lgh-full bg-gray-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 relative bg-[rgba(12,12,12,0.31)]  p-0 md:px-12 md:py-6 mt-32 z-10 mx-0 md:mx-4"
      id="about"
    >
      <h2 className=" text-white text-4xl font-bold tracking-wider uppercase flex justify-center mb-12 pt-12 md:pt-0">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <img
          src={getImageUrl("about/aboutme.png")}
          alt="about me image"
          className="size-72 md:size-80 h-auto items-start m-4"
        />
        <p className="text-white font-bold text-xl items-end  ml-10">
          I am really passionate about solving problems with AI powered solutions.
          <br />
          <br />
          I try to stay ahead of the curve. I am always learning new technologies and frameworks. I have a strong foundation in JavaScript, React, Node.js, and Python. I am also familiar with cloud platforms like AWS and Azure.
          <br />
          <br /> When I'm not writing code, you'll find me at the badminton court pr
          into the latest single player video game. Quiet nights? I am always online playing games or learning some new stuff
          <br />
          <br />
          Let's break the mold and create something awesome together. Buckle up, it's gonna be a wild ride.
        </p>
      </div>
    </section>
  );
};
