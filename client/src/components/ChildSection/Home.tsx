"use client";
import React from "react";

const Home = () => {
  const data = [
    { num: "12", title: "Year of experience" },
    { num: "46", title: "PROJECTS COMPLETED" },
    { num: "20", title: "WORLDWIDE CLIENTS" },
  ];
  return (
    <div>
      <div className="  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700">
        <h1 className=" text-3xl font-bold ">Aspiring </h1>
        <h1 className=" text-8xl font-bold uppercase  ">Software</h1>
        <h1 className=" text-8xl font-bold uppercase  ">Engineer</h1>
      </div>
      <p className=" max-w-[30rem] text-lg font-semibold mt-3 text-zinc-300">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>
      <div className=" mt-10 flex gap-10">
        {data.map((data, index) => (
          <div key={index}>
            <h1 className=" text-7xl font-bold">+{data.num}</h1>
            <p className=" text-lg font-bold max-w-20 uppercase leading-4">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
