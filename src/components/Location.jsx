import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Weather from './Weather';

const SLocation = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SCity = styled.p`
  font-size: 35px;
`;

export default function Location() {
  const [location, setLocation] = useState([]);
  const [cityName, setCityName] = useState('');
  const { city } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiZ2ZvcnRyeSIsImEiOiJja29nNXJtb2Iwc3hnMm5yMG0xcjc3aXFvIn0.9alQs7ovV3PfhMzwk82NjA`
      )
      .then(({ data }) => {
        setLocation(data.features[0].center);
        setCityName(data.features[0].place_name);
      });
  }, [city]);

  return (
    <SLocation>
      <SCity>{cityName}</SCity>
      <Weather lon={location[0]} lat={location[1]} />
    </SLocation>
  );
}
