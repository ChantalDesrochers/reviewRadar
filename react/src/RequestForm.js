import React, { Component } from "react";

class Request extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        email: '',
        url: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      // console.log(this.state)

      fetch('http://localhost:3001/1', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      }).then(function(res) {
        return res.json()
      })
      .then(function(jsonData) {
        console.log(jsonData)
      })
    }
  
    render() {
      return (
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form-text" htmlFor="company">Company Name</label>
          <input id="company" name="company" type="text" onChange={e => this.setState({name: e.target.value})}/>
        <br/> <br/>
          <label className="form-text" htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" onChange={e => this.setState({email: e.target.value})}/>
          <br/> <br/>
          <label className="form-text" htmlFor="yelp-url">Enter your yelp page</label>
          <input id="yelp-url" name="yelp-url" type="text" onChange={e => this.setState({url: e.target.value})}/>
          <br/> <br/>
          <button>Get Your Report!</button>
        </form>
      );
    }
  }
  export default Request
