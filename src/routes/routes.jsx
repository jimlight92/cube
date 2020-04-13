import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Splash from '../splash/splash'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Splash />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}