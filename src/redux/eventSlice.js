import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    {
      id: 1,
      title: "Tech Fest 2026",
      category: "Technology",
      date: "25 AUG",
      fullDate: "25 August 2026",
      time: "10:00 AM",
      venue: "Main Auditorium",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
      description:
        "A full day of coding, robotics, innovation and everything tech.",
      color: "from-violet-500 to-indigo-600",
    },

    {
      id: 2,
      title: "Cultural Night",
      category: "Cultural",
      date: "30 AUG",
      fullDate: "30 August 2026",
      time: "6:00 PM",
      venue: "College Ground",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
      description:
        "Music, dance, drama and unforgettable performances under the lights.",
      color: "from-pink-500 to-rose-600",
    },

    {
      id: 3,
      title: "Inter College Cricket",
      category: "Sports",
      date: "05 SEP",
      fullDate: "5 September 2026",
      time: "9:00 AM",
      venue: "College Sports Ground",
      price: 80,
      image:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80",
      description:
        "Bring your squad and cheer for your college at the biggest cricket clash.",
      color: "from-emerald-500 to-green-600",
    },

    {
      id: 4,
      title: "Photography Workshop",
      category: "Workshop",
      date: "10 SEP",
      fullDate: "10 September 2026",
      time: "11:00 AM",
      venue: "Seminar Hall",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
      description:
        "Learn photography, composition and creative storytelling from experts.",
      color: "from-orange-400 to-amber-600",
    },

    {
      id: 5,
      title: "Startup Summit",
      category: "Business",
      date: "15 SEP",
      fullDate: "15 September 2026",
      time: "10:30 AM",
      venue: "Conference Hall",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
      description:
        "Meet founders, creators and entrepreneurs building the next big thing.",
      color: "from-cyan-500 to-blue-600",
    },

    {
      id: 6,
      title: "Music Festival",
      category: "Cultural",
      date: "20 SEP",
      fullDate: "20 September 2026",
      time: "5:00 PM",
      venue: "College Ground",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
      description:
        "Live music, student bands and an evening made for good vibes.",
      color: "from-fuchsia-500 to-purple-600",
    },
  ],
};

const eventSlice = createSlice({
  name: "events",

  initialState,

  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },

    deleteEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
  },
});

export const { addEvent, deleteEvent } = eventSlice.actions;

export default eventSlice.reducer;