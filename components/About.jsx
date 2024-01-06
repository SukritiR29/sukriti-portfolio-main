import React from "react";

export default function About() {
  return (
  <div>
   <div className="stick lg:ml-20 lg:mr-20 ">
    <div className="m-3">
    <h2 className="text-3xl font-semibold text-base-100 uppercase underline">About Me</h2>
    <a href="http://resume-sukritir29.vercel.app/" className="btn btn-secondary btn-sm mt-5 text-sm pl-14 pr-14 font-normal">
            Resume
          </a>
    </div>
    <p className="mt-5 ml-4 mr-4 mb-5 text-base-100 text-md text-justify">A programmer with an ardent passion for Web Developing and Data Structures. To develop my talents & knowledge and learn more about my subject of study, I have worked on a numerous impactful projects, several internships & hackathons. I continue to fervently learn about relevant topics while actively working and learning in the field of Full-Stack Development, and its derivatives.</p>
   </div>

    <div className="lg:m-20 lg:mb-10 lg:mt-5  mr-3 ml-3">
      <h2  className="text-xl font-semibold text-base-100 uppercase underline">Experience</h2>
      <div className="lg:flex gap-20">
      <div className="bg-secondary lg:w-80 mt-5 rounded-md">
        <div className="flex flex-col items-center justify-center pb-4 pt-3 ">
        <h2 className="text-slate-300"> SDE Intern </h2>
        <h5 className="text-slate-300 text-sm"> Quinbay Technology - Bangalore </h5>
        <p className="text-xs">May 2023 - July 2023</p>
        <p className="text-xs mt-3 text-justify pl-3 pr-3 text-slate-400 font-light">Worked with Vue.js on a company's on going project. Created new features. Modified the API calls to prevent unnecessary page reloads.. Resolved over 45 bugs. Used VueX for proper routing of the pages.</p>
        </div>
      </div>

      <div className="bg-secondary lg:w-80 mt-5 rounded-md">
        <div className="flex flex-col items-center justify-center pb-4 pt-3 mb-5 ">
        <h2 className="text-slate-300"> SDE Intern </h2>
        <h5 className="text-slate-300 text-sm"> MiniOrange - Pune </h5>
        <p className="text-xs">June 2022 - July 2022</p>
        <p className="text-xs mt-3 text-justify pl-3 pr-3 text-slate-400 font-light">Developed a user-friendly application to showcase Metamask wallet details, leveraging NextJS, Metamask API, Supabase,
and ethers.js. Implemented a one-click login flow. Used nonce and JWT to authenticate users. Employed ethers.js library to facilitate cryptographic operations.</p>
        </div>
      </div>
      </div>

    </div>
    <div className="lg:m-20 lg:mt-5 mr-3 ml-3">
      <h2  className="text-xl font-semibold text-base-100 uppercase underline">What I'm Doing</h2>
      <div className="lg:flex gap-20">
      <div className="bg-secondary lg:w-80 mt-5 rounded-md">
        <div className="flex flex-col items-center justify-center pt-5 ">
        <h2 className="text-slate-300"> Projects </h2>
        
        <p className="text-xs mt-2 text-justify pl-3 pr-3 pb-2 text-slate-400 font-light">Consistently working on web projects and internships and deploying them relevant to the field, all of which could be viewed on the projects section.</p>
        </div>
      </div>

      <div className="bg-secondary lg:w-80 mt-5 rounded-md">
        <div className="flex flex-col items-center justify-center pb-4 pt-5 ">
        <h2 className="text-slate-300"> Contrubutions </h2>
        <p className="text-xs mt-2 text-justify pb-2 pl-3 pr-3 text-slate-400 font-light">Contributing to the community with Google Developers Students CLub as a UI Lead for 2 years. Conducting workshops on UI UX development and related challenges.</p>
        </div>
      </div>
      </div>
    </div>
    <div className="lg:m-20 lg:mt-0 mr-3 ml-3">
    <div className="lg:flex gap-20">
      <div className="bg-secondary lg:w-80 rounded-md">
        <div className="flex flex-col items-center justify-center pt-5 ">
        <h2 className="text-slate-300"> Hackathons </h2>
        
        <p className="text-xs mt-2 text-justify pl-3 pr-3 pb-2 text-slate-400 font-light">Participating in hackathons, working on several problem statements, building solutions and networking among people with same interests</p>
        </div>
      </div>

      <div className="bg-secondary lg:w-80 rounded-md">
        <div className="flex flex-col items-center justify-center pb-4 pt-5 ">
        <h2 className="text-slate-300"> Reading </h2>
        <p className="text-xs mt-2 text-justify pb-2 pl-3 pr-3 text-slate-400 font-light">When I'm not coding, you'll find me immersed in books, mainly novels. Got any suggestions? Throw them this way!!</p>
        </div>
      </div>
      </div>
      </div>
  </div>
  

  );
}
