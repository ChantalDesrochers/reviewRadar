import React, { Component } from "react";
import Button from '@material-ui/core/Button';
// import {Tabs, Tab} from '@material-ui/Tabs';
// import TabsExampleControlled from './tabNavigation.js';

class BottomRightNav extends Component {
    render() {
        return (
            <div>
                <h1 style={{marginTop:0}}>Hey im a nav panel</h1>
                <Button variant="outlined" data-message="sentiment" onClick={this.props.clickHandler}>
                    Sentiments
                </Button>
                <Button variant="outlined" data-message="keyword" onClick={this.props.clickHandler}>
                    Keywords
                </Button>
                {/*<TabsExampleControlled/>*/}
            </div>
        )
    }
}
export default BottomRightNav

