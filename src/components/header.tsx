import React from "react";

const header = () => {
  return (
    <header className="w-full z-[49] shadow shadow-neutral-700/50 sticky top-0 backdrop-blur bg-gray-950/50 flex justify-center gap-12 text-md text-zinc-300 h-16 font-semibold mb-10">
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
    </header>
  );
};

export default header;
