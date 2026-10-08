import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getEvents = () => API.get("/events");

export const createEvent = (event) => API.post("/events", event);

export const updateEvent = (id, event) =>
  API.put(`/events/${id}`, event);

export const deleteEvent = (id) =>
  API.delete(`/events/${id}`);