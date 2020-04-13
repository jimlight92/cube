import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Splash from '../splash/splash'
import * as games from '../games'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Splash />
                </Route>
                <Route path="/square">
                    <games.Square />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}