import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import { FaHome } from "react-icons/fa";

const NavDock = () => {
  const links = [
    {
      title: "Home",
      icon: <FaHome />,
      href: "#",
    },

    {
      title: "Products",
      icon: <FaHome />,
      href: "#",
    },
    {
      title: "Components",
      icon: <FaHome />,
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: <FaHome />,
      href: "#",
    },
    {
      title: "Changelog",
      icon: <FaHome />,
      href: "#",
    },
  ];
  return (
    <div className=" flex justify-center items-center">
      <FloatingDock
        items={links}
      />
    </div>
  );
};

export default NavDock;
