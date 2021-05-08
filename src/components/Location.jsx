import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Weather from './Weather';

export default function Location({ city }) {
  const [location, setLocation] = useState([]);
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiZ2ZvcnRyeSIsImEiOiJja29nNXJtb2Iwc3hnMm5yMG0xcjc3aXFvIn0.9alQs7ovV3PfhMzwk82NjA`
      )
      .then(({ data }) => {
        console.log(data.features[0]);
        setLocation(data.features[0].center);
        setCityName(data.features[0].place_name);
      });
  }, [city]);

  return (
    <div className="location">
      {cityName}
      <Weather lon={location[0]} lat={location[1]} />
    </div>
  );
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
};
