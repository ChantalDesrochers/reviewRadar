import React, { Component } from "react";
import { Link } from "@reach/router";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "typeface-roboto";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import PaperTexture from "./textured-paper.png";
import AppBarTexture from "./app-bar-image.png";

/* Design wise you'll want to do the following:

Good typography. Clear fonts that express the business type (serifs for traditional, sans serifs for tech). Large header font size. Clear distinction in size between headers, subheaders and regular text (60,24,14 is an example)

Less is more. Keep your design neat and powerful. CUT OFF any extra flourishes. It should be squeaky clean.

AVOID white fonts on black backgrounds. Very unreadable.

Space the shit out of your elements. If it's crowded it spells cheap.

Be consistent with colors, spacings and fonts. Don't use 13px font size here, 14px font size there and 16 px font size elsewhere. Or a black here, a slightly blacker there and a slightly whitel elsewhere. You get the idea. Have a small set of fonts, colors and distances - use them everywhere like building blocks.

MARKETING WISE:

Header should be super, super visible. Big font size, clear black or dark color on white background.

Put your CTA as close to the top as possible so it's read first. Sprinkle CTA's throughout the landing page so the customer will alwasy have an option to buy.

Make it long. Long copy sells. Long landing page sells. */

class Request extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        email: '',
        url1: '',
        url2: '',
        url3: '',
        sent: false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state)

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
      
      this.setState({
        url1: '',
        url2: '',
        url3: '',
        sent: true
      })
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
        {/* <label className="form-text" htmlFor="second-url">Enter your second url</label>
        <input id="yelp-url" name="yelp-url" type="text" onChange={e => this.setState({url2: e.target.value})}/>
        <br/> <br/>
        <label className="form-text" htmlFor="third-url">Enter your third url</label>
        <input id="yelp-url" name="yelp-url" type="text" onChange={e => this.setState({url3: e.target.value})}/>
        <br/> <br/> */}

        <button>Get Your Report!</button>
      </form>)

    const thanksPage = (
      <div>
        <h2>Thank you for your request</h2>
        <br/>
        <Link to="../report">Your report will be ready here</Link>
      </div>
    )

      return this.state.sent ? thanksPage : submitPage ;
    }
  }
  export default Request
