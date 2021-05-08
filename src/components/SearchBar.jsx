import { useState } from 'react';
import styled from 'styled-components';
import image from '../assets/searchicon.png';
import Location from './Location';

const SearchBox = styled.form`
  img {
    width: 20px;
    height: auto;
  }
`;

export default function SearchBar() {
  const [city, setCity] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <SearchBox className="search-box" onSubmit={handleChange}>
      <img src={image} alt="" />
      <input
        type="text"
        className="search-bar"
        placeholder="Tapez le nom de la ville..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {city !== null && <Location city={city} />}
    </SearchBox>
  );
}
