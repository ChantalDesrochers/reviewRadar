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
      const data = (event.target);
      const data2 = (event.target.name);
      // const data = new FormData(event.target);
      console.log(data)
      console.log(this.state)

      fetch('http://localhost:3001/1', {
        method: 'POST',
        body: this.state,
      });
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
