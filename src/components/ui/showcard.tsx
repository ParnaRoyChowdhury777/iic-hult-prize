import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import img1 from "../../images/2024theme.jpg";

export default function showcard() {
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
        className="bg-pink-50 m-10 border-2 hover:shadow-lg shadow-lg shadow-pink-400/50 transform transition duration-500 ease-in-out hover:scale-105 hover:animate-colorChange"
        sx={{
          width: 320,
          transition: "0.3s",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          "&:hover": { boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)" },
        }}
      >
      {/* <Card
        className="bg-pink-50 m-10 border-2 hover:shadow-lg shadow-lg shadow-pink-400/50 transform transition duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
        sx={{
          width: 320,
          transition: "0.3s",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          "&:hover": { boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)" },
        }}
      > */}
        <div>
          <Typography level="title-lg">pHighters</Typography>
          <Typography level="body-sm">
            where innovation meets environmental sustainability.
          </Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <Image src={img1} loading="lazy" width={100} height={100} alt="" />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Domain :</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              Eco friendly
            </Typography>
          </div>
          <Button
            className="bg-pink-600 hover:bg-pink-800"
            variant="solid"
            size="md"
            aria-label="Explore"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            Explore
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

