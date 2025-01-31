"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Dock, DockIcon } from "../ui/dock";
import ShineBorder from "../ui/shine-border";
import { useTheme } from "next-themes";
import Link from "next/link";
import { LuMail } from "react-icons/lu";
const ProfileCard = () => {
  const theme = useTheme();
  const icons = [
    {
      icon: LuMail,
      href: "mailto:ravijaiswal258852@gmail.com", 
    },
    {
      icon: IoLogoGithub,
      href: "https://github.com/jais-ravi", 
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ravi-jaiswal-445223271/", 
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/jais_ravi_/", 
    },
    
  ];

  return (
    <div className="sticky top-10">
      <ShineBorder
        className="p-[1px]"
        color={theme.theme === "dark" ? "black" : "white"}
      >
        <Card className="max-w-80 flex flex-col justify-center items-center">
          <CardHeader>
            <div>
              <Image
                alt="ravi"
                src="/profilePic.svg"
                width={100}
                height={100}
                className="w-64 h-64 rounded-md"
              />
            </div>
            <CardTitle className="text-center capitalize text-5xl font-semibold cursive-font">
              Ravi Jaiswal
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center font-semibold">
            An aspiring software engineer learns, builds, innovates, and creates
            impactful solutions.
          </CardContent>
          <CardFooter>
            <Dock iconMagnification={60} iconDistance={100}>
              {icons.map((iconData, index) => (
                <DockIcon className="bg-black/10 dark:bg-white/10" key={index}>
                  <Link
                    href={iconData.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {<iconData.icon  size={30} />}
                  </Link>
                </DockIcon>
              ))}
            </Dock>
          </CardFooter>
        </Card>
      </ShineBorder>
    </div>
  );
};

export default ProfileCard;
