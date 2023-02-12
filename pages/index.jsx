import Head from "next/head";
import { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/global/Navbar";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function index() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        // console.log(entries);
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");

          if (entry.isIntersecting) {
            document
              .querySelectorAll(`.nav-link[href="#${id}"]`)
              .forEach((link) => {
                link.classList.add("active");
              });
            console.log(entry);
          } else {
            document
              .querySelectorAll(`.nav-link[href="#${id}"]`)
              .forEach((link) => {
                link.classList.remove("active");
              });
          }
        });
      },
      {
        threshold: 0.51,
      }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
  });

  return (
    <div className="relative">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
