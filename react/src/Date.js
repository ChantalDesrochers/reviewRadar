import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star } from '@material-ui/icons'
import { Typography } from "@material-ui/core";
class Date extends Component {

    render() {

        return (
            <Typography variant="subheading" style={{fontStyle: 'italic', fontSize:'1.4em', lineHeight:'29px'}} >{this.props.date}</Typography>

        );
    }
}
export default Date