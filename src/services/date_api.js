import axios from "axios";

const date_api = axios.create({
  baseURL: "http://worldtimeapi.org/api/"
})

export default date_api;