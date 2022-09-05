import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherHourCard from "../WeatherHourCard";

export default function WeatherDetailsCard(props) {
  const weatherData = props.data;
  const [celsius, setCelsius] = useState(true);
  const [uv, setUV] = useState("");


  useEffect(() => {
    function getUV() {
      if (weatherData.day.uv > 2) {
        setUV("Moderate");
      } else if (weatherData.day.uv > 5) {
        setUV("High");
      } else if (weatherData.day.uv > 7) {
        setUV("Very high");
      } else if (weatherData.day.uv > 10) {
        setUV("Extreme");
      } else {
        setUV("Low");
      }
    }
    getUV()
  })

  return (
    <div className="WeatherDetailsCard">
      <div className="card-city-today">
        <div className="temperature">
          <div className="city-condition">
            <div className="city-date">
              <h1>{props.cityName}</h1>
            </div>
            <div className="condition">
              <div className="condition-icon">
                <img src={weatherData.day.condition.icon} alt="" />
              </div>
              <p>{weatherData.day.condition.text}</p>
            </div>
          </div>
          <div className="temperature-value-details">
            <div className="date-change">
              <div className="date-minmax">
                <div className="date">
                  <h2>{weatherData.date}</h2>
                </div>
                <div className="min-max-details">
                  {celsius ? (
                    <p>
                      <span>
                        {`Max temp: ${weatherData.day.maxtemp_c.toFixed()}°C`}
                      </span>{" "}
                      <span>
                        {`Min temp: ${weatherData.day.mintemp_c.toFixed()}°C`}
                      </span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        {`Max temp: ${weatherData.day.maxtemp_f.toFixed()}°F`}
                      </span>{" "}
                      <span>
                        {`Min temp: ${weatherData.day.mintemp_f.toFixed()}°F`}
                      </span>
                    </p>
                  )}
                </div>
              </div>
              <div className="change-unit">
                <button
                  onClick={() => {
                    celsius ? setCelsius(false) : setCelsius(true);
                  }}
                >
                  {celsius ? "°F" : "°C"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="information">
        <div className="details-field">
          <div className="detail-item">
            <p>Humidity: <span>{weatherData.day.avghumidity}%</span></p>
            <p>UV: <span>{uv}</span></p>
          </div>
          <div className="detail-item">
            <p>Max wind: <span>{weatherData.day.maxwind_mph}MpH</span></p>
            <p>Max wind: <span>{weatherData.day.maxwind_kph}KpH</span></p>
          </div>
          <div className="detail-item">
            <p>Sunrise: <span>{weatherData.astro.sunrise}</span></p>
            <p>Sunset: <span>{weatherData.astro.sunset}</span></p>
          </div>
        </div>
      </div>
      </div>
      <div className="weather-per-hour">
        {weatherData.hour.map((hourData, index) => {
          return <WeatherHourCard key={index} hour={hourData} celsius={celsius}/>
        })}
      </div>
      <div className="back-image-detail"></div>
    </div>
  );
}
