"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";

import { IoCallOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

import { AiOutlineLinkedin } from "react-icons/ai";

const LeftComponent = () => {
  const buttons = [
    {
      id: 1,
      icon: <IoMailOutline size={25} />,
      title: "E-mail",
      label: "ravijaiswal258852@gmail.com",
    },
    {
      id: 2,
      icon: <IoCallOutline size={25} />,
      title: "Phone No.",
      label: "7488846958",
    },
    {
      id: 3,
      icon: <AiOutlineLinkedin size={25} />,
      title: "LinkedIn",
      label: "jais-ravi",
    },
    {
      id: 4,
      icon: <IoLocationOutline size={25} />,
      title: "Address",
      label: "Dhanbad,Jharkhand",
    },
  ];

  return (
    <section className=" h-full max-w-96 p-4 bg-[#444444] rounded-3xl overflow-x-hidden text-white">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col gap-5 justify-center items-center pt-6">
          <div className="w-56 h-56 rounded-2xl overflow-hidden">
            <Image
              src="avat.svg"
              alt="ravi"
              width={100}
              height={100}
              className="w-full h-full"
              quality={100}
            />
          </div>
          <div>
            <h1 className="font-bold text-3xl text-center ">RAVI JAISWAL</h1>
            <h2 className="text-lg font-semibold text-center">
              Software Developer
            </h2>
          </div>
        </div>

        <div className="flex-1">
          <Separator />
          {/* <div className="flex justify-center items-center">
          <LeetCodeChart/>
          </div> */}

          <div className=" space-y-5 mt-5">
            {buttons.map((button) => (
              <div className="flex gap-3" key={button.id}>
                <div className=" p-3 rounded-md border border-zinc-100 ">
                  {button.icon}
                </div>
                <div>
                  <h1 className=" text-lg font-semibold">{button.title}</h1>
                  <p className=" text-sm font-semibold text-wrap">{button.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" px-5 mt-5">
            <Button className="w-full text-lg font-bold" size="lg" >Download Resume</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftComponent;
