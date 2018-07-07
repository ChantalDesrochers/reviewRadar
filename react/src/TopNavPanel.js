import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
class TopNavPanel extends Component {
    render() {
        return (
            <Button style={{backgroundColor: '#85dabd', boxShadow: '0px 0px'}} variant="contained" onClick={() => this.props.clickHandler(this.props.destination)} >
              {this.props.title}
            </Button>)
    }
}
export default TopNavPanel