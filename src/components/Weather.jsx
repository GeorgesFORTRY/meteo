import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function Weather({ lon, lat }) {
  const [weather, setWeather] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&lang=fr&appid=192b907c21dd36680504d4722a863901`
      )
      .then(({ data }) => {
        console.log(data);
        setWeather(data.current.weather[0]);
        setStats(data.current);
      });
  }, [lat, lon]);

  return (
    <>
      <div className="weather-box">
        <div className="weather-icon">image soleil</div>
        <div className="temp">{Math.round(stats.temp)}°C</div>
        <div className="weather">{weather.description}</div>
      </div>
      <div className="weather-details">
        <div className="temp-max">22°C</div>
        <div className="temp-min">15°C</div>
        <div className="wind">20 km/h</div>
        <div className="humidity">{stats.humidity}%</div>
        <div className="sunrise">Lever 7h42</div>
        <div className="sunset">Coucher 19h18</div>
      </div>
    </>
  );
}

Weather.propTypes = {
  lon: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
};
