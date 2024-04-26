"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Header from "../header";
import Confetti from "react-confetti";
const Winner_show = () => {
  

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const scrollToSection = () => {
        const section = document.getElementById('imageSection');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <>
      <Header />
      <section className="dark:bg-slate-950">
        <div className="flex items-center justify-center text-5xl text-pink-600 font-bold mb-10 mt-20">
          Winner Showcase
        </div>
        <Card
          className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl border-zinc-300 border-spacing-2"
          style={{ boxShadow: "0 12px 16px 0 rgba(252, 0, 125, 0.4)" }}
        >
          <CardHeader className="flex justify-between items-center p-6">
            <CardTitle className="text-3xl font-semibold text-zinc-900">
              Winner team name
            </CardTitle>
            <div className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <img
                src="/images/logo-1.png"
                alt="Card Image"
                className="w-20 h-25"
                height={150}
                width={150}
              />
              <div className="ml-4">
                <h2 className="text-xl text-zinc-700 font-bold ml-5">
                  Name of project
                </h2>
                <p className="mt-2 text-zinc-500 ml-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita vitae id illum repudiandae nesciunt? Libero minima
                  neque vel eaque numquam laborum, sit deleniti expedita?
                  Accusantium vitae incidunt optio laudantium amet.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center p-6">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/images/avatar-1.png"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/images/avatar-1.png"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/images/avatar-1.png"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/images/avatar-1.png"
                alt=""
              />
            </div>
            <div className="flex items-center">
              <button
                className="bg-pink-600 hover:bg-pink-200 hover:text-pink-500 text-white font-bold py-2 px-4 rounded-xl"
                onClick={scrollToSection}
              >
                Explore
              </button>
            </div>
          </CardFooter>
        </Card>
        <section
          id="imageSection"
          className="flex items-center justify-center mt-8 px-24 "
        >
          <div className="flex items-center justify-center mt-8 px-24 ">
            <p className="text-semibold text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              saepe exercitationem, quam quod asperiores praesentium rerum
              molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum
              ratione porro sint magnam nam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tempora dolore velit, laborum, nihil
              ipsa ipsam deleniti officiis eveniet laboriosam dicta
              exercitationem magni officia sed veniam libero suscipit at
              voluptatum aspernatur.
            </p>
          </div>
          <div className="flex p-8 mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/winner-1.JPG"
                alt="Image 1"
                className="col-span-2 h-100 w-100 rounded-lg"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, saepe exercitationem, quam quod asperiores praesentium
                rerum molestiae, voluptatum nam hic voluptatibus. Omnis quo at
                laborum ratione porro sint magnam nam!
              </p>
              <img
                src="/images/winner-2.JPG"
                alt="Image 2"
                className="col-span-1"
              />
              <img
                src="/images/winner-3.JPG"
                alt="Image 3"
                className="col-span-1"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, saepe exercitationem, quam quod asperiores praesentium
                rerum molestiae, voluptatum nam hic voluptatibus. Omnis quo at
                laborum ratione porro sint magnam nam!
              </p>
              <img
                src="/images/winner-4.JPG"
                alt="Image 4"
                className="col-span-2"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, saepe exercitationem, quam quod asperiores praesentium
                rerum molestiae, voluptatum nam hic voluptatibus. Omnis quo at
                laborum ratione porro sint magnam nam!Lorem Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptatum sunt rerum
                facere, nihil vel necessitatibus? Debitis repellendus veritatis
                consequatur a! Voluptatibus minima explicabo necessitatibus, ad
                obcaecati molestiae dolore esse beatae.
              </p>
            </div>
          </div>

          <Confetti width={1920} height={650} />
        </section>
      </section>
    </>
  );
};

export default Winner_show;
