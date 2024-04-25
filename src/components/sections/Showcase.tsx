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
      <div className="bg-gray-50 dark:bg-slate-950 mx-auto px-6 py-10">
        <h2 className="text-4xl md:text-6xl mt-10 mb-8 font-extrabold text-center text-pink-600">
          SUBMISSIONS SHOWCASE
        </h2>
        <Show2024 />
        <Show2023 />
      </div>
    </>
  );
};

export default Showcase;
