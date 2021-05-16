import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import './reset.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentDay from './components/CurrentDay';
import image from './assets/bluesky.jpg';
import Location from './components/Location';

const SApp = styled.div`
  background-image: url(${image});
  background-size: cover;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  color: #0f056b;
`;

function App() {
  return (
    <SApp className="App">
      <Header />
      <CurrentDay />
      <SearchBar />
      <Switch>
        <Route path="/location/:city">
          <Location />
        </Route>
      </Switch>
    </SApp>
  );
}

export default App;
