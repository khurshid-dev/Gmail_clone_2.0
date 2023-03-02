import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import mailsReducer from "./features/mailSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    mails: mailsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewareLogger(mailsReducer)),
});
