import React from "react";

export default function Navbar() {
  return (
    <div className="w-full fixed z-50 bg-base-100/50 backdrop-blur-lg">
      <div className="container mx-auto navbar">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 gap-8 ">
            <li>
              <a href="#home" className="nav-link">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
                SKILLS
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-normal dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-base-100"
            >
              <li>
                <a href="#home" className="nav-link">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link">
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <a className="normal-case font-bold text-xl lg:hidden">
            Sukriti Rajora
          </a>
        </div>
      </div>
    </div>
  );
}
