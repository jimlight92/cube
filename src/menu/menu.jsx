import React from 'react'
import { Button, Grid } from '@material-ui/core'
import './menu.scss'

export default () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Button className="menu-button" size="large" variant="contained" color="primary">
                    Game One
                </Button>
            </Grid>

            <Grid item xs={12}>
                <Button className="menu-button" size="large" variant="contained" color="primary">
                    Game Two
                </Button>
            </Grid>

            <Grid item xs={12}>
                <Button className="menu-button" size="large" variant="contained" color="primary">
                    Game Three
                </Button>
            </Grid>
        </Grid>
    );
}