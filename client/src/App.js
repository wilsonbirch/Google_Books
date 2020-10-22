import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/pages/Home";
import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
    return (
      <Router>
        <div>
        <Nav />
        <Switch>
        <Route exact path = {['/']}>
            <Home />
          </Route>
          <Route exact path = {['/saved']}>
            <Saved />
          </Route>
          <Route exact path = {['/search']}>
            <Search />
          </Route>
        </Switch>
        </div>
      </Router>
    );
}

export default App;
