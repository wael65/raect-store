import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://simple-backend-523x.onrender.com",
});

export default baseUrl;
