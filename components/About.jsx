import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col-reverse md:grid grid-cols-2 place-items-center items-center min-h-screen px-4 gap-4 md:gap-0 justify-center"
    >
      <div className="flex justify-center rounded-2xl">
        <div className="w-3/5 rounded-2xl relative about-image bg-primary">
          <img
            src="/assets/images/profile.jpg"
            alt=""
            className="shadow-xl rounded-2xl hover:rotate-12 transition-transform"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:items-end items-center">
        <div className="text-4xl md:text-6xl font-black text-primary">
          About Me
        </div>
        <div className="text-lg md:text-2xl font-medium text-center md:text-justify">
          I'm a third year engineering undergrad in Information Technology. I'm
          a Web Developer and a UI/UX designer with experience in React, Python,
          JavaScript, Data Structures and SQL. I've worked as a Software
          Engineering Intern at MiniOrange and have been a finalist in the Smart
          India Hackathon'22. Apart from that a big book worm and an animal
          lover.
        </div>
      </div>
    </section>
  );
}
