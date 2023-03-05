import React from "react";
import "./EmailList.css";
import { EmailRow, EmailTabs } from "../index";

import { IconButton, Checkbox } from "@material-ui/core";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import TuneIcon from "@material-ui/icons/Tune";

import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const EmailList = ({ mailFilt }) => {
  return (
    <div className="emailList">
      <div className="emailList__settings flex items-center justify-between mx-2">
        <div className="emailList__settingsLeft">
          <Checkbox color="primary" size="small" />
          <IconButton color="primary" size="small" style={{ marginLeft: "-10px" }}>
            <ArrowDropDownIcon style={{ fontSize: "14px" }} />
          </IconButton>
          <IconButton color="primary" size="medium" style={{ fontSize: "30px" }}>
            <RedoIcon style={{ fontSize: "14px" }} />
          </IconButton>
          <IconButton color="primary" size="medium">
            <MoreVertIcon style={{ fontSize: "14px" }} />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton color="primary" size="small" style={{ marginLeft: "-10px" }}>
            <ChevronLeftIcon style={{ fontSize: "14px" }} />
          </IconButton>
          <IconButton color="primary" size="medium" style={{ fontSize: "30px" }}>
            <ChevronRightIcon style={{ fontSize: "14px" }} />
          </IconButton>
          <IconButton color="primary" size="medium" style={{ fontSize: "30px" }}>
            <KeyboardHideIcon style={{ fontSize: "14px" }} />
          </IconButton>
          <IconButton color="primary" size="medium">
            <TuneIcon style={{ fontSize: "14px" }} />
          </IconButton>
        </div>
      </div>

      <div className="emailList__section w-full gap-1 flex items-center cursor-pointer mt-2">
        <EmailTabs Icon={InboxIcon} title="Primary" color="green" selected />
        <EmailTabs Icon={PeopleIcon} title="Social" color="#1a73e8" />
        <EmailTabs Icon={LocalOfferIcon} title="Promotions" color="red" />
      </div>

      <div className="emailList__list">
        <EmailRow mailFilt={mailFilt} />
      </div>
    </div>
  );
};

export default EmailList;
