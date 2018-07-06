import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
class BottomRightNav extends Component {
    render() {
        return (
            <Button variant="contained" onClick={() => this.props.clickHandler(this.props.destination)}>
              {this.props.title}
            </Button>)
    }
}
export default BottomRightNav