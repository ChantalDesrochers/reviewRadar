import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star } from '@material-ui/icons'
class Date extends Component {

    render() {

        return (
            <Paper style={{lineHeight:'29px'}} >{this.props.date}</Paper>

        );
    }
}
export default Date