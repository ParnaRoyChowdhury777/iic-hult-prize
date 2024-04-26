"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "../../../public/images/2024theme.jpg";
import Showcard from "../ui/showcard";
import phightersImage from "../../../public/images/phighters.jpeg";
import secretchefImage from "../../../public/images/secret chef.jpg";
import bookbridgeImage from "../../../public/images/book bridge.png";
import toureaseImage from "../../../public/images/tour ease.jpg";
import futurebearersImage from "../../../public/images/future bearers.jpg";
import tooltip from "../../../public/images/tooltip.png";
import { useTheme } from "next-themes";

const Show2024 = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const cardsData = [
    {
      team: "pHighters",
      tagline: " where innovation meets environmental sustainability.",
      domain: "Eco friendly",
      imageSrc: phightersImage,
      idea: "https://phighters.netlify.app/",
      people1: {
        id: 1,
        name: "Swikriti Mukherjee",
        designation: "Student",
        image: tooltip,
      },
      people2: {
        id: 2,
        name: "Prayas Pal",
        designation: "Student",
        image: tooltip,
      },
      people3: {
        id: 3,
        name: "Kaniska Mitra",
        designation: "Student",
        image: tooltip,
      },
      people4: {
        id: 4,
        name: "Sabittwa Banerjee",
        designation: "Student",
        image: tooltip,
      },
      people5: {
        id: 5,
        name: "NA",
        designation: "NA",
        image: tooltip,
      },
    },
    {
      team: "The Secret Chef",
      tagline:
        "Savour The Secret, Embrace The Flavour Your Culinary Journey Begins Here",
      domain: "Social,Women Empowerment ",
      imageSrc: secretchefImage,
      idea: "https://www.instagram.com/__.thesecretchef__?igsh=dW5qaDUxNWo4NXY1",
      people1: {
        id: 1,
        name: "Diganta Dey",
        designation: "Student",
        image: tooltip,
      },
      people2: {
        id: 2,
        name: "Anshita Bhattacharyya",
        designation: "Student",
        image: tooltip,
      },
      people3: {
        id: 3,
        name: "Aditya Narayan",
        designation: "Student",
        image: tooltip,
      },
      people4: {
        id: 4,
        name: " Avishikta SenGupta",
        designation: "Student",
        image: tooltip,
      },
      people5: {
        id: 5,
        name: " Sumit Majumder",
        designation: "Student",
        image: tooltip,
      },
    },
    {
      team: "Book Bridge",
      tagline: "Affordability and Sustainability in Education sector",
      domain: "Social",
      imageSrc: bookbridgeImage,
      idea: "",
      people1: {
        id: 1,
        name: "Shreya Kutariyar",
        designation: "Student",
        image: tooltip,
      },
      people2: {
        id: 2,
        name: "Snehal Mishra",
        designation: "Student",
        image: tooltip,
      },
      people3: {
        id: 3,
        name: "Eshita Bhattacharjya ",
        designation: "Student",
        image: tooltip,
      },
      people4: {
        id: 4,
        name: "NA",
        designation: "NA",
        image: tooltip,
      },
      people5: {
        id: 5,
        name: "NA",
        designation: "NA",
        image: tooltip,
      },
    },
    {
      team: "TourEase",
      tagline: "Complete Tour Guide on a single Tap",
      domain: "Travel",
      imageSrc: toureaseImage,
      idea: "",
      people1: {
        id: 1,
        name: "Purbasha Kolley",
        designation: "Student",
        image: tooltip,
      },
      people2: {
        id: 2,
        name: "Soumyadip Kansari",
        designation: "Student",
        image: tooltip,
      },
      people3: {
        id: 3,
        name: "Akash Sardar",
        designation: "Student",
        image: tooltip,
      },
      people4: {
        id: 4,
        name: " Moynak Paul",
        designation: "Student",
        image: tooltip,
      },
      people5: {
        id: 5,
        name: "NA",
        designation: "NA",
        image: tooltip,
      },
    },
    {
      team: "The Future Bearers",
      tagline: "Our bags, Your planet, One seaweed solution!",
      domain: "Eco-friendly",
      imageSrc: futurebearersImage,
      idea: "",
      people1: {
        id: 1,
        name: "Arya Jha",
        designation: "Student",
        image: tooltip,
      },
      people2: {
        id: 2,
        name: "Bhoomika Dasgupta",
        designation: "Student",
        image: tooltip,
      },
      people3: {
        id: 3,
        name: " Abhraneel Dhar",
        designation: "Student",
        image: tooltip,
      },
      people4: {
        id: 4,
        name: "Tridip Debnath",
        designation: "Student",
        image: tooltip,
      },
      people5: {
        id: 5,
        name: "NA",
        designation: "NA",
        image: tooltip,
      },
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="shadow-xl">
          <div className="flex flex-col items-center bg-gray-200 border border-gray-300 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-105 hover:animate-colorChange dark:hover:animate-none cursor-pointer hover:border-2 hover:border-pink-400">
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg m-5"
              src={img1}
              alt="Hult Prize 2024"
              width={120}
              height={120}
            />
            <div className="flex flex-col justify-between p-4 leading-normal cursor-pointer ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-600 dark:text-pink-400 text-center">
                2024 HULT PRIZE CHALLENGE
              </h5>
              <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white text-center">
                THEME : UNLIMITED
              </h4>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                This year, you can pitch any idea you have for a social
                enterprise, as long as it is world-changing and aligned with at
                least one of the United Nations Sustainable Development Goals
                (SDGs).
              </p>
              <div className="text-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.hultprize.org/2024-challenge-unlimited/",
                      "_blank"
                    )
                  }
                  className="inline-flex items-center font-medium text-pink-600 hover:text-pink-800 dark:text-pink-500 dark:hover:text-pink-700"
                >
                  Learn more
                  <svg
                    className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  {/* </a> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {cardsData.map((cardData, index) => (
          <Showcard
            key={index} // Use the index as a key, or better yet, a unique identifier
            team={cardData.team}
            tagline={cardData.tagline}
            domain={cardData.domain}
            imageSrc={cardData.imageSrc as unknown as string} // Convert imageSrc to string
            idea={cardData.idea}
            people1={[cardData.people1]}
            people2={[cardData.people2]}
            people3={[cardData.people3]}
            people4={[cardData.people4]}
            people5={[cardData.people5]}
          />
        ))}
      </div>
    </>
  );
};

export default Show2024;
