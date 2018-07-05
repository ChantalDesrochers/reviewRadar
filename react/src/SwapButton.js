import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star, SwapHoriz } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

class SwapButton extends Component {


    constructor(props) {
        super(props);
        this.state = {
            rating:this.props.rating
        };
    }
    render() {
        return (
            <div>
          <Button variant="fab" color="primary" className="swap-button">
        <SwapHoriz />
      </Button>
          </div>
        );
    }
}
export default SwapButton
