import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  FaLaptopCode,
  FaServer,
  FaNetworkWired,
  FaCogs,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";
const Skills = () => {
  const skills = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Full-Stack Development",
      dec: "Building end-to-end web applications, handling both frontend and backend, ensuring seamless user experience and functionality.",
    },
    {
      icon: <FaServer size={40} />,
      title: "Backend Development",
      dec: "Designing scalable and efficient server-side logic, handling APIs, authentication, and database operations for seamless functionality.",
    },
    {
      icon: <FaDatabase size={40} />,
      title: "Database Management",
      dec: "Designing, optimizing, and managing databases to store and retrieve data efficiently, ensuring high availability and performance.",
    },
    {
      icon: <FaNetworkWired size={40} />,
      title: "System Design",
      dec: "Architecting scalable, maintainable, and high-performance software systems with distributed computing principles.",
    },
    {
      icon: <FaCloud size={40} />,
      title: "Cloud & DevOps",
      dec: "Automating deployment, scaling, and monitoring using cloud platforms, CI/CD pipelines, and infrastructure as code.",
    },
    {
      icon: <FaCogs size={40} />,
      title: "Microservices & APIs",
      dec: "Developing modular, scalable, and loosely coupled services that communicate through APIs to build resilient applications.",
    },
  ];
  return (
    <div className=" w-full space-y-5">
      <div className="  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700">
        <h1 className=" text-6xl md:text-8xl font-bold uppercase">technical</h1>
        <h1 className=" text-6xl md:text-8xl font-bold uppercase ">Skills</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <Card
            className="flex flex-row border border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15] hover:scale-105 transition-transform duration-200 hover:shadow-lg"
            key={index}
          >
            <CardHeader className="p-3">
              <div className=" m-auto">{skill.icon}</div>
            </CardHeader>
            <CardContent className="p-3">
              <CardTitle className=" font-semibold text-xl">
                {skill.title}
              </CardTitle>
              <CardDescription>{skill.dec}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
