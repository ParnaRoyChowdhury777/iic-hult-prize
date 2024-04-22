import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

export default function showcard() {
  return (
    <div className="">
      {/* <Card
        className="bg-pink-50 m-10 border-2 hover:border-pink-600 hover-box-shadow:lg"
        sx={{ width: 320 }}
      > */}
      {/* <Card
  className="bg-pink-50 m-10 border-2 hover:border-pink-600 hover:shadow-lg"
  sx={{ width: 320, transition: '0.3s', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', '&:hover': { boxShadow: '0 8px 16px 0 rgba(0,0,0,0.6)' } }}
  > */}
      <Card
        className="bg-pink-50 m-10 border-2 hover:shadow-lg transform transition duration-500 ease-in-out hover:scale-105"
        sx={{
          width: 320,
          transition: "0.3s",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          "&:hover": { boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)" },
        }}
      >
        <div>
          <Typography level="title-lg">pHighters</Typography>
          <Typography level="body-sm">
            where innovation meets environmental sustainability.
          </Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
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

