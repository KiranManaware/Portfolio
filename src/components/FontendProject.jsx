import React from "react";
import img23 from "../assets/img23.png"

const FontendProject = () => {
  const gradientButton={
    background: "#141E30", // Fallback color
    backgroundImage: "linear-gradient(to right,rgb(15, 24, 41),rgb(35, 64, 97))", // Gradient
  }
  return (
    <div id="Frontend"  className=" min-h-[50vh] my-10 flex flex-col md:flex-row p-10">
      <div className="md:w-1/2 p-5">
      <h1 className="text-white font-bold text-4xl text-center">Fontend Project</h1>
      <h2 className="text-white font-bold text-3xl my-3">Crypto Bazar</h2>
      <p className="text-white text-md ">
        Developed a major project, Crypto Bazar App, using React for the
        frontend and styled with Tailwind CSS. The app includes user
        authentication and allows users to purchase Bitcoin securely. It also
        provides real-time information on trending cryptocurrencies and features
        a search functionality to look up specific coins. This project
        highlights skills in React, Tailwind CSS, API integration,
        authentication workflows, and creating dynamic, user-friendly
        interfaces.
      </p>
      <a href="crypto-bazar123.netlify.app">
      <button style={gradientButton} className="w-full py-2 my-4 font-bold text-white text-lg bg-[#A18877] rounded">View Project</button>
      </a>
      </div>
      <div className="md:w-1/2 ">
        <img src={img23} alt="" />
      </div>
    </div>
  );
};

export default FontendProject;
