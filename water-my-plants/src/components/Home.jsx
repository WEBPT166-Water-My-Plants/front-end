import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Header from './Header';
import { StyledButton } from './Styles/StyledComponents';

const HomeStyle = styled.main`
  width: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: white;
  margin: 0% 35% 0% 35%;
  border-radius: 5%;
  border: 3px solid black;
  background: rgba(255, 165, 0, 0.73);

  p{
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 3px black;
    font-family: 'Merienda', cursive;
  }
`;

function Home() {
  useEffect(() => {
    if (window.localStorage.getItem('token') !== null) {
      axiosWithAuth()
        .get('/api/auth/users')
        .then((res) => {
          console.log(res);
        });
    }
  }, []);
  return (
    <div>
      <Header />
      <HomeStyle>
        <p>Can't remember when or how <br></br>often to water your plants?</p>
        <p>Become a member today of our exclusive App!</p>
        <Link to="/join">
          <StyledButton>Join</StyledButton>
        </Link>
        <p>Already a Member?</p>
        <Link to="/login">
          <StyledButton>Login</StyledButton>
        </Link>
      </HomeStyle>
    </div>
  );
}

export default Home;
