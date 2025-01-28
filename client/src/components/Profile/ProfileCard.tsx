"use client"
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
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { Dock, DockIcon } from "../ui/dock";
import ShineBorder from "../ui/shine-border";
export type IconProps = React.HTMLAttributes<SVGElement>;
import { useTheme } from "next-themes";

const ProfileCard = () => {
  const theme = useTheme();
  return (
    <div className="sticky top-10">
      <ShineBorder
        className=" p-[1px] "
        color={theme.theme === "dark" ? "black" : "white"}
      >
        <Card className=" max-w-80 flex flex-col justify-center items-center ">
          <CardHeader>
            <div>
              <Image
                alt="ravi"
                src="profilePic.svg"
                width={100}
                height={100}
                className=" w-64 h-64 rounded-md"
              />
            </div>
            <CardTitle className=" text-center capitalize text-5xl font-semibold cursive-font ">
              ravi jaiswal
            </CardTitle>
          </CardHeader>
          <CardContent className=" text-center font-semibold">
            An aspiring software engineer learns, builds, innovates, and creates
            impactful solutions.
          </CardContent>
          <CardFooter>
            <Dock iconMagnification={60} iconDistance={100}>
              <DockIcon className="bg-black/10 dark:bg-white/10 ">
                <IoLogoGithub className="size-full" />
              </DockIcon>
              <DockIcon className="bg-black/10 dark:bg-white/10">
                <FaLinkedin className="size-full" />
              </DockIcon>
              <DockIcon className="bg-black/10 dark:bg-white/10">
                <FaInstagram className="size-full" />
              </DockIcon>
              <DockIcon className="bg-black/10 dark:bg-white/10">
                <FaFacebook className="size-full" />
              </DockIcon>
            </Dock>
          </CardFooter>
        </Card>
      </ShineBorder>
    </div>
  );
};

export default ProfileCard;
