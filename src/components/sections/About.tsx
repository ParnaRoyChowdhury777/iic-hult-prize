"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

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
          width={800}
          height={800}
          className="my-20 mx-auto border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
        />
        <div className="p-10 flex gap-10">
          <div className="flex flex-col">
            <Image
              src="/images/qualifiers.jpg"
              alt="qualifiers"
              width={300}
              height={300}
              className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
            />
            <h1 className="text-2xl mt-12 font-bold text-pink-600 dark:text-pink-600">
              Step 1: QUALIFIERS
            </h1>
            <p className="text-zinc-500 mt-4">
              The inaugural stage of the Hult Prize competition unfolds through
              a dynamic synergy of the OnCampus Program and the Open
              Application, acting as the gateway to global impact. Within the
              OnCampus Program, dedicated student volunteers, dubbed Campus
              Directors, spearhead training initiatives and community
              engagements tailored to the annual Challenge, igniting innovation
              across university campuses.
            </p>
          </div>
          <div className="flex flex-col">
            <Image
              src="/images/qualifiers.jpg"
              alt="qualifiers"
              width={300}
              height={300}
              className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
            />
            <h1 className="text-2xl mt-12 font-bold text-pink-600 dark:text-pink-600">
              Step 2: SUMMIT
            </h1>
            <p className="text-zinc-500 mt-4">
              The inaugural stage of the Hult Prize competition unfolds through
              a dynamic synergy of the OnCampus Program and the Open
              Application, acting as the gateway to global impact. Within the
              OnCampus Program, dedicated student volunteers, dubbed Campus
              Directors, spearhead training initiatives and community
              engagements tailored to the annual Challenge, igniting innovation
              across university campuses.
            </p>
          </div>
          <div className="flex flex-col">
            <Image
              src="/images/qualifiers.jpg"
              alt="qualifiers"
              width={300}
              height={300}
              className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
            />
            <h1 className="text-2xl mt-12 font-bold text-pink-600 dark:text-pink-600">
              Step 3: ACCELERATOR
            </h1>
            <p className="text-zinc-500 mt-4">
              The inaugural stage of the Hult Prize competition unfolds through
              a dynamic synergy of the OnCampus Program and the Open
              Application, acting as the gateway to global impact. Within the
              OnCampus Program, dedicated student volunteers, dubbed Campus
              Directors, spearhead training initiatives and community
              engagements tailored to the annual Challenge, igniting innovation
              across university campuses.
            </p>
          </div>
          <div className="flex flex-col">
            <Image
              src="/images/qualifiers.jpg"
              alt="qualifiers"
              width={300}
              height={300}
              className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
            />
            <h1 className="text-2xl mt-12 font-bold text-pink-600 dark:text-pink-600">
              Step 4: GLOBAL FINALS
            </h1>
            <p className="text-zinc-500 mt-4">
              The inaugural stage of the Hult Prize competition unfolds through
              a dynamic synergy of the OnCampus Program and the Open
              Application, acting as the gateway to global impact. Within the
              OnCampus Program, dedicated student volunteers, dubbed Campus
              Directors, spearhead training initiatives and community
              engagements tailored to the annual Challenge, igniting innovation
              across university campuses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
