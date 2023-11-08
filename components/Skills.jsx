import React from "react";
import { AiOutlineHtml5, AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { DiCss3, DiReact, DiPython, DiIllustrator, DiJava, DiGitBranch, DiPhotoshop } from "react-icons/di";
import { TbBrandJavascript, TbBrandFigma, TbBrandNextjs, TbBrandCpp } from "react-icons/tb";
import { TbBrandVue} from "react-icons/tb"


import {BsFillBootstrapFill} from "react-icons/bs"
import { SiMysql, SiTypescript,SiFirebase,SiTailwindcss, SiMongodb, SiVercel, SiVisualstudio } from "react-icons/si";

export default function Skills() {
  return (

      <div className="stick lg:ml-20 lg:mr-20 ">

         <h2 className="text-3xl font-semibold text-base-100 uppercase underline">Skills</h2> 
        
        <div className="text-lg font-semibold text-base-100 uppercase ">
          <p className=" mt-10 font-semibold underline">Technical Skills</p>
        <div className="text-base-100 font-xl mt-5 flex gap-12">
        <div className="flex gap-3">
          <TbBrandNextjs className="text-3xl"/>
          <h2>NextJS</h2>
        </div>
        <div className="flex gap-3">
          <DiReact className="text-3xl"/>
          <h2>React</h2>
        </div>
        <div className="flex gap-3">
          <TbBrandVue className="text-3xl"/>
          <h2>VueJS</h2>
        </div>
        <div className="flex gap-3">
          <TbBrandJavascript className="text-3xl"/>
          <h2>JavaScript</h2>
        </div>
        </div>
        <div className="text-base-100 font-xl mt-10 flex gap-12">
        <div className="flex gap-3">
          <DiPython className="text-3xl"/>
          <h2>Python</h2>
        </div>
   
        <div className="flex gap-3">
          <DiJava className="text-3xl"/>
          <h2>Java</h2>
        </div>
        <div className="flex gap-3">
          <SiTypescript className="text-3xl"/>
          <h2>TypeScript</h2>
        </div>
        <div className="flex gap-3">
          <h2>C++</h2>
        </div>
        </div>
        <div className="text-base-100 font-xl mt-10 flex gap-12">
        <div className="flex gap-3">
          <SiFirebase className="text-3xl"/>
          <h2>Firebase</h2>
        </div>
        <div className="flex gap-3">
          <SiMysql className="text-3xl"/>
          <h2>SQL</h2>
        </div>
        <div className="flex gap-3">
          <SiTailwindcss className="text-3xl"/>
          <h2>TailwindCSS</h2>
        </div>
        <div className="flex gap-3">
          <AiOutlineHtml5 className="text-3xl"/>
          <h2>HTML</h2>
        </div>
        </div>
        <div className="text-base-100 font-xl mt-10 flex gap-12">
        <div className="flex gap-3">
          <SiMongodb className="text-3xl"/>
          <h2>MongoDB</h2>
        </div>
        <div className="flex gap-3">
          <DiCss3 className="text-3xl"/>
          <h2>CSS</h2>
        </div>
        <div className="flex gap-3">
          <DiGitBranch className="text-3xl"/>
          <h2>Git</h2>
        </div>
        <div className="flex gap-3">
          <BsFillBootstrapFill className="text-3xl"/>
          <h2>Bootstrap</h2>
        </div>
        </div>
        </div>
 
      <div className="text-lg font-semibold text-base-100 uppercase underline">
        <h2 className="mt-10 font-semibold underline  ">Other Skills</h2>
        <div className="text-base-100 font-xl mt-5 flex gap-12">
        <div className="flex gap-3">
          <TbBrandFigma className="text-3xl"/>
          <h2>Figma</h2>
        </div>
        <div className="flex gap-3">
          <AiFillGithub className="text-3xl"/>
          <h2>Github</h2>
        </div>
        <div className="flex gap-3">
          <SiVercel className="text-3xl"/>
          <h2>Vercel</h2>
        </div>
        <div className="flex gap-3">
          <DiIllustrator className="text-3xl"/>
          <h2>Illustrator</h2>
        </div>
        </div>
        <div className="text-base-100 font-xl mt-10 flex gap-12">
        <div className="flex gap-3">
          <SiVisualstudio className="text-3xl"/>
          <h2>VS Code</h2>
        </div>
        <div className="flex gap-3">
          <AiFillMediumCircle className="text-3xl"/>
          <h2>Medium</h2>
        </div>
        <div className="flex gap-3">
          <DiPhotoshop className="text-3xl"/>
          <h2>Photoshop</h2>
        </div>
        </div>
      </div>
      </div>
  );
}
