"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import NavDock from "@/components/Header/NavDock";
import ProfileCard from "@/components/Profile/ProfileCard";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="dark w-full h-screen">
      {/* Background sparkles */}
      <div className="fixed top-0 left-0 w-full h-full">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        {/* Main container */}
          <div className="py-10">
            <NavDock />
          </div>
        <div className="contain">

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-7 h-[calc(100vh-4rem)]">
            {/* Profile Card */}
            <div className="mx-auto">
              <ProfileCard />
            </div>

            {/* Scrollable content */}
            <div className=" h-full max-w-4xl ">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
