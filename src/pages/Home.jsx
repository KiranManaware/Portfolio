import React from "react";
import bg1 from "../assets/bg1.png";
import TextChange from "../components/TextChange";

const Home = () => {
  return (
    <div className=" min-h-screen w-full bg-[#14355A] md:p-20 p-10 flex md:flex-row flex-col wrap">
      <div className="md:w-6/10 md:pt-20 pt-0 ">
        <p className="text-sm text-gray-400 font-semibold  ">
          Hello EveryOne
        </p>
        <h1 className="text-4xl md:text-6xl text-white font-bold my-3">
          <TextChange/>
        </h1>
        <p className="text-white text-sm ">
          I'm a passionate Full-Stack Developer specializing in the
          MERN stack. With a strong foundation in web development, I have worked
          on various responsive UI designs and website clones. My expertise lies
          in HTML, CSS, JavaScript, and frameworks like React. I love creating
          intuitive, user-friendly, and visually appealing web applications.
          Welcome to my portfolio—explore my projects and let's connect
        </p>
        <button className="font-semibold textwhite bg-[#A18877] text-white py-2 rounded hover:bg-[#14355A] hover:border duration-300 hover:scale-105 my-3 text-lg w-1/2">FullStack Developer</button>
        
      </div>
      <div className="md:w-4/10  ">
        <img src={bg1} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Home;
