import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmailRow.css";

import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

function EmailRow({ mailFilt }) {
  const navigate = useNavigate();

  const renderEmail = mailFilt.map((email, idx) => (
    <div key={idx} className="email-row flex items-center justify-between text-sm text-primary w-full">
      <div className="email-row__options flex items-center">
        <div>
          <Checkbox color="primary" size="small" />
          <IconButton style={{ marginLeft: "-10px" }}>
            <AiOutlineStar style={{ fontSize: "20px" }} />
          </IconButton>
          <IconButton style={{ marginLeft: "-10px" }}>
            <LabelImportantIcon style={{ fontSize: "18px" }} />
          </IconButton>
        </div>
        <h3 onClick={() => navigate(`/mail/${idx}`)} className="email-row__title font-bold">
          {email?.title.slice(0, 14)}
        </h3>
      </div>

      <div className="email-row__message font-bold" onClick={() => navigate(`/mail/${idx}`)}>
        <h4>
          {email?.subject.slice(0, 38)}
          <span className="email-row__description font-normal text-lightgray text-xs ml-2">
            {email?.description.slice(0, 45)}...
          </span>
        </h4>
      </div>

      <div className="email-row__time  font-bold text-black text-xs">{email?.time}</div>
    </div>
  ));

  return <>{renderEmail}</>;
}

export default EmailRow;

// navigate(`/mail/${changeItem(email.id)}`)
