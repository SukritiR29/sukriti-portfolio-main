import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiPython, DiIllustrator } from "react-icons/di";
import { TbBrandJavascript, TbBrandFigma } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { IoLogoWordpress } from "react-icons/io";

export default function Skills() {
  return (
    <section
      id="skills"
      className="container mx-auto min-h-screen flex justify-center items-center overflow-x-hidden"
    >
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="text-4xl md:text-6xl font-black text-primary">
          Skills
        </div>
        <p>I've Experience in the field of</p>
        <div className="w-full px-4">
          <p className="text-2xl font-semibold">Technical Skills</p>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 place-items-start gap-x-12">
            <div className="skill">
              <AiOutlineHtml5 />
              HTML
            </div>
            <div className="skill">
              <DiCss3 />
              CSS
            </div>
            <div className="skill">
              <TbBrandJavascript />
              JS
            </div>
            <div className="skill">
              <DiReact />
              React
            </div>
            <div className="skill">
              <DiPython />
              Python
            </div>
            <div className="skill">
              <SiMysql />
              SQL
            </div>
          </div>
        </div>
        <div className="w-full px-4">
          <p className="text-2xl font-semibold">Other Skills</p>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 place-items-start gap-x-12">
            <div className="skill">
              <TbBrandFigma />
              Figma
            </div>
            <div className="skill">
              <IoLogoWordpress />
              Wordpress
            </div>
            <div className="skill">
              <DiIllustrator />
              Illustrator
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
