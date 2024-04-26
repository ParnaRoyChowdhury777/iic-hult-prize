"use client";
import React, { useState,useEffect } from "react";
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
import { useTheme } from "next-themes";
import { Spotlight } from "../ui/Spotlight";

const Winner_show = () => {
  
    const [isMounted, setIsMounted] = useState(false);
    const { theme } = useTheme();
    useEffect(() => {
        setIsMounted(true);
    }, []);

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
      {isMounted && theme === "dark" && (
        <Spotlight fill="#DB2777" className="top-0" />
      )}
      <section className="dark:bg-slate-950 mx-auto px-auto flex-wrap md:flex-nowrap">
        <div className="flex items-center justify-center text-5xl text-pink-600 font-bold mb-10 mt-20">
          Winner Showcase
        </div>
        <Card
          className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl border-zinc-300 border-spacing-2 dark:shadow-custom"
          style={{ boxShadow: "0 12px 16px 0 rgba(252, 0, 125, 0.3)" }} 
        >
          <CardHeader className="flex justify-between items-center p-6">
            <CardTitle className="text-3xl font-semibold text-zinc-900">
              Winner team name <br/>
              <div className="flex justify-center tems-center">🏆</div>
            </CardTitle>
            
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
            className="flex flex-col flex-wrap md:flex-nowrap items-center justify-center mt-8 px-24 "
            >
            <p className="text-semibold text-center mx-auto mb-8 px-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
                saepe exercitationem, quam quod asperiores praesentium rerum
                molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum
                ratione porro sint magnam nam! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tempora dolore velit, laborum, nihil
                ipsa ipsam deleniti officiis eveniet laboriosam dicta
                exercitationem magni officia sed veniam libero suscipit at
                voluptatum aspernatur.
            </p>
            <div className="grid grid-cols-5 gap-4 p-8 mx-auto">
                <img
                src="/images/winner-1.JPG"
                alt="Image 1"
                className="col-span-3 h-50 w-50 rounded-lg border-2 border-pink-500"
                />
                <p className="col-span-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, saepe exercitationem, quam quod asperiores praesentium
                rerum molestiae, voluptatum nam hic voluptatibus. Omnis quo at
                laborum ratione porro sint magnam nam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque at sit quasi voluptatibus eos illo commodi! Veritatis cum porro eveniet? Deleniti illum minus nostrum omnis maxime pariatur libero. Nam impedit et minus rem, ex similique quia error at aliquam vel exercitationem! Soluta rem ad sit! Recusandae voluptate quidem facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio culpa magni esse ab itaque animi expedita necessitatibus dolorem doloribus dicta amet assumenda facere labore earum eius temporibus veniam, vero, explicabo molestiae! Voluptatum repellendus, voluptates est eos facere laudantium consequuntur quod quis optio quaerat asperiores sed accusantium inventore dignissimos ipsa cum, omnis maiores fugit excepturi quia delectus ratione? Quisquam, nemo!
                </p>
                <p className="col-span-1 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, saepe exercitationem, quam quod asperiores praesentium
                rerum molestiae, voluptatum nam hic voluptatibus. Omnis quo at
                laborum ratione porro sint magnam nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione expedita, assumenda accusamus nostrum totam, consectetur quaerat accusantium excepturi cupiditate obcaecati est atque. lorem50
                </p>
                <img
                src="/images/winner-2.JPG"
                alt="Image 2"
                className="col-span-2 h-50 w-50 rounded-lg border-2 border-pink-500"
                />
                <img
                src="/images/winner-3.JPG"
                alt="Image 3"
                className="col-span-2 h-50 w-50 rounded-lg border-2 border-pink-500"
                />
                <img
                src="/images/winner-4.JPG"
                alt="Image 4"
                className="col-span-3 h-50 w-50 rounded-lg border-2 border-pink-500"
                />
                <p className="col-span-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, saepe exercitationem, quam quod asperiores praesentium
                rerum molestiae, voluptatum nam hic voluptatibus. Omnis quo at
                laborum ratione porro sint magnam nam!Lorem Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptatum sunt rerum
                facere, nihil vel necessitatibus? Debitis repellendus veritatis
                consequatur a! Voluptatibus minima explicabo necessitatibus, ad
                obcaecati molestiae dolore esse beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vel nisi aspernatur in autem earum facere quis dolorum ex commodi sit voluptate aut totam laborum, modi accusamus eligendi repellendus placeat beatae? Fuga recusandae, obcaecati laudantium in itaque omnis aut iste ad cumque similique ipsa. Nostrum earum aliquam aperiam recusandae vel!
                </p>
            </div>
            <p className="text-semibold text-center mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
                saepe exercitationem, quam quod asperiores praesentium rerum
                molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum
                ratione porro sint magnam nam! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tempora dolore velit, laborum, nihil
                ipsa ipsam deleniti officiis eveniet laboriosam dicta
                exercitationem magni officia sed veniam libero suscipit at
                voluptatum aspernatur.
            </p>
            <Confetti width={1920} height={650} />
        </section>
      </section>
    </>
  );
};

export default Winner_show;