import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import { StyledButton } from './Styles/StyledComponents';

const HomeStyle = styled.main`
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <div>
      <Header />
      <HomeStyle>
        <Link to="/login">
          <StyledButton>Login</StyledButton>
        </Link>
        <Link to="/join">
          <StyledButton>Join</StyledButton>
        </Link>
      </HomeStyle>
    </div>
  );
}

export default Home;
