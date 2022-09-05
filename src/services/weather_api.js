import axios from "axios";

const weather_api = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
});

export default weather_api;
