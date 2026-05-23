import axios from "axios";

const baseUrl = "https://leadsoftwares-backend-production.up.railway.app/";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;