import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Header from './Header';
import { StyledForm, StyledTextInput } from './Styles/StyledComponents';
import styled from 'styled-components';

const LoginStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .loginForm {
    flex-basis: 50%;
  }
`;

const Login = (props) => {
  // make a post request to retrieve a token from the api
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/auth/login', login)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem('token', res.data.token);
        history.push('/plants');
      })
      .catch((err) => console.log(err.response));
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />

      <LoginStyles>
        <StyledForm className="loginForm">
          <form onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <StyledTextInput>
              <label htmlFor="loginUsername">Username</label>
              <input
                type="text"
                name="username"
                id="loginUsername"
                placeholder="Username"
                value={props.username}
                onChange={handleChange}
              />
            </StyledTextInput>
            <StyledTextInput>
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                name="password"
                id="loginPassword"
                placeholder="Password"
                value={props.password}
                onChange={handleChange}
              />
            </StyledTextInput>
            <button>LOGIN</button>
          </form>
        </StyledForm>
      </LoginStyles>
    </>
  );
};

export default Login;
