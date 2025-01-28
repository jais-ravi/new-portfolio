"use client";
import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Testimonial from "./Testimonial";


const Home = () => {
  const data = [
    // { num: "12", title: "Year of experience" },
    { num: "46", title: "PROJECTS COMPLETED" },
    { num: "20", title: "WORLDWIDE CLIENTS" },
  ];

  const words = `Aspiring Software Engineer and Pre final-year B.Tech (CSE - Data Science) 
  student at Haldia Institute of Technology with expertise in full-stack development, cloud deployment, and performance optimization. 
  Proficient in building and scaling end-to-end applications with seamless user experiences. 
  Passionate about solving real-world problems through innovative software solutions and eager to contribute to impactful projects.`;
  return (
    <div className=" w-full space-y-5">
      <div className="  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700">
        <h1 className=" text-3xl font-bold uppercase">Aspiring </h1>
        <h1 className=" text-6xl md:text-8xl font-bold uppercase">Software</h1>
        <h1 className=" text-6xl md:text-8xl font-bold uppercase">Engineer</h1>
      </div>
      <TextGenerateEffect
        words={words}
        className="text-lg font-semibold mt-3 text-zinc-300"
      />
      <div className=" pt-5 flex flex-wrap gap-10 ">
        {data.map((data, index) => (
          <div key={index}>
            <h1 className=" text-7xl font-bold">+{data.num}</h1>
            <p className=" text-lg font-bold max-w-20 uppercase leading-4">
              {data.title}
            </p>
          </div>
        ))}
      </div>
      <div className=" max-w-[52rem]">
        <Testimonial/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* <div className="w-full h-96 bg-red-500"></div>
        <div className="w-full h-96 bg-red-500"></div> */}
      </div>
    </div>
  );
};

export default Home;
