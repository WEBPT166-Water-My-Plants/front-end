import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Home from './components/Home';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';

import './App.css';
import { useSelector } from 'react-redux';
import UserPage from './components/UserPage';

function App() {
  const isLoggedOn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedOn);
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/plants" component={UserPage} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={RegisterForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
