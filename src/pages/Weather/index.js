import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import weather_api from "../../services/weather_api";
import WeatherDetailsCard from "../../components/WeatherDetailsCard";
import "./style.css";

export default function Weather() {
  const params = useParams();
  const navigate = useNavigate();
  const cityName = params.cityName;
  const positionWeek = params.positionWeek;
  const [detailsCard, setDetailsCard] = useState();
  const key = "e8a403fa630d442d8bf183832220209";

  useEffect(() => {
    async function getWeatherData() {
      try {
        const response = await weather_api.get(
          `forecast.json?key=${key}&q=${cityName}&days=7&aqi=no&alerts=no`
        );
        const data = await response.data.forecast.forecastday[positionWeek];
        setDetailsCard(<WeatherDetailsCard data={data} cityName={cityName} />);
        console.log(data);
        if (positionWeek > 6) {
          navigate("/");
          return;
        }
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }

    getWeatherData();
  }, [cityName, navigate, positionWeek]);

  return (
    <div className="Weather">
      {detailsCard}
      <div className="button-home">
        <Link to="/">back to home</Link>
      </div>
    </div>
  );
}
