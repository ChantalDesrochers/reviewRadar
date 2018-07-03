import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
class BottomRightNav extends Component {
    render() {
        return (
            <div>
                <h1 style={{marginTop:0}}>Hey im a nav panel</h1>
                <Button variant="contained" data-message="sentiment" onClick={() => this.props.clickHandler('sentiment')}>
                   Sentiments
                </Button>
                <Button variant="contained" data-message="keyword" onClick={() => this.props.clickHandler('keyword')}>
                   Keywords 
                </Button>
            </div>
        )
    }
}
export default BottomRightNav

