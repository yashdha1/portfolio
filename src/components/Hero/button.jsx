import React from "react";
import "../../styles/styles.css";

import circle from "../../../assets/hero/img/circle.png";
import diamond from "../../../assets/hero/img/diamond.png";
import star from "../../../assets/hero/img/star.png";
import triangle from "../../../assets/hero/img/triangle.png";

const MagicButton = () => {
  return (
    <div className="container bg-body">
      <a
        href="https://drive.google.com/file/d/1zEfGanB-sFg-F0we38-m0bdc32VsPoKx/view?usp=drive_link"
        className="button relative transform transition-transform duration-400 hover:rotate-[-4deg] hover:scale-[1.1]"
      >
        <div className="button__content relative p-5 px-12 rounded-full border-3 border-white text-black flex items-center gap-2 overflow-hidden">
          <a href="https://drive.google.com/file/d/1zEfGanB-sFg-F0we38-m0bdc32VsPoKx/view?usp=drive_link">
            <span className="button__text font-bold">Download CV</span>
          </a>
          <div className="button__reflection-1 absolute top-0 left-[-100%] w-2 h-30 bg-reflection rotate-[10deg] transition-left duration-600 ease-in-out hover:left-[120%]"></div>
          <div className="button__reflection-2 absolute top-0 left-[70%] w-2 h-30 bg-reflection rotate-[7deg] transition-left duration-600 ease-in-out hover:left-[0%]"></div>
        </div>

        <img
          src={star}
          alt=""
          className="button__star-1 absolute opacity-0 transition-all duration-500 transform scale-[0.1] hover:scale-110 delay-100 top-[-14px] left-[-16px]"
        />
        <img
          src={star}
          alt=""
          className="button__star-2 absolute opacity-0 transition-all duration-500 transform scale-[0.1] hover:scale-110 top-[-4px] right-[-10px]"
        />
        <img
          src={circle}
          alt=""
          className="button__circle-1 absolute opacity-0 transition-all duration-500 transform scale-[0.1] hover:translate-y-[-8px] hover:scale-110 delay-100 top-[-8px] left-[58px]"
        />
        <img
          src={circle}
          alt=""
          className="button__circle-2 absolute opacity-0 transition-all duration-500 transform scale-[0.1] hover:translate-x-[-20px] hover:translate-y-[20px] hover:scale-110 bottom-[-8px] right-[34px]"
        />
        <img
          src={diamond}
          alt=""
          className="button__diamond absolute opacity-0 transition-all duration-500 transform scale-[0.1] hover:translate-y-[7px] hover:rotate-[-24deg] hover:scale-110 top-[-18px] right-[62px]"
        />
        <img
          src={triangle}
          alt=""
          className="button__triangle absolute opacity-0 transition-all duration-500 transform scale-[0.1] hover:rotate-[-12deg] hover:scale-110 bottom-[-16px] left-[15px]"
        />

        <div className="button__shadow absolute left-0 top-0 w-full h-full bg-gradient-to-r from-gradient-start to-gradient-end p-5 px-12 rounded-full border-3 border-black z-[-1] transition-transform duration-300 transform hover:translate-x-[-0.5rem] hover:translate-y-[0.5rem]"></div>
      </a>
    </div>
  );
};

export default MagicButton;
