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
        console.log(data.current);
        setWeather(data.current.weather[0]);
        setStats(data.current);
      });
  }, [lat, lon]);

  return (
    <>
      <div className="weather-box">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={`${weather.main}`}
        />
        <div className="temp">{Math.round(stats.temp)}°C</div>
        <div className="weather">{weather.description}</div>
      </div>
      <div className="weather-details">
        <div className="wind">
          Vitesse du vent {Math.round(stats.wind_speed)} km/h
        </div>
        <div className="humidity">Humidité {stats.humidity}%</div>
        <div className="sunrise">
          Lever du soleil{' '}
          {new Date(stats.sunrise * 1000).toLocaleTimeString().slice(0, 5)}
        </div>
        <div className="sunset">
          Coucher du soleil{' '}
          {new Date(stats.sunset * 1000).toLocaleTimeString().slice(0, 5)}
        </div>
      </div>
    </>
  );
}

Weather.propTypes = {
  lon: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
};
