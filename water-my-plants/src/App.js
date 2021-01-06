import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PlantPage from './components/PlantPage';

import Home from './components/Home';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/plants" component={PlantPage} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={RegisterForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
