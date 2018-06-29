import React, { Component } from "react";

class Request extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        email: '',
        url1: '',
        url2: '',
        sent: false
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
      })
      .then(function(res) {
        return
      })
      
      this.setState({sent: true})

    }
  
    render() {
      const submitPage = (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form-text" htmlFor="company">Company Name</label>
        <input id="company" name="company" type="text" onChange={e => this.setState({name: e.target.value})}/>
        <br/> <br/>
        <label className="form-text" htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" onChange={e => this.setState({email: e.target.value})}/>
        <br/> <br/>
        <label className="form-text" htmlFor="yelp-url">Enter your yelp page</label>
        <input id="yelp-url" name="yelp-url" type="text" onChange={e => this.setState({url1: e.target.value})}/>
        <br/> <br/>
        <label className="form-text" htmlFor="second-url">Enter your second url</label>
        <input id="yelp-url" name="yelp-url" type="text" onChange={e => this.setState({url2: e.target.value})}/>
        <br/> <br/>
        <button>Get Your Report!</button>
      </form>)

    const thanksPage = (
      <div>
        <h2>Thank you for your request</h2>
      </div>
    )

      return this.state.sent ? thanksPage : submitPage ;
    }
  }
  export default Request
