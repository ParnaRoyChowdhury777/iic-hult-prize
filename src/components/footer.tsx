"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import Image from "next/image";
const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-black mt-6">
      <hr className="my-2 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="w-full max-w-screen-xl mx-auto py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 space-x-3 rtl:space-x-reverse">
            {isMounted && theme === "dark" && (
              <Image
                src="/images/IIC_WHITE.png"
                width={60}
                height={60}
                alt="logo"
                className="cursor-pointer"
              />
            )}
            {isMounted && theme === "light" && (
              <Image
                src="/images/IIC.png"
                width={60}
                height={60}
                alt="logo"
                className="cursor-pointer"
              />
            )}
            <span className="self-center text-4xl font-bold whitespace-nowrap text-[rgb(13,30,89)] dark:text-white">
              TMSL
            </span>
          </div>
          <ul className="flex flex-wrap gap-5 justify-center md:justify-end items-center text-sm font-medium text-gray-500 md:mb-0 dark:text-gray-400">
            <li className="mb-2 md:mb-0">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                <Facebook size={20} />
              </a>
            </li>
            <li className="mb-2 md:mb-0">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                <Twitter size={20} />
              </a>
            </li>
            <li className="mb-2 md:mb-0">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                <Linkedin size={20} />
              </a>
            </li>
            <li className="mb-2 md:mb-0">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                <Instagram size={20} />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm text-gray-500 text-center md:text-left dark:text-gray-400 mt-4">
          A Govt. of India - MoE Initiative
        </div>
        <hr className="my-2 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center md:text-left dark:text-gray-400 mb-2">
          © 2024{" "}
          <a href="https://www.iictmsl.com/" className="hover:underline">
            IIC TMSL™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
