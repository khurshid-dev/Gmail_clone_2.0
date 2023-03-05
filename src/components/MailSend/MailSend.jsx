import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { closeSendMessage } from "../../app/features/modalSlice";
import { mailAdded } from "../../app/features/mailSlice";
import "./MailSend.css";

import CloseIcon from "@material-ui/icons/Close";
import { IconButton, Button } from "@material-ui/core";

import Zoom from "react-reveal/Zoom";

function MailSend() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(`${new Date().getHours()} : ${new Date().getMinutes()}`);

  const titleChange = (e) => setTitle(e.target.value);
  const subjectChange = (e) => setSubject(e.target.value);
  const descriptionChange = (e) => setDescription(e.target.value);

  const onClickSaveEmail = () => {
    if (title && subject && description) {
      dispatch(
        mailAdded({
          id: nanoid(),
          title,
          subject,
          description,
          time,
        })
      );
      setTitle("");
      setSubject("");
      setDescription("");
      setTime();
    }
  };

  return (
    <Zoom>
      <div className="mail-send">
        <div className="mail-send__header">
          <h4>New Message</h4>
          <IconButton color="primary" onClick={() => dispatch(closeSendMessage())}>
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
        </div>

        <form>
          <input type="text" value={title} onChange={titleChange} placeholder="To" />

          <input type="text" value={subject} onChange={subjectChange} placeholder="Subject" />

          <input
            type="text"
            value={description}
            onChange={descriptionChange}
            placeholder="Text to this message in here ..."
            className="message-input"
          />
          <div className="mail-send__button">
            <Button
              variant="outlined"
              color="primary"
              style={{
                textTransform: "capitalize",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "4px",
                paddingBottom: "4px",
                position: "relative",
                bottom: "0px",
              }}
              type="button"
              onClick={onClickSaveEmail}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </Zoom>
  );
}

export default MailSend;
