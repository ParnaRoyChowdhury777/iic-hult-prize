import React from "react";
import Image from "next/image";
import img1 from "../../images/2024theme.jpg";
import Showcard from "../ui/showcard";
const Show2024 = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
      <div className="grid grid-cols-3">
      <Showcard />
      <Showcard />
      <Showcard />
      <Showcard />
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