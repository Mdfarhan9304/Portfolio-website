import React from "react";
import img from "./profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Hero = () => {
  return (
    <div name="home" className="h-screen max-w-screen-lg mx-auto mb-20 md:mb-0">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-evenly h-full px-1   md:flex-row">
        <div className="flex flex-col  max-w-lg  h-1/3 p-4 text-center lg:text-left">
          <h2 className="text-3xl text-center max-w-lg md:text-left md:1 mm:text-6xl font-bold">
            I'm a
          </h2>
          <h2 className="text-3xl text-center text-orange-500  max-w-lg md:text-left md:text-4xl font-bold">
            Front-end web developer
          </h2>

          <div className="flex px-2 gap-2 mt-2 mx-auto md:mx-0">
           <a href="https://www.linkedin.com/in/farhan-muzaffar-039994218/" target="_blank"> <FaLinkedin size="30px" /></a>
            <a href="https://github.com/Mdfarhan9304" target="_blank"><FaGithub size="30px" /></a>
            <a href="https://www.instagram.com/mdfarhan9237/" target="_blank"><AiFillInstagram size="30px" /></a>
          </div>
          <p className="mt-4">
            A passionate web developer with expertise in HTML, CSS, Tailwind CSS, JavaScript,
            React, Redux, Nextjs, Figma.
          </p>

        </div>

        <div>
          <img
            src={img}
            alt=""
            className="rounded-2xl w-[320px] mt-8 shadow-xl shadow-black mx-auto  md:[w-400px] md:mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
