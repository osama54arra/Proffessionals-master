import AXIOS from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const axios = AXIOS.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
  withCredentials: true,
});
