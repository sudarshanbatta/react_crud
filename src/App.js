import React from "react";
import "./App.css";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import EditUser from "./Components/Pages/EditUser";
import User from "./Components/Pages/User";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/edit/:id" component={EditUser}/>
          <Route exact path="/user/:id" component={User}/>
          <Route component={NotFound}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
