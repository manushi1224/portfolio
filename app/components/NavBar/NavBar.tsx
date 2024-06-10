"use client";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-background-200 bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl sticky top-0 py-4 px-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <span className="text-3xl font-bold tracking-wide font-accent">
            Manushi<span className="text-white"> Oza</span>
          </span>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            &#9776;
          </button>
        </div>
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li>
            <a href="#about" className="py-2 md:py-0">
              About
            </a>
          </li>
          {/* <li>
            <a href="#services" className="py-2 md:py-0">Services</a>
          </li> */}
          <li>
            <a href="#work" className="py-2 md:py-0">
              My Work
            </a>
          </li>
          <li>
            <a href="#skills" className="py-2 md:py-0">
              My Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-accent-200 px-8 py-2 rounded-lg text-background-800"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`flex-col md:hidden ${
          isOpen ? "flex" : "hidden"
        } mt-4 space-y-2 text-lg font-medium`}
      >
        <a href="#about" className="py-2">
          About
        </a>
        {/* <a href="#services" className="py-2">Services</a> */}
        <a href="#work" className="py-2">
          My Work
        </a>
        <a href="#skills" className="py-2">
          My Skills
        </a>
        <a
          href="#contact"
          className="bg-accent-200 px-8 py-2 rounded-lg text-background-800"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
