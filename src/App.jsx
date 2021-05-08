import styled from 'styled-components';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import image from './assets/bluesky.jpg';

const SApp = styled.div`
  background-image: url(${image});
  background-size: cover;
  min-height: 100vh;
`;

function App() {
  return (
    <SApp className="App">
      <Header />
      <SearchBar />
      <Results />
    </SApp>
  );
}

export default App;
