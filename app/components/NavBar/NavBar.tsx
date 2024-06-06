import React from "react";

function NavBar() {
  return (
    <nav className="flex w-full justify-between items-center bg-background-200 bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl sticky top-0 py-4 px-6">
      <span className="text-3xl font-bold tracking-wide font-accent">
        Manushi<span className="text-white"> Oza</span>
      </span>
      <ul className="flex space-x-10 text-lg font-medium">
        <li>
          <a href="#about">About</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#work">My Work</a>
        </li>
        <li>
          <a href="#skills">My Skills</a>
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
    </nav>
  );
}

export default NavBar;
