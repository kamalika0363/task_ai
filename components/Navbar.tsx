// Navbar.js
"use client"
import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#131313] p-7">
      <div className="flex justify-between items-center">
        <div className="text-[#b8b8b8] text-xl font-semibold">
           Supabase
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#b8b8b8] focus:outline-none"
          >
            {menuOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>
        <div
          className={`md:flex md:space-x-4 ${
            menuOpen ? "block mt-4 md:mt-0" : "hidden"
          }`}
        >
          <div
           
            className="text-white hover:text-purple-300 transition duration-300"
          >
            Home
          </div>
          <div
           
            className="text-white hover:text-purple-300 transition duration-300"
          >
            About
          </div>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
