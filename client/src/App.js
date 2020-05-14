import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/project";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/project" exact component={Project} />
      </div>
    );
  }
}

export default App;
