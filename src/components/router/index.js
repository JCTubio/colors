import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from '../../constants/routes';
import App from '../../App';
import Color from '../Color';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.yellow} >
                    <Color />
                </Route>
                <Route exact path={routes.green} >
                    <Color />
                </Route>
                <Route exact path={routes.red} >
                    <Color />
                </Route>
                <Route exact path={routes.blue} >
                    <Color />
                </Route>
                <Route exact path={routes.default} >
                    <App />
                </Route>
                <Route exact path='/' >
                    <App />
                </Route>
                <Route path='*' >
                    <Color />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
