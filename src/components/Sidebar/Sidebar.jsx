import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSideBarIsOpen,
  selectMessageIsOpen,
  openSendMessage,
  closeSendMessage,
} from "../../app/features/modalSlice";
import "./Sidebar.css";

import { Badge, IconButton } from "@material-ui/core";
import SidebarOption from "../extra components/SidebarOption/SidebarOption";

import CreateIcon from "@material-ui/icons/Create";
import InboxIcon from "@material-ui/icons/Inbox";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import CallIcon from "@material-ui/icons/Call";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarIsOpen = useSelector(selectSideBarIsOpen);
  const sendMessageIsOpen = useSelector(selectMessageIsOpen);

  const toggleSendMessage = () => {
    {
      sendMessageIsOpen ? dispatch(closeSendMessage()) : dispatch(openSendMessage());
    }
  };

  return (
    <div className={`sidebar-section ${!sidebarIsOpen ? "w-[6vw] transition-all" : "w-[22vw] transition-all"}`}>
      <IconButton
        color="primary"
        style={{
          margin: "10px",
          fontSize: "13px",
          fontWeight: "600",
          padding: "6px 10px",
          borderRadius: "6px",
          backgroundColor: "white",
        }}
        onClick={toggleSendMessage}
      >
        <CreateIcon fontSize="small" className="mr-1" /> {!sidebarIsOpen ? "" : "Compose"}
      </IconButton>

      <SidebarOption Icon={InboxIcon} title="Inbox" number="54" selected={true} />
      <SidebarOption Icon={StarBorderIcon} title="Starred" />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
      <SidebarOption Icon={NotificationImportantIcon} title="Important" />
      <SidebarOption Icon={SendIcon} title="Sent" />
      <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <div className={`gray__line ${!sidebarIsOpen ? "w-[47px]" : "w-full"}`}></div>

      <div
        className={`sidebar__footer ${
          !sidebarIsOpen ? "flex-col justify-start items-start ml-[9px]" : "justify-center items-center mr-3 gap-2 mt-3"
        } flex`}
      >
        <IconButton color="secondary" style={{ marginBottom: "12px" }}>
          <PersonIcon className="text-white" fontSize="small" />
        </IconButton>
        <IconButton color="secondary" style={{ marginBottom: "12px" }}>
          <DuoIcon className="text-white" fontSize="small" />
        </IconButton>
        <IconButton color="secondary" style={{ marginBottom: "12px" }}>
          <CallIcon className="text-white" fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
