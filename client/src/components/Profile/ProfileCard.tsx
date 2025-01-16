import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
export type IconProps = React.HTMLAttributes<SVGElement>;
const ProfileCard = () => {
  return (
    <Card className=" flex flex-col  w-80 sticky top-10">
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
        <CardTitle className=" text-center capitalize text-4xl font-semibold">
          ravi jaiswal
        </CardTitle>
        <CardDescription className=" text-center">
          Card Description
        </CardDescription>
      </CardHeader>
      <CardContent>{/* <p>Card Content</p> */}</CardContent>
      <CardFooter className=" ">
        {/* <div className="relative"> */}
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
        {/* </div> */}
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
