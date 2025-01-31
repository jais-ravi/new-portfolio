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
import { LuMail } from "react-icons/lu";
import { Dock, DockIcon } from "../ui/dock";
import ShineBorder from "../ui/shine-border";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FollowerPointerCard } from "../ui/following-pointer";

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

  const TitleComponent = ({
    title,
    avatar,
  }: {
    title: string;
    avatar: string;
  }) => (
    <div className="flex space-x-2 items-center bg-gray-50/[.15] border border-zinc-500 p-1 rounded-2xl">
      <Image
        src={avatar}
        height={25}
        width={25}
        alt="thumbnail"
        className="rounded-full border-2 border-white"
      />
      <p>{title}</p>
    </div>
  );

  return (
    <div className="sticky top-10">
      <ShineBorder
        className="p-[1px]"
        color={theme.theme === "dark" ? "black" : "white"}
      >
        <FollowerPointerCard
          title={
            <TitleComponent title="Ravi Jaiswal" avatar="/profilePic.svg" />
          }
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
              An aspiring software engineer learns, builds, innovates, and
              creates impactful solutions.
            </CardContent>
            <CardFooter>
              <Dock iconMagnification={60} iconDistance={100}>
                {icons.map((iconData, index) => {
                  const IconComponent = iconData.icon;
                  return (
                    <DockIcon
                      className="bg-black/10 dark:bg-white/10 cursor-none"
                      key={index}
                    >
                      <Link
                        href={iconData.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        
                      >
                        <IconComponent size={30} className="cursor-none" />
                      </Link>
                    </DockIcon>
                  );
                })}
              </Dock>
            </CardFooter>
          </Card>
        </FollowerPointerCard>
      </ShineBorder>
    </div>
  );
};

export default ProfileCard;
