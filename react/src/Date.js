import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star } from '@material-ui/icons'
class Date extends Component {

    render() {

        return (
            <div style={{fontStyle: 'italic', fontSize:'1.2rem', lineHeight:'29px'}} >{this.props.date}</div>

        );
    }
}
export default Date