import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import logo from './logo.svg';

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }  
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${appLogoSpin} infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`;

const App = (): JSX.Element => (
  <AppWrapper>
    <Header>
      <AppLogo src={logo} alt="logo" />
      <p>Edit src/App.tsx and save to reload.</p>
      <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </AppLink>
    </Header>
  </AppWrapper>
);

export { App };
