import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navb from './Components/Navbar';
import PropertyCard from './Components/PropertyCard';
import PostProperty from './Components/PostProperty';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navb />
        <Switch>
          <Route exact path="/">
            <PropertyCard />
          </Route>
          <Route exact path="/postProperty">
            <PostProperty />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
