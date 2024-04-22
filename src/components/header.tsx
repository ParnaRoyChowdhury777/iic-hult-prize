import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";

const header = () => {
  return (
    <header className="w-full z-[49] shadow shadow-neutral-700/50 sticky top-0 backdrop-blur bg-gray-950/50 flex text-[1.1rem] text-zinc-300 h-20 font-semibold mb-12 pb-10">
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={80}
          height={100}
          alt="logo"
          className="ml-20 cursor-pointer"
        />
      </Link>
      <div className="flex justify-center gap-12 mx-auto mt-2">
        <a href="/" className="mt-5 hover:text-pink-600 hover:transition-all">
          Home
        </a>
        <a href="/" className="mt-5 hover:text-pink-600 hover:transition-all">
          About
        </a>
        <a href="/" className="mt-5 hover:text-pink-600 hover:transition-all">
          Winner
        </a>
        <a href="/" className="mt-5 hover:text-pink-600 hover:transition-all">
          Submissions 2023
        </a>
        <a href="/" className="mt-5 hover:text-pink-600 hover:transition-all">
          Submissions 2024
        </a>
        <a href="/" className="mt-5 hover:text-pink-600 hover:transition-all">
          Contact
        </a>
      </div>
      <ModeToggle />
    </header>
  );
};

export default header;
