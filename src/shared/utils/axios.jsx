import axios from "axios";

const user = sessionStorage.getItem("userData");
const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Replace with your API base URL
  headers: {
    "Content-Type": "application/json", // Default headers
    Authorization: `Bearer ${user}`, // Authorization header
  },
});

export default customAxios;
