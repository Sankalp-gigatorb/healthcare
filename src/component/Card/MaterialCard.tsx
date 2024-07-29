import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    
  </Box>
);


const MaterialCard = ({ title, subtitle, bodyText, buttonText, onClick }) => {
  return (
    <Card sx={{}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {}
        </Typography>
        <Typography variant="h5" component="div">
          {bull}
          {title}
        </Typography>
        <p className="mt-3 ml-2 text-slate-600" >
          {subtitle}
        </p>
        <CardActions className="flex justify-between">
        <p className="from-neutral-500 text-xl">{bodyText}</p>
          <button className="bg-sky-300 rounded-md hover:bg-sky-600 font-semibold  px-4 py-2 text" onClick={onClick}>
            {buttonText}
          </button>
          
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default MaterialCard;
