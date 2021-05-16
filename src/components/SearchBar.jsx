import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import image from '../assets/searchicon.png';

const SResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBox = styled.form`
  background-color: white;
  margin-top: 50px;
  width: 20vw;
  border-radius: 20px;
  display: flex;
  img {
    margin: 15px;
    width: 20px;
    height: auto;
  }
  input {
    border: none;
    outline-style: none;
    font-size: 20px;
  }
`;

export default function SearchBar() {
  const [city, setCity] = useState('');
  const history = useHistory();
  const handleCityChange = () => {
    history.push(`/location/${city}`);
  };

  return (
    <SResults>
      <SearchBox className="search-box" action="" onSubmit={handleCityChange}>
        <img src={image} alt="" />
        <input
          type="text"
          className="search-bar"
          placeholder="Tapez le nom de la ville..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </SearchBox>
    </SResults>
  );
}
