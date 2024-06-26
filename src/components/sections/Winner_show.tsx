"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Header from "../header";
import { useTheme } from "next-themes";
import { Spotlight } from "../ui/Spotlight";
import Image from "next/image";
import logo1 from "../../../public/images/logo-1.png";
import avatar1 from "../../../public/images/avatar-1.png";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Person 1",
    designation: "Student",
    image: { avatar1 },
  },
  {
    id: 2,
    name: "Person 2",
    designation: "Student",
    image: { avatar1 },
  },
  {
    id: 3,
    name: "Person 3",
    designation: "Student",
    image: { avatar1 },
  },
  {
    id: 4,
    name: "Person 4",
    designation: "Student",
    image: { avatar1 },
  },
  {
    id: 5,
    name: "Person 5",
    designation: "Student",
    image: { avatar1 },
  },
];

const Winner_show = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const scrollToSection = () => {
    const section = document.getElementById("imageSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      {isMounted && theme === "dark" && (
        <Spotlight fill="#DB2777" className="top-0" />
      )}
      <section className="dark:bg-slate-950 mx-auto px-2 sm:px-auto flex-wrap md:flex-nowrap">
        <div className="flex items-center justify-center text-center text-5xl text-pink-600 font-bold mb-10 mt-20">
          Winner Showcase
        </div>
        <Card
          className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl border-zinc-300 border-spacing-2 dark:shadow-custom"
          style={{ boxShadow: "0 12px 16px 0 rgba(252, 0, 125, 0.3)" }}
        >
          <CardHeader className="flex justify-between items-center p-6">
            <CardTitle className="text-3xl font-semibold text-zinc-900">
              Winner team name <br />
              <div className="flex justify-center tems-center">🏆</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Image
                src={logo1}
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
            <div className="flex flex-row items-center justify-start mb-2 w-full gap-1 ">
              <AnimatedTooltip
                items={people.map((item) => ({
                  ...item,
                  image: item.image.avatar1,
                }))}
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
          className="flex flex-col flex-wrap md:flex-nowrap items-center justify-center mt-8 sm:px-24 "
        >
          <p className="text-semibold text-center mx-auto mb-8 px-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            saepe exercitationem, quam quod asperiores praesentium rerum
            molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum
            ratione porro sint magnam nam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora dolore velit, laborum, nihil
            ipsa ipsam deleniti officiis eveniet laboriosam dicta exercitationem
            magni officia sed veniam libero suscipit at voluptatum aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo esse iusto qui similique illo molestiae illum doloremque dicta sed? Pariatur maxime nostrum atque ipsa cupiditate cumque aperiam totam iste illum commodi repellat dolor id quam provident sint voluptas corrupti, optio, officia unde cum consequuntur iure. 
          </p>
          <div className=" px-4 py-8 mx-auto flex flex-col flex-wrap gap-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <img
              src="/images/winner-1.JPG"
              alt="Image 1"
              className="col-span-3 h-72 w-96 rounded-lg border-2 border-pink-500"
            />
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              saepe exercitationem, quam quod asperiores praesentium rerum
              molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum
              ratione porro sint magnam nam! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Beatae cumque at sit quasi
              voluptatibus eos illo commodi! Veritatis cum porro eveniet?
              Deleniti illum minus nostrum omnis maxime pariatur libero. Nam
              impedit et minus rem, ex similique quia error at aliquam vel
              exercitationem! Soluta rem ad sit! Recusandae voluptate quidem
              facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit maxime recusandae magni quis ut nisi rerum cupiditate asperiores commodi dolores sunt, totam, architecto beatae veniam deserunt voluptatum exercitationem maiores hic expedita pariatur aliquid illum similique. Ipsam exercitationem commodi cumque, nisi perspiciatis dicta aliquam unde, quaerat eveniet minima molestias doloribus.
              
            </p>
            </div>
            <div className="flex flex-wrap gap-8 justify-center items-center">
            <img
              src="/images/winner-2.JPG"
              alt="Image 2"
              className="col-span-2 h-72 w-96  rounded-lg border-2 border-pink-500"
            />
            <img
              src="/images/winner-3.JPG"
              alt="Image 3"
              className="col-span-2 h-72 w-96  rounded-lg border-2 border-pink-500"
            />
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              saepe exercitationem, quam quod asperiores praesentium rerum
              molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum
              ratione porro sint magnam nam! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ratione expedita, assumenda
              accusamus nostrum totam, consectetur quaerat accusantium excepturi
              cupiditate obcaecati est atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia libero, culpa dolor, repellat aliquam quae dolores ipsa doloribus sit atque aliquid nisi quaerat accusantium placeat nihil aperiam nam odit quibusdam, voluptatem unde quod neque!
            </p>
            
            </div>
            <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-8">
            <img
              src="/images/winner-4.JPG"
              alt="Image 4"
              className="col-span-3 h-72 w-96 rounded-lg border-2 border-pink-500"
            />
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              saepe exercitationem, quam quod asperiores praesentium rerum
              molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum
              ratione porro sint magnam nam!Lorem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum sunt rerum facere, nihil
              vel necessitatibus? Debitis repellendus veritatis consequatur a!
              Voluptatibus minima explicabo necessitatibus, ad obcaecati
              molestiae dolore esse beatae. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum quam praesentium doloremque reiciendis quo facilis, accusamus expedita sequi commodi, tenetur dolor et nisi ad vel recusandae ut totam modi tempora? Molestiae perspiciatis doloribus explicabo, voluptas tempore numquam architecto, et, aut minima quam recusandae deleniti excepturi quia nobis quod expedita!
              vel!
            </p>
            </div>
          </div>
          <p className="text-semibold text-center mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            saepe exercitationem, quam quod asperiores praesentium rerum
            molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum
            ratione porro sint magnam nam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora dolore velit, laborum, nihil
            ipsa ipsam deleniti officiis eveniet laboriosam dicta exercitationem
            magni officia sed veniam libero suscipit at voluptatum aspernatur.
          </p>
          
        </section>
      </section>
    </>
  );
};

export default Winner_show;
