import React from "react";
import { FiFigma, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="">
      <div
        className="container mx-auto min-h-screen md:grid md:grid-cols-2 place-items-center row-span-1 flex justify-center flex-col gap-4 items-center"
        id="home"
      >
        <div className="flex flex-col  md:gap-7 items-center md:items-start px-4">
          <span className="text-2xl md:text-3xl font-bold">Hello, I'm</span>
          <span className="text-3xl md:text-5xl font-black text-primary uppercase">
            Sukriti Rajora
          </span>
          <span className="text-lg text-center md:text-start md:text-2x3 font-small">
            I am a front-end web devloper and UI/UX designer. Also a content
            writer and graphic designer at times.
          </span>
          <a href="http://resume-sukritir29.vercel.app/" className="btn btn-primary mt-7">
            Download Resume
          </a>
        </div>
        <div className="flex flex-col-reverse md:flex-col items-center justify-center w-full px-4 gap-10">
          <img className="w-2/3" src="/assets/images/girl.png" alt="" />
          <div className="flex gap-4 text-2xl md:text-4xl justify-center w-full mt-5">
            <a href="https://www.linkedin.com/in/sukriti-rajora-48b4aa218" className="hover:scale-125 transition-transform">
              <FiLinkedin />
            </a>
            <a href="https://github.com/SukritiR29" className="hover:scale-125 transition-transform">
              <FiGithub />
            </a>
            <a href="https://discordapp.com/users/Sukriti%20Rajora#0820" className="hover:scale-125 transition-transform">
              <FaDiscord />
            </a>
            <a href="http://figma.com/@sukritiRajora" className="hover:scale-125 transition-transform">
              <FiFigma />
            </a>
            <a href="mailto:sukritirajora@gmail.com" className="hover:scale-125 transition-transform">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
