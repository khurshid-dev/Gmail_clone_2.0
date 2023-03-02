import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSideBar,
  closeSideBar,
  selectSideBarIsOpen,
  selectAppsIsOpen,
  openApps,
  closeApps,
} from "../../app/features/modalSlice";
import { Link } from "react-router-dom";
import "./Header.css";

import IconButton from "@material-ui/core/IconButton";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const sidebarIsOpen = useSelector(selectSideBarIsOpen);
  const appsIsOpen = useSelector(selectAppsIsOpen);

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
        <input type="text" placeholder="Search mail" />
      </div>
      <div className="header__end flex items-center gap-1 text-white">
        <IconButton color="secondary">
          <AppsIcon className="text-white" onClick={toggleApps} />
        </IconButton>
        <IconButton color="secondary">
          <SettingsIcon className="text-white" />
        </IconButton>
        <IconButton color="secondary">
          <AccountCircleIcon className="text-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
