import React, { useState } from "react";
import WeatherNextCard from "../WeatherNextCard";
import { Link } from "react-router-dom";
import "./style.css";

export default function WeatherHomeCard(props) {
  const weatherData = props.data;
  const [celsius, setCelsius] = useState(true);

  return (
    <div className="WeatherHomeCard">
      <div className="card-city-today">
        <div className="temperature">
          <div className="city-condition">
            <div className="city-date">
              <h2>{weatherData.location.name}</h2>
              <p>{props.date}</p>
            </div>
            <div className="condition">
              <div className="condition-icon">
                <img src={weatherData.current.condition.icon} alt="" />
              </div>
              <p className="text-condition">{weatherData.current.condition.text}</p>
            </div>
          </div>
          <div className="temperature-value">
            <div className="current-minmax">
              <div className="current-temperature">
                {celsius ? (
                  <h2>{weatherData.current.temp_c.toFixed()}°C</h2>
                ) : (
                  <h2>{weatherData.current.temp_f.toFixed()}°F</h2>
                )}
              </div>
              <div className="min-max">
                {celsius ? (
                  <p>
                    <span>
                      {weatherData.forecast.forecastday[0].day.maxtemp_c.toFixed()}
                      °C
                    </span>{" "}
                    |{" "}
                    <span>
                      {weatherData.forecast.forecastday[0].day.mintemp_c.toFixed()}
                      °C
                    </span>
                  </p>
                ) : (
                  <p>
                    <span>
                      {weatherData.forecast.forecastday[0].day.maxtemp_f.toFixed()}
                      °F
                    </span>{" "}
                    |{" "}
                    <span>
                      {weatherData.forecast.forecastday[0].day.mintemp_f.toFixed()}
                      °F
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="feelslike">
            <p>
              Fellslike{" "}
              {celsius ? (
                <span>{weatherData.current.feelslike_c.toFixed()}°C</span>
              ) : (
                <span>{weatherData.current.feelslike_f.toFixed()}°F</span>
              )}
            </p>
          </div>
          <div className="more-datails-change">
            <Link to={`weather/${weatherData.location.name}/0`}>Details...</Link>
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
      <div className="card-city-next">
        {weatherData.forecast.forecastday.map((day, index) => {
          return (
            <WeatherNextCard
              key={index}
              celsius={celsius}
              week={props.week}
              day={day}
              weekNumber={index}
              cityName={weatherData.location.name}
            />
          );
        })}
      </div>
      <div className="back-image"></div>
    </div>
  );
}
