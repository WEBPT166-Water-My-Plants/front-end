import React, { useState } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  const [login, setLogin] = useState({
    username: "",
    password: "",
  })
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('./api/login', login)
      .then(res => {
        console.log(res)
        window.localStorage.setItem('token', res.data.payload)
        history.push("/plants");
      })
      .catch(err => console.log(err.response))
  }

  const handleChange = e => {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  return (
    <>
      <h1>Water My Plants</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={props.username}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={props.password}
            onChange={handleChange}
          />
          <button>LOGIN</button>
        </form>
      </div>
    </>
  );
};

export default Login;