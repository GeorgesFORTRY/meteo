import styled from 'styled-components';
import image from '../assets/searchicon.png';

const SearchBox = styled.div`
  img {
    width: 20px;
    height: auto;
  }
`;

export default function SearchBar() {
  return (
    <SearchBox className="search-box">
      <img src={image} alt="" />
      <input
        type="text"
        className="search-bar"
        placeholder="Tapez le nom de la ville..."
      />
    </SearchBox>
  );
}
