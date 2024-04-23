"use client";
import React from "react";
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
        <div className="px-10">
          <span className="text-2xl text-zinc-200 font-extrabold">
            Step 1: QUALIFIERS
          </span>
          <div className="flex justify-between gap-40 mt-10">
            <p className="text-justify">
              The inaugural stage of the Hult Prize competition unfolds through
              a dynamic synergy of the OnCampus Program and the Open
              Application, acting as the gateway to global impact. Within the
              OnCampus Program, dedicated student volunteers, dubbed Campus
              Directors, spearhead training initiatives and community
              engagements tailored to the annual Challenge, igniting innovation
              across university campuses.
            </p>
            <Image
              src="/images/qualifiers.jpg"
              alt="qualifiers"
              width={400}
              height={400}
              className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
            />
          </div>
        </div>
        <div className="px-10 mt-16">
          <span className="text-2xl text-zinc-200 font-extrabold">
            Step 2: SUMMITS
          </span>
          <div className="flex justify-between gap-40 mt-10">
            <Image
              src="/images/summit.jpg"
              alt="summit"
              width={400}
              height={400}
              className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
            />
            <p className="text-justify">
              Within the electric atmosphere of these summits, hundreds of teams
              converge, each armed with a vision to revolutionize the status
              quo. They passionately articulate their social venture ideas
              before esteemed panels of experts, weaving narratives of
              innovation and impact. Yet, amid the intensity of competition,
              only a select few will emerge victorious, their ideas resonating
              with judges and peers alike.
            </p>
          </div>
        </div>
        <div className="px-10 mt-16">
          <span className="text-2xl text-zinc-200 font-extrabold">
            Step 3: GLOBAL ACCELERATOR
          </span>
          <div className="flex justify-between gap-40 mt-10">
            <p className="text-justify">
              As the summer unfolds, anticipation mounts as these aspiring
              changemakers converge in the vibrant city of London, UK, for our
              prestigious Global Accelerator. Over the course of two
              transformative weeks, they immerse themselves in a world of
              learning and collaboration, rubbing shoulders with world-class
              experts and coaches who fuel their entrepreneurial spirit.
            </p>
            <Image
              src="/images/ga.jpg"
              alt="ga"
              width={400}
              height={400}
              className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
            />
          </div>
        </div>
        <div className="px-10 mt-16">
          <span className="text-2xl text-zinc-200 font-extrabold">
            Step 4: GLOBAL FINALS
          </span>
          <div className="flex justify-between gap-40 mt-10">
            <Image
              src="/images/finals.jpg"
              alt="finals"
              width={400}
              height={400}
              className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
            />
            <p className="text-justify">
              Experience the pinnacle of innovation and impact at the Hult Prize
              Global Finals, where six visionary teams take center stage to
              pitch their transformative social ventures to a panel of esteemed
              judges. With the coveted US $1,000,000 Hult Prize on the line, the
              stakes couldn't be higher.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
