
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PlantPage from "./components/PlantPage";


import Home from './components/Home';
import Login from './components/Login';
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <PrivateRoute exact path="/plants" component={PlantPage} />
          <Route exact path="/" component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/join' component={RegisterForm} />
          
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
