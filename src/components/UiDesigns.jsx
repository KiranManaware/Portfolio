import React from 'react'
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const UiDesigns = () => {
  const gradientButton={
    background: "#141E30", // Fallback color
    backgroundImage: "linear-gradient(to right,rgb(15, 24, 41),rgb(35, 64, 97))", // Gradient
  }
  const gradientStyle={
    background: "#141E30", // Fallback color
    backgroundImage: "linear-gradient(to right,rgb(35, 64, 97),rgb(15, 24, 41))", // Gradient
    color: "white"
  }
  return (
    <div id='UI'className='pl-15'>
          <h2 className="font-bold text-5xl text-center my-5  text-white p-4 ">UI Designs Clones</h2>
          <div  className="grid md:grid-cols-3 gap-10 ">
            <div style={gradientButton} class="max-w-sm  rounded overflow-hidden bg-[#A18877]  shadow-lg p-3">
              <img class="w-full" src={img1} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl text-white mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-white text-base">
                  I created this UI design using HTML and CSS, with Flexbox for a
                  responsive and structured layout
                </p>
              </div>
              <div style={gradientStyle} class="px-6 pt-4 pb-2 mb-3  duration-300 hover:scale-105 text-white text-center">
                <a
                  href="https://kiranmanaware.github.io/StartCard/"
                  className="font-bold text-lg"
                >
                  View More
                </a>
              </div>
            </div>
            <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
              <img class="w-full" src={img2} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl text-white mb-2">Plantoons</div>
                <p class="text-gray-700 text-white text-base">
                I created this UI design using HTML and CSS, with Flexbox for a
                responsive and structured layout
                </p>
              </div>
                <a
                  href="https://kiranmanaware.github.io/Plantoons/"
                  className="font-bold text-lg"
                >
              <div style={gradientStyle} class="px-6 pt-4 pb-2 mb-3   duration-300 hover:scale-105 text-white text-center">
                  View More
              </div>
                </a>
            </div>
            <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
              <img class="w-full" src={img3} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl text-white mb-2">ISU Agency</div>
                <p class="text-gray-700 text-white text-base">
                I created this UI design using HTML and CSS, with Flexbox for a
                responsive and structured layout
                </p>
              </div>
                <a
                  href="https://kiranmanaware.github.io/ISU-agency12Aug/"
                  className="font-bold text-lg"
                >
              <div style={gradientStyle} class="px-6 pt-4 pb-2 mb-3  hover:scale-105 duration-300 text-white text-center">
                  View More
              </div>
                </a>
            </div>
            <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
              <img class="w-full" src={img4} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl text-white mb-2">Cashbank UI </div>
                <p class="text-gray-700 text-white text-base">
                I created this UI design using HTML and CSS, with Flexbox for a
                responsive and structured layout.
                </p>
              </div>
                <a
                  href="https://kiranmanaware.github.io/Cashbank-11Aug/"
                  className="font-bold text-lg"
                >
              <div style={gradientStyle} class="hover:scale-105 duration-300 px-6 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
                  View More
              </div>
                </a>
            </div>
            <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
              <img class="w-full" src={img5} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl text-white mb-2">Metafi clone </div>
                <p class="text-gray-700 text-white text-base">
                I created this UI design using HTML and CSS, with Flexbox for a
                responsive and structured layout
                </p>
              </div>
              <div style={gradientStyle} class="hover:scale-105 duration-300 px-6 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
                <a
                  href="https://kiranmanaware.github.io/Metafi-clone-9Aug/"
                  className="font-bold text-lg"
                >
                  View More
                </a>
              </div>
            </div>
            <div style={gradientButton} class="max-w-sm rounded overflow-hidden bg-[#A18877] shadow-lg p-3">
              <img class="w-full" src={img6} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl text-white mb-2">Pluralsight Login Page</div>
                <p class="text-gray-700 text-white text-base">
                I created this UI design using HTML and CSS, with Flexbox for a
                responsive and structured layout
                </p>
              </div>
              <div style={gradientStyle} class="hover:scale-105 duration-300 px-6 pt-4 pb-2 mb-3  bg-[#14355A] text-white text-center">
                <a
                  href="https://kiranmanaware.github.io/Pluraldsight_Login_page/"
                  className="font-bold text-lg"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
          </div>
  )
}

export default UiDesigns
