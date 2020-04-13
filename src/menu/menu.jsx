import React from 'react'
import { Grid } from '@material-ui/core'
import MenuButton from './menu-button'
import './menu.scss'

export default () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MenuButton to="/square">
                    Square
                </MenuButton>
            </Grid>
        </Grid>
    );
}