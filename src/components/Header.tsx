import React from "react";
import logo from "../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        {/* Increased header height */}
        <div className="flex items-center justify-between h-32">

          {/* LOGO */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="BR Empire Logo"
              className="h-[88px] md:h-24 lg:h-[120px] w-auto object-contain"
            />
          </div>

          {/* NAV MENU */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
            <a href="#home" className="text-blue-600">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#team">Our Team</a>
            <a href="#projects">Our Projects</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact Us</a>
          </nav>

          {/* CTA BUTTON */}
          <button className="hidden md:flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Reach Us →
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
