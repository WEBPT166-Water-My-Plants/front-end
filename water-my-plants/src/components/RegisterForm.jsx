import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { StyledForm, StyledTextInput } from './Styles/StyledComponents';
import plantImg from '../utils/waterplants.jpg';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { setIsLoggedOn, updateUserWithUsername } from '../redux/actions';

export default function RegisterForm() {
  //states
  const [formState, setFormState] = useState({
    username: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    phone: '',
    password: '',
  });

  const [subBtn, setSubBtn] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup.object().shape({
    username: yup
      .string()
      .trim()
      .required('A username is required.')
      .min(4, 'Username must be at lease 4 characters long')
      .max(20, 'Username cannot exceed 20 characters'),

    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),

    password: yup
      .string()
      .trim()
      .required('A username is required.')
      .min(6, 'Username must be at lease 6 characters long')
      .max(12, 'Password cannot exceed 20 characters'),
  });

  const validation = (event) => {
    yup
      .reach(schema, event.target.name)
      .validate(event.target.value)
      .then(() => {
        setErrors({ ...errors, [event.target.name]: '' });
      })
      .catch((err) => {
        setErrors({ ...errors, [event.target.name]: err.errors[0] });
      });
  };

  useEffect(() => {
    schema.isValid(formState).then((valid) => {
      setSubBtn(!valid);
    });
  }, [formState]);

  const inputChange = (event) => {
    const data = {
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    };
    validation(event);
    setFormState(data);
  };

  const submitForm = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post('https://plant-tender.herokuapp.com/api/auth/register', formState)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response));
    axiosWithAuth()
      .post('https://plant-tender.herokuapp.com/api/auth/login', {
        username: formState.username,
        password: formState.password,
      })
      .then((res) => {
        window.localStorage.setItem('token', res.data.token);
        dispatch(setIsLoggedOn());
        updateUserWithUsername(dispatch, formState.username);
        setFormState({
          username: '',
          phone: '',
          password: '',
        });
        history.push('/plants');
      });
  };

  return (
    <div>
      <Header />

      <section className="form-container">
        <StyledForm>
          <form onSubmit={submitForm}>
            <div>
              <h1>Water My Plants</h1>
              <img src={plantImg} alt="registerImage" />
            </div>
            <div className="user-name">
              <h3>Enter your Username</h3>
              <StyledTextInput>
                <label htmlFor="name">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    id="username"
                    value={formState.username}
                    onChange={inputChange}
                  />
                </label>
              </StyledTextInput>
              <p>{errors.username}</p>
            </div>
            <div className="user-number">
              <h3>Enter your Phonenumber</h3>
              <StyledTextInput>
                <label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="xxx-xxx-xxxx"
                    id="phone"
                    value={formState.phone}
                    onChange={inputChange}
                  />
                </label>
              </StyledTextInput>
              <p>{errors.phone}</p>
            </div>
            <div className="user-password">
              <h3>Enter a Password</h3>
              <StyledTextInput>
                <label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    id="password"
                    value={formState.password}
                    onChange={inputChange}
                  />
                </label>
              </StyledTextInput>
              <p>{errors.password}</p>
            </div>
            <button disabled={subBtn} type="submitBtn">
              Register
            </button>
          </form>
        </StyledForm>
      </section>
    </div>
  );
}
