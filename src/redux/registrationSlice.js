import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registrations: [],
};

const registrationSlice = createSlice({
  name: "registrations",
  initialState,

  reducers: {
    registerForEvent: (state, action) => {
      const alreadyRegistered = state.registrations.some(
        (registration) =>
          registration.userEmail === action.payload.userEmail &&
          registration.eventId === action.payload.eventId
      );

      if (!alreadyRegistered) {
        state.registrations.push({
          ...action.payload,
          id: Date.now(),
          status: "Confirmed",
        });
      }
    },

    cancelRegistration: (state, action) => {
      state.registrations = state.registrations.filter(
        (registration) => registration.id !== action.payload
      );
    },
  },
});

export const {
  registerForEvent,
  cancelRegistration,
} = registrationSlice.actions;

export default registrationSlice.reducer;