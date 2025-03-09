import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="">
      
      <div className="w-full flex justify-between md:flex-row flex-col-reverse">
        <div className="md:w-1/2 p-5 my-3">
          <div className=" flex items-center flex-col space-x-7  ">
          <h1 className="  text-white p-2 text-5xl  my-10   font-bold text-center   ">
        Experience
      </h1>
            <h2 className=" text-3xl mb-3 font-bold text-white  ">
              June 2024-Present
            </h2>
            <span className=" flex space-x-3 my-3">
              <p className="text-sm font-semibold text-white">
                Full Time Intern |
              </p>
              <p className="text-sm font-semibold text-white ">Eskills Web </p>
            </span>
          </div>
          <p className=" text-sm my-2 text-white md:text-start text-center">
            Here I am working as a full time Intern specializing in MERN
            Stack.During my internship as a MERN stack developer, I had the
            opportunity to immerse myself in the full spectrum of web
            development. The experience is both challenging and rewarding,
            offering me hands-on exposure to the latest technologies in the
            industry.One of the highlights of my internship is working on
            real-world projects that directly impacted the company.
          </p>
        </div>
        <div className="md:w-1/2  flex justify-center items-center">
          <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9zHw1A09Ub0tuqdZa37F6Kc_U5i9VbgJTskxCi6PJ4He_4ZVdyKEkaGuxrD3m3BmZmc&usqp=CAU" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
