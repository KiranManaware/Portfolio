import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const gradientStyle = {
    background: "#141E30", // Fallback color
    backgroundImage:
      "linear-gradient(to right,rgb(35, 64, 97),rgb(15, 24, 41))", // Gradient
    color: "white",
  };
  const gradientButton={
    background: "#141E30", // Fallback color
    backgroundImage: "linear-gradient(to right,rgb(15, 24, 41),rgb(35, 64, 97))", // Gradient
  }
  return (
    <div
      style={gradientStyle}
      className="bg-black text-white flex items-center justify-center min-h-screen"
    >
      <div className="max-w-4xl w-full p-8 rounded-lg shadow-lg ">
       

        {/* Contact Info Section */}
        <div className="w-full flex flex-col justify-center">
          <h2 className="text-5xl text-center  font-bold mb-10">
            Contact <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            Get in touch! Whether you have a project idea, want to collaborate,
            or just wish to connect, feel free to reach out. I am always open to
            discussions about web development, UI/UX design, and technology. You
            can easily contact me via email, phone, or social media. Let’s
            create something amazing together
          </p>

          <div className=" flex flex-col space-y-4 items-center justigy-center ">
          <div className="flex items-center gap-3 border rounded-full px-5  ">
          <i class="fa-solid fa-phone text-xl my-3 mx-2"></i>
            <p>9340551923</p>
          </div>
          <div className="flex items-center gap-3 border rounded-full px-5 ">
          <i class="fa-solid fa-envelope text-xl my-3 mx-2"></i>
            <p>kiranmanaware123@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 border rounded-full px-5">
            <i className="fa-brands fa-linkedin text-xl my-3 mx-2"></i>
            <a
              href="https://www.linkedin.com/in/kiranmanaware2003"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline"
            >
              My LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-3 border rounded-full px-5">
            <i className="fa-brands fa-instagram text-xl my-3 mx-2"></i>
            <a
              href="https://www.instagram.com/kiranmanaware/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline"
            >
              My Instagram Profile
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
