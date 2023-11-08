import React from "react";

export default function Navbar({ onAboutClick, onProjectClick, onSkillClick, onContactClick }) {
  return (
    <div className="fixed bg-base-100 p-0 rounded-lg h-10 flex items-center sticky top-1">
      <div className="container mx-auto navbar">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 text-xs text-primary font-light">
            <li>
            <button onClick={onAboutClick}>ABOUT</button>
            </li>
            <li>
            <button onClick={onProjectClick}>PROJECTS</button>
            </li>
            <li>
            <button onClick={onSkillClick}>SKILLS</button>
            </li>
            <li>
             <button onClick={onContactClick}>CONTACT</button>
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
            <button onClick={onAboutClick}>ABOUT</button>
            </li>
            <li>
            <button onClick={onProjectClick}>PROJECTS</button>
            </li>
            <li>
            <button onClick={onSkillClick}>SKILLS</button>
            </li>
              <li>
              <button onClick={onContactClick}>CONTACT</button>
              </li>
            </ul>
          </div>
          <a className="normal-case font-bold text-xl lg:hidden">
            MENU
          </a>
        </div>
      </div>
    </div>
  );
}
