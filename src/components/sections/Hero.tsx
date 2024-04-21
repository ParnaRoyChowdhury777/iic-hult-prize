import React from "react";
import Header from "../header";
import { Spotlight } from "../ui/Spotlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-full w-full bg-gray-950 min-h-svh flex flex-col items-center text-center">
      <Header />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <Spotlight fill="#DB2777" className="top-0 ml-12 pl-12" />

      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-transparent text-white flex items-center space-x-2 border-none outline-none"
      >
        InnovateUps 📈
      </HoverBorderGradient>
      <h2 className="text-slate-200 mt-16 text-6xl font-bold z-50 flex gap-4 tracking-wider">
        <span className="py-2">HULT</span>
        <Image
          src="/images/hult_logo.png"
          width={80}
          height={100}
          alt="hult_logo"
        />
        <span className="py-2">PRIZE</span>
      </h2>
      <div className="w-[40rem] relative mt-7">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-px w-1/4" />
      </div>
      <h1 className="text-pink-600 text-3xl uppercase mt-7">
        Organized by
        <div className="flex gap-10 mt-12">
          <Image
            src="/images/iic_logo.jpg"
            alt="iic_logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
          <Image
            src="/images/techno_logo.png"
            alt="techno_logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>
      </h1>
    </section>
  );
};

export default Hero;
