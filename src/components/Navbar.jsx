import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const gradientStyle={
    background: "#141E30", // Fallback color
    backgroundImage: "linear-gradient(to right,rgb(35, 64, 97),rgb(15, 24, 41))", // Gradient
    color: "white"
  }

  return (
    <nav style={gradientStyle}  className="p-4  border-b border-gray-700 fixed w-full  " >
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-white text-2xl font-bold  ">My Portfolio</Link>
        {/* <h1 className="text-white text-2xl font-bold  ">My Portfolio</h1> */}
        <div className="hidden   md:flex space-x-6">
          <Link onClick={() => setIsOpen(!isOpen)}  to={'/'} className="text-white hover:text-gray-200">Home</Link>
          <Link onClick={() => setIsOpen(!isOpen)}  to={'/about'} className="text-white hover:text-gray-200">About</Link>
          <Link onClick={() => setIsOpen(!isOpen)}  to={'/projects'} className="text-white hover:text-gray-200">Projects</Link>
          <Link onClick={() => setIsOpen(!isOpen)}  to={'/contact'} className="text-white hover:text-gray-200">Contact</Link>
        </div>
        <button className="md:hidden text-white " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={gradientStyle} className="md:hidden p-4 flex flex-col space-y-3">
          <Link onClick={() => setIsOpen(!isOpen)} to={'/'} className="text-white">Home</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to={'/about'} className="text-white">About</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to={'/projects'} className="text-white">Projects</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to={'/contact'}  className="text-white">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
