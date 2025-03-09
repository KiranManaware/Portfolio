import React from "react";
import Skill from "../assets/Skill.png";

const Skills = () => {
    return (
        <div id="skills" className="my-5">
            
            <div className="flex  justify-between md:flex-row flex-col">
                <div className="md:w-3/10">
                    <img src={Skill} alt="" />
                </div>
                <div className="md:w-6/10  flex flex-col my-3">
                    <div className="my-3 p-5 flex flex-col  ">
                    <h1 className="  text-white p-2 text-5xl my-4   font-bold text-center   ">
                Skills
            </h1>
                    
                        <h1 className="font-bold text-white text-center  text-2xl">Technical Skills</h1>
                        <ul className="flex flex-wrap mt-5 justify-center gap-4">
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">MongoDB</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">Express.js</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">React.js</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">Node.js</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">HTML</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">CSS</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">JavaScript</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">Bootstrap</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">Tailwind CSS</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">C Language</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">C++</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">Core Java</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg">SQL</li>
                        </ul>

                    </div>
                    <div className=" my-3 p-5 flex flex-col  ">
                        <h1 className="font-bold text-white text-center text-2xl">Soft Skills</h1>
                        <ul className="flex flex-wrap mt-5 justify-center gap-4">
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg ">Leardership</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg ">Good Communication</li>
                            <li className="text-lg text-white bg-[#A18877] px-4 py-2 rounded-lg ">Smart Working</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
