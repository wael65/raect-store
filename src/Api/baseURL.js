import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://simple-backend-523x.onrender.com",
  // baseURL: "http://127.0.0.1:8000",
});

export default baseUrl;
