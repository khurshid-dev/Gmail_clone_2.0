import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSideBar,
  closeSideBar,
  selectSideBarIsOpen,
  openApps,
  closeApps,
  selectAppsIsOpen,
  openSetting,
  closeSetting,
  selectSettingIsOpen,
} from "../../app/features/modalSlice";
import { Link } from "react-router-dom";
import "./Header.css";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "/logo.png";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const Header = ({ setSearch }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sidebarIsOpen = useSelector(selectSideBarIsOpen);
  const appsIsOpen = useSelector(selectAppsIsOpen);
  const settingIsOpen = useSelector(selectSettingIsOpen);

  const toggleMenu = () => {
    {
      sidebarIsOpen ? dispatch(closeSideBar()) : dispatch(openSideBar());
    }
  };
  const toggleApps = () => {
    {
      appsIsOpen ? dispatch(closeApps()) : dispatch(openApps());
    }
  };
  const toggleSetting = () => {
    {
      settingIsOpen ? dispatch(closeSetting()) : dispatch(openSetting());
    }
  };
  return (
    <div className="header-body">
      <div className="header__start flex items-center cursor-pointer">
        <IconButton color="secondary" style={{ marginRight: "8px" }}>
          <MenuIcon className="text-white" onClick={toggleMenu} />
        </IconButton>
        <Link to={"/"}>
          <img src={logo} alt="logo-img" className="w-[130px]" />
        </Link>
      </div>
      <div className="header__middle">
        <IconButton color="primary" className="absolute left-12">
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search mail" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="header__end flex items-center gap-1 text-white">
        <IconButton color="secondary">
          <AppsIcon className="text-white" onClick={toggleApps} />
        </IconButton>
        <IconButton color="secondary">
          <SettingsIcon className="text-white" onClick={toggleSetting} />
        </IconButton>
        <IconButton color="secondary" className={classes.root}>
          <Avatar alt="Khurshid Dev" src="/avatar.jpg" className={classes.small} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
