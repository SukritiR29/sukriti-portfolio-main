import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col-reverse md:grid grid-cols-2 place-items-center items-center min-h-screen gap-4 md:gap-0 justify-center"
    >
      <div>
        <div>
          <img
            src="/assets/images/about.png"
            alt=""
            className="hover:rotate-12 transition-transform h-1/4 mr-20"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:items-end items-center">
        <div className="text-4xl md:text-6xl font-black text-primary">
          About Me
        </div>
        <div className="text-lg md:text-2xl font-medium text-center md:text-justify ">
          I'm a final year engineering undergrad in Information Technology. I'm
          a Full Stack Developer with experience in technologies like ReactJS, 
          NextJS, MongoDB, Firebase, NextSuth, TailwindCSS. I also posses a decent knowledge of 
          Data Structures in Java and SQL. I have been a finalist in the Smart
          India Hackathon'22. Apart from that a big book worm and an animal.
          lover.
        </div>
      </div>
    </section>
  );
}
