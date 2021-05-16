import styled from 'styled-components';
import logo from '../assets/rainbow.png';

const SHeader = styled.div`
  font-size: 70px;
  .logo {
    position: relative;
    margin-left: 50px;
  }

  img {
    width: 400px;
    margin-top: -60px;
    margin-bottom: -100px;
  }
  p {
    position: absolute;
    top: 140px;
    left: 50px;
  }
`;

export default function Header() {
  return (
    <SHeader>
      <div className="logo">
        <img src={logo} alt="rainbow" />
        <p>Météo</p>
      </div>
    </SHeader>
  );
}
