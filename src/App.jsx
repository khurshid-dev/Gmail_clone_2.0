import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Sidebar, Mail, EmailList, MailSend, GoogleAps } from "./components";

import { useSelector } from "react-redux";
import { selectSideBarIsOpen, selectMessageIsOpen, selectAppsIsOpen } from "./app/features/modalSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectMessageIsOpen);
  const sidebarIsOpen = useSelector(selectSideBarIsOpen);
  const appsIsOpen = useSelector(selectAppsIsOpen);
  return (
    <div className="App">
      <Header />

      <div className="App_body flex">
        <Sidebar />

        <div className={`App_body-left ${!sidebarIsOpen ? "w-[90vw]" : "w-[71vw]"}`}>
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
        {appsIsOpen && <GoogleAps />}
      </div>

      {/* Modals and functions */}
      {sendMessageIsOpen && <MailSend />}
    </div>
  );
}

export default App;
