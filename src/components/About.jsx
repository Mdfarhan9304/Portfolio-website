import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/Animation.json";

const About = () => {
  return (
    <div  name="About" className="  max-w-6xl h-screen flex flex-col justify-center md:flex-row mx-auto mb-20 ">
      <Lottie animationData={animation} className="w-[350px] mx-auto" />
      <div className="p-5  flex flex-col justify-center md:w-1/2  ">
        <h2 className=" text-orange-500 text-3xl font-bold">About me</h2>
        <div className="w-[120px] h-1 bg-orange-500"></div>
        <p className="mt-3 flex items-center">
          Hello I'm Farhan Muzaffar, a 2nd year Computer science undergraduate
          student from Maulana Abul Kalam Azad University of Technolgy. I'm a
          passionate front-end developer with one year of hands-on experience
          and a knack for staying ahead in the tech game. I've honed my skills
          through a meaningful internship at an EdTech startup. Beyond crafting
          sleek websites, I bring creativity to life through graphic design.
          Excitingly, I'm a Level 1 seller on Fiverr, showcasing my commitment
          to delivering quality work. Let's bring your ideas to the
          digital forefront
        </p>
      </div>
    </div>
  );
};

export default About;
