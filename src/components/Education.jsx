import React from "react";
import edu from "../assets/edu.png";


const Education = () => {
  return (
    <div id="education" className="my-10 ">
      
      <div className="flex  justify-between md:flex-row flex-col-reverse">
        <div className="md:w-6/10 flex flex-col ">
          {/* 10th */}
          <div className="  shadow-xl my-10 p-5 flex  flex-col  ">
          <h1 className="  text-white p-2 text-5xl    font-bold text-center   ">
        Education
      </h1>
            <h2 className="text-white text-4xl font-bold my-2">2017-2018</h2>
            <span className=" flex space-x-3">
              <p className="text-sm text-white font-semibold">
                Diamond Acedemy H.S School Indore (M.P) |
              </p>
              <p className="text-sm text-white font-semibold ">
                Higher Secondary |{" "}
              </p>
              <p className="text-sm text-white font-semibold">84.4%</p>
            </span>
          </div>
          {/* 12th */}
          <div className=" shadow-xl my-5 p-5 flex  flex-col   ">
            <h2 className=" text-4xl text-white font-bold my-2">2020-2021</h2>
            <span className=" flex space-x-3">
              <p className="text-sm text-white font-semibold">
                Shree Neema Vidhya Niketan H.S School Indore (M.P) |
              </p>
              <p className="text-sm text-white font-semibold">
                Senior Secondary |{" "}
              </p>
              <p className="text-sm  text-white font-semibold">84%</p>
            </span>
          </div>
          {/* B.tech */}
          <div className=" shadow-xl my-10 p-5 flex  flex-col   ">
            <h2 className=" text-4xl text-white font-bold my-3">
              2022-Present
            </h2>
            <span className=" flex space-x-3">
              <p className="text-sm text-white font-semibold">
                Vikrant Institute of Technology & Management, Borkhedi, Mhow |
              </p>
              <p className="text-sm text-white font-semibold">B.Tech | </p>
              <p className="text-sm text-white font-semibold">84.4%</p>
            </span>
          </div>
        </div>
        <div className="md:w-4/10 ">
          <img src={edu} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Education;
