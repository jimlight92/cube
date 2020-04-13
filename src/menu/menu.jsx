import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import './menu.scss'

export default () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Button className="menu-button" size="large" variant="contained" color="primary" component={Link} to="/1">
                    Game One
                </Button>
            </Grid>

            <Grid item xs={12}>
                <Button className="menu-button" size="large" variant="contained" color="primary" component={Link} to="/2">
                    Game Two
                </Button>
            </Grid>

            <Grid item xs={12}>
                <Button className="menu-button" size="large" variant="contained" color="primary" component={Link} to="/3">
                    Game Three
                </Button>
            </Grid>
        </Grid>
    );
}