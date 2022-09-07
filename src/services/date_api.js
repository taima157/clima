import axios from "axios";

const date_api = axios.create({
  baseURL: "https://worldtimeapi.org/api/"
})

export default date_api;