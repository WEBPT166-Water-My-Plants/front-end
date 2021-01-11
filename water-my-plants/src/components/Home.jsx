import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Header from './Header';
import { StyledButton } from './Styles/StyledComponents';

const HomeStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 3px solid black;
  // background: rgba(255, 165, 0, 0.73);

  .box-container {
    width: 33rem;
    min-height: 25rem;
    box-shadow: 0 0 0.8rem 0.2rem rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    overflow: hidden;
    padding: 1em;
  }

  .box-container:before {
    content: '';
    background: inherit;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset 0 0 0 200px rgba(255, 165, 0, 0.6);
    backdrop-filter: blur(0.1em);
    filter: blur(5px);
  }

  .box-container .inside {
    padding-bottom: 2em;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    position: absolute;
    top: 1.5rem;
    bottom: 0;
    left: 0;
    right: 0;
  }

  p,
  button {
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-shadow: 0px 1px 1px rgba(255, 255, 255, 1);
    font-family: 'Merienda', cursive;
  }

  button {
    color: white;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 1);
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
    <div className="homePage">
      <Header />
      <HomeStyle>
        <div className="box-container">
          <div className="inside">
            <p>
              Can't remember when or how <br></br>often to water your plants?
            </p>
            <p>Become a member today of our exclusive App!</p>
            <Link to="/join">
              <StyledButton>Join</StyledButton>
            </Link>
            <p>Already a Member?</p>
            <div>
              <Link to="/login">
                <StyledButton>Login</StyledButton>
              </Link>
              <Link to="/join">
                <StyledButton>Join</StyledButton>
              </Link>
            </div>
          </div>
        </div>
      </HomeStyle>
    </div>
  );
}

export default Home;
