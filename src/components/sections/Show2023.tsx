import React from "react";
import Image from "next/image";
import img1 from "../../../public/images/2023theme.png";
import Showcard from "../ui/showcard";
import dummy from "../../../public/images/dummy.png";
import tooltip from "../../../public/images/tooltip.png";

const Show2023 = () => {
  const cardsData = [
    {
      team: "Team 1",
      tagline: "Tagline 1",
      domain: "Domain 1",
      imageSrc: dummy,
      idea: "",
      people1: {
        id: 1,
        name: "Person 1",
        designation: "Student",
        image: tooltip,
      },
      people2: {
        id: 2,
        name: "Person 2",
        designation: "Student",
        image: tooltip,
      },
      people3: {
        id: 3,
        name: "Person 3",
        designation: "Student",
        image: tooltip,
      },
      people4: {
        id: 4,
        name: "Person 4",
        designation: "Student",
        image: tooltip,
      },
      people5: {
        id: 5,
        name: "Person 5",
        designation: "Student",
        image: tooltip,
      },
    },
    {
      team: "Team 2",
      tagline: "Tagline 2",
      domain: "Domain 2",
      imageSrc: dummy,
      idea: "",
      people1: {
        id: 1,
        name: "Person 1",
        designation: "Student",
        image: tooltip,
      },
      people2: {
        id: 2,
        name: "Person 2",
        designation: "Student",
        image: tooltip,
      },
      people3: {
        id: 3,
        name: "Person 3",
        designation: "Student",
        image: tooltip,
      },
      people4: {
        id: 4,
        name: "Person 4",
        designation: "Student",
        image: tooltip,
      },
      people5: {
        id: 5,
        name: "Person 5",
        designation: "Student",
        image: tooltip,
      },
    },
    {
      team: "Team 3",
      tagline: "Tagline 3",
      domain: "Domain 3",
      imageSrc: dummy,
      idea: "",
      people1: {
        id: 1,
        name: "Person 1",
        designation: "Student",
        image: tooltip,
      },
      people2: {
        id: 2,
        name: "Person 2",
        designation: "Student",
        image: tooltip,
      },
      people3: {
        id: 3,
        name: "Person 3",
        designation: "Student",
        image: tooltip,
      },
      people4: {
        id: 4,
        name: "Person 4",
        designation: "Student",
        image: tooltip,
      },
      people5: {
        id: 5,
        name: "Person 5",
        designation: "Student",
        image: tooltip,
      },
    },
    {
      team: "Team 4",
      tagline: "Tagline 4",
      domain: "Domain 4",
      imageSrc: dummy,
      idea: "",
      people1: {
        id: 1,
        name: "Person 1",
        designation: "Student",
        image: tooltip,
      },
      people2: {
        id: 2,
        name: "Person 2",
        designation: "Student",
        image: tooltip,
      },
      people3: {
        id: 3,
        name: "Person 3",
        designation: "Student",
        image: tooltip,
      },
      people4: {
        id: 4,
        name: "Person 4",
        designation: "Student",
        image: tooltip,
      },
      people5: {
        id: 5,
        name: "Person 5",
        designation: "Student",
        image: tooltip,
      },
    },
    {
      team: "Team 5",
      tagline: "Tagline 5",
      domain: "Domain 5",
      imageSrc: dummy,
      idea: "",
      people1: {
        id: 1,
        name: "Person 1",
        designation: "Student",
        image: tooltip,
      },
      people2: {
        id: 2,
        name: "Person 2",
        designation: "Student",
        image: tooltip,
      },
      people3: {
        id: 3,
        name: "Person 3",
        designation: "Student",
        image: tooltip,
      },
      people4: {
        id: 4,
        name: "Person 4",
        designation: "Student",
        image: tooltip,
      },
      people5: {
        id: 5,
        name: "Person 5",
        designation: "Student",
        image: tooltip,
      },
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
              alt="Hult Prize 2023"
              width={150}
              height={150}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-600 dark:text-white text-center">
                2023 HULT PRIZE CHALLENGE
              </h5>
              <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white text-center">
                THEME : REDESIGNING FASHION
              </h4>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                Launch an innovative social venture in the clothing and fashion
                industry to make it more sustainable.
              </p>
              <div className="text-center">
                <a
                  href="https://www.hultprize.org/2023-hult-prize-challenge/"
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


export default Show2023
