import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Confetti from "react-confetti"; // Import react-confetti

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="w-full z-[49] fixed top-0 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-25 bg-gray-50 dark:bg-gray-950/50 text-sm text-zinc-900 dark:text-slate-300 h-[58px] mb-12 shadow-inner-bottom shadow-pink-600/70">
      <Link href="https://www.hultprize.org/" target="_blank">
        {isMounted && theme === "dark" && (
          <Image
            src="/images/logo_dark.png"
            width={60}
            height={60}
            alt="logo"
            className="ml-20 cursor-pointer"
          />
        )}
        {isMounted && theme === "light" && (
          <Image
            src="/images/logo_light.png"
            width={60}
            height={60}
            alt="logo"
            className="ml-20 cursor-pointer"
          />
        )}
      </Link>
      <div className="flex justify-center gap-12 mx-auto mt-2 font-extrabold text-xl">
        <a
          href="/"
          className="font-normal hover:text-zinc-500 dark:hover:text-pink-600 hover:transition-all"
        >
          Home
        </a>
        <Link
          href="/about"
          className="font-normal hover:text-zinc-500 dark:hover:text-pink-600 hover:transition-all"
        >
          About
        </Link>
        <Link
          href="/winner"
          className="font-normal hover:text-zinc-500 dark:hover:text-pink-600 hover:transition-all"
        >
          Winner
        </Link>
        <span className="relative right-[40px] hidden h-5 w-5 animate-bounce items-center justify-center sm:flex">
          <span className="absolute inline-flex h-full w-full animate-ping rounded bg-[#E0097E] opacity-75"></span>
          <span className="relative inline-flex rounded bg-[#E0097E] p-0.5 px-1 text-xs text-white">
            New
          </span>
        </span>
        <a
          href="/"
          className="font-normal hover:text-zinc-500 dark:hover:text-pink-600 hover:transition-all"
        >
          Submissions
        </a>
      </div>
      <ModeToggle />
      <Menu
        className="text-white mr-20 cursor-pointer mt-5 md:hidden"
        size={40}
      />
      <Confetti width={1920} height={1080} /> {/* Render Confetti component */}
    </header>
  );
};

export default Header;
