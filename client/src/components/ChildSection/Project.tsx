import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image"; 
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const Project = () => {
  const projects = [
    {
      img: "profilePic.svg",
      title: "project",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, omnis!",
      url: "",
    },
    {
      img: "profilePic.svg",
      title: "project",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, omnis!",
      url: "",
    },
    {
      img: "profilePic.svg",
      title: "project",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, omnis!",
      url: "",
    },
  ];
  return (
    <div>
      <div className="  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700">
        <h1 className=" text-6xl md:text-8xl font-bold uppercase">RECENT</h1>
        <h1 className=" text-6xl md:text-8xl font-bold uppercase ">PROJECTS</h1>
      </div>
      <div className=" mt-5 space-y-2 ">
        {projects.map((project, index) => (
          <Card className="flex relative group" key={index}>
            <div className="absolute top-3 right-3 transition-all duration-300 group-hover:top-2 group-hover:right-2">
              <Link
                href={project.url}
                className={buttonVariants({ variant: "outline", size: "icon" })}
              >
                <MdOutlineArrowOutward />
              </Link>
            </div>
            <CardHeader className="p-3">
              <CardTitle>
                <Image
                  src={project.img}
                  alt="project"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 flex flex-col ">
              <h1 className="text-3xl font-bold uppercase">{project.title}</h1>
              <p className="text-sm font-semibold capitalize text-zinc-400">
                {project.des}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Project;
