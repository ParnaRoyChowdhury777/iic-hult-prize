import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "./animated-tooltip";
import tooltip from "../../../public/images/tooltip.png";


export default function showcard({ team, tagline, domain, imageSrc, idea }: { team: string, tagline: string, domain: string, imageSrc: string, idea: string }) {
  
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:tooltip,
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:tooltip,
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:tooltip,
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:tooltip,
    },
  ];
  return (
    <div className="">
      {/* <Card
        className="bg-pink-50 m-10 border-2 hover:shadow-lg shadow-lg shadow-pink-400/50 transform transition duration-500 ease-in-out hover:scale-105"
        sx={{
          width: 320,
          transition: "0.3s",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          "&:hover": { boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)" },
        }}
      > */}
      <Card
        className="bg-pink-50 m-10 border-2 hover:shadow-lg shadow-lg shadow-pink-400/50 transform transition duration-500 ease-in-out hover:scale-105 hover:animate-colorChange cursor-pointer dark:bg-gray-400  "
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
            <Button
              className="bg-pink-600 hover:bg-pink-800"
              variant="solid"
              size="md"
              color="primary"
              aria-label="Explore"
              sx={{ fontWeight: 600 }}
            >
              Explore
            </Button>
          </Link>
        </CardContent>
      </Card>
        <p className="text-center mb-2">Comprises of</p>
      <div className="flex flex-row items-center justify-center mb-10 w-full gap-5">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}

