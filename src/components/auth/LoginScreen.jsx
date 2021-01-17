import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from '../../hooks/useForm';
import {startLoginEmailPassword, startGoogleLogin} from '../../actions/auth';
import {Link} from 'react-router-dom';

import '../styles/auth/LoginScreen.css';

export const LoginScreen = () => {

    const {loading} = useSelector(state => state.ui);
    console.log(loading);
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: "",
        password: ""
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <div className="login-screen">
            <h3>Login</h3>

            <form onSubmit={handleLogin}>
                <button className="logo-btn-google" onClick={handleGoogleLogin}>Google</button>

                <input type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange} autoComplete="off" />
                <input type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} autoComplete="off"/>

                <Link className="register-link" to="/auth/register">Create new account</Link>

                <input className="btn" type="submit" value="Login" disabled={loading}/>
            </form>

            
        </div>
    )
}
