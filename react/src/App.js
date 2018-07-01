import React, { Component } from 'react';
import './App.css';
import Report from './Report.js'
import RequestForm from './RequestForm.js'
import Test from './testPage'
import { Router, Link } from "@reach/router"



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Review Radar</h1>

        <Link to="/">Login/Register</Link> |
        <Link to="request">Request Report</Link> |
        <Link to="report">Reports</Link> |
        <Link to="test">test</Link>
        </header>

        <Router>
          <Report path="report"/>
          <RequestForm path="request"/>
          <Test path="test" />
        </Router>
      </div>
    );
  }
}

export default App;
