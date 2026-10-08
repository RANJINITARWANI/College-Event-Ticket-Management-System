import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import eventReducer from "./eventSlice";
import registrationReducer from "./registrationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventReducer,
    registrations: registrationReducer,
  },
});