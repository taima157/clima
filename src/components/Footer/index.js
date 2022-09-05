import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="content">
        <p>
          &copy; All rights reserved - Created by{" "}
          <a href="https://github.com/taima157" target={`_blank`}>
            {" "}
            Gustavo Taima
          </a>
        </p>
        <p>
          Credits API:{" "}
          <a
            href="https://www.weatherapi.com/"
            title="Weather API"
            target={`_blank`}
          >
            {" "}
            WeatherAPI.com
          </a>
        </p>
      </div>
    </div>
  );
}
