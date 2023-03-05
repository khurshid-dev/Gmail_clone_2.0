import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Sidebar, Mail, EmailList, MailSend, GoogleAps, SettingsHead } from "./components";

import { useSelector } from "react-redux";
import {
  selectSideBarIsOpen,
  selectMessageIsOpen,
  selectAppsIsOpen,
  selectSettingIsOpen,
} from "./app/features/modalSlice";
import { selectAllMail } from "./app/features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectMessageIsOpen);
  const sidebarIsOpen = useSelector(selectSideBarIsOpen);
  const appsIsOpen = useSelector(selectAppsIsOpen);
  const settingIsOpen = useSelector(selectSettingIsOpen);

  const [search, setSearch] = useState("");
  const [mailFilt, setMailFilt] = useState([]);
  const emails = useSelector(selectAllMail);

  useEffect(() => {
    const filterGmails = emails.filter(
      (email) =>
        email.title.toLowerCase().includes(search.toLowerCase()) ||
        email.subject.toLowerCase().includes(search.toLowerCase()) ||
        email.description.toLowerCase().includes(search.toLowerCase())
    );
    setMailFilt(filterGmails);
  }, [emails, search]);

  return (
    <div className="App">
      <Header setSearch={setSearch} />

      <div className="App_body flex">
        <Sidebar />

        <div className={`App_body-left ${!sidebarIsOpen ? "w-[90vw]" : "w-[71vw]"}`}>
          <Routes>
            <Route path="/mail/:id" element={<Mail />} />
            <Route path="/" element={<EmailList mailFilt={mailFilt} />} />
          </Routes>
        </div>

        {/* Modals and functions */}
        {appsIsOpen && <GoogleAps />}
        {/* {settingIsOpen && <SettingsHead />} */}
      </div>

      {sendMessageIsOpen && <MailSend />}
    </div>
  );
}

export default App;
