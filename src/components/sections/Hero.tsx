"use client";
import React from "react";
import Header from "../header";
import { Spotlight } from "../ui/Spotlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";
import { HeroHighlight } from "../ui/hero-highlight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full bg-slate-100 dark:bg-gray-950 min-h-svh flex flex-col items-center text-center justify-center">
      <Header />
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          <Spotlight fill="#DB2777" className="top-0 ml-12 pl-12" />
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-transparent text-white flex justify-center m-auto items-center space-x-2 border-none outline-none"
          >
            InnovateUps 📈
          </HoverBorderGradient>
          <div className="text-slate-200 mt-20 text-4xl md:text-8xl font-bold z-50 flex flex-col md:flex-row items-center justify-center md:gap-4 tracking-wider">
            <span className="py-2 tracking-wider animated-h2">HULT</span>
            <Image
              src="/images/hult_logo.png"
              width={100}
              height={100}
              alt="hult_logo"
            />
            <span className="py-2 tracking-wider animated-h2">PRIZE</span>
          </div>

          <div className="w-[40rem] relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent h-px w-1/4" />
          </div>
          <div className="text-zinc-400 text-3xl uppercase mt-36 font-bold">
            Organized by
            <div className="flex justify-center gap-10 mt-12">
              <a href="https://www.iictmsl.com/" target="_blank">
                <Image
                  src="/images/iic_logo.jpg"
                  alt="iic_logo"
                  width={100}
                  height={100}
                  style={{ cursor: "pointer !important" }}
                />
              </a>
              <a href="https://www.ticollege.ac.in/" target="_blank">
                <Image
                  src="/images/techno_logo.png"
                  alt="techno_logo"
                  width={100}
                  height={100}
                  className="cursor-pointer"
                />
              </a>
            </div>
          </div>
        </motion.h1>
      </HeroHighlight>
    </section>
  );
};

export default Hero;
