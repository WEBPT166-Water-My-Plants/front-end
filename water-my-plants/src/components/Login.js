import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Header from './Header';
import {
  StyledButton,
  StyledForm,
  StyledTextInput,
} from './Styles/StyledComponents';
import styled from 'styled-components';
import { setIsLoggedOn, updateUserWithUsername } from '../redux/actions';
import { useDispatch } from 'react-redux';

const LoginStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .loginForm {
    flex-basis: 100%;
  }
`;

const Login = (props) => {
  // make a post request to retrieve a token from the api
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/auth/login', login)
      .then((res) => {
        dispatch(setIsLoggedOn());
        window.localStorage.setItem('token', res.data.token);
        updateUserWithUsername(dispatch, login.username);
        history.push('/plants');
      })
      .catch((err) => console.log(err.response));
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div className="homePage">
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
            <StyledButton onClick={handleSubmit}>LOGIN</StyledButton>
          </form>
        </StyledForm>
      </LoginStyles>
    </div>
  );
};

export default Login;
