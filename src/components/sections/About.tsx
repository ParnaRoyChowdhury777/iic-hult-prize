
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
          width={900}
          height={900}
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
              across university campuses.<br></br>
              <br></br> Qualifying victors from these OnCampus endeavors earn
              the prestigious opportunity to represent their alma maters at our
              distinguished Summits. Alternatively, teams can navigate directly
              through our Open Application pathway.<br></br>
              <br></br> Out of an ambitious pool exceeding 10,000 teams, a
              discerning few—less than 400—will emerge triumphant, poised to
              advance to the subsequent phase of the competition.
            </p>
            <Image
              src="/images/qualifiers.jpg"
              alt="qualifiers"
              width={500}
              height={500}
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
              width={500}
              height={500}
              className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
            />
            <p className="text-justify">
              Across seven cosmopolitan hubs worldwide, the Hult Prize
              orchestrates captivating in-person Global Summits, drawing
              together myriad teams poised to pitch their visionary social
              ventures to esteemed panels of experts.<br></br>
              <br></br> Within the electric atmosphere of these summits,
              hundreds of teams converge, each armed with a vision to
              revolutionize the status quo. They passionately articulate their
              social venture ideas before esteemed panels of experts, weaving
              narratives of innovation and impact. Yet, amid the intensity of
              competition, only a select few will emerge victorious, their ideas
              resonating with judges and peers alike.<br></br>
              <br></br> For these triumphant teams, the journey is far from
              over. Securing their place among the elite, they join forces with
              fellow change-makers at the Global Accelerator. Here, they receive
              unparalleled support, mentorship, and resources, propelling their
              ventures towards scalable, sustainable solutions with the
              potential to transform communities worldwide.
            </p>
          </div>
        </div>
        <div className="px-10 mt-16">
          <span className="text-2xl text-zinc-200 font-extrabold">
            Step 3: GLOBAL ACCELERATOR
          </span>
          <div className="flex justify-between gap-40 mt-10">
            <p className="text-justify">
              The spotlight shines on our 12 semi-finalist teams as they embark
              on a journey of refinement and growth. Guided by Hult Prize
              mentors and cutting-edge curricula, they fine-tune their pitches
              and elevate their business acumen to new heights.<br></br>
              <br></br> As the summer unfolds, anticipation mounts as these
              aspiring changemakers converge in the vibrant city of London, UK,
              for our prestigious Global Accelerator. Over the course of two
              transformative weeks, they immerse themselves in a world of
              learning and collaboration, rubbing shoulders with world-class
              experts and coaches who fuel their entrepreneurial spirit.
              <br></br>
              <br></br> With each passing day, these teams hone their
              strategies, refine their models, and forge invaluable connections.
              And as the Accelerator draws to a close, the stage is set for a
              thrilling climax: the selection of six standout teams destined to
              vie for glory in our esteemed Global Finals.
            </p>
            <Image
              src="/images/ga.jpg"
              alt="ga"
              width={500}
              height={500}
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
              width={500}
              height={500}
              className="border-2 shadow-md shadow-pink-500 border-pink-600 dark:border-pink-600 rounded-lg"
            />
            <p className="text-justify">
              Experience the pinnacle of innovation and impact at the Hult Prize
              Global Finals, where six visionary teams take center stage to
              pitch their transformative social ventures to a panel of esteemed
              judges. With the coveted US $1,000,000 Hult Prize on the line, the
              stakes couldn&apos;t be higher.<br></br>
              <br></br> Don&apos;t miss the electrifying action! Tune in to
              watch the Hult Prize Global Finals 2023, broadcasting live from
              the iconic L&apos; Montmartre in the heart of Paris, France.
              Click the link below to witness history in the making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
