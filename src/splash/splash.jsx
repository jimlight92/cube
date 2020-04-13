import React from 'react'
import Menu from '../menu/menu'
import { Container } from '@material-ui/core'
import './splash.scss'

export default () => {
    return (
        <Container className="splash">
            <Menu />
        </Container>
    )
}