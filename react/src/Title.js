import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'


class Title extends Component {

    render() {

        return (
            <h2>{this.props.displayTitle}</h2>
        );
    }
}
export default Title