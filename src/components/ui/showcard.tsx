"use client";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import { Button } from "./button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "./animated-tooltip";
import { StaticImageData } from "next/image";

export default function showcard({
  team,
  tagline,
  domain,
  imageSrc,
  idea,
  people1,
  people2,
  people3,
  people4,
  people5,
}: {
  team: string;
  tagline: string;
  domain: string;
  imageSrc: string;
  idea: string;
  people1: {
    id: number;
    name: string;
    designation: string;
    image: StaticImageData;
  }[];
  people2: {
    id: number;
    name: string;
    designation: string;
    image: StaticImageData;
  }[];
  people3: {
    id: number;
    name: string;
    designation: string;
    image: StaticImageData;
  }[];
  people4: {
    id: number;
    name: string;
    designation: string;
    image: StaticImageData;
  }[];
  people5: {
    id: number;
    name: string;
    designation: string;
    image: StaticImageData;
  }[];
}) {
  return (
    <div>
      <Card
        className="bg-pink-100 m-10 border-2 hover:shadow-lg shadow-lg shadow-pink-400/50 transform transition duration-500 ease-in-out hover:scale-105 hover:animate-colorChange cursor-pointer dark:bg-gray-300 cdcs"
        sx={{
          width: 320,
          transition: "0.3s",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          "&:hover": { boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)" },
        }}
      >
        <div>
          <Typography level="title-lg">{team}</Typography>
          <Typography level="body-sm" className="dark:text-black">
            {tagline}
          </Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <Image
            src={imageSrc}
            loading="lazy"
            width={100}
            height={100}
            alt=""
          />
        </AspectRatio>
        <CardContent
          orientation="horizontal"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Typography level="body-xs" className="dark:text-black">
              Domain :
            </Typography>
            <Typography fontSize="sm" fontWeight="lg">
              {domain}
            </Typography>
          </div>
          <Link href={idea}>
            <Button className="bg-pink-600 hover:bg-pink-800 font-medium text-white">
              Explore
            </Button>
          </Link>
        </CardContent>
      </Card>
      <p className="text-center mb-2">Presented by</p>
      <div className="flex flex-row items-center justify-center mb-10 w-full gap-5">
        <AnimatedTooltip items={people1} />
        <AnimatedTooltip items={people2} />
        <AnimatedTooltip items={people3} />
        <AnimatedTooltip items={people4} />
        <AnimatedTooltip items={people5} />
      </div>
    </div>
  );
}
