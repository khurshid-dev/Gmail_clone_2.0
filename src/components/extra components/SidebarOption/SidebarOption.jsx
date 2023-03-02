import { Badge } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSideBarIsOpen, openSideBar } from "../../../app/features/modalSlice";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, title, number, selected }) => {
  const dispatch = useDispatch();
  const sidebarIsOpen = useSelector(selectSideBarIsOpen);

  return (
    <div
      className={`sidebar-option ${selected && "sidebar__active"} font-bold ${
        !sidebarIsOpen ? "w-[fit-content] relative" : "w-auto"
      }`}
    >
      <Icon onClick={() => dispatch(openSideBar())} />
      {sidebarIsOpen ? (
        <div className="sidebarOpt-info">
          <h3>{title}</h3>
          <p>{number}</p>
        </div>
      ) : number > 1 ? (
        <div className="absolute left-11 bottom-4 bg-green-600 rounded-full px-[5px] py-[2px]">{number}</div>
      ) : null}
    </div>
  );
};

export default SidebarOption;
