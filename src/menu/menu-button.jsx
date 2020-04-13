import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default ({ to, children }) => (
    <Button className="menu-button" size="large" variant="contained" color="primary" component={Link} to={to}>
        {children}
    </Button>
)