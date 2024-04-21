import React from "react";
import Header from "../header";
import { Spotlight } from "../ui/Spotlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Hero = () => {
  return (
    <section className="relative h-full w-full bg-gray-950 min-h-svh flex flex-col items-center text-center">
      <Header />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <Spotlight fill="#DB2777" className="top-0 ml-12 pl-12" />

      <HoverBorderGradient>
        <span>HULT PRIZE</span>
      </HoverBorderGradient>
      <h2 className="text-pink-600 mt-16 text-6xl font-bold z-50">
        HULT PRIZE
      </h2>
      <h1 className="text-white mt-9">
        Organized by IIC <br></br>Techno main Salt Lake
      </h1>
    </section>
  );
};

export default Hero;
