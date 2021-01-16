import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { TodoScreen } from '../TodoApp/TodoScreen';
import { AuthRouter } from './AuthRouter';
  

export const TodoRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter} />
                <Route exact path="/" component={TodoScreen} />

                <Redirect to="/auth/login" />
            </Switch>
        </Router>
    )
}


