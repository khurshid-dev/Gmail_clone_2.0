import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    sendMessageIsOpen: false,
    sideBarIsOpen: false,
    appsIsOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },

    openSideBar: (state) => {
      state.sideBarIsOpen = true;
    },
    closeSideBar: (state) => {
      state.sideBarIsOpen = false;
    },

    openApps: (state) => {
      state.appsIsOpen = true;
    },
    closeApps: (state) => {
      state.appsIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, openSideBar, closeSideBar, openApps, closeApps } = modalSlice.actions;

export const selectMessageIsOpen = (state) => state.modal.sendMessageIsOpen;
export const selectSideBarIsOpen = (state) => state.modal.sideBarIsOpen;
export const selectAppsIsOpen = (state) => state.modal.appsIsOpen;

export default modalSlice.reducer;
