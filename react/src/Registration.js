import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
class Registration extends Component {

    constructor(props) {
        super(props);

    }

    render() {


        return (
            <div>
                <Grid container >
                    <Grid item sm>
                        Left
        </Grid>
                    <Grid item sm>
                    </Grid>
                    Right
            </Grid>
            </div>
            //     <div>
            //     <Paper  elevation={1}>
            //       <Typography variant="headline" component="h3">
            //         This is a sheet of paper.
            //       </Typography>
            //       <Typography component="p">
            //         Paper can be used to build surface or other elements for your application.
            //       </Typography>
            //     </Paper>
            //   </div>
        );
    }
}
export default Registration;