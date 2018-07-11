import React, { Component } from "react";
import { Link } from "@reach/router";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "typeface-roboto";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import yelpicon from "./yelp color mini.png";
import tripicon from "./tripadvisor mini.png";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from '@material-ui/core/Button';

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
const variables = {
  color1: "lightblue",
  color2: "#289aee",
  buttonPadding: "10 px",
  buttonHeight: 48
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: "15%",
  },
  textFieldURL: {
    width: "25%",
    height: "2.5em"
  },
  menu: {
    width: 200
  },
  header: {
    background: variables.color2,
    color: "white"
  },
  register: {
    background: variables.color2,
    color: "white",
    height: variables.buttonHeight,
    padding: variables.buttonPadding
  },
  login: {
    border: 0,
    color: "grey",
    height: variables.buttonHeight,
    padding: variables.buttonPadding
  },
  label: {
    textTransform: "capitalize"
  },
  button: {
    backgroundColor: "rgba(232, 196, 81, 0.78)",
    color: 'black',
    marginLeft: '43vw',
    textAlign: 'center',
    width: '277px',
    height: '100px',
    fontSize: '20px'
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  },
  background: {
    marginTop: '53px',
    marginLeft: '26px',
  }
};
class Request extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      url1: "",
      url2: "",
      url3: "",
      sent: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    if (this.state.sent === false) {
      fetch("http://localhost:3001/1", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(function(res) {
        return;
      });
    }
    this.setState({
      url1: "",
      url2: "",
      url3: "",
      sent: true
    });
  }

  render() {
    const submitPage = (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <TextField
            id="company"
            label="Company Name"
            style={styles.textField}
            value={this.state.company}
            onChange={this.handleChange("company")}
            margin="normal"
          />
          <br />
          <TextField
            id="email"
            label="Email"
            type="email"
            style={styles.textField}
            value={this.state.email}
            onChange={this.handleChange("email")}
            margin="normal"
          />
          <br />
          <TextField
            required
            id="url1"
            // label="Yelp URL"
            style={styles.textFieldURL}
            value={this.state.url1}
            onChange={this.handleChange("url1")}
            margin="normal"
            // fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={yelpicon} style={{ paddingBottom: "2vh" }} />
                </InputAdornment>
              )
            }}
          />
          <br />
          <TextField
            id="url2"
            // label="TripAdvisor URL"
            style={styles.textFieldURL}
            value={this.state.url2}
            onChange={this.handleChange("url2")}
            margin="normal"
            // fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <div>
                    <img src={tripicon} style={{ paddingBottom: "2vh" }} />
                  </div>
                </InputAdornment>
              )
            }}
          />
          <br />
          <button>Get Your Report!</button>
        </form>
      </div>
    );
    const thanksPage = (
      <div style={styles.background} >
        <Typography style={{textAlign: 'left', margin: 'auto'}} variant="title">Thank you for your request</Typography>
        <br />
        <Button variant="contained" style={styles.button}><Link style={styles.link} to="../report">Your report will be ready here</Link></Button>
      </div>
    );

    return (
      <div>
        <AppBar position="static" style={styles.header}>
          <Toolbar>
            <Typography variant="display2" color="inherit">
              ReviewRadar
            </Typography>
            {/* <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button> */}
          </Toolbar>
        </AppBar>
        {this.state.sent ? thanksPage : submitPage}
      </div>
    );
  }
}
export default Request;
