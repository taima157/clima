import React, { useState, useEffect } from "react";
import WeatherHomeCard from "../../components/WeatherHomeCard";
import weather_api from "../../services/weather_api";
import date_api from "../../services/date_api";
import "./style.css";

export default function Home() {
  const [city, setCity] = useState("Sao Paulo");
  const [searchCityValue, setSearchCityValue] = useState("");
  const [card, setCard] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const key = "e8a403fa630d442d8bf183832220209";

  useEffect(() => {
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    const weeks = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    async function getWeatherData() {
      try {
        const response = await weather_api.get(
          `forecast.json?key=${key}&q=${city}&days=7&aqi=no&alerts=no`
        );
        const data = await response.data;
        const timezone = data.location.tz_id;
        let hour = data.location.localtime.substring(10, 16);
        const responseDate = await date_api.get(`timezone/${timezone}`);
        const dataDate = await responseDate.data;
        let day = Number(dataDate.datetime.substring(8, 10));
        let month = months[Number(dataDate.datetime.substring(5, 7)) - 1];
        let week = weeks[dataDate.day_of_week];
        let date = `${week}, ${month} ${day} - ${hour}`;
        setLoading(false);
        setCard(<WeatherHomeCard data={data} date={date} week={week} />);
        setError("");
      } catch (error) {
        setError("Cidade não encontrada.");
      }
      setSearchCityValue("");
    }

    getWeatherData();
  }, [city]);

  return (
    <div className="Home">
      <div className="input-status">
        <div className="search-input">
          <input
            type="text"
            value={searchCityValue}
            onChange={(e) => setSearchCityValue(e.target.value)}
            placeholder="Search a city"
          />
          <button onClick={() => setCity(searchCityValue)}>Search</button>
        </div>
        <p className="error">{error}</p>
      </div>
      {loading ? <p className="loading">loading...</p> : card}
    </div>
  );
}
