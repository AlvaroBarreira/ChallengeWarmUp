import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Home, Login, EditUser } from '../Pages/index';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/" component={Login}/>
                <PrivateRoute exact path="/Home" component={Home}/>
                <PrivateRoute exact path="/Edit" component={EditUser}/>
            </Switch>
        </Router>
    )
}

export default AppRouter
