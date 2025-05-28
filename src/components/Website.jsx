import React from "react";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";
import img16 from "../assets/img16.png";
import img17 from "../assets/img17.png";
import img18 from "../assets/img18.png";
import img19 from "../assets/img19.png";
import img20 from "../assets/img20.png";
import img21 from "../assets/img21.png";
import img22 from "../assets/img22.png";
import img26 from "../assets/img26.png";
import img27 from "../assets/img27.png";

const Website = () => {
  const gradientButton={
    background: "#141E30", // Fallback color
    backgroundImage: "linear-gradient(to right,rgb(15, 24, 41),rgb(35, 64, 97))", // Gradient
    color:"white style={grdientStyle} "
  }
  const gradientStyle={
    background: "#141E30", // Fallback color
    backgroundImage: "linear-gradient(to right,rgb(35, 64, 97),rgb(15, 24, 41))", // Gradient
    color: "white"
  }
  return (
    <div id="Website" className="p-10">
      <h2 className="font-bold text-5xl text-center my-5  text-white p-4 ">
        Website Clones
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div style={gradientButton} class="max-w-sm  rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img7} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">StarBucks Clone</div>
            <p class="text-white text-base">
              This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
            <a
              href="https://kiranmanaware.github.io/Starbucks/"
              className="font-bold text-lg"
              target="_blank"
            >
          <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
          </div>
            </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img8} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl text-white mb-2">Nothing Clone</div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
          <a
            href="https://kiranmanaware.github.io/Nothing-Clone/"
            className="font-bold text-lg"
            target="_blank"
          >
            <div  style={gradientStyle} class="px-6  hover:scale-105 duration:300pt-4 pb-2 mb-3 bg-[#14355A] text-white text-center">
              View More
            </div>
          </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img9} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl text-white mb-2">Panfila Clone</div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
          <a
            href="https://kiranmanaware.github.io/PanfilaClone/"
            className="font-bold text-lg"
            target="_blank"
          >
            <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
            </div>
          </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img10} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl text-white mb-2">Whatsapp Clone </div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
          <a
            href="https://kiranmanaware.github.io/WhatApp-Clone/"
            className="font-bold text-lg"
            target="_blank"
          >
            <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
            </div>
          </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img11} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl text-white mb-2">Jetcost Website Clone</div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
            <a
              href="https://kiranmanaware.github.io/Jet-Cost-18Jul/"
              className="font-bold text-lg"
              target="_blank"
            >
          <div style={gradientStyle}  class="px-6 hover:scale duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
          </div>
            </a>
        </div>
        <div style={gradientButton} class="max-w-sm  rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img12} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl text-white mb-2">Netflix Clone</div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
            <a
              href="https://kiranmanaware.github.io/Kiran-snetflix/"
              className="font-bold text-lg"
              target="_blank"
            >
          <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
          </div>
            </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img13} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-white text-xl mb-2">Krystal Website Clone</div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
          <a
            href="https://kiranmanaware.github.io/KrystalClone/"
            className="font-bold text-lg"
            target="_blank"
          >
            <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
            </div>
          </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img14} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-white text-xl mb-2">Hindustan Website Clone</div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
          <a
            href="https://kiranmanaware.github.io/Hindustan-Pencils-Clone/"
            className="font-bold text-lg"
            target="_blank"
          >
            <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
            </div>
          </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img15} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-white text-xl mb-2">Fruit Nuts Website Clone </div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
          <a
            href="https://kiranmanaware.github.io/FuritsNut-Clone/"
            className="font-bold text-lg"
            target="_blank"
          >
            <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
            </div>
          </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img16} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-white text-xl mb-2">Patel Paradise</div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
            <a
              href=" https://kiranmanaware.github.io/Petal-Paradise/"
              className="font-bold text-lg"
              target="_blank"
            >
          <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
          </div>
            </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img17} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-white text-xl mb-2">Food Zone</div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
            <a
              href="https://kiranmanaware.github.io/Foodzone-clone/"
              className="font-bold text-lg"
              target="_blank"
            >
          <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
          </div>
            </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img18} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-white text-xl mb-2">Indriya Website clone</div>
            <p class="text-white  text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
          <div style={gradientStyle} class="px-6 pt-4 pb-2 mb-3 hover:scale=1-5 duration-300 bg-[#14355A] text-white text-center">
            <a
              href="https://kiranmanaware.github.io/Indriya-clone/"
              className="font-bold text-lg"
              target="_blank"
            >
              View More
            </a>
          </div>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
          <img class="w-full" src={img19} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-white  text-xl mb-2">Jio Website Website</div>
            <p class="text-white  text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
            <a
              href=" https://kiranmanaware.github.io/Jio-Website-Clone/"
              className="font-bold text-lg"
              target="_blank"
            >
          <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
          </div>
            </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3"> 
          <img class="w-full" src={img20} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white ">Pet-shop Website</div>
            <p class="text-white  text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
            <a
            target="_blank"
              href="https://kiranmanaware.github.io/Pet-Shop/"
              className="font-bold text-lg"
            >
          <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
          </div>
            </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3"> 
          <img class="w-full" src={img21} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white ">Pixer Studio Clone</div>
            <p class="text-white  text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
            <a
            target="_blank"
              href="https://kiranmanaware.github.io/Pixer-Studio-Clone/"
              className="font-bold text-lg"
            >
          <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
          </div>
            </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3"> 
          <img class="w-full" src={img22} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-white  text-xl mb-2">Pant paradise Website</div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
            <a
              href="https://kiranmanaware.github.io/Plant-paradise/"
              className="font-bold text-lg"
              target="_blank"
            >
          <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
          </div>
            </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3"> 
          <img class="w-full" src={img26} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-white  text-xl mb-2">MakeUp Artist Website</div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
            <a
            target="_blank"
              href="https://kiranmanaware.github.io/Makeup-Artist/"
              className="font-bold text-lg"
            >
          <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
          </div>
            </a>
        </div>
        <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3"> 
          <img class="w-full" src={img27} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-white  text-xl mb-2">Stationary Website</div>
            <p class="text-white text-base">
            This is a fully responsive Loan Website built using HTML and CSS.
              The website provides a seamless  interface for
              users to explore loan options.
            </p>
          </div>
            <a
              target="_blank"
              href="https://kiranmanaware.github.io/Stationary-shop/"
              className="font-bold text-lg"
            >
          <div style={gradientStyle}  class="px-6 hover:scale-105 duration:300 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
              View More
          </div>
            </a>
        </div>



















      </div>
    </div>
  );
};

export default Website;
