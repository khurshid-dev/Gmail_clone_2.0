import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    sendMessageIsOpen: false,
    sideBarIsOpen: false,
    appsIsOpen: false,
    settingIsOpen: false,
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

    openSetting: (state) => {
      state.settingIsOpen = true;
    },
    closeSetting: (state) => {
      state.settingIsOpen = false;
    },
  },
});

export const {
  openSendMessage,
  closeSendMessage,
  openSideBar,
  closeSideBar,
  openApps,
  closeApps,
  openSetting,
  closeSetting,
} = modalSlice.actions;

export const selectMessageIsOpen = (state) => state.modal.sendMessageIsOpen;
export const selectSideBarIsOpen = (state) => state.modal.sideBarIsOpen;
export const selectAppsIsOpen = (state) => state.modal.appsIsOpen;
export const selectSettingIsOpen = (state) => state.modal.settingIsOpen;

export default modalSlice.reducer;
