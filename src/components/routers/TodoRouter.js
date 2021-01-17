import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import {firebase} from '../../firebase/firebaseConfig'; 
import { login } from '../../actions/auth';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';

import { TodoScreen } from '../TodoApp/TodoScreen';
import { AuthRouter } from './AuthRouter';
import { LoadingGlobal } from '../LoadingGlobal';  

export const TodoRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setLoggedIn(true);
            }else {
                setLoggedIn(false);
            }

            setChecking(false);
        })

    }, [dispatch, setChecking, setLoggedIn]);

    if(checking) {
        return (
            <LoadingGlobal />
        )
    }

    return (
        <Router>
            <Switch>
                <PublicRoute path="/auth" isAuthenticated={isLoggedIn} component={AuthRouter} />
                <PrivateRoute exact isAuthenticated={isLoggedIn} path="/" component={TodoScreen} />

                <Redirect to="/auth/login" />
            </Switch>
        </Router>
    )
}


