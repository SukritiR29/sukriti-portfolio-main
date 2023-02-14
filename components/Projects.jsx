import React from "react";
import Slider from "./global/Slider";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container mx-auto min-h-screen flex justify-center items-center overflow-x-hidden"
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="text-4xl md:text-6xl font-black text-primary mt-20">
          Projects
        </div>

        <Slider />
      </div>
    </section>
  );
}
