"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import header from "../header";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { useTheme } from "next-themes";
import { Spotlight } from "../ui/Spotlight";

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
          width={600}
          height={600}
          className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Step 2: SUMMITS",
    description:
      "Within the electric atmosphere of these summits, hundreds of teams converge, each armed with a vision to revolutionize the status quo. They passionately articulate their social venture ideas before esteemed panels of experts, weaving narratives of innovation and impact. Yet, amid the intensity of competition, only a select few will emerge victorious, their ideas resonating with judges and peers alike.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/summit.jpg"
          alt="summit"
          width={600}
          height={600}
          className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Step 3: GLOBAL ACCELERATOR",
    description:
      "As the summer unfolds, anticipation mounts as these aspiring changemakers converge in the vibrant city of London, UK, for our prestigious Global Accelerator. Over the course of two transformative weeks, they immerse themselves in a world of learning and collaboration, rubbing shoulders with world-class experts and coaches who fuel their entrepreneurial spirit.",
    content: (
      <div className="h-full w-full bg-transparent flex items-center justify-center text-white">
        <Image
          src="/images/ga.jpg"
          alt="ga"
          width={600}
          height={600}
          className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Step 4: GLOBAL FINALS",
    description:
      "Experience the pinnacle of innovation and impact at the Hult Prize Global Finals, where six visionary teams take center stage to pitch their transformative social ventures to a panel of esteemed judges. With the coveted US $1,000,000 Hult Prize on the line, the stakes couldn't be higher.",
    content: (
      <div className="h-full w-full bg-transparent flex items-center justify-center text-white">
        <Image
          src="/images/finals.jpg"
          alt="finals"
          width={600}
          height={600}
          className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
        />
      </div>
    ),
  },
];

const About = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section className="bg-gray-50 dark:bg-slate-950 min-h-svh overflow-hidden">
      {header()}
      {isMounted && theme === "dark" && (
        <Spotlight fill="#DB2777" className="top-0" />
      )}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-4xl md:text-6xl mt-10 font-extrabold text-center text-pink-600">
          About Us
        </h2>
        <p className="text-zinc-500 mt-16 text-xl px-10">
          Embark on a transformative journey of global impact with our year-long
          competition, empowering young minds to tackle humanity&lsquo;s
          greatest challenges head-on through ingenious social ventures. Explore
          the intricate stages of the competition below, each designed to hone
          skills, foster creativity, and drive real-world change.
        </p>
        <Image
          src="/images/iic_hult.jpeg"
          alt="iic_hult"
          width={800}
          height={800}
          className="my-20 mx-auto border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
        />
        <StickyScroll content={content} />
      </div>
    </section>
  );
};

export default About;
