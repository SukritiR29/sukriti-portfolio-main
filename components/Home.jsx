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
        <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start px-4">
          <span className="text-2xl md:text-3xl font-bold">Hello, I'm</span>
          <span className="text-3xl md:text-6xl font-black text-primary uppercase">
            Sukriti Rajora
          </span>
          <span className="text-lg text-center md:text-start md:text-2xl font-medium">
            I am a front-end web devloper and UI/UX designer. Also a content
            writer and graphic designer at times.
          </span>
          <a href="#" className="btn btn-primary">
            Download Resume
          </a>
        </div>
        <div className="flex flex-col-reverse md:flex-col items-center justify-center w-full px-4">
          <img className="w-4/5" src="/assets/images/girl.png" alt="" />
          <div className="flex gap-4 text-2xl md:text-4xl justify-center w-full">
            <a href="" className="hover:scale-125 transition-transform">
              <FiLinkedin />
            </a>
            <a href="" className="hover:scale-125 transition-transform">
              <FiGithub />
            </a>
            <a href="" className="hover:scale-125 transition-transform">
              <FaDiscord />
            </a>
            <a href="" className="hover:scale-125 transition-transform">
              <FiFigma />
            </a>
            <a href="" className="hover:scale-125 transition-transform">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
