import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { FaReact } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

import { IoCallOutline } from "react-icons/io5";

const About = () => {
  const data = [
      {
        id: 1,
        icon: <FaReact size={70} />,
        title: "Web Development",
        label: "High-quality Development of web-sites at professional level. ",
      },
      {
        id: 2,
        icon: <IoCallOutline size={60} />,
        title: "Web Design",
        label: "The most modern and high-quality design made at a professional level. ",
      },
      {
        id: 3,
        icon: <AiOutlineLinkedin size={70} />,
        title: "Mobile App",
        label: "Professional level of development of  application for Android",
      },

    ];
  return (
    <div className=" px-8  mx-auto  text-white">
      <div>
        <h1 className=" text-4xl font-bold">About me</h1>
        <div className="h-2  w-16 bg-[#E3CA90]  rounded-sm"></div>
      </div>
      <div className="py-5">
        <h1 className=" text-lg font-semibold">
          Aspiring Software Engineer and Pre final-year B.Tech (CSE - Data
          Science) student at Haldia Institute of Technology with expertise in
          full-stack development, cloud deployment, and performance
          optimization. Proficient in building and scaling end-to-end
          applications with seamless user experiences. Passionate about solving
          real-world problems through innovative software solutions and eager to
          contribute to impactful projects.
        </h1>
      </div>
      <div>
        <h1 className=" text-2xl font-bold">What I&apos;m Doing</h1>
        <div className=" grid grid-cols-3 gap-5">
          {data.map((data) => (
            <Card className=" bg-transparent bg-[#E3CA90] flex" key={data.id}>
              <CardHeader className=" p-3">{data.icon}</CardHeader>
              <CardContent className="p-3 ">
                <h1>{data.title}</h1>
                <p>{data.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
