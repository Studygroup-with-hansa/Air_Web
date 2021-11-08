import axios from "axios";
import { SERVER } from "config/config.json";

const CustomAxios = axios.create({
  baseURL: SERVER,
  headers: {
    Authorization: "Token" + localStorage.getItem("token"),
  },
});

export default CustomAxios;
