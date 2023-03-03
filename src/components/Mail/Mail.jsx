import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTabs } from "../../hooks/useTabs";
import "./Mail.css";

// mail__tolsLeft Icons
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// mail__tolsrRight Icons
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import { selectAllMail } from "../../app/features/mailSlice";

const Mail = () => {
  const navigate = useNavigate();
  const emails = useSelector(selectAllMail);
  const { id } = useParams();

  const renderMail = emails[id];

  return (
    <div className="mail">
      <div className="mail__tools flex items-center justify-between">
        <div className="mail__tolsLeft">
          <IconButton color="primary" style={{ marginLeft: "0px" }} onClick={() => navigate("/")}>
            <ArrowBackIcon style={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton color="primary" style={{ marginLeft: "-5px" }}>
            <MoveToInboxIcon style={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton color="primary" style={{ marginLeft: "-5px" }}>
            <ErrorIcon style={{ fontSize: "16px", fontWeight: "400" }} />
          </IconButton>

          <div className="gray__line"></div>

          <IconButton color="primary" style={{ marginLeft: "-1px" }}>
            <DeleteIcon style={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton color="primary" style={{ marginLeft: "-5px" }}>
            <EmailIcon style={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton color="primary" style={{ marginLeft: "-5px" }}>
            <WatchLaterIcon style={{ fontSize: "16px" }} />
          </IconButton>

          <div className="gray__line"></div>

          <IconButton color="primary" style={{ marginLeft: "-1px" }}>
            <CheckCircleIcon style={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton color="primary" style={{ marginLeft: "-5px" }}>
            <LabelImportantIcon style={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton color="primary" style={{ marginLeft: "-10px" }}>
            <MoreVertIcon style={{ fontSize: "16px" }} />
          </IconButton>
        </div>

        <div className="mail__tolsRight">
          <IconButton color="primary" style={{ marginLeft: "-1px" }}>
            <UnfoldMoreIcon style={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton color="primary" style={{ marginLeft: "-5px" }}>
            <PrintIcon style={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton color="primary" style={{ marginLeft: "-10px" }}>
            <ExitToAppIcon style={{ fontSize: "16px" }} />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <div>
            <p>{renderMail.title}</p>
            <IconButton style={{ marginLeft: "-10px" }}>
              <LabelImportantIcon style={{ fontSize: "15px", color: "green", position: "relative", top: "2px" }} />
            </IconButton>
            <h1>{renderMail.subject}</h1>
          </div>
          <p>{renderMail.time}</p>
        </div>
        <div className="mail__message">{renderMail.description}</div>
      </div>
    </div>
  );
};

export default Mail;
