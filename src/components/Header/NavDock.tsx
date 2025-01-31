import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import { FaHome } from "react-icons/fa";
import { FaFolderClosed } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { HiDocument } from "react-icons/hi2";

const NavDock = () => {
  const links = [
    {
      title: "Home",
      icon: <FaHome size={35}/>,
      href: "/",
    },

    {
      title: "Projects",
      icon: <FaFolderClosed size={35}/>,
      href: "/Projects",
    },
    {
      title: "Experience",
      icon: <BsFillBriefcaseFill size={35} />,
      href: "/Experience",
    },
    {
      title: "Skills",
      icon: <FaCode size={35} />,
      href: "/skills",
    },
    {
      title: "Thoughts",  
      icon: <HiDocument size={35} />,
      href: "#",
    },
  ];
  return (
    <div className=" flex justify-center items-center">
      <FloatingDock items={links} />
    </div>
  );
};

export default NavDock;
