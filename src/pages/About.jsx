import React from "react";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import bg2 from "../assets/bg2.png";

const About = () => {
  return (
    <div className="bg-[#14355A] min-h-screen p-10">
      <div className="min-h-screen  flex md:flex-row flex-col ">
        <div className="md:w-4/10 ">
          <img src={bg2} className="w-full" alt="" />
        </div>
        <div className="md:w-6/10 md:p-20 p-5">
          <h1 className=" text-5xl mb-5 font-bold text-center text-white  ">
            About Me
          </h1>
          <p className=" text-md my-5 md:text-center text-white">
            I am a dedicated and passionate individual from Indore, Madhya
            Pradesh, is currently in their 4th year of B.tech, specializing in
            Computer Science and Engineering (CSE). Alongside their academic
            journey, I am actively pursuing an internship at E-Skills Web, where
            they have been recognized as the Star of the Month.
          </p>

          <ul>
            <a href="#education">
              <li className="font-semibold  arrow px-10 my-5 textwhite bg-[#A18877] text-white py-2 rounded hover:bg-[#14355A] hover:border duration-300 hover:scale-105 my-3 text-lg w-full">
                Education
              </li>
            </a>
            <a href="#skills">
              <li className="font-semibold arrow px-10 my-5 textwhite bg-[#A18877] text-white py-2 rounded hover:bg-[#14355A] hover:border duration-300 hover:scale-105 my-3 text-lg w-full">
                Skills
              </li>
            </a>
            <a href="#experience">
              <li className="font-semibold arrow px-10 my-5 textwhite bg-[#A18877] text-white py-2 rounded hover:bg-[#14355A] hover:border duration-300 hover:scale-105 my-3 text-lg w-full">
                Experience
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="">
        <Education />
        <Skills />
        <Experience />
      </div>
    </div>
  );
};

export default About;
