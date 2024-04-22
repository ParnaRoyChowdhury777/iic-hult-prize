import React from "react";
import Image from "next/image";
import img1 from "../../images/2024theme.jpg";
import Showcard from "../ui/showcard";
import phightersImage from "../../images/phighters.jpeg";
import secretchefImage from "../../images/secret chef.jpg";
import bookbridgeImage from "../../images/book bridge.png";
import toureaseImage from "../../images/tour ease.jpg";
import futurebearersImage from "../../images/future bearers.jpg";

const Show2024 = () => {
  const cardsData = [
    {
      team: "pHighters",
      tagline: " where innovation meets environmental sustainability.",
      domain: "Eco friendly",
      imageSrc: phightersImage,
      idea: "https://phighters.netlify.app/",
    },
    {
      team: "The Secret Chef",
      tagline:
        "Savour The Secret, Embrace The Flavour Your Culinary Journey Begins Here",
      domain: "Social,Women Empowerment ",
      imageSrc: secretchefImage,
      idea: "https://www.instagram.com/__.thesecretchef__?igsh=dW5qaDUxNWo4NXY1",
    },
    {
      team: "Book Bridge",
      tagline: "Affordability and Sustainability in Education sector",
      domain: "Social",
      imageSrc: bookbridgeImage,
      idea: "",
    },
    {
      team: "TourEase",
      tagline: "Complete Tour Guide on a single Tap",
      domain: "Travel",
      imageSrc: toureaseImage,
      idea: "",
    },
    {
      team: "The Future Bearers",
      tagline: "Our bags, Your planet, One seaweed solution!",
      domain: "Eco-friendly",
      imageSrc: futurebearersImage,
      idea: "",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="shadow-xl">
          <a
            href="#"
            className="flex flex-col items-center bg-gray-100 border border-gray-300 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg m-5"
              src={img1}
              alt="Hult Prize 2024"
              width={120}
              height={120}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-600 dark:text-white text-center">
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
                <a
                  href="https://www.hultprize.org/2024-challenge-unlimited/"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
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
          />
        ))}
      </div>
    </>
  );
};

export default Show2024;



      {
        /* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span> */
      }