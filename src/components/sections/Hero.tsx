"use client";
import React, { useState, useEffect } from "react";

import Header from "../header";
import { Spotlight } from "../ui/Spotlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Image from "next/image";
import "@/app/globals.css";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section className="relative w-full min-h-svh flex flex-col items-center text-center justify-center">
      <Header />
      {isMounted && theme === "dark" && (
        <Spotlight fill="#DB2777" className="top-0" />
      )}
      <div className="pt-24">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-transparent text-zinc-800 dark:text-white font-extrabold flex justify-center m-auto items-center space-x-2 border-none outline-none"
        >
          InnovateUps 📈
        </HoverBorderGradient>
      </div>
      <div className="text-zinc-600 dark:text-slate-200 mt-20 text-4xl md:text-8xl z-50 flex flex-col md:flex-row items-center justify-center md:gap-4 tracking-wider font-bold">
        <span className="py-2 tracking-wider animated dark:animated-h2 text-slate-800 dark:text-slate-200">
          HULT
        </span>
        <Image
          src="/images/hult_logo.png"
          width={100}
          height={100}
          alt="hult_logo"
        />
        <span className="py-2 tracking-wider animated dark:animated-h2 text-slate-800 dark:text-slate-200">
          PRIZE
        </span>
      </div>

      <div className="w-[40rem] relative pb-10">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-px w-1/4" />
      </div>

      <div className="flex justify-center gap-16 pt-20">
        <a href="#about">
          <Button className="text-md bg-pink-600 text-white font-extrabold dark:hover:bg-slate-950 hover:border dark:hover:border-pink-600 hover:transition-all hover:bg-pink-900">
            Know More
          </Button>
        </a>
        <a>
          <Button className="text-md bg-pink-600 text-white font-extrabold dark:hover:bg-slate-950 hover:border dark:hover:border-pink-600 hover:transition-all hover:bg-pink-900">
            Explore
          </Button>
        </a>
      </div>
      <div className="text-zinc-700 dark:text-zinc-400 text-3xl mt-12 font-bold">
        Organized by
        <div className="flex justify-center gap-10 mt-12">
          <a href="https://www.iictmsl.com/" target="_blank">
            <Image
              src="/images/iic_logo.jpg"
              alt="iic_logo"
              width={50}
              height={50}
              className="rounded-lg cursor-pointer"
            />
          </a>
          <a href="https://www.ticollege.ac.in/" target="_blank">
            <Image
              src="/images/techno_logo.png"
              alt="techno_logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
