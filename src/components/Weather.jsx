import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

const SWeather = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;
  .weather-box {
    display: flex;
    align-items: center;
    .weather-icon {
      width: 300px;
    }
    .description {
      padding-left: 60px;
      .temp {
        font-size: 50px;
        font-weight: bold;
        margin: 10px;
      }
      .weather {
        font-size: 30px;
        padding-top: 30px;
      }
    }
  }
  .weather-details {
    display: flex;
    align-items: center;
    font-size: 27px;
    text-align: center;
    .elements {
      margin-right: 20px;
      .wind {
        margin: 10px;
      }
      .humidity {
        padding-top: 10px;
        margin: 10px;
      }
    }
    .sun {
      margin-left: 20px;
      .sunrise {
        margin: 10px;
      }
      .sunset {
        padding-top: 10px;
        margin: 10px;
      }
    }
  }
`;

export default function Weather({ lon, lat }) {
  const [weather, setWeather] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&lang=fr&appid=192b907c21dd36680504d4722a863901`
      )
      .then(({ data }) => {
        setWeather(data.current.weather[0]);
        setStats(data.current);
      });
  }, [lat, lon]);

  return (
    <SWeather>
      <div className="weather-box">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={`${weather.main}`}
        />
        <div className="description">
          <div className="temp">{Math.round(stats.temp)}°C</div>
          <div className="weather">{weather.description}</div>
        </div>
      </div>
      <div className="weather-details">
        <div className="elements">
          <p className="wind">Vitesse du vent</p>
          <p>{Math.round(stats.wind_speed)} km/h</p>
          <p className="humidity">Humidité</p>
          <p>{stats.humidity}%</p>
        </div>
        <div className="sun">
          <p className="sunrise">Lever du soleil</p>
          <p>
            {new Date(stats.sunrise * 1000).toLocaleTimeString().slice(0, 5)}
          </p>
          <p className="sunset">Coucher du soleil</p>
          <p>
            {new Date(stats.sunset * 1000).toLocaleTimeString().slice(0, 5)}
          </p>
        </div>
      </div>
    </SWeather>
  );
}

Weather.propTypes = {
  lon: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
};
