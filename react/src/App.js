import React, { Component } from 'react';
import './App.css';
import Report from './Report.js'
import { Router, Link } from "@reach/router"



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Project Title</h1>

        <Link to="/">Login</Link> |
        <Link to="/">Registration</Link> |
        <Link to="report">Reports</Link>
        </header>

        <Router>
          <Report path="report"/>
        </Router>
      </div>
    );
  }
}

export default App;
