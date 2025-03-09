import React from "react";
import img24 from "../assets/img24.png";

const BackendProject = () => {
  return (
    <div className="bg-[#14355A] min-h-[50vh] flex flex-col md:flex-row p-10 items-center">
      <div className="md:w-1/2 ">
        <img src={img24} alt="" />
      </div>
      <div className="md:w-1/2 p-5">
        <h1 className="text-white font-bold text-4xl text-center">
          Backend Project
        </h1>
        <h2 className="text-white font-bold text-3xl my-3">Legal Salaahkar</h2>
        <p className="text-white text-md ">
          Victim-Lawyer Connect – A Secure Web Application This web application
          is designed to assist victims in finding and hiring lawyers while also
          helping lawyers connect with potential clients. Built with a modern
          tech stack, it ensures seamless and secure interactions between users.
          Key Features: For Victims: Easily search for and hire experienced
          lawyers based on expertise and availability. For Lawyers: Get
          discovered by potential clients and expand your legal practice. Secure
          & Efficient: Implemented robust middlewares for security, ensuring
          data protection and safe transactions. Tech Stack: Frontend: React.js
          with Tailwind CSS for a responsive and user-friendly interface.
          Backend: Express.js for efficient server-side operations. Database:
          MongoDB for scalable and flexible data storage. This application
          provides a secure and intuitive platform to bridge the gap between
          victims seeking legal assistance and lawyers looking for clients. 🚀
        </p>
        <a href="crypto-bazar123.netlify.app">
          <button className="w-full py-2 my-4 font-bold text-white text-lg bg-[#A18877] rounded">
            View Project
          </button>
        </a>
      </div>
    </div>
  );
};

export default BackendProject;
