import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Lista from "./components/lista.component";
import Home from "./components/home.component";
import About from "./components/about.componetn";
import Nav from "./components/nav.component";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div> 
            <Nav/>
            <Route path="/" exact component={Home} />
            <Route path="/todo" component={Lista} />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
