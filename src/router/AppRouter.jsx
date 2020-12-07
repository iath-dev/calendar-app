import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CalendarScreen from '../components/calendar/CalendarScreen';
import LoginScreen from '../components/auth/LoginScreen';
import { useDispatch } from 'react-redux';
import { startRenewToken } from '../actions/authActions';

const AppRouter = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startRenewToken())
        
    }, [])

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
