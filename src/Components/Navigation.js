import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../screens/dashboard/Dashboard';
import Login from '../screens/login/Login';

const Navigation = ({ children }) => (
    <Router>
        <Switch>
            <Route path="/dashboard/:lang">
                <Dashboard />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    </Router>
);

export default Navigation;
