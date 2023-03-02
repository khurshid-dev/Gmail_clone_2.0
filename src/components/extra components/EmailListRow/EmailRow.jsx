import React from "react";
import "./EmailRow.css";

import { useNavigate } from "react-router-dom";
import { selectAllEmail } from "../../../app/features/mailSlice";

import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useSelector } from "react-redux";

function EmailRow() {
  const navigate = useNavigate();
  const emails = useSelector(selectAllEmail);

  const renderEmail = emails?.map((email) => (
    <div
      key={email.id}
      onClick={() => navigate("/mail")}
      className="email-row flex items-center justify-between text-sm text-primary w-full"
    >
      <div className="email-row__options flex items-center">
        <div>
          <Checkbox color="primary" size="small" />
          <IconButton style={{ marginLeft: "-10px" }}>
            <StarBorderIcon style={{ fontSize: "18px" }} />
          </IconButton>
          <IconButton style={{ marginLeft: "-10px" }}>
            <LabelImportantIcon style={{ fontSize: "18px" }} />
          </IconButton>
        </div>
        <h3 className="email-row__title font-bold">{email.title.slice(0, 10)}</h3>
      </div>

      <div className="email-row__message font-bold">
        <h4>
          {email.subject.slice(0, 38)}
          <span className="email-row__description font-normal text-lightgray text-xs ml-2">
            {email.description.slice(0, 45)}...
          </span>
        </h4>
      </div>

      <div className="email-row__time  font-bold text-lightgray text-xs">{email.time}</div>
    </div>
  ));

  return <>{renderEmail}</>;
}

export default EmailRow;
