"use client";
import React, { useState, useEffect } from "react";
import Show2024 from "./Show2024";
import Show2023 from "./Show2023";
import Header from "../header";
import { Spotlight } from "../ui/Spotlight";
import { useTheme } from "next-themes";

const Showcase = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <Header />
      {isMounted && theme === "dark" && (
        <Spotlight fill="#DB2777" className="top-0" />
      )}
      <div className="bg-gray-50 dark:bg-slate-950">
        <h1 className="text-center m-5 mb-10 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl mt-20">
          <span className=" text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-rose-600 text-5xl dark:text-white dark:text-current">
            SUBMISSIONS SHOWCASE
          </span>{" "}
        </h1>
        <Show2024 />
        <Show2023 />
      </div>
    </>
  );
};

export default Showcase;
