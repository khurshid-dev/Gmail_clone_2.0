import React from "react";
import { googleApsData } from "../../constants";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "./googleAps.css";

const GoogleAps = () => {
  return (
    <div className="flex flex-wrap items-center justify-start bg-deepblue googleAps p-5 w-[265px] h-[fit-content] gap-[10px] absolute right-2 top-[68px] rounded-xl">
      {googleApsData.map((item) => (
        <IconButton
          component={Link}
          to={`${item.link}`}
          target="_blank"
          className="googleAps__item flex flex-col justify-center cursor-pointer"
        >
          <img src={item.img} alt={item.author} className="max-w-[40px] mx-auto" />
          <p className="text-white text-sm mt-0">{item.title}</p>
        </IconButton>
      ))}
    </div>
  );
};

export default GoogleAps;
