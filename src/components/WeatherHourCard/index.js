import React from "react";
import "./style.css";

export default function WeatherHourCard(props) {
  const weatherHourData = props.hour;
  const hour = weatherHourData.time.substring(11, 16);
  const celsius = props.celsius;

  return (
    <div className="WeatherHourCard">
      <p className="hour">{hour}</p>
      <div className="icon">
        <img src={weatherHourData.condition.icon} alt="weather icon" />
      </div>
      <div className="max-min-hour">
        {celsius ? (
          <div>
            <p>{weatherHourData.temp_c.toFixed()}°C</p>
          </div>
        ) : (
          <div>
            <p>{weatherHourData.temp_f.toFixed()}°F</p>
          </div>
        )}
      </div>
    </div>
  );
}
