import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function WeatherNextCard(props) {
  const nextDay = props.day;
  const celsius = props.celsius;
  const [dayWeek, setDayWeek] = useState();
  const weeks = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  useEffect(() => {
    function changeWeek() {
      weeks.forEach((day, index) => {
        if (day === props.week) {
          if (index + props.weekNumber === 7) {
            setDayWeek(weeks[0]);
            return;
          }
          if (index + props.weekNumber === 8) {
            setDayWeek(weeks[index - 1]);
            return;
          }
          setDayWeek(weeks[index + props.weekNumber]);
        }
      });
    }

    changeWeek();
  });

  return (
    <div className="WeatherNextCard">
      <Link
        className="link-details"
        to={`weather/${props.cityName}/${props.weekNumber}`}
      >
        <p className="week">{dayWeek}</p>
        <div className="icon">
          <img src={nextDay.day.condition.icon} alt="weather icon" />
        </div>
        <div className="max-min">
          {celsius ? (
            <div>
              <p>{nextDay.day.maxtemp_c.toFixed()}°C</p>
              <span>{nextDay.day.mintemp_c.toFixed()}°C</span>
            </div>
          ) : (
            <div>
              <p>{nextDay.day.maxtemp_f.toFixed()}°F</p>
              <span>{nextDay.day.mintemp_f.toFixed()}°F</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
