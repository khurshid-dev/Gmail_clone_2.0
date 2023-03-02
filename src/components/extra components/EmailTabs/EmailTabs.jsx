import React from "react";
import "./EmailTabs.css";

function EmailTabs({ Icon, color, title, selected }) {
  return (
    <div
      className={`email-tabs ${selected && "email-tabs-selected"}`}
      style={{ borderBottom: `3px solid ${color}`, color: `${selected && color}` }}
    >
      <Icon />
      <h4 className="text-xs font-medium tracking-tight">{title}</h4>
    </div>
  );
}

export default EmailTabs;
