import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlantPage from "./components/PlantPage";

import Login from "./components/Login";

function App() {

  return (
    <Router>
      <div className="App">
      <Switch>
          <Route exact path="/plants" component={PlantPage} />
          <Route exact path="/" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
