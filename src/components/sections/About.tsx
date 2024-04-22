import React from "react";

const About = () => {
  return (
    <section className="bg-gray-200 dark:bg-zinc-900">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
          About Us
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.
        </p>
        <div className="flex items-center justify-center mt-12">
          <a
            href="#"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
