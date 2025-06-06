import React from "react";
import UiDesigns from "../components/UiDesigns";
import Website from "../components/Website";
import project from "../assets/project.png";
import FontendProject from "../components/FontendProject";
import BackendProject from "../components/BackendProject";
const Projects = () => {
  const gradientStyle={
    background: "#141E30", // Fallback color
    backgroundImage: "linear-gradient(to right,rgb(35, 64, 97),rgb(15, 24, 41))", // Gradient
  }
  const gradientButton={
    background: "#141E30", // Fallback color
    backgroundImage: "linear-gradient(to right,rgb(15, 24, 41),rgb(35, 64, 97))", // Gradient
  }
  return (
    <div style={gradientStyle} className="pt-20 border  ">
      <div className=" min-h-screen p-10 w-full p-5 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-6/10  ">
          <h1 className=" text-5xl mb-20 font-bold text-center text-white  ">
            All Projects
          </h1>
          <ul>
            <a href="#UI">
              <li style={gradientButton} className="font-semibold  arrow px-10 my-5 textwhite bg-[#A18877] text-white py-2 rounded hover:bg-[#14355A] hover:border duration-300 hover:scale-105 my-3 text-lg w-full">
                UI Designs
              </li>
            </a>
            <a href="#Website">
              <li style={gradientButton} className="font-semibold arrow px-10 my-5 textwhite bg-[#A18877] text-white py-2 rounded hover:bg-[#14355A] hover:border duration-300 hover:scale-105 my-3 text-lg w-full">
                Website Clone
              </li>
            </a>
            <a href="#Frontend">
              <li style={gradientButton} className="font-semibold arrow px-10 my-5 textwhite bg-[#A18877] text-white py-2 rounded hover:bg-[#14355A] hover:border duration-300 hover:scale-105 my-3 text-lg w-full">
                Fronted Project
              </li>
            </a>
            <a href="#Full-stack">
              <li style={gradientButton} className="font-semibold arrow px-10 my-5 textwhite bg-[#A18877] text-white py-2 rounded hover:bg-[#14355A] hover:border duration-300 hover:scale-105 my-3 text-lg w-full">
                Full-stack Project
              </li>
            </a>
          </ul>
        </div>
        <div className="w-3/10 md:block hidden">
          <img src={project} alt="" />
        </div>
      </div>
      <UiDesigns/>
      <Website/>
      <FontendProject/>
      <BackendProject/>
    </div>
  );
};

export default Projects;
