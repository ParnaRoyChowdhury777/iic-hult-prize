"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Step 1: QUALIFIERS",
    description:
      "The inaugural stage of the Hult Prize competition unfolds through a dynamic synergy of the OnCampus Program and the Open Application, acting as the gateway to global impact. Within the OnCampus Program, dedicated student volunteers, dubbed Campus Directors, spearhead training initiatives and community engagements tailored to the annual Challenge, igniting innovation across university campuses.",
    content: (
      <div className="h-full w-full bg-transparent flex items-center justify-center text-white">
        <Image
          src="/images/qualifiers.jpg"
          alt="qualifiers"
          width={500}
          height={500}
          className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Step 2: SUMMITS",
    description:
      "Across seven cosmopolitan hubs worldwide, the Hult Prize orchestrates captivating in-person Global Summits, drawing together myriad teams poised to pitch their visionary social ventures to esteemed panels of experts.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/summit.jpg"
          alt="summit"
          width={500}
          height={500}
          className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Step 3: GLOBAL ACCELERATOR",
    description:
      "The spotlight shines on our 12 semi-finalist teams as they embark on a journey of refinement and growth. Guided by Hult Prize mentors and cutting-edge curricula, they fine-tune their pitches and elevate their business acumen to new heights.",
    content: (
      <div className="h-full w-full bg-transparent flex items-center justify-center text-white">
        <Image
          src="/images/ga.jpg"
          alt="ga"
          width={500}
          height={500}
          className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Step 4: GLOBAL FINALS",
    description:
      "Experience the pinnacle of innovation and impact at the Hult Prize Global Finals, where six visionary teams take center stage to pitch their transformative social ventures to a panel of esteemed judges. With the coveted US $1,000,000 Hult Prize on the line, the stakes couldn&apos;t be higher.",
    content: (
      <div className="h-full w-full bg-transparent flex items-center justify-center text-white">
        <Image
          src="/images/finals.jpg"
          alt="finals"
          width={500}
          height={500}
          className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
        />
      </div>
    ),
  },
];

const About = () => {
  return (
    <section className="bg-gray-200 dark:bg-zinc-900 min-h-svh" id="about">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-6xl font-extrabold text-center text-pink-600 dark:text-pink-600">
          About Us
        </h2>
        <p className="text-zinc-500 mt-20 text-xl px-10">
          Embark on a transformative journey of global impact with our year-long
          competition, empowering young minds to tackle humanity&lsquo;s
          greatest challenges head-on through ingenious social ventures. Explore
          the intricate stages of the competition below, each designed to hone
          skills, foster creativity, and drive real-world change.
        </p>
        <Image
          src="/images/iic_hult.jpeg"
          alt="iic_hult"
          width={900}
          height={900}
          className="my-20 mx-auto border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
        />
        <div className="p-10">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
};

export default About;
