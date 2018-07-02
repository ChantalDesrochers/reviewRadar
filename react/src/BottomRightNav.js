import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class BottomRightNav extends Component {
    render() {
        return (
            <div>
                <h1>Hey im a nav panel</h1>
                <Button variant="outlined" data-message="sentiment" onClick={this.props.clickHandler}>
                    Sentiments
                </Button>
                <Button variant="outlined" data-message="keyword" onClick={this.props.clickHandler}>
                    Keywords
                </Button>
            </div>
        )
    }
}
export default BottomRightNav

