import LeftComponent from "@/components/mainComponent/leftComponent/LeftComponent";
import RightComponent from "@/components/mainComponent/rightComponent/RightComponent";
import { SparklesCore } from "@/components/ui/sparkles";

import React from "react";

const page = () => {
  return (
    <div className="  relative  bg-[#020408]">
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="p-3 md:p-10 h-full md:h-screen flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center">
        <div className="w-full md:w-[28rem] h-full overflow-y-auto z-50 flex justify-center ">
          <LeftComponent />
        </div>
        <div className="w-full h-full max-w-[100rem] overflow-y-auto z-50">
          <RightComponent />
        </div>
      </div>
    </div>
  );
};

export default page;


