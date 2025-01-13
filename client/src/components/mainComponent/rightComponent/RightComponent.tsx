import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About from "./About";

const RightComponent = () => {
  return (
    <div className="h-full overflow-y-auto p-3 bg-[#313131] rounded-3xl relative">
      <Tabs defaultValue="about">
        <TabsList className=" absolute right-0 top-0 px-2 sm:px-10 py-7 w-full sm:w-fit bg-[#e3ca90] rounded-none rounded-bl-3xl">
          <TabsTrigger value="about" className=" text-base font-semibold text-black">
            About
          </TabsTrigger>
          <TabsTrigger value="resume" className=" text-base font-semibold text-black">
            Resume
          </TabsTrigger>
          <TabsTrigger value="portfolio" className=" text-base font-semibold text-black">
            Portfolio
          </TabsTrigger>
          <TabsTrigger value="contact" className=" text-base font-semibold text-black">
            Contact
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about">
        <About/>
        </TabsContent>
        <TabsContent value="resume">Change your password here.</TabsContent>
        <TabsContent value="portfolio">Change your password here.</TabsContent>
        <TabsContent value="contact">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default RightComponent;
