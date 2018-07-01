import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class BottomRightNav extends Component {
    render() {
        console.log('in bottom right', this.props);
        return (
            <div>
                <h1>Hey im a nav panel</h1>
                <Button variant="outlined" data-message="showSentiment" onClick={this.props.clickHandler}>
                    Sentiments
                </Button>
                <Button variant="outlined" data-message="showKeyword" onClick={this.props.clickHandler}>
                    Keywords
                </Button>
            </div>
        )
    }
}
export default BottomRightNav

