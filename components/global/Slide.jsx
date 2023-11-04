import React from "react";

export default function Slide(props) {
  return (
    <div className={`px-4 overflow-hidden`}>
      <div className="m-auto w-full flex items-center justify-evenly gap-2 lg:gap-5 flex-col lg:flex-row py-16">
      <div
          className={`w-2/5 lg:w-3/12 lg:h-4/6 rounded-3xl ring-8 ring-white  shadow-2xl p-4  flex items-center justify-center  ${props.bg}`}
        >
          <img
            src={`/assets/images/projects/${props.heading}.png`}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <div className="lg:w-6/12 flex flex-col gap-4">
          <div className={`text-5xl lg:text-8xl font-bold mt-4 `}>
            {props.heading}
          </div>
         <p className={`lg:text-xl  text-justify`}>
          {props.para}
          </p> 
          <div className="flex gap-4">
            <a href={props.livelink} className={`btn btn-primary`}>
              View
            </a>
            <a href={props.repolink} className={`btn btn-secondary`}>
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
