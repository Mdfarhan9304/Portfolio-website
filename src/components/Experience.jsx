import React from "react";
import html from "..//assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.jpeg";
import tailwind from "../assets/tailwinds.png";
import react from "../assets/react.jpg";
import nextjs from "../assets/Nextjs.png";
import firebase from "../assets/firebase.jpg";
const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: nextjs,
      title: "Nextjs",
      style: "shadow-black",
    },
    {
      id: 7,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
  ];

  return (
    <div
      name="experience"
      className=" h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-3xl font-bold border-b-4    border-orange-300 p-2 inline text-orange-500 ">
            Experience
          </p>
          <p className="py-6">These are the technologies I worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center px-12 md:px-0 ">
          {tech.map(({ id, src, title, style }) => (
            <div key={id} 
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
