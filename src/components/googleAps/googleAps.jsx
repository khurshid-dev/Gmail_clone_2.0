import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "./googleAps.css";

import googleIcon from "/google_icon.png";
import googleCalendar from "/google_calendar.png";
import googleDrive from "/google_drive.png";
import googleMeet from "/google_meet.png";
import googleNews from "/google_news.png";
import googleTranslate from "/google_translate.png";
import googleWallet from "/google_wallet.png";
import googleStore from "/play-store.png";

const googleApsData = [
  {
    img: googleIcon,
    title: "Search",
    author: "author",
    id: "1",
    link: "https://www.google.com/",
  },
  {
    img: googleCalendar,
    title: "Calendar",
    author: "author",
    id: "2",
    link: "https://calendar.google.com/calendar/",
  },
  {
    img: googleDrive,
    title: "Drive",
    author: "author",
    id: "3",
    link: "https://drive.google.com/drive/",
  },
  {
    img: googleMeet,
    title: "Meet",
    author: "author",
    id: "4",
    link: "https://meet.google.com/",
  },
  {
    img: googleNews,
    title: "News",
    author: "author",
    id: "5",
    link: "https://news.google.com/",
  },
  {
    img: googleTranslate,
    title: "Translate",
    author: "author",
    id: "6",
    link: "https://translate.google.co.uz/",
  },
  {
    img: googleWallet,
    title: "Shopping",
    author: "author",
    id: "7",
    link: "https://www.google.co.uz/shopping",
  },
  {
    img: googleStore,
    title: "Play",
    author: "author",
    id: "8",
    link: "https://play.google.com/store",
  },
];

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
