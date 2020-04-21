import React from 'react'
import Routes from './routes/routes'
import { Container } from '@material-ui/core'

export default () => (
    <>
        <Container style={{ height: '100%' }}>
            <Routes />
        </Container>
    </>
)