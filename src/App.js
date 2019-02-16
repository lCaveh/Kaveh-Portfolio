import React, { Component } from 'react';
import './App.css';
import '../node_modules/uikit/dist/css/uikit.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import JavascriptProjects from "./components/JavascriptProjects";
import AngularProjects from "./components/AngularProjects";
import ReactProjects from "./components/ReactProjects";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/JavascriptProjects" component={JavascriptProjects} />
            <Route path="/AngularProjects" component={AngularProjects} />
            <Route path="/ReactProjects" component={ReactProjects} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
