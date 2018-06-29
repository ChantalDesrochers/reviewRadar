import React, { Component } from "react";

class Request extends Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('/api/form-submit-url', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form-text" htmlFor="company">Company Name</label>
          <input id="company" name="company" type="text" />
        <br/> <br/>
          <label className="form-text" htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" />
          <br/> <br/>
          <label className="form-text" htmlFor="yelp-url">Enter your yelp page</label>
          <input id="yelp-url" name="yelp-url" type="text" />
          <br/> <br/>
          <button>Get Your Report!</button>
        </form>
      );
    }
  }
  export default Request