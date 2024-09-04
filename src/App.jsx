import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contract from "./components/Contract";
import { EDUCATION } from "./constants";
import Education from "./components/Education";

const App = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300  selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
        bg-[radial-gradient(ellipse_60%_60%_at_40%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
        {/* <div
          class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
        ></div> */}
      </div>
      <div className="container mx-auto px-8"></div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      {/* <Experience /> */}
      <Education />
      <Contract />
    </div>
  );
};

export default App;
