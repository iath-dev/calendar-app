import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CalendarScreen from '../components/calendar/CalendarScreen';
import LoginScreen from '../components/auth/LoginScreen';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={CalendarScreen} />
                    <Route path="/login" exact component={LoginScreen} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
