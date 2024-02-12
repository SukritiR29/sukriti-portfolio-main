  import Head from "next/head";
  import { useEffect } from "react";
  import Intro from "../components/Intro";
  import Holder from "../components/Holder";
  // import About from "../components/About";
  // import Contact from "../components/Contact";
  // import Navbar from "../components/global/Navbar";
  // import Home from "../components/Home";
  // import Projects from "../components/Projects";
  // import Skills from "../components/Skills";

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
          <title>Sukriti.rj</title>
          <meta name="title" content="Sukriti.rj" />
          <meta name="description" content="Hey there! I'm Sukriti. A frontend developer and UI/UX designer." />
          
          <link rel="icon" href="/favicon.ico" />

          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://sukriti-portfolio-rho.vercel.app/"></meta>
          <meta property="og:title" content="Sukriti.rj"></meta>
          <meta property="og:description" content="Hey there! I'm Sukriti. A frontend developer and UI/UX designer."></meta>
          <meta property="og:image" content=""></meta>

          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:url" content="https://sukriti-portfolio-rho.vercel.app/"></meta>
          <meta property="twitter:title" content="Sukriti.rj"></meta>
          <meta property="twitter:description" content="Hey there! I'm Sukriti. A frontend developer and UI/UX designer."></meta>
          <meta property="twitter:image" content=""></meta>
          
        </Head>
        <div className="lg:flex flex-row w-fit" >
        <Intro/>
        <Holder />
        </div>
      
        {/* <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact /> */}
      </div>
    );
  }
