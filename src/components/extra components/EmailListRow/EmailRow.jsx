import React, { useState } from "react";
import "./EmailRow.css";

import { useNavigate } from "react-router-dom";

import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useSelector } from "react-redux";
import { selectAllMail } from "../../../app/features/mailSlice";

function EmailRow() {
  const navigate = useNavigate();
  const emails = useSelector(selectAllMail);

  // const [star, setStar] = useState(false);
  const renderEmail = emails.map((email, idx) => (
    <div key={email.id} className="email-row flex items-center justify-between text-sm text-primary w-full">
      <div className="email-row__options flex items-center">
        <div>
          <Checkbox color="primary" size="small" />
          <IconButton style={{ marginLeft: "-10px" }} onClick={() => setStar((prev) => !prev)}>
            <StarBorderIcon style={{ fontSize: "18px" }} />
            {/* {!star ? (
                <StarBorderIcon style={{ fontSize: "18px" }} />
              ) : (
                <StarBorderIcon style={{ fontSize: "18px" }} color="secondary" />
              )} */}
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
